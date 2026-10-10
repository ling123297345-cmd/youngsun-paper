import fs from 'node:fs';
import path from 'node:path';
import {
  canonicalPath,
  isSpanishPath,
  localizedPath,
  stripLocalePrefix,
  supportsSpanishSeoPath,
} from '../src/localeSeo.js';
import { blogPosts } from '../src/blogData.js';
import { hasSpanishBlogPost, localizeBlogPost } from '../src/blogLocale.js';
import { extractBlogFaqs, getBlogToc, parseBlogContent } from '../src/blogContent.js';
import { getProductIndustryLinks } from '../src/productIndustryLinks.js';
import { subProducts } from '../src/data.js';

const siteUrl = 'https://youngsunpaper.com';

const distDir = path.resolve('dist');

function findHtmlPages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return findHtmlPages(fullPath);
    return entry.name === 'index.html' ? [fullPath] : [];
  });
}

function countMatches(value, pattern) {
  return value.match(pattern)?.length ?? 0;
}

function visibleTextLength(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:[a-z]+|#\d+|#x[\da-f]+);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim().length;
}

function routeFromFile(relativePath) {
  if (relativePath === 'index.html') return '/';
  return `/${path.dirname(relativePath).split(path.sep).join('/')}`;
}

function outputFileForRoute(route) {
  const normalized = route.replace(/\/$/, '') || '/';
  return normalized === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, ...normalized.split('/').filter(Boolean), 'index.html');
}

function internalRouteFromHref(href, currentRoute) {
  if (!href || href.startsWith('#') || /^(?:mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  let url;
  try {
    url = new URL(href, `${siteUrl}${canonicalPath(currentRoute)}`);
  } catch {
    return null;
  }
  if (url.origin !== siteUrl || /\.[a-z0-9]{2,8}$/i.test(url.pathname)) return null;
  return url.pathname.replace(/\/$/, '') || '/';
}

function parseJsonLd(html) {
  const scripts = [];
  const errors = [];
  const pattern = /<script\b([^>]*)type=["']application\/ld\+json["']([^>]*)>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(pattern)) {
    const attributes = `${match[1]} ${match[2]}`;
    const id = attributes.match(/\bid=["']([^"']+)["']/i)?.[1] || '';
    try {
      scripts.push({ id, data: JSON.parse(match[3].trim()) });
    } catch (error) {
      errors.push(error.message);
    }
  }
  return { scripts, errors };
}

function hasType(value, type) {
  const nodeType = value?.['@type'];
  return Array.isArray(nodeType) ? nodeType.includes(type) : nodeType === type;
}

function containsType(value, type) {
  if (!value || typeof value !== 'object') return false;
  if (hasType(value, type)) return true;
  return Object.values(value).some((child) => (
    Array.isArray(child)
      ? child.some((item) => containsType(item, type))
      : containsType(child, type)
  ));
}

function hasFields(value, fields) {
  return fields.every((field) => {
    const fieldValue = value?.[field];
    return Array.isArray(fieldValue) ? fieldValue.length > 0 : Boolean(fieldValue);
  });
}

if (!fs.existsSync(distDir)) {
  throw new Error('Static HTML validation failed: dist directory does not exist.');
}

const pages = findHtmlPages(distDir);
const failures = [];
const categoryRoutes = new Set([
  '/products/package-board',
  '/products/culture-paper',
  '/products/fancy-paper',
  '/products/food-packaging',
]);
let productPageCount = 0;
let spanishProductPageCount = 0;
let blogPostCount = 0;
let spanishBlogPostCount = 0;
let collectionPageCount = 0;
let productMoqCoverage = 0;
let productCertificationCoverage = 0;
const linkFailures = new Set();
const metadataWarnings = [];

for (const pagePath of pages) {
  const html = fs.readFileSync(pagePath, 'utf8');
  const relativePath = path.relative(distDir, pagePath) || 'index.html';
  const route = routeFromFile(relativePath);
  const spanishPage = isSpanishPath(route);
  const baseRoute = stripLocalePrefix(route);
  const expectedCanonical = `${siteUrl}${canonicalPath(baseRoute, spanishPage ? 'es' : 'en')}`;
  const canonical = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1] || '';
  const htmlLang = html.match(/<html\b[^>]*\blang=["']([^"']+)["']/i)?.[1] || '';
  const alternates = new Map(
    [...html.matchAll(/<link\s+[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*>/gi)]
      .map((match) => [match[1], match[2]]),
  );
  const hasSpanishVersion = supportsSpanishSeoPath(baseRoute);
  const { scripts, errors: schemaErrors } = parseJsonLd(html);
  const schemas = scripts.map((script) => script.data);
  const breadcrumbs = schemas.filter((schema) => hasType(schema, 'BreadcrumbList'));
  const products = schemas.filter((schema) => hasType(schema, 'Product'));
  const collections = schemas.filter((schema) => hasType(schema, 'CollectionPage'));
  const articles = schemas.filter((schema) => hasType(schema, 'BlogPosting'));
  const faqPages = schemas.filter((schema) => hasType(schema, 'FAQPage'));
  const howToPages = schemas.filter((schema) => hasType(schema, 'HowTo'));
  const scriptIds = scripts.map((script) => script.id).filter(Boolean);
  const isProductPage = baseRoute.startsWith('/products/') && !categoryRoutes.has(baseRoute);
  const isProductCollection = baseRoute === '/products' || categoryRoutes.has(baseRoute);
  const isExpectedCollection = isProductCollection || baseRoute === '/industries' || baseRoute === '/materials';
  const isBlogPost = baseRoute.startsWith('/blog/');
  const blogPost = isBlogPost ? blogPosts.find((post) => baseRoute === `/blog/${post.id}`) : null;
  const checks = {
    prerenderedContent: /<div\s+class=["']seo-prerender["']/.test(html),
    oneH1: countMatches(html, /<h1\b/gi) === 1,
    enoughText: visibleTextLength(html) >= 400,
    internalLinks: countMatches(html, /<a\s+[^>]*href=["']\//gi) >= 8,
    oneCanonical: countMatches(html, /<link\s+[^>]*rel=["']canonical["']/gi) === 1,
    canonicalMatchesRoute: canonical === expectedCanonical,
    htmlLanguageMatchesRoute: htmlLang === (spanishPage ? 'es' : 'en'),
    spanishRouteIsSupported: !spanishPage || hasSpanishVersion,
    correctHreflangSet: hasSpanishVersion
      ? alternates.size === 3
        && alternates.get('en') === `${siteUrl}${canonicalPath(baseRoute, 'en')}`
        && alternates.get('es') === `${siteUrl}${canonicalPath(baseRoute, 'es')}`
        && alternates.get('x-default') === `${siteUrl}${canonicalPath(baseRoute, 'en')}`
      : alternates.size === 0,
    description:
      /<meta\s+[^>]*name=["']description["'][^>]*content="[^"]{40,}"/i.test(html) ||
      /<meta\s+[^>]*name=["']description["'][^>]*content='[^']{40,}'/i.test(html),
    validJsonLd: schemaErrors.length === 0,
    uniqueSchemaIds: new Set(scriptIds).size === scriptIds.length,
    routeBreadcrumb:
      baseRoute === '/'
        ? breadcrumbs.length === 0
        : breadcrumbs.length === 1 && breadcrumbs[0].itemListElement?.length >= 2,
  };

  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1].replace(/<[^>]+>/g, '').trim() || '';
  const description = html.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] || '';
  if (title.length > 60 || description.length > 160) {
    metadataWarnings.push(`${relativePath}: title ${title.length} chars, description ${description.length} chars`);
  }

  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)) {
    const href = match[1].trim();
    const internalRoute = internalRouteFromHref(href, route);
    if (href.startsWith('./') && !/\.[a-z0-9]{2,8}(?:[?#].*)?$/i.test(href)) {
      linkFailures.add(`${relativePath}: page-relative link "${href}" should use a root-relative canonical path.`);
      continue;
    }
    if (internalRoute && !fs.existsSync(outputFileForRoute(internalRoute))) {
      linkFailures.add(`${relativePath}: internal link "${href}" resolves to missing route "${internalRoute}".`);
    }
  }

  if (isProductPage) {
    if (spanishPage) spanishProductPageCount += 1;
    else productPageCount += 1;
    const product = products[0];
    const propertyNames = (product?.additionalProperty || []).map((item) => item.name);
    checks.oneProductSchema = products.length === 1;
    checks.productCoreFields = hasFields(product, [
      '@id',
      'name',
      'description',
      'url',
      'image',
      'category',
      'brand',
      'additionalProperty',
    ]);
    checks.productLanguage = product?.inLanguage === (spanishPage ? 'es' : 'en');
    checks.productUrlMatchesRoute = product?.url === expectedCanonical;
    if (!spanishPage && propertyNames.includes('Minimum order quantity')) productMoqCoverage += 1;
    if (!spanishPage && propertyNames.includes('Certification and compliance availability')) {
      productCertificationCoverage += 1;
    }
    checks.noInventedOffer = !product?.offers;
  } else {
    checks.noUnexpectedProductSchema = products.length === 0;
  }

  if (isExpectedCollection) {
    if (isProductCollection && !spanishPage) collectionPageCount += 1;
    const collection = collections[0];
    checks.oneCollectionPageSchema = collections.length === 1;
    checks.collectionCoreFields = hasFields(collection, ['@id', 'name', 'description', 'url', 'mainEntity']);
    checks.collectionContainsItemList = containsType(collection?.mainEntity, 'ItemList');
    checks.collectionHasProducts = collection?.mainEntity?.numberOfItems > 0
      && collection.mainEntity.itemListElement?.length === collection.mainEntity.numberOfItems;
  } else {
    checks.noUnexpectedCollectionPage = collections.length === 0;
  }

  const productId = /^\/products\/([^/]+)$/.exec(baseRoute)?.[1];
  if (productId && subProducts[productId]) {
    const expectedIndustryLinks = getProductIndustryLinks(productId)
      .map((industry) => localizedPath(`/industries/${industry.id}`, spanishPage ? 'es' : 'en'));
    checks.productIndustryLinks = expectedIndustryLinks.length > 0
      && expectedIndustryLinks.every((href) => html.includes(`href="${href}"`));
  }

  if (isBlogPost) {
    if (spanishPage) spanishBlogPostCount += 1;
    else blogPostCount += 1;
    const article = articles[0];
    checks.oneBlogPostingSchema = articles.length === 1;
    checks.articleCoreFields = hasFields(article, [
      '@id',
      'headline',
      'description',
      'image',
      'datePublished',
      'dateModified',
      'author',
      'publisher',
      'mainEntityOfPage',
    ]);
    checks.articleDateFormat = /^\d{4}-\d{2}-\d{2}/.test(article?.datePublished || '');
    const localizedBlogPost = localizeBlogPost(blogPost, spanishPage ? 'es' : 'en');
    const parsedBlocks = parseBlogContent(localizedBlogPost?.content || '');
    const expectedFaqs = extractBlogFaqs(parsedBlocks);
    const expectedToc = getBlogToc(parsedBlocks);
    const expectsTable = parsedBlocks.some((block) => block.type === 'table');
    checks.relatedArticles = spanishPage || countMatches(html, /<a\s+[^>]*href=["']\/blog\/[^"']+["']/gi) >= 3;
    checks.semanticTable = !expectsTable || /<table>/.test(html);
    checks.tableOfContents = expectedToc.length <= 2 || /aria-label=["'](?:Table of contents|Contenido)["']/.test(html);
    checks.blogFaqSchema = expectedFaqs.length
      ? faqPages.length === 1 && faqPages[0].mainEntity?.length === expectedFaqs.length
      : faqPages.length === 0;
  } else {
    checks.noUnexpectedBlogPosting = articles.length === 0;
  }

  if (baseRoute === '/faq') {
    const faqPage = faqPages[0];
    checks.oneFaqPageSchema = faqPages.length === 1;
    checks.faqSchemaCoverage = (faqPage?.mainEntity?.length || 0) >= 10;
    checks.visibleFaqCoverage = countMatches(html, /<section><h2>/gi) >= 10;
  } else if (!isBlogPost) {
    checks.noUnexpectedFaqPage = faqPages.length === 0;
  }

  if (baseRoute === '/how-to-order') {
    checks.oneHowToSchema = howToPages.length === 1;
    checks.howToStepCoverage = howToPages[0]?.step?.length === 6;
  } else {
    checks.noUnexpectedHowTo = howToPages.length === 0;
  }

  if (baseRoute === '/industries') {
    const prefix = spanishPage ? '/es/industries/' : '/industries/';
    checks.industryHubLinks = [
      'packaging-printing',
      'food-beverage',
      'luxury-cosmetics',
      'publishing-stationery',
      'hang-tags-labels',
      'gift-wrapping-decoration',
    ].every((id) => html.includes(`href="${prefix}${id}"`));
  }

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  if (failedChecks.length) {
    failures.push(`${relativePath}: ${failedChecks.join(', ')}`);
  }
}

const expectedProductPageCount = Object.keys(subProducts).length;
if (productPageCount !== expectedProductPageCount) {
  failures.unshift(`Expected ${expectedProductPageCount} product detail pages, found ${productPageCount}.`);
}

if (spanishProductPageCount !== expectedProductPageCount) {
  failures.unshift(`Expected ${expectedProductPageCount} Spanish product detail pages, found ${spanishProductPageCount}.`);
}

if (collectionPageCount !== categoryRoutes.size + 1) {
  failures.unshift(`Expected ${categoryRoutes.size + 1} English product collection pages, found ${collectionPageCount}.`);
}

if (blogPostCount !== blogPosts.length) {
  failures.unshift(`Expected ${blogPosts.length} blog posts, found ${blogPostCount}.`);
}

const expectedSpanishBlogPostCount = blogPosts.filter(hasSpanishBlogPost).length;
if (spanishBlogPostCount !== expectedSpanishBlogPostCount) {
  failures.unshift(`Expected ${expectedSpanishBlogPostCount} Spanish blog posts, found ${spanishBlogPostCount}.`);
}

if (pages.length < 50) {
  failures.unshift(`Expected at least 50 generated pages, found ${pages.length}.`);
}

const sitemapPath = path.join(distDir, 'sitemap.xml');
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
if (!sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) {
  failures.unshift('Sitemap is missing the xhtml namespace required for hreflang links.');
}
if (!sitemap.includes('<loc>https://youngsunpaper.com/es/</loc>')) {
  failures.unshift('Sitemap is missing the Spanish homepage.');
}

for (const post of blogPosts) {
  const expectedLastmod = post.dateModified || post.date;
  const languages = hasSpanishBlogPost(post) ? ['en', 'es'] : ['en'];

  for (const lang of languages) {
    const url = `${siteUrl}${canonicalPath(`/blog/${post.id}`, lang)}`;
    const entryStart = sitemap.indexOf(`<loc>${url}</loc>`);
    const entryEnd = entryStart === -1 ? -1 : sitemap.indexOf('</url>', entryStart);
    const entry = entryEnd === -1 ? '' : sitemap.slice(entryStart, entryEnd);

    if (!entry.includes(`<lastmod>${expectedLastmod}</lastmod>`)) {
      failures.unshift(`Sitemap lastmod mismatch for ${url}; expected ${expectedLastmod}.`);
    }
  }
}

failures.push(...linkFailures);

if (failures.length) {
  console.error('Static HTML validation failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Static HTML validation passed for ${pages.length} pages.`);
console.log(`Product schema coverage: ${productPageCount}/${productPageCount}.`);
console.log(`Spanish product schema coverage: ${spanishProductPageCount}/${spanishProductPageCount}.`);
console.log(`Product collection schema coverage: ${collectionPageCount}/${collectionPageCount}.`);
console.log(`Product MOQ coverage from verified source data: ${productMoqCoverage}/${productPageCount}.`);
console.log(`Product certification field coverage: ${productCertificationCoverage}/${productPageCount}.`);
console.log(`BlogPosting schema coverage: ${blogPostCount}/${blogPostCount}.`);
console.log('Blog sitemap lastmod values match each article publication or modification date.');
console.log('FAQPage schema coverage: site FAQ pages and matching blog FAQ sections validated.');
console.log('Blog tables, contents navigation and related article links validated.');
console.log('HowTo schema and English/Spanish industry hub links validated.');
console.log(`Internal route links validated: no broken or page-relative route links across ${pages.length} pages.`);
if (metadataWarnings.length) {
  console.log(`Metadata length review: ${metadataWarnings.length} pages exceed the 60-character title or 160-character description target.`);
}

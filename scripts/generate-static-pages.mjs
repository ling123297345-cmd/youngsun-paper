import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { subProducts } from "../src/data.js";
import { blogPosts } from "../src/blogData.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const indexPath = path.join(distDir, "index.html");
const siteUrl = "https://youngsunpaper.com";
const socialImage = `${siteUrl}/images/hero/youngsun-paper-hero-banner-hd.jpg`;

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html is missing. Run the Vite build first.");
}

const baseHtml = fs.readFileSync(indexPath, "utf8");

const staticPages = [
  {
    route: "/",
    title: "YOUNGSUN PAPER | China Paper & Paperboard Supplier",
    description:
      "YOUNGSUN PAPER is a paper and paperboard manufacturer and exporter in Dongguan, China. Source grey board, black paper, kraft paper, fancy paper, culture paper, and food packaging paper.",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    route: "/products",
    title: "Paper & Paperboard Products | YOUNGSUN PAPER",
    description:
      "Explore package board, culture paper, fancy paper, and food packaging paper from YOUNGSUN PAPER. Compare specifications, applications, certifications, and export supply options.",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    route: "/about",
    title: "About YOUNGSUN PAPER | Paper Supplier Since 2002",
    description:
      "Learn about YOUNGSUN PAPER, a Dongguan paper manufacturer and exporter established in 2002, serving international packaging, printing, and converting buyers.",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    route: "/contact",
    title: "Contact YOUNGSUN PAPER | Request a Paper Quote",
    description:
      "Request paper and paperboard prices, samples, specifications, and shipping information from YOUNGSUN PAPER. Email Alice@yspaper.com or WhatsApp +86 13713459656.",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    route: "/blog",
    title: "Paper Buying Guides & Packaging Insights | YOUNGSUN PAPER",
    description:
      "Read practical paper buying guides covering paperboard selection, rigid packaging, kraft paper, fancy paper, and food packaging paper.",
    priority: "0.8",
    changefreq: "weekly",
  },
  {
    route: "/fancy-paper-collection",
    title: "Fancy Paper Texture Collection | YOUNGSUN PAPER",
    description:
      "Explore premium fancy paper textures including embossed, pearlescent, leather, linen, and decorative paper for luxury packaging and brand applications.",
    priority: "0.8",
    changefreq: "monthly",
  },
];

const productPages = Object.entries(subProducts).map(([id, product]) => ({
  route: `/products/${id}`,
  title: `${product.name} Supplier | YOUNGSUN PAPER`,
  description: truncate(
    `Source ${product.name.toLowerCase()} from YOUNGSUN PAPER in China. ${product.tagline} Custom sizes, bulk export supply, technical support, and product samples are available.`,
    158,
  ),
  image: `${siteUrl}/${String(product.image).replace(/^\//, "")}`,
  priority: "0.7",
  changefreq: "monthly",
}));

const blogPages = blogPosts.map((post) => ({
  route: `/blog/${post.id}`,
  title: normalizeTitle(post.seoTitle || post.title),
  description: truncate(post.metaDescription || post.excerpt, 158),
  image: post.image ? `${siteUrl}/${String(post.image).replace(/^\//, "")}` : socialImage,
  priority: "0.6",
  changefreq: "monthly",
}));

const pages = [...staticPages, ...productPages, ...blogPages];

for (const page of pages) {
  const html = buildHtml(baseHtml, page);
  if (page.route === "/") {
    fs.writeFileSync(indexPath, html, "utf8");
    continue;
  }

  const outputDir = path.join(distDir, ...page.route.split("/").filter(Boolean));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

fs.writeFileSync(path.join(distDir, "CNAME"), "youngsunpaper.com\n", "utf8");
fs.writeFileSync(path.join(distDir, "sitemap.xml"), createSitemap(pages), "utf8");

console.log(`Generated ${pages.length} crawlable HTML pages with route-specific SEO metadata.`);

function buildHtml(source, page) {
  const url = `${siteUrl}${page.route === "/" ? "/" : page.route}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const image = escapeHtml(page.image || socialImage);

  let html = source;
  html = replaceOrInsert(html, /<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = replaceOrInsert(html, /<meta\s+name=["']description["'][\s\S]*?>/i, `<meta name="description" content="${description}" />`);
  html = replaceOrInsert(html, /<link\s+rel=["']canonical["'][\s\S]*?>/i, `<link rel="canonical" href="${url}" />`);
  html = replaceOrInsert(html, /<meta\s+property=["']og:title["'][\s\S]*?>/i, `<meta property="og:title" content="${title}" />`);
  html = replaceOrInsert(html, /<meta\s+property=["']og:description["'][\s\S]*?>/i, `<meta property="og:description" content="${description}" />`);
  html = replaceOrInsert(html, /<meta\s+property=["']og:url["'][\s\S]*?>/i, `<meta property="og:url" content="${url}" />`);
  html = replaceOrInsert(html, /<meta\s+property=["']og:image["'][\s\S]*?>/i, `<meta property="og:image" content="${image}" />`);
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:title["'][\s\S]*?>/i, `<meta name="twitter:title" content="${title}" />`);
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:description["'][\s\S]*?>/i, `<meta name="twitter:description" content="${description}" />`);
  html = replaceOrInsert(html, /<meta\s+name=["']twitter:image["'][\s\S]*?>/i, `<meta name="twitter:image" content="${image}" />`);

  if (page.route !== "/") {
    html = html
      .replaceAll('src="./assets/', 'src="/assets/')
      .replaceAll('href="./assets/', 'href="/assets/')
      .replaceAll('href="./favicon.', 'href="/favicon.');
  }

  return html;
}

function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `  ${replacement}\n  </head>`);
}

function createSitemap(items) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = items
    .map((page) => {
      const url = `${siteUrl}${page.route === "/" ? "/" : page.route}`;
      return `  <url>\n    <loc>${escapeXml(url)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function normalizeTitle(value) {
  const clean = String(value).replace(/\s*\|\s*YOUNGSUN PAPER\s*$/i, "").trim();
  return `${clean} | YOUNGSUN PAPER`;
}

function truncate(value, maxLength) {
  const text = String(value).replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).replace(/\s+\S*$/, "")}…`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeXml(value) {
  return escapeHtml(value).replaceAll("'", "&apos;");
}

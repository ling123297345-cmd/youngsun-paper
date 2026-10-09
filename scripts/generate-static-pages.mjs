import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { localizeFaqItems, productCategories, subProducts } from "../src/data.js";
import { productEs } from "../src/productEs.js";
import { blogPosts } from "../src/blogData.js";
import { hasSpanishBlogPost, localizeBlogPost } from "../src/blogLocale.js";
import {
  extractBlogFaqs,
  getBlogToc,
  getRelatedBlogPosts,
  parseBlogContent,
} from "../src/blogContent.js";
import { industryChannels } from "../src/industryApplications.js";
import { getProductIndustryLinks } from "../src/productIndustryLinks.js";
import { industryDetailContent, industryHeroImages } from "../src/industryDetailContent.js";
import { buyerGuides, pillarArticles, pulpHub } from "../src/pulpMaterialsData.js";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createFaqSchema,
  createHowToSchema,
  createOrganizationSchema,
  createProductSchema,
  createWebsiteSchema,
} from "../src/schemaData.js";
import {
  canonicalPath,
  getSpanishCategoryTitle,
  getSpanishSeoMeta,
  localizedPath,
  supportsSpanishSeoPath,
} from "../src/localeSeo.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const indexPath = path.join(distDir, "index.html");
const siteUrl = "https://youngsunpaper.com";
const socialImage = `${siteUrl}/images/hero/youngsun-paper-manufacturer-hero-2026.webp`;

const resourceGuides = [
  {
    title: { en: "Paper GSM and Thickness Guide", es: "Guía de GSM y Espesor" },
    desc: { en: "Compare basis weight, caliper, microns and points before setting a specification.", es: "Compare gramaje, calibre, micras y puntos antes de definir la especificación." },
    href: "/blog/paper-thickness-guide-gsm-caliper-points",
  },
  {
    title: { en: "Paper Weight and Container Planning", es: "Peso de Papel y Planificación de Contenedor" },
    desc: { en: "Estimate sheet weight, order tonnage and practical container loading.", es: "Calcule peso por hoja, tonelaje y carga práctica del contenedor." },
    href: "/blog/how-to-calculate-paper-weight-container-shipping",
  },
  {
    title: { en: "Certification and Compliance Guide", es: "Guía de Certificación y Cumplimiento" },
    desc: { en: "Understand FSC, food-contact and third-party documentation before ordering.", es: "Comprenda la documentación FSC, alimentaria y de terceros antes del pedido." },
    href: "/blog/sustainable-paper-fsc-recycled-compliance-guide",
  },
  {
    title: { en: "Ocean Freight for Paper Buyers", es: "Transporte Marítimo para Compradores" },
    desc: { en: "Review packing, moisture control, container types and export documents.", es: "Revise embalaje, humedad, contenedores y documentos de exportación." },
    href: "/blog/ocean-freight-paper-logistics-guide",
  },
  {
    title: { en: "Paper Quote Comparison Checklist", es: "Lista para Comparar Cotizaciones" },
    desc: { en: "Compare tolerances, packing, terms and landed cost instead of price per ton alone.", es: "Compare tolerancias, embalaje, condiciones y costo total, no solo precio por tonelada." },
    href: "/blog/how-to-compare-paper-quotes-from-different-suppliers",
  },
  {
    title: { en: "Paper Buyer's Glossary", es: "Glosario para Compradores de Papel" },
    desc: { en: "Learn the sourcing terms used in specifications, tests, converting and logistics.", es: "Conozca los términos usados en especificaciones, ensayos, conversión y logística." },
    href: "/blog/paper-glossary-terms-buyers-should-know",
  },
];

const qualityDocumentTypes = [
  {
    title: { en: "FSC Documentation", es: "Documentación FSC" },
    desc: { en: "FSC claims and supporting documents are confirmed for the selected grade, supplying mill and order.", es: "Las declaraciones FSC se confirman para el grado, molino proveedor y pedido seleccionados." },
  },
  {
    title: { en: "Independent Testing", es: "Ensayos Independientes" },
    desc: { en: "Available inspection and laboratory options are matched to the specification and destination market.", es: "Las opciones de inspección y laboratorio se adaptan a la especificación y al mercado de destino." },
  },
  {
    title: { en: "Mill and Supplier Records", es: "Registros del Molino y Proveedor" },
    desc: { en: "Applicable management-system and mill documents are checked for issuing entity and validity.", es: "Los documentos aplicables se revisan por entidad emisora y vigencia." },
  },
  {
    title: { en: "Food-Contact Support", es: "Soporte para Contacto Alimentario" },
    desc: { en: "Declarations or reports are confirmed against the intended food use and destination market.", es: "Las declaraciones o informes se confirman según el uso alimentario y mercado de destino." },
  },
];

const qualityInspectionSteps = [
  {
    name: { en: "Incoming material review", es: "Revisión de material entrante" },
    text: { en: "Check the supplied base paper or board against the agreed GSM, moisture, caliper, shade and visible-defect requirements.", es: "Comprobar el papel o cartón base frente a los requisitos acordados de GSM, humedad, calibre, tono y defectos visibles." },
  },
  {
    name: { en: "In-process checks", es: "Controles durante el proceso" },
    text: { en: "Monitor width, cut quality, reel tension, sheet squareness and surface condition during slitting, sheeting or converting.", es: "Controlar ancho, corte, tensión, escuadra y superficie durante corte, bobinado o conversión." },
  },
  {
    name: { en: "Finished-product inspection", es: "Inspección de producto terminado" },
    text: { en: "Review finished sheets or reels and sample the measurable properties listed in the approved order specification.", es: "Revisar hojas o bobinas terminadas y medir las propiedades indicadas en la especificación aprobada." },
  },
  {
    name: { en: "Pre-shipment verification", es: "Verificación previa al envío" },
    text: { en: "Confirm quantity, labels, packing integrity, moisture protection and required shipping documents before loading.", es: "Confirmar cantidad, etiquetas, embalaje, protección contra humedad y documentos antes de cargar." },
  },
  {
    name: { en: "Optional third-party verification", es: "Verificación opcional de terceros" },
    text: { en: "Discuss independent inspection or testing when the buyer or destination market requires additional evidence.", es: "Acordar inspección o ensayo independiente cuando el comprador o el mercado requiera evidencia adicional." },
  },
];

const howToOrderSteps = [
  {
    name: { en: "Define the paper specification", es: "Definir la especificación" },
    text: { en: "Send the product grade, GSM or thickness, sheet size or reel width, quantity, application, printing or converting process, destination port and target date.", es: "Envíe grado, GSM o espesor, tamaño o ancho de bobina, cantidad, aplicación, proceso, puerto y fecha objetivo." },
    tip: { en: "Include the destination port so the team can discuss a suitable delivery term.", es: "Incluya el puerto de destino para evaluar el término de entrega." },
  },
  {
    name: { en: "Review the quotation", es: "Revisar la cotización" },
    text: { en: "Check that the quotation records the exact grade, dimensions, quantity, packing, price basis, payment terms, delivery term and estimated lead time.", es: "Compruebe grado, medidas, cantidad, embalaje, precio, pago, entrega y plazo estimado." },
  },
  {
    name: { en: "Approve a representative sample", es: "Aprobar una muestra representativa" },
    text: { en: "Evaluate the sample under the intended printing, cutting, folding, gluing, forming or wrapping conditions before bulk production.", es: "Evalúe la muestra en las condiciones reales de impresión, corte, plegado, pegado, formado o envoltura." },
    tip: { en: "Standard sample material is supplied by YOUNGSUN; international courier cost is paid by the customer.", es: "YOUNGSUN cubre la muestra estándar; el cliente paga el transporte internacional." },
  },
  {
    name: { en: "Confirm production and quality requirements", es: "Confirmar producción y calidad" },
    text: { en: "Approve the order specification and any required tolerances, labels, packing marks, test reports or inspection arrangement before production.", es: "Apruebe especificación, tolerancias, etiquetas, marcas, informes o inspección antes de producir." },
  },
  {
    name: { en: "Prepare shipping and export documents", es: "Preparar envío y documentos" },
    text: { en: "Confirm packing, container plan, commercial invoice, packing list, bill of lading information, certificate of origin and other agreed documents.", es: "Confirme embalaje, contenedor, factura, lista de empaque, conocimiento de embarque, origen y otros documentos acordados." },
  },
  {
    name: { en: "Receive, inspect and reorder", es: "Recibir, inspeccionar y repetir pedido" },
    text: { en: "Inspect the shipment on arrival, record any quality feedback by batch, and use the approved specification as the reference for repeat orders.", es: "Inspeccione al recibir, registre comentarios por lote y use la especificación aprobada para repetir pedidos." },
  },
];

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html is missing. Run the Vite build first.");
}

const baseHtml = fs.readFileSync(indexPath, "utf8");

const staticPages = [
  {
    route: "/",
    title: "Paper & Paperboard Manufacturer in China | YOUNGSUN",
    description:
      "China paper and paperboard manufacturer supplying grey board, black paper, folding box board, kraft and specialty paper for packaging and printing.",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    route: "/products",
    title: "Paper & Board Products | YOUNGSUN",
    description:
      "Explore 31 paper and board grades across package board, culture paper, fancy paper and food packaging paper. Compare specifications and request samples.",
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
    title: "Blog — Paper Industry Insights | YOUNGSUN",
    description:
      "Expert guides on paper selection, sustainability, importing from China, and packaging design for buyers and procurement professionals.",
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
  {
    route: "/industries",
    title: "Paper Solutions by Industry | YOUNGSUN PAPER",
    description:
      "Explore paper solutions for packaging, food service, luxury goods, publishing, hang tags and gift presentation. Compare suitable grades and applications.",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    route: "/materials",
    title: "Paper & Board Materials Library | YOUNGSUN PAPER",
    description:
      "Explore paper and board material families and compare softwood, hardwood, bamboo and cotton pulp for strength, printing, packaging and converting.",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    route: "/materials/pulp",
    title: pulpHub.seoTitle,
    description: pulpHub.metaDescription,
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    route: "/processing",
    title: "Paper Processing & Converting Services | YOUNGSUN",
    description:
      "Value-added paper processing: slitting, die-cutting, lamination, printing, embossing, and export packing. Custom converting for exact specifications.",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    route: "/quality",
    title: "Paper Quality Assurance & Certifications | YOUNGSUN",
    description:
      "Review YOUNGSUN PAPER quality controls, inspection procedures, certifications, testing support, and export documentation for paper orders.",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    route: "/faq",
    title: "Frequently Asked Questions | YOUNGSUN",
    description:
      "Find answers to common questions about paper sourcing, minimum orders, shipping, certifications, samples, and payment from YOUNGSUN PAPER.",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    route: "/how-to-order",
    title: "How to Order — Paper Sourcing Process | YOUNGSUN",
    description:
      "Your step-by-step guide to ordering paper and board from YOUNGSUN PAPER, from specifications and samples through production, shipping, and delivery.",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    route: "/resources",
    title: "Paper Buying Resources & Downloads | YOUNGSUN",
    description:
      "Download paper and board resources including product information, specification sheets, compliance guides, and sourcing materials from YOUNGSUN PAPER.",
    priority: "0.7",
    changefreq: "monthly",
  },
];

const industryPages = industryChannels.map((industry) => ({
  route: `/industries/${industry.id}`,
  title: `${industry.title.en} Paper Solutions | YOUNGSUN PAPER`,
  description: truncate(industryDetailContent[industry.id].overview.en, 158),
  image: `${siteUrl}${industryHeroImages[industry.id]}`,
  priority: "0.8",
  changefreq: "monthly",
}));

const productCategoryPages = productCategories.map((category) => ({
  route: `/products/${category.id}`,
  title: `${category.title} Products | YOUNGSUN PAPER`,
  description: truncate(
    `${category.summary} Compare specifications and request samples or an export quotation from YOUNGSUN PAPER.`,
    158,
  ),
  image: `${siteUrl}/${String(category.image).replace(/^\//, "")}`,
  priority: "0.8",
  changefreq: "weekly",
}));

const materialArticlePages = [...pillarArticles, ...buyerGuides].map((article) => ({
  route: `/materials/${article.id}`,
  title: article.seoTitle,
  description: article.metaDescription,
  priority: "0.6",
  changefreq: "monthly",
}));

const productPages = Object.entries(subProducts).map(([id, product]) => ({
  route: `/products/${id}`,
  title: normalizeTitle(product.seoTitle || `${product.name} Supplier in China`),
  description:
    product.metaDescription ||
    truncate(
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

const pages = [
  ...staticPages,
  ...productCategoryPages,
  ...industryPages,
  ...materialArticlePages,
  ...productPages,
  ...blogPages,
];

for (const page of pages) {
  const html = buildHtml(baseHtml, page, "en");
  if (page.route === "/") {
    fs.writeFileSync(indexPath, html, "utf8");
  } else {
    writeRouteFile(page.route, html);
  }

  if (supportsSpanishSeoPath(page.route)) {
    writeRouteFile(localizedPath(page.route, "es"), buildHtml(baseHtml, page, "es"));
  }
}

fs.writeFileSync(path.join(distDir, "CNAME"), "youngsunpaper.com\n", "utf8");
fs.writeFileSync(path.join(distDir, "sitemap.xml"), createSitemap(pages), "utf8");

const spanishPageCount = pages.filter((page) => supportsSpanishSeoPath(page.route)).length;
console.log(`Generated ${pages.length} English and ${spanishPageCount} Spanish crawlable HTML pages with route-specific SEO metadata.`);

function writeRouteFile(route, html) {
  const outputDir = path.join(distDir, ...route.split("/").filter(Boolean));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

function buildHtml(source, page, lang) {
  const route = localizedPath(page.route, lang);
  const url = `${siteUrl}${canonicalPath(page.route, lang)}`;
  const localizedMeta = lang === "es"
    ? getSpanishSeoMeta(page.route, page)
    : page;
  const title = escapeHtml(normalizeTitle(localizedMeta.title));
  const description = escapeHtml(truncate(localizedMeta.description, 155));
  const image = escapeHtml(page.image || socialImage);
  const hasSpanishVersion = supportsSpanishSeoPath(page.route);

  let html = source;
  html = html.replace(/<html\b[^>]*>/i, `<html lang="${lang}">`);
  if (page.route === "/") {
    const heroPreload = '<link rel="preload" as="image" href="/images/hero/youngsun-paper-manufacturer-hero-2026.webp" imagesrcset="/images/hero/youngsun-paper-manufacturer-hero-2026-960.webp 960w, /images/hero/youngsun-paper-manufacturer-hero-2026-1440.webp 1440w, /images/hero/youngsun-paper-manufacturer-hero-2026.webp 1920w" imagesizes="100vw" type="image/webp" fetchpriority="high" />';
    html = html.replace("</head>", `  ${heroPreload}\n  </head>`);
  }
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
  html = replaceOrInsert(html, /<meta\s+property=["']og:locale["'][\s\S]*?>/i, `<meta property="og:locale" content="${lang === "es" ? "es_ES" : "en_US"}" />`);
  html = html.replace(/\s*<meta\s+property=["']og:locale:alternate["'][\s\S]*?>/gi, "");
  html = html.replace(/\s*<link\s+rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*>/gi, "");
  if (hasSpanishVersion) {
    const englishUrl = `${siteUrl}${canonicalPath(page.route, "en")}`;
    const spanishUrl = `${siteUrl}${canonicalPath(page.route, "es")}`;
    const alternates = [
      `<meta property="og:locale:alternate" content="${lang === "es" ? "en_US" : "es_ES"}" />`,
      `<link rel="alternate" hreflang="en" href="${englishUrl}" />`,
      `<link rel="alternate" hreflang="es" href="${spanishUrl}" />`,
      `<link rel="alternate" hreflang="x-default" href="${englishUrl}" />`,
    ].join("\n    ");
    html = html.replace("</head>", `    ${alternates}\n  </head>`);
  }
  html = html.replace(
    /\s*<script\b(?=[^>]*type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi,
    "",
  );
  html = html.replace("</head>", `${renderRouteSchemas(page, lang)}\n  </head>`);
  html = html.replace(
    /<div\s+id=["']root["'][^>]*>[\s\S]*?<\/div>/i,
    `<div id="root">${renderStaticContent(page, lang)}</div>`,
  );

  if (route !== "/") {
    html = html
      .replaceAll('src="./assets/', 'src="/assets/')
      .replaceAll('href="./assets/', 'href="/assets/')
      .replaceAll('src="./images/', 'src="/images/')
      .replaceAll('href="./images/', 'href="/images/')
      .replaceAll('href="./favicon.', 'href="/favicon.')
      .replaceAll('href="./apple-touch-icon.png"', 'href="/apple-touch-icon.png"')
      .replaceAll('src="./apple-touch-icon.png"', 'src="/apple-touch-icon.png"')
      .replaceAll('href="./icon-48.png"', 'href="/icon-48.png"')
      .replaceAll('href="./icon-512.png"', 'href="/icon-512.png"')
      .replaceAll('href="./icon-192.png"', 'href="/icon-192.png"')
      .replaceAll('href="./manifest.json"', 'href="/manifest.json"')
      .replaceAll('content="./icon-144.png"', 'content="/icon-144.png"');
  }

  return html;
}

function renderRouteSchemas(page, lang) {
  const schemas = [];
  if (page.route === "/") {
    schemas.push(["organization-schema", createOrganizationSchema()]);
    if (lang === "en") schemas.push(["website-schema", createWebsiteSchema()]);
  }

  const productEntry = Object.entries(subProducts).find(([id]) => page.route === `/products/${id}`);
  if (productEntry) {
    schemas.push(["product-schema", createProductSchema(productEntry[1], {
      lang,
      translation: productEs[productEntry[0]],
    })]);
  }

  const productCategory = productCategories.find((item) => page.route === `/products/${item.id}`);
  if (page.route === "/products" || productCategory) {
    const collectionProducts = Object.values(subProducts)
      .filter((product) => !productCategory || product.category === productCategory.id);
    const collectionMeta = lang === "es" ? getSpanishSeoMeta(page.route, page) : page;
    schemas.push(["collection-schema", createCollectionPageSchema({
      name: collectionMeta.title.replace(/\s*\|.*$/, ""),
      description: collectionMeta.description,
      url: localizedPath(page.route, lang),
      lang,
      items: collectionProducts.map((product) => ({
        name: product.name,
        url: localizedPath(`/products/${product.id}`, lang),
        image: product.image,
      })),
    })]);
  }

  const post = blogPosts.find((item) => page.route === `/blog/${item.id}`);
  if (post && (lang === "en" || hasSpanishBlogPost(post))) {
    const localizedPost = localizeBlogPost(post, lang);
    schemas.push(["article-schema", createArticleSchema(localizedPost, { lang })]);
    const faqItems = extractBlogFaqs(localizedPost.content);
    if (faqItems.length) schemas.push(["faq-schema", createFaqSchema(faqItems)]);
  }

  if (page.route === "/faq") {
    schemas.push(["faq-schema", createFaqSchema(localizeFaqItems(lang))]);
  }

  if (page.route === "/how-to-order") {
    schemas.push(["howto-schema", createHowToSchema({
      title: lang === "es" ? "Cómo Comprar Papel y Cartón" : "How to Order Paper and Paperboard",
      description: lang === "es"
        ? "Proceso paso a paso para comprar papel y cartón de YOUNGSUN PAPER."
        : "A step-by-step process for sourcing paper and paperboard from YOUNGSUN PAPER.",
      steps: howToOrderSteps.map((step) => ({
        name: step.name[lang],
        text: step.text[lang],
        tip: step.tip?.[lang],
      })),
    })]);
  }

  const breadcrumbItems = createBreadcrumbItems(page).map((item) => ({
    ...item,
    name: lang === "es" && item.url === "/"
      ? "Inicio"
      : lang === "es" && post && item.url === page.route
        ? post.titleEs
        : item.name,
    url: localizedPath(item.url, lang),
  }));
  const breadcrumb = createBreadcrumbSchema(breadcrumbItems);
  if (breadcrumb) schemas.push(["route-breadcrumb-schema", breadcrumb]);

  return schemas
    .filter(([, data]) => data)
    .map(([id, data]) => `\n    <script id="${id}" type="application/ld+json">${serializeJsonLd(data)}</script>`)
    .join("");
}

function createBreadcrumbItems(page) {
  if (page.route === "/") return [];
  const home = { name: "Home", url: "/" };

  if (page.route === "/products") {
    return [home, { name: "Products", url: "/products" }];
  }
  const category = productCategories.find((item) => page.route === `/products/${item.id}`);
  if (category) {
    return [
      home,
      { name: "Products", url: "/products" },
      { name: category.title, url: page.route },
    ];
  }
  const productEntry = Object.entries(subProducts).find(([id]) => page.route === `/products/${id}`);
  if (productEntry) {
    const product = productEntry[1];
    return [
      home,
      { name: "Products", url: "/products" },
      { name: categoryName(product.category), url: `/products/${product.category}` },
      { name: product.name, url: page.route },
    ];
  }

  if (page.route === "/fancy-paper-collection") {
    return [
      home,
      { name: "Products", url: "/products" },
      { name: "Fancy Paper", url: "/products/fancy-paper" },
      { name: "Texture Collection", url: page.route },
    ];
  }

  if (page.route === "/blog") return [home, { name: "Blog", url: "/blog" }];
  const post = blogPosts.find((item) => page.route === `/blog/${item.id}`);
  if (post) {
    return [
      home,
      { name: "Blog", url: "/blog" },
      { name: post.title, url: page.route },
    ];
  }

  if (page.route === "/industries") {
    return [home, { name: "Industries", url: "/industries" }];
  }
  const industry = industryChannels.find((item) => page.route === `/industries/${item.id}`);
  if (industry) {
    return [
      home,
      { name: "Industries", url: "/industries" },
      { name: industry.title.en, url: page.route },
    ];
  }

  if (page.route === "/materials") {
    return [home, { name: "Materials", url: "/materials" }];
  }
  if (page.route === "/materials/pulp") {
    return [
      home,
      { name: "Materials", url: "/materials" },
      { name: "Paper Pulp Materials", url: "/materials/pulp" },
    ];
  }
  const materialArticle = [...pillarArticles, ...buyerGuides].find(
    (item) => page.route === `/materials/${item.id}`,
  );
  if (materialArticle) {
    return [
      home,
      { name: "Materials", url: "/materials" },
      { name: materialArticle.title, url: page.route },
    ];
  }

  return [
    home,
    { name: page.title.replace(/\s*\|.*$/, "").replace(/\s*—\s*YOUNGSUN.*$/, ""), url: page.route },
  ];
}

function serializeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) return html.replace(pattern, replacement);
  return html.replace("</head>", `  ${replacement}\n  </head>`);
}

function createSitemap(items) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemapPages = items.flatMap((page) => supportsSpanishSeoPath(page.route)
    ? [{ page, lang: "en" }, { page, lang: "es" }]
    : [{ page, lang: "en" }]);
  const urls = sitemapPages
    .map(({ page, lang }) => {
      const url = `${siteUrl}${canonicalPath(page.route, lang)}`;
      const alternates = supportsSpanishSeoPath(page.route)
        ? `\n    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(`${siteUrl}${canonicalPath(page.route, "en")}`)}" />\n    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(`${siteUrl}${canonicalPath(page.route, "es")}`)}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${siteUrl}${canonicalPath(page.route, "en")}`)}" />`
        : "";
      return `  <url>\n    <loc>${escapeXml(url)}</loc>${alternates}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

function normalizeTitle(value) {
  const clean = String(value).replace(/\s*\|\s*YOUNGSUN(?:\s*PAPER)?\s*$/i, "").trim();
  return `${clean} | YOUNGSUN`;
}

function truncate(value, maxLength) {
  const text = String(value).replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).replace(/\s+\S*$/, "")}…`;
}

function renderStaticContent(page, lang) {
  const body = renderRouteContent(page, lang);
  const navItems = lang === "es"
    ? [["Inicio", "/"], ["Productos", "/products"], ["Industrias", "/industries"], ["Materiales", "/materials"], ["Procesamiento", "/processing"], ["Blog", "/blog"], ["Nosotros", "/about"], ["Contacto", "/contact"]]
    : [["Home", "/"], ["Products", "/products"], ["Industries", "/industries"], ["Materials", "/materials"], ["Processing", "/processing"], ["Blog", "/blog"], ["About", "/about"], ["Contact", "/contact"]];
  const nav = navItems
    .map(([label, href]) => `<a href="${localizedPath(href, lang)}">${label}</a>`)
    .join(" ");
  const footer = lang === "es"
    ? `<p>YOUNGSUN PAPER fabrica y suministra papel y cartón desde Dongguan, China. Solicite especificaciones, muestras y cotizaciones de exportación a nuestro equipo.</p><p><a href="${localizedPath("/contact", lang)}">Solicitar cotización</a> · <a href="${localizedPath("/products", lang)}">Ver todos los productos</a> · <a href="${localizedPath("/blog", lang)}">Blog</a> · <a href="${localizedPath("/quality", lang)}">Control de calidad</a> · <a href="${localizedPath("/resources", lang)}">Recursos para compradores</a> · <a href="${localizedPath("/faq", lang)}">Preguntas frecuentes</a> · <a href="${localizedPath("/how-to-order", lang)}">Cómo comprar</a></p>`
    : `<p>YOUNGSUN PAPER supplies paper and paperboard from Dongguan, China. Request specifications, samples and export quotations from our paper team.</p><p><a href="/contact">Request a quotation</a> · <a href="/products">Browse all paper products</a> · <a href="/resources">Buyer resources</a> · <a href="/faq">FAQ</a> · <a href="/how-to-order">How to order</a></p>`;

  return `<div class="seo-prerender" style="min-height:100vh;background:#f7f6f2;color:#143622;padding:88px 24px 64px;font-family:Arial,sans-serif"><main style="max-width:1120px;margin:0 auto;line-height:1.7"><nav aria-label="${lang === "es" ? "Navegacion principal" : "Primary navigation"}" style="display:flex;gap:18px;flex-wrap:wrap;margin-bottom:48px">${nav}</nav>${body}<footer style="margin-top:56px;padding-top:24px;border-top:1px solid #d7ddd8">${footer}</footer></main></div>`;
}

function renderRouteContent(page, lang) {
  if (lang === "es") return renderSpanishRouteContent(page);
  if (page.route === "/") return renderHomeStatic();
  if (page.route === "/products") return renderProductCollectionStatic();
  if (page.route === "/blog") return renderBlogIndexStatic();
  if (page.route === "/industries") return renderIndustriesIndexStatic("en");
  if (page.route === "/faq") return renderFaqStatic("en");
  if (page.route === "/resources") return renderResourcesStatic("en");
  if (page.route === "/quality") return renderQualityStatic("en");
  if (page.route === "/how-to-order") return renderHowToOrderStatic("en");
  if (page.route === "/fancy-paper-collection") return renderFancyCollectionStatic();
  if (page.route === "/materials" || page.route === "/materials/pulp") return renderMaterialsIndexStatic(page);

  const category = productCategories.find((item) => page.route === `/products/${item.id}`);
  if (category) return renderCategoryStatic(category);

  const productEntry = Object.entries(subProducts).find(([id]) => page.route === `/products/${id}`);
  if (productEntry) return renderProductStatic(productEntry[1]);

  const post = blogPosts.find((item) => page.route === `/blog/${item.id}`);
  if (post) return renderBlogPostStatic(post);

  const industry = industryChannels.find((item) => page.route === `/industries/${item.id}`);
  if (industry) return renderIndustryStatic(industry);

  const article = [...pillarArticles, ...buyerGuides].find((item) => page.route === `/materials/${item.id}`);
  if (article) return renderMaterialArticleStatic(article);

  return renderGenericStatic(page);
}

function renderSpanishRouteContent(page) {
  if (page.route === "/") return renderSpanishHomeStatic();
  if (page.route === "/products") return renderSpanishProductCollectionStatic();
  if (page.route === "/blog") return renderBlogIndexStatic("es");
  if (page.route === "/industries") return renderIndustriesIndexStatic("es");
  if (page.route === "/faq") return renderFaqStatic("es");
  if (page.route === "/resources") return renderResourcesStatic("es");
  if (page.route === "/quality") return renderQualityStatic("es");
  if (page.route === "/how-to-order") return renderHowToOrderStatic("es");

  const category = productCategories.find((item) => page.route === `/products/${item.id}`);
  if (category) return renderSpanishCategoryStatic(category);

  const productEntry = Object.entries(subProducts).find(([id]) => page.route === `/products/${id}`);
  if (productEntry) return renderSpanishProductStatic(productEntry[1]);

  const post = blogPosts.find((item) => page.route === `/blog/${item.id}`);
  if (post && hasSpanishBlogPost(post)) return renderBlogPostStatic(post, "es");

  const industry = industryChannels.find((item) => page.route === `/industries/${item.id}`);
  if (industry) return renderSpanishIndustryStatic(industry);

  if (page.route === "/fancy-paper-collection") return renderSpanishFancyCollectionStatic();
  if (page.route === "/materials") return renderSpanishMaterialsStatic();
  return renderSpanishGenericStatic(page);
}

function renderSpanishHomeStatic() {
  const categories = productCategories.map((category) => {
    const meta = getSpanishSeoMeta(`/products/${category.id}`, {});
    return `<article><h2><a href="${localizedPath(`/products/${category.id}`, "es")}">${escapeHtml(meta.title)}</a></h2><p>${escapeHtml(meta.description)}</p></article>`;
  }).join("");
  const featured = ["grey-board", "black-paper", "folding-box-board", "kraft-paper", "woodfree-paper", "soft-touch-paper", "cup-paper"]
    .map((id) => subProducts[id])
    .filter((product) => product && productEs[product.id])
    .map((product) => `<li><a href="${localizedPath(`/products/${product.id}`, "es")}">${escapeHtml(product.name)}</a> - ${escapeHtml(productEs[product.id].tagline)}</li>`)
    .join("");
  return `<header><p>YOUNGSUN PAPER · DONGGUAN, CHINA</p><h1>Fabricante de Papel y Cartón en China</h1><p>YOUNGSUN PAPER fabrica y suministra cartón gris, papel negro, cartón plegable, papel kraft, papel de impresión, papel especial y papel para envases alimentarios a empresas internacionales.</p><p>Con más de 20 años de experiencia, ofrecemos GSM y medidas personalizadas, corte, procesamiento, muestras, documentación y cotizaciones de exportación.</p></header><section><h2>Nuestra colección de papel</h2>${categories}</section><section><h2>Productos destacados</h2><ul>${featured}</ul></section><section><h2>Soporte técnico y comercial</h2><p>Nuestro equipo ayuda a comparar estructura, superficie de impresión, espesor, rigidez, barrera y requisitos de conversión antes de confirmar el producto. Indique su aplicación, cantidad y puerto de destino para recibir una recomendación.</p></section>`;
}

function renderSpanishProductCollectionStatic() {
  const sections = productCategories.map((category) => {
    const categoryTitle = getSpanishCategoryTitle(category.id);
    const products = Object.values(subProducts).filter((product) => product.category === category.id && productEs[product.id]);
    return `<section><h2><a href="${localizedPath(`/products/${category.id}`, "es")}">${escapeHtml(categoryTitle)}</a></h2><p>${escapeHtml(getSpanishSeoMeta(`/products/${category.id}`, {}).description)}</p><ul>${products.map(spanishProductLink).join("")}</ul></section>`;
  }).join("");
  return `<header><h1>Productos de Papel y Cartón</h1><p>Compare productos para embalaje, impresión, edición, presentación de lujo y contacto alimentario. Cada página incluye aplicaciones, especificaciones y opciones para solicitar muestras o una cotización.</p></header>${sections}`;
}

function renderSpanishCategoryStatic(category) {
  const meta = getSpanishSeoMeta(`/products/${category.id}`, {});
  const products = Object.values(subProducts).filter((product) => product.category === category.id && productEs[product.id]);
  const textureLink = category.id === "fancy-paper"
    ? `<p><a href="${localizedPath("/fancy-paper-collection", "es")}">Explorar la coleccion de texturas</a></p>`
    : "";
  return `<header><p>Categoría de productos</p><h1>${escapeHtml(meta.title)}</h1><p>${escapeHtml(meta.description)}</p></header><section><h2>Productos disponibles</h2><ul>${products.map(spanishProductLink).join("")}</ul>${textureLink}</section><section><h2>Solicite especificaciones y muestras</h2><p>Indique la aplicación, GSM o espesor, medida de hoja o ancho de bobina, cantidad, método de impresión y puerto de destino. YOUNGSUN recomendará grados adecuados para evaluar antes del pedido.</p><p><a href="${localizedPath("/contact?intent=samples", "es")}">Solicitar muestras</a> · <a href="${localizedPath("/contact", "es")}">Solicitar cotización</a></p></section>`;
}

function renderSpanishProductStatic(product) {
  const translation = productEs[product.id];
  const specs = translation?.specs || [];
  const applications = translation?.applications || [];
  return `<article><header><p>${escapeHtml(getSpanishCategoryTitle(product.category))}</p><h1>${escapeHtml(product.name)}</h1><p>${escapeHtml(translation.tagline)}</p>${product.image ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} suministrado por YOUNGSUN PAPER" width="800" height="500" loading="eager">` : ""}</header><section><h2>Descripción del producto</h2><p>${escapeHtml(translation.tagline)} YOUNGSUN suministra este producto a fabricantes, impresores, convertidores y distribuidores internacionales, con formatos y embalaje adaptados al proyecto.</p></section>${renderListSection("Especificaciones", specs)}${renderListSection("Aplicaciones", applications)}${renderProductIndustryStatic(product, "es")}<section><h2>Información para cotizar</h2><p>Envíe el GSM o espesor requerido, medida de hoja o bobina, cantidad, aplicación, proceso de impresión y puerto de destino. Nuestro equipo comprobará disponibilidad, pedido mínimo, plazo de entrega y documentación aplicable.</p><p><a href="${localizedPath(`/contact?product=${product.id}`, "es")}">Solicitar precio de ${escapeHtml(product.name)}</a> · <a href="${localizedPath(`/contact?intent=samples&product=${product.id}`, "es")}">Solicitar muestras</a></p></section><p><a href="${localizedPath(`/products/${product.category}`, "es")}">Ver productos relacionados</a></p></article>`;
}

function renderIndustriesIndexStatic(lang) {
  const isSpanish = lang === "es";
  const industries = industryChannels.map((industry) => {
    const detail = industryDetailContent[industry.id];
    const products = detail.featuredProducts
      .map((id) => subProducts[id])
      .filter(Boolean)
      .slice(0, 4)
      .map((product) => {
        const description = isSpanish ? productEs[product.id]?.tagline : product.tagline;
        return `<li><a href="${localizedPath(`/products/${product.id}`, lang)}">${escapeHtml(product.name)}</a>${description ? ` - ${escapeHtml(description)}` : ""}</li>`;
      })
      .join("");
    return `<article><h2><a href="${localizedPath(`/industries/${industry.id}`, lang)}">${escapeHtml(industry.title[lang])}</a></h2><p>${escapeHtml(detail.overview[lang])}</p><h3>${isSpanish ? "Productos recomendados" : "Recommended paper grades"}</h3><ul>${products}</ul><p><a href="${localizedPath(`/industries/${industry.id}`, lang)}">${isSpanish ? "Explorar esta industria" : "Explore this industry"}</a></p></article>`;
  }).join("");
  return `<header><p>${isSpanish ? "Soluciones por industria" : "Solutions by industry"}</p><h1>${isSpanish ? "Encuentre el Papel Adecuado para Cada Aplicación" : "Find the Right Paper for Every Application"}</h1><p>${isSpanish ? "Cada sector exige propiedades diferentes. Compare estructura, superficie, barrera, acabado y procesos antes de elegir el papel." : "Paper performance depends on the final product, printing method, converting process and market requirements. Explore six application areas and compare paper grades selected for each use."}</p></header><section><h2>${isSpanish ? "Explorar por industria" : "Explore paper solutions by industry"}</h2>${industries}</section><section><h2>${isSpanish ? "Reciba una recomendación para su aplicación" : "Get a paper recommendation for your application"}</h2><p>${isSpanish ? "Comparta el producto final, GSM o espesor, tamaño, impresión, acabado, cantidad y mercado de destino. Nuestro equipo propondrá opciones para comparar y muestrear." : "Share the finished product, GSM or thickness, size, printing and finishing method, quantity, and destination market. Our team will suggest practical grades to compare and sample."}</p><p>${isSpanish ? "YOUNGSUN cubre el material de la muestra estándar; el cliente paga el transporte internacional." : "YOUNGSUN covers standard sample material; the customer pays the international courier charges."}</p><p><a href="${localizedPath("/contact", lang)}">${isSpanish ? "Solicitar recomendación" : "Request a recommendation"}</a> · <a href="${localizedPath("/products", lang)}">${isSpanish ? "Ver todos los productos" : "Browse all products"}</a></p></section>`;
}

function renderResourcesStatic(lang) {
  const isSpanish = lang === "es";
  const guides = resourceGuides.map((guide) => {
    const guideHref = guide.href.endsWith("/") ? guide.href : `${guide.href}/`;
    return `<article><h2><a href="${escapeHtml(guideHref)}">${escapeHtml(guide.title[lang])}</a></h2><p>${escapeHtml(guide.desc[lang])}</p><p><a href="${escapeHtml(guideHref)}">${isSpanish ? "Leer la guía en inglés" : "Read the guide"}</a></p></article>`;
  }).join("");
  const checklist = isSpanish
    ? ["Grado de producto y aplicación final", "GSM, calibre o espesor terminado", "Tamaño, ancho de bobina y dirección de fibra", "Cantidad y fecha de entrega", "Proceso de impresión, recubrimiento y conversión", "Objetivo de superficie, color, rigidez o barrera", "Certificaciones e informes necesarios", "Puerto de destino e Incoterm preferido"]
    : ["Product grade and final application", "GSM, caliper or finished thickness", "Sheet size, reel width and grain direction", "Order quantity and required delivery date", "Printing, coating and converting process", "Surface, color, stiffness or barrier target", "Certification and test-document requirements", "Destination port and preferred Incoterm"];
  const support = isSpanish
    ? [
        ["Datos técnicos y tolerancias", "Confirme propiedades medibles, métodos de ensayo y tolerancias de producción antes del pedido."],
        ["Cumplimiento y trazabilidad", "Compruebe qué documentos FSC, alimentarios, del molino o de terceros aplican al producto y mercado."],
        ["Muestras y pruebas", "Pruebe impresión, plegado, pegado, formado o envoltura con una muestra representativa."],
        ["Embalaje y logística", "Revise palés, humedad, embalaje, carga de contenedor y documentos de exportación antes del envío."],
      ]
    : [
        ["Technical data and tolerances", "Confirm measurable properties, test methods and accepted production tolerances for the selected grade before ordering."],
        ["Compliance and traceability", "Check which FSC, food-contact, mill or third-party documents apply to the exact product and destination market."],
        ["Samples and production trials", "Use a representative sample to test printing, folding, gluing, forming or wrapping under real production conditions."],
        ["Packing and logistics planning", "Review pallet height, moisture protection, reel or sheet packing, container loading and export documents before shipment."],
      ];
  return `<header><p>${isSpanish ? "Biblioteca del comprador" : "Buyer resource library"}</p><h1>${isSpanish ? "Guías Prácticas para Comprar Papel" : "Practical Paper Buying Guides"}</h1><p>${isSpanish ? "Utilice estas referencias para definir especificaciones, comparar ofertas, revisar documentos y preparar un pedido internacional." : "Use these practical references to define paper specifications, compare supplier offers, review documentation and prepare an international order."}</p></header><section><h2>${isSpanish ? "Recursos de especificación y compra" : "Specification and sourcing resources"}</h2>${guides}</section><section><h2>${isSpanish ? "Prepare una especificación lista para cotizar" : "Build a Quote-Ready Paper Specification"}</h2><p>${isSpanish ? "Una solicitud completa reduce aclaraciones, evita comparar grados distintos y permite calcular precio y transporte con mayor precisión. Si todavía no conoce algún dato, describa la aplicación final y nuestro equipo le ayudará a definirlo." : "A complete request reduces clarification time, prevents unlike grades from being compared, and makes price and freight calculations more accurate. If a detail is still unknown, describe the finished application and our team will help define it."}</p><ul>${checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section><section><h2>${isSpanish ? "Qué podemos confirmar antes del pedido" : "What We Can Confirm Before You Order"}</h2><p>${isSpanish ? "La documentación depende del grado, molino, uso y país de destino. La confirmamos para el producto concreto, no como una promesa general." : "Document availability depends on the grade, producing mill, application and destination country. We confirm it for the exact product rather than treating it as a general claim."}</p>${support.map(([title, desc]) => `<h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p>`).join("")}</section><section><h2>${isSpanish ? "Solicitar documentación específica" : "Request grade-specific documentation"}</h2><p>${isSpanish ? "Indique el producto, aplicación, proceso y mercado de destino. Confirmaremos qué ficha técnica, muestra, declaración o informe está disponible para el grado seleccionado." : "Tell us the product, application, converting process and destination market. We will confirm which data sheet, sample, declaration or test report is available for the selected grade."}</p><p><a href="${localizedPath("/contact", lang)}">${isSpanish ? "Solicitar documentación" : "Request documentation"}</a> · <a href="${localizedPath("/how-to-order", lang)}">${isSpanish ? "Ver el proceso de pedido" : "Review the ordering process"}</a></p></section>`;
}

function renderQualityStatic(lang) {
  const isSpanish = lang === "es";
  const documents = qualityDocumentTypes.map((item) => `<article><h3>${escapeHtml(item.title[lang])}</h3><p>${escapeHtml(item.desc[lang])}</p></article>`).join("");
  const steps = qualityInspectionSteps.map((step, index) => `<article><h3>${index + 1}. ${escapeHtml(step.name[lang])}</h3><p>${escapeHtml(step.text[lang])}</p></article>`).join("");
  const equipment = isSpanish
    ? ["Probador digital de GSM", "Medidor de humedad", "Micrómetro de calibre", "Probador de tracción", "Probador de estallido", "Medidor de brillo y blancura", "Probador de absorción Cobb", "Equipo de prueba KIT"]
    : ["Digital GSM tester", "Moisture meter", "Caliper micrometer", "Tensile strength tester", "Burst strength tester", "Brightness and whiteness meter", "Cobb absorption tester", "KIT grease-resistance test equipment"];
  return `<article><header><p>${isSpanish ? "Control de calidad" : "Quality assurance"}</p><h1>${isSpanish ? "Control de Calidad para Pedidos de Papel" : "Paper Quality Assurance for Export Orders"}</h1><p>${isSpanish ? "El control comienza con una especificación clara y continúa durante materiales, proceso, producto terminado, embalaje y envío." : "Reliable quality control starts with an approved specification and continues through incoming material, processing, finished-product checks, packing and shipment."}</p></header><section><h2>${isSpanish ? "Documentos según producto y pedido" : "Documents matched to the product and order"}</h2><p>${isSpanish ? "La disponibilidad de certificados y declaraciones depende del grado, molino, uso final y mercado. Confirmamos el documento aplicable antes de aceptar una afirmación de cumplimiento." : "Certificate and declaration availability depends on the grade, supplying mill, end use and destination market. We confirm the applicable document before treating a compliance claim as part of the order."}</p>${documents}</section><section><h2>${isSpanish ? "Proceso de inspección en cinco etapas" : "Five-stage inspection process"}</h2>${steps}</section><section><h2>${isSpanish ? "Propiedades y equipos de control" : "Measured properties and inspection equipment"}</h2><p>${isSpanish ? "Los controles se seleccionan según la especificación aprobada. Pueden incluir gramaje, humedad, calibre, tamaño, escuadra, superficie, resistencia y propiedades de barrera." : "Checks are selected from the approved specification. They may include GSM, moisture, caliper, dimensions, squareness, surface condition, strength and barrier performance."}</p><ul>${equipment.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section><section><h2>${isSpanish ? "Qué debe enviar el comprador" : "Information buyers should provide"}</h2><p>${isSpanish ? "Envíe grado, GSM o espesor, tolerancias, tamaño, uso final, proceso de impresión o conversión, embalaje, cantidad y mercado. Indique cualquier informe o inspección obligatoria antes de cotizar." : "Send the grade, GSM or thickness, tolerances, size, final use, printing or converting process, packing, quantity and destination market. Identify any mandatory report or inspection before quotation."}</p><p><a href="${localizedPath("/contact", lang)}">${isSpanish ? "Solicitar documentos de calidad" : "Request quality documents"}</a> · <a href="${localizedPath("/products", lang)}">${isSpanish ? "Comparar productos" : "Compare products"}</a></p></section></article>`;
}

function renderHowToOrderStatic(lang) {
  const isSpanish = lang === "es";
  const steps = howToOrderSteps.map((step, index) => `<section><h2>${index + 1}. ${escapeHtml(step.name[lang])}</h2><p>${escapeHtml(step.text[lang])}</p>${step.tip ? `<p><strong>${isSpanish ? "Consejo" : "Buyer note"}:</strong> ${escapeHtml(step.tip[lang])}</p>` : ""}</section>`).join("");
  return `<article><header><p>${isSpanish ? "Proceso de pedido" : "Ordering process"}</p><h1>${isSpanish ? "Cómo Solicitar Papel y Cartón" : "How to Order Paper and Paperboard"}</h1><p>${isSpanish ? "Siga estos seis pasos desde la especificación inicial hasta la recepción y repetición del pedido." : "Follow six practical steps from the first specification and quotation through sampling, production, shipment, delivery and repeat orders."}</p></header>${steps}<section><h2>${isSpanish ? "Prepare estos datos" : "Prepare These Details"}</h2><p>${isSpanish ? "Una solicitud completa permite recomendar el grado correcto y calcular precio, plazo y transporte con mayor precisión." : "A complete request helps us recommend the right grade and calculate price, lead time, and freight more accurately."}</p><ul>${(isSpanish ? ["Tipo de papel o cartón", "GSM o espesor", "Tamaño de hoja o ancho de bobina", "Cantidad estimada", "Aplicación y proceso", "Puerto de destino", "Documentos requeridos"] : ["Product name or target grade", "GSM or thickness", "Sheet size or reel width", "Estimated quantity", "Application and converting process", "Destination port", "Required documents"]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><p><a href="${localizedPath("/contact", lang)}">${isSpanish ? "Solicitar cotización" : "Request a quotation"}</a> · <a href="${localizedPath("/contact?intent=samples", lang)}">${isSpanish ? "Solicitar muestras" : "Request samples"}</a></p></section></article>`;
}

function renderSpanishIndustryStatic(industry) {
  const detail = industryDetailContent[industry.id];
  const products = detail.featuredProducts.map((id) => subProducts[id]).filter((product) => product && productEs[product.id]);
  return `<article><header><p>${escapeHtml(detail.eyebrow.es)}</p><h1>${escapeHtml(industry.title.es)}</h1><p>${escapeHtml(detail.overview.es)}</p></header><section><h2>Prioridades tecnicas</h2>${detail.priorities.map((item) => `<h3>${escapeHtml(item.title.es)}</h3><p>${escapeHtml(item.desc.es)}</p>`).join("")}</section><section><h2>Productos recomendados</h2><ul>${products.map(spanishProductLink).join("")}</ul></section>${renderListSection("Lista de datos para cotizar", detail.checklist.map((item) => item.es))}<section><h2>Hablar con un especialista</h2><p>Comparta el uso final, especificaciones, proceso, volumen y mercado de destino. Nuestro equipo preparara una seleccion de materiales para comparar.</p><p><a href="${localizedPath("/contact", "es")}">Solicitar recomendacion</a></p></section></article>`;
}

function renderSpanishFancyCollectionStatic() {
  const products = ["soft-touch-paper", "leather-paper", "pearlescent-paper", "embossed-paper"]
    .map((id) => subProducts[id])
    .filter(Boolean);
  return `<article><header><p>Biblioteca de superficies premium</p><h1>Coleccion de Texturas de Papel Especial</h1><p>Explore mas de 120 texturas gofradas, perladas, efecto cuero, lino y acabados personalizados para cajas de lujo, portadas, etiquetas y aplicaciones de marca.</p></header><section><h2>Papeles para aplicaciones tactiles</h2><ul>${products.map(spanishProductLink).join("")}</ul></section><section><h2>Solicitar muestras fisicas</h2><p>Indique su aplicacion, textura, color, GSM, medida y proceso de acabado. Nuestro equipo preparara opciones adecuadas para comparar fisicamente.</p><p><a href="${localizedPath("/contact?intent=samples&product=fancy-paper", "es")}">Solicitar muestras de texturas</a></p></section></article>`;
}

function renderSpanishMaterialsStatic() {
  return `<article><header><p>Biblioteca de materiales</p><h1>Materiales de Papel: Como la Fibra Define el Rendimiento</h1><p>Comprenda como el origen de la fibra, el proceso de pulpa, el contenido reciclado y la estructura de la hoja afectan resistencia, suavidad, opacidad, volumen e impresion.</p></header><section><h2>Por que importan los materiales</h2><p>Las fibras largas pueden reforzar el papel, mientras que las fibras cortas ayudan a conseguir una superficie uniforme. El bambu, el algodon, la fibra virgen y la reciclada aportan propiedades diferentes. La mejor seleccion depende del producto, la impresion y el proceso de conversion.</p></section><section><h2>Empiece por el uso final</h2><p>Para recomendar un material necesitamos conocer la aplicacion, GSM o espesor, medida, metodo de impresion, proceso de conversion, volumen anual y puerto de destino.</p><p><a href="${localizedPath("/contact", "es")}">Solicitar recomendacion de material</a> · <a href="${localizedPath("/products", "es")}">Comparar productos</a></p></section></article>`;
}

function renderSpanishGenericStatic(page) {
  const meta = getSpanishSeoMeta(page.route, page);
  return `<article><header><h1>${escapeHtml(meta.title)}</h1><p>${escapeHtml(meta.description)}</p></header><section><h2>Servicio para compradores internacionales</h2><p>YOUNGSUN PAPER ayuda a fabricantes, impresores, convertidores, distribuidores y marcas a seleccionar papel y carton de acuerdo con la aplicacion final. Revisamos estructura, superficie, GSM, espesor, medida, impresion, acabado, cantidad y requisitos de exportacion.</p><p>Nuestro equipo puede facilitar especificaciones, muestras, opciones de procesamiento, plazo de produccion, embalaje y coordinacion logistica. Las afirmaciones de certificacion y cumplimiento se confirman para el producto y el pedido concretos.</p></section><section><h2>Continuar la consulta</h2><ul><li><a href="${localizedPath("/products", "es")}">Productos de papel y carton</a></li><li><a href="${localizedPath("/industries", "es")}">Soluciones por industria</a></li><li><a href="${localizedPath("/materials", "es")}">Biblioteca de materiales</a></li><li><a href="${localizedPath("/contact", "es")}">Contactar con YOUNGSUN PAPER</a></li></ul></section></article>`;
}

function spanishProductLink(product) {
  const translation = productEs[product.id];
  return `<li><a href="${localizedPath(`/products/${product.id}`, "es")}">${escapeHtml(product.name)}</a> - ${escapeHtml(translation?.tagline || product.tagline)}</li>`;
}

function renderHomeStatic() {
  const categories = productCategories.map((category) => `<article><h2><a href="/products/${category.id}">${escapeHtml(category.title)}</a></h2><p>${escapeHtml(category.summary)}</p></article>`).join("");
  const featured = ["grey-board", "black-paper", "folding-box-board", "kraft-paper", "woodfree-paper", "soft-touch-paper", "cup-paper"]
    .map((id) => subProducts[id])
    .filter(Boolean)
    .map((product) => `<li><a href="/products/${product.id}">${escapeHtml(product.name)}</a> - ${escapeHtml(product.tagline)}</li>`)
    .join("");
  return `<header><p>YOUNGSUN PAPER · DONGGUAN, CHINA</p><h1>Paper &amp; Paperboard Manufacturer in China</h1><p>YOUNGSUN PAPER manufactures and supplies grey board, black paper, folding box board, kraft paper, culture paper, fancy paper and food packaging paper for global packaging, printing and converting companies.</p><p>With more than 20 years of industry experience, we support custom GSM, sheet sizes, reel widths, processing, samples and export quotations for buyers worldwide.</p></header><section><h2>Our Paper Collection</h2>${categories}</section><section><h2>Popular Paper Grades</h2><ul>${featured}</ul></section><section><h2>Paper Supply and Technical Support</h2><p>Our team helps buyers compare paper structure, print surface, thickness, stiffness, barrier properties and converting requirements. We combine our own manufacturing capabilities with an established mill supply network to provide practical paper sourcing options.</p><p><a href="/about">Learn about YOUNGSUN PAPER</a> · <a href="/contact?intent=samples">Request paper samples</a></p></section>`;
}

function renderProductCollectionStatic() {
  const sections = productCategories.map((category) => {
    const products = Object.values(subProducts).filter((product) => product.category === category.id);
    return `<section><h2><a href="/products/${category.id}">${escapeHtml(category.title)}</a></h2><p>${escapeHtml(category.summary)}</p><ul>${products.map(productLink).join("")}</ul></section>`;
  }).join("");
  return `<header><h1>Paper &amp; Board Products</h1><p>Compare ${Object.keys(subProducts).length} paper and paperboard grades for packaging, printing, luxury presentation, food service and industrial converting.</p></header>${sections}`;
}

function renderCategoryStatic(category) {
  const products = Object.values(subProducts).filter((product) => product.category === category.id);
  const textureLibrary = category.id === "fancy-paper"
    ? `<section><h2>Explore 120+ Fancy Paper Textures</h2><p>Compare embossed, leather-grain, linen, pearlescent and custom surfaces for luxury packaging, book covers, hang tags and premium brand applications.</p><p><a href="/fancy-paper-collection">Explore the Fancy Paper Texture Collection</a> · <a href="/contact?intent=samples&amp;product=fancy-paper">Request texture samples</a></p></section>`
    : "";
  return `<header><p>Paper product category</p><h1>${escapeHtml(category.title)}</h1><p>${escapeHtml(category.summary)}</p><p>${escapeHtml(category.tagline)}</p></header>${textureLibrary}<section><h2>${escapeHtml(category.title)} Grades</h2><ul>${products.map(productLink).join("")}</ul></section><section><h2>Request Specifications and Samples</h2><p>Tell YOUNGSUN your target application, GSM or thickness, size, quantity, printing method and destination port. We will recommend suitable grades for evaluation.</p><p><a href="/contact?intent=samples">Request samples</a> · <a href="/contact">Request a quotation</a></p></section>`;
}

function renderProductStatic(product) {
  const commercial = product.commercial ? Object.entries(product.commercial).map(([key, value]) => `<li><strong>${escapeHtml(labelFromKey(key))}:</strong> ${escapeHtml(value)}</li>`).join("") : "";
  const textureLibrary = ["soft-touch-paper", "leather-paper", "pearlescent-paper", "embossed-paper"].includes(product.id)
    ? `<section><h2>Choose a Texture for Your Application</h2><p>Compare 120+ available fancy paper patterns and request physical swatches suitable for ${escapeHtml(product.name)}.</p><p><a href="/fancy-paper-collection">View available textures</a> · <a href="/contact?intent=samples&amp;product=${product.id}">Request texture samples</a></p></section>`
    : "";
  return `<article><header><p>${escapeHtml(categoryName(product.category))}</p><h1>${escapeHtml(product.name)}</h1><p>${escapeHtml(product.tagline)}</p>${product.image ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)} supplied by YOUNGSUN PAPER" width="800" height="500" loading="eager">` : ""}</header>${renderProductCatalogStatic(product.id)}<section><h2>${escapeHtml(product.name)} Overview</h2><p>${escapeHtml(product.description)}</p></section>${renderListSection("Specifications", product.specs)}${renderListSection("Applications", product.applications)}${renderProductIndustryStatic(product, "en")}${textureLibrary}${renderListSection("Product Features", product.features)}${renderListSection("Available Variants", product.variants)}${commercial ? `<section><h2>Commercial Information</h2><ul>${commercial}</ul></section>` : ""}<section><h2>Request a Quote</h2><p>Send your required GSM or thickness, sheet or reel size, quantity, application and destination port for a product recommendation and export quotation.</p><p><a href="/contact?product=${product.id}">Request ${escapeHtml(product.name)} pricing</a> · <a href="/contact?intent=samples&amp;product=${product.id}">Request samples</a></p></section><p><a href="/products/${product.category}">View related ${escapeHtml(categoryName(product.category))} products</a></p></article>`;
}

function renderProductIndustryStatic(product, lang) {
  const isSpanish = lang === "es";
  const industries = getProductIndustryLinks(product.id);
  if (!industries.length) return "";

  const links = industries.map((industry) => {
    const title = industry.title[lang];
    const summary = industry.summary[lang];
    const href = localizedPath(`/industries/${industry.id}`, lang);
    return `<li><a href="${href}">${escapeHtml(title)}</a> - ${escapeHtml(summary)}</li>`;
  }).join("");

  return `<section><h2>${isSpanish ? `Industrias que utilizan ${escapeHtml(product.name)}` : `Industries Using ${escapeHtml(product.name)}`}</h2><p>${isSpanish ? "Consulte requisitos de uso, grados recomendados y puntos de control para compradores en cada sector." : "Explore end-use requirements, recommended grades and buyer checkpoints for each industry."}</p><ul>${links}</ul></section>`;
}

function renderFancyCollectionStatic() {
  const relatedProducts = ["soft-touch-paper", "leather-paper", "pearlescent-paper", "embossed-paper"]
    .map((id) => subProducts[id])
    .filter(Boolean);
  return `<article><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products">Products</a> / <a href="/products/fancy-paper">Fancy Paper</a> / <span aria-current="page">Texture Collection</span></nav><header><p>Premium Texture Library</p><h1>Fancy Paper Textures</h1><p>Compare 120+ embossed, leather-grain, linen, pearlescent and custom paper textures for luxury packaging, book covers, hang tags and premium brand applications.</p><p><a href="/products/fancy-paper">Back to Fancy Paper</a></p></header><section><h2>Fancy Paper Products for Textured Applications</h2><ul>${relatedProducts.map(productLink).join("")}</ul></section><section><h2>Request Physical Texture Samples</h2><p>Tell YOUNGSUN your application, preferred texture, color, GSM, sheet size, printing and finishing process. Our paper team will recommend suitable options for evaluation.</p><p><a href="/contact?intent=samples&amp;product=fancy-paper">Request texture samples</a> · <a href="/contact?product=fancy-paper">Contact Alice</a></p></section></article>`;
}

function renderProductCatalogStatic(activeProductId) {
  const groups = productCategories.map((category) => {
    const products = Object.values(subProducts).filter((product) => product.category === category.id);
    const links = products.map((product) => {
      const current = product.id === activeProductId ? ' aria-current="page"' : "";
      return `<li><a href="/products/${product.id}"${current}>${escapeHtml(product.name)}</a></li>`;
    }).join("");
    return `<section><h3><a href="/products/${category.id}">${escapeHtml(category.title)}</a></h3><ul>${links}</ul></section>`;
  }).join("");

  return `<nav aria-label="All paper products by category"><h2>Browse All Paper Products</h2><p>Compare ${Object.keys(subProducts).length} paper and paperboard grades across four product categories.</p>${groups}</nav>`;
}

function renderBlogIndexStatic(lang = "en") {
  const isSpanish = lang === "es";
  const sourcePosts = isSpanish ? blogPosts.filter(hasSpanishBlogPost) : blogPosts;
  const posts = sourcePosts.map((sourcePost) => {
    const post = localizeBlogPost(sourcePost, lang);
    return `<article><h2><a href="${localizedPath(`/blog/${post.id}`, lang)}">${escapeHtml(post.title)}</a></h2><p>${escapeHtml(post.excerpt)}</p><p>${escapeHtml(post.category)} · ${escapeHtml(post.date)}</p></article>`;
  }).join("");
  return isSpanish
    ? `<header><p>Análisis y guías</p><h1>Blog de la Industria del Papel</h1><p>Artículos prácticos para compradores sobre selección de materiales, envases, sostenibilidad, cumplimiento y conversión.</p></header><section><h2>Últimos análisis para compradores</h2>${posts}</section>`
    : `<header><p>Insights &amp; Guides</p><h1>Paper Industry Blog</h1><p>Practical guides for paper buyers covering paper selection, packaging performance, sustainability, importing, logistics and converting.</p></header><section><h2>Latest Paper Buying Guides</h2>${posts}</section>`;
}

function renderBlogPostStatic(sourcePost, lang = "en") {
  const isSpanish = lang === "es";
  const post = localizeBlogPost(sourcePost, lang);
  const blocks = parseBlogContent(post.content);
  const toc = getBlogToc(blocks);
  const relatedSourcePosts = isSpanish ? blogPosts.filter(hasSpanishBlogPost) : blogPosts;
  const related = getRelatedBlogPosts(sourcePost, relatedSourcePosts)
    .map((item) => localizeBlogPost(item, lang))
    .map((item) => `<li><a href="${localizedPath(`/blog/${item.id}`, lang)}">${escapeHtml(item.title)}</a> - ${escapeHtml(item.excerpt)}</li>`)
    .join("");
  const tocHtml = toc.length > 2
    ? `<nav aria-label="${isSpanish ? "Contenido" : "Table of contents"}"><h2>${isSpanish ? "En esta guía" : "In This Guide"}</h2><ol>${toc.map((item) => `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(item.text)}</a></li>`).join("")}</ol></nav>`
    : "";
  const hero = post.image
    ? `<figure><img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt || post.title)}" width="1280" height="800" loading="eager">${post.imageCaption ? `<figcaption>${escapeHtml(post.imageCaption)}</figcaption>` : ""}</figure>`
    : "";
  const articleBody = markdownToHtml(blocks, post.title);
  const localizedBody = isSpanish
    ? articleBody.replace(/href="\/(?!es\/|#)/g, 'href="/es/')
    : articleBody;
  const relatedSection = related
    ? `<aside aria-labelledby="related-guides-heading"><h2 id="related-guides-heading">${isSpanish ? "Artículos relacionados" : "Related Articles"}</h2><ul>${related}</ul></aside>`
    : "";
  return `<article><header><p>${escapeHtml(post.category)} · ${escapeHtml(post.date)}</p><h1>${escapeHtml(post.title)}</h1><p>${escapeHtml(post.excerpt)}</p>${hero}</header>${tocHtml}${localizedBody}${relatedSection}<footer><p>${isSpanish ? "Escrito por" : "Written by"} ${escapeHtml(post.author)}.</p><p><a href="${localizedPath("/blog", lang)}">${isSpanish ? "Ver más artículos" : "Browse more paper industry articles"}</a> · <a href="${localizedPath("/contact", lang)}">${isSpanish ? "Consultar sus requisitos de papel" : "Discuss your paper requirements"}</a></p></footer></article>`;
}

function renderIndustryStatic(industry) {
  const detail = industryDetailContent[industry.id];
  const products = detail.featuredProducts.map((id) => subProducts[id]).filter(Boolean);
  return `<article><header><p>${escapeHtml(detail.eyebrow.en)}</p><h1>${escapeHtml(industry.title.en)} Paper Solutions</h1><p>${escapeHtml(detail.overview.en)}</p></header><section><h2>Performance Priorities</h2>${detail.priorities.map((item) => `<h3>${escapeHtml(item.title.en)}</h3><p>${escapeHtml(item.desc.en)}</p>`).join("")}</section><section><h2>Recommended Paper Grades</h2><ul>${products.map(productLink).join("")}</ul></section>${renderListSection("Buyer Checklist", detail.checklist.map((item) => item.en))}${renderListSection("Available Processing", detail.processes)}<section><h2>Related Guides</h2><ul>${detail.related.map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a> - ${escapeHtml(item.desc)}</li>`).join("")}</ul></section></article>`;
}

function renderMaterialsIndexStatic(page) {
  const articles = [...pillarArticles, ...buyerGuides];
  const pulpHubLink = page.route === "/materials"
    ? `<p><a href="/materials/pulp">Compare paper pulp and fiber options</a></p>`
    : "";
  return `<header><p>Materials Library</p><h1>${escapeHtml(page.title.replace(/\s*\|.*$/, ""))}</h1><p>${escapeHtml(page.description)}</p><p>Understand how fiber source, pulping method, recycled content and sheet structure influence paper strength, smoothness, printability, bulk and converting performance.</p>${pulpHubLink}</header><section><h2>Paper Fiber and Buyer Guides</h2><ul>${articles.map((article) => `<li><a href="/materials/${article.id}">${escapeHtml(article.title)}</a> - ${escapeHtml(article.metaDescription)}</li>`).join("")}</ul></section>`;
}

function renderMaterialArticleStatic(article) {
  const benefits = article.benefits || [];
  const applications = article.applications || [];
  const faqs = article.faqs || [];
  return `<article><header><p>YOUNGSUN Materials Library</p><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.oneSentence || article.intro || article.metaDescription)}</p></header>${article.intro ? `<section><h2>Overview</h2><p>${escapeHtml(article.intro)}</p></section>` : ""}${benefits.length ? `<section><h2>Key Performance Benefits</h2>${benefits.map((item) => `<h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.desc)}</p>`).join("")}</section>` : ""}${article.production ? `<section><h2>Production and Fiber Structure</h2><p>${escapeHtml(article.production)}</p></section>` : ""}${applications.length ? `<section><h2>Applications</h2><ul>${applications.map((item) => `<li><strong>${escapeHtml(item.app || item.title || "Application")}</strong> - ${escapeHtml(item.why || item.desc || "")}${item.checks ? ` Checks: ${escapeHtml(item.checks)}` : ""}</li>`).join("")}</ul></section>` : ""}${renderListSection("Questions for Suppliers", article.questions)}${faqs.length ? `<section><h2>Frequently Asked Questions</h2>${faqs.map((item) => `<h3>${escapeHtml(item.q)}</h3><p>${escapeHtml(item.a)}</p>`).join("")}</section>` : ""}${article.cta ? `<p>${escapeHtml(article.cta)}</p>` : ""}<p><a href="/materials">Return to the Materials Library</a></p></article>`;
}

function renderGenericStatic(page) {
  const title = page.title.replace(/\s*\|.*$/, "").replace(/\s*—\s*YOUNGSUN.*$/, "");
  return `<article><header><h1>${escapeHtml(title)}</h1><p>${escapeHtml(page.description)}</p></header><section><h2>Paper Supply from YOUNGSUN</h2><p>YOUNGSUN PAPER supports international packaging, printing and converting buyers with paper grade selection, specifications, samples, custom sizes, processing and export coordination.</p><p>Browse our packaging board, culture paper, fancy paper and food packaging paper ranges, or contact our team with your application, GSM, size, quantity and destination.</p></section><section><h2>Explore Related Resources</h2><ul><li><a href="/products">Paper and paperboard products</a></li><li><a href="/industries">Paper solutions by industry</a></li><li><a href="/materials">Materials and fiber guides</a></li><li><a href="/blog">Paper buying articles</a></li><li><a href="/contact">Contact YOUNGSUN PAPER</a></li></ul></section></article>`;
}

function renderFaqStatic(lang) {
  const items = localizeFaqItems(lang);
  const isSpanish = lang === "es";
  const content = items
    .map((item) => `<section><h2>${escapeHtml(item.q)}</h2><p>${escapeHtml(item.a)}</p></section>`)
    .join("");
  const contactPath = localizedPath("/contact", lang);
  return `<article><header><p>FAQ</p><h1>${isSpanish ? "Preguntas frecuentes sobre compra de papel" : "Frequently Asked Questions About Paper Sourcing"}</h1><p>${isSpanish ? "Respuestas claras para compradores sobre productos, MOQ, muestras, documentación, plazos, pagos y exportación." : "Clear answers for buyers about paper products, MOQ, samples, documentation, lead times, payment and export sourcing."}</p></header>${content}<footer><h2>${isSpanish ? "¿Necesita una respuesta para su proyecto?" : "Need an Answer for Your Project?"}</h2><p><a href="${contactPath}">${isSpanish ? "Contactar con YOUNGSUN PAPER" : "Contact YOUNGSUN PAPER"}</a></p></footer></article>`;
}

function productLink(product) {
  return `<li><a href="/products/${product.id}">${escapeHtml(product.name)}</a> - ${escapeHtml(product.tagline)}</li>`;
}

function renderListSection(title, items) {
  if (!Array.isArray(items) || items.length === 0) return "";
  return `<section><h2>${escapeHtml(title)}</h2><ul>${items.map((item) => `<li>${escapeHtml(typeof item === "string" ? item : item.en || item.title || item.desc || "")}</li>`).join("")}</ul></section>`;
}

function categoryName(id) {
  return productCategories.find((category) => category.id === id)?.title || id;
}

function labelFromKey(value) {
  return String(value).replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function markdownToHtml(blocksOrMarkdown, documentTitle) {
  const blocks = Array.isArray(blocksOrMarkdown) ? blocksOrMarkdown : parseBlogContent(blocksOrMarkdown);
  const output = blocks.map((block) => {
    if (block.type === "heading") {
      const tag = block.level === 2 ? "h2" : "h3";
      return `<${tag} id="${escapeHtml(block.id)}">${inlineMarkdown(block.text)}</${tag}>`;
    }
    if (block.type === "list") {
      const tag = block.ordered ? "ol" : "ul";
      return `<${tag}>${block.items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</${tag}>`;
    }
    if (block.type === "table") {
      const head = `<thead><tr>${block.headers.map((cell) => `<th scope="col">${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>`;
      const body = `<tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody>`;
      return `<table>${head}${body}</table>`;
    }
    return `<p>${inlineMarkdown(block.text)}</p>`;
  });
  return `<section aria-label="${escapeHtml(documentTitle)} article content">${output.join("")}</section>`;
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((\/?[^\s)]+|https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
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

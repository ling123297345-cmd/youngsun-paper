export const SITE_URL = "https://youngsunpaper.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const categoryNames = {
  "package-board": "Package Board",
  "culture-paper": "Culture Paper",
  "fancy-paper": "Fancy Paper",
  "food-packaging": "Food Packaging Paper",
};

const categoryNamesEs = {
  "package-board": "Cartones para Embalaje",
  "culture-paper": "Papeles de Impresion y Escritura",
  "fancy-paper": "Papeles Especiales y Decorativos",
  "food-packaging": "Papeles para Envases Alimentarios",
};

function absoluteUrl(value) {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}/${String(value).replace(/^\/+/, "")}`;
}

function absolutePageUrl(value) {
  const url = new URL(absoluteUrl(value));
  if (url.pathname !== "/" && !url.pathname.endsWith("/")) {
    url.pathname = `${url.pathname}/`;
  }
  return url.toString();
}

function parseProperty(value) {
  const text = String(value || "").trim();
  const separator = text.indexOf(":");
  if (separator < 1) return { name: "Specification", value: text };
  return {
    name: text.slice(0, separator).trim(),
    value: text.slice(separator + 1).trim(),
  };
}

function propertyValue(name, value) {
  return {
    "@type": "PropertyValue",
    name,
    value: String(value),
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "YOUNGSUN PAPER",
    alternateName: "Youngsun Paper",
    legalName: "Dongguan Banyan Material Co., Ltd.",
    description:
      "Paper and paperboard manufacturing, converting and export supply for international packaging, printing and industrial buyers.",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/logo.png`,
    foundingDate: "2002",
    email: "Alice@yspaper.com",
    telephone: "+86 13713459656",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 167, Meijing West Road, Songmushan, Dalang Town",
      addressLocality: "Dongguan",
      addressRegion: "Guangdong",
      postalCode: "523779",
      addressCountry: "CN",
    },
    areaServed: ["Asia", "Europe", "North America", "South America", "Africa", "Australia"],
    knowsAbout: [
      "Grey Board",
      "Black Paper",
      "Folding Box Board",
      "Kraft Paper",
      "Culture Paper",
      "Specialty Paper",
      "Food Packaging Paper",
      "Paper Converting",
      "B2B Paper Export",
    ],
    sameAs: ["https://www.linkedin.com/company/133053995/"],
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "YOUNGSUN PAPER",
    url: `${SITE_URL}/`,
    description: "Paper and paperboard products for global packaging, printing and converting buyers.",
    inLanguage: ["en", "es"],
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "YOUNGSUN PAPER",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
  };
}

export function createProductSchema(product, { lang = "en", translation = null } = {}) {
  if (!product) return null;
  const isSpanish = lang === "es";
  const productUrl = `${SITE_URL}${isSpanish ? "/es" : ""}/products/${product.id}/`;
  const images = [product.image, ...(product.gallery || []).map((item) => item.src || item)]
    .filter(Boolean)
    .map(absoluteUrl);
  const specifications = (isSpanish && translation?.specs ? translation.specs : product.specs || []).map(parseProperty);
  const applications = isSpanish && translation?.applications
    ? translation.applications
    : product.applications || [];
  const commercialProperties = product.commercial
    ? [
        [isSpanish ? "Cantidad minima de pedido" : "Minimum order quantity", product.commercial.moq],
        [isSpanish ? "Plazo de entrega" : "Lead time", product.commercial.leadTime],
        [isSpanish ? "Politica de muestras" : "Sample policy", product.commercial.samples],
        [isSpanish ? "Certificacion comercial" : "Commercial certification", product.commercial.certification],
        [isSpanish ? "Carga de contenedor" : "Container loading", product.commercial.containerLoading],
      ].filter(([, value]) => value)
    : [];
  const additionalProperty = [
    ...specifications.map((item) => propertyValue(item.name, item.value)),
    ...(product.certifications?.length
      ? [propertyValue(isSpanish ? "Certificaciones y cumplimiento disponibles" : "Certification and compliance availability", product.certifications.join(", "))]
      : []),
    ...(product.variants?.length
      ? [propertyValue(isSpanish ? "Variantes disponibles" : "Available variants", product.variants.join(", "))]
      : []),
    ...(applications.length
      ? [propertyValue(isSpanish ? "Aplicaciones" : "Applications", applications.join(", "))]
      : []),
    ...commercialProperties.map(([name, value]) => propertyValue(name, value)),
  ];
  const material = specifications.find((item) => /fiber|material|pulp|fibra|pulpa/i.test(item.name))?.value;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: isSpanish
      ? translation?.tagline || product.metaDescription || product.description || product.tagline
      : product.metaDescription || product.description || product.tagline,
    url: productUrl,
    image: [...new Set(images)],
    category: isSpanish
      ? categoryNamesEs[product.category] || categoryNames[product.category] || product.category
      : categoryNames[product.category] || product.category,
    inLanguage: isSpanish ? "es" : "en",
    ...(material ? { material } : {}),
    brand: {
      "@type": "Brand",
      name: "YOUNGSUN PAPER",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: isSpanish
        ? "Fabricantes de embalajes, impresores, convertidores, distribuidores y equipos de compras"
        : "Packaging manufacturers, printers, converters, distributors and procurement teams",
    },
    additionalProperty,
  };
}

export function createCollectionPageSchema({ name, description, url, items = [], lang = "en" }) {
  const pageUrl = absolutePageUrl(url);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name,
    description,
    url: pageUrl,
    inLanguage: lang === "es" ? "es" : "en",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absolutePageUrl(item.url),
        ...(item.image ? { image: absoluteUrl(item.image) } : {}),
      })),
    },
  };
}

export function createArticleSchema(post) {
  if (!post) return null;
  const articleUrl = `${SITE_URL}/blog/${post.id}/`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: post.metaDescription || post.excerpt || "",
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Organization",
      name: post.author || "YOUNGSUN PAPER Editorial",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "YOUNGSUN PAPER",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "YOUNGSUN PAPER Blog",
    },
    articleSection: post.category,
    keywords: post.tags || [],
    inLanguage: "en",
    about: (post.tags || []).map((tag) => ({ "@type": "Thing", name: tag })),
  };
}

export function createBreadcrumbSchema(items) {
  if (!Array.isArray(items) || items.length < 2) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absolutePageUrl(items.at(-1).url)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolutePageUrl(item.url),
    })),
  };
}

export function createFaqSchema(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function createHowToSchema({ steps, title, description }) {
  if (!Array.isArray(steps) || steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.tip
        ? { itemListElement: [{ "@type": "HowToTip", text: step.tip }] }
        : {}),
    })),
  };
}

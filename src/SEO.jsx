import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createFaqSchema,
  createHowToSchema,
  createOrganizationSchema,
  createProductSchema,
  createWebsiteSchema,
} from "./schemaData.js";
import { useLang } from "./i18n.jsx";
import { productEs } from "./productEs.js";
import {
  canonicalPath,
  getSpanishSeoMeta,
  stripLocalePrefix,
  supportsSpanishSeoPath,
} from "./localeSeo.js";

export function PageMeta({ title, description, path }) {
  const { lang } = useLang();
  const cleanPath = stripLocalePrefix(path || "/");
  const spanishMeta = lang === "es"
    ? getSpanishSeoMeta(cleanPath, { title, description })
    : null;
  const localizedTitle = spanishMeta?.title || title;
  const localizedDescription = spanishMeta?.description || description;
  const cleanTitle = localizedTitle ? localizedTitle.replace(/\s*\|\s*YOUNGSUN(?:\s*PAPER)?\s*$/i, "") : "";
  const fullTitle = cleanTitle ? `${cleanTitle} | YOUNGSUN` : "YOUNGSUN | China Paper & Paperboard Supplier";
  const desc = localizedDescription || "YOUNGSUN PAPER — premium paper and board supplier since 2002.";
  const urlPath = canonicalPath(cleanPath, lang);
  const url = `https://youngsunpaper.com${urlPath}`;
  const hasSpanishVersion = supportsSpanishSeoPath(cleanPath);
  const englishUrl = `https://youngsunpaper.com${canonicalPath(cleanPath, "en")}`;
  const spanishUrl = `https://youngsunpaper.com${canonicalPath(cleanPath, "es")}`;
  return (
    <Helmet>
      <html lang={lang === "es" ? "es" : "en"} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : "en_US"} />
      {hasSpanishVersion && <meta property="og:locale:alternate" content={lang === "es" ? "en_US" : "es_ES"} />}
      <link rel="canonical" href={url} />
      {hasSpanishVersion && <link rel="alternate" hrefLang="en" href={englishUrl} />}
      {hasSpanishVersion && <link rel="alternate" hrefLang="es" href={spanishUrl} />}
      {hasSpanishVersion && <link rel="alternate" hrefLang="x-default" href={englishUrl} />}
    </Helmet>
  );
}

function JsonLd({ id, data, removeOnUnmount = true }) {
  const json = useMemo(() => (data ? JSON.stringify(data) : ""), [data]);

  useEffect(() => {
    if (!data) return undefined;
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = json;

    return () => {
      if (removeOnUnmount) document.getElementById(id)?.remove();
    };
  }, [data, id, json, removeOnUnmount]);

  return null;
}

export function ProductSchema({ product }) {
  const { lang } = useLang();
  return (
    <JsonLd
      id="product-schema"
      data={createProductSchema(product, { lang, translation: productEs[product?.id] })}
    />
  );
}

export function CollectionPageSchema({ name, description, path, items }) {
  const { lang } = useLang();
  const localizedPath = lang === "es" ? `/es${path === "/" ? "/" : path}` : path;
  return (
    <JsonLd
      id="collection-schema"
      data={createCollectionPageSchema({ name, description, url: localizedPath, items, lang })}
    />
  );
}

// ── HowTo Schema ────────────────────────────────────────────
export function HowToSchema({ steps, title, description }) {
  return <JsonLd id="howto-schema" data={createHowToSchema({ steps, title, description })} />;
}

export function FAQSchema({ items }) {
  return <JsonLd id="faq-schema" data={createFaqSchema(items)} />;
}

export function OrganizationSchema() {
  return <JsonLd id="organization-schema" data={createOrganizationSchema()} />;
}

export function WebsiteSchema() {
  return <JsonLd id="website-schema" data={createWebsiteSchema()} />;
}

// ── Article Schema for blog posts ───────────────────────────
export function ArticleSchema({ post }) {
  return <JsonLd id="article-schema" data={createArticleSchema(post)} />;
}

// ── Breadcrumb Schema ────────────────────────────────────────
export function BreadcrumbSchema({ items }) {
  return (
    <JsonLd
      id="route-breadcrumb-schema"
      data={createBreadcrumbSchema(items)}
      removeOnUnmount={false}
    />
  );
}

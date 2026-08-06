import { Helmet } from "react-helmet-async";

export function PageMeta({ title, description, path }) {
  const cleanTitle = title ? title.replace(/\s*\|\s*YOUNGSUN(?:\s*PAPER)?\s*$/i, "") : "";
  const fullTitle = cleanTitle ? `${cleanTitle} | YOUNGSUN` : "YOUNGSUN | China Paper & Paperboard Supplier";
  const desc = description || "YOUNGSUN PAPER — premium paper and board supplier since 2002.";
  const url = `https://youngsunpaper.com${path || ""}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export function ProductSchema({ product }) {
  if (!product) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.tagline,
    sku: product.id,
    image: `https://youngsunpaper.com${product.image}`,
    brand: { "@type": "Brand", name: "YOUNGSUN PAPER" },
    manufacturer: { "@type": "Organization", name: "Dongguan Banyan Material Co., Ltd." },
    offers: {
      "@type": "AggregateOffer",
      businessFunction: "https://purl.org/goodrelations/v1#ProvideService",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      areaServed: [
        { "@type": "Place", name: "Asia" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Place", name: "North America" },
        { "@type": "Place", name: "South America" },
        { "@type": "Place", name: "Africa" },
        { "@type": "Place", name: "Australia" },
      ],
      shippingDetails: {
        "@type": "OfferShippingDetails",
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: { "@type": "OpeningHoursSpecification", minValue: 14, maxValue: 21 },
          cutOffTime: "17:00:00+08:00",
        },
        shippingDestination: { "@type": "DefinedRegion", name: "Worldwide" },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        returnMethod: "https://schema.org/ReturnByMail",
        refundType: "https://schema.org/ExchangeRefund",
        merchantReturnDays: 30,
      },
    },
  };

  // Inject commercial data if available
  if (product.commercial) {
    if (product.commercial.containerLoading) {
      json.offers.eligibleQuantity = { "@type": "QuantitativeValue", value: 25, unitText: "metric ton" };
    }
    if (product.commercial.moq) {
      json.offers.priceSpecification = { "@type": "UnitPriceSpecification", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: "metric ton" } };
    }
  }

  // Inject specs as additionalProperty
  if (product.specs && product.specs.length > 0) {
    json.additionalProperty = product.specs.map(function(s) {
      const parts = s.split(": ");
      return {
        "@type": "PropertyValue",
        name: parts[0],
        value: parts[1] || s,
      };
    });
  }

  return <Helmet><script type="application/ld+json">{JSON.stringify(json)}</script></Helmet>;
}

// ── HowTo Schema ────────────────────────────────────────────
export function HowToSchema({ steps, title, description }) {
  if (!steps || steps.length === 0) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description: description,
    step: steps.map(function(step, i) {
      return {
        "@type": "HowToStep",
        position: i + 1,
        name: step.name,
        text: step.text,
        ...(step.tip ? { itemListElement: [{ "@type": "HowToTip", text: step.tip }] } : {}),
      };
    }),
  };
  return <Helmet><script type="application/ld+json">{JSON.stringify(json)}</script></Helmet>;
}

export function FAQSchema({ items }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(function(item) {
      return { "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } };
    }),
  };
  return <Helmet><script type="application/ld+json">{JSON.stringify(json)}</script></Helmet>;
}

export function OrganizationSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "YOUNGSUN PAPER",
    legalName: "Dongguan Banyan Material Co., Ltd.",
    url: "https://youngsunpaper.com",
    foundingDate: "2002",
    email: "Alice@yspaper.com",
    telephone: "+86 13713459656",
    address: {
      "@type": "PostalAddress",
      streetAddress: "NO.167, Meijing West Road, Songmushan, Dalang Town",
      addressLocality: "Dongguan City",
      addressRegion: "Guangdong Province",
      postalCode: "523779",
      addressCountry: "CN",
    },
    areaServed: ["Asia", "Europe", "North America", "South America", "Africa", "Australia"],
    knowsAbout: ["Kraft Paper", "Grey Board", "Coated Paper", "Specialty Paper", "Food Packaging Paper"],
    sameAs: ["https://www.linkedin.com/company/133053995/"],
  };
  return <Helmet><script type="application/ld+json">{JSON.stringify(json)}</script></Helmet>;
}

// ── Article Schema for blog posts ───────────────────────────
export function ArticleSchema({ post }) {
  if (!post) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.metaDescription || "",
    image: `https://youngsunpaper.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author || "YOUNGSUN PAPER Editorial",
      url: "https://youngsunpaper.com",
    },
    publisher: {
      "@type": "Organization",
      name: "YOUNGSUN PAPER",
      url: "https://youngsunpaper.com",
      logo: { "@type": "ImageObject", url: "https://youngsunpaper.com/images/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://youngsunpaper.com/blog/${post.id}`,
    },
    about: post.tags?.map((tag) => ({ "@type": "Thing", name: tag })) || [],
  };
  return <Helmet><script type="application/ld+json">{JSON.stringify(json)}</script></Helmet>;
}

// ── Breadcrumb Schema ────────────────────────────────────────
export function BreadcrumbSchema({ items }) {
  if (!items || items.length === 0) return null;
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://youngsunpaper.com${item.url}`,
    })),
  };
  return <Helmet><script type="application/ld+json">{JSON.stringify(json)}</script></Helmet>;
}

import { Helmet } from "react-helmet-async";

export function PageMeta({ title, description, path }) {
  const cleanTitle = title ? title.replace(/\s*\|\s*YOUNGSUN PAPER\s*$/i, "") : "";
  const fullTitle = cleanTitle ? `${cleanTitle} | YOUNGSUN PAPER` : "YOUNGSUN PAPER | China Paper & Paperboard Supplier";
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
  const json = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.tagline,
    category: product.category,
    image: `https://youngsunpaper.com/${product.image}`,
    brand: { "@type": "Brand", name: "YOUNGSUN PAPER" },
    manufacturer: { "@type": "Organization", name: "Dongguan Banyan Material Co., Ltd." },
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

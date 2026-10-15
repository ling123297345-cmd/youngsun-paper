const guides = {
  "how-to-compare-paper-quotes-from-different-suppliers": {
    id: "how-to-compare-paper-quotes-from-different-suppliers",
    title: {
      en: "How to Compare Paper Quotes: 10-Point Checklist",
      es: "Cómo comparar cotizaciones de papel: 10 puntos",
    },
    excerpt: {
      en: "Compare specifications, MOQ, samples, documentation, packing and landed cost before selecting a supplier.",
      es: "Compare especificaciones, MOQ, muestras, documentos, embalaje y coste total antes de elegir proveedor.",
    },
    image: "/images/blog-articles/how-to-compare-paper-quotes-cover-v2.webp",
    hasSpanish: true,
  },
  "custom-paper-sizes-slitting-minimize-waste-guide": {
    id: "custom-paper-sizes-slitting-minimize-waste-guide",
    title: {
      en: "How Custom Paper Sizes and Slitting Reduce Waste",
    },
    excerpt: {
      en: "Calculate trim waste, compare standard and custom formats, and prepare a clearer converting specification.",
    },
    image: "/images/blog-articles/custom-paper-sizes-slitting-minimize-waste-guide-cover-v2.webp",
    hasSpanish: false,
  },
  "food-packaging-paper-buyer-guide": {
    id: "food-packaging-paper-buyer-guide",
    title: {
      en: "Food Packaging Paper: A Practical Buyer Guide",
    },
    excerpt: {
      en: "Compare cupstock, greaseproof, silicone-coated and barrier papers by application and converting need.",
    },
    image: "/images/blog-articles/food-packaging-paper-buyer-guide.webp",
    hasSpanish: false,
  },
  "silver-card-modern-elegance-packaging-guide": {
    id: "silver-card-modern-elegance-packaging-guide",
    title: {
      en: "Why Silver Card Creates a More Modern Packaging Look",
    },
    excerpt: {
      en: "Review metallic surface options, printing considerations and finishing choices for premium packaging.",
    },
    image: "/images/blog-articles/silver-card-modern-elegance-packaging-guide.webp",
    hasSpanish: false,
  },
  "transparent-paper-packaging-buyer-tests": {
    id: "transparent-paper-packaging-buyer-tests",
    title: {
      en: "Transparent Paper Packaging: Seven Buyer Tests",
      es: "Papel transparente para envases: siete pruebas de compra",
    },
    excerpt: {
      en: "Check clarity, barrier, sealing, printing, line performance, food contact and recyclability before approval.",
      es: "Compruebe claridad, barrera, sellado, impresión, maquinaria, contacto alimentario y reciclabilidad.",
    },
    image: "/images/blog-articles/transparent-paper-packaging-buyer-tests.webp",
    hasSpanish: true,
  },
  "digital-printing-brown-kraft-paper-buyers-guide": {
    id: "digital-printing-brown-kraft-paper-buyers-guide",
    title: {
      en: "Six Specifications for Brighter Digital Printing on Brown Kraft",
      es: "Seis especificaciones para imprimir colores vivos sobre kraft marrón",
    },
    excerpt: {
      en: "Control shade, surface, white ink, color data, finishing and production trials before approving printed kraft.",
      es: "Controle tono, superficie, tinta blanca, datos de color, acabado y pruebas antes de aprobar kraft impreso.",
    },
    image: "/images/blog-articles/digital-printing-brown-kraft-paper-buyers-guide.webp",
    hasSpanish: true,
  },
};

const productGuideMap = {
  "grey-board": ["custom-paper-sizes-slitting-minimize-waste-guide", "how-to-compare-paper-quotes-from-different-suppliers"],
  "folding-box-board": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "c2s-art-board": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "duplex-board": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "kraft-paper": ["digital-printing-brown-kraft-paper-buyers-guide", "how-to-compare-paper-quotes-from-different-suppliers"],
  "cup-paper": ["food-packaging-paper-buyer-guide"],
  "greaseproof-paper": ["food-packaging-paper-buyer-guide"],
  "pe-coated-paper": ["food-packaging-paper-buyer-guide"],
  "silicone-coated-paper": ["food-packaging-paper-buyer-guide", "how-to-compare-paper-quotes-from-different-suppliers"],
  "mg-paper": ["food-packaging-paper-buyer-guide"],
  "gold-silver-card": ["silver-card-modern-elegance-packaging-guide"],
  "pearlescent-paper": ["silver-card-modern-elegance-packaging-guide"],
  "black-paper": ["silver-card-modern-elegance-packaging-guide", "how-to-compare-paper-quotes-from-different-suppliers"],
  "woodfree-paper": ["how-to-compare-paper-quotes-from-different-suppliers"],
  "tracing-paper": ["transparent-paper-packaging-buyer-tests", "how-to-compare-paper-quotes-from-different-suppliers"],
};

export function getProductGuideLinks(productId, lang = "en") {
  return (productGuideMap[productId] || [])
    .map((guideId) => guides[guideId])
    .filter((guide) => guide && (lang !== "es" || guide.hasSpanish))
    .map((guide) => ({
      ...guide,
      href: `/blog/${guide.id}`,
      titleText: guide.title[lang] || guide.title.en,
      excerptText: guide.excerpt[lang] || guide.excerpt.en,
    }));
}

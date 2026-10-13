const guides = {
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
};

const productGuideMap = {
  "grey-board": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "folding-box-board": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "c2s-art-board": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "duplex-board": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "kraft-paper": ["custom-paper-sizes-slitting-minimize-waste-guide"],
  "cup-paper": ["food-packaging-paper-buyer-guide"],
  "greaseproof-paper": ["food-packaging-paper-buyer-guide"],
  "pe-coated-paper": ["food-packaging-paper-buyer-guide"],
  "silicone-coated-paper": ["food-packaging-paper-buyer-guide"],
  "mg-paper": ["food-packaging-paper-buyer-guide"],
  "gold-silver-card": ["silver-card-modern-elegance-packaging-guide"],
  "pearlescent-paper": ["silver-card-modern-elegance-packaging-guide"],
  "black-paper": ["silver-card-modern-elegance-packaging-guide"],
  "tracing-paper": ["transparent-paper-packaging-buyer-tests"],
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

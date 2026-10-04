import { industryChannels } from "./industryApplications.js";
import { industryHeroImages } from "./industryDetailContent.js";

const productIndustryMap = {
  "grey-board": ["packaging-printing", "publishing-stationery", "luxury-cosmetics"],
  "black-paper": ["luxury-cosmetics", "hang-tags-labels", "packaging-printing"],
  "color-card-paper": ["gift-wrapping-decoration", "hang-tags-labels", "packaging-printing"],
  "folding-box-board": ["packaging-printing", "luxury-cosmetics"],
  "c2s-art-board": ["publishing-stationery", "packaging-printing", "luxury-cosmetics"],
  "kraft-paper": ["packaging-printing", "food-beverage", "gift-wrapping-decoration"],
  "duplex-board": ["packaging-printing", "publishing-stationery"],
  "pe-coated-paper": ["food-beverage", "packaging-printing"],
  ckb: ["food-beverage", "packaging-printing"],
  "woodfree-paper": ["publishing-stationery"],
  "color-offset-paper": ["publishing-stationery", "gift-wrapping-decoration"],
  "lwc-paper": ["publishing-stationery"],
  "ncr-paper": ["publishing-stationery"],
  "copy-paper": ["publishing-stationery"],
  newsprint: ["publishing-stationery"],
  "a4-copy-paper": ["publishing-stationery"],
  "a4-thermal-paper": ["publishing-stationery"],
  "thermal-paper-roll": ["hang-tags-labels", "food-beverage"],
  "soft-touch-paper": ["luxury-cosmetics", "hang-tags-labels"],
  "leather-paper": ["luxury-cosmetics", "hang-tags-labels"],
  "pearlescent-paper": ["luxury-cosmetics", "gift-wrapping-decoration", "hang-tags-labels"],
  "embossed-paper": ["luxury-cosmetics", "gift-wrapping-decoration", "hang-tags-labels"],
  "gold-silver-card": ["luxury-cosmetics", "packaging-printing", "hang-tags-labels"],
  "label-paper": ["hang-tags-labels", "packaging-printing"],
  "color-tissue-paper": ["gift-wrapping-decoration", "luxury-cosmetics"],
  "tracing-paper": ["gift-wrapping-decoration", "publishing-stationery"],
  "cup-paper": ["food-beverage"],
  "greaseproof-paper": ["food-beverage"],
  "mg-paper": ["food-beverage", "packaging-printing", "gift-wrapping-decoration"],
  "silicone-coated-paper": ["food-beverage", "packaging-printing"],
  "absorbent-paper": ["luxury-cosmetics", "food-beverage", "hang-tags-labels"],
  "color-laminated-grey-board": ["packaging-printing", "luxury-cosmetics", "publishing-stationery"],
  "woodgrain-laminated-grey-board": ["luxury-cosmetics", "gift-wrapping-decoration", "packaging-printing"],
  "blue-core-puzzle-board": ["packaging-printing", "publishing-stationery", "gift-wrapping-decoration"],
  "metallized-laminated-grey-board": ["food-beverage", "luxury-cosmetics", "packaging-printing"],
  "foam-laminated-grey-board": ["publishing-stationery", "packaging-printing", "luxury-cosmetics"],
};

const industrySummaries = {
  "packaging-printing": {
    en: "Compare structure, print surface and converting performance for boxes, bags and printed packaging.",
    es: "Compare estructura, superficie de impresión y conversión para cajas, bolsas y envases impresos.",
  },
  "food-beverage": {
    en: "Match forming, barrier and food-contact requirements for cups, wraps, bags and takeaway packs.",
    es: "Combine formación, barrera y contacto alimentario para vasos, envolturas, bolsas y envases.",
  },
  "luxury-cosmetics": {
    en: "Coordinate tactile surfaces, color and premium finishing for luxury and beauty packaging.",
    es: "Coordine superficies táctiles, color y acabados premium para envases de lujo y cosmética.",
  },
  "publishing-stationery": {
    en: "Balance print quality, opacity, bulk and runnability for books, catalogs and stationery.",
    es: "Equilibre impresión, opacidad, volumen y rendimiento para libros, catálogos y papelería.",
  },
  "hang-tags-labels": {
    en: "Select clean-cut, printable surfaces for tags, labels, barcodes and detailed brand finishes.",
    es: "Elija superficies imprimibles y de corte limpio para etiquetas, códigos y acabados de marca.",
  },
  "gift-wrapping-decoration": {
    en: "Explore color, texture and folding performance for gift wrap, liners, cards and decoration.",
    es: "Explore color, textura y plegado para envoltorios, forros, tarjetas y decoración.",
  },
};

export function getProductIndustryLinks(productId) {
  const ids = productIndustryMap[productId] || [];
  return ids
    .map((id) => {
      const industry = industryChannels.find((item) => item.id === id);
      return industry
        ? { ...industry, heroImage: industryHeroImages[id] || industry.heroImage, summary: industrySummaries[id] }
        : null;
    })
    .filter(Boolean);
}

export function hasProductIndustryLinks(productId) {
  return Boolean(productIndustryMap[productId]?.length);
}

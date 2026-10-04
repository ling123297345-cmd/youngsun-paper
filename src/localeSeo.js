import { productCategories, subProducts } from "./data.js";
import { productEs } from "./productEs.js";
import { industryChannels } from "./industryApplications.js";
import { industryDetailContent } from "./industryDetailContent.js";

export const SPANISH_PREFIX = "/es";

const spanishStaticMeta = {
  "/": {
    title: "Fabricante de Papel y Cartón en China",
    description: "Fabricante y proveedor chino de cartón gris, papel negro, cartón plegable, papel kraft, papel especial y papel alimentario para compradores internacionales.",
  },
  "/products": {
    title: "Productos de Papel y Cartón",
    description: "Compare papeles y cartones para embalaje, impresión, presentación de lujo y contacto alimentario. Solicite fichas técnicas, precios y muestras.",
  },
  "/industries": {
    title: "Soluciones de Papel por Industria",
    description: "Encuentre papeles para embalaje, alimentos, cosmética, publicaciones, etiquetas y regalos, con recomendaciones según cada aplicación.",
  },
  "/materials": {
    title: "Biblioteca de Materiales de Papel y Cartón",
    description: "Compare fibras y materiales de papel para resistencia, suavidad, impresión, embalaje y procesos de conversión.",
  },
  "/processing": {
    title: "Servicios de Procesamiento y Conversión de Papel",
    description: "Corte, rebobinado, troquelado, laminado, impresión, gofrado y embalaje de exportación para papel y cartón a medida.",
  },
  "/about": {
    title: "Sobre YOUNGSUN PAPER",
    description: "Conozca a YOUNGSUN PAPER, fabricante y exportador de papel de Dongguan con más de 20 años de experiencia en mercados internacionales.",
  },
  "/contact": {
    title: "Contactar con YOUNGSUN PAPER",
    description: "Solicite precios, especificaciones, muestras y datos de envío de papel y cartón. Nuestro equipo comercial responde normalmente en 24 horas.",
  },
  "/quality": {
    title: "Control de Calidad y Certificaciones de Papel",
    description: "Consulte los controles de calidad, inspecciones, pruebas, certificaciones y documentos de exportación disponibles para pedidos de papel.",
  },
  "/faq": {
    title: "Preguntas Frecuentes sobre Compra de Papel",
    description: "Respuestas sobre pedidos mínimos, muestras, certificaciones, pagos, producción y envío internacional de papel y cartón.",
  },
  "/how-to-order": {
    title: "Cómo Comprar Papel a YOUNGSUN",
    description: "Proceso paso a paso desde la especificación y cotización hasta las muestras, producción, inspección y envío del pedido.",
  },
  "/resources": {
    title: "Recursos para Compradores de Papel",
    description: "Consulte información de productos, especificaciones, cumplimiento y recursos prácticos para comprar papel y cartón.",
  },
  "/fancy-paper-collection": {
    title: "Colección de Texturas de Papel Especial",
    description: "Explore papeles gofrados, perlados, efecto cuero y otras texturas para embalaje de lujo, portadas, etiquetas y aplicaciones de marca.",
  },
};

const categoryMeta = {
  "package-board": {
    title: "Cartones para Embalaje",
    description: "Cartón gris, papel negro, FBB, cartón dúplex, kraft y otros cartones para cajas rígidas, estuches e impresión.",
  },
  "culture-paper": {
    title: "Papeles de Impresion y Escritura",
    description: "Papel woodfree, offset de color, LWC, NCR y otros papeles para libros, oficina, publicaciones e impresión comercial.",
  },
  "fancy-paper": {
    title: "Papeles Especiales y Decorativos",
    description: "Papeles suaves, perlados, gofrados, efecto cuero y decorativos para embalaje premium, etiquetas, portadas y marcas de lujo.",
  },
  "food-packaging": {
    title: "Papeles para Envases Alimentarios",
    description: "Papel para vasos, papel antigrasa, papel siliconado, MG kraft y papeles con barrera para alimentos y bebidas.",
  },
};

export function stripLocalePrefix(pathname = "/") {
  if (pathname === SPANISH_PREFIX) return "/";
  if (pathname.startsWith(`${SPANISH_PREFIX}/`)) return pathname.slice(SPANISH_PREFIX.length) || "/";
  return pathname || "/";
}

export function isSpanishPath(pathname = "/") {
  return pathname === SPANISH_PREFIX || pathname.startsWith(`${SPANISH_PREFIX}/`);
}

export function localizedPath(pathname = "/", lang = "en") {
  const cleanPath = stripLocalePrefix(pathname);
  if (lang !== "es") return cleanPath;
  return cleanPath === "/" ? `${SPANISH_PREFIX}/` : `${SPANISH_PREFIX}${cleanPath}`;
}

export function canonicalPath(pathname = "/", lang = "en") {
  const localized = localizedPath(pathname, lang);
  const match = localized.match(/^([^?#]*)(.*)$/);
  const route = match?.[1] || "/";
  const suffix = match?.[2] || "";

  if (route === "/" || route.endsWith("/") || /\.[a-z0-9]+$/i.test(route)) {
    return `${route}${suffix}`;
  }

  return `${route}/${suffix}`;
}

export function supportsSpanishSeoPath(pathname = "/") {
  const path = stripLocalePrefix(pathname).replace(/\/$/, "") || "/";
  if (spanishStaticMeta[path]) return true;
  if (/^\/products\/[^/]+$/.test(path)) {
    const id = path.split("/").pop();
    return Boolean(categoryMeta[id] || (subProducts[id] && productEs[id]));
  }
  if (/^\/industries\/[^/]+$/.test(path)) {
    const id = path.split("/").pop();
    return Boolean(industryDetailContent[id]?.overview?.es);
  }
  return false;
}

export function getSpanishSeoMeta(pathname, fallback = {}) {
  const path = stripLocalePrefix(pathname).replace(/\/$/, "") || "/";
  if (spanishStaticMeta[path]) return spanishStaticMeta[path];

  if (/^\/products\/[^/]+$/.test(path)) {
    const id = path.split("/").pop();
    if (categoryMeta[id]) return categoryMeta[id];
    const product = subProducts[id];
    const translation = productEs[id];
    if (product && translation) {
      const seoName = product.name.replace(/\s*\([^)]*\)/g, "").trim();
      return {
        title: `${seoName} | Fabricante China`,
        description: `${translation.tagline} Consulte GSM, medidas, MOQ, muestras y precio de exportación.`,
      };
    }
  }

  if (/^\/industries\/[^/]+$/.test(path)) {
    const id = path.split("/").pop();
    const industry = industryChannels.find((item) => item.id === id);
    const detail = industryDetailContent[id];
    if (industry && detail?.overview?.es) {
      return {
        title: `${industry.title.es} | Soluciones de Papel`,
        description: detail.overview.es,
      };
    }
  }

  return {
    title: fallback.title || "YOUNGSUN PAPER",
    description: fallback.description || "Fabricante y proveedor de papel y cartón para compradores internacionales.",
  };
}

export function getSpanishCategoryTitle(categoryId) {
  return categoryMeta[categoryId]?.title
    || productCategories.find((category) => category.id === categoryId)?.title
    || categoryId;
}

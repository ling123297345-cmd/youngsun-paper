// ============================================================
// YOUNGSUN PAPER — Resources & Downloads
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { PageMeta } from "../SEO.jsx";

export default function Resources() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const downloads = [
    {
      icon: "📦",
      title: { en: "Product Catalog 2026", es: "Catálogo de Productos 2026" },
      desc: { en: "Complete product range with specifications, images, and applications. 28 paper and board grades across 4 categories.", es: "Gama completa de productos con especificaciones, imágenes y aplicaciones. 28 grados de papel y cartón en 4 categorías." },
      size: "4.2 MB",
      format: "PDF",
      file: "/downloads/youngsun-paper-product-catalog-2026.pdf",
    },
    {
      icon: "📋",
      title: { en: "Paper Grade Specification Sheet", es: "Hoja de Especificaciones de Papel" },
      desc: { en: "Technical specifications for all grades: GSM range, sheet sizes, certifications, properties, and converting compatibility.", es: "Especificaciones técnicas para todos los grados: rango GSM, tamaños de hoja, certificaciones, propiedades y compatibilidad de conversión." },
      size: "1.8 MB",
      format: "PDF",
      file: "/downloads/youngsun-paper-spec-sheet.pdf",
    },
    {
      icon: "🍽️",
      title: { en: "Food-Grade Paper Compliance Guide", es: "Guía de Cumplimiento para Papel Alimentario" },
      desc: { en: "FDA, EU 1935/2004, and GB 9685 compliance documentation overview. PFAS-free certification details.", es: "Resumen de documentación de cumplimiento FDA, EU 1935/2004 y GB 9685. Detalles de certificación libre de PFAS." },
      size: "2.5 MB",
      format: "PDF",
      file: "/downloads/youngsun-paper-food-grade-compliance.pdf",
    },
    {
      icon: "🌳",
      title: { en: "Sustainability & FSC Certification Overview", es: "Resumen de Sostenibilidad y Certificación FSC" },
      desc: { en: "FSC certification details, recycled content percentages, and our environmental commitment.", es: "Detalles de certificación FSC, porcentajes de contenido reciclado y nuestro compromiso ambiental." },
      size: "1.2 MB",
      format: "PDF",
      file: "/downloads/youngsun-paper-sustainability-fsc.pdf",
    },
    {
      icon: "📖",
      title: { en: "Paper Sourcing Guide for International Buyers", es: "Guía de Compra de Papel para Compradores Internacionales" },
      desc: { en: "Step-by-step guide: specification, sampling, pricing, logistics, and quality control when sourcing paper from China.", es: "Guía paso a paso: especificación, muestreo, precios, logística y control de calidad al comprar papel de China." },
      size: "3.1 MB",
      format: "PDF",
      file: "/downloads/youngsun-paper-sourcing-guide.pdf",
    },
  ];

  return (
    <>
      <PageMeta title="Resources & Downloads — Paper Guides, Catalogs, Specs" description="Download free paper and board resources: product catalog, specification sheets, compliance guides, and sourcing handbook. YOUNGSUN PAPER." path="/resources" />

      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Recursos Gratuitos" : "Free Resources"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Descargas y Guías" : "Downloads & Guides"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 550, margin: "0 auto" }}>
            {isEs ? "Catálogos de productos, hojas de especificaciones, guías de cumplimiento y más — descarga gratuita." : "Product catalogs, spec sheets, compliance guides, and more — free to download."}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 900, display: "grid", gap: 20 }}>
          {downloads.map((dl, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "24px 28px", display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontSize: 40, flexShrink: 0 }}>{dl.icon}</div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--forest)", marginBottom: 4 }}>{dl.title[lang]}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 6 }}>{dl.desc[lang]}</p>
                <span style={{ fontSize: 12, color: "var(--muted-light)" }}>{dl.format} • {dl.size}</span>
              </div>
              <a
                href={dl.file}
                download
                style={{ background: "var(--forest)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0 }}
              >
                📥 {isEs ? "Descargar" : "Download"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {isEs ? "¿Necesita algo más específico?" : "Need Something More Specific?"}
        </h2>
        <p style={{ fontSize: 15, opacity: 0.8, marginBottom: 28 }}>
          {isEs ? "Podemos preparar documentación personalizada para su proyecto." : "We can prepare custom documentation for your project."}
        </p>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Solicitar Información" : "Request Information"} →
        </Link>
      </section>
    </>
  );
}

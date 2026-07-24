// ============================================================
// YOUNGSUN PAPER — FAQ Page
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { faqItems } from "../data.js";
import { PageMeta } from "../SEO.jsx";

export default function FAQ() {
  const { lang } = useLang();
  const isEs = lang === "es";

  // Use existing faqItems from data.js + add some new ones
  const allFaqs = [
    ...(faqItems || []),
    {
      q: { en: "What is the minimum order quantity (MOQ)?", es: "¿Cuál es la cantidad mínima de pedido (MOQ)?" },
      a: { en: "Standard MOQ is 1 metric ton for most products. Custom colors, sizes, or special specifications may require higher minimums. Contact our sales team for product-specific MOQs.", es: "El MOQ estándar es de 1 tonelada métrica para la mayoría de los productos. Colores, tamaños o especificaciones especiales pueden requerir mínimos más altos." }
    },
    {
      q: { en: "How long does shipping take?", es: "¿Cuánto tarda el envío?" },
      a: { en: "Production lead time is typically 2–3 weeks. Ocean freight: Europe 30–40 days, North America 15–25 days, Middle East 15–20 days, Southeast Asia 7–12 days, Africa 25–35 days. Total timeline: approximately 5–9 weeks from order confirmation.", es: "El plazo de producción es típicamente 2–3 semanas. Flete marítimo: Europa 30–40 días, Norteamérica 15–25 días, Medio Oriente 15–20 días, Sudeste Asiático 7–12 días, África 25–35 días." }
    },
    {
      q: { en: "What certifications do your products have?", es: "¿Qué certificaciones tienen sus productos?" },
      a: { en: "Our products carry FSC (Forest Stewardship Council) certification, SGS testing and inspection reports, and ISO 14001 environmental management. Food-contact grades are available with FDA and EU 1935/2004 compliance documentation.", es: "Nuestros productos cuentan con certificación FSC, informes SGS e ISO 14001. Los grados de contacto alimentario están disponibles con documentación de cumplimiento FDA y EU 1935/2004." }
    },
    {
      q: { en: "Can I get custom sheet sizes or reel widths?", es: "¿Puedo obtener tamaños de hoja o anchos de bobina personalizados?" },
      a: { en: "Yes! Custom sheet sizes, reel widths, and cut-to-order formats are available. Standard sheet sizes include 787×1092mm and 889×1194mm. Custom slitting tolerances: ±1mm for sheets, ±0.5mm for reels.", es: "¡Sí! Tamaños de hoja, anchos de bobina y formatos cortados a medida están disponibles. Los tamaños estándar incluyen 787×1092mm y 889×1194mm." }
    },
    {
      q: { en: "How do I request samples?", es: "¿Cómo solicito muestras?" },
      a: { en: "Free samples of standard products are available for evaluation. Contact us with your required product, GSM, and intended application, and we will ship samples within 3–5 business days via courier.", es: "Muestras gratuitas de productos estándar están disponibles para evaluación. Contáctenos con su producto requerido, GSM y aplicación prevista." }
    },
    {
      q: { en: "What payment methods do you accept?", es: "¿Qué métodos de pago aceptan?" },
      a: { en: "We accept T/T (Telegraphic Transfer) — typically 30% deposit with order, 70% balance before shipment or against copy of shipping documents. Letters of Credit (L/C) are accepted for larger orders.", es: "Aceptamos T/T (Transferencia Bancaria) — típicamente 30% depósito con pedido, 70% saldo antes del envío. Cartas de Crédito (L/C) aceptadas para pedidos mayores." }
    },
    {
      q: { en: "How many tons fit in a container?", es: "¿Cuántas toneladas caben en un contenedor?" },
      a: { en: "A 40-foot high-cube (40HQ) container typically holds approximately 25 metric tons of paper or board, depending on product density and packing configuration. Mixed loads combining multiple products or sizes can be arranged.", es: "Un contenedor 40HQ típicamente contiene aproximadamente 25 toneladas métricas de papel o cartón, dependiendo de la densidad del producto y configuración de embalaje." }
    },
    {
      q: { en: "Do you offer FOB or CIF pricing?", es: "¿Ofrecen precios FOB o CIF?" },
      a: { en: "Both. We quote FOB Shenzhen (you arrange freight) or CIF to your destination port (we include ocean freight and insurance in the price). Specify your preference when requesting a quotation.", es: "Ambos. Cotizamos FOB Shenzhen (usted organiza el flete) o CIF a su puerto de destino (incluimos flete marítimo y seguro). Especifique su preferencia al solicitar cotización." }
    },
  ];

  return (
    <>
      <PageMeta title="Frequently Asked Questions" description="Find answers to common questions about paper sourcing, minimum orders, shipping, certifications, samples, and payment from YOUNGSUN PAPER." path="/faq" />

      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>FAQ</span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 550, margin: "0 auto" }}>
            {isEs ? "Respuestas rápidas a las preguntas más comunes sobre pedidos, envíos, certificaciones y más." : "Quick answers to common questions about ordering, shipping, certifications, and more."}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 800, display: "grid", gap: 12 }}>
          {allFaqs.map((faq, i) => (
            <details key={i} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <summary style={{ padding: "20px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "var(--forest)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {faq.q[lang] || faq.q}
                <span style={{ color: "var(--gold)", fontSize: 18 }}>+</span>
              </summary>
              <p style={{ padding: "0 28px 22px", fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>
                {faq.a[lang] || faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {isEs ? "¿No encontró su respuesta?" : "Didn't Find Your Answer?"}
        </h2>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Contáctenos" : "Contact Us"} →
        </Link>
      </section>
    </>
  );
}

// ============================================================
// YOUNGSUN PAPER — How to Order Page
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { PageMeta } from "../SEO.jsx";

export default function HowToOrder() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const steps = [
    {
      icon: "📋",
      title: { en: "1. Define Your Specification", es: "1. Defina Su Especificación" },
      desc: {
        en: "Tell us your product type, GSM or thickness, sheet size or reel width, quantity, application, and target market. The more detail you provide, the faster and more accurate our quotation will be.",
        es: "Indíquenos su tipo de producto, GSM o espesor, tamaño de hoja o ancho de bobina, cantidad, aplicación y mercado objetivo. Cuanto más detalle proporcione, más rápida y precisa será nuestra cotización."
      },
      tip: { en: "Pro tip: Include your destination port for accurate freight pricing.", es: "Consejo: Incluya su puerto de destino para precios de flete precisos." }
    },
    {
      icon: "💰",
      title: { en: "2. Receive Quotation", es: "2. Reciba Cotización" },
      desc: {
        en: "We respond within 24 hours with a detailed proforma invoice including: product specification, unit price, total amount, payment terms, delivery terms (FOB or CIF), estimated shipment date, and packing details.",
        es: "Respondemos dentro de 24 horas con una factura proforma detallada que incluye: especificación del producto, precio unitario, monto total, términos de pago, términos de entrega (FOB o CIF), fecha estimada de envío y detalles de embalaje."
      }
    },
    {
      icon: "🔬",
      title: { en: "3. Approve Samples", es: "3. Apruebe Muestras" },
      desc: {
        en: "We ship free samples of standard products within 3–5 business days. Test the paper on your production line — printing, cutting, folding, gluing, or forming. We only proceed to production after you confirm the sample meets your requirements.",
        es: "Enviamos muestras gratuitas de productos estándar en 3–5 días hábiles. Pruebe el papel en su línea de producción — impresión, corte, plegado, encolado o formado. Solo procedemos a producción después de que confirme que la muestra cumple sus requisitos."
      },
      tip: { en: "Pro tip: Test with your actual production conditions, not just visual inspection.", es: "Consejo: Pruebe con sus condiciones de producción reales, no solo inspección visual." }
    },
    {
      icon: "🏭",
      title: { en: "4. Production & Quality Control", es: "4. Producción y Control de Calidad" },
      desc: {
        en: "Production begins after order confirmation and deposit. Our 5-stage quality control process monitors every batch: incoming material inspection, in-process checks, final inspection, pre-shipment verification, and optional third-party testing.",
        es: "La producción comienza después de la confirmación del pedido y el depósito. Nuestro proceso de control de calidad de 5 etapas monitorea cada lote: inspección de material entrante, controles en proceso, inspección final, verificación pre-embarque y pruebas opcionales de terceros."
      }
    },
    {
      icon: "🚢",
      title: { en: "5. Shipping & Delivery", es: "5. Envío y Entrega" },
      desc: {
        en: "Professional export packing with moisture-barrier wrapping and palletized loading. We provide complete documentation: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and any required certificates (FSC, SGS, FDA). Track your shipment from Shenzhen port to your destination.",
        es: "Embalaje profesional de exportación con envoltura de barrera de humedad y carga paletizada. Proporcionamos documentación completa: Conocimiento de Embarque, Factura Comercial, Lista de Empaque, Certificado de Origen y cualquier certificado requerido (FSC, SGS, FDA)."
      }
    },
    {
      icon: "🤝",
      title: { en: "6. Receive & Reorder", es: "6. Reciba y Reordene" },
      desc: {
        en: "Your dedicated account manager remains available for technical support, quality feedback, and reordering. Consistent quality from batch to batch means your production line stays stable — and reordering is as simple as sending an email.",
        es: "Su gerente de cuenta dedicado permanece disponible para soporte técnico, retroalimentación de calidad y nuevos pedidos. La calidad consistente lote a lote significa que su línea de producción se mantiene estable — y reordenar es tan simple como enviar un correo electrónico."
      }
    },
  ];

  return (
    <>
      <PageMeta title="How to Order — Paper Sourcing Process" description="Your step-by-step guide to ordering paper and board from YOUNGSUN PAPER. Specification → Quotation → Samples → Production → Shipping → Delivery." path="/how-to-order" />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Proceso de Pedido" : "Ordering Process"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Cómo Solicitar Papel y Cartón" : "How to Order Paper & Board"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 600, margin: "0 auto" }}>
            {isEs
              ? "Una guía paso a paso — desde la especificación inicial hasta la entrega en su almacén."
              : "A simple step-by-step guide — from initial specification to delivery at your warehouse."}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gap: 24 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--forest)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                  {step.icon}
                </div>
                <div style={{ flex: 1, paddingTop: 6 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{step.title[lang]}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7 }}>{step.desc[lang]}</p>
                  {step.tip && (
                    <p style={{ marginTop: 8, fontSize: 13, color: "var(--gold)", fontStyle: "italic" }}>💡 {step.tip[lang]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 16 }}>
          {isEs ? "¿Listo para hacer su pedido?" : "Ready to Place Your Order?"}
        </h2>
        <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>
          {isEs
            ? "Comience con una cotización gratuita. Respondemos en 24 horas."
            : "Start with a free quotation. We respond within 24 hours."}
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            {isEs ? "Solicitar Cotización" : "Request a Quote"} →
          </Link>
          <a href="https://wa.me/8613713459656" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}

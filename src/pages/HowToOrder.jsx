// ============================================================
// YOUNGSUN PAPER — How to Order Page
// ============================================================
import { Link } from "react-router-dom";
import { BadgeDollarSign, Check, ClipboardList, Factory, FlaskConical, Lightbulb, RefreshCw, Ship } from "lucide-react";
import { useLang } from "../i18n.jsx";
import { PageMeta, HowToSchema } from "../SEO.jsx";

export default function HowToOrder() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const steps = [
    {
      icon: ClipboardList,
      title: { en: "1. Define Your Specification", es: "1. Defina Su Especificación" },
      desc: {
        en: "Tell us your product type, GSM or thickness, sheet size or reel width, quantity, application, and target market. The more detail you provide, the faster and more accurate our quotation will be.",
        es: "Indíquenos su tipo de producto, GSM o espesor, tamaño de hoja o ancho de bobina, cantidad, aplicación y mercado objetivo. Cuanto más detalle proporcione, más rápida y precisa será nuestra cotización."
      },
      tip: { en: "Pro tip: Include your destination port for accurate freight pricing.", es: "Consejo: Incluya su puerto de destino para precios de flete precisos." }
    },
    {
      icon: BadgeDollarSign,
      title: { en: "2. Receive Quotation", es: "2. Reciba Cotización" },
      desc: {
        en: "We respond within 24 hours with a detailed proforma invoice including: product specification, unit price, total amount, payment terms, delivery terms (FOB or CIF), estimated shipment date, and packing details.",
        es: "Respondemos dentro de 24 horas con una factura proforma detallada que incluye: especificación del producto, precio unitario, monto total, términos de pago, términos de entrega (FOB o CIF), fecha estimada de envío y detalles de embalaje."
      }
    },
    {
      icon: FlaskConical,
      title: { en: "3. Approve Samples", es: "3. Apruebe Muestras" },
      desc: {
        en: "YOUNGSUN covers the material cost of standard samples; the customer pays the international courier charge. Test the paper on your production line — printing, cutting, folding, gluing, or forming. We only proceed to production after you confirm the sample meets your requirements.",
        es: "YOUNGSUN cubre el costo del material de las muestras estándar; el cliente paga el transporte internacional. Pruebe el papel en su línea de producción — impresión, corte, plegado, encolado o formado. Solo procedemos después de confirmar que la muestra cumple sus requisitos."
      },
      tip: { en: "Pro tip: Test with your actual production conditions, not just visual inspection.", es: "Consejo: Pruebe con sus condiciones de producción reales, no solo inspección visual." }
    },
    {
      icon: Factory,
      title: { en: "4. Production & Quality Control", es: "4. Producción y Control de Calidad" },
      desc: {
        en: "Production begins after order confirmation and deposit. Our 5-stage quality control process monitors every batch: incoming material inspection, in-process checks, final inspection, pre-shipment verification, and optional third-party testing.",
        es: "La producción comienza después de la confirmación del pedido y el depósito. Nuestro proceso de control de calidad de 5 etapas monitorea cada lote: inspección de material entrante, controles en proceso, inspección final, verificación pre-embarque y pruebas opcionales de terceros."
      }
    },
    {
      icon: Ship,
      title: { en: "5. Shipping & Delivery", es: "5. Envío y Entrega" },
      desc: {
        en: "Professional export packing with moisture-barrier wrapping and palletized loading. Standard shipping documents include the Bill of Lading, Commercial Invoice, Packing List, and Certificate of Origin. Product-specific supporting documents are confirmed before order placement.",
        es: "Embalaje profesional de exportación con protección contra humedad y carga paletizada. Los documentos habituales incluyen conocimiento de embarque, factura comercial, lista de empaque y certificado de origen. Los documentos específicos del producto se confirman antes del pedido."
      }
    },
    {
      icon: RefreshCw,
      title: { en: "6. Receive & Reorder", es: "6. Reciba y Reordene" },
      desc: {
        en: "Your dedicated account manager remains available for technical support, quality feedback, and reordering. Consistent quality from batch to batch means your production line stays stable — and reordering is as simple as sending an email.",
        es: "Su gerente de cuenta dedicado permanece disponible para soporte técnico, retroalimentación de calidad y nuevos pedidos. La calidad consistente lote a lote significa que su línea de producción se mantiene estable — y reordenar es tan simple como enviar un correo electrónico."
      }
    },
  ];

  const quoteChecklist = [
    { en: "Paper or board grade", es: "Tipo de papel o cartón" },
    { en: "GSM or thickness", es: "Gramaje o espesor" },
    { en: "Sheet size or reel width", es: "Tamaño de hoja o ancho de bobina" },
    { en: "Estimated order quantity", es: "Cantidad estimada del pedido" },
    { en: "End use and converting process", es: "Uso final y proceso de conversión" },
    { en: "Destination port or delivery city", es: "Puerto de destino o ciudad de entrega" },
    { en: "Required testing or documentation", es: "Ensayos o documentación requeridos" },
  ];

  return (
    <>
      <PageMeta title="How to Order — Paper Sourcing Process" description="Your step-by-step guide to ordering paper and board from YOUNGSUN PAPER. Specification → Quotation → Samples → Production → Shipping → Delivery." path="/how-to-order" />
      <HowToSchema
        title={isEs ? "Cómo Solicitar Papel y Cartón" : "How to Order Paper & Board"}
        description={isEs ? "Guía paso a paso para comprar papel y cartón de YOUNGSUN PAPER." : "Step-by-step guide to sourcing paper and board from YOUNGSUN PAPER."}
        steps={steps.map(function(s) { return { name: s.title[lang].replace(/^\d+\.\s*/, ""), text: s.desc[lang], tip: s.tip ? s.tip[lang] : null }; })}
      />

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
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--forest)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                  <StepIcon size={25} strokeWidth={1.7} color="#fff" aria-hidden="true" />
                </div>
                <div style={{ flex: 1, paddingTop: 6 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{step.title[lang]}</h3>
                  <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7 }}>{step.desc[lang]}</p>
                  {step.tip && (
                    <p style={{ marginTop: 10, fontSize: 13, color: "var(--gold)", fontStyle: "italic", display: "flex", gap: 7, alignItems: "flex-start" }}><Lightbulb size={15} aria-hidden="true" style={{ marginTop: 2, flexShrink: 0 }} /> {step.tip[lang]}</p>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)", paddingTop: 70, paddingBottom: 70 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", maxWidth: 650, margin: "0 auto 30px" }}>
            <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: 12, textTransform: "uppercase" }}>{isEs ? "Antes de cotizar" : "Before requesting a quote"}</span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", color: "var(--forest)", margin: "10px 0 10px" }}>{isEs ? "Prepare estos datos" : "Prepare These Details"}</h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7 }}>{isEs ? "Una solicitud completa nos permite recomendar el grado correcto y calcular precio, plazo y transporte con mayor precisión." : "A complete request helps us recommend the right grade and calculate price, lead time, and freight more accurately."}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {quoteChecklist.map((item) => (
              <div key={item.en} style={{ display: "flex", alignItems: "center", gap: 11, background: "#fff", border: "1px solid rgba(20,54,34,0.1)", padding: "15px 17px", borderRadius: 8, color: "var(--ink)", fontSize: 14 }}>
                <Check size={18} color="var(--forest)" strokeWidth={2.2} aria-hidden="true" />
                <span>{item[lang]}</span>
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

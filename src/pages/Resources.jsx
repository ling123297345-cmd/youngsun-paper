import { Link } from "react-router-dom";
import { BookOpen, Calculator, CheckCircle2, Container, FileCheck2, Scale, ShieldCheck } from "lucide-react";
import { useLang } from "../i18n.jsx";
import { PageMeta } from "../SEO.jsx";

const resources = [
  {
    icon: Scale,
    title: { en: "Paper GSM & Thickness Guide", es: "Guía de GSM y Espesor" },
    desc: { en: "Compare GSM, caliper, microns and points before requesting samples or production tolerances.", es: "Compare GSM, calibre, micras y puntos antes de solicitar muestras o tolerancias de producción." },
    href: "/blog/paper-thickness-guide-gsm-caliper-points",
  },
  {
    icon: Calculator,
    title: { en: "Paper Weight & Container Calculator Guide", es: "Guía de Peso y Carga de Contenedor" },
    desc: { en: "Estimate sheet weight, order tonnage and container loading from GSM and finished sheet size.", es: "Calcule el peso de hoja, tonelaje del pedido y carga de contenedor según GSM y tamaño final." },
    href: "/blog/how-to-calculate-paper-weight-container-shipping",
  },
  {
    icon: ShieldCheck,
    title: { en: "Certification & Compliance Guide", es: "Guía de Certificación y Cumplimiento" },
    desc: { en: "Understand FSC, food-contact and testing documents, then confirm the exact documents for your selected grade.", es: "Conozca los documentos FSC, de contacto alimentario y pruebas, y confirme cuáles aplican al producto elegido." },
    href: "/blog/sustainable-paper-fsc-recycled-compliance-guide",
  },
  {
    icon: Container,
    title: { en: "Ocean Freight for Paper Buyers", es: "Transporte Marítimo para Compradores" },
    desc: { en: "Review container types, packing, moisture control, shipping documents and planning questions.", es: "Revise tipos de contenedor, embalaje, humedad, documentos y preguntas de planificación." },
    href: "/blog/ocean-freight-paper-logistics-guide",
  },
  {
    icon: FileCheck2,
    title: { en: "Paper Quote Comparison Checklist", es: "Lista para Comparar Cotizaciones" },
    desc: { en: "Compare specifications, tolerances, packing, payment terms and total landed cost—not only the price per ton.", es: "Compare especificaciones, tolerancias, embalaje, pago y costo total, no solo el precio por tonelada." },
    href: "/blog/how-to-compare-paper-quotes-from-different-suppliers",
  },
  {
    icon: BookOpen,
    title: { en: "Paper Buyer's Glossary", es: "Glosario para Compradores de Papel" },
    desc: { en: "A practical reference for GSM, caliper, deckle, grain direction, Cobb, KIT rating and other sourcing terms.", es: "Referencia práctica de GSM, calibre, dirección de fibra, Cobb, KIT y otros términos de compra." },
    href: "/blog/paper-glossary-terms-buyers-should-know",
  },
];

const specificationChecklist = [
  { en: "Product grade and final application", es: "Grado de producto y aplicación final" },
  { en: "GSM, caliper or finished thickness", es: "GSM, calibre o espesor terminado" },
  { en: "Sheet size, reel width and grain direction", es: "Tamaño, ancho de bobina y dirección de fibra" },
  { en: "Order quantity and required delivery date", es: "Cantidad y fecha de entrega necesaria" },
  { en: "Printing, coating and converting process", es: "Proceso de impresión, recubrimiento y conversión" },
  { en: "Surface, color, stiffness or barrier target", es: "Objetivo de superficie, color, rigidez o barrera" },
  { en: "Certification and test-document requirements", es: "Certificaciones e informes de ensayo necesarios" },
  { en: "Destination port and preferred Incoterm", es: "Puerto de destino e Incoterm preferido" },
];

const documentSupport = [
  {
    title: { en: "Technical data and tolerances", es: "Datos técnicos y tolerancias" },
    desc: { en: "Confirm the measurable properties, test methods and accepted production tolerances for the selected grade before ordering.", es: "Confirme propiedades medibles, métodos de ensayo y tolerancias de producción antes del pedido." },
  },
  {
    title: { en: "Compliance and traceability", es: "Cumplimiento y trazabilidad" },
    desc: { en: "Check which FSC, food-contact, mill or third-party documents apply to the exact product and destination market.", es: "Compruebe qué documentos FSC, alimentarios, del molino o de terceros aplican al producto y mercado." },
  },
  {
    title: { en: "Samples and production trials", es: "Muestras y pruebas de producción" },
    desc: { en: "Use a representative sample to test printing, folding, gluing, forming or wrapping under your real production conditions.", es: "Pruebe impresión, plegado, pegado, formado o envoltura con una muestra representativa." },
  },
  {
    title: { en: "Packing and logistics planning", es: "Planificación de embalaje y logística" },
    desc: { en: "Review pallet height, moisture protection, reel or sheet packing, container loading and export documents before shipment.", es: "Revise palés, humedad, embalaje, carga de contenedor y documentos de exportación antes del envío." },
  },
];

export default function Resources() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <>
      <PageMeta title="Paper Buying Resources & Guides" description="Use practical paper buying guides for GSM, thickness, specifications, quality documents, container loading, freight, and supplier quote comparison." path="/resources" />

      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase" }}>
            {isEs ? "Biblioteca del Comprador" : "Buyer Resource Library"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Guías Prácticas para Comprar Papel" : "Practical Paper Buying Guides"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 650, margin: "0 auto" }}>
            {isEs ? "Información útil para definir especificaciones, comparar ofertas y preparar un pedido internacional." : "Useful references for defining specifications, comparing offers, and preparing an international paper order."}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 1040, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {resources.map((resource) => {
            const Icon = resource.icon;
            const ResourceLink = isEs ? "a" : Link;
            const linkProps = isEs ? { href: `${resource.href}/` } : { to: resource.href };
            return (
              <ResourceLink key={resource.href} {...linkProps} style={{ background: "#fff", padding: "28px", display: "flex", flexDirection: "column", minHeight: 245, color: "inherit", textDecoration: "none", border: "1px solid rgba(20,54,34,0.1)", boxShadow: "var(--shadow-sm)" }}>
                <Icon size={30} strokeWidth={1.6} color="var(--forest)" aria-hidden="true" />
                <span style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, marginTop: 22, textTransform: "uppercase" }}>{isEs ? "Guía en inglés" : "Online guide"}</span>
                <h2 style={{ fontSize: 19, fontWeight: 700, color: "var(--forest)", margin: "7px 0 8px" }}>{resource.title[lang]}</h2>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>{resource.desc[lang]}</p>
                <strong style={{ marginTop: "auto", color: "var(--forest)", fontSize: 13 }}>{isEs ? "Leer la guía" : "Read the guide"} →</strong>
              </ResourceLink>
            );
          })}
        </div>
      </section>

      <section className="section" style={{ background: "#fff", padding: "76px 20px" }}>
        <div className="container" style={{ maxWidth: 1040, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 64, alignItems: "start" }}>
          <div>
            <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>{isEs ? "Antes de cotizar" : "Before requesting a quote"}</span>
            <h2 style={{ color: "var(--forest)", fontSize: "clamp(26px, 4vw, 38px)", margin: "10px 0 18px", lineHeight: 1.15 }}>
              {isEs ? "Prepare una especificación lista para cotizar" : "Build a Quote-Ready Paper Specification"}
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
              {isEs
                ? "Una solicitud completa reduce aclaraciones, evita comparar grados distintos y permite calcular el precio y el transporte con mayor precisión. Si todavía no conoce algún dato, indique la aplicación final y nuestro equipo le ayudará a definirlo."
                : "A complete request reduces clarification time, prevents unlike grades from being compared, and makes price and freight calculations more accurate. If a detail is still unknown, describe the finished application and our team will help define it."}
            </p>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", borderTop: "1px solid rgba(20,54,34,0.14)" }}>
            {specificationChecklist.map((item) => (
              <li key={item.en} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "16px 12px 16px 0", borderBottom: "1px solid rgba(20,54,34,0.14)", color: "var(--forest)", fontSize: 14, lineHeight: 1.5 }}>
                <CheckCircle2 size={17} strokeWidth={1.8} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                <span>{item[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)", padding: "72px 20px" }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ maxWidth: 700, marginBottom: 36 }}>
            <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700, textTransform: "uppercase" }}>{isEs ? "Apoyo documental" : "Document support"}</span>
            <h2 style={{ color: "var(--forest)", fontSize: "clamp(25px, 4vw, 34px)", margin: "10px 0 12px" }}>{isEs ? "Qué podemos confirmar antes del pedido" : "What We Can Confirm Before You Order"}</h2>
            <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{isEs ? "La documentación depende del grado, molino, uso y país de destino. La confirmamos para el producto concreto, no como una promesa general." : "Document availability depends on the grade, producing mill, application and destination country. We confirm it for the exact product rather than treating it as a general claim."}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, borderTop: "1px solid rgba(20,54,34,0.14)", borderBottom: "1px solid rgba(20,54,34,0.14)" }}>
            {documentSupport.map((item, index) => (
              <article key={item.title.en} style={{ padding: "26px 24px", borderLeft: index === 0 ? "none" : "1px solid rgba(20,54,34,0.14)" }}>
                <strong style={{ display: "block", color: "var(--forest)", fontSize: 16, marginBottom: 9 }}>{item.title[lang]}</strong>
                <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.desc[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff", textAlign: "center", padding: "76px 20px" }}>
        <h2 style={{ fontSize: 26, color: "var(--forest)", marginBottom: 12 }}>
          {isEs ? "¿Necesita una ficha técnica o documento específico?" : "Need a Specification Sheet or Supporting Document?"}
        </h2>
        <p style={{ fontSize: 15, color: "var(--muted)", margin: "0 auto 28px", maxWidth: 650 }}>
          {isEs ? "Indique el producto, aplicación y mercado de destino. Confirmaremos qué ficha técnica, muestra o documento está disponible para ese grado." : "Tell us the product, application, and destination market. We will confirm which data sheet, sample, or supporting document is available for that grade."}
        </p>
        <Link to="/contact" style={{ background: "var(--forest)", color: "#fff", padding: "14px 34px", borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Solicitar Documentación" : "Request Documentation"} →
        </Link>
      </section>
    </>
  );
}

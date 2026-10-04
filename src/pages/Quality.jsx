// ============================================================
// YOUNGSUN PAPER — Quality Assurance Page
// ============================================================
import { Link } from "react-router-dom";
import { FileCheck2, FlaskConical, TreePine, UtensilsCrossed } from "lucide-react";
import { useLang } from "../i18n.jsx";
import { PageMeta } from "../SEO.jsx";

export default function Quality() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const certifications = [
    { name: { en: "FSC® Documentation", es: "Documentación FSC®" }, desc: { en: "FSC chain-of-custody claims and supporting documents are confirmed for the selected grade, mill, and order before purchase.", es: "Las declaraciones FSC y sus documentos se confirman para el grado, molino y pedido seleccionados antes de la compra." }, icon: TreePine },
    { name: { en: "Independent Testing", es: "Ensayos Independientes" }, desc: { en: "Available third-party reports and inspection options are matched to the product specification and destination-market requirements.", es: "Los informes de terceros y opciones de inspección se adaptan a la especificación y al mercado de destino." }, icon: FlaskConical },
    { name: { en: "Mill & Supplier Records", es: "Documentos de Fábrica y Proveedor" }, desc: { en: "Management-system certificates and mill documents are supplied where applicable, with the issuing entity and validity checked.", es: "Los certificados de gestión y documentos del molino se entregan cuando aplican, verificando emisor y vigencia." }, icon: FileCheck2 },
    { name: { en: "Food-Contact Support", es: "Soporte para Contacto Alimentario" }, desc: { en: "For food packaging grades, we confirm the available declaration or test report against the intended use and destination market.", es: "Para grados alimentarios, confirmamos la declaración o informe disponible según el uso y mercado de destino." }, icon: UtensilsCrossed },
  ];

  const inspectionPoints = [
    { title: { en: "Incoming Raw Material", es: "Materia Prima Entrante" }, desc: { en: "Every batch of base paper and board is inspected for GSM, moisture content, caliper, and visual defects before entering production.", es: "Cada lote de papel base es inspeccionado por GSM, humedad, calibre y defectos visuales antes de entrar en producción." } },
    { title: { en: "In-Process Quality Checks", es: "Controles de Calidad en Proceso" }, desc: { en: "Continuous monitoring during slitting, sheeting, and converting — width tolerance, cut quality, roll tension, and surface integrity.", es: "Monitoreo continuo durante corte y conversión — tolerancia de ancho, calidad de corte, tensión de bobina e integridad superficial." } },
    { title: { en: "Final Inspection", es: "Inspección Final" }, desc: { en: "100% visual inspection of finished sheets and reels. Random sampling for laboratory testing against agreed specifications.", es: "Inspección visual 100% de hojas y bobinas terminadas. Muestreo aleatorio para pruebas de laboratorio contra especificaciones acordadas." } },
    { title: { en: "Pre-Shipment Inspection", es: "Inspección Pre-Embarque" }, desc: { en: "Final quality gate before container loading. Quantity verification, packing integrity, moisture protection, and documentation completeness.", es: "Control de calidad final antes de carga del contenedor. Verificación de cantidad, integridad de embalaje, protección contra humedad y documentación completa." } },
    { title: { en: "Third-Party Testing", es: "Pruebas de Terceros" }, desc: { en: "Independent inspection or laboratory testing can be discussed when the buyer's specification or destination market requires additional verification.", es: "Se puede acordar inspección o ensayo independiente cuando la especificación o el mercado de destino requieran verificación adicional." } },
  ];

  const equipment = [
    { en: "Digital GSM tester", es: "Probador GSM digital" },
    { en: "Moisture meter (infrared)", es: "Medidor de humedad (infrarrojo)" },
    { en: "Caliper micrometer (±0.001mm)", es: "Micrómetro de calibre (±0.001mm)" },
    { en: "Tensile strength tester", es: "Probador de resistencia a tracción" },
    { en: "Burst strength tester", es: "Probador de resistencia al estallido" },
    { en: "Brightness & whiteness meter", es: "Medidor de brillo y blancura" },
    { en: "Cobb absorption tester", es: "Probador de absorción Cobb" },
    { en: "KIT test kit (grease resistance)", es: "Kit de prueba KIT (resistencia grasa)" },
    { en: "Visual inspection light tables", es: "Mesas de luz para inspección visual" },
    { en: "Metal detection system", es: "Sistema de detección de metales" },
  ];

  return (
    <>
      <PageMeta title="Paper Quality Assurance & Certifications" description="Review YOUNGSUN PAPER quality controls, inspection procedures, certifications, testing support, and export documentation for paper orders." path="/quality" />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Garantía de Calidad" : "Quality Assurance"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Calidad en la Que Puede Confiar" : "Quality You Can Trust"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 600, margin: "0 auto" }}>
            {isEs
              ? "Estándares de calidad rigurosos en cada etapa — desde la inspección de materia prima hasta la verificación pre-embarque."
              : "Rigorous quality standards at every stage — from raw material inspection to pre-shipment verification."}
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>
            {isEs ? "Documentos y Verificación" : "Documents & Verification"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
              <div key={cert.name.en} style={{ background: "var(--paper)", borderRadius: 8, padding: "28px 24px", textAlign: "center", border: "1px solid rgba(20,54,34,0.08)" }}>
                <Icon size={34} strokeWidth={1.5} color="var(--forest)" aria-hidden="true" style={{ margin: "0 auto 14px" }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{cert.name[lang]}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{cert.desc[lang]}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>
            {isEs ? "Proceso de Inspección en 5 Etapas" : "5-Stage Inspection Process"}
          </h2>
          <div style={{ display: "grid", gap: 16 }}>
            {inspectionPoints.map((pt, i) => (
              <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", background: "#fff", padding: "24px 28px", borderRadius: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--forest)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--forest)", marginBottom: 4 }}>{pt.title[lang]}</h4>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{pt.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>
            {isEs ? "Equipo de Inspección" : "Inspection Equipment"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
            {equipment.map((eq, i) => (
              <div key={i} style={{ background: "var(--paper)", padding: "14px 18px", borderRadius: 8, fontSize: 14, color: "var(--ink)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span> {eq[lang]}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality checkpoints */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 800, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 24, textAlign: "center" }}>
          {[
            { num: "5", label: isEs ? "Etapas de Inspección" : "Inspection Stages" },
            { num: "GSM", label: isEs ? "Control de Gramaje" : "Basis Weight Check" },
            { num: "mm", label: isEs ? "Control de Calibre" : "Caliper Check" },
            { num: "LOT", label: isEs ? "Registros por Lote" : "Batch Records" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "var(--gold)" }}>{s.num}</div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--paper)", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 12 }}>
          {isEs ? "¿Necesita documentación de calidad?" : "Need Quality Documentation?"}
        </h2>
        <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 28 }}>
          {isEs ? "Indique el producto y el mercado de destino. Confirmaremos los certificados, informes y documentos disponibles para ese pedido." : "Tell us the product and destination market. We will confirm the certificates, reports, and supporting documents available for that order."}
        </p>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Solicitar Certificados" : "Request Certificates"} →
        </Link>
      </section>
    </>
  );
}

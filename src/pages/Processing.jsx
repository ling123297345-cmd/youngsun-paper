// ============================================================
// YOUNGSUN PAPER — Processing Capabilities Page
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { processingServices } from "../processingData.js";
import { PageMeta } from "../SEO.jsx";

export default function Processing() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <>
      <PageMeta
        title="Paper Processing & Converting Services"
        description="Value-added paper processing: slitting, die-cutting, lamination, printing, embossing, and export packing. Custom converting for your exact specifications."
        path="/processing"
      />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Servicios de Transformación" : "Processing Services"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Más que Suministro de Papel" : "More Than Paper Supply"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 650, margin: "0 auto" }}>
            {isEs
              ? "Servicios de transformación de valor añadido — desde corte de precisión hasta embalaje de exportación. Entregamos papel listo para su línea de producción."
              : "Value-added converting services — from precision slitting to export packing. We deliver paper ready for your production line."}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 1000, display: "grid", gap: 32 }}>
          {processingServices.map((svc) => (
            <div key={svc.id} id={svc.id} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {/* Image */}
                <div style={{ flex: "0 0 280px", minHeight: 240, background: "var(--forest-light)", overflow: "hidden" }}>
                  <img src={svc.image} alt={svc.title[lang]} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </div>
                {/* Content */}
                <div style={{ flex: 1, padding: "28px 32px", minWidth: 280 }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>{svc.icon}</div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{svc.title[lang]}</h2>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginBottom: 16 }}>{svc.tagline[lang]}</p>
                  <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.7, marginBottom: 18 }}>{svc.overview[lang]}</p>

                  {/* Capabilities */}
                  <details style={{ marginBottom: 12 }}>
                    <summary style={{ fontWeight: 600, fontSize: 14, cursor: "pointer", color: "var(--gold)" }}>
                      {isEs ? "Especificaciones Técnicas" : "Technical Specifications"}
                    </summary>
                    <ul style={{ marginTop: 10, paddingLeft: 20, fontSize: 13, color: "var(--ink)", lineHeight: 2 }}>
                      {svc.capabilities.map((c, i) => <li key={i}>{c[lang]}</li>)}
                    </ul>
                  </details>

                  {/* Applications */}
                  <details style={{ marginBottom: 12 }}>
                    <summary style={{ fontWeight: 600, fontSize: 14, cursor: "pointer", color: "var(--gold)" }}>
                      {isEs ? "Aplicaciones" : "Applications"}
                    </summary>
                    <ul style={{ marginTop: 10, paddingLeft: 20, fontSize: 13, color: "var(--ink)", lineHeight: 2 }}>
                      {svc.applications.map((a, i) => <li key={i}>{a[lang]}</li>)}
                    </ul>
                  </details>

                  {/* Info */}
                  <div style={{ display: "flex", gap: 24, fontSize: 13, color: "var(--muted)", marginTop: 12 }}>
                    <span>⏱ {svc.leadTime[lang]}</span>
                    <span>📦 {svc.moq[lang]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 12 }}>
          {isEs ? "¿Necesita un servicio personalizado?" : "Need a Custom Service?"}
        </h2>
        <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 28 }}>
          {isEs ? "Cuéntenos sus requisitos — es probable que podamos ayudarle." : "Tell us your requirements — we can likely help."}
        </p>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Consultar Disponibilidad" : "Inquire Now"} →
        </Link>
      </section>
    </>
  );
}

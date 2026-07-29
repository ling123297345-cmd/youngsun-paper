// ============================================================
// YOUNGSUN PAPER — Pulp Materials Hub Page
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { pulpHub, pillarArticles, buyerGuides } from "../pulpMaterialsData.js";
import { PageMeta } from "../SEO.jsx";

export default function PulpMaterials() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <>
      <PageMeta title={pulpHub.seoTitle} description={pulpHub.metaDescription} path="/materials/pulp" />

      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Materiales de Fibra" : "Fiber Materials"}
          </span>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", marginTop: 12, marginBottom: 12 }}>{pulpHub.title}</h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 700, margin: "0 auto" }}>{pulpHub.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink)" }}>{pulpHub.intro}</p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>
            {isEs ? "Comparación de Fibras" : "Fiber Comparison"}
          </h2>
          <div style={{ overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "var(--forest)", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Material" : "Material"}</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Lo que nota el comprador" : "What buyers notice"}</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Fortalezas" : "Common strengths"}</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Usos típicos" : "Typical paper uses"}</th>
                </tr>
              </thead>
              <tbody>
                {pulpHub.comparisonTable.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--line)", background: i % 2 === 0 ? "#fff" : "var(--paper)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "var(--forest)" }}>{row.material}</td>
                    <td style={{ padding: "12px 16px", color: "var(--ink)" }}>{row.notice}</td>
                    <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{row.strengths}</td>
                    <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{row.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pillar Articles */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>
            {isEs ? "Guías de Materiales" : "Material Guides"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {pillarArticles.map((art) => (
              <Link key={art.id} to={`/materials/${art.id}`} style={{ background: "var(--paper)", borderRadius: 14, padding: "24px 28px", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s var(--ease-out)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{art.shortTitle}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 12 }}>{art.oneSentence}</p>
                <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13 }}>{isEs ? "Leer guía →" : "Read guide →"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Guides */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>
            {isEs ? "Guías para Compradores" : "Buyer Guides"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {buyerGuides.map((guide) => (
              <Link key={guide.id} to={`/materials/${guide.id}`} style={{ background: "#fff", borderRadius: 14, padding: "24px 28px", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s var(--ease-out)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
              >
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{guide.shortTitle}</h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 12 }}>{guide.intro.slice(0, 150)}…</p>
                <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13 }}>{isEs ? "Leer guía →" : "Read guide →"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Direction Table */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 16, textAlign: "center" }}>
            {isEs ? "Selección por Requisito" : "Start with the End Use"}
          </h2>
          <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: 24, fontSize: 14 }}>
            {isEs ? "Use la información de pulpa para entender por qué un grado se comporta como lo hace, pero apruebe el papel real según especificaciones y muestras medibles." : "Use pulp information to understand why a grade behaves the way it does, but approve the actual paper against measurable specifications and samples."}
          </p>
          <div style={{ overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "var(--forest)", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Requisito" : "Buyer requirement"}</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Dirección de fibra" : "Fiber direction"}</th>
                  <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Qué verificar" : "What to verify"}</th>
                </tr>
              </thead>
              <tbody>
                {pulpHub.buyerGuide.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--line)", background: i % 2 === 0 ? "#fff" : "var(--paper)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--forest)" }}>{row.requirement}</td>
                    <td style={{ padding: "12px 16px", color: "var(--ink)" }}>{row.fiberDirection}</td>
                    <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{row.verify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>FAQ</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {pulpHub.faqs.map((faq, i) => (
              <details key={i} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <summary style={{ padding: "18px 24px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "var(--forest)" }}>{faq.q}</summary>
                <p style={{ padding: "0 24px 20px", fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: 650 }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 16 }}>
            {isEs ? "¿Listo para encontrar el papel adecuado?" : "Ready to Find the Right Paper?"}
          </h2>
          <p style={{ fontSize: 15, opacity: 0.8, marginBottom: 28 }}>{pulpHub.cta}</p>
          <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
            {isEs ? "Solicitar Cotización" : "Request a Quote"} →
          </Link>
        </div>
      </section>
    </>
  );
}

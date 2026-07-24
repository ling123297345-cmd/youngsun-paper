// ============================================================
// YOUNGSUN PAPER — Case Study Detail Page
// ============================================================
import { useParams, Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { caseStudies } from "../caseStudiesData.js";
import { PageMeta } from "../SEO.jsx";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const { lang } = useLang();
  const isEs = lang === "es";
  const cs = caseStudies.find((c) => c.id === id);

  if (!cs) {
    return (
      <section className="section" style={{ paddingTop: 140, textAlign: "center", minHeight: "60vh" }}>
        <h1>{isEs ? "Caso no encontrado" : "Case study not found"}</h1>
        <Link to="/case-studies" style={{ color: "var(--gold)" }}>← {isEs ? "Volver" : "Back to Case Studies"}</Link>
      </section>
    );
  }

  return (
    <>
      <PageMeta title={`${cs.title.en} — Case Study`} description={cs.summary.en?.slice(0, 160)} path={`/case-studies/${id}`} />

      {/* Hero */}
      <section style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <Link to="/case-studies" style={{ color: "var(--gold)", fontSize: 14 }}>← {isEs ? "Todos los Casos" : "All Case Studies"}</Link>
          <div style={{ display: "flex", gap: 10, marginTop: 16, marginBottom: 12 }}>
            <span style={{ background: "var(--gold)", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{cs.category}</span>
            <span style={{ background: "rgba(255,255,255,0.15)", padding: "4px 14px", borderRadius: 20, fontSize: 12 }}>{cs.industry}</span>
          </div>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", marginBottom: 16, lineHeight: 1.3 }}>{cs.title[lang]}</h1>
          <p style={{ fontSize: 15, opacity: 0.7 }}>{cs.client[lang]}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gap: 40 }}>
            {/* Summary */}
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--ink)", fontWeight: 500 }}>{cs.summary[lang]}</p>

            {/* Challenge */}
            <div>
              <h3 style={{ color: "var(--gold)", fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
                {isEs ? "El Desafío" : "The Challenge"}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)" }}>{cs.challenge[lang]}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 style={{ color: "var(--gold)", fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
                {isEs ? "Nuestra Solución" : "Our Solution"}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)" }}>{cs.solution[lang]}</p>
            </div>

            {/* Results */}
            <div style={{ background: "var(--forest)", borderRadius: 16, padding: "36px 32px", color: "#fff" }}>
              <h3 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2, marginBottom: 24, opacity: 0.7 }}>
                {isEs ? "Resultados Clave" : "Key Results"}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24 }}>
                {cs.results.map((r, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: "var(--gold)", marginBottom: 4 }}>{r.metric[lang]}</div>
                    <div style={{ fontSize: 13, opacity: 0.8 }}>{r.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <blockquote style={{ borderLeft: "4px solid var(--gold)", paddingLeft: 24, margin: 0 }}>
              <p style={{ fontSize: 17, fontStyle: "italic", lineHeight: 1.7, color: "var(--ink)" }}>{cs.testimonial.quote[lang]}</p>
              <footer style={{ marginTop: 12, fontSize: 14, color: "var(--muted)", fontWeight: 500 }}>{cs.testimonial.author[lang]}</footer>
            </blockquote>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cs.tags.map((tag) => (
                <span key={tag} style={{ background: "var(--paper-green)", padding: "5px 14px", borderRadius: 20, fontSize: 12, color: "var(--forest)", fontWeight: 500 }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--paper)", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 12 }}>
          {isEs ? "¿Quiere resultados similares?" : "Want Similar Results?"}
        </h2>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Hable con Nosotros" : "Talk to Us"} →
        </Link>
      </section>
    </>
  );
}

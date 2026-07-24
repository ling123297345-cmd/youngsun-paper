// ============================================================
// YOUNGSUN PAPER — Case Studies List Page
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { caseStudies, caseStudyCategories } from "../caseStudiesData.js";
import { PageMeta } from "../SEO.jsx";

export default function CaseStudies() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <>
      <PageMeta
        title="Case Studies — Real Results for Paper & Board Buyers"
        description="See how packaging converters, printers, and brand owners achieve measurable results with YOUNGSUN PAPER. Cost savings, supply chain wins, and quality improvements."
        path="/case-studies"
      />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Casos de Estudio" : "Case Studies"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Resultados Reales para Compradores de Papel" : "Real Results for Paper Buyers"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 600, margin: "0 auto" }}>
            {isEs
              ? "Vea cómo convertidores, impresores y dueños de marcas logran resultados medibles con YOUNGSUN PAPER."
              : "See how converters, printers, and brand owners achieve measurable results with YOUNGSUN PAPER."}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, padding: "32px 0", maxWidth: 900, textAlign: "center" }}>
          {[
            { num: caseStudies.length, label: isEs ? "Casos de Estudio" : "Case Studies" },
            { num: caseStudyCategories.length, label: isEs ? "Categorías" : "Categories" },
            { num: "6", label: isEs ? "Industrias" : "Industries" },
            { num: "60+", label: isEs ? "Países Clientes" : "Client Countries" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "var(--gold)" }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {caseStudies.map((cs) => (
              <Link
                key={cs.id}
                to={`/case-studies/${cs.id}`}
                style={{
                  background: "#fff", borderRadius: 14, overflow: "hidden",
                  boxShadow: "var(--shadow-sm)", textDecoration: "none", color: "inherit",
                  transition: "transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
              >
                <div style={{ height: 200, overflow: "hidden", background: "var(--forest-light)" }}>
                  <img src={cs.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                </div>
                <div style={{ padding: "22px 24px 28px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <span style={{ background: "var(--gold-pale)", color: "var(--gold)", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>
                      {cs.category}
                    </span>
                    <span style={{ color: "var(--muted-light)", fontSize: 12 }}>{cs.industry}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--forest)", lineHeight: 1.4, marginBottom: 8 }}>
                    {cs.title[lang]}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                    {cs.summary[lang].slice(0, 140)}…
                  </p>
                  {/* Key Metrics */}
                  <div style={{ display: "flex", gap: 16, marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                    {cs.results.slice(0, 3).map((r, i) => (
                      <div key={i}>
                        <div style={{ fontSize: 18, fontWeight: 800, color: "var(--gold)" }}>{r.metric[lang]}</div>
                        <div style={{ fontSize: 10, color: "var(--muted-light)" }}>{r.label[lang]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 16 }}>
          {isEs ? "¿Listo para ser el próximo caso de éxito?" : "Ready to Be Our Next Success Story?"}
        </h2>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Comience Su Proyecto" : "Start Your Project"} →
        </Link>
      </section>
    </>
  );
}

// ============================================================
// YOUNGSUN PAPER — Industry Detail Page
// Deep-dive into each industry with challenges, solutions,
// recommended products, case studies, and FAQs
// ============================================================
import { useParams, Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { industries } from "../industriesData.js";
import { subProducts } from "../data.js";
import { caseStudies } from "../caseStudiesData.js";
import { PageMeta } from "../SEO.jsx";

export default function IndustryDetail() {
  const { id } = useParams();
  const { lang } = useLang();
  const isEs = lang === "es";
  const industry = industries.find((i) => i.id === id);

  if (!industry) {
    return (
      <section className="section" style={{ paddingTop: 140, textAlign: "center", minHeight: "60vh" }}>
        <h1>{isEs ? "Industria no encontrada" : "Industry not found"}</h1>
        <Link to="/industries" style={{ color: "var(--gold)" }}>← {isEs ? "Volver a Industrias" : "Back to Industries"}</Link>
      </section>
    );
  }

  const relatedProducts = industry.recommendedProducts
    .map((pid) => subProducts[pid])
    .filter(Boolean);

  const relatedCaseStudies = caseStudies.filter(
    (cs) => cs.industry === industry.title.en || cs.industry === industry.title.es
  );

  const ind = industry;

  return (
    <>
      <PageMeta
        title={`${ind.title.en} — Paper & Board Solutions`}
        description={ind.overview.en?.slice(0, 160) || ind.tagline.en}
        path={`/industries/${id}`}
      />

      {/* Hero */}
      <section style={{ position: "relative", background: "var(--forest)", minHeight: 360, display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.25 }}>
          <img src={ind.heroImage} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, color: "#fff", paddingTop: 120, paddingBottom: 60 }}>
          <Link to="/industries" style={{ color: "var(--gold)", fontSize: 14, marginBottom: 16, display: "inline-block" }}>
            ← {isEs ? "Todas las Industrias" : "All Industries"}
          </Link>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{ind.icon}</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", marginBottom: 12 }}>{ind.title[lang]}</h1>
          <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 700 }}>{ind.tagline[lang]}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 16 }}>
            {isEs ? "Visión General" : "Industry Overview"}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink)" }}>{ind.overview[lang]}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24 }}>
            {isEs ? "Desafíos Clave" : "Key Challenges"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {ind.challenges.map((ch, i) => (
              <div key={i} style={{ background: "#fff", padding: "24px 28px", borderRadius: 12, borderLeft: "4px solid var(--gold)" }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--forest)", marginBottom: 6 }}>{ch.title[lang]}</h4>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{ch.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>
            {isEs ? "Nuestra Solución" : "Our Solution"}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.9 }}>{ind.solutions[lang]}</p>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24 }}>
            {isEs ? "Productos Recomendados" : "Recommended Products"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {relatedProducts.map((prod) => (
              <Link
                key={prod.id}
                to={`/products/${prod.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 20px",
                  background: "var(--paper)",
                  borderRadius: 10,
                  textDecoration: "none",
                  color: "var(--ink)",
                  fontWeight: 600,
                  fontSize: 14,
                  transition: "all 0.2s var(--ease-out)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--paper-green)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "var(--paper)"; }}
              >
                <span style={{ color: "var(--gold)" }}>📦</span>
                {prod.name?.[lang] || prod.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="section" style={{ background: "var(--paper)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24 }}>
              {isEs ? "Casos de Estudio Relacionados" : "Related Case Studies"}
            </h2>
            <div style={{ display: "grid", gap: 20 }}>
              {relatedCaseStudies.slice(0, 3).map((cs) => (
                <Link
                  key={cs.id}
                  to={`/case-studies/${cs.id}`}
                  style={{
                    background: "#fff",
                    padding: "24px 28px",
                    borderRadius: 12,
                    textDecoration: "none",
                    color: "inherit",
                    boxShadow: "var(--shadow-sm)",
                    transition: "box-shadow 0.2s var(--ease-out)",
                  }}
                >
                  <span style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600, textTransform: "uppercase" }}>
                    {cs.category}
                  </span>
                  <h4 style={{ fontSize: 17, fontWeight: 700, marginTop: 6, color: "var(--forest)" }}>{cs.title[lang]}</h4>
                  <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 8, lineHeight: 1.6 }}>{cs.summary[lang]}</p>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <Link to="/case-studies" style={{ color: "var(--gold)", fontWeight: 600 }}>
                {isEs ? "Ver todos los casos →" : "View all case studies →"}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ fontSize: 24, color: "var(--forest)", marginBottom: 24 }}>FAQ</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {ind.faqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--paper)", borderRadius: 10, overflow: "hidden" }}>
                <summary style={{ padding: "18px 24px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "var(--forest)" }}>
                  {faq.q[lang]}
                </summary>
                <p style={{ padding: "0 24px 20px", fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{faq.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 12 }}>
          {isEs ? "¿Listo para empezar?" : "Ready to Get Started?"}
        </h2>
        <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 28 }}>
          {isEs ? "Hable con nuestro equipo sobre sus requisitos de papel para la industria." : "Talk to our team about your paper requirements for this industry."}
        </p>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Solicitar Cotización" : "Request a Quote"} →
        </Link>
      </section>
    </>
  );
}

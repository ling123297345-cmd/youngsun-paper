// ============================================================
// YOUNGSUN PAPER — Pulp Article Page (pillar articles + buyer guides)
// ============================================================
import { useParams, Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { pillarArticles, buyerGuides } from "../pulpMaterialsData.js";
import { PageMeta } from "../SEO.jsx";

export default function PulpArticle() {
  const { id } = useParams();
  const { lang } = useLang();
  const isEs = lang === "es";

  const article = pillarArticles.find((a) => a.id === id) || buyerGuides.find((g) => g.id === id);

  if (!article) {
    return (
      <section className="section" style={{ paddingTop: 140, textAlign: "center", minHeight: "60vh" }}>
        <h1>{isEs ? "Artículo no encontrado" : "Article not found"}</h1>
        <Link to="/materials/pulp" style={{ color: "var(--gold)" }}>← {isEs ? "Volver a Materiales" : "Back to Materials"}</Link>
      </section>
    );
  }

  const isPillar = "benefits" in article;

  return (
    <>
      <PageMeta title={article.seoTitle} description={article.metaDescription} path={`/materials/${id}`} />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Link to="/materials/pulp" style={{ color: "var(--gold)", fontSize: 14 }}>← {isEs ? "Materiales de Fibra" : "Fiber Materials"}</Link>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginTop: 12, marginBottom: 12, lineHeight: 1.3 }}>{article.title}</h1>
          <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.7 }}>{article.oneSentence}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink)" }}>{article.intro}</p>
        </div>
      </section>

      {/* For Pillar Articles: Benefits */}
      {isPillar && article.benefits && (
        <section className="section" style={{ background: "var(--paper)" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 20 }}>
              {isEs ? "Qué Aporta" : `What ${article.shortTitle} Changes in Paper`}
            </h2>
            <div style={{ display: "grid", gap: 16 }}>
              {article.benefits.map((b, i) => (
                <div key={i} style={{ background: "#fff", padding: "18px 24px", borderRadius: 12, borderLeft: "4px solid var(--gold)" }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--forest)", marginBottom: 4 }}>{b.title}</h4>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* For Pillar: Production */}
      {isPillar && article.production && (
        <section className="section" style={{ background: "#fff" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 16 }}>
              {isEs ? "Cómo se Produce" : "How It Is Produced"}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)" }}>{article.production}</p>
          </div>
        </section>
      )}

      {/* For Pillar: Applications */}
      {isPillar && article.applications && (
        <section className="section" style={{ background: "var(--paper)" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 20 }}>
              {isEs ? "Dónde se Encuentra" : "Where Buyers Commonly Encounter It"}
            </h2>
            <div style={{ overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "var(--forest)", color: "#fff" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Aplicación" : "Application"}</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Por qué ayuda" : "Why it helps"}</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Verificaciones" : "Buyer checks"}</th>
                  </tr>
                </thead>
                <tbody>
                  {article.applications.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--line)", background: i % 2 === 0 ? "#fff" : "var(--paper)" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--forest)" }}>{row.app}</td>
                      <td style={{ padding: "12px 16px", color: "var(--ink)" }}>{row.why}</td>
                      <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{row.checks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* For Buyer Guides: Comparison Table */}
      {!isPillar && article.comparisonTable && (
        <section className="section" style={{ background: "var(--paper)" }}>
          <div className="container" style={{ maxWidth: 950 }}>
            <h2 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 20 }}>
              {isEs ? "Comparación" : "Comparison"}
            </h2>
            <div style={{ overflow: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: "var(--forest)", color: "#fff" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>{isEs ? "Propiedad" : "Property"}</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Mechanical</th>
                    <th style={{ padding: "12px 16px", textAlign: "left" }}>Chemical</th>
                  </tr>
                </thead>
                <tbody>
                  {article.comparisonTable.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--line)", background: i % 2 === 0 ? "#fff" : "var(--paper)" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--forest)" }}>{row.property}</td>
                      <td style={{ padding: "12px 16px", color: "var(--ink)" }}>{row.mechanical}</td>
                      <td style={{ padding: "12px 16px", color: "var(--ink)" }}>{row.chemical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* For Pillar: Important Notes */}
      {isPillar && article.importantNotes && (
        <section className="section" style={{ background: "#FFF7ED", borderTop: "1px solid #FED7AA", borderBottom: "1px solid #FED7AA" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 20, color: "#C2410C", marginBottom: 16 }}>
              {isEs ? "⚠️ Afirmaciones a Tratar con Cuidado" : "⚠️ Claims Buyers Should Treat Carefully"}
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              {article.importantNotes.map((note, i) => (
                <p key={i} style={{ fontSize: 14, color: "#9A3412", lineHeight: 1.7, padding: "12px 16px", background: "#FFF", borderRadius: 8, border: "1px solid #FED7AA" }}>
                  &ldquo;{note}&rdquo;
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* For Buyer Guides: Key Distinction */}
      {!isPillar && article.keyDistinction && (
        <section className="section" style={{ background: "#EFF6FF", borderTop: "1px solid #BFDBFE", borderBottom: "1px solid #BFDBFE" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 20, color: "#1E40AF", marginBottom: 12 }}>
              {isEs ? "💡 Distinción Clave" : "💡 Key Distinction"}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#1E3A5F" }}>{article.keyDistinction}</p>
          </div>
        </section>
      )}

      {/* Best Fit */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 16 }}>
            {isEs ? "Mejor Ajuste" : "Best Fit"}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)" }}>{article.bestFit}</p>
        </div>
      </section>

      {/* Questions */}
      {article.questions && (
        <section className="section" style={{ background: "var(--paper)" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 16 }}>
              {isEs ? "Qué Preguntar Antes de Comprar" : "What to Ask Before Buying"}
            </h2>
            <ul style={{ display: "grid", gap: 10, paddingLeft: 20 }}>
              {article.questions.map((q, i) => (
                <li key={i} style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6 }}>{q}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      {article.faqs && (
        <section className="section" style={{ background: "#fff" }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 22, color: "var(--forest)", marginBottom: 20 }}>FAQ</h2>
            <div style={{ display: "grid", gap: 12 }}>
              {article.faqs.map((faq, i) => (
                <details key={i} style={{ background: "var(--paper)", borderRadius: 12, overflow: "hidden" }}>
                  <summary style={{ padding: "18px 24px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "var(--forest)" }}>{faq.q}</summary>
                  <p style={{ padding: "0 24px 20px", fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: 650 }}>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", marginBottom: 16 }}>
            {isEs ? "¿Listo para encontrar el papel adecuado?" : "Ready to Find the Right Paper?"}
          </h2>
          <p style={{ fontSize: 15, opacity: 0.8, marginBottom: 28 }}>{article.cta}</p>
          <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
            {isEs ? "Solicitar Cotización" : "Request a Quote"} →
          </Link>
        </div>
      </section>
    </>
  );
}

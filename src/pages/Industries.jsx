// ============================================================
// YOUNGSUN PAPER — Industries Page
// Lists all industries we serve with deep-linking to details
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { industries } from "../industriesData.js";
import { PageMeta } from "../SEO.jsx";

export default function Industries() {
  const { t, lang } = useLang();
  const isEs = lang === "es";

  return (
    <>
      <PageMeta
        title="Industries Served — Paper Solutions by Sector"
        description="Explore YOUNGSUN PAPER paper and board solutions by industry: packaging, food & beverage, luxury cosmetics, publishing, electronics, and construction."
        path="/industries"
      />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Soluciones por Sector" : "Solutions by Industry"}
          </span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginTop: 12, marginBottom: 16 }}>
            {isEs ? "Papel Diseñado para Su Industria" : "Paper Engineered for Your Industry"}
          </h1>
          <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 680, margin: "0 auto" }}>
            {isEs
              ? "Cada industria tiene requisitos únicos. Explore nuestras soluciones de papel y cartón adaptadas a las demandas específicas de su sector."
              : "Every industry has unique requirements. Explore our paper and board solutions tailored to your sector's specific demands."}
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 28, maxWidth: 1280 }}>
          {industries.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.id}`}
              style={{
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                transition: "transform 0.25s var(--ease-out), box-shadow 0.25s var(--ease-out)",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
            >
              <div style={{ height: 200, overflow: "hidden", background: "var(--forest-light)" }}>
                <img src={ind.heroImage} alt={ind.title[lang]} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
              <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{ind.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{ind.title[lang]}</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, flex: 1 }}>{ind.tagline[lang]}</p>
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, color: "var(--gold)", fontWeight: 600, fontSize: 14 }}>
                  {isEs ? "Más información" : "Learn more"} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 12 }}>
          {isEs ? "¿No encuentra su industria?" : "Don't See Your Industry?"}
        </h2>
        <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>
          {isEs ? "Contacte con nuestro equipo — suministramos grados de papel personalizados para aplicaciones especializadas en todos los sectores." : "Contact our team — we supply custom paper grades for specialized applications across all sectors."}
        </p>
        <Link to="/contact" className="btn btn-primary" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Solicitar Cotización" : "Request a Quote"} →
        </Link>
      </section>
    </>
  );
}

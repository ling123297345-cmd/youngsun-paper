// ============================================================
// YOUNGSUN PAPER — Industries Page (Redesigned)
// 5 channels: product → material mapping
// 1 channel: Hang Tags full-width mosaic → Fancy Paper gallery
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { industryChannels } from "../industryApplications.js";
import { PageMeta } from "../SEO.jsx";

export default function Industries() {
  const { lang } = useLang();
  const isEs = lang === "es";

  // Separate Hang Tags from normal channels
  const hangTags = industryChannels.find(c => c.id === "hang-tags-labels");
  const normalChannels = industryChannels.filter(c => c.id !== "hang-tags-labels");

  return (
    <>
      <PageMeta
        title="Industries Served — Paper Solutions by Application"
        description="Explore paper and board solutions organized by end-use application. Packaging, food, luxury, publishing, hang tags, and gift wrapping — with recommended materials for each product."
        path="/industries"
      />

      {/* Hero */}
      <section style={{ background: "var(--forest)", color: "#fff", padding: "140px 0 80px", textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Soluciones por Aplicación" : "Solutions by Application"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Cada Producto Tiene Su Papel" : "Every Product Has Its Paper"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 650, margin: "0 auto" }}>
            {isEs
              ? "Seleccione su aplicación para ver los grados de papel y cartón recomendados, con enlaces directos a especificaciones detalladas."
              : "Select your application to see recommended paper and board grades, with direct links to detailed specifications."}
          </p>
        </div>
      </section>

      {/* ── 5 Normal Channels ──────────────────────────── */}
      {normalChannels.map((channel, ci) => (
        <section
          key={channel.id}
          id={channel.id}
          className="section"
          style={{ background: ci % 2 === 0 ? "#fff" : "var(--paper)" }}
        >
          <div className="container" style={{ maxWidth: 1200 }}>
            {/* Channel Header */}
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span style={{ fontSize: 48, display: "block", marginBottom: 8 }}>{channel.icon}</span>
              <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", color: "var(--forest)", marginBottom: 10 }}>
                {channel.title[lang]}
              </h2>
              <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
                {channel.tagline[lang]}
              </p>
            </div>

            {/* Product Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {channel.applications.map((app) => (
                <div
                  key={app.name.en}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: "24px 24px 20px",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid var(--line)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* App header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 28 }}>{app.icon}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--forest)" }}>{app.name[lang]}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                    {app.desc[lang]}
                  </p>

                  {/* Material links */}
                  <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                    <span style={{ fontSize: 11, color: "var(--muted-light)", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
                      {isEs ? "Materiales Recomendados" : "Recommended Materials"}
                    </span>
                    <div style={{ display: "grid", gap: 8 }}>
                      {app.materials.map((mat) => (
                        <Link
                          key={mat.url}
                          to={mat.url}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                            padding: "10px 12px",
                            background: "var(--paper-green)",
                            borderRadius: 8,
                            textDecoration: "none",
                            color: "inherit",
                            transition: "background 0.15s var(--ease-out)",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(15,43,26,0.08)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--paper-green)"; }}
                        >
                          <span style={{ color: "var(--gold)", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap" }}>
                            {mat.name}
                          </span>
                          <span style={{ fontSize: 11, color: "var(--muted)", lineHeight: 1.5 }}>
                            {mat.desc[lang]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Hang Tags & Labels (Full-Width Mosaic) ──────── */}
      {hangTags && (
        <section id={hangTags.id} style={{ background: "var(--forest)", color: "#fff", padding: "80px 0", position: "relative", overflow: "hidden" }}>
          {/* Background pattern: mosaic of tag images */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.08,
            display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 0,
          }}>
            {[
              "/images/products/fancy-paper/hangtag-black-card.jpg",
              "/images/products/fancy-paper/hangtag-embossed.jpg",
              "/images/products/fancy-paper/hangtag-hero-main.jpg",
              "/images/products/fancy-paper/hangtag-white-pearl.jpg",
              "/images/products/fancy-paper/banner-hangtag-paper.jpg",
              "/images/products/fancy-paper/banner-tracing-paper.jpg",
              "/images/products/fancy-paper/fancy-paper-01.jpg",
              "/images/products/fancy-paper/fancy-paper-02.jpg",
              "/images/products/fancy-paper/embossed-paper.jpg",
              "/images/products/fancy-paper/fancy-paper.jpg",
              "/images/products/fancy-paper/leather-paper-main.jpg",
              "/images/products/fancy-paper/pearlescent-paper-main.jpg",
              "/images/products/fancy-paper/soft-touch-paper-main.jpg",
              "/images/products/fancy-paper/gold-silver-card-main.jpg",
              "/images/products/fancy-paper/label-paper-main.jpg",
              "/images/products/fancy-paper/color-tissue-paper-main.jpg",
            ].map((src, i) => (
              <div key={i} style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                <img src={src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
            <span style={{ fontSize: 56, display: "block", marginBottom: 12 }}>{hangTags.icon}</span>
            <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2, display: "block", marginBottom: 12 }}>
              {isEs ? "SOLUCIÓN DESTACADA" : "FEATURED SOLUTION"}
            </span>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", marginBottom: 16 }}>
              {hangTags.title[lang]}
            </h2>
            <p style={{ fontSize: 17, opacity: 0.85, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
              {hangTags.tagline[lang]}
            </p>

            {/* Product Applications */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 36 }}>
              {hangTags.applications.map((app) => (
                <div key={app.name.en} style={{
                  background: "rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px 16px",
                  backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.1)",
                }}>
                  <span style={{ fontSize: 32, display: "block", marginBottom: 8 }}>{app.icon}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{app.name[lang]}</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
                    {app.materials.slice(0, 3).map((m) => (
                      <Link key={m.url} to={m.url}
                        style={{ color: "var(--gold)", fontSize: 11, textDecoration: "none", background: "rgba(200,146,63,0.15)", padding: "3px 8px", borderRadius: 12, transition: "background 0.15s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(200,146,63,0.3)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(200,146,63,0.15)"; }}
                      >
                        {m.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mosaic Preview Grid */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, maxWidth: 600, margin: "0 auto 32px",
            }}>
              {[
                "/images/products/fancy-paper/hangtag-black-card.jpg",
                "/images/products/fancy-paper/hangtag-embossed.jpg",
                "/images/products/fancy-paper/hangtag-hero-main.jpg",
                "/images/products/fancy-paper/hangtag-white-pearl.jpg",
              ].map((src, i) => (
                <div key={i} style={{ aspectRatio: "3/4", borderRadius: 8, overflow: "hidden" }}>
                  <img src={src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to={hangTags.mosaicLink}
              style={{
                background: "var(--gold)", color: "#fff", padding: "16px 40px", borderRadius: 12,
                fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block",
                boxShadow: "0 6px 24px rgba(200,146,63,0.3)",
              }}
            >
              {hangTags.mosaicLabel[lang]}
            </Link>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section style={{ background: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 30px)", color: "var(--forest)", marginBottom: 12 }}>
          {isEs ? "¿No encuentra su aplicación?" : "Don't See Your Application?"}
        </h2>
        <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 28, maxWidth: 500, margin: "0 auto 28px" }}>
          {isEs
            ? "Contamos con grados de papel personalizados para aplicaciones especializadas en todos los sectores."
            : "We supply custom paper grades for specialized applications across all sectors."}
        </p>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Solicitar Cotización" : "Request a Quote"} →
        </Link>
      </section>
    </>
  );
}

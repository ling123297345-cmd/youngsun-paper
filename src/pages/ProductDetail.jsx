import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { productEs } from "../productEs.js";
import { subProducts, contactInfo } from "../data.js";
import { PageMeta, ProductSchema } from "../SEO.jsx";

export default function ProductDetail() {
  const { t, lang } = useLang(); const isEs = lang === "es";
  const { id } = useParams();
  const p = subProducts[id];
  if (!p) return (
    <section className="section" style={{ paddingTop: 120, background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)", minHeight: "60vh" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{ color: "var(--white)", fontSize: "clamp(24px, 4vw, 36px)", marginBottom: 16 }}>Product Not Found</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>The product you're looking for doesn't exist or may have been moved.</p>
        <Link to="/products" className="btn btn-primary">← Back to Products</Link>
      </div>
    </section>
  );

  const tagline = isEs && productEs[id]?.tagline ? productEs[id].tagline : p.tagline;
  const specs = isEs && productEs[id]?.specs ? productEs[id].specs : p.specs;
  const apps = isEs && productEs[id]?.applications ? productEs[id].applications : p.applications;
  const variants = p.variants || [];
  const features = p.features || [];
  const customization = p.customization || [];
  const commercial = p.commercial || null;
  const gallery = p.gallery || [];
  const quoteReqs = p.quoteReqs || null;

  const seoTitle = p.seoTitle || `${p.name} — Paper & Board`;
  const seoDesc = p.metaDescription || `YOUNGSUN PAPER supplies ${p.name.toLowerCase()} — ${p.tagline.toLowerCase().replace(/\.$/, "")}. FSC & SGS certified. Custom size, bulk export. Request quote.`;

  return (
    <section className="section product-detail-page" style={{ paddingTop: 120, background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)" }}>
      <PageMeta title={seoTitle} description={seoDesc} path={`/products/${id}`} />
      <ProductSchema product={p} />
      <div className="container">
        {/* Breadcrumb */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, marginBottom: 8 }} aria-label="Breadcrumb">
          <Link to="/" style={{ color: "rgba(255,255,255,0.4)" }}>Home</Link>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
          <Link to="/products" style={{ color: "rgba(255,255,255,0.4)" }}>{t("Products")}</Link>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
          <span style={{ color: "var(--lime)", fontWeight: 700 }}>{p.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="product-detail-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 24, alignItems: "start" }}>
          <div className="product-detail-image-wrap" style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", position: "sticky", top: 100 }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <div className="product-detail-info">
            <span className="section-label" style={{ color: "var(--lime)" }}>{p.category.replace(/-/g, " ").toUpperCase()}</span>
            <h1 style={{ color: "var(--white)", marginBottom: 12, fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15 }}>{p.name}</h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>{tagline}</p>

            {/* Quick Specs */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ color: "var(--white)", fontSize: 17, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 18, background: "var(--lime)", borderRadius: 2, display: "inline-block" }} /> Specifications
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {specs.map((s, i) => (
                  <li key={i} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, paddingLeft: 16, position: "relative" }}>
                    <span style={{ color: "var(--lime)", position: "absolute", left: 0, fontWeight: 700 }}>›</span> {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ color: "var(--white)", fontSize: 17, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 18, background: "var(--gold)", borderRadius: 2, display: "inline-block" }} /> Applications
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {apps.map((a, i) => (
                  <span key={i} style={{ background: "rgba(143,188,90,0.12)", color: "var(--lime)", padding: "5px 12px", fontSize: 11, fontWeight: 600, borderRadius: 4 }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.certifications.map((c, i) => (
                  <span key={i} style={{ background: "rgba(200,146,63,0.12)", color: "var(--gold)", padding: "5px 12px", fontSize: 11, fontWeight: 700, borderRadius: 4 }}>
                    ✓ {c}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`mailto:${contactInfo.email}?subject=Inquiry: ${p.name}`} className="btn btn-primary" style={{ fontSize: 14, padding: "12px 28px" }}>
                Inquire About This Product
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hi, I'm interested in ${p.name}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: 14, padding: "12px 28px", color: "var(--lime)", borderColor: "var(--lime)" }}>
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* ===== KEY FEATURES ===== */}
        {features.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <div className="section-header" style={{ textAlign: "left", marginBottom: 24 }}>
              <span className="section-label">Key Features</span>
              <h2 style={{ color: "var(--white)", fontSize: "clamp(24px, 3vw, 32px)" }}>Why Choose {p.name}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
              {features.map((f, i) => {
                const [title, ...rest] = f.split(" — ");
                return (
                  <div key={i} className="feature-detail-card" style={{
                    background: "rgba(143,188,90,0.06)", border: "1px solid rgba(143,188,90,0.12)", borderRadius: 10, padding: "20px 22px",
                    transition: "border-color 0.2s, background 0.2s"
                  }}>
                    <p style={{ color: "var(--lime)", fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{title}</p>
                    {rest.length > 0 && <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.65 }}>{rest.join(" — ")}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===== VARIANTS + CUSTOMIZATION ===== */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, marginTop: 44 }}>
          {variants.length > 0 && (
            <div>
              <h3 style={{ color: "var(--white)", fontSize: 18, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 18, background: "var(--lime)", borderRadius: 2, display: "inline-block" }} /> Available Variants
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {variants.map((v, i) => (
                  <span key={i} style={{ background: "rgba(143,188,90,0.1)", color: "var(--lime)", padding: "7px 16px", fontSize: 12, fontWeight: 600, borderRadius: 20, border: "1px solid rgba(143,188,90,0.18)" }}>
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}
          {customization.length > 0 && (
            <div>
              <h3 style={{ color: "var(--white)", fontSize: 18, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 4, height: 18, background: "var(--gold)", borderRadius: 2, display: "inline-block" }} /> Customization Options
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {customization.map((c, i) => (
                  <li key={i} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, paddingLeft: 16, position: "relative" }}>
                    <span style={{ color: "var(--gold)", position: "absolute", left: 0, fontWeight: 700 }}>›</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ===== QUOTATION REQUIREMENTS ===== */}
        {quoteReqs && quoteReqs.length > 0 && (
          <div style={{ marginTop: 28, background: "rgba(143,188,90,0.04)", border: "1px solid rgba(143,188,90,0.12)", borderRadius: 12, padding: "24px 28px" }}>
            <h3 style={{ color: "var(--lime)", fontSize: 17, marginBottom: 6 }}>📋 What to Prepare for a Quote</h3>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginBottom: 14 }}>Having these details ready helps us give you the most accurate pricing quickly.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
              {quoteReqs.map((req, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: "var(--lime)", fontSize: 11, fontWeight: 700, minWidth: 20, textAlign: "center" }}>{i + 1}</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{req}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== COMMERCIAL TERMS ===== */}
        {commercial && (
          <div style={{ marginTop: 28, background: "rgba(200,146,63,0.05)", border: "1px solid rgba(200,146,63,0.12)", borderRadius: 12, padding: "24px 28px" }}>
            <h3 style={{ color: "var(--gold)", fontSize: 17, marginBottom: 16 }}>📦 Commercial Terms</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
              {[
                { label: "MOQ", value: commercial.moq, icon: "📦" },
                { label: "Lead Time", value: commercial.leadTime, icon: "⏱️" },
                { label: "Samples", value: commercial.samples, icon: "🧪" },
                { label: "Certification", value: commercial.certification, icon: "✅" },
                { label: "Container Loading", value: commercial.containerLoading, icon: "🚢" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center", padding: "14px 10px", background: "rgba(200,146,63,0.04)", borderRadius: 8, border: "1px solid rgba(200,146,63,0.08)" }}>
                  <span style={{ fontSize: 22, display: "block", marginBottom: 6 }}>{item.icon}</span>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 700, marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</p>
                  <p style={{ color: "var(--white)", fontSize: 13, fontWeight: 600 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== FULL DESCRIPTION ===== */}
        <div style={{ marginTop: 48 }}>
          <div className="section-header" style={{ textAlign: "left", marginBottom: 20 }}>
            <span className="section-label">Product Overview</span>
            <h2 style={{ color: "var(--white)", fontSize: "clamp(24px, 3vw, 32px)" }}>About {p.name}</h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85, fontSize: 15 }}>{p.description}</p>
        </div>

        {/* ===== GALLERY ===== */}
        {gallery.length > 0 && <Gallery images={gallery} productName={p.name} />}

        {/* ===== BOTTOM CTA ===== */}
        <div style={{ marginTop: 56, textAlign: "center", padding: "48px 24px", background: "rgba(143,188,90,0.05)", borderRadius: 16, border: "1px solid rgba(143,188,90,0.1)" }}>
          <h3 style={{ color: "var(--white)", fontSize: "clamp(20px, 3vw, 26px)", marginBottom: 8 }}>Interested in {p.name}?</h3>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 24, fontSize: 14, maxWidth: 480, margin: "0 auto 24px" }}>
            Contact us today for pricing, samples, and technical specifications. Our team responds within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${contactInfo.email}?subject=Inquiry: ${p.name}`} className="btn btn-primary">Request Quote by Email</a>
            <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hi, I'm interested in ${p.name}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: "var(--lime)", borderColor: "var(--lime)" }}>Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({ images, productName }) {
  const [lightbox, setLightbox] = useState(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setLightbox(null);
    else if (e.key === "ArrowLeft") setLightbox((p) => (p - 1 + images.length) % images.length);
    else if (e.key === "ArrowRight") setLightbox((p) => (p + 1) % images.length);
  };

  return (
    <div style={{ marginTop: 48 }}>
      <h3 style={{ color: "var(--white)", fontSize: 20, marginBottom: 16 }}>Product Gallery — {productName}</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            role="button"
            tabIndex={0}
            aria-label={`View ${img.alt || productName + " photo " + (i + 1)} fullscreen`}
            onClick={() => setLightbox(i)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightbox(i); } }}
            style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "4/3" }}
          >
            <img src={img.src} alt={img.alt || `${productName} photo ${i+1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-label="Image lightbox"
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.94)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", outline: "none" }}
        >
          <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + images.length) % images.length); }} aria-label="Previous image" style={{ position: "absolute", left: 24, background: "none", border: "none", color: "#fff", fontSize: 48, cursor: "pointer", zIndex: 1, padding: "8px 12px" }}>‹</button>
          <img src={images[lightbox].src} alt={images[lightbox].alt || `${productName} photo ${lightbox+1}`} style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }} />
          <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % images.length); }} aria-label="Next image" style={{ position: "absolute", right: 24, background: "none", border: "none", color: "#fff", fontSize: 48, cursor: "pointer", zIndex: 1, padding: "8px 12px" }}>›</button>
          <button onClick={() => setLightbox(null)} aria-label="Close lightbox" style={{ position: "absolute", top: 24, right: 24, background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", zIndex: 1, width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          <span style={{ position: "absolute", bottom: 24, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}

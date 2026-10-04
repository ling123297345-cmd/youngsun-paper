import { useState } from "react";
import { Link } from "react-router-dom";
import { fancyTextures, overviewImages } from "../fancyTextureData.js";
import { useLang } from "../i18n.jsx";
import { PageMeta, BreadcrumbSchema } from "../SEO.jsx";

export default function FancyPaperGallery() {
  const [lightbox, setLightbox] = useState(null);
  const { lang } = useLang();
  const isEs = lang === "es";
  const copy = isEs ? {
    kicker: "Biblioteca de texturas premium",
    title: "Texturas de papel especial",
    intro: "Más de 120 patrones gofrados y texturizados para embalajes de lujo, cubiertas de libros, etiquetas colgantes e identidad de marca.",
    back: "Volver a Fancy Paper",
    group: "Grupo",
    patterns: "texturas",
    ctaKicker: "Selección de materiales",
    ctaTitle: "¿Necesita ayuda para elegir una textura?",
    ctaText: "Comparta su aplicación, color, gramaje y proceso de acabado. Alice le recomendará opciones adecuadas y preparará muestras físicas para evaluación.",
    samples: "Solicitar muestras",
    contact: "Contactar con Alice",
  } : {
    kicker: "Premium texture library",
    title: "Fancy Paper Textures",
    intro: "120+ embossed and textured paper patterns for luxury packaging, book covers, hang tags and premium brand applications.",
    back: "Back to Fancy Paper",
    group: "Group",
    patterns: "patterns",
    ctaKicker: "Material selection",
    ctaTitle: "Need Help Selecting a Texture?",
    ctaText: "Share your application, color, GSM and finishing process. Alice will recommend suitable options and prepare physical swatches for evaluation.",
    samples: "Request Texture Samples",
    contact: "Contact Alice",
  };

  // Group textures by their series code prefix (e.g., "01-1" → group "01")
  const groups = {};
  fancyTextures.forEach(function(t) {
    const groupKey = t.code.split("-")[0];
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(t);
  });

  return (
    <section style={{ background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)" }}>
      <PageMeta title="Fancy Paper Texture Collection" description="Explore 120+ premium fancy paper textures and patterns — embossed, pearlescent, leather, linen, and more. Custom textures for luxury packaging." path="/fancy-paper-collection" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Fancy Paper", url: "/products/fancy-paper" }, { name: "Texture Collection", url: "/fancy-paper-collection" }]} />

      {/* Banner */}
      <div style={{ background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)", padding: "120px 0 60px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ color: "var(--lime)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{copy.kicker}</span>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, marginTop: 8, marginBottom: 12, textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>{copy.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, maxWidth: 560, margin: "0 auto" }}>{copy.intro}</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 24, paddingBottom: 60 }}>
        <nav className="fancy-gallery-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span>
          <Link to="/products">{isEs ? "Productos" : "Products"}</Link><span>/</span>
          <Link to="/products/fancy-paper">Fancy Paper</Link><span>/</span>
          <strong>{isEs ? "Colección de texturas" : "Texture Collection"}</strong>
        </nav>
        <Link to="/products/fancy-paper" className="fancy-gallery-back">← {copy.back}</Link>

        {/* Overview images */}
        <div className="fancy-overview-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 24, marginBottom: 48 }}>
          {overviewImages.map((img, i) => (
            <div key={i} onClick={() => setLightbox({ type: "overview", index: i })} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden", aspectRatio: "16/10", border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src={`/${img}`} alt={`Fancy paper overview ${i+1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>

        {/* Texture grid by groups */}
        {Object.keys(groups).sort(function(a,b){return parseInt(a)-parseInt(b)}).map(function(groupKey) {
          const items = groups[groupKey];
          return (
            <div key={groupKey} style={{ marginBottom: 40 }}>
              <h2 style={{ color: "var(--lime)", fontSize: 18, fontWeight: 800, marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {copy.group} {groupKey} — {items.length} {copy.patterns}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {items.map(function(t, i) {
                  return (
                    <div key={t.code} onClick={() => setLightbox({ type: "texture", groupIndex: groupKey, itemIndex: i })} style={{
                      cursor: "pointer", borderRadius: 10, overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)",
                      transition: "transform .2s, border-color .2s",
                    }}
                    onMouseEnter={function(e){e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.borderColor="var(--lime)"}}
                    onMouseLeave={function(e){e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.06)"}}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <img src={`/images/fancy-textures/${t.filename}`} alt={t.english} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                      </div>
                      <div style={{ padding: "14px 16px" }}>
                        <span style={{ color: "var(--white)", fontSize: 14, fontWeight: 700, display: "block" }}>{t.english}</span>
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, marginTop: 3 }}>{t.code}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <section className="fancy-gallery-cta">
          <div>
            <span>{copy.ctaKicker}</span>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaText}</p>
          </div>
          <div className="fancy-gallery-cta-actions">
            <Link to="/contact?intent=samples&product=fancy-paper" className="btn btn-primary">{copy.samples} →</Link>
            <Link to="/contact?product=fancy-paper" className="btn btn-outline">{copy.contact} →</Link>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.94)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          {lightbox.type === "overview" && (
            <img src={`/${overviewImages[lightbox.index]}`} alt={`Overview ${lightbox.index+1}`} style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }} />
          )}
          {lightbox.type === "texture" && (function(){
            var grp = groups[lightbox.groupIndex];
            var item = grp[lightbox.itemIndex];
            return (
              <div style={{ textAlign: "center" }}>
                <img src={`/images/fancy-textures/${item.filename}`} alt={item.english} style={{ maxWidth: "85vw", maxHeight: "80vh", objectFit: "contain" }} />
                <p style={{ color: "#fff", marginTop: 16, fontSize: 16, fontWeight: 700 }}>{item.english}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 4 }}>{item.code}</p>
              </div>
            );
          }())}
        </div>
      )}
    </section>
  );
}

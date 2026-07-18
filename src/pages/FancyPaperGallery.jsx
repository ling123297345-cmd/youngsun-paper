import { useState } from "react";
import { Link } from "react-router-dom";
import { fancyTextures, overviewImages } from "../fancyTextureData.js";
import { PageMeta } from "../SEO.jsx";

export default function FancyPaperGallery() {
  const [lightbox, setLightbox] = useState(null);

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

      {/* Banner */}
      <div style={{ background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)", padding: "120px 0 60px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ color: "var(--lime)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Premium Texture Library</span>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, marginTop: 8, marginBottom: 12, textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>Fancy Paper Textures</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>120+ embossed and textured paper patterns for luxury packaging, book covers, hang tags, and brand identity.</p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 24, paddingBottom: 60 }}>
        <Link to="/" style={{ color: "var(--lime)", fontSize: 13, fontWeight: 700 }}>← Back to Home</Link>

        {/* Overview images */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 24, marginBottom: 48 }}>
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
                Group {groupKey} — {items.length} patterns
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

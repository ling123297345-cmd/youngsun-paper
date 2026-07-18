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
  if (!p) return <section className="section" style={{ paddingTop: 120 }}><div className="container" style={{ textAlign: "center" }}><h1>Not Found</h1><Link to="/products" className="btn btn-primary" style={{ marginTop: 24 }}>← Back to Products</Link></div></section>;

  const tagline = isEs && productEs[id]?.tagline ? productEs[id].tagline : p.tagline;
  const specs = isEs && productEs[id]?.specs ? productEs[id].specs : p.specs;
  const apps = isEs && productEs[id]?.applications ? productEs[id].applications : p.applications;
  const gallery = p.gallery || [];

  return (
    <section className="section product-detail-page" style={{ paddingTop: 120, background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)" }}>
      <PageMeta title={`${p.name} — Paper & Board`} description={`YOUNGSUN PAPER supplies ${p.name.toLowerCase()} — ${p.tagline.toLowerCase().replace(/\.$/, "")}. FSC & SGS certified. Custom size, bulk export. Request quote.`} path={`/products/${id}`} />
      <ProductSchema product={p} />
      <div className="container">
        <Link to="/products" style={{ color: "var(--lime)", fontSize: 13, fontWeight: 700 }}>← {t("Products")}</Link>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 28 }}>
          <div><img src={`/${p.image}`} alt={p.name} style={{ width: "100%", height: "auto" }} /></div>
          <div>
            <span className="section-label" style={{ color: "var(--lime)" }}>{p.category.replace("-", " ").toUpperCase()}</span>
            <h1 style={{ color: "var(--white)", marginBottom: 12, fontSize: "clamp(28px, 4vw, 40px)" }}>{p.name}</h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>{tagline}</p>
            <h3 style={{ color: "var(--white)", fontSize: 17, marginBottom: 10 }}>Specifications</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 20 }}>
              {specs.map((s, i) => <li key={i} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, paddingLeft: 14, position: "relative" }}><span style={{ color: "var(--lime)", position: "absolute", left: 0 }}>›</span> {s}</li>)}
            </ul>
            <h3 style={{ color: "var(--white)", fontSize: 17, marginBottom: 10 }}>Applications</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>{apps.map((a, i) => <span key={i} style={{ background: "rgba(143,188,90,0.15)", color: "var(--lime)", padding: "5px 12px", fontSize: 11, fontWeight: 600 }}>{a}</span>)}</div>
            <h3 style={{ color: "var(--white)", fontSize: 17, marginBottom: 10 }}>Certifications</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>{p.certifications.map((c, i) => <span key={i} style={{ background: "rgba(200,146,63,0.15)", color: "var(--gold)", padding: "5px 12px", fontSize: 11, fontWeight: 700 }}>{c}</span>)}</div>
            <a href={`mailto:${contactInfo.email}?subject=Inquiry: ${p.name}`} className="btn btn-primary">Inquire About This Product</a>
          </div>
        </div>
        <div style={{ marginTop: 48 }}>
          <h3 style={{ color: "var(--white)", fontSize: 20, marginBottom: 14 }}>Full Description</h3>
          <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontSize: 15 }}>{p.description}</p>
        </div>
        {gallery.length > 0 && <Gallery images={gallery} productName={p.name} />}
      </div>
    </section>
  );
}

function Gallery({ images, productName }) {
  const [lightbox, setLightbox] = useState(null);
  return (
    <div style={{ marginTop: 48 }}>
      <h3 style={{ color: "var(--white)", fontSize: 20, marginBottom: 16 }}>Product Gallery — {productName}</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
        {images.map((img, i) => (
          <div key={i} onClick={() => setLightbox(i)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", transition: "transform .2s", aspectRatio: "4/3" }} onMouseEnter={function(e){e.currentTarget.style.transform="scale(1.02)"}} onMouseLeave={function(e){e.currentTarget.style.transform="scale(1)"}}>
            <img src={`/${img.src}`} alt={img.alt || `${productName} photo ${i+1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + images.length) % images.length); }} style={{ position: "absolute", left: 24, background: "none", border: "none", color: "#fff", fontSize: 48, cursor: "pointer", zIndex: 1 }}>‹</button>
          <img src={`/${images[lightbox].src}`} alt={images[lightbox].alt || `${productName} photo ${lightbox+1}`} style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }} />
          <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % images.length); }} style={{ position: "absolute", right: 24, background: "none", border: "none", color: "#fff", fontSize: 48, cursor: "pointer", zIndex: 1 }}>›</button>
          <span style={{ position: "absolute", bottom: 24, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{lightbox + 1} / {images.length}</span>
        </div>
      )}
    </div>
  );
}

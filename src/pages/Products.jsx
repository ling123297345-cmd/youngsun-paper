import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { productEs } from "../productEs.js";
import { productCategories, subProducts } from "../data.js";
import { PageMeta } from "../SEO.jsx";

export default function Products() {
  const { t, lang } = useLang(); const isEs = lang === "es";
  const [sp] = useSearchParams();
  const location = useLocation();
  const catFromUrl = new URLSearchParams(location.search).get("cat");
  const [activeCat, setActiveCat] = useState(catFromUrl || "package-board");
  useEffect(() => {
    const cat = new URLSearchParams(location.search).get("cat");
    if (cat && productCategories.some((c) => c.id === cat)) setActiveCat(cat);
  }, [location.search]);
  const category = productCategories.find((c) => c.id === activeCat);
  const products = Object.values(subProducts).filter((p) => p.category === activeCat);

  return (
    <section className="section products-section" style={{ paddingTop: 0 }}>
      <PageMeta title="Paper & Board Products" description="Explore 28 paper and board grades across 4 categories: Package Board, Culture Paper, Fancy Paper, and Food Packaging Paper. FSC & SGS certified. Request a quote." path="/products" />
      <div style={{ background: "url(/images/products-bg.jpg) center/cover no-repeat", height: 260, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,31,19,0.3) 0%, rgba(20,54,34,0.8) 100%)" }} />
      </div>
      <div className="section-header">
        <span className="section-label">{t("What We Supply")}</span>
        <h2 id="products-heading">{t("Paper & Board That Performs")}</h2>
        <p>{t("four_cat_desc")}</p>
      </div>

      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 36 }}>
        {productCategories.map((cat) => (
          <button key={cat.id} onClick={() => setActiveCat(cat.id)} style={{
            background: `linear-gradient(rgba(15,43,26,0.45), rgba(15,43,26,0.6)), url(/${cat.background || cat.image}) center/cover no-repeat`,
            border: activeCat === cat.id ? "2px solid var(--lime)" : "2px solid rgba(255,255,255,0.08)",
            borderRadius: 12, padding: 0, height: 200, cursor: "pointer",
            transition: "all .3s", color: "var(--white)", position: "relative", overflow: "hidden",
            boxShadow: activeCat === cat.id ? "0 8px 32px rgba(143,188,90,0.25)" : "0 4px 16px rgba(0,0,0,0.3)",
            transform: activeCat === cat.id ? "translateY(-4px)" : "none",
            display: "flex", alignItems: "flex-end", justifyContent: "center"
          }}>
            <span style={{ fontSize: 16, fontWeight: 900, padding: "16px 12px", position: "relative", zIndex: 1, letterSpacing: "0.03em", width: "100%", textAlign: "center", background: "linear-gradient(transparent, rgba(0,0,0,0.5))" }}>{cat.title}</span>
          </button>
        ))}
      </div>

      {category && (
        <div className="container" style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{ color: "var(--lime)", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{category.title} — {products.length} products</p>
        </div>
      )}

      <div className="subproduct-grid container">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`} className="subproduct-card" style={{ color: "inherit" }}>
            <div className="subproduct-image-wrap"><img src={product.image} alt={product.name} className="subproduct-image" loading="lazy" /></div>
            <div className="subproduct-info">
              <h3>{product.name}</h3>
              <p className="subproduct-tagline">{isEs && productEs[product.id]?.tagline ? productEs[product.id].tagline : product.tagline}</p>
              <ul className="subproduct-specs">{(isEs && productEs[product.id]?.specs ? productEs[product.id].specs : product.specs).slice(0, 3).map((s, i) => <li key={i}>{s}</li>)}</ul>
              <div className="subproduct-certs">{product.certifications.slice(0, 2).map((c, i) => <span key={i} className="subproduct-cert-tag">{c}</span>)}</div>
              <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700, marginTop: 8, display: "inline-block" }}>View Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

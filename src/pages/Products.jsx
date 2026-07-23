import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { productEs } from "../productEs.js";
import { productCategories, subProducts } from "../data.js";
import { PageMeta } from "../SEO.jsx";

export default function Products() {
  const { t, lang } = useLang(); const isEs = lang === "es";
  const location = useLocation();
  const productsGridRef = useRef(null);
  const catFromUrl = new URLSearchParams(location.search).get("cat");
  const [activeCat, setActiveCat] = useState(catFromUrl || "package-board");
  useEffect(() => {
    const cat = new URLSearchParams(location.search).get("cat");
    if (cat && productCategories.some((c) => c.id === cat)) setActiveCat(cat);
  }, [location.search]);

  const handleCatChange = (catId) => {
    setActiveCat(catId);
    // Smooth scroll to product grid
    setTimeout(() => {
      productsGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const category = productCategories.find((c) => c.id === activeCat);
  const products = Object.values(subProducts).filter((p) => p.category === activeCat);

  // Count products per category for the badges
  const productCounts = {};
  Object.values(subProducts).forEach((p) => {
    productCounts[p.category] = (productCounts[p.category] || 0) + 1;
  });

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

      {/* Category Filter Tabs */}
      <div className="container category-tabs" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 36 }}>
        {productCategories.map((cat) => {
          const count = productCounts[cat.id] || 0;
          const isActive = activeCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCatChange(cat.id)}
              aria-pressed={isActive}
              style={{
                background: `linear-gradient(${isActive ? "rgba(15,43,26,0.35)" : "rgba(15,43,26,0.55)"}, ${isActive ? "rgba(15,43,26,0.5)" : "rgba(15,43,26,0.7)"}), url(/${cat.background || cat.image}) center/cover no-repeat`,
                border: isActive ? "2px solid var(--lime)" : "2px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: 0, height: 200, cursor: "pointer",
                transition: "all 0.3s ease", color: "var(--white)", position: "relative", overflow: "hidden",
                boxShadow: isActive ? "0 8px 32px rgba(143,188,90,0.3)" : "0 4px 16px rgba(0,0,0,0.3)",
                transform: isActive ? "translateY(-4px)" : "none",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end"
              }}
            >
              <span style={{ fontSize: 30, marginBottom: 4, position: "relative", zIndex: 1 }}>{cat.icon}</span>
              <span style={{ fontSize: 16, fontWeight: 900, padding: "8px 12px 16px", position: "relative", zIndex: 1, letterSpacing: "0.03em", width: "100%", textAlign: "center", background: "linear-gradient(transparent, rgba(0,0,0,0.5))" }}>
                {cat.title}
              </span>
              <span style={{
                position: "absolute", top: 12, right: 12, background: isActive ? "var(--lime)" : "rgba(255,255,255,0.15)",
                color: isActive ? "var(--forest)" : "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 800,
                padding: "3px 10px", borderRadius: 20, zIndex: 2
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Info */}
      {category && (
        <div className="container" style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{ color: "var(--lime)", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
            {category.icon} {category.title} — {products.length} product{products.length !== 1 ? "s" : ""}
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, maxWidth: 560, margin: "0 auto" }}>
            {category.summary}
          </p>
        </div>
      )}

      {/* Product Grid */}
      <div ref={productsGridRef} className="subproduct-grid container">
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="subproduct-card" style={{ color: "inherit" }}>
              <div className="subproduct-image-wrap"><img src={product.image} alt={product.name} className="subproduct-image" loading="lazy" /></div>
              <div className="subproduct-info">
                <h3>{product.name}</h3>
                <p className="subproduct-tagline">{isEs && productEs[product.id]?.tagline ? productEs[product.id].tagline : product.tagline}</p>
                <ul className="subproduct-specs">{(isEs && productEs[product.id]?.specs ? productEs[product.id].specs : product.specs).slice(0, 3).map((s, i) => <li key={i}>{s}</li>)}</ul>
                <div className="subproduct-certs">{product.certifications.slice(0, 2).map((c, i) => <span key={i} className="subproduct-cert-tag">{c}</span>)}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                  {product.variants && product.variants.length > 0 && <span style={{ color: "var(--lime)", fontSize: 11, fontWeight: 600 }}>{product.variants.length} variant{product.variants.length > 1 ? "s" : ""}</span>}
                  <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700 }}>View Details →</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div style={{ textAlign: "center", gridColumn: "1 / -1", padding: "48px 0" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>No products found in this category.</p>
            <Link to="/contact" className="btn btn-outline" style={{ marginTop: 16, color: "var(--lime)", borderColor: "var(--lime)" }}>Contact us for custom requirements →</Link>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="container" style={{ textAlign: "center", marginTop: 48, padding: "36px 24px", background: "rgba(143,188,90,0.05)", borderRadius: 16, border: "1px solid rgba(143,188,90,0.1)" }}>
        <h3 style={{ color: "var(--white)", fontSize: 18, marginBottom: 8 }}>Don't see what you need?</h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 20 }}>We source custom grades and special papers through our mill partner network. Tell us what you're looking for.</p>
        <Link to="/contact" className="btn btn-primary">Request Custom Paper →</Link>
      </div>
    </section>
  );
}

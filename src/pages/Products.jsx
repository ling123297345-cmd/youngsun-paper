import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { productEs } from "../productEs.js";
import { productCategories, subProducts } from "../data.js";
import { PageMeta, BreadcrumbSchema, CollectionPageSchema } from "../SEO.jsx";

export default function Products({ initialCategory }) {
  const { t, lang } = useLang(); const isEs = lang === "es";
  const location = useLocation();
  const navigate = useNavigate();
  const productsGridRef = useRef(null);
  const filterTabsRef = useRef(null);
  const activeTabRef = useRef(null);

  // ── Redirect ?cat=xxx → /products/xxx (301-equivalent) ──
  const catParam = new URLSearchParams(location.search).get("cat");
  if (catParam && productCategories.some((c) => c.id === catParam)) {
    return <Navigate to={`/products/${catParam}`} replace />;
  }

  // The base /products route is a genuine all-products view.
  const activeCat = initialCategory || "all";

  const handleCatChange = (catId) => {
    navigate(catId === "all" ? "/products" : `/products/${catId}`);
    // Smooth scroll to product grid after navigation
    setTimeout(() => {
      productsGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const category = productCategories.find((c) => c.id === activeCat);
  const allProducts = Object.values(subProducts);
  const products = activeCat === "all" ? allProducts : allProducts.filter((p) => p.category === activeCat);
  const categorySummary = category ? t(`cat_summary_${category.id}`) : null;
  const pageTitle = initialCategory && category
    ? `${category.title} Products | YOUNGSUN PAPER`
    : "Paper & Board Products | YOUNGSUN PAPER";
  const pageDescription = initialCategory && category
    ? `${category.summary} Compare product specifications and request samples or an export quotation from YOUNGSUN PAPER.`
    : "Explore 31 paper and board grades across Package Board, Culture Paper, Fancy Paper and Food Packaging Paper. Compare specifications and request samples.";

  // Count products per category for the badges
  const productCounts = {};
  allProducts.forEach((p) => {
    productCounts[p.category] = (productCounts[p.category] || 0) + 1;
  });

  const filterItems = [
    { id: "all", title: isEs ? "Todos los productos" : "All Products", count: allProducts.length },
    ...productCategories.map((cat) => ({ ...cat, count: productCounts[cat.id] || 0 })),
  ];

  useEffect(() => {
    const container = filterTabsRef.current;
    const activeTab = activeTabRef.current;
    if (!container || !activeTab || container.scrollWidth <= container.clientWidth) return;
    container.scrollTo({
      left: activeTab.offsetLeft - (container.clientWidth - activeTab.offsetWidth) / 2,
      behavior: "auto",
    });
  }, [activeCat]);

  return (
    <section className="section products-section" style={{ paddingTop: 0 }}>
      <PageMeta title={pageTitle} description={pageDescription} path={initialCategory ? `/products/${initialCategory}` : "/products"} />
      <CollectionPageSchema
        name={category ? (isEs ? t(category.title) : category.title) : (isEs ? "Productos de Papel y Carton" : "Paper and Board Products")}
        description={categorySummary || pageDescription}
        path={initialCategory ? `/products/${initialCategory}` : "/products"}
        items={products.map((product) => ({
          name: product.name,
          url: `${isEs ? "/es" : ""}/products/${product.id}`,
          image: product.image,
        }))}
      />
      <BreadcrumbSchema items={initialCategory
        ? [{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: (productCategories.find(function(c) { return c.id === initialCategory; }) || {}).title || initialCategory, url: `/products/${initialCategory}` }]
        : [{ name: "Home", url: "/" }, { name: "Products", url: "/products" }]} />
      <div style={{ background: "url(/images/products-bg.jpg) center/cover no-repeat", height: 260, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,31,19,0.3) 0%, rgba(20,54,34,0.8) 100%)" }} />
      </div>
      <div className="section-header">
        <span className="section-label">{t("What We Supply")}</span>
        <h1 id="products-heading">{t("Paper & Board That Performs")}</h1>
        <p>{t("four_cat_desc")}</p>
      </div>

      {/* Category Filter Tabs */}
      <div className="container product-filter-shell">
        <div className="product-filter-intro">
          <span className="product-filter-number" aria-hidden="true">01</span>
          <strong>{isEs ? "Explorar productos" : "Browse products"}</strong>
          <span>{isEs ? "Seleccione una colección de papel." : "Select a paper collection."}</span>
        </div>
        <div ref={filterTabsRef} className="product-filter-tabs" role="tablist" aria-label={isEs ? "Categorías de productos" : "Product categories"}>
        {filterItems.map((cat) => {
          const isActive = activeCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCatChange(cat.id)}
              aria-pressed={isActive}
              role="tab"
              ref={isActive ? activeTabRef : null}
              className={`product-filter-tab${isActive ? " active" : ""}`}
            >
              <span>{cat.id === "all" ? cat.title : t(cat.title)}</span>
              <small>{String(cat.count).padStart(2, "0")}</small>
            </button>
          );
        })}
        </div>
      </div>

      {/* Active Category Info */}
      <div className="container product-results-heading">
        <div>
          <span>{category ? t(category.title) : (isEs ? "Todos los productos" : "All paper grades")}</span>
          <h2>{category ? (isEs ? `Explorar ${t(category.title)}` : `Explore ${category.title}`) : (isEs ? "Compare toda nuestra gama" : "Compare our complete range")}</h2>
        </div>
        <p>{categorySummary || (isEs ? "Consulte todos nuestros productos de cartón para embalaje, papel cultural, papel especial y papel para contacto alimentario en un solo lugar." : "Browse packaging board, culture paper, fancy paper and food-contact grades together, then narrow the selection by category.")}</p>
        <strong>{products.length} {isEs ? "productos" : "products"}</strong>
      </div>

      {activeCat === "fancy-paper" && (
        <section className="fancy-collection-feature container" aria-labelledby="fancy-collection-title">
          <div className="fancy-collection-copy">
            <span className="fancy-collection-kicker">{isEs ? "Biblioteca de texturas premium" : "Premium texture library"}</span>
            <h2 id="fancy-collection-title">{isEs ? "Explore más de 120 texturas de papel especial" : "Explore 120+ Fancy Paper Textures"}</h2>
            <p>{isEs
              ? "Compare relieves, vetas de cuero, lino, acabados perlados y texturas personalizadas para embalajes de lujo, cubiertas y etiquetas premium."
              : "Compare embossed, leather-grain, linen, pearlescent and custom surfaces for luxury packaging, book covers, hang tags and premium brand applications."}</p>
            <div className="fancy-collection-actions">
              <Link to="/fancy-paper-collection" className="btn btn-primary">
                {isEs ? "Explorar la colección" : "Explore Texture Collection"} →
              </Link>
              <Link to="/contact?intent=samples&product=fancy-paper" className="fancy-collection-sample-link">
                {isEs ? "Solicitar muestras de texturas" : "Request Texture Samples"} →
              </Link>
            </div>
          </div>
          <Link to="/fancy-paper-collection" className="fancy-collection-mosaic" aria-label={isEs ? "Abrir la biblioteca de texturas de papel especial" : "Open the fancy paper texture library"}>
            {[1, 2, 3].map((number) => (
              <img key={number} src={`/images/fancy-textures/overview-${number}.jpg`} alt={isEs ? `Muestrario de texturas de papel especial ${number}` : `Fancy paper texture swatches ${number}`} loading="lazy" />
            ))}
            <span>{isEs ? "128 texturas" : "128 textures"}</span>
          </Link>
        </section>
      )}

      {/* Product Grid */}
      <div ref={productsGridRef} className="subproduct-grid container">
        {products.length > 0 ? (
          products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} state={{ fromCategory: activeCat }} className="subproduct-card" style={{ color: "inherit" }}>
              <div className="subproduct-image-wrap"><img src={product.image} alt={product.name} className="subproduct-image" loading="lazy" /></div>
              <div className="subproduct-info">
                {activeCat === "all" && <span className="product-card-category">{t(productCategories.find((cat) => cat.id === product.category)?.title || product.category)}</span>}
                <h3>{product.name}</h3>
                <p className="subproduct-tagline">{isEs && productEs[product.id]?.tagline ? productEs[product.id].tagline : product.tagline}</p>
                <ul className="subproduct-specs">{(isEs && productEs[product.id]?.specs ? productEs[product.id].specs : product.specs).slice(0, 3).map((s, i) => <li key={i}>{s}</li>)}</ul>
                <div className="subproduct-certs">{product.certifications.slice(0, 2).map((c, i) => <span key={i} className="subproduct-cert-tag">{c}</span>)}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 }}>
                  {product.variants && product.variants.length > 0 && <span style={{ color: "var(--lime)", fontSize: 11, fontWeight: 600 }}>{product.variants.length} {isEs ? "variantes" : `variant${product.variants.length > 1 ? "s" : ""}`}</span>}
                  <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700 }}>{isEs ? "Ver detalles" : "View Details"} →</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div style={{ textAlign: "center", gridColumn: "1 / -1", padding: "48px 0" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>{isEs ? "No se encontraron productos en esta categoría." : "No products found in this category."}</p>
            <Link to="/contact" className="btn btn-outline" style={{ marginTop: 16, color: "var(--lime)", borderColor: "var(--lime)" }}>{isEs ? "Consúltenos sobre requisitos personalizados" : "Contact us for custom requirements"} →</Link>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="container" style={{ textAlign: "center", marginTop: 48, padding: "36px 24px", background: "rgba(143,188,90,0.05)", borderRadius: 16, border: "1px solid rgba(143,188,90,0.1)" }}>
        <h3 style={{ color: "var(--white)", fontSize: 18, marginBottom: 8 }}>{isEs ? "¿No encuentra lo que necesita?" : "Don't see what you need?"}</h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 20 }}>{isEs ? "Buscamos grados personalizados y papeles especiales a través de nuestra red de fábricas asociadas. Cuéntenos qué necesita." : "We source custom grades and special papers through our mill partner network. Tell us what you're looking for."}</p>
        <Link to="/contact" className="btn btn-primary">{isEs ? "Solicitar papel personalizado" : "Request Custom Paper"} →</Link>
      </div>
    </section>
  );
}

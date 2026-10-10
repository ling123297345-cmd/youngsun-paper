import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { productEs } from "../productEs.js";
import { productCategories, subProducts, contactInfo } from "../data.js";
import { getProductIndustryLinks } from "../productIndustryLinks.js";
import { PageMeta, ProductSchema, BreadcrumbSchema } from "../SEO.jsx";
import InquiryCTA from "../InquiryCTA.jsx";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Globe2, Grid2X2, PackageCheck } from "lucide-react";

export default function ProductDetail() {
  const { t, lang } = useLang(); const isEs = lang === "es";
  const location = useLocation();
  const { id } = useParams();
  const p = subProducts[id];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]);

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
  const optionGallery = p.optionGallery || [];
  const quoteReqs = p.quoteReqs || null;
  const category = productCategories.find((cat) => cat.id === p.category);
  const categoryPath = `/products/${p.category}`;
  const sourceCategory = location.state?.fromCategory;
  const backPath = sourceCategory === "all" ? "/products" : categoryPath;
  const backLabel = sourceCategory === "all"
    ? (isEs ? "Volver a todos los productos" : "Back to all products")
    : `${isEs ? "Volver a" : "Back to"} ${category ? t(category.title) : "Products"}`;
  const categoryProducts = Object.values(subProducts).filter((product) => product.category === p.category);
  const productIndex = categoryProducts.findIndex((product) => product.id === id);
  const previousProduct = productIndex > 0 ? categoryProducts[productIndex - 1] : null;
  const nextProduct = productIndex < categoryProducts.length - 1 ? categoryProducts[productIndex + 1] : null;
  const hasTextureLibrary = ["soft-touch-paper", "leather-paper", "pearlescent-paper", "embossed-paper"].includes(id);
  const relatedIndustries = getProductIndustryLinks(id);

  const seoTitle = p.seoTitle || `${p.name} Supplier in China`;
  const seoDesc = p.metaDescription || `YOUNGSUN PAPER supplies ${p.name.toLowerCase()} — ${p.tagline.toLowerCase().replace(/\.$/, "")}. FSC & SGS certified. Custom size, bulk export. Request quote.`;

  return (
    <section className="section product-detail-page" style={{ paddingTop: 120, background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)" }}>
      <PageMeta title={seoTitle} description={seoDesc} path={`/products/${id}`} />
      <ProductSchema product={p} />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: category?.title || p.category, url: categoryPath }, { name: p.name, url: `/products/${id}` }]} />
      <div className="container">
        <Link className="product-back-link" to={backPath}>
          <ArrowLeft size={17} aria-hidden="true" />{backLabel}
        </Link>

        {/* Breadcrumb */}
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" style={{ color: "rgba(255,255,255,0.4)" }}>Home</Link>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
          <Link to="/products" style={{ color: "rgba(255,255,255,0.4)" }}>{t("Products")}</Link>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
          <Link to={categoryPath} style={{ color: "rgba(255,255,255,0.4)" }}>{category ? t(category.title) : p.category}</Link>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
          <span style={{ color: "var(--lime)", fontWeight: 700 }}>{p.name}</span>
        </nav>

        <div className="product-detail-shell">
          <ProductCatalogSidebar activeProductId={id} activeCategoryId={p.category} isEs={isEs} t={t} />
          <div className="product-detail-main">

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
            <div className="product-detail-specs" style={{ marginBottom: 24 }}>
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
            <div className="product-detail-applications" style={{ marginBottom: 24 }}>
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
            <div className="product-detail-certifications" style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.certifications.map((c, i) => (
                  <span key={i} style={{ background: "rgba(200,146,63,0.12)", color: "var(--gold)", padding: "5px 12px", fontSize: 11, fontWeight: 700, borderRadius: 4 }}>
                    ✓ {c}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", marginTop: 12 }}>
                <Link to={isEs ? "/es/quality" : "/quality"} style={{ color: "var(--lime)", fontSize: 12, fontWeight: 700 }}>
                  {isEs ? "Ver control de calidad y documentación" : "Review quality control & documentation"} →
                </Link>
                <Link to={isEs ? "/es/how-to-order" : "/how-to-order"} style={{ color: "var(--lime)", fontSize: 12, fontWeight: 700 }}>
                  {isEs ? "Cómo solicitar y comprar" : "How to order"} →
                </Link>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="product-detail-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`mailto:${contactInfo.email}?subject=Inquiry: ${p.name}`} className="btn btn-primary" style={{ fontSize: 14, padding: "12px 28px" }}>
                Inquire About This Product
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=Hi, I'm interested in ${p.name}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: 14, padding: "12px 28px", color: "var(--lime)", borderColor: "var(--lime)" }}>
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>

        {hasTextureLibrary && (
          <section className="product-texture-bridge" aria-labelledby="product-texture-bridge-title">
            <div className="product-texture-samples">
              <img src="/images/products/fancy-paper/fancy-paper-overview.jpg" alt={isEs ? "Selección de papeles especiales con acabados gofrados y perlados" : "Fancy paper selection with embossed and pearlescent finishes"} loading="lazy" />
            </div>
            <div className="product-texture-copy">
              <span>{isEs ? "Opciones de superficie" : "Surface options"}</span>
              <h2 id="product-texture-bridge-title">{isEs ? "Elija una textura para su aplicación" : "Choose a Texture for Your Application"}</h2>
              <p>{isEs
                ? `Compare nuestra biblioteca de más de 120 patrones y solicite muestras físicas adecuadas para ${p.name}.`
                : `Compare 120+ available patterns and request physical swatches suitable for ${p.name}.`}</p>
              <div>
                <Link to="/fancy-paper-collection" className="btn btn-primary">{isEs ? "Ver texturas disponibles" : "View Available Textures"} →</Link>
                <Link to={`/contact?intent=samples&product=${id}`} className="product-texture-sample-link">{isEs ? "Solicitar muestras" : "Request Samples"} →</Link>
              </div>
            </div>
          </section>
        )}

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
              ].filter((item) => item.value).map((item, i) => (
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

        <ProductIndustryLinks
          industries={relatedIndustries}
          productName={p.name}
          isEs={isEs}
        />

        {/* ===== MATERIAL + SURFACE OPTIONS ===== */}
        {optionGallery.length > 0 && <OptionsGallery items={optionGallery} isEs={isEs} />}

        {/* ===== GALLERY ===== */}
        {gallery.length > 0 && (
          <Gallery
            images={gallery}
            productName={p.name}
            title={isEs ? (p.galleryTitleEs || p.galleryTitle) : p.galleryTitle}
            intro={isEs ? (p.galleryIntroEs || p.galleryIntro) : p.galleryIntro}
          />
        )}

        {/* ===== GLOBAL EXHIBITION PROOF ===== */}
        <ExhibitionGallery productName={p.name} productId={id} />

        {/* ===== CATEGORY NAVIGATION ===== */}
        <nav className="product-sequence-nav" aria-label={isEs ? "Navegación de productos relacionados" : "Related product navigation"}>
          {previousProduct ? (
            <Link to={`/products/${previousProduct.id}`} state={{ fromCategory: p.category }} className="product-sequence-link previous">
              <ChevronLeft size={20} aria-hidden="true" />
              <span><small>{isEs ? "Producto anterior" : "Previous product"}</small><strong>{previousProduct.name}</strong></span>
            </Link>
          ) : <span className="product-sequence-spacer" />}

          <Link to={categoryPath} className="product-sequence-category">
            <Grid2X2 size={18} aria-hidden="true" />
            <span>{isEs ? "Ver toda la categoría" : "View full category"}</span>
          </Link>

          {nextProduct ? (
            <Link to={`/products/${nextProduct.id}`} state={{ fromCategory: p.category }} className="product-sequence-link next">
              <span><small>{isEs ? "Siguiente producto" : "Next product"}</small><strong>{nextProduct.name}</strong></span>
              <ChevronRight size={20} aria-hidden="true" />
            </Link>
          ) : <span className="product-sequence-spacer" />}
        </nav>

        {/* ===== PRODUCT INQUIRY CTA ===== */}
        <InquiryCTA product={p} productId={id} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductIndustryLinks({ industries, productName, isEs }) {
  if (!industries.length) return null;

  return (
    <section className="product-industry-links" aria-labelledby="product-industry-links-title">
      <div className="product-industry-links-heading">
        <div>
          <span className="section-label">{isEs ? "APLICACIONES POR INDUSTRIA" : "INDUSTRY APPLICATIONS"}</span>
          <h2 id="product-industry-links-title">
            {isEs ? `Dónde funciona mejor ${productName}` : `Where ${productName} Performs Best`}
          </h2>
        </div>
        <p>{isEs
          ? "Explore requisitos de uso, grados recomendados y puntos de control para compradores en cada sector."
          : "Explore end-use requirements, recommended paper grades and buyer checkpoints for each sector."}</p>
      </div>

      <div className={`product-industry-links-grid product-industry-links-grid--${industries.length}`}>
        {industries.map((industry) => (
          <Link className="product-industry-link" to={`/industries/${industry.id}`} key={industry.id}>
            <div className="product-industry-link-media">
              <img
                src={industry.heroImage}
                alt={isEs ? `${industry.title.es}: aplicación de ${productName}` : `${industry.title.en} application for ${productName}`}
                loading="lazy"
              />
            </div>
            <div className="product-industry-link-copy">
              <h3>{industry.title[isEs ? "es" : "en"]}</h3>
              <p>{industry.summary[isEs ? "es" : "en"]}</p>
              <span>{isEs ? "Explorar esta industria" : "Explore this industry"}<ArrowRight size={16} aria-hidden="true" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ProductCatalogSidebar({ activeProductId, activeCategoryId, isEs, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalProducts = Object.keys(subProducts).length;

  return (
    <aside className="product-catalog-sidebar" aria-label={isEs ? "Navegación de productos" : "Product navigation"}>
      <button
        type="button"
        className="product-catalog-mobile-toggle"
        aria-expanded={mobileOpen}
        aria-controls="product-catalog-panel"
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span className="product-catalog-mobile-label">
          <Grid2X2 size={18} aria-hidden="true" />
          <span>
            <small>{isEs ? "Producto actual" : "Current product"}</small>
            <strong>{subProducts[activeProductId]?.name}</strong>
          </span>
        </span>
        <span className="product-catalog-mobile-action">
          {isEs ? "Explorar" : "Browse"}
          <ChevronDown className={mobileOpen ? "is-open" : ""} size={18} aria-hidden="true" />
        </span>
      </button>

      <div id="product-catalog-panel" className={`product-catalog-panel${mobileOpen ? " is-open" : ""}`}>
        <div className="product-catalog-header">
          <span className="product-catalog-kicker">{isEs ? "CATÁLOGO DE PAPEL" : "PAPER CATALOG"}</span>
          <div>
            <h2>{isEs ? "Explorar productos" : "Browse Products"}</h2>
            <span>{totalProducts} {isEs ? "grados" : "grades"}</span>
          </div>
          <Link to="/products" state={{ fromCategory: "all" }} onClick={() => setMobileOpen(false)}>
            {isEs ? "Ver todos los productos" : "View all products"}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <nav className="product-catalog-groups" aria-label={isEs ? "Todos los productos por categoría" : "All products by category"}>
          {productCategories.map((category) => {
            const items = Object.values(subProducts).filter((product) => product.category === category.id);
            const isCurrentCategory = category.id === activeCategoryId;

            return (
              <details className="product-catalog-group" key={category.id} open={isCurrentCategory}>
                <summary>
                  <span>{t(category.title)}</span>
                  <span className="product-catalog-count">{items.length}</span>
                  <ChevronDown size={16} aria-hidden="true" />
                </summary>
                <div className="product-catalog-links">
                  <Link className="product-catalog-category-link" to={`/products/${category.id}`} onClick={() => setMobileOpen(false)}>
                    {isEs ? "Ver categoría" : "View category"}
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                  {items.map((product) => {
                    const isActive = product.id === activeProductId;
                    return (
                      <Link
                        key={product.id}
                        className={`product-catalog-link${isActive ? " is-active" : ""}`}
                        to={`/products/${product.id}`}
                        state={{ fromCategory: category.id }}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>{product.name}</span>
                        {isActive ? <span className="product-catalog-current-dot" aria-hidden="true" /> : null}
                      </Link>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

function OptionsGallery({ items, isEs }) {
  return (
    <section className="product-option-section" aria-labelledby="laminated-options-title">
      <div className="product-option-heading">
        <span className="section-label">{isEs ? "Opciones de superficie y conversión" : "Surface and converting options"}</span>
        <h2 id="laminated-options-title">{isEs ? "Opciones de Cartón Gris Laminado" : "Laminated Grey Board Options"}</h2>
        <p>{isEs
          ? "Seleccione el acabado y la estructura adecuados según la apariencia, protección y proceso de conversión de su producto."
          : "Choose the facing and structure that match your product's appearance, protection and converting requirements."}</p>
      </div>
      <div className="product-option-grid">
        {items.map((item) => {
          const content = (
            <>
            <div className="product-option-image-wrap">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
            <div className="product-option-copy">
              <span>{isEs ? (item.applicationEs || item.application) : item.application}</span>
              <h3>{isEs ? (item.titleEs || item.title) : item.title}</h3>
              <p>{isEs ? (item.descriptionEs || item.description) : item.description}</p>
              {item.href ? (
                <strong>{isEs ? "Ver producto" : "View product"} <ArrowRight size={15} aria-hidden="true" /></strong>
              ) : null}
            </div>
            </>
          );

          return item.href ? (
            <Link className="product-option-card" key={item.title} to={item.href} onClick={() => window.scrollTo(0, 0)}>
              {content}
            </Link>
          ) : (
            <article className="product-option-card" key={item.title}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Gallery({ images, productName, title, intro }) {
  const [lightbox, setLightbox] = useState(null);
  const isSingleImage = images.length === 1;

  // Keyboard navigation for lightbox
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setLightbox(null);
    else if (e.key === "ArrowLeft") setLightbox((p) => (p - 1 + images.length) % images.length);
    else if (e.key === "ArrowRight") setLightbox((p) => (p + 1) % images.length);
  };

  return (
    <div className={`product-gallery${isSingleImage ? " product-gallery--single" : ""}`}>
      {!isSingleImage && <h3 className="product-gallery-title">{title || `Product Gallery — ${productName}`}</h3>}
      {!isSingleImage && intro && <p className="product-gallery-intro">{intro}</p>}
      <div className="product-gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className={`gallery-item${isSingleImage ? " product-gallery-feature-media" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`View ${img.alt || productName + " photo " + (i + 1)} fullscreen`}
            onClick={() => setLightbox(i)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightbox(i); } }}
            style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "4/3" }}
          >
            <img src={img.src} alt={img.alt || `${productName} photo ${i+1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: img.fit || "cover", background: img.fit === "contain" ? "#ede9e2" : "transparent" }} />
          </div>
        ))}
        {isSingleImage && (
          <div className="product-gallery-feature-copy">
            <span>APPLICATION VIEW</span>
            <h3>{title || `Product Gallery — ${productName}`}</h3>
            {intro && <p>{intro}</p>}
            <button type="button" onClick={() => setLightbox(0)}>View full image <span aria-hidden="true">↗</span></button>
          </div>
        )}
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

// ── Exhibition Gallery (shared with About page) ─────────────
function ExhibitionGallery({ productName, productId }) {
  const { lang } = useLang();
  const isEs = lang === "es";
  const exhibitions = [
    {
      name: "ALLPRINT Indonesia 2024",
      place: "Jakarta, Indonesia",
      image: "/images/about/exhibitions/indonesia-2024/photo-1.webp",
      alt: "YOUNGSUN team and international buyers at ALLPRINT Indonesia 2024",
    },
    {
      name: "GAPEXPO 2026",
      place: "Dhaka, Bangladesh",
      image: "/images/about/exhibitions/bangladesh-2026/photo-1.webp",
      alt: "YOUNGSUN paper sourcing meeting at GAPEXPO Bangladesh 2026",
    },
    {
      name: "EXPOGRAFICA 2024",
      place: "Mexico City, Mexico",
      image: "/images/about/exhibitions/mexico-2024/photo-1.webp",
      alt: "YOUNGSUN exhibition booth at EXPOGRAFICA Mexico 2024",
    },
  ];

  return (
    <section className="product-exhibition-section" aria-labelledby="product-exhibition-title">
      <div className="product-exhibition-shell">
        <header className="product-exhibition-heading">
          <div>
            <span>{isEs ? "FERIAS Y EXPOSICIONES" : "EXHIBITIONS & TRADE SHOWS"}</span>
            <h2 id="product-exhibition-title">
              {isEs ? "Experiencia en papel. Relaciones globales." : "Paper expertise. Global relationships."}
            </h2>
          </div>
          <div className="product-exhibition-intro">
            <p>
              {isEs
                ? `Conozca a nuestro equipo, revise muestras de ${productName} y hable de especificaciones cara a cara en los principales mercados de impresion y embalaje.`
                : `Meet our team, review ${productName} samples and discuss specifications face to face in major printing and packaging markets.`}
            </p>
            <div className="product-exhibition-metrics" aria-label="YOUNGSUN exhibition record">
              <span><b>12</b>{isEs ? "Ferias" : "Trade shows"}</span>
              <span><b>9</b>{isEs ? "Mercados" : "Markets"}</span>
              <span><b>2023-2026</b>{isEs ? "Archivo" : "Archive"}</span>
            </div>
          </div>
        </header>

        <div className="product-exhibition-gallery">
          {exhibitions.map((event, index) => (
            <figure className={index === 0 ? "product-exhibition-photo is-featured" : "product-exhibition-photo"} key={event.name}>
              <img src={event.image} alt={event.alt} loading="lazy" />
              <figcaption><b>{event.name}</b><span>{event.place}</span></figcaption>
            </figure>
          ))}
        </div>

        <footer className="product-exhibition-footer">
          <div className="product-exhibition-proof">
            <PackageCheck aria-hidden="true" />
            <span>
              <b>{isEs ? "Archivo verificado" : "Verified exhibition archive"}</b>
              {isEs ? "Invitaciones oficiales y fotografias del evento" : "Official invitations and on-site photographs"}
            </span>
          </div>
          <div className="product-exhibition-actions">
            <Link to="/about#exhibition-record" className="product-exhibition-link">
              <Globe2 aria-hidden="true" />
              {isEs ? "Ver historial de ferias" : "Explore exhibition record"}
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link to={`/contact?intent=quote&product=${encodeURIComponent(productId)}`} className="product-exhibition-link is-secondary">
              {isEs ? "Organizar una reunion" : "Arrange a meeting"}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}

function LegacyExhibitionGallery() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const [lightbox, setLightbox] = useState(null);

  const files = [
    "expo-20260730000412.jpg","expo-20260730000425.jpg","expo-20260730000434.jpg",
    "expo-20260730000444.jpg","expo-20260730000456.jpg","expo-20260730000513.jpg",
  ];
  const photos = files.map(f => ({ src: `/images/exhibitions/${f}`, thumb: `/images/exhibitions/${f}` }));

  return (
    <div className="section" style={{ background: "#fff" }}>
      <div className="section-header">
        <span className="section-label">{isEs ? "Ferias y Exposiciones" : "Exhibitions & Trade Shows"}</span>
        <h2>{isEs ? "Conózcanos en Persona" : "Meet Us in Person"}</h2>
        <p>{isEs ? "Visítenos en ferias comerciales de todo el mundo." : "Visit us at trade shows around the world."}</p>
      </div>
      <div className="container" style={{ maxWidth: 1200 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
          {photos.map((photo, i) => (
            <div key={i} onClick={() => setLightbox(i)} style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 10, cursor: "pointer", background: "var(--paper)" }}>
              <img src={photo.thumb} alt={`Exhibition ${i+1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = ""} />
            </div>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <button onClick={e => { e.stopPropagation(); setLightbox(null); }} style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 44, height: 44, borderRadius: "50%", fontSize: 22, cursor: "pointer" }}>✕</button>
          <button onClick={e => { e.stopPropagation(); setLightbox(p => p > 0 ? p - 1 : photos.length - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 48, height: 48, borderRadius: "50%", fontSize: 24, cursor: "pointer" }}>←</button>
          <img src={photos[lightbox].src} alt="" style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 8 }} onClick={e => e.stopPropagation()} />
          <button onClick={e => { e.stopPropagation(); setLightbox(p => p < photos.length - 1 ? p + 1 : 0); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 48, height: 48, borderRadius: "50%", fontSize: 24, cursor: "pointer" }}>→</button>
          <span style={{ position: "absolute", bottom: 24, color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{lightbox + 1} / {photos.length}</span>
        </div>
      )}
    </div>
  );
}

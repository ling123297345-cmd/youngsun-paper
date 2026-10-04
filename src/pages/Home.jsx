import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Building2, ClipboardCheck, Coffee, Cpu, FileCheck2, Gem, Gift, Globe2, PackageCheck, PackageOpen, Recycle, Tags, Truck, UtensilsCrossed } from "lucide-react";
import { useLang } from "../i18n.jsx";
import { siteConfig, productCategories, subProducts, whyChooseUs, localizeFaqItems } from "../data.js";
import { productEs } from "../productEs.js";
import { industries } from "../industriesData.js";
import { PageMeta, OrganizationSchema, WebsiteSchema } from "../SEO.jsx";
import InquiryCTA from "../InquiryCTA.jsx";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

export default function Home() {
  const { t, lang } = useLang();
  const isEs = lang === "es";

  return (
    <>
      <PageMeta
        title={isEs ? "Fabricante de Papel y Cartón en China" : "Paper & Paperboard Manufacturer in China"}
        description={isEs
          ? "Fabricante chino de papel y cartón: cartón gris, papel negro, cartón plegable, kraft y papeles especiales para embalaje e impresión."
          : "China paper and paperboard manufacturer supplying grey board, black paper, folding box board, kraft and specialty paper for packaging and printing."}
        path="/"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <img
            src="/images/hero/youngsun-paper-manufacturer-hero-2026.webp"
            srcSet="/images/hero/youngsun-paper-manufacturer-hero-2026-960.webp 960w, /images/hero/youngsun-paper-manufacturer-hero-2026-1440.webp 1440w, /images/hero/youngsun-paper-manufacturer-hero-2026.webp 1920w"
            sizes="100vw"
            alt={isEs
              ? "Cartón gris, papel negro y papeles especiales suministrados por YOUNGSUN PAPER"
              : "Grey board, black paper and specialty paper products supplied by YOUNGSUN PAPER"}
            width="1920"
            height="900"
            fetchPriority="high"
          />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">{isEs ? "YOUNGSUN PAPER · DONGGUAN, CHINA" : "YOUNGSUN PAPER · DONGGUAN, CHINA"}</p>
          <div className="hero-title">
            <h1>
              {isEs ? "Fabricante de papel y cartón" : "Paper & Paperboard"}
              <br />
              <span className="gold-text">{isEs ? "en China" : "Manufacturer in China"}</span>
            </h1>
          </div>
          <p className="hero-subtitle">
            {isEs
              ? "Cartón gris, papel negro, cartón plegable, papel kraft y papeles especiales para embalaje, impresión y conversión en mercados internacionales."
              : "Grey board, black paper, folding box board, kraft paper and specialty paper for global packaging, printing and converting."}
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">{isEs ? "Explorar productos de papel" : "Explore Paper Products"}<span className="btn-arrow"><ArrowIcon /></span></Link>
            <Link to="/contact?intent=samples" className="btn btn-outline">{isEs ? "Solicitar muestras" : "Request Paper Samples"}</Link>
          </div>
          <div className="hero-eco-badges">
            <span className="hero-eco-badge"><span className="badge-dot" /> {t("FSC® Certified")}</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> {t("SGS Certified")}</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> {t("20+ Years Experience")}</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> {isEs ? "GSM y tamaños personalizados" : "Custom GSM & Sizes"}</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> {isEs ? "60+ mercados de exportación" : "60+ Export Markets"}</span>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORY BROWSER ===== */}
      <ProductCategoryBrowser />

      {/* ===== ABOUT ===== */}
      <AboutHome />

      {/* ===== PRODUCTS PREVIEW ===== */}
      <ProductsPreview />

      {/* ===== FANCY PAPER BANNER ===== */}
      <FancyPaperBanner />

      {/* ===== EXHIBITION GALLERY ===== */}
      <HomeExhibitionFeature />

      {/* ===== INDUSTRIES OVERVIEW ===== */}
      <IndustryMaterialsOverview />

      {/* ===== VERIFIED SUPPLY NETWORK ===== */}
      <TrustBar />

      {/* ===== SOURCING RISK CONTROL ===== */}
      <SourcingRiskHome />

      {/* ===== BLOG HIGHLIGHTS ===== */}
      <BlogHighlights />

      {/* ===== FAQ ===== */}
      <FAQHome />

      {/* ===== CONTACT ===== */}
      <InquiryCTA />
    </>
  );
}

/* ===== HOME SECTION COMPONENTS ===== */

function AboutHome() {
  const { t } = useLang();
  return (
    <section className="section about-section" id="about">
      <div className="about-grid container">
        <div className="about-text">
          <span className="section-label">{t("About YOUNGSUN")}</span>
          <h2>{t("Your Paper Supply Partner Since 2002")}</h2>
          <p>Headquartered in Dongguan, China, Youngsun Group is a leading manufacturer and exporter with over 20 years of industry experience. We specialize in high-quality grey board, black cardboard, and specialty paper, offering extensive expertise in custom paper solutions tailored for luxury brands and high-end packaging needs.</p>
          <p>Beyond our core manufacturing, we maintain close strategic partnerships with major domestic mills — including APP, Sun Paper, Nine Dragons, Liansheng, and Huatai — allowing us to provide a comprehensive, one-stop sourcing experience for products such as FBB GC1, Art Paper, and Woodfree Paper.</p>
          <Link to="/about" style={{ color: "var(--gold)", fontWeight: 700, fontSize: 14, marginTop: 16, display: "inline-block" }}>Read Full Story →</Link>
        </div>
        <div className="about-stats">
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="/images/factory/about-youngsun-factory-photo-card.webp" alt="YOUNGSUN paper workshop" width="800" height="450" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>20,000m² Workshop</span></div>
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="/images/factory/news-paperboard-supply-card.webp" alt="Paperboard supply stock" width="800" height="450" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>Paperboard Supply</span></div>
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="/images/factory/process-lamination-coating-line-01-card.webp" alt="Paper coating and lamination line" width="800" height="450" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>Coating & Lamination</span></div>
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="/images/factory/processing-slitting-cutting-card.webp" alt="Paper slitting and converting equipment" width="800" height="450" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>Slitting & Converting</span></div>
        </div>
      </div>
    </section>
  );
}

function ProductCategoryBrowser() {
  const { lang, t } = useLang();
  const isEs = lang === "es";
  const collectionOrder = ["package-board", "fancy-paper", "culture-paper", "food-packaging"];
  const collectionCopy = {
    "package-board": {
      title: isEs ? "Cartón para Embalaje" : "Packaging Board",
      description: isEs ? "Papeles y cartones estructurales para cajas rígidas, encuadernación y procesos de conversión." : "Structural papers and boards for rigid packaging, bookbinding and converting applications.",
    },
    "fancy-paper": {
      title: isEs ? "Papel Especial" : "Specialty Paper",
      description: isEs ? "Texturas, colores y acabados distintivos para envases premium y aplicaciones creativas." : "Distinctive textures, colors and finishes for premium packaging and creative applications.",
    },
    "culture-paper": {
      title: isEs ? "Papel Cultural" : "Culture Paper",
      description: isEs ? "Papeles confiables para edición, impresión comercial y comunicación cotidiana." : "Reliable printing papers for publishing, commercial printing and everyday communication.",
    },
    "food-packaging": {
      title: isEs ? "Papel para Alimentos" : "Food Packaging Paper",
      description: isEs ? "Papeles de grado alimentario para envases seguros, envolturas y servicio de comidas." : "Food-grade papers for safe packaging, wrapping and food-service applications.",
    },
  };
  const collectionCategories = collectionOrder.map((id) => productCategories.find((cat) => cat.id === id)).filter(Boolean);

  return (
    <section className="section category-overview-section" aria-labelledby="category-browser-heading">
      <div className="paper-collection container">
        <header className="paper-collection-heading">
          <h2 id="category-browser-heading">{isEs ? "Nuestra Colección de Papel" : "Our Paper Collection"}</h2>
          <p>{isEs ? "Cuatro categorías principales que cubren cartón estructural, papeles de impresión, acabados especiales y aplicaciones alimentarias." : "Four core paper categories, covering structural board, printing papers, specialty finishes and food-grade applications."}</p>
        </header>

        <div className="paper-collection-grid">
          {collectionCategories.map((cat) => {
            const copy = collectionCopy[cat.id];
            return (
              <Link key={cat.id} className={`paper-collection-panel paper-collection-${cat.id}`} to={`/products/${cat.id}`} aria-label={`${isEs ? "Explorar" : "Explore"} ${copy.title}`}>
                <img src={cat.image} alt={copy.title} loading="lazy" />
                <span className="paper-collection-shade" aria-hidden="true" />
                <span className="paper-collection-content">
                  <strong>{copy.title}</strong>
                  <i aria-hidden="true" />
                  <span className="paper-collection-description">{copy.description}</span>
                  <span className="paper-collection-link">{isEs ? "Explorar" : "Explore"}<ArrowRight size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="paper-collection-footer">
          <Recycle size={18} strokeWidth={1.5} aria-hidden="true" />
          <span>{isEs ? "Soluciones de papel sostenibles para un futuro mejor" : "Sustainable paper solutions for a better future"}</span>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const { lang, t } = useLang();
  const isEs = lang === "es";
  const featuredIds = ["grey-board", "black-paper", "folding-box-board", "woodfree-paper", "soft-touch-paper", "cup-paper"];
  const featuredProducts = featuredIds.map((id) => subProducts[id]).filter(Boolean);
  return (
    <section className="section products-section home-popular-products" id="products-preview" aria-labelledby="products-heading">
      <div className="home-popular-heading container">
        <div>
          <span className="section-label">{isEs ? "Grados más solicitados" : "Popular paper grades"}</span>
          <h2 id="products-heading">{isEs ? "Productos que los compradores consultan primero" : "Products buyers ask for first"}</h2>
        </div>
        <p>{isEs ? "Una selección rápida de nuestros grados más solicitados para embalaje, impresión y contacto alimentario." : "A quick selection of our most requested grades for packaging, printing and food-contact applications."}</p>
      </div>
      <div className="subproduct-grid home-popular-grid container">
        {featuredProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`} className="subproduct-card" style={{ color: "inherit" }}>
            <div className="subproduct-image-wrap"><img src={product.image} alt={product.name} className="subproduct-image" loading="lazy" /></div>
            <div className="subproduct-info">
              <span className="popular-product-category">{t(productCategories.find((cat) => cat.id === product.category)?.title || product.category)}</span>
              <h3>{product.name}</h3>
              <p className="subproduct-tagline">{isEs && productEs[product.id]?.tagline ? productEs[product.id].tagline : product.tagline}</p>
              <span className="popular-product-link">{isEs ? "Ver detalles" : "View details"}<ArrowRight size={15} aria-hidden="true" /></span>
            </div>
          </Link>
        ))}
      </div>
      <div className="home-popular-footer">
        <Link to="/products" className="btn btn-primary">{isEs ? "Ver todos los productos" : "Browse all products"}<span className="btn-arrow"><ArrowRight size={17} aria-hidden="true" /></span></Link>
      </div>
    </section>
  );
}

function FancyPaperBanner() {
  const { t } = useLang();
  return (
    <section style={{ background: "url(/images/fancy-paper-banner.jpg) center/cover no-repeat", padding: "80px 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 100%)" }} />
      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, marginBottom: 10, textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>Fancy Paper</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.6, textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
          Texture. Shimmer. Luxury. Papers that make people stop and touch.
        </p>
        <Link to="/fancy-paper-collection" className="btn btn-primary" style={{ background: "var(--lime)", color: "var(--forest)", border: "none", fontWeight: 800 }}>Explore Collection →</Link>
      </div>
    </section>
  );
}

function IndustryMaterialsOverview() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const performancePaths = [
    {
      icon: PackageCheck,
      title: isEs ? "Mayor resistencia" : "Higher strength",
      detail: isEs ? "Fibra larga y refuerzo" : "Long-fiber reinforcement",
      href: "/materials/softwood-pulp",
    },
    {
      icon: BookOpen,
      title: isEs ? "Impresion mas limpia" : "Smoother printing",
      detail: isEs ? "Formacion y superficie" : "Formation and surface quality",
      href: "/materials/hardwood-pulp",
    },
    {
      icon: UtensilsCrossed,
      title: isEs ? "Barrera alimentaria" : "Food-safe barrier",
      detail: isEs ? "Grasa, humedad y sellado" : "Grease, moisture and sealing",
      href: "/industries/food-beverage",
    },
    {
      icon: Gem,
      title: isEs ? "Tacto premium" : "Premium tactility",
      detail: isEs ? "Textura, color y acabado" : "Texture, color and finish",
      href: "/industries/luxury-cosmetics",
    },
    {
      icon: Recycle,
      title: isEs ? "Contenido reciclado" : "Recycled content",
      detail: isEs ? "Rendimiento y circularidad" : "Performance and circularity",
      href: "/materials/virgin-vs-recycled-fiber",
    },
  ];

  const industryProfiles = [
    {
      id: "packaging-printing",
      icon: PackageOpen,
      image: "/images/industries/cards/industry-packaging-printing-youngsun.webp",
      title: isEs ? "Embalaje e impresion" : "Packaging & Printing",
      need: isEs ? "Rigidez estructural, hendido limpio y una superficie de impresion consistente." : "Structural stiffness, clean creasing and a consistent print surface.",
      products: ["Grey Board", "FBB", "Duplex Board"],
    },
    {
      id: "food-beverage",
      icon: Coffee,
      image: "/images/industries/cards/industry-food-beverage-youngsun.webp",
      title: isEs ? "Alimentos y bebidas" : "Food & Beverage",
      need: isEs ? "Seguridad alimentaria, resistencia a grasa y barrera contra humedad." : "Food-contact safety, grease resistance and reliable moisture barriers.",
      products: ["Cup Paper", "Greaseproof", "PE Coated"],
    },
    {
      id: "luxury-cosmetics",
      icon: Gem,
      image: "/images/industries/cards/industry-luxury-cosmetics-youngsun.webp",
      title: isEs ? "Lujo y cosmetica" : "Luxury & Cosmetics",
      need: isEs ? "Tacto distintivo, color preciso y compatibilidad con foil y relieve." : "Distinctive tactility, precise color and clean foil or embossing performance.",
      products: ["Fancy Paper", "Black Paper", "Pearlescent"],
    },
    {
      id: "publishing-stationery",
      icon: BookOpen,
      image: "/images/industries/cards/industry-publishing-stationery-youngsun.webp",
      title: isEs ? "Editorial y papeleria" : "Publishing & Stationery",
      need: isEs ? "Buena opacidad, superficie uniforme y rendimiento estable en prensa." : "Balanced opacity, an even surface and dependable press runnability.",
      products: ["Woodfree", "Art Paper", "LWC Paper"],
    },
    {
      id: "hang-tags-labels",
      icon: Tags,
      image: "/images/industries/cards/industry-hang-tags-labels-youngsun.webp",
      title: isEs ? "Etiquetas y marbetes" : "Hang Tags & Labels",
      need: isEs ? "Bordes limpios, color profundo y resistencia al troquelado y plegado." : "Clean edges, rich color and strength through die-cutting and folding.",
      products: ["Black Paper", "Label Paper", "Color Card"],
    },
    {
      id: "gift-wrapping-decoration",
      icon: Gift,
      image: "/images/industries/cards/industry-gift-wrapping-decoration-youngsun.webp",
      title: isEs ? "Regalo y decoracion" : "Gift Wrapping & Decoration",
      need: isEs ? "Color atractivo, pliegues suaves y una experiencia tactil refinada." : "Expressive color, smooth folding and a refined tactile experience.",
      products: ["Pearlescent", "Embossed", "Color Tissue"],
    },
  ];

  return (
    <section className="section industry-solutions-home">
      <div className="container industry-home-heading">
        <div>
          <span className="section-label">{isEs ? "Soluciones por industria" : "Solutions by Industry"}</span>
          <h2>{isEs ? "Empiece por el uso. Elija por rendimiento." : "Start with the end use. Choose by performance."}</h2>
        </div>
        <p>{isEs ? "La fibra, la superficie y la estructura determinan como funciona el papel. Compare las necesidades de su aplicacion y encuentre grados adecuados para evaluar." : "Fiber, surface and sheet structure determine how paper performs. Match your application requirements with suitable grades for evaluation."}</p>
      </div>

      <div className="container industry-performance-wrap">
        <div className="industry-performance-heading">
          <span>{isEs ? "Empiece con el rendimiento requerido" : "Start with the performance you need"}</span>
          <Link to="/materials">{isEs ? "Explorar biblioteca de materiales" : "Explore materials library"}<ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="industry-performance-grid">
          {performancePaths.map((path) => {
            const PerformanceIcon = path.icon;
            return (
              <Link to={path.href} key={path.title} className="industry-performance-item">
                <PerformanceIcon size={27} strokeWidth={1.55} aria-hidden="true" />
                <span><strong>{path.title}</strong><small>{path.detail}</small></span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="container industry-solution-grid">
        {industryProfiles.map((ind) => {
          const IndustryIcon = ind.icon;
          return (
            <article key={ind.id} className="industry-solution-card">
              <Link className="industry-solution-media" to={`/industries/${ind.id}`} aria-label={ind.title}>
                <img src={ind.image} alt={`${ind.title} paper applications`} loading="lazy" />
              </Link>
              <div className="industry-solution-copy">
                <div className="industry-solution-card-top">
                  <span className="industry-solution-icon"><IndustryIcon size={23} strokeWidth={1.6} aria-hidden="true" /></span>
                  <Link to={`/industries/${ind.id}`} aria-label={`${isEs ? "Explorar" : "Explore"} ${ind.title}`}><ArrowUpRight size={19} strokeWidth={1.7} aria-hidden="true" /></Link>
                </div>
                <h3><Link to={`/industries/${ind.id}`}>{ind.title}</Link></h3>
                <p>{ind.need}</p>
                <div className="industry-recommended-papers">
                  <span>{isEs ? "Papeles recomendados" : "Recommended papers"}</span>
                  <strong>{ind.products.join("  /  ")}</strong>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="container industry-home-footer">
        <p>{isEs ? "No esta seguro? Envie su uso, GSM, tamano y proceso de impresion." : "Not sure where to begin? Send us your end use, GSM, size and printing process."}</p>
        <Link to="/industries" className="industry-home-all-link">{isEs ? "Ver todas las industrias" : "View all industries"}<ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}

function IndustriesOverview() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const iconMap = {
    "packaging-printing": PackageOpen,
    "food-beverage": UtensilsCrossed,
    "luxury-cosmetics": Gem,
    "publishing-stationery": BookOpen,
    "electronics-industrial": Cpu,
    "construction-decoration": Building2,
  };
  return (
    <section className="section industry-solutions-home">
      <div className="container industry-home-heading">
        <div>
        <span className="section-label">{isEs ? "Soluciones por Industria" : "Solutions by Industry"}</span>
        <h2>{isEs ? "Papel Diseñado para Su Sector" : "Paper Engineered for Your Industry"}</h2>
        </div>
        <p>{isEs ? "Cada industria exige algo diferente del papel. Explore nuestras soluciones adaptadas." : "Every industry demands something different from paper. Explore our tailored solutions."}</p>
      </div>
      <div className="container industry-solution-grid">
        {industries.map((ind, index) => {
          const IndustryIcon = iconMap[ind.id] || PackageOpen;
          return (
            <Link key={ind.id} to={`/industries/${ind.id}`} className={`industry-solution-card industry-tone-${index + 1}`}>
              <div className="industry-solution-card-top">
                <span className="industry-solution-icon"><IndustryIcon size={24} strokeWidth={1.7} aria-hidden="true" /></span>
                <ArrowUpRight className="industry-solution-arrow" size={20} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3>{ind.title[lang]}</h3>
              <p>{ind.tagline[lang]}</p>
              <span className="industry-solution-link">{isEs ? "Explorar soluciones" : "Explore solutions"}</span>
            </Link>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <Link to="/industries" className="btn btn-outline">{isEs ? "Ver Todas las Industrias" : "View All Industries"} →</Link>
      </div>
    </section>
  );
}

function TrustBar() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const partners = [
    {
      name: "APP",
      detail: isEs ? "Grupo de pulpa y papel" : "Pulp & paper group",
      logo: "/images/partners/app-official.png",
    },
    {
      name: "Sun Paper",
      detail: isEs ? "Papel y nuevos materiales" : "Paper & new materials",
      logo: "/images/partners/sun-paper-official.png",
      logoClass: "sun-paper-logo",
    },
    {
      name: "Nine Dragons Paper",
      detail: isEs ? "Papel para embalaje" : "Packaging paper",
      logo: "/images/partners/nine-dragons-official.png",
    },
    {
      name: "Liansheng Paper",
      detail: isEs ? "Papel para embalaje" : "Packaging paper",
      logo: "/images/partners/liansheng-official.png",
      showName: true,
    },
    {
      name: "Huatai Paper",
      detail: isEs ? "Papel cultural y especial" : "Culture & specialty paper",
      logo: "/images/partners/huatai-paper-logo.jpg",
      showName: true,
    },
  ];
  return (
    <section className="section mill-network-section">
      <div className="container mill-network-inner">
        <div className="mill-network-heading">
          <span className="section-label">{isEs ? "Red de Abastecimiento" : "Mill & Supply Network"}</span>
          <h2>{isEs ? "Acceso a los principales fabricantes de papel de China" : "Connected to China's leading paper mills"}</h2>
          <p>
            {isEs
              ? "Combinamos nuestra producción propia con una red de abastecimiento estable para ofrecer más grados, especificaciones y opciones de entrega."
              : "We combine in-house manufacturing with an established sourcing network to offer broader grades, specifications, and delivery options."}
          </p>
        </div>
        <div className="mill-logo-marquee" aria-label={isEs ? "Red de fábricas de papel" : "Paper mill network"}>
          <div className="mill-logo-track">
            {[0, 1].map((groupIndex) => (
              <div className="mill-logo-group" key={groupIndex} aria-hidden={groupIndex === 1}>
                {partners.map((partner) => (
                  <div className="mill-logo-card" key={`${groupIndex}-${partner.name}`}>
                    <div className="mill-logo-visual">
                      {partner.logo ? (
                        <img className={partner.logoClass || ""} src={partner.logo} alt={groupIndex === 0 ? `${partner.name} logo` : ""} loading="lazy" />
                      ) : (
                        <span className={`mill-monogram ${partner.tone || ""}`} aria-hidden="true">{partner.monogram}</span>
                      )}
                    </div>
                    {(!partner.logo || partner.showName) && <strong>{partner.name}</strong>}
                    <span className="mill-logo-detail">{partner.detail}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mill-network-note">
          {isEs
            ? "Trabajamos con una red de fábricas nacionales para ampliar la disponibilidad de grados. Los nombres se muestran como referencias de abastecimiento, no como clientes ni como avales de marca."
            : "We work with established domestic mills to broaden grade availability. Mill names are shown as sourcing references, not as customer endorsements."}
        </p>
      </div>
    </section>
  );
}

function BuyerApplications() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const applications = [
    {
      label: isEs ? "Embalaje Rígido" : "Rigid Packaging",
      title: isEs ? "Cartón gris y papel negro para cajas rígidas" : "Grey board and black paper for rigid boxes",
      description: isEs
        ? "Seleccione por espesor, rigidez, acabado y proceso de conversión. Se admiten hojas y paneles a medida."
        : "Select by thickness, stiffness, surface finish, and converting process. Custom sheets and cut panels are available.",
      href: "/products/grey-board",
      facts: [isEs ? "Muestras disponibles" : "Samples available", isEs ? "Corte a medida" : "Custom cutting"],
    },
    {
      label: isEs ? "Impresión Comercial" : "Commercial Printing",
      title: isEs ? "Papel woodfree y cartulina estucada para impresión" : "Woodfree paper and coated board for print",
      description: isEs
        ? "Compare gramaje, blancura, suavidad y formato antes de realizar un pedido de producción."
        : "Compare grammage, brightness, smoothness, and sheet or reel format before placing a production order.",
      href: "/products/woodfree-paper",
      facts: [isEs ? "Hojas o bobinas" : "Sheets or reels", isEs ? "Ficha técnica" : "Technical data"],
    },
    {
      label: isEs ? "Envases Alimentarios" : "Food Packaging",
      title: isEs ? "Papel para vasos y papel antigrasa" : "Cup paper and greaseproof paper",
      description: isEs
        ? "Confirme la estructura de barrera, el uso final y los requisitos de contacto alimentario para cada mercado."
        : "Confirm barrier structure, end use, and food-contact requirements for the destination market.",
      href: "/products/cup-paper",
      facts: [isEs ? "Revisión de uso final" : "End-use review", isEs ? "Documentos por grado" : "Grade documents"],
    },
  ];
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="section-header">
        <span className="section-label">{isEs ? "Aplicaciones de Compra" : "Buyer Applications"}</span>
        <h2>{isEs ? "Empiece por el uso final" : "Start with the end use"}</h2>
        <p>{isEs ? "Ejemplos prácticos para ayudarle a elegir un grado. No se presentan como resultados de clientes ni como garantías de rendimiento." : "Practical examples to help you select a grade. These are not presented as customer results or performance guarantees."}</p>
      </div>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1100 }}>
        {applications.map((item) => (
          <Link key={item.href} to={item.href} style={{ background: "var(--paper)", borderRadius: 8, padding: "28px", textDecoration: "none", color: "inherit", border: "1px solid var(--line)", transition: "border-color 0.2s var(--ease-out)" }}>
            <span style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, textTransform: "uppercase" }}>{item.label}</span>
            <h4 style={{ fontSize: 17, fontWeight: 700, color: "var(--forest)", margin: "12px 0 10px", lineHeight: 1.4 }}>{item.title}</h4>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>{item.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
              {item.facts.map((fact) => (
                <span key={fact} style={{ color: "var(--forest)", fontSize: 11, fontWeight: 600 }}>{fact}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <Link to="/products" className="btn btn-outline">{isEs ? "Ver Todos los Productos" : "View All Products"} →</Link>
      </div>
    </section>
  );
}

function SourcingRiskHome() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const controls = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: isEs ? "Aprobacion de muestras" : "Sample approval",
      description: isEs
        ? "Revise color, superficie, espesor y comportamiento de conversion antes de la produccion."
        : "Review color, surface, thickness and converting behavior before production.",
    },
    {
      number: "02",
      icon: FileCheck2,
      title: isEs ? "Documentos del grado" : "Grade-specific documents",
      description: isEs
        ? "Confirme fichas tecnicas, certificados disponibles e informes aplicables al producto cotizado."
        : "Confirm technical data, available certificates and reports for the exact quoted grade.",
    },
    {
      number: "03",
      icon: PackageCheck,
      title: isEs ? "Control antes del envio" : "Pre-shipment checks",
      description: isEs
        ? "Compruebe gramaje, tamano, cantidad, embalaje y marcas de envio contra el pedido."
        : "Check grammage, size, quantity, packing and shipping marks against the order.",
    },
    {
      number: "04",
      icon: Truck,
      title: isEs ? "Coordinacion de exportacion" : "Export coordination",
      description: isEs
        ? "Alinee proteccion contra humedad, documentos y plan de carga con el destino."
        : "Align moisture protection, documents and loading plans with the destination.",
    },
  ];

  return (
    <section className="sourcing-risk-home" aria-labelledby="sourcing-risk-title">
      <div className="container sourcing-risk-layout">
        <figure className="sourcing-risk-media">
          <img src="/images/factory/factory-quality-control.jpg" alt="Paperboard samples and measuring instruments prepared for quality checks" loading="lazy" />
          <figcaption>
            <span>{isEs ? "CONTROL DE ESPECIFICACIONES" : "SPECIFICATION CONTROL"}</span>
            <strong>{isEs ? "Mida primero. Produzca despues." : "Measure first. Produce second."}</strong>
          </figcaption>
        </figure>

        <div className="sourcing-risk-content">
          <span className="section-label">{isEs ? "Control del riesgo de compra" : "Sourcing Risk Control"}</span>
          <h2 id="sourcing-risk-title">{isEs ? "Compruebe el papel antes de comprometer la produccion." : "Check the paper before you commit to production."}</h2>
          <p className="sourcing-risk-lead">
            {isEs
              ? "Un pedido fiable empieza con especificaciones acordadas, muestras fisicas, documentos del grado y requisitos claros de embalaje."
              : "A reliable order starts with agreed specifications, physical samples, grade-specific documents and clear packing requirements."}
          </p>

          <div className="sourcing-risk-steps">
            {controls.map((item) => {
              const ControlIcon = item.icon;
              return (
                <article key={item.number} className="sourcing-risk-step">
                  <span className="sourcing-risk-number">{item.number}</span>
                  <ControlIcon size={24} strokeWidth={1.55} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="sourcing-risk-note">
            {isEs
              ? "La documentacion y los informes dependen del grado y del mercado de destino. Confirme su disponibilidad con la cotizacion."
              : "Documents and test reports depend on the product grade and destination market. Confirm availability with your quotation."}
          </p>
          <div className="sourcing-risk-actions">
            <Link to="/quality" className="sourcing-risk-primary">{isEs ? "Ver control de calidad" : "View quality control"}<ArrowRight size={16} aria-hidden="true" /></Link>
            <Link to="/contact?intent=samples" className="sourcing-risk-secondary">{isEs ? "Solicitar muestras" : "Request samples"}<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const featuredBlogPosts = [
  {
    id: "grey-board-vs-duplex-board-comparison",
    title: "Grey Board vs Duplex Board: The Complete Comparison for Packaging Buyers",
    excerpt: "Grey board and duplex board serve different purposes in packaging production. Compare structure, surface, applications, and sourcing considerations.",
    image: "/images/products/package-board/duplex-board-main.webp",
    category: "Packaging",
    date: "2026-08-05",
  },
  {
    id: "paper-gsm-thickness-conversion-chart",
    title: "Paper GSM to Thickness Conversion: Understanding Paper Weight for International Buyers",
    excerpt: "Understand GSM, caliper, basis weight, and points, with practical guidance for specifying paper correctly and avoiding costly ordering mistakes.",
    image: "/images/products/culture-paper/woodfree-paper-main.webp",
    category: "Guides",
    date: "2026-08-05",
  },
  {
    id: "how-to-source-paper-from-china",
    title: "How to Source Paper from China: A Complete Guide for International Packaging Buyers",
    excerpt: "Learn how to specify, qualify, and manage paper orders from product selection and sample approval through production and container loading.",
    image: "/images/blog-articles/importing-paper-from-china-complete-guide.jpg",
    category: "Guides",
    date: "2026-07-18",
  },
];

function BlogHighlights() {
  const { lang } = useLang();
  return (
    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="section-header">
        <span className="section-label">{lang === "es" ? "Blog y Guías" : "Blog & Guides"}</span>
        <h2>{lang === "es" ? "Últimos Artículos y Guías" : "Latest Articles & Guides"}</h2>
        <p>{lang === "es" ? "Conocimiento de la industria papelera, guías de compra y consejos de diseño." : "Paper industry knowledge, sourcing guides, and design insights."}</p>
      </div>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1100 }}>
        {featuredBlogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-sm)", transition: "transform 0.2s var(--ease-out)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
          >
            <div style={{ height: 180, overflow: "hidden", background: "var(--forest-light)" }}>
              <img src={post.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
            </div>
            <div style={{ padding: "20px 24px" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "center" }}>
                <span style={{ background: "var(--gold-pale)", color: "var(--gold)", padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{post.category}</span>
                <span style={{ fontSize: 11, color: "var(--muted-light)" }}>{post.date}</span>
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--forest)", lineHeight: 1.4, marginBottom: 8 }}>{post.title}</h4>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{post.excerpt.slice(0, 120)}…</p>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <Link to="/blog" className="btn btn-outline">{lang === "es" ? "Ver Todos los Artículos" : "View All Articles"} →</Link>
      </div>
    </section>
  );
}

function WhyUsHome() {
  const { t } = useLang(); const dk = ["whyus_1_desc","whyus_2_desc","whyus_3_desc","whyus_4_desc","whyus_5_desc","whyus_6_desc"];
  return (
    <section className="section why-us-section" id="why-us">
      <div className="section-header"><span className="section-label">{t("The YOUNGSUN Difference")}</span><h2>{t("Why Global Partners Choose Us")}</h2><p>{t("whyus_desc")}</p></div>
      <div className="features-grid container">{whyChooseUs.map((item, i) => (<div className="feature-card" key={item.title}><span className="feature-icon">{item.icon}</span><h3>{t(item.title)}</h3><p>{t(dk[i])}</p></div>))}</div>
    </section>
  );
}

function BuyerVerification() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const checks = [
    {
      number: "01",
      title: isEs ? "Aprobación de muestras" : "Sample approval",
      description: isEs ? "Confirme color, espesor, superficie y rendimiento de conversión antes de la producción en masa." : "Confirm color, thickness, surface, and converting performance before bulk production.",
    },
    {
      number: "02",
      title: isEs ? "Documentos por producto" : "Product-specific documents",
      description: isEs ? "Solicite fichas técnicas, certificados y documentos de prueba aplicables al grado cotizado." : "Request technical data, certificates, and test documents that apply to the quoted grade.",
    },
    {
      number: "03",
      title: isEs ? "Control antes del envío" : "Pre-shipment control",
      description: isEs ? "El gramaje, tamaño, embalaje y marcas de envío se confirman contra su pedido antes de la expedición." : "Grammage, size, packing, and shipping marks are checked against your order before dispatch.",
    },
  ];
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-header">
        <span className="section-label">{isEs ? "Confianza Verificable" : "Verifiable Confidence"}</span>
        <h2>{isEs ? "Compruebe antes de comprar" : "Verify before you buy"}</h2>
        <p>{isEs ? "La confianza debe basarse en muestras, documentos y controles claros, no en logotipos o testimonios anónimos." : "Confidence should come from samples, documents, and clear checks, not logos or anonymous testimonials."}</p>
      </div>
      <div className="testimonials-grid container">
        {checks.map((item) => (
          <div className="testimonial-card" key={item.number}>
            <span style={{ color: "var(--lime)", fontSize: 13, fontWeight: 800 }}>{item.number}</span>
            <h3 style={{ color: "#fff", fontSize: 18, margin: "14px 0 10px" }}>{item.title}</h3>
            <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 14, lineHeight: 1.7 }}>{item.description}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <Link to="/quality" className="btn btn-outline">{isEs ? "Ver Control de Calidad" : "View Quality Control"} →</Link>
      </div>
    </section>
  );
}

function HomeExhibitionFeature() {
  const { lang } = useLang();
  const isEs = lang === "es";

  return (
    <section className="home-exhibition-section" aria-labelledby="home-exhibition-title">
      <div className="container">
        <header className="home-exhibition-heading">
          <div>
            <span>{isEs ? "RED GLOBAL DE FERIAS" : "GLOBAL EXHIBITION NETWORK"}</span>
            <h2 id="home-exhibition-title">
              {isEs ? "Conozca a las personas detras de su suministro de papel." : "Meet the people behind your paper supply."}
            </h2>
          </div>
          <p>
            {isEs
              ? "Las ferias permiten inspeccionar el papel, comparar muestras y hablar directamente con nuestro equipo de exportacion antes de realizar un pedido."
              : "Trade shows let buyers inspect paper, compare samples and speak directly with our export team before placing an order."}
          </p>
        </header>

        <div className="home-exhibition-stage">
          <figure className="home-exhibition-main-photo">
            <img src="/images/about/exhibitions/mexico-2026/photo-1.webp" alt="YOUNGSUN team and visitors at EXPOGRAFICA Guadalajara 2026" loading="lazy" />
            <figcaption><b>EXPOGRAFICA Guadalajara 2026</b><span>Guadalajara, Mexico</span></figcaption>
          </figure>

          <div className="home-exhibition-story">
            <div className="home-exhibition-proof"><PackageCheck aria-hidden="true" /><span>{isEs ? "Archivo verificado 2023-2026" : "Verified archive 2023-2026"}</span></div>
            <h3>{isEs ? "Conversaciones reales. Muestras reales. Relaciones duraderas." : "Real conversations. Real samples. Long-term relationships."}</h3>
            <p>
              {isEs
                ? "Desde Dusseldorf y Yakarta hasta Ciudad de Mexico y Daca, YOUNGSUN se reune con impresores, convertidores, distribuidores y marcas de todo el mundo."
                : "From Dusseldorf and Jakarta to Mexico City and Dhaka, YOUNGSUN meets printers, converters, distributors and brands from around the world."}
            </p>
            <div className="home-exhibition-metrics" aria-label="YOUNGSUN global exhibition figures">
              <span><b>12</b>{isEs ? "Ferias" : "Trade shows"}</span>
              <span><b>9</b>{isEs ? "Mercados" : "International markets"}</span>
            </div>
            <div className="home-exhibition-actions">
              <Link to="/about#exhibition-record" className="home-exhibition-button primary">
                <Globe2 aria-hidden="true" />
                {isEs ? "Ver archivo de ferias" : "Explore exhibition archive"}
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link to="/contact" className="home-exhibition-button secondary">
                {isEs ? "Hablar con el equipo" : "Talk to our team"}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="home-exhibition-secondary-photos" aria-label="More YOUNGSUN exhibitions">
            <figure>
              <img src="/images/about/exhibitions/drupa-2024/photo-2.webp" alt="YOUNGSUN meeting international visitors at drupa 2024" loading="lazy" />
              <figcaption><b>drupa 2024</b><span>Dusseldorf, Germany</span></figcaption>
            </figure>
            <figure>
              <img src="/images/about/exhibitions/indonesia-2024/photo-1.webp" alt="YOUNGSUN team at ALLPRINT Indonesia 2024" loading="lazy" />
              <figcaption><b>ALLPRINT Indonesia 2024</b><span>Jakarta, Indonesia</span></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeExhibitionGallery() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const [lightbox, setLightbox] = useState(null);
  const files = ["expo-20260730000425.jpg","expo-20260730000434.jpg","expo-20260730000456.jpg","expo-20260730000458.jpg"];
  const photos = files.map(f => ({ src: `/images/exhibitions/${f}`, thumb: `/images/exhibitions/${f}` }));
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="section-header">
        <span className="section-label">{isEs ? "Ferias y Exposiciones" : "Exhibitions & Trade Shows"}</span>
        <h2>{isEs ? "Conózcanos en Persona" : "Meet Us in Person"}</h2>
      </div>
      <div className="container" style={{ maxWidth: 900 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {photos.map((p, i) => (
            <div key={i} onClick={() => setLightbox(i)} style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 10, cursor: "pointer" }}>
              <img src={p.thumb} alt={`Exhibition ${i+1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={e => { e.stopPropagation(); setLightbox(null); }} style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 44, height: 44, borderRadius: "50%", fontSize: 22, cursor: "pointer" }}>✕</button>
          <img src={photos[lightbox].src} alt="" style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 8 }} onClick={e => e.stopPropagation()} />
          <span style={{ position: "absolute", bottom: 24, color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{lightbox + 1} / {photos.length}</span>
        </div>
      )}
    </section>
  );
}

function FAQHome() {
  const { t, lang } = useLang();
  const items = localizeFaqItems(lang).slice(0, 5);
  return (
    <section className="section faq-section" id="faq">
      <div className="section-header"><span className="section-label">{t("Frequently Asked Questions")}</span><h2>{t("Questions About Our Paper Products and Services")}</h2></div>
      <div className="faq-grid container">{items.map((item) => (<details className="faq-item" key={item.id}><summary className="faq-question">{item.q}</summary><div className="faq-answer"><p>{item.a}</p></div></details>))}</div>
      <div style={{ textAlign: "center", marginTop: 28 }}><Link to="/faq" className="btn btn-outline">View All FAQs →</Link></div>
    </section>
  );
}

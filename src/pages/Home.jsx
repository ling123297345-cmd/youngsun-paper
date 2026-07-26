import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Building2, Cpu, Gem, PackageOpen, UtensilsCrossed } from "lucide-react";
import { useLang } from "../i18n.jsx";
import { siteConfig, productCategories, subProducts, whyChooseUs, contactInfo, faqItems } from "../data.js";
import { productEs } from "../productEs.js";
import { industries } from "../industriesData.js";
import { blogPosts } from "../blogData.js";
import { useContactForm } from "../useContactForm.js";
import { PageMeta, OrganizationSchema } from "../SEO.jsx";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}

export default function Home() {
  const { t, lang } = useLang();
  const isEs = lang === "es";

  return (
    <>
      <PageMeta title="Premium Paper Trading & Manufacturing" description="YOUNGSUN PAPER — premium paper and board supplier since 2002. Grey board, kraft paper, specialty paper, and food packaging for global brands. FSC & SGS certified." path="/" />
      <OrganizationSchema />
      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="hero-bg"><img src="images/products/fancy-paper/background-hangtag-section-clean.jpg" alt="" aria-hidden="true" fetchpriority="high" /></div>
        <div className="hero-content">
          <p className="hero-eyebrow">{t("Sustainable Paper, Global Reach")}</p>
          <div className="hero-title"><h1>Premium Paper &amp; Paperboard<br /><span className="gold-text">Supplier in China</span></h1></div>
          <p className="hero-subtitle">{t("hero_subtitle")}</p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">{t("Explore Products")}<span className="btn-arrow"><ArrowIcon /></span></Link>
            <Link to="/contact" className="btn btn-outline">{t("Get a Quote")}</Link>
          </div>
          <div className="hero-eco-badges">
            <span className="hero-eco-badge"><span className="badge-dot" /> {t("FSC® Certified")}</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> {t("SGS Certified")}</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> ISO 14001</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> {t("20+ Years Experience")}</span>
            <span className="hero-eco-badge"><span className="badge-dot" /> {t("60+ Export Countries")}</span>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY OVERVIEW ===== */}
      <section className="section category-overview-section">
        <div className="cat-overview-grid container">
          {productCategories.map((cat) => (
            <Link key={cat.id} className="cat-overview-card" to={`/products?cat=${cat.id}`}>
              <div className="cat-overview-image"><img src={cat.image} alt={cat.title} loading="lazy" /><div className="cat-overview-overlay" /></div>
              <div className="cat-overview-body"><span className="cat-overview-icon">{cat.icon}</span><h3>{cat.title}</h3><p>{t(cat.tagline)}</p><span className="cat-overview-link">{t("View Products")} →</span></div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <AboutHome />

      {/* ===== PRODUCTS PREVIEW ===== */}
      <ProductsPreview />

      {/* ===== FANCY PAPER BANNER ===== */}
      <FancyPaperBanner />

      {/* ===== INDUSTRIES OVERVIEW ===== */}
      <IndustriesOverview />

      {/* ===== VERIFIED SUPPLY NETWORK ===== */}
      <TrustBar />

      {/* ===== COMMON BUYER APPLICATIONS ===== */}
      <BuyerApplications />

      {/* ===== BLOG HIGHLIGHTS ===== */}
      <BlogHighlights />

      {/* ===== WHY US ===== */}
      <WhyUsHome />

      {/* ===== BUYER VERIFICATION PROCESS ===== */}
      <BuyerVerification />

      {/* ===== CONTACT ===== */}
      <ContactHome />

      {/* ===== FAQ ===== */}
      <FAQHome />
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
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="images/factory/about-youngsun-factory-photo.jpg" alt="Factory" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>20,000m² Workshop</span></div>
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="images/factory/news-paperboard-supply.jpg" alt="Supply" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>Paperboard Supply</span></div>
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="images/factory/process-lamination-coating-line-01.jpg" alt="Lamination" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>Coating & Lamination</span></div>
          <div className="stat-card" style={{ overflow: "hidden", padding: 0, aspectRatio: "1/1" }}><img src="images/factory/processing-slitting-cutting.jpg" alt="Converting" style={{ width: "100%", height: "100%", objectFit: "cover" }} /><span style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", color: "#fff", padding: "20px 12px 10px", fontSize: 12, fontWeight: 700 }}>Slitting & Converting</span></div>
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const { t, lang } = useLang(); const isEs = lang === "es";
  const allProducts = Object.values(subProducts).slice(0, 4);
  return (
    <section className="section products-section" id="products-preview">
      <div className="section-header">
        <span className="section-label">{t("What We Supply")}</span>
        <h2 id="products-heading">{t("Paper & Board That Performs")}</h2>
        <p>{t("four_cat_desc")}</p>
      </div>
      <div className="subproduct-grid container">
        {allProducts.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`} className="subproduct-card" style={{ color: "inherit" }}>
            <div className="subproduct-image-wrap"><img src={product.image} alt={product.name} className="subproduct-image" loading="lazy" /></div>
            <div className="subproduct-info">
              <h3>{product.name}</h3>
              <p className="subproduct-tagline">{isEs && productEs[product.id]?.tagline ? productEs[product.id].tagline : product.tagline}</p>
              <div className="subproduct-certs">{product.certifications.slice(0, 2).map((c, i) => <span key={i} className="subproduct-cert-tag">{c}</span>)}</div>
              <span style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700, marginTop: 8, display: "inline-block" }}>View Details →</span>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 36 }}>
        <Link to="/products" className="btn btn-primary">View All Products <span className="btn-arrow">→</span></Link>
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
      monogram: "LS",
      tone: "blue",
    },
    {
      name: "Huatai Paper",
      detail: isEs ? "Papel cultural y especial" : "Culture & specialty paper",
      monogram: "HT",
      tone: "green",
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
                    {!partner.logo && <strong>{partner.name}</strong>}
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

function BlogHighlights() {
  const { lang } = useLang();
  const recent = blogPosts.slice(0, 3);
  return (
    <section className="section" style={{ background: "var(--paper)" }}>
      <div className="section-header">
        <span className="section-label">{lang === "es" ? "Blog y Guías" : "Blog & Guides"}</span>
        <h2>{lang === "es" ? "Últimos Artículos y Guías" : "Latest Articles & Guides"}</h2>
        <p>{lang === "es" ? "Conocimiento de la industria papelera, guías de compra y consejos de diseño." : "Paper industry knowledge, sourcing guides, and design insights."}</p>
      </div>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1100 }}>
        {recent.map((post) => (
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

function ContactHome() {
  const { t } = useLang();
  const FORM_INITIAL = { name:"", email:"", company:"", phone:"", product:"", gsm:"", size:"", quantity:"", destination:"", message:"" };
  const { form, submitted, sending, error, honeypotRef, submitTimeRef, handleChange, handleSubmit } = useContactForm(FORM_INITIAL);
  return (
    <section className="section contact-section" id="contact">
      <div className="section-header"><span className="section-label">{t("Get In Touch")}</span><h2>{t("Let's Talk Paper")}</h2><p>{t("contact_subtitle")}</p></div>
      <div className="contact-grid container">
        <div className="contact-info">
          <div className="contact-methods">
            <a href={`mailto:${contactInfo.email}`} className="contact-method"><span className="method-icon">✉️</span><div><span className="method-label">Email</span><span className="method-value">{contactInfo.email}</span></div></a>
            <a href={`tel:${contactInfo.phone}`} className="contact-method"><span className="method-icon">📞</span><div><span className="method-label">Phone</span><span className="method-value">{contactInfo.phone}</span></div></a>
            <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} className="contact-method" target="_blank" rel="noopener noreferrer"><span className="method-icon">💬</span><div><span className="method-label">WhatsApp</span><span className="method-value">{contactInfo.whatsapp}</span></div></a>
            <div className="contact-method"><span className="method-icon">💬</span><div><span className="method-label">WeChat</span><span className="method-value">{contactInfo.wechat}</span></div></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} onFocus={submitTimeRef}>
          <h3>{t("Send Us a Message")}</h3>

          {submitted && (
            <div style={{ background: "#F0FDF4", border: "1px solid #86EFAC", color: "#166534", padding: "20px", borderRadius: 12, marginBottom: 16, textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 4 }}>✅</div><div style={{ fontWeight: 700 }}>Message Sent! We'll reply within 24h.</div>
            </div>
          )}
          {error && <div style={{ background: "#FEF2F2", color: "#DC2626", padding: "12px 16px", borderRadius: 8, marginBottom: 16, fontSize: 13 }}>⚠️ {error}</div>}

          <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
            <input ref={honeypotRef} type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="form-group"><label htmlFor="hname">{t("Your Name *")}</label><input type="text" id="hname" name="name" value={form.name} onChange={handleChange} required /></div>
          <div className="form-group"><label>Company</label><input type="text" name="company" value={form.company} onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="hemail">{t("Email Address *")}</label><input type="email" id="hemail" name="email" value={form.email} onChange={handleChange} required /></div>
          <div className="form-group"><label>Phone / WhatsApp</label><input type="text" name="phone" value={form.phone} onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="hproduct">{t("Product Interest")}</label><select id="hproduct" name="product" value={form.product} onChange={handleChange}><option value="">{t("Select a product category")}</option>{productCategories.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}<option value="other">{t("Other / Not Sure")}</option></select></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div className="form-group"><label>GSM / Thickness</label><input type="text" name="gsm" value={form.gsm} onChange={handleChange} placeholder="e.g. 200-400 gsm" /></div>
            <div className="form-group"><label>Size</label><input type="text" name="size" value={form.size} onChange={handleChange} placeholder="e.g. A4, custom" /></div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div className="form-group"><label>Quantity</label><input type="text" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 1x20ft container" /></div>
            <div className="form-group"><label>Destination Country / Port</label><input type="text" name="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Hamburg, Germany" /></div>
          </div>
          <div className="form-group"><label htmlFor="hmessage">{t("Your Message *")}</label><textarea id="hmessage" name="message" value={form.message} onChange={handleChange} required /></div>
          <button type="submit" className="form-submit" disabled={sending}>
            {sending ? "⏳ Sending..." : t("Send Inquiry")}
          </button>
        </form>
      </div>
    </section>
  );
}

function FAQHome() {
  const { t } = useLang(); const qk = ["faq_q1","faq_q2","faq_q3","faq_q4","faq_q5"]; const ak = ["faq_a1","faq_a2","faq_a3","faq_a4","faq_a5"];
  return (
    <section className="section faq-section" id="faq">
      <div className="section-header"><span className="section-label">{t("Frequently Asked Questions")}</span><h2>{t("Questions About Our Paper Products and Services")}</h2></div>
      <div className="faq-grid container">{faqItems.slice(0, 5).map((_, i) => (<details className="faq-item" key={i}><summary className="faq-question">{t(qk[i])}</summary><div className="faq-answer"><p>{t(ak[i])}</p></div></details>))}</div>
      <div style={{ textAlign: "center", marginTop: 28 }}><Link to="/faq" className="btn btn-outline">View All FAQs →</Link></div>
    </section>
  );
}

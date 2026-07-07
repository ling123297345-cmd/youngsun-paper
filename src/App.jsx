import { useState, useEffect, useRef, useCallback } from "react";
import {
  siteConfig,
  navItems,
  hero,
  aboutCompany,
  productCategories,
  subProducts,
  whyChooseUs,
  sustainability,
  globalReach,
  testimonials,
  contactInfo,
  footerColumns,
  faqItems,
} from "./data.js";
import { LangProvider, useLang } from "./i18n.jsx";
import { productEs } from "./productEs.js";

/* ================================================================
   ICON COMPONENTS
   ================================================================ */

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`arrow-icon ${className}`}
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* ================================================================
   HEADER
   ================================================================ */

function Header({ scrolled, mobileOpen, setMobileOpen }) {
  const { lang, toggleLang, langLabel, t } = useLang();
  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} role="banner">
      <a className="site-logo" href="#home" aria-label="YOUNGSUN PAPER — Back to top">
        <img
          className="logo-image"
          src="images/logo.png"
          alt="YOUNGSUN PAPER"
          width="160"
          height="40"
        />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {t(item.label)}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="lang-switch" onClick={toggleLang} aria-label="Switch language">
          {langLabel[lang]}
        </button>
        <button
          className={`menu-trigger${mobileOpen ? " open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`mobile-menu${mobileOpen ? " open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
            {t(item.label)}
          </a>
        ))}
      </nav>
    </header>
  );
}

/* ================================================================
   HERO
   ================================================================ */

function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="images/products/fancy-paper/background-hangtag-section-clean.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{t("Sustainable Paper, Global Reach")}</p>
        <div className="hero-title">
          <h1>
            {t("Premium Paper & Board")}
            <br />
            <span className="gold-text">{t("& Board Solutions")}</span>
          </h1>
        </div>
        <p className="hero-subtitle">{t("hero_subtitle")}</p>
        <div className="hero-actions">
          <a href={hero.ctaPrimary.href} className="btn btn-primary">
            {t("Explore Products")}
            <span className="btn-arrow"><ArrowIcon /></span>
          </a>
          <a href={hero.ctaSecondary.href} className="btn btn-outline">
            {t("Get a Quote")}
          </a>
        </div>
        <div className="hero-eco-badges">
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> {t("FSC® Certified")}</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> {t("SGS Certified")}</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> ISO 14001</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> {t("20+ Years Experience")}</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> {t("60+ Export Countries")}</span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CATEGORY OVERVIEW — 4 Card Grid Below Hero
   ================================================================ */

function CategoryOverview() {
  const { t } = useLang();
  return (
    <section className="section category-overview-section">
      <div className="cat-overview-grid">
        {productCategories.map((cat) => (
          <a key={cat.id} className="cat-overview-card" href="#products">
            <div className="cat-overview-image">
              <img src={cat.image} alt={cat.title} loading="lazy" />
              <div className="cat-overview-overlay" />
            </div>
            <div className="cat-overview-body">
              <span className="cat-overview-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
              <p>{t(cat.tagline)}</p>
              <span className="cat-overview-link">
                {t("View Products")} <span className="btn-arrow">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   ABOUT
   ================================================================ */

function About() {
  const { t } = useLang();
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState({ countries: 0, products: 0, output: 0, stock: 0 });

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !counted) { setCounted(true); animateCounts(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  const animateCounts = useCallback(() => {
    const targets = { countries: siteConfig.stats.countries, products: siteConfig.stats.products, output: siteConfig.stats.annualExport, stock: siteConfig.stats.warehouseStock };
    const duration = 2000;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts({ countries: Math.round(targets.countries * eased), products: Math.round(targets.products * eased), output: Math.round(targets.output * eased), stock: Math.round(targets.stock * eased) });
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, []);

  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="about-grid">
        <div className="about-text">
          <span className="section-label">{t("About YOUNGSUN")}</span>
          <h2 id="about-heading">{t("Your Paper Supply Partner Since 2002")}</h2>
          <p>{t("about_desc")}</p>
          <p>{t("about_desc2")}</p>
          <blockquote className="about-vision">{t("vision")}</blockquote>
        </div>
        <div className="about-stats" ref={statsRef}>
          <div className="stat-card">
            <span className="stat-icon">🌍</span>
            <span className="stat-number">{counted ? counts.countries : 0}<span className="plus">+</span></span>
            <span className="stat-label">{t("Countries Served")}</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📄</span>
            <span className="stat-number">{counted ? counts.products : 0}<span className="plus">+</span></span>
            <span className="stat-label">{t("Paper Grades")}</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📦</span>
            <span className="stat-number">{(counted ? counts.stock : 0).toLocaleString()}<span className="plus">t</span></span>
            <span className="stat-label">{t("Warehouse Stock")}</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏭</span>
            <span className="stat-number">{siteConfig.stats.years}<span className="plus">+</span></span>
            <span className="stat-label">{t("Years Experience")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PRODUCTS — 4 CATEGORY TABS WITH SUB-PRODUCT CARDS
   ================================================================ */

function Products() {
  const { t, lang } = useLang();
  const isEs = lang === "es";
  const [activeCat, setActiveCat] = useState("package-board");
  const [expandedId, setExpandedId] = useState(null);

  const category = productCategories.find((c) => c.id === activeCat);
  const products = Object.values(subProducts).filter((p) => p.category === activeCat);

  return (
    <section className="section products-section" id="products" aria-labelledby="products-heading">
      <div className="section-header">
        <span className="section-label">{t("What We Supply")}</span>
        <h2 id="products-heading">{t("Paper & Board That Performs")}</h2>
        <p>{t("four_cat_desc")}</p>
      </div>

      {/* 4 Category Tabs */}
      <div className="product-cat-tabs" role="tablist" aria-label="Product categories">
        {productCategories.map((cat) => (
          <button
            key={cat.id}
            className={`cat-tab${activeCat === cat.id ? " active" : ""}`}
            onClick={() => { setActiveCat(cat.id); setExpandedId(null); }}
            role="tab"
            aria-selected={activeCat === cat.id}
          >
            <span className="cat-tab-icon">{cat.icon}</span>
            <span className="cat-tab-name">{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Category Summary */}
      {category && (
        <div className="cat-summary">
          <p className="cat-tagline">{t(category.tagline)}</p>
          <p className="cat-desc">{t(`cat_summary_${category.id}`)}</p>
        </div>
      )}

      {/* Sub-Product Grid */}
      <div className="subproduct-grid" role="tabpanel">
        {products.map((product) => (
          <article
            key={product.id}
            className={`subproduct-card${expandedId === product.id ? " expanded" : ""}`}
            itemScope
            itemType="https://schema.org/Product"
          >
            {/* Product Image */}
            <div className="subproduct-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="subproduct-image"
                loading="lazy"
                itemProp="image"
              />
              <div className="subproduct-overlay">
                <button
                  className="subproduct-expand-btn"
                  onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                  aria-label={expandedId === product.id ? "Show less" : "Show full details"}
                >
                  {expandedId === product.id ? "−" : "+"}
                </button>
              </div>
            </div>

            {/* Product Info — always visible */}
            <div className="subproduct-info">
              <h3 itemProp="name">{product.name}</h3>
              <p className="subproduct-tagline" itemProp="description">{isEs && productEs[product.id]?.tagline ? productEs[product.id].tagline : product.tagline}</p>

              {/* Specs — ALWAYS visible for AI crawling */}
              <meta itemProp="category" content={product.category} />
              <meta itemProp="keywords" content={product.keywords.join(", ")} />
              <ul className="subproduct-specs" aria-label={`${product.name} specifications`}>
                {(isEs && productEs[product.id]?.specs ? productEs[product.id].specs : product.specs).slice(0, 3).map((s, i) => <li key={i}>{s}</li>)}
              </ul>

              {/* Applications — ALWAYS visible for AI */}
              <div className="subproduct-apps" aria-label="Applications">
                {(isEs && productEs[product.id]?.applications ? productEs[product.id].applications : product.applications).slice(0, 4).map((a, i) => <span key={i} className="subproduct-app-tag">{a}</span>)}
              </div>

              {/* Certifications badges — always visible */}
              <div className="subproduct-certs" aria-label="Certifications">
                {product.certifications.map((c, i) => <span key={i} className="subproduct-cert-tag">{c}</span>)}
              </div>

              {/* Full description — expandable */}
              {expandedId === product.id && (
                <div className="subproduct-detail">
                  <div className="detail-block">
                    <h4>{t("Full Product Description")}</h4>
                    <p>{product.description}</p>
                  </div>
                  <div className="detail-block">
                    <h4>{t("Complete Specifications")}</h4>
                    <ul>
                      {(isEs && productEs[product.id]?.specs ? productEs[product.id].specs : product.specs).map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                  <div className="detail-block">
                    <h4>{t("All Applications")}</h4>
                    <div className="detail-tags">
                      {(isEs && productEs[product.id]?.applications ? productEs[product.id].applications : product.applications).map((a, i) => <span key={i} className="detail-tag">{a}</span>)}
                    </div>
                  </div>
                  <div className="detail-block">
                    <h4>{t("Certifications")}</h4>
                    <div className="detail-tags certs">
                      {product.certifications.map((c, i) => <span key={i} className="detail-tag cert">{c}</span>)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   PROCESSING SERVICES
   ================================================================ */

/* ================================================================
   WHY US
   ================================================================ */

function WhyUs() {
  const { t } = useLang();
  const descKeys = ["whyus_1_desc","whyus_2_desc","whyus_3_desc","whyus_4_desc","whyus_5_desc","whyus_6_desc"];
  return (
    <section className="section why-us-section" id="why-us" aria-labelledby="why-us-heading">
      <div className="section-header">
        <span className="section-label">{t("The YOUNGSUN Difference")}</span>
        <h2 id="why-us-heading">{t("Why Global Partners Choose Us")}</h2>
        <p>{t("whyus_desc")}</p>
      </div>
      <div className="features-grid">
        {whyChooseUs.map((item, i) => (
          <div className="feature-card" key={item.title}>
            <span className="feature-icon" aria-hidden="true">{item.icon}</span>
            <h3>{t(item.title)}</h3>
            <p>{t(descKeys[i])}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   SUSTAINABILITY
   ================================================================ */

function Sustainability() {
  const { t } = useLang();
  const susTitleKeys = ["sus_1_title","sus_2_title","sus_3_title","sus_4_title","sus_5_title","sus_6_title"];
  const susDescKeys = ["sus_1_desc","sus_2_desc","sus_3_desc","sus_4_desc","sus_5_desc","sus_6_desc"];
  return (
    <section className="section sustainability-section" id="sustainability" aria-labelledby="sustainability-heading">
      <div className="section-header">
        <span className="section-label">{t("Our Commitment")}</span>
        <h2 id="sustainability-heading">{t("Sustainability Is Not Optional")}</h2>
        <p>{t("sustainability_subtitle")}</p>
      </div>
      <div className="sustainability-grid">
        {sustainability.commitments.map((item, i) => (
          <div className="sustainability-card" key={item.title}>
            <span className="sus-icon" aria-hidden="true">{item.icon}</span>
            <h3>{t(susTitleKeys[i])}</h3>
            <p>{t(susDescKeys[i])}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   GLOBAL REACH
   ================================================================ */

function GlobalReach() {
  const { t } = useLang();
  const regionNameKeys = ["region_1_name","region_2_name","region_3_name","region_4_name","region_5_name"];
  const regionDetailKeys = ["region_1_detail","region_2_detail","region_3_detail","region_4_detail","region_5_detail"];
  return (
    <section className="section global-section" id="global" aria-labelledby="global-heading">
      <div className="section-header">
        <span className="section-label">{t("Worldwide Presence")}</span>
        <h2 id="global-heading">{t("Global Reach, Personal Service")}</h2>
        <p>{t("global_subtitle")}</p>
      </div>
      <div className="global-map">
        {globalReach.regions.map((region, i) => (
          <div className="region-card" key={region.name}>
            <span className="region-name">{t(regionNameKeys[i])}</span>
            <span className="region-count">{region.countries}</span>
            <span className="region-detail">{t(regionDetailKeys[i])}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   TESTIMONIALS
   ================================================================ */

function Testimonials() {
  const { t } = useLang();
  const quoteKeys = ["testimonial_1_quote","testimonial_2_quote","testimonial_3_quote"];
  const authorKeys = ["testimonial_1_author","testimonial_2_author","testimonial_3_author"];
  return (
    <section className="section testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-header">
        <span className="section-label">{t("Client Voices")}</span>
        <h2 id="testimonials-heading">{t("Trusted by Industry Leaders")}</h2>
        <p>{t("testimonials_desc")}</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, i) => (
          <div className="testimonial-card" key={i}>
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>{t(quoteKeys[i])}</blockquote>
            <div className="testimonial-author">
              <span className="author-name">{t(authorKeys[i])}</span>
              <span className="author-company">{testimonial.company}, {testimonial.region}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT
   ================================================================ */

function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", product: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="section-header">
        <span className="section-label">{t("Get In Touch")}</span>
        <h2 id="contact-heading">{t("Let's Talk Paper")}</h2>
        <p>{t("contact_subtitle")}</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-methods">
            <a href={`mailto:${contactInfo.email}`} className="contact-method">
              <span className="method-icon" aria-hidden="true">✉️</span>
              <div><span className="method-label">Email</span><span className="method-value">{contactInfo.email}</span></div>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="contact-method">
              <span className="method-icon" aria-hidden="true">📞</span>
              <div><span className="method-label">Phone</span><span className="method-value">{contactInfo.phone}</span></div>
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} className="contact-method" target="_blank" rel="noopener noreferrer">
              <span className="method-icon" aria-hidden="true">💬</span>
              <div><span className="method-label">WhatsApp</span><span className="method-value">{contactInfo.whatsapp}</span></div>
            </a>
            <div className="contact-method">
              <span className="method-icon" aria-hidden="true">💬</span>
              <div><span className="method-label">WeChat</span><span className="method-value">{contactInfo.wechat}</span></div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3>{t("Send Us a Message")}</h3>
          <div className="form-group">
            <label htmlFor="name">{t("Your Name *")}</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("Email Address *")}</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" />
          </div>
          <div className="form-group">
            <label htmlFor="product">{t("Product Interest")}</label>
            <select id="product" name="product" value={form.product} onChange={handleChange}>
              <option value="">{t("Select a product category")}</option>
              {productCategories.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
              <option value="other">{t("Other / Not Sure")}</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("Your Message *")}</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder={t("placeholder_msg")} />
          </div>
          <button type="submit" className="form-submit">{submitted ? t("✓ Message Sent!") : t("Send Inquiry")}</button>
          {submitted && <p style={{ color: "#c8923f", fontSize: "14px", fontWeight: 600 }}>Thank you! We'll get back to you within 24 hours.</p>}
        </form>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */

function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">YOUNGSUN<span>PAPER</span></div>
          <p>Premium paper and board supply — connecting global businesses with quality substrates and converting services since {siteConfig.founded}.</p>
        </div>
        {footerColumns.map((col) => (
          <div className="footer-column" key={col.title}>
            <h4>{t(col.title)}</h4>
            {col.links.map((link) => <a key={link.label} href={link.href}>{t(link.label)}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YOUNGSUN PAPER. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/133053995/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   FAQ — AI-extractable Q&A with JSON-LD schema
   ================================================================ */

function FAQ() {
  const { t } = useLang();
  const faqQKeys = ["faq_q1","faq_q2","faq_q3","faq_q4","faq_q5","faq_q6","faq_q7","faq_q8"];
  const faqAKeys = ["faq_a1","faq_a2","faq_a3","faq_a4","faq_a5","faq_a6","faq_a7","faq_a8"];
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="section-header">
        <span className="section-label">{t("Frequently Asked Questions")}</span>
        <h2 id="faq-heading">{t("Questions About Our Paper Products and Services")}</h2>
        <p>{t("faq_desc")}</p>
      </div>
      <div className="faq-grid" itemScope itemType="https://schema.org/FAQPage">
        {faqItems.map((faq, i) => (
          <details className="faq-item" key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="faq-question" itemProp="name">
              {t(faqQKeys[i])}
            </summary>
            <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">{t(faqAKeys[i])}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   FLOATING ACTIONS
   ================================================================ */

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="floating-actions">
      {showTop && (
        <button className="float-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" title="Back to top">↑</button>
      )}
      <a className="float-btn whatsapp" href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">WA</a>
    </div>
  );
}

/* ================================================================
   SCROLL REVEAL
   ================================================================ */

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ================================================================
   MAIN APP
   ================================================================ */

export default function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useScrollReveal();

  return (
    <>
      <Header scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main id="main-content">
        <Hero />
        <CategoryOverview />
        <About />
        <Products />
        <WhyUs />
        <Sustainability />
        <GlobalReach />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";
import {
  siteConfig,
  navItems,
  hero,
  aboutCompany,
  productCategories,
  subProducts,
  processingServices,
  whyChooseUs,
  sustainability,
  globalReach,
  testimonials,
  contactInfo,
  footerColumns,
  faqItems,
} from "./data.js";

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
  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} role="banner">
      <a className="site-logo" href="#home" aria-label="YOUNGSUN PAPER — Back to top">
        <span className="logo-text">
          YOUNGSUN<span className="logo-accent">PAPER</span>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="lang-switch" aria-label="Switch language to Chinese">
          中文
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
            {item.label}
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
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />

      <div className="hero-particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="hero-particle" />
        ))}
        {[...Array(4)].map((_, i) => (
          <div key={`glow-${i}`} className="hero-highlight" />
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">{siteConfig.tagline}</p>
        <div className="hero-title">
          <h1>
            {hero.titleLine1}{" "}
            <span className="gold-text">{hero.titleLine2}</span>
          </h1>
        </div>
        <p className="hero-subtitle">{hero.subtitle}</p>
        <div className="hero-actions">
          <a href={hero.ctaPrimary.href} className="btn btn-primary">
            {hero.ctaPrimary.label}
            <span className="btn-arrow"><ArrowIcon /></span>
          </a>
          <a href={hero.ctaSecondary.href} className="btn btn-outline">
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <h3>{siteConfig.stats.countries}<span className="stat-plus">+</span></h3>
            <span>Export Countries</span>
          </div>
          <div className="hero-stat">
            <h3>{siteConfig.stats.products}<span className="stat-plus">+</span></h3>
            <span>Paper Grades</span>
          </div>
          <div className="hero-stat">
            <h3>{(siteConfig.stats.warehouseStock / 1000).toLocaleString()}k<span className="stat-plus">t</span></h3>
            <span>Warehouse Stock</span>
          </div>
          <div className="hero-stat">
            <h3>{(siteConfig.stats.annualExport / 1000).toLocaleString()}k<span className="stat-plus">t</span></h3>
            <span>Annual Export</span>
          </div>
        </div>

        <div className="hero-eco-badges">
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> FSC® Certified</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> PEFC Certified</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> ISO 14001</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> PFAS-Free Food Grades</span>
          <span className="hero-eco-badge"><span className="badge-dot" aria-hidden="true" /> Carbon-Conscious Logistics</span>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">Scroll</div>
    </section>
  );
}

/* ================================================================
   ABOUT
   ================================================================ */

function About() {
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
          <span className="section-label">About YOUNGSUN</span>
          <h2 id="about-heading">{aboutCompany.title}</h2>
          {aboutCompany.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <blockquote className="about-vision">{aboutCompany.vision}</blockquote>
        </div>
        <div className="about-stats" ref={statsRef}>
          <div className="stat-card">
            <span className="stat-icon">🌍</span>
            <span className="stat-number">{counted ? counts.countries : 0}<span className="plus">+</span></span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📄</span>
            <span className="stat-number">{counted ? counts.products : 0}<span className="plus">+</span></span>
            <span className="stat-label">Paper Grades</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📦</span>
            <span className="stat-number">{(counted ? counts.stock : 0).toLocaleString()}<span className="plus">t</span></span>
            <span className="stat-label">Warehouse Stock</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏭</span>
            <span className="stat-number">{siteConfig.stats.years}<span className="plus">+</span></span>
            <span className="stat-label">Years Experience</span>
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
  const [activeCat, setActiveCat] = useState("package-board");
  const [expandedId, setExpandedId] = useState(null);

  const category = productCategories.find((c) => c.id === activeCat);
  const products = Object.values(subProducts).filter((p) => p.category === activeCat);

  return (
    <section className="section products-section" id="products" aria-labelledby="products-heading">
      <div className="section-header">
        <span className="section-label">What We Supply</span>
        <h2 id="products-heading">Paper & Board That Performs</h2>
        <p>Four product categories. 20+ grades. One reliable supply partner. Select a category to explore specifications, applications, and certifications.</p>
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
          <p className="cat-tagline">{category.tagline}</p>
          <p className="cat-desc">{category.summary}</p>
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
              <p className="subproduct-tagline" itemProp="description">{product.tagline}</p>

              {/* Specs — ALWAYS visible for AI crawling */}
              <meta itemProp="category" content={product.category} />
              <meta itemProp="keywords" content={product.keywords.join(", ")} />
              <ul className="subproduct-specs" aria-label={`${product.name} specifications`}>
                {product.specs.slice(0, 3).map((s, i) => <li key={i}>{s}</li>)}
              </ul>

              {/* Applications — ALWAYS visible for AI */}
              <div className="subproduct-apps" aria-label="Applications">
                {product.applications.slice(0, 4).map((a, i) => <span key={i} className="subproduct-app-tag">{a}</span>)}
              </div>

              {/* Certifications badges — always visible */}
              <div className="subproduct-certs" aria-label="Certifications">
                {product.certifications.map((c, i) => <span key={i} className="subproduct-cert-tag">{c}</span>)}
              </div>

              {/* Full description — expandable */}
              {expandedId === product.id && (
                <div className="subproduct-detail">
                  <div className="detail-block">
                    <h4>Full Product Description</h4>
                    <p>{product.description}</p>
                  </div>
                  <div className="detail-block">
                    <h4>Complete Specifications</h4>
                    <ul>
                      {product.specs.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                  <div className="detail-block">
                    <h4>All Applications</h4>
                    <div className="detail-tags">
                      {product.applications.map((a, i) => <span key={i} className="detail-tag">{a}</span>)}
                    </div>
                  </div>
                  <div className="detail-block">
                    <h4>Certifications</h4>
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

function Processing() {
  return (
    <section className="section processing-section" id="processing" aria-labelledby="processing-heading">
      <div className="section-header">
        <span className="section-label">Value-Added Services</span>
        <h2 id="processing-heading">Custom Converting & Processing</h2>
        <p>Beyond supplying raw paper and board, we offer a full range of converting services — from slitting and sheeting to embossing, die-cutting, printing, and lamination. Receive finished material ready for your production line.</p>
      </div>

      <div className="processing-grid">
        {processingServices.map((svc) => (
          <div className="processing-card" key={svc.id}>
            <div className="processing-image-wrap">
              <img src={svc.image} alt={svc.title} className="processing-image" loading="lazy" />
              <span className="processing-icon" aria-hidden="true">{svc.icon}</span>
            </div>
            <div className="processing-info">
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <ul className="processing-highlights">
                {svc.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================================================
   WHY US
   ================================================================ */

function WhyUs() {
  return (
    <section className="section why-us-section" id="why-us" aria-labelledby="why-us-heading">
      <div className="section-header">
        <span className="section-label">The YOUNGSUN Difference</span>
        <h2 id="why-us-heading">Why Global Partners Choose Us</h2>
        <p>It's not just about paper — it's about reliability, expertise, and a partnership that makes your supply chain stronger.</p>
      </div>
      <div className="features-grid">
        {whyChooseUs.map((item) => (
          <div className="feature-card" key={item.title}>
            <span className="feature-icon" aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
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
  return (
    <section className="section sustainability-section" id="sustainability" aria-labelledby="sustainability-heading">
      <div className="section-header">
        <span className="section-label">Our Commitment</span>
        <h2 id="sustainability-heading">{sustainability.title}</h2>
        <p>{sustainability.subtitle}</p>
      </div>
      <div className="sustainability-grid">
        {sustainability.commitments.map((item) => (
          <div className="sustainability-card" key={item.title}>
            <span className="sus-icon" aria-hidden="true">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
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
  return (
    <section className="section global-section" id="global" aria-labelledby="global-heading">
      <div className="section-header">
        <span className="section-label">Worldwide Presence</span>
        <h2 id="global-heading">{globalReach.title}</h2>
        <p>{globalReach.subtitle}</p>
      </div>
      <div className="global-map">
        {globalReach.regions.map((region) => (
          <div className="region-card" key={region.name}>
            <span className="region-name">{region.name}</span>
            <span className="region-count">{region.countries}</span>
            <span className="region-detail">{region.highlight}</span>
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
  return (
    <section className="section testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="section-header">
        <span className="section-label">Client Voices</span>
        <h2 id="testimonials-heading">Trusted by Industry Leaders</h2>
        <p>What our partners say about working with YOUNGSUN PAPER.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>{t.quote}</blockquote>
            <div className="testimonial-author">
              <span className="author-name">{t.author}</span>
              <span className="author-company">{t.company}, {t.region}</span>
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
        <span className="section-label">Get In Touch</span>
        <h2 id="contact-heading">{contactInfo.title}</h2>
        <p>{contactInfo.subtitle}</p>
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
          <h3>Send Us a Message</h3>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" />
          </div>
          <div className="form-group">
            <label htmlFor="product">Product Interest</label>
            <select id="product" name="product" value={form.product} onChange={handleChange}>
              <option value="">Select a product category</option>
              {productCategories.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your paper requirements, volume, target specifications, or any questions..." />
          </div>
          <button type="submit" className="form-submit">{submitted ? "✓ Message Sent!" : "Send Inquiry"}</button>
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
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">YOUNGSUN<span>PAPER</span></div>
          <p>Premium paper and board supply — connecting global businesses with quality substrates and converting services since {siteConfig.founded}.</p>
        </div>
        {footerColumns.map((col) => (
          <div className="footer-column" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YOUNGSUN PAPER. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/youngsun-paper" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="section-header">
        <span className="section-label">Frequently Asked Questions</span>
        <h2 id="faq-heading">Questions About Our Paper Products and Services</h2>
        <p>Quick answers to the most common questions from international buyers, converters, and procurement teams.</p>
      </div>
      <div className="faq-grid" itemScope itemType="https://schema.org/FAQPage">
        {faqItems.map((faq, i) => (
          <details className="faq-item" key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <summary className="faq-question" itemProp="name">
              {faq.question}
            </summary>
            <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text">{faq.answer}</p>
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
        <About />
        <Products />
        <Processing />
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

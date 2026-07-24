import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { siteConfig, productCategories, subProducts, whyChooseUs, contactInfo, faqItems, testimonials } from "../data.js";
import { productEs } from "../productEs.js";
import { industries } from "../industriesData.js";
import { caseStudies } from "../caseStudiesData.js";
import { blogPosts } from "../blogData.js";
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

      {/* ===== CLIENT LOGOS / TRUST BAR ===== */}
      <TrustBar />

      {/* ===== CASE STUDY HIGHLIGHTS ===== */}
      <CaseStudyHighlights />

      {/* ===== BLOG HIGHLIGHTS ===== */}
      <BlogHighlights />

      {/* ===== WHY US ===== */}
      <WhyUsHome />

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialsHome />

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
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="section-header">
        <span className="section-label">{isEs ? "Soluciones por Industria" : "Solutions by Industry"}</span>
        <h2>{isEs ? "Papel Diseñado para Su Sector" : "Paper Engineered for Your Industry"}</h2>
        <p style={{ maxWidth: 600, margin: "0 auto" }}>{isEs ? "Cada industria exige algo diferente del papel. Explore nuestras soluciones adaptadas." : "Every industry demands something different from paper. Explore our tailored solutions."}</p>
      </div>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16, maxWidth: 1200 }}>
        {industries.map((ind) => (
          <Link key={ind.id} to={`/industries/${ind.id}`} style={{ background: "var(--paper)", borderRadius: 12, padding: "24px 20px", textAlign: "center", textDecoration: "none", color: "inherit", transition: "transform 0.2s var(--ease-out)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
          >
            <div style={{ fontSize: 36, marginBottom: 10 }}>{ind.icon}</div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--forest)" }}>{ind.title[lang]}</h4>
          </Link>
        ))}
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
  const clients = [
    { name: "Nikon", region: "Japan" },
    { name: "Toyota", region: "Japan" },
    { name: "Festo", region: "Germany" },
    { name: "Microsoft", region: "USA" },
    { name: "Emerson", region: "USA" },
    { name: "APP", region: "China" },
    { name: "NINEDRAGON", region: "China" },
    { name: "CHENMING", region: "China" },
  ];
  return (
    <section className="section" style={{ background: "var(--paper)", padding: "48px 0" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 1000 }}>
        <span style={{ color: "var(--muted)", fontSize: 13, textTransform: "uppercase", letterSpacing: 2, display: "block", marginBottom: 24 }}>
          {isEs ? "Nuestros Socios y Clientes" : "Our Mill Partners & Trusted By"}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "28px 36px", opacity: 0.65 }}>
          {clients.map((c) => (
            <span key={c.name} style={{ fontSize: 16, fontWeight: 700, color: "var(--forest)", letterSpacing: 1 }}>{c.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyHighlights() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="section-header">
        <span className="section-label">{isEs ? "Casos de Estudio" : "Case Studies"}</span>
        <h2>{isEs ? "Resultados Reales con YOUNGSUN" : "Real Results with YOUNGSUN"}</h2>
        <p>{isEs ? "Vea cómo clientes reales logran ahorros de costos, mejoras de calidad y eficiencia en la cadena de suministro." : "See how real clients achieve cost savings, quality improvements, and supply chain efficiency."}</p>
      </div>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, maxWidth: 1100 }}>
        {featured.map((cs) => (
          <Link key={cs.id} to={`/case-studies/${cs.id}`} style={{ background: "var(--paper)", borderRadius: 14, padding: "28px", textDecoration: "none", color: "inherit", boxShadow: "var(--shadow-sm)", transition: "box-shadow 0.2s var(--ease-out)" }}>
            <span style={{ background: "var(--gold-pale)", color: "var(--gold)", padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{cs.category}</span>
            <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--forest)", margin: "12px 0 8px", lineHeight: 1.4 }}>{cs.title[lang]}</h4>
            <div style={{ display: "flex", gap: 16, marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
              {cs.results.slice(0, 2).map((r, i) => (
                <div key={i}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--gold)" }}>{r.metric[lang]}</div>
                  <div style={{ fontSize: 10, color: "var(--muted-light)" }}>{r.label[lang]}</div>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <Link to="/case-studies" className="btn btn-outline">{isEs ? "Ver Todos los Casos" : "View All Case Studies"} →</Link>
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

function TestimonialsHome() {
  const { t } = useLang(); const qk = ["testimonial_1_quote","testimonial_2_quote","testimonial_3_quote"]; const ak = ["testimonial_1_author","testimonial_2_author","testimonial_3_author"];
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-header"><span className="section-label">{t("Client Voices")}</span><h2>{t("Trusted by Industry Leaders")}</h2><p>{t("testimonials_desc")}</p></div>
      <div className="testimonials-grid container">{testimonials.map((tm, i) => (<div className="testimonial-card" key={i}><span className="quote-mark">&ldquo;</span><blockquote>{t(qk[i])}</blockquote><div className="testimonial-author"><span className="author-name">{t(ak[i])}</span><span className="author-company">{tm.company}, {tm.region}</span></div></div>))}</div>
    </section>
  );
}

function ContactHome() {
  const { t } = useLang(); const [form, setForm] = useState({ name:"", email:"", company:"", phone:"", product:"", gsm:"", size:"", quantity:"", destination:"", message:"" }); const [submitted, setSubmitted] = useState(false);
  const h = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const s = (e) => { e.preventDefault(); setSubmitted(true); setForm({ name:"", email:"", company:"", phone:"", product:"", gsm:"", size:"", quantity:"", destination:"", message:"" }); setTimeout(() => setSubmitted(false), 4000); };
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
        <form className="contact-form" onSubmit={s}>
          <h3>{t("Send Us a Message")}</h3>
          <div className="form-group"><label htmlFor="hname">{t("Your Name *")}</label><input type="text" id="hname" name="name" value={form.name} onChange={h} required /></div>
          <div className="form-group"><label>Company</label><input type="text" name="company" value={form.company} onChange={h} /></div>
          <div className="form-group"><label htmlFor="hemail">{t("Email Address *")}</label><input type="email" id="hemail" name="email" value={form.email} onChange={h} required /></div>
          <div className="form-group"><label>Phone / WhatsApp</label><input type="text" name="phone" value={form.phone} onChange={h} /></div>
          <div className="form-group"><label htmlFor="hproduct">{t("Product Interest")}</label><select id="hproduct" name="product" value={form.product} onChange={h}><option value="">{t("Select a product category")}</option>{productCategories.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}<option value="other">{t("Other / Not Sure")}</option></select></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div className="form-group"><label>GSM / Thickness</label><input type="text" name="gsm" value={form.gsm} onChange={h} placeholder="e.g. 200-400 gsm" /></div>
            <div className="form-group"><label>Size</label><input type="text" name="size" value={form.size} onChange={h} placeholder="e.g. A4, custom" /></div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div className="form-group"><label>Quantity</label><input type="text" name="quantity" value={form.quantity} onChange={h} placeholder="e.g. 1x20ft container" /></div>
            <div className="form-group"><label>Destination Country / Port</label><input type="text" name="destination" value={form.destination} onChange={h} placeholder="e.g. Hamburg, Germany" /></div>
          </div>
          <div className="form-group"><label htmlFor="hmessage">{t("Your Message *")}</label><textarea id="hmessage" name="message" value={form.message} onChange={h} required /></div>
          <button type="submit" className="form-submit">{submitted ? t("✓ Message Sent!") : t("Send Inquiry")}</button>
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

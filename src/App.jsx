import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LangProvider, useLang } from "./i18n.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import FancyPaperGallery from "./pages/FancyPaperGallery.jsx";
import { contactInfo } from "./data.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Header() {
  const { lang, toggleLang, langLabel, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);

  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <Link className="site-logo" to="/"><img className="logo-image" src="/images/logo.png" alt="YOUNGSUN PAPER" width="160" height="40" /></Link>
      <nav className="desktop-nav">{links.map((item) => <Link key={item.label} to={item.href}>{t(item.label)}</Link>)}</nav>
      <div className="header-actions">
        <button className="lang-switch" onClick={toggleLang}>{langLabel[lang]}</button>
        <button className={`menu-trigger${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen((v) => !v)} aria-label="Menu"><span /><span /><span /></button>
      </div>
      <nav className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {links.map((item) => <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)}>{t(item.label)}</Link>)}
      </nav>
    </header>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand"><div className="footer-logo">YOUNGSUN<span>PAPER</span></div><p>Premium paper and board supply since 2002.</p></div>
        <div className="footer-column"><h4>{t("Product Categories")}</h4><Link to="/products">{t("Package Board")}</Link><Link to="/products">{t("Culture Paper")}</Link><Link to="/products">{t("Fancy Paper")}</Link><Link to="/products">{t("Food Packaging Paper")}</Link></div>
        <div className="footer-column"><h4>{t("Company")}</h4><Link to="/about">{t("About Us")}</Link><Link to="/contact">{t("Contact")}</Link><Link to="/blog">Blog</Link></div>
        <div className="footer-column"><h4>{t("Resources")}</h4><Link to="/products">{t("Product Catalog")}</Link><Link to="/contact">{t("Request a Quote")}</Link></div>
      </div>
      <div className="footer-bottom" style={{ flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <p>© {new Date().getFullYear()} YOUNGSUN PAPER.</p>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>📊 网站统计</a>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/133053995/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${contactInfo.email}`}>Email</a>
            <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>📊 网站分析：</span>
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime)", fontSize: 10, fontWeight: 600 }}>Google Analytics → 访客量、来源、转化</a>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 10 }}>|</span>
          <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime)", fontSize: 10, fontWeight: 600 }}>Microsoft Clarity → 录屏回放、热力图</a>
        </div>
      </div>
    </footer>
  );
}

function Floating() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <div className="floating-actions">
      {show && <button className="float-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>}
      <a className="float-btn whatsapp" href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WA</a>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/fancy-paper-collection" element={<FancyPaperGallery />} />
          </Routes>
        </main>
        <Footer />
        <Floating />
      </BrowserRouter>
    </LangProvider>
    </HelmetProvider>
  );
}

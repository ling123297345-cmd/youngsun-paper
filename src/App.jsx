import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LangProvider, useLang } from "./i18n.jsx";
import SearchBar from "./SearchBar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import FancyPaperGallery from "./pages/FancyPaperGallery.jsx";
import Industries from "./pages/Industries.jsx";
import IndustryDetail from "./pages/IndustryDetail.jsx";
import Materials from "./pages/Materials.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.jsx";
import Processing from "./pages/Processing.jsx";
import Quality from "./pages/Quality.jsx";
import FAQ from "./pages/FAQ.jsx";
import HowToOrder from "./pages/HowToOrder.jsx";
import { contactInfo } from "./data.js";

// ── PWA Install Prompt (Android / Chrome / Edge) ──────────
function PwaInstallBanner() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Already installed — don't show
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show after a short delay so the page loads first
      setTimeout(() => setShow(true), 2500);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // If the app was installed via this prompt, hide
    window.addEventListener("appinstalled", () => {
      setShow(false);
      setDeferredPrompt(null);
      console.log("[PWA] App installed successfully!");
    });

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`[PWA] Install prompt outcome: ${outcome}`);
    setDeferredPrompt(null);
    setShow(false);
  }, [deferredPrompt]);

  if (!show) return null;

  return (
    <div
      className="pwa-install-toast"
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        background: "var(--forest, #0f2b1a)",
        color: "#fff",
        padding: "14px 22px",
        borderRadius: 14,
        display: "flex",
        alignItems: "center",
        gap: 14,
        boxShadow: "0 8px 32px rgba(15,43,26,0.35)",
        maxWidth: "calc(100vw - 32px)",
        animation: "pwaSlideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      <img
        src="/apple-touch-icon.png"
        alt=""
        width="36"
        height="36"
        style={{ borderRadius: 8, flexShrink: 0 }}
      />
      <span style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
        Install YOUNGSUN PAPER App
      </span>
      <button
        onClick={handleInstall}
        style={{
          background: "var(--gold, #c8923f)",
          border: "none",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 13,
          cursor: "pointer",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Install
      </button>
      <button
        onClick={() => { setShow(false); }}
        style={{
          background: "transparent",
          border: "none",
          color: "rgba(255,255,255,0.5)",
          padding: "4px",
          cursor: "pointer",
          fontSize: 16,
          lineHeight: 1,
        }}
        aria-label="Dismiss"
      >
        ✕
      </button>
      <style>{`
        @keyframes pwaSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}

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
    { label: "Industries", href: "/industries" },
    { label: "Materials", href: "/materials" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Processing", href: "/processing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <Link className="site-logo" to="/"><img className="logo-image" src="/images/logo.png" alt="YOUNGSUN PAPER" width="160" height="40" /></Link>
      <nav className="desktop-nav">{links.map((item) => <NavLink key={item.label} to={item.href} end={item.href === "/"}>{t(item.label)}</NavLink>)}</nav>
      <SearchBar />
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
        <div className="footer-column"><h4>{t("Product Categories")}</h4><Link to="/products">{t("Package Board")}</Link><Link to="/products">{t("Culture Paper")}</Link><Link to="/products">{t("Fancy Paper")}</Link><Link to="/products">{t("Food Packaging Paper")}</Link><Link to="/materials">📋 {t("Materials Library") || "Materials Library"}</Link></div>
        <div className="footer-column"><h4>{t("Company")}</h4><Link to="/about">{t("About Us")}</Link><Link to="/industries">{t("Industries") || "Industries"}</Link><Link to="/case-studies">{t("Case Studies") || "Case Studies"}</Link><Link to="/quality">{t("Quality Assurance") || "Quality Assurance"}</Link><Link to="/contact">{t("Contact")}</Link></div>
        <div className="footer-column"><h4>{t("Resources")}</h4><Link to="/products">{t("Product Catalog")}</Link><Link to="/materials">{t("Paper Grade Guide") || "Paper Grade Guide"}</Link><Link to="/processing">{t("Processing Services") || "Processing"}</Link><Link to="/how-to-order">{t("How to Order") || "How to Order"}</Link><Link to="/faq">FAQ</Link><Link to="/blog">Blog</Link><Link to="/contact">{t("Request a Quote")}</Link></div>
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
  const [updateReady, setUpdateReady] = useState(false);

  // ── PWA: Listen for update available ──────────────────
  useEffect(() => {
    const handler = () => setUpdateReady(true);
    window.addEventListener("pwa-update-available", handler);
    return () => window.removeEventListener("pwa-update-available", handler);
  }, []);

  return (
    <HelmetProvider>
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/fancy-paper-collection" element={<FancyPaperGallery />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:id" element={<IndustryDetail />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
          </Routes>
        </main>
        <Footer />
        <Floating />

        {/* PWA: Install banner (Android / Chrome / Edge) */}
        <PwaInstallBanner />

        {/* PWA: Update available toast */}
        {updateReady && (
          <div
            style={{
              position: "fixed",
              top: 16,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              background: "var(--forest, #0f2b1a)",
              color: "#fff",
              padding: "12px 22px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxShadow: "0 6px 24px rgba(15,43,26,0.3)",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            🔄 New version available
            <button
              onClick={() => window.location.reload()}
              style={{
                background: "var(--gold, #c8923f)",
                border: "none",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Update
            </button>
          </div>
        )}
      </BrowserRouter>
    </LangProvider>
    </HelmetProvider>
  );
}

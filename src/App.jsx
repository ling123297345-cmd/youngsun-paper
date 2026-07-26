import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LangProvider, useLang } from "./i18n.jsx";
import SearchBar from "./SearchBar.jsx";
import { contactInfo } from "./data.js";

// ── Eager: Home loads immediately (first page users see) ────
import Home from "./pages/Home.jsx";

// ── Lazy: All other pages load on demand ────────────────────
const Products = lazy(() => import("./pages/Products.jsx"));
const ProductDetail = lazy(() => import("./pages/ProductDetail.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));
const FancyPaperGallery = lazy(() => import("./pages/FancyPaperGallery.jsx"));
const Industries = lazy(() => import("./pages/Industries.jsx"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail.jsx"));
const Materials = lazy(() => import("./pages/Materials.jsx"));
const Processing = lazy(() => import("./pages/Processing.jsx"));
const Quality = lazy(() => import("./pages/Quality.jsx"));
const FAQ = lazy(() => import("./pages/FAQ.jsx"));
const HowToOrder = lazy(() => import("./pages/HowToOrder.jsx"));
const Resources = lazy(() => import("./pages/Resources.jsx"));

// ── Loading fallback ────────────────────────────────────────
function PageLoading() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", flexDirection: "column", gap: 16, paddingTop: 100 }}>
      <div style={{ width: 36, height: 36, border: "3px solid var(--line)", borderTopColor: "var(--gold)", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
      <span style={{ fontSize: 13, color: "var(--muted)" }}>Loading…</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">YOUNGSUN<span>PAPER</span></div>
          <p>Premium paper and board supply since 2002.</p>
          <div style={{ marginTop: 18 }}>
            <h4 style={{ color: "#fff", fontSize: 13, marginBottom: 6, fontWeight: 600 }}>📬 {t("Subscribe") || "Subscribe"}</h4>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 10, lineHeight: 1.5 }}>Get product updates, paper guides & sourcing tips.</p>
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 6 }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required
                style={{ flex: 1, padding: "9px 12px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "#fff", fontSize: 12, outline: "none", minWidth: 130 }} />
              <button type="submit"
                style={{ padding: "9px 14px", borderRadius: 6, border: "none", background: subscribed ? "var(--leaf)" : "var(--gold)", color: "#fff", fontWeight: 700, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>
                {subscribed ? "✓ Done!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
        <div className="footer-column"><h4>{t("Product Categories")}</h4><Link to="/products">{t("Package Board")}</Link><Link to="/products">{t("Culture Paper")}</Link><Link to="/products">{t("Fancy Paper")}</Link><Link to="/products">{t("Food Packaging Paper")}</Link><Link to="/materials">📋 {t("Materials Library") || "Materials Library"}</Link></div>
        <div className="footer-column"><h4>{t("Company")}</h4><Link to="/about">{t("About Us")}</Link><Link to="/industries">{t("Industries") || "Industries"}</Link><Link to="/quality">{t("Quality Assurance") || "Quality Assurance"}</Link><Link to="/contact">{t("Contact")}</Link></div>
        <div className="footer-column"><h4>{t("Resources")}</h4><Link to="/products">{t("Product Catalog")}</Link><Link to="/materials">{t("Paper Grade Guide") || "Paper Grade Guide"}</Link><Link to="/resources">📥 {t("Downloads") || "Downloads"}</Link><Link to="/processing">{t("Processing Services") || "Processing"}</Link><Link to="/how-to-order">{t("How to Order") || "How to Order"}</Link><Link to="/faq">FAQ</Link><Link to="/blog">Blog</Link><Link to="/contact">{t("Request a Quote")}</Link></div>
      </div>
      <div className="footer-bottom" style={{ flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <p>© {new Date().getFullYear()} YOUNGSUN PAPER.</p>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>📊 Analytics</a>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/133053995/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${contactInfo.email}`}>Email</a>
            <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Floating() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <div className="floating-actions" style={{ position: "fixed", bottom: 24, right: 24, zIndex: 999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ width: 48, height: 48, borderRadius: "50%", background: "#fff", border: "1px solid var(--line-strong)", boxShadow: "var(--shadow-md)", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Back to top">↑</button>
      )}
      <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
        style={{ width: 56, height: 56, borderRadius: "50%", background: "#25D366", boxShadow: "0 6px 24px rgba(37,211,102,0.35)", cursor: "pointer", fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
        aria-label="Chat on WhatsApp">
        💬
      </a>
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
          <Suspense fallback={<PageLoading />}>
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
            <Route path="/case-studies" element={<Navigate to="/quality" replace />} />
            <Route path="/case-studies/:id" element={<Navigate to="/quality" replace />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/testimonials" element={<Navigate to="/quality" replace />} />
          </Routes>
          </Suspense>
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

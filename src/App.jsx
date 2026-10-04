import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ArrowUp, MessageCircle } from "lucide-react";
import { LangProvider, useLang } from "./i18n.jsx";
import SearchBar from "./SearchBar.jsx";
import { contactInfo, subProducts } from "./data.js";
import { BreadcrumbSchema } from "./SEO.jsx";
import { isSpanishPath } from "./localeSeo.js";

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
const PulpMaterials = lazy(() => import("./pages/PulpMaterials.jsx"));
const PulpArticle = lazy(() => import("./pages/PulpArticle.jsx"));
const Admin = lazy(() => import("./pages/Admin.jsx"));

// ── Loading fallback ────────────────────────────────────────
function PageLoading() {
  const { lang } = useLang();
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", flexDirection: "column", gap: 16, paddingTop: 100 }}>
      <div style={{ width: 36, height: 36, border: "3px solid var(--line)", borderTopColor: "var(--gold)", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
      <span style={{ fontSize: 13, color: "var(--muted)" }}>{lang === "es" ? "Cargando..." : "Loading..."}</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ── PWA Install Prompt (Android / Chrome / Edge) ──────────
function PwaInstallBanner() {
  const { lang } = useLang();
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
        {lang === "es" ? "Instalar la aplicación YOUNGSUN PAPER" : "Install YOUNGSUN PAPER App"}
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
        {lang === "es" ? "Instalar" : "Install"}
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
        aria-label={lang === "es" ? "Cerrar" : "Dismiss"}
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
  const { pathname } = useLocation();
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

  const lightAtTop = pathname === "/materials" || pathname === "/about";

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${lightAtTop ? " light-top" : ""}`}>
      <Link className="site-logo" to="/"><img className="logo-image" src="/images/logo-header.webp" alt="YOUNGSUN PAPER" width="121" height="40" decoding="async" /></Link>
      <nav className="desktop-nav">
        {links.map((item) => (
          lang === "es" && item.label === "Blog"
            ? <a key={item.label} href="/blog/">Blog (EN)</a>
            : <NavLink key={item.label} to={item.href} end={item.href === "/"}>{t(item.label)}</NavLink>
        ))}
      </nav>
      <SearchBar />
      <div className="header-actions">
        <button className="lang-switch" onClick={toggleLang}>{langLabel[lang]}</button>
        <button className={`menu-trigger${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen((v) => !v)} aria-label="Menu"><span /><span /><span /></button>
      </div>
      <nav className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {links.map((item) => (
          lang === "es" && item.label === "Blog"
            ? <a key={item.label} href="/blog/" onClick={() => setMobileOpen(false)}>Blog (EN)</a>
            : <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)}>{t(item.label)}</Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">YOUNGSUN<span>PAPER</span></div>
          <p>{t("footer_intro")}</p>
          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 12, marginTop: 14, lineHeight: 1.65 }}>
            {t("footer_support")}
          </p>
        </div>
        <div className="footer-column"><h4>{t("Product Categories")}</h4><Link to="/products/package-board">{t("Package Board")}</Link><Link to="/products/culture-paper">{t("Culture Paper")}</Link><Link to="/products/fancy-paper">{t("Fancy Paper")}</Link><Link to="/products/food-packaging">{t("Food Packaging Paper")}</Link><Link to="/materials">{t("Materials Library")}</Link></div>
        <div className="footer-column"><h4>{t("Company")}</h4><Link to="/about">{t("About Us")}</Link><Link to="/industries">{t("Industries") || "Industries"}</Link>{lang === "es" ? <a href="/es/quality/">{t("Quality Assurance") || "Quality Assurance"}</a> : <Link to="/quality">{t("Quality Assurance") || "Quality Assurance"}</Link>}<Link to="/contact">{t("Contact")}</Link></div>
        <div className="footer-column"><h4>{t("Resources")}</h4><Link to="/products">{t("Product Catalog")}</Link><Link to="/materials">{t("Paper Grade Guide")}</Link>{lang === "es" ? <a href="/materials/pulp/">Guía de Fibras (EN)</a> : <Link to="/materials/pulp">Fiber &amp; Pulp Guide</Link>}<Link to="/resources">{t("Buyer Guides")}</Link><Link to="/processing">{t("Processing Services")}</Link><Link to="/how-to-order">{t("How to Order")}</Link><Link to="/faq">FAQ</Link>{lang === "es" ? <a href="/blog/">Blog (EN)</a> : <Link to="/blog">Blog</Link>}<Link to="/contact">{t("Request a Quote")}</Link></div>
      </div>
      <div className="footer-bottom" style={{ flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <p>© {new Date().getFullYear()} YOUNGSUN PAPER.</p>
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
  const { lang, t } = useLang();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const productSlug = location.pathname.match(/^\/products\/([^/]+)/)?.[1];
  const productName = productSlug ? subProducts[productSlug]?.name : "";
  const isSampleRequest = new URLSearchParams(location.search).get("intent") === "samples";
  const whatsappMessage = lang === "es"
    ? isSampleRequest
      ? `Hola, deseo solicitar muestras${productName ? ` de ${productName}` : ""}. Entiendo que YOUNGSUN cubre el material de la muestra y yo pagaré el transporte internacional.`
      : productName
        ? `Hola, me interesa ${productName}. Envíenme las especificaciones, MOQ, plazo de entrega y cotización.`
        : "Hola, deseo conversar sobre mis necesidades de papel y solicitar una cotización."
    : isSampleRequest
      ? `Hello, I would like to request samples${productName ? ` of ${productName}` : ""}. I understand that YOUNGSUN covers the sample material cost and I will pay the international courier charges.`
      : productName
        ? `Hello, I am interested in ${productName}. Please send the specifications, MOQ, lead time and quotation.`
        : "Hello, I would like to discuss my paper sourcing requirements and request a quotation.";
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <div className="floating-actions">
      {show && (
        <button
          type="button"
          className="floating-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("Back to top")}
          title={t("Back to top")}
        >
          <ArrowUp aria-hidden="true" size={19} strokeWidth={2} />
        </button>
      )}
      <a
        href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label={t("Chat on WhatsApp")}
        data-label={t("Chat on WhatsApp")}
      >
        <MessageCircle aria-hidden="true" size={27} strokeWidth={2.1} />
      </a>
    </div>
  );
}

const breadcrumbLabels = {
  about: "About YOUNGSUN",
  contact: "Contact",
  industries: "Industries",
  "packaging-printing": "Packaging & Printing",
  "food-beverage": "Food & Beverage",
  "luxury-cosmetics": "Luxury & Cosmetics",
  "publishing-stationery": "Publishing & Stationery",
  "hang-tags-labels": "Hang Tags & Labels",
  "gift-wrapping-decoration": "Gift Wrapping & Decoration",
  materials: "Materials",
  pulp: "Paper Pulp Materials",
  "softwood-pulp": "Softwood Pulp",
  "hardwood-pulp": "Hardwood Pulp",
  "bamboo-pulp": "Bamboo Pulp",
  "cotton-pulp": "Cotton Pulp",
  "mechanical-vs-chemical-pulp": "Mechanical vs. Chemical Pulp",
  "virgin-vs-recycled-fiber": "Virgin vs. Recycled Fiber",
  processing: "Processing",
  quality: "Quality Assurance",
  faq: "Frequently Asked Questions",
  "how-to-order": "How to Order",
  resources: "Resources",
  "fancy-paper-collection": "Fancy Paper Collection",
};

function breadcrumbLabel(segment) {
  return breadcrumbLabels[segment] || segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function GlobalRouteBreadcrumb() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") document.getElementById("route-breadcrumb-schema")?.remove();
  }, [pathname]);
  if (pathname === "/" || pathname.startsWith("/products") || pathname.startsWith("/blog")) {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ name: "Home", url: "/" }];
  segments.forEach((segment, index) => {
    items.push({
      name: breadcrumbLabel(segment),
      url: `/${segments.slice(0, index + 1).join("/")}`,
    });
  });
  return <BreadcrumbSchema items={items} />;
}

export default function App() {
  const [updateReady, setUpdateReady] = useState(false);
  const routerBase = isSpanishPath(window.location.pathname) ? "/es" : "/";
  const isAdminPath = window.location.pathname.startsWith("/admin");

  // ── PWA: Listen for update available ──────────────────
  useEffect(() => {
    const handler = () => setUpdateReady(true);
    window.addEventListener("pwa-update-available", handler);
    return () => window.removeEventListener("pwa-update-available", handler);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter basename={routerBase}>
      <LangProvider>
        <ScrollToTop />
        {!isAdminPath && <GlobalRouteBreadcrumb />}
        {!isAdminPath && <Header />}
        <main id="main-content">
          <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/package-board" element={<Products initialCategory="package-board" />} />
            <Route path="/products/culture-paper" element={<Products initialCategory="culture-paper" />} />
            <Route path="/products/fancy-paper" element={<Products initialCategory="fancy-paper" />} />
            <Route path="/products/food-packaging" element={<Products initialCategory="food-packaging" />} />
            {/* Compatibility routes for links shared before product URLs were standardized. */}
            <Route path="/products/art-paper" element={<Navigate to="/products/c2s-art-board" replace />} />
            <Route path="/products/ncr-carbonless-paper" element={<Navigate to="/products/ncr-paper" replace />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/how-to-compare-paper-quotes" element={<Navigate to="/blog/how-to-compare-paper-quotes-from-different-suppliers" replace />} />
            <Route path="/blog/paper-gsm-thickness-conversion-chart/how-to-calculate-paper-weight-container-shipping" element={<Navigate to="/blog/how-to-calculate-paper-weight-container-shipping" replace />} />
            <Route path="/blog/how-to-calculate-paper-weight-container-shipping/paper-gsm-thickness-conversion-chart" element={<Navigate to="/blog/paper-gsm-thickness-conversion-chart" replace />} />
            <Route path="/blog/how-to-calculate-paper-weight-container-shipping/how-to-source-paper-from-china" element={<Navigate to="/blog/how-to-source-paper-from-china" replace />} />
            <Route path="/blog/fsc-paper-certification-guide-international-buyers/sustainable-paper-fsc-recycled-compliance-guide" element={<Navigate to="/blog/sustainable-paper-fsc-recycled-compliance-guide" replace />} />
            <Route path="/blog/fsc-paper-certification-guide-international-buyers/how-to-source-paper-from-china" element={<Navigate to="/blog/how-to-source-paper-from-china" replace />} />
            <Route path="/blog/kraft-paper-vs-virgin-pulp-comparison/grey-board-vs-duplex-board-comparison" element={<Navigate to="/blog/grey-board-vs-duplex-board-comparison" replace />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/fancy-paper-collection" element={<FancyPaperGallery />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:id" element={<IndustryDetail />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/materials/pulp" element={<PulpMaterials />} />
            <Route path="/materials/:id" element={<PulpArticle />} />
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
        {!isAdminPath && <Footer />}
        {!isAdminPath && <Floating />}

        {/* PWA: Install banner (Android / Chrome / Edge) */}
        {!isAdminPath && <PwaInstallBanner />}

        {/* PWA: Update available toast */}
        {!isAdminPath && updateReady && (
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
      </LangProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

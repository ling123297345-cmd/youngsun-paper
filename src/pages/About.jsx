import { useRef, useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useLang } from "../i18n.jsx";
import { whyChooseUs, sustainability, globalReach } from "../data.js";
import { PageMeta } from "../SEO.jsx";

export default function About() {
  const { t } = useLang();
  const dk = ["whyus_1_desc","whyus_2_desc","whyus_3_desc","whyus_4_desc","whyus_5_desc","whyus_6_desc"];
  const tk = ["sus_1_title","sus_2_title","sus_3_title","sus_4_title","sus_5_title","sus_6_title"];
  const sdk = ["sus_1_desc","sus_2_desc","sus_3_desc","sus_4_desc","sus_5_desc","sus_6_desc"];
  const nk = ["region_1_name","region_2_name","region_3_name","region_4_name","region_5_name"];
  const rdk = ["region_1_detail","region_2_detail","region_3_detail","region_4_detail","region_5_detail"];

  // Animated counters
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState({ countries: 0, design: 0, stock: 0, years: 0 });
  const targets = { countries: 100, design: 200, stock: 50000, years: 20 };
  const animate = useCallback(() => {
    const duration = 2000;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts({
        countries: Math.round(targets.countries * eased),
        design: Math.round(targets.design * eased),
        stock: Math.round(targets.stock * eased),
        years: Math.round(targets.years * eased),
      });
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, []);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted) { setCounted(true); animate(); }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [counted, animate]);

  return (
    <section>
      <PageMeta title="About YOUNGSUN PAPER" description="YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) — premium paper manufacturer and exporter since 2002. 20,000m² workshop, FSC & SGS certified, 60+ countries." path="/about" />
      <div style={{ background: "url(/images/about-bg.jpg) center/cover no-repeat", height: 260, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,43,26,0.3) 0%, rgba(15,43,26,0.8) 100%)" }} />
      </div>
      <div className="section about-section">
        <div className="about-grid container">
          <div className="about-text">
            <span className="section-label">{t("About YOUNGSUN")}</span>
            <h2>{t("Your Paper Supply Partner Since 2002")}</h2>
            <p>{t("about_desc")}</p>
            <p>{t("about_desc2")}</p>
            <blockquote className="about-vision">{t("vision")}</blockquote>
          </div>
          <div className="about-stats" ref={statsRef}>
            <div className="stat-card"><span className="stat-icon">🌍</span><span className="stat-number">{counts.countries}<span className="plus">+</span></span><span className="stat-label">Countries Served</span></div>
            <div className="stat-card"><span className="stat-icon">📄</span><span className="stat-number">{counts.design}<span className="plus">+</span></span><span className="stat-label">Paper Design</span></div>
            <div className="stat-card"><span className="stat-icon">📦</span><span className="stat-number">{counts.stock.toLocaleString()}<span className="plus">T</span></span><span className="stat-label">Warehouse Stock</span></div>
            <div className="stat-card"><span className="stat-icon">🏭</span><span className="stat-number">{counts.years}<span className="plus">+</span></span><span className="stat-label">Years Experience</span></div>
          </div>
        </div>
      </div>

      <div className="section why-us-section">
        <div className="section-header"><span className="section-label">{t("The YOUNGSUN Difference")}</span><h2>{t("Why Global Partners Choose Us")}</h2><p>{t("whyus_desc")}</p></div>
        <div className="features-grid container">{whyChooseUs.map((item, i) => (<div className="feature-card" key={item.title}><span className="feature-icon">{item.icon}</span><h3>{t(item.title)}</h3><p>{t(dk[i])}</p></div>))}</div>
      </div>

      <div className="section sustainability-section">
        <div className="section-header"><span className="section-label">{t("Our Commitment")}</span><h2>{t("Sustainability Is Not Optional")}</h2><p>{t("sustainability_subtitle")}</p></div>
        <div className="sustainability-grid container">{sustainability.commitments.map((item, i) => (<div className="sustainability-card" key={item.title}><span className="sus-icon">{item.icon}</span><h3>{t(tk[i])}</h3><p>{t(sdk[i])}</p></div>))}</div>
      </div>

      {/* Exhibition Gallery */}
      <ExhibitionGallery />

      <div className="section global-section">
        <div className="section-header"><span className="section-label">{t("Worldwide Presence")}</span><h2>{t("Global Reach, Personal Service")}</h2><p>{t("global_subtitle")}</p></div>
        <div className="global-map container">{globalReach.regions.map((r, i) => (<div className="region-card" key={r.name}><span className="region-name">{t(nk[i])}</span><span className="region-count">{r.countries}</span><span className="region-detail">{t(rdk[i])}</span></div>))}</div>
      </div>
    </section>
  );
}

// ── Exhibition Gallery ──────────────────────────────────────
function ExhibitionGallery() {
  const { t, lang } = useLang();
  const isEs = lang === "es";
  const [lightbox, setLightbox] = useState(null);

  // Load all exhibition photos
  const photos = [];
  for (let i = 1; i <= 47; i++) {
    photos.push({
      src: `/images/exhibitions/expo-20260729203217_10894_7.jpg`,
      thumb: `/images/exhibitions/expo-20260729203217_10894_7.jpg`,
    });
  }
  // Use a static list (all photos are in the directory)
  const exhibPhotos = Array.from({ length: 47 }, (_, i) => {
    const files = [
      "expo-20260729203217_10894_7.jpg","expo-20260729203217_10895_7.jpg","expo-20260729203218_10896_7.jpg",
      "expo-20260729203219_10897_7.jpg","expo-20260729203219_10898_7.jpg","expo-20260729203220_10899_7.jpg",
      "expo-20260729203220_10900_7.jpg","expo-20260729203248_10901_7.jpg","expo-20260729203329_10902_7.jpg",
      "expo-20260729203651_10903_7.jpg","expo-20260729203914_10907_7.jpg","expo-20260729203920_10908_7.jpg",
      "expo-20260730000404.jpg","expo-20260730000408.jpg","expo-20260730000412.jpg","expo-20260730000425.jpg",
      "expo-20260730000428.jpg","expo-20260730000429.jpg","expo-20260730000431.jpg","expo-20260730000434.jpg",
      "expo-20260730000437.jpg","expo-20260730000439.jpg","expo-20260730000442.jpg","expo-20260730000444.jpg",
      "expo-20260730000447.jpg","expo-20260730000449.jpg","expo-20260730000451.jpg","expo-20260730000453.jpg",
      "expo-20260730000456.jpg","expo-20260730000458.jpg","expo-20260730000502.jpg","expo-20260730000506.jpg",
      "expo-20260730000508.jpg","expo-20260730000511.jpg","expo-20260730000513.jpg","expo-20260730000515.jpg",
      "expo-20260730000517.jpg","expo-20260730000520.jpg","expo-20260730000523.jpg","expo-20260730000525.jpg",
      "expo-20260730000528.jpg","expo-20260730000531.jpg","expo-20260730000532.jpg","expo-20260730000534.jpg",
      "expo-20260730000538.jpg","expo-20260730000542.jpg","expo-20260730000545.jpg",
    ];
    return { src: `/images/exhibitions/${files[i]}`, thumb: `/images/exhibitions/${files[i]}` };
  });

  return (
    <div className="section" style={{ background: "#fff" }}>
      <div className="section-header">
        <span className="section-label">{isEs ? "Ferias y Exposiciones" : "Exhibitions & Trade Shows"}</span>
        <h2>{isEs ? "Conózcanos en Persona" : "Meet Us in Person"}</h2>
        <p>{isEs ? "Nos enorgullece conectar con clientes y socios en ferias comerciales de todo el mundo." : "We take pride in connecting with clients and partners at trade shows around the world."}</p>
      </div>
      <div className="container" style={{ maxWidth: 1200 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
          {exhibPhotos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              style={{ aspectRatio: "4/3", overflow: "hidden", borderRadius: 10, cursor: "pointer", background: "var(--paper)" }}
            >
              <img
                src={photo.thumb}
                alt={`Exhibition ${i + 1}`}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s var(--ease-out)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 10000, background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 44, height: 44, borderRadius: "50%", fontSize: 22, cursor: "pointer", zIndex: 1 }}
          >✕</button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p > 0 ? p - 1 : exhibPhotos.length - 1)); }}
            style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 48, height: 48, borderRadius: "50%", fontSize: 24, cursor: "pointer" }}
          >←</button>
          <img
            src={exhibPhotos[lightbox].src}
            alt={`Exhibition ${lightbox + 1}`}
            style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: 8 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p < exhibPhotos.length - 1 ? p + 1 : 0)); }}
            style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", width: 48, height: 48, borderRadius: "50%", fontSize: 24, cursor: "pointer" }}
          >→</button>
          <span style={{ position: "absolute", bottom: 24, color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
            {lightbox + 1} / {exhibPhotos.length}
          </span>
        </div>
      )}
    </div>
  );
}

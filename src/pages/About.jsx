import { useRef, useState, useEffect, useCallback } from "react";
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

      <div className="section global-section">
        <div className="section-header"><span className="section-label">{t("Worldwide Presence")}</span><h2>{t("Global Reach, Personal Service")}</h2><p>{t("global_subtitle")}</p></div>
        <div className="global-map container">{globalReach.regions.map((r, i) => (<div className="region-card" key={r.name}><span className="region-name">{t(nk[i])}</span><span className="region-count">{r.countries}</span><span className="region-detail">{t(rdk[i])}</span></div>))}</div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../blogData.js";
import { hasSpanishBlogPost, localizeBlogPost } from "../blogLocale.js";
import { PageMeta, BreadcrumbSchema } from "../SEO.jsx";
import { useLang } from "../i18n.jsx";

export default function Blog() {
  const { lang } = useLang();
  const allLabel = lang === "es" ? "Todos" : "All";
  const [filter, setFilter] = useState(allLabel);
  const visiblePosts = (lang === "es" ? blogPosts.filter(hasSpanishBlogPost) : blogPosts)
    .map((post) => localizeBlogPost(post, lang));
  const categories = [allLabel, ...new Set(visiblePosts.map((post) => post.category))];
  const posts = filter === allLabel ? visiblePosts : visiblePosts.filter((post) => post.category === filter);
  const pageTitle = lang === "es" ? "Blog de la Industria del Papel" : "Paper Industry Blog";
  const pageDescription = lang === "es"
    ? "Análisis prácticos para compradores de papel sobre selección de materiales, sostenibilidad, envases, importación y conversión."
    : "Expert guides on paper selection, sustainability, importing from China, and packaging design for buyers and procurement professionals.";

  return (
    <section className="section products-section" style={{ paddingTop: 0 }}>
      <PageMeta title={pageTitle} description={pageDescription} path="/blog" />
      <BreadcrumbSchema items={[{ name: lang === "es" ? "Inicio" : "Home", url: lang === "es" ? "/es/" : "/" }, { name: "Blog", url: lang === "es" ? "/es/blog" : "/blog" }]} />
      <div style={{ background: "url(/images/blog-bg.jpg) center/cover no-repeat", height: 260, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,31,19,0.3) 0%, rgba(20,54,34,0.8) 100%)" }} />
      </div>
      <div className="section-header">
        <span className="section-label">{lang === "es" ? "Análisis y guías" : "Insights & Guides"}</span>
        <h1>{pageTitle}</h1>
        <p>{lang === "es" ? "Artículos para seleccionar papel, evaluar sostenibilidad y tomar mejores decisiones de compra." : "Expert articles on paper selection, sustainability, importing, and packaging design."}</p>
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button key={cat} className={`filter-btn${filter === cat ? " active" : ""}`} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>
      <div className="container blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {posts.map((post, index) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="subproduct-card" style={{ display: "block", color: "inherit", gridTemplateColumns: "unset" }}>
            <div className="subproduct-image-wrap" style={{ aspectRatio: "16/10", background: "#e8ece6" }}>
              <img
                src={post.image.startsWith('/') ? post.image : '/' + post.image}
                alt={post.imageAlt || post.title}
                className="subproduct-image"
                width="1280"
                height="800"
                loading={index < 6 ? "eager" : "lazy"}
                fetchPriority={index < 3 ? "high" : "auto"}
                decoding="async"
              />
            </div>
            <div className="subproduct-info">
              <span style={{ color: "var(--gold)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{post.category}</span>
              <h3 style={{ fontSize: 17, marginTop: 6, marginBottom: 6 }}>{post.title}</h3>
              <p className="subproduct-tagline">{post.excerpt ? post.excerpt.slice(0, 100) + "..." : ""}</p>
              <span style={{ color: "var(--muted)", fontSize: 11, marginTop: 8 }}>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

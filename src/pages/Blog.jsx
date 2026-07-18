import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts, blogCategories } from "../blogData.js";
import { PageMeta } from "../SEO.jsx";

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const posts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);

  return (
    <section className="section products-section" style={{ paddingTop: 0 }}>
      <PageMeta title="Blog — Paper Industry Insights" description="Expert guides on paper selection, sustainability, importing from China, and packaging design for buyers and procurement professionals." path="/blog" />
      <div style={{ background: "url(/images/blog-bg.jpg) center/cover no-repeat", height: 260, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,31,19,0.3) 0%, rgba(20,54,34,0.8) 100%)" }} />
      </div>
      <div className="section-header">
        <span className="section-label">Insights & Guides</span>
        <h2>Paper Industry Blog</h2>
        <p>Expert articles on paper selection, sustainability, importing, and packaging design.</p>
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
        {blogCategories.map((cat) => (
          <button key={cat} className={`filter-btn${filter === cat ? " active" : ""}`} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="subproduct-card" style={{ display: "block", color: "inherit", gridTemplateColumns: "unset" }}>
            <div className="subproduct-image-wrap" style={{ aspectRatio: "16/10" }}><img src={post.image.startsWith('/') ? post.image : '/' + post.image} alt={post.title} className="subproduct-image" loading="lazy" /></div>
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

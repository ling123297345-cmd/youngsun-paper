import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../blogData.js";
import { PageMeta } from "../SEO.jsx";

// Parse [text](url) into clickable links, mixed with plain text
function renderText(text) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map(function(part, i) {
    var m = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (m) return <Link key={i} to={m[2]} style={{ color:"var(--lime)", fontWeight:600, textDecoration:"underline" }}>{m[1]}</Link>;
    return part;
  });
}

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return <section className="section" style={{ paddingTop: 120 }}><div className="container" style={{ textAlign: "center" }}><h1>Article Not Found</h1><Link to="/blog" className="btn btn-primary" style={{ marginTop: 24 }}>← Back to Blog</Link></div></section>;

  return (
    <section className="section" style={{ paddingTop: 120, background: "linear-gradient(180deg, #0a1f13 0%, #143622 100%)" }}>
      <PageMeta title={post.seoTitle || post.title} description={post.metaDescription || post.excerpt.slice(0, 155)} path={`/blog/${id}`} />
      <div className="container" style={{ maxWidth: 780 }}>
        <Link to="/blog" style={{ color: "var(--lime)", fontSize: 13, fontWeight: 700 }}>← Back to Blog</Link>
        <div style={{ marginTop: 24 }}>
          <span style={{ color: "var(--lime)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{post.category}</span>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(32px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>{post.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>{post.date} · {post.author}</p>
        </div>
        <div style={{ marginTop: 28, marginBottom: 28 }}><img src={post.image} alt={post.title} style={{ width: "100%", maxHeight: 400, objectFit: "cover" }} /></div>
        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 17, lineHeight: 1.9 }} className="blog-content">
          {post.content.split("\n").map(function(line, i) {
            if (line.startsWith("# ")) return <h2 key={i} style={{ color:"var(--lime)", fontSize:24, marginTop:32, marginBottom:12, fontWeight:800 }}>{renderText(line.replace("# ",""))}</h2>;
            if (line.startsWith("## ")) return <h2 key={i} style={{ color:"var(--lime)", fontSize:24, marginTop:32, marginBottom:12, fontWeight:800 }}>{renderText(line.replace("## ",""))}</h2>;
            if (line.startsWith("### ")) return <h3 key={i} style={{ color:"var(--white)", fontSize:19, marginTop:24, marginBottom:8, fontWeight:700 }}>{renderText(line.replace("### ",""))}</h3>;
            if (line.startsWith("- ")) return <li key={i} style={{ color:"rgba(255,255,255,0.5)", marginLeft:20, marginBottom:4, fontSize:16 }}>{renderText(line.replace("- ",""))}</li>;
            if (line.trim() === "") return <br key={i} />;
            return <p key={i} style={{ marginBottom:14 }}>{renderText(line)}</p>;
          })}
        </div>
        <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 6 }}>{post.tags.map((tag) => <span key={tag} style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", padding: "4px 10px", fontSize: 11 }}>{tag}</span>)}</div>
        <div style={{ marginTop: 56, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32 }}>
          <h3 style={{ color: "var(--white)", marginBottom: 16 }}>Related Articles</h3>
          <div style={{ display: "grid", gap: 16 }}>{blogPosts.filter((p) => p.id !== id).slice(0, 3).map((p) => (<Link key={p.id} to={`/blog/${p.id}`} style={{ display: "flex", gap: 16, color: "inherit", alignItems: "center" }}><img src={p.image} alt={p.title} style={{ width: 80, height: 56, objectFit: "cover" }} /><div><span style={{ color: "var(--white)", fontWeight: 700, fontSize: 14 }}>{p.title}</span><br /><span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{p.date}</span></div></Link>))}</div>
        </div>
      </div>
    </section>
  );
}

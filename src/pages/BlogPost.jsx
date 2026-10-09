import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../blogData.js";
import { hasSpanishBlogPost, localizeBlogPost } from "../blogLocale.js";
import {
  extractBlogFaqs,
  getBlogToc,
  getRelatedBlogPosts,
  parseBlogContent,
} from "../blogContent.js";
import { PageMeta, ArticleSchema, BreadcrumbSchema, FAQSchema } from "../SEO.jsx";
import { useLang } from "../i18n.jsx";

function renderText(text) {
  const parts = String(text || "").split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g);
  return parts.map(function(part, index) {
    if (/^\*\*.*\*\*$/.test(part)) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (/^`.*`$/.test(part)) return <code key={index}>{part.slice(1, -1)}</code>;
    const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (!match) return part;
    const linkStyle = { color: "var(--lime)", fontWeight: 600, textDecoration: "underline" };
    if (/^https?:\/\//i.test(match[2])) {
      return <a key={index} href={match[2]} target="_blank" rel="noopener noreferrer" style={linkStyle}>{match[1]}</a>;
    }
    return <Link key={index} to={match[2]} style={linkStyle}>{match[1]}</Link>;
  });
}

function BlogBody({ blocks }) {
  return blocks.map(function(block, index) {
    if (block.type === "heading" && block.level === 2) {
      return <h2 key={block.id} id={block.id}>{renderText(block.text)}</h2>;
    }
    if (block.type === "heading") {
      return <h3 key={block.id} id={block.id}>{renderText(block.text)}</h3>;
    }
    if (block.type === "list") {
      const List = block.ordered ? "ol" : "ul";
      return <List key={`list-${index}`}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{renderText(item)}</li>)}</List>;
    }
    if (block.type === "table") {
      return (
        <div className="blog-table-scroll" key={`table-${index}`} tabIndex="0" role="region" aria-label="Paper specification comparison table">
          <table>
            <thead><tr>{block.headers.map((cell, cellIndex) => <th key={cellIndex} scope="col">{renderText(cell)}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{renderText(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    }
    return <p key={`paragraph-${index}`}>{renderText(block.text)}</p>;
  });
}

export default function BlogPost() {
  const { id } = useParams();
  const { lang } = useLang();
  const sourcePost = blogPosts.find((item) => item.id === id);
  const post = localizeBlogPost(sourcePost, lang);
  if (!post || (lang === "es" && !hasSpanishBlogPost(sourcePost))) {
    return <section className="section" style={{ paddingTop: 120 }}><div className="container" style={{ textAlign: "center" }}><h1>{lang === "es" ? "Artículo no encontrado" : "Article Not Found"}</h1><Link to="/blog" className="btn btn-primary" style={{ marginTop: 24 }}>{lang === "es" ? "Volver al blog" : "Back to Blog"}</Link></div></section>;
  }

  const blocks = parseBlogContent(post.content);
  const toc = getBlogToc(blocks);
  const faqItems = extractBlogFaqs(blocks);
  const relatedSourcePosts = lang === "es" ? blogPosts.filter(hasSpanishBlogPost) : blogPosts;
  const relatedPosts = getRelatedBlogPosts(sourcePost, relatedSourcePosts).map((item) => localizeBlogPost(item, lang));

  return (
    <section className="section blog-post-page">
      <PageMeta title={post.seoTitle || post.title} description={post.metaDescription || post.excerpt.slice(0, 155)} path={`/blog/${id}`} />
      <ArticleSchema post={post} />
      {faqItems.length > 0 ? <FAQSchema items={faqItems} /> : null}
      <BreadcrumbSchema items={[{ name: lang === "es" ? "Inicio" : "Home", url: lang === "es" ? "/es/" : "/" }, { name: "Blog", url: lang === "es" ? "/es/blog" : "/blog" }, { name: post.title, url: lang === "es" ? `/es/blog/${id}` : `/blog/${id}` }]} />
      <div className="container blog-post-shell">
        <Link to="/blog" className="blog-back-link">{lang === "es" ? "Volver al blog" : "Back to Blog"}</Link>
        <header className="blog-post-header">
          <span>{post.category}</span>
          <h1>{post.title}</h1>
          <p className="blog-post-deck">{post.excerpt}</p>
          <p>{post.date} · {post.author}</p>
        </header>
        {post.image ? (
          <figure className="blog-post-figure">
            <div className="blog-post-hero">
              <img src={post.image} alt={post.imageAlt || post.title} />
            </div>
            {post.imageCaption ? <figcaption>{post.imageCaption}</figcaption> : null}
          </figure>
        ) : null}
        {toc.length > 2 ? (
          <nav className="blog-toc" aria-label={lang === "es" ? "Contenido" : "Table of contents"}>
            <span>{lang === "es" ? "En esta guía" : "In this guide"}</span>
            <ol>{toc.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>)}</ol>
          </nav>
        ) : null}
        <article className="blog-content">
          <BlogBody blocks={blocks} />
        </article>
        <div className="blog-tags">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <section className="blog-inline-cta" aria-labelledby="blog-help-heading">
          <div>
            <span>{lang === "es" ? "Apoyo técnico para compras" : "Technical sourcing support"}</span>
            <h2 id="blog-help-heading">{lang === "es" ? "¿Necesita aplicar esta guía a su pedido de papel?" : "Need help applying this guide to your paper order?"}</h2>
            <p>{lang === "es" ? "Indique la aplicación, GSM o espesor, medida, cantidad y destino. Nuestro equipo le ayudará a comparar grados adecuados y la documentación disponible." : "Share your application, GSM or thickness, size, quantity, and destination. Our team will help narrow down suitable grades and available documents."}</p>
          </div>
          <div className="blog-inline-cta-actions">
            <Link to="/contact?intent=quote">{lang === "es" ? "Consultar al equipo" : "Ask Our Paper Team"}</Link>
            <Link to="/products">{lang === "es" ? "Ver grados de papel" : "Browse Paper Grades"}</Link>
          </div>
        </section>
        {relatedPosts.length > 0 ? <aside className="blog-related" aria-labelledby="related-articles-heading">
          <div className="blog-related-heading">
            <span>{lang === "es" ? "Siga investigando" : "Continue researching"}</span>
            <h2 id="related-articles-heading">{lang === "es" ? "Artículos relacionados" : "Related Articles"}</h2>
          </div>
          <div className="blog-related-grid">
            {relatedPosts.map((item) => (
              <Link key={item.id} to={`/blog/${item.id}`}>
                <img src={item.image} alt="" loading="lazy" />
                <div><span>{item.category}</span><strong>{item.title}</strong><small>{item.date}</small></div>
              </Link>
            ))}
          </div>
        </aside> : null}
      </div>
    </section>
  );
}

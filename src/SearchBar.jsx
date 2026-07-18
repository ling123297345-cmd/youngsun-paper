import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { subProducts } from "./data.js";
import { blogPosts } from "./blogData.js";
import { useLang } from "./i18n.jsx";

export default function SearchBar() {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Build search index from products + blogs
  const searchIndex = useMemo(() => {
    const items = [];
    Object.values(subProducts).forEach((p) => {
      if (p.id && p.name && p.category) {
        items.push({
          type: "product",
          id: p.id,
          name: p.name,
          text: [p.name, p.tagline || "", ...(p.keywords || [])].join(" ").toLowerCase(),
          href: `/products/${p.id}`,
        });
      }
    });
    blogPosts.forEach((b) => {
      if (b.id && b.title) {
        items.push({
          type: "blog",
          id: b.id,
          name: b.title,
          text: [b.title, b.summary || "", b.category || ""].join(" ").toLowerCase(),
          href: `/blog/${b.id}`,
        });
      }
    });
    return items;
  }, []);

  const results = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return searchIndex
      .filter((item) => item.text.includes(q))
      .slice(0, 8);
  }, [query, searchIndex]);

  // Keyboard nav
  useEffect(() => {
    setIndex(0);
  }, [results.length]);

  const navigateTo = (href) => {
    navigate(href);
    setQuery("");
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setIndex((i) => Math.min(i + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && results[index]) { navigateTo(results[index].href); }
    else if (e.key === "Escape") { setOpen(false); inputRef.current?.blur(); }
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const typeLabel = (t) => (lang === "es" ? (t === "product" ? "Producto" : "Blog") : (t === "product" ? "Product" : "Blog"));

  return (
    <div className="search-bar" ref={containerRef}>
      <div className="search-input-wrap">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder={lang === "es" ? "Buscar productos..." : "Search products..."}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { if (results.length > 0) setOpen(true); }}
          onKeyDown={onKeyDown}
        />
        {query && (
          <button className="search-clear" onClick={() => { setQuery(""); inputRef.current?.focus(); }}>✕</button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((item, i) => (
            <button
              key={item.type + "-" + item.id}
              className={`search-result${i === index ? " active" : ""}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => navigateTo(item.href)}
            >
              <span className="search-result-type">{typeLabel(item.type)}</span>
              <span className="search-result-name">{item.name}</span>
            </button>
          ))}
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && (
        <div className="search-dropdown">
          <div className="search-empty">{lang === "es" ? "Sin resultados" : "No results found"}</div>
        </div>
      )}
    </div>
  );
}

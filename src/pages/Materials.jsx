// ============================================================
// YOUNGSUN PAPER — Materials Library / Paper Grade Guide
// Searchable, filterable catalog of all paper & board grades
// ============================================================
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { materials, materialCategories, searchMaterials } from "../materialsData.js";
import { PageMeta } from "../SEO.jsx";

export default function Materials() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const [activeCat, setActiveCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = searchQuery ? searchMaterials(searchQuery) : materials;
    if (activeCat !== "all") {
      result = result.filter((m) => m.category === activeCat);
    }
    return result;
  }, [activeCat, searchQuery]);

  return (
    <>
      <PageMeta
        title="Paper & Board Materials Library — Complete Grade Guide"
        description="Browse our complete paper and board materials library. Compare 25+ grades across 5 categories with specifications, properties, and applications. FSC certified."
        path="/materials"
      />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Biblioteca de Materiales" : "Materials Library"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Guía Completa de Papel y Cartón" : "Complete Paper & Board Guide"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 600, margin: "0 auto 28px" }}>
            {isEs
              ? "Explore más de 25 grados de papel y cartón en 5 categorías. Compare especificaciones, propiedades y aplicaciones."
              : "Explore 25+ paper and board grades across 5 categories. Compare specifications, properties, and applications."}
          </p>
          {/* Search */}
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <input
              type="text"
              placeholder={isEs ? "Buscar por nombre, aplicación…" : "Search by name, application…"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%", padding: "14px 20px", borderRadius: 10, border: "none",
                fontSize: 15, background: "rgba(255,255,255,0.12)", color: "#fff",
                outline: "none", textAlign: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--line)", position: "sticky", top: 60, zIndex: 50 }}>
        <div className="container" style={{ display: "flex", gap: 4, overflow: "auto", padding: "12px 0", maxWidth: 1280 }}>
          <button
            onClick={() => setActiveCat("all")}
            style={{
              padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
              border: "none", cursor: "pointer",
              background: activeCat === "all" ? "var(--forest)" : "transparent",
              color: activeCat === "all" ? "#fff" : "var(--muted)",
            }}
          >
            {isEs ? "Todos" : "All"} ({materials.length})
          </button>
          {materialCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              style={{
                padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
                border: "none", cursor: "pointer",
                background: activeCat === cat.id ? "var(--forest)" : "transparent",
                color: activeCat === cat.id ? "#fff" : "var(--muted)",
              }}
            >
              {cat.icon} {cat.title[lang]}
            </button>
          ))}
        </div>
      </section>

      {/* Materials Grid */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 1280 }}>
          {searchQuery && (
            <p style={{ marginBottom: 24, color: "var(--muted)", fontSize: 14 }}>
              {filtered.length} {isEs ? "resultados para" : "results for"} "{searchQuery}"
            </p>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {filtered.map((mat) => (
              <div
                key={mat.id}
                style={{
                  background: "#fff", borderRadius: 14, overflow: "hidden",
                  boxShadow: "var(--shadow-sm)", transition: "box-shadow 0.2s var(--ease-out)",
                  display: "flex", flexDirection: "column",
                }}
              >
                {/* Image */}
                <div style={{ height: 180, overflow: "hidden", background: "var(--forest-light)", position: "relative" }}>
                  <img src={mat.image} alt={mat.name[lang]} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  <span style={{ position: "absolute", top: 12, right: 12, background: "var(--gold)", color: "#fff", padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700 }}>
                    {mat.priceLevel}
                  </span>
                </div>
                {/* Content */}
                <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--forest)", marginBottom: 8 }}>{mat.name[lang]}</h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 14, flex: 1 }}>
                    {mat.description[lang]}
                  </p>
                  {/* Properties */}
                  <div style={{ display: "grid", gap: 6, marginBottom: 14 }}>
                    {mat.properties.map((prop, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
                        <span style={{ color: "var(--muted)" }}>{prop.label[lang]}</span>
                        <span style={{ color: "var(--gold)", fontWeight: 600, letterSpacing: 1 }}>{prop.value}</span>
                      </div>
                    ))}
                  </div>
                  {/* Specs */}
                  <div style={{ borderTop: "1px solid var(--line)", paddingTop: 12, marginBottom: 14 }}>
                    <div style={{ display: "grid", gap: 4, fontSize: 12 }}>
                      {Object.entries(mat.specs).slice(0, 4).map(([key, val]) => (
                        <div key={key} style={{ display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "var(--muted-light)", textTransform: "capitalize" }}>{key.replace(/([A-Z])/g, " $1")}</span>
                          <span style={{ color: "var(--ink)", fontWeight: 500, textAlign: "right", maxWidth: "60%" }}>
                            {Array.isArray(val) ? val.join(", ") : val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Applications */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {mat.applications.slice(0, 3).map((app, i) => (
                      <span key={i} style={{ background: "var(--paper-green)", padding: "3px 10px", borderRadius: 20, fontSize: 11, color: "var(--forest)" }}>
                        {app[lang]}
                      </span>
                    ))}
                  </div>
                  {/* Link */}
                  {mat.productPage && (
                    <Link
                      to={mat.productPage}
                      style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textDecoration: "none" }}
                    >
                      {isEs ? "Ver detalle del producto" : "View product details"} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: 60 }}>
              <p style={{ fontSize: 18, color: "var(--muted)" }}>
                {isEs ? "No se encontraron materiales." : "No materials found."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 12 }}>
          {isEs ? "¿Necesita ayuda para elegir?" : "Need Help Choosing?"}
        </h2>
        <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 28 }}>
          {isEs ? "Nuestro equipo técnico puede recomendarle el mejor grado para su aplicación." : "Our technical team can recommend the best grade for your application."}
        </p>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Solicitar Recomendación" : "Get a Recommendation"} →
        </Link>
      </section>
    </>
  );
}

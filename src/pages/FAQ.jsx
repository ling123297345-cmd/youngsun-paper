// ============================================================
// YOUNGSUN PAPER — FAQ Page
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { localizeFaqItems } from "../data.js";
import { PageMeta, FAQSchema } from "../SEO.jsx";

export default function FAQ() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const normalizedFaqs = localizeFaqItems(lang);

  return (
    <>
      <PageMeta
        title={isEs ? "Preguntas frecuentes sobre compra de papel" : "Frequently Asked Questions"}
        description={isEs
          ? "Respuestas sobre productos de papel, MOQ, muestras, documentación, plazos, pagos y exportación de YOUNGSUN PAPER."
          : "Find answers about paper products, MOQ, samples, documentation, lead times, payment and export sourcing from YOUNGSUN PAPER."}
        path="/faq"
      />
      <FAQSchema items={normalizedFaqs} />

      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>FAQ</span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 550, margin: "0 auto" }}>
            {isEs ? "Respuestas rápidas a las preguntas más comunes sobre pedidos, envíos, certificaciones y más." : "Quick answers to common questions about ordering, shipping, certifications, and more."}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 800, display: "grid", gap: 12 }}>
          {normalizedFaqs.map((faq, i) => (
            <details key={i} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
              <summary style={{ padding: "20px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer", color: "var(--forest)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {faq.q}
                <span style={{ color: "var(--gold)", fontSize: 18 }}>+</span>
              </summary>
              <p style={{ padding: "0 28px 22px", fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>
          {isEs ? "¿No encontró su respuesta?" : "Didn't Find Your Answer?"}
        </h2>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Contáctenos" : "Contact Us"} →
        </Link>
      </section>
    </>
  );
}

// ============================================================
// YOUNGSUN PAPER — Testimonials Page
// ============================================================
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { testimonials, siteConfig } from "../data.js";
import { PageMeta } from "../SEO.jsx";

export default function Testimonials() {
  const { t, lang } = useLang();
  const isEs = lang === "es";
  const qk = ["testimonial_1_quote","testimonial_2_quote","testimonial_3_quote"];
  const ak = ["testimonial_1_author","testimonial_2_author","testimonial_3_author"];

  const extendedTestimonials = [
    {
      quote: { en: "We switched our entire rigid box production to YOUNGSUN grey board six months ago. Material cost down 22%, FSC certification in place, and our box quality is indistinguishable from before. The transition was seamless — no machine adjustments needed.", es: "Cambiamos toda nuestra producción de cajas rígidas al cartón gris YOUNGSUN hace seis meses. Costo de material reducido 22%, certificación FSC en vigor, y la calidad de nuestras cajas es indistinguible. La transición fue perfecta — sin ajustes de máquina necesarios." },
      author: { en: "Packaging Director, European Cosmetics Brand", es: "Director de Embalaje, Marca Europea de Cosméticos" },
      region: "France",
      industry: { en: "Luxury & Cosmetics", es: "Lujo y Cosmética" },
    },
    {
      quote: { en: "YOUNGSUN's PFAS-free greaseproof paper matched our previous PFAS-based material perfectly — same machine speeds, same print quality, same KIT 8 grease holdout. The compliance documentation was comprehensive and made our regulatory audit straightforward.", es: "El papel antigrasa libre de PFAS de YOUNGSUN igualó perfectamente nuestro material anterior basado en PFAS — mismas velocidades, misma calidad de impresión, misma retención de grasa KIT 8. La documentación de cumplimiento fue completa y facilitó nuestra auditoría regulatoria." },
      author: { en: "Supply Chain Manager, Middle Eastern QSR Group", es: "Gerente de Cadena de Suministro, Grupo QSR de Medio Oriente" },
      region: "UAE",
      industry: { en: "Food & Beverage", es: "Alimentos y Bebidas" },
    },
    {
      quote: { en: "The consistency is what impressed us most. Every sheet, every pallet, every container — the same quality. Our Bobst die-cutting line went from 92% uptime with our previous supplier to 99.2% with YOUNGSUN. Our operators stopped dreading die-cutting shifts.", es: "La consistencia es lo que más nos impresionó. Cada hoja, cada pallet, cada contenedor — la misma calidad. Nuestra línea de troquelado Bobst pasó del 92% de tiempo activo al 99.2% con YOUNGSUN. Nuestros operadores dejaron de temer los turnos de troquelado." },
      author: { en: "Production Director, Colombian Packaging Converter", es: "Director de Producción, Convertidor Colombiano de Embalaje" },
      region: "Colombia",
      industry: { en: "Packaging & Printing", es: "Embalaje e Impresión" },
    },
    {
      quote: { en: "Going direct to YOUNGSUN instead of through a trading intermediary saved us 18% on cupstock costs. But the real win is the technical support — having a direct line to their paper engineers makes a real difference when we're troubleshooting cup-forming issues on our high-speed lines.", es: "Ir directo a YOUNGSUN en lugar de a través de un intermediario nos ahorró un 18% en costos de cartón para vasos. Pero la verdadera victoria es el soporte técnico — tener línea directa con sus ingenieros papeleros marca una diferencia real al resolver problemas de formado de vasos en nuestras líneas de alta velocidad." },
      author: { en: "CEO, US Paper Cup Manufacturer", es: "CEO, Fabricante Estadounidense de Vasos de Papel" },
      region: "USA",
      industry: { en: "Food & Beverage", es: "Alimentos y Bebidas" },
    },
    {
      quote: { en: "When our European mill supplier quoted a 120-day lead time for 1,200 tons of woodfree paper, we thought the government textbook contract was lost. YOUNGSUN coordinated production across two mills and delivered all 1,200 tons in 75 days — two weeks ahead of deadline. Zero quality issues. The government inspector approved the shipment without a single remark.", es: "Cuando nuestro proveedor europeo cotizó 120 días de plazo para 1,200 toneladas de papel woodfree, pensamos que el contrato gubernamental de libros de texto estaba perdido. YOUNGSUN coordinó la producción en dos molinos y entregó las 1,200 toneladas en 75 días. Cero problemas de calidad. El inspector gubernamental aprobó el envío sin una sola observación." },
      author: { en: "Managing Director, Kenyan Publishing House", es: "Director General, Editorial Keniana" },
      region: "Kenya",
      industry: { en: "Publishing & Stationery", es: "Editorial y Papelería" },
    },
    {
      quote: { en: "The papers arrived looking even better than the samples. Our foil stamper said it was the cleanest black paper they'd ever worked with — zero rejects across the entire production run. The holiday collection sold out in two weeks. We're already planning next season's packaging with YOUNGSUN's design team.", es: "Los papeles llegaron luciendo incluso mejor que las muestras. Nuestro estampador de foil dijo que era el papel negro más limpio con el que habían trabajado — cero rechazos en toda la producción. La colección navideña se agotó en dos semanas. Ya estamos planeando el embalaje de la próxima temporada con el equipo de diseño de YOUNGSUN." },
      author: { en: "Packaging Development Manager, Italian Luxury Fashion House", es: "Gerente de Desarrollo de Embalaje, Casa de Moda de Lujo Italiana" },
      region: "Italy",
      industry: { en: "Luxury & Cosmetics", es: "Lujo y Cosmética" },
    },
  ];

  const stats = [
    { num: "60+", label: isEs ? "Países de Exportación" : "Export Countries" },
    { num: (siteConfig.stats.annualExport / 1000).toFixed(0) + "K", label: isEs ? "Toneladas Anuales" : "Annual Tons" },
    { num: "99%+", label: isEs ? "Tasa de Satisfacción" : "Satisfaction Rate" },
    { num: "85%", label: isEs ? "Clientes Recurrentes" : "Repeat Clients" },
  ];

  return (
    <>
      <PageMeta title="Client Testimonials — Trusted by Paper Buyers Worldwide" description="Read what packaging converters, printers, and brand owners say about working with YOUNGSUN PAPER. Real testimonials from 60+ countries." path="/testimonials" />

      {/* Hero */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", paddingTop: 140, paddingBottom: 80, textAlign: "center" }}>
        <div className="container">
          <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: 2 }}>
            {isEs ? "Testimonios de Clientes" : "Client Testimonials"}
          </span>
          <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", marginTop: 12, marginBottom: 12 }}>
            {isEs ? "Lo Que Dicen Nuestros Clientes" : "What Our Clients Say"}
          </h1>
          <p style={{ fontSize: 17, opacity: 0.8, maxWidth: 600, margin: "0 auto" }}>
            {isEs
              ? "Comentarios reales de convertidores, impresores y dueños de marcas en más de 60 países."
              : "Real feedback from converters, printers, and brand owners across 60+ countries."}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, padding: "36px 0", maxWidth: 800, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}><div style={{ fontSize: 32, fontWeight: 800, color: "var(--gold)" }}>{s.num}</div><div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{s.label}</div></div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ maxWidth: 900, display: "grid", gap: 24 }}>
          {extendedTestimonials.map((tm, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "32px 36px", boxShadow: "var(--shadow-sm)", position: "relative" }}>
              <span style={{ position: "absolute", top: 16, left: 24, fontSize: 60, color: "var(--gold)", opacity: 0.2, fontFamily: "Georgia, serif", lineHeight: 1 }}>&ldquo;</span>
              <blockquote style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)", margin: "12px 0 20px", position: "relative", zIndex: 1 }}>
                {tm.quote[lang]}
              </blockquote>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--forest)" }}>{tm.author[lang]}</div>
                  <div style={{ fontSize: 12, color: "var(--muted-light)", marginTop: 2 }}>{tm.region}</div>
                </div>
                <span style={{ background: "var(--gold-pale)", color: "var(--gold)", padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{tm.industry[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Original testimonials from data.js */}
      {testimonials && testimonials.length > 0 && (
        <section className="section" style={{ background: "#fff" }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <h2 style={{ fontSize: 20, color: "var(--forest)", marginBottom: 24, textAlign: "center" }}>
              {isEs ? "Más Voces de Clientes" : "More Client Voices"}
            </h2>
            <div style={{ display: "grid", gap: 20 }}>
              {testimonials.map((tm, i) => (
                <div key={i} style={{ background: "var(--paper)", borderRadius: 12, padding: "24px 28px", borderLeft: "4px solid var(--gold)" }}>
                  <blockquote style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink)", fontStyle: "italic" }}>
                    &ldquo;{t(qk[i])}&rdquo;
                  </blockquote>
                  <div style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: "var(--forest)" }}>— {t(ak[i])}</div>
                  <div style={{ fontSize: 12, color: "var(--muted-light)" }}>{tm.company}, {tm.region}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section" style={{ background: "var(--forest)", color: "#fff", textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", marginBottom: 16 }}>
          {isEs ? "¿Listo para unirse a nuestros clientes satisfechos?" : "Ready to Join Our Satisfied Clients?"}
        </h2>
        <Link to="/contact" style={{ background: "var(--gold)", color: "#fff", padding: "14px 36px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>
          {isEs ? "Comience Su Proyecto" : "Start Your Project"} →
        </Link>
      </section>
    </>
  );
}

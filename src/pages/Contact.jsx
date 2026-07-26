import { useLang } from "../i18n.jsx";
import { contactInfo, productCategories, faqItems } from "../data.js";
import { useContactForm } from "../useContactForm.js";
import { PageMeta, FAQSchema } from "../SEO.jsx";

const FORM_INITIAL = { name: "", email: "", company: "", phone: "", product: "", gsm: "", size: "", quantity: "", destination: "", message: "" };

export default function Contact() {
  const { t } = useLang();
  const { form, submitted, sending, error, honeypotRef, submitTimeRef, handleChange, handleSubmit } = useContactForm(FORM_INITIAL);
  const qk = ["faq_q1","faq_q2","faq_q3","faq_q4","faq_q5","faq_q6","faq_q7","faq_q8"];
  const ak = ["faq_a1","faq_a2","faq_a3","faq_a4","faq_a5","faq_a6","faq_a7","faq_a8"];
  const faqSchemaItems = faqItems.map((_, i) => ({ q: t(qk[i]), a: t(ak[i]) }));

  return (
    <section>
      <PageMeta title="Contact YOUNGSUN PAPER" description="Request a quote for paper and board products. Email Alice@yspaper.com or WhatsApp +86 13713459656. We respond within 24 hours with competitive pricing and logistics." path="/contact" />
      <FAQSchema items={faqSchemaItems.slice(0, 6)} />
      <div style={{ background: "url(/images/contact-bg.jpg) center/cover no-repeat", height: 260, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(22,56,37,0.3) 0%, rgba(22,56,37,0.8) 100%)" }} />
      </div>
      <div className="section contact-section">
        <div className="section-header"><span className="section-label">{t("Get In Touch")}</span><h2>{t("Let's Talk Paper")}</h2><p>{t("contact_subtitle")}</p></div>
        <div className="contact-grid container">
          <div className="contact-info">
            <div className="contact-methods">
              <a href={`mailto:${contactInfo.email}`} className="contact-method"><span className="method-icon">✉️</span><div><span className="method-label">Email</span><span className="method-value">{contactInfo.email}</span></div></a>
              <a href={`tel:${contactInfo.phone}`} className="contact-method"><span className="method-icon">📞</span><div><span className="method-label">Phone</span><span className="method-value">{contactInfo.phone}</span></div></a>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} className="contact-method" target="_blank" rel="noopener noreferrer"><span className="method-icon">💬</span><div><span className="method-label">WhatsApp</span><span className="method-value">{contactInfo.whatsapp}</span></div></a>
              <div className="contact-method"><span className="method-icon">💬</span><div><span className="method-label">WeChat</span><span className="method-value">{contactInfo.wechat}</span></div></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} onFocus={submitTimeRef}>
            <h3>{t("Send Us a Message")}</h3>

            {/* ── Success ──────────────────────────────────── */}
            {submitted && (
              <div style={{ background: "#F0FDF4", border: "1px solid #86EFAC", color: "#166534", padding: "24px", borderRadius: 12, marginBottom: 20, textAlign: "center", animation: "fadeIn 0.3s ease-out" }}>
                <div style={{ fontSize: 40, marginBottom: 8 }}>✅</div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Message Sent!</div>
                <div style={{ fontSize: 13, marginTop: 4, opacity: 0.8 }}>We'll reply within 24 hours. Check your inbox for a confirmation.</div>
              </div>
            )}

            {/* ── Error ────────────────────────────────────── */}
            {error && (
              <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: "14px 16px", borderRadius: 10, marginBottom: 16, fontSize: 13, lineHeight: 1.6 }}>
                ⚠️ {error}
              </div>
            )}

            {/* ── Honeypot: hidden from humans, visible to bots ── */}
            <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
              <label htmlFor="hp_field">Leave empty</label>
              <input ref={honeypotRef} type="text" id="hp_field" name="hp_field" tabIndex={-1} autoComplete="off" />
            </div>

            {/* ── Form fields ──────────────────────────────── */}
            <div className="form-group"><label htmlFor="name">{t("Your Name *")}</label><input type="text" id="name" name="name" value={form.name} onChange={handleChange} required /></div>
            <div className="form-group"><label htmlFor="email">{t("Email Address *")}</label><input type="email" id="email" name="email" value={form.email} onChange={handleChange} required /></div>
            <div className="form-group"><label>{t("Company")}</label><input type="text" name="company" value={form.company} onChange={handleChange} /></div>
            <div className="form-group"><label>{t("Phone / WhatsApp")}</label><input type="text" name="phone" value={form.phone} onChange={handleChange} /></div>
            <div className="form-group"><label htmlFor="product">{t("Product Interest")}</label><select id="product" name="product" value={form.product} onChange={handleChange}><option value="">{t("Select a product category")}</option>{productCategories.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}<option value="other">{t("Other / Not Sure")}</option></select></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div className="form-group"><label>GSM / {t("Thickness")}</label><input type="text" name="gsm" value={form.gsm} onChange={handleChange} placeholder="e.g. 200-400 gsm" /></div>
              <div className="form-group"><label>{t("Size")}</label><input type="text" name="size" value={form.size} onChange={handleChange} placeholder="e.g. 787×1092mm" /></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div className="form-group"><label>{t("Quantity")}</label><input type="text" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 25 tons" /></div>
              <div className="form-group"><label>{t("Destination")}</label><input type="text" name="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Hamburg, Germany" /></div>
            </div>
            <div className="form-group"><label htmlFor="message">{t("Your Message *")}</label><textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder={t("Tell us about your paper requirements...")} /></div>
            <button type="submit" className="form-submit" disabled={sending}>
              {sending ? (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.6s linear infinite" }} />
                  {t("Sending...")}
                </span>
              ) : (
                t("Send Inquiry")
              )}
            </button>
          </form>
          <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
      </div>
      {/* Book a Meeting */}
      <div className="section" style={{ background: "var(--forest)", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
          <span style={{ fontSize: 40, display: "block", marginBottom: 16 }}>📅</span>
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>{t("Book a Meeting") || "Book a Meeting"}</h2>
          <p style={{ fontSize: 15, opacity: 0.8, marginBottom: 28, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 28px" }}>
            {t("book_meeting_desc") || "Schedule a 15-minute call with our paper specialist. Discuss your requirements, get pricing, and receive samples — all in one conversation."}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {/* Replace YOUR_CALENDLY_URL with your actual Calendly link */}
            <a href="https://calendly.com/YOUR_CALENDLY_URL/15min" target="_blank" rel="noopener noreferrer"
              style={{ background: "var(--gold)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              📅 {t("Schedule a Call") || "Schedule a Call"}
            </a>
            <a href={`mailto:${contactInfo.email}?subject=Meeting%20Request%20-%20Paper%20Inquiry`}
              style={{ background: "rgba(255,255,255,0.12)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              ✉️ {t("Email to Schedule") || "Email to Schedule"}
            </a>
          </div>
          <p style={{ fontSize: 11, opacity: 0.5, marginTop: 20 }}>
            {t("Working hours") || "Working hours"}: 10:00–12:00, 14:00–18:30, 20:00–23:00 (China Time / UTC+8)
          </p>
        </div>
      </div>

      <div className="section faq-section">
        <div className="section-header"><span className="section-label">{t("Frequently Asked Questions")}</span><h2>{t("Questions About Our Paper Products and Services")}</h2></div>
        <div className="faq-grid container">{faqItems.map((_, i) => (<details className="faq-item" key={i}><summary className="faq-question">{t(qk[i])}</summary><div className="faq-answer"><p>{t(ak[i])}</p></div></details>))}</div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useLang } from "../i18n.jsx";
import { contactInfo, productCategories, faqItems } from "../data.js";
import { PageMeta, FAQSchema } from "../SEO.jsx";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const qk = ["faq_q1","faq_q2","faq_q3","faq_q4","faq_q5","faq_q6","faq_q7","faq_q8"];
  const ak = ["faq_a1","faq_a2","faq_a3","faq_a4","faq_a5","faq_a6","faq_a7","faq_a8"];
  const faqSchemaItems = faqItems.map((_, i) => ({ q: t(qk[i]), a: t(ak[i]) }));
  const h = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const s = (e) => { e.preventDefault(); setSubmitted(true); setForm({ name: "", email: "", product: "", message: "" }); setTimeout(() => setSubmitted(false), 4000); };

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
          <form className="contact-form" onSubmit={s}>
            <h3>{t("Send Us a Message")}</h3>
            <div className="form-group"><label htmlFor="name">{t("Your Name *")}</label><input type="text" id="name" name="name" value={form.name} onChange={h} required /></div>
            <div className="form-group"><label htmlFor="email">{t("Email Address *")}</label><input type="email" id="email" name="email" value={form.email} onChange={h} required /></div>
            <div className="form-group"><label htmlFor="product">{t("Product Interest")}</label><select id="product" name="product" value={form.product} onChange={h}><option value="">{t("Select a product category")}</option>{productCategories.map((p) => <option key={p.id} value={p.id}>{p.title}</option>)}<option value="other">{t("Other / Not Sure")}</option></select></div>
            <div className="form-group"><label htmlFor="message">{t("Your Message *")}</label><textarea id="message" name="message" value={form.message} onChange={h} required /></div>
            <button type="submit" className="form-submit">{submitted ? t("✓ Message Sent!") : t("Send Inquiry")}</button>
          </form>
        </div>
      </div>
      <div className="section faq-section">
        <div className="section-header"><span className="section-label">{t("Frequently Asked Questions")}</span><h2>{t("Questions About Our Paper Products and Services")}</h2></div>
        <div className="faq-grid container">{faqItems.map((_, i) => (<details className="faq-item" key={i}><summary className="faq-question">{t(qk[i])}</summary><div className="faq-answer"><p>{t(ak[i])}</p></div></details>))}</div>
      </div>
    </section>
  );
}

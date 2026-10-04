import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, ChevronDown, Mail, MessageCircle, MessageSquareText, Phone, Send } from "lucide-react";
import { useLang } from "../i18n.jsx";
import { contactInfo, productCategories, subProducts, localizeFaqItems } from "../data.js";
import { useContactForm } from "../useContactForm.js";
import { PageMeta, FAQSchema } from "../SEO.jsx";

const FORM_INITIAL = { inquiryType: "quote", name: "", email: "", company: "", phone: "", product: "", gsm: "", size: "", quantity: "", destination: "", message: "" };

const PRODUCT_GROUPS = productCategories.map((category) => ({
  id: category.id,
  title: category.title,
  products: Object.entries(subProducts)
    .filter(([, product]) => product.category === category.id)
    .map(([id, product]) => ({ id, name: product.name })),
}));

export default function Contact() {
  const { t, lang } = useLang();
  const [searchParams] = useSearchParams();
  const requestedIntent = searchParams.get("intent") === "samples" ? "samples" : "quote";
  const requestedProduct = searchParams.get("product") || "";
  const validRequestedProduct = subProducts[requestedProduct] ? requestedProduct : "";
  const initialValues = useMemo(() => ({
    ...FORM_INITIAL,
    inquiryType: requestedIntent,
    product: validRequestedProduct,
  }), [requestedIntent, validRequestedProduct]);
  const { form, submitted, sending, error, honeypotRef, submitTimeRef, handleChange, setField, handleSubmit } = useContactForm(initialValues);
  const isSampleRequest = form.inquiryType === "samples";
  const selectedProduct = subProducts[form.product]?.name || "paper products";
  const whatsappText = isSampleRequest
    ? `Hello, I would like to request samples of ${selectedProduct}. I understand that YOUNGSUN covers the sample cost and I will pay the courier charges.`
    : `Hello, I would like a quotation for ${selectedProduct}. Please send the specifications, MOQ, lead time and pricing.`;
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappText)}`;
  const meetingWhatsappHref = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello, I would like to arrange a short call to discuss my paper sourcing requirements.")}`;
  const faqSchemaItems = localizeFaqItems(lang);

  return (
    <section>
      <PageMeta title="Contact YOUNGSUN PAPER" description="Request paper prices, technical specifications or standard product samples from YOUNGSUN PAPER. Samples are complimentary; customers pay international courier charges." path="/contact" />
      <FAQSchema items={faqSchemaItems.slice(0, 6)} />
      <div style={{ background: "url(/images/contact-bg.jpg) center/cover no-repeat", height: 260, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(22,56,37,0.3) 0%, rgba(22,56,37,0.8) 100%)" }} />
      </div>
      <div className="section contact-section">
        <div className="section-header"><span className="section-label">{t("Get In Touch")}</span><h1>{isSampleRequest ? "Request Paper Samples" : t("Let's Talk Paper")}</h1><p>{isSampleRequest ? "Tell us the paper grade, GSM and application you want to evaluate. We will confirm availability and courier arrangements." : t("contact_subtitle")}</p></div>
        <div className="contact-grid container">
          <div className="contact-info">
            <div className="contact-methods">
              <a href={`mailto:${contactInfo.email}`} className="contact-method"><span className="method-icon"><Mail aria-hidden="true" size={21} /></span><div><span className="method-label">Email</span><span className="method-value">{contactInfo.email}</span></div></a>
              <a href={`tel:${contactInfo.phone}`} className="contact-method"><span className="method-icon"><Phone aria-hidden="true" size={21} /></span><div><span className="method-label">Phone</span><span className="method-value">{contactInfo.phone}</span></div></a>
              <a href={whatsappHref} className="contact-method" target="_blank" rel="noopener noreferrer"><span className="method-icon"><MessageCircle aria-hidden="true" size={22} /></span><div><span className="method-label">WhatsApp</span><span className="method-value">{contactInfo.whatsapp}</span></div></a>
              <div className="contact-method"><span className="method-icon"><MessageSquareText aria-hidden="true" size={21} /></span><div><span className="method-label">WeChat</span><span className="method-value">{contactInfo.wechat}</span></div></div>
            </div>
            <div className="contact-policy-card"><span>Sample policy</span><strong>YOUNGSUN covers standard sample costs.</strong><p>International courier charges are paid by the customer. Alice confirms availability and shipping before dispatch.</p></div>
            <div className="contact-qr-panel">
              <div className="contact-qr-intro">
                <span>Scan to connect</span>
                <strong>Talk directly with Alice</strong>
                <p>Scan on desktop, or tap WhatsApp on mobile for a faster product discussion.</p>
              </div>
              <div className="contact-qr-grid">
                <a className="contact-qr-card whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat with Alice">
                  <span className="contact-qr-code">
                    <img src="/images/contact/alice-whatsapp-qr-20260815.png" alt="Alice at YOUNGSUN PAPER WhatsApp Business QR code" width="1180" height="1300" loading="lazy" decoding="async" />
                  </span>
                  <span className="contact-qr-card-copy"><strong><MessageCircle aria-hidden="true" size={16} /> WhatsApp</strong><small>Alice@Youngsun Paper</small></span>
                </a>
                <figure className="contact-qr-card wechat">
                  <span className="contact-qr-code">
                    <img src="/images/contact/alice-wechat-qr-20260815.png" alt="Alice at YOUNGSUN PAPER WeChat QR code" width="750" height="1030" loading="lazy" decoding="async" />
                  </span>
                  <figcaption className="contact-qr-card-copy"><strong><MessageSquareText aria-hidden="true" size={16} /> WeChat</strong><small>{contactInfo.wechat}</small></figcaption>
                </figure>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} onFocus={submitTimeRef}>
            <div className="inquiry-mode" aria-label="Choose inquiry type">
              <button type="button" className={isSampleRequest ? "" : "active"} aria-pressed={!isSampleRequest} onClick={() => setField("inquiryType", "quote")}><strong>Get a Quote</strong><span>Pricing and lead time</span></button>
              <button type="button" className={isSampleRequest ? "active" : ""} aria-pressed={isSampleRequest} onClick={() => setField("inquiryType", "samples")}><strong>Request Samples</strong><span>Evaluate before ordering</span></button>
            </div>
            <div className="contact-form-heading"><h2>{isSampleRequest ? "Tell us what you want to test" : "Tell us what you need"}</h2><p>Your inquiry will be sent directly to {contactInfo.email}. We normally reply within 24 hours.</p></div>

            {isSampleRequest && <div className="sample-policy-note"><CheckCircle2 aria-hidden="true" size={18} /><span>Complimentary standard samples. Courier charges are paid by the customer.</span></div>}

            {/* ── Success ──────────────────────────────────── */}
            {submitted && (
              <div className="contact-success" role="status" aria-live="polite">
                <CheckCircle2 aria-hidden="true" size={28} />
                <div><strong>{isSampleRequest ? "Sample request sent" : "Quotation request sent"}</strong><p>Alice will reply from {contactInfo.email} within 24 hours.</p><a href={whatsappHref} target="_blank" rel="noopener noreferrer">Continue on WhatsApp</a></div>
              </div>
            )}

            {/* ── Error ────────────────────────────────────── */}
            {error && (
              <div className="contact-error" role="alert">{error}</div>
            )}

            {/* ── Honeypot: hidden from humans, visible to bots ── */}
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="hp_field">Leave empty</label>
              <input ref={honeypotRef} type="text" id="hp_field" name="hp_field" tabIndex={-1} autoComplete="off" />
            </div>

            {/* ── Form fields ──────────────────────────────── */}
            <div className="contact-form-row">
              <div className="form-group"><label htmlFor="name">{t("Your Name *")}</label><input type="text" id="name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" /></div>
              <div className="form-group"><label htmlFor="company">{t("Company")}</label><input type="text" id="company" name="company" value={form.company} onChange={handleChange} autoComplete="organization" /></div>
            </div>
            <div className="contact-form-row">
              <div className="form-group"><label htmlFor="email">{t("Email Address *")}</label><input type="email" id="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" /></div>
              <div className="form-group"><label htmlFor="phone">{t("Phone / WhatsApp")}</label><input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" /></div>
            </div>
            <div className="form-group"><label htmlFor="product">{t("Product Interest")} *</label><select id="product" name="product" value={form.product} onChange={handleChange} required><option value="">Select a paper product</option>{PRODUCT_GROUPS.map((group) => <optgroup key={group.id} label={group.title}>{group.products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}</optgroup>)}<option value="other">Other / Not Sure</option></select></div>
            <div className="form-group"><label htmlFor="quantity">Estimated Quantity</label><input type="text" id="quantity" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 1 metric ton or 1 x 20ft container" /></div>
            <details className="contact-advanced">
              <summary>Additional specifications <span>Optional</span><ChevronDown aria-hidden="true" size={17} /></summary>
              <div className="contact-advanced-fields">
                <div className="form-group"><label htmlFor="gsm">GSM / Thickness</label><input type="text" id="gsm" name="gsm" value={form.gsm} onChange={handleChange} placeholder="e.g. 300 gsm or 1.5 mm" /></div>
                <div className="form-group"><label htmlFor="size">Sheet / Reel Size</label><input type="text" id="size" name="size" value={form.size} onChange={handleChange} placeholder="e.g. 787 x 1092 mm" /></div>
                <div className="form-group contact-advanced-wide"><label htmlFor="destination">Destination Country / Port</label><input type="text" id="destination" name="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Hamburg, Germany" /></div>
              </div>
            </details>
            <div className="form-group"><label htmlFor="message">{t("Your Message *")}</label><textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder={isSampleRequest ? "Tell us the application and what you need to evaluate." : "Tell us your requirements, application and target delivery date."} /></div>
            <button type="submit" className="form-submit" disabled={sending}>
              <Send aria-hidden="true" size={17} />
              {sending ? "Sending..." : isSampleRequest ? "Send Sample Request" : "Request Quotation"}
            </button>
          </form>
          <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
      </div>
      {/* Book a Meeting */}
      <div className="section" style={{ background: "var(--forest)", color: "#fff" }}>
        <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
          <MessageCircle aria-hidden="true" size={34} style={{ margin: "0 auto 16px", color: "var(--lime)" }} />
          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Discuss Your Requirements with Alice</h2>
          <p style={{ fontSize: 15, opacity: 0.8, marginBottom: 28, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 28px" }}>
            Use WhatsApp for a quick product discussion, or email Alice to arrange a call at a suitable time.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={meetingWhatsappHref} target="_blank" rel="noopener noreferrer"
              style={{ background: "var(--gold)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MessageCircle aria-hidden="true" size={18} /> Chat on WhatsApp
            </a>
            <a href={`mailto:${contactInfo.email}?subject=Meeting%20Request%20-%20Paper%20Inquiry`}
              style={{ background: "rgba(255,255,255,0.12)", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Mail aria-hidden="true" size={18} /> Email Alice
            </a>
          </div>
          <p style={{ fontSize: 11, opacity: 0.5, marginTop: 20 }}>
            {t("Working hours") || "Working hours"}: 10:00–12:00, 14:00–18:30, 20:00–23:00 (China Time / UTC+8)
          </p>
        </div>
      </div>

      <div className="section faq-section">
        <div className="section-header"><span className="section-label">{t("Frequently Asked Questions")}</span><h2>{t("Questions About Our Paper Products and Services")}</h2></div>
        <div className="faq-grid container">{faqSchemaItems.slice(0, 8).map((item) => (<details className="faq-item" key={item.id}><summary className="faq-question">{item.q}</summary><div className="faq-answer"><p>{item.a}</p></div></details>))}</div>
      </div>
    </section>
  );
}

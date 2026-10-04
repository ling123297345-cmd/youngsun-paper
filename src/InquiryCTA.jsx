import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "./data.js";
import { useLang } from "./i18n.jsx";

const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, "");

export default function InquiryCTA({ product, productId }) {
  const { lang } = useLang();
  const isEs = lang === "es";
  const isProduct = Boolean(product && productId);
  const productQuery = isProduct ? `&product=${encodeURIComponent(productId)}` : "";
  const quoteHref = `/contact?intent=quote${productQuery}`;
  const sampleHref = `/contact?intent=samples${productQuery}`;
  const whatsappMessage = isProduct
    ? `Hello, I am interested in ${product.name}. Please send specifications, MOQ, lead time and pricing.`
    : "Hello, I need help choosing the right paper for my application.";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (isProduct) {
    const productTitle = isEs
      ? `¿Listo para comprar ${product.name}?`
      : `Ready to source ${product.name}?`;

    return (
      <section className="inquiry-cta inquiry-cta-product" aria-labelledby="product-inquiry-title">
        <div className="product-inquiry-media">
          <img src={product.image} alt={`${product.name} product sample`} loading="lazy" />
        </div>
        <div className="product-inquiry-main">
          <span className="inquiry-product-name">{product.name}</span>
          <h2 id="product-inquiry-title">{productTitle}</h2>
          <p>
            {isEs
              ? "Comparta sus requisitos y prepararemos la opción adecuada para su proyecto."
              : "Share your requirements and we will prepare the right option for your project."}
          </p>
          <div className="product-inquiry-prompts" aria-label="Information to prepare">
            <span>{isEs ? "GSM / ESPESOR" : "GSM / THICKNESS"}</span>
            <span>{isEs ? "TAMAÑO / FORMATO" : "SIZE / FORMAT"}</span>
            <span>{isEs ? "CANTIDAD / DESTINO" : "QUANTITY / DESTINATION"}</span>
          </div>
          <p className="inquiry-sample-policy">
            {isEs
              ? "Las muestras estándar son gratuitas. El cliente paga los gastos de mensajería."
              : "Standard samples are complimentary. Courier charges are paid by the customer."}
          </p>
        </div>
        <div className="product-inquiry-actions">
          <Link
            to={quoteHref}
            className="inquiry-button inquiry-button-primary"
            data-analytics-event="product_quote_click"
          >
            {isEs ? `Precio de ${product.name}` : `Get ${product.name} Pricing`}
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link
            to={sampleHref}
            className="inquiry-button inquiry-button-outline"
            data-analytics-event="product_sample_click"
          >
            {isEs ? `Muestras de ${product.name}` : `Request ${product.name} Samples`}
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <a
            href={whatsappHref}
            className="product-inquiry-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="product_whatsapp_click"
          >
            <MessageCircle aria-hidden="true" size={16} />
            {isEs ? "Consultar por WhatsApp" : "Ask Alice on WhatsApp"}
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="inquiry-cta inquiry-cta-home" id="contact" aria-labelledby="home-inquiry-title">
      <div className="container home-inquiry-layout">
        <div className="home-inquiry-intro">
          <h2 id="home-inquiry-title">
            {isEs ? "¿Necesita ayuda para elegir el papel adecuado?" : "Need help choosing the right paper?"}
          </h2>
          <p>
            {isEs
              ? "Nuestro equipo le ayudará a encontrar la solución adecuada para su aplicación."
              : "Our team will help you find the right solution for your application."}
          </p>
        </div>

        <div className="home-inquiry-choices">
          <Link
            to={quoteHref}
            className="home-inquiry-choice primary"
            data-analytics-event="homepage_quote_click"
          >
            <strong>{isEs ? "Solicitar Cotización" : "Get a Quote"}</strong>
            <span>{isEs ? "Comparta sus requisitos para recibir precio y plazo." : "Share your requirements for pricing and lead time."}</span>
            <span className="home-inquiry-link">{isEs ? "SOLICITAR COTIZACIÓN" : "GET A QUOTE"}<ArrowRight aria-hidden="true" size={18} /></span>
          </Link>
          <Link
            to={sampleHref}
            className="home-inquiry-choice secondary"
            data-analytics-event="homepage_sample_click"
          >
            <strong>{isEs ? "Solicitar Muestras" : "Request Samples"}</strong>
            <span>{isEs ? "Compruebe la superficie, el color y el rendimiento." : "Check surface, color and performance before ordering."}</span>
            <span className="home-inquiry-link">{isEs ? "SOLICITAR MUESTRAS" : "REQUEST SAMPLES"}<ArrowRight aria-hidden="true" size={18} /></span>
          </Link>
        </div>

        <div className="home-inquiry-contact">
          <span>{isEs ? "CONTACTE CON ALICE" : "TALK TO ALICE"}</span>
          <a href={`mailto:${contactInfo.email}`} data-analytics-event="homepage_email_click">
            <Mail aria-hidden="true" size={17} />
            {contactInfo.email}
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics-event="homepage_whatsapp_click">
            <MessageCircle aria-hidden="true" size={17} />
            WhatsApp {contactInfo.whatsapp}
          </a>
          <p>
            {isEs
              ? "Las muestras estándar son gratuitas. El cliente paga el envío."
              : "Standard samples are complimentary. Customer pays courier."}
          </p>
        </div>
      </div>
    </section>
  );
}

import {
  ArrowRight,
  BookOpen,
  Box,
  Coffee,
  Gem,
  Gift,
  PackageOpen,
  Tags,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";
import { industryChannels } from "../industryApplications.js";
import { PageMeta } from "../SEO.jsx";
import "../industries.css";

const applicationImageBase = "/images/industries/applications/";

const industryCards = [
  {
    id: "packaging-printing",
    icon: PackageOpen,
    image: "/images/industries/cards/industry-packaging-printing-youngsun.webp",
    href: "/industries/packaging-printing",
  },
  {
    id: "food-beverage",
    icon: Coffee,
    image: "/images/industries/cards/industry-food-beverage-youngsun.webp",
    href: "/industries/food-beverage",
  },
  {
    id: "luxury-cosmetics",
    icon: Gem,
    image: "/images/industries/cards/industry-luxury-cosmetics-youngsun.webp",
    href: "/industries/luxury-cosmetics",
  },
  {
    id: "publishing-stationery",
    icon: BookOpen,
    image: "/images/industries/cards/industry-publishing-stationery-youngsun.webp",
    href: "/industries/publishing-stationery",
  },
  {
    id: "hang-tags-labels",
    icon: Tags,
    image: "/images/industries/cards/industry-hang-tags-labels-youngsun.webp",
    href: "/industries/hang-tags-labels",
  },
  {
    id: "gift-wrapping-decoration",
    icon: Gift,
    image: "/images/industries/cards/industry-gift-wrapping-decoration-youngsun.webp",
    href: "/industries/gift-wrapping-decoration",
  },
];

const applicationGuides = [
  {
    title: { en: "Printed Takeaway Paper Bag", es: "Bolsa de papel impresa para llevar" },
    description: {
      en: "White kraft paper combines print clarity with the strength required for takeaway bags and retail carriers.",
      es: "El papel kraft blanco combina claridad de impresión con la resistencia necesaria para bolsas de comida y comercio.",
    },
    paper: { en: "White Kraft Paper", es: "Papel Kraft Blanco" },
    rangeLabel: { en: "Typical range", es: "Rango habitual" },
    range: "80 - 150 gsm",
    image: "/images/industries/applications/white-kraft-takeaway-paper-bag-youngsun.webp",
    href: "/products/kraft-paper",
  },
  {
    title: { en: "Perfume Folding Box", es: "Caja plegable para perfume" },
    description: {
      en: "FBB provides stiffness, clean creasing and a smooth print surface for premium fragrance and cosmetic packaging.",
      es: "FBB aporta rigidez, hendido limpio y una superficie suave para envases prémium de perfumería y cosmética.",
    },
    paper: { en: "Folding Box Board (FBB)", es: "Cartón Plegable (FBB)" },
    rangeLabel: { en: "Typical range", es: "Rango habitual" },
    range: "250 - 350 gsm",
    image: "/images/products/fancy-paper/gallery/Purple-Magenta-Perfume-Packaging.jpg",
    href: "/products/folding-box-board",
  },
  {
    title: { en: "Premium Garment Hang Tag", es: "Etiqueta premium para prendas" },
    description: {
      en: "Through-dyed black paper gives garment tags clean edges and a refined base for foil stamping and embossing.",
      es: "El papel negro teñido en masa ofrece bordes limpios y una base refinada para estampado y relieve.",
    },
    paper: { en: "Black Paper", es: "Papel Negro" },
    rangeLabel: { en: "Typical range", es: "Rango habitual" },
    range: "200 - 400 gsm",
    image: "20260801_103337_136.jpg",
    href: "/products/black-paper",
  },
  {
    title: { en: "Hardcover Book Cover", es: "Cubierta de libro de tapa dura" },
    description: {
      en: "Grey board supplies the flatness, support and durability needed for case-bound books, albums and presentation folders.",
      es: "El cartón gris ofrece planitud, soporte y durabilidad para libros, álbumes y carpetas de presentación.",
    },
    paper: { en: "Grey Board", es: "Cartón Gris" },
    rangeLabel: { en: "Typical range", es: "Rango habitual" },
    range: "1.0 - 3.0 mm",
    image: "/images/products/package-board/gallery/grey-board-scene-05.jpg",
    href: "/products/grey-board",
  },
  {
    title: { en: "Greaseproof Food Wrap", es: "Envoltura antigrasa para alimentos" },
    description: {
      en: "Greaseproof paper resists oil migration while keeping bakery, burger and deli presentation clean and food-safe.",
      es: "El papel antigrasa resiste la migración de aceite y mantiene limpia la presentación de alimentos.",
    },
    paper: { en: "Greaseproof Paper", es: "Papel Antigrasa" },
    rangeLabel: { en: "Typical range", es: "Rango habitual" },
    range: "30 - 60 gsm",
    image: "/images/products/food-packaging/gallery/greaseproof-paper-scene-02.jpg",
    href: "/products/greaseproof-paper",
  },
];

const copy = {
  en: {
    heroTitle: "Find the right paper for every application.",
    heroBody: "From packaging and food service to luxury, publishing and retail, compare proven paper solutions by end use.",
    explore: "Explore applications",
    recommendation: "Get a recommendation",
    industryLabel: "Explore by industry",
    industryIntro: "Find paper and board solutions for the way your product is made, packed and presented.",
    exploreLink: "Explore",
    guidesLabel: "Featured application guides",
    guidesIntro: "Real products. Practical paper recommendations.",
    recommended: "Recommended paper",
    viewDetails: "View details",
    ctaTitle: "Not sure which paper is right for you?",
    ctaBody: "Tell us about your product, printing process and target performance. Our team will recommend suitable grades and prepare samples for evaluation. Standard sample material is covered by YOUNGSUN; international courier charges are paid by the customer.",
    ctaPrimary: "Get paper recommendation",
    ctaSecondary: "Request samples",
  },
  es: {
    heroTitle: "Encuentre el papel adecuado para cada aplicación.",
    heroBody: "Desde embalaje y alimentos hasta lujo, edición y comercio, compare soluciones probadas según el uso final.",
    explore: "Explorar aplicaciones",
    recommendation: "Obtener recomendación",
    industryLabel: "Explorar por industria",
    industryIntro: "Encuentre soluciones de papel y cartón para fabricar, embalar y presentar su producto.",
    exploreLink: "Explorar",
    guidesLabel: "Guías de aplicación destacadas",
    guidesIntro: "Productos reales. Recomendaciones prácticas.",
    recommended: "Papel recomendado",
    viewDetails: "Ver detalles",
    ctaTitle: "¿No está seguro de qué papel necesita?",
    ctaBody: "Cuéntenos su producto, proceso de impresión y rendimiento esperado. Recomendaremos grados adecuados y prepararemos muestras. YOUNGSUN cubre el material de la muestra estándar; el cliente paga el transporte internacional.",
    ctaPrimary: "Obtener recomendación",
    ctaSecondary: "Solicitar muestras",
  },
};

function getImageSrc(image) {
  return image.startsWith("/") ? image : `${applicationImageBase}${image}`;
}

export default function Industries() {
  const { lang } = useLang();
  const activeLang = lang === "es" ? "es" : "en";
  const text = copy[activeLang];

  return (
    <main className="industries-page">
      <PageMeta
        title={activeLang === "es" ? "Soluciones de Papel por Industria y Aplicación | Youngsun Paper" : "Paper Solutions by Industry and Application | Youngsun Paper"}
        description={activeLang === "es" ? "Compare papeles y cartones para embalaje, alimentos, cajas de lujo, edición, etiquetas y regalos. Solicite una recomendación técnica y muestras." : "Compare paper and paperboard for packaging, food service, luxury boxes, publishing, hang tags and gift wrapping. Get grade recommendations and request samples."}
        path="/industries"
      />

      <section className="industries-hero" aria-labelledby="industries-hero-title">
        <img
          className="industries-hero-image"
          src="/images/industries/youngsun-paper-applications-hero.png"
          alt={activeLang === "es" ? "Aplicaciones de papel para embalaje, vasos, cajas rígidas, libros y etiquetas" : "Paper packaging, paper cup, rigid gift box, book cover and hang tag applications"}
        />
        <div className="industries-hero-content">
          <h1 id="industries-hero-title">{text.heroTitle}</h1>
          <p>{text.heroBody}</p>
          <div className="industries-hero-actions">
            <a className="industries-button industries-button-primary" href="#industry-explorer">
              {text.explore}
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <Link className="industries-text-link" to="/contact">
              {text.recommendation}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="industries-explorer" id="industry-explorer" aria-labelledby="industry-explorer-title">
        <div className="industries-shell">
          <div className="industries-section-heading">
            <div>
              <span className="industries-section-rule" aria-hidden="true" />
              <h2 id="industry-explorer-title">{text.industryLabel}</h2>
            </div>
            <p>{text.industryIntro}</p>
          </div>

          <div className="industries-card-grid">
            {industryCards.map((card) => {
              const channel = industryChannels.find((item) => item.id === card.id);
              const Icon = card.icon;

              if (!channel) return null;

              return (
                <Link className="industries-card" to={card.href} key={card.id}>
                  <div className="industries-card-image-wrap">
                    <img
                      src={getImageSrc(card.image)}
                      alt={activeLang === "es" ? `Aplicación de papel para ${channel.title[activeLang]}` : `${channel.title[activeLang]} paper application`}
                      loading="lazy"
                    />
                  </div>
                  <div className="industries-card-body">
                    <Icon className="industries-card-icon" aria-hidden="true" size={25} strokeWidth={1.5} />
                    <h3>{channel.title[activeLang]}</h3>
                    <p>{channel.tagline[activeLang]}</p>
                    <span className="industries-card-link">
                      {text.exploreLink}
                      <ArrowRight aria-hidden="true" size={15} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industries-guides" aria-labelledby="industries-guides-title">
        <div className="industries-shell">
          <div className="industries-section-heading industries-section-heading-guides">
            <div>
              <span className="industries-section-rule" aria-hidden="true" />
              <h2 id="industries-guides-title">{text.guidesLabel}</h2>
            </div>
            <p>{text.guidesIntro}</p>
          </div>

          <div className="industries-guide-list">
            {applicationGuides.map((guide) => (
              <article className="industries-guide-row" key={guide.href}>
                <img
                  className="industries-guide-image"
                  src={getImageSrc(guide.image)}
                  alt={guide.title[activeLang]}
                  loading="lazy"
                />
                <div className="industries-guide-copy">
                  <h3>{guide.title[activeLang]}</h3>
                  <p>{guide.description[activeLang]}</p>
                </div>
                <div className="industries-guide-recommendation">
                  <div>
                    <span>{text.recommended}</span>
                    <strong>{guide.paper[activeLang]}</strong>
                    <small>{guide.rangeLabel[activeLang]}</small>
                    <b>{guide.range}</b>
                  </div>
                  <Link to={guide.href} aria-label={`${text.viewDetails}: ${guide.paper[activeLang]}`}>
                    {text.viewDetails}
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industries-cta" aria-labelledby="industries-cta-title">
        <div className="industries-cta-visual" aria-hidden="true">
          <Box size={48} strokeWidth={1.2} />
        </div>
        <div className="industries-cta-copy">
          <h2 id="industries-cta-title">{text.ctaTitle}</h2>
          <p>{text.ctaBody}</p>
        </div>
        <div className="industries-cta-actions">
          <Link className="industries-button industries-button-primary" to="/contact">
            {text.ctaPrimary}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link className="industries-button industries-button-secondary" to="/contact">
            {text.ctaSecondary}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

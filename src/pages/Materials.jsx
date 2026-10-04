import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Flower2,
  Gem,
  Leaf,
  Recycle,
  Settings2,
  ShieldCheck,
  Sprout,
  Trees,
} from "lucide-react";
import { useLang } from "../i18n.jsx";
import { PageMeta } from "../SEO.jsx";
import { buyerGuides, pillarArticles, pulpHub } from "../pulpMaterialsData.js";
import "../materials-page.css";

const imageBase = "/images/materials/library";

const pageCopy = {
  en: {
    library: "Materials Library",
    title: <>Paper Pulp Materials:<br />How Fiber Choice<br />Shapes Paper Performance</>,
    lead: "Understand how fiber source, pulping method and recycled content influence strength, smoothness, bulk and printability.",
    explore: "Explore materials",
    compare: "Compare fiber options",
    why: "Why materials matter",
    introTitle: <>The Performance of Paper<br />Starts With Its Fiber Furnish</>,
    introOne: "Different fibers contribute different properties to paper. Some improve strength and runnability, while others support smoothness, opacity, bulk or a premium tactile character.",
    introTwo: "Most commercial papers use a carefully balanced fiber blend. The right question is not which pulp is best, but which combination best supports your product and converting process.",
    fibers: "Explore paper fibers",
    article: "Read the article",
    guides: "Buyer guides",
    guideLink: "Read the guide",
    endUse: "Start with the end use",
    readAbout: "Read about",
    faq: "Frequently asked questions",
    ctaTitle: <>Need Help Matching Materials<br />to Your Paper Requirements?</>,
    ctaBody: "Tell us your application, GSM or thickness, size, printing and converting process. We will help shortlist suitable grades for sample evaluation.",
    recommendation: "Get material recommendation",
    samples: "Request samples",
  },
  es: {
    library: "Biblioteca de materiales",
    title: <>Materiales de pulpa:<br />Como la fibra define<br />el rendimiento del papel</>,
    lead: "Comprenda como la fibra, el proceso de pulpa y el contenido reciclado influyen en la resistencia, lisura, volumen e impresion.",
    explore: "Explorar materiales",
    compare: "Comparar fibras",
    why: "Por que importan los materiales",
    introTitle: <>El rendimiento del papel<br />empieza con sus fibras</>,
    introOne: "Cada fibra aporta propiedades diferentes. Algunas mejoran la resistencia y otras favorecen la lisura, opacidad, volumen o tacto premium.",
    introTwo: "La mayoria de los papeles combinan varias fibras. La mejor opcion es la mezcla que responde al producto y al proceso de conversion.",
    fibers: "Explorar fibras de papel",
    article: "Leer el articulo",
    guides: "Guias de compra",
    guideLink: "Leer la guia",
    endUse: "Empiece por el uso final",
    readAbout: "Leer sobre",
    faq: "Preguntas frecuentes",
    ctaTitle: <>Necesita ayuda para elegir<br />el material adecuado?</>,
    ctaBody: "Indique la aplicacion, GSM o espesor, tamano, impresion y conversion. Le ayudaremos a seleccionar grados para evaluar muestras.",
    recommendation: "Obtener recomendacion",
    samples: "Solicitar muestras",
  },
};

const fiberDetails = {
  "softwood-pulp": {
    icon: Trees,
    subtitle: "Long Fibers for Stronger Paper and Packaging",
    description: "Softwood pulp is commonly used as a reinforcing fiber. Its longer fibers support tensile strength, tear resistance, burst performance and machine runnability.",
    image: `${imageBase}/03-softwood-pulp-long-fiber.webp`,
  },
  "hardwood-pulp": {
    icon: Leaf,
    subtitle: "Short Fibers for Smoothness and Print Quality",
    description: "Hardwood pulp delivers excellent formation, opacity and a smooth surface for sharp printing and vivid color reproduction.",
    image: `${imageBase}/04-hardwood-pulp-short-fiber.webp`,
  },
  "bamboo-pulp": {
    icon: Sprout,
    subtitle: "A Renewable Non-Wood Fiber Option",
    description: "Bamboo pulp offers balanced strength and stiffness with good bulk. A fast-growing, renewable resource for a distinctive natural fiber story.",
    image: `${imageBase}/05-bamboo-pulp-material.webp`,
  },
  "cotton-pulp": {
    icon: Flower2,
    subtitle: "Purity and Performance for Premium Applications",
    description: "Cotton pulp provides high cellulose purity, excellent permanence and superior performance in specialized paper grades.",
    image: `${imageBase}/06-cotton-pulp-material.webp`,
  },
};

const guideDetails = {
  "mechanical-vs-chemical-pulp": {
    icon: Settings2,
    image: `${imageBase}/07-mechanical-vs-chemical-pulp.webp`,
    description: "Understand how pulping methods affect strength, bulk, opacity, brightness stability and paper life.",
  },
  "virgin-vs-recycled-fiber": {
    icon: Recycle,
    image: `${imageBase}/08-virgin-pulp-vs-recycled-fiber.webp`,
    description: "Compare strength, appearance, cleanliness, recycled content and responsible sourcing.",
  },
};

const endUses = [
  { label: "Higher Strength", detail: "Softwood Pulp", href: "/materials/softwood-pulp", icon: ShieldCheck },
  { label: "Smooth Printing", detail: "Hardwood Pulp", href: "/materials/hardwood-pulp", icon: Droplets },
  { label: "Natural Fiber Story", detail: "Bamboo Pulp", href: "/materials/bamboo-pulp", icon: Trees },
  { label: "Premium Permanence", detail: "Cotton Pulp", href: "/materials/cotton-pulp", icon: Gem },
  { label: "Recycled Packaging", detail: "Virgin vs Recycled Fiber", href: "/materials/virgin-vs-recycled-fiber", icon: Recycle },
];

function SectionLabel({ children }) {
  return <div className="materials-section-title"><span /><p>{children}</p><span /></div>;
}

export default function Materials() {
  const { lang } = useLang();
  const activeLang = lang === "es" ? "es" : "en";
  const text = pageCopy[activeLang];

  return (
    <>
      <PageMeta
        title="Paper Pulp Materials Library | YOUNGSUN PAPER"
        description="Compare softwood, hardwood, bamboo and cotton pulp. Learn how fiber choice, pulping method and recycled content affect paper strength, smoothness, bulk and printability."
        path="/materials"
      />

      <main className="materials-library">
        <section className="materials-hero">
          <img className="materials-hero__image" src={`${imageBase}/01-youngsun-materials-library-hero.webp`} alt="Paper pulp fibers and finished paper sheets" />
          <div className="materials-hero__wash" />
          <div className="materials-shell materials-hero__content">
            <p className="materials-kicker">{text.library}</p>
            <h1>{text.title}</h1>
            <p className="materials-lead">{text.lead}</p>
            <div className="materials-actions">
              <a className="materials-button materials-button--solid" href="#paper-fibers">{text.explore}<ArrowRight size={16} /></a>
              <Link className="materials-button materials-button--outline" to="/materials/pulp">{text.compare}</Link>
            </div>
          </div>
        </section>

        <section className="materials-intro">
          <div className="materials-shell materials-intro__grid">
            <div className="materials-intro__copy">
              <p className="materials-kicker">{text.why}</p>
              <h2>{text.introTitle}</h2>
              <p>{text.introOne}</p>
              <p>{text.introTwo}</p>
            </div>
            <img src={`${imageBase}/02-paper-fiber-furnish-close-up.webp`} alt="Close-up of clean paper fibers" loading="lazy" />
          </div>
        </section>

        <section className="materials-section materials-fiber-section" id="paper-fibers">
          <div className="materials-shell">
            <SectionLabel>{text.fibers}</SectionLabel>
            <div className="materials-fiber-list">
              {pillarArticles.map((article, index) => {
                const detail = fiberDetails[article.id];
                const Icon = detail.icon;
                return (
                  <article className={`materials-fiber ${index % 2 ? "materials-fiber--reverse" : ""}`} key={article.id}>
                    <Link className="materials-fiber__media" to={`/materials/${article.id}`}>
                      <img src={detail.image} alt={article.shortTitle} loading="lazy" />
                    </Link>
                    <div className="materials-fiber__copy">
                      <div className="materials-fiber__icon"><Icon size={29} aria-hidden="true" /></div>
                      <div className="materials-fiber__content">
                        <h3>{article.shortTitle}</h3>
                        <p className="materials-fiber__summary">{detail.subtitle}</p>
                        <p>{detail.description}</p>
                        <Link className="materials-text-link" to={`/materials/${article.id}`}>{text.article}<ArrowRight size={15} /></Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="materials-section materials-guides-section" id="buyer-guides">
          <div className="materials-shell">
            <SectionLabel>{text.guides}</SectionLabel>
            <div className="materials-guide-grid">
              {buyerGuides.map((guide) => {
                const detail = guideDetails[guide.id];
                const Icon = detail.icon;
                return (
                  <Link className="materials-guide" to={`/materials/${guide.id}`} key={guide.id}>
                    <img src={detail.image} alt={guide.shortTitle} loading="lazy" />
                    <div className="materials-guide__copy">
                      <div className="materials-guide__icon"><Icon size={24} aria-hidden="true" /></div>
                      <h3>{guide.shortTitle}</h3>
                      <p>{detail.description}</p>
                      <span>{text.guideLink}<ArrowRight size={14} /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="materials-section materials-end-use" id="end-use">
          <div className="materials-shell">
            <SectionLabel>{text.endUse}</SectionLabel>
            <div className="materials-end-use__grid">
              {endUses.map((item) => {
                const Icon = item.icon;
                return (
                  <Link to={item.href} key={item.label}>
                    <Icon size={31} aria-hidden="true" />
                    <div><strong>{item.label}</strong><span>{text.readAbout}<b>{item.detail}</b></span></div>
                    <ArrowRight className="materials-end-use__arrow" size={14} aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="materials-section materials-faq" id="materials-faq">
          <div className="materials-shell">
            <SectionLabel>{text.faq}</SectionLabel>
            <div className="materials-faq__grid">
              {pulpHub.faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}<span>+</span></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="materials-cta">
          <div className="materials-shell materials-cta__inner">
            <div className="materials-cta__copy"><h2>{text.ctaTitle}</h2><p>{text.ctaBody}</p></div>
            <div className="materials-cta__actions">
              <Link className="materials-button materials-button--solid" to="/contact">{text.recommendation}<ArrowRight size={16} /></Link>
              <Link className="materials-button materials-button--outline" to="/contact">{text.samples}<ArrowRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

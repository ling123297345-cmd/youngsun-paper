import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileCheck2,
  Layers3,
  PackageCheck,
  Printer,
  Scissors,
  Settings2,
} from "lucide-react";
import { useLang } from "../i18n.jsx";
import { PageMeta } from "../SEO.jsx";
import { subProducts } from "../data.js";
import { industries } from "../industriesData.js";
import { industryChannels } from "../industryApplications.js";
import {
  industryApplicationImages,
  industryDetailContent,
  industryHeroImages,
} from "../industryDetailContent.js";
import "../industry-detail.css";

const processIcons = [Scissors, Layers3, Printer, Settings2, PackageCheck];

const copy = {
  en: {
    back: "All industries",
    applications: "Applications and paper recommendations",
    applicationsIntro: "Start with the finished product, then compare the grades that support its structure, surface and converting process.",
    recommended: "Recommended paper grades",
    recommendedIntro: "Core materials commonly specified for this industry. Open each product for detailed specifications and sample options.",
    viewProduct: "View product",
    buyerChecklist: "What to include in your inquiry",
    buyerChecklistIntro: "A clear specification helps us recommend the right grade and prepare a more useful sample set.",
    processes: "Converting and supply support",
    guides: "Related buyer resources",
    faq: "Common sourcing questions",
    ctaTitle: "Discuss your application with a paper specialist",
    ctaBody: "Send your end use, target GSM or thickness, size, printing and converting process, order quantity and destination port.",
    recommendation: "Get a paper recommendation",
    samples: "Request samples",
    suitable: "Suitable papers",
    available: "Available",
    formats: "Sheets and reels",
    applicationsCount: "Application routes",
    productCount: "Linked paper grades",
    supply: "Supply formats",
    sampleSupport: "Sample support",
  },
  es: {
    back: "Todas las industrias",
    applications: "Aplicaciones y recomendaciones de papel",
    applicationsIntro: "Empiece por el producto final y compare los grados que apoyan su estructura, superficie y conversion.",
    recommended: "Grados de papel recomendados",
    recommendedIntro: "Materiales principales para esta industria. Abra cada producto para ver especificaciones y muestras.",
    viewProduct: "Ver producto",
    buyerChecklist: "Que incluir en su consulta",
    buyerChecklistIntro: "Una especificacion clara permite recomendar el grado correcto y preparar muestras utiles.",
    processes: "Soporte de conversion y suministro",
    guides: "Recursos relacionados",
    faq: "Preguntas de compra",
    ctaTitle: "Hable de su aplicacion con un especialista",
    ctaBody: "Envie uso final, GSM o espesor, tamano, impresion, conversion, cantidad y puerto de destino.",
    recommendation: "Obtener recomendacion",
    samples: "Solicitar muestras",
    suitable: "Papeles adecuados",
    available: "Disponible",
    formats: "Hojas y bobinas",
    applicationsCount: "Aplicaciones",
    productCount: "Grados enlazados",
    supply: "Formatos",
    sampleSupport: "Muestras",
  },
};

const commonFaqs = {
  en: [
    { q: "Can you recommend a grade from a finished product sample?", a: "Yes. Send a physical sample, photos or the current technical specification. We can compare structure, surface, GSM or thickness and converting requirements before proposing alternatives." },
    { q: "Can I request samples before placing a bulk order?", a: "Yes. Standard sample sheets can be arranged for evaluation. For production trials, tell us the required grade, GSM, size and converting process so the sample is relevant to your line." },
    { q: "What information is needed for a quotation?", a: "Please provide the product or application, paper grade if known, GSM or thickness, sheet or reel size, quantity, printing or converting process and destination port." },
  ],
  es: [
    { q: "Pueden recomendar un grado a partir de una muestra terminada?", a: "Si. Envie una muestra fisica, fotos o la especificacion actual. Podemos comparar estructura, superficie, GSM o espesor y requisitos de conversion." },
    { q: "Puedo solicitar muestras antes de un pedido?", a: "Si. Se pueden preparar hojas para evaluacion. Para pruebas de produccion, indique grado, GSM, tamano y proceso de conversion." },
    { q: "Que informacion se necesita para cotizar?", a: "Indique producto o aplicacion, grado si lo conoce, GSM o espesor, tamano de hoja o bobina, cantidad, proceso y puerto de destino." },
  ],
};

function normalizeProductPath(path) {
  return path === "/products/art-paper" ? "/products/c2s-art-board" : path;
}

export default function IndustryDetail() {
  const { id } = useParams();
  const { lang } = useLang();
  const activeLang = lang === "es" ? "es" : "en";
  const text = copy[activeLang];
  const channel = industryChannels.find((item) => item.id === id);
  const detail = industryDetailContent[id];
  const legacy = industries.find((item) => item.id === id);

  if (!channel || !detail) {
    return (
      <section className="industry-detail-missing">
        <h1>{activeLang === "es" ? "Industria no encontrada" : "Industry not found"}</h1>
        <Link to="/industries"><ArrowLeft size={16} />{text.back}</Link>
      </section>
    );
  }

  const productCards = detail.featuredProducts
    .map((productId) => subProducts[productId])
    .filter(Boolean);
  const faqs = legacy?.faqs?.slice(0, 3).map((faq) => ({ q: faq.q[activeLang], a: faq.a[activeLang] })) || commonFaqs[activeLang];

  return (
    <>
      <PageMeta
        title={`${channel.title.en} Paper Solutions | YOUNGSUN PAPER`}
        description={detail.overview.en.slice(0, 158)}
        path={`/industries/${id}`}
      />

      <main className="industry-detail-page">
        <section className="industry-detail-hero">
          <img src={industryHeroImages[id]} alt={`${channel.title[activeLang]} paper applications`} />
          <div className="industry-detail-hero__overlay" />
          <div className="industry-detail-shell industry-detail-hero__content">
            <Link className="industry-detail-back" to="/industries"><ArrowLeft size={15} />{text.back}</Link>
            <p className="industry-detail-kicker">{detail.eyebrow[activeLang]}</p>
            <h1>{channel.title[activeLang]}</h1>
            <p>{channel.tagline[activeLang]}</p>
            <div className="industry-detail-actions">
              <a className="industry-detail-button industry-detail-button--light" href="#applications">{text.applications}<ArrowRight size={16} /></a>
              <Link className="industry-detail-button industry-detail-button--glass" to="/contact">{text.samples}</Link>
            </div>
          </div>
        </section>

        <section className="industry-detail-facts">
          <div className="industry-detail-shell industry-detail-facts__grid">
            <div><strong>{channel.applications.length}</strong><span>{text.applicationsCount}</span></div>
            <div><strong>{productCards.length}</strong><span>{text.productCount}</span></div>
            <div><strong>{text.formats}</strong><span>{text.supply}</span></div>
            <div><strong>{text.available}</strong><span>{text.sampleSupport}</span></div>
          </div>
        </section>

        <section className="industry-detail-intro">
          <div className="industry-detail-shell industry-detail-intro__grid">
            <div>
              <p className="industry-detail-kicker">{detail.eyebrow[activeLang]}</p>
              <h2>{activeLang === "es" ? "Elegir el papel desde el uso final" : "Choose Paper From the End Use Back"}</h2>
              <p>{detail.overview[activeLang]}</p>
            </div>
            <div className="industry-detail-priorities">
              {detail.priorities.map((priority, index) => (
                <div key={priority.title.en}>
                  <span>0{index + 1}</span>
                  <h3>{priority.title[activeLang]}</h3>
                  <p>{priority.desc[activeLang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-detail-section industry-detail-section--soft" id="applications">
          <div className="industry-detail-shell">
            <header className="industry-detail-section__heading">
              <p className="industry-detail-kicker">{text.applications}</p>
              <h2>{activeLang === "es" ? "Encuentre el papel para su producto" : "Find the Paper for Your Product"}</h2>
              <p>{text.applicationsIntro}</p>
            </header>
            <div className="industry-application-grid">
              {channel.applications.map((application, index) => (
                <article className="industry-application-card" key={application.name.en}>
                  <div className="industry-application-card__media">
                    <img src={industryApplicationImages[id][index]} alt={application.name[activeLang]} loading="lazy" />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="industry-application-card__body">
                    <h3>{application.name[activeLang]}</h3>
                    <p>{application.desc[activeLang]}</p>
                    <h4>{text.suitable}</h4>
                    <div className="industry-application-materials">
                      {application.materials.map((material) => (
                        <Link to={normalizeProductPath(material.url)} key={material.name}>
                          <strong>{material.name}</strong>
                          <span>{material.desc[activeLang]}</span>
                          <ArrowRight size={15} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-detail-section">
          <div className="industry-detail-shell">
            <header className="industry-detail-section__heading">
              <p className="industry-detail-kicker">{text.recommended}</p>
              <h2>{activeLang === "es" ? "Compare los grados principales" : "Compare the Core Paper Grades"}</h2>
              <p>{text.recommendedIntro}</p>
            </header>
            <div className="industry-product-grid">
              {productCards.map((product) => (
                <Link className="industry-product-card" to={`/products/${product.id}`} key={product.id}>
                  <div className="industry-product-card__media">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="industry-product-card__body">
                    <h3>{product.name}</h3>
                    <p>{product.tagline}</p>
                    <span>{text.viewProduct}<ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-buyer-band">
          <div className="industry-detail-shell industry-buyer-band__grid">
            <div className="industry-buyer-band__intro">
              <p className="industry-detail-kicker">{text.buyerChecklist}</p>
              <h2>{activeLang === "es" ? "Una consulta clara recibe una recomendacion mejor" : "A Clear Inquiry Gets a Better Recommendation"}</h2>
              <p>{text.buyerChecklistIntro}</p>
              <Link to="/contact">{text.recommendation}<ArrowRight size={16} /></Link>
            </div>
            <ol className="industry-buyer-checklist">
              {detail.checklist.map((item, index) => (
                <li key={item.en}><span>{String(index + 1).padStart(2, "0")}</span><p>{item[activeLang]}</p><Check size={17} /></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="industry-detail-processes">
          <div className="industry-detail-shell">
            <p className="industry-detail-kicker">{text.processes}</p>
            <div className="industry-detail-processes__grid">
              {detail.processes.map((process, index) => {
                const Icon = processIcons[index % processIcons.length];
                return <div key={process}><Icon size={25} /><span>{process}</span></div>;
              })}
            </div>
          </div>
        </section>

        <section className="industry-detail-section industry-detail-section--soft">
          <div className="industry-detail-shell">
            <header className="industry-detail-section__heading industry-detail-section__heading--compact">
              <p className="industry-detail-kicker">{text.guides}</p>
              <h2>{activeLang === "es" ? "Profundice antes de comprar" : "Go Deeper Before You Buy"}</h2>
            </header>
            <div className="industry-related-grid">
              {detail.related.map((resource) => (
                <Link to={resource.href} key={resource.href}>
                  <FileCheck2 size={28} />
                  <div><h3>{resource.title}</h3><p>{resource.desc}</p><span>{activeLang === "es" ? "Leer guia" : "Read guide"}<ArrowRight size={14} /></span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-detail-faq">
          <div className="industry-detail-shell">
            <p className="industry-detail-kicker">{text.faq}</p>
            <div className="industry-detail-faq__grid">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}<span>+</span></summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-detail-cta">
          <div className="industry-detail-shell industry-detail-cta__inner">
            <div><h2>{text.ctaTitle}</h2><p>{text.ctaBody}</p></div>
            <div>
              <Link className="industry-detail-button industry-detail-button--light" to="/contact">{text.recommendation}<ArrowRight size={16} /></Link>
              <Link className="industry-detail-button industry-detail-button--outline-light" to="/contact">{text.samples}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

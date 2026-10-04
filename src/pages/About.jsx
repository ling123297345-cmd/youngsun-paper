import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  FileText,
  Globe2,
  Handshake,
  Images,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Ship,
  UsersRound,
  X,
} from "lucide-react";
import { useLang } from "../i18n.jsx";
import { PageMeta } from "../SEO.jsx";
import "../about-page.css";

const IMAGE_ROOT = "/images/about/exhibitions";

const exhibitions = [
  {
    id: "hong-kong-2023",
    year: 2023,
    name: "Hong Kong International Printing & Packaging Fair",
    city: "Hong Kong",
    country: "China",
    dates: "19-22 Apr 2023",
    booth: "Hall 3F, D06",
    invitation: `${IMAGE_ROOT}/hong-kong-2023/invitation.webp`,
    cover: `${IMAGE_ROOT}/hong-kong-2023/photo-4.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/hong-kong-2023/photo-${item}.webp`),
  },
  {
    id: "mexico-homelife-2023",
    year: 2023,
    name: "China Homelife Mexico",
    city: "Mexico City",
    country: "Mexico",
    dates: "27-29 Jun 2023",
    booth: "Hall 3, Booth 1126",
    invitation: `${IMAGE_ROOT}/mexico-homelife-2023/invitation.webp`,
    cover: `${IMAGE_ROOT}/mexico-homelife-2023/photo-2.webp`,
    photos: [1, 2, 3].map((item) => `${IMAGE_ROOT}/mexico-homelife-2023/photo-${item}.webp`),
  },
  {
    id: "istanbul-2023",
    year: 2023,
    name: "Eurasia Packaging Istanbul",
    city: "Istanbul",
    country: "Turkey",
    dates: "11-14 Oct 2023",
    booth: "Hall 1A, Booth 15F",
    invitation: `${IMAGE_ROOT}/istanbul-2023/invitation.webp`,
    cover: `${IMAGE_ROOT}/istanbul-2023/photo-2.webp`,
    photos: [1, 2, 3].map((item) => `${IMAGE_ROOT}/istanbul-2023/photo-${item}.webp`),
  },
  {
    id: "dubai-2024",
    year: 2024,
    name: "Gulf Print & Pack 2024",
    city: "Dubai",
    country: "United Arab Emirates",
    dates: "9-11 Jan 2024",
    booth: "Trade Centre 2, CP35",
    invitation: `${IMAGE_ROOT}/dubai-2024/invitation.webp`,
    cover: `${IMAGE_ROOT}/dubai-2024/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/dubai-2024/photo-${item}.webp`),
  },
  {
    id: "drupa-2024",
    year: 2024,
    name: "drupa 2024",
    city: "Dusseldorf",
    country: "Germany",
    dates: "28 May-7 Jun 2024",
    booth: "Hall 3, 3H02-09",
    invitation: `${IMAGE_ROOT}/drupa-2024/invitation.webp`,
    cover: `${IMAGE_ROOT}/drupa-2024/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/drupa-2024/photo-${item}.webp`),
  },
  {
    id: "indonesia-2024",
    year: 2024,
    name: "ALLPRINT Indonesia 2024",
    city: "Jakarta",
    country: "Indonesia",
    dates: "9-12 Oct 2024",
    booth: "C2D038",
    invitation: `${IMAGE_ROOT}/indonesia-2024/invitation.webp`,
    cover: `${IMAGE_ROOT}/indonesia-2024/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/indonesia-2024/photo-${item}.webp`),
  },
  {
    id: "mexico-2024",
    year: 2024,
    name: "EXPOGRAFICA 2024",
    city: "Mexico City",
    country: "Mexico",
    dates: "12-15 Nov 2024",
    booth: "89-0",
    invitation: `${IMAGE_ROOT}/mexico-2024/invitation.webp`,
    cover: `${IMAGE_ROOT}/mexico-2024/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/mexico-2024/photo-${item}.webp`),
  },
  {
    id: "bangladesh-2025",
    year: 2025,
    name: "International Plastics, Printing & Packaging Industry Fair",
    city: "Dhaka",
    country: "Bangladesh",
    dates: "12-15 Feb 2025",
    booth: "552",
    invitation: `${IMAGE_ROOT}/bangladesh-2025/invitation.webp`,
    cover: `${IMAGE_ROOT}/bangladesh-2025/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/bangladesh-2025/photo-${item}.webp`),
  },
  {
    id: "south-africa-2025",
    year: 2025,
    name: "Propak Africa 2025",
    city: "Johannesburg",
    country: "South Africa",
    dates: "11-14 Mar 2025",
    booth: "E27",
    invitation: `${IMAGE_ROOT}/south-africa-2025/invitation.webp`,
    cover: `${IMAGE_ROOT}/south-africa-2025/invitation.webp`,
    photos: [],
  },
  {
    id: "thailand-2025",
    year: 2025,
    name: "PACK PRINT INTERNATIONAL 2025",
    city: "Bangkok",
    country: "Thailand",
    dates: "17-20 Sep 2025",
    booth: "F40",
    invitation: `${IMAGE_ROOT}/thailand-2025/invitation.webp`,
    cover: `${IMAGE_ROOT}/thailand-2025/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/thailand-2025/photo-${item}.webp`),
  },
  {
    id: "bangladesh-2026",
    year: 2026,
    name: "GAPEXPO 2026",
    city: "Dhaka",
    country: "Bangladesh",
    dates: "14-17 Jan 2026",
    booth: "Expo Zone H25",
    invitation: `${IMAGE_ROOT}/bangladesh-2026/invitation.webp`,
    cover: `${IMAGE_ROOT}/bangladesh-2026/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/bangladesh-2026/photo-${item}.webp`),
  },
  {
    id: "mexico-2026",
    year: 2026,
    name: "EXPOGRAFICA Guadalajara 2026",
    city: "Guadalajara",
    country: "Mexico",
    dates: "6-9 May 2026",
    booth: "3821",
    invitation: `${IMAGE_ROOT}/mexico-2026/invitation.webp`,
    cover: `${IMAGE_ROOT}/mexico-2026/photo-1.webp`,
    photos: [1, 2, 3, 4].map((item) => `${IMAGE_ROOT}/mexico-2026/photo-${item}.webp`),
  },
];

const copy = {
  en: {
    legacyLabel: "About YOUNGSUN",
    legacyTitle: "Your Paper Supply Partner Since 2002",
    legacyBody: "YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) is headquartered in Dongguan, Guangdong Province, 50 km from Shenzhen port. Our 20,000 m2 workshop operates dedicated grey board and black paper production lines, supported by an experienced manufacturing and export team.",
    legacyBody2: "We also work closely with established Chinese paper mills, including APP, Sun Paper, Nine Dragons, Liansheng and Huatai, to source printing, packaging and specialty paper grades. From samples and custom specifications to quality documentation and export coordination, buyers work with one responsive team.",
    legacyVision: "To be the most reliable, transparent and sustainability-driven paper supply partner for businesses worldwide.",
    legacyStats: ["Countries served", "Paper grades", "Warehouse stock", "Years experience"],
    heroTitle: <>Paper expertise.<br /><em>Global relationships.</em></>,
    heroBody: "From Dongguan to the world's major paper and packaging markets, YOUNGSUN connects manufacturing capability, mill resources and export service in one dependable supply partnership.",
    explore: "Explore our exhibition record",
    contact: "Talk to our team",
    heroCaption: "EXPOGRAFICA Guadalajara 2026",
    stats: ["Years in paper", "Export countries", "Trade shows", "International markets"],
    storyTitle: "One partner from paper source to finished order.",
    storyBody: "YOUNGSUN Group has worked in the paper industry since 2002. We focus on grey board, black paper and specialty paper, while coordinating wider sourcing through long-term relationships with established Chinese mills.",
    storyBody2: "For overseas buyers, that means fewer handoffs: product matching, sample preparation, custom specifications, quality documentation and export coordination are handled by one experienced team.",
    storyLink: "Explore our materials",
    pillarsTitle: "Built around the way international buyers work",
    pillarsBody: "Clear specifications, real samples and responsive communication come before the order.",
    pillars: [
      ["Product & mill matching", "We compare application, GSM, thickness, surface and converting needs before recommending a grade."],
      ["Samples & quality evidence", "Buyers can review physical samples, technical data and available certification before production."],
      ["Export-ready coordination", "Custom cutting, packing, documentation and shipment planning are coordinated for overseas delivery."],
    ],
    expoTitle: "Our global exhibition footprint",
    expoBody: "Trade shows let buyers inspect paper, compare samples and discuss specifications face to face. These are verified invitations and photographs from YOUNGSUN exhibitions between 2023 and 2026.",
    recordTitle: "Exhibition record 2023-2026",
    recordBody: "Every record is connected to its original invitation and available on-site photographs.",
    event: "Event",
    date: "Date",
    booth: "Booth",
    market: "Market",
    actions: "Archive",
    invitation: "Invitation",
    photos: "Photos",
    invitationOnly: "Invitation only",
    modalInvitation: "Official invitation",
    modalPhotos: "On-site photographs",
    ctaTitle: "Meet YOUNGSUN at an upcoming exhibition",
    ctaBody: "Planning to attend a paper, printing or packaging trade show? Contact our team to arrange a meeting or ask us to prepare the paper grades you want to evaluate.",
    ctaContact: "Contact our team",
    ctaSamples: "Request samples",
  },
  es: {
    legacyLabel: "Sobre YOUNGSUN",
    legacyTitle: "Su socio papelero desde 2002",
    legacyBody: "YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) tiene su sede en Dongguan, provincia de Guangdong, a 50 km del puerto de Shenzhen. Nuestro taller de 20.000 m2 opera lineas dedicadas de carton gris y papel negro con un equipo experimentado de produccion y exportacion.",
    legacyBody2: "Tambien colaboramos con fabricantes chinos establecidos, entre ellos APP, Sun Paper, Nine Dragons, Liansheng y Huatai, para suministrar papeles de impresion, embalaje y especialidad. Desde muestras y especificaciones hasta documentacion de calidad y exportacion, el comprador trabaja con un solo equipo.",
    legacyVision: "Ser el socio de suministro de papel mas fiable, transparente y orientado a la sostenibilidad para empresas de todo el mundo.",
    legacyStats: ["Paises atendidos", "Tipos de papel", "Stock en almacen", "Anos de experiencia"],
    heroTitle: <>Experiencia en papel.<br /><em>Relaciones globales.</em></>,
    heroBody: "Desde Dongguan hasta los principales mercados mundiales de papel y embalaje, YOUNGSUN integra capacidad de suministro, recursos de fabricas y servicio de exportacion.",
    explore: "Ver nuestro historial de ferias",
    contact: "Hablar con el equipo",
    heroCaption: "EXPOGRAFICA Guadalajara 2026",
    stats: ["Anos en papel", "Paises de exportacion", "Ferias comerciales", "Mercados internacionales"],
    storyTitle: "Un solo socio desde el origen del papel hasta el pedido final.",
    storyBody: "YOUNGSUN Group trabaja en la industria papelera desde 2002. Nos enfocamos en carton gris, papel negro y papeles especiales, junto con una amplia red de fabricas chinas establecidas.",
    storyBody2: "Para compradores internacionales, esto significa menos intermediarios: seleccion de producto, muestras, especificaciones, documentos de calidad y coordinacion de exportacion con un solo equipo.",
    storyLink: "Explorar materiales",
    pillarsTitle: "Pensado para la forma de trabajar de los compradores internacionales",
    pillarsBody: "Especificaciones claras, muestras reales y comunicacion rapida antes del pedido.",
    pillars: [
      ["Seleccion de producto y fabrica", "Comparamos aplicacion, gramaje, espesor, superficie y conversion antes de recomendar un papel."],
      ["Muestras y evidencia de calidad", "Revise muestras fisicas, datos tecnicos y certificaciones disponibles antes de producir."],
      ["Coordinacion para exportacion", "Coordinamos corte, embalaje, documentos y planificacion del envio internacional."],
    ],
    expoTitle: "Nuestra presencia global en ferias",
    expoBody: "Las ferias permiten inspeccionar papel, comparar muestras y hablar de especificaciones en persona. Este archivo reune invitaciones y fotografias verificadas entre 2023 y 2026.",
    recordTitle: "Historial de ferias 2023-2026",
    recordBody: "Cada registro esta vinculado con su invitacion original y las fotografias disponibles.",
    event: "Evento",
    date: "Fecha",
    booth: "Stand",
    market: "Mercado",
    actions: "Archivo",
    invitation: "Invitacion",
    photos: "Fotos",
    invitationOnly: "Solo invitacion",
    modalInvitation: "Invitacion oficial",
    modalPhotos: "Fotografias del evento",
    ctaTitle: "Encuentre a YOUNGSUN en una proxima feria",
    ctaBody: "Si planea asistir a una feria de papel, impresion o embalaje, contacte con nuestro equipo para organizar una reunion o solicitar muestras para evaluar.",
    ctaContact: "Contactar al equipo",
    ctaSamples: "Solicitar muestras",
  },
};

function ExhibitionDialog({ event, mode, onClose }) {
  const { lang } = useLang();
  const text = copy[lang] || copy.en;
  const images = mode === "invitation" ? [event.invitation] : event.photos;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [event.id, mode]);

  useEffect(() => {
    const closeOnEscape = (keyboardEvent) => {
      if (keyboardEvent.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  const showPrevious = () => setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  const showNext = () => setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));

  return (
    <div className="about-dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="about-dialog" role="dialog" aria-modal="true" aria-label={`${event.name} ${mode}`} onMouseDown={(mouseEvent) => mouseEvent.stopPropagation()}>
        <header className="about-dialog-header">
          <div>
            <span>{mode === "invitation" ? text.modalInvitation : text.modalPhotos}</span>
            <h2>{event.name}</h2>
            <p><MapPin size={15} /> {event.city}, {event.country} <b>{event.dates}</b></p>
          </div>
          <button className="about-icon-button" type="button" onClick={onClose} aria-label="Close gallery"><X /></button>
        </header>

        <div className={`about-dialog-stage ${mode === "invitation" ? "is-invitation" : ""}`}>
          {images.length > 1 ? <button className="about-gallery-arrow previous" type="button" onClick={showPrevious} aria-label="Previous photograph"><ChevronLeft /></button> : null}
          <img src={images[activeIndex]} alt={`${event.name} ${mode === "invitation" ? "invitation" : `photograph ${activeIndex + 1}`}`} />
          {images.length > 1 ? <button className="about-gallery-arrow next" type="button" onClick={showNext} aria-label="Next photograph"><ChevronRight /></button> : null}
        </div>

        {images.length > 1 ? (
          <div className="about-dialog-thumbnails" aria-label="Gallery thumbnails">
            {images.map((image, index) => (
              <button className={index === activeIndex ? "is-active" : ""} type="button" onClick={() => setActiveIndex(index)} key={image} aria-label={`Show photograph ${index + 1}`}>
                <img src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function AnimatedCompanyMetric({ target, suffix, label, icon: Icon }) {
  const cardRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(target);
      return undefined;
    }

    let animationFrame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      observer.disconnect();
      setIsCounting(true);
      const startedAt = performance.now();
      const duration = target >= 1000 ? 1700 : 1300;

      const updateValue = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(target * eased));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateValue);
        } else {
          setIsCounting(false);
        }
      };

      animationFrame = requestAnimationFrame(updateValue);
    }, { threshold: 0.35 });

    observer.observe(card);
    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <div ref={cardRef} className={`about-legacy-stat ${isCounting ? "is-counting" : ""}`}>
      <Icon aria-hidden="true" />
      <strong>{displayValue.toLocaleString("en-US")}<span>{suffix}</span></strong>
      <small>{label}</small>
    </div>
  );
}

export default function About() {
  const { lang } = useLang();
  const text = copy[lang] || copy.en;
  const [dialog, setDialog] = useState(null);
  const closeDialog = () => setDialog(null);

  const legacyMetrics = [
    [60, "+", text.legacyStats[0], Globe2],
    [20, "+", text.legacyStats[1], FileText],
    [50000, "T", text.legacyStats[2], PackageCheck],
    [24, "+", text.legacyStats[3], CalendarDays],
  ];

  const pillarIcons = [Handshake, ShieldCheck, Ship];

  return (
    <main className="about-page">
      <PageMeta
        title="About YOUNGSUN PAPER | Global Paper Supply & Trade Shows"
        description="Meet YOUNGSUN PAPER, a Dongguan-based paper supplier serving international buyers since 2002. Explore our supply capabilities and verified exhibition archive from 2023 to 2026."
        path="/about"
      />

      <section className="about-legacy-banner" aria-label="YOUNGSUN paper production">
        <div className="about-legacy-banner-shade" />
      </section>

      <section className="about-legacy-summary">
        <div className="about-shell about-legacy-layout">
          <div className="about-legacy-copy">
            <span>{text.legacyLabel}</span>
            <h1>{text.legacyTitle}</h1>
            <p>{text.legacyBody}</p>
            <p>{text.legacyBody2}</p>
            <blockquote>{text.legacyVision}</blockquote>
          </div>

          <div className="about-legacy-stats" aria-label="YOUNGSUN company figures">
            {legacyMetrics.map(([value, suffix, label, Icon]) => (
              <AnimatedCompanyMetric target={value} suffix={suffix} label={label} icon={Icon} key={label} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-hero">
        <div className="about-shell about-hero-layout">
          <div className="about-hero-copy">
            <h2>{text.heroTitle}</h2>
            <p>{text.heroBody}</p>
            <div className="about-hero-actions">
              <a className="about-button primary" href="#exhibition-record">{text.explore}<ArrowRight /></a>
              <Link className="about-button secondary" to="/contact">{text.contact}</Link>
            </div>
          </div>

          <div className="about-hero-collage" aria-label="YOUNGSUN international exhibitions">
            <figure className="about-hero-photo main-photo">
              <img src={`${IMAGE_ROOT}/mexico-2026/photo-1.webp`} alt="YOUNGSUN team and visitors at EXPOGRAFICA Guadalajara 2026" />
              <figcaption>{text.heroCaption}</figcaption>
            </figure>
            <figure className="about-hero-photo upper-photo">
              <img src={`${IMAGE_ROOT}/drupa-2024/photo-1.webp`} alt="YOUNGSUN at drupa 2024 in Germany" />
            </figure>
            <figure className="about-hero-photo lower-photo">
              <img src={`${IMAGE_ROOT}/hong-kong-2023/photo-4.webp`} alt="YOUNGSUN booth at the Hong Kong printing and packaging fair" />
            </figure>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-shell about-story-layout">
          <figure className="about-story-image">
            <img src="/images/factory/factory-photo-1.jpg" alt="YOUNGSUN paper production team and factory equipment" loading="lazy" />
            <figcaption><span>Dongguan, China</span><b>Paper production and supply coordination since 2002</b></figcaption>
          </figure>
          <div className="about-story-copy">
            <h2>{text.storyTitle}</h2>
            <p>{text.storyBody}</p>
            <p>{text.storyBody2}</p>
            <Link className="about-text-link" to="/materials">{text.storyLink}<ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="about-pillars">
        <div className="about-shell">
          <div className="about-section-heading compact">
            <h2>{text.pillarsTitle}</h2>
            <p>{text.pillarsBody}</p>
          </div>
          <div className="about-pillar-grid">
            {text.pillars.map(([title, body], index) => {
              const Icon = pillarIcons[index];
              return (
                <article className="about-pillar" key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-exhibitions">
        <div className="about-shell">
          <div className="about-section-heading exhibition-heading">
            <div>
              <span>EXHIBITIONS & TRADE SHOWS</span>
              <h2>{text.expoTitle}</h2>
            </div>
            <p>{text.expoBody}</p>
          </div>

          <div className="about-featured-exhibitions">
            <figure className="about-feature-photo large">
              <img src={`${IMAGE_ROOT}/indonesia-2024/photo-1.webp`} alt="YOUNGSUN team and visitors at ALLPRINT Indonesia 2024" loading="lazy" />
              <figcaption><b>ALLPRINT Indonesia 2024</b><span>Jakarta, Indonesia</span></figcaption>
            </figure>
            <figure className="about-feature-photo small top">
              <img src={`${IMAGE_ROOT}/bangladesh-2026/photo-1.webp`} alt="Paper sourcing discussion at GAPEXPO Bangladesh 2026" loading="lazy" />
              <figcaption><b>GAPEXPO 2026</b><span>Buyer meetings in Dhaka</span></figcaption>
            </figure>
            <figure className="about-feature-photo small bottom">
              <img src={`${IMAGE_ROOT}/mexico-2024/photo-1.webp`} alt="YOUNGSUN booth at EXPOGRAFICA Mexico 2024" loading="lazy" />
              <figcaption><b>EXPOGRAFICA 2024</b><span>Mexico City, Mexico</span></figcaption>
            </figure>
          </div>

          <div className="about-record-heading" id="exhibition-record">
            <div><h2>{text.recordTitle}</h2><p>{text.recordBody}</p></div>
            <div className="about-record-proof"><PackageCheck /><span>Verified invitations<br />and on-site archives</span></div>
          </div>

          <div className="about-exhibition-table">
            <div className="about-exhibition-table-head" aria-hidden="true">
              <span>{text.event}</span><span>{text.date}</span><span>{text.booth}</span><span>{text.market}</span><span>{text.actions}</span>
            </div>
            {exhibitions.map((event) => (
              <article className="about-exhibition-row" key={event.id}>
                <div className="about-event-identity">
                  <img src={event.cover} alt="" loading="lazy" />
                  <div><span>{event.year}</span><h3>{event.name}</h3><p><MapPin />{event.city}</p></div>
                </div>
                <div className="about-event-field"><CalendarDays /><span><small>{text.date}</small>{event.dates}</span></div>
                <div className="about-event-field"><PackageCheck /><span><small>{text.booth}</small>{event.booth}</span></div>
                <div className="about-event-field"><Globe2 /><span><small>{text.market}</small>{event.country}</span></div>
                <div className="about-event-actions">
                  <button type="button" onClick={() => setDialog({ event, mode: "invitation" })}><FileText />{text.invitation}</button>
                  {event.photos.length > 0 ? (
                    <button type="button" onClick={() => setDialog({ event, mode: "photos" })}><Images />{text.photos}</button>
                  ) : (
                    <span className="about-invitation-only">{text.invitationOnly}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-contact-band">
        <div className="about-shell about-contact-layout">
          <div className="about-contact-image"><img src={`${IMAGE_ROOT}/drupa-2024/photo-2.webp`} alt="YOUNGSUN meeting international visitors at a trade show" loading="lazy" /></div>
          <div className="about-contact-copy">
            <UsersRound aria-hidden="true" />
            <h2>{text.ctaTitle}</h2>
            <p>{text.ctaBody}</p>
          </div>
          <div className="about-contact-actions">
            <Link className="about-button primary" to="/contact">{text.ctaContact}<ArrowRight /></Link>
            <Link className="about-button secondary" to="/contact">{text.ctaSamples}</Link>
          </div>
        </div>
      </section>

      {dialog ? <ExhibitionDialog event={dialog.event} mode={dialog.mode} onClose={closeDialog} /> : null}
    </main>
  );
}

import { createContext, useContext, useState, useEffect } from "react";

const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("ys-lang") || "en"; } catch { return "en"; }
  });

  useEffect(() => {
    try { localStorage.setItem("ys-lang", lang); } catch {}
    document.documentElement.lang = lang === "es" ? "es" : "en";
  }, [lang]);

  const nextLang = { en: "es", es: "en" };
  const langLabel = { en: "ES", es: "EN" };
  const toggleLang = () => setLang((l) => nextLang[l] || "en");

  return (
    <LangContext.Provider value={{ lang, toggleLang, langLabel, t: (key) => { const entry = translations[key]; if (!entry) return key; return entry[lang] || entry.en || key; } }}>
      {children}
    </LangContext.Provider>
  );
}

const translations = {
  // Nav
  "Home": { en: "Home", es: "Inicio"},
  "Products": { en: "Products", es: "Productos"},
  "Processing": { en: "Processing"},
  "Why Us": { en: "Why Us", es: "Por Qué Nosotros"},
  "Contact": { en: "Contact", es: "Contacto"},
  // Hero
  "Sustainable Paper, Global Reach": { en: "Sustainable Paper, Global Reach", es: "Papel Sostenible, Alcance Global"},
  "Premium Paper & Board": { en: "Premium Paper & Board", es: "Papel y Cartón Premium"},
  "& Board Solutions": { en: "& Board Solutions", es: "y Soluciones en Cartón"},
  "Explore Products": { en: "Explore Products", es: "Explorar Productos"},
  "Get a Quote": { en: "Get a Quote", es: "Solicitar Cotización"},
  // Hero subtitle
  "hero_subtitle": {
    en: "20+ years manufacturing and exporting grey board, black cardboard, and specialty paper. Strategic partnerships with APP, Sun Paper, Nine Dragons, Liansheng, and Huatai.", es: "Más de 20 años fabricando y exportando cartón gris, cartulina negra y papel especial. Alianzas estratégicas con APP, Sun Paper, Nine Dragons, Liansheng y Huatai."},
  // Category Overview
  "View Products": { en: "View Products", es: "Ver Productos"},
  "View Products →": { en: "View Products →"},
  // Category taglines
  "Durable structural packaging — from rigid boxes to folding cartons.": {
    en: "Durable structural packaging — from rigid boxes to folding cartons.", es: "Embalaje estructural duradero — desde cajas rígidas hasta estuches plegables."},
  "High-performance surfaces for premium printing and publishing.": {
    en: "High-performance surfaces for premium printing and publishing.", es: "Superficies de alto rendimiento para impresión y publicación premium."},
  "Curated textures for high-end luxury branding.": {
    en: "Curated textures for high-end luxury branding.", es: "Texturas seleccionadas para marcas de lujo de alta gama."},
  "Safe, food-grade solutions for culinary and beverage applications.": {
    en: "Safe, food-grade solutions for culinary and beverage applications.", es: "Soluciones seguras de grado alimenticio para uso culinario y bebidas."},
  // Sections
  "What We Supply": { en: "What We Supply", es: "Qué Suministramos"},
  "Paper & Board That Performs": { en: "Paper & Board That Performs", es: "Papel y Cartón de Alto Rendimiento"},
  "About YOUNGSUN": { en: "About YOUNGSUN", es: "Sobre YOUNGSUN"},
  "Your Paper Supply Partner Since 2002": { en: "Your Paper Supply Partner Since 2002", es: "Su Socio Papelero Desde 2002"},
  "The YOUNGSUN Difference": { en: "The YOUNGSUN Difference", es: "La Diferencia YOUNGSUN"},
  "Why Global Partners Choose Us": { en: "Why Global Partners Choose Us", es: "Por Qué los Socios Globales Nos Eligen"},
  "Our Commitment": { en: "Our Commitment", es: "Nuestro Compromiso"},
  "Sustainability Is Not Optional": { en: "Sustainability Is Not Optional", es: "La Sostenibilidad No Es Opcional"},
  "Worldwide Presence": { en: "Worldwide Presence", es: "Presencia Mundial"},
  "Global Reach, Personal Service": { en: "Global Reach, Personal Service", es: "Alcance Global, Servicio Personal"},
  "Client Voices": { en: "Client Voices", es: "Voces de Clientes"},
  "Trusted by Industry Leaders": { en: "Trusted by Industry Leaders", es: "Confiado por Líderes de la Industria"},
  "Get In Touch": { en: "Get In Touch", es: "Contáctenos"},
  "Let's Talk Paper": { en: "Let's Talk Paper", es: "Hablemos de Papel"},
  "Frequently Asked Questions": { en: "Frequently Asked Questions", es: "Preguntas Frecuentes"},
  "Questions About Our Paper Products and Services": { en: "Questions About Our Paper Products and Services", es: "Preguntas Sobre Nuestros Productos y Servicios"},
  // Section descriptions
  "about_desc": {
    en: "YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) is headquartered in Dongguan City, Guangdong Province — just 50km from Shenzhen port. Our 20,000m² workshop houses 2 grey board machines and 2 black paper machines, operated by a team of 220+ skilled workers. With a monthly production capacity of 20,000 tons and 50,000 tons of warehouse stock, we ensure fast and reliable delivery to clients worldwide.", es: "YOUNGSUN PAPER tiene su sede en Dongguan, provincia de Guangdong, a solo 50 km del puerto de Shenzhen. Nuestro taller de 20.000 m² alberga 2 máquinas de cartón gris y 2 de cartulina negra, operadas por más de 220 trabajadores. Con capacidad mensual de 20.000 toneladas y 50.000 toneladas de stock, garantizamos entregas rápidas a clientes en todo el mundo."},
  "about_desc2": {
    en: "We partner with China's premier paper mills — including APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, and IPSUN — to source the full spectrum of printing, packaging, and specialty paper grades. Our five sales teams (50+ specialists) serve customers across 60+ countries, exporting 36,000+ tons annually. Every product is FSC and SGS certified. Custom size, weight, and labeling available with free samples.", es: "Colaboramos con las principales fábricas de China — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST e IPSUN — para ofrecer la gama completa de papeles. Cinco equipos de ventas con más de 50 especialistas atienden a clientes en más de 60 países, exportando más de 36.000 toneladas al año. Todos los productos cuentan con certificación FSC y SGS."},
  "whyus_desc": {
    en: "It's not just about paper — it's about reliability, expertise, and a partnership that makes your supply chain stronger.", es: "No se trata solo de papel — se trata de fiabilidad, experiencia y una asociación que fortalece su cadena de suministro."},
  "sustainability_subtitle": {
    en: "Every paper product we supply comes with a chain-of-custody story. We believe transparency — not marketing — is what earns trust.", es: "Cada producto de papel que suministramos viene con una historia de cadena de custodia. Creemos que la transparencia — no el marketing — es lo que genera confianza."},
  "global_subtitle": {
    en: "From our base in China, we serve converters, printers, manufacturers, and brands across six continents. Every client has a dedicated account manager who knows their specifications, preferences, and schedule.", es: "Desde nuestra base en China, servimos a transformadores, impresores, fabricantes y marcas en seis continentes. Cada cliente tiene un gestor de cuenta dedicado que conoce sus especificaciones."},
  "testimonials_desc": {
    en: "What our partners say about working with YOUNGSUN PAPER.", es: "Lo que dicen nuestros socios sobre trabajar con YOUNGSUN PAPER."},
  "contact_subtitle": {
    en: "Tell us what you need — product, specification, volume, and destination. We'll respond with a competitive quote, lead time, and logistics plan within 24 hours.", es: "Cuéntenos qué necesita — producto, especificación, volumen y destino. Responderemos con una cotización competitiva, plazo de entrega y plan logístico en 24 horas."},
  "faq_desc": {
    en: "Quick answers to the most common questions from international buyers, converters, and procurement teams.", es: "Respuestas rápidas a las preguntas más comunes de compradores internacionales, transformadores y equipos de compras."},
  // Product section
  "four_cat_desc": {
    en: "Four product categories. 20+ grades. One reliable supply partner. Select a category to explore specifications, applications, and certifications.", es: "Cuatro categorías de productos. Más de 20 grados. Un socio de suministro confiable. Seleccione una categoría para explorar especificaciones, aplicaciones y certificaciones."},
  // Stats
  "Export Countries": { en: "Export Countries", es: "Países de Exportación"},
  "Paper Grades": { en: "Paper Grades", es: "Tipos de Papel"},
  "Warehouse Stock": { en: "Warehouse Stock", es: "Stock en Almacén"},
  "Annual Export": { en: "Annual Export", es: "Exportación Anual"},
  "Countries Served": { en: "Countries Served", es: "Países Atendidos"},
  "Years Experience": { en: "Years Experience", es: "Años de Experiencia"},
  // Form
  "Send Us a Message": { en: "Send Us a Message", es: "Envíenos un Mensaje"},
  "Your Name *": { en: "Your Name *", es: "Su Nombre *"},
  "Email Address *": { en: "Email Address *", es: "Correo Electrónico *"},
  "Product Interest": { en: "Product Interest", es: "Producto de Interés"},
  "Select a product category": { en: "Select a product category", es: "Seleccione una categoría"},
  "Other / Not Sure": { en: "Other / Not Sure", es: "Otro / No Estoy Seguro"},
  "Your Message *": { en: "Your Message *", es: "Su Mensaje *"},
  "Send Inquiry": { en: "Send Inquiry", es: "Enviar Consulta"},
  "✓ Message Sent!": { en: "✓ Message Sent!"},
  // Footer
  "Product Categories": { en: "Product Categories", es: "Categorías de Productos"},
  "Company": { en: "Company", es: "Empresa"},
  "Resources": { en: "Resources", es: "Recursos"},
  "About Us": { en: "About Us", es: "Sobre Nosotros"},
  "Sustainability": { en: "Sustainability", es: "Sostenibilidad"},
  "Global Reach": { en: "Global Reach", es: "Alcance Global"},
  "Product Catalog": { en: "Product Catalog", es: "Catálogo de Productos"},
  "Request a Quote": { en: "Request a Quote", es: "Solicitar Cotización"},
  "Quality Certifications": { en: "Quality Certifications", es: "Certificaciones de Calidad"},
  "Logistics & Shipping": { en: "Logistics & Shipping", es: "Logística y Envío"},
  "Technical Specs": { en: "Technical Specs", es: "Especificaciones Técnicas"},
  // Why Us items
  "Diversified Product Range": { en: "Diversified Product Range"},
  "Certified Quality — FSC & SGS": { en: "Certified Quality — FSC & SGS"},
  "Strong Production Capacity": { en: "Strong Production Capacity"},
  "Fast & Timely Delivery": { en: "Fast & Timely Delivery"},
  "Customized Solutions": { en: "Customized Solutions"},
  "Global Export Expertise": { en: "Global Export Expertise"},
  // Eco badges
  "FSC® Certified": { en: "FSC® Certified"},
  "SGS Certified": { en: "SGS Certified"},
  "ISO 14001": { en: "ISO 14001"},
  "20+ Years Experience": { en: "20+ Years Experience"},
  "60+ Export Countries": { en: "60+ Export Countries"},
  "PFAS-Free": { en: "PFAS-Free"},
  "Carbon-Conscious": { en: "Carbon-Conscious"},

  // Why Us descriptions
  "whyus_desc": {
    en: "It's not just about paper — it's about reliability, expertise, and a partnership that makes your supply chain stronger.", es: "No se trata solo de papel — se trata de fiabilidad, experiencia y una asociación que fortalece su cadena de suministro."},
  "whyus_1_desc": { en: "We supply a comprehensive range of premium printing and packaging paper and paperboard — covering all four categories: Package Board, Culture Paper, Fancy Paper, and Food Packaging Paper. One supplier, multiple grades, simplified procurement.", es: "Suministramos una gama completa de papel y cartón premium para impresión y embalaje — cubriendo las cuatro categorías: Package Board, Culture Paper, Fancy Paper y Food Packaging Paper. Un solo proveedor, múltiples grados, adquisición simplificada."},
  "whyus_2_desc": { en: "All products are FSC and SGS certified. Every shipment is inspected for grammage, brightness, moisture, caliper, and surface quality against agreed specifications. Consistent quality, batch after batch.", es: "Todos los productos cuentan con certificación FSC y SGS. Cada envío se inspecciona en gramaje, blancura, humedad, calibre y calidad superficial según las especificaciones acordadas. Calidad consistente, lote tras lote."},
  "whyus_3_desc": { en: "Our 20,000m² workshop runs 2 grey board machines and 2 black paper machines, delivering 20,000 tons monthly. Partner mills — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, IPSUN — provide additional capacity and grade coverage.", es: "Nuestro taller de 20.000 m² opera 2 máquinas de cartón gris y 2 de cartulina negra, produciendo 20.000 toneladas mensuales. Las fábricas asociadas — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, IPSUN — proporcionan capacidad adicional y cobertura de grados."},
  "whyus_4_desc": { en: "50,000 tons of permanent warehouse stock enables rapid dispatch. Located 50km from Shenzhen port, we load containers efficiently. Five sales teams (50+ specialists) provide proactive delivery tracking and after-sales support.", es: "50.000 toneladas de stock permanente en almacén permiten un despacho rápido. Ubicados a 50 km del puerto de Shenzhen, cargamos contenedores eficientemente. Cinco equipos de ventas (más de 50 especialistas) brindan seguimiento proactivo de entregas y soporte postventa."},
  "whyus_5_desc": { en: "We provide custom size, weight, and labeling solutions with free samples before bulk order. Need specific slitting, sheeting, embossing, or packaging? Our converting partners deliver finished product to your exact specifications.", es: "Ofrecemos soluciones personalizadas de tamaño, gramaje y etiquetado con muestras gratuitas antes del pedido. ¿Necesita corte, laminado, gofrado o embalaje específico? Nuestros socios transformadores entregan el producto terminado según sus especificaciones exactas."},
  "whyus_6_desc": { en: "36,000+ tons exported annually to 60+ countries. We handle FSC chain-of-custody, certificates of origin, fumigation, packing lists, and bills of lading — full documentation for seamless customs clearance at any destination port.", es: "Más de 36.000 toneladas exportadas anualmente a más de 60 países. Gestionamos la cadena de custodia FSC, certificados de origen, fumigación, listas de empaque y conocimientos de embarque — documentación completa para un despacho aduanero sin problemas en cualquier puerto de destino."},

  // Sustainability
  "sustainability_subtitle": {
    en: "Every paper product we supply comes with a chain-of-custody story. We believe transparency — not marketing — is what earns trust. That means clear certification, honest sourcing, and measurable environmental accountability.", es: "Cada producto de papel que suministramos viene con una historia de cadena de custodia. Creemos que la transparencia — no el marketing — es lo que genera confianza. Eso significa certificación clara, abastecimiento honesto y responsabilidad ambiental medible."},
  "sus_1_title": { en: "Certified Sources", es: "Fuentes Certificadas"},
  "sus_1_desc": { en: "Primary supply chain is FSC or PEFC certified. Chain-of-custody documentation provided with every order.", es: "La cadena de suministro principal cuenta con certificación FSC o PEFC. Se proporciona documentación de cadena de custodia con cada pedido."},
  "sus_2_title": { en: "Recycled Content", es: "Contenido Reciclado"},
  "sus_2_desc": { en: "Post-consumer and post-industrial recycled fiber options available across all four product categories.", es: "Opciones de fibra reciclada post-consumo y post-industrial disponibles en las cuatro categorías de productos."},
  "sus_3_title": { en: "PFAS-Free", es: "Libre de PFAS"},
  "sus_3_desc": { en: "All food-contact papers are PFAS-free — grease resistance is achieved through fiber engineering, not chemical additives.", es: "Todos los papeles de contacto alimentario son libres de PFAS — la resistencia a la grasa se logra mediante ingeniería de fibra, no aditivos químicos."},
  "sus_4_title": { en: "Low-Carbon Mills", es: "Fábricas Bajas en Carbono"},
  "sus_4_desc": { en: "Partnering with mills that use green energy, biogas recovery, and closed-loop water systems to minimize environmental footprint.", es: "Colaboramos con fábricas que utilizan energía verde, recuperación de biogás y sistemas de agua de ciclo cerrado para minimizar la huella ambiental."},
  "sus_5_title": { en: "Full Traceability", es: "Trazabilidad Completa"},
  "sus_5_desc": { en: "From forest or recovery facility to final delivery — traceable chain of custody with auditable documentation.", es: "Desde el bosque o la instalación de recuperación hasta la entrega final — cadena de custodia trazable con documentación auditable."},
  "sus_6_title": { en: "Carbon-Conscious Logistics", es: "Logística Baja en Carbono"},
  "sus_6_desc": { en: "Route optimization, consolidated shipments, and sea freight preference to reduce transport-related emissions.", es: "Optimización de rutas, envíos consolidados y preferencia por transporte marítimo para reducir las emisiones del transporte."},

  // Global Reach
  "global_subtitle": {
    en: "From our base in China, we serve converters, printers, manufacturers, and brands across six continents. Every client has a dedicated account manager who knows their specifications, preferences, and schedule.", es: "Desde nuestra base en China, servimos a transformadores, impresores, fabricantes y marcas en seis continentes. Cada cliente tiene un gestor de cuenta dedicado que conoce sus especificaciones."},
  "region_1_name": { en: "Asia", es: "Asia"},
  "region_1_detail": { en: "Core supply base & largest volume market", es: "Base de suministro principal y mercado de mayor volumen"},
  "region_2_name": { en: "Europe", es: "Europa"},
  "region_2_detail": { en: "Key export market with growing demand", es: "Mercado de exportación clave con demanda creciente"},
  "region_3_name": { en: "Americas", es: "Américas"},
  "region_3_detail": { en: "Expanding partnership network", es: "Red de alianzas en expansión"},
  "region_4_name": { en: "Africa & Middle East", es: "África y Medio Oriente"},
  "region_4_detail": { en: "High-growth emerging markets", es: "Mercados emergentes de alto crecimiento"},
  "region_5_name": { en: "Oceania", es: "Oceanía"},
  "region_5_detail": { en: "Established trade routes", es: "Rutas comerciales establecidas"},

  // Testimonials
  "testimonials_desc": {
    en: "What our partners say about working with YOUNGSUN PAPER.", es: "Lo que dicen nuestros socios sobre trabajar con YOUNGSUN PAPER."},
  "testimonial_1_quote": { en: "YOUNGSUN's consistency in kraft paper quality and delivery has made them our go-to supplier for over five years. Their technical team understands our converting requirements and always delivers to spec."},
  "testimonial_1_author": { en: "Purchasing Director"},
  "testimonial_2_quote": { en: "We switched our coated paper sourcing to YOUNGSUN and immediately reduced our per-ton cost while maintaining print quality. Their documentation and logistics handling makes import seamless."},
  "testimonial_2_author": { en: "CEO"},
  "testimonial_3_quote": { en: "Finding a supplier who genuinely understands specialty paper — grades, finishes, and converting behavior — was difficult until we found YOUNGSUN. Their fancy paper range is exceptional."},
  "testimonial_3_author": { en: "Creative Director"},

  // Contact
  "contact_subtitle": {
    en: "Tell us what you need — product, specification, volume, and destination. We'll respond with a competitive quote, lead time, and logistics plan within 24 hours.", es: "Cuéntenos qué necesita — producto, especificación, volumen y destino. Responderemos con una cotización competitiva, plazo de entrega y plan logístico en 24 horas."},
  "Send Us a Message": { en: "Send Us a Message", es: "Envíenos un Mensaje"},
  "Your Name *": { en: "Your Name *", es: "Su Nombre *"},
  "Email Address *": { en: "Email Address *", es: "Correo Electrónico *"},
  "Product Interest": { en: "Product Interest", es: "Producto de Interés"},
  "Select a product category": { en: "Select a product category", es: "Seleccione una categoría"},
  "Other / Not Sure": { en: "Other / Not Sure", es: "Otro / No Estoy Seguro"},
  "Your Message *": { en: "Your Message *", es: "Su Mensaje *"},
  "Send Inquiry": { en: "Send Inquiry", es: "Enviar Consulta"},
  "✓ Message Sent!": { en: "✓ Message Sent!"},
  "placeholder_msg": { en: "Tell us about your paper requirements, volume, target specifications, or any questions..."},

  // FAQ
  "faq_desc": { en: "Quick answers to the most common questions from international buyers, converters, and procurement teams."},
  "faq_q1": { en: "What paper products does YOUNGSUN PAPER supply?"},
  "faq_a1": { en: "YOUNGSUN PAPER supplies four categories of paper and board: Package Board, Culture Paper, Fancy Paper, and Food Packaging Paper — covering grey board, black paper, kraft paper, coated paper, specialty paper, and more. All FSC and SGS certified."},
  "faq_q2": { en: "Where is YOUNGSUN PAPER located and how fast can you deliver?"},
  "faq_a2": { en: "Headquartered in Dongguan, Guangdong — 50km from Shenzhen port. 50,000 tons warehouse stock. Container loading typically within 7-14 days of order confirmation."},
  "faq_q3": { en: "What certifications do your paper products have?"},
  "faq_a3": { en: "All products are FSC and SGS certified. Food-contact grades are FDA and EU 1935/2004 compliant. PFAS-free certification available. Full documentation provided with every shipment."},
  "faq_q4": { en: "Can you customize paper size, weight, or packaging?"},
  "faq_a4": { en: "Yes. Custom slitting, sheeting, weight within range, labeling, and packaging. Free samples before bulk order. Converting partners offer embossing, die-cutting, printing, and lamination."},
  "faq_q5": { en: "What is your minimum order quantity and how do I get a quote?"},
  "faq_a5": { en: "Typically one 20-foot container (20-25 tons). Send specifications to Alice@yspaper.com or WhatsApp +86 13713459656. We respond within 24 hours."},
  "faq_q6": { en: "Do you supply food-grade paper for direct food contact?"},
  "faq_a6": { en: "Yes. Cup paper, greaseproof paper (PFAS-free), and silicone coated paper — all FDA and EU compliant. Certification provided with every shipment."},
  "faq_q7": { en: "Which countries do you export to?"},
  "faq_a7": { en: "60+ countries across Asia (25+), Europe (18+), Americas (12+), Africa, Middle East, and Oceania. Full export documentation handled."},
  "faq_q8": { en: "What paper mills do you partner with?"},
  "faq_a8": { en: "APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, and IPSUN. Our own facility has 2 grey board and 2 black paper machines with 20,000 tons monthly capacity."},

  // Footer
  "Product Categories": { en: "Product Categories", es: "Categorías de Productos"},
  "Company": { en: "Company", es: "Empresa"},
  "Resources": { en: "Resources", es: "Recursos"},
  "Package Board": { en: "Package Board", es: "Cartón para Embalaje"},
  "Culture Paper": { en: "Culture Paper", es: "Papel Cultural"},
  "Fancy Paper": { en: "Fancy Paper", es: "Papel de Fantasía"},
  "Food Packaging Paper": { en: "Food Packaging Paper", es: "Papel para Envases Alimentarios"},
  "Processing Services": { en: "Processing Services"},
  "About Us": { en: "About Us", es: "Sobre Nosotros"},
  "Why Choose Us": { en: "Why Choose Us", es: "Por Qué Elegirnos"},
  "Sustainability": { en: "Sustainability", es: "Sostenibilidad"},
  "Global Reach": { en: "Global Reach", es: "Alcance Global"},
  "Product Catalog": { en: "Product Catalog", es: "Catálogo de Productos"},
  "Request a Quote": { en: "Request a Quote", es: "Solicitar Cotización"},
  "Quality Certifications": { en: "Quality Certifications", es: "Certificaciones de Calidad"},
  "Logistics & Shipping": { en: "Logistics & Shipping", es: "Logística y Envío"},
  "Technical Specs": { en: "Technical Specs", es: "Especificaciones Técnicas"},

  // About stats
  "Countries Served": { en: "Countries Served", es: "Países Atendidos"},
  "Years Experience": { en: "Years Experience", es: "Años de Experiencia"},
  "Annual Export": { en: "Annual Export", es: "Exportación Anual"},
  "Warehouse Stock": { en: "Warehouse Stock", es: "Stock en Almacén"},

  // Vision
  "vision": { en: "To be the most reliable, transparent, and sustainability-driven paper supply partner for businesses worldwide."},

  // Products section
  "four_cat_desc": { en: "Four product categories. 20+ grades. One reliable supply partner. Select a category to explore specifications, applications, and certifications."},
  "Request Quote": { en: "Request Quote"},
  "Full Product Description": { en: "Full Product Description", es: "Descripción Completa"},
  "Complete Specifications": { en: "Complete Specifications", es: "Especificaciones Completas"},
  "All Applications": { en: "All Applications", es: "Todas las Aplicaciones"},
  "Certifications": { en: "Certifications", es: "Certificaciones"},

  // Category summaries (product tab descriptions)
  "cat_summary_package-board": {
    en: "Your comprehensive source for durable structural packaging. Our extensive range covers Grey Board, Black Cardboard, Folding Box Board (FBB), C2S Art Board, Kraft Paper, and Duplex Board to meet all your rigid box and container needs.", es: "Su fuente integral para embalaje estructural duradero. Nuestra amplia gama cubre cartón gris, cartulina negra, FBB, cartón arte C2S, papel kraft y cartón dúplex para todas sus necesidades de cajas rígidas y contenedores."},
  "cat_summary_culture-paper": {
    en: "We supply Woodfree Paper, Color Offset Paper, LWC Paper, and NCR Paper, ensuring crisp, consistent results for your brochures, books, and professional stationery.", es: "Suministramos papel woodfree, papel offset de color, papel LWC y papel NCR, garantizando resultados nítidos y consistentes para sus folletos, libros y papelería profesional."},
  "cat_summary_fancy-paper": {
    en: "Explore our specialized collection, including Soft Touch, Leather, Pearlescent, and Embossed papers, as well as dedicated Label papers for distinctive, premium design projects.", es: "Explore nuestra colección especializada, que incluye papeles soft touch, cuero, perlados y gofrados, así como papeles para etiquetas para proyectos de diseño premium distintivos."},
  "cat_summary_food-packaging": {
    en: "Our selection features Cup Paper, Greaseproof Paper, and Silicone Coated Paper, specifically engineered for hygiene, moisture resistance, and reliable food safety.", es: "Nuestra selección incluye papel para vasos, papel antigrasa y papel siliconado, diseñados específicamente para higiene, resistencia a la humedad y seguridad alimentaria confiable."},
  "All Products": { en: "All Products", es: "Todos los Productos" }};

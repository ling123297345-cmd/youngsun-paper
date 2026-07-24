// ============================================================
// YOUNGSUN PAPER — Processing Capabilities Data
// Value-added services for paper & board converting
// Bilingual EN/ES
// ============================================================

export const processingServices = [
  {
    id: "slitting-rewinding",
    title: { en: "Slitting & Rewinding", es: "Corte y Rebobinado" },
    icon: "✂️",
    image: "/images/processing/processing-slitting-cutting.png",
    heroImage: "/images/processing/process-slitting-line-01.png",
    tagline: {
      en: "Precision slitting to your exact width specifications — from master rolls to finished reels.",
      es: "Corte de precisión a sus especificaciones exactas de ancho — desde bobinas maestras hasta carretes terminados."
    },
    overview: {
      en: "Our slitting and rewinding service converts master rolls (up to 2,400mm width) into finished reels at your exact specified width and diameter. We maintain tight tolerances (±0.5mm on width) and consistent rewinding tension to ensure your converting lines run smoothly with minimal waste.",
      es: "Nuestro servicio de corte y rebobinado convierte bobinas maestras (hasta 2,400mm de ancho) en carretes terminados a su ancho y diámetro exactos. Mantenemos tolerancias ajustadas (±0.5mm en ancho) y tensión de rebobinado consistente."
    },
    capabilities: [
      { en: "Max master roll width: 2,400mm", es: "Ancho máx. bobina maestra: 2,400mm" },
      { en: "Min slit width: 15mm", es: "Ancho mín. corte: 15mm" },
      { en: "Width tolerance: ±0.5mm", es: "Tolerancia ancho: ±0.5mm" },
      { en: "Max roll diameter: 1,200mm", es: "Diámetro máx. bobina: 1,200mm" },
      { en: "Core sizes: 3\", 6\", 12\" or custom", es: "Tamaños mandril: 3\", 6\", 12\" o personalizado" },
      { en: "Applicable grades: All paper & board", es: "Grados aplicables: Todo papel y cartón" }
    ],
    applications: [
      { en: "Converting master rolls to press-ready reels", es: "Conversión bobinas maestras a carretes listos para prensa" },
      { en: "Custom slitting for bag-making machines", es: "Corte personalizado para máquinas de bolsas" },
      { en: "Narrow-web flexo press supply", es: "Suministro para prensas flexo de banda estrecha" },
      { en: "Label stock preparation", es: "Preparación de stock para etiquetas" }
    ],
    leadTime: { en: "3–5 working days", es: "3–5 días hábiles" },
    moq: { en: "500 kg per width", es: "500 kg por ancho" }
  },
  {
    id: "die-cutting",
    title: { en: "Die Cutting & Punching", es: "Troquelado y Punzonado" },
    icon: "🔲",
    image: "/images/processing/processing-die-cutting-punching.png",
    heroImage: "/images/processing/process-die-cutting-line-01.png",
    tagline: {
      en: "Custom die-cut shapes for packaging inserts, hang tags, and specialty components.",
      es: "Formas troqueladas personalizadas para insertos de embalaje, etiquetas colgantes y componentes especiales."
    },
    overview: {
      en: "Our die cutting service transforms sheet and roll stock into custom-shaped components using flat-bed and rotary die cutting equipment. From simple rectangles to complex curves, we deliver clean edges and consistent dimensions for packaging inserts, hang tags, game components, and industrial parts.",
      es: "Nuestro servicio de troquelado transforma material en hojas y bobinas en componentes de formas personalizadas usando equipos de troquelado plano y rotativo."
    },
    capabilities: [
      { en: "Flat-bed die cutting: up to 1,200×900mm", es: "Troquelado plano: hasta 1,200×900mm" },
      { en: "Rotary die cutting: up to 600mm width", es: "Troquelado rotativo: hasta 600mm ancho" },
      { en: "Material thickness: 0.1mm–3.0mm", es: "Espesor material: 0.1mm–3.0mm" },
      { en: "Custom die fabrication available", es: "Fabricación de troqueles personalizados disponible" },
      { en: "Applicable grades: Paper, board, laminated sheets", es: "Grados aplicables: Papel, cartón, láminas laminadas" }
    ],
    applications: [
      { en: "Packaging inserts and dividers", es: "Insertos y divisores de embalaje" },
      { en: "Hang tags and swing tickets", es: "Etiquetas colgantes" },
      { en: "Greeting cards and shaped stationery", es: "Tarjetas de felicitación y papelería con forma" },
      { en: "Gaskets and industrial components", es: "Juntas y componentes industriales" }
    ],
    leadTime: { en: "5–7 working days (incl. die fabrication)", es: "5–7 días hábiles (incl. fabricación troquel)" },
    moq: { en: "1,000 pieces per design", es: "1,000 piezas por diseño" }
  },
  {
    id: "lamination-coating",
    title: { en: "Lamination & Coating", es: "Laminación y Recubrimiento" },
    icon: "🛡️",
    image: "/images/processing/processing-lamination-finishing.png",
    heroImage: "/images/processing/process-lamination-coating-line-01.png",
    tagline: {
      en: "Protective and decorative surface treatments — from gloss lamination to soft-touch coating.",
      es: "Tratamientos superficiales protectores y decorativos — desde laminación brillante hasta recubrimiento soft-touch."
    },
    overview: {
      en: "Our lamination and coating services add functional and aesthetic value to paper and board surfaces. We offer thermal lamination (gloss, matt, soft-touch), UV coating (gloss, matt, spot), and aqueous coating. These treatments protect against moisture, scuffing, and handling while enhancing print appearance and tactile quality.",
      es: "Nuestros servicios de laminación y recubrimiento añaden valor funcional y estético a superficies de papel y cartón. Ofrecemos laminación térmica (brillo, mate, soft-touch), recubrimiento UV (brillo, mate, puntual) y recubrimiento acuoso."
    },
    capabilities: [
      { en: "Thermal lamination: gloss, matt, soft-touch", es: "Laminación térmica: brillo, mate, soft-touch" },
      { en: "UV coating: full-surface or spot", es: "Recubrimiento UV: superficie completa o puntual" },
      { en: "Aqueous coating: protective matt/gloss", es: "Recubrimiento acuoso: protección mate/brillo" },
      { en: "Max sheet size: 1,200×900mm", es: "Tamaño máx. hoja: 1,200×900mm" },
      { en: "Film thickness: 25–250 micron", es: "Espesor película: 25–250 micras" },
      { en: "PE coating: single or double side", es: "Recubrimiento PE: una o dos caras" }
    ],
    applications: [
      { en: "Book covers and catalog covers", es: "Cubiertas de libros y catálogos" },
      { en: "Retail packaging and cartons", es: "Embalaje minorista y cajas" },
      { en: "Business cards and presentation materials", es: "Tarjetas de presentación" },
      { en: "Food packaging (PE coating for moisture barrier)", es: "Embalaje alimentario (PE para barrera humedad)" }
    ],
    leadTime: { en: "3–5 working days", es: "3–5 días hábiles" },
    moq: { en: "500 sheets per specification", es: "500 hojas por especificación" }
  },
  {
    id: "printing",
    title: { en: "Printing Services", es: "Servicios de Impresión" },
    icon: "🖨️",
    image: "/images/processing/processing-printing.png",
    heroImage: "/images/processing/processing-printing.png",
    tagline: {
      en: "Flexographic and offset printing — from simple logos to full-color brand graphics.",
      es: "Impresión flexográfica y offset — desde logos simples hasta gráficos de marca a todo color."
    },
    overview: {
      en: "We offer flexographic and offset printing services for paper and board products. Whether you need simple one-color logos on kraft paper bags or full-color brand graphics on coated board, our printing capabilities add branding and communication value to your paper products before they reach your customers.",
      es: "Ofrecemos servicios de impresión flexográfica y offset para productos de papel y cartón. Ya sea que necesite logos simples de un color en bolsas de papel kraft o gráficos de marca a todo color en cartón estucado."
    },
    capabilities: [
      { en: "Flexographic printing: up to 6 colors", es: "Impresión flexográfica: hasta 6 colores" },
      { en: "Offset printing: up to 4-color process", es: "Impresión offset: hasta 4 colores proceso" },
      { en: "Max print width: 1,600mm (flexo)", es: "Ancho máx. impresión: 1,600mm (flexo)" },
      { en: "Max sheet size: 1,200×900mm (offset)", es: "Tamaño máx. hoja: 1,200×900mm (offset)" },
      { en: "Ink types: Water-based, UV-cured, soy-based", es: "Tipos tinta: Base agua, curado UV, base soja" },
      { en: "Applicable grades: Most paper and board", es: "Grados aplicables: Mayoría papel y cartón" }
    ],
    applications: [
      { en: "Branded paper bags and sacks", es: "Bolsas de papel con marca" },
      { en: "Printed wrapping paper", es: "Papel de envolver impreso" },
      { en: "Branded food packaging (greaseproof, kraft)", es: "Embalaje alimentario con marca" },
      { en: "Promotional and POS materials", es: "Materiales promocionales y PLV" }
    ],
    leadTime: { en: "5–10 working days (incl. plate making)", es: "5–10 días hábiles (incl. fabricación planchas)" },
    moq: { en: "1,000 pieces or 500 kg per design", es: "1,000 piezas o 500 kg por diseño" }
  },
  {
    id: "embossing-debossing",
    title: { en: "Embossing & Debossing", es: "Gofrado y Relieve" },
    icon: "✨",
    image: "/images/processing/processing-embossing.png",
    heroImage: "/images/processing/processing-embossing.png",
    tagline: {
      en: "Add texture and dimension — from subtle linen patterns to bold brand monograms.",
      es: "Añada textura y dimensión — desde patrones de lino sutiles hasta monogramas de marca audaces."
    },
    overview: {
      en: "Our embossing and debossing services create raised or recessed designs on paper and board surfaces. Blind embossing (without ink or foil) creates elegant, understated effects. Registered embossing aligns the texture precisely with printed graphics. Custom embossing dies can be fabricated from your artwork or brand assets.",
      es: "Nuestros servicios de gofrado y relieve crean diseños elevados o hundidos en superficies de papel y cartón. El gofrado ciego (sin tinta ni foil) crea efectos elegantes y sutiles."
    },
    capabilities: [
      { en: "Blind embossing (no ink/foil)", es: "Gofrado ciego (sin tinta/foil)" },
      { en: "Registered embossing (aligned with print)", es: "Gofrado registrado (alineado con impresión)" },
      { en: "Custom die fabrication from artwork", es: "Fabricación troquel personalizado desde arte" },
      { en: "Max sheet size: 800×600mm", es: "Tamaño máx. hoja: 800×600mm" },
      { en: "Material thickness: 0.2mm–2.0mm", es: "Espesor material: 0.2mm–2.0mm" },
      { en: "Applicable grades: Most uncoated and coated papers", es: "Grados aplicables: Mayoría papeles no estucados/estucados" }
    ],
    applications: [
      { en: "Luxury packaging and rigid boxes", es: "Embalaje de lujo y cajas rígidas" },
      { en: "Letterhead and business stationery", es: "Papelería comercial" },
      { en: "Book covers and endpapers", es: "Cubiertas y guardas de libros" },
      { en: "Certificates and awards", es: "Certificados y premios" }
    ],
    leadTime: { en: "7–10 working days (incl. die fabrication)", es: "7–10 días hábiles (incl. fabricación troquel)" },
    moq: { en: "500 pieces per design", es: "500 piezas por diseño" }
  },
  {
    id: "export-packing",
    title: { en: "Export Packing & Logistics", es: "Embalaje de Exportación y Logística" },
    icon: "🚢",
    image: "/images/processing/processing-export-packing.png",
    heroImage: "/images/processing/processing-export-packing.png",
    tagline: {
      en: "Professional export packing, container loading, and documentation for damage-free global delivery.",
      es: "Embalaje profesional de exportación, carga de contenedores y documentación para entrega global sin daños."
    },
    overview: {
      en: "Our export packing service ensures your paper products arrive at their destination in perfect condition. We use moisture-barrier wrapping, edge protectors, palletized loading, and container bracing to prevent transport damage. Every shipment includes comprehensive documentation: commercial invoice, packing list, bill of lading, certificate of origin, and any required certificates (FSC, SGS, food-contact).",
      es: "Nuestro servicio de embalaje de exportación asegura que sus productos de papel lleguen a destino en perfectas condiciones. Usamos envoltura con barrera de humedad, protectores de bordes, carga paletizada y refuerzo de contenedor."
    },
    capabilities: [
      { en: "Moisture-barrier wrapping & desiccants", es: "Envoltura barrera humedad y desecantes" },
      { en: "Palletized loading (IPPC heat-treated pallets)", es: "Carga paletizada (pallets IPPC tratados térmicamente)" },
      { en: "Container bracing & load securing", es: "Refuerzo y aseguramiento de carga" },
      { en: "40HQ container: ~25 tons paper/board", es: "Contenedor 40HQ: ~25 tons papel/cartón" },
      { en: "Documentation: BL, CI, PL, CO, FSC, SGS, FDA", es: "Documentación: BL, CI, PL, CO, FSC, SGS, FDA" },
      { en: "Port of loading: Shenzhen (50km from factory)", es: "Puerto de carga: Shenzhen (50km de fábrica)" }
    ],
    applications: [
      { en: "Full container loads (FCL) worldwide", es: "Cargas de contenedor completo (FCL) mundial" },
      { en: "Mixed product containers (multiple grades)", es: "Contenedores de productos mixtos (múltiples grados)" },
      { en: "Custom labeling & barcoding", es: "Etiquetado personalizado y código de barras" },
      { en: "Consolidation and deconsolidation", es: "Consolidación y desconsolidación" }
    ],
    leadTime: { en: "1–2 working days (packing & loading)", es: "1–2 días hábiles (embalaje y carga)" },
    moq: { en: "No minimum — charged per service", es: "Sin mínimo — cobrado por servicio" }
  }
];

export const processingCategories = processingServices.map((s) => ({
  id: s.id,
  title: s.title,
  icon: s.icon,
  tagline: s.tagline
}));

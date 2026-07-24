// ============================================================
// YOUNGSUN PAPER — Materials Library / Paper Grade Guide
// Comprehensive catalog of all paper & board grades
// Bilingual EN/ES, with specs, applications, properties
// ============================================================

export const materialCategories = [
  {
    id: "structural-board",
    title: { en: "Structural & Packaging Board", es: "Cartón Estructural y Embalaje" },
    icon: "📦",
    description: { en: "Heavy-duty boards for rigid packaging, structural support, and industrial applications.", es: "Cartones de alta resistencia para embalaje rígido, soporte estructural y aplicaciones industriales." }
  },
  {
    id: "printing-paper",
    title: { en: "Printing & Culture Paper", es: "Papel de Impresión y Cultural" },
    icon: "📄",
    description: { en: "High-performance surfaces for premium printing, publishing, and commercial applications.", es: "Superficies de alto rendimiento para impresión premium, publicación y aplicaciones comerciales." }
  },
  {
    id: "fancy-specialty",
    title: { en: "Fancy & Specialty Paper", es: "Papel Fancy y Especialidad" },
    icon: "✨",
    description: { en: "Decorative and tactile papers for luxury packaging, branding, and creative design.", es: "Papeles decorativos y táctiles para embalaje de lujo, branding y diseño creativo." }
  },
  {
    id: "food-grade",
    title: { en: "Food-Grade Paper", es: "Papel Grado Alimentario" },
    icon: "🍽️",
    description: { en: "Food-safe papers engineered for cups, wraps, liners, and food contact applications.", es: "Papeles seguros para alimentos diseñados para vasos, envolturas, revestimientos y aplicaciones de contacto alimentario." }
  },
  {
    id: "industrial-kraft",
    title: { en: "Industrial & Kraft Paper", es: "Papel Industrial y Kraft" },
    icon: "🏭",
    description: { en: "High-strength papers for bags, sacks, wrapping, and industrial packaging.", es: "Papeles de alta resistencia para bolsas, sacos, envoltura y embalaje industrial." }
  }
];

export const materials = [
  // ── Structural & Packaging Board ─────────────────────────
  {
    id: "grey-board",
    name: { en: "Grey Board / Chipboard", es: "Cartón Gris / Chipboard" },
    category: "structural-board",
    image: "/images/products/package-board/grey-board.jpg",
    thumbnail: "/images/products/package-board/grey-board.jpg",
    priceLevel: "$",
    specs: {
      thickness: "0.5mm – 4.0mm",
      gsm: "300 – 2500 gsm",
      sheetSize: "787×1092mm, 889×1194mm, custom",
      fiber: "100% post-consumer recycled",
      certifications: ["FSC Recycled", "SGS"],
      form: "Sheets, custom-cut"
    },
    properties: [
      { label: { en: "Stiffness", es: "Rigidez" }, value: "★★★★★" },
      { label: { en: "Printability", es: "Imprimibilidad" }, value: "★★☆☆☆" },
      { label: { en: "Eco Score", es: "Puntaje Eco" }, value: "★★★★★" },
      { label: { en: "Cost Efficiency", es: "Eficiencia Costo" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Rigid gift boxes", es: "Cajas rígidas de regalo" },
      { en: "Book covers & binders", es: "Cubiertas de libros y carpetas" },
      { en: "Puzzles & game boards", es: "Rompecabezas y tableros" },
      { en: "Display & mounting boards", es: "Tableros de exhibición" },
      { en: "Stationery backing", es: "Respaldo de papelería" },
    ],
    description: { en: "Dense recycled paperboard for structural applications. Not designed for direct printing — typically wrapped with decorative paper, fabric, or leatherette. Available in multiple thicknesses with consistent density and flatness.", es: "Cartón reciclado denso para aplicaciones estructurales. No diseñado para impresión directa — típicamente envuelto con papel decorativo, tela o simil cuero. Disponible en múltiples espesores con densidad y planitud consistentes." },
    productPage: "/products/grey-board"
  },
  {
    id: "duplex-board",
    name: { en: "Duplex Board", es: "Cartón Dúplex" },
    category: "structural-board",
    image: "/images/products/package-board/duplex-board.jpg",
    thumbnail: "/images/products/package-board/duplex-board.jpg",
    priceLevel: "$",
    specs: {
      gsm: "200 – 450 gsm",
      sheetSize: "787×1092mm, 889×1194mm, custom",
      surface: "Coated white top, grey back",
      certifications: ["FSC Recycled", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Printability", es: "Imprimibilidad" }, value: "★★★★☆" },
      { label: { en: "Stiffness", es: "Rigidez" }, value: "★★★☆☆" },
      { label: { en: "Cost Efficiency", es: "Eficiencia Costo" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Retail cartons", es: "Cajas minoristas" },
      { en: "Display packaging", es: "Embalaje de exhibición" },
      { en: "Backing boards", es: "Tableros de respaldo" },
      { en: "General printed packaging", es: "Embalaje impreso general" },
    ],
    description: { en: "Economical coated board with white-top printing surface and grey back. Excellent choice for cost-sensitive printed cartons requiring good print quality and moderate stiffness.", es: "Cartón estucado económico con superficie de impresión blanca y reverso gris. Excelente opción para cajas impresas sensibles al costo que requieren buena calidad de impresión y rigidez moderada." },
    productPage: "/products/duplex-board"
  },
  {
    id: "ckb",
    name: { en: "CKB (Coated Kraft Back)", es: "CKB (Kraft Reverso Estucado)" },
    category: "structural-board",
    image: "/images/products/package-board/ckb.jpg",
    thumbnail: "/images/products/package-board/ckb.jpg",
    priceLevel: "$$",
    specs: {
      gsm: "200 – 450 gsm",
      sheetSize: "Custom sizes available",
      surface: "Multi-coated white top, unbleached kraft reverse",
      certifications: ["FSC", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Print Quality", es: "Calidad Impresión" }, value: "★★★★★" },
      { label: { en: "Strength", es: "Resistencia" }, value: "★★★★★" },
      { label: { en: "Moisture Resistance", es: "Resistencia Humedad" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Beverage cartons", es: "Envases de bebidas" },
      { en: "Frozen food packaging", es: "Embalaje congelado" },
      { en: "Retail folding cartons", es: "Cajas plegables minoristas" },
    ],
    description: { en: "Premium packaging board with a brilliant white coated printing surface and strong unbleached kraft reverse. Ideal for beverage carriers, frozen food cartons, and applications requiring both print quality and wet strength.", es: "Cartón de embalaje premium con superficie de impresión blanca brillante y reverso kraft crudo fuerte. Ideal para portabebidas, cajas de alimentos congelados y aplicaciones que requieren calidad de impresión y resistencia en húmedo." },
    productPage: "/products/ckb"
  },
  {
    id: "folding-box-board",
    name: { en: "Folding Box Board (FBB)", es: "Folding Box Board (FBB)" },
    category: "structural-board",
    image: "/images/products/package-board/fbb.jpg",
    thumbnail: "/images/products/package-board/fbb.jpg",
    priceLevel: "$$",
    specs: {
      gsm: "200 – 450 gsm",
      sheetSize: "Custom sizes available",
      surface: "Coated virgin fibre, high brightness",
      certifications: ["FSC", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Print Quality", es: "Calidad Impresión" }, value: "★★★★★" },
      { label: { en: "Fold Performance", es: "Rendimiento Plegado" }, value: "★★★★★" },
      { label: { en: "Stiffness-to-Weight", es: "Rigidez/Peso" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Cosmetics packaging", es: "Embalaje cosmético" },
      { en: "Pharmaceutical cartons", es: "Cajas farmacéuticas" },
      { en: "Premium food cartons", es: "Cajas de alimentos premium" },
      { en: "Consumer goods packaging", es: "Embalaje de bienes de consumo" },
    ],
    description: { en: "Virgin-fibre coated board with excellent printing surface and folding performance. The preferred choice for high-speed carton converting lines in cosmetics, pharma, and premium food packaging.", es: "Cartón estucado de fibra virgen con excelente superficie de impresión y rendimiento de plegado. La opción preferida para líneas de conversión de cajas de alta velocidad en cosmética, farmacéutica y embalaje de alimentos premium." },
    productPage: "/products/folding-box-board"
  },
  {
    id: "c2s-art-board",
    name: { en: "C2S Art Board / Art Paper", es: "Papel Arte C2S / Cartulina Arte" },
    category: "structural-board",
    image: "/images/products/culture-paper/culture-paper-02.jpg",
    thumbnail: "/images/products/culture-paper/culture-paper-02.jpg",
    priceLevel: "$$",
    specs: {
      gsm: "80 – 400 gsm",
      sheetSize: "787×1092mm, 889×1194mm, custom",
      surface: "Double-side coated, gloss or matt",
      certifications: ["FSC", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Print Fidelity", es: "Fidelidad Impresión" }, value: "★★★★★" },
      { label: { en: "Brightness", es: "Blancura" }, value: "★★★★★" },
      { label: { en: "Surface Smoothness", es: "Lisura Superficial" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Premium catalogs", es: "Catálogos premium" },
      { en: "Magazines & brochures", es: "Revistas y folletos" },
      { en: "Display cards & sleeves", es: "Tarjetas display y fundas" },
      { en: "High-end packaging inserts", es: "Insertos de embalaje de alta gama" },
    ],
    description: { en: "Two-side coated paper with exceptional print quality. Available in gloss and matt finishes. The industry standard for premium printing where image reproduction and color fidelity are critical.", es: "Papel estucado de dos caras con calidad de impresión excepcional. Disponible en acabados brillo y mate. El estándar de la industria para impresión premium donde la reproducción de imagen y fidelidad de color son críticas." },
    productPage: "/products/art-paper"
  },

  // ── Printing & Culture Paper ─────────────────────────────
  {
    id: "woodfree-paper",
    name: { en: "Woodfree Offset Paper", es: "Papel Offset Woodfree" },
    category: "printing-paper",
    image: "/images/products/culture-paper/woodfree-paper.png",
    thumbnail: "/images/products/culture-paper/woodfree-paper.png",
    priceLevel: "$$",
    specs: {
      gsm: "50 – 300 gsm",
      sheetSize: "787×1092mm, 889×1194mm, custom",
      surface: "Uncoated, high brightness",
      certifications: ["FSC", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Opacity", es: "Opacidad" }, value: "★★★★☆" },
      { label: { en: "Runnability", es: "Runnability" }, value: "★★★★★" },
      { label: { en: "Ink Absorption", es: "Absorción Tinta" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Books & novels", es: "Libros y novelas" },
      { en: "Notebooks & notepads", es: "Cuadernos y blocs" },
      { en: "Office stationery", es: "Papelería de oficina" },
      { en: "Commercial printing", es: "Impresión comercial" },
    ],
    description: { en: "Uncoated, high-brightness paper for books, notebooks, and commercial printing. Excellent opacity and consistent surface for offset and digital printing. Available in multiple grammages.", es: "Papel no estucado de alta blancura para libros, cuadernos e impresión comercial. Excelente opacidad y superficie consistente para impresión offset y digital. Disponible en múltiples gramajes." },
    productPage: "/products/woodfree-paper"
  },
  {
    id: "lwc-paper",
    name: { en: "LWC Paper (Lightweight Coated)", es: "Papel LWC (Estucado Ligero)" },
    category: "printing-paper",
    image: "/images/products/culture-paper/lwc-paper.png",
    thumbnail: "/images/products/culture-paper/lwc-paper.png",
    priceLevel: "$$",
    specs: {
      gsm: "40 – 80 gsm",
      sheetSize: "Reels, custom widths",
      surface: "Lightweight coated",
      certifications: ["FSC", "SGS"],
      form: "Reels primarily"
    },
    properties: [
      { label: { en: "Weight Efficiency", es: "Eficiencia Peso" }, value: "★★★★★" },
      { label: { en: "Print Quality", es: "Calidad Impresión" }, value: "★★★★☆" },
      { label: { en: "Opacity/GSM Ratio", es: "Opacidad/GSM" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Magazines & catalogs", es: "Revistas y catálogos" },
      { en: "Advertising inserts", es: "Insertos publicitarios" },
      { en: "High-volume publishing", es: "Publicación de alto volumen" },
    ],
    description: { en: "Lightweight coated paper optimized for high-volume publishing. Excellent print quality at lower grammage, reducing postage and distribution costs while maintaining visual appeal.", es: "Papel estucado ligero optimizado para publicación de alto volumen. Excelente calidad de impresión con menor gramaje, reduciendo costos postales y de distribución manteniendo atractivo visual." },
    productPage: "/products/lwc-paper"
  },
  {
    id: "color-offset-paper",
    name: { en: "Color Offset Paper", es: "Papel Offset de Color" },
    category: "printing-paper",
    image: "/images/products/culture-paper/color-offset-paper.png",
    thumbnail: "/images/products/culture-paper/color-offset-paper.png",
    priceLevel: "$",
    specs: {
      gsm: "60 – 120 gsm",
      sheetSize: "787×1092mm, custom",
      surface: "Uncoated colored",
      colors: "Red, blue, green, yellow, pink, ivory, grey, and more",
      certifications: ["FSC", "SGS"],
      form: "Sheets"
    },
    properties: [
      { label: { en: "Color Variety", es: "Variedad Color" }, value: "★★★★★" },
      { label: { en: "Cost Efficiency", es: "Eficiencia Costo" }, value: "★★★★★" },
      { label: { en: "Printability", es: "Imprimibilidad" }, value: "★★★☆☆" },
    ],
    applications: [
      { en: "Colored forms & invoices", es: "Formularios y facturas color" },
      { en: "Promotional flyers", es: "Volantes promocionales" },
      { en: "Craft & origami paper", es: "Papel para manualidades" },
      { en: "Colored stationery", es: "Papelería de color" },
    ],
    description: { en: "Uncoated paper in a spectrum of colors for forms, flyers, stationery, and creative applications. Cost-effective way to add visual distinction to printed materials without colored ink.", es: "Papel no estucado en un espectro de colores para formularios, volantes, papelería y aplicaciones creativas. Forma económica de añadir distinción visual a materiales impresos sin tinta de color." },
    productPage: "/products/color-offset-paper"
  },
  {
    id: "copy-paper",
    name: { en: "Copy Paper / Office Paper", es: "Papel de Copia / Oficina" },
    category: "printing-paper",
    image: "/images/products/culture-paper/culture-paper.png",
    thumbnail: "/images/products/culture-paper/culture-paper.png",
    priceLevel: "$",
    specs: {
      gsm: "70 – 80 gsm",
      sheetSize: "A4, A3, Letter, Legal",
      surface: "Uncoated, high brightness",
      certifications: ["FSC", "SGS"],
      form: "Reams, boxes"
    },
    properties: [
      { label: { en: "Jam-Free Performance", es: "Rendimiento Sin Atascos" }, value: "★★★★★" },
      { label: { en: "Brightness", es: "Blancura" }, value: "★★★★☆" },
      { label: { en: "Value", es: "Valor" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Office printing & copying", es: "Impresión y copiado de oficina" },
      { en: "School & education", es: "Escuela y educación" },
      { en: "General document printing", es: "Impresión general de documentos" },
    ],
    description: { en: "Standard office and photocopy paper in multiple formats. Consistent quality for jam-free high-speed copying and laser printing. Available in bulk packing for institutional buyers.", es: "Papel estándar de oficina y fotocopia en múltiples formatos. Calidad consistente para copiado de alta velocidad sin atascos e impresión láser. Disponible en empaque a granel para compradores institucionales." },
    productPage: "/products/copy-paper"
  },
  {
    id: "ncr-paper",
    name: { en: "NCR Paper (Carbonless)", es: "Papel NCR (Autocopiativo)" },
    category: "printing-paper",
    image: "/images/products/culture-paper/ncr-paper.png",
    thumbnail: "/images/products/culture-paper/ncr-paper.png",
    priceLevel: "$$",
    specs: {
      gsm: "45 – 55 gsm",
      sheetSize: "Custom sizes available",
      layers: "2-part, 3-part, 4-part sets",
      certifications: ["FSC", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Image Transfer", es: "Transferencia Imagen" }, value: "★★★★★" },
      { label: { en: "Shelf Life", es: "Vida Útil" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Invoice & receipt books", es: "Libros de facturas y recibos" },
      { en: "Purchase orders", es: "Órdenes de compra" },
      { en: "Delivery notes", es: "Notas de entrega" },
    ],
    description: { en: "Carbonless copy paper for multi-part business forms. Clean image transfer without carbon interleaves. Available in 2-part, 3-part, and 4-part sets.", es: "Papel autocopiativo para formularios comerciales multicopia. Transferencia de imagen limpia sin intercalados de carbón. Disponible en juegos de 2, 3 y 4 partes." },
    productPage: "/products/ncr-paper"
  },
  {
    id: "newsprint",
    name: { en: "Newsprint", es: "Papel Periódico" },
    category: "printing-paper",
    image: "/images/products/culture-paper/culture-paper-01.jpg",
    thumbnail: "/images/products/culture-paper/culture-paper-01.jpg",
    priceLevel: "$",
    specs: {
      gsm: "42 – 52 gsm",
      sheetSize: "Reels, custom widths",
      surface: "Uncoated, standard brightness",
      certifications: ["SGS"],
      form: "Reels"
    },
    properties: [
      { label: { en: "Cost Efficiency", es: "Eficiencia Costo" }, value: "★★★★★" },
      { label: { en: "Runnability", es: "Runnability" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Newspapers", es: "Periódicos" },
      { en: "Advertising inserts", es: "Insertos publicitarios" },
      { en: "Mass-circulation printing", es: "Impresión de circulación masiva" },
    ],
    description: { en: "Cost-efficient paper for newspapers, advertising inserts, and mass-circulation printing. Engineered for high-speed web press performance with consistent quality.", es: "Papel de bajo costo para periódicos, insertos publicitarios e impresión de circulación masiva. Diseñado para rendimiento en prensas rotativas de alta velocidad con calidad consistente." },
    productPage: "/products/newsprint"
  },

  // ── Fancy & Specialty Paper ──────────────────────────────
  {
    id: "soft-touch-paper",
    name: { en: "Soft Touch Paper", es: "Papel Soft Touch" },
    category: "fancy-specialty",
    image: "/images/products/fancy-paper/fancy-paper.png",
    thumbnail: "/images/products/fancy-paper/fancy-paper.png",
    priceLevel: "$$$",
    specs: {
      gsm: "120 – 400 gsm",
      sheetSize: "787×1092mm, custom",
      surface: "Velvet-matte tactile coating",
      certifications: ["FSC", "SGS"],
      form: "Sheets"
    },
    properties: [
      { label: { en: "Tactile Appeal", es: "Atractivo Táctil" }, value: "★★★★★" },
      { label: { en: "Fingerprint Resistance", es: "Resistencia Huellas" }, value: "★★★★★" },
      { label: { en: "Foil Compatibility", es: "Compatibilidad Foil" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Luxury boxes & covers", es: "Cajas y cubiertas de lujo" },
      { en: "Premium hang tags", es: "Etiquetas colgantes premium" },
      { en: "High-end business cards", es: "Tarjetas de presentación de alta gama" },
      { en: "Cosmetic packaging", es: "Embalaje cosmético" },
    ],
    description: { en: "Velvet-smooth tactile paper with a luxurious matte surface. Deepens printed blacks and resists fingerprints. Creates an immediate premium impression through touch alone.", es: "Papel táctil aterciopelado con superficie mate lujosa. Profundiza los negros impresos y resiste huellas dactilares. Crea una impresión premium inmediata solo con el tacto." },
    productPage: "/products/soft-touch-paper"
  },
  {
    id: "leather-paper",
    name: { en: "Leather Paper", es: "Papel Cuero" },
    category: "fancy-specialty",
    image: "/images/products/fancy-paper/fancy-paper-01.png",
    thumbnail: "/images/products/fancy-paper/fancy-paper-01.png",
    priceLevel: "$$$",
    specs: {
      gsm: "120 – 350 gsm",
      sheetSize: "787×1092mm, custom",
      surface: "Embossed leather grain texture",
      patterns: "Crocodile, calf, ostrich, pebble grain",
      certifications: ["FSC", "SGS"],
      form: "Sheets"
    },
    properties: [
      { label: { en: "Texture Depth", es: "Profundidad Textura" }, value: "★★★★★" },
      { label: { en: "Premium Feel", es: "Sensación Premium" }, value: "★★★★★" },
      { label: { en: "Animal-Free", es: "Libre de Animales" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Luxury rigid boxes", es: "Cajas rígidas de lujo" },
      { en: "Wine & spirit packaging", es: "Embalaje de vinos y licores" },
      { en: "Premium notebooks", es: "Cuadernos premium" },
      { en: "Gift packaging", es: "Embalaje de regalo" },
    ],
    description: { en: "Animal-free paper with authentic leather grain texture. Available in crocodile, calf, ostrich, and pebble grain patterns. Provides the luxury feel of leather on a sustainable paper base.", es: "Papel libre de animales con textura auténtica de grano de cuero. Disponible en patrones de cocodrilo, ternera, avestruz y grano de piedra. Proporciona la sensación de lujo del cuero sobre una base de papel sostenible." },
    productPage: "/products/leather-paper"
  },
  {
    id: "pearlescent-paper",
    name: { en: "Pearlescent Paper", es: "Papel Perlado" },
    category: "fancy-specialty",
    image: "/images/products/fancy-paper/fancy-paper-02.png",
    thumbnail: "/images/products/fancy-paper/fancy-paper-02.png",
    priceLevel: "$$$",
    specs: {
      gsm: "120 – 350 gsm",
      sheetSize: "787×1092mm, custom",
      surface: "Mica-based pearl shimmer",
      certifications: ["FSC", "SGS"],
      form: "Sheets"
    },
    properties: [
      { label: { en: "Light Reflection", es: "Reflexión de Luz" }, value: "★★★★★" },
      { label: { en: "Visual Depth", es: "Profundidad Visual" }, value: "★★★★★" },
      { label: { en: "Elegance", es: "Elegancia" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Gift packaging", es: "Embalaje de regalo" },
      { en: "Cosmetic boxes", es: "Cajas cosméticas" },
      { en: "Invitations & cards", es: "Invitaciones y tarjetas" },
      { en: "Decorative sleeves", es: "Fundas decorativas" },
    ],
    description: { en: "Paper with a soft, shifting shimmer effect created by mica-based pigments. The surface catches light at different angles, adding depth and movement to packaging. Ideal for feminine, celebratory, and premium brand applications.", es: "Papel con un efecto de brillo suave y cambiante creado por pigmentos a base de mica. La superficie capta la luz en diferentes ángulos, añadiendo profundidad y movimiento al embalaje. Ideal para aplicaciones femeninas, celebraciones y marcas premium." },
    productPage: "/products/pearlescent-paper"
  },
  {
    id: "embossed-paper",
    name: { en: "Embossed Paper", es: "Papel Gofrado" },
    category: "fancy-specialty",
    image: "/images/products/fancy-paper/embossed-paper.png",
    thumbnail: "/images/products/fancy-paper/embossed-paper.png",
    priceLevel: "$$$",
    specs: {
      gsm: "120 – 350 gsm",
      sheetSize: "787×1092mm, custom",
      surface: "3D pressed texture patterns",
      patterns: "Linen, canvas, woodgrain, felt, laid, custom",
      certifications: ["FSC", "SGS"],
      form: "Sheets"
    },
    properties: [
      { label: { en: "Tactile Identity", es: "Identidad Táctil" }, value: "★★★★★" },
      { label: { en: "Visual Depth", es: "Profundidad Visual" }, value: "★★★★★" },
      { label: { en: "Pattern Variety", es: "Variedad Patrones" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Luxury box wrapping", es: "Envoltura cajas de lujo" },
      { en: "Book covers", es: "Cubiertas de libros" },
      { en: "Premium stationery", es: "Papelería premium" },
      { en: "Hang tags & labels", es: "Etiquetas colgantes" },
    ],
    description: { en: "Paper with permanent 3D texture patterns pressed into the surface under heat and pressure. Available in linen, canvas, woodgrain, felt, laid, and custom patterns. Adds tactile dimension that printing alone cannot achieve.", es: "Papel con patrones de textura 3D permanentes presionados en la superficie bajo calor y presión. Disponible en lino, lienzo, veta de madera, fieltro, verjurado y patrones personalizados. Añade dimensión táctil que la impresión sola no puede lograr." },
    productPage: "/products/embossed-paper"
  },
  {
    id: "tracing-paper",
    name: { en: "Tracing Paper", es: "Papel de Calco" },
    category: "fancy-specialty",
    image: "/images/products/fancy-paper/banner-tracing-paper.png",
    thumbnail: "/images/products/fancy-paper/banner-tracing-paper.png",
    priceLevel: "$$",
    specs: {
      gsm: "40 – 120 gsm",
      sheetSize: "787×1092mm, custom",
      surface: "Smooth, translucent",
      certifications: ["FSC", "SGS"],
      form: "Sheets"
    },
    properties: [
      { label: { en: "Translucency", es: "Translucidez" }, value: "★★★★★" },
      { label: { en: "Smoothness", es: "Lisura" }, value: "★★★★★" },
      { label: { en: "Fold Quality", es: "Calidad Plegado" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Packaging overlays", es: "Superposiciones de embalaje" },
      { en: "Invitation sleeves", es: "Fundas de invitación" },
      { en: "Book inserts", es: "Insertos de libros" },
      { en: "Creative stationery", es: "Papelería creativa" },
    ],
    description: { en: "Translucent paper for layered design effects. Creates depth and anticipation in packaging, invitations, and creative projects. Smooth surface suitable for printing and hot stamping.", es: "Papel translúcido para efectos de diseño en capas. Crea profundidad y anticipación en embalajes, invitaciones y proyectos creativos. Superficie lisa adecuada para impresión y estampado en caliente." },
    productPage: "/products/tracing-paper"
  },
  {
    id: "color-tissue-paper",
    name: { en: "Color Tissue Paper", es: "Papel Tissue de Color" },
    category: "fancy-specialty",
    image: "/images/products/fancy-paper/fancy-paper.png",
    thumbnail: "/images/products/fancy-paper/fancy-paper.png",
    priceLevel: "$",
    specs: {
      gsm: "14 – 30 gsm",
      sheetSize: "500×750mm, custom",
      surface: "Soft, translucent colored",
      colors: "White, black, red, blue, gold, silver, pink, and more",
      certifications: ["FSC", "SGS"],
      form: "Sheets, packs"
    },
    properties: [
      { label: { en: "Color Intensity", es: "Intensidad Color" }, value: "★★★★★" },
      { label: { en: "Softness", es: "Suavidad" }, value: "★★★★★" },
      { label: { en: "Value", es: "Valor" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Luxury gift wrapping", es: "Envoltura de regalo de lujo" },
      { en: "Shoe stuffing", es: "Relleno de zapatos" },
      { en: "Floral arrangements", es: "Arreglos florales" },
      { en: "Retail presentation", es: "Presentación minorista" },
    ],
    description: { en: "Lightweight translucent colored tissue for luxury gift wrapping, retail presentation, and creative applications. Soft hand-feel with vibrant, consistent color. Available in a wide palette of shades.", es: "Tissue coloreado translúcido ligero para envoltura de regalo de lujo, presentación minorista y aplicaciones creativas. Tacto suave con color vibrante y consistente. Disponible en amplia paleta de tonos." },
    productPage: "/products/color-tissue-paper"
  },
  {
    id: "label-paper",
    name: { en: "Label Paper", es: "Papel para Etiquetas" },
    category: "fancy-specialty",
    image: "/images/products/fancy-paper/hangtag-hero-main.png",
    thumbnail: "/images/products/fancy-paper/hangtag-hero-main.png",
    priceLevel: "$$",
    specs: {
      gsm: "60 – 120 gsm",
      sheetSize: "Custom sizes available",
      surface: "Coated or uncoated face stock",
      certifications: ["FSC", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Adhesion Compatibility", es: "Compatibilidad Adhesiva" }, value: "★★★★★" },
      { label: { en: "Print Quality", es: "Calidad Impresión" }, value: "★★★★★" },
      { label: { en: "Die-Cut Performance", es: "Rendimiento Troquelado" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Pressure-sensitive labels", es: "Etiquetas autoadhesivas" },
      { en: "Hang tags", es: "Etiquetas colgantes" },
      { en: "Wet-glue labels", es: "Etiquetas de cola húmeda" },
      { en: "Brand packaging labels", es: "Etiquetas de marca" },
    ],
    description: { en: "Premium face stock for pressure-sensitive labels, hang tags, and wet-glue labels. Clean surface for flexo, offset, and digital printing. Compatible with adhesive coating and die-cutting processes.", es: "Papel frontal premium para etiquetas autoadhesivas, colgantes y de cola húmeda. Superficie limpia para impresión flexo, offset y digital. Compatible con procesos de recubrimiento adhesivo y troquelado." },
    productPage: "/products/label-paper"
  },

  // ── Food-Grade Paper ─────────────────────────────────────
  {
    id: "cup-paper",
    name: { en: "Cupstock Board / Cup Paper", es: "Cartón para Vasos" },
    category: "food-grade",
    image: "/images/products/food-packaging/food-packaging-paper-01.jpg",
    thumbnail: "/images/products/food-packaging/food-packaging-paper-01.jpg",
    priceLevel: "$$",
    specs: {
      gsm: "160 – 330 gsm",
      sheetSize: "Reels, custom widths",
      surface: "Virgin fibre, PE coating compatible",
      certifications: ["FSC", "FDA", "SGS"],
      form: "Reels, sheets"
    },
    properties: [
      { label: { en: "Forming Performance", es: "Rendimiento Formado" }, value: "★★★★★" },
      { label: { en: "Rigidity", es: "Rigidez" }, value: "★★★★☆" },
      { label: { en: "Food Safety", es: "Seguridad Alimentaria" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Hot drink cups", es: "Vasos para bebidas calientes" },
      { en: "Cold drink cups", es: "Vasos para bebidas frías" },
      { en: "Food containers", es: "Recipientes para alimentos" },
      { en: "Ice cream tubs", es: "Envases de helado" },
    ],
    description: { en: "Virgin-fibre cupstock board developed for paper cup manufacturing. Reliable forming on high-speed cup-making machines. Available uncoated or with PE coating. FDA and FSC certified.", es: "Cartón de fibra virgen desarrollado para fabricación de vasos de papel. Formado confiable en máquinas de alta velocidad. Disponible sin recubrimiento o con recubrimiento PE. Certificado FDA y FSC." },
    productPage: "/products/cup-paper"
  },
  {
    id: "greaseproof-paper",
    name: { en: "Greaseproof Paper", es: "Papel Antigrasa" },
    category: "food-grade",
    image: "/images/products/food-packaging/food-packaging-paper-detail.jpg",
    thumbnail: "/images/products/food-packaging/food-packaging-paper-detail.jpg",
    priceLevel: "$$",
    specs: {
      gsm: "35 – 60 gsm",
      sheetSize: "Reels, sheets, custom",
      surface: "Smooth, dense, PFAS-free",
      greaseResistance: "3M KIT level 6+",
      certifications: ["FSC", "FDA", "SGS", "PFAS-free"],
      form: "Reels, sheets"
    },
    properties: [
      { label: { en: "Grease Resistance", es: "Resistencia Grasa" }, value: "★★★★★" },
      { label: { en: "PFAS-Free", es: "Libre PFAS" }, value: "★★★★★" },
      { label: { en: "Printability", es: "Imprimibilidad" }, value: "★★★☆☆" },
    ],
    applications: [
      { en: "Bakery wrapping", es: "Envoltura de panadería" },
      { en: "Burger & sandwich wrap", es: "Envoltura hamburguesas" },
      { en: "Fried food liners", es: "Forros para frituras" },
      { en: "Food interleaving", es: "Intercalado de alimentos" },
    ],
    description: { en: "PFAS-free greaseproof paper achieving oil resistance through mechanical fiber densification — no chemical treatment. KIT 6+ rating. Available in white and natural. Ideal for bakery, QSR, and food service applications.", es: "Papel antigrasa libre de PFAS que logra resistencia al aceite mediante densificación mecánica de fibra — sin tratamiento químico. Clasificación KIT 6+. Disponible en blanco y natural. Ideal para panadería, QSR y servicios de alimentos." },
    productPage: "/products/greaseproof-paper"
  },
  {
    id: "pe-coated-paper",
    name: { en: "PE Coated Paper", es: "Papel Recubierto PE" },
    category: "food-grade",
    image: "/images/products/food-packaging/food-packaging-paper-01.jpg",
    thumbnail: "/images/products/food-packaging/food-packaging-paper-01.jpg",
    priceLevel: "$$",
    specs: {
      gsm: "80 – 350 gsm (base paper)",
      coating: "Single-side or double-side PE",
      sheetSize: "Reels, sheets, custom",
      certifications: ["FSC", "FDA", "SGS"],
      form: "Reels, sheets"
    },
    properties: [
      { label: { en: "Moisture Barrier", es: "Barrera Humedad" }, value: "★★★★★" },
      { label: { en: "Heat Sealability", es: "Sellabilidad Térmica" }, value: "★★★★★" },
      { label: { en: "Versatility", es: "Versatilidad" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Paper cups (barrier layer)", es: "Vasos de papel (capa barrera)" },
      { en: "Food containers", es: "Recipientes alimentos" },
      { en: "Takeaway packaging", es: "Embalaje para llevar" },
      { en: "Moisture-resistant wraps", es: "Envolturas resistentes humedad" },
    ],
    description: { en: "Paper or board substrate extrusion-coated with polyethylene for moisture resistance and heat-sealing. Available in single-side and double-side PE configurations. FDA compliant for food contact.", es: "Sustrato de papel o cartón recubierto por extrusión con polietileno para resistencia a la humedad y termosellado. Disponible en configuraciones PE de una o dos caras. Cumple FDA para contacto alimentario." },
    productPage: "/products/pe-coated-paper"
  },
  {
    id: "silicone-coated-paper",
    name: { en: "Silicone Coated Paper", es: "Papel Siliconado" },
    category: "food-grade",
    image: "/images/products/food-packaging/food-packaging-paper-detail.jpg",
    thumbnail: "/images/products/food-packaging/food-packaging-paper-detail.jpg",
    priceLevel: "$$$",
    specs: {
      gsm: "40 – 120 gsm",
      coating: "Single-side or double-side silicone",
      heatResistance: "Up to 220°C / 428°F",
      certifications: ["FSC", "FDA", "SGS"],
      form: "Sheets, reels"
    },
    properties: [
      { label: { en: "Non-Stick", es: "Anti-Adherente" }, value: "★★★★★" },
      { label: { en: "Heat Resistance", es: "Resistencia Térmica" }, value: "★★★★★" },
      { label: { en: "Reusable", es: "Reutilizable" }, value: "★★★★☆" },
    ],
    applications: [
      { en: "Baking paper / parchment", es: "Papel de hornear" },
      { en: "Food wrapping (sticky foods)", es: "Envoltura alimentos pegajosos" },
      { en: "Release liners", es: "Liners de liberación" },
      { en: "Adhesive label backing", es: "Respaldo etiquetas adhesivas" },
    ],
    description: { en: "Silicone-coated release paper for non-stick applications. Heat resistant to 220°C. Available in single-side and double-side coating. Suitable for baking, food wrapping, and industrial release applications.", es: "Papel de liberación recubierto de silicona para aplicaciones antiadherentes. Resistente al calor hasta 220°C. Disponible en recubrimiento de una o dos caras. Adecuado para hornear, envoltura de alimentos y aplicaciones industriales." },
    productPage: "/products/silicone-coated-paper"
  },

  // ── Industrial & Kraft Paper ──────────────────────────────
  {
    id: "kraft-paper",
    name: { en: "Kraft Paper", es: "Papel Kraft" },
    category: "industrial-kraft",
    image: "/images/products/package-board/kraft-paper.jpg",
    thumbnail: "/images/products/package-board/kraft-paper.jpg",
    priceLevel: "$",
    specs: {
      gsm: "30 – 300 gsm",
      sheetSize: "Reels, sheets, custom",
      surface: "Uncoated, natural or bleached",
      certifications: ["FSC", "SGS"],
      form: "Reels, sheets"
    },
    properties: [
      { label: { en: "Tear Strength", es: "Resistencia Desgarro" }, value: "★★★★★" },
      { label: { en: "Versatility", es: "Versatilidad" }, value: "★★★★★" },
      { label: { en: "Eco Appeal", es: "Atractivo Eco" }, value: "★★★★★" },
    ],
    applications: [
      { en: "Paper shopping bags", es: "Bolsas de compras" },
      { en: "Food bags & bakery bags", es: "Bolsas alimentos y panadería" },
      { en: "Wrapping paper", es: "Papel de envolver" },
      { en: "Envelopes & mailers", es: "Sobres y mailers" },
      { en: "Corrugated liners", es: "Liners corrugados" },
      { en: "Industrial packaging", es: "Embalaje industrial" },
    ],
    description: { en: "High-strength paper known for tear resistance and natural appearance. Available in natural brown, bleached white, and recycled grades. The most versatile paper for bags, wrapping, liners, and industrial packaging.", es: "Papel de alta resistencia conocido por resistencia al desgarro y apariencia natural. Disponible en marrón natural, blanqueado y grados reciclados. El papel más versátil para bolsas, envoltura, liners y embalaje industrial." },
    productPage: "/products/kraft-paper"
  },
  {
    id: "mg-paper",
    name: { en: "MG Paper (Machine Glazed)", es: "Papel MG (Machine Glazed)" },
    category: "industrial-kraft",
    image: "/images/products/food-packaging/food-packaging-paper-01.jpg",
    thumbnail: "/images/products/food-packaging/food-packaging-paper-01.jpg",
    priceLevel: "$",
    specs: {
      gsm: "18 – 120 gsm",
      sheetSize: "Reels, custom widths",
      surface: "One glossy side, one matte side",
      certifications: ["FSC", "SGS"],
      form: "Reels"
    },
    properties: [
      { label: { en: "Gloss Surface", es: "Superficie Brillante" }, value: "★★★★★" },
      { label: { en: "Cost Efficiency", es: "Eficiencia Costo" }, value: "★★★★★" },
      { label: { en: "Barrier Base", es: "Base Barrera" }, value: "★★★☆☆" },
    ],
    applications: [
      { en: "Wrapping paper", es: "Papel de envolver" },
      { en: "Bags & pouches", es: "Bolsas y sobres" },
      { en: "Flexible packaging", es: "Embalaje flexible" },
      { en: "Laminating base", es: "Base para laminación" },
    ],
    description: { en: "Machine-glazed paper with one glossy side and one matte side. The glossy surface provides a clean appearance for wrapping and bags, while the matte side accepts printing and adhesive lamination.", es: "Papel con una cara brillante y una mate. La superficie brillante proporciona apariencia limpia para envoltura y bolsas, mientras que el lado mate acepta impresión y laminación adhesiva." },
    productPage: "/products/mg-paper"
  }
];

// ── Helper function: get materials by category ──────────────
export function getMaterialsByCategory(categoryId) {
  return materials.filter((m) => m.category === categoryId);
}

// ── Search materials by name or application ────────────────
export function searchMaterials(query) {
  const q = query.toLowerCase();
  return materials.filter((m) => {
    const name = (m.name.en + " " + m.name.es).toLowerCase();
    const apps = m.applications.map((a) => (a.en + " " + a.es).toLowerCase()).join(" ");
    const desc = (m.description.en + " " + m.description.es).toLowerCase();
    return name.includes(q) || apps.includes(q) || desc.includes(q);
  });
}

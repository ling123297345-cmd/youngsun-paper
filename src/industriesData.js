// ============================================================
// YOUNGSUN PAPER — Industry Solutions Data
// 6 key industries, bilingual EN/ES, with challenges,
// solutions, recommended products, and industry-specific FAQs
// ============================================================

export const industries = [
  {
    id: "packaging-printing",
    title: { en: "Packaging & Printing", es: "Embalaje e Impresión" },
    icon: "📦",
    heroImage: "/images/products/package-board/package-category-card.jpg",
    tagline: {
      en: "Structural integrity and print brilliance — from folding cartons to rigid luxury boxes.",
      es: "Integridad estructural y brillo de impresión — desde cajas plegables hasta cajas rígidas de lujo."
    },
    overview: {
      en: "The packaging and printing industry demands paper and board that balances structural strength with surface quality. Whether it's a folding carton for retail, a rigid gift box for premium cosmetics, or corrugated packaging for e-commerce, the right paperboard directly impacts brand perception, production efficiency, and sustainability credentials.",
      es: "La industria del embalaje e impresión exige papel y cartón que equilibren resistencia estructural con calidad superficial. Ya sea una caja plegable para venta minorista, una caja rígida para cosméticos premium o embalaje corrugado para comercio electrónico, el cartón adecuado impacta directamente la percepción de marca, la eficiencia de producción y las credenciales de sostenibilidad."
    },
    challenges: [
      {
        title: { en: "Structural integrity", es: "Integridad estructural" },
        desc: { en: "Boxes must withstand stacking, shipping, and handling without deformation.", es: "Las cajas deben soportar apilamiento, envío y manipulación sin deformarse." }
      },
      {
        title: { en: "Print quality", es: "Calidad de impresión" },
        desc: { en: "High-resolution graphics require smooth, coated surfaces with consistent ink holdout.", es: "Los gráficos de alta resolución requieren superficies lisas y recubiertas con retención de tinta consistente." }
      },
      {
        title: { en: "Sustainability compliance", es: "Cumplimiento de sostenibilidad" },
        desc: { en: "Brands increasingly require FSC certification, recycled content, and recyclable packaging.", es: "Las marcas exigen cada vez más certificación FSC, contenido reciclado y embalaje reciclable." }
      },
      {
        title: { en: "Cost efficiency", es: "Eficiencia de costos" },
        desc: { en: "Balancing material cost with performance — over-specification wastes money, under-specification risks failure.", es: "Equilibrar el costo del material con el rendimiento — sobre-especificar desperdicia dinero, sub-especificar arriesga fallos." }
      }
    ],
    solutions: {
      en: "YOUNGSUN supplies a complete range of packaging boards engineered for every packaging format. Our grey board provides rigid box structure at competitive pricing. Our duplex board and folding box board deliver the print surface and fold quality needed for retail cartons. Our kraft paper offers natural strength for bags and wraps. All products are available with FSC certification and can be supplied in custom sheet sizes or reel formats.",
      es: "YOUNGSUN suministra una gama completa de cartones para embalaje diseñados para cada formato. Nuestro cartón gris proporciona estructura rígida a precios competitivos. Nuestro cartón dúplex y folding box board ofrecen la superficie de impresión y calidad de plegado necesarias para cajas minoristas. Nuestro papel kraft ofrece resistencia natural para bolsas y envolturas. Todos los productos están disponibles con certificación FSC."
    },
    recommendedProducts: ["grey-board", "duplex-board", "folding-box-board", "c2s-art-board", "kraft-paper", "black-paper", "color-card-paper", "gold-silver-card"],
    faqs: [
      { q: { en: "What board is best for rigid luxury boxes?", es: "¿Qué cartón es mejor para cajas rígidas de lujo?" }, a: { en: "Grey board (1.5mm–3.0mm) is the industry standard for rigid boxes. It provides excellent stiffness and is typically wrapped with printed paper, fancy paper, or fabric for the finished look.", es: "El cartón gris (1.5mm–3.0mm) es el estándar para cajas rígidas. Proporciona excelente rigidez y generalmente se envuelve con papel impreso, papel fancy o tela para el acabado final." } },
      { q: { en: "Do you supply FSC-certified packaging board?", es: "¿Suministran cartón con certificación FSC?" }, a: { en: "Yes. All YOUNGSUN packaging boards are available with FSC certification. FSC 100%, FSC Mix, and FSC Recycled labels are available depending on the product grade.", es: "Sí. Todos los cartones de embalaje YOUNGSUN están disponibles con certificación FSC. Las etiquetas FSC 100%, FSC Mix y FSC Reciclado están disponibles según el grado del producto." } },
      { q: { en: "What is the minimum order quantity?", es: "¿Cuál es la cantidad mínima de pedido?" }, a: { en: "Standard MOQ is 1 metric ton. For custom sizes or colors, minimums may vary. Contact us for specific product MOQs.", es: "El MOQ estándar es de 1 tonelada métrica. Para tamaños o colores personalizados, los mínimos pueden variar. Contáctenos para MOQs específicos." } }
    ]
  },
  {
    id: "food-beverage",
    title: { en: "Food & Beverage", es: "Alimentos y Bebidas" },
    icon: "🍽️",
    heroImage: "/images/products/food-packaging/food-packaging-paper-detail.jpg",
    tagline: {
      en: "Food-safe paper and board — from disposable cups to grease-resistant wraps.",
      es: "Papel y cartón aptos para alimentos — desde vasos desechables hasta envolturas resistentes a la grasa."
    },
    overview: {
      en: "Food packaging is one of the most technically demanding segments of the paper industry. Materials must be safe for food contact, resistant to grease and moisture, strong enough for hot liquids, and compliant with evolving regulations across different markets. YOUNGSUN supplies a complete portfolio of food-grade papers designed for converters serving QSR chains, food manufacturers, and food-service distributors worldwide.",
      es: "El embalaje de alimentos es uno de los segmentos más exigentes de la industria papelera. Los materiales deben ser seguros para contacto alimentario, resistentes a grasa y humedad, suficientemente fuertes para líquidos calientes y cumplir con regulaciones en evolución. YOUNGSUN suministra una cartera completa de papeles de grado alimentario para convertidores que sirven a cadenas QSR, fabricantes de alimentos y distribuidores de servicios alimentarios."
    },
    challenges: [
      {
        title: { en: "Food safety compliance", es: "Cumplimiento de seguridad alimentaria" },
        desc: { en: "FDA, EU 1935/2004, and GB 9685 compliance required for different markets.", es: "Se requiere cumplimiento FDA, EU 1935/2004 y GB 9685 para diferentes mercados." }
      },
      {
        title: { en: "Grease and moisture resistance", es: "Resistencia a grasa y humedad" },
        desc: { en: "Papers must prevent oil penetration and maintain structural integrity with wet or fatty foods.", es: "Los papeles deben prevenir la penetración de aceite y mantener la integridad estructural con alimentos húmedos o grasos." }
      },
      {
        title: { en: "Heat sealability", es: "Sellabilidad térmica" },
        desc: { en: "Cup stock and coated papers must heat-seal reliably at high converting speeds.", es: "El papel para vasos y papeles recubiertos deben sellarse térmicamente de manera confiable a altas velocidades de conversión." }
      },
      {
        title: { en: "PFAS-free requirements", es: "Requisitos libres de PFAS" },
        desc: { en: "Growing regulatory pressure to eliminate PFAS from food packaging — our greaseproof paper achieves oil resistance through mechanical fiber densification, not chemical treatment.", es: "Creciente presión regulatoria para eliminar PFAS del embalaje alimentario — nuestro papel antigrasa logra resistencia al aceite mediante densificación mecánica de fibra, no tratamiento químico." }
      }
    ],
    solutions: {
      en: "Our food packaging portfolio includes cupstock board (160–330 gsm) for hot and cold drink cups, PFAS-free greaseproof paper (35–60 gsm, KIT 6+) for wraps and liners, PE coated paper for moisture barrier applications, and silicone coated paper for non-stick baking and release applications. All products are available with FSC certification and food-contact compliance documentation for your target market.",
      es: "Nuestra cartera de embalaje alimentario incluye cartón para vasos (160–330 gsm), papel antigrasa libre de PFAS (35–60 gsm, KIT 6+), papel recubierto PE para barrera de humedad y papel siliconado para aplicaciones antiadherentes. Todos los productos están disponibles con certificación FSC y documentación de cumplimiento para contacto alimentario."
    },
    recommendedProducts: ["cup-paper", "greaseproof-paper", "pe-coated-paper", "silicone-coated-paper", "kraft-paper", "mg-paper"],
    faqs: [
      { q: { en: "Is your greaseproof paper PFAS-free?", es: "¿Su papel antigrasa es libre de PFAS?" }, a: { en: "Yes. YOUNGSUN greaseproof paper achieves oil resistance through mechanical fiber densification during the papermaking process — no PFAS chemicals are added. PFAS-free certification documentation is available on request.", es: "Sí. El papel antigrasa YOUNGSUN logra resistencia al aceite mediante densificación mecánica de fibra — no se añaden químicos PFAS. La documentación de certificación libre de PFAS está disponible bajo solicitud." } },
      { q: { en: "What KIT rating do I need for burger wrap?", es: "¿Qué clasificación KIT necesito para envoltura de hamburguesas?" }, a: { en: "KIT 6–8 is typically sufficient for burgers and sandwiches. Higher-fat foods like fried chicken or cheese may require KIT 8+.", es: "KIT 6–8 es típicamente suficiente para hamburguesas y sándwiches. Alimentos más grasos como pollo frito o queso pueden requerir KIT 8+." } },
      { q: { en: "Do you provide FDA compliance documentation?", es: "¿Proporcionan documentación de cumplimiento FDA?" }, a: { en: "Yes. We provide Declaration of Compliance (DoC) documents and test reports for FDA 21 CFR, EU 1935/2004, and GB 9685. Please specify your target market when requesting a quotation.", es: "Sí. Proporcionamos documentos de Declaración de Conformidad e informes de prueba para FDA 21 CFR, EU 1935/2004 y GB 9685. Especifique su mercado objetivo al solicitar cotización." } }
    ]
  },
  {
    id: "luxury-cosmetics",
    title: { en: "Luxury & Cosmetics", es: "Lujo y Cosmética" },
    icon: "✨",
    heroImage: "/images/products/fancy-paper/fancy-paper-overview.png",
    tagline: {
      en: "Tactile surfaces and premium finishes — packaging that communicates luxury before the product is revealed.",
      es: "Superficies táctiles y acabados premium — embalaje que comunica lujo antes de revelar el producto."
    },
    overview: {
      en: "In luxury and cosmetics packaging, the material IS the message. Before a customer sees the product, they touch the box. The surface texture, the weight of the board, the way light catches a pearlescent finish — these sensory details define brand perception. YOUNGSUN's fancy paper collection provides designers and brands with a palette of textures, colors, and finishes that elevate packaging from functional to memorable.",
      es: "En el embalaje de lujo y cosmética, el material ES el mensaje. Antes de que el cliente vea el producto, toca la caja. La textura superficial, el peso del cartón, la forma en que la luz capta un acabado perlado — estos detalles sensoriales definen la percepción de marca. La colección de papeles fancy de YOUNGSUN proporciona a diseñadores y marcas una paleta de texturas, colores y acabados que elevan el embalaje de funcional a memorable."
    },
    challenges: [
      {
        title: { en: "Sensory differentiation", es: "Diferenciación sensorial" },
        desc: { en: "Luxury brands need packaging that stands out through touch, not just visuals. Soft-touch, leather texture, and pearlescent finishes create memorable unboxing experiences.", es: "Las marcas de lujo necesitan embalaje que destaque por el tacto, no solo por lo visual. Los acabados soft-touch, textura de cuero y perlados crean experiencias de unboxing memorables." }
      },
      {
        title: { en: "Color precision", es: "Precisión de color" },
        desc: { en: "Brand colors must be consistent across packaging suites — matching Pantone specifications for boxes, tags, and inserts.", es: "Los colores de marca deben ser consistentes en todos los conjuntos de embalaje — coincidiendo con especificaciones Pantone para cajas, etiquetas e insertos." }
      },
      {
        title: { en: "Foil and embossing compatibility", es: "Compatibilidad con foil y relieve" },
        desc: { en: "Premium finishing techniques require papers that accept foil stamping, embossing, and debossing cleanly without cracking or delamination.", es: "Las técnicas de acabado premium requieren papeles que acepten estampado foil, relieve y bajorrelieve limpiamente sin agrietarse ni delaminarse." }
      },
      {
        title: { en: "Sustainability without compromise", es: "Sostenibilidad sin compromiso" },
        desc: { en: "Luxury consumers increasingly demand sustainable packaging — the challenge is achieving premium look and feel with FSC-certified and recycled materials.", es: "Los consumidores de lujo exigen cada vez más embalaje sostenible — el desafío es lograr apariencia y tacto premium con materiales certificados FSC y reciclados." }
      }
    ],
    solutions: {
      en: "Our fancy paper collection includes soft touch paper with its velvet-smooth surface, leather paper with authentic grain patterns, pearlescent paper with subtle shimmer, embossed paper with 3D texture, and through-dyed black paper for dramatic contrast with gold foil. We also offer color card paper in standard, deep, and custom-matched shades. Every grade is tested for foil stamping, embossing, die-cutting, and folding performance.",
      es: "Nuestra colección de papeles fancy incluye papel soft touch con superficie aterciopelada, papel cuero con patrones de grano auténtico, papel perlado con brillo sutil, papel gofrado con textura 3D y papel negro teñido en masa para contraste dramático con foil dorado. También ofrecemos cartulina de color en tonos estándar, profundos y personalizados."
    },
    recommendedProducts: ["soft-touch-paper", "leather-paper", "pearlescent-paper", "embossed-paper", "black-paper", "color-card-paper", "gold-silver-card", "tracing-paper", "color-tissue-paper", "label-paper"],
    faqs: [
      { q: { en: "What paper works best with gold foil stamping?", es: "¿Qué papel funciona mejor con estampado foil dorado?" }, a: { en: "Smooth, coated papers produce the cleanest foil results. Black paper (through-dyed) with gold foil creates the highest contrast and is a classic luxury combination. Soft touch paper with foil creates an interesting matte-metallic tension.", es: "Los papeles lisos y recubiertos producen los resultados de foil más limpios. El papel negro (teñido en masa) con foil dorado crea el mayor contraste y es una combinación clásica de lujo. El papel soft touch con foil crea una tensión mate-metálica interesante." } },
      { q: { en: "Can you match our brand color?", es: "¿Pueden igualar nuestro color de marca?" }, a: { en: "Yes. Custom color matching is available for color card paper, subject to minimum order quantity (typically 3–5 metric tons). Please provide your Pantone reference or physical color sample.", es: "Sí. El match de color personalizado está disponible para cartulina de color, sujeto a cantidad mínima de pedido (típicamente 3–5 toneladas). Proporcione su referencia Pantone o muestra física de color." } },
      { q: { en: "Is your leather paper made from animal leather?", es: "¿Su papel cuero está hecho de cuero animal?" }, a: { en: "No. YOUNGSUN leather paper is 100% animal-free. It replicates the grain, depth, and hand-feel of genuine leather through embossing and surface treatment on a paper base. Available in crocodile, calf, ostrich, and pebble grain patterns.", es: "No. El papel cuero YOUNGSUN es 100% libre de animales. Replica el grano, profundidad y tacto del cuero genuino mediante gofrado y tratamiento superficial sobre base de papel. Disponible en patrones de cocodrilo, ternera, avestruz y grano de piedra." } }
    ]
  },
  {
    id: "publishing-stationery",
    title: { en: "Publishing & Stationery", es: "Editorial y Papelería" },
    icon: "📚",
    heroImage: "/images/products/culture-paper/culture-paper.png",
    tagline: {
      en: "High-performance printing surfaces — from art books to business stationery.",
      es: "Superficies de impresión de alto rendimiento — desde libros de arte hasta papelería comercial."
    },
    overview: {
      en: "Publishing and stationery demand papers that balance print quality, opacity, bulk, and cost. Whether it's a high-end art book requiring coated paper for image reproduction, an office stationery range needing consistent uncoated woodfree paper, or a mass-market catalog optimizing cost per page, paper selection directly impacts the final product's quality, weight, and economics.",
      es: "La industria editorial y de papelería demanda papeles que equilibren calidad de impresión, opacidad, volumen y costo. Ya sea un libro de arte que requiere papel estucado para reproducción de imágenes, una línea de papelería que necesita papel woodfree no estucado consistente, o un catálogo masivo optimizando costo por página, la selección de papel impacta directamente la calidad, peso y economía del producto final."
    },
    challenges: [
      {
        title: { en: "Print fidelity", es: "Fidelidad de impresión" },
        desc: { en: "High-resolution image reproduction requires consistent coating, brightness, and smoothness across the entire sheet.", es: "La reproducción de imágenes de alta resolución requiere recubrimiento, blancura y lisura consistentes en toda la hoja." }
      },
      {
        title: { en: "Opacity and bulk", es: "Opacidad y volumen" },
        desc: { en: "Books and publications need sufficient opacity to prevent show-through while maintaining a desirable hand-feel and page count.", es: "Libros y publicaciones necesitan opacidad suficiente para prevenir transparencia mientras mantienen un tacto agradable y conteo de páginas." }
      },
      {
        title: { en: "Runability", es: "Runnability" },
        desc: { en: "Papers must perform flawlessly on high-speed web and sheet-fed presses without breaks, dust, or misregistration.", es: "Los papeles deben funcionar perfectamente en prensas rotativas y de pliegos de alta velocidad sin roturas, polvo o mal registro." }
      }
    ],
    solutions: {
      en: "YOUNGSUN supplies a full range of culture papers: woodfree offset paper for books and notebooks, C2S art paper (gloss and matt) for premium catalogs and magazines, LWC paper for high-volume publishing, color offset paper for forms and inserts, and NCR paper for business forms. All grades are available in sheets or reels with consistent quality from major mill partners including APP, CHENMING, and NINEDRAGON.",
      es: "YOUNGSUN suministra una gama completa de papeles culturales: papel offset woodfree para libros y cuadernos, papel arte C2S (brillo y mate) para catálogos y revistas premium, papel LWC para publicaciones de alto volumen, papel offset color para formularios e insertos, y papel NCR para formularios comerciales. Todos los grados disponibles en hojas o bobinas."
    },
    recommendedProducts: ["woodfree-paper", "art-paper", "lwc-paper", "color-offset-paper", "ncr-paper", "copy-paper", "newsprint"],
    faqs: [
      { q: { en: "What is the difference between woodfree and coated paper?", es: "¿Cuál es la diferencia entre papel woodfree y estucado?" }, a: { en: "Woodfree paper is uncoated — ink absorbs into the fiber surface, giving a natural, matte appearance. Coated paper (C2S art paper) has a mineral coating that sits on top of the fibers, producing sharper images, deeper blacks, and more vibrant colors. Choose woodfree for novels and stationery; choose coated for art books and magazines.", es: "El papel woodfree no está estucado — la tinta se absorbe en la superficie de fibra, dando una apariencia natural y mate. El papel estucado (papel arte C2S) tiene un recubrimiento mineral sobre las fibras, produciendo imágenes más nítidas, negros más profundos y colores más vibrantes. Elija woodfree para novelas y papelería; elija estucado para libros de arte y revistas." } },
      { q: { en: "Can you supply in custom sheet sizes?", es: "¿Pueden suministrar en tamaños de hoja personalizados?" }, a: { en: "Yes. Custom sheet sizes are available. Common stock sizes include 787×1092mm and 889×1194mm. Specify your required dimensions when requesting a quotation.", es: "Sí. Tamaños de hoja personalizados están disponibles. Los tamaños comunes incluyen 787×1092mm y 889×1194mm. Especifique sus dimensiones requeridas al solicitar cotización." } }
    ]
  },
  {
    id: "electronics-industrial",
    title: { en: "Electronics & Industrial", es: "Electrónica e Industrial" },
    icon: "⚙️",
    heroImage: "/images/hero/paper-products-banner-background.png",
    tagline: {
      en: "High-performance papers for demanding technical applications — from electrical insulation to industrial packaging.",
      es: "Papeles de alto rendimiento para aplicaciones técnicas exigentes — desde aislamiento eléctrico hasta embalaje industrial."
    },
    overview: {
      en: "Industrial paper applications require specialized grades engineered for specific technical performance: electrical insulation, thermal conductivity, chemical resistance, mechanical cushioning, and conductive or anti-static properties. YOUNGSUN supplies technical papers and boards that meet tight specifications for electronics manufacturing, automotive components, industrial packaging, and construction materials.",
      es: "Las aplicaciones industriales de papel requieren grados especializados diseñados para rendimiento técnico específico: aislamiento eléctrico, conductividad térmica, resistencia química, amortiguación mecánica y propiedades conductoras o antiestáticas. YOUNGSUN suministra papeles y cartones técnicos que cumplen especificaciones estrictas para fabricación electrónica, componentes automotrices, embalaje industrial y materiales de construcción."
    },
    challenges: [
      {
        title: { en: "Technical specifications", es: "Especificaciones técnicas" },
        desc: { en: "Industrial papers must meet precise electrical, thermal, and mechanical specifications with tight tolerances.", es: "Los papeles industriales deben cumplir especificaciones eléctricas, térmicas y mecánicas precisas con tolerancias ajustadas." }
      },
      {
        title: { en: "Consistency at scale", es: "Consistencia a escala" },
        desc: { en: "Mass production requires batch-to-batch consistency — a single out-of-spec batch can halt an entire production line.", es: "La producción en masa requiere consistencia lote a lote — un solo lote fuera de especificación puede detener toda una línea de producción." }
      },
      {
        title: { en: "Supply chain reliability", es: "Fiabilidad de cadena de suministro" },
        desc: { en: "Industrial buyers need guaranteed supply with predictable lead times and buffer stock availability.", es: "Los compradores industriales necesitan suministro garantizado con tiempos de entrega predecibles y disponibilidad de stock de reserva." }
      }
    ],
    solutions: {
      en: "Our industrial portfolio includes kraft paper for protective packaging and interleaving, grey board for structural components, PE coated paper for moisture barriers, and specialty grades for electrical and thermal applications. With 50,000 tons of warehouse stock and partnerships with major Chinese mills, we provide reliable, large-volume supply with consistent quality.",
      es: "Nuestra cartera industrial incluye papel kraft para embalaje protector e intercalado, cartón gris para componentes estructurales, papel recubierto PE para barreras de humedad y grados especiales para aplicaciones eléctricas y térmicas. Con 50,000 toneladas de stock en almacén y alianzas con los principales molinos chinos, proporcionamos suministro confiable a gran volumen con calidad consistente."
    },
    recommendedProducts: ["kraft-paper", "grey-board", "pe-coated-paper", "mg-paper", "silicone-coated-paper"],
    faqs: [
      { q: { en: "What is the maximum roll width available?", es: "¿Cuál es el ancho máximo de bobina disponible?" }, a: { en: "Roll widths vary by product grade. Standard widths range from 300mm to 2400mm. Custom slitting to your exact specification is available. Contact us with your requirements.", es: "Los anchos de bobina varían según el grado del producto. Los anchos estándar varían de 300mm a 2400mm. Corte personalizado a su especificación exacta está disponible. Contáctenos con sus requisitos." } },
      { q: { en: "Do you offer just-in-time delivery?", es: "¿Ofrecen entrega just-in-time?" }, a: { en: "Yes. For qualified long-term contracts, we can arrange scheduled deliveries aligned with your production planning. Our warehouse stock of 50,000 tons enables flexible fulfillment.", es: "Sí. Para contratos calificados a largo plazo, podemos organizar entregas programadas alineadas con su planificación de producción. Nuestro stock de 50,000 toneladas permite cumplimiento flexible." } }
    ]
  },
  {
    id: "construction-decoration",
    title: { en: "Construction & Decoration", es: "Construcción y Decoración" },
    icon: "🏗️",
    heroImage: "/images/hero/background-processing-services-dark.png",
    tagline: {
      en: "Durable paper-based materials for building, interior design, and surface decoration.",
      es: "Materiales duraderos a base de papel para construcción, diseño interior y decoración de superficies."
    },
    overview: {
      en: "Paper and board products play a vital role in modern construction and interior decoration — from decorative laminates and wall coverings to insulation facing and protective underlayment. These applications demand materials with fire resistance, dimensional stability, moisture tolerance, and long-term durability. YOUNGSUN supplies base papers and boards engineered for converting into construction and decoration products.",
      es: "Los productos de papel y cartón juegan un papel vital en la construcción moderna y decoración interior — desde laminados decorativos y revestimientos de paredes hasta revestimientos aislantes y capas base protectoras. Estas aplicaciones exigen materiales con resistencia al fuego, estabilidad dimensional, tolerancia a la humedad y durabilidad a largo plazo."
    },
    challenges: [
      {
        title: { en: "Fire resistance", es: "Resistencia al fuego" },
        desc: { en: "Construction materials must meet fire safety standards (BS 476, EN 13501, ASTM E84) for building code compliance.", es: "Los materiales de construcción deben cumplir estándares de seguridad contra incendios (BS 476, EN 13501, ASTM E84) para cumplimiento de código de construcción." }
      },
      {
        title: { en: "Dimensional stability", es: "Estabilidad dimensional" },
        desc: { en: "Papers used in laminates and surfaces must resist warping, shrinking, and expanding with humidity and temperature changes.", es: "Los papeles usados en laminados y superficies deben resistir deformación, contracción y expansión con cambios de humedad y temperatura." }
      },
      {
        title: { en: "Surface quality", es: "Calidad superficial" },
        desc: { en: "Decorative papers require uniform formation, consistent absorbency for resin impregnation, and clean printing surface for wood-grain and pattern reproduction.", es: "Los papeles decorativos requieren formación uniforme, absorbencia consistente para impregnación de resina y superficie de impresión limpia para reproducción de vetas de madera y patrones." }
      }
    ],
    solutions: {
      en: "YOUNGSUN supplies base papers for decorative laminates, impregnation papers for surface finishing, kraft paper for construction underlayment and insulation facing, and heavy-duty boards for temporary protection and construction packaging. Our products are sourced from mills with ISO 9001 and ISO 14001 certification, ensuring consistent quality for industrial converting processes.",
      es: "YOUNGSUN suministra papeles base para laminados decorativos, papeles de impregnación para acabado de superficies, papel kraft para capas base de construcción y revestimiento aislante, y cartones de alta resistencia para protección temporal y embalaje de construcción. Nuestros productos provienen de molinos con certificación ISO 9001 e ISO 14001."
    },
    recommendedProducts: ["kraft-paper", "grey-board", "duplex-board", "folding-box-board"],
    faqs: [
      { q: { en: "Can you supply fire-retardant treated paper?", es: "¿Pueden suministrar papel tratado ignífugo?" }, a: { en: "Fire-retardant treatments can be applied to certain grades. Please specify the required fire rating standard (BS 476, ASTM E84, EN 13501) and we will confirm availability for your application.", es: "Se pueden aplicar tratamientos ignífugos a ciertos grados. Especifique el estándar de clasificación de fuego requerido (BS 476, ASTM E84, EN 13501) y confirmaremos disponibilidad para su aplicación." } }
    ]
  }
];

export const industryCount = industries.length;

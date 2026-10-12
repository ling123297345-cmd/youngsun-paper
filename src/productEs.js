import { cmsProductEs } from "./generated/cmsProducts.js";

// Spanish translations for all product fields
// Key = product ID, Value = { tagline, specs, applications }

export const productEs = {
  // PACKAGE BOARD
  "grey-board": {
    tagline: "Cartón gris reciclado de alta densidad para embalaje rígido, encuadernación y papelería — resistencia estructural rentable.",
    specs: ["Grosor: 0.5 – 4.0 mm", "Color: Gris natural / Tinte personalizado", "Superficie: Lisa ambas caras", "Formato: Hojas y bobinas", "Humedad: 8% ± 2%", "Fibra: 100% reciclada post-consumo"],
    applications: ["Cajas rígidas de regalo", "Tapas de libros de tapa dura", "Rompecabezas", "Carpetas de archivo", "Cartelería serigrafiada"],
  },
  "black-paper": {
    tagline: "Papel negro teñido en masa con color uniforme — sin blanqueamiento en bordes, sin transferencia de color.",
    specs: ["Gramaje: 80–400 gsm", "Color: Negro teñido en masa", "Acabados: Sin estucar / Mate / Brillo", "Formato: Hojas y bobinas", "Resistencia a la luz: ISO 105-B02"],
    applications: ["Forro de cajas de lujo", "Álbumes de fotos", "Tarjetas de felicitación", "Bolsas de compras premium", "Tarjetas de visita"],
  },
  "color-card-paper": {
    tagline: "Cartulina de color vibrante y uniforme — desde bolsas hasta cajas exclusivas.",
    specs: ["Gramaje: 120–400 gsm", "Color: Teñido en masa, 30+ colores", "Acabado: Lisa / Texturizada", "Formato: Hojas y bobinas", "Consistencia: Delta E ≤ 1.5"],
    applications: ["Bolsas de compras", "Cajas de embalaje premium", "Carpetas de presentación", "Etiquetas colgantes", "Expositores PLV"],
  },
  "folding-box-board": {
    tagline: "Cartón multicapa con liner blanco brillante — para estuches farmacéuticos, cosméticos y alimentarios.",
    specs: ["Gramaje: 200–450 gsm", "Grados: GC1/GC2/GC3", "Grosor: 350–650 μm", "Blancura: ISO 90%+", "Rigidez: Alta resistencia L&W"],
    applications: ["Estuches farmacéuticos", "Envases cosméticos", "Cajas de alimentos secos", "Envases de electrónica", "Cajas de chocolate"],
  },
  "art-paper": {
    tagline: "Papel arte estucado de doble cara con blancura, suavidad y brillo de impresión excepcionales — para publicaciones de gama alta, catálogos e impresión comercial.",
    specs: ["Gramaje: 80–200 gsm", "Acabado: Brillo/Mate/Seda", "Blancura: ISO 92%+", "Suavidad: ≤ 1.0 μm (PPS)", "Formato: Hojas y bobinas"],
    applications: ["Revistas y catálogos", "Libros de arte y fotografía", "Pósteres y calendarios", "Folletos de gama alta", "Lookbooks de marcas de lujo"],
  },
  "c2s-art-board": {
    tagline: "Cartón estucado dos caras con acabado liso — para impresión premium y tarjetas de alta gama.",
    specs: ["Gramaje: 200–400 gsm", "Estucado: Doble cara (C2S)", "Blancura: ISO 92%+", "Suavidad: ≤ 1.5 μm", "Formato: Hojas estándar y personalizado"],
    applications: ["Tarjetas de felicitación de lujo", "Etiquetas colgantes premium", "Cubiertas de libros", "Portadas de catálogos", "Certificados y diplomas"],
  },
  "kraft-paper": {
    tagline: "Papel kraft virgen de alta resistencia para embalaje industrial y bolsas — resistente y reciclable.",
    specs: ["Gramaje: 35–200 gsm", "Grados: Natural/Blanqueado/Reciclado", "Índice de tracción: ≥ 80 Nm/g", "Índice de desgarro: ≥ 12 mNm²/g", "Formato: Bobinas y hojas"],
    applications: ["Sacos multicapa", "Liner para corrugado", "Envoltura industrial", "Bolsas de compras", "Sobres y embalaje postal"],
  },
  "duplex-board": {
    tagline: "Cartón de dos capas con cara blanca y reverso gris — rentable para embalaje minorista.",
    specs: ["Gramaje: 200–450 gsm", "Estructura: Cara blanca + reverso gris", "Blancura: ISO 85%+", "Formato: Hojas y bobinas", "Grado alimentario disponible"],
    applications: ["Estuches minoristas FMCG", "Cajas de zapatos", "Envases de juguetes", "Envases farmacéuticos secundarios", "Embalaje minorista general"],
  },
  "pe-coated-paper": {
    tagline: "Papel laminado PE para barrera contra humedad y termosellado.",
    description: "El papel recubierto con PE combina un sustrato de papel o cartón con una capa de polietileno aplicada por extrusión en una o ambas caras. Esta barrera aporta resistencia a la humedad y la grasa, además de permitir el termosellado para vasos, tarrinas, envases para llevar y otras aplicaciones alimentarias. Se ofrece con recubrimiento a una cara (1PE) o a dos caras (2PE), con pesos de PE de 12 a 30 gsm según la barrera requerida.",
    seoTitle: "Papel PE para vasos y envases alimentarios",
    metaDescription: "Papel y cartón con recubrimiento PE de 12–30 gsm, a una o dos caras, para vasos, tarrinas y envases para llevar. Solicite bobinas o muestras.",
    specs: ["Sustrato: Kraft/Board, 80–350 gsm", "Recubrimiento PE: 12–30 gsm", "Termosellable: 110–150°C", "Barrera: WVTR ≤ 10 g/m²/24h", "Grado alimentario: FDA y EU"],
    applications: ["Vasos de papel fríos/calientes", "Tarrinas de helado", "Envases para llevar", "Alimentos congelados", "Envoltura antigrasa"],
    variants: ["Papel recubierto con PE a una cara (1PE)", "Papel recubierto con PE a dos caras (2PE)", "Papel kraft recubierto con PE", "Cartón blanco recubierto con PE"],
    features: ["Barrera contra la humedad — La capa de PE limita la penetración de agua en envases de alimentos y líquidos.", "Termosellable — Rango estándar de termosellado de 110–150°C para formar vasos y recipientes.", "Resistencia a la grasa — Adecuado para aplicaciones alimentarias con aceite y grasa.", "Cumplimiento alimentario — Opciones para requisitos de contacto directo con alimentos según la documentación aplicable."],
    customization: ["Peso de recubrimiento PE de 12–30 gsm", "Recubrimiento a una o dos caras", "Gramaje personalizado del sustrato", "Bobinas cortadas al ancho requerido", "Embalaje personalizado"],
    commercial: { moq: "1 tonelada métrica", leadTime: "2–3 semanas", samples: "Muestras gratuitas disponibles", certification: "FSC disponible", containerLoading: "Carga completa 40HQ: 25 toneladas métricas" },
    quoteReqs: ["Tipo de papel o cartón base", "Gramaje del sustrato y del PE", "Recubrimiento a una o dos caras", "Ancho de bobina o tamaño de hoja", "Cantidad", "Aplicación y puerto de destino"],
  },
  "ckb": {
    tagline: "Cartón estucado con reverso kraft de alta resistencia para bebidas, alimentos, congelados y estuches plegables exigentes.",
    specs: ["Gramaje: 200–350 gsm", "Superficie: Cara blanca con triple estucado y reverso kraft sin blanquear", "Formato: Hojas, bobinas y medidas personalizadas", "Grado: CKB"],
    applications: ["Embalaje para bebidas", "Estuches para alimentos secos", "Envases para productos congelados", "Embalaje para almacenamiento en frío", "Cajas de juguetes", "Cajas de zapatos", "Embalaje de herramientas"],
  },
  // CULTURE PAPER
  "woodfree-paper": {
    tagline: "Papel sin pasta mecánica, blanco brillante y libre de ácido para oficina, libros e impresión comercial.",
    specs: ["Gramaje: 60–120 gsm", "Blancura: ISO 90–100%", "Opacidad: ≥ 90% a 80 gsm", "Valor Cobb: ≤ 30 g/m²", "Formato: Hojas A4/A3 y bobinas", "Libre de ácido: pH 7.0–9.0"],
    applications: ["Documentos de oficina A4/A3", "Publicación de libros", "Papelería comercial", "Impresión comercial", "Sobres y documentos de archivo"],
  },
  "color-offset-paper": {
    tagline: "Papel offset de color sin estucar — tono consistente, excelente imprimibilidad.",
    specs: ["Gramaje: 60–200 gsm", "Colores: 20+ estándar", "Consistencia: Delta E ≤ 1.5", "Superficie: Encolada para offset", "Formato: Hojas y bobinas"],
    applications: ["Papelería corporativa de color", "Programas de eventos", "Folletos publicitarios", "Scrapbooking", "Sobres de color"],
  },
  "lwc-paper": {
    tagline: "Papel estucado ligero para revistas, catálogos y papel de regalo impreso.",
    specs: ["Gramaje: 35–70 gsm", "Estucado: Ligero en máquina", "Blancura: ISO 70–80%", "Opacidad: ≥ 88% a 60 gsm", "Formato: Bobinas"],
    applications: ["Revistas y publicaciones", "Catálogos minoristas", "Insertos publicitarios", "Papel de regalo impreso", "Folletos de correo directo"],
  },
  "ncr-paper": {
    tagline: "Papel autocopiativo sin carbón para formularios y facturas — copia limpia sin manchas.",
    specs: ["Tipos: CB/CFB/CF", "Gramaje: 50–60 gsm", "Colores: Blanco/Rosa/Amarillo/Azul/Verde", "Color imagen: Azul o Negro", "Formato: Hojas y bobinas"],
    applications: ["Formularios comerciales", "Talonarios de recibos", "Contratos multicopia", "Recetas médicas", "Albaranes de logística"],
  },
  "multi-color-bond-paper": {
    tagline: "Papel bond en múltiples colores — superficie lisa, alimentación fiable en impresora.",
    specs: ["Gramaje: 70–80 gsm", "Colores: Múltiples colores prácticos", "Superficie: Lisa para láser/inyección", "Formato: A4 y Carta", "Embalaje: 500 hojas/resma"],
    applications: ["Archivo por colores", "Volantes y anuncios", "Manualidades escolares", "Menús de restaurante", "Boletines comunitarios"],
  },
  "copy-paper": {
    tagline: "Programa de papel de oficina en formatos A3, A4, A5, series B y medidas seleccionadas de EE. UU. para distribución y marca privada.",
    specs: ["Gramaje: 70/75/80 gsm", "Blancura: ISO 92–100%", "Formato: A4, A3, Carta, Legal", "Opacidad: ≥ 92% a 80 gsm", "Embalaje: 500 hojas/resma"],
    applications: ["Impresión de oficina", "Uso escolar", "Adquisiciones gubernamentales", "Oficina en casa", "Distribución mayorista"],
  },
  "a4-copy-paper": {
    tagline: "Gama específica de papel A4 de 210×297 mm para compradores que necesitan embalaje uniforme y listo para exportación.",
    specs: ["Gramaje: 70/75/80 gsm", "Blancura: ISO 92–100%", "Formato: A4 (210×297mm)", "Opacidad: ≥ 92%", "Embalaje: 500 hojas/resma, 5–10 resmas/caja"],
    applications: ["Impresión de oficina", "Adquisiciones escolares", "Suministro gubernamental", "Oficina en casa", "Distribución mayorista"],
  },
  "a4-thermal-paper": {
    tagline: "Papel térmico tamaño A4 para impresión portátil — sin tinta ni tóner, solo calor.",
    specs: ["Tamaño: A4 (210×297mm)", "Recubrimiento: Térmico directo", "Color imagen: Negro", "Compatibilidad: Impresoras térmicas portátiles", "Sin tinta/tóner"],
    applications: ["Impresión portátil para ventas", "Contratos in situ", "Documentos médicos", "Albaranes de logística", "Coworking y viajes"],
  },
  "thermal-paper-roll": {
    tagline: "Rollos de papel térmico para TPV, recibos e impresoras de fotos instantáneas.",
    specs: ["Ancho: 57mm/80mm", "Diámetro: 30–80mm", "Núcleo: 12/17/25mm", "Recubrimiento: Térmico directo", "Embalaje: Rollos retractilados"],
    applications: ["Recibos TPV", "Recibos de tarjeta", "Tickets de cocina", "Etiquetas logísticas", "Mini impresoras fotográficas"],
  },
  "tracing-paper": {
    tagline: "Papel translúcido, liso y dimensionalmente estable — revela lo que hay debajo.",
    specs: ["Gramaje: 45–200 gsm", "Translucidez: 50–70% transmisión", "Superficie: Lisa, encolada", "Alta resistencia a la tracción", "Formato: Hojas y bobinas"],
    applications: ["Superposiciones de arquitectura", "Diseño de moda", "Papelería creativa", "Ventanas decorativas", "Arte e ilustración"],
  },
  "newsprint": {
    tagline: "Papel prensa ligero y rentable para impresión rápida de periódicos, encartes publicitarios y publicaciones de gran tirada.",
    specs: ["Gramaje: 40/42/45/48.8/52/57 gsm", "Blancura: ISO 56–68%", "Opacidad: ≥92% a 48.8 gsm", "Formato: Bobinas de 600–1800 mm; hojas bajo pedido", "Composición: 80–90% pulpa mecánica y 10–20% pulpa química"],
    applications: ["Periódicos diarios y semanales", "Encartes y folletos publicitarios", "Publicaciones comunitarias de gran tirada", "Boletines comerciales e industriales", "Materiales para campañas", "Directorios y catálogos económicos"],
  },
  // FANCY PAPER
  "soft-touch-paper": {
    tagline: "Papel con recubrimiento táctil aterciopelado — la sensación de lujo que invita a tocar.",
    specs: ["Sustrato: Papel/cartón, 120–400 gsm", "Recubrimiento: PU base agua", "Textura: Terciopelo suave", "Compatibilidad: Offset, UV, serigrafía", "Resistente a huellas"],
    applications: ["Tarjetas de visita de lujo", "Cubiertas de libros premium", "Envases de cosméticos", "Invitaciones de boda", "Etiquetas colgantes de moda"],
  },
  "leather-paper": {
    tagline: "Papel que se ve y se siente como cuero genuino — vegano, duradero, premium.",
    specs: ["Sustrato: FBB/Grey board, 120–400 gsm", "Gofrado: Textura de cuero", "Colores: Tonos clásicos de cuero", "Superficie: Laminado mate o PU", "100% libre de animales"],
    applications: ["Cubiertas de libros", "Cajas de regalo premium", "Envases de vinos", "Carpetas de presentación", "Cajas de relojes"],
  },
  "pearlescent-paper": {
    tagline: "Papel iridiscente con brillo perlado — elegancia que se mueve con la luz.",
    specs: ["Gramaje: 120–350 gsm", "Acabado: Perla/Iridiscente", "Colores: Perla blanca, champagne, oro, plata", "Imprimible: Offset, serigrafía, foil", "Formato: Hojas y bobinas"],
    applications: ["Invitaciones de boda", "Envases de cosmética", "Forros de perfume", "Tarjetas de lujo", "Carpetas de certificados"],
  },
  "embossed-paper": {
    tagline: "Papel con textura tridimensional en relieve — convierte el embalaje en experiencia táctil.",
    description: "El papel gofrado incorpora un patrón en relieve prensado mecánicamente sobre la superficie con calor y presión. A diferencia de una textura impresa, crea una topografía real que refleja la luz y aporta una sensación táctil premium. Hay patrones clásicos como lino, fieltro, lienzo y veta de madera, además de diseños personalizados. Es compatible con impresión posterior, estampado en caliente y troquelado para cajas de lujo, etiquetas, cubiertas y papelería especial.",
    seoTitle: "Papel gofrado para embalaje de lujo",
    metaDescription: "Papel gofrado de 80–400 gsm con texturas de lino, fieltro, lienzo, madera o diseño personalizado para cajas, cubiertas y etiquetas. Solicite muestras.",
    specs: ["Sustrato: 80–400 gsm", "Patrones: Lino/Fieltro/Lienzo/Veta/Personalizado", "Profundidad: Fina a profunda", "Imprimible post-gofrado", "Formato: Hojas y bobinas"],
    applications: ["Envases de lujo", "Etiquetas colgantes de moda", "Tarjetas corporativas", "Cubiertas de libros", "Papelería de boda"],
    variants: ["Papel gofrado efecto lino", "Papel gofrado efecto fieltro", "Papel gofrado efecto lienzo", "Papel gofrado con veta de madera", "Papel gofrado con patrón personalizado"],
    features: ["Textura 3D real — Los patrones prensados crean un relieve físico, no una imitación impresa.", "Experiencia táctil de marca — La textura comunica calidad premium en embalaje y papelería.", "Amplia biblioteca de patrones — Lino, fieltro, lienzo, veta de madera y diseños personalizados.", "Compatible con acabados — Admite impresión, estampado en caliente y troquelado posteriores."],
    customization: ["Selección de patrón estándar o personalizado", "Profundidad de gofrado", "Gramaje y sustrato", "Suministro en hojas o bobinas", "Embalaje personalizado"],
    commercial: { moq: "1 tonelada métrica", leadTime: "2–3 semanas", samples: "Muestras gratuitas disponibles", certification: "FSC disponible", containerLoading: "Carga completa 40HQ: 25 toneladas métricas" },
    quoteReqs: ["Referencia del patrón o textura", "Gramaje del papel o cartón", "Profundidad de gofrado", "Tamaño de hoja o bobina", "Proceso de impresión y acabado", "Cantidad y puerto de destino"],
  },
  "label-paper": {
    tagline: "Papel facial premium para etiquetas — liso, imprimible, para conversión de alta velocidad.",
    description: "El papel para etiquetas se utiliza como cara imprimible de etiquetas autoadhesivas, etiquetas con cola húmeda y tags colgantes. Debe mantener suficiente resistencia para el troquelado, el desmallado y el rebobinado a alta velocidad, además de ofrecer una superficie lisa para textos, códigos y gráficos de marca. Está disponible en C1S para etiquetas y C2S para tags premium, con gramajes de 60 a 250 gsm.",
    seoTitle: "Papel para etiquetas y tags colgantes",
    metaDescription: "Papel C1S, C2S y metalizado de 60–250 gsm para etiquetas autoadhesivas, etiquetas con cola y tags colgantes. Solicite bobinas, hojas o muestras.",
    specs: ["Gramaje: 60–250 gsm", "Tipos: C1S/C2S/Metalizado", "Acabado: Brillo/Mate/Semimate", "Alta resistencia a la tracción", "Formato: Bobinas y hojas"],
    applications: ["Etiquetas para botellas", "Etiquetas colgantes de moda", "Etiquetas de bebidas", "Etiquetas de precio", "Etiquetas de seguridad"],
    variants: ["Papel facial C1S para etiquetas", "Papel C2S para tags colgantes", "Papel metalizado para etiquetas", "Papel para etiquetas con cola húmeda"],
    features: ["Conversión a alta velocidad — Diseñado para troquelado, desmallado y rebobinado en producción.", "Superficie de impresión lisa — Reproduce textos finos, códigos de barras y gráficos con nitidez.", "Estabilidad dimensional — Ayuda a controlar el curvado y el estiramiento durante el adhesivado.", "Grados para distintos usos — C1S para etiquetas y C2S para tags colgantes premium."],
    customization: ["Grado C1S o C2S", "Acabado brillo, mate o semimate", "Gramaje personalizado", "Suministro en bobina o hoja", "Coordinación con el sistema adhesivo"],
    commercial: { moq: "1 tonelada métrica", leadTime: "2–3 semanas", samples: "Muestras gratuitas disponibles", certification: "FSC disponible", containerLoading: "Carga completa 40HQ: 25 toneladas métricas" },
    quoteReqs: ["Aplicación de etiqueta o tag", "Grado C1S, C2S o metalizado", "Gramaje y acabado", "Sistema de impresión y adhesivo", "Ancho de bobina o tamaño de hoja", "Cantidad y puerto de destino"],
  },
  "gold-silver-card": {
    tagline: "Cartulina metálica dorada y plateada con alto impacto visual para embalajes de lujo, tarjetas y presentación de marca.",
    specs: ["Gramaje: 200–400 gsm", "Acabados: Oro/Plata/Oro rosa/Oro champagne/Metálico personalizado", "Superficie: Metálica reflectante y lisa", "Formato: Hojas y bobinas", "Procesos: Offset, serigrafía, estampado, relieve y bajorrelieve", "Metalización: Al vacío o laminada con película metálica"],
    applications: ["Cajas rígidas y embalajes de lujo", "Tarjetas e invitaciones", "Envases de cosmética y perfume", "Cajas para joyería y relojes", "Embalajes de vino y bebidas espirituosas", "Carpetas y tarjetas premium", "Embalaje festivo"],
  },
  "color-tissue-paper": {
    tagline: "Papel seda de color ligero y translúcido para envolver regalos, proteger prendas y crear experiencias de desempaque de marca.",
    specs: ["Gramaje: 17/20/24/28 gsm", "Colores: Más de 30 tonos y ajuste PMS disponible", "Composición: Pulpa virgen o fibra reciclada, libre de ácido", "Propiedades: Color estable, no destiñe y plegado suave", "Formato: Hojas estándar de 500×750 mm y 750×1000 mm; medidas personalizadas"],
    applications: ["Envoltura de regalos y forro de cajas", "Presentación de zapatos y bolsos", "Embalaje de prendas y moda", "Envoltura floral", "Manualidades y decoración", "Papel seda impreso para experiencias de marca"],
  },
  // FOOD PACKAGING
  "cup-paper": {
    tagline: "Cartón para vasos con recubrimiento PE — apto para alimentos, rígido, optimizado para conversión.",
    specs: ["Sustrato: Kraft blanqueado, 180–350 gsm", "Recubrimiento PE: 1PE o 2PE", "Termosellado: 120–150°C", "Resistencia al agua: ≥ 24h a 95°C", "Grado alimentario: FDA, EU, GB"],
    applications: ["Vasos para bebidas calientes", "Vasos para bebidas frías", "Envases de sopa", "Tarrinas de helado", "Vasos para salsas"],
  },
  "greaseproof-paper": {
    tagline: "Papel antigrasa de alta densidad — sin recubrimiento, solo ingeniería de fibra pura.",
    specs: ["Gramaje: 28–80 gsm", "Resistencia a grasa: Kit 8–12", "Mecanismo: Densificación de fibra", "Libre de PFAS", "Resistente al horno hasta 220°C"],
    applications: ["Papel de hornear", "Envoltura de sándwiches", "Envoltura de mantequilla", "Forros de bandejas", "Papel para fish and chips"],
  },
  "mg-paper": {
    tagline: "Papel kraft blanco MG de alta calidad con una cara brillante imprimible y un reverso preparado para encolado, bolsas y embalaje flexible.",
    specs: [
      "Gramaje: 23–80 gsm",
      "Fibra: 100% pulpa de madera virgen",
      "Blancura D65: 87% ± 4%",
      "Superficie: Cara MG brillante y reverso mate para adhesión",
      "Suavidad Bekk: ≥80s a ≥120s según el gramaje",
      "Humedad: 4.5% ± 1.0%",
      "Tamaños estándar: 787 × 1092 mm y 889 × 1194 mm",
      "Formato: Hojas, resmas, medidas personalizadas y bobinas jumbo",
    ],
    applications: [
      "Envolturas para hamburguesas y sándwiches",
      "Bolsas de panadería y forros para bandejas",
      "Sobres de azúcar, harina y alimentos secos",
      "Papel base para recubrimiento PE/PLA o cera",
      "Complejos laminados con papel de aluminio",
      "Bolsas ligeras, papel de regalo y sobres",
      "Papel intercalador para metal o vidrio",
      "Sustratos para bolsas de esterilización médica",
    ],
  },
  "silicone-coated-paper": {
    tagline: "Papel antiadherente con silicona — liberación limpia en cada uso.",
    specs: ["Sustrato: Kraft, 40–120 gsm", "Silicona: Una o dos caras", "Resistencia al calor: 230°C", "Fuerza de liberación: Ajustable", "Grado alimentario: FDA, EU"],
    applications: ["Papel de hornear", "Liner para etiquetas", "Envoltura antiadherente", "Liner de moldeo industrial", "Papel para hamburguesas"],
  },
  "absorbent-paper": {
    tagline: "Papel absorbente de algodón de alto rendimiento — absorción rápida, textura natural.",
    description: "El papel absorbente YOUNGSUN, también conocido como papel secante o papel absorbente de algodón, utiliza una estructura porosa para absorber y retener líquidos con rapidez. Su superficie natural tipo fieltro aporta una presentación táctil para marcas premium. Está disponible en siete espesores de 0.4 a 1.6 mm y en blanco intenso o blanco natural, y admite troquelado, gofrado, bajorrelieve e impresión de logotipos para tiras de perfume, posavasos, tarjetas aromáticas e insertos.",
    seoTitle: "Papel absorbente para tiras de perfume",
    metaDescription: "Papel absorbente de fibra de algodón de 0.4–1.6 mm para tiras de perfume, posavasos, tarjetas aromáticas e insertos. Solicite hojas o muestras cortadas.",
    specs: ["Material: 100% fibra de algodón", "Espesor: 0.4–1.6 mm", "Gramaje: 380–1500 gsm", "Color: Blanco / Natural", "Certificado: FSC, contacto alimentario"],
    applications: ["Tiras para perfume", "Posavasos", "Tarjetas desecantes", "Tarjetas de frescura", "Etiquetas colgantes", "Forros de cajas de regalo"],
    variants: ["Papel absorbente blanco intenso", "Papel absorbente blanco natural", "Suministro en hojas y bobinas", "Tiras y posavasos troquelados"],
    features: ["Absorción rápida — La estructura porosa de algodón admite aplicaciones de fragancias y bebidas.", "Varios espesores — Siete opciones estándar de 0.4 a 1.6 mm para diferentes niveles de rigidez y absorción.", "Superficie natural y táctil — La textura tipo fieltro aporta una presentación premium.", "Listo para conversión — Adecuado para troquelado, gofrado, bajorrelieve e impresión de logotipos."],
    customization: ["Espesor y tono de blanco", "Formato en hoja o bobina", "Forma troquelada personalizada", "Gofrado o bajorrelieve", "Impresión de logotipo"],
    quoteReqs: ["Uso final y tipo de líquido", "Espesor o gramaje objetivo", "Tono de color", "Hoja, bobina o forma troquelada", "Requisito de impresión o gofrado", "Cantidad y puerto de destino"],
  },
  "color-laminated-grey-board": {
    tagline: "Cartón gris revestido con papel de color para cajas de regalo, tapas y papelería.",
    specs: [
      "Papel de revestimiento: Normalmente papel woodfree de color o kraft de 200 gsm",
      "Colores: Negro, blanco, kraft y colores personalizados seleccionados",
      "Estructuras: Color/Color, Color/Gris o Color/Blanco",
      "Referencia con blanco o negro a una cara: 1.0–4.0 mm / 650–2650 gsm",
      "Referencia con kraft a una cara: 1.2–4.0 mm / 800–2650 gsm",
      "Formato: Hojas personalizadas y paneles cortados a medida",
    ],
    applications: ["Cajas rígidas de regalo y presentación", "Libros de tapa dura y álbumes", "Carpetas y papelería", "Insertos decorativos de embalaje"],
  },
  "woodgrain-laminated-grey-board": {
    tagline: "Papel efecto madera laminado sobre cartón gris para cajas y aplicaciones decorativas.",
    specs: [
      "Revestimiento: Normalmente papel decorativo efecto madera de 120 gsm",
      "Base: Cartón gris",
      "Espesor: 1.0–4.0 mm",
      "Aspecto: Diseños y tonos efecto madera seleccionados",
      "Nota: Revestimiento de papel decorativo, no chapa de madera real",
    ],
    applications: ["Cajas para joyería y relojes", "Embalajes de regalo y presentación", "Organizadores de escritorio", "Componentes decorativos de revestimiento"],
  },
  "blue-core-puzzle-board": {
    tagline: "Cartón con núcleo azul para la producción de rompecabezas.",
    specs: [
      "Gramaje: 600–1800 gsm",
      "Espesor: Aproximadamente 0.85–2.73 mm",
      "Incrementos de gramaje: 50 gsm",
      "Tolerancia de gramaje: ±5%",
      "Humedad: 8.0 ± 2.0%",
      "Color del núcleo: Azul",
    ],
    applications: ["Rompecabezas impresos", "Juegos y rompecabezas educativos", "Componentes de cartón para puzzles", "Cajas de presentación para rompecabezas"],
  },
  "metallized-laminated-grey-board": {
    tagline: "Cartón laminado dorado, plateado y blanco para bases de pastel, postres y embalaje de salmón.",
    specs: [
      "Espesor típico: 1.0–3.0 mm",
      "Colores: Dorado, plateado, blanco y colores personalizados seleccionados",
      "Acabado dorado: Diferentes niveles de brillo",
      "Formas: Redonda, cuadrada, rectangular y personalizada",
      "Bordes: Rectos o festoneados",
      "Hoja completa: 70 × 100 cm o personalizada",
      "Formato: Hojas completas o piezas cortadas",
    ],
    applications: ["Bases y discos para pasteles", "Tableros de presentación para postres", "Embalaje de salmón", "Insertos para presentación de alimentos"],
  },
  "foam-laminated-grey-board": {
    tagline: "Cartón gris acolchado para carpetas de certificados y cubiertas de libros de tapa dura.",
    specs: [
      "Espesor de la base de cartón gris: 1.5–3.0 mm",
      "Espesor de espuma: 3 mm",
      "Estructura de 2 capas: Cartón gris + espuma expuesta",
      "Estructura gris de 3 capas: Cartón gris + espuma + papel gris de 250 gsm",
      "Estructura kraft de 3 capas: Cartón gris + espuma + papel kraft de 180 gsm",
      "Nota: El espesor base no incluye espuma ni revestimiento superior",
    ],
    applications: ["Carpetas acolchadas para certificados", "Cubiertas de libros de tapa dura", "Cubiertas de presentación", "Componentes de papelería acolchados"],
  },
};

for (const [slug, translation] of Object.entries(cmsProductEs)) {
  productEs[slug] = { ...(productEs[slug] || {}), ...translation };
}

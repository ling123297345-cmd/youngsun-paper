const bi = (en, es) => ({ en, es });

export const industryDetailContent = {
  "packaging-printing": {
    eyebrow: bi("Packaging solutions", "Soluciones de embalaje"),
    overview: bi(
      "Packaging performance starts with matching the board structure to the pack format, printing method and converting line. YOUNGSUN helps box makers, printers and packaging distributors compare structural boards, printable boards and wrapping papers as one coordinated sourcing program.",
      "El rendimiento del embalaje empieza al combinar la estructura del carton con el formato, la impresion y la linea de conversion. YOUNGSUN ayuda a fabricantes, impresores y distribuidores a comparar cartones estructurales, imprimibles y papeles de recubrimiento."
    ),
    priorities: [
      { title: bi("Structure", "Estructura"), desc: bi("Stiffness, thickness and dimensional stability for the finished pack.", "Rigidez, espesor y estabilidad dimensional para el envase terminado.") },
      { title: bi("Print surface", "Superficie de impresion"), desc: bi("Smoothness, brightness and coating matched to the artwork and press.", "Lisura, blancura y recubrimiento adecuados al diseno y la prensa.") },
      { title: bi("Converting", "Conversion"), desc: bi("Reliable creasing, die-cutting, folding, gluing and wrapping performance.", "Rendimiento fiable en hendido, troquelado, plegado, pegado y forrado.") },
    ],
    featuredProducts: ["grey-board", "folding-box-board", "duplex-board", "kraft-paper", "c2s-art-board", "black-paper"],
    checklist: [
      bi("Finished packaging format and load requirement", "Formato final del envase y carga requerida"),
      bi("Target GSM, caliper or board thickness", "GSM, calibre o espesor objetivo"),
      bi("Sheet size, grain direction or reel width", "Tamano de hoja, direccion de fibra o ancho de bobina"),
      bi("Printing, lamination and surface finishing method", "Metodo de impresion, laminacion y acabado"),
      bi("Die-cutting, creasing, folding and gluing process", "Proceso de troquelado, hendido, plegado y pegado"),
      bi("Order volume, packing method and destination port", "Volumen, metodo de embalaje y puerto de destino"),
    ],
    processes: ["Sheet cutting", "Die-cutting", "Lamination", "Embossing", "Export packing"],
    related: [
      { title: "How to Choose the Right Paperboard for Packaging", href: "/blog/how-to-choose-right-paperboard-packaging", desc: "Compare structure, print quality and converting performance before selecting a board." },
      { title: "Grey Board vs Duplex Board vs FBB", href: "/blog/grey-board-vs-duplex-vs-fbb-comparison", desc: "A practical comparison for rigid boxes, retail cartons and premium folding packs." },
    ],
  },
  "food-beverage": {
    eyebrow: bi("Food packaging solutions", "Soluciones para alimentos"),
    overview: bi(
      "Food packaging paper must balance forming performance, grease or moisture resistance, printability and the compliance documents required for the destination market. We help converters shortlist suitable base paper and barrier structures for cups, wraps, bags and takeaway containers.",
      "El papel para alimentos debe equilibrar formacion, resistencia a grasa o humedad, impresion y documentacion para el mercado de destino. Ayudamos a seleccionar papel base y estructuras de barrera para vasos, envolturas, bolsas y envases."
    ),
    priorities: [
      { title: bi("Barrier need", "Necesidad de barrera"), desc: bi("Oil, water vapor or liquid resistance based on the food and service time.", "Resistencia a aceite, vapor o liquidos segun el alimento y el tiempo de uso.") },
      { title: bi("Forming", "Formacion"), desc: bi("Stiffness, heat sealing and runnability for cup and container lines.", "Rigidez, termosellado y rendimiento en lineas de vasos y envases.") },
      { title: bi("Documentation", "Documentacion"), desc: bi("Confirm applicable food-contact documentation for the exact grade and market.", "Confirmar la documentacion alimentaria del grado y mercado exactos.") },
    ],
    featuredProducts: ["cup-paper", "pe-coated-paper", "greaseproof-paper", "silicone-coated-paper", "kraft-paper", "mg-paper"],
    checklist: [
      bi("Direct or indirect food contact application", "Aplicacion de contacto directo o indirecto"),
      bi("Food type, temperature and expected contact time", "Tipo de alimento, temperatura y tiempo de contacto"),
      bi("Required grease, moisture or release performance", "Rendimiento requerido contra grasa, humedad o adherencia"),
      bi("Single- or double-side coating and coating weight", "Recubrimiento a una o dos caras y peso del recubrimiento"),
      bi("Forming, sealing, printing and converting process", "Proceso de formado, sellado, impresion y conversion"),
      bi("Destination market and required compliance documents", "Mercado de destino y documentos requeridos"),
    ],
    processes: ["PE coating", "Reel slitting", "Sheet cutting", "Flexo printing", "Moisture-safe packing"],
    related: [
      { title: "Cupstock and Greaseproof Paper Technical Guide", href: "/blog/cupstock-greaseproof-food-packaging-technical-guide", desc: "Understand where cupstock, coated paper and greaseproof grades differ." },
      { title: "Food-Grade Paper Certifications Guide", href: "/blog/food-grade-paper-certifications-guide-fda-eu-gb", desc: "A buyer-focused guide to documents for the US, EU and China markets." },
    ],
  },
  "luxury-cosmetics": {
    eyebrow: bi("Premium presentation", "Presentacion premium"),
    overview: bi(
      "Luxury packaging is judged through touch, color, weight and finishing precision before the product is opened. YOUNGSUN combines structural board with decorative paper so brands and converters can coordinate rigid boxes, folding cartons, inserts and presentation pieces.",
      "El embalaje de lujo se juzga por tacto, color, peso y precision antes de abrirse. YOUNGSUN combina carton estructural y papel decorativo para coordinar cajas rigidas, estuches, insertos y piezas de presentacion."
    ),
    priorities: [
      { title: bi("Tactile identity", "Identidad tactil"), desc: bi("Soft-touch, leather, embossed and pearlescent surfaces create distinct brand cues.", "Superficies suaves, cuero, gofradas y perladas crean senales de marca distintas.") },
      { title: bi("Finish compatibility", "Compatibilidad"), desc: bi("Select surfaces that accept foil, embossing, debossing and specialty printing cleanly.", "Elegir superficies compatibles con foil, relieve, bajorrelieve e impresion especial.") },
      { title: bi("Suite consistency", "Consistencia"), desc: bi("Coordinate color and texture across boxes, tags, liners and inserts.", "Coordinar color y textura entre cajas, etiquetas, forros e insertos.") },
    ],
    featuredProducts: ["soft-touch-paper", "black-paper", "pearlescent-paper", "leather-paper", "embossed-paper", "folding-box-board"],
    checklist: [
      bi("Packaging structure: rigid box, folding carton or wrap", "Estructura: caja rigida, estuche plegable o forro"),
      bi("Brand color, texture and tactile reference", "Referencia de color, textura y tacto de marca"),
      bi("Foil, embossing, UV, lamination or specialty print", "Foil, relieve, UV, laminacion o impresion especial"),
      bi("Required stiffness, folding and edge appearance", "Rigidez, plegado y apariencia de bordes"),
      bi("Prototype, color proof and production sample needs", "Necesidad de prototipo, prueba de color y muestra"),
      bi("Annual volume and coordinated packaging components", "Volumen anual y componentes coordinados"),
    ],
    processes: ["Color matching", "Embossing", "Foil compatibility", "Lamination", "Precision cutting"],
    related: [
      { title: "Specialty Paper for Luxury Branding", href: "/blog/specialty-paper-luxury-branding", desc: "How texture, color and finish change the perceived value of packaging." },
      { title: "Paper Surface Finishing Guide", href: "/blog/paper-surface-finishing-guide-gloss-matt-soft-touch-uv-foil", desc: "Compare matt, gloss, soft-touch, UV and foil finishing choices." },
    ],
  },
  "publishing-stationery": {
    eyebrow: bi("Print and publishing", "Impresion y edicion"),
    overview: bi(
      "Publishing papers must deliver stable color, opacity, bulk and press performance while controlling finished weight and cost. We supply coated and uncoated grades in sheets or reels for books, notebooks, catalogs and commercial stationery.",
      "Los papeles editoriales deben ofrecer color estable, opacidad, volumen y buen rendimiento controlando peso y costo. Suministramos grados estucados y no estucados en hojas o bobinas para libros, cuadernos, catalogos y papeleria."
    ),
    priorities: [
      { title: bi("Image reproduction", "Reproduccion"), desc: bi("Surface and coating selected for text, photography or mixed content.", "Superficie y recubrimiento segun texto, fotografia o contenido mixto.") },
      { title: bi("Opacity and bulk", "Opacidad y volumen"), desc: bi("Control show-through, page feel, spine width and mailing weight.", "Controlar transparencia, tacto, ancho del lomo y peso postal.") },
      { title: bi("Press performance", "Rendimiento"), desc: bi("Stable moisture, clean cutting and reliable high-speed feeding.", "Humedad estable, corte limpio y alimentacion fiable a alta velocidad.") },
    ],
    featuredProducts: ["woodfree-paper", "c2s-art-board", "lwc-paper", "color-offset-paper", "grey-board", "ncr-paper"],
    checklist: [
      bi("Publication type, page count and finished format", "Tipo de publicacion, paginas y formato final"),
      bi("Printing process and target image quality", "Proceso de impresion y calidad de imagen"),
      bi("GSM, opacity, brightness, bulk and surface", "GSM, opacidad, blancura, volumen y superficie"),
      bi("Sheet size or reel width, core and grain direction", "Tamano de hoja o bobina, nucleo y direccion de fibra"),
      bi("Binding, folding, scoring and cover construction", "Encuadernacion, plegado, hendido y cubierta"),
      bi("Packing, humidity protection and delivery schedule", "Embalaje, proteccion de humedad y entrega"),
    ],
    processes: ["Sheet cutting", "Reel slitting", "Ream packing", "Pallet packing", "Sample matching"],
    related: [
      { title: "Paper GSM and Thickness Guide", href: "/blog/paper-gsm-thickness-conversion-chart", desc: "Convert GSM, caliper and finished weight for publications and stationery." },
      { title: "Hardwood Pulp and Print Surface", href: "/materials/hardwood-pulp", desc: "Learn how short fibers support formation, opacity and smooth printing." },
    ],
  },
  "hang-tags-labels": {
    eyebrow: bi("Brand details", "Detalles de marca"),
    overview: bi(
      "A hang tag or label is small, but it carries price, product information and brand identity at the point of purchase. The right paper must hold fine print, clean die-cut edges and premium finishes while matching the product and packaging around it.",
      "Una etiqueta es pequena, pero comunica precio, informacion e identidad en el punto de venta. El papel debe mantener impresion fina, bordes limpios y acabados premium coordinados con el producto y su embalaje."
    ),
    priorities: [
      { title: bi("Clean edges", "Bordes limpios"), desc: bi("Through-dyed and well-converted papers keep punched and die-cut edges presentable.", "Papeles tenidos en masa y bien convertidos mantienen bordes presentables.") },
      { title: bi("Fine detail", "Detalle fino"), desc: bi("Stable surfaces support small typography, barcodes, foil and embossing.", "Superficies estables admiten tipografia pequena, codigos, foil y relieve.") },
      { title: bi("Brand match", "Coincidencia de marca"), desc: bi("Coordinate color, texture and finish with apparel, jewelry or beverage packaging.", "Coordinar color, textura y acabado con moda, joyeria o bebidas.") },
    ],
    featuredProducts: ["black-paper", "label-paper", "soft-touch-paper", "pearlescent-paper", "embossed-paper", "gold-silver-card"],
    checklist: [
      bi("Tag or label size, shape and hole position", "Tamano, forma y posicion del orificio"),
      bi("GSM, stiffness and desired edge color", "GSM, rigidez y color de borde"),
      bi("Printing, barcode and variable-data requirements", "Impresion, codigo de barras y datos variables"),
      bi("Foil, embossing, debossing or lamination", "Foil, relieve, bajorrelieve o laminacion"),
      bi("Adhesive, string, eyelet or bottle-neck construction", "Adhesivo, cordon, ojal o construccion de cuello"),
      bi("Color tolerance, samples and repeat-order control", "Tolerancia de color, muestras y control de repeticion"),
    ],
    processes: ["Die-cutting", "Hole punching", "Embossing", "Foil compatibility", "Custom color"],
    related: [
      { title: "Black Paper and Color Card Guide", href: "/blog/black-paper-color-card-packaging-guide", desc: "Compare through-dyed black paper and colored card for tags and packaging." },
      { title: "Explore Fancy Paper Textures", href: "/fancy-paper-collection", desc: "Browse tactile, metallic and embossed surfaces for premium tag design." },
    ],
  },
  "gift-wrapping-decoration": {
    eyebrow: bi("Gift presentation", "Presentacion de regalos"),
    overview: bi(
      "Gift presentation combines wrapping, bags, cards and protective liners into one coordinated experience. YOUNGSUN supplies lightweight tissue, strong bag paper and decorative card grades that help retailers, converters and brands build consistent seasonal collections.",
      "La presentacion de regalos combina envoltura, bolsas, tarjetas y forros protectores. YOUNGSUN suministra tissue ligero, papel resistente para bolsas y cartulinas decorativas para colecciones coordinadas."
    ),
    priorities: [
      { title: bi("Color system", "Sistema de color"), desc: bi("Build coordinated wrap, tissue, bag and card combinations around the brand palette.", "Crear combinaciones coordinadas de envoltura, tissue, bolsa y tarjeta.") },
      { title: bi("Handling", "Manipulacion"), desc: bi("Balance foldability, tear resistance and stiffness for each presentation component.", "Equilibrar plegado, resistencia y rigidez para cada componente.") },
      { title: bi("Seasonal repeatability", "Repetibilidad"), desc: bi("Control shade, texture and finish across repeat orders and seasonal programs.", "Controlar tono, textura y acabado entre pedidos y temporadas.") },
    ],
    featuredProducts: ["color-tissue-paper", "kraft-paper", "mg-paper", "color-card-paper", "embossed-paper", "tracing-paper"],
    checklist: [
      bi("Finished item: wrap, bag, card, liner or insert", "Producto final: envoltura, bolsa, tarjeta, forro o inserto"),
      bi("GSM, stiffness, foldability and tear requirement", "GSM, rigidez, plegado y resistencia al desgarro"),
      bi("Color palette, texture and seasonal consistency", "Paleta de color, textura y consistencia estacional"),
      bi("Printing, metallic, embossing or translucent effect", "Impresion, metalizado, relieve o efecto translucido"),
      bi("Sheet, reel, tissue format and packing method", "Formato de hoja, bobina o tissue y embalaje"),
      bi("Collection volume and repeat-order schedule", "Volumen de coleccion y calendario de repeticion"),
    ],
    processes: ["Custom color", "Sheet cutting", "Reel slitting", "Embossing", "Retail packing"],
    related: [
      { title: "Kraft Paper Packaging Guide", href: "/blog/kraft-paper-packaging-guide", desc: "Choose kraft paper for bags, wraps and natural gift presentation." },
      { title: "Paper Texture, Color and Finish", href: "/blog/paper-design-material-surface-texture-color-finish", desc: "A design-focused guide to building a coordinated paper collection." },
    ],
  },
};

export const industryHeroImages = {
  "packaging-printing": "/images/industries/cards/industry-packaging-printing-youngsun.webp",
  "food-beverage": "/images/industries/cards/industry-food-beverage-youngsun.webp",
  "luxury-cosmetics": "/images/industries/cards/industry-luxury-cosmetics-youngsun.webp",
  "publishing-stationery": "/images/industries/cards/industry-publishing-stationery-youngsun.webp",
  "hang-tags-labels": "/images/industries/cards/industry-hang-tags-labels-youngsun.webp",
  "gift-wrapping-decoration": "/images/industries/cards/industry-gift-wrapping-decoration-youngsun.webp",
};

export const industryApplicationImages = {
  "packaging-printing": [
    "/images/products/package-board/gallery/folding-box-board-scene-01.jpg",
    "/images/products/package-board/gallery/grey-board-scene-01.jpg",
    "/images/products/package-board/gallery/kraft-paper-scene-01.jpg",
    "/images/products/package-board/gallery/c2s-art-board-scene-01.jpg",
  ],
  "food-beverage": [
    "/images/products/food-packaging/gallery/cup-paper-scene-01.jpg",
    "/images/products/food-packaging/gallery/greaseproof-paper-scene-01.jpg",
    "/images/products/food-packaging/gallery/greaseproof-paper-scene-03.jpg",
    "/images/products/package-board/gallery/pe-coated-paper-scene-01.jpg",
  ],
  "luxury-cosmetics": [
    "/images/products/fancy-paper/gallery/Purple-Magenta-Perfume-Packaging.jpg",
    "/images/products/fancy-paper/gallery/soft-touch-paper-scene-01.jpg",
    "/images/products/fancy-paper/gallery/leather-paper-scene-01.jpg",
    "/images/products/package-board/gallery/black-paper-scene-01.jpg",
  ],
  "publishing-stationery": [
    "/images/products/package-board/gallery/grey-board-scene-05.jpg",
    "/images/products/culture-paper/gallery/woodfree-paper-scene-01.jpg",
    "/images/products/culture-paper/gallery/lwc-paper-scene-01.jpg",
    "/images/products/package-board/gallery/color-card-paper-scene-01.jpg",
  ],
  "hang-tags-labels": [
    "/images/products/fancy-paper/hangtag-black-card.jpg",
    "/images/products/fancy-paper/hangtag-white-pearl.jpg",
    "/images/products/culture-paper/gallery/tracing-paper-scene-01.jpg",
    "/images/products/fancy-paper/hangtag-embossed.jpg",
  ],
  "gift-wrapping-decoration": [
    "/images/products/fancy-paper/gallery/01-Color-Tissue-Apparel-Gift-Box.jpg",
    "/images/products/fancy-paper/gallery/GOLD-Shopping-Bag-and-Tags.jpg",
    "/images/products/fancy-paper/gallery/embossed-paper-scene-01.jpg",
    "/images/products/fancy-paper/gallery/pearlescent-paper-scene-01.jpg",
  ],
};

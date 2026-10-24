export const homeSelectionGuide = {
  en: {
    title: "Choose paper by the job it needs to do",
    intro: "Start with the application, then compare the surface, structure and converting process before requesting a sample.",
    items: [
      { title: "Printable wraps and lightweight bags", text: "MG white kraft has a machine-glazed face and a matte reverse. Specify the required barrier separately from the base paper.", label: "MG white kraft paper", href: "/products/mg-paper" },
      { title: "Paper cups and formed containers", text: "Distinguish uncoated cupstock from a coated structure, and state beverage temperature, forming method and coating requirements.", label: "Cupstock base and coated options", href: "/products/cup-paper" },
      { title: "Bags, wrapping and protective layers", text: "Select kraft by end use and converting process. Brown, white and recycled grades should be compared against the same specification.", label: "Kraft paper rolls and sheets", href: "/products/kraft-paper" },
    ],
  },
  es: {
    title: "Elija el papel por la función que debe cumplir",
    intro: "Empiece por la aplicación y compare superficie, estructura y conversión antes de solicitar una muestra.",
    items: [
      { title: "Envolturas imprimibles y bolsas ligeras", text: "El kraft blanco MG tiene una cara satinada y un reverso mate. Defina la barrera necesaria por separado del papel base.", label: "Papel kraft blanco MG", href: "/products/mg-paper" },
      { title: "Vasos y recipientes formados", text: "Distinga el cupstock sin recubrir de una estructura recubierta. Indique temperatura, método de formado y recubrimiento requerido.", label: "Cupstock base y opciones recubiertas", href: "/products/cup-paper" },
      { title: "Bolsas, envoltura y protección", text: "Seleccione kraft por uso y conversión. Compare grados naturales, blancos y reciclados con la misma especificación.", label: "Papel kraft en bobinas y hojas", href: "/products/kraft-paper" },
    ],
  },
};

export const fancySelectionGuide = {
  en: {
    title: "How to choose a specialty paper finish",
    intro: "Choose the finish for the desired appearance, then approve a physical sample with the intended print and converting process. A screen image cannot establish texture, shade or finishing compatibility.",
    items: [
      { title: "Soft, tactile surfaces", text: "Compare soft-touch paper for a smooth tactile effect. Check scuffing, glue areas and any foil or printing process on the chosen grade.", label: "Soft-touch paper", href: "/products/soft-touch-paper" },
      { title: "Visible grain and raised patterns", text: "Compare leather-grain and embossed papers for covers, wraps and tags. Review pattern depth, fold direction and adhesive bonding with the converter.", label: "Compare available textures", href: "/fancy-paper-collection" },
      { title: "Pearlescent highlights", text: "Evaluate the appearance under the lighting in which the packaging will be used. Approve ink contrast and foil detail on the actual paper.", label: "Pearlescent paper", href: "/products/pearlescent-paper" },
    ],
  },
  es: {
    title: "Cómo elegir el acabado de un papel especial",
    intro: "Elija la apariencia y apruebe una muestra física con la impresión y conversión previstas. Una imagen en pantalla no permite confirmar textura, tono ni compatibilidad de acabado.",
    items: [
      { title: "Superficies suaves al tacto", text: "Compare papel soft touch para un efecto táctil liso. Compruebe roce, áreas de pegado e impresión o foil sobre el grado elegido.", label: "Papel soft touch", href: "/products/soft-touch-paper" },
      { title: "Granos y patrones en relieve", text: "Compare papeles con grano de cuero y gofrados para cubiertas, forros y etiquetas. Revise profundidad, dirección del pliegue y adhesión con el convertidor.", label: "Comparar texturas disponibles", href: "/fancy-paper-collection" },
      { title: "Reflejos perlados", text: "Evalúe el efecto bajo la iluminación de uso. Apruebe contraste de tinta y detalle del foil sobre el papel real.", label: "Papel perlado", href: "/products/pearlescent-paper" },
    ],
  },
};

export const productSelectionGuides = {
  "mg-paper": {
    en: { title: "Specify the MG surface and the packaging function separately", intro: "MG describes the machine-glazed finish. It does not by itself establish grease resistance, heat sealing or food-contact suitability.", items: [
      { title: "Print and bonding surfaces", text: "Identify the printable face and the side used for gluing, coating or lamination. Trial ink drying, surface rub and adhesive bonding on the exact grade.", label: "Printing and packaging applications", href: "/industries/packaging-printing" },
      { title: "Wrap or barrier structure", text: "For sandwich and food wraps, state food type, contact time and temperature. If oil or moisture resistance is needed, define and test the complete structure.", label: "Compare greaseproof paper", href: "/products/greaseproof-paper" },
      { title: "Sheets or converting rolls", text: "For rolls, send width, diameter, core and winding requirements. For sheets, send dimensions and grain direction where relevant. Include the converting process in the RFQ.", label: "Discuss an MG paper sample", href: "/contact?intent=samples&product=mg-paper" },
    ] },
    es: { title: "Defina por separado la superficie MG y la función del envase", intro: "MG describe el acabado satinado en máquina. Por sí solo no demuestra resistencia a grasa, termosellado ni aptitud alimentaria.", items: [
      { title: "Cara de impresión y cara de unión", text: "Identifique la cara imprimible y la destinada a pegado, recubrimiento o laminación. Pruebe secado, roce y adhesión sobre el grado exacto.", label: "Aplicaciones de impresión y packaging", href: "/industries/packaging-printing" },
      { title: "Envoltura o estructura de barrera", text: "Para sándwiches y alimentos indique tipo, tiempo y temperatura de contacto. Si necesita barrera a grasa o humedad, defina y pruebe la estructura completa.", label: "Comparar papel antigrasa", href: "/products/greaseproof-paper" },
      { title: "Hojas o bobinas de conversión", text: "Para bobinas indique ancho, diámetro, mandril y bobinado. Para hojas indique medidas y dirección de fibra cuando aplique. Añada el proceso de conversión a la solicitud.", label: "Consultar una muestra de papel MG", href: "/contact?intent=samples&product=mg-paper" },
    ] },
  },
  "cup-paper": {
    en: { title: "Choose uncoated cupstock or a defined coated structure", intro: "Cupstock is the base board used in cup converting. The base-board GSM, barrier coating and formed-cup performance are separate parts of the specification.", items: [
      { title: "Base board versus coating", text: "State base-board GSM and coating weight separately. Confirm who will apply the barrier and whether the supply is uncoated base board or a ready-to-convert structure.", label: "PE-coated paper options", href: "/products/pe-coated-paper" },
      { title: "Hot, cold or food-service use", text: "Record fill temperature, holding time and expected condensation. Test forming, rim quality and seams on the intended machine and finished container.", label: "Food and beverage applications", href: "/industries/food-beverage" },
      { title: "Documents and trial approval", text: "Match the grade and complete structure to the destination market and intended food contact. Request available specifications and evaluate samples before production approval.", label: "Discuss cupstock samples", href: "/contact?intent=samples&product=cup-paper" },
    ] },
    es: { title: "Elija cupstock sin recubrir o una estructura recubierta definida", intro: "El cupstock es el cartón base para formar vasos. Gramaje del cartón, barrera y rendimiento del vaso formado son partes distintas de la especificación.", items: [
      { title: "Cartón base y recubrimiento", text: "Indique por separado GSM del cartón y peso del recubrimiento. Confirme quién aplica la barrera y si compra base sin recubrir o una estructura lista para convertir.", label: "Opciones de papel con PE", href: "/products/pe-coated-paper" },
      { title: "Bebida caliente, fría o servicio alimentario", text: "Registre temperatura de llenado, tiempo de uso y condensación prevista. Pruebe formado, borde y uniones en la máquina y recipiente previstos.", label: "Aplicaciones de alimentos y bebidas", href: "/industries/food-beverage" },
      { title: "Documentación y aprobación de prueba", text: "Relacione grado y estructura completa con el mercado y contacto alimentario previstos. Solicite los datos disponibles y evalúe muestras antes de aprobar producción.", label: "Consultar muestras de cupstock", href: "/contact?intent=samples&product=cup-paper" },
    ] },
  },
  "kraft-paper": {
    en: { title: "Choose kraft paper by strength, surface and converting route", intro: "Kraft for a sack, shopping bag or protective wrap has different requirements. Compare the exact grade instead of assuming every brown or white kraft paper has the same strength.", items: [
      { title: "Sacks and load-bearing bags", text: "Specify filled weight, filling process and handling route. Request the applicable tensile, tear and extensibility data for the quoted grade, with direction and test method.", label: "Packaging and printing applications", href: "/industries/packaging-printing" },
      { title: "Printed bags and lightweight wraps", text: "Define shade, print process, surface finish and glue areas. For a smooth one-side machine-glazed white paper, compare MG kraft as a separate grade.", label: "Compare MG white kraft", href: "/products/mg-paper" },
      { title: "Protective wrapping and interleaving", text: "Evaluate surface marking, lint, rub and moisture exposure with the actual product. State roll or sheet dimensions and the consumption basis when comparing quotations.", label: "Request a kraft-paper sample", href: "/contact?intent=samples&product=kraft-paper" },
    ] },
    es: { title: "Seleccione kraft por resistencia, superficie y conversión", intro: "Un saco, una bolsa comercial y una envoltura protectora tienen requisitos diferentes. Compare el grado exacto sin asumir que todo kraft natural o blanco ofrece la misma resistencia.", items: [
      { title: "Sacos y bolsas que soportan carga", text: "Indique peso de llenado, proceso y manipulación. Solicite tracción, desgarro y extensibilidad aplicables al grado cotizado, con dirección y método de ensayo.", label: "Aplicaciones de packaging e impresión", href: "/industries/packaging-printing" },
      { title: "Bolsas impresas y envolturas ligeras", text: "Defina tono, impresión, superficie y zonas de pegado. Si busca kraft blanco satinado a una cara, compare el MG como un grado distinto.", label: "Comparar kraft blanco MG", href: "/products/mg-paper" },
      { title: "Envoltura protectora e intercalado", text: "Evalúe marcas, pelusa, roce y humedad con el producto real. Indique medidas de bobina u hoja y una base de consumo común para comparar ofertas.", label: "Solicitar muestra de kraft", href: "/contact?intent=samples&product=kraft-paper" },
    ] },
  },
};

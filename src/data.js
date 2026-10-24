import { cmsHiddenProductSlugs, cmsProducts } from "./generated/cmsProducts.js";

// ============================================================
// YOUNGSUN PAPER — Structured Data Layer
// Purpose: AI-readable, SEO-optimized, human-clear.
// Format: What it is → What it solves → Evidence / Specs
// Schema: Each product = { id, name, tagline, description, specs[], applications[], certifications[], image }
// ============================================================

export const siteConfig = {
  name: "YOUNGSUN PAPER",
  legalName: "Dongguan Banyan Material Co., Ltd.",
  tagline: "Sustainable Paper, Global Reach",
  description:
    "YOUNGSUN PAPER combines paper and paperboard manufacturing, converting, mill sourcing and export coordination for packaging, printing, specialty and food-paper buyers. Dongguan Banyan Material Co., Ltd. supports manufacturing and converting in Dongguan, while YOUNGSUN New Material Co., Ltd. coordinates international business in Hong Kong. FSC claims and supporting documents are confirmed for the exact grade and order.",
  email: "Alice@yspaper.com",
  phone: "+86 13713459656",
  whatsapp: "+86 13713459656",
  wechat: "ALICEZEO",
  address: "NO.167, Meijing West Road, Songmushan, Dalang Town, Dongguan City, Guangdong Province, China",
  founded: 2002,
  stats: {
    countries: 60,
    products: 20,
    monthlyCapacity: 20000,      // tons per month
    annualExport: 36000,         // tons per year
    warehouseStock: 50000,       // tons in stock
    workers: 220,
    workshop: 20000,             // square meters
    salesSpecialists: 50,
    years: 24,                   // 2002 → 2026
  },
  millPartners: ["APP", "Sun Paper", "Nine Dragons", "Liansheng", "Huatai"],
};

// ============================================================
// 4 PRODUCT CATEGORIES — Each category is an industry-recognized class
// ============================================================

export const productCategories = [
  {
    id: "package-board",
    title: "Package Board",
    icon: "📦",
    tagline: "Durable structural packaging — from rigid boxes to folding cartons.",
    summary:
      "Your comprehensive source for durable structural packaging. Our extensive range covers Grey Board, Black Cardboard, Folding Box Board (FBB), C2S Art Board, Kraft Paper, and Duplex Board to meet all your rigid box and container needs.",
    image: "/images/products/package-board/package-category-card.jpg",
    background: "images/products/package-board/package-category-card.jpg",
  },
  {
    id: "culture-paper",
    title: "Culture Paper",
    icon: "📄",
    tagline: "High-performance surfaces for premium printing and publishing.",
    summary:
      "We supply Woodfree Paper, Color Offset Paper, LWC Paper, and NCR Paper, ensuring crisp, consistent results for your brochures, books, and professional stationery.",
    image: "/images/products/culture-paper/culture-category-card.jpg",
    background: "images/products/culture-paper/culture-category-card.jpg",
  },
  {
    id: "fancy-paper",
    title: "Fancy Paper",
    icon: "✨",
    tagline: "Curated textures for high-end luxury branding.",
    summary:
      "Explore our specialized collection, including Soft Touch, Leather, Pearlescent, and Embossed papers, as well as dedicated Label papers for distinctive, premium design projects.",
    image: "/images/products/fancy-paper/fancy-paper-category-card.jpg",
    background: "images/products/fancy-paper/fancy-paper-category-card.jpg",
  },
  {
    id: "food-packaging",
    title: "Food Packaging Paper",
    icon: "🍽️",
    tagline: "Safe, food-grade solutions for culinary and beverage applications.",
    summary:
      "Our selection features Cup Paper, Greaseproof Paper, MG White Kraft Paper, and Silicone Coated Paper for food wrapping, bags, beverage packaging, moisture resistance, and reliable food safety.",
    image: "/images/products/food-packaging/food-packaging-paper-01.jpg",
    background: "images/products/food-packaging/food-packaging-paper-detail.jpg",
  },
];

// ============================================================
// SUB-PRODUCTS — Each with AI-readable structured data
// name: product name
// tagline: one-line value proposition (AI summary)
// description: what it is + what problem it solves (AI context)
// specs: technical details (AI reference)
// applications: real-world use cases (AI matching)
// certifications: evidence / trust signals (AI verification)
// image: visual reference
// ============================================================

export const subProducts = {
  // ========================
  // PACKAGE BOARD (8 sub-products)
  // ========================
  "grey-board": {
    id: "grey-board",
    name: "Grey Board",
    category: "package-board",
    tagline: "Recycled grey board for rigid boxes, bookbinding, stationery, puzzles and industrial packaging, with FSC-certified supply available by order.",
    description:
      "YOUNGSUN Grey Board is made from recovered paper and designed for applications that require dependable thickness, rigidity and converting performance. It is available in sheets, custom-cut panels and laminated structures for rigid box, bookbinding and stationery production. The confirmed working range is 0.5–4.0 mm and approximately 300–2650 gsm, with common sheet sizes of 787×1092 mm and 889×1194 mm and large-sheet dimensions from 600×600 mm to 1600×3000 mm. The natural grey uncoated surface supports laminating, wrapping and gluing. For enhanced surface appearance, buyers can choose laminated variants with white, colored, kraft, black, gold, silver or specialty facing papers according to the required look and converting process. Common applications include rigid gift boxes, hardcover books, calendars, folders, storage boxes, photo albums and structural packaging panels. Custom sheet dimensions, cut-to-size panels, die-cutting, grooving, lamination and export packing can be confirmed against the order specification.",
    specs: [
      "Thickness: 0.5–4.0 mm",
      "Basis weight: approximately 300–2650 gsm",
      "Color: Natural grey / Custom tint available",
      "Surface: Smooth both sides, uncoated",
      "Standard sheets: 787×1092 mm and 889×1194 mm",
      "Large sheets: 600×600 mm to 1600×3000 mm",
      "Moisture: 8% ± 2%",
      "Fiber: 100% recycled post-consumer fiber",
    ],
    applications: [
      "Rigid gift boxes and luxury packaging bases",
      "Hardcover book covers and case-making",
      "Jigsaw puzzles and game boards",
      "Ring binders, lever-arch files, and stationery",
      "Screen-printed signage and display boards",
      "Archival and conservation mounting boards",
    ],
    certifications: ["FSC-certified supply available when the applicable FSC claim is confirmed on order documents"],
    variants: [
      "Single Layer Grey Board",
      "Laminated Grey Board",
      "One-Side Kraft-Lined Grey Board",
      "One-Side White Grey Board",
      "One-Side Black Grey Board",
    ],
    features: [
      "Stable Thickness — Supports consistent box dimensions, cover alignment and batch production.",
      "Reliable Rigidity — Provides a strong structural base for rigid packaging and bookbinding.",
      "Clean Converting — Suitable for cutting, die-cutting, grooving, laminating and wrapping.",
      "Flexible Processing — Available as full sheets, reels or finished components according to drawings.",
    ],
    customization: [
      "Custom grammage and thickness",
      "Custom sheet dimensions",
      "Panel cutting and die-cutting",
      "Single-side or laminated surface options",
      "Export pallet packing",
    ],
    commercial: { moq: "1 metric ton", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC-certified supply available when the FSC claim is confirmed on the order documents" },
    quoteReqs: ["Grammage or thickness", "Sheet or reel size", "Quantity", "Application", "Destination port", "Cutting requirements"],
    faqs: [
      { q: "Are 2 mm and 3 mm grey board sheets available?", a: "Yes. Both 2 mm and 3 mm fall within the confirmed 0.5–4.0 mm range. Please confirm the required sheet size, thickness tolerance, quantity per size and final application before quotation." },
      { q: "How should I choose grey board thickness for a rigid box?", a: "The choice depends on box dimensions, product weight, wrapping paper, groove design and the required finished rigidity. We recommend evaluating a physical sample or prototype before confirming production." },
      { q: "Can grey board be supplied cut to size?", a: "Yes. Full sheets, large sheets and cut-to-size panels are available, with die-cutting, grooving and lamination confirmed against the drawing and order specification." },
    ],
    seoTitle: "Grey Board Manufacturer for Rigid Boxes",
    metaDescription: "Recycled grey board in 0.5–4.0 mm and approximately 300–2650 gsm for rigid boxes, bookbinding and packaging. MOQ from 1 metric ton.",
    keywords: ["grey board", "grey chipboard", "recycled greyboard", "rigid box board", "bookbinding board", "puzzle board"],
    image: "/images/products/package-board/grey-board-main.webp",
    optionGallery: [
      {
        title: "Color Laminated Grey Board",
        titleEs: "Cartón Gris Laminado en Color",
        description: "Decorative colored paper bonded to a rigid grey board base for gift boxes, book covers, files and presentation packaging.",
        descriptionEs: "Papel decorativo de color laminado sobre una base rígida de cartón gris para cajas de regalo, tapas de libros, carpetas y embalajes de presentación.",
        application: "Premium packaging and stationery",
        applicationEs: "Embalaje premium y papelería",
        href: "/products/color-laminated-grey-board",
        src: "/images/products/package-board/laminated-options/color-laminated-grey-board.webp",
        alt: "Color laminated grey board sheets for rigid boxes and book covers",
      },
      {
        title: "Foam Laminated Board",
        titleEs: "Cartón Laminado con Espuma",
        description: "A cushioned multi-layer board structure for padded book covers, protective presentation packs and premium packaging components.",
        descriptionEs: "Estructura multicapa acolchada para tapas de libros, presentaciones protectoras y componentes de embalaje premium.",
        application: "Padded covers and protective packs",
        applicationEs: "Tapas acolchadas y embalaje protector",
        href: "/products/foam-laminated-grey-board",
        src: "/images/products/package-board/laminated-options/foam-laminated-board.webp",
        alt: "Foam laminated board cross section for padded book covers",
      },
      {
        title: "Metallized Laminated Grey Board",
        titleEs: "Cartón Gris Laminado Metalizado",
        description: "Gold, silver and colored metallized facing bonded to grey board for luxury rigid boxes, cosmetics packaging and display products.",
        descriptionEs: "Superficie metalizada en oro, plata y colores laminada sobre cartón gris para cajas rígidas de lujo, cosméticos y expositores.",
        application: "Luxury boxes and cosmetics",
        applicationEs: "Cajas de lujo y cosméticos",
        href: "/products/metallized-laminated-grey-board",
        src: "/images/products/package-board/laminated-options/metallized-laminated-grey-board.webp",
        alt: "Metallized laminated grey board in gold silver and custom colors",
      },
      {
        title: "Woodgrain Laminated Grey Board",
        titleEs: "Cartón Gris Laminado Efecto Madera",
        description: "Natural woodgrain facing over structural grey board for wine boxes, gift packaging, book covers and refined presentation products.",
        descriptionEs: "Acabado de veta de madera sobre cartón gris estructural para cajas de vino, regalos, tapas de libros y presentaciones refinadas.",
        application: "Wine, gift and presentation boxes",
        applicationEs: "Cajas de vino, regalo y presentación",
        href: "/products/woodgrain-laminated-grey-board",
        src: "/images/products/package-board/laminated-options/woodgrain-laminated-grey-board.webp",
        alt: "Woodgrain laminated grey board for wine and gift boxes",
      },
      {
        title: "Puzzle Board Application",
        titleEs: "Aplicación para Rompecabezas",
        description: "Dense, flat grey board prepared for printing, mounting and precision die-cutting in jigsaw puzzles, game boards and educational products.",
        descriptionEs: "Cartón gris denso y plano para impresión, montaje y troquelado de precisión en rompecabezas, tableros y productos educativos.",
        application: "Puzzles and game boards",
        applicationEs: "Rompecabezas y tableros de juego",
        href: "/products/blue-core-puzzle-board",
        src: "/images/products/package-board/laminated-options/puzzle-board-application.webp",
        alt: "Grey board die cut into jigsaw puzzle pieces",
      },
    ],
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-01.jpg",
            "alt": "grey board scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-02.jpg",
            "alt": "grey board scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-03.jpg",
            "alt": "grey board scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-04.jpg",
            "alt": "grey board scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-05.jpg",
            "alt": "grey board scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-06.jpg",
            "alt": "grey board scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-07.jpg",
            "alt": "grey board scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-scene-08.jpg",
            "alt": "grey board scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-photo-01.jpg",
            "alt": "grey board procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-photo-02.jpg",
            "alt": "grey board spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-photo-03.jpg",
            "alt": "grey board design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-photo-04.jpg",
            "alt": "grey board application photo"
      },
      {
            "src": "/images/products/package-board/gallery/grey-board-photo-05.jpg",
            "alt": "grey board website banner"
      }
,
    ],
  },
  "black-paper": {
    id: "black-paper",
    name: "Black Paper",
    category: "package-board",
    tagline: "Deep-black paper and cardboard for luxury packaging, hang tags, stationery, printing and creative converting.",
    description:
      "YOUNGSUN supplies black paper in virgin-fibre and recycled-fibre grades, offering a comprehensive range from 80 gsm lightweight paper up to 1500 gsm laminated heavy board. The material features a uniform through-dyed black appearance — not surface-printed — ensuring clean cutting edges with no white line on cuts or folds, which is critical for premium packaging and printed products. Standard single-ply grades range from 80–600 gsm in uncoated black finish, with stock sheet sizes of 787×1092 mm and 889×1194 mm. The material performs exceptionally well with hot foil stamping, screen printing, UV printing, embossing, and lamination. Key applications span luxury rigid box lining and wrapping, photo albums, greeting cards, high-end retail shopping bags, business cards, presentation folders, and envelope inserts. Custom grammage, sheet size, virgin or recycled fibre selection, laminated heavy board construction, and custom packing are all available.",
    specs: [
      "Grammage: 80 – 400 gsm",
      "Color: Through-dyed black (not surface-printed)",
      "Finishes: Uncoated / Matte coated / Gloss coated",
      "Format: Sheets & reels",
      "Lightfastness: ISO 105-B02 rated",
      "Core-color guarantee: no white edge on cut or fold",
    ],
    applications: [
      "Luxury rigid box lining and wrapping",
      "Photo albums, scrapbooks, and memory books",
      "Greeting cards and invitation cards",
      "High-end retail shopping bags",
      "Business cards and presentation folders",
      "Envelope and stationery inserts",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Virgin Black Paper",
      "Recycled Black Paper",
      "Laminated Heavy Black Board",
    ],
    features: [
      "Uniform Black Appearance — Provides a premium dark surface for visible packaging and printed products.",
      "Clean Cutting Edges — Suitable for precise die-cutting, card making and structural converting.",
      "Multiple Finishing Options — Works with hot foil stamping, screen printing, UV printing, embossing and lamination.",
      "Wide Grammage Range — Covers lightweight paper, card and laminated heavy-board applications.",
    ],
    customization: [
      "Custom grammage",
      "Custom sheet size",
      "Virgin or recycled fibre",
      "Laminated heavy board",
      "Custom packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Required grammage", "Sheet or reel size", "Virgin or recycled grade", "Quantity", "Application", "Destination port"],
    faqs: [
      { q: "What printing methods work on black paper?", a: "Printing on black paper usually requires an opaque process such as screen printing, UV ink, opaque white ink, metallic ink or hot foil stamping. The ink system and finish should be tested on the selected grade before production." },
      { q: "Will the cut edge remain black?", a: "Through-dyed grades are designed to retain a dark edge after cutting or folding. Buyers should confirm whether the selected grade is through-dyed or laminated heavy board when edge appearance is critical." },
      { q: "Can black paper be supplied in sheets or reels?", a: "Yes. Sheet and reel supply is available by grade. Send the grammage, dimensions, fibre preference, finishing process and quantity per size for confirmation." },
    ],
    seoTitle: "Black Paper and Black Cardboard Supplier",
    metaDescription: "Virgin and recycled black paper from 80 to 1500 gsm for luxury packaging, hang tags, stationery and premium printing.",
    keywords: ["black paper", "black card stock", "through-dyed paper", "black cardboard", "luxury black paper", "core-dyed black board"],
    image: "/images/products/package-board/black-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-01.jpg",
            "alt": "black paper scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-02.jpg",
            "alt": "black paper scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-03.jpg",
            "alt": "black paper scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-04.jpg",
            "alt": "black paper scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-05.jpg",
            "alt": "black paper scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-06.jpg",
            "alt": "black paper scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-07.jpg",
            "alt": "black paper scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-scene-08.jpg",
            "alt": "black paper scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-photo-01.jpg",
            "alt": "black paper card procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-photo-02.jpg",
            "alt": "black paper card spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-photo-03.jpg",
            "alt": "black paper card design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-photo-04.jpg",
            "alt": "black paper card application photo"
      },
      {
            "src": "/images/products/package-board/gallery/black-paper-photo-05.jpg",
            "alt": "black paper card website banner"
      }
,
    ],
  },
  "color-card-paper": {
    id: "color-card-paper",
    name: "Color Card Paper",
    category: "package-board",
    tagline: "Colored card paper for packaging, hang tags, stationery, invitations and creative printing.",
    description:
      "YOUNGSUN Color Card Paper is available in a broad range of standard, deep, and embossed colors, combining uniform shade consistency with clean converting performance for packaging, garment tags, stationery, and promotional applications. The grammage range spans 110–400 gsm, with common weights at 110, 150, 180, 230, 250, 300, 350, and 400 gsm. Standard sheet sizes are 787×1092 mm and 889×1194 mm, with supply in sheets, reels, and custom-cut sizes. Surface options include smooth uncoated and embossed textures. The paper delivers wide color selection for coordinated branding projects, consistent shade across repeat production runs, and good converting performance for cutting, folding, die-cutting, embossing, and lamination. It is compatible with hot stamping, screen printing, UV, and selected offset printing. Typical applications include hang tags, gift boxes, greeting cards, invitations, folders, book covers, and paper crafts. Custom color matching is available subject to order quantity, along with custom grammage, size, embossed textures, and packing.",
    specs: [
      "Grammage: 120 – 400 gsm",
      "Color: Through-dyed, 30+ standard colors, custom Pantone available",
      "Finish: Uncoated smooth / Textured options",
      "Format: Sheets (standard & custom), reels",
      "Batch consistency: Delta E ≤ 1.5",
      "Packaging: Ream-wrapped or bulk-packed",
    ],
    applications: [
      "Filing folders, dividers, and index cards",
      "Craft and DIY cardstock",
      "Point-of-sale displays and signage",
      "Custom packaging and gift boxes",
      "Business cards and hang tags",
      "Educational and art supplies",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Standard Color Card",
      "Deep Color Card",
      "Embossed Color Card",
    ],
    features: [
      "Wide Color Selection — Supports coordinated packaging, branding and stationery projects.",
      "Consistent Shade — Helps maintain visual consistency across repeat production.",
      "Good Converting Performance — Suitable for cutting, folding, die-cutting, embossing and lamination.",
      "Premium Finishing Compatibility — Suitable for hot stamping, screen printing, UV and selected offset printing.",
    ],
    customization: [
      "Custom color matching subject to quantity",
      "Custom grammage",
      "Custom size",
      "Embossed textures",
      "Custom packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Color reference or code", "Grammage", "Sheet or reel size", "Quantity", "Application", "Destination port"],
    faqs: [
      { q: "Is color card paper dyed through or only printed on the surface?", a: "The selected grade should be confirmed as through-dyed when a consistent cut edge is required. Surface-colored and laminated structures can look similar from the face but behave differently after die-cutting, creasing and folding, so approve the exact construction and color sample." },
      { q: "Which printing and finishing methods work on color card paper?", a: "Hot foil stamping, screen printing, UV printing, embossing, die-cutting and selected offset processes are commonly evaluated. Ink opacity, foil adhesion, crease performance and color contrast should be tested on the chosen shade, texture and grammage before production." },
      { q: "What information is needed to quote color card paper?", a: "Provide a physical sample, Pantone or color reference, grammage, smooth or embossed finish, sheet or reel dimensions, quantity per size, printing and finishing route, application and destination port. The current minimum is 5 metric tons per product per size." },
    ],
    seoTitle: "Color Card Paper Supplier for Packaging",
    metaDescription: "Colored card paper from 110 to 400 gsm in standard and embossed finishes for packaging, hang tags, stationery and printing. Request custom colors and samples.",
    keywords: ["color card paper", "colored cardboard", "solid color cardstock", "colored paper board", "Pantone paper", "craft cardstock"],
    image: "/images/products/package-board/color-card-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-01.jpg",
            "alt": "color card paper scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-02.jpg",
            "alt": "color card paper scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-03.jpg",
            "alt": "color card paper scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-04.jpg",
            "alt": "color card paper scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-05.jpg",
            "alt": "color card paper scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-06.jpg",
            "alt": "color card paper scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-07.jpg",
            "alt": "color card paper scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-scene-08.jpg",
            "alt": "color card paper scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-photo-01.jpg",
            "alt": "color card paper procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-photo-02.jpg",
            "alt": "color card paper spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-photo-03.jpg",
            "alt": "color card paper design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-photo-04.jpg",
            "alt": "color card paper application photo"
      },
      {
            "src": "/images/products/package-board/gallery/color-card-paper-photo-05.jpg",
            "alt": "color card paper website banner"
      }
,
    ],
  },
  "folding-box-board": {
    id: "folding-box-board",
    name: "Folding Box Board",
    category: "package-board",
    tagline: "C1S ivory board with a smooth coated surface, high brightness and reliable folding performance for printed cartons.",
    description:
      "YOUNGSUN Folding Box Board is a coated virgin-fibre paperboard (GC1/C1S Ivory Board) developed for high-quality printing and folding carton conversion. Regular-bulk (170–400 gsm) and high-bulk (195–345 gsm) options allow buyers to balance caliper, stiffness, print performance, and material yield. The board features a smooth, coated white printing surface on the front side with a light-treated reverse, delivering excellent brightness for detailed graphics, strong color reproduction, and premium carton presentation. It is engineered for reliable scoring, folding, die-cutting, and gluing on high-speed converting lines. Primary applications include cosmetic cartons, pharmaceutical boxes, retail packaging, food secondary packaging, and personal care packaging. Buyers can specify regular or high bulk, custom grammage, sheet or reel supply, custom cutting, and export packing.",
    specs: [
      "Grammage: 200 – 450 gsm",
      "Grades: GC1 (white back) / GC2 (cream back) / GC3 (kraft back)",
      "Thickness: 350 – 650 μm",
      "Brightness: ISO 90%+ (top side)",
      "Stiffness: High L&W bending resistance",
      "Food-grade and pharma-grade options available",
    ],
    applications: [
      "Pharmaceutical folding cartons",
      "Cosmetic and skincare packaging",
      "Dry food cartons (cereal, biscuits, tea)",
      "Frozen food packaging (with barrier coating)",
      "Consumer electronics boxes",
      "Chocolate and confectionery boxes",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Regular Bulk C1S Ivory Board",
      "High Bulk C1S Ivory Board",
    ],
    features: [
      "High-Quality Print Surface — Supports detailed graphics, strong color reproduction and premium carton presentation.",
      "Reliable Folding — Designed for scoring, folding, die-cutting and gluing.",
      "Regular and High Bulk Options — Allows buyers to select the required thickness and material yield.",
      "Broad Packaging Use — Suitable for retail, beauty, pharmaceutical and secondary food packaging.",
    ],
    customization: [
      "Regular or high bulk",
      "Custom grammage",
      "Sheet or reel supply",
      "Custom cutting",
      "Export packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Regular or high bulk","Grammage","Sheet or reel size","Quantity","Application","Destination port"],
    faqs: [
      { q: "What is the difference between regular-bulk and high-bulk FBB?", a: "High-bulk FBB provides more caliper at a controlled grammage, while regular-bulk board offers a more conventional thickness-to-weight balance. The right option depends on carton dimensions, stiffness, crease design, filling conditions and target material yield." },
      { q: "Is folding box board suitable for cosmetic, pharmaceutical and food cartons?", a: "FBB is widely used for cosmetic, pharmaceutical, retail and secondary food cartons. If the board will have direct or indirect food contact, or requires pharmaceutical documentation, specify the exact use and destination market so the applicable grade and documents can be confirmed." },
      { q: "What information is needed for an FBB quotation?", a: "Please provide regular or high bulk, grammage, sheet or reel dimensions, quantity per size, printing and finishing process, carton application and destination port. The current minimum is 5 metric tons per product per size; standard samples are free and the customer pays international courier charges." },
    ],
    seoTitle: "Folding Box Board and C1S Ivory Board Supplier",
    metaDescription: "Regular and high bulk C1S ivory board from 170 to 400 gsm for cosmetics, pharmaceuticals, retail and folding cartons.",
    keywords: ["folding box board", "FBB", "GC1 board", "carton board", "pharma packaging board", "cosmetic box board"],
    image: "/images/products/package-board/folding-box-board-main.webp",
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-01.jpg",
            "alt": "folding box board scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-02.jpg",
            "alt": "folding box board scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-03.jpg",
            "alt": "folding box board scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-04.jpg",
            "alt": "folding box board scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-05.jpg",
            "alt": "folding box board scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-06.jpg",
            "alt": "folding box board scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-07.jpg",
            "alt": "folding box board scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-scene-08.jpg",
            "alt": "folding box board scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-photo-01.jpg",
            "alt": "folding box board procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-photo-02.jpg",
            "alt": "folding box board spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-photo-03.jpg",
            "alt": "folding box board design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-photo-04.jpg",
            "alt": "folding box board application photo"
      },
      {
            "src": "/images/products/package-board/gallery/folding-box-board-photo-05.jpg",
            "alt": "folding box board website banner"
      }
,
    ],
  },
  "c2s-art-board": {
    id: "c2s-art-board",
    name: "C2S Art Board Card",
    category: "package-board",
    tagline: "Coated-two-sides art board with bright white surface and smooth finish — for premium print and high-end card applications.",
    description:
      "YOUNGSUN C2S (Coated Two Sides) Art Board — also referred to as art card, SBS board, or coated duplex board — features a double-coated white surface on both sides with ISO 92%+ brightness and CIE 140+ whiteness. The coating layer ensures sharp dot reproduction, high ink gloss, and consistent color fidelity for offset, UV offset, and digital printing. Available in 200–400 gsm, the board can be specified in C2S High Bulk Bristol Board configuration (210–320 gsm) which combines a coated surface on both sides with increased caliper at a controlled grammage, providing a more substantial hand feel. Smoothness is rated at ≤1.5 μm (PPS), making it the board of choice for luxury greeting cards, premium hang tags and swing tickets, book covers and dust jackets, high-end brochure and catalog covers, promotional card mailers, and certificate stock. Custom grammage, sheet size, sheet or reel supply, and custom packing options are available.",
    specs: [
      "Grammage: 200 – 400 gsm",
      "Coating: Double-coated both sides (C2S)",
      "Brightness: ISO 92%+",
      "Whiteness: CIE 140+",
      "Smoothness: ≤ 1.5 μm (PPS)",
      "Format: Sheets — standard & custom sizes",
    ],
    applications: [
      "Luxury greeting cards and invitations",
      "Premium hang tags and swing tickets",
      "Book covers and dust jackets",
      "High-end brochure and catalog covers",
      "Promotional card mailers",
      "Certificate and diploma stock",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "C2S High Bulk Bristol Board",
    ],
    features: [
      "Two-Side Printability — Supports high-quality printing on both sides.",
      "High Bulk — Provides greater thickness and a premium hand feel at a controlled basis weight.",
      "Clean Converting — Suitable for cutting, scoring, folding and die-cutting.",
      "Versatile Graphic Use — Works for covers, cards, folders and premium printed packaging.",
    ],
    customization: [
      "Custom grammage",
      "Custom sheet size",
      "Sheet or reel supply",
      "Custom packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage","Sheet or reel size","Quantity","Printing method","Application","Destination port"],
    faqs: [
      { q: "How is C2S art board different from folding box board?", a: "C2S art board is coated on both sides for high-quality two-side printing. Folding box board normally has one primary coated printing face and is selected mainly for carton stiffness and folding performance. Choose according to whether both sides are visible and printed, as well as the required converting strength." },
      { q: "Which printing methods can be used on C2S art board?", a: "The smooth two-side coating supports offset, UV offset and selected digital printing. Ink, coating, foil, lamination and fold performance should still be tested on the chosen grammage before the production run." },
      { q: "What should I include in a C2S art board inquiry?", a: "Send the required grammage or high-bulk option, sheet or reel dimensions, quantity per size, printing method, finishing route, application and destination port. The current minimum is 5 metric tons per product per size; standard samples are free and courier charges are paid by the customer." },
    ],
    seoTitle: "C2S High Bulk Bristol Board Supplier",
    metaDescription: "Two-side coated high bulk bristol board from 210 to 320 gsm for premium printing, covers, cards, hang tags and packaging. Request sheets or samples.",
    keywords: ["C2S art board", "coated art card", "SBS board", "art card paper", "premium card stock", "double-coated board"],
    image: "/images/products/package-board/c2s-art-board-main.webp",
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-01.jpg",
            "alt": "c2s art board card scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-02.jpg",
            "alt": "c2s art board card scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-03.jpg",
            "alt": "c2s art board card scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-04.jpg",
            "alt": "c2s art board card scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-05.jpg",
            "alt": "c2s art board card scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-06.jpg",
            "alt": "c2s art board card scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-07.jpg",
            "alt": "c2s art board card scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-scene-08.jpg",
            "alt": "c2s art board card scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-photo-01.jpg",
            "alt": "c2s art board card procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-photo-02.jpg",
            "alt": "c2s art board card spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-photo-03.jpg",
            "alt": "c2s art board card design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-photo-04.jpg",
            "alt": "c2s art board card application photo"
      },
      {
            "src": "/images/products/package-board/gallery/c2s-art-board-photo-05.jpg",
            "alt": "c2s art board card website banner"
      }
,
    ],
  },
  "kraft-paper": {
    id: "kraft-paper",
    name: "Kraft Paper Rolls & Sheets",
    category: "package-board",
    tagline: "Brown, white and recycled kraft paper rolls and sheets for sacks, bags, wrapping and industrial converting.",
    description:
      "YOUNGSUN supplies natural brown, bleached white and recycled kraft paper families in rolls and sheets for bags, wrapping and industrial converting. Sack kraft, extensible grades and printable bag papers should be selected for their intended load, filling route, surface and converting process. Grammage, fibre composition, tensile strength, tear resistance and extensibility belong to the exact quoted grade and its technical data sheet; one set of values does not describe the entire kraft range. Send the end use, required grammage, sheet dimensions or reel width, printing and converting process, quantity and destination for a grade recommendation and physical sample evaluation.",
    specs: [
      "Grammage: Grade-specific; request the technical data sheet for the required weight",
      "Grades: Natural (brown) / Bleached (white) / Recycled",
      "Tensile strength: Grade-specific MD/CD values and test method",
      "Tear resistance and extensibility: Select for the intended bag, sack or wrapping use",
      "Porosity: Controlled per application",
      "Format: Rolls (standard & jumbo), sheets",
    ],
    applications: [
      "Multi-wall sacks for cement, chemicals, and flour",
      "Corrugated liner and fluting medium",
      "Industrial wrapping and void-fill paper",
      "Shopping bags and grocery sacks",
      "Envelopes and postal packaging",
      "Protective interleaving and dunnage",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Extensible Sack Kraft Paper",
      "High Strength Sack Kraft Paper",
      "Premium Kraft Paper",
    ],
    features: [
      "Strong Fibre Structure — Supports demanding sack, bag and wrapping applications.",
      "Extensible Grade Available — Helps absorb stress during filling, handling and transport.",
      "Good Converting Performance — Suitable for bag making, printing, laminating and wrapping.",
      "Multiple Strength Grades — Allows selection according to product weight and packaging structure.",
    ],
    customization: [
      "Grade selection",
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Printing and converting support",
    ],
    commercial: { moq: "From 1 metric ton for regular specifications; confirm by grade, grammage, size and format", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grade (natural/bleached/recycled)","Grammage","Roll or sheet size","Quantity","End use","Destination port"],
    faqs: [
      { q: "Do you supply brown kraft paper rolls and sheets?", a: "Yes. Natural brown kraft paper is available in standard or jumbo rolls and in sheets, subject to grade, grammage, dimensions and order quantity." },
      { q: "What information is needed for a kraft paper quotation?", a: "Please provide the natural, bleached or recycled grade, grammage, roll width or sheet size, quantity per size, printing or converting process, end use and destination port." },
      { q: "Can I request a kraft paper sample before ordering?", a: "Yes. Standard sample material is free. The customer pays the international courier charge, and the production specification is confirmed after sample evaluation." },
    ],
    seoTitle: "Brown Kraft Paper Rolls & Sheets Supplier",
    metaDescription: "Brown, white and recycled kraft paper rolls and sheets for bags, sacks and wrapping. Compare grade-specific specifications and request samples.",
    keywords: ["kraft paper", "virgin kraft", "sack kraft paper", "brown kraft paper", "brown kraft paper rolls", "brown kraft paper sheets", "packaging kraft", "industrial kraft paper"],
    image: "/images/products/package-board/kraft-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-01.jpg",
            "alt": "kraft paper scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-02.jpg",
            "alt": "kraft paper scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-03.jpg",
            "alt": "kraft paper scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-04.jpg",
            "alt": "kraft paper scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-05.jpg",
            "alt": "kraft paper scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-06.jpg",
            "alt": "kraft paper scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-07.jpg",
            "alt": "kraft paper scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-scene-08.jpg",
            "alt": "kraft paper scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-photo-01.jpg",
            "alt": "kraft paper procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-photo-02.jpg",
            "alt": "kraft paper spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-photo-03.jpg",
            "alt": "kraft paper design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-photo-04.jpg",
            "alt": "kraft paper application photo"
      },
      {
            "src": "/images/products/package-board/gallery/kraft-paper-photo-05.jpg",
            "alt": "kraft paper website banner"
      }
,
    ],
  },
  "duplex-board": {
    id: "duplex-board",
    name: "Duplex Board",
    category: "package-board",
    tagline: "Coated white-top duplex board with grey back for economical folding cartons and printed packaging.",
    description:
      "YOUNGSUN Duplex Board provides a smooth, coated white printing front side with an economical recycled grey reverse, making it ideal for high-volume packaging where print quality, converting efficiency, and cost control must be balanced. Available in 200–450 gsm, the board offers ISO 85%+ brightness on the coated top side with stiffness optimized for carton converting. It comes in grey back as standard, with white back available subject to order quantity. The printable white surface supports multicolor carton printing, while the recycled base balances packaging performance and cost. The board is suitable for die-cutting, scoring, folding, and gluing on automated lines. Typical applications include consumer product cartons, food secondary packaging, toy boxes, shoe boxes, household packaging, and display packaging. Food-grade options with barrier coating are also available. Custom grammage, size, sheet or reel supply, cutting, and export packing are supported.",
    specs: [
      "Grammage: 200 – 450 gsm",
      "Structure: White coated top + grey uncoated back",
      "Brightness: ISO 85%+ (top side)",
      "Stiffness: Optimized for carton converting",
      "Format: Sheets & reels",
      "Food-grade options with barrier coating",
    ],
    applications: [
      "FMCG retail cartons (soap, toothpaste, snacks)",
      "Shoe boxes and garment boxes",
      "Toy and game packaging",
      "Matchbox and firework cartons",
      "Pharmaceutical secondary packaging",
      "General retail and display packaging",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Duplex Board Grey Back",
      "Duplex Board White Back (subject to availability)",
    ],
    features: [
      "Printable White Surface — Provides a suitable surface for multicolor carton printing.",
      "Economical Recycled Base — Balances packaging performance and cost.",
      "Good Converting Performance — Suitable for die-cutting, scoring, folding and gluing.",
      "Flexible Supply — Available in sheets, reels and custom dimensions.",
    ],
    customization: [
      "Custom grammage",
      "Custom size",
      "Sheet or reel supply",
      "Custom cutting",
      "Export packing",
    ],
    commercial: { moq: "From 1 metric ton for regular specifications; confirm by grammage, size and format", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grey back or white back","Grammage","Size","Quantity","Application","Destination port"],
    faqs: [
      { q: "What is the difference between grey-back and white-back duplex board?", a: "Grey-back duplex board has a coated white printing face and an economical recycled grey reverse. White-back options provide a lighter reverse appearance but are subject to grade and quantity availability. Confirm which side will remain visible in the finished carton." },
      { q: "How does duplex board compare with folding box board?", a: "Duplex board uses an economical recycled base and is suited to high-volume printed cartons. Folding box board uses a different multi-ply construction and is usually selected when premium appearance, stiffness or folding performance has higher priority. The final choice should be tested against the carton structure and converting line." },
      { q: "What information is required to quote duplex board?", a: "Specify grey or white back, grammage, sheet or reel size, quantity per size, printing and finishing process, end use and destination port. Regular specifications start from 1 metric ton, subject to confirmation by grammage, size and format." },
    ],
    seoTitle: "Duplex Board Grey Back Supplier",
    metaDescription: "Coated white-top duplex board from 200 to 450 gsm for economical folding cartons, retail packaging and printed boxes. Request sheets, reels or samples.",
    keywords: ["duplex board", "white-lined chipboard", "WLC", "coated duplex board", "grey back board", "FMCG carton board"],
    image: "/images/products/package-board/duplex-board-main.webp",
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-01.jpg",
            "alt": "duplex board scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-02.jpg",
            "alt": "duplex board scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-03.jpg",
            "alt": "duplex board scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-04.jpg",
            "alt": "duplex board scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-05.jpg",
            "alt": "duplex board scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-06.jpg",
            "alt": "duplex board scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-07.jpg",
            "alt": "duplex board scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-scene-08.jpg",
            "alt": "duplex board scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-photo-01.jpg",
            "alt": "duplex board procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-photo-02.jpg",
            "alt": "duplex board spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-photo-03.jpg",
            "alt": "duplex board design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-photo-04.jpg",
            "alt": "duplex board application photo"
      },
      {
            "src": "/images/products/package-board/gallery/duplex-board-photo-05.jpg",
            "alt": "duplex board website banner"
      }
,
    ],
  },
  "pe-coated-paper": {
    id: "pe-coated-paper",
    name: "PE Coated Paper",
    category: "package-board",
    tagline: "Polyethylene-laminated paper and board for moisture barrier, heat-seal, and liquid-resistant packaging.",
    description:
      "PE coated paper consists of a paper or board substrate extrusion-coated with a thin layer of polyethylene (PE) on one or both sides. The PE layer creates a moisture-proof, grease-resistant, and heat-sealable barrier — making it the standard material for paper cups, cold-drink cups, ice-cream tubs, and takeaway containers. Available with single-side PE coating (1PE) for general moisture protection or double-side coating (2PE) for full liquid containment. PE grammage ranges from 12 gsm to 30 gsm depending on barrier requirements.",
    specs: [
      "Substrate: Kraft paper / White paper / Board, 80–350 gsm",
      "PE coating: 12–30 gsm, one side (1PE) or two sides (2PE)",
      "Heat-sealable: Yes, standard PE heat-seal range 110–150°C",
      "Moisture barrier: WVTR ≤ 10 g/m²/24h (at 38°C, 90% RH)",
      "Format: Rolls (slit to width) & sheets",
      "Food-grade: FDA 21 CFR 176.170 & EU 1935/2004 compliant",
    ],
    applications: [
      "Paper cups — hot cups and cold cups",
      "Ice cream tubs and lids",
      "Takeaway food containers and boxes",
      "Frozen food packaging",
      "Grease-resistant wrapping and bags",
      "Butter and margarine wraps",
    ],
    certifications: ["FDA-compliant", "EU 1935/2004", "FSC Mix"],
    variants: [
      "Single-Side PE Coated Paper (1PE)",
      "Double-Side PE Coated Paper (2PE)",
      "PE Coated Kraft Paper",
      "PE Coated White Board",
    ],
    features: [
      "Moisture Barrier — PE layer prevents water and moisture penetration for food and liquid packaging.",
      "Heat-Sealable — Standard PE heat-seal range 110–150°C for cup and container forming.",
      "Grease Resistant — Suitable for oily and greasy food applications.",
      "Food-Grade Compliance — FDA 21 CFR 176.170 & EU 1935/2004 compliant for direct food contact.",
    ],
    customization: [
      "Custom PE coating weight (12–30 gsm)",
      "Single or double side coating",
      "Custom substrate grammage",
      "Slit-to-width reels",
      "Custom packing",
    ],
    commercial: { moq: "1 metric ton", leadTime: "2–3 weeks", samples: "Free samples available", certification: "FSC certified", containerLoading: "40HQ full load: 25 metric tons" },
    quoteReqs: ["Base paper or board grade", "Substrate and PE coating weight", "Single- or double-side coating", "Roll width or sheet size", "Quantity", "Application and destination port"],
    faqs: [
      { q: "Should I choose one-side PE or two-side PE coating?", a: "One-side PE is used when the barrier or heat-seal function is required on one face. Two-side PE is selected when both faces need protection, such as structures exposed to liquid or condensation on both sides. Confirm the filling product, temperature and forming process before selection." },
      { q: "How do I choose the base paper and PE coating weight?", a: "The base paper or board controls stiffness, print surface and forming performance, while the PE weight affects barrier and sealing behavior. Provide the end use, substrate grammage, required coating side, roll or sheet dimensions and converting conditions for review." },
      { q: "Can PE coated paper be supplied for food-contact packaging?", a: "Food-packaging grades are available, but compliance must be confirmed for the exact substrate, PE structure, contact conditions and destination market. Request the relevant documents before approving a direct-food-contact application." },
    ],
    seoTitle: "PE Coated Paper Supplier for Paper Cups",
    metaDescription: "PE coated paper and board with 12–30 gsm single- or double-side coating for cups, tubs and takeaway packs. Request substrates, roll widths or samples.",
    keywords: ["PE coated paper", "polyethylene coated paper", "paper cup stock", "PE coated board", "heat seal paper", "food-grade coated paper"],
    image: "/images/products/package-board/pe-coated-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-01.jpg",
            "alt": "pe coated paper scene 01 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-02.jpg",
            "alt": "pe coated paper scene 02 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-03.jpg",
            "alt": "pe coated paper scene 03 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-04.jpg",
            "alt": "pe coated paper scene 04 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-05.jpg",
            "alt": "pe coated paper scene 05 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-06.jpg",
            "alt": "pe coated paper scene 06 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-07.jpg",
            "alt": "pe coated paper scene 07 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-scene-08.jpg",
            "alt": "pe coated paper scene 08 scene"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-photo-01.jpg",
            "alt": "pe coated paper procurement photo"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-photo-02.jpg",
            "alt": "pe coated paper spec sample photo"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-photo-03.jpg",
            "alt": "pe coated paper design hero photo"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-photo-04.jpg",
            "alt": "pe coated paper application photo"
      },
      {
            "src": "/images/products/package-board/gallery/pe-coated-paper-photo-05.jpg",
            "alt": "pe coated paper website banner"
      }
,
    ],
  },

  "ckb": {
    id: "ckb",
    name: "CKB (Coated Kraft Back)",
    category: "package-board",
    tagline: "High-strength coated kraft back board for beverage, food, frozen, retail and industrial folding cartons.",
    description:
      "YOUNGSUN Coated Kraft Back Board (CKB) combines a multi-coated (triple-coated) white printing surface with a strong unbleached kraft reverse, delivering both attractive retail presentation and robust structural performance. Available in 200–350 gsm with common weights at 200, 235, 245, 255, 280, 300, 325, and 350 gsm, the board is hard-sized for demanding applications including cold storage, frozen food, and beverage packaging. The strong kraft reverse provides reliable tear and compression performance, while the high-quality coated top supports detailed printing and branding. The board can be supplied in sheets, reels, and custom sizes. Primary applications include beverage packaging, dry food cartons, frozen food packaging, cold storage packaging, toy boxes, shoe boxes, and tool packaging. Custom grammage, sheet or reel supply, size, cutting, and export packing are all supported. Food-contact requirements must be confirmed by grade and supporting documentation before order.",
    specs: [
      "Grammage: 200 – 350 gsm",
      "Surface: Triple-coated white top with unbleached kraft back",
      "Supply forms: Sheets, reels, custom sizes",
      "Grade: CKB",
    ],
    applications: [
      "Beverage packaging",
      "Dry food cartons",
      "Frozen food packaging",
      "Cold storage packaging",
      "Toy boxes",
      "Shoe boxes",
      "Tool packaging",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Coated Kraft Back Board",
    ],
    features: [
      "Strong Kraft Reverse — Provides reliable tear and compression performance.",
      "High-Quality Coated Top — Supports attractive printing and retail presentation.",
      "Hard-Sized Structure — Suitable for cold storage, frozen and beverage packaging applications.",
      "High Yield — Combines structural performance with efficient material use.",
    ],
    customization: [
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Custom cutting",
      "Export packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage","Sheet or reel size","Quantity","End use","Food-contact requirement","Destination port"],
    faqs: [
      { q: "How is CKB different from folding box board or duplex board?", a: "CKB combines a coated white printing face with an unbleached kraft reverse for strength and a natural kraft appearance. FBB and duplex board use different fibre and back constructions. Compare stiffness, tear performance, reverse-side appearance, printing and the final carton environment before selection." },
      { q: "Is CKB suitable for frozen or chilled food packaging?", a: "CKB can be selected for beverage, chilled and frozen-food cartons when the complete structure matches moisture, temperature, filling and storage conditions. Food-contact and barrier suitability must be confirmed for the exact grade, coating or laminate and destination market." },
      { q: "What should I specify when requesting CKB?", a: "Send the grammage, sheet or reel dimensions, quantity per size, printing and finishing process, carton application, storage conditions, any food-contact requirement and destination port. The current minimum is 5 metric tons per product per size; standard samples are free and courier charges are paid by the customer." },
    ],
    seoTitle: "Coated Kraft Back Board Supplier",
    metaDescription: "CKB coated kraft back board from 200 to 350 gsm for beverage carriers, frozen food, retail and industrial cartons. Request sheets, reels or samples.",
    keywords: ["coated kraft back board", "CKB paperboard supplier", "kraft back folding carton", "beverage packaging board", "frozen food paperboard"],
    image: "/images/products/package-board/ckb-main.webp",
    gallery: [],
  },

  // ========================
  // CULTURE PAPER (6 sub-products)
  // ========================
  "woodfree-paper": {
    id: "woodfree-paper",
    name: "Woodfree Offset / Bond Paper",
    category: "culture-paper",
    tagline: "Uncoated woodfree offset paper, also specified as bond paper in many markets, for books, forms, stationery and commercial printing.",
    description:
      "YOUNGSUN Woodfree Offset Paper is an uncoated printing paper developed for clear text reproduction, balanced ink absorption, and reliable high-speed press performance. In markets where buyers use bond paper as a commercial term, it commonly refers to this type of uncoated woodfree paper; the exact grammage, whiteness, size, supply format and printing method should still be confirmed before quotation. Available in 60–120 gsm with common weights at 60, 65, 70, 80, 100, and 120 gsm, the paper offers high white and natural white color options depending on the grade. It delivers good opacity for double-sided printing, making it suitable for books, notebooks, textbooks, manuals, forms, envelopes, and general commercial printing. Available in sheets, reels, and custom-cut formats, with custom size and export packing available to order.",
    specs: [
      "Grammage: 60 – 120 gsm (custom up to 300 gsm)",
      "Brightness: ISO 90–100%",
      "Opacity: ≥ 90% at 80 gsm",
      "Cobb value: ≤ 30 g/m² (sized for offset/inkjet)",
      "Format: Sheets (A4, A3, SRA3, custom), rolls",
      "Acid-free: pH 7.0–9.0, alkaline reserve ≥ 2% CaCO₃",
    ],
    applications: [
      "Bond paper sheets — forms, stationery and office documents",
      "Book publishing — text stock for novels and textbooks",
      "Business stationery — letterhead, envelopes, notepads",
      "Commercial print — flyers, leaflets, newsletters",
      "Envelope paper — wallet, pocket, and window envelopes",
      "Archival documents — ISO 9706 permanent paper",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "High White Offset Paper",
      "Natural White Offset Paper (subject to order)",
      "Bond paper sheets or reels to the confirmed specification",
    ],
    features: [
      "Balanced Ink Absorption — Supports clean text and stable offset printing.",
      "Good Opacity — Suitable for double-sided books, manuals and forms.",
      "Reliable Runnability — Designed for consistent feeding and printing performance.",
      "Multiple Supply Forms — Available in sheets, reels and custom formats.",
    ],
    customization: [
      "Custom grammage",
      "High white or natural white",
      "Sheet or reel supply",
      "Custom size",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular specifications; confirm by grammage, size and format", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage","Sheet or reel size","Quantity","Printing method","Application","Destination port"],
    faqs: [
      { q: "Is bond paper the same as woodfree offset paper?", a: "Bond paper is commonly used as a market term for uncoated woodfree paper, but specifications vary. Confirm grammage, whiteness, opacity, size, supply format and printing method before ordering." },
      { q: "Can bond paper be supplied in sheets and reels?", a: "Yes. Woodfree or bond paper can be supplied as standard sheets, custom sheets, cut-size formats or reels according to the confirmed grade and quantity." },
      { q: "Is woodfree paper suitable for double-sided printing?", a: "The available grades are selected for opacity and balanced ink absorption, making them suitable for many double-sided books, manuals and forms. Final print performance should be checked against the chosen grammage and press conditions." },
    ],
    seoTitle: "Woodfree Offset & Bond Paper Supplier",
    metaDescription: "Woodfree offset and bond paper from 60 to 120 gsm for books, forms, stationery and commercial printing. Request sheets, reels or free samples.",
    keywords: ["woodfree paper", "uncoated woodfree", "UWF paper", "office paper", "bond paper", "book paper"],
    image: "/images/products/culture-paper/woodfree-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-01.jpg",
            "alt": "woodfree paper scene 01 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-02.jpg",
            "alt": "woodfree paper scene 02 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-03.jpg",
            "alt": "woodfree paper scene 03 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-04.jpg",
            "alt": "woodfree paper scene 04 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-05.jpg",
            "alt": "woodfree paper scene 05 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-06.jpg",
            "alt": "woodfree paper scene 06 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-07.jpg",
            "alt": "woodfree paper scene 07 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-scene-08.jpg",
            "alt": "woodfree paper scene 08 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-photo-01.jpg",
            "alt": "woodfree paper procurement photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-photo-02.jpg",
            "alt": "woodfree paper spec sample photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-photo-03.jpg",
            "alt": "woodfree paper design hero photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-photo-04.jpg",
            "alt": "woodfree paper application photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/woodfree-paper-photo-05.jpg",
            "alt": "woodfree paper website banner"
      }
,
    ],
  },
  "color-offset-paper": {
    id: "color-offset-paper",
    name: "Color Offset Paper",
    category: "culture-paper",
    tagline: "Lightweight colored offset paper for office forms, inserts, publishing, stationery and promotional printing.",
    description:
      "YOUNGSUN Color Offset Paper is available in standard, deep, and fluorescent shades for a wide range of printing and converting applications. The grammage range spans 60–150 gsm with an uncoated surface suitable for offset printing, copying, writing, and general paper converting. Lighter weights work well for inserts, forms, and multi-page printed products, while heavier weights serve stationery and promotional items. The broad color range supports coding, branding, publishing, and promotional use. Common applications include office forms, book inserts, flyers, stationery, educational materials, tickets, and promotional printing. Available in sheets, reels, and custom-cut sizes. Custom color selection, grammage, sheet or reel supply, size, and packing are supported.",
    specs: [
      "Grammage: 60 – 200 gsm",
      "Colors: 20+ standard, custom matching available",
      "Color consistency: Delta E ≤ 1.5 batch-to-batch",
      "Surface: Sized for offset, good ink holdout",
      "Format: Sheets & reels",
      "Lightfastness: ISO 105-B02 rated",
    ],
    applications: [
      "Colored letterhead and corporate stationery",
      "Event programs, menus, and brochures",
      "Colored flyers, leaflets, and direct mail",
      "Scrapbooking and craft paper",
      "Colored envelope stock",
      "Colored divider pages and interleaving",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Standard Color Offset Paper",
      "Deep Color Offset Paper",
      "Fluorescent Offset Paper",
    ],
    features: [
      "Broad Color Range — Supports coding, branding, publishing and promotional use.",
      "Uncoated Printing Surface — Suitable for offset printing, writing and selected digital applications.",
      "Lightweight Options — Suitable for inserts, forms and multi-page printed products.",
      "Custom Converting — Available in sheets, reels and custom-cut sizes.",
    ],
    customization: [
      "Color selection",
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Custom packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Color reference","Grammage","Sheet or reel size","Quantity","Printing method","Destination port"],
    faqs: [
      { q: "What is the difference between color offset paper and color card paper?", a: "Color offset paper is generally lighter and designed for forms, inserts, publishing and stationery, while color card paper is heavier and selected for tags, cards and packaging. Confirm grammage, stiffness, print process and converting needs instead of choosing by color alone." },
      { q: "Can color offset paper be used for digital printing and copying?", a: "Selected grades can run in suitable digital or office equipment, but moisture, surface sizing, grain direction, sheet size and machine requirements must be checked. For production work, test the exact color and grammage on the intended equipment before placing the bulk order." },
      { q: "What details are required for a color offset paper quotation?", a: "Provide the color reference, grammage, sheet or reel dimensions, quantity per size, printing or copying method, end use and destination port. The current minimum is 5 metric tons per product per size; standard samples are free and international courier charges are paid by the customer." },
    ],
    seoTitle: "Color Offset Paper Supplier",
    metaDescription: "Color offset paper in standard, deep and fluorescent shades for stationery, inserts, books and commercial printing. Request sheets, reels or samples.",
    keywords: ["color offset paper", "colored uncoated paper", "tinted offset", "colored printing paper", "dyed paper", "offset color paper"],
    image: "/images/products/culture-paper/color-offset-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-01.jpg",
            "alt": "color offset paper scene 01 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-02.jpg",
            "alt": "color offset paper scene 02 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-03.jpg",
            "alt": "color offset paper scene 03 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-04.jpg",
            "alt": "color offset paper scene 04 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-05.jpg",
            "alt": "color offset paper scene 05 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-06.jpg",
            "alt": "color offset paper scene 06 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-07.jpg",
            "alt": "color offset paper scene 07 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-scene-08.jpg",
            "alt": "color offset paper scene 08 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-photo-01.jpg",
            "alt": "color offset paper procurement photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-photo-02.jpg",
            "alt": "color offset paper spec sample photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-photo-03.jpg",
            "alt": "color offset paper design hero photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-photo-04.jpg",
            "alt": "color offset paper application photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/color-offset-paper-photo-05.jpg",
            "alt": "color offset paper website banner"
      }
,
    ],
  },
  "lwc-paper": {
    id: "lwc-paper",
    name: "LWC Paper (Lightweight Coated)",
    category: "culture-paper",
    tagline: "Lightweight coated paper for magazines, catalogs, inserts, manuals and high-volume commercial printing.",
    description:
      "YOUNGSUN LWC (Lightweight Coated) Paper combines low basis weight with a coated printing surface, helping publishers and printers reduce product weight and distribution cost while maintaining image quality and opacity. Available in 58–80 gsm with common weights at 58, 60, 62, 64, 70, and 80 gsm. Typical specifications include 43% gloss, ISO 84% whiteness, and opacity ranging from approximately 89.5% to 96% depending on grammage — suitable for double-sided publication printing. The coated surface supports clear images and consistent color reproduction, making it ideal for high-volume magazine, catalog, advertising insert, instruction manual, retail leaflet, and direct mail applications. Available in sheets, reels, and custom sizes with export packing options.",
    specs: [
      "Grammage: 35 – 70 gsm",
      "Coating: Light on-machine coated, gloss or matt",
      "Brightness: ISO 70–80%",
      "Opacity: ≥ 88% at 60 gsm",
      "Format: Reels (standard widths), sheets on request",
      "Suitable for: Heatset web offset, rotogravure",
    ],
    applications: [
      "High-circulation magazines and periodicals",
      "Retail catalogs and mail-order books",
      "Advertising inserts and newspaper supplements",
      "Direct mail flyers and brochures",
      "Coupon booklets and promotional booklets",
      "Telephone directories and reference books",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Lightweight Coated Paper",
    ],
    features: [
      "Low Basis Weight — Helps reduce publication weight and distribution cost.",
      "Coated Print Surface — Supports clear images and consistent color reproduction.",
      "Good Opacity — Suitable for double-sided publication printing.",
      "High-Volume Printing Use — Designed for magazines, catalogs, inserts and commercial print runs.",
    ],
    customization: [
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Custom packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage","Sheet or reel size","Quantity","Printing method","Application","Destination port"],
    faqs: [
      { q: "When should a buyer choose LWC instead of coated art paper?", a: "LWC is selected when publication weight, postage or distribution efficiency matters while a coated image surface is still required. Coated art paper generally offers a heavier, more premium feel. Compare opacity, bulk, gloss, press route and finished-piece weight for the actual publication." },
      { q: "Which printing processes are suitable for LWC paper?", a: "LWC is commonly specified for heatset web offset and rotogravure publication printing. Reel width, basis weight, moisture, coating, web tension and press speed must match the equipment, so a representative press trial is recommended before a large production run." },
      { q: "What information is needed to quote LWC paper?", a: "Specify grammage, gloss or matt finish, reel width or sheet size, roll diameter and core if applicable, quantity per size, printing process, publication type and destination port. The current minimum is 5 metric tons per product per size." },
    ],
    seoTitle: "LWC Paper Supplier for Magazines and Catalogs",
    metaDescription: "Lightweight coated paper with good opacity for magazines, catalogs, inserts and high-volume heatset web printing. Request reels, sheets or samples.",
    keywords: ["LWC paper", "lightweight coated paper", "magazine paper", "catalog paper", "low grammage coated", "heatset web paper"],
    image: "/images/products/culture-paper/lwc-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-01.jpg",
            "alt": "lwc paper scene 01 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-02.jpg",
            "alt": "lwc paper scene 02 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-03.jpg",
            "alt": "lwc paper scene 03 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-04.jpg",
            "alt": "lwc paper scene 04 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-05.jpg",
            "alt": "lwc paper scene 05 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-06.jpg",
            "alt": "lwc paper scene 06 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-07.jpg",
            "alt": "lwc paper scene 07 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-scene-08.jpg",
            "alt": "lwc paper scene 08 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-photo-01.jpg",
            "alt": "lwc paper procurement photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-photo-02.jpg",
            "alt": "lwc paper spec sample photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-photo-03.jpg",
            "alt": "lwc paper design hero photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-photo-04.jpg",
            "alt": "lwc paper application photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/lwc-paper-photo-05.jpg",
            "alt": "lwc paper website banner"
      }
,
    ],
  },
  "ncr-paper": {
    id: "ncr-paper",
    name: "Carbonless Copy Paper (NCR)",
    category: "culture-paper",
    tagline: "Self-copying carbonless paper for forms, invoices, and receipts — no carbon sheet needed, clean and smudge-free.",
    description:
      "YOUNGSUN NCR (No Carbon Required) carbonless copy paper provides reliable image transfer in multi-part forms, invoices, receipts, and business documents. Available in 2-part to 6-part configurations, the paper uses a chemical coating system — CB (Coated Back), CFB (Coated Front and Back), and CF (Coated Front) sheets — to produce clean, consistent copies without carbon interleaves. The paper delivers sharp blue or black image transfer under writing or impact printing pressure, with good fade resistance for archival records. Common applications include business forms, invoices, delivery notes, receipts, contracts, bank slips, and warehouse documentation. The paper is compatible with offset and letterpress printing for form design and branding. Custom ply configurations, grammage, sheet or roll sizes, and packing are available to order.",
    specs: [
      "Types: CB (Coated Back) / CFB (Coated Front & Back) / CF (Coated Front)",
      "Grammage: 50 – 60 gsm per ply",
      "Colors: White / Pink / Yellow / Blue / Green (sequential sets)",
      "Image color: Blue (standard) / Black (specialty)",
      "Format: Sheets (standard & custom sizes), reels",
      "Shelf life: Minimum 2 years under normal storage",
    ],
    applications: [
      "Business forms — invoices, purchase orders, delivery notes",
      "Receipt books and cash-register rolls",
      "Multi-part contracts and agreements",
      "Medical prescription pads and lab forms",
      "Logistics waybills and consignment notes",
      "Bank deposit and withdrawal slips",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "CB (Coated Back) — Top Sheet",
      "CFB (Coated Front & Back) — Middle Sheet",
      "CF (Coated Front) — Bottom Sheet",
      "2-Part to 6-Part Sets",
    ],
    features: [
      "Clean Self-Copying — Creates instant copies without carbon sheets, pressure-activated microcapsule technology.",
      "Multi-Part Capability — Standard sets from 2-part up to 6-part for complex business forms.",
      "Color-Coded Plies — Sequential colors (white, pink, yellow, blue, green) for easy identification.",
      "Smudge-Free Images — Blue or black image options with sharp contrast for permanent records.",
    ],
    customization: [
      "Custom sheet size",
      "Multi-part set configuration",
      "Sequential color plies",
      "Blue or black image color",
      "Reel or sheet supply",
    ],
    commercial: { moq: "From 1 metric ton for regular specifications; confirm by ply, grammage, size and format", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Number of plies","Grammage","Sheet or roll size","Quantity","Printing method","Destination port"],
    faqs: [
      { q: "What do CB, CFB and CF mean in NCR paper?", a: "CB is the top sheet coated on the back, CFB is an intermediate sheet coated on both sides, and CF is the bottom sheet coated on the front. A complete multipart form combines these layers in the correct order to transfer the image under pressure." },
      { q: "How many copies can carbonless NCR paper produce?", a: "Regular sets are commonly configured from two to six parts, but readability depends on ply sequence, sheet grammage, writing or impact pressure, storage and form design. Approve a completed set using the intended printer or writing method before production." },
      { q: "What should I send for an NCR paper quotation?", a: "Provide the number of parts, CB, CFB and CF sequence, color order, blue or black image requirement, grammage per ply, sheet or reel size, quantity, printing method and destination port. Regular specifications start from 1 metric ton, subject to confirmation." },
    ],
    seoTitle: "Carbonless Copy Paper (NCR) Supplier",
    metaDescription: "Carbonless copy paper in CB, CFB and CF sheets or reels for invoices, receipts, delivery notes and multipart forms. Request colors, sizes or free samples.",
    keywords: ["NCR paper", "carbonless paper", "carbonless copy paper", "self-copy paper", "CB CFB CF paper", "multi-part forms paper"],
    image: "/images/products/culture-paper/ncr-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-01.jpg",
            "alt": "ncr paper scene 01 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-02.jpg",
            "alt": "ncr paper scene 02 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-03.jpg",
            "alt": "ncr paper scene 03 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-04.jpg",
            "alt": "ncr paper scene 04 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-05.jpg",
            "alt": "ncr paper scene 05 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-06.jpg",
            "alt": "ncr paper scene 06 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-07.jpg",
            "alt": "ncr paper scene 07 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-scene-08.jpg",
            "alt": "ncr paper scene 08 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-photo-01.jpg",
            "alt": "ncr paper procurement photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-photo-02.jpg",
            "alt": "ncr paper spec sample photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-photo-03.jpg",
            "alt": "ncr paper design hero photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-photo-04.jpg",
            "alt": "ncr paper application photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/ncr-paper-photo-05.jpg",
            "alt": "ncr paper website banner"
      }
,
    ],
  },
  "copy-paper": {
    id: "copy-paper",
    name: "Multi-Format Copy Paper",
    category: "culture-paper",
    tagline: "A multi-format office paper program covering A3, A4, A5, B-series and selected US sizes for distributors, institutions and private-label buyers.",
    description:
      "This page covers YOUNGSUN's multi-format copy paper program rather than a single A4 product. It includes 70, 75 and 80 gsm office paper in A-series (A3, A4 and A5), B-series (B4 and B5), K-series (8K and 16K), and selected US formats. Ream and carton configurations can be adapted for wholesale distribution, institutional procurement and qualified private-label programs. Buyers sourcing only the standard 210×297 mm format should use the dedicated A4 Copy Paper page.",
    specs: [
      "Grammage: 70 / 75 / 80 gsm",
      "Brightness: ISO 92–100%",
      "Formats: A3, A4, A5, B4, B5, 8K, 16K and selected Letter / Legal sizes",
      "Opacity: ≥ 92% at 80 gsm",
      "Moisture: 4.5% ± 1%",
      "Packaging: 500 sheets/ream, 5–10 reams/carton",
      "Compatibility: Laser, inkjet, copier, fax",
    ],
    applications: [
      "Office printing and copying",
      "School and educational use",
      "Government and institutional procurement",
      "Home office and remote work",
      "Commercial printing of forms and documents",
      "Export wholesale — container-load supply",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "70 gsm Copy Paper",
      "80 gsm Copy Paper",
      "Standard Packing",
      "Private-Label Packing",
    ],
    features: [
      "Multiple Office Formats — Available in common A-, B- and K-series formats, including A3, A4, A5, B4, B5, 8K and 16K.",
      "Flexible Ream Configuration — Standard 400- or 500-sheet reams are available, with customized packs from 240 to 500 sheets.",
      "Wholesale Carton Options — Cartons can be arranged with 5, 6, 8 or 10 reams according to the target market.",
      "Private-Label Supply — Customized wrapper and carton designs are available for qualified container-volume programs.",
    ],
    customization: [
      "Private-label ream wrapper",
      "Customized carton design",
      "Custom sheet count from 240 to 500 sheets",
      "5, 6, 8 or 10 reams per carton",
      "Selected A-, B-, K- and US sheet formats",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage (70/75/80 gsm)","Sheet size","Quantity per size","Sheets per ream","Standard or private-label packing","Destination port"],
    faqs: [
      { q: "What is the difference between Multi-Format Copy Paper and A4 Copy Paper?", a: "Multi-Format Copy Paper covers A-, B- and K-series sheets plus selected US sizes. The dedicated A4 page is only for 210 × 297 mm sheets and is better for buyers purchasing a standard A4 program." },
      { q: "Can the ream wrapper and export carton carry our brand?", a: "Private-label wrappers and cartons are available for qualified orders. Send the artwork, sheet count per ream, reams per carton, required languages and destination market so packing feasibility can be confirmed." },
      { q: "What information is needed for a copy paper quotation?", a: "Please provide grammage, every sheet size, quantity per size, sheets per ream, reams per carton, standard or private-label packing, pallet requirements and destination port." },
    ],
    seoTitle: "Copy Paper Supplier | A3, A4 and A5 Sizes",
    metaDescription: "Multi-format copy paper in A3, A4, A5, B-series and selected US sizes for wholesale, institutional and private-label supply. Request export pricing.",
    keywords: ["multi-format copy paper", "A3 copy paper", "A5 copy paper", "office paper wholesale", "private label copy paper", "copy paper supplier"],
    image: "/images/products/culture-paper/copy-paper-main-v2.webp",
    gallery: [
    ],
  },
  "newsprint": {
    id: "newsprint",
    name: "Newsprint Paper Rolls & Sheets",
    category: "culture-paper",
    tagline: "Cost-efficient, high-speed printing paper for newspapers, advertising inserts, and mass-circulation publications.",
    description:
      "Newsprint is a lightweight, uncoated paper grade used mainly for coldset web offset newspapers, advertising inserts and high-volume publications. Buyers should select the paper by grammage, brightness, opacity, reel width, outer diameter, core size and press configuration rather than by price alone. Reel supply is the normal production format, while sheets can be confirmed for suitable specifications. A representative sample or press trial is recommended before a large order.",
    specs: [
      "Grammage: 40 / 42 / 45 / 48.8 / 52 / 57 gsm",
      "Brightness: ISO 56–68%",
      "Opacity: ≥ 92% at 48.8 gsm",
      "Format: Reels (standard width 600–1800mm), sheets on request",
      "Composition: 80–90% mechanical pulp, 10–20% chemical pulp",
    ],
    applications: [
      "Daily and weekly newspaper printing (coldset web offset)",
      "Advertising inserts and flyers for retail distribution",
      "Mass-circulation community and free newspapers",
      "Trade and industry newsletters and bulletins",
      "Protective wrapping and interleaving",
      "Directory and catalog printing (economy grade)",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Standard Newsprint (40–57 gsm)",
      "Improved Newsprint (higher brightness)",
      "Colored Newsprint (subject to order)",
    ],
    features: [
      "Cost-Efficient — Low basis weight designed for high-volume, economical printing at scale.",
      "Press-Matched Runnability — Reel dimensions and paper specifications can be matched to the coldset press and production setup.",
      "Good Opacity — Maintains readability even at lightweight grammages for double-sided printing.",
      "Reel Supply — Standard and jumbo reels for high-speed newspaper and publication presses.",
    ],
    customization: [
      "Custom grammage",
      "Custom reel width",
      "Sheet supply on request",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular specifications; confirm by grammage, reel width or sheet size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage","Reel width and diameter","Core size","Quantity per size","Press configuration","Destination port"],
    faqs: [
      { q: "Is newsprint supplied in reels or sheets?", a: "Reels are the normal format for coldset web offset production. Sheet supply can be checked against the required grammage, dimensions and order quantity." },
      { q: "Can the same newsprint run on every coldset press?", a: "Not automatically. Reel width, outer diameter, core, tension, grammage and surface condition should match the press. We recommend approving a representative sample or production trial before a large run." },
      { q: "What details should a newsprint buyer send for a quotation?", a: "Please send grammage, reel width and outer diameter, core size, quantity per size, press configuration, packing requirement and destination port. For sheets, include the exact sheet dimensions." },
    ],
    seoTitle: "Newsprint Paper Rolls & Sheets Supplier",
    metaDescription: "Newsprint paper rolls and newsprint paper sheets in 40–57 gsm for coldset printing, inserts and mass-circulation publications. Request widths or free samples.",
    keywords: ["newsprint", "newsprint paper", "newspaper paper", "coldset paper", "standard newsprint", "web offset paper"],
    image: "/images/products/culture-paper/newsprint-main.webp",
    gallery: [
      { src: "/images/products/culture-paper/gallery/01-Newsprint-Printing-Press.jpg", alt: "Newsprint printing press" },
      { src: "/images/products/culture-paper/gallery/02-Newsprint-Cafe-Reader.jpg", alt: "Newsprint cafe reader" },
      { src: "/images/products/culture-paper/gallery/03-Newsprint-Newspaper-Kiosk.jpg", alt: "Newsprint newspaper kiosk" },
      { src: "/images/products/culture-paper/gallery/04-Newsprint-Advertising-Circulars.jpg", alt: "Newsprint advertising circulars" },
      { src: "/images/products/culture-paper/gallery/05-Newsprint-Free-Sheet-Distribution.jpg", alt: "Newsprint free sheet distribution" },
      { src: "/images/products/culture-paper/gallery/06-Newsprint-Weekend-Supplement.jpg", alt: "Newsprint weekend supplement" },
      { src: "/images/products/culture-paper/gallery/07-Newsprint-Protective-Wrapping.jpg", alt: "Newsprint protective wrapping" },
      { src: "/images/products/culture-paper/gallery/08-Newsprint-Charcoal-Sketch-Pad.jpg", alt: "Newsprint charcoal sketch pad" },
    ],
  },

  "a4-copy-paper": {
    id: "a4-copy-paper",
    name: "A4 Copy Paper",
    category: "culture-paper",
    tagline: "A dedicated 210×297 mm A4 office copy paper range for buyers who need consistent bulk and export-ready packing.",
    description:
      "YOUNGSUN A4 Copy Paper is a dedicated 210 × 297 mm office paper range in 70, 75 and 80 gsm. It is supplied for everyday laser, inkjet, copier and fax use, subject to the selected grade and equipment settings. The standard configuration is 500 sheets per ream with 5 to 10 reams per carton, plus private-label wrapper and carton options for qualified orders. Buyers requiring A3, A5, B-series, K-series or selected US sizes should use the Multi-Format Copy Paper page.",
    specs: [
      "Grammage: 70 / 75 / 80 gsm",
      "Brightness: ISO 92–100%",
      "Format: A4 (210×297mm)",
      "Opacity: ≥ 92% at 80 gsm",
      "Packaging: 500 sheets/ream, 5–10 reams/carton",
      "Export carton: Palletized, moisture-barrier wrapped",
    ],
    applications: [
      "Office printing and copying — laser, inkjet, copier",
      "School and educational procurement",
      "Government and institutional bulk supply",
      "Home office and remote work",
      "Wholesale distribution to office supply chains",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "70 gsm A4 Copy Paper",
      "75 gsm A4 Copy Paper",
      "80 gsm A4 Copy Paper",
    ],
    features: [
      "Everyday Equipment Compatibility — Suitable for common laser, inkjet, copier and fax applications when the grade and machine settings are matched.",
      "High Brightness — ISO 92–100% brightness for sharp text and clean document appearance.",
      "Smooth Surface — Dust-free finish ensures consistent toner/ink adhesion and crisp output.",
      "Export-Ready Packaging — Palletized with moisture-barrier wrapping for container shipping.",
    ],
    customization: [
      "Private-label ream wrapper",
      "Custom carton design",
      "Grammage selection (70/75/80 gsm)",
      "Ream count configuration",
      "Export pallet packing",
    ],
    commercial: { moq: "5 metric tons per product per size", leadTime: "Approximately 3 weeks after order specifications are confirmed", samples: "Standard samples are free; international courier charges are paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage (70/75/80 gsm)","Quantity in reams or metric tons","Reams per carton","Standard or private-label packing","Pallet requirements","Destination port"],
    faqs: [
      { q: "Should I choose 70, 75 or 80 gsm A4 copy paper?", a: "Choose by printer requirements, opacity, handling feel, duplex use and target price. A representative sample helps confirm feeding and print appearance before a volume order." },
      { q: "Is this A4 paper suitable for laser and inkjet printers?", a: "The range is intended for common laser, inkjet, copier and fax applications, but feeding and image performance still depend on the selected grade, printer condition and settings. Test the intended paper in the actual equipment when compatibility is critical." },
      { q: "What is needed for a private-label A4 quotation?", a: "Send the grammage, total quantity, sheets per ream, reams per carton, wrapper and carton artwork, pallet requirements, destination port and any market-specific labeling instructions." },
    ],
    seoTitle: "A4 Copy Paper Supplier | 70, 75 & 80 gsm",
    metaDescription: "A4 copy paper in 210×297 mm sheets and 70, 75 or 80 gsm for office distributors and institutional buyers. Request cartons, private-label packing or pricing.",
    keywords: ["A4 copy paper", "copy paper", "office paper", "A4 printer paper", "bulk copy paper", "copy paper export"],
    image: "/images/products/culture-paper/a4-copy-paper-main-v2.webp",
    gallery: [
    ],
  },
  "a4-thermal-paper": {
    id: "a4-thermal-paper",
    name: "A4 Thermal Paper",
    category: "culture-paper",
    tagline: "A4 direct thermal sheets for compatible portable printers used for field documents, invoices and logistics records.",
    description:
      "A4 Thermal Paper is a heat-sensitive sheet for compatible direct thermal printers, allowing field teams to print contracts, invoices, logistics records and reports without ink cartridges, ribbons or toner. Each sheet is pre-cut to 210 × 297 mm. Thermal sensitivity, image density, storage life and any BPA-free declaration must be confirmed against the printer model, selected grade and end use.",
    specs: [
      "Size: A4 (210×297mm)",
      "Coating: Direct thermal (BPA-free options available)",
      "Image color: Black",
      "Compatibility: Confirm against the portable thermal printer model",
      "Packaging: Pre-cut sheets, boxed or bulk",
      "No ink/toner required",
    ],
    applications: [
      "Portable printing for field sales and service teams",
      "On-the-spot contracts, invoices, and receipts",
      "Healthcare patient documents and prescriptions",
      "Logistics waybills and delivery confirmations",
      "Remote work and co-working space printing",
      "Travel and hospitality documentation",
    ],
    certifications: ["FSC status and any BPA-free or chemical declaration are confirmed for the exact grade and order"],
    variants: [
      "Standard A4 Thermal Paper",
      "BPA-Free A4 Thermal Paper (subject to grade documentation)",
    ],
    features: [
      "No Ink Required — Direct thermal transfer produces sharp images without cartridges, ribbons or toner.",
      "Portable Printer Compatible — Pre-cut A4 sheets for compact mobile thermal printers used by field professionals.",
      "Selectable Imaging Performance — Sensitivity, contrast and storage life can be matched to the printer and application.",
      "Instant Printing — Heat-sensitive coating enables immediate output without warm-up time.",
    ],
    customization: [
      "BPA-free option subject to grade documentation",
      "Custom sheet count per box",
      "Custom packing",
      "Branded packaging",
    ],
    commercial: { moq: "From 1 metric ton for regular formats and packing; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status and any BPA-free declaration are confirmed for the exact grade and order" },
    quoteReqs: ["Printer model", "A4 feed configuration", "Thermal sensitivity or imaging requirement", "Sheets per pack", "Quantity and packing", "Destination port"],
    faqs: [
      { q: "Can A4 thermal paper run in any A4 printer?", a: "No. It is made for compatible direct thermal printers, not ordinary laser or inkjet printers. Please provide the printer brand, model and feed configuration before ordering." },
      { q: "How is A4 thermal paper different from normal copy paper?", a: "Thermal paper has a heat-sensitive coating that forms an image without ink or toner. Copy paper is uncoated office paper that requires laser toner or inkjet ink." },
      { q: "What should I provide for an A4 thermal paper sample or quote?", a: "Send the printer model, feed method, required sensitivity or image permanence, sheets per pack, quantity, packing, any BPA-free documentation requirement and destination port." },
    ],
    seoTitle: "A4 Thermal Paper Supplier for Portable Printers",
    metaDescription: "A4 direct thermal paper for portable printers, field documents, invoices and logistics records. BPA-free options and export packing available. Request samples.",
    keywords: ["A4 thermal paper", "thermal printer paper", "portable printer paper", "no-ink printing paper", "mobile printing paper", "compact printer paper"],
    image: "/images/products/culture-paper/a4-thermal-paper-main-v2.webp",
    gallery: [
    ],
  },
  "thermal-paper-roll": {
    id: "thermal-paper-roll",
    name: "Thermal Paper Roll",
    category: "culture-paper",
    tagline: "Small-format thermal rolls for POS terminals, receipt printers and selected compatible compact printers.",
    description:
      "Thermal Paper Rolls are heat-sensitive rolls for compatible POS terminals, payment devices, receipt printers and operational records. Standard 57 mm and 80 mm widths can be combined with different outer diameters and core sizes. Roll length, thermal side, sensitivity and image retention should be matched to the printer and storage conditions. BPA-free or phenol-free options are supplied only when specified and documented for the order.",
    specs: [
      "Width: 57mm / 80mm (standard), custom widths available",
      "Roll diameter: 30–80mm",
      "Core size: 12mm / 17mm / 25mm",
      "Coating: Direct thermal (BPA-free, phenol-free options)",
      "Image color: Black, high contrast",
      "Packaging: Shrink-wrapped rolls, carton-packed",
    ],
    applications: [
      "POS receipt printing — retail, restaurants, cafes",
      "Credit card terminal receipts",
      "Kitchen order tickets",
      "Logistics label and barcode printing",
      "Selected compatible compact printers",
      "ATM and banking transaction records",
    ],
    certifications: ["FSC status and any BPA-free, phenol-free or chemical declaration are confirmed for the exact grade and order"],
    variants: [
      "57mm Width Thermal Roll",
      "80mm Width Thermal Roll",
      "BPA-Free Thermal Roll",
      "Phenol-Free Thermal Roll",
    ],
    features: [
      "Common POS Sizes — Standard 57 mm and 80 mm widths suit many POS and receipt printer configurations.",
      "Selectable Image Performance — Contrast and image retention are matched to the grade, printer and storage conditions.",
      "Documented Chemical Options — BPA-free and phenol-free grades are available subject to order documentation.",
      "Consistent Roll Winding — Uniform tension ensures smooth feeding without jams or misalignment.",
    ],
    customization: [
      "Custom roll width and diameter",
      "Core size selection (12/17/25mm)",
      "BPA-free or phenol-free grade",
      "Custom packing and labeling",
      "Shrink-wrapped or bulk-packed",
    ],
    commercial: { moq: "From 1 metric ton for regular sizes and packing; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status and chemical declarations are confirmed for the exact grade and order" },
    quoteReqs: ["Printer model", "Roll width, outer diameter and length", "Core diameter", "Thermal side and sensitivity", "BPA-free or phenol-free requirement", "Quantity, packing and destination port"],
    faqs: [
      { q: "Which dimensions are needed to match a thermal paper roll?", a: "Provide roll width, outer diameter or required length, core inner diameter, thermal side and printer model. Matching only the width is not enough to confirm compatibility." },
      { q: "Are all thermal paper rolls BPA-free or phenol-free?", a: "No. These are grade-specific chemical declarations. Request the required option before ordering and confirm it in the documentation for the exact supplied grade." },
      { q: "How should thermal rolls be stored and how long does the image last?", a: "Image life varies by grade and exposure. Store rolls away from heat, sunlight, moisture, plasticizers and aggressive chemicals, and request the relevant storage and image-retention data when long-term records are required." },
    ],
    seoTitle: "Thermal Paper Roll Supplier for POS and Receipts",
    metaDescription: "57 mm and 80 mm thermal paper rolls for POS terminals, receipt printers, payment devices and logistics labels. BPA-free options and custom packing available.",
    keywords: ["thermal paper roll", "POS paper roll", "receipt paper roll", "thermal roll paper", "cash register paper", "thermal printer roll"],
    image: "/images/products/culture-paper/thermal-paper-roll-main.webp",
    gallery: [
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-01.jpg", alt: "Thermal paper roll POS receipt" },
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-02.jpg", alt: "Thermal paper roll credit card terminal" },
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-03.jpg", alt: "Thermal paper roll kitchen order" },
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-04.jpg", alt: "Thermal paper roll logistics label" },
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-05.jpg", alt: "Thermal paper roll mini photo printer" },
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-06.jpg", alt: "Thermal paper roll ATM receipt" },
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-07.jpg", alt: "Thermal paper roll retail POS" },
      { src: "/images/products/culture-paper/gallery/thermal-paper-roll-scene-08.jpg", alt: "Thermal paper roll banking transaction" },
    ],
  },

  // ========================
  // FANCY PAPER (5 sub-products — Tracing Paper moved to Culture)
  // ========================
  "soft-touch-paper": {
    id: "soft-touch-paper",
    name: "Soft Touch Paper",
    category: "fancy-paper",
    tagline: "Velvet-smooth tactile coated paper — the sensation of luxury that makes people stop and touch.",
    description:
      "Soft touch paper is a paper or board substrate finished with a matte, velvet-like tactile coating. It is used for luxury boxes, book covers, cards and premium print where touch is part of the brand experience. Coating chemistry, fingerprint resistance, scuff performance, print compatibility and adhesion vary by grade and should be validated with the selected sample and converting process.",
    specs: [
      "Substrate: Coated paper / Board, 120–400 gsm",
      "Coating system: Confirm by grade",
      "Touch feel: Velvet-smooth, warm, non-slip",
      "Print compatibility: Offset, UV offset, screen, foil stamping",
      "Fingerprint and scuff performance: Grade dependent",
      "Format: Sheets & reels",
    ],
    applications: [
      "Luxury business cards and corporate identity",
      "Premium book covers and case-bound books",
      "High-end cosmetic and perfume packaging",
      "Invitation cards and wedding stationery",
      "Gift boxes, rigid boxes, and presentation folders",
      "Hang tags and swing tickets for fashion brands",
    ],
    certifications: ["FSC status and coating composition are confirmed for the exact grade and order"],
    variants: [
      "Soft Touch Coated Paper (120–250 gsm)",
      "Soft Touch Coated Board (250–400 gsm)",
      "Matte Soft Touch",
      "Anti-Scuff Soft Touch",
    ],
    features: [
      "Velvet-Smooth Tactile Surface — Creates an irresistible touch sensation that signals luxury and quality.",
      "Selectable Handling Performance — Fingerprint and scuff resistance depend on the selected grade.",
      "Deepens Printed Colors — Blacks appear richer, colors more saturated for dramatic visual impact.",
      "Converting Validation — Printing, foil, folding and adhesion can be checked on the selected sample.",
    ],
    customization: [
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Printing coordination",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular grades and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed through the applicable claim on sales or delivery documents" },
    quoteReqs: ["End use", "Grammage and substrate", "Color and tactile finish", "Printing and finishing process", "Sheet or reel size", "Quantity and destination port"],
    faqs: [
      { q: "Is soft touch paper the same as soft touch lamination?", a: "Not necessarily. Soft touch paper may use a factory-applied tactile surface, while soft touch lamination adds a separate film during converting. They can differ in feel, print route, recyclability, fold behavior, scuff resistance and adhesive compatibility, so confirm the exact construction." },
      { q: "Can soft touch paper be foil stamped, printed and folded?", a: "Selected grades can support offset or UV printing, screen printing, foil stamping, embossing, die-cutting and folding. Adhesion, fingerprint resistance, scuffing and crease cracking vary by substrate and coating, so test the actual sample with the intended process." },
      { q: "What information is needed for a soft touch paper quotation?", a: "Provide the end use, substrate and grammage, color and tactile target, sheet or reel dimensions, quantity, printing, foil, embossing, folding and gluing requirements, plus the destination port. Regular grades and formats start from 1 metric ton, subject to specification confirmation." },
    ],
    seoTitle: "Soft Touch Paper Supplier for Luxury Packaging",
    metaDescription: "Velvet soft touch paper and board in 120–400 gsm for luxury boxes, book covers, cards and premium print. Request sizes, sheets, reels or samples.",
    keywords: ["soft touch paper", "velvet paper", "suede-touch paper", "soft-feel coated", "luxury paper", "tactile paper"],
    image: "/images/products/fancy-paper/soft-touch-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-01.jpg",
            "alt": "soft touch paper scene 01 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-02.jpg",
            "alt": "soft touch paper scene 02 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-03.jpg",
            "alt": "soft touch paper scene 03 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-04.jpg",
            "alt": "soft touch paper scene 04 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-05.jpg",
            "alt": "soft touch paper scene 05 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-06.jpg",
            "alt": "soft touch paper scene 06 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-07.jpg",
            "alt": "soft touch paper scene 07 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-scene-08.jpg",
            "alt": "soft touch paper scene 08 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-photo-01.jpg",
            "alt": "soft touch paper procurement photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-photo-02.jpg",
            "alt": "soft touch paper spec sample photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-photo-03.jpg",
            "alt": "soft touch paper design hero photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-photo-04.jpg",
            "alt": "soft touch paper application photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/soft-touch-paper-photo-05.jpg",
            "alt": "soft touch paper website banner"
      }
,
    ],
  },
  "leather-paper": {
    id: "leather-paper",
    name: "Leather Paper",
    category: "fancy-paper",
    tagline: "Decorative paper with a leather-effect grain for covers, rigid boxes and premium presentation.",
    description:
      "Leather paper is a decorative paper or board embossed and finished to reproduce the visual texture of different leather grains. It provides a paper-based surface for book covers, diaries, gift boxes, cases and presentation folders without describing the substrate as genuine leather. Pattern, color, coating and composition vary by grade. Any animal-component-free claim must be requested and confirmed for the exact reference before it is used in marketing or labeling.",
    specs: [
      "Substrate: FBB / Grey board / Kraft board, 120–400 gsm",
      "Embossing: Leather-grain pattern (multiple textures available)",
      "Color: Classic leather tones — customizable",
      "Surface: Matte-laminated or PU-coated for durability",
      "Format: Sheets & reels",
      "Composition declaration: Confirm by exact grade when required",
    ],
    applications: [
      "Book covers — diaries, journals, bibles, notebooks",
      "Premium gift boxes and jewelry boxes",
      "Wine and spirits packaging",
      "Corporate presentation folders",
      "Watch and accessory boxes",
      "Certificate and diploma holders",
    ],
    certifications: ["FSC status and any composition or animal-component declaration are confirmed for the exact grade and order"],
    variants: [
      "Crocodile Grain Leather Paper",
      "Calf Grain Leather Paper",
      "Ostrich Grain Leather Paper",
      "Pebble Grain Leather Paper",
    ],
    features: [
      "Leather-Effect Texture — Embossed patterns create a decorative surface inspired by different leather grains.",
      "Paper-Based Substrate — Suitable for buyers seeking a decorative paper covering rather than genuine leather.",
      "Multiple Leather Patterns — Crocodile, calf, ostrich, pebble grain and custom textures available.",
      "Rich Color Palette — Classic leather tones: black, brown, tan, burgundy, navy, dark green.",
    ],
    customization: [
      "Leather grain pattern selection",
      "Custom color matching",
      "Custom grammage and substrate",
      "Sheet or reel supply",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular grades and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status and any composition declaration are confirmed for the exact grade and order" },
    quoteReqs: ["End use", "Pattern or reference sample", "Color", "Grammage and substrate", "Converting and finishing process", "Quantity, format and destination port"],
    faqs: [
      { q: "Is leather paper made from genuine leather?", a: "No. This product is a paper- or board-based decorative covering embossed and finished to reproduce a leather-effect grain. It should not be described or labeled as genuine leather." },
      { q: "Can leather-effect paper be printed, foil stamped or glued?", a: "Selected grades can support printing, foil, die-cutting, wrapping and gluing, but the grain, coating and substrate affect adhesion and detail. Test the actual sample with the intended process before production." },
      { q: "Can you provide an animal-component-free declaration?", a: "Only when the composition of the exact grade has been checked and the required declaration is available. Send the intended market, claim wording, pattern, color, substrate, quantity and converting method for confirmation." },
    ],
    seoTitle: "Leather Paper Supplier for Book Covers and Boxes",
    metaDescription: "Leather-grain paper in 120–400 gsm for book covers, diaries, gift boxes and luxury packaging. Compare textures, colors, sheets and reels; request samples.",
    keywords: ["leather paper", "leatherette paper", "faux leather paper", "leather embossed paper", "leather-effect paper", "leather-texture board"],
    image: "/images/products/fancy-paper/leather-paper-main-v2.webp",
    gallery: [
      
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-01.jpg",
            "alt": "leather paper scene 01 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-02.jpg",
            "alt": "leather paper scene 02 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-03.jpg",
            "alt": "leather paper scene 03 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-04.jpg",
            "alt": "leather paper scene 04 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-05.jpg",
            "alt": "leather paper scene 05 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-06.jpg",
            "alt": "leather paper scene 06 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-07.jpg",
            "alt": "leather paper scene 07 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-scene-08.jpg",
            "alt": "leather paper scene 08 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-photo-01.jpg",
            "alt": "leather paper procurement photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-photo-02.jpg",
            "alt": "leather paper spec sample photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-photo-03.jpg",
            "alt": "leather paper design hero photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-photo-04.jpg",
            "alt": "leather paper application photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/leather-paper-photo-05.jpg",
            "alt": "leather paper website banner"
      }
,
    ],
  },
  "pearlescent-paper": {
    id: "pearlescent-paper",
    name: "Pearlescent Paper",
    category: "fancy-paper",
    tagline: "Light-reflecting iridescent paper with a pearl-like shimmer — elegance that moves with the light.",
    description:
      "Pearlescent paper uses a reflective pigment layer to create a soft shimmer that changes with the viewing angle. Reference grammages range from 120 gsm to 350 gsm in white pearl, champagne, gold, silver and selected tinted finishes. It is used for invitations, cosmetic packaging, perfume inserts, cards and premium print. Ink reproduction, foil, embossing and adhesion should be validated on the selected color and grammage.",
    specs: [
      "Grammage: 120 – 350 gsm",
      "Finish: Pearl / Iridescent / Shimmer",
      "Colors: White pearl, champagne, gold, silver, custom tinted",
      "Print compatibility: Offset, screen, foil, embossing, debossing",
      "Finish composition: Confirm by grade",
      "Format: Sheets & reels",
    ],
    applications: [
      "Wedding invitations and save-the-date cards",
      "Cosmetic and skincare packaging",
      "Perfume box linings and inserts",
      "Luxury brand business cards",
      "Certificate and award folders",
      "High-end brochure and menu covers",
    ],
    certifications: ["FSC status and finish composition are confirmed for the exact grade and order"],
    variants: [
      "White Pearl Paper",
      "Champagne Pearl Paper",
      "Gold Pearl Paper",
      "Silver Pearl Paper",
      "Custom Tinted Pearl Paper",
    ],
    features: [
      "Light-Reflecting Shimmer — The pearlescent surface changes subtly with the viewing angle.",
      "Premium Visual Impact — Instantly communicates luxury for weddings, cosmetics and high-end brands.",
      "Multiple Pearl Tones — White, champagne, gold, silver and custom tinted pearl variants available.",
      "Finish Testing — Offset, screen, foil, embossing and debossing should be validated on the selected grade.",
    ],
    customization: [
      "Pearlescent tone selection",
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Foil and embossing coordination",
    ],
    commercial: { moq: "From 1 metric ton for regular grades and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed through the applicable claim on sales or delivery documents" },
    quoteReqs: ["End use", "Pearlescent color", "Grammage", "Sheet or reel size", "Printing and finishing process", "Quantity and destination port"],
    faqs: [
      { q: "How does a pearlescent surface affect printed colors?", a: "The reflective base can change color density and appearance under different lighting. Light inks may need an opaque white underprint or a different artwork approach, so approve a printed sample on the chosen shade." },
      { q: "Can pearlescent paper be folded, embossed or foil stamped?", a: "Selected grades support these processes, but cracking, foil adhesion and relief definition depend on grammage, surface coating, grain direction and tooling. A converting trial is recommended." },
      { q: "How should a buyer approve a pearlescent color?", a: "Use a physical reference viewed under the intended lighting. Specify pearl tone, grammage, sheet or reel size, print and finishing process, quantity and destination port rather than relying only on a screen color." },
    ],
    seoTitle: "Pearlescent Paper Supplier for Luxury Packaging",
    metaDescription: "Pearlescent paper in 120–350 gsm with white, gold, silver and tinted shimmer finishes for invitations, cosmetics and luxury boxes. Request samples.",
    keywords: ["pearlescent paper", "pearl paper", "iridescent paper", "mica coated paper", "shimmer paper", "pearl cardstock"],
    image: "/images/products/fancy-paper/pearlescent-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-01.jpg",
            "alt": "pearlescent paper scene 01 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-02.jpg",
            "alt": "pearlescent paper scene 02 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-03.jpg",
            "alt": "pearlescent paper scene 03 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-04.jpg",
            "alt": "pearlescent paper scene 04 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-05.jpg",
            "alt": "pearlescent paper scene 05 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-06.jpg",
            "alt": "pearlescent paper scene 06 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-07.jpg",
            "alt": "pearlescent paper scene 07 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-scene-08.jpg",
            "alt": "pearlescent paper scene 08 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-photo-01.jpg",
            "alt": "pearlescent paper procurement photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-photo-02.jpg",
            "alt": "pearlescent paper spec sample photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-photo-03.jpg",
            "alt": "pearlescent paper design hero photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-photo-04.jpg",
            "alt": "pearlescent paper application photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/pearlescent-paper-photo-05.jpg",
            "alt": "pearlescent paper website banner"
      }
,
    ],
  },
  "embossed-paper": {
    id: "embossed-paper",
    name: "Embossed Paper",
    category: "fancy-paper",
    tagline: "Three-dimensional textured paper — raised patterns that turn packaging into a tactile brand experience.",
    description:
      "Embossed paper features a raised relief pattern mechanically pressed into the paper or board surface. Standard textures include linen, felt, laid, canvas and woodgrain, while a custom pattern may require dedicated tooling and a separate production review. It is used for boxes, hang tags, cards, covers and stationery where a tactile surface is part of the design. Printing, foil stamping, folding and die-cutting should be tested on the selected substrate, grammage, pattern and embossing depth before production.",
    specs: [
      "Substrate: Wide range, 80–400 gsm",
      "Patterns: Linen / Felt / Canvas / Woodgrain / Custom",
      "Embossing depth: Fine to deep relief",
      "Print and finishing: Post-emboss offset, screen and foil subject to sample testing",
      "Custom patterns: Available with dedicated embossing roller",
      "Format: Sheets & reels",
    ],
    applications: [
      "Luxury brand packaging and rigid boxes",
      "Fashion hang tags and swing tickets",
      "Business cards and corporate stationery",
      "Book and diary covers",
      "Certificate paper and diploma stock",
      "Bespoke wedding and event stationery",
    ],
    certifications: ["FSC Mix", "ISO 9001"],
    variants: [
      "Linen Embossed Paper",
      "Felt Embossed Paper",
      "Canvas Embossed Paper",
      "Woodgrain Embossed Paper",
      "Custom Pattern Embossed Paper",
    ],
    features: [
      "Genuine 3D Texture — Mechanically pressed relief patterns create real topography, not printed imitation.",
      "Tactile Brand Experience — Invites touch and signals premium quality for luxury packaging and stationery.",
      "Wide Pattern Library — Standard patterns include linen, felt, canvas, woodgrain; custom patterns available.",
      "Post-Emboss Processing — Printing, foil stamping and die-cutting can be coordinated after the texture is tested on the selected grade.",
    ],
    customization: [
      "Pattern selection (standard or custom)",
      "Custom embossing depth",
      "Custom grammage and substrate",
      "Sheet or reel supply",
      "Custom packing",
    ],
    commercial: { moq: "1 metric ton", leadTime: "2–3 weeks", samples: "Free samples available", certification: "FSC certified", containerLoading: "40HQ full load: 25 metric tons" },
    quoteReqs: ["Pattern or texture reference", "Paper or board grammage", "Embossing depth", "Sheet or reel size", "Printing and finishing process", "Quantity and destination port"],
    faqs: [
      { q: "Can I choose a standard pattern or develop a custom embossing texture?", a: "Standard linen, felt, canvas and woodgrain patterns are the quickest starting point. A custom texture may require dedicated tooling, artwork review, a trial and separate minimum quantity and lead-time confirmation." },
      { q: "Can embossed paper be printed or foil stamped after embossing?", a: "Yes for selected combinations, but the raised surface can change ink contact, foil transfer and fine-detail reproduction. Test the chosen substrate, pattern and embossing depth with the actual process." },
      { q: "What details are needed for an embossed paper quotation?", a: "Send the pattern or physical reference, substrate and grammage, color, embossing depth, sheet or reel size, printing and finishing steps, quantity and destination port." },
    ],
    seoTitle: "Embossed Paper Supplier for Luxury Packaging",
    metaDescription: "Embossed paper in 80–400 gsm with linen, felt, canvas, woodgrain or custom textures for boxes, covers and hang tags. Request patterns and samples.",
    keywords: ["embossed paper", "textured paper", "raised pattern paper", "linen embossed", "custom embossed paper", "3D paper texture"],
    image: "/images/products/fancy-paper/embossed-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-01.jpg",
            "alt": "embossed paper scene 01 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-02.jpg",
            "alt": "embossed paper scene 02 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-03.jpg",
            "alt": "embossed paper scene 03 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-04.jpg",
            "alt": "embossed paper scene 04 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-05.jpg",
            "alt": "embossed paper scene 05 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-06.jpg",
            "alt": "embossed paper scene 06 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-07.jpg",
            "alt": "embossed paper scene 07 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-scene-08.jpg",
            "alt": "embossed paper scene 08 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-photo-01.jpg",
            "alt": "embossed paper procurement photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-photo-02.jpg",
            "alt": "embossed paper spec sample photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-photo-03.jpg",
            "alt": "embossed paper design hero photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-photo-04.jpg",
            "alt": "embossed paper application photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/embossed-paper-photo-05.jpg",
            "alt": "embossed paper website banner"
      }
,
    ],
  },

  "gold-silver-card": {
    id: "gold-silver-card",
    name: "Gold & Silver Card Paper",
    category: "fancy-paper",
    tagline: "Reflective gold, silver and selected metallic card finishes for luxury packaging, cards and premium brand presentation.",
    description:
      "Gold & Silver Card Paper combines a paper or board base with a vacuum-metallized, laminated or coated decorative surface, depending on the selected grade. Reference grammages of 200–400 gsm include gold, silver, rose gold and champagne finishes for cards, sleeves and premium packaging. Reflectivity, one- or two-sided construction, ink adhesion, scoring and folding performance vary by grade. Printing, embossing, debossing and foil should be validated on the exact finish before production.",
    specs: [
      "Grammage: 200 – 400 gsm",
      "Finishes: Gold / Silver / Rose Gold / Champagne Gold / Custom metallic",
      "Surface: Reflective metallic; gloss and one- or two-sided construction depend on grade",
      "Format: Sheets (standard & custom sizes) or reels",
      "Print and finishing: Offset, screen, foil, embossing and debossing subject to trial",
      "Metallization: Vacuum metallized or foil-laminated options",
    ],
    applications: [
      "Luxury gift boxes and rigid packaging",
      "Greeting cards and invitation cards",
      "Cosmetic and perfume packaging",
      "Jewelry and watch box interiors and exteriors",
      "Wine and spirits packaging",
      "Premium business cards and presentation folders",
      "Certificate and award folders",
      "Holiday and festive packaging",
    ],
    certifications: ["FSC status and finish construction confirmed for the exact grade and order"],
    variants: [
      "Classic Gold Card Paper",
      "Bright Silver Card Paper",
      "Rose Gold Card Paper",
      "Champagne Gold Card Paper",
      "Custom Metallic Finish",
    ],
    features: [
      "Reflective Metallic Appearance — Gloss and light reflection depend on the selected metallized, laminated or coated finish.",
      "Multiple Metallic Tones — Gold, silver, rose gold, champagne and custom metallic shades available.",
      "Finish Testing — Ink adhesion, foil transfer, embossing, scoring and folding should be tested on the exact construction.",
      "Luxury Brand Positioning — Instantly elevates gift boxes, cosmetics, jewelry and spirits packaging.",
    ],
    customization: [
      "Metallic finish selection",
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Embossing and foil coordination",
    ],
    commercial: { moq: "From 1 metric ton for regular finishes and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed through the applicable claim on sales or delivery documents" },
    quoteReqs: ["End use", "Metallic shade and gloss level", "Grammage", "Sheet or reel size", "Printing and finishing process", "Quantity and destination port"],
    faqs: [
      { q: "How is gold or silver card paper made?", a: "Depending on the grade, the metallic appearance may come from vacuum metallization, film or foil lamination, or a metallic coating. Ask for the exact construction because it affects printing, folding, recycling and end use." },
      { q: "Can metallic card be printed and folded without cracking?", a: "Selected grades can be printed, scored, folded, embossed and die-cut, but performance depends on the surface, substrate, grammage, grain direction, ink and tooling. Approve a production-representative trial first." },
      { q: "Is the metallic finish available on one side or two sides?", a: "Both constructions may be available, but they are grade-specific. Specify metallic shade, gloss level, coated sides, grammage, format, print and finishing process, quantity and destination port." },
    ],
    seoTitle: "Gold and Silver Card Paper Supplier",
    metaDescription: "Metallic gold and silver card paper for luxury boxes, invitations, cosmetics and premium printing. Request available finishes, sheets or samples.",
    keywords: ["gold silver card paper", "metallic card paper", "gold foil paper", "silver cardstock", "metallic board", "luxury metallic paper"],
    image: "/images/products/fancy-paper/gold-silver-card-main.webp",
    gallery: [
      { src: "/images/products/fancy-paper/gallery/GOLD-Chocolate-Packaging.jpg", alt: "Gold chocolate packaging" },
      { src: "/images/products/fancy-paper/gallery/GOLD-Cosmetic-Packaging.jpg", alt: "Gold cosmetic packaging" },
      { src: "/images/products/fancy-paper/gallery/GOLD-Gift-Box-Sleeves.jpg", alt: "Gold gift box sleeves" },
      { src: "/images/products/fancy-paper/gallery/GOLD-Jewelry-Packaging.jpg", alt: "Gold jewelry packaging" },
      { src: "/images/products/fancy-paper/gallery/GOLD-Shopping-Bag-and-Tags.jpg", alt: "Gold shopping bag and tags" },
      { src: "/images/products/fancy-paper/gallery/GOLD-Tea-Packaging.jpg", alt: "Gold tea packaging" },
      { src: "/images/products/fancy-paper/gallery/GOLD-Wedding-Stationery.jpg", alt: "Gold wedding stationery" },
      { src: "/images/products/fancy-paper/gallery/GOLD-Wine-Gift-Carton.jpg", alt: "Gold wine gift carton" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Catalog-and-Folder.jpg", alt: "Silver catalog and folder" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Chocolate-Packaging.jpg", alt: "Silver chocolate packaging" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Cosmetic-Packaging.jpg", alt: "Silver cosmetic packaging" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Electronics-Packaging.jpg", alt: "Silver electronics packaging" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Garment-Hang-Tags.jpg", alt: "Silver garment hang tags" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Supplement-Packaging.jpg", alt: "Silver supplement packaging" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Wedding-Stationery.jpg", alt: "Silver wedding stationery" },
      { src: "/images/products/fancy-paper/gallery/SILVER-Wine-Gift-Carton.jpg", alt: "Silver wine gift carton" },
      { src: "/images/products/fancy-paper/gallery/Black-Fragrance-Packaging.jpg", alt: "Black fragrance packaging" },
      { src: "/images/products/fancy-paper/gallery/Blue-Electronics-Packaging.jpg", alt: "Blue electronics packaging" },
      { src: "/images/products/fancy-paper/gallery/Champagne-Soap-Packaging.jpg", alt: "Champagne soap packaging" },
      { src: "/images/products/fancy-paper/gallery/Copper-Coffee-Packaging.jpg", alt: "Copper coffee packaging" },
      { src: "/images/products/fancy-paper/gallery/Green-Skincare-Packaging.jpg", alt: "Green skincare packaging" },
      { src: "/images/products/fancy-paper/gallery/Purple-Magenta-Perfume-Packaging.jpg", alt: "Purple magenta perfume packaging" },
      { src: "/images/products/fancy-paper/gallery/Red-Chocolate-Packaging.jpg", alt: "Red chocolate packaging" },
      { src: "/images/products/fancy-paper/gallery/Rose-Pink-Cosmetic-Packaging.jpg", alt: "Rose pink cosmetic packaging" },
    ],
  },

  "label-paper": {
    id: "label-paper",
    name: "Label Paper",
    category: "fancy-paper",
    tagline: "Printable label and tag face stock selected for the intended adhesive construction and converting line.",
    description:
      "Label paper — also called label face stock or tag paper — is the printable paper layer used for pressure-sensitive labels, wet-glue labels and hang tags. C1S, C2S and metallized grades are selected according to the printing system, adhesive construction, die-cutting, matrix stripping, rewinding and end use. Reference grammages range from 60 gsm for lightweight label applications to 250 gsm for structural hang tags. Converting speed, curl and dimensional stability must be validated with the actual face stock, adhesive, liner and line settings.",
    specs: [
      "Grammage: 60 – 250 gsm",
      "Types: C1S (label face) / C2S (hang tag) / Metallized",
      "Finish: Gloss / Matt / Semi-gloss",
      "Strength: High tensile, low stretch for converting",
      "Format: Reels (standard widths), sheets",
      "Adhesive and liner compatibility: Confirm with the converter for the intended construction",
    ],
    applications: [
      "Pressure-sensitive labels for bottles and containers",
      "Hang tags and swing tickets for apparel",
      "Wet-glue labels for beer, wine, and beverage bottles",
      "Price tags and retail shelf labels",
      "Logistics and barcode labels",
      "Security and tamper-evident label face stock",
    ],
    certifications: ["FSC Mix", "ISO 9001"],
    variants: [
      "C1S Label Face Stock (coated one side)",
      "C2S Hang Tag Paper (coated two sides)",
      "Metallized Label Paper",
      "Wet-Glue Label Paper",
    ],
    features: [
      "Converting Performance — Strength, die-cutting, matrix stripping and rewinding should be matched to the grade and line setup.",
      "Smooth Print Surface — Delivers fine text, barcodes and brand graphics with sharp reproduction.",
      "Dimensional Control — Curl and stretch performance depend on the face stock, adhesive, liner, moisture and converting conditions.",
      "Multi-Purpose Grades — C1S for pressure-sensitive labels, C2S for premium hang tags and swing tickets.",
    ],
    customization: [
      "C1S or C2S grade",
      "Gloss, matt or semi-gloss finish",
      "Custom grammage",
      "Reel or sheet supply",
      "Adhesive compatibility consultation",
    ],
    commercial: { moq: "1 metric ton", leadTime: "2–3 weeks", samples: "Free samples available", certification: "FSC certified", containerLoading: "40HQ full load: 25 metric tons" },
    quoteReqs: ["Label or hang-tag application", "C1S, C2S or metallized grade", "Grammage and finish", "Printing and adhesive system", "Reel width or sheet size", "Quantity and destination port"],
    faqs: [
      { q: "Is label paper the same as a finished self-adhesive label material?", a: "Not always. This page covers paper face stock and tag paper. A finished pressure-sensitive construction also includes an adhesive and release liner, which must be selected and confirmed with the converter." },
      { q: "Should I choose C1S or C2S label paper?", a: "C1S is commonly selected when one coated printing face is sufficient, including many label applications. C2S is useful for hang tags or pieces printed on both sides. Confirm the print system, adhesive construction and finishing steps." },
      { q: "What information is needed for a label paper quotation?", a: "Provide the label or tag application, C1S, C2S or metallized grade, grammage, gloss level, printing system, adhesive and liner if applicable, reel width or sheet size, quantity and destination port." },
    ],
    seoTitle: "Label Paper Supplier for Labels and Hang Tags",
    metaDescription: "C1S, C2S and metallized label paper in 60–250 gsm for pressure-sensitive labels, wet-glue labels and hang tags. Request reels, sheets or samples.",
    keywords: ["label paper", "label face stock", "tag paper", "hang tag paper", "C1S label paper", "pressure sensitive label paper"],
    image: "/images/products/fancy-paper/label-paper-main-v2.webp",
    gallery: [
      
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-01.jpg",
            "alt": "label paper scene 01 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-02.jpg",
            "alt": "label paper scene 02 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-03.jpg",
            "alt": "label paper scene 03 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-04.jpg",
            "alt": "label paper scene 04 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-05.jpg",
            "alt": "label paper scene 05 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-06.jpg",
            "alt": "label paper scene 06 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-07.jpg",
            "alt": "label paper scene 07 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-scene-08.jpg",
            "alt": "label paper scene 08 scene"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-photo-01.jpg",
            "alt": "label paper procurement photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-photo-02.jpg",
            "alt": "label paper spec sample photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-photo-03.jpg",
            "alt": "label paper design hero photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-photo-04.jpg",
            "alt": "label paper application photo"
      },
      {
            "src": "/images/products/fancy-paper/gallery/label-paper-photo-05.jpg",
            "alt": "label paper website banner"
      }
,
    ],
  },

  "color-tissue-paper": {
    id: "color-tissue-paper",
    name: "Color Tissue Paper",
    category: "fancy-paper",
    tagline: "Vibrant translucent tissue in a rainbow palette — the finishing touch that transforms packaging into an experience.",
    description:
      "Color tissue paper is a lightweight, translucent wrapping and presentation paper available in an extensive color range, from soft pastels to bold saturated hues. Virgin-pulp and recycled-fiber options can be supplied according to the selected grade. Reference grammages of 17, 20, 24 and 28 gsm are used for luxury gift wrapping, retail packaging, shoe and garment presentation, floral wrapping and creative projects. Colorfastness, bleed resistance and pH requirements should be confirmed on the exact grade before it is used with garments or delicate items.",
    specs: [
      "Grammage: 17 / 20 / 24 / 28 gsm",
      "Color range: 30+ standard colors, custom PMS matching available",
      "Composition: Virgin-pulp or recycled-fiber options according to grade",
      "Colorfastness and pH: Confirm for the selected grade",
      "Format: Sheets (standard 500×750mm / 750×1000mm), custom sizes",
    ],
    applications: [
      "Luxury retail gift wrapping and tissue lining",
      "Shoe and handbag stuffing and presentation",
      "Garment and apparel packaging — boutique folding tissue",
      "Floral and bouquet wrapping",
      "Craft, scrapbooking, and DIY decoration",
      "Branded unboxing experience — custom-printed tissue options",
    ],
    certifications: ["FSC status, recycled content and acid-free claims confirmed for the exact grade"],
    variants: [
      "Pastel Color Tissue Paper",
      "Bold Saturated Color Tissue Paper",
      "Virgin Fiber Tissue Paper",
      "Recycled Fiber Tissue Paper",
    ],
    features: [
      "Extensive Color Palette — 30+ standard colors from soft pastels to bold saturated hues for any brand.",
      "Color Performance by Grade — Test colorfastness and bleed resistance on the selected reference before production.",
      "Fiber Options — Virgin-pulp and recycled-fiber grades can be matched to the project brief.",
      "Soft Flexible Fold — Lightweight and pliable for creating luxurious unboxing experiences.",
    ],
    customization: [
      "Custom PMS color matching",
      "Custom sheet size",
      "Virgin or recycled fiber",
      "Custom printing",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular colors and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed through the applicable claim on sales or delivery documents" },
    quoteReqs: ["End use", "Color or PMS reference", "Grammage", "Sheet size", "Printing requirement", "Quantity per color and destination port"],
    faqs: [
      { q: "Is every color tissue paper bleed-resistant and colorfast?", a: "No. Color transfer depends on the dye system, moisture, friction and end use. For garments, leather goods or delicate products, test the exact shade and request the relevant colorfastness information." },
      { q: "Is color tissue automatically acid-free or made with recycled fiber?", a: "No. Acid-free status and recycled content are grade-specific. State the required claim before ordering and confirm it in the documents for the exact supplied grade." },
      { q: "Can you match a custom color or print a logo?", a: "Custom shade matching and printing may be available subject to the color reference, ink coverage, artwork, sheet size and order quantity. Approve a physical color or print sample before production." },
    ],
    seoTitle: "Color Tissue Paper Supplier for Gift Packaging",
    metaDescription: "Color tissue paper in 17–28 gsm with 30+ standard shades for gift wrapping, garments, footwear and retail packaging. Request custom colors and sizes.",
    keywords: ["color tissue paper", "colored tissue paper", "gift tissue paper", "luxury tissue paper", "acid-free tissue", "packaging tissue paper"],
    image: "/images/products/fancy-paper/color-tissue-paper-main.webp",
    gallery: [
      { src: "/images/products/fancy-paper/gallery/01-Color-Tissue-Apparel-Gift-Box.jpg", alt: "Color tissue apparel gift box" },
      { src: "/images/products/fancy-paper/gallery/02-Color-Tissue-Florist-Bouquet.jpg", alt: "Color tissue florist bouquet" },
      { src: "/images/products/fancy-paper/gallery/03-Color-Tissue-Shoe-Box.jpg", alt: "Color tissue shoe box" },
      { src: "/images/products/fancy-paper/gallery/04-Color-Tissue-Cosmetics-Unboxing.jpg", alt: "Color tissue cosmetics unboxing" },
      { src: "/images/products/fancy-paper/gallery/05-Color-Tissue-Jewelry-Protection.jpg", alt: "Color tissue jewelry protection" },
      { src: "/images/products/fancy-paper/gallery/06-Color-Tissue-Retail-Shopping-Bags.jpg", alt: "Color tissue retail shopping bags" },
      { src: "/images/products/fancy-paper/gallery/07-Color-Tissue-Party-Pom-Poms.jpg", alt: "Color tissue party pom poms" },
      { src: "/images/products/fancy-paper/gallery/08-Color-Tissue-Paper-Flowers.jpg", alt: "Color tissue paper flowers" },
    ],
  },

  "tracing-paper": {
    id: "tracing-paper",
    name: "Tracing Paper / Vellum Paper",
    category: "culture-paper",
    tagline: "Translucent tracing or vellum paper for luxury packaging, printing, drawing, invitations and decorative applications.",
    description:
      "YOUNGSUN Tracing Paper combines translucency, a smooth surface and dimensional stability for technical drawing, printed overlays, tags and premium packaging details. Vellum paper is a common trade and search term for translucent paper in some markets, so buyers should confirm the required transparency, grammage and printing process rather than relying on the name alone. The confirmed brochure range includes 50, 60, 80, 90, 110, 150, 170, 220 and 230 gsm, allowing buyers to select lightweight overlay papers or heavier translucent cards. It is supplied mainly in sheets and custom sizes, while other colors and formats are confirmed by grade and quantity.",
    specs: [
      "Reference grammages: 50, 60, 80, 90, 110, 150, 170, 220 and 230 gsm",
      "Surface: Smooth and translucent",
      "Primary format: Sheets and custom-cut sizes",
      "Additional colors: Subject to confirmation",
      "Printing and converting: Confirm by grammage and process",
    ],
    applications: [
      "Architectural and engineering tracing overlays",
      "Fashion design and pattern-making",
      "Creative stationery — envelopes, inserts, overlays",
      "Decorative packaging windows and wraps",
      "Art and illustration — marker and ink drawing",
      "Wedding invitation overlays and belly bands",
    ],
    certifications: ["FSC Certified"],
    variants: [
      "Standard Tracing Paper",
      "Heavyweight Tracing Paper",
    ],
    features: [
      "Controlled Transparency — Creates layered visual effects while maintaining readability and structure.",
      "Smooth Surface — Suitable for printing, drawing, hot stamping and decorative converting.",
      "Wide Grammage Range — Covers lightweight overlays and heavier packaging inserts.",
      "Premium Appearance — Adds a refined translucent effect to invitations, books and packaging.",
    ],
    customization: [
      "Custom grammage",
      "Sheet or reel supply",
      "Custom size",
      "Printing and hot stamping coordination",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular specifications; confirm by grammage, size and format", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage","Sheet or roll size","Quantity","Transparency requirement","Application","Destination port"],
    faqs: [
      { q: "Can you print on tracing paper?", a: "Printing on tracing paper is possible with selected offset, screen, UV or digital systems, but ink adhesion and drying vary with the paper and process. A press trial on the chosen grammage is recommended before production." },
      { q: "Is tracing paper available in rolls and sheets?", a: "The confirmed range is supplied mainly in sheets and custom-cut sizes. Roll availability depends on the grade, grammage, width and quantity and should be confirmed before quotation." },
      { q: "Are tracing paper and vellum paper the same?", a: "Vellum is often used as a trade term for translucent paper, but it does not always identify the same grade. Specify the required grammage, transparency, size, print process and application." },
    ],
    seoTitle: "Tracing & Vellum Paper Supplier | 50–230 gsm",
    metaDescription: "Translucent tracing and vellum paper from 50 to 230 gsm for drawing, overlays, invitations, tags and premium packaging. Request sheets or free samples.",
    keywords: ["tracing paper", "translucent paper", "transparent paper", "vellum paper", "architectural tracing", "design tracing paper"],
    image: "/images/products/culture-paper/tracing-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-01.jpg",
            "alt": "tracing paper scene 01 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-02.jpg",
            "alt": "tracing paper scene 02 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-03.jpg",
            "alt": "tracing paper scene 03 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-04.jpg",
            "alt": "tracing paper scene 04 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-05.jpg",
            "alt": "tracing paper scene 05 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-06.jpg",
            "alt": "tracing paper scene 06 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-07.jpg",
            "alt": "tracing paper scene 07 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-scene-08.jpg",
            "alt": "tracing paper scene 08 scene"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-photo-01.jpg",
            "alt": "tracing paper procurement photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-photo-02.jpg",
            "alt": "tracing paper spec sample photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-photo-03.jpg",
            "alt": "tracing paper design hero photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-photo-04.jpg",
            "alt": "tracing paper application photo"
      },
      {
            "src": "/images/products/culture-paper/gallery/tracing-paper-photo-05.jpg",
            "alt": "tracing paper website banner"
      }
,
    ],
  },

  // ========================
  // FOOD PACKAGING PAPER (3 sub-products)
  // ========================
  "cup-paper": {
    id: "cup-paper",
    name: "Cup Paper",
    category: "food-packaging",
    tagline: "Food-grade cupstock base board for paper cups, food containers and PE-coated packaging.",
    description:
      "YOUNGSUN Cupstock Board is a virgin-fibre paperboard developed specifically for cup making and food packaging conversion. Available from 160–330 gsm across twelve common weight points (160, 170, 190, 210, 230, 240, 250, 260, 280, 300, 310, and 330 gsm), the board offers a clean, uncoated printing surface with reliable forming performance for cup sidewalls and food container converting. It is compatible with both single-side and double-side PE coating for moisture and liquid barrier requirements. The virgin-fibre base is suitable for food packaging applications subject to required compliance documentation. Key applications include hot drink cups, cold drink cups, food containers, ice cream cups, and takeaway packaging. Custom grammage, sheet or reel supply, PE coating coordination, size, and packing are supported.",
    specs: [
      "Reference base-board grammage: 160–330 gsm",
      "Fiber: Bleached virgin-fiber base",
      "Options: Uncoated cupstock base or PE-coated specification by order",
      "Format: Reels, sheets and custom converting widths",
      "Food-contact documentation: Confirmed for the exact grade and order",
    ],
    applications: [
      "Hot drink cups — coffee, tea, hot chocolate",
      "Cold drink cups — iced coffee, soda, smoothies",
      "Soup and food containers",
      "Ice cream cups and tubs",
      "Portion cups for sauces and condiments",
      "Sampling cups for promotions and events",
    ],
    certifications: ["Food-contact and FSC documentation confirmed for the exact grade and order"],
    variants: [
      "Uncoated Cupstock Board",
      "PE-Coated Cupstock (subject to order)",
    ],
    features: [
      "Reliable Forming — Suitable for cup sidewalls and food container converting.",
      "Clean Printing Surface — Supports food-service graphics and branding.",
      "PE-Coating Compatibility — Can be converted with single- or double-side PE coating.",
      "Virgin-Fibre Base — Suitable for food packaging applications subject to the required compliance documents.",
    ],
    customization: [
      "Custom grammage",
      "Sheet or reel supply",
      "PE coating coordination",
      "Custom size",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular grades and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status and food-contact documentation are confirmed for the exact grade and order" },
    quoteReqs: ["Grammage","PE coating (single/double side)","Roll width","Quantity","Food safety certification needed","Destination port"],
    faqs: [
      { q: "Should I order uncoated cupstock or PE-coated cup paper?", a: "Choose uncoated cupstock when your converter will apply the barrier layer. Choose a coated specification when the paper must arrive ready for the agreed forming process. State the base-board grammage and coating weight separately so quotations remain comparable." },
      { q: "Is the same cup paper suitable for hot and cold drinks?", a: "Not automatically. Beverage temperature, holding time, condensation, barrier structure, cup size and forming method affect the required grade. Confirm the intended drink and whether one- or two-side coating is needed before production." },
      { q: "What information is needed for a cup paper quotation?", a: "Provide base-board grammage, uncoated or coated structure, coating side and weight, reel width or sheet size, quantity per size, cup application, printing method, required food-contact documents and destination port. Regular grades and formats start from 1 metric ton, subject to specification confirmation." },
    ],
    seoTitle: "Cupstock Base Board & PE-Coated Paper Supplier",
    metaDescription: "Cupstock base board in 160–330 gsm for paper cups and food containers. Compare uncoated and PE-coated specifications; request sheets, reels or samples.",
    keywords: ["cup paper", "cup stock", "paper cup paper", "PE coated cup board", "hot cup paper", "cold cup stock"],
    image: "/images/products/food-packaging/gallery/cup-paper-photo-02.jpg",
    gallery: [
      
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-01.jpg",
            "alt": "cup paper scene 01 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-02.jpg",
            "alt": "cup paper scene 02 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-03.jpg",
            "alt": "cup paper scene 03 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-04.jpg",
            "alt": "cup paper scene 04 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-05.jpg",
            "alt": "cup paper scene 05 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-06.jpg",
            "alt": "cup paper scene 06 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-07.jpg",
            "alt": "cup paper scene 07 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-scene-08.jpg",
            "alt": "cup paper scene 08 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-photo-01.jpg",
            "alt": "cup paper procurement photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-photo-02.jpg",
            "alt": "cup paper spec sample photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-photo-03.jpg",
            "alt": "cup paper design hero photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-photo-04.jpg",
            "alt": "cup paper application photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/cup-paper-photo-05.jpg",
            "alt": "cup paper website banner"
      }
,
    ],
  },
  "greaseproof-paper": {
    id: "greaseproof-paper",
    name: "Greaseproof Paper",
    category: "food-packaging",
    tagline: "White and natural greaseproof paper for bakery, fast food, takeaway and food wrapping applications.",
    description:
      "YOUNGSUN Greaseproof Paper is engineered to resist oil and grease penetration while maintaining suitable strength and converting performance for food-service applications. Available in 35–60 gsm with common weights at 35, 40, 50, and 60 gsm, the paper achieves 3M KIT level 6 or higher grease resistance for the referenced grade. Both white and natural color options are available, supplied in sheets, reels, and custom-cut formats. The paper provides good strength for wrapping, folding, bag making, and food handling, with white and natural options supporting different brand and sustainability aesthetics. Custom printing can be applied for branded sheets, wraps, and bags. Typical applications include bakery wrapping, burger and sandwich wraps, fried food liners, takeaway bags, tray liners, confectionery wrapping, and food interleaving. Custom grammage, color, sheet or reel supply, printing, and cut-sheet formats are available.",
    specs: [
      "Reference commercial grammage: 35–60 gsm",
      "Colors: White and natural",
      "Format: Sheets, reels and custom-cut sizes",
      "Grease resistance: Confirm by grade and technical data sheet",
      "Printing and food-contact status: Subject to specification and supporting documents",
    ],
    applications: [
      "Baking paper — lining baking trays and cake tins",
      "Sandwich and burger wrap paper",
      "Butter, margarine, and cheese wrapping",
      "Fast food basket liners and tray liners",
      "Interleaving for sliced meats and cheeses",
      "Fish and chip wrapping (traditional chippy paper)",
    ],
    certifications: ["Food-contact and FSC documentation confirmed for the exact grade and order"],
    variants: [
      "White Greaseproof Paper",
      "Natural Greaseproof Paper",
      "Printed Greaseproof Paper (subject to order)",
    ],
    features: [
      "Grease Resistance — Helps prevent oil and grease penetration in food-service use.",
      "Good Strength — Suitable for wrapping, folding, bag making and food handling.",
      "White and Natural Options — Supports different brand and sustainability aesthetics.",
      "Custom Printing Available — Can be converted into branded sheets, wraps and bags.",
    ],
    customization: [
      "White or natural color",
      "Custom grammage",
      "Sheet or reel supply",
      "Custom printing",
      "Custom-cut sheets",
    ],
    commercial: { moq: "From 1 metric ton for regular grades and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status and food-contact documentation are confirmed for the exact grade and order" },
    quoteReqs: ["Grammage","Sheet or roll size","Quantity","Food-contact requirement","Application","Destination port"],
    faqs: [
      { q: "Is greaseproof paper the same as baking or silicone-coated paper?", a: "No. Greaseproof paper is selected for resistance to oil and grease, but the product name alone does not confirm oven temperature resistance or a silicone release coating. For baking, confirm the exact grade, heat conditions and food-contact documentation." },
      { q: "Can greaseproof paper be custom printed?", a: "Yes, selected white and natural grades can be printed and converted into wraps, liners, sheets or bags. Provide the artwork coverage, ink system, food-contact requirement, dimensions and converting method so printability can be checked." },
      { q: "How should a buyer specify grease resistance and food-contact requirements?", a: "State the food type, oil exposure, contact time, temperature, required grease-resistance level, grammage, format and destination market. PFAS status and food-contact compliance must be confirmed through the documents for the exact ordered grade rather than inferred from the product name." },
    ],
    seoTitle: "Greaseproof Paper Supplier for Food Packaging",
    metaDescription: "White and natural greaseproof paper for bakery wraps, burger and sandwich packaging, tray liners and food bags. Request sheets, reels or printed formats.",
    keywords: ["greaseproof paper", "grease resistant paper", "baking paper", "food wrap paper", "oil proof paper", "PFAS-free food paper"],
    image: "/images/products/food-packaging/greaseproof-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-01.jpg",
            "alt": "greaseproof paper scene 01 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-02.jpg",
            "alt": "greaseproof paper scene 02 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-03.jpg",
            "alt": "greaseproof paper scene 03 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-04.jpg",
            "alt": "greaseproof paper scene 04 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-05.jpg",
            "alt": "greaseproof paper scene 05 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-06.jpg",
            "alt": "greaseproof paper scene 06 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-07.jpg",
            "alt": "greaseproof paper scene 07 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-scene-08.jpg",
            "alt": "greaseproof paper scene 08 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-photo-01.jpg",
            "alt": "greaseproof paper procurement photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-photo-02.jpg",
            "alt": "greaseproof paper spec sample photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-photo-03.jpg",
            "alt": "greaseproof paper design hero photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-photo-04.jpg",
            "alt": "greaseproof paper application photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/greaseproof-paper-photo-05.jpg",
            "alt": "greaseproof paper website banner"
      }
,
    ],
  },

  "mg-paper": {
    id: "mg-paper",
    name: "MG White Kraft Paper",
    category: "food-packaging",
    tagline: "Machine-glazed white kraft paper with a smooth printable face and glue-ready reverse for bags, wraps and flexible packaging.",
    description:
      "YOUNGSUN MG White Kraft Paper is made from virgin wood pulp and finished on a Yankee drying cylinder to create two useful surfaces: a smooth machine-glazed face for printing and a more matte reverse for gluing, coating or lamination. The 23–80 gsm range can be supplied in standard sheets, reams, custom-cut sizes and jumbo rolls for wrappers, lightweight bags, envelopes, interleaving and flexible laminated structures. Buyers should specify the printing method, adhesive or lamination process, final application and required format. Food-contact and FSC status are confirmed only for the exact grade and order documentation.",
    specs: [
      "Grammage: 23–80 gsm (standard weights from 23 to 80 gsm)",
      "Fiber: 100% virgin wood pulp",
      "Brightness: D65 87% ± 4%",
      "Surface: High-gloss machine-glazed face; matte, glue-ready reverse",
      "Bekk smoothness: ≥80s to ≥120s depending on grammage",
      "Moisture: 4.5% ± 1.0%",
      "MD tensile index: ≥35 to ≥45 N·m/g depending on grammage",
      "Standard sheets: 787 × 1092 mm and 889 × 1194 mm",
      "Supply forms: Sheets, 500-sheet reams, custom sizes and jumbo rolls",
    ],
    applications: [
      "Burger and sandwich wrappers",
      "Bakery bags and fast-food tray liners",
      "Sugar, flour and dry-food sachets",
      "Base paper for PE/PLA coating and wax coating",
      "Aluminum foil lamination composites",
      "Lightweight retail bags, gift wrap and envelopes",
      "Metal and glass interleaving or masking paper",
      "Medical sterilization pouch substrates",
    ],
    certifications: ["FSC and food-contact status confirmed for the exact grade and order"],
    variants: [
      "MG Bleached White Kraft Paper",
      "Custom GSM Sheets",
      "Jumbo Roll Format",
      "Coating and Lamination Base Paper",
    ],
    features: [
      "Superior One-Side Smoothness — The high-gloss MG face delivers strong ink holdout and clean dot reproduction for flexographic and offset printing.",
      "High Tensile Strength — Refined virgin fibers help prevent tearing during high-speed bag making, wrapping and automated converting.",
      "Stable Moisture and Flatness — Moisture is controlled at 4.5% ± 1.0% to reduce curling and feeding problems during printing or laminating.",
      "Reliable Adhesion — The matte reverse provides a strong bonding surface for glues, PE/PLA coatings, wax coatings and aluminum foil lamination.",
      "Order-Specific Documentation — FSC and any food-contact requirement are confirmed for the exact grade and supplied order.",
    ],
    customization: [
      "Custom grammage from 23 to 80 gsm",
      "Standard or custom-cut sheet sizes",
      "Jumbo roll width and diameter",
      "Ream, export pallet or waterproof roll packing",
      "Base paper prepared for coating or lamination",
    ],
    quoteReqs: [
      "Required grammage (gsm)",
      "Sheet size or roll width and diameter",
      "End use and converting process",
      "Printing method: flexographic or offset",
      "Coating or lamination requirement",
      "Food-contact and FSC requirements",
      "Order quantity and destination port",
    ],
    commercial: { moq: "Confirm by grammage, format and width", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed by the applicable claim on sales or delivery documents" },
    faqs: [
      { q: "What does MG mean in MG white kraft paper?", a: "MG means machine glazed. Contact with a heated Yankee cylinder creates a smoother, glossier face, while the reverse remains more matte and can support gluing, coating or lamination." },
      { q: "Is MG white kraft paper automatically greaseproof or approved for food contact?", a: "No. MG describes the surface finish, not a guaranteed grease barrier or food-contact approval. Confirm the exact base grade, any coating or lamination structure and the required market documentation before use." },
      { q: "Can MG white kraft paper be supplied in sheets and rolls?", a: "Yes, subject to the selected grade and production plan. Send grammage, sheet size or roll width and diameter, quantity, printing or converting method, final use and destination port for confirmation." },
    ],
    seoTitle: "MG White Kraft Paper Supplier | 23–80 gsm",
    metaDescription: "MG white kraft paper in 23–80 gsm with a smooth printable face and matte reverse for bags, wraps and lamination. Request sheets, rolls or samples.",
    keywords: ["MG white kraft paper manufacturer", "machine glazed kraft paper supplier", "MG bleached kraft paper", "food wrapping paper", "paper bag material", "flexible packaging base paper", "aluminum foil lamination paper"],
    image: "/images/products/food-packaging/mg-paper-main.webp",
    galleryTitle: "Flexible Packaging and Lamination Applications",
    galleryTitleEs: "Aplicaciones de Embalaje Flexible y Laminación",
    galleryIntro: "MG white kraft paper can serve as a printable layer or base substrate for bags, wraps and laminated structures. Barrier performance and food-contact suitability depend on the complete construction and order-specific documentation.",
    galleryIntroEs: "El papel kraft blanco MG puede utilizarse como capa imprimible o sustrato base para bolsas, envolturas y estructuras laminadas. La barrera y la aptitud alimentaria dependen de la construcción completa y de la documentación específica del pedido.",
    gallery: [
      {
        src: "/images/products/food-packaging/gallery/mg-white-kraft-foil-lamination.webp",
        alt: "MG white kraft paper laminated with aluminum foil for food wrapping",
        fit: "contain",
      },
    ],
  },

  "silicone-coated-paper": {
    id: "silicone-coated-paper",
    name: "Silicone Coated Paper",
    category: "food-packaging",
    tagline: "Premium release liner and non-stick baking paper — silicone-coated for clean release every time.",
    description:
      "Silicone coated paper uses a release layer applied to one or both sides of a paper substrate. The base paper, grammage, coated side and release force must be selected for the adhesive, temperature, converting speed and end use. The reference range covers bleached or natural kraft substrates from 40–120 gsm in sheets and reels. It can be used as a liner for labels and tapes, an industrial release separator and, where the exact grade and supporting documents allow it, for baking or food-contact applications. Heat resistance and food-contact compliance are confirmed only for the ordered grade.",
    specs: [
      "Substrate: Bleached kraft / Unbleached kraft, 40–120 gsm",
      "Silicone coating: One side (1S) or two sides (2S)",
      "Release force: Selected for the adhesive and converting process",
      "Format: Sheets and reels",
      "Heat resistance and food-contact status: Confirm by grade and supporting documents",
    ],
    applications: [
      "Baking paper — cookie sheets, cake pans, roasting trays",
      "Release liner — pressure-sensitive adhesive labels and tapes",
      "Hygiene industry — diaper and sanitary napkin release paper",
      "Non-stick food wrapping and interleaving",
      "Industrial molding release liner",
      "Silicone-coated kraft for bakery and patisserie",
    ],
    certifications: ["Food-contact and FSC documentation confirmed for the exact grade and order"],
    variants: [
      "Single-Side Silicone Coated (1S)",
      "Double-Side Silicone Coated (2S)",
      "Bleached Silicone Paper (White)",
      "Unbleached Silicone Paper (Natural Brown)",
    ],
    features: [
      "Controlled Release — Coating configuration and release force are selected for the adhesive, process or end use.",
      "Documented Baking Grades — Baking and food-contact use is offered only where the exact grade and supporting documents are confirmed.",
      "One- or Two-Side Coating — The coated side and release level can be specified for different converting applications.",
      "Sheets or Reels — Available in formats suitable for baking-paper conversion, interleaving and industrial liners.",
    ],
    customization: [
      "Single or double side silicone",
      "Release force level (easy/medium/tight)",
      "Custom grammage",
      "Sheet or reel supply",
      "Custom packing",
    ],
    commercial: { moq: "From 1 metric ton for regular grades and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status and any food-contact documentation are confirmed for the exact grade and order" },
    quoteReqs: ["End use", "Base paper and grammage", "One- or two-side silicone coating", "Required release force", "Sheet size or reel dimensions", "Temperature and food-contact documentation requirements", "Quantity and destination port"],
    faqs: [
      { q: "Is silicone coated paper suitable for baking?", a: "Only grades with the required heat-resistance and food-contact documentation should be used as baking parchment paper. Confirm the oven temperature, contact conditions and destination-market requirements for the exact grade." },
      { q: "Do you supply parchment paper sheets and baking paper rolls?", a: "Documented baking grades can be supplied as parchment paper sheets or baking paper rolls when the required grammage, coating, dimensions and order quantity are confirmed." },
      { q: "Should I choose silicone coating on one side or two sides?", a: "One-side coating is used where release is needed on one face. Two-side coating is selected when both surfaces require release. The correct option depends on the process, product contact and converting setup." },
    ],
    seoTitle: "Silicone Coated Paper Supplier",
    metaDescription: "Silicone coated paper in 40–120 gsm for baking, food interleaving, labels and release liners. Choose one- or two-side coating, sheets or reels; request samples.",
    keywords: ["silicone coated paper", "silicone release paper", "non-stick paper", "parchment paper", "baking parchment", "release liner paper"],
    image: "/images/products/food-packaging/silicone-coated-paper-main.webp",
    gallery: [
      
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-01.jpg",
            "alt": "silicone coated paper scene 01 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-02.jpg",
            "alt": "silicone coated paper scene 02 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-03.jpg",
            "alt": "silicone coated paper scene 03 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-04.jpg",
            "alt": "silicone coated paper scene 04 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-05.jpg",
            "alt": "silicone coated paper scene 05 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-06.jpg",
            "alt": "silicone coated paper scene 06 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-07.jpg",
            "alt": "silicone coated paper scene 07 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-scene-08.jpg",
            "alt": "silicone coated paper scene 08 scene"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-photo-01.jpg",
            "alt": "silicone coated paper procurement photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-photo-02.jpg",
            "alt": "silicone coated paper spec sample photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-photo-03.jpg",
            "alt": "silicone coated paper design hero photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-photo-04.jpg",
            "alt": "silicone coated paper application photo"
      },
      {
            "src": "/images/products/food-packaging/gallery/silicone-coated-paper-photo-05.jpg",
            "alt": "silicone coated paper website banner"
      }
,
    ],
  },
  "absorbent-paper": {
    id: "absorbent-paper",
    name: "Absorbent Paper",
    category: "fancy-paper",
    tagline: "Porous blotting paper for perfume test strips, coasters and custom absorbent components.",
    description:
      "YOUNGSUN absorbent paper, also known as blotting paper, uses a porous structure to take up and retain liquids. The reference range includes seven thicknesses from 0.4 to 1.6 mm in super white and natural white. Its felt-like surface can be die-cut, embossed, debossed and printed for perfume test strips, coasters, fragrance cards and packaging inserts. Fiber composition, absorption performance and food- or beverage-contact suitability should be confirmed from the technical sheet and sample for the exact grade.",
    specs: [
      "Material: Absorbent fiber composition; cotton content depends on the selected grade",
      "Thickness: 0.4 / 0.5 / 0.6 / 0.8 / 1.0 / 1.2 / 1.6 mm",
      "Grammage: Approx. 380–1500 gsm (varies by thickness)",
      "Color: Super White / Natural White",
      "Surface: Textured, natural felt-like finish",
      "Absorption: Confirm performance with the selected grade and liquid",
      "Format: Sheets, reels, and die-cut components",
      "Documentation: FSC and food-contact status confirmed for the exact grade and order",
    ],
    applications: [
      "Perfume test strips / blotters",
      "Beer and beverage coasters",
      "Desiccant and moisture absorber cards",
      "Food freshness indicator cards",
      "Hangtags and product tags",
      "Gift box liners and inserts",
      "Creative stationery cards",
      "Aromatherapy and fragrance cards",
      "Tea and coffee packaging inserts",
    ],
    certifications: ["FSC and food-contact status confirmed for the exact grade and order"],
    variants: ["Super White Absorbent Paper", "Natural White Absorbent Paper", "Sheet and Reel Supply", "Die-Cut Strips and Coasters"],
    features: [
      "Porous Structure — Designed for fragrance and selected absorbent applications.",
      "Multiple Thickness Options — Seven standard thicknesses from 0.4 to 1.6 mm for different rigidity and absorption needs.",
      "Tactile Natural Surface — Felt-like texture supports premium presentation and embossing.",
      "Conversion Ready — Suitable for die-cutting, embossing, debossing and logo printing.",
    ],
    customization: ["Thickness and color tone", "Sheet or reel format", "Custom die-cut shape", "Embossing or debossing", "Logo printing"],
    commercial: { moq: "From 1 metric ton for regular grades and formats; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC and food-contact status are confirmed for the exact grade and order" },
    quoteReqs: ["End use and liquid type", "Thickness or target grammage", "Color tone", "Sheet, reel or die-cut shape", "Printing or embossing requirement", "Required testing or documentation", "Quantity and destination port"],
    faqs: [
      { q: "How should absorbency be approved for a perfume blotter or coaster?", a: "Test the exact grade with the intended fragrance or liquid. Compare uptake speed, spread, retention, odor neutrality, surface marking and stiffness after contact rather than approving only by thickness or grammage." },
      { q: "Is absorbent paper automatically cotton-based or suitable for food contact?", a: "No. Fiber composition and cotton content vary by grade, and food- or beverage-contact suitability requires documents for the exact material and destination market. State the required claim before sampling." },
      { q: "Can absorbent paper be printed, embossed and die-cut?", a: "Selected grades can support these processes, but heavy ink coverage, coatings and deep embossing may change absorption or fragrance performance. Approve a converted sample using the final artwork, shape and liquid." },
    ],
    seoTitle: "Absorbent Paper Supplier for Perfume Testers",
    metaDescription: "Absorbent paper in 0.4–1.6 mm for perfume test strips, beverage coasters, fragrance cards and inserts. Request sheets, reels or die-cut samples.",
    keywords: ["absorbent paper", "perfume blotter paper", "fragrance test strip paper", "cotton blotting paper", "beverage coaster paper", "absorbent card stock"],
    image: "/images/products/fancy-paper/absorbent-paper-main.webp",
    images: [],
    processingNote:
      "Customized converting services available: sheet cutting, strip die-cutting (any shape), coaster die-cutting (round/square/custom), embossing and debossing, logo printing (single/multi-color). Pre-cut and pre-printed components supplied according to customer drawings.",
  },
  "color-laminated-grey-board": {
    id: "color-laminated-grey-board",
    name: "Color Laminated Grey Board",
    category: "package-board",
    tagline: "Paper-faced grey board for gift boxes, book covers and stationery.",
    description:
      "Color Laminated Grey Board combines a rigid grey board base with colored woodfree paper or kraft paper facing, typically around 200 gsm. Buyers can specify black, white, kraft or another selected color, with colored/colored, colored/grey or colored/white front-and-back constructions. The board is supplied in custom sheet sizes and cut-to-size formats for rigid gift boxes, book covers, folders and presentation stationery. Color approval is based on a physical sample, so purchasing teams can confirm the facing shade and finished construction before production.",
    specs: [
      "Facing paper: Typically 200 gsm colored woodfree paper or kraft paper",
      "Facing colors: Black, white, kraft and selected custom colors",
      "Constructions: Colored/Colored, Colored/Grey or Colored/White",
      "One-side white or black reference: 1.0–4.0 mm / 650–2650 gsm",
      "One-side kraft reference: 1.2–4.0 mm / 800–2650 gsm",
      "Format: Custom sheet sizes and cut-to-size panels",
    ],
    applications: [
      "Rigid gift boxes and presentation boxes",
      "Hardcover books and albums",
      "Folders, binders and stationery",
      "Decorative packaging inserts",
    ],
    certifications: ["FSC status confirmed for the paper components and exact order"],
    variants: ["Black paper facing", "White paper facing", "Kraft paper facing", "Selected custom color facing"],
    features: [
      "Flexible Surface Structure — Choose the facing and reverse combination required for the finished product.",
      "Physical Color Approval — Final color is confirmed against an approved physical sample.",
      "Custom Conversion — Full sheets and cut-to-size panels can be specified for production use.",
      "Rigid Grey Board Base — Provides the structural foundation required for boxes, covers and stationery.",
    ],
    customization: ["Facing paper and color", "Reverse-side finish", "Finished thickness", "Sheet or cut-panel dimensions"],
    commercial: { moq: "5 metric tons per color for standard constructions; confirm by size and combination", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed through the applicable claim on sales or delivery documents" },
    quoteReqs: ["Facing paper and color", "Reverse-side finish", "Finished thickness", "Sheet size", "Quantity per color", "Destination port"],
    faqs: [
      { q: "How do I choose the front and reverse construction?", a: "Specify which surfaces remain visible in the finished box, cover or folder. Colored/colored is useful when both faces are exposed, while colored/grey or colored/white may suit wrapped or lined structures. Confirm the construction with a physical sample." },
      { q: "Does the stated thickness include the facing paper?", a: "The order should state the required finished laminated thickness. Base board, facing paper, adhesive and pressing can affect final caliper, so agree the measurement method and tolerance before production." },
      { q: "How is a custom facing color approved?", a: "Use a physical paper sample or agreed color reference and define the acceptable batch tolerance. Screen colors are not sufficient. If the surface will be printed, wrapped, folded or glued, test the actual facing paper first." },
    ],
    seoTitle: "Color Laminated Grey Board Supplier",
    metaDescription: "Color laminated grey board for gift boxes and stationery. Black, white, kraft and other colors. Custom sizes. MOQ: 5 metric tons per color.",
    keywords: ["color laminated grey board", "colored grey board", "paper faced grey board", "gift box board", "book cover board"],
    image: "/images/products/package-board/laminated-detail/color-laminated-grey-board-main.webp",
    galleryTitle: "Color, Construction and Finished Applications",
    galleryIntro: "Compare facing choices and see how the board is used in rigid packaging and stationery products.",
    gallery: [
      { src: "/images/products/package-board/laminated-detail/color-laminated-grey-board-color-options.webp", alt: "Color laminated grey board facing paper options" },
      { src: "/images/products/package-board/laminated-detail/color-laminated-grey-board-drawer-boxes.webp", alt: "Color laminated grey board used for printed and solid color drawer boxes" },
      { src: "/images/products/package-board/laminated-detail/color-laminated-grey-board-applications.webp", alt: "Color laminated grey board gift box and stationery applications" },
    ],
  },
  "woodgrain-laminated-grey-board": {
    id: "woodgrain-laminated-grey-board",
    name: "Woodgrain Laminated Grey Board",
    category: "package-board",
    tagline: "Wood-effect paper facing laminated to grey board for boxes and decorative applications.",
    description:
      "Woodgrain Laminated Grey Board uses a grey board base faced with approximately 120 gsm decorative woodgrain paper. It provides the visual character of selected wood patterns without using real wood veneer. Available in 1.0–4.0 mm thicknesses, the material is intended for jewelry and watch boxes, gift packaging, desktop organizers and decorative facings. Pattern, shade and grain direction should be confirmed with a physical sample or design reference before production.",
    specs: [
      "Facing paper: Typically 120 gsm woodgrain paper",
      "Base material: Grey board",
      "Thickness: 1.0–4.0 mm",
      "Appearance: Selected wood-effect patterns and shades",
      "Material note: Decorative paper facing, not real wood veneer",
    ],
    applications: [
      "Jewelry boxes and watch boxes",
      "Gift and presentation packaging",
      "Desktop organizers and document holders",
      "Decorative facing components",
    ],
    certifications: ["FSC status confirmed for the paper components and exact order"],
    variants: ["Selected light, medium and dark woodgrain designs", "Customer-approved grain direction"],
    features: [
      "Wood-Effect Appearance — Decorative paper creates a consistent woodgrain presentation.",
      "Physical Sample Selection — Pattern and shade are confirmed using an approved reference.",
      "Specified Grain Direction — Orientation can be included in the order specification.",
      "Grey Board Foundation — Adds thickness and structure for box and organizer production.",
    ],
    customization: ["Woodgrain design reference", "Board thickness", "Sheet size", "Grain direction"],
    commercial: { moq: "1,000 sheets per design; confirm by thickness and size", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed through the applicable claim on sales or delivery documents" },
    quoteReqs: ["Woodgrain design reference", "Thickness", "Sheet size", "Grain direction", "Quantity", "Application and destination"],
    faqs: [
      { q: "Is woodgrain laminated grey board made with real wood veneer?", a: "No. It uses decorative wood-effect paper laminated to a grey board base. This should be described as paper-faced board, not natural wood or veneer." },
      { q: "Why must the woodgrain direction be specified?", a: "Orientation affects how the pattern runs across box panels, covers and cut components. Provide the sheet layout or mark the required grain direction so cutting and assembly follow the approved design." },
      { q: "Can the woodgrain surface be printed, foil stamped or glued?", a: "Possibly, depending on the ink, coating, adhesive and surface finish. Approve the exact design sample with the intended printing, wrapping, scoring and gluing process before production." },
    ],
    seoTitle: "Woodgrain Grey Board for Boxes and Decor",
    metaDescription: "120 gsm woodgrain paper laminated to grey board, 1.0–4.0 mm thick. Designs for jewelry boxes, watch boxes and decorative uses. MOQ: 1,000 sheets per design.",
    keywords: ["woodgrain laminated grey board", "wood effect paper board", "jewelry box board", "watch box board", "decorative grey board"],
    image: "/images/products/package-board/laminated-detail/woodgrain-laminated-grey-board-main-v2.webp",
    galleryTitle: "Woodgrain Designs and Application Ideas",
    galleryIntro: "Review representative patterns and finished-use scenes before selecting a physical sample.",
    gallery: [
      { src: "/images/products/package-board/laminated-detail/woodgrain-laminated-grey-board-jewelry-boxes.webp", alt: "Woodgrain laminated grey board jewelry and watch box applications" },
      { src: "/images/products/package-board/laminated-detail/woodgrain-laminated-grey-board-decorative-applications.webp", alt: "Woodgrain laminated grey board desktop organizer and decorative facing applications" },
    ],
  },
  "blue-core-puzzle-board": {
    id: "blue-core-puzzle-board",
    name: "Blue Core Jigsaw Puzzle Board",
    category: "package-board",
    tagline: "Blue core paperboard for jigsaw puzzle production.",
    description:
      "Blue Core Puzzle Board is produced for jigsaw puzzle and game-puzzle manufacturing where a clearly identifiable blue core and controlled board specification are required. The available range covers 600–1800 gsm and approximately 0.85–2.73 mm, in 50 gsm increments. Grammage tolerance is ±5% and moisture is controlled at 8.0 ± 2.0%. Buyers can specify the required grammage or thickness, sheet dimensions and quantity for each size.",
    specs: [
      "Grammage: 600–1800 gsm",
      "Thickness: Approximately 0.85–2.73 mm",
      "Grammage increments: 50 gsm",
      "Grammage tolerance: ±5%",
      "Moisture: 8.0 ± 2.0%",
      "Core color: Blue",
    ],
    applications: ["Printed jigsaw puzzles", "Game and educational puzzles", "Puzzle board components", "Matching puzzle presentation boxes"],
    certifications: ["FSC Certified"],
    variants: ["600–1800 gsm range in 50 gsm increments"],
    features: [
      "Distinct Blue Core — Gives cut puzzle pieces a clearly identifiable blue edge.",
      "Broad Specification Range — Match grammage and approximate thickness to the puzzle format.",
      "Controlled Moisture — Supplied to an 8.0 ± 2.0% moisture specification.",
      "Export Pallet Packing — Board can be prepared for bulk transport in wrapped pallets.",
    ],
    customization: ["Grammage or thickness", "Sheet dimensions", "Quantity per size", "Pallet packing requirements"],
    commercial: { moq: "From 1 metric ton per size", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC certified" },
    quoteReqs: ["Grammage or thickness", "Sheet size", "Quantity per size", "Printed-sheet lamination and die-cutting process", "Pallet packing requirement", "Destination port"],
    faqs: [
      { q: "Should puzzle board be selected by grammage or thickness?", a: "Use both as reference, then approve a physical sample. Piece size, puzzle format, printed-sheet lamination, die design and the desired edge feel all influence the suitable board specification." },
      { q: "What should be tested before mass-producing a jigsaw puzzle?", a: "Run a production-representative trial covering printed-sheet lamination, die-cut cleanliness, dust, layer separation, piece fit, edge appearance and finished puzzle flatness." },
      { q: "How should blue core puzzle board be stored before converting?", a: "Keep wrapped pallets dry, level and away from direct heat. Allow the board and printed sheets to acclimatize to the converting room before lamination and die-cutting, especially after long-distance transport or a humidity change." },
    ],
    seoTitle: "Blue Core Jigsaw Puzzle Board Supplier",
    metaDescription: "Blue core jigsaw puzzle board from 600 to 1800 gsm and approximately 0.85–2.73 mm. Review sheet sizes, pallet packing and free sample options.",
    keywords: ["blue core puzzle board", "jigsaw puzzle board", "puzzle paperboard", "blue core cardboard", "game board material"],
    image: "/images/products/package-board/laminated-detail/blue-core-puzzle-board-main-v2.webp",
    galleryTitle: "Blue Core, Packing and Puzzle Application",
    galleryIntro: "See the board structure, warehouse pallet packing and representative finished puzzle use.",
    gallery: [
      { src: "/images/products/package-board/laminated-detail/blue-core-puzzle-board-packing.webp", alt: "Blue core puzzle board wrapped on warehouse pallets", fit: "contain" },
      { src: "/images/products/package-board/laminated-detail/blue-core-puzzle-board-application.webp", alt: "Blue core puzzle board used for a jigsaw puzzle and presentation box" },
    ],
  },
  "metallized-laminated-grey-board": {
    id: "metallized-laminated-grey-board",
    name: "Metallized Laminated Grey Board",
    category: "food-packaging",
    tagline: "Gold, silver and white laminated board for cake bases, desserts and salmon packaging.",
    description:
      "Metallized Laminated Grey Board is supplied in gold, silver and white finishes for cake bases, dessert presentation, salmon packaging and other visible components. Typical thickness is 1.0–3.0 mm, with different gold gloss levels available for selection. Buyers can order full sheets, including the standard 70 × 100 cm format, or request round, square, rectangular and custom-cut shapes with straight or scalloped edges. Food-contact suitability and required documents must be confirmed for the selected grade, design and destination market before commercial use.",
    specs: [
      "Typical thickness: 1.0–3.0 mm",
      "Colors: Gold, silver, white and selected custom colors",
      "Gold finish: Different gloss levels available",
      "Shapes: Round, square, rectangular and custom",
      "Edges: Straight or scalloped",
      "Full sheet size: 70 × 100 cm or custom",
      "Supply format: Full sheets or cut shapes",
    ],
    applications: ["Cake bases and cake drums", "Dessert presentation boards", "Salmon packaging boards", "Food presentation inserts"],
    certifications: ["FSC and food-contact status confirmed for the exact grade and order"],
    variants: ["Gold finish", "Silver finish", "White finish", "Full sheets or cut components"],
    features: [
      "Multiple Surface Choices — Select gold, silver, white or an agreed custom finish.",
      "Flexible Supply Format — Order full sheets or finished shapes according to production needs.",
      "Custom Shape Options — Round, square, rectangular and drawing-based formats are available.",
      "Presentation-Focused Surface — Designed for visible cake, dessert and salmon packaging applications.",
    ],
    customization: ["Color and gloss level", "Thickness", "Sheet dimensions", "Shape and edge profile"],
    commercial: { moq: "5 metric tons for full sheets or 1,000 pieces per cut size; confirm by specification", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC and food-contact status are confirmed for the exact grade and order" },
    quoteReqs: ["Full sheet or cut-shape supply", "Thickness", "Color and finish", "Dimensions or drawing", "Quantity", "Destination port"],
    faqs: [
      { q: "Is every metallized laminated board approved for direct food contact?", a: "No. Food-contact suitability depends on the exact surface construction, intended contact, temperature, food type and destination market. Request and review the applicable documents before commercial use." },
      { q: "Should I order full sheets or finished cut shapes?", a: "Full sheets suit buyers with their own die-cutting equipment. Finished rounds, squares, rectangles or drawing-based shapes reduce downstream conversion. Compare yield, edge profile, packing and quantity before choosing." },
      { q: "What information helps prevent edge or surface problems?", a: "Provide thickness, finish, shape, dimensions, edge profile, load, moisture exposure and whether food touches the surface or cut edge. Approve a sample for stiffness, lamination, curl and edge quality." },
    ],
    seoTitle: "Metallized Board for Cakes and Salmon",
    metaDescription: "Gold, silver and white metallized boards for cake, dessert and salmon packaging. Custom shapes and 70 × 100 cm sheets; confirm food-contact documents by grade.",
    keywords: ["food grade metallized board", "gold cake board", "silver cake board", "salmon packaging board", "laminated cake base"],
    image: "/images/products/food-packaging/metallized-board/metallized-laminated-grey-board-main.webp",
    galleryTitle: "Food Presentation Applications and Packing",
    galleryIntro: "Compare finish and shape choices with representative cake, dessert and salmon packaging uses.",
    gallery: [
      { src: "/images/products/food-packaging/metallized-board/metallized-laminated-grey-board-salmon.webp", alt: "Gold metallized board used for salmon packaging" },
      { src: "/images/products/food-packaging/metallized-board/metallized-laminated-grey-board-dessert.webp", alt: "Gold and silver food-grade boards used for cakes and desserts" },
      { src: "/images/products/food-packaging/metallized-board/metallized-laminated-grey-board-packing.webp", alt: "Packed gold cake boards prepared for shipment", fit: "contain" },
    ],
  },
  "foam-laminated-grey-board": {
    id: "foam-laminated-grey-board",
    name: "Foam Laminated Grey Board",
    category: "package-board",
    tagline: "Cushioned grey board for certificate folders and padded hardcover book covers.",
    description:
      "Foam Laminated Grey Board combines a 1.5–3.0 mm grey board base with 3 mm foam to create cushioned components for certificate folders and padded hardcover book covers. Three confirmed constructions are available: a two-layer board with exposed foam, a three-layer structure with 250 gsm grey top paper, and a three-layer structure with 180 gsm kraft top paper. The quoted base thickness refers to the grey board only, not the total finished laminate thickness.",
    specs: [
      "Grey board base thickness: 1.5–3.0 mm",
      "Foam thickness: 3 mm",
      "2-layer structure: Grey board + exposed foam",
      "3-layer grey structure: Grey board + foam + 250 gsm grey top paper",
      "3-layer kraft structure: Grey board + foam + 180 gsm kraft top paper",
      "Thickness note: Base thickness excludes the foam and top facing",
    ],
    applications: ["Padded certificate folders", "Hardcover book covers", "Presentation covers", "Cushioned stationery components"],
    certifications: ["FSC status confirmed for the paper components and exact order"],
    variants: ["2-layer exposed foam", "3-layer with 250 gsm grey top paper", "3-layer with 180 gsm kraft top paper"],
    features: [
      "Defined Layer Structures — Select from one two-layer and two three-layer constructions.",
      "3 mm Foam Layer — Adds cushioning for padded cover applications.",
      "Grey or Kraft Top Paper — Choose the top-facing structure required for further conversion.",
      "Clear Thickness Reference — Grey board base thickness is specified separately from the laminate.",
    ],
    customization: ["Layer construction", "Grey board base thickness", "Top paper option", "Sheet size"],
    commercial: { moq: "500 sheets per variant; confirm by thickness and size", leadTime: "Approximately 3 weeks after specifications are confirmed", samples: "Free standard samples; international courier paid by the customer", certification: "FSC status is confirmed for the paper components through the applicable documents" },
    quoteReqs: ["Layer construction", "Grey board base thickness", "Top layer", "Sheet size", "Quantity", "Destination port"],
    faqs: [
      { q: "Does the listed grey board thickness equal the finished laminate thickness?", a: "No. The 1.5–3.0 mm value refers to the grey board base. The 3 mm foam and any top paper add to the finished structure, while pressing can compress the foam. Approve the assembled sample." },
      { q: "When should I choose a two-layer or three-layer construction?", a: "Choose exposed foam when another covering material will be applied during conversion. Choose a grey or kraft top paper when a paper-facing layer is needed for handling, gluing or the next production step." },
      { q: "What converting details should be tested?", a: "Test cutting, wrapping, adhesive compatibility, pressing pressure, edge build-up and recovery after compression with the intended cover material. Solvent, heat and storage conditions may affect the foam or adhesive." },
    ],
    seoTitle: "Foam Laminated Grey Board for Padded Covers",
    metaDescription: "Foam laminated grey board for certificate folders and hardcover covers. 2 or 3 layers, 3 mm foam, grey or kraft top paper. MOQ: 500 sheets per variant.",
    keywords: ["foam laminated grey board", "padded cover board", "certificate folder board", "hardcover foam board", "cushioned grey board"],
    image: "/images/products/package-board/laminated-detail/foam-laminated-grey-board-main.webp",
    galleryTitle: "Layer Construction, Applications and Packing",
    galleryIntro: "Review the visible layer structure, padded cover uses and representative pallet packing.",
    gallery: [
      { src: "/images/products/package-board/laminated-detail/foam-laminated-grey-board-close-up.webp", alt: "Foam laminated grey board layer structure close-up", fit: "contain" },
      { src: "/images/products/package-board/laminated-detail/foam-laminated-grey-board-applications.webp", alt: "Foam laminated grey board certificate folder and hardcover book applications" },
      { src: "/images/products/package-board/laminated-detail/foam-laminated-grey-board-packing.webp", alt: "Foam laminated grey board packed on a pallet", fit: "contain" },
    ],
  },
};

// ============================================================
// PROCESSING SERVICES
// ============================================================

export const processingServices = [
  {
    id: "embossing",
    title: "Embossing",
    icon: "🔲",
    description:
      "Mechanical embossing creates raised relief patterns on paper and board under heat and pressure. We offer a library of standard patterns — linen, felt, canvas, leather-grain, woodgrain — plus custom embossing roller fabrication for brand-specific textures. Compatible with subsequent printing, foil stamping, and die-cutting. Applied to packaging, book covers, hang tags, and luxury stationery.",
    highlights: ["Standard & custom patterns", "Fine to deep relief", "Inline or offline processing"],
    image: "/images/processing/processing-embossing.jpg",
  },
  {
    id: "die-cutting",
    title: "Die Cutting & Punching",
    icon: "✂️",
    description:
      "Precision die-cutting and punching convert paper and board into finished shapes — carton blanks, labels, hang tags, envelopes, and custom profiles. We use flat-bed and rotary die-cutting lines capable of handling grammages from 80 gsm to 800 gsm. Steel-rule dies are fabricated in-house for fast turnaround on custom shapes. Tight registration tolerances ensure consistent results across production runs.",
    highlights: ["Flat-bed & rotary die-cutting", "Steel-rule die fabrication", "Grammage range: 80–800 gsm"],
    image: "/images/processing/processing-die-cutting-punching.jpg",
  },
  {
    id: "printing",
    title: "Printing",
    icon: "🖨️",
    description:
      "Offset, flexo, and screen printing services for paper and board products — from single-color branding to full-color process printing. We print on a wide range of substrates including coated paper, uncoated board, kraft paper, and specialty fancy papers. Our press operators ensure color consistency, registration accuracy, and fast drying. Available for product face stock, packaging, labels, and promotional materials.",
    highlights: ["Offset / Flexo / Screen printing", "Up to 6-color + coating", "Color management with Delta E ≤ 2"],
    image: "/images/processing/processing-printing.jpg",
  },
  {
    id: "slitting",
    title: "Slitting & Sheeting",
    icon: "📏",
    description:
      "High-precision slitting and sheeting convert jumbo reels into finished rolls or sheets at exact widths and lengths. Our slitter-rewinders handle web widths up to 2,500 mm with ±0.5 mm width tolerance. Sheeting lines produce cut-size sheets (A4, A3, SRA3, custom) with square edges and accurate count. Essential for converting mill reels into customer-ready formats.",
    highlights: ["Web width up to 2,500 mm", "Width tolerance ±0.5 mm", "Sheets ream-packed or bulk-packed"],
    image: "/images/processing/processing-slitting-cutting.jpg",
  },
  {
    id: "lamination",
    title: "Lamination & Coating",
    icon: "🛡️",
    description:
      "Lamination and coating add functional or decorative layers to paper and board — gloss or matt film lamination, soft-touch coating, spot UV varnish, aqueous coating, and PE extrusion coating. These processes enhance durability, moisture resistance, tactile appeal, and visual impact. We offer both thermal and wet lamination for different application requirements.",
    highlights: ["Gloss / Matt / Soft-touch lamination", "PE extrusion coating", "Spot UV & aqueous coating"],
    image: "/images/processing/processing-lamination-finishing.jpg",
  },
  {
    id: "export-packing",
    title: "Export Packing",
    icon: "📦",
    description:
      "Export-grade packing ensures your paper products arrive in perfect condition — whether shipped by container, air freight, or courier. Standard packing includes moisture-barrier wrapping, edge protectors, palletization, and strapping. Custom labeling, barcoding, and packing lists are prepared to your destination country's requirements. We handle fumigation certificates and ISPM 15 compliance for wooden pallets.",
    highlights: ["Moisture-barrier wrapping", "ISPM 15 pallets", "Custom labeling & barcoding"],
    image: "/images/processing/processing-export-packing.jpg",
  },
];

// ============================================================
// NAVIGATION
// ============================================================

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Processing", href: "#processing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// HERO DATA
// ============================================================

export const hero = {
  titleLine1: "Paper Without",
  titleLine2: "Boundaries",
  subtitle:
    "YOUNGSUN Group combines paper manufacturing and converting support in Dongguan with international sales and order coordination in Hong Kong. We focus on grey board, black paper and specialty paper, and work with established Chinese mills including APP, Sun Paper, Nine Dragons, Liansheng and Huatai to supply FBB, art paper, woodfree paper and other grades for overseas buyers.",
  ctaPrimary: { label: "Explore Products", href: "#products" },
  ctaSecondary: { label: "Get a Quote", href: "#contact" },
};

// ============================================================
// ABOUT COMPANY
// ============================================================

export const aboutCompany = {
  title: "Paper Manufacturing and Global Supply",
  paragraphs: [
    "YOUNGSUN PAPER combines manufacturing and converting support in Dongguan with international business coordination in Hong Kong. Dongguan Banyan Material Co., Ltd. supports production, cutting, customization and quality control, while YOUNGSUN New Material Co., Ltd. coordinates international sales and order management.",
    "We work with established Chinese paper mills — including APP, Sun Paper, Nine Dragons, Liansheng, and Huatai — to source printing, packaging, specialty and food-paper grades. Our team supports custom specifications, samples, product-specific documentation and export coordination.",
  ],
  vision: "To be the most reliable, transparent, and sustainability-driven paper supply partner for businesses worldwide — delivering quality from Dongguan to the world.",
};

// ============================================================
// WHY CHOOSE US
// ============================================================

export const whyChooseUs = [
  {
    title: "Diversified Product Range",
    icon: "📦",
    description:
      "We supply a comprehensive range of premium printing and packaging paper and paperboard — covering all four categories: Package Board, Culture Paper, Fancy Paper, and Food Packaging Paper. One supplier, multiple grades, simplified procurement.",
  },
  {
    title: "Verified Documents by Grade",
    icon: "✅",
    description:
      "YOUNGSUN entities hold FSC Chain-of-Custody certification. FSC claims, mill documents and available test reports are confirmed for the exact grade and order, while shipments are checked against agreed specifications.",
  },
  {
    title: "Strong Production Capacity",
    icon: "🏭",
    description:
      "Our manufacturing and processing capabilities are supported by a mill supply network that includes APP, Sun Paper, Nine Dragons, Liansheng, and Huatai, providing broader grade coverage for international buyers.",
  },
  {
    title: "Fast & Timely Delivery",
    icon: "🚢",
    description:
      "Availability, production planning and lead time are confirmed by product and order. Our team coordinates packing, loading, shipping documents and delivery tracking for export customers.",
  },
  {
    title: "Customized Solutions",
    icon: "🔧",
    description:
      "We provide custom size, weight, and labeling solutions with free samples before bulk order. Need specific slitting, sheeting, embossing, or packaging? Our converting partners deliver finished product to your exact specifications.",
  },
  {
    title: "Global Export Expertise",
    icon: "🌍",
    description:
      "We coordinate the documents applicable to each shipment, including the confirmed FSC claim, certificate of origin, packing list and bill of lading, according to product and destination requirements.",
  },
];

// ============================================================
// SUSTAINABILITY
// ============================================================

export const sustainability = {
  title: "Sustainability Is Not Optional",
  subtitle:
    "Every paper product we supply comes with a chain-of-custody story. We believe transparency — not marketing — is what earns trust. That means clear certification, honest sourcing, and measurable environmental accountability.",
  commitments: [
    { icon: "🌳", title: "Verified FSC Claims", description: "YOUNGSUN entities hold FSC Chain-of-Custody certification. The applicable FSC claim is confirmed for each qualifying grade and order." },
    { icon: "♻️", title: "Recycled Content", description: "Post-consumer and post-industrial recycled fiber options available across all four product categories." },
    { icon: "🧪", title: "Grade-Specific Compliance", description: "Food-contact declarations, barrier chemistry and available test reports are confirmed for the selected grade, intended use and destination market." },
    { icon: "⚡", title: "Documented Mill Sourcing", description: "Mill origin, available environmental documentation and order requirements are reviewed by product instead of relying on broad, unsupported claims." },
    { icon: "📋", title: "Full Traceability", description: "From forest or recovery facility to final delivery — traceable chain of custody with auditable documentation." },
    { icon: "🌍", title: "Carbon-Conscious Logistics", description: "Route optimization, consolidated shipments, and sea freight preference to reduce transport-related emissions." },
  ],
};

// ============================================================
// GLOBAL REACH
// ============================================================

export const globalReach = {
  title: "Global Reach, Personal Service",
  subtitle:
    "From our base in China, we serve converters, printers, manufacturers, and brands across six continents. Every client has a dedicated account manager who knows their specifications, preferences, and schedule.",
  regions: [
    { name: "Asia", countries: "25+ countries", highlight: "Core supply base & largest volume market" },
    { name: "Europe", countries: "18+ countries", highlight: "Key export market with growing demand" },
    { name: "Americas", countries: "12+ countries", highlight: "Expanding partnership network" },
    { name: "Africa & Middle East", countries: "8+ countries", highlight: "High-growth emerging markets" },
    { name: "Oceania", countries: "3+ countries", highlight: "Established trade routes" },
  ],
};

// ============================================================
// TESTIMONIALS
// ============================================================

export const testimonials = [
  {
    quote:
      "YOUNGSUN's consistency in kraft paper quality and delivery has made them our go-to supplier for over five years. Their technical team understands our converting requirements and always delivers to spec.",
    author: "Purchasing Director",
    company: "European Packaging Group",
    region: "Germany",
  },
  {
    quote:
      "We switched our coated paper sourcing to YOUNGSUN and immediately reduced our per-ton cost while maintaining print quality. Their documentation and logistics handling makes import seamless.",
    author: "CEO",
    company: "Print Solutions Ltd.",
    region: "United Kingdom",
  },
  {
    quote:
      "Finding a supplier who genuinely understands specialty paper — grades, finishes, and converting behavior — was difficult until we found YOUNGSUN. Their fancy paper range is exceptional.",
    author: "Creative Director",
    company: "Luxury Brand Packaging Co.",
    region: "United Arab Emirates",
  },
];

// ============================================================
// CONTACT
// ============================================================

export const contactInfo = {
  title: "Let's Talk Paper",
  subtitle:
    "Tell us what you need — product, specification, volume, and destination. We'll respond with a competitive quote, lead time, and logistics plan within 24 hours.",
  email: "Alice@yspaper.com",
  phone: "+86 13713459656",
  whatsapp: "+86 13713459656",
  wechat: "ALICEZEO",
};

// ============================================================
// FAQ — AI-extractable Q&A format, answer-first, 40-60 words each
// ============================================================

export const faqItems = [
  {
    id: "product-range",
    question: {
      en: "What paper products does YOUNGSUN PAPER supply?",
      es: "¿Qué productos de papel suministra YOUNGSUN PAPER?",
    },
    answer: {
      en: "YOUNGSUN PAPER supplies package board, culture paper, fancy paper and food packaging paper. The range includes grey board, black paper, folding box board, kraft paper, coated and uncoated printing paper, specialty surfaces, cup paper, greaseproof paper and other grades for packaging, printing and converting.",
      es: "YOUNGSUN PAPER suministra cartón para embalaje, papel cultural, papel especial y papel para envases alimentarios. La gama incluye cartón gris, papel negro, cartón plegable, papel kraft, papeles de impresión estucados y no estucados, superficies especiales, papel para vasos y papel antigrasa.",
    },
  },
  {
    id: "location",
    question: { en: "Where is YOUNGSUN PAPER located?", es: "¿Dónde se encuentra YOUNGSUN PAPER?" },
    answer: {
      en: "YOUNGSUN PAPER is headquartered in Dalang Town, Dongguan City, Guangdong Province, China, with convenient access to Shenzhen export ports. Our team coordinates manufacturing, mill sourcing, processing, quality documents and export logistics from one point of contact.",
      es: "YOUNGSUN PAPER tiene su sede en Dalang, Dongguan, provincia de Guangdong, China, con acceso conveniente a los puertos de exportación de Shenzhen. Nuestro equipo coordina fabricación, suministro de fábricas, procesamiento, documentación de calidad y logística de exportación.",
    },
  },
  {
    id: "certification-documents",
    question: { en: "What certification and test documents are available?", es: "¿Qué certificados e informes de ensayo están disponibles?" },
    answer: {
      en: "Certification and test documents depend on the exact product grade and producing mill. FSC chain-of-custody documents, SGS test reports and food-contact compliance documents are available for applicable products and orders. Tell us the destination market and required standard so we can confirm the correct documents before you order.",
      es: "Los certificados e informes dependen del producto y de la fábrica de origen. Para productos y pedidos aplicables pueden proporcionarse documentos de cadena de custodia FSC, informes SGS y documentación de contacto alimentario. Indique el mercado de destino y la norma requerida para confirmar los documentos antes del pedido.",
    },
  },
  {
    id: "customization",
    question: { en: "Can you customize paper size, weight or packaging?", es: "¿Se pueden personalizar el tamaño, el gramaje o el embalaje?" },
    answer: {
      en: "Yes. Available options include custom sheet sizes, reel widths, grammage within the product range, slitting, sheeting, labeling and export packing. Embossing, printing, lamination and other converting services depend on the material and order. Final tolerances are confirmed in the quotation or approved specification.",
      es: "Sí. Las opciones incluyen medidas de hoja, anchos de bobina, gramajes dentro de la gama disponible, corte, etiquetado y embalaje de exportación. El gofrado, la impresión, la laminación y otros procesos dependen del material y del pedido. Las tolerancias finales se confirman en la cotización o especificación aprobada.",
    },
  },
  {
    id: "moq",
    question: { en: "What is the minimum order quantity (MOQ)?", es: "¿Cuál es la cantidad mínima de pedido (MOQ)?" },
    answer: {
      en: "MOQ is not one fixed quantity for every product. It depends on the paper grade, GSM or thickness, size, producing mill, stock availability and packing requirements. Standard samples are separate from commercial order quantities. Send your specification and target quantity to receive the applicable MOQ before quotation.",
      es: "El MOQ no es una cantidad única para todos los productos. Depende del tipo de papel, gramaje o espesor, medida, fábrica de origen, disponibilidad y embalaje. Las muestras estándar no forman parte del MOQ comercial. Envíe la especificación y cantidad prevista para confirmar el mínimo aplicable antes de cotizar.",
    },
  },
  {
    id: "samples",
    question: { en: "How do I request paper samples?", es: "¿Cómo solicito muestras de papel?" },
    answer: {
      en: "Send the product name, GSM or thickness, size and intended application to Alice@yspaper.com or WhatsApp +86 13713459656. YOUNGSUN covers the cost of standard samples; the customer pays the international courier charge. Availability and dispatch arrangements are confirmed before shipment.",
      es: "Envíe el nombre del producto, gramaje o espesor, medida y aplicación a Alice@yspaper.com o WhatsApp +86 13713459656. YOUNGSUN cubre el costo de las muestras estándar y el cliente paga el envío internacional. La disponibilidad y el despacho se confirman antes del envío.",
    },
  },
  {
    id: "lead-time",
    question: { en: "How are production and delivery times calculated?", es: "¿Cómo se calculan los plazos de producción y entrega?" },
    answer: {
      en: "Stock grades and made-to-order products follow different schedules. Each quotation separates product preparation or production time, loading arrangements and estimated ocean transit. The final schedule depends on the grade, specification, quantity, destination port and confirmed shipping space.",
      es: "Los productos en stock y los fabricados bajo pedido tienen plazos diferentes. Cada cotización separa el tiempo de preparación o producción, la carga y el tránsito marítimo estimado. El plazo final depende del producto, especificación, cantidad, puerto de destino y espacio naviero confirmado.",
    },
  },
  {
    id: "food-contact",
    question: { en: "Do you supply paper for food-contact applications?", es: "¿Suministran papel para aplicaciones de contacto alimentario?" },
    answer: {
      en: "Yes. The range includes cup paper, greaseproof paper, silicone coated paper and selected barrier-coated grades for food-service packaging. Suitability and compliance documents must be confirmed for the exact grade, food type, temperature, contact time and destination market before commercial use.",
      es: "Sí. La gama incluye papel para vasos, papel antigrasa, papel siliconado y determinados papeles con barrera para envases alimentarios. La idoneidad y la documentación deben confirmarse según el producto, alimento, temperatura, tiempo de contacto y mercado de destino antes del uso comercial.",
    },
  },
  {
    id: "export-markets",
    question: { en: "Which international markets do you serve?", es: "¿Qué mercados internacionales atienden?" },
    answer: {
      en: "YOUNGSUN serves paper buyers across Asia, Europe, the Americas, Africa, the Middle East and Oceania. Export support can include commercial invoices, packing lists, bills of lading, certificates of origin and product-specific documents required by the agreed order and destination.",
      es: "YOUNGSUN atiende a compradores de Asia, Europa, América, África, Oriente Medio y Oceanía. El apoyo de exportación puede incluir factura comercial, lista de empaque, conocimiento de embarque, certificado de origen y documentos específicos acordados para el pedido y destino.",
    },
  },
  {
    id: "mill-partners",
    question: { en: "Which paper mills are in your supply network?", es: "¿Qué fábricas de papel forman parte de su red de suministro?" },
    answer: {
      en: "Our mill supply network includes APP, Sun Paper, Nine Dragons, Liansheng and Huatai. Together with YOUNGSUN's manufacturing and processing capabilities, this network expands the available range of packaging board, printing paper and specialty paper for international sourcing projects.",
      es: "Nuestra red de suministro incluye APP, Sun Paper, Nine Dragons, Liansheng y Huatai. Junto con las capacidades de fabricación y procesamiento de YOUNGSUN, esta red amplía la gama de cartones, papeles de impresión y papeles especiales para proyectos internacionales.",
    },
  },
  {
    id: "payment",
    question: { en: "What payment methods are available?", es: "¿Qué métodos de pago están disponibles?" },
    answer: {
      en: "T/T bank transfer is commonly used, and L/C may be available for qualifying orders. The deposit, balance schedule, beneficiary details and document requirements are stated on the official proforma invoice. Confirm the final terms with YOUNGSUN before making any payment.",
      es: "La transferencia bancaria T/T es habitual y la carta de crédito puede estar disponible para pedidos que cumplan los requisitos. El depósito, saldo, beneficiario y documentos se indican en la factura proforma oficial. Confirme las condiciones finales con YOUNGSUN antes de pagar.",
    },
  },
  {
    id: "trade-terms",
    question: { en: "Can you quote FOB or CIF prices?", es: "¿Pueden cotizar precios FOB o CIF?" },
    answer: {
      en: "FOB and CIF quotations can be prepared according to the product and destination. Send the loading port preference, destination port, quantity and packing requirements. The quotation will clearly state the Incoterm, included charges, validity period and estimated schedule.",
      es: "Se pueden preparar cotizaciones FOB y CIF según el producto y destino. Indique el puerto de carga preferido, puerto de destino, cantidad y embalaje. La cotización indicará claramente el Incoterm, cargos incluidos, validez y plazo estimado.",
    },
  },
];

export function localizeFaqItems(lang = "en") {
  return faqItems.map((item) => ({
    id: item.id,
    q: item.question[lang] || item.question.en,
    a: item.answer[lang] || item.answer.en,
  }));
}

// ============================================================
// FOOTER
// ============================================================

export const footerColumns = [
  {
    title: "Product Categories",
    links: [
      { label: "Package Board", href: "#products" },
      { label: "Culture Paper", href: "#products" },
      { label: "Fancy Paper", href: "#products" },
      { label: "Food Packaging Paper", href: "#products" },
      { label: "Processing Services", href: "#processing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Global Reach", href: "#global" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Product Catalog", href: "#products" },
      { label: "Request a Quote", href: "#contact" },
      { label: "Quality Certifications", href: "#sustainability" },
      { label: "Logistics & Shipping", href: "#global" },
      { label: "Technical Specs", href: "#contact" },
    ],
  },
];

// Supabase is the editorial layer. Existing source content remains the fallback
// for galleries and specialized modules that are not managed in CMS v1.
for (const cmsProduct of cmsProducts) {
  const existing = subProducts[cmsProduct.id] || {};
  subProducts[cmsProduct.id] = {
    ...existing,
    ...cmsProduct,
    gallery: existing.gallery || [],
    images: existing.images || [],
    optionGallery: existing.optionGallery || [],
    customization: existing.customization || cmsProduct.commercial?.customization || [],
    quoteReqs: existing.quoteReqs || cmsProduct.commercial?.quoteReqs || [],
    keywords: existing.keywords || cmsProduct.commercial?.keywords || [],
  };
}

for (const slug of cmsHiddenProductSlugs) delete subProducts[slug];

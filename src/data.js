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
    "YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) supplies premium paper and board to manufacturers, printers, converters, and brands worldwide. Founded in 2002 in Dongguan, Guangdong — 50km from Shenzhen port — with a 20,000m² workshop, 220+ workers, and 50,000 tons of warehouse stock. All paper is FSC and SGS certified. We serve 60+ countries with 36,000+ tons exported annually.",
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
  millPartners: ["IPSUN", "CHENMING", "NINEDRAGON", "APP", "BOHUI", "GOLDENEAST"],
};

// ============================================================
// 4 PRODUCT CATEGORIES — Each category is an industry-recognized class
// ============================================================

export const productCategories = [
  {
    id: "package-board",
    title: "Package Board",
    icon: "📦",
    tagline: "Structural paperboard for packaging that protects, presents, and performs.",
    summary:
      "Grey board, black paper, color card, folding box board, C2S art board, kraft paper, duplex board, and PE coated paper — the full range of rigid and folding packaging substrates. Supplied in sheets or reels, cut to your specification.",
    image: "/images/hero/background-main-products.png",
    background: "/images/hero/background-main-products.png",
  },
  {
    id: "culture-paper",
    title: "Culture Paper",
    icon: "📄",
    tagline: "Printing and writing papers for commercial print, publishing, and office use.",
    summary:
      "Woodfree paper, color offset paper, LWC (lightweight coated), and NCR (carbonless) paper. Smooth, bright, and engineered for sharp print reproduction across offset, digital, and inkjet presses.",
    image: "/images/products/culture-paper/culture-paper-01.png",
    background: "/images/products/culture-paper/background-colored-offset-paper-dark.png",
  },
  {
    id: "fancy-paper",
    title: "Fancy Paper",
    icon: "✨",
    tagline: "Specialty decorative papers that make brands look and feel unmistakable.",
    summary:
      "Soft-touch, leather-embossed, pearlescent, textured embossed, label paper, and tracing paper — tactile, visual, and memorable. Used by luxury brands, designers, and premium packaging converters worldwide.",
    image: "/images/products/fancy-paper/fancy-paper-overview.png",
    background: "/images/products/fancy-paper/background-hangtag-section-clean.png",
  },
  {
    id: "food-packaging",
    title: "Food Packaging Paper",
    icon: "🍽️",
    tagline: "Food-safe papers engineered for contact, barrier, and heat-seal applications.",
    summary:
      "Cup paper, greaseproof paper, and silicone coated paper — compliant with FDA and EU food-contact regulations. Designed for hot cups, cold cups, baking, wrapping, and takeaway packaging.",
    image: "/images/products/food-packaging/food-packaging-paper-01.png",
    background: "/images/products/food-packaging/food-packaging-paper-detail.png",
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
    tagline: "High-density recycled grey chipboard for rigid packaging, bookbinding, and stationery — cost-effective structural strength.",
    description:
      "Grey board — also known as chipboard or grey chipboard — is a dense, rigid paperboard made from recycled fibers. It provides structural backbone for hardcover books, rigid gift boxes, jigsaw puzzles, ring binders, and archival folders. The board is uncoated, smooth on both sides, and available in thicknesses from 0.5 mm to 4.0 mm. Because it is made from post-consumer recycled pulp, it is an affordable, eco-conscious choice that does not compromise on stiffness or durability.",
    specs: [
      "Thickness: 0.5 mm – 4.0 mm (500 – 4000 gsm equivalent)",
      "Color: Natural grey / Custom tint available",
      "Surface: Smooth both sides, uncoated",
      "Format: Sheets (standard & custom sizes) or reels",
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
    certifications: ["FSC Recycled", "ISO 14001"],
    keywords: ["grey board", "grey chipboard", "recycled greyboard", "rigid box board", "bookbinding board", "puzzle board"],
    image: "/images/products/package-board/package-board-01.png",
  },
  "black-paper": {
    id: "black-paper",
    name: "Black Paper",
    category: "package-board",
    tagline: "Deep-dyed black paper and card with consistent core-color — no edge-whitening, no rub-off.",
    description:
      "Black paper and black card stock produced by through-dyeing the pulp before sheet formation — ensuring the black color penetrates the entire cross-section. This means edges stay black when cut, creased, or die-cut. Available in uncoated, matte-coated, and glossy-coated finishes. Grammage ranges from 80 gsm (lightweight wrapping) to 400 gsm (structural card). Used wherever premium presentation matters: luxury packaging, photo albums, greeting cards, and high-end retail bags.",
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
    certifications: ["FSC Mix", "ISO 14001"],
    keywords: ["black paper", "black card stock", "through-dyed paper", "black cardboard", "luxury black paper", "core-dyed black board"],
    image: "/images/products/package-board/black-paper-detail.png",
  },
  "color-card-paper": {
    id: "color-card-paper",
    name: "Color Card Paper",
    category: "package-board",
    tagline: "Vibrant, uniform-color cardstock in a wide gamut — vivid both sides, consistent batch to batch.",
    description:
      "Color card paper — also called colored cardboard or solid-color cardstock — is produced with pigments added during pulping, yielding a sheet that is colored through its entire thickness. No surface flaking or edge-fading. Standard colors span the full spectrum (red, blue, green, yellow, pink, orange, black, white) with custom Pantone-matching available for volume orders. Grammages from 120 gsm to 400 gsm cover everything from folder stock to structural packaging board. Widely used for office filing, craft projects, packaging, and visual merchandising.",
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
    certifications: ["FSC Mix", "ISO 9001"],
    keywords: ["color card paper", "colored cardboard", "solid color cardstock", "colored paper board", "Pantone paper", "craft cardstock"],
    image: "/images/products/culture-paper/colored-offset-paper-product-1.png",
  },
  "folding-box-board": {
    id: "folding-box-board",
    name: "Folding Box Board",
    category: "package-board",
    tagline: "Multi-ply carton board with a bright white top liner — designed for pharmaceutical, cosmetic, and food-grade folding cartons.",
    description:
      "Folding Box Board (FBB) — also known as GC1, GC2, or SBS (Solid Bleached Sulphate) depending on the grade — is a multi-layer paperboard engineered for high-speed carton converting. The top ply is bleached chemical pulp providing excellent print surface; middle plies use mechanical or recycled pulp for bulk and stiffness; the back ply may be cream, white, or kraft depending on grade. FBB delivers the stiffness-to-grammage ratio that folding cartons demand while maintaining excellent creasing, scoring, and die-cutting performance.",
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
    certifications: ["FSC Mix", "ISO 9001", "FDA-compliant grades"],
    keywords: ["folding box board", "FBB", "GC1 board", "carton board", "pharma packaging board", "cosmetic box board"],
    image: "/images/products/package-board/package-board-02.png",
  },
  "c2s-art-board": {
    id: "c2s-art-board",
    name: "C2S Art Board Card",
    category: "package-board",
    tagline: "Coated-two-sides art board with bright white surface and smooth finish — for premium print and high-end card applications.",
    description:
      "C2S (Coated Two Sides) Art Board — also referred to as art card, SBS board, or coated duplex board — features a double-coated white surface on both sides. The coating layer ensures sharp dot reproduction, high ink gloss, and consistent color fidelity for offset, UV offset, and digital printing. This is the board of choice for premium greeting cards, luxury hang tags, book covers, and heavy-duty promotional materials where print quality is the primary differentiator.",
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
    certifications: ["FSC Mix", "ISO 9001"],
    keywords: ["C2S art board", "coated art card", "SBS board", "art card paper", "premium card stock", "double-coated board"],
    image: "/images/products/package-board/white-woodfree-paper-detail.png",
  },
  "kraft-paper": {
    id: "kraft-paper",
    name: "Kraft Paper",
    category: "package-board",
    tagline: "High-strength natural kraft paper for industrial packaging, bags, wrapping, and corrugated facing — tough, tear-resistant, recyclable.",
    description:
      "Kraft paper is a high-tensile paper produced from virgin softwood pulp via the sulfate (kraft) process. The natural brown color comes from unbleached pulp — though bleached (white) kraft is also available. It is the workhorse of industrial packaging: multi-wall sacks, corrugated liners, void-fill, and wrapping. Grammages from 35 gsm (lightweight wrapping) to 200 gsm (heavy-duty sack paper). Virgin kraft offers the highest strength-to-weight ratio of any paper substrate and is 100% recyclable and biodegradable.",
    specs: [
      "Grammage: 35 – 200 gsm",
      "Grades: Natural (brown) / Bleached (white) / Recycled",
      "Tensile index: ≥ 80 Nm/g (MD)",
      "Tear index: ≥ 12 mNm²/g",
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
    certifications: ["FSC 100%", "PEFC", "ISO 9001"],
    keywords: ["kraft paper", "virgin kraft", "sack kraft paper", "brown kraft paper", "packaging kraft", "industrial kraft paper"],
    image: "/images/products/package-board/product-kraft-paper.png",
  },
  "duplex-board": {
    id: "duplex-board",
    name: "Duplex Board",
    category: "package-board",
    tagline: "Two-ply board with white coated top and grey back — the cost-effective carton board for retail and FMCG packaging.",
    description:
      "Duplex board — also known as white-lined chipboard (WLC) or coated duplex board — consists of a white coated top layer laminated to a grey recycled-fiber back. It offers an excellent printing surface on the white side at a lower cost than fully bleached boards. The grey back side is clean, smooth, and suitable for inside-of-box printing. This is the most widely used board for fast-moving consumer goods (FMCG) cartons, shoe boxes, and general retail packaging across Asia, Europe, and the Middle East.",
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
    certifications: ["FSC Recycled", "ISO 9001"],
    keywords: ["duplex board", "white-lined chipboard", "WLC", "coated duplex board", "grey back board", "FMCG carton board"],
    image: "/images/products/package-board/duplex-board.png",
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
    keywords: ["PE coated paper", "polyethylene coated paper", "paper cup stock", "PE coated board", "heat seal paper", "food-grade coated paper"],
    image: "/images/products/package-board/pe-coated-paper.png",
  },
  "c1s-ivory-board": {
    id: "c1s-ivory-board",
    name: "C1S Ivory Board",
    category: "package-board",
    tagline: "Coated-one-side ivory board with bright white surface and high bulk — ideal for premium folding cartons and graphic packaging.",
    description:
      "C1S (Coated One Side) Ivory Board — also known as ivory board, SBB (Solid Bleached Board), or GC1 — is a high-bulk paperboard with a bright white coated surface on the top side and an uncoated cream or white reverse. The single-side coating delivers excellent print reproduction for offset, UV, and digital printing, while the uncoated reverse provides stiffness and a natural feel. It is the go-to board for premium folding cartons in cosmetics, pharmaceuticals, electronics, and dry food packaging. Also used for greeting cards, book covers, and high-end promotional materials.",
    specs: [
      "Grammage: 200 – 400 gsm",
      "Coating: Single-side coated (C1S), gloss or matt",
      "Brightness: ISO 90%+ (coated side)",
      "Bulk: ≥ 1.3 cm³/g (high bulk for stiffness)",
      "Format: Sheets (standard & custom sizes), reels",
      "Food-grade options available",
    ],
    applications: [
      "Premium folding cartons — cosmetics, pharma, electronics",
      "Dry food packaging — cereal, biscuit, tea cartons",
      "Greeting cards and postcards",
      "Book covers and dust jackets",
      "Promotional folders and presentation materials",
      "Display packaging and shelf-ready trays",
    ],
    certifications: ["FSC Mix", "SGS certified", "ISO 9001"],
    keywords: ["C1S ivory board", "ivory board", "SBB board", "GC1 board", "coated one side board", "premium carton board"],
    image: "/images/products/package-board/folding-box-board.png",
  },
  "art-paper": {
    id: "art-paper",
    name: "Art Paper (C2S Coated)",
    category: "package-board",
    tagline: "Double-coated art paper with exceptional brightness, smoothness, and print gloss — for high-end publications, catalogs, and commercial printing.",
    description:
      "Art paper — also called C2S coated paper, coated art paper, or woodfree coated paper — is a premium-grade paper with a double-coated surface on both sides. The coating creates a smooth, bright, and ink-receptive surface that produces sharp halftone dots, rich color saturation, and high print gloss. Widely used for magazines, catalogs, annual reports, calendars, posters, high-end brochures, and art books. Available in gloss, matt, and silk finishes. Grammages from 80 gsm to 200 gsm cover everything from lightweight catalog stock to heavy cover stock.",
    specs: [
      "Grammage: 80 – 200 gsm",
      "Finish: Gloss / Matt / Silk (semi-matt)",
      "Brightness: ISO 92%+",
      "Whiteness: CIE 145+",
      "Smoothness: ≤ 1.0 μm (PPS)",
      "Format: Sheets & reels",
    ],
    applications: [
      "Magazines, catalogs, and annual reports",
      "Art books and photography books",
      "Posters, calendars, and wall art",
      "High-end brochures and sales literature",
      "Luxury brand lookbooks and portfolios",
      "High-quality commercial flyers and inserts",
    ],
    certifications: ["FSC Mix", "SGS certified", "ISO 9001"],
    keywords: ["art paper", "C2S coated paper", "coated art paper", "woodfree coated paper", "gloss art paper", "matt art paper"],
    image: "/images/products/culture-paper/culture-paper-01.png",
  },

  // ========================
  // CULTURE PAPER (6 sub-products)
  // ========================
  "woodfree-paper": {
    id: "woodfree-paper",
    name: "Woodfree Paper",
    category: "culture-paper",
    tagline: "Bright white, acid-free uncoated paper for office, book, and commercial printing — smooth, opaque, and archival-quality.",
    description:
      "Woodfree paper — also known as WF paper, uncoated woodfree (UWF), or bond paper — is made from chemical pulp with minimal or no mechanical wood pulp, giving it high brightness, excellent opacity, and long-term archival stability. It is the standard for office documents, business stationery, book publishing, envelopes, and commercial printing where clean text reproduction and a tactile uncoated surface are valued. Available from 60 gsm (bible paper thin) to 120 gsm (heavy letterhead). ISO 9706 (permanent paper) grades available for archival applications.",
    specs: [
      "Grammage: 60 – 120 gsm (custom up to 300 gsm)",
      "Brightness: ISO 90–100%",
      "Opacity: ≥ 90% at 80 gsm",
      "Cobb value: ≤ 30 g/m² (sized for offset/inkjet)",
      "Format: Sheets (A4, A3, SRA3, custom), rolls",
      "Acid-free: pH 7.0–9.0, alkaline reserve ≥ 2% CaCO₃",
    ],
    applications: [
      "Office documents — A4 / A3 copy and printer paper",
      "Book publishing — text stock for novels and textbooks",
      "Business stationery — letterhead, envelopes, notepads",
      "Commercial print — flyers, leaflets, newsletters",
      "Envelope paper — wallet, pocket, and window envelopes",
      "Archival documents — ISO 9706 permanent paper",
    ],
    certifications: ["FSC Mix", "ISO 9706 (archival)", "ISO 9001"],
    keywords: ["woodfree paper", "uncoated woodfree", "UWF paper", "office paper", "bond paper", "book paper"],
    image: "/images/products/culture-paper/culture-paper-01.png",
  },
  "color-offset-paper": {
    id: "color-offset-paper",
    name: "Color Offset Paper",
    category: "culture-paper",
    tagline: "Colored uncoated paper for offset printing — consistent shade, excellent runnability, wide color palette.",
    description:
      "Color offset paper — also called colored uncoated woodfree or tinted offset — is a through-dyed paper designed for offset lithography printing. Unlike surface-colored papers, the pigment is in the pulp, giving uniform color throughout the sheet and eliminating edge-whitening when folded or cut. Available in 20+ standard colors including pastels, brights, and earth tones. Grammages from 60 gsm to 200 gsm. Surface-sized for excellent ink holdout and fast drying on sheet-fed and web offset presses.",
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
    certifications: ["FSC Mix", "ISO 9001"],
    keywords: ["color offset paper", "colored uncoated paper", "tinted offset", "colored printing paper", "dyed paper", "offset color paper"],
    image: "/images/products/culture-paper/colored-offset-paper-product-1.png",
  },
  "lwc-paper": {
    id: "lwc-paper",
    name: "LWC Paper (Lightweight Coated)",
    category: "culture-paper",
    tagline: "Lightweight coated paper for high-circulation magazines, catalogs, and inserts — bright, smooth, and postal-weight-efficient.",
    description:
      "LWC (Lightweight Coated) paper is a groundwood-containing coated paper with basis weights typically between 35 gsm and 70 gsm. It bridges the gap between newsprint and heavy coated woodfree grades — offering sufficient brightness and a smooth coated surface for good halftone reproduction at significantly lower grammage (and therefore lower postal and freight cost) than traditional coated paper. The coating is applied on-machine, creating a uniform surface that handles four-color offset printing with minimal show-through. It is the dominant grade for mass-circulation magazines, retail catalogs, advertising inserts, and direct marketing mailers where volume and weight economics are critical.",
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
    certifications: ["FSC Mix", "PEFC", "ISO 9001"],
    keywords: ["LWC paper", "lightweight coated paper", "magazine paper", "catalog paper", "low grammage coated", "heatset web paper"],
    image: "/images/products/culture-paper/culture-paper-02.png",
  },
  "ncr-paper": {
    id: "ncr-paper",
    name: "NCR Paper (Carbonless Paper)",
    category: "culture-paper",
    tagline: "Self-copying carbonless paper for forms, invoices, and receipts — no carbon sheet needed, clean and smudge-free.",
    description:
      "NCR (No Carbon Required) paper — also called carbonless copy paper or self-copying paper — is a chemically coated paper that creates duplicate copies without an intermediate carbon sheet. When pressure is applied (by pen, typewriter, or dot-matrix printer), microcapsules of dye on the back of the top sheet rupture and react with a clay-based coating on the front of the sheet below, creating a permanent image. Standard sets include 2-part (CB+CF) and multi-part configurations up to 6 parts. Used universally for business forms, delivery notes, invoices, receipts, and contracts.",
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
    certifications: ["FSC Mix", "ISO 9001"],
    keywords: ["NCR paper", "carbonless paper", "carbonless copy paper", "self-copy paper", "CB CFB CF paper", "multi-part forms paper"],
    image: "/images/products/culture-paper/culture-paper-applications.png",
  },
  "offset-paper": {
    id: "offset-paper",
    name: "Offset Paper",
    category: "culture-paper",
    tagline: "Uncoated woodfree paper optimized for offset lithography — high bulk, excellent runnability, and clean print fidelity.",
    description:
      "Offset paper — also called uncoated offset, woodfree offset, or offset printing paper — is a premium uncoated paper engineered for sheet-fed and web offset presses. It offers high bulk, good opacity, and a smooth, sized surface that holds ink without feathering or show-through. The uncoated surface provides a natural, tactile feel preferred for books, textbooks, notebooks, and commercial printing where readability matters. Available in natural white and high-white shades. Grammages from 50 gsm (lightweight book) to 120 gsm (heavy text). Surface-sized for both conventional and UV offset inks.",
    specs: [
      "Grammage: 50 – 120 gsm",
      "Shades: Natural white / High white (ISO 90–100%)",
      "Opacity: ≥ 90% at 70 gsm",
      "Bulk: ≥ 1.2 cm³/g",
      "Surface: Sized for offset, smooth uncoated finish",
      "Format: Sheets & reels",
    ],
    applications: [
      "Books and textbooks — text stock",
      "Notebooks, notepads, and writing pads",
      "Commercial flyers, leaflets, and newsletters",
      "Office documents and business stationery",
      "Diaries and journals",
      "Educational materials and workbooks",
    ],
    certifications: ["FSC Mix", "SGS certified", "ISO 9001"],
    keywords: ["offset paper", "uncoated offset paper", "woodfree offset", "offset printing paper", "book paper", "text paper"],
    image: "/images/products/culture-paper/culture-paper-01.png",
  },
  "copy-paper": {
    id: "copy-paper",
    name: "Copy Paper",
    category: "culture-paper",
    tagline: "High-brightness multi-purpose office paper — jam-free, dust-free, and laser/inkjet compatible in standard A4 and A3 sizes.",
    description:
      "Copy paper — also called multi-purpose office paper, A4 copy paper, or printer paper — is the universal office-grade paper designed for reliable performance across laser printers, inkjet printers, copiers, and fax machines. High brightness (ISO 92%+) and a smooth, dust-free surface ensure sharp text, clean graphics, and minimal paper jams. Standard grammage is 70–80 gsm in A4 (210×297mm) and A3 (297×420mm) formats. Packaging: 500 sheets per ream, 5 or 10 reams per carton. This is the highest-volume globally traded paper grade — and YOUNGSUN PAPER supplies it in container loads.",
    specs: [
      "Grammage: 70 / 75 / 80 gsm",
      "Brightness: ISO 92–100%",
      "Format: A4 (210×297mm), A3 (297×420mm), Letter, Legal",
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
    certifications: ["FSC Mix", "SGS certified", "ISO 9001"],
    keywords: ["copy paper", "A4 copy paper", "office paper", "printer paper", "multi-purpose paper", "copy paper wholesale"],
    image: "/images/products/culture-paper/culture-paper-02.png",
  },
  "multi-color-bond-paper": {
    id: "multi-color-bond-paper",
    name: "Multi-Color Bond Paper",
    category: "culture-paper",
    tagline: "Practical colored bond paper in multiple colors — smooth surface, jam-free printer feeding, and reliable everyday performance.",
    description:
      "Multi-Color Bond Paper is a versatile colored bond paper available in several practical colors for everyday office, school, and creative use. It features a smooth surface that accepts ink and toner cleanly, and is engineered to feed reliably through most standard printers, copiers, and multifunction devices without jamming. The paper is thick enough to prevent ink bleed-through while remaining flexible for folding, stapling, and binding. Ideal for color-coded filing systems, flyers, notices, crafts, and general-purpose color printing where appearance matters.",
    specs: [
      "Grammage: 70–80 gsm",
      "Colors: Multiple practical colors (red, blue, green, yellow, pink, orange, etc.)",
      "Surface: Smooth, sized for inkjet and laser",
      "Format: A4 (210×297mm), Letter (216×279mm)",
      "Printer compatibility: Laser, inkjet, copier, fax",
      "Packaging: 500 sheets/ream, 5–10 reams/carton",
    ],
    applications: [
      "Color-coded office filing and document organization",
      "Flyers, notices, and announcements",
      "School and educational craft projects",
      "Restaurant menus and daily specials",
      "Church bulletins and community newsletters",
      "Event programs and signage",
    ],
    certifications: ["FSC Mix", "SGS certified", "ISO 9001"],
    keywords: ["multi-color bond paper", "colored bond paper", "color printer paper", "colored office paper", "multi-color printing paper", "color copy paper"],
    image: "/images/products/culture-paper/colored-offset-paper-product-2.png",
  },
  "assorted-color-paper": {
    id: "assorted-color-paper",
    name: "Assorted Color Paper (Mixed-Color Reams)",
    category: "culture-paper",
    tagline: "A full palette in one ream — assorted colors in a single package for creative projects, color-coding, and vibrant everyday printing.",
    description:
      "Assorted Color Paper — also called Mixed-Color Ream Paper or Rainbow Pack — packages multiple colors together in a single ream or pack. Rather than buying a full ream of each individual color, users get a curated selection of vibrant hues in one convenient package. The paper is smooth-surfaced, compatible with standard printers and copiers, and thick enough to prevent ink bleed-through. This product is especially popular in education, creative studios, offices with color-coded workflows, and craft enthusiasts who need variety without bulk commitment for each color.",
    specs: [
      "Grammage: 70–80 gsm",
      "Colors per pack: 5–10 assorted colors",
      "Surface: Smooth, sized for printer compatibility",
      "Format: A4 / Letter size",
      "Ink compatibility: Laser and inkjet",
      "Packaging: 100–500 sheets per pack, assorted colors",
    ],
    applications: [
      "Color-coding documents, folders, and records",
      "Creative crafts, scrapbooking, and DIY projects",
      "Making important notices and signs stand out",
      "School art classes and educational activities",
      "Office organization and visual management",
      "Party invitations and seasonal decorations",
    ],
    certifications: ["FSC Mix", "SGS certified", "ISO 9001"],
    keywords: ["assorted color paper", "mixed color paper", "rainbow paper pack", "multi-color ream", "colored craft paper", "color coding paper"],
    image: "/images/products/culture-paper/colored-offset-paper-product-1.png",
  },
  "letter-size-mixed-color-paper": {
    id: "letter-size-mixed-color-paper",
    name: "Letter Size Mixed Color Paper",
    category: "culture-paper",
    tagline: "Letter-sized mixed color sheets with a curated palette of soft tones — easy sorting, no bleed-through, perfect for North American office and study use.",
    description:
      "Letter Size Mixed Color Paper is specifically cut to the North American Letter format (216×279mm) and packaged with a curated mix of soft, appealing colors. Designed for everyday office and study use, the colors make it easy to sort and organize different documents by category. The paper is thick enough to prevent ink from bleeding through to the reverse side — a critical requirement for double-sided printing. Compatible with standard laser and inkjet printers, copiers, and multifunction office machines. A best-selling export SKU for customers in the United States, Canada, and Latin America.",
    specs: [
      "Grammage: 70–80 gsm",
      "Size: Letter (216×279mm / 8.5×11 inches)",
      "Colors: Soft mixed palette (pastels and brights)",
      "Surface: Smooth, printer-optimized",
      "Opacity: High — suitable for duplex printing",
      "Packaging: 500 sheets/ream, mixed colors",
      "Markets: USA, Canada, Latin America export standard",
    ],
    applications: [
      "North American office document management",
      "Student study notes and subject organization",
      "Color-coded client files and records",
      "Home office and remote work organization",
      "Church, school, and nonprofit communications",
      "Daily bulletins, memos, and interoffice notices",
    ],
    certifications: ["FSC Mix", "SGS certified", "ISO 9001"],
    keywords: ["letter size color paper", "mixed color letter paper", "8.5x11 colored paper", "US letter color paper", "North American office paper", "letter size assorted colors"],
    image: "/images/products/culture-paper/letter-size-mixed-color-paper.png",
  },

  // ========================
  // FANCY PAPER (6 sub-products)
  // ========================
  "soft-touch-paper": {
    id: "soft-touch-paper",
    name: "Soft Touch Paper",
    category: "fancy-paper",
    tagline: "Velvet-smooth tactile coated paper — the sensation of luxury that makes people stop and touch.",
    description:
      "Soft touch paper — also called velvet paper, suede-touch, or soft-feel coated paper — is a paper or board substrate coated with a water-based polyurethane or acrylic dispersion that creates a remarkably smooth, almost rubbery tactile surface. The coating transforms ordinary printed paper into a sensory experience — warm to the touch, fingerprint-resistant, and scuff-resistant. It is widely used by luxury brands for premium packaging, business cards, book covers, and high-end promotional materials where first impression is everything. Soft touch coating also deepens printed colors, giving blacks a richer, denser appearance.",
    specs: [
      "Substrate: Coated paper / Board, 120–400 gsm",
      "Coating: Water-based PU or acrylic soft-feel",
      "Touch feel: Velvet-smooth, warm, non-slip",
      "Print compatibility: Offset, UV offset, screen, foil stamping",
      "Durability: Fingerprint-resistant, scuff-resistant",
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
    certifications: ["FSC Mix", "ISO 9001"],
    keywords: ["soft touch paper", "velvet paper", "suede-touch paper", "soft-feel coated", "luxury paper", "tactile paper"],
    image: "/images/products/fancy-paper/soft-touch-paper.png",
  },
  "leather-paper": {
    id: "leather-paper",
    name: "Leather Paper",
    category: "fancy-paper",
    tagline: "Paper that looks and feels like genuine leather — animal-free, durable, premium.",
    description:
      "Leather paper — also called leatherette paper, faux-leather paper, or leather-embossed paper — is a paper or board substrate embossed with a leather-grain texture and surface-finished to replicate the look and hand-feel of natural leather. It is 100% animal-free (vegan) while delivering genuine luxury aesthetics. Widely used for book covers, diaries, premium packaging, and gift boxes. Available in a range of leather patterns (crocodile, calf, ostrich, pebble grain) and classic leather colors (black, brown, tan, burgundy, navy, dark green).",
    specs: [
      "Substrate: FBB / Grey board / Kraft board, 120–400 gsm",
      "Embossing: Leather-grain pattern (multiple textures available)",
      "Color: Classic leather tones — customizable",
      "Surface: Matte-laminated or PU-coated for durability",
      "Format: Sheets & reels",
      "Vegan: 100% animal-free material",
    ],
    applications: [
      "Book covers — diaries, journals, bibles, notebooks",
      "Premium gift boxes and jewelry boxes",
      "Wine and spirits packaging",
      "Corporate presentation folders",
      "Watch and accessory boxes",
      "Certificate and diploma holders",
    ],
    certifications: ["FSC Mix", "Vegan certified", "ISO 9001"],
    keywords: ["leather paper", "leatherette paper", "faux leather paper", "leather embossed paper", "vegan leather paper", "leather-texture board"],
    image: "/images/products/fancy-paper/leather-paper.png",
  },
  "pearlescent-paper": {
    id: "pearlescent-paper",
    name: "Pearlescent Paper",
    category: "fancy-paper",
    tagline: "Light-reflecting iridescent paper with a pearl-like shimmer — elegance that moves with the light.",
    description:
      "Pearlescent paper — also called pearl paper, iridescent paper, or mica-coated paper — is coated with a layer containing mica-based pigments that create a luminous, light-reflecting finish. The paper shifts subtly in color and brightness as the viewing angle changes, producing a sophisticated shimmer effect. Available in white pearl, gold pearl, silver pearl, and tinted pearl variants. Grammages from 120 gsm to 350 gsm. Used for wedding invitations, luxury packaging, cosmetic branding, and high-end print collateral where visual impact differentiates the brand.",
    specs: [
      "Grammage: 120 – 350 gsm",
      "Finish: Pearl / Iridescent / Shimmer",
      "Colors: White pearl, champagne, gold, silver, custom tinted",
      "Print compatibility: Offset, screen, foil, embossing, debossing",
      "Coating: Mica-based pigment layer",
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
    certifications: ["FSC Mix", "ISO 9001"],
    keywords: ["pearlescent paper", "pearl paper", "iridescent paper", "mica coated paper", "shimmer paper", "pearl cardstock"],
    image: "/images/products/fancy-paper/pearlescent-paper.png",
  },
  "embossed-paper": {
    id: "embossed-paper",
    name: "Embossed Paper",
    category: "fancy-paper",
    tagline: "Three-dimensional textured paper — raised patterns that turn packaging into a tactile brand experience.",
    description:
      "Embossed paper features a raised relief pattern mechanically pressed into the paper or board surface under heat and pressure. Unlike printed textures, embossing creates genuine three-dimensional topography that catches light, invites touch, and signals premium quality. Patterns range from classic (linen, felt, laid, canvas, woodgrain) to custom-designed brand-specific textures. Compatible with subsequent printing, foil stamping, and die-cutting processes. Used by luxury, fashion, and premium consumer brands to elevate packaging and print collateral above the ordinary.",
    specs: [
      "Substrate: Wide range, 80–400 gsm",
      "Patterns: Linen / Felt / Canvas / Woodgrain / Custom",
      "Embossing depth: Fine to deep relief",
      "Print compatibility: Post-emboss offset, screen, foil",
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
    keywords: ["embossed paper", "textured paper", "raised pattern paper", "linen embossed", "custom embossed paper", "3D paper texture"],
    image: "/images/products/fancy-paper/embossed-paper.png",
  },
  "label-paper": {
    id: "label-paper",
    name: "Label Paper",
    category: "fancy-paper",
    tagline: "Premium label and tag face stock — smooth, printable, and engineered for high-speed converting and adhesive coating.",
    description:
      "Label paper — also called label face stock or tag paper — is a high-quality paper engineered as the printable surface layer for pressure-sensitive labels, wet-glue labels, and hang tags. The paper must be strong enough to withstand high-speed label converting (die-cutting, matrix stripping, rewinding), smooth enough for fine print reproduction, and dimensionally stable under adhesive coating. Available as C1S (coated one side) for wet-glue labels and C2S (coated two sides) for premium hang tags. Grammages from 60 gsm (lightweight labels) to 250 gsm (structural hang tags).",
    specs: [
      "Grammage: 60 – 250 gsm",
      "Types: C1S (label face) / C2S (hang tag) / Metallized",
      "Finish: Gloss / Matt / Semi-gloss",
      "Strength: High tensile, low stretch for converting",
      "Format: Reels (standard widths), sheets",
      "Adhesive compatibility: Hot-melt, water-based acrylic, solvent",
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
    keywords: ["label paper", "label face stock", "tag paper", "hang tag paper", "C1S label paper", "pressure sensitive label paper"],
    image: "/images/products/fancy-paper/product-hangtag-paper.png",
  },
  "tracing-paper": {
    id: "tracing-paper",
    name: "Tracing Paper",
    category: "fancy-paper",
    tagline: "Translucent, smooth, and dimensionally stable — the paper that reveals what's beneath.",
    description:
      "Tracing paper — also called transparent paper, translucent paper, or vellum — is a highly refined, greaseproof-like paper treated to achieve a high degree of translucency (typically 50–70% light transmission). It is smooth, strong, and accepts ink, pencil, and toner cleanly without bleeding or feathering. Used for technical drawing, architectural overlay, design sketching, creative stationery, and decorative packaging. Grammages from 45 gsm (fine tracing) to 200 gsm (heavy translucent card). Acid-free archival grades are available for artists and conservators.",
    specs: [
      "Grammage: 45 – 200 gsm",
      "Translucency: 50–70% light transmission",
      "Surface: Smooth, sized for ink and pencil",
      "Strength: High tensile, tear-resistant",
      "Format: Sheets (standard & custom), rolls",
      "Acid-free: pH neutral, archival grades available",
    ],
    applications: [
      "Architectural and engineering tracing overlays",
      "Fashion design and pattern-making",
      "Creative stationery — envelopes, inserts, overlays",
      "Decorative packaging windows and wraps",
      "Art and illustration — marker and ink drawing",
      "Wedding invitation overlays and belly bands",
    ],
    certifications: ["FSC Mix", "ISO 9001"],
    keywords: ["tracing paper", "translucent paper", "transparent paper", "vellum paper", "architectural tracing", "design tracing paper"],
    image: "/images/products/fancy-paper/product-tracing-paper.png",
  },

  // ========================
  // FOOD PACKAGING PAPER (3 sub-products)
  // ========================
  "cup-paper": {
    id: "cup-paper",
    name: "Cup Paper",
    category: "food-packaging",
    tagline: "PE-coated cup stock for hot and cold drink cups — food-safe, rigid, and converting-optimized.",
    description:
      "Cup paper is a PE-coated paper or board specifically engineered for high-speed cup-forming machines. The substrate — typically bleached kraft or white board — is extrusion-coated with food-grade PE on one side (for cold cups) or both sides (for hot cups requiring internal liquid barrier and external condensation resistance). The paper must have excellent stiffness, ply-bond strength, and heat-seal performance. Available in reel form, slit to the exact width required by cup-forming machinery. Cup paper is the foundation of the global disposable cup industry — from coffee chains to stadium vendors.",
    specs: [
      "Substrate: Bleached kraft / White board, 180–350 gsm",
      "PE coating: 1PE (cold cup) or 2PE (hot cup), 15–25 gsm per side",
      "Heat-seal temperature: 120–150°C",
      "Water resistance: ≥ 24 hours at 95°C (hot cup grade)",
      "Format: Reels, slit to converting width",
      "Food-grade: FDA 21 CFR 176.170, EU 1935/2004, GB 4806.8",
    ],
    applications: [
      "Hot drink cups — coffee, tea, hot chocolate",
      "Cold drink cups — iced coffee, soda, smoothies",
      "Soup and food containers",
      "Ice cream cups and tubs",
      "Portion cups for sauces and condiments",
      "Sampling cups for promotions and events",
    ],
    certifications: ["FDA-compliant", "EU 1935/2004", "FSC Mix", "ISO 9001"],
    keywords: ["cup paper", "cup stock", "paper cup paper", "PE coated cup board", "hot cup paper", "cold cup stock"],
    image: "/images/products/food-packaging/food-packaging-paper-01.png",
  },
  "greaseproof-paper": {
    id: "greaseproof-paper",
    name: "Greaseproof Paper",
    category: "food-packaging",
    tagline: "High-density, oil-resistant paper for baking, wrapping, and food-contact applications — no coating, just pure fiber engineering.",
    description:
      "Greaseproof paper achieves its oil and fat resistance through intensive mechanical refining (beating) of the pulp — not through chemical coating. The prolonged refining process fibrillates the cellulose fibers to close the paper's pore structure, creating a physical barrier that repels grease and oil while remaining breathable. It is 100% natural fiber, free from fluorochemicals (PFAS-free), and suitable for direct food contact. Used for baking, food wrapping, sandwich wraps, butter wraps, and interleaving. Grammages from 28 gsm (lightweight wrapping) to 80 gsm (baking sheets).",
    specs: [
      "Grammage: 28 – 80 gsm",
      "Grease resistance: Kit rating 8–12 (TAPPI T559)",
      "Barrier mechanism: Mechanical (fiber densification), no chemical coating",
      "PFAS-free: Yes, no fluorochemicals added",
      "Heat resistance: Oven-safe up to 220°C",
      "Format: Sheets & reels",
    ],
    applications: [
      "Baking paper — lining baking trays and cake tins",
      "Sandwich and burger wrap paper",
      "Butter, margarine, and cheese wrapping",
      "Fast food basket liners and tray liners",
      "Interleaving for sliced meats and cheeses",
      "Fish and chip wrapping (traditional chippy paper)",
    ],
    certifications: ["FDA 21 CFR 176.170", "EU 1935/2004", "PFAS-free certified", "FSC Mix"],
    keywords: ["greaseproof paper", "grease resistant paper", "baking paper", "food wrap paper", "oil proof paper", "PFAS-free food paper"],
    image: "/images/products/food-packaging/product-greaseproof-paper.png",
  },
  "silicone-coated-paper": {
    id: "silicone-coated-paper",
    name: "Silicone Coated Paper",
    category: "food-packaging",
    tagline: "Premium release liner and non-stick baking paper — silicone-coated for clean release every time.",
    description:
      "Silicone coated paper — also called silicone release paper, non-stick baking paper, or parchment paper — is a paper substrate coated with a thin layer of food-grade silicone on one or both sides. The silicone creates a non-stick, heat-resistant surface that food cannot adhere to, making it the essential material for baking, roasting, and cooking. In industrial applications, silicone coated paper serves as a release liner for self-adhesive labels, tapes, and hygiene products. Available in bleached (white) and unbleached (natural brown) variants. Heat-resistant to 230°C in continuous use and up to 250°C for short durations.",
    specs: [
      "Substrate: Bleached kraft / Unbleached kraft, 40–120 gsm",
      "Silicone coating: One side (1S) or two sides (2S)",
      "Release force: Adjustable — easy, medium, or tight release",
      "Heat resistance: 230°C continuous, 250°C short-term",
      "Format: Sheets & reels",
      "Food-grade: FDA 21 CFR 175.300, EU 1935/2004",
    ],
    applications: [
      "Baking paper — cookie sheets, cake pans, roasting trays",
      "Release liner — pressure-sensitive adhesive labels and tapes",
      "Hygiene industry — diaper and sanitary napkin release paper",
      "Non-stick food wrapping and interleaving",
      "Industrial molding release liner",
      "Silicone-coated kraft for bakery and patisserie",
    ],
    certifications: ["FDA-compliant", "EU 1935/2004", "FSC Mix", "ISO 9001"],
    keywords: ["silicone coated paper", "silicone release paper", "non-stick paper", "parchment paper", "baking parchment", "release liner paper"],
    image: "/images/products/food-packaging/food-packaging-paper-02.png",
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
    image: "/images/processing/processing-embossing.png",
  },
  {
    id: "die-cutting",
    title: "Die Cutting & Punching",
    icon: "✂️",
    description:
      "Precision die-cutting and punching convert paper and board into finished shapes — carton blanks, labels, hang tags, envelopes, and custom profiles. We use flat-bed and rotary die-cutting lines capable of handling grammages from 80 gsm to 800 gsm. Steel-rule dies are fabricated in-house for fast turnaround on custom shapes. Tight registration tolerances ensure consistent results across production runs.",
    highlights: ["Flat-bed & rotary die-cutting", "Steel-rule die fabrication", "Grammage range: 80–800 gsm"],
    image: "/images/processing/processing-die-cutting-punching.png",
  },
  {
    id: "printing",
    title: "Printing",
    icon: "🖨️",
    description:
      "Offset, flexo, and screen printing services for paper and board products — from single-color branding to full-color process printing. We print on a wide range of substrates including coated paper, uncoated board, kraft paper, and specialty fancy papers. Our press operators ensure color consistency, registration accuracy, and fast drying. Available for product face stock, packaging, labels, and promotional materials.",
    highlights: ["Offset / Flexo / Screen printing", "Up to 6-color + coating", "Color management with Delta E ≤ 2"],
    image: "/images/processing/processing-printing.png",
  },
  {
    id: "slitting",
    title: "Slitting & Sheeting",
    icon: "📏",
    description:
      "High-precision slitting and sheeting convert jumbo reels into finished rolls or sheets at exact widths and lengths. Our slitter-rewinders handle web widths up to 2,500 mm with ±0.5 mm width tolerance. Sheeting lines produce cut-size sheets (A4, A3, SRA3, custom) with square edges and accurate count. Essential for converting mill reels into customer-ready formats.",
    highlights: ["Web width up to 2,500 mm", "Width tolerance ±0.5 mm", "Sheets ream-packed or bulk-packed"],
    image: "/images/processing/processing-slitting-cutting.png",
  },
  {
    id: "lamination",
    title: "Lamination & Coating",
    icon: "🛡️",
    description:
      "Lamination and coating add functional or decorative layers to paper and board — gloss or matt film lamination, soft-touch coating, spot UV varnish, aqueous coating, and PE extrusion coating. These processes enhance durability, moisture resistance, tactile appeal, and visual impact. We offer both thermal and wet lamination for different application requirements.",
    highlights: ["Gloss / Matt / Soft-touch lamination", "PE extrusion coating", "Spot UV & aqueous coating"],
    image: "/images/processing/processing-lamination-finishing.png",
  },
  {
    id: "export-packing",
    title: "Export Packing",
    icon: "📦",
    description:
      "Export-grade packing ensures your paper products arrive in perfect condition — whether shipped by container, air freight, or courier. Standard packing includes moisture-barrier wrapping, edge protectors, palletization, and strapping. Custom labeling, barcoding, and packing lists are prepared to your destination country's requirements. We handle fumigation certificates and ISPM 15 compliance for wooden pallets.",
    highlights: ["Moisture-barrier wrapping", "ISPM 15 pallets", "Custom labeling & barcoding"],
    image: "/images/processing/processing-export-packing.png",
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
    "YOUNGSUN PAPER — Dongguan Banyan Material Co., Ltd. — a trusted paper and board supplier since 2002. 20,000m² workshop, 50,000 tons warehouse stock, 36,000+ tons exported annually. FSC and SGS certified. Four product categories. Reliable delivery worldwide.",
  ctaPrimary: { label: "Explore Products", href: "#products" },
  ctaSecondary: { label: "Get a Quote", href: "#contact" },
};

// ============================================================
// ABOUT COMPANY
// ============================================================

export const aboutCompany = {
  title: "Your Paper Supply Partner Since 2002",
  paragraphs: [
    "YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) is headquartered in Dongguan City, Guangdong Province — just 50km from Shenzhen port. Our 20,000m² workshop houses 2 grey board machines and 2 black paper machines, operated by a team of 220+ skilled workers. With a monthly production capacity of 20,000 tons and 50,000 tons of warehouse stock, we ensure fast and reliable delivery to clients worldwide.",
    "We partner with China's premier paper mills — including APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, and IPSUN — to source the full spectrum of printing, packaging, and specialty paper grades. Our five sales teams (50+ specialists) serve customers across 60+ countries, exporting 36,000+ tons annually. Every product is FSC and SGS certified. Custom size, weight, and labeling available with free samples.",
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
    title: "Certified Quality — FSC & SGS",
    icon: "✅",
    description:
      "All products are FSC (Forest Stewardship Council) and SGS certified. Every shipment is inspected for grammage, brightness, moisture, caliper, and surface quality against agreed specifications. Consistent quality, batch after batch.",
  },
  {
    title: "Strong Production Capacity",
    icon: "🏭",
    description:
      "Our 20,000m² workshop runs 2 grey board machines and 2 black paper machines, delivering 20,000 tons monthly. Partner mills — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, IPSUN — provide additional capacity and grade coverage.",
  },
  {
    title: "Fast & Timely Delivery",
    icon: "🚢",
    description:
      "50,000 tons of permanent warehouse stock enables rapid dispatch. Located 50km from Shenzhen port, we load containers efficiently. Five sales teams (50+ specialists) provide proactive delivery tracking and after-sales support.",
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
      "36,000+ tons exported annually to 60+ countries. We handle FSC chain-of-custody, certificates of origin, fumigation, packing lists, and bills of lading — full documentation for seamless customs clearance at any destination port.",
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
    { icon: "🌳", title: "Certified Sources", description: "Primary supply chain is FSC or PEFC certified. Chain-of-custody documentation provided with every order." },
    { icon: "♻️", title: "Recycled Content", description: "Post-consumer and post-industrial recycled fiber options available across all four product categories." },
    { icon: "🧪", title: "PFAS-Free", description: "All food-contact papers are PFAS-free — grease resistance is achieved through fiber engineering, not chemical additives." },
    { icon: "⚡", title: "Low-Carbon Mills", description: "Partnering with mills that use green energy, biogas recovery, and closed-loop water systems to minimize environmental footprint." },
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
    question: "What paper products does YOUNGSUN PAPER supply?",
    answer:
      "YOUNGSUN PAPER supplies four categories of paper and board: Package Board (grey board, black paper, kraft paper, C1S ivory board, duplex board, C2S art board, PE coated paper, color card, folding box board), Culture Paper (woodfree paper, offset paper, copy paper, color offset paper, LWC paper, NCR paper), Fancy Paper (soft touch paper, leather paper, pearlescent paper, embossed paper, label paper, tracing paper), and Food Packaging Paper (cup paper, greaseproof paper, silicone coated paper). All products are FSC and SGS certified.",
  },
  {
    question: "Where is YOUNGSUN PAPER located and how fast can you deliver?",
    answer:
      "YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) is headquartered in Dalang Town, Dongguan City, Guangdong Province, China — approximately 50 km from Shenzhen port. We maintain 50,000 tons of permanent warehouse stock for rapid dispatch. Container loading is typically completed within 7–14 days of order confirmation, depending on product specifications and volume.",
  },
  {
    question: "What certifications do your paper products have?",
    answer:
      "All YOUNGSUN PAPER products are FSC (Forest Stewardship Council) certified for responsible forestry and SGS certified for quality assurance. Food-contact grades are FDA and EU 1935/2004 compliant. PFAS-free certification is available for all food packaging papers. Chain-of-custody documentation, certificates of origin, and mill test certificates are provided with every shipment.",
  },
  {
    question: "Can you customize paper size, weight, or packaging?",
    answer:
      "Yes. YOUNGSUN PAPER provides custom size (slitting and sheeting to exact dimensions), custom weight (grammage within available range), and custom labeling and packaging solutions. Free samples are provided before bulk order confirmation. Our converting partners offer embossing, die-cutting, printing, lamination, and export-grade packing as value-added services.",
  },
  {
    question: "What is your minimum order quantity (MOQ) and how do I get a quote?",
    answer:
      "Minimum order quantities vary by product grade — typically one 20-foot container (approximately 20–25 tons depending on paper grammage) for export orders. Domestic and sample orders can be smaller. For a quotation, contact us at Alice@yspaper.com or WhatsApp +86 13713459656 with your product specifications, grammage, size, quantity, and delivery port. We respond within 24 hours.",
  },
  {
    question: "Do you supply food-grade paper for direct food contact?",
    answer:
      "Yes. Our Food Packaging Paper category includes cup paper (PE-coated for hot and cold cups), greaseproof paper (PFAS-free, Kit rating 8–12), and silicone coated paper (heat-resistant to 230°C). All food-contact grades are FDA 21 CFR 176.170 and EU 1935/2004 compliant. Certification documentation is provided with every food-grade shipment.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "YOUNGSUN PAPER exports to 60+ countries across six continents. Our largest markets are in Asia (25+ countries), Europe (18+ countries), and the Americas (12+ countries). We also serve growing markets in Africa, the Middle East, and Oceania. We handle all export documentation — certificates of origin, fumigation certificates, FSC chain-of-custody, packing lists, and bills of lading.",
  },
  {
    question: "What paper mills do you partner with?",
    answer:
      "We maintain strategic sourcing partnerships with China's leading paper mills including APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, and IPSUN. Our own facility houses 2 grey board machines and 2 black paper machines with a monthly production capacity of 20,000 tons. This dual-model (in-house production + mill partnerships) ensures competitive pricing and supply chain resilience.",
  },
];

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

export type PrintServiceCategory =
  | "All"
  | "Packaging & Structural"
  | "Editorial & Corporate"
  | "Brand Print & Collateral"
  | "Large-Format & Pre-Press";

export interface PrintServiceItem {
  code: string;
  id: string;
  title: string;
  category: Exclude<PrintServiceCategory, "All">;
  designLeadTerm: string;
  summary: string;
  designTerms: string[];
  deliverables: string[];
  substrateSpec: string;
  colorFinishSpec: string;
  masterFileSpec: string;
}

export interface PrintFinishingItem {
  code: string;
  title: string;
  techSpec: string;
  bestFor: string;
  designRule: string;
}

export interface PrepressMasterSpec {
  label: string;
  value: string;
  detail: string;
}

export const PRINT_SERVICE_CATEGORIES: PrintServiceCategory[] = [
  "All",
  "Packaging & Structural",
  "Editorial & Corporate",
  "Brand Print & Collateral",
  "Large-Format & Pre-Press",
];

export const PRINT_PACKAGING_SERVICES: PrintServiceItem[] = [
  {
    code: "01",
    id: "structural-folding-cartons",
    title: "Structural Packaging & Folding Cartons",
    category: "Packaging & Structural",
    designLeadTerm: "CAD DIE-LINE · FEFCO / ECMA",
    summary:
      "Production-calibrated folding cartons, sleeves, and corrugated mailers engineered with exact crease allowances, glue-flap ink knockouts, and grain-aligned structural panels.",
    designTerms: [
      "CAD Die-Lines (FEFCO / ECMA)",
      "Tuck-End & Crash-Lock",
      "Cut / Crease / Perf Layers",
      "Glue-Flap Knockout",
      "3mm Bleed & Grain Direction",
    ],
    deliverables: [
      "Retail cartons, cosmetic boxes & belly-band sleeves",
      "E-commerce corrugated mailers with inside-flood print",
      "Die-cut window cutouts, hang-tabs & tear-strips",
    ],
    substrateSpec: "300–400 GSM SBS / Kraft",
    colorFinishSpec: "CMYK + PMS Spot + Varnish",
    masterFileSpec: "CAD .DXF/.AI + PDF/X-4",
  },
  {
    code: "02",
    id: "luxury-rigid-boxes",
    title: "Luxury Rigid Boxes, Gift Sets & Unboxing Systems",
    category: "Packaging & Structural",
    designLeadTerm: "GREYBOARD · FOIL & DEBOSS",
    summary:
      "Museum-grade set-up rigid boxes, magnetic closures, and precision molded inserts crafted for tactile unboxing weight, metallic hot-foil clarity, and sharp sculptural deboss relief.",
    designTerms: [
      "1200–1800 GSM Greyboard Wrap",
      "Magnetic Flap & Shoulder-Neck",
      "Custom EVA / Molded Pulp Inserts",
      "Hot-Foil Stamping",
      "Blind Deboss & Multi-Level Emboss",
    ],
    deliverables: [
      "Collapsible & shoulder-neck luxury gift boxes",
      "Slide-drawer boxes, velvet/pulp tray cavities & ribbons",
      "Influencer & VIP PR seed unboxing kits",
    ],
    substrateSpec: "1500 GSM Rigid + Linen Wrap",
    colorFinishSpec: "Foil + Emboss Overprint Plates",
    masterFileSpec: "Separate Foil/Deboss Vector Masks",
  },
  {
    code: "03",
    id: "labels-pouches-regulatory",
    title: "Product Labels, Pouches, Bottles & Regulatory Systems",
    category: "Packaging & Structural",
    designLeadTerm: "ROLL-FEED · BARCODE · FDA/INCI",
    summary:
      "Curved-surface bottle labels, stand-up Mylar pouches, and multi-SKU retail ranges engineered with white-ink underbases, tight flexo trapping, and verified regulatory micro-type.",
    designTerms: [
      "Roll-Feed Unwind Direction",
      "0.15pt Flexo Trapping",
      "White-Ink Underbase (Clear/Foil)",
      "FDA / EU INCI Micro-Typography",
      "GS1 EAN-13 / UPC-A Vector Barcodes",
    ],
    deliverables: [
      "Wrap-around bottle, dropper & cosmetic jar labels",
      "Stand-up coffee, supplement & food barrier pouches",
      "Tamper-evident neck seals & multi-language SKU matrices",
    ],
    substrateSpec: "BOPP / Textured Estate Stock",
    colorFinishSpec: "CMYK + White Ink + Tactile Varnish",
    masterFileSpec: "100% K Barcode + PDF/X-4",
  },
  {
    code: "04",
    id: "retail-pos-hangtags-3d",
    title: "Retail POS Displays, Hang Tags & 3D Packshots",
    category: "Packaging & Structural",
    designLeadTerm: "CDU / FSDU · 3D PACKSHOTS",
    summary:
      "Shelf-commanding retail point-of-sale displays, garment swing tags, and photorealistic 3D packaging mockups built directly from true factory CAD die-line geometry.",
    designTerms: [
      "CDU / FSDU Structural Displays",
      "Shelf-Ready Packaging (SRP)",
      "Die-Cut Header & Wobbler Cards",
      "Eyelet & String Hang-Tags",
      "Photorealistic 3D Packshots",
    ],
    deliverables: [
      "Countertop display units (CDU) & floor stands (FSDU)",
      "Custom garment swing tags, weave labels & belly bands",
      "Lighting-calibrated 3D renders for Amazon, Shopify & decks",
    ],
    substrateSpec: "E-Flute / B-Flute Corrugated",
    colorFinishSpec: "Pantone Retail Shelf Parity",
    masterFileSpec: "3D Renders + Structural CAD",
  },
  {
    code: "05",
    id: "annual-reports-esg-books",
    title: "Annual Reports, ESG Books & Institutional Publications",
    category: "Editorial & Corporate",
    designLeadTerm: "SWISS GRID · SMYTH-SEWN",
    summary:
      "Boardroom-caliber editorial publications built on mathematical Swiss baseline grids, precision hairline financial tables, and uncoated paper ICC color profiles.",
    designTerms: [
      "Swiss Modular & Baseline Grids",
      "Master Pages & Paragraph Styles",
      "Hairline Financial Tables",
      "Smyth-Sewn / PUR Perfect Binding",
      "Spine Width Calculation",
    ],
    deliverables: [
      "100+ page corporate annual reports & ESG disclosures",
      "Shareholder prospectuses & impact whitepaper books",
      "Synchronized WCAG / PDF/UA tagged interactive digital editions",
    ],
    substrateSpec: "120–170 GSM Archival Uncoated",
    colorFinishSpec: "ISO Uncoated ICC Calibration",
    masterFileSpec: "Packaged INDD + PDF/X-4 & PDF/UA",
  },
  {
    code: "06",
    id: "brochures-lookbooks-catalogs",
    title: "Corporate Brochures, Lookbooks & Product Catalogs",
    category: "Editorial & Corporate",
    designLeadTerm: "GATEFOLD · SADDLE-STITCH CREEP",
    summary:
      "High-tactile company profiles, seasonal fashion and architectural lookbooks, and complex multi-SKU catalogs set with rich black depth and exact fold panel compensation.",
    designTerms: [
      "Gatefold / Tri-Fold / Z-Fold Math",
      "2mm Short-Panel Compensation",
      "Saddle-Stitch Creep Allowance",
      "Rich Black (C40 M30 Y30 K100)",
      "Soft-Touch Matte Lamination",
    ],
    deliverables: [
      "Executive capability profiles, tri-folds & gatefold Pitch Books",
      "Multi-column wholesale catalogs & luxury hospitality menus",
      "Paginated printer spreads with creep & crossover alignment",
    ],
    substrateSpec: "150–300 GSM Silk / Matte",
    colorFinishSpec: "Rich Black + Spot UV Overprint",
    masterFileSpec: "Imposition & Pagination Ready",
  },
  {
    code: "07",
    id: "books-magazines-monographs",
    title: "Books, Magazines, Monographs & Hardbound Covers",
    category: "Editorial & Corporate",
    designLeadTerm: "CASEWRAP HINGE · OPTICAL KERN",
    summary:
      "Collectible coffee-table monographs, independent magazines, and exhibition catalogues typeset for long-form reading rhythm, dust-jacket turn-ins, and spine precision.",
    designTerms: [
      "Dust-Jacket & Casewrap Hinge Math",
      "Optical Kerning & Leading",
      "Widows / Orphans & Hyphenation",
      "Drop Caps, Folios & Running Heads",
      "ISBN-13 Barcode Block",
    ],
    deliverables: [
      "Full interior typesetting, chapter openers & image sequencing",
      "Hardbound cloth casewrap covers with foil spine stamping",
      "Offset signature prep + IngramSpark / POD cover templates",
    ],
    substrateSpec: "Hardbound Casewrap / French-Fold",
    colorFinishSpec: "300+ DPI CMYK Plate Retouching",
    masterFileSpec: "Offset & Print-on-Demand Ready",
  },
  {
    code: "08",
    id: "luxury-stationery-letterpress",
    title: "Luxury Stationery Suites & Letterpress Systems",
    category: "Brand Print & Collateral",
    designLeadTerm: "600GSM DUPLEX · EDGE PAINT",
    summary:
      "Architectural C-suite stationery crafted for deep letterpress bite, gilded Pantone edge painting, and hairline vector precision across heavy duplexed cotton stocks.",
    designTerms: [
      "Duplex / Triplex 600–800 GSM Cotton",
      "Gilded & Pantone Edge Painting",
      "Letterpress Deep Impression",
      "Blind Emboss & Metallic Foil",
      "Die-Cut Pocket Folders",
    ],
    deliverables: [
      "Duplexed letterpress business cards & executive monographs",
      "Watermark letterheads, C4/DL envelopes & compliment slips",
      "Die-cut presentation folders with concealed card slots & certificates",
    ],
    substrateSpec: "400–700 GSM Cotton / Fedrigoni",
    colorFinishSpec: "PMS Spot + Foil + Edge Paint",
    masterFileSpec: "Vector Outline Press Plates",
  },
  {
    code: "09",
    id: "direct-mail-invitations-inserts",
    title: "Direct Mail, Event Invitations & Unboxing Inserts",
    category: "Brand Print & Collateral",
    designLeadTerm: "VDP VARIABLE · POSTAL SPEC",
    summary:
      "Conversion-engineered print collateral ranging from USPS/Royal Mail compliant direct mailers to bespoke vellum-wrapped gala invitations and unboxing loyalty cards.",
    designTerms: [
      "Variable Data Printing (VDP)",
      "Postal Indicia & Clear-Zone Rules",
      "Perforation & Tear-Off Score Lines",
      "Vellum Overlay & Wax-Seal Inserts",
      "Spot Gloss Varnish",
    ],
    deliverables: [
      "High-response postcards, flyers & perforated coupon mailers",
      "VIP conference & luxury gala invitation suites with belly bands",
      "Branded thank-you cards, warranty guides & QR review inserts",
    ],
    substrateSpec: "250–350 GSM Textured / Coated",
    colorFinishSpec: "CMYK + Spot UV Varnish",
    masterFileSpec: "Print + Campaign Digital Parity",
  },
  {
    code: "10",
    id: "print-advertising-media-kits",
    title: "Print Advertising, Spreads & Editorial Media Kits",
    category: "Brand Print & Collateral",
    designLeadTerm: "TAC ≤ 300% · SWOP / FOGRA39",
    summary:
      "Magazine double-page spreads, newspaper placements, and corporate press kits calibrated strictly to publication mechanical specs, gutter safety, and ink density ceilings.",
    designTerms: [
      "Mechanical Live-Area & Trim Specs",
      "12–18mm Gutter Safety Margins",
      "Total Area Coverage (TAC ≤ 300%)",
      "SWOP / FOGRA39 Color Profiles",
      "Double-Page Spread (DPS) Alignment",
    ],
    deliverables: [
      "Full-page & double-page magazine spread campaigns",
      "Broadsheet / tabloid newspaper display ads & inserts",
      "Physical press kits, sell sheets & media briefing binders",
    ],
    substrateSpec: "Publication-Specific ICC Spec",
    colorFinishSpec: "TAC Ink-Limit Verified Profiles",
    masterFileSpec: "PDF/X-1a & PDF/X-4 Masters",
  },
  {
    code: "11",
    id: "trade-show-booths-environmental",
    title: "Trade Show Booths, Exhibition Walls & Environmental Signage",
    category: "Large-Format & Pre-Press",
    designLeadTerm: "1:10 VECTOR · LARGE-FORMAT RIP",
    summary:
      "Commanding trade exhibition environments, Tension-fabric walls, retail window vinyls, and architectural wayfinding scaled mathematically for razor-sharp close and distance viewing.",
    designTerms: [
      "1:10 / 1:5 True-Scale Vector Scaling",
      "Viewing-Distance Type Hierarchy",
      "Seam, Grommet & Pole-Pocket Bleed",
      "Pantone Vinyl & Fabric Matching",
      "Large-Format RIP Tiling",
    ],
    deliverables: [
      "Modular 10×20ft trade-show booths, SEG walls & reception counters",
      "Retractable pull-up banners, step-and-repeat walls & flags",
      "Wayfinding signage, storefront vinyls, vehicle wraps & OOH billboards",
    ],
    substrateSpec: "Tension Fabric / PVC / Dibond",
    colorFinishSpec: "Large-Format CMYK + PMS Match",
    masterFileSpec: "100% Vector + Tiled Print PDFs",
  },
  {
    code: "12",
    id: "prepress-auditing-vendor-liaison",
    title: "Pre-Press Auditing, Color Proofing & Vendor Liaison",
    category: "Large-Format & Pre-Press",
    designLeadTerm: "ACROBAT PREFLIGHT · WET PROOF",
    summary:
      "Forensic pre-press file rescue, overprint/knockout auditing, multi-country converter localization, and direct offset/foil vendor sign-off before plates are ever burned.",
    designTerms: [
      "Acrobat Preflight Verification",
      "Overprint vs. Knockout Audit",
      "Ink Trapping & Font Outlining",
      "Contract Cromalin / Wet Proof Review",
      "On-Press Color Supervision",
    ],
    deliverables: [
      "Full preflight cleanup of printer-rejected artwork & native files",
      "Multi-region converter spec porting (DE / UK / US / AU / CA)",
      "Direct technical correspondence with commercial printers & converters",
    ],
    substrateSpec: "Zero-Error Preflight Pass",
    colorFinishSpec: "FOGRA39 / GRACoL / Uncoated",
    masterFileSpec: "Zero Press Errata Guarantee",
  },
];

export const PRINT_FINISHING_DECK: PrintFinishingItem[] = [
  {
    code: "FIN // 01",
    title: "Hot-Foil Stamping (PMS 871 C Gold)",
    techSpec: "Separate 100% K Vector Spot Layer · Overprint ON · Min 0.25mm Stroke",
    bestFor: "Luxury packaging crests, book spines, executive stationery",
    designRule: "Knock out CMYK backgrounds only on textured cotton; leave trap margins cleanly aligned.",
  },
  {
    code: "FIN // 02",
    title: "Blind Deboss & Multi-Level Emboss",
    techSpec: "Dedicated Brass Die Vector Plate · 0.4–0.8mm Relief Depth · Min 400 GSM",
    bestFor: "Monograms on heavy cotton cards, rigid box lids, leatherette wraps",
    designRule: "Avoid duplex registration conflicts when deep impression hits reverse-side typography.",
  },
  {
    code: "FIN // 03",
    title: "Raised Scodix & Spot UV Overprint",
    techSpec: "100% Spot_UV Plate Over Velvet Matte · 1.5mm Safe Margin From Creases",
    bestFor: "Catalog covers, structural carton accents, tactile packaging photography",
    designRule: "Never bridge high-build UV across fold scores—it cracks cleanly along crease rules.",
  },
  {
    code: "FIN // 04",
    title: "Soft-Touch Matte & Anti-Scuff BOPP",
    techSpec: "Velvet Tactile Film · Compensates Rich Black (C40 M30 Y30 K100) Shift",
    bestFor: "Cosmetic folding cartons, rigid sleeves, dark editorial covers",
    designRule: "Dark inks flatten slightly beneath matte velvet film—calibrate curve gain pre-press.",
  },
  {
    code: "FIN // 05",
    title: "Letterpress & Pantone Edge Painting",
    techSpec: "600–800 GSM 100% Cotton Duplex · Deep Platen Bite + Sealed Edge Foil/Ink",
    bestFor: "Boutique business cards, VIP invitations, numbered certificates",
    designRule: "All ink runs solid PMS spot mixed on press—zero CMYK halftone dots.",
  },
  {
    code: "FIN // 06",
    title: "White-Ink Underbase & Metallic Ink",
    techSpec: "Spot_White Plate (-0.15pt Choke Under CMYK) on Clear, Kraft & Foil Stock",
    bestFor: "Apothecary amber bottles, silver BOPP labels, raw kraft cartons",
    designRule: "Choke white plate 0.15pt inward so zero white halo peeks past dark graphic edges.",
  },
];

export const PREPRESS_MASTER_SPECS: PrepressMasterSpec[] = [
  {
    label: "Color Profiles",
    value: "CMYK + PMS",
    detail: "FOGRA39 · GRACoL · ISO Uncoated",
  },
  {
    label: "Bleed & Trim",
    value: "3mm / 0.125\"",
    detail: "5mm Internal Safe Margin + Crop Marks",
  },
  {
    label: "Image & Vectors",
    value: "300–600 DPI",
    detail: "1200 DPI Line-Art · Outlined Fonts",
  },
  {
    label: "Ink Limit & Traps",
    value: "TAC ≤ 300%",
    detail: "0.15pt Trapping · K100 Overprint",
  },
  {
    label: "Final Delivery",
    value: "PDF/X-4 Master",
    detail: "Packaged INDD / AI + CAD Die-Lines",
  },
];

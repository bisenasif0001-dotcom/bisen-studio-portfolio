export type GraphicCategoryIconKey =
  | "pen-tool"
  | "megaphone"
  | "printer"
  | "package"
  | "presentation"
  | "shopping-bag"
  | "flag"
  | "book-open"
  | "film"
  | "sparkles";

export interface GraphicDesignService {
  slug: string;
  title: string;
  shortSummary: string;
  heroSubtitle: string;
  designTerms: string[];
  deliverables: string[];
  turnaround: string;
  nativeFormats: string;
  colorOrOutputSpec: string;
}

export interface GraphicDesignCategory {
  number: string;
  slug: string;
  menuTitle: string;
  fullTitle: string;
  menuDesc: string;
  iconKey: GraphicCategoryIconKey;
  heroHeadline: string;
  heroAccent: string;
  heroSummary: string;
  designTerms: string[];
  relatedCaseSlugs: string[];
  services: GraphicDesignService[];
}

export const GRAPHIC_DESIGN_CATEGORIES: GraphicDesignCategory[] = [
  {
    number: "01",
    slug: "brand-identity",
    menuTitle: "Brand Identity & Logo",
    fullTitle: "Brand Identity & Logo Design",
    menuDesc: "Logos, brand guidelines, stationery",
    iconKey: "pen-tool",
    heroHeadline: "Distinctive Identities & Marks",
    heroAccent: "Engineered to Endure.",
    heroSummary:
      "Golden-ratio logotypes, dual screen-to-print brand manuals, and executive stationery suites crafted for instant enterprise credibility across US, UK, EU, AU, and CA markets.",
    designTerms: [
      "φ 1.618 Golden Ratio",
      "Optical Kerning",
      "RGB ↔ CMYK / PMS",
      "2× Clear-Space Grid",
    ],
    relatedCaseSlugs: [
      "iba-aesthetics-brand-identity",
      "logofolio-vol-01-brand-marks",
    ],
    services: [
      {
        slug: "logo-design",
        title: "Custom Logo Design",
        shortSummary:
          "Mathematical Bezier trademarks built to scale cleanly from 16px favicons to metallic foil stamps.",
        heroSubtitle:
          "Zero templates or auto-traced icons—every wordmark, monogram, and geometric symbol is constructed on optical proportions for global trademark readiness.",
        designTerms: [
          "φ 1.618 Golden Ratio",
          "Optical Kerning",
          "Monochrome & Reverse Locks",
          "16px Favicon Scaling",
        ],
        deliverables: [
          "3 distinct strategic concepts explored with rationale",
          "Primary horizontal, stacked monogram & minimal mark lockups",
          "Master vector files (.AI, .EPS, clean .SVG) + Retina PNGs",
          "Clear-space ratio rules & minimum size specification sheet",
        ],
        turnaround: "5–7 Business Days",
        nativeFormats: "AI · EPS · SVG · PDF",
        colorOrOutputSpec: "sRGB + Pantone PMS + K100",
      },
      {
        slug: "brand-identity-design",
        title: "Brand Identity Design",
        shortSummary:
          "Cohesive visual worlds uniting logo architecture, typography pairings, color tokens, and art direction.",
        heroSubtitle:
          "Complete visual identity systems built for ambitious startups and established companies launching seamlessly across web, SaaS, and physical print.",
        designTerms: [
          "Visual Semiotics",
          "Type Scale 1.250",
          "Dual sRGB / PMS Palette",
          "Art-Direction System",
        ],
        deliverables: [
          "Primary & secondary logo suite with geometric grid construction",
          "Curated display & body font hierarchy across screen and ink",
          "Complete color matrix (HEX, RGB, CMYK & Pantone Coated/Uncoated)",
          "Social avatars, patterns, iconography cues & photography tone",
        ],
        turnaround: "2–3 Weeks",
        nativeFormats: "Figma · AI · INDD · PDF",
        colorOrOutputSpec: "Screen HEX + FOGRA39 / PMS",
      },
      {
        slug: "brand-guidelines",
        title: "Brand Guidelines",
        shortSummary:
          "Self-enforcing digital and print identity manuals defining grids, usage rules, and vendor standards.",
        heroSubtitle:
          "Turn internal designers, agencies, and commercial printers into consistent stewards of your visual language with a clear, zero-ambiguity brand bible.",
        designTerms: [
          "Swiss Modular Grid",
          "Usage Do / Don't Matrix",
          "Swatch Tolerance Rules",
          "Layout Safe Zones",
        ],
        deliverables: [
          "Multi-chapter interactive Figma + print-ready PDF manual",
          "Logo spacing, contrast minimum, and co-branding lockup rules",
          "Exact typography styles, tracking, leading & table hierarchy",
          "Press-ready ink calibration notes for packaging & external vendors",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "Figma · InDesign · PDF/X-4",
        colorOrOutputSpec: "Dual Digital + Offset Spec",
      },
      {
        slug: "business-card-stationery",
        title: "Business Card & Stationery",
        shortSummary:
          "Letterpress cotton cards, executive letterheads, envelopes, and pocket folders calibrated for press.",
        heroSubtitle:
          "Tactile C-suite stationery engineered with duplex 600 GSM stocks, hot-foil separation plates, blind deboss masks, and crisp millimeter bleed.",
        designTerms: [
          "600 GSM Cotton Duplex",
          "Hot-Foil Spot Plate",
          "Blind Deboss Relief",
          "3mm Bleed & Trim",
        ],
        deliverables: [
          "Double-sided business cards (standard US & European ISO sizes)",
          "Print + editable Word letterhead, DL/C4 envelopes & with-compliments slips",
          "Die-cut presentation folder with business card slot mask",
          "Separate 100% K foil/emboss vector plates + PDF/X-4 press masters",
        ],
        turnaround: "4–6 Business Days",
        nativeFormats: "InDesign · AI · PDF/X-4",
        colorOrOutputSpec: "CMYK + Pantone Spot + Foil",
      },
      {
        slug: "rebranding",
        title: "Rebranding & Brand Refresh",
        shortSummary:
          "Strategic visual modernization preserving heritage equity while unlocking institutional growth.",
        heroSubtitle:
          "Evolve outdated identities without losing customer recognition—we audit legacy equity, refine geometry, upgrade typography, and ship transition toolkits.",
        designTerms: [
          "Brand Equity Audit",
          "Optical Mark Refinement",
          "WCAG Contrast Upgrade",
          "Rollout Matrix",
        ],
        deliverables: [
          "Legacy visual audit & refinement opportunity roadmap",
          "Modernized mark, refreshed typography & accessible color tokens",
          "Updated core templates across decks, web headers & stationery",
          "Before/after launch announcement visual suite",
        ],
        turnaround: "2–4 Weeks",
        nativeFormats: "Figma · AI · INDD · JSON",
        colorOrOutputSpec: "WCAG AA + Print Parity",
      },
    ],
  },
  {
    number: "02",
    slug: "social-media-design",
    menuTitle: "Social Media & Ads",
    fullTitle: "Social Media & Advertising Design",
    menuDesc: "Social posts, banners, campaigns",
    iconKey: "megaphone",
    heroHeadline: "Scroll-Stopping Campaign Systems",
    heroAccent: "Built for Conversion.",
    heroSummary:
      "Modular social creative systems, performance display banners, YouTube channel branding, and email campaigns crafted on crisp visual hierarchy for paid acquisition teams.",
    designTerms: [
      "Thumb-Stop Hierarchy",
      "Safe-Zone UI Grids",
      "Multi-Aspect Scaling",
      "Retina 2× Export",
    ],
    relatedCaseSlugs: [
      "ecommerce-banners-campaign",
      "puro-organic-ecommerce-uiux",
    ],
    services: [
      {
        slug: "social-media-posts",
        title: "Social Media Post Design",
        shortSummary:
          "Cohesive feed carousels, LinkedIn thought-leadership slides, and reusable Figma auto-layout kits.",
        heroSubtitle:
          "Stand above generic Canva feeds with editorial Swiss typography, structured carousel pacing, and reusable component libraries your marketing team controls effortlessly.",
        designTerms: [
          "1:1 & 4:5 Feed Ratios",
          "Carousel Flow Rhythm",
          "Figma Auto-Layout",
          "Type Contrast Lock",
        ],
        deliverables: [
          "Custom branded feed grid covering carousels, quotes, stats & promos",
          "Editable Figma + Illustrator reusable post template system",
          "High-resolution Retina 2× PNG/WebP exports per platform",
          "Swipe continuity artwork for multi-slide LinkedIn & Instagram stories",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Figma · PSD · PNG · WebP",
        colorOrOutputSpec: "sRGB · 2× Retina Sharp",
      },
      {
        slug: "social-media-ads",
        title: "Social Media Ad Creatives",
        shortSummary:
          "Performance-focused Meta, LinkedIn, and TikTok paid ad variants engineered for thumb-stop CTR.",
        heroSubtitle:
          "Tested creative frameworks balancing bold value propositions, clean product callouts, and CTA visual anchors so media buyers can split-test hooks rapidly.",
        designTerms: [
          "3-Second Visual Hook",
          "CTA Anchor Contrast",
          "9:16 Reels Safe Zones",
          "A/B Variant Matrix",
        ],
        deliverables: [
          "High-converting static ad sets across 1:1, 4:5 & 9:16 placements",
          "Modular headline, social proof & badge layer architecture",
          "Platform UI safe-zone compliant layouts (no caption clipping)",
          "Source files organized cleanly for rapid copy swapping",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Figma · PSD · WebP",
        colorOrOutputSpec: "sRGB · Display Ready",
      },
      {
        slug: "display-banner-ads",
        title: "Google Display & Banner Ads",
        shortSummary:
          "IAB-compliant multi-size programmatic display banner sets under strict KB weight ceilings.",
        heroSubtitle:
          "Crystal-clear typography and crisp CTAs engineered across every Google Display Network aspect ratio without bloated file weights or blurry compression.",
        designTerms: [
          "IAB Ad Specs",
          "150KB Weight Budget",
          "Retina Micro-Type",
          "Cross-Size Parity",
        ],
        deliverables: [
          "Full IAB suite (300×250, 728×90, 160×600, 300×600, 320×50, etc.)",
          "Clean Retina 2× master sets + compressed <150KB production assets",
          "Consistent campaign messaging synced with landing pages",
          "Editable Figma / PSD master banner layout board",
        ],
        turnaround: "3–4 Business Days",
        nativeFormats: "Figma · PSD · PNG · WebP",
        colorOrOutputSpec: "sRGB · <150KB Validated",
      },
      {
        slug: "youtube-graphics",
        title: "YouTube Thumbnails & Channel Art",
        shortSummary:
          "High-CTR thumbnail systems and cross-device TV/desktop/mobile YouTube channel banners.",
        heroSubtitle:
          "Engineered for mobile feed legibility—distinctive subject separation, crisp 2–4 word visual hooks, and multi-device channel header art.",
        designTerms: [
          "16:9 Mobile Legibility",
          "Edge-Lit Cutouts",
          "TV / Desktop Safe Crop",
          "Timestamp Safe Margin",
        ],
        deliverables: [
          "Custom thumbnail template library + 5 flagship episode thumbnails",
          "2560×1440 channel banner verified for TV, desktop & mobile safe areas",
          "Channel watermark, end-screen frames & podcast cover parity",
          "Editable layered Photoshop / Figma thumbnail builder",
        ],
        turnaround: "2–4 Business Days",
        nativeFormats: "PSD · Figma · PNG",
        colorOrOutputSpec: "1280×720 / 2560×1440 sRGB",
      },
      {
        slug: "email-marketing-design",
        title: "Email Marketing Graphics",
        shortSummary:
          "Dark-mode-safe hero headers, modular newsletter blocks, and product showcase banners for Klaviyo & HubSpot.",
        heroSubtitle:
          "Sharp editorial email systems engineered to survive Apple Mail, Outlook, and Gmail dark mode inversions while driving immediate click-through.",
        designTerms: [
          "600px Email Grid",
          "Dark-Mode Safe Alpha",
          "Retina 2× Banners",
          "Klaviyo / HubSpot Ready",
        ],
        deliverables: [
          "Modular campaign & lifecycle email layout architecture in Figma",
          "Custom hero illustrations, GIF/static dividers & product callouts",
          "Retina 2× sliced assets tested for light and dark email clients",
          "Complete newsletter + promotional flow component kit",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Figma · PNG · WebP",
        colorOrOutputSpec: "600px Grid · sRGB 2×",
      },
      {
        slug: "campaign-design",
        title: "Campaign Creative Packages",
        shortSummary:
          "Unified seasonal, product-launch, or fundraising creative kits spanning ads, web headers, and print.",
        heroSubtitle:
          "Launch major company milestones with one coordinated creative direction across paid social, display, email, landing page heroes, and event collateral.",
        designTerms: [
          "Omnichannel Key Visual",
          "Art-Direction Kit",
          "Multi-Channel Ratios",
          "Press + Digital Sync",
        ],
        deliverables: [
          "Primary campaign key visual concept + typographic lockup",
          "20+ synchronized assets across social, email, OpenGraph & display",
          "Matching hero graphic & event/flyer print adaptation",
          "Organized campaign handoff kit in Figma & Adobe CC",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "Figma · AI · PSD · PDF/X-4",
        colorOrOutputSpec: "Full Omnichannel Parity",
      },
    ],
  },
  {
    number: "03",
    slug: "print-design",
    menuTitle: "Print & Marketing",
    fullTitle: "Print & Marketing Materials",
    menuDesc: "Brochures, flyers, catalogs",
    iconKey: "printer",
    heroHeadline: "Tactile Print Collateral Press-Ready",
    heroAccent: "to the Millimeter.",
    heroSummary:
      "Brochures, tri-folds, catalogs, flyers, and direct mailers calibrated cleanly with Rich Black, saddle-stitch creep allowance, 3mm bleed, and PDF/X-4 preflight masters.",
    designTerms: [
      "3mm Bleed & Safe Zone",
      "Rich Black K100+CMY",
      "Short-Panel Fold Math",
      "PDF/X-4 Preflight",
    ],
    relatedCaseSlugs: [
      "r80-rugby-print-catalogue",
      "california-language-academy-brochure",
    ],
    services: [
      {
        slug: "flyer-poster-design",
        title: "Flyer & Poster Design",
        shortSummary:
          "Bold editorial flyers, concert/event posters, and handout sheets calibrated for crisp offset ink.",
        heroSubtitle:
          "Distance-legible typographic hierarchy paired with 300+ DPI image retouching, hairline registration, and clean bleed margins ready for any US/EU press.",
        designTerms: [
          "Viewing Hierarchy",
          "300+ DPI CMYK",
          "3mm / 0.125\" Bleed",
          "Vector Font Outlines",
        ],
        deliverables: [
          "Custom US Letter / A4 / A3 / B1 poster or handout layout",
          "High-resolution CMYK color-corrected imagery & vector graphics",
          "Synchronized digital PDF & social story preview adaptation",
          "Press-ready PDF/X-4 with crop marks + packaged native files",
        ],
        turnaround: "2–4 Business Days",
        nativeFormats: "InDesign · AI · PDF/X-4",
        colorOrOutputSpec: "FOGRA39 / GRACoL CMYK",
      },
      {
        slug: "brochure-design",
        title: "Brochure & Leaflet Design",
        shortSummary:
          "Tri-fold, Z-fold, gatefold, and stitched corporate brochures built with exact short-panel fold math.",
        heroSubtitle:
          "Zero misaligned panel folds—we engineer inside roll-panel compensations, tactile stock coatings, and Spot UV overprints built straight for offset production.",
        designTerms: [
          "Tri-Fold / Gatefold Math",
          "2mm Panel Compensation",
          "Rich Black Formula",
          "Spot UV Overprint",
        ],
        deliverables: [
          "Panel-verified bi-fold, tri-fold, Z-fold, or 8–16pp stitched brochure",
          "Precision crease marks & inside flap width adjustments",
          "Custom tables, icons & image retouching throughout",
          "Printer-verified PDF/X-4 spreads + packaged InDesign native folder",
        ],
        turnaround: "4–7 Business Days",
        nativeFormats: "InDesign · AI · PDF/X-4",
        colorOrOutputSpec: "CMYK + Spot UV Mask",
      },
      {
        slug: "company-profile-design",
        title: "Company Profile Design",
        shortSummary:
          "Executive corporate capability books combining Swiss modular grids, infographics, and boardroom poise.",
        heroSubtitle:
          "Win RFPs and enterprise contracts with multi-page company profiles structured for both crisp silk offset printing and interactive digital sharing.",
        designTerms: [
          "Swiss Modular Grid",
          "InDesign Master Pages",
          "Vector Infographics",
          "Dual Print + PDF/UA",
        ],
        deliverables: [
          "12–36 page editorial layout built on reusable paragraph styles",
          "Bespoke timeline, service matrix & geographic footprint diagrams",
          "Press-ready offset PDF/X-4 + lightweight interactive web PDF",
          "Full packaged Adobe InDesign links, fonts & vector graphics",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "InDesign · AI · PDF/X-4 & Digital",
        colorOrOutputSpec: "CMYK Press + sRGB Web",
      },
      {
        slug: "catalog-design",
        title: "Catalog Design",
        shortSummary:
          "Multi-SKU product catalogs and seasonal lookbooks engineered with saddle-stitch creep and color parity.",
        heroSubtitle:
          "Clean multi-column product indexing, accurate SKU pricing tables, cross-over spread alignment, and calibrated product photography for commercial press runs.",
        designTerms: [
          "Saddle-Stitch Creep",
          "PUR Spine Math",
          "Multi-SKU Table Grid",
          "TAC ≤ 300% Ink Limit",
        ],
        deliverables: [
          "Cover system + modular product grid templates for 20–200+ SKUs",
          "Consistent color retouching across product photography",
          "Automated SKU tables, spec badges & section thumb-tabs",
          "Imposition-ready PDF/X-4 masters verified via Acrobat Preflight",
        ],
        turnaround: "2–3 Weeks",
        nativeFormats: "InDesign · AI · PDF/X-4",
        colorOrOutputSpec: "Coated ICC · TAC ≤ 300%",
      },
      {
        slug: "direct-mail-design",
        title: "Postcard & Direct Mail Design",
        shortSummary:
          "USPS, Royal Mail, Canada Post, and AusPost compliant postcards, mailers, and EDDM campaigns.",
        heroSubtitle:
          "Combine bold acquisition copy with strict postal clear-zones, indicia placements, QR conversion tracking, and VDP variable data readiness.",
        designTerms: [
          "Postal Clear-Zones",
          "VDP Variable Data Ready",
          "Perf & Tear-Off Scores",
          "EDDM & Carrier Specs",
        ],
        deliverables: [
          "Double-sided mailer calibrated to exact USPS / Royal Mail / Canada Post rules",
          "Address block, barcode & indicia safe-zone compliance overlay",
          "Custom trackable QR code lockup & perforated offer panel",
          "Press-ready PDF/X-4 + editable native file",
        ],
        turnaround: "2–4 Business Days",
        nativeFormats: "InDesign · AI · PDF/X-4",
        colorOrOutputSpec: "CMYK 300 DPI · Coated",
      },
      {
        slug: "menu-design",
        title: "Menu & Promotional Materials",
        shortSummary:
          "Hospitality menus, beverage lists, tent cards, and wine folders designed for ambiance and ticket lift.",
        heroSubtitle:
          "Subtle typographic emphasis highlighting signature margin dishes, crisp wipeable synthetic/uncoated stock guidance, and effortless seasonal editing.",
        designTerms: [
          "Visual Eye-Path Grid",
          "Leader Dot Tabular Align",
          "Synthetic / Scuff Coating",
          "Seasonal Modular Type",
        ],
        deliverables: [
          "Dine-in, tasting, bar list & takeaway foldable menu layouts",
          "Table tent cards, check presenters & QR coaster graphics",
          "Easy-to-update price & seasonal dish InDesign templates",
          "Print-ready PDF/X-4 + digital website menu PDF",
        ],
        turnaround: "3–6 Business Days",
        nativeFormats: "InDesign · AI · PDF/X-4",
        colorOrOutputSpec: "CMYK + Tactile Foil Option",
      },
    ],
  },
  {
    number: "04",
    slug: "packaging-design",
    menuTitle: "Packaging & Labels",
    fullTitle: "Packaging & Label Design",
    menuDesc: "Product boxes, labels, pouches",
    iconKey: "package",
    heroHeadline: "Structural Packaging & Die-Lines Built",
    heroAccent: "for First-Run Press Perfection.",
    heroSummary:
      "CAD structural dielines, rigid unboxing systems, cosmetic and beverage labels, GS1 barcodes, white-ink underbases, and Pantone/hot-foil separations engineered for global converters.",
    designTerms: [
      "CAD Die-Lines (FEFCO/ECMA)",
      "0.15pt Flexo Trapping",
      "Hot-Foil & Deboss Plates",
      "White-Ink Underbase",
    ],
    relatedCaseSlugs: [
      "puro-organic-ecommerce-uiux",
      "lg-hausys-product-catalogue",
    ],
    services: [
      {
        slug: "product-packaging",
        title: "Product Packaging Design",
        shortSummary:
          "Full-spectrum retail packaging engineered from structural dieline geometry to 3D shelf preview.",
        heroSubtitle:
          "Turn first-time retail browsers into buyers—we coordinate structure, ink trapping, regulatory panels, and Pantone finishes directly for commercial box converters.",
        designTerms: [
          "ECMA / FEFCO Die-Lines",
          "Cut / Crease / Glue Layers",
          "Pantone Spot & CMYK",
          "Grain Direction Align",
        ],
        deliverables: [
          "Structural CAD dieline adaptation with glue-flap ink knockout",
          "Full 6-panel exterior (& optional interior flood) graphic system",
          "High-resolution 3D studio packshots for buyer presentations",
          "Production native Adobe Illustrator + PDF/X-4 press files",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "Illustrator · CAD .DXF · PDF/X-4",
        colorOrOutputSpec: "CMYK + Pantone PMS + Varnish",
      },
      {
        slug: "label-design",
        title: "Product Label Design",
        shortSummary:
          "Roll-fed bottle, jar, and canister labels with white-ink choke, metallic foil, and GS1 barcodes.",
        heroSubtitle:
          "Built cleanly for flexographic, HP Indigo digital, and rotary presses—complete with 100% K crisp GS1 barcodes, unwind orientation, and transparent/amber glass underbases.",
        designTerms: [
          "Roll-Feed Unwind Spec",
          "-0.15pt White Underbase",
          "GS1 EAN-13 / UPC-A",
          "Tactile Screen Varnish",
        ],
        deliverables: [
          "Front, back & wrap label artwork mapped to cylinder curvature",
          "Dedicated Spot_White & Spot_Varnish / Foil overprint layers",
          "100% K pure vector barcode block & INCI / batch lot safe zone",
          "Press-ready outlined PDF/X-4 + individual SKU variant master files",
        ],
        turnaround: "4–7 Business Days",
        nativeFormats: "Illustrator .AI · PDF/X-4",
        colorOrOutputSpec: "CMYK + White Ink + Tactile",
      },
      {
        slug: "food-beverage-packaging",
        title: "Food & Beverage Packaging",
        shortSummary:
          "FDA, UK/EU FSA, CFIA, and FSANZ compliant cartons, cans, bottles, and barrier pouch graphics.",
        heroSubtitle:
          "Appetite-driven visual hierarchy paired seamlessly with strict nutrition facts panel typesetting, allergen bolding, cold-chain moisture coatings, and flavor coding.",
        designTerms: [
          "FDA / EU Nutrition Tables",
          "Pantone Flavor Architecture",
          "Flexo Trapping 0.15pt",
          "Metallic Aluminum Ink",
        ],
        deliverables: [
          "Master packaging architecture scalable across 3–24 flavors",
          "Regulator-compliant nutrition facts, ingredient & allergen grids",
          "Beverage aluminum sleeve / shrink-wrap seam distortion specs",
          "Native print masters ready for regional food & beverage copackers",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "Illustrator · InDesign · PDF/X-4",
        colorOrOutputSpec: "CMYK + PMS + Shrink Calibration",
      },
      {
        slug: "cosmetic-packaging",
        title: "Cosmetic & Beauty Packaging",
        shortSummary:
          "Museum-minimal skincare cartons, serum droppers, rigid kits, and EU/UK/US INCI micro-typography.",
        heroSubtitle:
          "Refined tactile restraint uniting hot-foil PMS 871 C gold, blind debossed crests, soft-touch uncoated cotton stocks, and razor-sharp regulatory legibility.",
        designTerms: [
          "INCI & PAO Symbol Specs",
          "Hot-Foil PMS 871 C",
          "0.4mm Blind Deboss",
          "Soft-Touch Ink Curve",
        ],
        deliverables: [
          "Outer folding carton + matching glass bottle screen-print/label wrap",
          "Multilingual EU / UK / US / CA regulatory & PAO compliance layout",
          "Separate brass-die foil, emboss & raised Spot UV vector plates",
          "Realistic 3D beauty renders + PDF/X-4 factory press package",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "Illustrator · CAD · PDF/X-4",
        colorOrOutputSpec: "Spot Foil + Deboss + CMYK",
      },
      {
        slug: "retail-box-pouch-design",
        title: "Retail Box & Pouch Design",
        shortSummary:
          "Stand-up Doypack pouches, Mylar gussets, hanging display boxes, and shelf-ready retail cartons.",
        heroSubtitle:
          "Shelf-impact geometry taking exact account of heat-seal crimp zones, zip-lock clearance, gusset fold distortion, and metallized Mylar foil transparency masks.",
        designTerms: [
          "Seal & Zipper Safe Zones",
          "Gusset Artwork Paneling",
          "Metallized Foil Knockout",
          "SRP Retail Shelf Impact",
        ],
        deliverables: [
          "Front, back, gusset & bottom pouch plate setup for gravure/digital flexo",
          "Metallized matte/gloss window transparency & white-ink plate masks",
          "Retail CDU / tray box adaptation with hang-hole safe tolerances",
          "Press-ready layered .AI & PDF/X-4 vendor submission bundle",
        ],
        turnaround: "5–8 Business Days",
        nativeFormats: "Illustrator · PDF/X-4",
        colorOrOutputSpec: "CMYK + White Plate + Matte",
      },
      {
        slug: "subscription-box-design",
        title: "Shipping & Subscription Boxes",
        shortSummary:
          "Custom corrugated mailers, double-sided unboxing interiors, tissue wraps, and welcome card suites.",
        heroSubtitle:
          "Choreograph memorable doorstep-to-social-share unboxing moments using inside-flood corrugated ink tolerances, Pantone tape, and branded tissue patterns.",
        designTerms: [
          "E-Flute Corrugated Flexo",
          "Inside-Flood Coverage",
          "Minimum Stroke 0.5pt",
          "Unboxing Experience Flow",
        ],
        deliverables: [
          "Exterior shipping + interior surprise lid print aligned to corrugated flutes",
          "Matching custom tissue wrap pattern, belly band & mailer tape artwork",
          "Perforated QR / referral unboxing insert card",
          "Corrugated-tolerant vector masters (optimized minimum line weights)",
        ],
        turnaround: "5–8 Business Days",
        nativeFormats: "Illustrator · CAD .DXF · PDF/X-4",
        colorOrOutputSpec: "Kraft / White Liner Flexo Spec",
      },
    ],
  },
  {
    number: "05",
    slug: "presentation-design",
    menuTitle: "Presentation Design",
    fullTitle: "Presentation & Corporate Design",
    menuDesc: "Pitch decks, business slides",
    iconKey: "presentation",
    heroHeadline: "Executive Decks & Financial Reports",
    heroAccent: "Engineered to Persuade.",
    heroSummary:
      "Series A/B investor pitch decks, editable PowerPoint/Google Slides master systems, 120-page ESG annual reports, enterprise proposals, and clear data visualization.",
    designTerms: [
      "16:9 Editorial Slide Grid",
      "Bespoke Vector Charts",
      "Hairline Financial Tables",
      "Live + Read-Ahead Modes",
    ],
    relatedCaseSlugs: [
      "tebcan-healthcare-presentation",
      "cyberonics-corporate-brochure",
    ],
    services: [
      {
        slug: "pitch-deck-design",
        title: "Pitch Deck Design",
        shortSummary:
          "Seed to Series B fundraising narratives pairing crisp data visualization with clear investor pacing.",
        heroSubtitle:
          "Command room confidence in San Francisco, London, Sydney, and Toronto with 10–20 cohesive slides distilled into unmistakable visual momentum.",
        designTerms: [
          "Investor Narrative Arc",
          "16:9 Editorial Hierarchy",
          "Vector KPI Visuals",
          "Teaser + Dataroom Pair",
        ],
        deliverables: [
          "Custom 12–20 slide investor deck (Problem → Traction → Ask)",
          "Custom bespoke financial charts, TAM/SAM models & product mockups",
          "Live stage presentation edition + email read-ahead compressed PDF",
          "Fully editable Figma, Keynote & PowerPoint masters",
        ],
        turnaround: "5–8 Business Days",
        nativeFormats: "Figma · PPTX · Keynote · PDF",
        colorOrOutputSpec: "1920×1080 Vector Sharp",
      },
      {
        slug: "powerpoint-google-slides",
        title: "PowerPoint & Google Slides",
        shortSummary:
          "Corporate master slide templates with locked typography styles, theme colors, and native editable charts.",
        heroSubtitle:
          "Eliminate broken formatting across global sales and executive teams—we build real PowerPoint Slide Masters and native Google Slides themes anyone can populate.",
        designTerms: [
          "True Slide Master Layouts",
          "Native XML Theme Colors",
          "Editable Excel Chart Links",
          "System / Safe Web Fonts",
        ],
        deliverables: [
          "20–40 custom master slide layouts covering titles, data, agendas & bios",
          "Pre-formatted native PowerPoint / Slides charts, tables & timelines",
          "Built-in custom icon library & branded photography crop placeholders",
          "Clean `.POTX` / `.PPTX` + Google Slides master handoff",
        ],
        turnaround: "5–7 Business Days",
        nativeFormats: "PPTX · POTX · Google Slides",
        colorOrOutputSpec: "Native Theme Palette XML",
      },
      {
        slug: "sales-presentation",
        title: "Sales Presentation Design",
        shortSummary:
          "High-conversion enterprise sales decks and interactive buyer walkthroughs that shorten close cycles.",
        heroSubtitle:
          "Replace text-dense product pitches with crisp ROI comparisons, architecture diagrams, case study snapshots, and modular vertical-specific slide packs.",
        designTerms: [
          "Buyer Pain → ROI Story",
          "Modular Vertical Slides",
          "Visual Architecture Diagrams",
          "Clean Proof Hierarchy",
        ],
        deliverables: [
          "Core enterprise capability & discovery presentation framework",
          "Custom software/solution architecture & onboarding timeline slides",
          "Reusable case study & pricing tier comparison slide modules",
          "Editable team deck templates in PowerPoint, Slides, or Figma",
        ],
        turnaround: "5–7 Business Days",
        nativeFormats: "Figma · PPTX · Google Slides",
        colorOrOutputSpec: "16:9 Enterprise Widescreen",
      },
      {
        slug: "annual-report-design",
        title: "Annual Report Design",
        shortSummary:
          "Swiss-grid print and accessible PDF/UA shareholder reports balancing governance authority with clarity.",
        heroSubtitle:
          "Built on our 16+ year institutional publication heritage—transforming audited financial tables and ESG impact telemetry into collectible corporate editions.",
        designTerms: [
          "6-Col Modular Swiss Grid",
          "Hairline Financial Tables",
          "Smyth-Sewn / Uncoated ICC",
          "WCAG PDF/UA Tagged",
        ],
        deliverables: [
          "Full print & interactive digital shareholder publication (24–140 pages)",
          "Audited balance-sheet tables set cleanly on tabular numerals",
          "Bespoke ESG & revenue performance vector infographics",
          "Offset PDF/X-4 press masters + accessible digital investor PDF",
        ],
        turnaround: "2–4 Weeks",
        nativeFormats: "InDesign · AI · PDF/X-4 & UA",
        colorOrOutputSpec: "ISO Uncoated ICC + Web",
      },
      {
        slug: "business-proposal-design",
        title: "Business Proposal Design",
        shortSummary:
          "RFP responses, consultancy bids, and partnership dossiers engineered to outshine competing submissions.",
        heroSubtitle:
          "Win high-ticket contracts with clean typographic hierarchy, structured scope/timeline matrices, and effortless executive scanability.",
        designTerms: [
          "RFP Structural Grid",
          "Scope & Gantt Tables",
          "Print + Email Interactive",
          "Reusable InDesign / Docs",
        ],
        deliverables: [
          "Custom cover, executive summary & commercial scope layout system",
          "Milestone Gantt chart, team bio cards & fee schedule tables",
          "Editable InDesign + Microsoft Word / Google Docs companion versions",
          "Clean hyperlinked interactive PDF export for procurement teams",
        ],
        turnaround: "4–6 Business Days",
        nativeFormats: "InDesign · DOCX · PDF",
        colorOrOutputSpec: "US Letter / A4 Dual Spec",
      },
      {
        slug: "infographic-design",
        title: "Infographic & Data Visualization",
        shortSummary:
          "Complex data, SaaS workflows, and research findings distilled into unmistakable vector visual stories.",
        heroSubtitle:
          "Zero generic clip-art icons—custom isometric schematics, financial comparison charts, and research summaries tuned for both long-scroll web articles and editorial print.",
        designTerms: [
          "Information Hierarchy",
          "Isometric Vector Grid",
          "Data-Ink Ratio Rigor",
          "Print ↔ SVG Dual Export",
        ],
        deliverables: [
          "Bespoke full-height editorial, process, or statistical infographic",
          "Unified brand-matched illustration, chart & custom icon language",
          "Web-optimized inline SVG / Retina PNG + high-DPI print CMYK PDF",
          "Clean modular vector elements reusable across reports & decks",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Illustrator · Figma · SVG · PDF",
        colorOrOutputSpec: "sRGB Vector + 300 DPI CMYK",
      },
    ],
  },
  {
    number: "06",
    slug: "ecommerce-graphics",
    menuTitle: "E-commerce Graphics",
    fullTitle: "E-commerce & Product Graphics",
    menuDesc: "Amazon, Shopify, product images",
    iconKey: "shopping-bag",
    heroHeadline: "Conversion-Built Marketplace Visuals",
    heroAccent: "Engineered to Rank & Sell.",
    heroSummary:
      "Amazon 7-image conversion stacks, Brand Registry A+ modules, Shopify storefront visual banners, exploded callout infographics, and studio lifestyle composites.",
    designTerms: [
      "2000×2000 Zoom Sharp",
      "Amazon TOS Pure White",
      "A+ Storefront Modules",
      "Specular Shadow Match",
    ],
    relatedCaseSlugs: [
      "ecommerce-banners-campaign",
      "oem-sound-ebay-shopfront",
    ],
    services: [
      {
        slug: "amazon-listing-images",
        title: "Amazon Listing Images",
        shortSummary:
          "Complete 7-image Amazon gallery stacks uniting pure #FFFFFF main hero cutouts with conversion callouts.",
        heroSubtitle:
          "Boost organic click-through and Buy-Box conversion—we engineer crisp 2000×2000px zoom-ready listing galleries balanced for mobile search results.",
        designTerms: [
          "#FFFFFF Main TOS Spec",
          "2000×2000 Zoom Clarity",
          "Benefit Callout Stack",
          "Mobile Search Hierarchy",
        ],
        deliverables: [
          "Main pure-white (#FFFFFF) retouched hero cutout with realistic contact shadow",
          "6 secondary slides: feature callouts, dimensions, comparison chart & lifestyle",
          "Clean layered Figma / PSD templates for additional SKU variations",
          "Amazon Seller Central ready 2000×2000px sRGB JPEG/PNG sets",
        ],
        turnaround: "4–6 Business Days",
        nativeFormats: "Photoshop · Figma · JPEG/PNG",
        colorOrOutputSpec: "2000×2000 sRGB · 100% TOS",
      },
      {
        slug: "amazon-a-plus-content",
        title: "Amazon A+ Content Design",
        shortSummary:
          "Bespoke Brand Story carousels and full-bleed 970px/1464px Premium A+ desktop and mobile modules.",
        heroSubtitle:
          "Turn single-product visitors into brand loyalists with continuous editorial A+ storytelling, cross-sell comparison tables, and crisp mobile companion banners.",
        designTerms: [
          "970px & 1464px Premium A+",
          "Brand Story Carousel",
          "Separate Mobile Slices",
          "Cross-Sell Grid Tables",
        ],
        deliverables: [
          "Full desktop + mobile-cropped A+ module stack (5–7 visual bands)",
          "Amazon Brand Story background banner & brand promise cards",
          "Cross-sell catalog comparison visuals to increase AOV",
          "Organized Seller Central upload slices + layered source files",
        ],
        turnaround: "5–7 Business Days",
        nativeFormats: "Photoshop · Figma · PNG/JPEG",
        colorOrOutputSpec: "Desktop 1464px + Mobile 600px",
      },
      {
        slug: "shopify-graphics",
        title: "Shopify Store Graphics",
        shortSummary:
          "Bespoke storefront hero banners, collection cards, trust icon bars, and mobile lookbook sections.",
        heroSubtitle:
          "Elevate off-the-shelf Shopify themes to luxury flagship caliber with art-directed collection banners, custom trust badges, and razor-sharp product imagery.",
        designTerms: [
          "LCP-Fast WebP Assets",
          "Hero Focal-Point Crops",
          "Custom SVG Trust Icons",
          "Desktop + Mobile Pair",
        ],
        deliverables: [
          "Storefront hero banners, collection header art & promotional bars",
          "Desktop 1920px wide + separate vertical 9:16 mobile storefront crops",
          "Custom brand-matched benefit icons, size guides & ingredient badges",
          "AVIF / WebP optimized exports + Figma storefront visual kit",
        ],
        turnaround: "4–6 Business Days",
        nativeFormats: "Figma · PSD · SVG · WebP",
        colorOrOutputSpec: "Edge-Fast sRGB 2×",
      },
      {
        slug: "product-infographics",
        title: "Product Infographics",
        shortSummary:
          "Exploded product diagrams, anatomical layer callouts, dimensions, and step-by-step usage visuals.",
        heroSubtitle:
          "Answer customer objections in 2 seconds with clean hairline callouts, millimeter dimension overlays, and exploded internal component visuals.",
        designTerms: [
          "Exploded Spec Diagram",
          "MM / Inch Dual Sizing",
          "Iconography Callouts",
          "Clean Visual Hierarchy",
        ],
        deliverables: [
          "Custom feature callout slides showing internal construction & benefits",
          "Exact metric & imperial dimension graphics for US/EU/AU buyers",
          "Before/after or 3-step usage visual instructions",
          "Multi-platform exports (Amazon, Shopify, Walmart & retail decks)",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Figma · AI · PSD · PNG",
        colorOrOutputSpec: "2000px Square & 16:9 sRGB",
      },
      {
        slug: "lifestyle-product-images",
        title: "Lifestyle Product Composites",
        shortSummary:
          "Studio-lit photorealistic lifestyle scenes integrating products cleanly into global interior environments.",
        heroSubtitle:
          "When expensive location shoots aren't practical across 15 SKUs, we composite your product photos with matched perspective, color temperature, and specular reflections.",
        designTerms: [
          "Perspective Vanish Align",
          "Color-Temp Light Match",
          "Specular / Ground Shadows",
          "Hand-Grip Composites",
        ],
        deliverables: [
          "Curated lifestyle environment composites tailored to Western buyers",
          "Pixel-accurate edge blending, surface reflections & soft occlusion shadows",
          "Matching hero scenes for product pages, social ads & retail lookbooks",
          "Non-destructive layered Photoshop masters + high-res WebP/JPEG",
        ],
        turnaround: "3–6 Business Days",
        nativeFormats: "Photoshop PSD · JPEG · WebP",
        colorOrOutputSpec: "16-Bit Color Match · sRGB",
      },
      {
        slug: "marketplace-ad-graphics",
        title: "Marketplace Advertising Graphics",
        shortSummary:
          "Amazon Sponsored Brands, Storefront tiles, Etsy banners, and Walmart Connect sponsored creative sets.",
        heroSubtitle:
          "Unified ad creative built strictly inside marketplace overlay rules—sharp logo lockups, product grouping clarity, and clean promotional badges.",
        designTerms: [
          "Sponsored Brands Safe-Area",
          "Multi-Product Lockups",
          "Badge Legibility",
          "High-CTR Cropping",
        ],
        deliverables: [
          "Sponsored Brands custom image banners & Brand Store navigation tiles",
          "Clean multi-SKU hero collages compliant with ad overlay restrictions",
          "Platform variants for Amazon, Walmart, Etsy & retail media networks",
          "Ready-to-upload graphics + editable campaign kit",
        ],
        turnaround: "2–4 Business Days",
        nativeFormats: "Figma · PSD · PNG",
        colorOrOutputSpec: "Platform Spec Validated",
      },
    ],
  },
  {
    number: "07",
    slug: "event-signage-design",
    menuTitle: "Events & Signage",
    fullTitle: "Event, Exhibition & Signage Design",
    menuDesc: "Banners, exhibition, signage",
    iconKey: "flag",
    heroHeadline: "Large-Format Architecture Scaled",
    heroAccent: "for Physical Command.",
    heroSummary:
      "Trade-show 10×20ft booths, tension-fabric SEG backdrops, retractable banners, retail storefront vinyls, vehicle wraps, and OOH signage built in 1:10 true-scale vectors.",
    designTerms: [
      "1:10 True-Scale Vector",
      "Distance Type Hierarchy",
      "Hardware / Pole Safe-Zone",
      "Tiled RIP Preflight",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "pdi-energy-led-brochure",
    ],
    services: [
      {
        slug: "trade-show-booth-design",
        title: "Trade Show Booth Graphics",
        shortSummary:
          "Modular 10×10ft and 10×20ft SEG tension-fabric exhibition walls, towers, and reception counters.",
        heroSubtitle:
          "Built for ExCeL London, CES Las Vegas, and Messe Berlin—we design to exact hardware vendor templates with 50mm perimeter bleed and table-height eye-level clarity.",
        designTerms: [
          "1:10 Vector Artboards",
          "SEG Silicone-Edge Bleed",
          "3-Second Distance Hook",
          "Pantone Fabric Match",
        ],
        deliverables: [
          "Full backwall, side returns, hanging header & podium wrap artwork",
          "Exact seam/pole/frame hardware safe-zone clearance compliance",
          "Vector logos & 150 DPI at 100% scale continuous-tone imagery",
          "Pre-press print PDFs tailored cleanly to your booth fabricator",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "Illustrator · InDesign · PDF/X-4",
        colorOrOutputSpec: "Dye-Sub CMYK + PMS Match",
      },
      {
        slug: "retractable-banner-design",
        title: "Roll-up & Retractable Banners",
        shortSummary:
          "Crisp 850×2000mm and 33×80\" roll-up pull-up stands engineered for zero base-cassette clipping.",
        heroSubtitle:
          "Clear vertical reading order starting at eye height—leaving exact 150mm bottom cassette leader margins untouched so logos and QR codes never disappear inside the stand.",
        designTerms: [
          "150mm Bottom Leader Zone",
          "Eye-Level Hook Hierarchy",
          "True-Vector Typography",
          "Anti-Glare Matte Spec",
        ],
        deliverables: [
          "Standard 850×2000mm / 33.5×80\" or custom wide pull-up stand design",
          "Single-stand or multi-panel seamless 3-banner exhibition sequence",
          "Explicit cassette-roll leader margin annotation for print shops",
          "High-res print PDF + native Illustrator/InDesign package",
        ],
        turnaround: "2–4 Business Days",
        nativeFormats: "Illustrator · InDesign · PDF/X-4",
        colorOrOutputSpec: "CMYK 150 DPI Full Scale",
      },
      {
        slug: "event-backdrop-design",
        title: "Event Backdrops & Displays",
        shortSummary:
          "Step-and-repeat press walls, conference mainstage screens, and VIP red-carpet photo backdrops.",
        heroSubtitle:
          "Calculated matte finish logo grid spacing designed cleanly for camera lenses—avoiding hot-spot glare flashes and maintaining crisp brand legibility in every press photo.",
        designTerms: [
          "Step-and-Repeat Spacing",
          "Zero-Glare Matte Contrast",
          "Camera Framing Ratios",
          "Grommet & Pole Hemline",
        ],
        deliverables: [
          "8×8ft, 10×8ft step-and-repeat walls & conference stage backdrops",
          "Diagonal or orthogonal multi-sponsor logo balance layout",
          "Pole pocket, grommet & hem safe-area allowances verified",
          "Large-format RIP ready vector PDFs",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Illustrator · PDF/X-4",
        colorOrOutputSpec: "Matte Vinyl CMYK + PMS",
      },
      {
        slug: "storefront-graphics",
        title: "Storefront & Window Graphics",
        shortSummary:
          "Architectural frosted vinyl decals, cut-letter glass manifests, and retail fascia signage systems.",
        heroSubtitle:
          "Measured directly against glass mullions and architectural elevations—delivering crisp plotter-cut vinyl vector paths, etched frost films, and two-way window clings.",
        designTerms: [
          "Plotter Cut Vinyl Paths",
          "Mullion Gap Offset",
          "White-Ink Window Cling",
          "Reverse Inside Glass Print",
        ],
        deliverables: [
          "Scale-mapped storefront glass elevation mockup & sign specification",
          "Ready-to-plot 100% vector cut paths + etched/frosted film overlays",
          "Second-surface reverse print / white-ink backing separation instructions",
          "Native vector installer masters for architectural signage contractors",
        ],
        turnaround: "4–6 Business Days",
        nativeFormats: "Illustrator .AI · CAD .DXF · PDF",
        colorOrOutputSpec: "RAL / Pantone / Vinyl Film Spec",
      },
      {
        slug: "vehicle-wrap-design",
        title: "Vehicle Wrap Design",
        shortSummary:
          "Fleet vans, box trucks, and commercial wraps scaled accurately to factory 1:20 blueprint templates.",
        heroSubtitle:
          "Keep phone numbers, URLs, and logos off wheel wells, door seams, and perforated rear windows while turning moving company vehicles into high-recall billboards.",
        designTerms: [
          "1:20 Factory Vehicle Grid",
          "Seam & Handle Clear-Zone",
          "50mm Over-Bleed Wrap",
          "70/30 Perf Window Mask",
        ],
        deliverables: [
          "Side, front, rear & roof artwork mapped cleanly to vehicle blueprint",
          "Explicit clearance around moldings, rivets, door gaps & taillights",
          "Matching perforated rear-window graphic + side door magnet option",
          "Scalable vector + 150 DPI 3M/Avery wrap-shop print package",
        ],
        turnaround: "5–8 Business Days",
        nativeFormats: "Illustrator .AI · Photoshop · PDF",
        colorOrOutputSpec: "Large-Format Wrap CMYK",
      },
      {
        slug: "outdoor-signage-design",
        title: "Yard Signs & Outdoor Ads",
        shortSummary:
          "High-contrast OOH billboards, highway banners, coroplast yard signs, and directional wayfinding systems.",
        heroSubtitle:
          "Built for 60mph and long-distance viewing—ultra-clean 6-word visual hooks, stark figure-ground contrast, weatherproof UV specs, and zero clutter.",
        designTerms: [
          "60mph Distance Legibility",
          "High Figure-Ground Contrast",
          "Bleed & Grommet Spec",
          "OOH Bulletin Sizing",
        ],
        deliverables: [
          "OOH billboards, street furniture / transit shelters & construction boards",
          "Coroplast real-estate / event yard signs & directional arrows",
          "Strict color contrast verification under natural daylight conditions",
          "Scaled print-ready PDF/X-4 files per outdoor media vendor template",
        ],
        turnaround: "2–5 Business Days",
        nativeFormats: "Illustrator · PDF/X-4",
        colorOrOutputSpec: "UV-Rated Outdoor CMYK",
      },
    ],
  },
  {
    number: "08",
    slug: "editorial-design",
    menuTitle: "Editorial & Publishing",
    fullTitle: "Editorial & Publishing Design",
    menuDesc: "Books, magazines, e-books",
    iconKey: "book-open",
    heroHeadline: "Collectible Books, Magazines & Whitepapers",
    heroAccent: "with Typographic Rhythm.",
    heroSummary:
      "Hardbound book covers, EPUB/PDF e-book layouts, editorial magazines, research whitepapers, and executive lead magnets set on baseline grids with optical kerning.",
    designTerms: [
      "Baseline Grid Lock",
      "Casewrap & Spine Math",
      "Widows / Orphans Hygiene",
      "Tagged PDF/UA Accessibility",
    ],
    relatedCaseSlugs: [
      "athletic-identity-book-cover",
      "james-spencer-product-catalog",
    ],
    services: [
      {
        slug: "book-cover-design",
        title: "Book Cover Design",
        shortSummary:
          "Thumbnail-distinctive front covers, dust jackets, and full wraparounds engineered to exact spine width.",
        heroSubtitle:
          "Command attention both as a 120px Amazon store thumbnail and on physical bookstore tables—calibrated to exact IngramSpark, KDP, and commercial printer paper caliper specs.",
        designTerms: [
          "Exact Page-Count Spine",
          "120px Thumbnail Punch",
          "IngramSpark / KDP Wrap",
          "ISBN-13 Barcode Block",
        ],
        deliverables: [
          "Front cover e-book vertical artwork + full wraparound print jacket",
          "Exact spine thickness calculation from paper GSM caliper + turn-ins",
          "Clean ISBN-13 / EAN barcode placement & foil/spot-UV mask option",
          "Packaged InDesign/Illustrator + compliant print & digital exports",
        ],
        turnaround: "4–7 Business Days",
        nativeFormats: "InDesign · PSD · AI · PDF/X-4",
        colorOrOutputSpec: "Print Wrap CMYK + Digital",
      },
      {
        slug: "ebook-layout-design",
        title: "Book & E-book Layout",
        shortSummary:
          "Long-form book typesetting, baseline-locked page grids, chapter openers, and reflowable Kindle/EPUB formatting.",
        heroSubtitle:
          "Built for effortless marathon reading—precision paragraph styles, zero widows/orphans, clean running heads, footnotes, and seamless transition from hardcover press to digital tablets.",
        designTerms: [
          "Baseline Grid Alignment",
          "Optical Kerning & Hyphens",
          "Widow / Orphan Control",
          "Reflowable EPUB3 & Print",
        ],
        deliverables: [
          "Full interior typesetting, custom chapter openers & running folios",
          "Mirror-margin print binding setup (gutter + trim safe allowance)",
          "Hyperlinked TOC interactive PDF + clean EPUB / Kindle validation",
          "Native Adobe InDesign book package",
        ],
        turnaround: "1–3 Weeks",
        nativeFormats: "InDesign · EPUB · PDF/X-4",
        colorOrOutputSpec: "Grayscale K100 or Rich CMYK",
      },
      {
        slug: "magazine-design",
        title: "Magazine Design",
        shortSummary:
          "Independent editorial periodicals, corporate journals, and custom department spread architectures.",
        heroSubtitle:
          "Bring genuine print-house art direction to recurring publications—establishing a distinctive masthead, flexible column grids, pull quotes, and editorial pacing.",
        designTerms: [
          "Editorial Spread Rhythm",
          "12-Col Flexible Grid",
          "Drop Caps & Pull Quotes",
          "Issue Pagination Plan",
        ],
        deliverables: [
          "Complete magazine design system (cover, masthead, TOC, features, columns)",
          "Full multi-page issue pagination, photo curation & color balancing",
          "Ad-insertion mechanical specs & DPS crossover safety alignment",
          "Offset-ready PDF/X-4 printer spreads + digital flipbook PDF",
        ],
        turnaround: "2–3 Weeks",
        nativeFormats: "InDesign · AI · PDF/X-4",
        colorOrOutputSpec: "Publication ICC / FOGRA39",
      },
      {
        slug: "whitepaper-design",
        title: "Whitepaper & Report Design",
        shortSummary:
          "Research reports, SaaS benchmark whitepapers, and consulting studies crafted for executive authority.",
        heroSubtitle:
          "Transform dense analyst findings and multi-page research narratives into scannable editorial publications that enterprise buyers forward to their entire board.",
        designTerms: [
          "Callout Data Boxes",
          "Custom Research Charts",
          "Hyperlinked Nav Index",
          "Tagged PDF/UA Spec",
        ],
        deliverables: [
          "Modular 10–40 page research report layout in InDesign / Figma",
          "Bespoke data charts, key-finding pullouts & methodological diagrams",
          "Desktop interactive PDF with clickable bookmark navigation",
          "Print-ready option for conference handouts + web download asset",
        ],
        turnaround: "5–9 Business Days",
        nativeFormats: "InDesign · Figma · Interactive PDF",
        colorOrOutputSpec: "Web PDF + CMYK Print Ready",
      },
      {
        slug: "newsletter-design",
        title: "Newsletter Design",
        shortSummary:
          "Curated digital and printed recurring digests built cleanly for reader scannability and habit retention.",
        heroSubtitle:
          "Consistent masthead design, structured editorial content blocks, and responsive typography keeping weekly or monthly company digests instantly recognizable.",
        designTerms: [
          "Editorial Block System",
          "Masthead & Issue Stamp",
          "Scannable Digest Hierarchy",
          "ESP + Print PDF Parity",
        ],
        deliverables: [
          "Reusable recurring digest layout system (digital ESP & printable A4/Letter)",
          "Custom header artwork, author byline cards & spotlight modules",
          "Dark-mode tested color styles + Retina icons",
          "Clean source template files for ongoing editorial issues",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Figma · InDesign · WebP/PDF",
        colorOrOutputSpec: "Email 600px + Print Dual",
      },
      {
        slug: "lead-magnet-design",
        title: "Digital PDF & Lead Magnets",
        shortSummary:
          "High-conversion checklists, playbooks, worksheets, and interactive PDF guides designed for B2B funnels.",
        heroSubtitle:
          "Turn gated email downloads into immediate trust builders—clean fill-in worksheets, visual frameworks, and clickable CTAs that convert subscribers into booked calls.",
        designTerms: [
          "Interactive AcroForm Fields",
          "Checklist Visual Clarity",
          "Click-Through CTAs",
          "3D Cover Mockup Included",
        ],
        deliverables: [
          "Editorial playbook / guide layout with interactive checkboxes & form fields",
          "Embedded clickable booking CTAs & social share anchors",
          "Crisp 3D tablet / hardcover mockup image for landing page promotion",
          "Native Figma / InDesign master + lightweight high-DPI interactive PDF",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Figma · InDesign · PDF",
        colorOrOutputSpec: "Screen-Crisp sRGB · Small MB",
      },
    ],
  },
  {
    number: "09",
    slug: "motion-graphics",
    menuTitle: "Motion Graphics",
    fullTitle: "Motion Graphics & Ad Creatives",
    menuDesc: "Animated ads, logo animation",
    iconKey: "film",
    heroHeadline: "Kinetic Identity & Motion Ads Crafted",
    heroAccent: "at 60 Frames Per Second.",
    heroSummary:
      "Bespoke logo stings, animated performance ad loops, lightweight HTML5/GIF banners, broadcast lower thirds, UI explainer animations, and kinetic posters engineered in After Effects & Lottie.",
    designTerms: [
      "Custom Cubic-Bezier Easing",
      "60fps Vector Stings",
      "Lottie / Rive JSON",
      "Reduced-Motion Parity",
    ],
    relatedCaseSlugs: [
      "lootbattles-ui-dashboard",
      "ecommerce-banners-campaign",
    ],
    services: [
      {
        slug: "logo-animation",
        title: "Logo Animation",
        shortSummary:
          "Signature 3–5 second animated logotype reveals exported cleanly in 4K ProRes, alpha MOV, MP4, and Lottie.",
        heroSubtitle:
          "Breathe purposeful motion into your brand mark—matte path reveals, golden-ratio geometric assembly, and effortless looping icons built cleanly for web and video intros.",
        designTerms: [
          "Custom Speed-Graph Curves",
          "Alpha Channel ProRes 4444",
          "Lottie / SVG Vector",
          "2–4s Pacing Arc",
        ],
        deliverables: [
          "Custom After Effects logo reveal choreography matching brand personality",
          "Transparent alpha MOV (ProRes 4444) + MP4 4K video intros",
          "Lightweight vector Lottie JSON option for websites & mobile apps",
          "Clean layered After Effects source project",
        ],
        turnaround: "4–6 Business Days",
        nativeFormats: "After Effects · Lottie · MP4/MOV",
        colorOrOutputSpec: "4K 60fps · Alpha Transparent",
      },
      {
        slug: "animated-social-ads",
        title: "Animated Social Media Ads",
        shortSummary:
          "Thumb-stopping 6–15s kinetic video ads tuned to lift Meta, LinkedIn, and Reels paid ROAS.",
        heroSubtitle:
          "Motion designed specifically for silent autoplay feeds—crisp kinetic captions inside the opening 1.5 seconds, clean product focus, and unmistakable end-card CTAs.",
        designTerms: [
          "1.5s Silent Hook Frame",
          "Kinetic Caption Track",
          "1:1 · 4:5 · 9:16 Safe Crops",
          "60fps Loop Transitions",
        ],
        deliverables: [
          "10–15 second animated ad in Square (1:1), Feed (4:5) & Vertical (9:16)",
          "Custom sound design mix option + silent-first visual typography",
          "Modular headline layers for rapid paid media hook iterations",
          "Broadcast H.264 MP4 renders + editable After Effects project",
        ],
        turnaround: "4–7 Business Days",
        nativeFormats: "After Effects · MP4 · MOV",
        colorOrOutputSpec: "1080p / 4K · Rec.709",
      },
      {
        slug: "gif-banner-design",
        title: "GIF Banner Design",
        shortSummary:
          "Crisp 150KB programmatic animated GIF and HTML5 banner loops optimized for zero color banding.",
        heroSubtitle:
          "Ultra-efficient frame-palette optimization ensuring animated email dividers, Product Hunt launches, and ad banners play smoothly inside tight platform file caps.",
        designTerms: [
          "Palette Dither Control",
          "Sub-150KB Frame Caps",
          "Seamless Endless Loop",
          "Clean Alpha Edges",
        ],
        deliverables: [
          "Animated banner loops sized across Google Display & email breakpoints",
          "Zero-banding custom color palette optimization",
          "High-contrast final frame freeze fallback for restricted clients",
          "Clean .GIF / WebP / Lottie / AE source bundle",
        ],
        turnaround: "2–4 Business Days",
        nativeFormats: "After Effects · PSD · GIF/WebP",
        colorOrOutputSpec: "Rec.709 / sRGB · Weight Capped",
      },
      {
        slug: "video-title-design",
        title: "Video Titles & Lower Thirds",
        shortSummary:
          "Broadcast-grade MOGRT motion templates, chapter cards, speaker name lower thirds, and end screens.",
        heroSubtitle:
          "Empower your video editors inside Premiere Pro and DaVinci Resolve with drag-and-drop Motion Graphics Templates (.MOGRT) locked strictly to your brand fonts and margins.",
        designTerms: [
          "Editable .MOGRT Kits",
          "Broadcast Title-Safe",
          "Alpha ProRes Overlays",
          "Dynamic Auto-Resize Boxes",
        ],
        deliverables: [
          "Auto-scaling lower thirds, title slates, speaker tags & quote boxes",
          "Exported Premiere Pro `.MOGRT` templates + alpha ProRes QuickTime files",
          "YouTube / webinar subscribe & next-episode end-screen packages",
          "Full font & color control locked cleanly inside After Effects",
        ],
        turnaround: "4–6 Business Days",
        nativeFormats: "After Effects · MOGRT · MOV",
        colorOrOutputSpec: "4K 60fps · Broadcast Safe",
      },
      {
        slug: "explainer-motion-graphics",
        title: "Explainer Motion Graphics",
        shortSummary:
          "Clean 30–60s SaaS UI walkthroughs and abstract system animations turning complex code into clarity.",
        heroSubtitle:
          "Show global enterprise buyers how your software thinks—vector dashboard zoom-ins, smooth cursor interactions, and crystal-clear data flow choreography without cliché cartoon templates.",
        designTerms: [
          "Storyboard Animatic",
          "UI Camera Choreography",
          "30–60s Visual Script",
          "Vector Smooth Scaling",
        ],
        deliverables: [
          "Storyboard styleframes, script pacing & vector UI asset prep",
          "Full 30–60 second custom SaaS/product explainer animation",
          "Clean captioned version + subtle ambient SFX mix",
          "4K MP4 master + organized After Effects / Illustrator project",
        ],
        turnaround: "1–2 Weeks",
        nativeFormats: "After Effects · AI · MP4 4K",
        colorOrOutputSpec: "16:9 / 1:1 · 60fps Rec.709",
      },
      {
        slug: "motion-poster-design",
        title: "Motion Posters",
        shortSummary:
          "Ambient animated editorial posters, conference lobby loops, and digital out-of-home (DOOH) screens.",
        heroSubtitle:
          "Bridge classic Swiss graphic poster layout with hypnotic continuous typography loops engineered for vertical lobby totems, retail screens, and event announcements.",
        designTerms: [
          "DOOH Vertical Ratios",
          "Kinetic Swiss Grid",
          "Seamless 10s Ambient Loop",
          "Event Totem Contrast",
        ],
        deliverables: [
          "Vertical 9:16 / DOOH pixel-exact animated poster sequence",
          "Seamless endless loop choreography for trade-show or retail screens",
          "Paired static high-res PDF print poster edition if needed",
          "Clean MP4 render + After Effects native master",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "After Effects · AI · MP4",
        colorOrOutputSpec: "1080×1920 / 4K Vertical",
      },
    ],
  },
  {
    number: "10",
    slug: "photo-editing",
    menuTitle: "Photo Editing",
    fullTitle: "Photo Editing & Retouching",
    menuDesc: "Retouching, restoration, compositing",
    iconKey: "sparkles",
    heroHeadline: "Commercial Retouching & Compositing",
    heroAccent: "for Print & Digital Purity.",
    heroSummary:
      "Editorial product retouching, hand-drawn Pen-Tool clipping paths, 16-bit frequency separation beauty/portrait polish, atmospheric compositing, restoration, and CMYK ICC color grading.",
    designTerms: [
      "16-Bit Non-Destructive",
      "Hand-Drawn Pen Paths",
      "Frequency Separation",
      "CMYK + sRGB Grading",
    ],
    relatedCaseSlugs: [
      "james-spencer-product-catalog",
      "ecommerce-banners-campaign",
    ],
    services: [
      {
        slug: "product-photo-retouching",
        title: "Product Photo Retouching",
        shortSummary:
          "Museum-clean studio polish removing dust, label wrinkles, glare hotspots, and uneven bottle reflections.",
        heroSubtitle:
          "Give raw factory or studio captures flagship cosmetics, beverage, and hardware polish—preserving natural metal, glass, and matte paper micro-texture.",
        designTerms: [
          "16-Bit Frequency Sep",
          "Glass & Chrome Gradients",
          "Label Dust Cleanup",
          "Natural Contact Shadows",
        ],
        deliverables: [
          "Blemish, seam, micro-scratch & studio rigging removal",
          "Crisp gradient reconstruction on chrome, aluminum & glass bottles",
          "True natural ground shadow + optional crisp reflection pass",
          "Non-destructive layered PSD + 300 DPI TIFF & WebP exports",
        ],
        turnaround: "2–4 Business Days",
        nativeFormats: "Photoshop PSD · TIFF · PNG",
        colorOrOutputSpec: "16-Bit Adobe RGB / sRGB",
      },
      {
        slug: "background-removal",
        title: "Background Removal",
        shortSummary:
          "Precision hand-drawn Bezier Pen-Tool clipping paths and alpha hair masking across complex SKU catalogs.",
        heroSubtitle:
          "Zero jagged AI cutouts or halo fringes—every edge is hand-traced with vector Pen-Tool paths embedded directly in TIFF/PSD files for flawless print and transparent e-commerce placement.",
        designTerms: [
          "Manual Pen-Tool Paths",
          "Alpha Channel Hair Mask",
          "Zero Color Fringe",
          "Multi-Path Layering",
        ],
        deliverables: [
          "Razor-sharp edge isolation (glass transparency, fabric weave & fur)",
          "Embedded named Photoshop vector Clipping Path for InDesign print",
          "Pure #FFFFFF, custom swatch, or transparent alpha exports",
          "Batch consistency across high-volume SKU catalogs",
        ],
        turnaround: "1–3 Business Days",
        nativeFormats: "PSD · TIFF · PNG",
        colorOrOutputSpec: "Embedded Vector Clipping Path",
      },
      {
        slug: "commercial-retouching",
        title: "Commercial Photo Retouching",
        shortSummary:
          "Editorial portrait, fashion lookbook, real-estate, and corporate executive retouching with natural skin pore fidelity.",
        heroSubtitle:
          "Never waxy airbrushing—non-destructive Dodge & Burn tonal sculpting and texture-preserving frequency separation tuned for billboards, leadership pages, and print magazines.",
        designTerms: [
          "Dodge & Burn Sculpting",
          "True Skin Texture Kept",
          "Wardrobe Crease Smooth",
          "Editorial Tonal Curve",
        ],
        deliverables: [
          "Executive portraits, campaign talent & architectural lookbook finishing",
          "Clean stray-hair, crease & distracting background removal",
          "Consistent color temperature across multi-subject team photography",
          "16-bit layered PSD + print CMYK TIFF & Retina web crops",
        ],
        turnaround: "3–5 Business Days",
        nativeFormats: "Photoshop PSD · TIFF · JPEG",
        colorOrOutputSpec: "16-Bit Color Managed",
      },
      {
        slug: "photo-compositing",
        title: "Photo Manipulation & Compositing",
        shortSummary:
          "Seamless multi-plate visual storytelling combining photography, 3D renders, lighting, and atmosphere.",
        heroSubtitle:
          "Build key visuals photography alone cannot capture—uniting focal depth, edge light wrap, atmospheric haze, and exact perspective match for ads and covers.",
        designTerms: [
          "Perspective Vanishing Point",
          "Light-Wrap Blending",
          "Depth-of-Field Match",
          "Multi-Plate Color Sync",
        ],
        deliverables: [
          "Bespoke hero key-visual scene combining multiple image assets",
          "Custom specular light-wrap, cast shadows & optical blur matching",
          "Editorial key art prepared for book covers, OOH ads & launch headers",
          "High-res organized layered master `.PSD`",
        ],
        turnaround: "4–7 Business Days",
        nativeFormats: "Photoshop PSD · TIFF · PNG",
        colorOrOutputSpec: "16-Bit High-Res Master",
      },
      {
        slug: "photo-restoration",
        title: "Photo Restoration",
        shortSummary:
          "Archival scratch repair, water-damage reconstruction, fade recovery, and delicate heritage colorization.",
        heroSubtitle:
          "Preserve company heritage archives, historical documents, and heirloom portraits with meticulous pixel reconstruction and faithful period-accurate toning.",
        designTerms: [
          "Crack & Fold Inpainting",
          "Archival Tonal Recovery",
          "Authentic Period Coloring",
          "300+ DPI Print Enlargement",
        ],
        deliverables: [
          "Removal of tears, mold stains, creases & faded exposure blotches",
          "Missing edge & grain reconstruction matching original film stock",
          "Restored archival tonal master + optional true-tone colorization",
          "Museum print-ready 300–600 DPI uncompressed TIFF & PDF",
        ],
        turnaround: "3–6 Business Days",
        nativeFormats: "Photoshop PSD · TIFF · PNG",
        colorOrOutputSpec: "300–600 DPI Archival Print",
      },
      {
        slug: "image-enhancement",
        title: "Color Correction & Image Enhancement",
        shortSummary:
          "Batch RAW grading, Pantone product accuracy matching, noise reduction, and print CMYK conversion.",
        heroSubtitle:
          "Ensure every fabric swatch, skincare cream, or architectural timber looks identical between calibrated studio monitors, Shopify screens, and uncoated catalog paper.",
        designTerms: [
          "Delta-E Color Accuracy",
          "Unsharp Mask Output",
          "Uncoated ICC Separation",
          "RAW Luminance Balance",
        ],
        deliverables: [
          "Color-accurate product grading matched directly to Pantone / physical samples",
          "Batch exposure, white balance & shadow detail recovery across shoots",
          "Custom output sharpening separated for Retina screens vs. 300 DPI press",
          "Clean Lightroom / Photoshop grading catalog + calibrated final exports",
        ],
        turnaround: "1–3 Business Days",
        nativeFormats: "RAW/DNG · PSD · TIFF · WebP",
        colorOrOutputSpec: "sRGB + FOGRA39 / SWOP Match",
      },
    ],
  },
];

export const TOTAL_GRAPHIC_CATEGORIES = GRAPHIC_DESIGN_CATEGORIES.length;

export const TOTAL_GRAPHIC_SERVICES = GRAPHIC_DESIGN_CATEGORIES.reduce(
  (sum, cat) => sum + cat.services.length,
  0
);

export function getGraphicCategoryBySlug(
  categorySlug: string
): GraphicDesignCategory | undefined {
  return GRAPHIC_DESIGN_CATEGORIES.find((cat) => cat.slug === categorySlug);
}

export function getGraphicServiceBySlugs(
  categorySlug: string,
  serviceSlug: string
): { category: GraphicDesignCategory; service: GraphicDesignService } | undefined {
  const category = getGraphicCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const service = category.services.find((srv) => srv.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}

export function getAllGraphicServiceParams(): { category: string; service: string }[] {
  return GRAPHIC_DESIGN_CATEGORIES.flatMap((cat) =>
    cat.services.map((srv) => ({
      category: cat.slug,
      service: srv.slug,
    }))
  );
}

export type BrandServiceCategory =
  | "All"
  | "Brand Identity"
  | "UI/UX & Systems"
  | "Visuals & Decks"
  | "Print & Code Parity";

export interface BrandServiceItem {
  code: string;
  id: string;
  title: string;
  category: Exclude<BrandServiceCategory, "All">;
  summary: string;
  designTerms: string[];
  nativeFormat: string;
}

export interface BrandCraftStandard {
  code: string;
  title: string;
  spec: string;
  rule: string;
}

export const BRAND_SERVICE_CATEGORIES: BrandServiceCategory[] = [
  "All",
  "Brand Identity",
  "UI/UX & Systems",
  "Visuals & Decks",
  "Print & Code Parity",
];

export const BRAND_DIGITAL_SERVICES: BrandServiceItem[] = [
  {
    code: "01",
    id: "brand-strategy-architecture",
    title: "Brand Strategy & Architecture",
    category: "Brand Identity",
    summary:
      "Clear positioning frameworks and visual semiotics designed to set multi-product brands apart globally.",
    designTerms: [
      "Visual Semiotics",
      "Monolithic Hierarchy",
      "Art Direction",
      "Brand Positioning",
    ],
    nativeFormat: "Strategy Deck · PDF",
  },
  {
    code: "02",
    id: "logotypes-monograms-marks",
    title: "Logotypes & Geometric Marks",
    category: "Brand Identity",
    summary:
      "Mathematical Bezier trademarks engineered to stay razor-sharp from 16px favicons to foil dies.",
    designTerms: [
      "φ 1.618 Golden Ratio",
      "Optical Kerning",
      "2× Clear-Space",
      "16px Favicon Scaling",
    ],
    nativeFormat: "AI · EPS · SVG",
  },
  {
    code: "03",
    id: "brand-guidelines-manuals",
    title: "Brand Guidelines Manuals",
    category: "Brand Identity",
    summary:
      "Digital and print identity manuals uniting grid rules, typographic hierarchy, and dual color specs.",
    designTerms: [
      "Swiss Modular Grid",
      "Type Scales",
      "RGB / CMYK / PMS",
      "Usage Governance",
    ],
    nativeFormat: "Figma · InDesign · PDF",
  },
  {
    code: "04",
    id: "figma-design-systems",
    title: "Figma Design Systems",
    category: "UI/UX & Systems",
    summary:
      "Multi-theme Figma variable libraries built for seamless 1:1 parity with engineering teams.",
    designTerms: [
      "Figma Variables",
      "Atomic Components",
      "8pt Auto-Layout",
      "Light & Dark Modes",
    ],
    nativeFormat: "Figma Library · JSON",
  },
  {
    code: "05",
    id: "uiux-wireframes-prototyping",
    title: "UI/UX Product & Prototyping",
    category: "UI/UX & Systems",
    summary:
      "End-to-end user flows, responsive wireframes, and interactive prototypes tested across core states.",
    designTerms: [
      "IA User Flows",
      "Wireframe → Hi-Fi",
      "Interactive Prototypes",
      "Edge-State Specs",
    ],
    nativeFormat: "Figma Dev Mode",
  },
  {
    code: "06",
    id: "accessible-inclusive-wcag",
    title: "Accessible Design (WCAG / AODA)",
    category: "UI/UX & Systems",
    summary:
      "Inclusive digital products calibrated for North American AODA/ADA and European compliance.",
    designTerms: [
      "≥ 4.5:1 Contrast",
      "WCAG 2.1 AA / AODA",
      "2px Focus Rings",
      "44px Touch Targets",
    ],
    nativeFormat: "Contrast Audit · Specs",
  },
  {
    code: "07",
    id: "investor-pitch-decks",
    title: "Investor Pitch Decks & Keynotes",
    category: "Visuals & Decks",
    summary:
      "Seed to Series B fundraising narratives built on crisp 16:9 grids and bespoke financial charts.",
    designTerms: [
      "16:9 Editorial Grid",
      "Vector Data Charts",
      "Narrative Pacing",
      "Master Slides",
    ],
    nativeFormat: "Figma · PPTX · Keynote",
  },
  {
    code: "08",
    id: "digital-marketing-campaign-kits",
    title: "Digital Campaigns & Social Kits",
    category: "Visuals & Decks",
    summary:
      "Modular social, ad, and launch templates keeping every external marketing campaign on-brand.",
    designTerms: [
      "1:1 · 4:5 · 16:9 Grids",
      "Auto-Layout Templates",
      "Performance Ad UI",
      "OpenGraph Kits",
    ],
    nativeFormat: "Figma Kits · WebP",
  },
  {
    code: "09",
    id: "custom-iconography-diagrams",
    title: "Custom Iconography & Diagrams",
    category: "Visuals & Decks",
    summary:
      "Proprietary keyline icon families and clear technical diagrams exported as clean inline SVG.",
    designTerms: [
      "24px Optical Keyline",
      "Unified 1.5px Stroke",
      "Architecture Diagrams",
      "Minified SVG",
    ],
    nativeFormat: "AI · Figma · SVG",
  },
  {
    code: "10",
    id: "motion-systems-microinteractions",
    title: "Motion & Micro-Interactions",
    category: "Print & Code Parity",
    summary:
      "Restrained motion curves and lightweight vector animations crafted for responsive product feel.",
    designTerms: [
      "Cubic-Bezier Curves",
      "60fps Choreography",
      "Lottie / Rive Vector",
      "Reduced-Motion Safe",
    ],
    nativeFormat: "Lottie JSON · CSS",
  },
  {
    code: "11",
    id: "brand-to-print-cross-media",
    title: "Brand-to-Print Collateral Parity",
    category: "Print & Code Parity",
    summary:
      "Calibrated screen-to-ink visual systems unifying packaging, executive stationery, and event print.",
    designTerms: [
      "sRGB ↔ CMYK / PMS",
      "Stationery & Kits",
      "Event & Merch Print",
      "Screen-to-Ink Parity",
    ],
    nativeFormat: "InDesign · PDF/X-4",
  },
  {
    code: "12",
    id: "design-to-code-token-handoff",
    title: "Design-to-Code Token Handoff",
    category: "Print & Code Parity",
    summary:
      "Direct CSS variable mapping and staging UI reviews so production software matches Figma pixel-for-pixel.",
    designTerms: [
      "W3C Token JSON",
      "Tailwind @theme",
      "320–2560px Fluid",
      "Pixel-Parity QA",
    ],
    nativeFormat: "CSS Tokens · PR Review",
  },
];

export const BRAND_CRAFT_STANDARDS: BrandCraftStandard[] = [
  {
    code: "01",
    title: "Golden-Ratio Vector Marks",
    spec: "φ 1.618 GRID · CLEAN BEZIERS",
    rule: "Zero auto-traced curves—mathematically tangent trademarks built for both 16px favicons and brass foil dies.",
  },
  {
    code: "02",
    title: "8pt Atomic Figma Variables",
    spec: "VARIABLES · 8PT BASE RHYTHM",
    rule: "Semantic design tokens and responsive auto-layout rules that translate cleanly into production CSS.",
  },
  {
    code: "03",
    title: "WCAG 2.1 AA / AODA Contrast",
    spec: "≥ 4.5:1 BODY · 2PX FOCUS RING",
    rule: "Contrast-audited typography and keyboard states baked into the visual palette from Day 1.",
  },
  {
    code: "04",
    title: "sRGB ↔ CMYK / Pantone Parity",
    spec: "SCREEN HEX + PRESS SWATCHES",
    rule: "Calibrated dual color palettes so websites, dashboards, stationery, and retail packaging match effortlessly.",
  },
];

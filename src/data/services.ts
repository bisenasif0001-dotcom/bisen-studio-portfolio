export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  categoryGroup: "Design" | "Engineering" | "Full-Spectrum";
  headline: string;
  description: string;
  idealFor: string[];
  deliverables: string[];
  techAndSpecs: string[];
  typicalTimeline: string;
  startingUsd: number;
  highlightStat: string;
  hubHref?: string;
  hubLabel?: string;
  image: string;
  relatedCaseSlug: string;
  intakeCategory:
    | "graphic-design"
    | "website"
    | "mobile-app"
    | "dashboards-saas"
    | "ai-engineering";
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "digital-design",
    number: "01",
    title: "Digital & Brand Graphic Design",
    shortTitle: "Digital Design",
    categoryGroup: "Design",
    headline: "Visual identity systems built for clarity, authority, and growth.",
    description:
      "We create brand identities, scalable Figma UI kits, investor pitch decks, and campaign graphics—pairing 16+ years of visual design direction with modern digital responsiveness.",
    idealFor: ["Funded Startups", "Rebranding Companies", "Solo Founders"],
    deliverables: [
      "Complete Brand Identity & Guidelines",
      "Modular Figma Design Systems",
      "Web, Mobile & SaaS Interface Design",
      "Seed & Series A Investor Pitch Decks",
      "Campaign Creatives & Social Kits",
    ],
    techAndSpecs: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects"],
    typicalTimeline: "1–3 Weeks",
    startingUsd: 2200,
    highlightStat: "Editable Figma & vector master files",
    hubHref: "/graphic-design/brand-identity",
    hubLabel: "Explore Graphic Design",
    image: "/images/portfolio/iba-1.webp",
    relatedCaseSlug: "iba-aesthetics-brand-identity",
    intakeCategory: "graphic-design",
  },
  {
    id: "print-design",
    number: "02",
    title: "Print Design & Pre-Press Craft",
    shortTitle: "Print Design",
    categoryGroup: "Design",
    headline: "Tactile, press-ready print work engineered for clean physical production.",
    description:
      "With deep print heritage, we craft product packaging, retail brochures, annual reports, stationery, and exhibition graphics calibrated cleanly for CMYK and Pantone vendor presses.",
    idealFor: ["CPG & Retail Brands", "Corporate Teams", "Events & Trade Shows"],
    deliverables: [
      "Structural Packaging & Box Die-Lines",
      "Brochures, Lookbooks & Annual Reports",
      "Editorial Catalogs & Business Stationery",
      "Trade Show Booths & Large-Format Signage",
      "Press-Ready CMYK / Pantone PDF/X-4 Files",
    ],
    techAndSpecs: ["Adobe InDesign", "Illustrator", "CMYK / PMS Profiles", "PDF/X-4 Pre-Press"],
    typicalTimeline: "5–14 Days",
    startingUsd: 1400,
    highlightStat: "Clean bleed, trim & swatch specifications",
    hubHref: "/graphic-design/print-design",
    hubLabel: "Explore Print & Packaging",
    image: "/images/portfolio/r80-1.webp",
    relatedCaseSlug: "r80-rugby-print-catalogue",
    intakeCategory: "graphic-design",
  },
  {
    id: "websites",
    number: "03",
    title: "High-Performance Websites",
    shortTitle: "Websites",
    categoryGroup: "Engineering",
    headline: "Public-facing business websites and e-commerce stores built to convert.",
    description:
      "From bespoke startup flagships and multi-page corporate sites to Shopify e-commerce and headless CMS platforms, we combine visual polish with technical SEO, accessibility, and fast page loads.",
    idealFor: ["B2B Startups", "E-Commerce Brands", "Growing Businesses"],
    deliverables: [
      "Responsive Marketing & Corporate Websites",
      "Shopify, WordPress & Webflow Platforms",
      "High-Converting Landing Page Systems",
      "Technical SEO, Metadata & Schema Setup",
      "Performance Optimization & Analytics Setup",
    ],
    techAndSpecs: ["Next.js", "Shopify / WordPress", "Tailwind CSS", "Technical SEO"],
    typicalTimeline: "After discovery",
    startingUsd: 3500,
    highlightStat: "SEO-ready & conversion-structured architecture",
    hubHref: "/website",
    hubLabel: "Explore 60 Website Services",
    image: "/images/portfolio/live-danielle-rtb-media-2026-hero.png",
    relatedCaseSlug: "danielle-rtb-media-website-2026",
    intakeCategory: "website",
  },
  {
    id: "apps",
    number: "04",
    title: "Web & Mobile Applications",
    shortTitle: "Apps",
    categoryGroup: "Engineering",
    headline: "Interactive iOS, Android, and logged-in application workflows.",
    description:
      "We design and build interactive mobile apps and user-facing software products—covering mobile UX flows, native/cross-platform builds, API integrations, authentication, and app-store preparation.",
    idealFor: ["Mobile Product Startups", "Digital Businesses", "On-Demand Apps"],
    deliverables: [
      "iOS & Android Mobile App Development",
      "Cross-Platform Flutter / React Native Builds",
      "Interactive Mobile & Product UI/UX Flows",
      "User Auth, Stripe Billing & API Connectivity",
      "Testing, Store Deployment & Maintenance",
    ],
    techAndSpecs: ["React Native", "Flutter", "Swift / Kotlin", "Node.js APIs"],
    typicalTimeline: "After technical assessment",
    startingUsd: 6500,
    highlightStat: "Maintainable, human-reviewed app releases",
    hubHref: "/mobile-app",
    hubLabel: "Explore 60 Mobile App Services",
    image: "/images/portfolio/edunuts-1.webp",
    relatedCaseSlug: "edunuts-academy-mobile-app",
    intakeCategory: "mobile-app",
  },
  {
    id: "dashboards",
    number: "05",
    title: "SaaS Dashboards & Data Interfaces",
    shortTitle: "Dashboards",
    categoryGroup: "Engineering",
    headline: "Business platforms, admin panels, CRMs, and data visualization UIs.",
    description:
      "Turn dense operational telemetry into clear executive tools. We architect multi-tenant SaaS products, custom admin dashboards, CRM/ERP workflows, client portals, and role-based interfaces.",
    idealFor: ["B2B SaaS Founders", "Fintech & Health", "Operations Teams"],
    deliverables: [
      "Executive Analytics & BI Dashboards",
      "Multi-Tenant SaaS & Client Portals",
      "Custom Data Tables, Filters & Charting",
      "Role-Based Access Control (RBAC) UI",
      "Scalable Component Systems & Documentation",
    ],
    techAndSpecs: ["TypeScript", "TanStack Table", "Recharts", "PostgreSQL"],
    typicalTimeline: "After scope approval",
    startingUsd: 4800,
    highlightStat: "Built for daily high-density workflows",
    hubHref: "/services/dashboards-saas",
    hubLabel: "Explore 60 SaaS Services",
    image: "/images/portfolio/live-ces-enterprise-2026-hero.png",
    relatedCaseSlug: "ces-enterprise-event-operations-2026",
    intakeCategory: "dashboards-saas",
  },
  {
    id: "digital-products",
    number: "06",
    title: "End-to-End Digital Products & AI Systems",
    shortTitle: "Digital Products",
    categoryGroup: "Full-Spectrum",
    headline: "Complete product launches uniting brand, UI/UX, software, and AI.",
    description:
      "Need brand identity, customer portal, AI assistant or workflow automation built cleanly together? Our three principals manage the full lifecycle from architecture through deployment under clear ownership.",
    idealFor: ["0→1 Founders", "Product Teams", "New Business Lines"],
    deliverables: [
      "Product Discovery, UX & Architecture Roadmap",
      "Brand Identity + Public Website + Core App",
      "AI Assistants, Automation & LLM Integrations",
      "Launch Print & Sales Collateral",
      "Agreed Post-Launch Support & Handover",
    ],
    techAndSpecs: ["Next.js / TS", "OpenAI / Anthropic APIs", "Design Systems", "CI/CD"],
    typicalTimeline: "After discovery",
    startingUsd: 8500,
    highlightStat: "One cohesive 3-principal studio unit",
    hubHref: "/ai-engineering",
    hubLabel: "Explore AI Engineering",
    image: "/images/portfolio/live-pawmedal-v3-hero.png",
    relatedCaseSlug: "pawmedal-website-v3",
    intakeCategory: "ai-engineering",
  },
];

export const CRAFT_STANDARDS_PILLARS = [
  {
    title: "Print Excellence",
    detail:
      "Print-ready layouts, production dielines, CMYK/Pantone color preparation, and pre-press precision reviewed before press runs.",
  },
  {
    title: "Digital Experience",
    detail:
      "Responsive interfaces across desktop and mobile, WCAG-conscious visual contrast, clean hierarchy, and optimized media assets.",
  },
  {
    title: "Engineering Quality",
    detail:
      "Maintainable TypeScript & modern frameworks, human PR code reviews, access-control checks, and reliable API integrations.",
  },
  {
    title: "Handover & Ownership",
    detail:
      "Clear deliverable checklists, organized Git/Figma/print source packages, documentation, and written ownership terms.",
  },
];

export const PRINT_VS_DIGITAL_SPECS = [
  {
    label: "Color Space & Calibration",
    digital: "sRGB / Display-P3, WCAG-conscious text contrast targets",
    print: "CMYK Process & Pantone Spot (PMS) profiles where vendor-required",
  },
  {
    label: "Resolution & Assets",
    digital: "Scalable SVG vectors, responsive WebP/AVIF & Retina image assets",
    print: "High-resolution 300+ DPI raster & clean outlined vector paths",
  },
  {
    label: "Layout Grid & Bleed",
    digital: "Responsive fluid grids calibrated across mobile, tablet & desktop",
    print: "Modular print grids with agreed trim, bleed & fold safety margins",
  },
  {
    label: "Final Master Handover",
    digital: "Clean Git repository, editable Figma files & environment guide",
    print: "Press-ready PDF/X-4 files, packaged source & structural dielines",
  },
];

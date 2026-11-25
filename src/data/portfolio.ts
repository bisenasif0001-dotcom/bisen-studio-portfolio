export type PortfolioCategory =
  | "All"
  | "Dashboards & SaaS"
  | "Web & Mobile Apps"
  | "Websites"
  | "Graphic Design";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  region: string;
  regionCode: "US" | "EU" | "UK" | "AU" | "CA" | "NZ" | "GLOBAL";
  year: string;
  category: Exclude<PortfolioCategory, "All">;
  tags: string[];
  engagementModel: string;
  timeline: string;
  image: string;
  galleryImages?: string[];
  behanceUrl?: string;
  liveUrl?: string;
  deploymentBadge?: string;
  summary: string;
  challenge: string;
  solution: string;
  aiAccelerationNote: string;
  metrics: { value: string; label: string }[];
  deliverables: string[];
  stack: string[];
  accent: string;
}

export const BEHANCE_PROFILE = {
  url: "https://www.behance.net/advarto/projects",
  handle: "advarto",
  name: "Bisen Brandcraft",
  totalPublished: 85,
  totalViews: "22,888",
  appreciations: "709",
  followers: "464",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "photobooth-supplier-2026",
    title: "Photo Booth Supplier — New England 30+ Booth Rental Platform",
    client: "Photo Booth Supplier",
    region: "New England · 6 States (US)",
    regionCode: "US",
    year: "2026",
    category: "Websites",
    tags: ["Event Rental Web", "AI Photo Booth", "Filterable Catalog", "Dark UI"],
    engagementModel: "2026 Conversion Redesign",
    timeline: "2026 Live Interactive Build",
    image: "/images/portfolio/live-photobooth-2026-hero.png",
    galleryImages: ["/images/portfolio/live-photobooth-2026-hero.png"],
    liveUrl: "https://graphicsox-spec.github.io/photobooth-supplier-2026/",
    deploymentBadge: "Live Interactive Build",
    summary:
      "Modern dark-navy and electric-blue event rental flagship for New England's Photo Booth Supplier—featuring an AI Photo Booth showcase, venue trust marquee (Fenway Park, MIT, Wayfair), and a filterable 30+ booth directory.",
    challenge:
      "Corporate planners and wedding clients browsing 30+ booth types (AI, Glam, 360° Slow Motion, Mirror, Vogue, Roamer) needed fast category filtering without getting overwhelmed.",
    solution:
      "Designed a split hero with floating feature badges ('Beauty Filter Built-in', 'Instant Print', 'Red Carpet Ready'), venue marquee, AI Studio highlight, and 8-tab interactive booth filtering.",
    aiAccelerationNote:
      "Live 2026 interactive build featuring animated venue marquee, category tab filters, and persistent quote CTA.",
    metrics: [
      { value: "30+", label: "Filterable Booth Styles" },
      { value: "AI Studio", label: "2026 Flagship Experience" },
      { value: "8 Tabs", label: "Interactive Catalog Filter" },
    ],
    deliverables: [
      "Dark Navy Split Hero with Floating Feature Badges",
      "Client Venue Trust Marquee & Stats Strip",
      "AI Photo Booth Feature Section & Event Verticals",
      "Filterable 30+ Booth Catalog & Quote Funnel",
    ],
    stack: ["Modern HTML/CSS/JS", "Interactive Filtering", "Dark Event UI", "Conversion UX"],
    accent: "#0A192F",
  },
  {
    slug: "ces-enterprise-event-operations-2026",
    title: "CES EOS v1.0 — Enterprise Event Operations & Dispatch SaaS Dashboard",
    client: "Creative Event Services",
    region: "Global Enterprise Operations (US)",
    regionCode: "US",
    year: "2026",
    category: "Dashboards & SaaS",
    tags: ["Enterprise SaaS", "Firestore Live Sync", "Operations Dashboard", "Dispatch"],
    engagementModel: "SaaS System Build",
    timeline: "2026 Live Web App",
    image: "/images/portfolio/live-ces-enterprise-2026-hero.png",
    galleryImages: [
      "/images/portfolio/live-ces-enterprise-2026-hero.png",
      "/images/portfolio/live-ces-enterprise-2026-section.png",
    ],
    liveUrl: "https://graphicsox-spec.github.io/CES-Enterprise-Event-Operations-2026/",
    deploymentBadge: "Live SaaS Web App",
    summary:
      "Real-time Firestore-backed Enterprise Event Operations System (EOS v1.0) managing multi-event pipelines, crew assignments, equipment inventory utilization, truck dispatch logistics, and live conflict/shortage alerts.",
    challenge:
      "Event production teams juggling simultaneous expos, AI booths, LED games, lounge setups, and truck fleets needed instant visibility into overlapping dispatches, crew shortages, and inventory repairs.",
    solution:
      "Architected a dark-mode command center with 4 clickable KPI cards, a 7-day and 30-day event pipeline, real-time alert feeds (truck overlap, staff shortage, QR strike scans), and category-level inventory utilization bars.",
    aiAccelerationNote:
      "Live interactive 2026 web application featuring real-time clock telemetry, role badge access, and multi-module operations navigation (Events, Staff, Inventory, Logistics, Automation, Reports).",
    metrics: [
      { value: "EOS v1.0", label: "Live Operations System" },
      { value: "7 Modules", label: "Events, Fleet & Inventory" },
      { value: "Real-Time", label: "Conflict & Alert Engine" },
    ],
    deliverables: [
      "Master Operations Dashboard & Sidebar Navigation",
      "Real-Time Conflict, Staff Shortage & Inventory Alert Feed",
      "7-Day Schedule & 30-Day Event Pipeline Tracking",
      "Category Inventory Utilization & User Guide System",
    ],
    stack: ["React / Web App", "Cloud Firestore", "Dark Telemetry UI", "Role-Based Views"],
    accent: "#0A192F",
  },
  {
    slug: "creative-fasteners-usa-v4",
    title: "Creative Fasteners — US Aerospace & Defense Manufacturing Site",
    client: "Creative Fasteners",
    region: "Temecula, California (US)",
    regionCode: "US",
    year: "2026",
    category: "Websites",
    tags: ["B2B Manufacturing", "Aerospace & Defense", "RFQ Conversion", "Industrial UI"],
    engagementModel: "B2B Industrial Web Build",
    timeline: "Live B2B Build (V4)",
    image: "/images/portfolio/live-creative-fasteners-v4-hero.png",
    galleryImages: ["/images/portfolio/live-creative-fasteners-v4-hero.png"],
    liveUrl: "https://graphicsox-spec.github.io/creative-fasteners-usa-v4/",
    deploymentBadge: "Live B2B Build",
    summary:
      "Precision B2B manufacturing website for California-based Creative Fasteners—showcasing cold heading, thread rolling, and secondary operations across Aerospace, Military/Defense, Oil & Gas, and Automotive verticals with streamlined RFQ flows.",
    challenge:
      "Defense and aerospace procurement engineers sourcing made-to-spec fasteners look for immediate manufacturing credibility, process control transparency, and responsive RFQ intake.",
    solution:
      "Crafted a crisp steel-blue and navy industrial interface anchored by an industry hero slideshow, 3 precision quality principles, and interactive Cold Heading / Thread Rolling / Secondary Operations capability tabs.",
    aiAccelerationNote:
      "Live V4 B2B manufacturing build tailored for US industrial procurement and fast technical quote requests.",
    metrics: [
      { value: "5 Sectors", label: "Aerospace, Defense & Oil" },
      { value: "3 Tabs", label: "Cold Heading & Threading" },
      { value: "RFQ Ready", label: "US B2B Procurement Flow" },
    ],
    deliverables: [
      "Multi-Industry Slideshow Hero & Navigation",
      "3-Column Precision & Inspection Principles",
      "Interactive Manufacturing Capabilities Switcher",
      "Industries Served & RFQ Lead Capture Flow",
    ],
    stack: ["B2B Web Design", "Interactive Tabs", "Responsive HTML/CSS", "RFQ Conversion"],
    accent: "#1E3A66",
  },
  {
    slug: "danielle-rtb-media-website-2026",
    title: "Raise The Bar Media — Hollywood PR Agency Flagship & EMV Calculator",
    client: "Raise The Bar Media",
    region: "Hollywood, Los Angeles (US)",
    regionCode: "US",
    year: "2026",
    category: "Websites",
    tags: ["Agency Website", "PR ROI Calculator", "Cmd+K Search", "Editorial UI"],
    engagementModel: "Flagship Web Build",
    timeline: "2026 Live Deployment",
    image: "/images/portfolio/live-danielle-rtb-media-2026-hero.png",
    galleryImages: ["/images/portfolio/live-danielle-rtb-media-2026-hero.png"],
    liveUrl: "https://graphicsox-spec.github.io/danielle-rtb-media-website-2026/",
    deploymentBadge: "Live Interactive Build",
    summary:
      "High-contrast black-and-gold editorial flagship for Hollywood boutique PR agency Raise The Bar Media—featuring floating pill navigation with Cmd+K search, live press wire ticker, tabbed industry verticals, and an interactive Earned Media Value (EMV) ROI calculator.",
    challenge:
      "Representing high-growth tech startups, climate/ESG pioneers, artists, and athletes requires a flagship website that demonstrates authority, press velocity, and measurable PR ROI immediately.",
    solution:
      "Crafted a luxury black-and-champagne editorial experience anchored by 4 agency KPI cards (4,500+ Tier-1 placements, $180M+ EMV), a live press wire feed, tabbed case studies, and a multi-parameter EMV ROI calculator.",
    aiAccelerationNote:
      "Live 2026 interactive build featuring Cmd+K command search, optional sound toggle, interactive ROI calculator sliders, and live Hollywood HQ clock.",
    metrics: [
      { value: "2026", label: "Live Flagship Build" },
      { value: "EMV Calc", label: "Interactive PR ROI Tool" },
      { value: "Cmd+K", label: "Quick Command Navigation" },
    ],
    deliverables: [
      "Black & Gold Editorial Agency Flagship Website",
      "Interactive Earned Media Value (EMV) ROI Calculator",
      "Cmd+K Quick Search & Floating Pill Navigation",
      "Live RTB Press Wire Feed & Industry Vertical Tabs",
    ],
    stack: ["Modern HTML/CSS/JS", "Interactive Calculators", "Cmd+K Search", "Editorial UI"],
    accent: "#0A192F",
  },
  {
    slug: "pawmedal-website-v3",
    title: "PawMedal — Smart Pet Finder Hardware & Apple Find My Product Site",
    client: "PawMedal (Always Find Home)",
    region: "Europe & Global D2C (EU)",
    regionCode: "EU",
    year: "2026",
    category: "Websites",
    tags: ["D2C E-Commerce", "Smart Hardware", "Apple Find My", "Product Configurator"],
    engagementModel: "D2C Product Flagship",
    timeline: "2026 Live Interactive Build",
    image: "/images/portfolio/live-pawmedal-v3-hero.png",
    galleryImages: ["/images/portfolio/live-pawmedal-v3-hero.png"],
    liveUrl: "https://graphicsox-spec.github.io/PawMedal-Website-V3-Combined-Sections/",
    deploymentBadge: "Live Interactive Build",
    summary:
      "Scandinavian-inspired D2C product website for PawMedal—uniting an interactive Finder vs. Smart Tag hero switcher, live mobile Cloud Pet Profile mockup, 3-tier EUR pricing cards, exploded engineering showcase, and customizer studio.",
    challenge:
      "Pet owners comparing NFC/QR tags (€49.90) with Apple Find My / Google Find Hub GPS finders (€79.90) needed effortless clarity on range, battery life, emergency medical profiles, and custom engraving.",
    solution:
      "Engineered a warm cream-and-gold product experience featuring instant mode switching in the hero, live Cloud Pet Profile screens, exploded hardware diagrams, comparison matrices, and an interactive tag design studio.",
    aiAccelerationNote:
      "Live interactive V3 build combining e-commerce cart state, dual hardware mode switchers, and responsive mobile UI showcase.",
    metrics: [
      { value: "3 Tiers", label: "Tag, Finder & Bundle Flow" },
      { value: "iOS + App", label: "Apple Find My & Cloud UI" },
      { value: "Customizer", label: "Interactive Design Studio" },
    ],
    deliverables: [
      "Dual-Mode Product Hero (PawMedal Finder vs. Tags)",
      "Interactive Cloud Pet Profile Mobile UI Preview",
      "3-Tier EUR Pricing, Matrix & Exploded Tech Showcase",
      "Tag Customizer Studio & Expandable FAQ System",
    ],
    stack: ["Interactive Web UI", "E-Commerce Cart", "Mobile Mockup UI", "D2C Conversion"],
    accent: "#F5C518",
  },
  {
    slug: "raj-personal-expenses-tracking-app-v2",
    title: "Personal Finance & Expense Tracker — Cashflow & Budget Web App",
    client: "Raj Tulsiani (FinTech V2)",
    region: "United States (US)",
    regionCode: "US",
    year: "2026",
    category: "Web & Mobile Apps",
    tags: ["Finance Web App", "Cashflow Charts", "Radial Gauges", "Budget Tracking"],
    engagementModel: "Web Application Build",
    timeline: "2026 Live Web App",
    image: "/images/portfolio/live-raj-expenses-app-v2-hero.png",
    galleryImages: [
      "/images/portfolio/live-raj-expenses-app-v2-hero.png",
      "/images/portfolio/live-raj-expenses-app-v2-section.png",
    ],
    liveUrl: "https://graphicsox-spec.github.io/Raj-s-Personal-Expences-Tracking-App-V2/",
    deploymentBadge: "Live Finance Web App",
    summary:
      "Dark-mode personal finance and household expense tracking application with browser-persisted transactions, 6 interactive KPI cards, 6-month cashflow charts, financial health radial gauges, recurring bill reminders, and category breakdowns.",
    challenge:
      "Tracking household income, mortgage/utilities, credit card utilization, recurring subscriptions, and annual property expenses in one private app without clunky spreadsheet formulas.",
    solution:
      "Built a crisp dark-slate finance application featuring global expense search, + Add Expense quick entry, Savings Rate / Budget Used / Card Usage radial gauges, horizontal category bars, and person-level splits.",
    aiAccelerationNote:
      "Live V2 finance application running smoothly client-side with local browser persistence, interactive views, and real-time budget alerts.",
    metrics: [
      { value: "8 Views", label: "Budgets, Cards & Bills" },
      { value: "6-Month", label: "Cashflow & Radial Gauges" },
      { value: "Private", label: "Local Browser Persistence" },
    ],
    deliverables: [
      "Interactive Dashboard with 6 Financial KPI Cards",
      "6-Month Cashflow Line Chart & Health Radial Gauges",
      "Transactions, Monthly Budget & Recurring Bills Views",
      "Credit Card Utilization, Home & Annual Expense Modules",
    ],
    stack: ["Web Application", "Interactive Charts", "Local Persistence", "Dark FinTech UI"],
    accent: "#0A192F",
  },
  {
    slug: "fwsi-live-website",
    title: "Framework Solutions (FWSI) — Enterprise Software & Automation Site",
    client: "Framework Solutions",
    region: "Los Angeles, California (US)",
    regionCode: "US",
    year: "2026",
    category: "Websites",
    tags: ["Enterprise Tech", "Custom Software", "B2B Corporate", "Live Production"],
    engagementModel: "Corporate Web Build",
    timeline: "Live Production Site",
    image: "/images/portfolio/live-fwsi-hero.png",
    galleryImages: [
      "/images/portfolio/live-fwsi-hero.png",
      "/images/portfolio/live-fwsi-section.png",
    ],
    liveUrl: "https://fwsi.net/",
    deploymentBadge: "Live Production Site",
    summary:
      "Live corporate website for Southern California enterprise software and systems integration firm Framework Solutions—presenting a 5-slide automation/cloud/AI hero showcase, KPI counter bar, core engineering capabilities, and client case highlights.",
    challenge:
      "Communicating 25+ years of SQL Server, .NET, Dynamics 365, and enterprise automation authority clearly to corporate CTOs and healthcare/finance buyers.",
    solution:
      "Designed and launched a clean navy-and-electric-blue corporate platform uniting a 5-topic hero carousel, 25+ / 200+ / 50+ / 99% KPI ledger, structured service cards, and enterprise solution highlights.",
    aiAccelerationNote:
      "Live production website at fwsi.net featuring responsive multi-page navigation, interactive service dropdowns, and lead capture.",
    metrics: [
      { value: "Live", label: "Production Site (fwsi.net)" },
      { value: "5 Slides", label: "Automation, Cloud & AI Hero" },
      { value: "B2B US", label: "Southern California Tech" },
    ],
    deliverables: [
      "5-Slide Enterprise Automation & AI Hero Showcase",
      "Company Overview & KPI Credibility Ledger",
      "Application Assessment, Dynamics 365 & CRM Service Pages",
      "Client Solutions Showcase & Blog / Contact Architecture",
    ],
    stack: ["Production Web", "Responsive CSS", "Corporate UI/UX", "Technical SEO"],
    accent: "#0A192F",
  },
  {
    slug: "r80-rugby-print-catalogue",
    title: "R80 Rugby — Sportswear & Equipment Print Catalogue System",
    client: "R80 Rugby (SPSS NZ Ltd)",
    region: "Christchurch, New Zealand (NZ)",
    regionCode: "NZ",
    year: "2016",
    category: "Graphic Design",
    tags: ["Print Catalogue", "Sports Apparel", "CMYK Pre-Press", "Price List"],
    engagementModel: "Print & Catalogue Sprint",
    timeline: "Complete Multi-Spread Print Master",
    image: "/images/portfolio/r80-1.webp",
    galleryImages: [
      "/images/portfolio/r80-1.webp",
      "/images/portfolio/r80-2.webp",
      "/images/portfolio/r80-cover.jpg",
    ],
    behanceUrl: "https://www.behance.net/gallery/35838601/R80-Rugby-Catalogue",
    summary:
      "High-contrast athletic print catalogue and wholesale price list for R80 Rugby—New Zealand's #1 rugby equipment supplier—organizing dozens of match balls, training kits, teamwear jerseys, and GST-inclusive SKU tables.",
    challenge:
      "Schools, clubs, and retail buyers needed a durable, scannable print catalogue presenting dozens of rugby ball models, teamwear customizers, and accessories with zero pricing ambiguity.",
    solution:
      "Built a bold black, vermilion-red, and white modular print grid pairing dramatic grayscale match photography on the cover with crisp product tiles, SKU codes, and GST pricing inside.",
    aiAccelerationNote:
      "One of the highest-engaged print systems on our Behance portfolio with 722 project views and 25 appreciations.",
    metrics: [
      { value: "722", label: "Behance Project Views" },
      { value: "25", label: "Behance Appreciations" },
      { value: "CMYK", label: "Press-Ready Print Grid" },
    ],
    deliverables: [
      "Tri-Fold / Multi-Spread Print Catalogue & Cover Art Direction",
      "SKU Grid & GST-Inclusive Wholesale Price Matrix",
      "Teamwear Custom Kit & Supplier Crest Showcase",
      "Press-Ready CMYK Layout & Bleed Specifications",
    ],
    stack: ["Adobe Photoshop", "Adobe Illustrator", "CMYK Print Layout", "Editorial Grid"],
    accent: "#0A192F",
  },
  {
    slug: "boston-lounge-decor-wordpress-website",
    title: "Boston Lounge Decor — Custom WordPress Event & Trade-Show Website",
    client: "Boston Lounge Decor",
    region: "Sterling, Massachusetts (US)",
    regionCode: "US",
    year: "2026",
    category: "Websites",
    tags: ["WordPress", "Custom PHP Theme", "4-Col Mega Menu", "Live Production"],
    engagementModel: "End-to-End Web Build",
    timeline: "2026 Live Production Release",
    image: "/images/portfolio/live-boston-hero.png",
    galleryImages: [
      "/images/portfolio/live-boston-hero.png",
      "/images/portfolio/boston-cover.png",
      "/images/portfolio/boston-3.webp",
      "/images/portfolio/boston-1.webp",
    ],
    liveUrl: "https://www.bostonloungedecor.com/",
    behanceUrl:
      "https://www.behance.net/gallery/251643443/Boston-Lounge-Decor-WordPress-Website-Development",
    deploymentBadge: "Live Production Site",
    summary:
      "Full custom WordPress website live at bostonloungedecor.com for a New England event and trade-show furniture rental leader—featuring a hand-coded child theme, 4-column dark mega-menu, interactive uplighting slider, and 35 curated lounge packages.",
    challenge:
      "Boston Lounge Decor offers dozens of modular LED bars, photo booths, dance floors, and lounge furniture packages across Boston, New York, and Hartford, requiring fast product discovery and instant quote requests on any device.",
    solution:
      "Engineered custom PHP page templates and a 4-column dark mega-menu organizing 40+ rental categories cleanly, paired with structured Faneuil Hall, Fenway Park, and Garden package cards and responsive quote flows.",
    aiAccelerationNote:
      "Full design, custom PHP child-theme engineering, interactive before/after uplighting slider, and live production deployment delivered in 2026.",
    metrics: [
      { value: "Live", label: "bostonloungedecor.com" },
      { value: "35+", label: "Curated Event Packages" },
      { value: "4-Col", label: "Custom Dark Mega-Menu" },
    ],
    deliverables: [
      "Custom WordPress Child Theme & Hand-Coded PHP Templates",
      "4-Column Dark Mega-Menu for 40+ Event & Rental Categories",
      "Interactive Before/After Uplighting Showcase Slider",
      "35 Package Showcase Cards & Quote Request Flows",
    ],
    stack: ["WordPress", "PHP", "HTML5 / CSS3", "JavaScript", "UI/UX Design"],
    accent: "#1E3A66",
  },
  {
    slug: "slg-art-website",
    title: "SLG Masterworks — Fine Art Acrylic Gallery & Virtual Showroom",
    client: "Sarah L. Glabman (SLG Masterworks)",
    region: "Scottsdale, Arizona (US)",
    regionCode: "US",
    year: "2026",
    category: "Websites",
    tags: ["Fine Art E-Commerce", "Virtual 3D Gallery", "Luxury Editorial", "Live Production"],
    engagementModel: "Luxury Art E-Commerce",
    timeline: "Live Production Site",
    image: "/images/portfolio/live-slg-art-hero.png",
    galleryImages: [
      "/images/portfolio/live-slg-art-hero.png",
      "/images/portfolio/live-slg-art-section.png",
    ],
    liveUrl: "https://slg.art/",
    deploymentBadge: "Live Production Site",
    summary:
      "Luxury fine-art photography gallery and e-commerce storefront live at slg.art—presenting museum-grade acrylic limited-edition wildlife and landscape prints, an interactive 3D/VR Virtual Showroom, trade licensing, and collector guides.",
    challenge:
      "High-net-worth collectors and interior designers buying museum-grade acrylic prints need full-bleed photographic immersion, edition scarcity transparency, and a virtual gallery walkthrough before commissioning.",
    solution:
      "Built an understated gallery-white editorial storefront opening with full-viewport photography ('Frozen Majesty'), paired with a 2-room Virtual Showroom walk-through, Limited Edition (145) & Collector's Reserve (15/24) previews, and artwork size guides.",
    aiAccelerationNote:
      "Live production luxury art & licensing storefront at slg.art serving collectors across the US and Canada.",
    metrics: [
      { value: "Live", label: "Production Gallery (slg.art)" },
      { value: "3D / VR", label: "Walk-Through Showroom" },
      { value: "E-Comm", label: "Limited Edition Cart & Search" },
    ],
    deliverables: [
      "Full-Bleed Fine Art Hero & Collection Showcases",
      "Virtual Showroom Integration (Phone, Laptop & VR)",
      "Limited Edition & Collector's Reserve Catalog Pages",
      "Collector's Journal, Size Guide & Licensing Portal",
    ],
    stack: ["E-Commerce Storefront", "Virtual Gallery UX", "Luxury Editorial UI", "SEO"],
    accent: "#0A192F",
  },
  {
    slug: "lootbattles-ui-dashboard",
    title: "LootBattles — Competitive Gaming Platform & Wallet Dashboard UI",
    client: "LootBattles",
    region: "United States · Global Gaming (US)",
    regionCode: "US",
    year: "2017",
    category: "Dashboards & SaaS",
    tags: ["Dashboard UI", "Gaming SaaS", "Wireframes", "Dark Theme"],
    engagementModel: "Product UI Sprint",
    timeline: "Full UI Architecture & Screens",
    image: "/images/portfolio/lootbattles-cover.jpg",
    galleryImages: [
      "/images/portfolio/lootbattles-cover.jpg",
      "/images/portfolio/lootbattles-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/59010759/LootBattles-UI-Design",
    summary:
      "Dark-mode competitive gaming dashboard and match-lobby interface featuring live game directories, team management sidebars, cashier wallet balance telemetry, and complete wireframe flows.",
    challenge:
      "Competitive esports players needed an intuitive single-screen command center to switch across titles like CS:GO, Dota 2, and League of Legends, manage squads, and handle wallet cashiers without modal fatigue.",
    solution:
      "Designed a high-contrast slate UI system pairing persistent left navigation icons, an uncluttered game grid with live online counts, a collapsible right-hand My Team drawer, and crisp login/signup overlays.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (308 project views, 11 appreciations) with full low-fidelity wireframes and dark-mode desktop screens.",
    metrics: [
      { value: "308", label: "Behance Project Views" },
      { value: "6+ Views", label: "Wireframes & Hi-Fi Screens" },
      { value: "Dark UI", label: "Team & Cashier System" },
    ],
    deliverables: [
      "Full Interactive Lobby & Game Directory UI",
      "Collapsible Team Roster & Friend Invite Drawer",
      "Cashier Wallet Balance & Authentication Modal System",
      "6-Screen Low-Fidelity UX Wireframe Architecture",
    ],
    stack: ["UI/UX Architecture", "Adobe Photoshop", "Wireframing", "Design System"],
    accent: "#0A192F",
  },
  {
    slug: "edunuts-academy-mobile-app",
    title: "Edunuts Academy — Tutor Discovery & Scheduling Mobile App UI/UX",
    client: "Edunuts Academy",
    region: "New Delhi · Global EdTech (GLOBAL)",
    regionCode: "GLOBAL",
    year: "2016",
    category: "Web & Mobile Apps",
    tags: ["Mobile App UI/UX", "EdTech", "iOS & Android", "Map Discovery"],
    engagementModel: "Mobile Product Design",
    timeline: "Full App UI Walkthrough",
    image: "/images/portfolio/edunuts-1.webp",
    galleryImages: ["/images/portfolio/edunuts-1.webp"],
    behanceUrl: "https://www.behance.net/gallery/38481269/Education-Apps-UIUX",
    summary:
      "End-to-end mobile application UI/UX for Edunuts Academy connecting students with verified tutors across 53+ academic and competitive exam categories with neighborhood map discovery, reviews, class scheduling, and wallet payments.",
    challenge:
      "Students and parents struggled to compare tutor credentials, neighborhood proximity, hourly fees, and upcoming class schedules across fragmented directories.",
    solution:
      "Crafted a clean blue-and-white mobile experience unifying onboarding walkthroughs, category icons, tutor rating cards, geolocation map pins, class approval notifications, and student dashboard schedules.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (294 project views) covering complete onboarding, discovery, booking, and student wallet screens.",
    metrics: [
      { value: "53+", label: "Subject Categories" },
      { value: "8+ Flows", label: "Walkthrough & App Screens" },
      { value: "294", label: "Behance Project Views" },
    ],
    deliverables: [
      "8-Screen Mobile Walkthrough & Onboarding System",
      "53+ Category Directory & Neighborhood Tutor Map UI",
      "Tutor Profile, Star Reviews & Hourly Rate Cards",
      "Class Scheduling, Notifications & Student Wallet UI",
    ],
    stack: ["Mobile UI/UX", "Adobe Photoshop", "Adobe Illustrator", "iOS / Android Specs"],
    accent: "#0A192F",
  },
  {
    slug: "puro-organic-ecommerce-uiux",
    title: "Puro Organic — Consumer Brand Storefront & Packaging UI/UX",
    client: "Puro Organic",
    region: "United Kingdom & Europe (UK)",
    regionCode: "UK",
    year: "2017",
    category: "Websites",
    tags: ["Branding", "E-Commerce UI", "Packaging Visuals", "Responsive Web"],
    engagementModel: "Brand + Storefront Design",
    timeline: "Desktop & Mobile Storefront",
    image: "/images/portfolio/puro-cover.jpg",
    galleryImages: [
      "/images/portfolio/puro-cover.jpg",
      "/images/portfolio/puro-2.webp",
      "/images/portfolio/puro-3.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/51575955/Puro-Organic-UIUX",
    summary:
      "Responsive brand storefront and packaging showcase for Puro Organic—uniting illustrated tropical brand storytelling, stand-up pouch and jar product hero compositions, upcoming SKU carousels, and mobile shopping UI.",
    challenge:
      "An organic coconut food brand needed an inviting digital storefront that carried the warmth of its retail pouches and glass jars cleanly across iMac and smartphone screens.",
    solution:
      "Designed a bright editorial storefront uniting bespoke watercolor-inspired coastal hero artwork, crisp product lineups, curated brand narrative sections, and mobile-first navigation.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (195 project views) spanning desktop, mobile, and product packaging presentation.",
    metrics: [
      { value: "195", label: "Behance Project Views" },
      { value: "Web + iOS", label: "Responsive Storefront UI" },
      { value: "C2C", label: "Packaging-to-Web Parity" },
    ],
    deliverables: [
      "Desktop & Mobile Responsive Storefront UI/UX",
      "Illustrated Hero Product Composition & Art Direction",
      "Product Carousel, Brand Story & Stockist Architecture",
      "Retina Web Graphics & Asset System",
    ],
    stack: ["Adobe Illustrator", "Adobe Photoshop", "UI/UX Design", "Responsive Grid"],
    accent: "#1E3A66",
  },
  {
    slug: "logofolio-vol-01-brand-marks",
    title: "Logofolio Vol-01 — Geometric Brand Marks & Monogram Collection",
    client: "Selected Brand Clients",
    region: "Global Identity Showcase (GLOBAL)",
    regionCode: "GLOBAL",
    year: "2024",
    category: "Graphic Design",
    tags: ["Logofolio", "Brand Identity", "Grid Construction", "Vector Marks"],
    engagementModel: "Brand Identity Sprint",
    timeline: "2024 Identity Collection",
    image: "/images/portfolio/logofolio-cover.jpg",
    galleryImages: [
      "/images/portfolio/logofolio-cover.jpg",
      "/images/portfolio/logofolio-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/210254707/Logofolio-Vol-01",
    summary:
      "2024 collection of modern abstract logotypes, lettermarks, and sustainability brand symbols engineered on strict 1X / ½X construction grids for digital icons, signage, and print collateral.",
    challenge:
      "Modern founders need distinct geometric marks that stay crisp at 16px app-icon scales while holding optical balance on large-format print banners and corporate decks.",
    solution:
      "Constructed clean vector marks—including Green Impact's cloud-monogram system—verified against explicit 1X and ½X clear-space rules and horizontal/stacked lockups.",
    aiAccelerationNote:
      "Published on Behance in October 2024 showcasing precision vector geometry, optical balance, and clear-space lockup standards.",
    metrics: [
      { value: "2024", label: "Published Identity Folio" },
      { value: "1X / ½X", label: "Clear-Space Construction" },
      { value: "Vector", label: "Infinite Scale Master Files" },
    ],
    deliverables: [
      "Geometric Logotypes & Monogram Marks",
      "Explicit 1X / ½X Clear-Space Grid Specifications",
      "Stacked & Horizontal Brand Lockup Variants",
      "Scalable Vector Masters (AI / EPS / SVG)",
    ],
    stack: ["Brand Strategy", "Vector Geometry", "Adobe Illustrator", "Logo Systems"],
    accent: "#F5C518",
  },
  {
    slug: "alabak-courier-mobile-app",
    title: "Alabak — Bilingual Courier, Pickup & eCommerce Mobile App",
    client: "Alabak Logistics",
    region: "Middle East & International (GLOBAL)",
    regionCode: "GLOBAL",
    year: "2017",
    category: "Web & Mobile Apps",
    tags: ["Mobile App", "Courier Logistics", "Bilingual EN/AR", "Live Tracking"],
    engagementModel: "Mobile UX/UI Sprint",
    timeline: "18-Screen Production Spec",
    image: "/images/portfolio/alabak-cover.jpg",
    galleryImages: [
      "/images/portfolio/alabak-cover.jpg",
      "/images/portfolio/alabak-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/51565569/Alabak-Mobile-App",
    summary:
      "Full 18-screen mobile application for Alabak connecting parcel senders with multi-carrier logistics partners (Aramex, Air State, Airborne) through live tracking timelines, map pin pickup/delivery selection, and in-app wallet top-ups.",
    challenge:
      "Cross-border courier customers needed seamless bilingual onboarding, carrier rate comparison, live courier checkpoint status, and quick map address pinning in one lightweight mobile app.",
    solution:
      "Designed a unified crimson-and-white 18-screen interface covering social login, carrier directory, active/archived shipments, status timeline milestones, wallet top-ups, and interactive GPS address maps.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (198 project views, 12 appreciations) with full mobile screen architecture.",
    metrics: [
      { value: "198", label: "Behance Project Views" },
      { value: "18 Screens", label: "Complete Mobile Flow" },
      { value: "EN + AR", label: "Bilingual Logistics UX" },
    ],
    deliverables: [
      "18-Screen End-to-End Mobile App UI Specification",
      "Multi-Carrier Selection & Shipment Tracking Timeline",
      "Interactive GPS Pickup & Delivery Map Screens",
      "In-App Wallet, Notifications & Profile Management UI",
    ],
    stack: ["Mobile UI/UX", "Adobe Photoshop", "Adobe Illustrator", "Map & Wallet Flows"],
    accent: "#0A192F",
  },
  {
    slug: "james-spencer-product-catalog",
    title: "James Spencer — UK NHS Healthcare Furniture Print Catalog",
    client: "James Spencer & Co. Ltd",
    region: "United Kingdom (UK)",
    regionCode: "UK",
    year: "2017",
    category: "Graphic Design",
    tags: ["Print Catalog", "UK Healthcare", "InDesign", "Technical Tables"],
    engagementModel: "Print Editorial Sprint",
    timeline: "Multi-Spread Catalog Layout",
    image: "/images/portfolio/jamesspencer-cover.jpg",
    galleryImages: [
      "/images/portfolio/jamesspencer-cover.jpg",
      "/images/portfolio/jamesspencer-1.webp",
      "/images/portfolio/jamesspencer-2.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/58726965/James-Spencer-Product-Catalog",
    summary:
      "Clean multi-page healthcare furniture print catalog engineered for UK NHS hospital trusts and care facilities—combining medical chair photography, UK-made quality badges, dimension tables, and QR video links.",
    challenge:
      "NHS procurement officers and clinical buyers require instant access to exact chair dimensions, weight limits, antimicrobial vinyl specs, and tiered VAT pricing without visual clutter.",
    solution:
      "Architected crisp two-page InDesign catalog spreads pairing clean interior room shots, color-coded fabric/vinyl price tags, ergonomic icons, QR video links, and hairline measurement tables.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (149 project views) built across Adobe InDesign, Illustrator, and Photoshop.",
    metrics: [
      { value: "149", label: "Behance Project Views" },
      { value: "NHS UK", label: "Healthcare Procurement Grade" },
      { value: "Print + QR", label: "Interactive Video Bridge" },
    ],
    deliverables: [
      "Multi-Spread InDesign Product Catalog Layouts",
      "Dimensional Measurement & Pricing Matrix Tables",
      "Product Photo Retouching & Iconography Badges",
      "Print-Ready CMYK PDF Masters with QR Integration",
    ],
    stack: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "CMYK Pre-Press"],
    accent: "#1E3A66",
  },
  {
    slug: "california-language-academy-brochure",
    title: "California Language Academy — ACCET Campus Brochure & Course Guide",
    client: "California Language Academy",
    region: "Los Angeles & San Diego (US)",
    regionCode: "US",
    year: "2017",
    category: "Graphic Design",
    tags: ["Editorial Brochure", "US Education", "Campus Maps", "InDesign"],
    engagementModel: "Editorial Print Sprint",
    timeline: "Multi-Page Print Brochure",
    image: "/images/portfolio/cla-cover.jpg",
    galleryImages: [
      "/images/portfolio/cla-cover.jpg",
      "/images/portfolio/cla-1.webp",
      "/images/portfolio/cla-2.webp",
    ],
    behanceUrl:
      "https://www.behance.net/gallery/58734075/California-Language-Academy-Brochure-Design",
    summary:
      "Vibrant multi-page institutional brochure for California Language Academy (Los Angeles & San Diego)—organizing ACCET accreditation, CEFR proficiency levels, illustrated city maps, homestay guides, and elective schedules.",
    challenge:
      "International students comparing US language programs needed complex course timetables, university pathway partners, and campus neighborhood info presented in an inviting, digestible brochure.",
    solution:
      "Designed an energetic blue-and-gold InDesign system featuring custom vector Los Angeles and San Diego transit maps, world student diversity infographics, structured course charts, and clean spread photography.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (258 project views, 6 appreciations) built in InDesign, Illustrator, and Photoshop.",
    metrics: [
      { value: "258", label: "Behance Project Views" },
      { value: "2 Campuses", label: "LA & San Diego Vector Maps" },
      { value: "ACCET", label: "CEFR & Course Timetables" },
    ],
    deliverables: [
      "Multi-Page Print Brochure & Editorial Grid System",
      "Custom Vector Campus Maps (Los Angeles & San Diego)",
      "CEFR Proficiency & Class Schedule Infographic Tables",
      "Print-Ready CMYK Spreads & Fold Calibration",
    ],
    stack: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Editorial Infographics"],
    accent: "#0A192F",
  },
  {
    slug: "iba-aesthetics-brand-identity",
    title: "IBA Aesthetics — Golden-Ratio Brand Mark & Identity System",
    client: "IBA Aesthetics",
    region: "International Brand (EU)",
    regionCode: "EU",
    year: "2019",
    category: "Graphic Design",
    tags: ["Brand Identity", "Golden Ratio", "Vector Mark", "Fashion & Beauty"],
    engagementModel: "Brand Identity Design",
    timeline: "Concept-to-Vector Delivery",
    image: "/images/portfolio/iba-1.webp",
    galleryImages: [
      "/images/portfolio/iba-1.webp",
      "/images/portfolio/iba-cover.jpg",
    ],
    behanceUrl: "https://www.behance.net/gallery/74951777/IBA-Aesthetic",
    summary:
      "Bespoke minimalist emblem and typographic identity for IBA Aesthetics—hand-sketched on paper and mathematically refined using circular geometric construction arcs for effortless beauty and luxury brand balance.",
    challenge:
      "Crafting a serene, negative-space facial silhouette mark that feels organic and sculptural while maintaining geometric vector precision for packaging, clinic signage, and digital watermarks.",
    solution:
      "Translated initial paper sketches into interlocking circular Bezier curves paired with refined tracked sans-serif wordmark typography and botanical emerald-lime color balance.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (157 project views) showing full paper-to-vector geometric circle construction.",
    metrics: [
      { value: "157", label: "Behance Project Views" },
      { value: "Bezier", label: "Circular Grid Construction" },
      { value: "100%", label: "Hand-Crafted Vector Emblem" },
    ],
    deliverables: [
      "Negative-Space Geometric Brand Emblem",
      "Custom Wordmark Pairing & Color Palette",
      "Geometric Arc Construction Guide",
      "Print & Digital Master Vector Files",
    ],
    stack: ["Paper Sketching", "Adobe Illustrator", "Brand Direction", "Typography"],
    accent: "#1E3A66",
  },
  {
    slug: "inner-peace-streaming-ui",
    title: "Inner Peace — Multi-Channel Wellness Streaming & TV Interface",
    client: "Inner Peace Network",
    region: "United States (US)",
    regionCode: "US",
    year: "2017",
    category: "Dashboards & SaaS",
    tags: ["Smart TV UI", "Streaming Portal", "Dark Mode", "Media UX"],
    engagementModel: "Interface Design Sprint",
    timeline: "TV & Web Streaming Portal",
    image: "/images/portfolio/innerpeace-cover.jpg",
    galleryImages: [
      "/images/portfolio/innerpeace-cover.jpg",
      "/images/portfolio/innerpeace-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/52704567/Inner-Peace-UIUX",
    summary:
      "Widescreen Smart TV and web streaming portal interface for Inner Peace—organizing wellness talks, featured speaker channels, trending tags, and topic navigation in a calm dark-mode media grid.",
    challenge:
      "Ten-foot Smart TV viewing and desktop browsers require oversized legible typography, remote-friendly focus states, and instant speaker-vs-topic visual differentiation.",
    solution:
      "Built an editorial dark UI grid balancing trending banner indicators, clean monochrome speaker/topic badges, and asymmetric multi-column media cards.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (134 project views) tailored for connected TV and widescreen web portals.",
    metrics: [
      { value: "134", label: "Behance Project Views" },
      { value: "10-Foot UI", label: "Apple TV & Web Grid" },
      { value: "Dark Mode", label: "Speaker & Topic Channels" },
    ],
    deliverables: [
      "Smart TV & Web Streaming Home Interface",
      "Speaker & Topic Card Modular Grid System",
      "Remote-Ready Navigation & Tagging Badges",
      "High-Resolution Presentation Mockups",
    ],
    stack: ["Adobe Photoshop", "Creative Cloud", "TV & Web UI/UX", "Media Grid"],
    accent: "#0A192F",
  },
  {
    slug: "oem-sound-ebay-shopfront",
    title: "OEM Sound — Custom eBay Storefront & Auction Template System",
    client: "OEM Sound",
    region: "United States · Auto Electronics (US)",
    regionCode: "US",
    year: "2016",
    category: "Websites",
    tags: ["E-Commerce UI", "eBay Storefront", "Auction Template", "Multi-Device"],
    engagementModel: "E-Commerce Template Design",
    timeline: "Storefront & Listing Suite",
    image: "/images/portfolio/ebay-cover.jpg",
    galleryImages: [
      "/images/portfolio/ebay-cover.jpg",
      "/images/portfolio/ebay-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/43136673/eBay-Shop-Front-Auction-Template",
    summary:
      "Complete custom eBay storefront and product auction listing template for automotive electronics retailer OEM Sound—featuring make/brand filters (BMW, Audi, Mercedes, Porsche, Lexus), category sidebar, and responsive layouts.",
    challenge:
      "High-volume automotive parts sellers on eBay lose buyer trust with cluttered default listings; OEM Sound needed a flagship brand-store feel within eBay's template architecture.",
    solution:
      "Designed a crisp light-and-navy storefront with top automaker navigation, structured amplifier/radio/navigation categories, hero slider promos, and reusable PSD/HTML auction templates.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft with 446 project views and 23 appreciations.",
    metrics: [
      { value: "446", label: "Behance Project Views" },
      { value: "23", label: "Behance Appreciations" },
      { value: "Multi-Device", label: "Desktop, Tablet & Laptop" },
    ],
    deliverables: [
      "Branded eBay Storefront Homepage Design",
      "Reusable Product Auction Listing Template",
      "Automaker Brand Bar & Category Sidebar UI",
      "Layered PSD & Customizable Web Assets",
    ],
    stack: ["Adobe Photoshop", "Adobe Illustrator", "eBay HTML/CSS", "E-Commerce UI"],
    accent: "#0A192F",
  },
  {
    slug: "athletic-identity-book-cover",
    title: "Athletic Identity — Book Interior Typography & Hardcover Design",
    client: "Dr. Mark Robinson Ph.D.",
    region: "United States · Publishing (US)",
    regionCode: "US",
    year: "2017",
    category: "Graphic Design",
    tags: ["Book Cover", "Editorial Interior", "Digital Tablet Edition", "Print"],
    engagementModel: "Editorial & Book Sprint",
    timeline: "Cover, Spine & Interior Layout",
    image: "/images/portfolio/athletic-cover.jpg",
    galleryImages: [
      "/images/portfolio/athletic-cover.jpg",
      "/images/portfolio/athletic-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/58748003/Athletic-Identity-Books-Interior-Cover",
    summary:
      "Full print wrap-around book cover (front, spine, and back review jacket), interior typesetting, and digital tablet edition design for Dr. Mark Robinson Ph.D.'s sports psychology book *Athletic Identity: Invincible & Invisible*.",
    challenge:
      "Combining multiple sports disciplines into one cohesive, emotionally resonant cover portrait while ensuring crisp spine typography and readable back-cover Amazon review callouts.",
    solution:
      "Composited a unified black-and-gold athletic cover portrait across football, hockey, track, and basketball imagery, paired with high-contrast serif/sans typography and tablet edition parity.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (101 project views) spanning print jacket mechanicals and digital edition styling.",
    metrics: [
      { value: "101", label: "Behance Project Views" },
      { value: "Print + iPad", label: "Dual Edition Deliverables" },
      { value: "Full Wrap", label: "Front, Spine & Back Jacket" },
    ],
    deliverables: [
      "Custom Composite Front Cover Illustration & Art Direction",
      "Spine Width & Back-Cover Editorial Jacket Layout",
      "Interior Chapter Typography & Pagination",
      "Digital Tablet Cover & Amazon Mockup Assets",
    ],
    stack: ["Adobe Photoshop", "Adobe Illustrator", "Editorial Typesetting", "Print Jacket"],
    accent: "#0A192F",
  },
  {
    slug: "lg-hausys-product-catalogue",
    title: "LG Hausys — ASA Color Window Architectural Product Brochure",
    client: "LG Hausys",
    region: "Global Architectural Materials (GLOBAL)",
    regionCode: "GLOBAL",
    year: "2015",
    category: "Graphic Design",
    tags: ["Corporate Brochure", "Architecture", "Swatch Specs", "Print"],
    engagementModel: "Corporate Print Sprint",
    timeline: "Tri-Fold Print Brochure",
    image: "/images/portfolio/lg-cover.jpg",
    galleryImages: [
      "/images/portfolio/lg-cover.jpg",
      "/images/portfolio/lg-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/22846599/LG_Brochure",
    summary:
      "Architectural tri-fold product catalogue for LG Hausys ASA Color Window profiles—combining 3D cutaway window cross-sections, exterior/interior lamination swatch charts, and clean technical specification panels.",
    challenge:
      "Architects and builders comparing window frame laminates needed cutaway structural diagrams and wood-grain/ASA finish swatches organized clearly inside a compact tri-fold format.",
    solution:
      "Created an airy Swiss-inspired corporate layout anchored by LG Hausys magenta accents, side-by-side cutaway callouts, interior photography, and crisp swatch strips.",
    aiAccelerationNote:
      "One of the most appreciated corporate print brochures on our Behance profile with 386 views and 37 appreciations.",
    metrics: [
      { value: "386", label: "Behance Project Views" },
      { value: "37", label: "Behance Appreciations" },
      { value: "Tri-Fold", label: "Cutaway Specs & Swatches" },
    ],
    deliverables: [
      "6-Panel Tri-Fold Architectural Print Brochure",
      "Inside/Outside Window Profile Callout Diagrams",
      "ASA & Lamination Color Swatch Reference Grid",
      "CMYK Print Mechanicals & Folding Guides",
    ],
    stack: ["Print Layout", "Adobe InDesign", "Adobe Photoshop", "Corporate Branding"],
    accent: "#1E3A66",
  },
  {
    slug: "tebcan-healthcare-presentation",
    title: "TebCan — Digital Healthcare Grid Investor & Pitch Deck Slides",
    client: "TebCan Healthcare",
    region: "MENA & Global Digital Health (GLOBAL)",
    regionCode: "GLOBAL",
    year: "2016",
    category: "Graphic Design",
    tags: ["Presentation Design", "Healthcare Deck", "Infographics", "Data Tables"],
    engagementModel: "Pitch Deck Sprint",
    timeline: "20+ Custom Presentation Slides",
    image: "/images/portfolio/ppt-cover.jpg",
    galleryImages: [
      "/images/portfolio/ppt-cover.jpg",
      "/images/portfolio/ppt-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/42547733/Powerpoint-Presentation-Slides",
    summary:
      "Executive investor and partner PowerPoint presentation deck for TebCan—a digital healthcare network—featuring custom medical infographics, market growth charts, 5-year revenue forecast tables, and phased execution roadmaps.",
    challenge:
      "Translating complex regional healthcare market data, 5-year SaaS financial projections, and medical tourism metrics into an executive deck investors can scan in minutes.",
    solution:
      "Engineered 20+ modular PowerPoint slides using cohesive cyan-and-gold hexagonal branding, clean vector iconography, growth line graphs, and color-coded financial P&L tables.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft with 357 project views and 18 appreciations.",
    metrics: [
      { value: "357", label: "Behance Project Views" },
      { value: "18", label: "Behance Appreciations" },
      { value: "20+ Slides", label: "Financials & Infographics" },
    ],
    deliverables: [
      "20+ Custom Master PowerPoint Presentation Slides",
      "Healthcare Ecosystem Infographics & Custom Icons",
      "5-Year Revenue & Market Growth Chart Slides",
      "Phased Execution Strategy & Founding Team Bios",
    ],
    stack: ["PowerPoint", "Adobe Illustrator", "Data Visualization", "Pitch Deck Design"],
    accent: "#1E3A66",
  },
  {
    slug: "pdi-energy-led-brochure",
    title: "PDI Energy Solutions — Commercial LED & Solar Print Brochure",
    client: "PDI Energy Solutions",
    region: "United States · CleanTech (US)",
    regionCode: "US",
    year: "2016",
    category: "Graphic Design",
    tags: ["Energy Brochure", "Industrial Print", "ROI Tables", "CleanTech"],
    engagementModel: "Print & Technical Collateral",
    timeline: "Multi-Page Product Brochure",
    image: "/images/portfolio/pdi-cover.jpg",
    galleryImages: [
      "/images/portfolio/pdi-cover.jpg",
      "/images/portfolio/pdi-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/33923248/PDI-Energy-Solution-(Brochure)",
    summary:
      "Commercial lighting and solar energy sales brochure for US-based PDI Energy Solutions—organizing LED retrofit wattage comparisons, PPA solar savings data, and industrial luminaire specs.",
    challenge:
      "Commercial facility managers needed side-by-side wattage, lumen-hour, and utility payback figures presented clearly alongside lighting installation photography.",
    solution:
      "Created a warm amber-and-charcoal technical brochure pairing bold front-cover lighting artwork with structured comparison tables and clean application callouts.",
    aiAccelerationNote:
      "Published on Behance by Bisen Brandcraft (130 project views) tailored for US commercial energy sales teams.",
    metrics: [
      { value: "130", label: "Behance Project Views" },
      { value: "US CleanTech", label: "LED & Solar Retrofit Specs" },
      { value: "CMYK", label: "Print Sales Collateral" },
    ],
    deliverables: [
      "Multi-Page Commercial LED & Solar Sales Brochure",
      "Energy Payback & Lumen Comparison Tables",
      "Product Photography & Cover Illustration",
      "Print-Ready Sales Kit Masters",
    ],
    stack: ["Adobe Illustrator", "Technical Tables", "Industrial Print", "Brand Collateral"],
    accent: "#F5C518",
  },
  {
    slug: "ecommerce-banners-campaign",
    title: "eCommerce Campaign — High-Impact Retail Web & Ad Banner Suite",
    client: "Multi-Brand Retail Clients",
    region: "Global E-Commerce (GLOBAL)",
    regionCode: "GLOBAL",
    year: "2016",
    category: "Graphic Design",
    tags: ["E-Commerce Banners", "Web Sliders", "Campaign Ads", "Retouching"],
    engagementModel: "Campaign Design Sprint",
    timeline: "Multi-Size Ad & Slider Kit",
    image: "/images/portfolio/ecommerce-cover.jpg",
    galleryImages: [
      "/images/portfolio/ecommerce-cover.jpg",
      "/images/portfolio/ecommerce-1.webp",
    ],
    behanceUrl: "https://www.behance.net/gallery/42150369/eCommerce-Banners",
    summary:
      "Conversion-focused e-commerce hero sliders, seasonal retail campaign banners, and product composite visuals spanning luxury cosmetics, ethnic fashion, watches, and home lifestyle stores.",
    challenge:
      "Online retail brands need attention-grabbing hero sliders and display ads with clean typography hierarchy, high-precision product cutouts, and clear 'Shop Now' callouts.",
    solution:
      "Produced cohesive web slider series with studio-grade product retouching, balanced promotional contrast, and scalable digital ad dimensions.",
    aiAccelerationNote:
      "One of our top-viewed digital marketing projects on Behance with 593 views and 28 appreciations.",
    metrics: [
      { value: "593", label: "Behance Project Views" },
      { value: "28", label: "Behance Appreciations" },
      { value: "Multi-Size", label: "Web Sliders & Display Ads" },
    ],
    deliverables: [
      "E-Commerce Hero Slider Graphics",
      "Cosmetics, Fashion & Electronics Ad Sets",
      "High-Resolution Product Cutouts & Color Grading",
      "Layered PSD & Web-Optimized Assets",
    ],
    stack: ["Adobe Photoshop", "Adobe Illustrator", "Digital Advertising", "Product Retouching"],
    accent: "#1E3A66",
  },
  {
    slug: "cyberonics-corporate-brochure",
    title: "Cyberonics International — Corporate Capabilities Brochure",
    client: "Cyberonics International Corp.",
    region: "Global Enterprise (GLOBAL)",
    regionCode: "GLOBAL",
    year: "2023",
    category: "Graphic Design",
    tags: ["Corporate Brochure", "Cybersecurity", "ICT Services", "Print"],
    engagementModel: "Print Design Sprint",
    timeline: "Bi-Fold Corporate Profile",
    image: "/images/portfolio/brochure2023-cover.jpg",
    galleryImages: ["/images/portfolio/brochure2023-cover.jpg"],
    behanceUrl: "https://www.behance.net/gallery/175960113/Brochure-Design",
    summary:
      "Modern bi-fold corporate capabilities brochure for Cyberonics International Technology Corporation—unifying cybersecurity, construction tech, ITC services, and consultancy pillars with clean QR contact integration.",
    challenge:
      "A multi-vertical technology corporation needed a concise print leave-behind presenting four distinct enterprise service lines without crowding the cover.",
    solution:
      "Designed a crisp 4-petal infographic centerpiece paired with vibrant amber-and-slate corporate framing and direct QR code touchpoints on front and back panels.",
    aiAccelerationNote:
      "Published on Behance in 2023 showcasing modern corporate print infographics and clean contact layouts.",
    metrics: [
      { value: "2023", label: "Corporate Print Release" },
      { value: "4 Pillars", label: "Infographic Service Wheel" },
      { value: "Bi-Fold", label: "Print + QR Touchpoints" },
    ],
    deliverables: [
      "Front, Back & Interior Bi-Fold Corporate Brochure",
      "4-Pillar Technology Service Wheel Infographic",
      "QR Code & Direct Contact Layout",
      "CMYK Print-Ready Source Files",
    ],
    stack: ["Corporate Print", "Infographic Vector Design", "Adobe Illustrator", "CMYK Pre-Press"],
    accent: "#0A192F",
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "All",
  "Dashboards & SaaS",
  "Web & Mobile Apps",
  "Websites",
  "Graphic Design",
];

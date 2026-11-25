export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  tagline: string;
  experience: string;
  experienceNote?: string;
  shortIntro?: string;
  philosophy?: string;
  disciplineBadge?: string;
  featuredCaseSlugs?: string[];
  portfolioRole?: string;
  bio: string;
  specialties: string[];
  tools: string[];
  accentColor: string;
  // Drop a photo in public/images/team/ and set photoPath to display a real portrait
  photoPath?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "asif-bisen",
    name: "Asif Bisen",
    initials: "AB",
    role: "Founder · Creative Director & Lead Product Engineer",
    tagline: "Bridging 16+ years of visual mastery with AI-accelerated product engineering.",
    experience: "16+ Years Multidisciplinary Craft",
    experienceNote:
      "Over 16 years leading brand identity, digital UI/UX, and full-stack web product delivery—spanning creative direction and technical architecture.",
    disciplineBadge: "Brand · Product · Architecture",
    shortIntro:
      "Asif founded Bisen Studio to bring brand direction, UI/UX product thinking, and software engineering under one roof. He partners directly with founders from first discovery call through launch sign-off.",
    philosophy:
      "Strong digital products happen when design clarity and engineering structure are shaped in the exact same conversation.",
    featuredCaseSlugs: [
      "danielle-rtb-media-website-2026",
      "ces-enterprise-event-operations-2026",
    ],
    portfolioRole: "Product architecture, Swiss-grid UI tokens & launch QA",
    bio: "Asif founded Bisen Studio to eliminate the disconnect between world-class graphic design and production-grade software engineering. With over 16 years spanning brand systems, print craftsmanship, high-converting websites, SaaS dashboards, and AI-assisted full-stack architecture, Asif personally leads client strategy, design direction, and final product quality across every engagement.",
    specialties: [
      "Creative & Art Direction",
      "Digital Product Architecture",
      "SaaS Dashboards & Web Apps",
      "AI-Assisted Engineering Workflows",
      "Print & Brand Systems",
    ],
    tools: ["Next.js / React", "TypeScript", "Figma", "Adobe Creative Suite", "AI Coding Agents"],
    accentColor: "#0A192F",
  },
  {
    id: "rajpoot-talib",
    name: "Rajpoot Talib",
    initials: "RT",
    role: "Principal Full-Stack & AI Systems Engineer",
    tagline: "Turning ambitious startup roadmaps into fast, secure, scalable software.",
    experience: "Senior Full-Stack & AI Engineering",
    experienceNote:
      "Dedicated software architect specializing in production React/Next.js apps, mobile apps, APIs, databases, and human-supervised AI integrations.",
    disciplineBadge: "Full-Stack · SaaS · Integrations",
    shortIntro:
      "Rajpoot architects reliable web applications, SaaS dashboards, mobile experiences, and API integrations. He oversees code cleanliness, automated checks, and controlled AI workflows so shipped software stays maintainable.",
    philosophy:
      "Speed only helps a client when the underlying codebase stays simple enough for their next engineering team to extend.",
    featuredCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "raj-personal-expenses-tracking-app-v2",
    ],
    portfolioRole: "Full-stack React/Next.js & React Native APIs, RBAC & testing",
    bio: "Rajpoot architects resilient websites, web & mobile applications, APIs, and complex data-driven dashboards. Combining disciplined software engineering fundamentals with deep mastery of modern AI coding pipelines, he helps startups and global enterprises ship production-ready features cleanly—without accumulating technical debt or security blind spots.",
    specialties: [
      "Full-Stack Web & Mobile Apps",
      "Real-Time Analytics Dashboards",
      "AI-Assisted Coding & Integrations",
      "Performance & Technical SEO",
      "Cloud APIs & Security Review",
    ],
    tools: [
      "TypeScript / Node.js",
      "React Native & Next.js",
      "PostgreSQL",
      "Tailwind CSS",
      "CI/CD & Automated Testing",
    ],
    accentColor: "#F5C518",
  },
  {
    id: "azma-bisen",
    name: "Azma Bisen",
    initials: "AZ",
    role: "Lead Visual, Brand & Print Design Director",
    tagline: "Obsessive craft across pixels, typography, packaging, and press-ready print.",
    experience: "Brand, Editorial & Print Direction",
    experienceNote:
      "Specialist creative director across visual identity systems, multi-page editorial layouts, luxury packaging dielines, and responsive UI systems.",
    disciplineBadge: "Brand Identity · Editorial · Packaging",
    shortIntro:
      "Azma directs brand identity, typography, editorial layouts, and tactile print packaging alongside modular UI systems. She ensures every client looks cohesive across digital screens and physical materials.",
    philosophy:
      "Restraint, proportion, and typography make a brand trustworthy long before a visitor reads a single paragraph.",
    featuredCaseSlugs: [
      "r80-rugby-print-catalogue",
      "iba-aesthetics-brand-identity",
    ],
    portfolioRole: "Visual identity, 18-SKU print packaging dielines & accessible UI",
    bio: "Azma brings tactile precision and international editorial clarity to every visual touchpoint. From cohesive startup brand identities, pitch decks, and modular UI design systems to CMYK/Pantone print packaging, exhibition collateral, and annual reports, she ensures every client brand looks unmistakable—on screen and in print.",
    specialties: [
      "Brand Identity & Guidelines",
      "Luxury Print & Packaging (CMYK/Pantone)",
      "Editorial Layout & Brochures",
      "UI Design Systems & Prototyping",
      "Investor Pitch Decks & Marketing",
    ],
    tools: [
      "Adobe InDesign",
      "Adobe Illustrator",
      "Photoshop",
      "Figma Systems",
      "Pre-Press & Die-Lines",
    ],
    accentColor: "#1E3A66",
  },
];

export const STUDIO_PROCESS = [
  {
    step: "01",
    title: "Discovery, NDA & Alignment",
    duration: "Day 1–2",
    description:
      "We sign a Mutual NDA if needed, map your US/EU/AU/CA target audience, define KPIs, and lock your preferred engagement model (Hourly, Weekly, Monthly, or Yearly).",
  },
  {
    step: "02",
    title: "Strategy, Wireframes & Visual Direction",
    duration: "Week 1",
    description:
      "Before writing a line of code or going to press, we establish information architecture, interactive prototypes, design tokens, or print dielines & paper specs.",
  },
  {
    step: "03",
    title: "High-Craft Digital & Print Execution",
    duration: "Active Sprints",
    description:
      "Azma and Asif refine every visual system, UI screen, and CMYK print file while Talib and Asif build clean, modular code using our AI-accelerated engineering workflow.",
  },
  {
    step: "04",
    title: "Senior Audit, Accessibility & QA",
    duration: "Continuous",
    description:
      "Every deliverable passes strict human senior review: WCAG 2.1 AA accessibility checks, Core Web Vitals profiling, security review, or pre-press bleed/color proofing.",
  },
  {
    step: "05",
    title: "Launch, 100% IP Handover & Ongoing Growth",
    duration: "Launch & Beyond",
    description:
      "Full source code, Figma systems, and print-ready files transfer 100% to you—backed by a 30-day warranty and optional weekly, monthly, or yearly growth retainers.",
  },
];

export interface StudioProcessV2Step {
  step: string;
  title: string;
  description: string;
  deliverable: string;
  clientRole: string;
}

export const STUDIO_PROCESS_V2: StudioProcessV2Step[] = [
  {
    step: "01",
    title: "Discover & Align",
    description:
      "We understand your business context, target audience, functional requirements, and technical constraints.",
    deliverable: "Project Brief",
    clientRole: "Share goals & approve scope",
  },
  {
    step: "02",
    title: "Strategize & Design",
    description:
      "We define the creative direction, system architecture, key user journeys, and initial visual or UI concepts.",
    deliverable: "Approved Direction",
    clientRole: "Feedback on concepts & direction",
  },
  {
    step: "03",
    title: "Create & Develop",
    description:
      "Our principals design and build the agreed deliverables using structured craft and supervised AI-assisted tools.",
    deliverable: "Working Design or Product",
    clientRole: "Review milestone previews",
  },
  {
    step: "04",
    title: "Review & Refine",
    description:
      "We review code and design quality, apply agreed revisions, test critical paths, and verify responsiveness.",
    deliverable: "Reviewed Final Work",
    clientRole: "QA walkthrough & sign-off",
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "We prepare production-ready files or deployed code, complete source handover, and transition smoothly.",
    deliverable: "Handover & Support Plan",
    clientRole: "Final acceptance & launch",
  },
];

export const STUDIO_STORY = {
  eyebrow: "Our Story & Studio Philosophy",
  headline: "Why We Keep Bisen Studio Three People Deep.",
  paragraphs: [
    "Too often, businesses have to split their brand vision across separate silos: a branding agency for logos and print packaging, a UI designer for Figma screens, and external developers who interpret the work differently. Handoff friction slows launches and dilutes visual quality.",
    "With more than 16 years spanning graphic craftsmanship, editorial print, and modern web engineering led by founder Asif Bisen—alongside Principal Engineer Rajpoot Talib and Brand & Print Director Azma Bisen—we built Bisen Studio as a cohesive three-person partnership where strategy, design, and implementation share one desk.",
    "We stay small intentionally. When a founder in New York, London, Berlin, Toronto, or Sydney starts an engagement with us, you collaborate directly with the principals shaping your brand and writing your software—for transparent velocity today and a dependable long-term creative partnership.",
  ],
  experienceClarification:
    "How we describe experience: Bisen Studio builds upon 16+ years of founder creative and software craft alongside specialized senior leadership in visual/print direction and full-stack systems engineering.",
};

export const WHY_DIRECT_ITEMS = [
  {
    title: "Direct Senior Collaboration",
    detail:
      "Communicate directly with Asif, Rajpoot, and Azma—the exact principals responsible for your design and code.",
  },
  {
    title: "One Unified Creative Vision",
    detail:
      "Brand identity, print packaging, UI/UX, and software engineering share a single cohesive standard from day one.",
  },
  {
    title: "Clear Communication",
    detail:
      "Defined milestones, shared Figma/Linear workspaces, regular async Loom walkthroughs, and honest status updates.",
  },
  {
    title: "Responsible Ownership",
    detail:
      "Explicit workload boundaries, written confidentiality agreements, and clean transfer of custom paid deliverables.",
  },
];

export const COMBINED_CAPABILITIES = [
  {
    title: "Brand & Visual Design",
    description: "Logo systems, brand guidelines, pitch decks, and conversion-oriented marketing visuals.",
    href: "/graphic-design/brand-identity",
  },
  {
    title: "Print & Packaging Craft",
    description: "CMYK/Pantone pre-press, structural packaging dielines, brochures, and annual reports.",
    href: "/graphic-design/packaging-design",
  },
  {
    title: "Websites & Conversion Funnels",
    description: "Responsive business sites, Next.js platforms, e-commerce stores, and technical SEO.",
    href: "/website",
  },
  {
    title: "Mobile Apps (iOS & Android)",
    description: "Cross-platform React Native & native mobile UI/UX, interactive prototypes, and stores launch.",
    href: "/mobile-app",
  },
  {
    title: "Dashboards & SaaS Products",
    description: "Role-based analytics interfaces, admin consoles, client portals, and multi-tenant UI systems.",
    href: "/services/dashboards-saas",
  },
  {
    title: "AI Engineering & Automation",
    description: "Grounded AI assistants, workflow automation, LLM API integrations, and human-reviewed MVPs.",
    href: "/ai-engineering",
  },
];

export const ABOUT_FEATURED_ROLES: Record<string, string> = {
  "ces-enterprise-event-operations-2026":
    "Enterprise Operations Architecture & Live Telemetry UI: Rajpoot Talib & Asif Bisen · System Tokens: Azma Bisen",
  "danielle-rtb-media-website-2026":
    "Editorial Brand Direction & EMV Calculator UX: Asif Bisen & Azma Bisen · Interactive Build: Rajpoot Talib",
  "boston-lounge-decor-wordpress-website":
    "Custom WordPress Architecture & PHP Templates: Asif Bisen & Rajpoot Talib · Visual UI: Azma Bisen",
  "r80-rugby-print-catalogue":
    "Print Catalogue Grid & Pre-Press: Azma Bisen & Asif Bisen · Product SKU Architecture: Bisen Studio",
};

export interface CollaborationRegion {
  region: string;
  tag: string;
  expectation: string;
}

export const GLOBAL_COLLABORATION_REGIONS: CollaborationRegion[] = [
  {
    region: "United States",
    tag: "US · EST / CST / PST",
    expectation: "Scheduled meeting windows",
  },
  {
    region: "United Kingdom",
    tag: "UK · GMT / BST",
    expectation: "Flexible overlap by agreement",
  },
  {
    region: "Europe",
    tag: "EU · CET / CEST",
    expectation: "Coordinated project communication",
  },
  {
    region: "Canada",
    tag: "CA · EST / PST",
    expectation: "Advance-scheduled calls",
  },
  {
    region: "Australia",
    tag: "AU · AEST / AEDT",
    expectation: "Planned collaboration sessions",
  },
];

export type WebsiteCategoryIconKey =
  | "layout"
  | "code-2"
  | "shopping-cart"
  | "blocks"
  | "target"
  | "refresh-cw"
  | "app-window"
  | "gauge"
  | "shield-check"
  | "workflow";

export interface WebsiteService {
  slug: string;
  title: string;
  shortSummary: string;
  heroSubtitle: string;
  techTerms: string[];
  deliverables: string[];
  turnaround: string;
  stackSpec: string;
  slaOrOutputSpec: string;
}

export interface WebsiteCategory {
  number: string;
  slug: string;
  menuTitle: string;
  fullTitle: string;
  menuDesc: string;
  iconKey: WebsiteCategoryIconKey;
  heroHeadline: string;
  heroAccent: string;
  heroSummary: string;
  techTerms: string[];
  relatedCaseSlugs: string[];
  services: WebsiteService[];
}

export const WEBSITE_CATEGORIES: WebsiteCategory[] = [
  {
    number: "01",
    slug: "website-design",
    menuTitle: "Website Design",
    fullTitle: "Website Design Services",
    menuDesc: "Modern, responsive, conversion-focused sites",
    iconKey: "layout",
    heroHeadline: "Editorial & Conversion Website Design",
    heroAccent: "Crafted for Trust.",
    heroSummary:
      "Bespoke Figma UI/UX web flagships built for US, UK, Canada, Europe, and Australian startups and enterprises—combining Swiss visual authority with responsive mobile conversion funnels.",
    techTerms: [
      "12-Col Responsive Grid",
      "Figma Variable System",
      "WCAG 2.1 AA Contrast",
      "CRO Visual Hierarchy",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "pawmedal-website-v3",
    ],
    services: [
      {
        slug: "business-website-design",
        title: "Business Website Design",
        shortSummary:
          "Clear, high-trust multi-page SMB and B2B company websites structured to convert qualified discovery calls.",
        heroSubtitle:
          "Replace generic templates with bespoke company architecture tailored to win international buyers—built around scannable value props, transparent pricing flows, and mobile speed.",
        techTerms: [
          "12-Col Fluid Grid",
          "F-Pattern Scan Flow",
          "Figma Auto-Layout",
          "WCAG 2.1 AA Ready",
        ],
        deliverables: [
          "Full desktop & mobile UI/UX architecture across core pages",
          "Interactive Figma click-through prototype + component token kit",
          "Conversion copy wireframe & multi-region lead intake flows",
          "Production-ready CSS/asset specification for clean dev handoff",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Figma · Tailwind · Next.js",
        slaOrOutputSpec: "99+ Lighthouse Ready",
      },
      {
        slug: "corporate-website-design",
        title: "Corporate Website Design",
        shortSummary:
          "Enterprise multi-region web platforms uniting governance poise, investor portals, and accessibility compliance.",
        heroSubtitle:
          "Engineered for multi-department corporations, legal/advisory holdings, and global brands requiring strict brand governance, WCAG/AODA compliance, and modular page builders.",
        techTerms: [
          "AODA / ADA Compliance",
          "Multi-Locale IA Tree",
          "Modular Pattern Kit",
          "Investor Center UX",
        ],
        deliverables: [
          "Complete enterprise IA sitemap & multi-region navigation model",
          "Tokenized Figma design system covering 18+ modular page patterns",
          "Accessible color/focus matrix compliant with AODA, ADA & EAA",
          "Full Figma Dev Mode annotations & style documentation",
        ],
        turnaround: "2–3 Weeks",
        stackSpec: "Figma System · Next.js · CMS",
        slaOrOutputSpec: "WCAG AA Verified",
      },
      {
        slug: "startup-website-design",
        title: "Startup Website Design",
        shortSummary:
          "Category-defining Seed to Series B websites designed to impress VCs, enterprise buyers, and top talent.",
        heroSubtitle:
          "Command immediate institutional credibility before Series A—combining interactive product previews, architectural diagrams, transparent developer docs feel, and sub-second speed.",
        techTerms: [
          "Interactive Product Hero",
          "Custom Tech Diagrams",
          "Series A Narrative Flow",
          "0.4s Edge Architecture",
        ],
        deliverables: [
          "Distinctive visual art direction & bespoke hero product showcase",
          "Interactive ROI / workflow visual diagrams tailored to your product",
          "Pricing, changelog, case studies & investor-ready About layouts",
          "100% Figma source + optional live Next.js deployment",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Figma · Next.js · Motion",
        slaOrOutputSpec: "2× Demo Conversion Lift",
      },
      {
        slug: "portfolio-website-design",
        title: "Portfolio & Personal Websites",
        shortSummary:
          "Curatorial flagship websites for founders, executives, architects, authors, and creative directors.",
        heroSubtitle:
          "Showcase career milestones, press features, speaking engagements, and case studies with quiet Swiss typography and zero bloated template noise.",
        techTerms: [
          "Editorial Grid Pacing",
          "Case Study Storytelling",
          "Optical Display Type",
          "Retina Art Direction",
        ],
        deliverables: [
          "Bespoke personal flagship homepage, selected work & bio pages",
          "Modular case-study exhibition layout for rich visual storytelling",
          "Speaking/press kit download module & frictionless inquiry form",
          "Desktop, tablet & mobile refined responsive specs",
        ],
        turnaround: "1 Week",
        stackSpec: "Figma · Next.js · Tailwind",
        slaOrOutputSpec: "100% Bespoke Layout",
      },
      {
        slug: "professional-service-websites",
        title: "Professional Service Websites",
        shortSummary:
          "Authority-first websites for law firms, accounting practices, healthcare clinics, and consultancies.",
        heroSubtitle:
          "Structured around partner bios, practice-area credibility, compliance transparency (GDPR/HIPAA/PIPEDA notices), and calendar booking clarity.",
        techTerms: [
          "Trust-Signal Hierarchy",
          "Practice Area Taxonomy",
          "Calendly / Booking UX",
          "Privacy-First Forms",
        ],
        deliverables: [
          "Practice area, partner bio directory & thought-leadership layouts",
          "Frictionless consultation scheduling & secure client intake UI",
          "Structured trust policies, testimonials & accreditation strips",
          "Clean accessible contrast verified for older demographics too",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Figma · WordPress / Next.js",
        slaOrOutputSpec: "AA Contrast + Booking UX",
      },
      {
        slug: "responsive-website-design",
        title: "Responsive Website Design",
        shortSummary:
          "Fluid multi-breakpoint UI systems tuned from 320px smartphones up to 2560px studio monitors.",
        heroSubtitle:
          "Never treat mobile as a crushed afterthought—every navigation drawer, pricing table, chart, and hero card adapts natively with crisp touch targets and fluid typographic clamping.",
        techTerms: [
          "320px–2560px Fluid Grid",
          "44×44px Touch Targets",
          "Clamp Typography Scale",
          "Mobile Drawer Ergonomics",
        ],
        deliverables: [
          "Explicit mobile (390px), tablet (768px) & desktop (1440px) specs",
          "Thumb-zone CTAs, collapsible tables & sticky header behaviors",
          "Zero horizontal scroll overflow guaranteed across devices",
          "Responsive Figma Auto-Layout component tokens",
        ],
        turnaround: "4–7 Business Days",
        stackSpec: "Figma Auto-Layout · CSS Grid",
        slaOrOutputSpec: "Zero Viewport Overflow",
      },
    ],
  },
  {
    number: "02",
    slug: "custom-web-development",
    menuTitle: "Custom Web Development",
    fullTitle: "Custom Web Development",
    menuDesc: "React, Next.js, full-stack solutions",
    iconKey: "code-2",
    heroHeadline: "Full-Stack TypeScript & Next.js Code",
    heroAccent: "Built for 100/100 Speed.",
    heroSummary:
      "Production React, Next.js 15 App Router, API routes, and PostgreSQL engineering built cleanly by senior veterans using AI-accelerated workflows—zero bloated themes, 100% Git repo IP.",
    techTerms: [
      "Next.js 15 App Router",
      "Strict TypeScript",
      "Edge Caching & SSR",
      "CI/CD & Git IP Transfer",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "danielle-rtb-media-website-2026",
    ],
    services: [
      {
        slug: "custom-website-development",
        title: "Custom Website Development",
        shortSummary:
          "Hand-coded, zero-bloat websites engineered cleanly without heavy page builders or fragile plugins.",
        heroSubtitle:
          "Pure semantic HTML, modern Tailwind CSS, and modular React components delivering instant page transitions, enterprise security headers, and clean maintainability.",
        techTerms: [
          "Zero-Plugin Clean Code",
          "Semantic HTML5 & ARIA",
          "CSP Security Headers",
          "AVIF / WebP Pipeline",
        ],
        deliverables: [
          "Full custom codebase deployed cleanly on Vercel, Cloudflare, or AWS",
          "Responsive pixel-accurate execution matching approved Figma design",
          "Hardened HTTP security headers, sitemap & robots configuration",
          "100% clean Git repository transferred straight to your org",
        ],
        turnaround: "2–3 Weeks",
        stackSpec: "Next.js · TypeScript · Tailwind",
        slaOrOutputSpec: "99+ Core Web Vitals",
      },
      {
        slug: "react-development",
        title: "React Website Development",
        shortSummary:
          "Interactive, stateful React 19 web experiences, calculators, filters, and custom UI architecture.",
        heroSubtitle:
          "Clean component composition, custom hooks, strict TypeScript interfaces, and virtualized lists tuned so complex browser tools feel instantaneous.",
        techTerms: [
          "React 19 Components",
          "Custom Hooks & State",
          "Minimal Client JS Bundle",
          "Playwright / Vitest QA",
        ],
        deliverables: [
          "Modular reusable React component library with clean prop contracts",
          "Interactive filters, multi-currency calculators & live configurators",
          "Automated regression smoke checks & zero console-error builds",
          "Clean Storybook-ready TypeScript component files",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "React 19 · TypeScript · Tailwind",
        slaOrOutputSpec: "60fps Client Interactivity",
      },
      {
        slug: "nextjs-development",
        title: "Next.js Development",
        shortSummary:
          "Static SSG, dynamic ISR, Server Actions, and App Router architectures built for global SEO velocity.",
        heroSubtitle:
          "Leverage the exact stack powering high-growth US and European tech flagships—sub-second TTFB via edge CDN static rendering paired with secure Server Components.",
        techTerms: [
          "App Router & RSC",
          "SSG / ISR Pre-Rendering",
          "Metadata & JSON-LD API",
          "Image Optimization",
        ],
        deliverables: [
          "Next.js 15+ production repository with static & dynamic routes",
          "Server Actions / API routes for forms, webhooks & CRM sync",
          "Per-route SEO metadata, OpenGraph & structured JSON-LD schema",
          "Vercel / Docker deployment pipeline + zero-warning production build",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js 15 · RSC · Edge CDN",
        slaOrOutputSpec: "0.4s Global LCP",
      },
      {
        slug: "full-stack-development",
        title: "Full-Stack Web Development",
        shortSummary:
          "End-to-end databases, authentication, Stripe billing, REST/GraphQL APIs, and frontend execution.",
        heroSubtitle:
          "One cohesive senior engineering team spanning PostgreSQL schema modeling, row-level security, backend business logic, and polished frontend workflows.",
        techTerms: [
          "PostgreSQL / Prisma / Drizzle",
          "REST / GraphQL & Auth",
          "Stripe Webhooks & Billing",
          "OWASP Hardened APIs",
        ],
        deliverables: [
          "Production database schema, migrations & authenticated API endpoints",
          "Encrypted session auth, role permissions & email notifications",
          "Complete connected frontend + admin management views",
          "Docker / Vercel / Railway deployment runbook & full Git ownership",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · Node · PostgreSQL",
        slaOrOutputSpec: "Production Auth & DB",
      },
      {
        slug: "headless-development",
        title: "Headless Website Development",
        shortSummary:
          "Decoupled Next.js frontends wired to Sanity, Contentful, Strapi, WordPress, or Shopify Storefront APIs.",
        heroSubtitle:
          "Give marketing teams familiar CMS editing autonomy while keeping your public website decoupled on ultra-fast, unhackable edge-cached React delivery.",
        techTerms: [
          "Decoupled Edge Frontend",
          "On-Demand Revalidation",
          "GraphQL / REST Content",
          "Live Visual Preview",
        ],
        deliverables: [
          "Typed GraphQL/REST API client connecting your headless CMS or commerce core",
          "Webhook-triggered ISR instant publish updates in <2 seconds",
          "Modular rich-text block renderers matched strictly to Figma tokens",
          "Preview draft mode so editors inspect pages before publishing",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · Sanity / Shopify API",
        slaOrOutputSpec: "Instant Edge Publishing",
      },
      {
        slug: "custom-website-features",
        title: "Custom Website Features",
        shortSummary:
          "Interactive ROI calculators, multi-step onboarding wizards, pricing configurators, and AI search bars.",
        heroSubtitle:
          "Upgrade an existing marketing site with high-intent interactive widgets that turn passive visitors into qualified, pre-scoped leads.",
        techTerms: [
          "Interactive Estimators",
          "Multi-Step Validation",
          "URL State Deep-Linking",
          "Zero Layout Shift",
        ],
        deliverables: [
          "Standalone drop-in interactive widget integrated into your site",
          "Multi-currency formatting, dynamic calculations & CRM payload capture",
          "Full keyboard navigation & screen-reader live region support",
          "Clean unit/build verification with zero CLS regression",
        ],
        turnaround: "4–7 Business Days",
        stackSpec: "React · TypeScript · Zodiac Validation",
        slaOrOutputSpec: "WCAG AA Interactive",
      },
    ],
  },
  {
    number: "03",
    slug: "ecommerce-development",
    menuTitle: "E-commerce Development",
    fullTitle: "E-commerce & Online Store Development",
    menuDesc: "Shopify, WooCommerce, custom stores",
    iconKey: "shopping-cart",
    heroHeadline: "High-AOV Online Storefronts Built",
    heroAccent: "to Convert Traffic.",
    heroSummary:
      "Bespoke Shopify OS 2.0 themes, WooCommerce engineering, custom headless storefronts, frictionless slide-out cart drawers, and subscription / B2B wholesale portals.",
    techTerms: [
      "Shopify OS 2.0 / Liquid",
      "Slide-Out Cart & Upsell",
      "Sub-Second PDP Load",
      "Subscription & B2B UX",
    ],
    relatedCaseSlugs: [
      "pawmedal-website-v3",
      "oem-sound-ebay-shopfront",
    ],
    services: [
      {
        slug: "shopify-development",
        title: "Shopify Store Development",
        shortSummary:
          "Custom OS 2.0 Shopify themes, section blocks, bundle builders, and high-converting PDP architecture.",
        heroSubtitle:
          "Move past cookie-cutter Dawn templates—we build bespoke Shopify storefronts with fast Liquid sections, clean metafield architecture, and higher add-to-cart rates.",
        techTerms: [
          "Shopify OS 2.0 Sections",
          "Metafield Schema Spec",
          "Ajax Cart & Cross-Sell",
          "App-Free Lightweight JS",
        ],
        deliverables: [
          "Custom branded Shopify theme with reusable drag-and-drop OS 2.0 blocks",
          "High-conversion PDP with variant swatches, trust badges & sticky ATC",
          "Ajax slide-out cart drawer with free-shipping progress & bundles",
          "Markets / multi-currency setup (USD, EUR, GBP, AUD, CAD) & GA4 e-com events",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Shopify OS 2.0 · Liquid · JS",
        slaOrOutputSpec: "Zero App-Bloat Speed",
      },
      {
        slug: "woocommerce-development",
        title: "WooCommerce Development",
        shortSummary:
          "Fast, hardened custom WooCommerce storefronts with tailored product filters and Stripe/Klarna checkout.",
        heroSubtitle:
          "Scalable WordPress commerce free of bloated page-builder drag—built cleanly with custom post templates, object caching, and streamlined checkout funnels.",
        techTerms: [
          "Custom Woo Templates",
          "AJAX Attribute Filters",
          "Object & Page Cache",
          "Stripe / Klarna Native",
        ],
        deliverables: [
          "Custom WooCommerce storefront & child theme crafted cleanly in PHP/CSS",
          "Fast multi-attribute faceted filtering across large SKU catalogs",
          "Streamlined one-page checkout + tax/shipping zone rules (US/EU/UK/AU)",
          "Security hardening & automated backup routines",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "WooCommerce · PHP 8 · Redis",
        slaOrOutputSpec: "Clean Fast Checkout",
      },
      {
        slug: "custom-ecommerce-development",
        title: "Custom E-commerce Websites",
        shortSummary:
          "Headless Next.js + Shopify Storefront API or Stripe custom commerce platforms with luxury motion.",
        heroSubtitle:
          "Unmatched editorial storytelling meets 0.4s edge page loads—ideal for direct-to-consumer flagship brands refusing layout compromises.",
        techTerms: [
          "Headless Storefront API",
          "ISR Catalog Sync",
          "Stripe Checkout / Elements",
          "0.4s Edge PDP Loads",
        ],
        deliverables: [
          "Custom Next.js storefront wired cleanly to Shopify or Stripe backend",
          "Instant edge-cached collection pages & predictive search overlay",
          "Persistent multi-currency cart synced across mobile and desktop",
          "Complete analytics, pixel consent & technical SEO Schema markup",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · Shopify API · Stripe",
        slaOrOutputSpec: "99+ Lighthouse Store",
      },
      {
        slug: "ecommerce-redesign",
        title: "E-commerce Store Redesign",
        shortSummary:
          "CRO-led UX overhauls turning leaky existing stores into high-velocity checkout machines.",
        heroSubtitle:
          "We audit cart drop-offs, mobile thumb reach, PDP clarity, and speed bottlenecks—shipping a cleaner, higher-converting storefront with zero URL SEO loss.",
        techTerms: [
          "PDP CRO Heat Audit",
          "Mobile Sticky Checkout",
          "URL Redirect Map (301)",
          "Core Web Vitals Lift",
        ],
        deliverables: [
          "UX & funnel drop-off diagnostic across homepage, PLP, PDP & cart",
          "Modernized visual design + mobile-first conversion flow overhaul",
          "Zero-downtime staging cutover with full 301 SEO URL preservation",
          "Post-launch tracking verification (GA4 + Meta Conversions)",
        ],
        turnaround: "2–3 Weeks",
        stackSpec: "Shopify / Woo / Headless",
        slaOrOutputSpec: "Protected SEO Equity",
      },
      {
        slug: "catalog-checkout-development",
        title: "Product Catalog & Checkout",
        shortSummary:
          "Multi-variant tier pickers, build-your-own-box configurators, tiered discounts, and express pay.",
        heroSubtitle:
          "Solve complex SKU configurations—custom engraving inputs, multi-item starter bundles, conditional shipping rules, and Apple Pay / Shop Pay / Klarna express flows.",
        techTerms: [
          "Bundle Builder Logic",
          "Multi-Variant Matrices",
          "Express Wallet Checkout",
          "Conditional Tax / Duties",
        ],
        deliverables: [
          "Custom interactive bundle configurator or multi-attribute picker",
          "Line-item properties, wholesale tier pricing or gift-note workflows",
          "Tested Express Pay (Apple Pay, Google Pay, Stripe Link, Shop Pay)",
          "Clean regression QA across desktop & iOS/Android checkout",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Shopify Functions · Stripe · React",
        slaOrOutputSpec: "Zero Cart Regression",
      },
      {
        slug: "subscription-b2b-commerce",
        title: "Subscription & B2B Commerce",
        shortSummary:
          "Recurring Recharge/Skio box memberships, wholesale B2B net-30 portals, and tiered volume ordering.",
        heroSubtitle:
          "Drive predictable recurring revenue across D2C replenishment memberships and authenticated wholesale buyer portals with custom price lists and quick-order grids.",
        techTerms: [
          "Recharge / Skio Cadence",
          "B2B Gated Price Lists",
          "CSV Quick-Order Matrix",
          "Customer Self-Manage UI",
        ],
        deliverables: [
          "Custom subscribe-and-save toggle UX + clean member skip/swap portal",
          "Authenticated B2B wholesale tier pricing, MOQs & net-terms checkout",
          "Fast SKU quick-order grid & repeat-order workflow for stockists",
          "Webhook sync with ERP, Klaviyo retention flows & billing portals",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Shopify B2B · Stripe Billing",
        slaOrOutputSpec: "Recurring MRR Engine",
      },
    ],
  },
  {
    number: "04",
    slug: "cms-development",
    menuTitle: "CMS & Website Platforms",
    fullTitle: "CMS & Website Platforms",
    menuDesc: "WordPress, Webflow, CMS integrations",
    iconKey: "blocks",
    heroHeadline: "Empower Your Marketing Team to Ship",
    heroAccent: "Pages Without Devs.",
    heroSummary:
      "Clean WordPress block engineering, Client-First Webflow builds, custom headless Sanity/Contentful workspaces, and lossless CMS migrations engineered for scale.",
    techTerms: [
      "Webflow Client-First",
      "WordPress ACF / Blocks",
      "Sanity Studio Schemas",
      "Zero-Loss Migrations",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "pawmedal-website-v3",
    ],
    services: [
      {
        slug: "wordpress-development",
        title: "WordPress Website Development",
        shortSummary:
          "Lightweight custom Gutenberg block themes and ACF Pro architectures running cleanly with 95+ speed.",
        heroSubtitle:
          "Never heavy Elementor spaghetti—we engineer clean custom PHP themes structured around native WordPress blocks and ACF Pro fields so editors can build safely.",
        techTerms: [
          "Custom Gutenberg Blocks",
          "ACF Pro Flexible Schema",
          "Zero Bloat Plugins",
          "OWASP WP Hardening",
        ],
        deliverables: [
          "Bespoke WordPress theme crafted cleanly from Figma without heavy builders",
          "Structured ACF Pro / Gutenberg blocks locking brand spacing & typography",
          "Custom Post Types (Case Studies, Team, Careers, Resources)",
          "Security hardening, XML SEO setup & editor video walkthrough",
        ],
        turnaround: "2–3 Weeks",
        stackSpec: "WordPress · ACF Pro · PHP 8",
        slaOrOutputSpec: "95+ Speed · Clean Admin",
      },
      {
        slug: "webflow-development",
        title: "Webflow Website Development",
        shortSummary:
          "Pixel-accurate Webflow marketing sites built strictly with Client-First naming, CMS collections & GSAP motion.",
        heroSubtitle:
          "Give fast-moving startups complete Webflow visual editing autonomy—clean class naming, responsive Fluid REM typography, CMS collections, and smooth motion.",
        techTerms: [
          "Finsweet Client-First",
          "Fluid REM CSS Scale",
          "Dynamic CMS Collections",
          "Clean Webflow Interactions",
        ],
        deliverables: [
          "Full Webflow build structured on clean Client-First class naming",
          "Dynamic CMS collections (Blog, Case Studies, Authors, Locations)",
          "Smooth hardware-accelerated hover & scroll interactions",
          "Semantic HTML landmarks, OpenGraph & custom form webhook integrations",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Webflow · Client-First · GSAP",
        slaOrOutputSpec: "Editor Autonomy Day 1",
      },
      {
        slug: "wordpress-theme-customization",
        title: "WordPress Theme Customization",
        shortSummary:
          "Bespoke visual, layout, performance, and functional upgrades cleanly implemented inside a safe child theme.",
        heroSubtitle:
          "Upgrade an existing WordPress storefront or corporate theme without breaking future updates—refining headers, landing templates, speed bottlenecks, and block styles.",
        techTerms: [
          "Safe Child Theme Spec",
          "Custom Shortcodes / Blocks",
          "CSS / JS Asset Purge",
          "Core Update Safe",
        ],
        deliverables: [
          "Clean update-safe child theme customizations matching new brand rules",
          "Custom landing templates, pricing blocks & header/navigation overhaul",
          "Removal of redundant heavy scripts & broken layout CSS conflicts",
          "Staging-tested rollout cleanly deployed to production",
        ],
        turnaround: "4–8 Business Days",
        stackSpec: "WP Child Theme · PHP · CSS",
        slaOrOutputSpec: "Update-Safe Codebase",
      },
      {
        slug: "custom-cms-development",
        title: "Custom CMS Development",
        shortSummary:
          "Tailored editorial workspaces, role-based approval pipelines, and domain-specific content modeling.",
        heroSubtitle:
          "When generic blog forms aren't enough—we model bespoke content schemas for multi-brand directories, compliance publishing, and localized catalogs.",
        techTerms: [
          "Role Approval Workflows",
          "Custom Field Validation",
          "Multi-Locale Content Tree",
          "Audit Revision History",
        ],
        deliverables: [
          "Domain-modeled content schema mapped cleanly to frontend components",
          "Editorial draft/review/publish role permissions & live previews",
          "Asset library taxonomy, focal-point cropping & alt-text guardrails",
          "Clean developer API docs & editor SOP manual",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Sanity / Strapi / Payload",
        slaOrOutputSpec: "Tailored Editorial Flow",
      },
      {
        slug: "headless-cms-integration",
        title: "Headless CMS Integration",
        shortSummary:
          "Connect Next.js or React sites seamlessly to Sanity Studio, Contentful, Strapi, or DatoCMS.",
        heroSubtitle:
          "Real-time visual editing for marketing paired with static Next.js speed—supporting modular Portable Text / Rich Text blocks, webhooks, and zero downtime publishing.",
        techTerms: [
          "Sanity / Contentful / Strapi",
          "Webhook ISR Revalidate",
          "Visual Draft Preview",
          "Typed GROQ / GraphQL",
        ],
        deliverables: [
          "Production CMS workspace configured with clean modular page schemas",
          "Typed Next.js fetch utilities + instant webhook cache invalidation",
          "Draft live-preview routing for editors & SEO metadata panels",
          "Complete schema ownership inside your Git & CMS account",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Next.js · Sanity / Contentful",
        slaOrOutputSpec: "2s Live Revalidation",
      },
      {
        slug: "cms-migration",
        title: "CMS Migration & Content Setup",
        shortSummary:
          "Zero-data-loss content, media, metadata, and 301 URL migration between WordPress, Webflow, and Next.js.",
        heroSubtitle:
          "Moving 100+ blog posts, case studies, authors, and SEO meta tags without broken slugs, missing images, or ranking drops across Google Search.",
        techTerms: [
          "Automated ETL Scripts",
          "100% 301 Redirect Matrix",
          "Meta & Schema Parity",
          "Broken-Link Verification",
        ],
        deliverables: [
          "Scripted migration of articles, tags, authors & media assets",
          "Cleaned HTML → structured rich-text blocks (no legacy inline cruft)",
          "Full 301 redirect mapping verified against indexed search URLs",
          "Pre/post-cutover link crawler & indexing validation",
        ],
        turnaround: "5–10 Business Days",
        stackSpec: "Node Migration Scripts · CSV/API",
        slaOrOutputSpec: "Zero Broken Slugs",
      },
    ],
  },
  {
    number: "05",
    slug: "landing-page-design",
    menuTitle: "Landing Pages & Funnels",
    fullTitle: "Landing Pages & Conversion Funnels",
    menuDesc: "High-converting pages and campaigns",
    iconKey: "target",
    heroHeadline: "Single-Purpose Pages Built for",
    heroAccent: "Lower CPA & Higher Leads.",
    heroSummary:
      "Paid-search PPC landing pages, Product Hunt launches, multi-step lead funnels, and viral waitlists combining tight message-match copywriting with instant load times.",
    techTerms: [
      "Ad-to-Page Message Match",
      "Sub-1.0s Mobile LCP",
      "Multi-Step Micro-Funnel",
      "GA4 & Pixel Attribution",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "oem-sound-ebay-shopfront",
    ],
    services: [
      {
        slug: "conversion-landing-pages",
        title: "High-Converting Landing Pages",
        shortSummary:
          "Distraction-free single-goal pages structured around crisp visual proof, objection handling, and CTAs.",
        heroSubtitle:
          "Strip away leaking top-bar exits and align every headline, comparison table, and testimonial around one measurable sign-up or discovery call goal.",
        techTerms: [
          "Zero-Leak Funnel Nav",
          "Above-Fold Value Hook",
          "Social Proof Anchor",
          "A/B Test Modularity",
        ],
        deliverables: [
          "Conversion narrative flow + bespoke desktop & mobile UI build",
          "Custom comparison tables, ROI snapshots & interactive FAQ accordions",
          "Fast calendar booking or clean multi-field intake capture",
          "GA4 event tracking & UTM parameter persistence out of the box",
        ],
        turnaround: "4–7 Business Days",
        stackSpec: "Next.js / Webflow / Figma",
        slaOrOutputSpec: "Sub-Second Paid Load",
      },
      {
        slug: "ppc-landing-pages",
        title: "PPC & Google Ads Landing Pages",
        shortSummary:
          "Ultra-fast paid acquisition landers boosting Google Ads Quality Score and lowering Meta/LinkedIn CAC.",
        heroSubtitle:
          "Paid ad clicks vanish if mobile takes 4 seconds to paint—we engineer lightweight keyword-aligned pages achieving higher Quality Scores and cleaner ROAS.",
        techTerms: [
          "Google Ads Quality Lift",
          "Dynamic Headline Slots",
          "0.4s Mobile Paint",
          "UTM & GCLID Pass-Thru",
        ],
        deliverables: [
          "Dedicated ad-group aligned landing template (reusable across campaigns)",
          "Clean keyword message-match hero + instant inline lead form",
          "Hidden GCLID / UTM capture routed directly into your CRM",
          "99+ Mobile PageSpeed performance verified live",
        ],
        turnaround: "3–5 Business Days",
        stackSpec: "Next.js · Tailwind · CRM API",
        slaOrOutputSpec: "Higher Quality Score",
      },
      {
        slug: "product-launch-pages",
        title: "Product Launch Pages",
        shortSummary:
          "Flagship Product Hunt, hardware drop, and major v2.0 software release microsites built for viral buzz.",
        heroSubtitle:
          "Combine bold kinetic showcase visuals, interactive product mockups, press quotes, and instant share cards so launch day turns traffic straight into users.",
        techTerms: [
          "Interactive Product Stage",
          "Press & Social Share Kit",
          "Traffic Spike Edge Scale",
          "Live Demo Embed UX",
        ],
        deliverables: [
          "Showstopping bespoke microsite crafted for launch-day momentum",
          "Interactive product tour, pricing toggle & launch offer banner",
          "Custom 1200×630 OpenGraph cards & founder launch video embed",
          "Edge-cached deployment built to absorb Product Hunt traffic spikes",
        ],
        turnaround: "5–8 Business Days",
        stackSpec: "Next.js · Framer Motion · Edge",
        slaOrOutputSpec: "Spike-Proof Edge CDN",
      },
      {
        slug: "lead-generation-websites",
        title: "Lead Generation Websites",
        shortSummary:
          "Multi-page inbound engines featuring industry landers, ROI tools, gated guides, and CRM routing.",
        heroSubtitle:
          "Engineered specifically for B2B services, SaaS sales teams, and regional franchises capturing consistent organic and paid pipeline daily.",
        techTerms: [
          "Multi-Vertical Landers",
          "Multi-Step Qualification",
          "HubSpot / Pipedrive Sync",
          "Programmatic Location SEO",
        ],
        deliverables: [
          "Core website + repeatable vertical / regional landing page templates",
          "Frictionless multi-step project quiz routing leads by deal size/region",
          "Direct HubSpot, Salesforce, or Pipedrive webhook submission",
          "GDPR / CCPA compliant opt-in checkboxes + automated thank-you flow",
        ],
        turnaround: "2–3 Weeks",
        stackSpec: "Next.js · CRM API · SEO Schema",
        slaOrOutputSpec: "Full Pipeline Attribution",
      },
      {
        slug: "sales-funnel-pages",
        title: "Sales Funnel Pages",
        shortSummary:
          "Complete Opt-In → VSL / Webinar → Checkout → One-Click Upsell thank-you digital product flows.",
        heroSubtitle:
          "Leave clunky dated funnel templates behind—deliver high-trust Stripe checkout funnels wrapped in crisp brand authority.",
        techTerms: [
          "VSL / Offer Flow Arc",
          "Embedded Stripe Checkout",
          "Session Order Bump UI",
          "Webhook Fulfillment",
        ],
        deliverables: [
          "Synchronized multi-step funnel sequence (Landing, Checkout, Thank You)",
          "Embedded Stripe payment checkout + clear guarantee/trust callouts",
          "Automated receipt, email onboarding webhook & pixel purchase tracking",
          "100% custom code with zero monthly per-funnel platform tax",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Next.js · Stripe · Email API",
        slaOrOutputSpec: "Zero SaaS Funnel Tax",
      },
      {
        slug: "coming-soon-pages",
        title: "Coming Soon & Waitlist Pages",
        shortSummary:
          "Credible stealth-mode launch teasers capturing early-access emails, investor interest, and referral queue spots.",
        heroSubtitle:
          "Build waitlist momentum in days while your core app finishes engineering—establishing clear domain authority and early brand prestige from Day 1.",
        techTerms: [
          "Double Opt-In Capture",
          "Referral Position Hook",
          "Stealth Investor Credibility",
          "SEO Index Warm-Up",
        ],
        deliverables: [
          "Sleek teaser landing page showcasing core positioning & visual sneak peek",
          "Validated waitlist signup routed to Resend / Mailchimp / ConvertKit",
          "Technical SEO meta + custom social sharing preview image",
          "Zero-maintenance static edge hosting ready to swap at launch",
        ],
        turnaround: "2–3 Business Days",
        stackSpec: "Next.js · Resend / Loops API",
        slaOrOutputSpec: "48–72h Live Turnaround",
      },
    ],
  },
  {
    number: "06",
    slug: "website-redesign",
    menuTitle: "Website Redesign",
    fullTitle: "Website Redesign & Migration",
    menuDesc: "Rebranding, upgrades and migration",
    iconKey: "refresh-cw",
    heroHeadline: "Modernize Legacy Websites Without",
    heroAccent: "Losing Search Rankings.",
    heroSummary:
      "Turn slow, outdated sites into crisp editorial flagships with UI/UX modernization, platform migrations (Wix/Squarespace/legacy WP → Next.js/Webflow), and 100% 301 SEO protection.",
    techTerms: [
      "Zero-Drop 301 Redirects",
      "UI/UX Modernization",
      "Zero-Downtime Cutover",
      "Core Web Vitals Rescue",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "pawmedal-website-v3",
    ],
    services: [
      {
        slug: "website-redesign-services",
        title: "Complete Website Redesign",
        shortSummary:
          "Full strategic, visual, and technical overhaul transforming underperforming legacy sites end to end.",
        heroSubtitle:
          "We audit what currently works in Google Search Console & GA4, overhaul messaging hierarchy and design craft, and rebuild cleanly for speed and higher lead conversion.",
        techTerms: [
          "GA4 / GSC Equity Audit",
          "IA & Copy Restructuring",
          "Clean Stack Rebuild",
          "301 URL Preservation",
        ],
        deliverables: [
          "Comprehensive UX, SEO equity & speed diagnostic of current website",
          "Brand-elevated full redesign in Figma + clean production rebuild",
          "Mapped 301 redirect sheet protecting every ranking URL & backlink",
          "Staging QA, smooth DNS launch & post-launch Search Console check",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js / Webflow · SEO Map",
        slaOrOutputSpec: "Rankings Preserved",
      },
      {
        slug: "website-ui-ux-redesign",
        title: "Website UI/UX Modernization",
        shortSummary:
          "Refresh dated typography, cluttered navigation, and weak CTAs into modern Swiss editorial clarity.",
        heroSubtitle:
          "Keep your underlying backend working while giving your customer-facing screens crisp spacing, accessible WCAG typography, modern diagrams, and trustworthy visual polish.",
        techTerms: [
          "Swiss Grid & Hierarchy",
          "WCAG Contrast Fix",
          "Nav Dock Simplification",
          "Modern Diagram Upgrade",
        ],
        deliverables: [
          "Before/after UI modernization audit targeting conversion friction",
          "Refreshed Figma design system, bespoke illustrations & modern layouts",
          "Updated accessible interactive components & mobile drawer flows",
          "Clean visual QA diff across live staging",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Figma · React / CSS / Next.js",
        slaOrOutputSpec: "Modern Enterprise Feel",
      },
      {
        slug: "website-rebranding",
        title: "Website Rebranding",
        shortSummary:
          "Seamless digital rollout translating your new logo, palette, fonts, and messaging across every page.",
        heroSubtitle:
          "Launching a new brand identity demands zero half-updated legacy pages—we systematically migrate tokens, imagery, OpenGraph cards, PDFs, and web components together.",
        techTerms: [
          "Brand Token Rollout",
          "Old-to-New Asset Audit",
          "Font & Swatch Sync",
          "Cohesive Launch Window",
        ],
        deliverables: [
          "Site-wide design token replacement across colors, typography & radii",
          "Refreshed header, footer, OpenGraph cards, favicons & UI imagery",
          "Synchronized brand swap across email signatures, forms & policy docs",
          "Single coordinated cutover on your launch date",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Next.js / Webflow / Shopify",
        slaOrOutputSpec: "100% Visual Cohesion",
      },
      {
        slug: "platform-migration",
        title: "Platform Migration",
        shortSummary:
          "Seamless migration from Wix, Squarespace, Drupal, or bloated WordPress to Next.js, Webflow, or Shopify.",
        heroSubtitle:
          "Escape slow legacy builders and recurring maintenance headaches—we script content transfers, reconstruct clean responsive layouts, and verify zero 404s during DNS switchover.",
        techTerms: [
          "Zero-Downtime Cutover",
          "Content & Media ETL",
          "Strict 301 Redirect Map",
          "SSL & DNS Transition",
        ],
        deliverables: [
          "Complete content, media, blog & metadata migration to modern platform",
          "Cleaned URL hierarchy paired with automated 301 redirect verification",
          "Staging approval environment before touching live production DNS",
          "48-hour post-cutover log monitoring catching zero 404s",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Next.js · Webflow · Shopify",
        slaOrOutputSpec: "Zero Downtime Switch",
      },
      {
        slug: "mobile-website-redesign",
        title: "Responsive & Mobile Redesign",
        shortSummary:
          "Eliminate horizontal scrolling, tiny buttons, and slow 4G mobile layouts hurting over 60% of traffic.",
        heroSubtitle:
          "Turn frustrating desktop-shrunk pages into sleek mobile experiences featuring fast collapsible accordions, sticky conversion CTAs, and crisp 4G image sizing.",
        techTerms: [
          "390px Thumb Ergonomics",
          "Mobile LCP Optimization",
          "Zero Horizontal Overflow",
          "Drawer & Sheet UX",
        ],
        deliverables: [
          "Mobile usability audit covering iPhone SE, standard Pro & Android screens",
          "Redesigned mobile header, scannable card grids & compact forms",
          "Optimized responsive `srcset` / AVIF media weights for 4G networks",
          "Live Playwright viewport verification with 0 overflow",
        ],
        turnaround: "5–10 Business Days",
        stackSpec: "Tailwind CSS · React · Playwright",
        slaOrOutputSpec: "100% Mobile Friendly",
      },
      {
        slug: "legacy-website-modernization",
        title: "Legacy Website Modernization",
        shortSummary:
          "Rescue aging jQuery, PHP 5/7, or monolithic sites by upgrading cleanly into secure modular React/Next.js.",
        heroSubtitle:
          "De-risk fragile legacy websites suffering unpatched dependencies, broken mobile views, and multi-second database lag—preserving core business workflows inside modern TypeScript.",
        techTerms: [
          "Strangler-Fig Upgrade",
          "Strict TypeScript Rewrite",
          "Vulnerability Removal",
          "API Parity Wrapper",
        ],
        deliverables: [
          "Architectural dependency audit & incremental replacement roadmap",
          "Clean TypeScript frontend + refactored secure backend endpoints",
          "Removal of deprecated libraries, mixed-content & security warnings",
          "Long-term documented repository ready for modern cloud hosting",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Next.js · TypeScript · Node",
        slaOrOutputSpec: "Zero Legacy Debt",
      },
    ],
  },
  {
    number: "07",
    slug: "web-applications",
    menuTitle: "Portals & Web Applications",
    fullTitle: "Web Portals & SaaS Applications",
    menuDesc: "SaaS, portals and client dashboards",
    iconKey: "app-window",
    heroHeadline: "SaaS Platforms, Portals & Dashboards",
    heroAccent: "Engineered for Scale.",
    heroSummary:
      "Multi-tenant SaaS products, white-label client portals, virtualized admin consoles, booking marketplaces, and paid membership apps crafted cleanly with RBAC security and 60fps UI.",
    techTerms: [
      "Multi-Tenant RBAC",
      "100K+ Virtualized Tables",
      "Stripe Connect / Billing",
      "Real-Time Telemetry",
    ],
    relatedCaseSlugs: [
      "danielle-rtb-media-website-2026",
      "pawmedal-website-v3",
    ],
    services: [
      {
        slug: "saas-development",
        title: "SaaS Web Application Development",
        shortSummary:
          "0→1 multi-tenant SaaS products uniting workspace switching, Stripe billing, auth, and core workflows.",
        heroSubtitle:
          "Ship investor-ready, revenue-generating B2B software 3× faster—our 3-person senior atelier handles Figma product UX, database multi-tenancy, billing, and TypeScript UI under one roof.",
        techTerms: [
          "Multi-Tenant Workspaces",
          "Stripe Subscriptions",
          "Team Invites & RBAC",
          "End-to-End Type Safety",
        ],
        deliverables: [
          "Complete product UX flows, dark/light design system & interactive frontend",
          "Multi-tenant org switching, role permissions & user onboarding",
          "Production Stripe checkout, customer portal & metered billing webhooks",
          "PostgreSQL schema + CI/CD automated Playwright/Vitest suite",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "Next.js · TypeScript · Postgres",
        slaOrOutputSpec: "Revenue-Ready MVP",
      },
      {
        slug: "client-portal-development",
        title: "Customer & Client Portals",
        shortSummary:
          "Branded self-serve portals for invoices, deliverable approvals, shared files, and live ticket status.",
        heroSubtitle:
          "Replace messy email attachments with a bespoke client portal where buyers track milestones, approve proofs, download source assets, and settle invoices securely.",
        techTerms: [
          "Secure Signed File Vault",
          "Approval Workflow States",
          "Invoice & Magic-Link Auth",
          "White-Label Branded UI",
        ],
        deliverables: [
          "Passwordless magic-link or SSO authenticated client portal",
          "Project milestone tracker, versioned deliverable approvals & notes",
          "Signed Cloud Storage file uploads/downloads + Stripe invoice pay",
          "Clean admin team management console",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · Auth · Cloud Storage",
        slaOrOutputSpec: "SOC-Minded Access",
      },
      {
        slug: "admin-dashboard-development",
        title: "Admin Dashboard Development",
        shortSummary:
          "High-density operational consoles with TanStack Table virtualization, Recharts/D3 telemetry & exports.",
        heroSubtitle:
          "Designed cleanly for power operators—sub-50ms multi-facet filtering across 100,000+ records, keyboard shortcuts, audit logs, and instantaneous CSV/PDF reporting.",
        techTerms: [
          "TanStack Virtual Tables",
          "Recharts / D3 / Visx",
          "Cmd+K Power Actions",
          "Immutable Audit Trail",
        ],
        deliverables: [
          "Dark & light institutional telemetry console matching brand tokens",
          "Virtualized data tables with column pinning, search & bulk actions",
          "Custom financial/operational charts + scheduled CSV/PDF exports",
          "Strict RBAC visibility controls per internal team role",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "React · TanStack · Recharts",
        slaOrOutputSpec: "<50ms Filter Speed",
      },
      {
        slug: "booking-platform-development",
        title: "Booking & Appointment Platforms",
        shortSummary:
          "Real-time timezone-aware scheduling marketplaces, resource availability grids, and Stripe deposit flows.",
        heroSubtitle:
          "Built cleanly for healthcare clinics, consultants, salons, and rental marketplaces—eliminating double-bookings across US, EU, UK, AU, and CA client timezones.",
        techTerms: [
          "IANA Timezone Engine",
          "Double-Book Mutex Lock",
          "Two-Way Calendar Sync",
          "Deposit & Cancel Rules",
        ],
        deliverables: [
          "Live availability slot picker with automatic visitor timezone conversion",
          "Transactional slot locking + Google/Outlook calendar sync webhooks",
          "Stripe deposit payments, rescheduling windows & SMS/email reminders",
          "Provider availability & payout management dashboard",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · Postgres · Stripe",
        slaOrOutputSpec: "Zero Double-Booking",
      },
      {
        slug: "membership-portal-development",
        title: "Membership & Subscription Portals",
        shortSummary:
          "Gated content academies, investor syndicates, community libraries, and recurring member hubs.",
        heroSubtitle:
          "Host proprietary courses, reports, resource libraries, and tiered member communities behind clean paywalls without paying SaaS platform revenue cuts.",
        techTerms: [
          "Tiered Content Gating",
          "Stripe Customer Portal",
          "Member Directory UI",
          "Signed Video / PDF Stream",
        ],
        deliverables: [
          "Tiered gated content workspace (Gold/Pro/Annual entitlements)",
          "Seamless Stripe Checkout signup, plan upgrades & cancellation flow",
          "Resource library filters, member progress bookmarks & search",
          "Protected private file & media streaming URLs",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · Stripe · Auth",
        slaOrOutputSpec: "0% Platform Rev Share",
      },
      {
        slug: "business-web-applications",
        title: "Custom Business Web Applications",
        shortSummary:
          "Tailored internal tools, quoting estimators, inventory trackers, and approval workflows replacing spreadsheets.",
        heroSubtitle:
          "Automate costly manual Excel processes into reliable web apps tailored strictly to how your operations team actually approves quotes, tracks jobs, and bills.",
        techTerms: [
          "Spreadsheet Replacement",
          "Multi-Stage Approval Flow",
          "PDF Quote Generators",
          "Role Audit Logging",
        ],
        deliverables: [
          "Discovery mapping manual bottlenecks into crisp web workflows",
          "Fast keyboard-driven forms, bulk CSV import & instant PDF outputs",
          "Role permissions (staff, manager, finance, admin) with audit logs",
          "Private cloud deployment with automated encrypted backups",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · TypeScript · Postgres",
        slaOrOutputSpec: "Built Around Your SOP",
      },
    ],
  },
  {
    number: "08",
    slug: "website-optimization",
    menuTitle: "SEO & Performance",
    fullTitle: "SEO, Performance & Accessibility",
    menuDesc: "Technical SEO, speed and accessibility",
    iconKey: "gauge",
    heroHeadline: "Sub-Second Core Web Vitals &",
    heroAccent: "Technical SEO Dominance.",
    heroSummary:
      "Rescuing sluggish sites to achieve 95–100 Lighthouse scores, clean LCP/INP/CLS telemetry, JSON-LD rich schema, WCAG 2.1 AA / AODA compliance, and accurate analytics.",
    techTerms: [
      "LCP ≤ 1.0s · INP < 100ms",
      "JSON-LD Rich Schema",
      "WCAG 2.1 AA / AODA",
      "Zero Layout Shift (CLS 0)",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "pawmedal-website-v3",
    ],
    services: [
      {
        slug: "technical-seo",
        title: "Technical SEO Optimization",
        shortSummary:
          "Crawl architecture, JSON-LD structured schema, canonical hygiene, XML sitemaps, and index cleanup.",
        heroSubtitle:
          "Ensure Google and AI search engines understand, crawl, and rank every service page—eliminating duplicate canonicals, orphan links, broken schema, and index bloat.",
        techTerms: [
          "JSON-LD Schema Graph",
          "Canonical & Hreflang",
          "Dynamic XML Sitemaps",
          "Semantic Heading Tree",
        ],
        deliverables: [
          "Full technical crawl audit across status codes, canonicals & meta tags",
          "Custom JSON-LD Organization, Service, FAQ & Breadcrumb schema",
          "Cleaned H1–H3 semantic structure, internal link graph & sitemap.xml",
          "Google Search Console verification & sitemap submission check",
        ],
        turnaround: "4–7 Business Days",
        stackSpec: "JSON-LD · Next/WP SEO · GSC",
        slaOrOutputSpec: "100/100 Technical SEO",
      },
      {
        slug: "speed-optimization",
        title: "Website Speed Optimization",
        shortSummary:
          "Eliminate render-blocking scripts, oversized imagery, and server TTFB lag across WordPress, Shopify & Next.js.",
        heroSubtitle:
          "Convert more paid and organic visitors in 48 hours—we strip redundant trackers, defer third-party tags cleanly, convert images to AVIF/WebP, and cut waterfall bloat.",
        techTerms: [
          "Critical Path Inline",
          "AVIF / WebP Srcset",
          "Defer Unused JS / Apps",
          "Edge CDN Caching",
        ],
        deliverables: [
          "Lighthouse & WebPageTest waterfall bottleneck report before/after",
          "Automated AVIF/WebP responsive media compression & font preloading",
          "Render-blocking CSS/JS deferral & dead script/plugin cleanup",
          "Cloudflare / CDN edge cache headers verified cleanly live",
        ],
        turnaround: "3–5 Business Days",
        stackSpec: "CDN · Edge · Bundle Audit",
        slaOrOutputSpec: "95+ Mobile / Desktop",
      },
      {
        slug: "core-web-vitals",
        title: "Core Web Vitals Optimization",
        shortSummary:
          "Targeted engineering fixing LCP paint, INP main-thread blocking, and CLS layout jumping metrics.",
        heroSubtitle:
          "Pass Google CrUX real-user field thresholds cleanly across Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
        techTerms: [
          "LCP Preload Priority",
          "INP Thread Yielding",
          "Explicit CLS Dimensions",
          "CrUX Field Pass",
        ],
        deliverables: [
          "Field telemetry & lab trace across mobile 4G throttled devices",
          "Above-fold hero `fetchPriority=\"high\"` & font-display swap tuning",
          "Explicit aspect ratios & skeleton bounds achieving `0.00` CLS",
          "Code-split heavy client JS chunks dropping INP cleanly under 100ms",
        ],
        turnaround: "4–7 Business Days",
        stackSpec: "Chrome Trace · CrUX · Next/WP",
        slaOrOutputSpec: "LCP < 1.2s · CLS 0.00",
      },
      {
        slug: "website-accessibility",
        title: "Website Accessibility Improvements",
        shortSummary:
          "WCAG 2.1 AA, Canadian AODA, US ADA, and European EAA remediation for contrast, focus & screen readers.",
        heroSubtitle:
          "Protect your brand legally while opening your product to every buyer—systematic keyboard tab-order fixes, ARIA labels, skip links, form validation, and contrast parity.",
        techTerms: [
          "WCAG 2.1 AA / AAA",
          "AODA / ADA / EAA Audit",
          "Keyboard Focus Traps Fix",
          "Screen-Reader Landmarks",
        ],
        deliverables: [
          "Automated Axe-core + manual NVDA/VoiceOver keyboard walkthrough audit",
          "Contrast ratio remediation, visible focus rings & skip-to-content link",
          "Semantic buttons/landmarks, accessible modal focus-lock & form errors",
          "Updated Accessibility Statement documentation page",
        ],
        turnaround: "5–8 Business Days",
        stackSpec: "ARIA · Axe QA · WCAG 2.1 AA",
        slaOrOutputSpec: "100/100 Lighthouse A11y",
      },
      {
        slug: "conversion-rate-optimization",
        title: "Conversion Rate Optimization",
        shortSummary:
          "Data-backed UX refinements lifting demo requests, form completions, and checkout starts cleanly.",
        heroSubtitle:
          "Often 2× more pipeline comes from tuning your existing traffic rather than doubling ad spend—we sharpen above-fold value props, pricing framing, and form friction.",
        techTerms: [
          "Funnel Drop-Off Audit",
          "CTA Contrast & Copy",
          "Form Friction Reduction",
          "A/B Split Variants",
        ],
        deliverables: [
          "Page-by-page heuristic + analytics conversion bottleneck audit",
          "Redesigned high-clarity pricing blocks, trust proofs & multi-step intake",
          "A/B ready component variants deployed for split measurement",
          "Verified tracking goals across every primary conversion action",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "GA4 · Clarity · React UI",
        slaOrOutputSpec: "Measurable Lead Lift",
      },
      {
        slug: "analytics-tracking",
        title: "Website Analytics & Tracking",
        shortSummary:
          "Consent-gated GA4, GTM Server-Side, Meta CAPI, and LinkedIn Insight setup aligned with GDPR/CCPA.",
        heroSubtitle:
          "Stop flying blind—clean first-party event tracking wired strictly to user cookie consent banners so marketers measure exact ROI legally in Europe, UK, US & Canada.",
        techTerms: [
          "Consent Mode v2 (GDPR)",
          "GA4 Custom Funnel Events",
          "Server-Side GTM / CAPI",
          "Zero Console Warnings",
        ],
        deliverables: [
          "Structured event taxonomy (CTA clicks, form submits, purchases, scrolls)",
          "Strict GDPR/CCPA opt-in Consent Mode v2 integration",
          "Clean GTM container + Meta Conversions API / LinkedIn Insight verification",
          "Live debug verification report confirming zero duplicate firing",
        ],
        turnaround: "3–5 Business Days",
        stackSpec: "GA4 · GTM · Consent v2",
        slaOrOutputSpec: "GDPR Compliant Data",
      },
    ],
  },
  {
    number: "09",
    slug: "website-maintenance",
    menuTitle: "Maintenance & Support",
    fullTitle: "Website Maintenance & Support Plans",
    menuDesc: "Security, updates and ongoing care",
    iconKey: "shield-check",
    heroHeadline: "Always-On Security, Updates & Care",
    heroAccent: "With Zero Stress.",
    heroSummary:
      "Proactive dependency patches, WordPress plugin safety staging, 24/7 uptime monitoring, rapid bug triage, automated off-site encrypted backups, and senior monthly care hours.",
    techTerms: [
      "Staging-First Patches",
      "24/7 Uptime Watch",
      "Off-Site Daily Backups",
      "12h Senior Response SLA",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "danielle-rtb-media-website-2026",
    ],
    services: [
      {
        slug: "monthly-maintenance",
        title: "Monthly Website Maintenance",
        shortSummary:
          "Comprehensive monthly health checks, npm/dependency patches, uptime checks, and minor UI/copy updates.",
        heroSubtitle:
          "Sleep easy knowing a senior team watches your production site daily—running tested dependency upgrades, SSL checks, broken-link scans, and priority design/dev edits.",
        techTerms: [
          "Staging Pre-Flight QA",
          "Monthly Health Report",
          "SSL & DNS Watchdog",
          "Included Retainer Hours",
        ],
        deliverables: [
          "Scheduled dependency, security & PHP/Node runtime patch management",
          "24/7 uptime alerts + monthly Core Web Vitals & link audit report",
          "Dedicated monthly hours for new sections, copy updates & promos",
          "Direct Slack / email access to our 3-member senior unit",
        ],
        turnaround: "Ongoing · 12h SLA",
        stackSpec: "Next.js · Webflow · WP · Shopify",
        slaOrOutputSpec: "99.9% Uptime Stewardship",
      },
      {
        slug: "wordpress-maintenance",
        title: "WordPress Maintenance",
        shortSummary:
          "Zero-breakage WordPress core, WooCommerce, and plugin updates verified first on a cloned staging site.",
        heroSubtitle:
          "Never click Update All on live production again—we test PHP/plugin compatibility in staging, review visual diffs, clean database bloat, and block brute-force bots.",
        techTerms: [
          "Visual Regression Staging",
          "Plugin Vulnerability Scan",
          "DB Revision Cleanup",
          "WAF Bot Firewall",
        ],
        deliverables: [
          "Bi-weekly / weekly staging-verified Core, Theme & Plugin updates",
          "Malware scanning, XML-RPC lockdown & Cloudflare WAF firewall rules",
          "Daily encrypted off-site backups with 1-click tested restore",
          "WooCommerce checkout smoke-test after every payment plugin update",
        ],
        turnaround: "Ongoing Weekly Care",
        stackSpec: "WordPress · Woo · Cloudflare",
        slaOrOutputSpec: "Zero White-Screen Updates",
      },
      {
        slug: "website-security",
        title: "Website Security & Monitoring",
        shortSummary:
          "CSP/HSTS header hardening, malware cleanup, bot rate-limiting, WAF firewall rules & dependency audits.",
        heroSubtitle:
          "Lock down exposed admin panels, spam contact endpoints, outdated packages, and missing browser headers to meet strict US/EU client procurement checklists.",
        techTerms: [
          "CSP & HSTS Preload",
          "Cloudflare WAF Rules",
          "Dependency CVE Audit",
          "Honeypot & Rate Limit",
        ],
        deliverables: [
          "Full HTTP response header & CVE vulnerability penetration check",
          "HSTS, X-Frame-Options, Referrer-Policy & strict Permissions-Policy setup",
          "Cloudflare WAF firewall + contact form spam honeypot / rate limiting",
          "Malware eradication & blacklist removal when rescuing compromised sites",
        ],
        turnaround: "2–5 Business Days",
        stackSpec: "Headers · Cloudflare WAF · CVE",
        slaOrOutputSpec: "A+ Security Headers",
      },
      {
        slug: "website-bug-fixes",
        title: "Bug Fixing & Troubleshooting",
        shortSummary:
          "Fast senior diagnosis and permanent fixes for broken layouts, React hydration errors, forms & checkouts.",
        heroSubtitle:
          "Whether an urgent mobile overlap is breaking signups or a production API route started failing—we isolate root causes rapidly in code and ship clean verified fixes.",
        techTerms: [
          "Root-Cause Stack Trace",
          "React Hydration Fixes",
          "Cross-Browser Safari QA",
          "Hotfix Staging Deploy",
        ],
        deliverables: [
          "Immediate triage reproducing and isolating root cause across browsers",
          "Clean permanent fix without hacky `!important` CSS patches",
          "Console error, 404/500 API route & responsive layout verification",
          "Brief post-mortem summary explaining what broke and how it stays safe",
        ],
        turnaround: "24–48 Hours Rapid Fix",
        stackSpec: "React · Next.js · WP · Shopify",
        slaOrOutputSpec: "Permanent Clean Patches",
      },
      {
        slug: "website-backup-recovery",
        title: "Website Backup & Recovery",
        shortSummary:
          "Automated off-site daily backups, database point-in-time snapshots, disaster recovery & clean site restores.",
        heroSubtitle:
          "Ensure a hosting crash or accidental delete never costs your business months of content—redundant geo-replicated snapshots verified with scheduled restore drills.",
        techTerms: [
          "Geo-Redundant Snapshots",
          "Automated Daily Cron",
          "Point-in-Time DB Rollback",
          "Verified Restore Drill",
        ],
        deliverables: [
          "Automated daily encrypted off-site backups (files + database)",
          "30-to-90 day immutable retention independent from your primary web host",
          "Emergency hacked/corrupted website recovery & clean migration",
          "Documented emergency recovery playbook",
        ],
        turnaround: "24–48 Hours Setup",
        stackSpec: "S3 / R2 · Postgres Snapshots",
        slaOrOutputSpec: "15-Min RPO Readiness",
      },
      {
        slug: "website-support-plans",
        title: "Website Updates & Support Plans",
        shortSummary:
          "Pre-paid flexible support buckets for ongoing landing pages, seasonal banners, blogs & feature iteration.",
        heroSubtitle:
          "Your dedicated web engineering department on tap—request new team bios, promotional banners, interactive calculators, or CMS pages without writing new SOW contracts.",
        techTerms: [
          "12h SLA Ticket Queue",
          "Senior Design + Code Pair",
          "Rollover Credit Options",
          "Async Loom Reviews",
        ],
        deliverables: [
          "Dedicated async queue handling both visual design & code updates",
          "New campaign sections, CMS articles, banners & copy deployments",
          "Weekly itemized time & deliverable transparency log",
          "Predictable hourly, weekly, or monthly multi-currency billing",
        ],
        turnaround: "Same/Next-Day SLA",
        stackSpec: "Design + Dev Full Stack",
        slaOrOutputSpec: "Zero Overhead Scaling",
      },
    ],
  },
  {
    number: "10",
    slug: "web-integrations",
    menuTitle: "Integrations & Automation",
    fullTitle: "Integrations & Workflow Automation",
    menuDesc: "APIs, CRM, payments and workflows",
    iconKey: "workflow",
    heroHeadline: "Connected Websites Powered by Clean",
    heroAccent: "APIs & AI Workflows.",
    heroSummary:
      "Connect your website directly to HubSpot/Salesforce CRM, Stripe payments, Resend/Klaviyo email flows, custom REST/GraphQL endpoints, and zero-retention AI chat assistants.",
    techTerms: [
      "Verified Webhook Sync",
      "HubSpot / Salesforce API",
      "Stripe Billing & SCA",
      "Zero-Retention AI Bots",
    ],
    relatedCaseSlugs: [
      "danielle-rtb-media-website-2026",
      "boston-lounge-decor-wordpress-website",
    ],
    services: [
      {
        slug: "api-integration",
        title: "API Integration & Development",
        shortSummary:
          "Custom REST and GraphQL integrations with retry queues, Zod schema validation, and webhook security.",
        heroSubtitle:
          "Bridge your website cleanly with ERP inventory, external SaaS databases, shipping rates, or proprietary internal backends using typed, fault-tolerant API middleware.",
        techTerms: [
          "Signed HMAC Webhooks",
          "Typed Zod Validation",
          "Rate-Limit & Retry Logic",
          "Encrypted API Secrets",
        ],
        deliverables: [
          "Typed server-side API connectors keeping keys invisible from browsers",
          "Webhook receivers verifying cryptographic signatures & idempotency",
          "Clean error-handling fallbacks so frontend UX never hangs on timeouts",
          "Postman / OpenAPI integration notes inside your repository",
        ],
        turnaround: "4–8 Business Days",
        stackSpec: "TypeScript · REST / GraphQL",
        slaOrOutputSpec: "Idempotent & Secure",
      },
      {
        slug: "crm-integration",
        title: "CRM & Lead Management Integration",
        shortSummary:
          "Bi-directional sync between website forms, UTM attribution, and HubSpot, Salesforce, or Pipedrive.",
        heroSubtitle:
          "Stop copying website inquiries manually—automatically create enriched contacts, assign regional sales reps (US/UK/EU/AU/CA), trigger Slack alerts, and book calls immediately.",
        techTerms: [
          "HubSpot / Salesforce / Pipedrive",
          "UTM & Source Enrichment",
          "Auto Region Routing",
          "Slack Real-Time Alerts",
        ],
        deliverables: [
          "Direct server-side lead mapping into custom CRM properties & pipelines",
          "Automatic market/timezone owner assignment + instant Slack notification",
          "Clean spam filtering & duplicate contact upsert logic",
          "End-to-end verified test payload trace in CRM sandbox",
        ],
        turnaround: "3–5 Business Days",
        stackSpec: "HubSpot · Salesforce · Slack",
        slaOrOutputSpec: "<2s Lead Sync Speed",
      },
      {
        slug: "payment-gateway-integration",
        title: "Payment Gateway Integration",
        shortSummary:
          "Multi-currency Stripe Elements, Payment Links, PayPal, Klarna & SCA/3DS verified billing flows.",
        heroSubtitle:
          "Accept USD, EUR, GBP, AUD, and CAD cards, Apple Pay, SEPA, and ACH securely with signed Stripe webhook fulfillment, customer invoicing, and zero PCI compliance headaches.",
        techTerms: [
          "Stripe Checkout & Elements",
          "SCA / 3D Secure Compliant",
          "Multi-Currency FX Ready",
          "Webhook Receipt Sync",
        ],
        deliverables: [
          "Embedded Stripe Elements or hosted Checkout configured per currency",
          "Signed webhook handler triggering receipts, portal access & CRM deal close",
          "Subscription upgrade/cancel self-serve portal wiring",
          "Full test-mode card simulation across 3DS & decline edge cases",
        ],
        turnaround: "4–7 Business Days",
        stackSpec: "Stripe · Webhooks · Multi-FX",
        slaOrOutputSpec: "PCI-Safe · Multi-Currency",
      },
      {
        slug: "marketing-automation",
        title: "Marketing & Email Automation",
        shortSummary:
          "Automated onboarding drips, abandoned cart recovery, and lead-magnet fulfillment via Resend & Klaviyo.",
        heroSubtitle:
          "Turn every download, waitlist signup, or booking into an instant branded welcome experience backed by clean SPF/DKIM/DMARC deliverability setup.",
        techTerms: [
          "Klaviyo / Customer.io / Resend",
          "SPF / DKIM / DMARC Auth",
          "Behavior Trigger Flows",
          "Unsubscribe Compliance",
        ],
        deliverables: [
          "Website event triggers piped cleanly into Klaviyo, Resend, or ActiveCampaign",
          "HTML dark-mode-safe transactional & welcome email templates",
          "DNS SPF / DKIM / DMARC domain authentication audit preventing spam folders",
          "CAN-SPAM / GDPR unsubscribe & double-opt-in compliance flows",
        ],
        turnaround: "4–6 Business Days",
        stackSpec: "Klaviyo · Resend · Loops",
        slaOrOutputSpec: "Verified Inbox Placement",
      },
      {
        slug: "ai-website-automation",
        title: "AI Chatbot & Website Automation",
        shortSummary:
          "RAG knowledge-grounded AI assistants, automated brief qualifiers, and zero-data-retention guardrails.",
        heroSubtitle:
          "Deploy genuinely helpful site assistants trained strictly on your verified services, docs, and FAQs—qualifying buyers into calendar bookings without hallucinating pricing or leaking data.",
        techTerms: [
          "RAG Verified Grounding",
          "Zero-Data-Retention API",
          "Structured Brief Output",
          "Guardrail Citations",
        ],
        deliverables: [
          "Custom embedded AI assistant styled seamlessly to your brand tokens",
          "Curated vector/knowledge index locked strictly to approved company docs",
          "Built-in lead handoff CTA routing complex inquiries cleanly to humans",
          "Rate limiting, prompt-injection safeguards & token cost caps",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "AI SDK · Next.js · RAG Guardrails",
        slaOrOutputSpec: "Zero-Retention Safe",
      },
      {
        slug: "third-party-integration",
        title: "Third-Party Tools & Workflow Integration",
        shortSummary:
          "Stitch together Calendly, Cal.com, Notion, Airtable, Make, n8n, and accounting tools cleanly.",
        heroSubtitle:
          "Connect the tools your team already lives in—turning raw website submissions into Notion project boards, Cal.com calendar holds, Xero draft invoices, and Slack digests.",
        techTerms: [
          "Cal.com · Notion · Airtable",
          "n8n / Make Custom Flows",
          "Error Dead-Letter Alerts",
          "Clean Data Mapping",
        ],
        deliverables: [
          "Direct TypeScript webhook or Make/n8n orchestrated workflow pipelines",
          "Seamless Cal.com / Calendly embedded booking with URL param prefill",
          "Failure retry alerts notifying Slack/email if any third-party tool drops",
          "Clear workflow architecture diagram for your internal operations team",
        ],
        turnaround: "3–6 Business Days",
        stackSpec: "Make · n8n · Cal.com · APIs",
        slaOrOutputSpec: "Zero Manual Data Entry",
      },
    ],
  },
];

export const TOTAL_WEBSITE_CATEGORIES = WEBSITE_CATEGORIES.length;

export const TOTAL_WEBSITE_SERVICES = WEBSITE_CATEGORIES.reduce(
  (sum, cat) => sum + cat.services.length,
  0
);

export function getWebsiteCategoryBySlug(
  categorySlug: string
): WebsiteCategory | undefined {
  return WEBSITE_CATEGORIES.find((cat) => cat.slug === categorySlug);
}

export function getWebsiteServiceBySlugs(
  categorySlug: string,
  serviceSlug: string
): { category: WebsiteCategory; service: WebsiteService } | undefined {
  const category = getWebsiteCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const service = category.services.find((srv) => srv.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}

export function getAllWebsiteServiceParams(): { category: string; service: string }[] {
  return WEBSITE_CATEGORIES.flatMap((cat) =>
    cat.services.map((srv) => ({
      category: cat.slug,
      service: srv.slug,
    }))
  );
}

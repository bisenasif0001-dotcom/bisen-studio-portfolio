export type EngagementPeriod = "hourly" | "weekly" | "monthly" | "yearly";

export interface PackageExpandedDetails {
  workloadLimit: string;
  queueAndRevisions: string;
  billingAndNotice: string;
  deliverablesScope: string;
}

export interface PricingPackage {
  id: EngagementPeriod;
  name: string;
  badge: string;
  tierTag: string;
  recommended?: boolean;
  audienceFit: string[];
  usdPrice: number;
  unitLabel: string;
  equivalentMonthlyUsd?: number;
  savingsNote?: string;
  savingsUsdAmount?: number;
  savingsPercent?: string;
  summary: string;
  idealClientLine: string;
  capacitySummary: string;
  turnaround: string;
  turnaroundShort: string;
  commitment: string;
  keyBenefits: string[];
  ctaLabel: string;
  expandedDetails: PackageExpandedDetails;
  matcherQuestion: string;
  matcherBestFor: string;
  includes: string[];
  bestUseCases: string[];
}

export const PACKAGES: PricingPackage[] = [
  {
    id: "hourly",
    name: "Hourly Precision",
    badge: "On-Demand Access",
    tierTag: "ON-DEMAND",
    audienceFit: ["Individuals", "Founders", "Targeted Fixes"],
    usdPrice: 65,
    unitLabel: "/ hour",
    summary:
      "Direct access to senior design and development expertise billed transparently by the hour—ideal for audits, urgent UI/print fixes, and focused consultations.",
    idealClientLine: "Best for small fixes, technical audits, consultations and quick creative tasks.",
    capacitySummary: "5-hr min block · Billed per approved hour",
    turnaround: "24–48h task turnaround",
    turnaroundShort: "24–48h per task",
    commitment: "5-hour minimum block · Weekly verified logs",
    keyBenefits: [
      "Pay only for approved, logged hours",
      "Direct senior design, print, or dev work",
      "Weekly verified time logs & Loom updates",
      "5-hour minimum block · zero ongoing lock-in",
    ],
    ctaLabel: "Choose Hourly",
    expandedDetails: {
      workloadLimit:
        "5-hour minimum initial booking ($325 USD base). Additional hours are pre-approved in weekly or task blocks.",
      queueAndRevisions:
        "Single-task focus; revisions and follow-up edits draw cleanly from your approved hours with line-item logs.",
      billingAndNotice:
        "Prepaid 5-hour block or weekly milestone invoice in USD, EUR, GBP, AUD, or CAD. Stop anytime once approved block completes.",
      deliverablesScope:
        "UI/UX refinements, packaging or print pre-press fixes, React/Next.js troubleshooting, performance audits, or architecture reviews.",
    },
    matcherQuestion: "Need a quick audit, urgent fix, or expert consultation?",
    matcherBestFor: "Targeted tasks, print pre-press updates, UI cleanup & technical advisory.",
    includes: [
      "Direct work with Asif Bisen, Rajpoot Talib & Azma Bisen",
      "Digital design, print pre-press fixes, or code engineering",
      "Verified time logs & Loom progress walkthroughs",
      "Zero long-term lock-in · 5-hour minimum block",
      "Custom paid deliverables transfer 100% on settlement",
    ],
    bestUseCases: [
      "Print brochure or packaging artwork revisions",
      "Website performance, SEO & accessibility audits",
      "Bug fixes, feature patches & UX polish",
      "Founder technical & creative consulting",
    ],
  },
  {
    id: "weekly",
    name: "Weekly Sprint",
    badge: "Rapid Momentum",
    tierTag: "FOCUSED SPRINT",
    audienceFit: ["Startups", "MVPs", "Product Launches"],
    usdPrice: 2200,
    unitLabel: "/ week",
    savingsNote: "Save ~15% effective hourly rate vs. $65/hr",
    summary:
      "A focused 5-day creative and engineering sprint with clear Monday scope alignment, daily async checkpoints, and shippable Friday deliverables.",
    idealClientLine: "Best for focused design, development, investor decks and short launches.",
    capacitySummary: "~35–40 sprint hrs · 1 aligned goal",
    turnaround: "Daily async updates + Friday live demo",
    turnaroundShort: "Daily async + Friday demo",
    commitment: "1-week sprint · Renew week-by-week",
    keyBenefits: [
      "Agreed weekly sprint scope (~35–40 hrs)",
      "Design + engineering aligned on 1 goal",
      "Daily async updates + Friday live demo",
      "Clean Figma, Git & press-ready handoff",
    ],
    ctaLabel: "Choose Weekly",
    expandedDetails: {
      workloadLimit:
        "Dedicated ~35–40 senior studio hours across 5 business days focused strictly on 1 agreed sprint milestone.",
      queueAndRevisions:
        "Iterative feedback happens daily during the week so final approved polish ships on Friday without drag.",
      billingAndNotice:
        "100% upfront per sprint week. Renew week-by-week only if you want another milestone sprint.",
      deliverablesScope:
        "High-converting landing pages, investor pitch decks, MVP feature modules, mobile UI prototypes, or print launch kits.",
    },
    matcherQuestion: "Launching a focused campaign, landing page, or 1-week MVP sprint?",
    matcherBestFor: "Shipping a defined deliverable Monday-to-Friday with zero multi-month lock-in.",
    includes: [
      "Agreed weekly scope (~35–40 studio hours) on 1 sprint goal",
      "Combines graphic/print design + full-stack engineering",
      "Dedicated Slack / Teams channel & Linear/Notion board",
      "US / UK / EU / AU / CA overlapping call window",
      "Clean Git handoff, Figma files & press-ready print masters",
    ],
    bestUseCases: [
      "High-converting startup landing page or investor deck",
      "Interactive SaaS dashboard prototype or feature module",
      "Complete packaging die-lines & event print kit",
      "Rapid 0→1 validation sprint before fundraising",
    ],
  },
  {
    id: "monthly",
    name: "Monthly Studio Retainer",
    badge: "Most Popular",
    tierTag: "MOST POPULAR",
    recommended: true,
    audienceFit: ["Seed–Series B Startups", "Growing Companies"],
    usdPrice: 6500,
    unitLabel: "/ month",
    savingsNote: "Predictable flat-rate monthly studio capacity",
    summary:
      "Your ongoing senior design, print, web, app & AI-engineering partner on a flat monthly cadence with explicit queue and active-slot rules.",
    idealClientLine: "Best for ongoing creative work, websites and continuous product improvements.",
    capacitySummary: "1 prioritized queue · Up to 2 active slots",
    turnaround: "48h rolling updates · 2–5d milestones",
    turnaroundShort: "48h updates · 2–5d milestones",
    commitment: "Month-to-month · Pause or cancel with 14-day notice",
    keyBenefits: [
      "One prioritized request queue (backlog)",
      "Up to 2 active concurrent workstreams",
      "All 3 principals: Design, Print & Dev",
      "Pause or cancel with 14-day notice",
    ],
    ctaLabel: "Choose Monthly",
    expandedDetails: {
      workloadLimit:
        "Queue as many roadmap requests as needed; we execute up to 2 active concurrent workstreams (e.g., 1 design + 1 dev track) continuously.",
      queueAndRevisions:
        "Tasks are delivered sequentially in priority order every 24–48h (larger sprints in 2–5 business days) with unlimited revisions on active deliverables until approved.",
      billingAndNotice:
        "Flat monthly billing based on calendar billing dates. Pause once per quarter or cancel anytime with 14 days' written notice before renewal.",
      deliverablesScope:
        "Multi-page websites, SaaS dashboards, mobile apps, ongoing brand/marketing campaigns, and CMYK print or packaging releases.",
    },
    matcherQuestion: "Need steady design, web, app & product output every single week?",
    matcherBestFor: "Funded startups and growing brands needing both design and engineering continuity.",
    includes: [
      "All 3 Principals: Creative Direction + Full-Stack/AI + Brand/Print",
      "Prioritized request queue (up to 2 active concurrent slots)",
      "48-hour rolling progress updates & 2–5 day milestone delivery",
      "Up to 20% unused capacity rollover or clean retainer pause",
      "Dedicated timezone overlap (EST / GMT / CET / AEST)",
      "Mutual NDA + 100% custom IP ownership on settled invoices",
    ],
    bestUseCases: [
      "Building & iterating a full SaaS product + marketing site",
      "Continuous UX/UI, dashboard features & brand campaigns",
      "Unified digital product + physical print & packaging rollouts",
      "Predictable product velocity without lengthy hiring cycles",
    ],
  },
  {
    id: "yearly",
    name: "Yearly Strategic Partner",
    badge: "Long-Term Partner",
    tierTag: "LONG-TERM PARTNER",
    audienceFit: ["Funded Startups", "Established Brands", "Agencies"],
    usdPrice: 60000,
    unitLabel: "/ year",
    equivalentMonthlyUsd: 5000,
    savingsUsdAmount: 18000,
    savingsPercent: "23.1%",
    savingsNote: "Equivalent to $5,000/mo · Save $18,000/yr (~23.1% vs. Monthly)",
    summary:
      "Long-term creative and engineering partnership locking in our lowest effective monthly rate, priority scheduling SLA, and quarterly roadmap planning.",
    idealClientLine: "Best for multi-project annual roadmaps and long-term creative continuity.",
    capacitySummary: "Priority queue · 2 active slots + QBRs",
    turnaround: "Priority 24h response SLA",
    turnaroundShort: "Priority 24h SLA + QBRs",
    commitment: "12-month commitment · Annual or quarterly billing",
    keyBenefits: [
      "Equivalent to $5,000/mo · Save $18,000/yr",
      "Priority scheduling & 24h response SLA",
      "Quarterly brand, product & AI strategy",
      "Annual or quarterly billing · rate locked",
    ],
    ctaLabel: "Discuss Yearly Plan",
    expandedDetails: {
      workloadLimit:
        "Priority placement across up to 2 active concurrent tracks year-round, plus dedicated quarterly roadmap workshops with all 3 principals.",
      queueAndRevisions:
        "Next-business-day (<24h) triage SLA on urgent production issues or campaign launches; iterative revisions baked into active milestones.",
      billingAndNotice:
        "12-month partnership billed annually or in 4 equal quarterly installments ($15,000/qtr USD base), protected by a mutual pro-rata termination clause.",
      deliverablesScope:
        "End-to-end multi-product architecture, seasonal print + digital campaigns, continuous web/app releases, and executive design systems.",
    },
    matcherQuestion: "Planning a 12-month multi-product roadmap or year-round brand care?",
    matcherBestFor: "Established companies & funded startups locking in ~23.1% annual savings ($18,000/yr).",
    includes: [
      "Everything in Monthly Retainer with priority scheduling & 24h SLA",
      "Quarterly Brand, Product & Architecture Strategy Reviews",
      "Full coverage across Websites, Mobile/Web Apps, Dashboards & Print",
      "Dedicated staging environments, CI/CD & ongoing performance care",
      "Zero rate increases locked for 12 months (~23.1% savings vs. Monthly)",
      "Custom MSA, Mutual NDA & 100% custom deliverable IP ownership",
    ],
    bestUseCases: [
      "Multi-product companies needing year-round design + dev",
      "Funded startups executing a full 12-month product roadmap",
      "International brands running seasonal print + digital launches",
      "Replacing fragmented freelancer rosters with one accountable studio",
    ],
  },
];

export interface WorkloadRule {
  title: string;
  tag: string;
  description: string;
}

export const WORKLOAD_RULES: WorkloadRule[] = [
  {
    title: "Prioritized Queue vs. Simultaneous Output",
    tag: "Active Work Slots",
    description:
      "You can maintain an unlimited backlog of ideas in Notion/Linear, while our principals actively execute 1 focused workstream (Weekly) or up to 2 concurrent workstreams (Monthly/Yearly — e.g., 1 design track + 1 engineering track). Requests ship cleanly in priority order, preventing half-finished bottlenecks.",
  },
  {
    title: "Clear Turnaround & Milestone Windows",
    tag: "Predictable Cadence",
    description:
      "Standard design cards, print edits, and UI updates return within 24–48 business hours. Multi-screen app flows, full web pages, and SaaS dashboard modules break into 2–5 business day milestones with staging links or Loom walkthroughs.",
  },
  {
    title: "Iterative Revisions vs. New Scope",
    tag: "Revision Policy",
    description:
      "Active deliverables include structured iterative revisions within the agreed milestone brief until you sign off. Fundamental pivots or brand-new feature requests simply enter the top of your queue without unexpected hourly surcharges.",
  },
  {
    title: "Direct 3-Principal Team Ownership",
    tag: "Zero Junior Handoff",
    description:
      "Your account is led directly by Asif Bisen (Creative & Product Lead), Rajpoot Talib (Full-Stack & AI Systems), and Azma Bisen (Brand & Print Director). We pair senior architectural judgment with AI-assisted scaffolding — never outsourcing work to unvetted juniors.",
  },
];

export const WHATS_EXTRA_ITEMS: { item: string; detail: string }[] = [
  {
    item: "Cloud Hosting, Domains & Databases",
    detail: "Vercel, AWS, Supabase, Cloudflare, DNS, and production server usage billed directly to your accounts.",
  },
  {
    item: "Paid SaaS, API & AI Subscriptions",
    detail: "OpenAI/Anthropic API tokens, transactional email (Resend/Postmark), Stripe fees, and analytics seats.",
  },
  {
    item: "Commercial Fonts, Stock & Premium Plugins",
    detail: "Paid foundry typefaces, licensed stock photography/video, or proprietary WordPress/Shopify app fees.",
  },
  {
    item: "Physical Print Production & Shipping",
    detail: "Offset lithography, hot-foil tooling, packaging fabrication, and international courier fulfillment.",
  },
  {
    item: "Out-of-Scope Custom Enterprise Modules",
    detail: "Formal SOC2 compliance audits, bespoke penetration testing, or 24/7 on-call DevOps outside agreed retainer slots.",
  },
];

export interface ComparisonRow {
  feature: string;
  hourly: string;
  weekly: string;
  monthly: string;
  yearly: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: "Base Pricing (USD)",
    hourly: "$65 / hour",
    weekly: "$2,200 / week",
    monthly: "$6,500 / month",
    yearly: "$60,000 / year ($5,000/mo eq.)",
  },
  {
    feature: "Minimum Commitment",
    hourly: "5 hours ($325 block)",
    weekly: "1 week (5 business days)",
    monthly: "1 calendar month",
    yearly: "12 months (Annual or Quarterly)",
  },
  {
    feature: "Active Work Capacity",
    hourly: "1 scoped task at a time",
    weekly: "~35–40 hrs · 1 sprint goal",
    monthly: "1 queue · up to 2 active slots",
    yearly: "Priority queue · 2 slots + QBRs",
  },
  {
    feature: "Design, Brand & Print Coverage",
    hourly: "On-demand per hour",
    weekly: "Included in sprint goal",
    monthly: "Continuous across queue",
    yearly: "Year-round multi-brand care",
  },
  {
    feature: "Web, App, SaaS & AI Coding",
    hourly: "Audits, fixes & patches",
    weekly: "Focused MVP or feature sprint",
    monthly: "Continuous production shipping",
    yearly: "Multi-product roadmap & CI/CD",
  },
  {
    feature: "Turnaround & Communication",
    hourly: "24–48h task turnaround · Async",
    weekly: "Daily updates + Friday live demo",
    monthly: "48h updates · Timezone overlap",
    yearly: "Priority 24h SLA · Weekly syncs",
  },
  {
    feature: "Revision Policy",
    hourly: "Billed within approved hours",
    weekly: "Included during sprint week",
    monthly: "Unlimited within active brief",
    yearly: "Unlimited within active roadmap",
  },
  {
    feature: "Notice, Pause & Cancellation",
    hourly: "Stop anytime after 5h block",
    weekly: "End of current sprint week",
    monthly: "14-day notice · Pause option",
    yearly: "Pro-rata exit & quarterly option",
  },
  {
    feature: "IP Transfer & Confidentiality",
    hourly: "100% custom work upon payment + NDA",
    weekly: "100% custom work upon payment + NDA",
    monthly: "100% custom work upon payment + NDA",
    yearly: "100% custom work + Custom MSA/NDA",
  },
];

export interface EngagementStep {
  step: string;
  title: string;
  timing: string;
  description: string;
}

export const ENGAGEMENT_STEPS: EngagementStep[] = [
  {
    step: "01",
    title: "Choose Plan",
    timing: "Day 1",
    description:
      "Select Hourly, Weekly, Monthly, or Yearly based on your timeline and active workload needs.",
  },
  {
    step: "02",
    title: "Discovery Call",
    timing: "Within 12h",
    description:
      "Meet Asif, Rajpoot, or Azma (with optional Mutual NDA) to confirm scope, active slots, and invoicing currency.",
  },
  {
    step: "03",
    title: "Onboarding",
    timing: "24 Hours",
    description:
      "Receive your shared Slack/Teams channel, Notion/Linear priority board, repo access, and kickoff schedule.",
  },
  {
    step: "04",
    title: "Execution",
    timing: "Every 24–48h",
    description:
      "Our 3 principals build in parallel design + code cycles with async Loom previews and live staging links.",
  },
  {
    step: "05",
    title: "Review & Delivery",
    timing: "Weekly / Monthly",
    description:
      "Approve milestones, refine details cleanly, and receive organized Figma libraries, press PDFs, and Git source files.",
  },
];

export interface BillingPolicyCard {
  title: string;
  badge: string;
  points: string[];
  linkLabel: string;
  linkHref: string;
}

export const BILLING_POLICY_CARDS: BillingPolicyCard[] = [
  {
    title: "Billing, Currency & Payment Rails",
    badge: "USD BASE + 5 CURRENCIES",
    points: [
      "All studio packages are anchored in USD. EUR, GBP, AUD, and CAD displays reflect indicative mid-market benchmarks.",
      "Final invoices can be issued in USD or your preferred local currency locked at the settlement rate on the invoice date.",
      "Accepted methods: Stripe (cards/ACH), Wise (multi-currency local rails), SEPA (EU), EFT/Interac (CA), NPP (AU), and international Wire.",
    ],
    linkLabel: "Read Retainer & Refund Policy",
    linkHref: "/policies/retainer-refund",
  },
  {
    title: "Notice Periods, Scope Changes & NDA",
    badge: "ZERO LOCK-IN SURPRISES",
    points: [
      "Monthly retainers renew on calendar billing dates and can be paused or canceled with 14 days' written notice prior to renewal.",
      "Scope adjustments happen directly inside your prioritized backlog; major third-party integrations or extra slots are quoted before work begins.",
      "Mutual NDAs are available prior to any discovery call, with enterprise zero-data-retention AI safeguards.",
    ],
    linkLabel: "Review Engagement Terms",
    linkHref: "/policies/terms",
  },
  {
    title: "IP Ownership & Third-Party Licensing",
    badge: "CLEAR IP TRANSFER",
    points: [
      "100% of custom-created deliverables (brand files, UI/UX systems, application source code, print mechanicals) transfer exclusively to you upon full settlement of the applicable invoice.",
      "Third-party commercial fonts, stock imagery, open-source/licensed frameworks, plugins, AI model APIs, and Bisen Studio's pre-existing internal boilerplates remain governed by their respective third-party or background licenses.",
    ],
    linkLabel: "Read Full IP, NDA & AI Policy",
    linkHref: "/policies/ip-nda-ai",
  },
];

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const PRICING_FAQS: PricingFAQ[] = [
  {
    question: "What does 'one prioritized queue and up to 2 active slots' actually mean?",
    answer:
      "On our Monthly ($6,500/mo) and Yearly ($60,000/yr) plans, you can add as many requests to your backlog board as you like. To maintain senior quality and fast 48-hour updates, our 3 principals actively work on up to 2 concurrent workstreams at a time (for example: one design/print track and one web/app engineering track). As soon as one task completes, the next highest-priority item starts automatically.",
  },
  {
    question: "How do Hourly, Weekly, Monthly, and Yearly packages differ in turnaround and capacity?",
    answer:
      "Hourly Precision ($65/hr, 5-hour minimum) covers targeted audits, urgent fixes, and advisory with verified weekly time logs. Weekly Sprint ($2,200/wk, ~35–40 hrs) commits our team to 1 concrete Monday-to-Friday deliverable. Monthly Studio Retainer ($6,500/mo) gives ongoing multi-discipline output across 2 active slots with a 14-day pause/cancel notice. Yearly Strategic Partner ($60,000/yr, equivalent to $5,000/mo — saving $18,000 or ~23.1%) adds a priority 24h SLA and quarterly strategy summits.",
  },
  {
    question: "Who actually works on my project?",
    answer:
      "Exclusively our 3-member principal team: Asif Bisen (Founder, Creative Director & Lead Product Engineer — 16+ yrs experience), Rajpoot Talib (Principal Full-Stack & AI Systems Engineer), and Azma Bisen (Lead Visual, Brand & Print Design Director). We never outsource client retainers to anonymous or junior subcontractors.",
  },
  {
    question: "How does multi-currency display and international invoicing work?",
    answer:
      "Our base prices are anchored in USD. Switching the site selector to EUR, GBP, AUD, or CAD shows indicative rounded conversions using mid-market FX benchmarks so you can estimate budget comfortably in your local currency. For billing, we issue formal invoices in USD or your agreed local currency at the live rate on invoice date via Stripe, Wise, ACH, SEPA, or international wire.",
  },
  {
    question: "What is covered by '100% IP ownership' — and what about fonts, stock, or open-source tools?",
    answer:
      "All bespoke deliverables we create for you — custom codebases, Figma files, logos, dashboards, and CMYK print artwork — transfer 100% exclusively to your company upon full settlement of the corresponding invoice. Third-party commercial fonts, stock photography, third-party SaaS/AI subscriptions, licensed plugins/frameworks, and our studio's pre-existing utility templates remain subject to their respective standard licenses.",
  },
  {
    question: "What happens if I need to pause, cancel, or sign a Mutual NDA first?",
    answer:
      "Monthly retainers pause or cancel cleanly with 14 days' written notice before your next calendar renewal date; Yearly partnerships include annual or quarterly billing ($15,000/qtr USD) and a pro-rata termination clause. We are also happy to execute a Mutual NDA before discovery — simply check 'Request Mutual NDA' on the project brief form.",
  },
];

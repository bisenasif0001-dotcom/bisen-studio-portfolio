export type DashboardsSaasIconKey =
  | "layout-dashboard"
  | "cloud"
  | "bar-chart-3"
  | "users"
  | "lock"
  | "sparkles"
  | "git-branch"
  | "pen-tool"
  | "server"
  | "shield-check";

export interface DashboardsSaasService {
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

export interface DashboardsSaasCategory {
  number: string;
  slug: string;
  menuTitle: string;
  fullTitle: string;
  menuDesc: string;
  iconKey: DashboardsSaasIconKey;
  heroHeadline: string;
  heroAccent: string;
  heroSummary: string;
  techTerms: string[];
  relatedCaseSlugs: string[];
  services: DashboardsSaasService[];
}

export const DASHBOARDS_SAAS_CATEGORIES: DashboardsSaasCategory[] = [
  {
    number: "01",
    slug: "admin-dashboard-development",
    menuTitle: "Admin Dashboard Development",
    fullTitle: "Admin Dashboard Development",
    menuDesc: "Powerful interfaces for business management",
    iconKey: "layout-dashboard",
    heroHeadline: "High-Density Admin Consoles",
    heroAccent: "Built for Operator Speed.",
    heroSummary:
      "Custom internal admin control rooms and executive management consoles engineered with virtualized 100k-row tables, strict RBAC permissions, sub-50ms filtering, and keyboard-first productivity.",
    techTerms: [
      "100K+ Virtualized Rows",
      "RBAC & Audit Logs",
      "<50ms Filter Speed",
      "Next.js + TanStack Table",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "raj-personal-expenses-tracking-app-v2",
    ],
    services: [
      {
        slug: "custom-admin-dashboard",
        title: "Custom Admin Dashboard Development",
        shortSummary:
          "Tailored internal operations consoles engineered around your exact business entities, approval flows, and data density.",
        heroSubtitle:
          "Replace sluggish no-code internal pages with a crisp, keyboard-navigable admin suite matching your exact domain rules.",
        techTerms: ["Swiss Grid Layout", "Cmd+K Palette", "Bulk Actions", "Strict TypeScript"],
        deliverables: [
          "Modular App Router admin architecture with server-verified mutations",
          "Virtualized multi-column data grids with saved views & CSV export",
          "Command-bar search (`Cmd+K`) + keyboard-first row inspection drawers",
          "Full automated Playwright/Vitest test suite & 100% Git IP transfer",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · TypeScript · TanStack Table",
        slaOrOutputSpec: "< 50ms Grid Interaction",
      },
      {
        slug: "business-management-dashboard",
        title: "Business Management Dashboards",
        shortSummary:
          "Unified executive command panels consolidating finance, staffing, locations, and SLA health in one view.",
        heroSubtitle:
          "Give founders and COOs calm, zero-clutter daily visibility across business units, margin targets, and exceptions.",
        techTerms: ["Multi-Branch Rollups", "Variance Alerts", "Drill-Down Drawers", "Light + Dark Theme"],
        deliverables: [
          "Executive overview screen with multi-entity & multi-currency switching",
          "Progressive drill-down panels eliminating endless browser tab hopping",
          "Automated threshold anomaly markers & daily email digest triggers",
          "Tokenized Figma + React component system ready for future modules",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · Recharts · PostgreSQL",
        slaOrOutputSpec: "Unified Executive View",
      },
      {
        slug: "sales-revenue-dashboard",
        title: "Sales & Revenue Dashboards",
        shortSummary:
          "Live ARR/MRR cohorts, net dollar retention, quota attainment, and Stripe/HubSpot pipeline telemetry.",
        heroSubtitle:
          "Reconcile subscription billing, expansion revenue, and rep performance accurately without manual spreadsheet exports.",
        techTerms: ["ARR / NRR Cohorts", "Stripe Billing Sync", "Pipeline Attribution", "Multi-Currency FX"],
        deliverables: [
          "Real-time Stripe, Paddle, and CRM revenue ingestion & cohort math",
          "Interactive NRR, churn, LTV/CAC, and territory quota visualizations",
          "Per-account drill-down ledger with invoice history & renewal flags",
          "Scheduled CSV/PDF board pack exports with investor-ready clarity",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · Stripe API · SQL Views",
        slaOrOutputSpec: "100% Ledger Accuracy",
      },
      {
        slug: "operations-inventory-dashboard",
        title: "Operations & Inventory Dashboards",
        shortSummary:
          "Live SKU stock levels, warehouse transfers, supplier lead times, and fulfillment bottleneck alerts.",
        heroSubtitle:
          "Spot stockouts and supplier delays hours or days early with real-time operational telemetry across locations.",
        techTerms: ["Multi-Warehouse Sync", "Low-Stock Triggers", "Barcode Scan Feed", "Batch Traceability"],
        deliverables: [
          "SKU velocity, safety-stock thresholds, and reorder recommendation views",
          "Real-time fulfillment stage tracker from PO creation to carrier scan",
          "Exception queue highlighting stalled shipments & margin variances",
          "ERP / 3PL / Shopify webhook reconciliation with idempotent retries",
        ],
        turnaround: "4–6 Weeks",
        stackSpec: "React · TanStack · PostgreSQL",
        slaOrOutputSpec: "Zero Oversell Sync",
      },
      {
        slug: "role-based-admin-panel",
        title: "Role-Based Admin Panels",
        shortSummary:
          "Granular multi-role access control (RBAC/ABAC), org-scoped impersonation, and immutable compliance audit trails.",
        heroSubtitle:
          "Protect sensitive enterprise data with server-enforced permission matrices across super-admins, managers, and auditors.",
        techTerms: ["Server RBAC Enforced", "Immutable Audit Log", "Safe Impersonation", "SSO + MFA Ready"],
        deliverables: [
          "Policy engine scoping read/write/export rights down to field level",
          "Tamper-evident audit timeline capturing actor, IP, diff, and reason",
          "Time-boxed read-only customer support impersonation with banners",
          "Role assignment UI + unit tests proving zero privilege escalation",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · Auth0/Clerk · PostgreSQL",
        slaOrOutputSpec: "SOC2-Conscious RBAC",
      },
      {
        slug: "real-time-monitoring-dashboard",
        title: "Real-Time Monitoring Dashboards",
        shortSummary:
          "Low-latency WebSocket and SSE telemetry screens tracking IoT fleets, queues, APIs, or financial streams.",
        heroSubtitle:
          "Render live streaming metrics smoothly at 60fps without browser memory bloat, dropped frames, or frozen tabs.",
        techTerms: ["WebSocket / SSE", "Ring-Buffer State", "Threshold Paging", "60fps Canvas Render"],
        deliverables: [
          "Delta-compressed SSE/WebSocket streaming client with auto-reconnect",
          "Windowed time-series charts with bounded ring buffers (zero memory leak)",
          "Live incident alert rules routing straight to Slack, PagerDuty & UI banners",
          "Pause/replay inspection scrubbers for post-incident debugging",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "React · WebSockets · Time-Series",
        slaOrOutputSpec: "60fps Stream Stability",
      },
    ],
  },
  {
    number: "02",
    slug: "custom-saas-development",
    menuTitle: "Custom SaaS Development",
    fullTitle: "Custom SaaS Development",
    menuDesc: "Scalable cloud-based software platforms",
    iconKey: "cloud",
    heroHeadline: "Multi-Tenant SaaS Platforms",
    heroAccent: "Architected from Day 1.",
    heroSummary:
      "Full-stack subscription software built for seed startups to Series B companies across US, UK, Canada, Europe, and Australia—uniting isolated multi-tenancy, Stripe metered billing, and clean React/Next.js UX.",
    techTerms: [
      "Multi-Tenant Isolation",
      "Stripe Seat & Usage",
      "Strict TypeScript",
      "100% Client Git IP",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "boston-lounge-decor-wordpress-website",
    ],
    services: [
      {
        slug: "saas-mvp-development",
        title: "SaaS MVP Development",
        shortSummary:
          "Production v1 cloud SaaS products shipped in 4–6 weeks—ready for paying pilots and investor diligence.",
        heroSubtitle:
          "Validate willingness-to-pay fast with a clean, extensible MVP containing real onboarding, billing, and core value workflows.",
        techTerms: ["4–6 Week Launch", "Pilot Buyer Ready", "Stripe Checkout", "Clean Extensible DB"],
        deliverables: [
          "Core product workflows + workspace onboarding in Next.js App Router",
          "Authentication, team invitations & live Stripe subscription checkout",
          "Production PostgreSQL schema + transactional email triggers",
          "CI/CD deployment + documentation cleanly transferred in your Git org",
        ],
        turnaround: "4–6 Weeks",
        stackSpec: "Next.js · TypeScript · Postgres · Stripe",
        slaOrOutputSpec: "Paid-Pilot Ready v1",
      },
      {
        slug: "multi-tenant-saas",
        title: "Multi-Tenant SaaS Platforms",
        shortSummary:
          "Row-level isolated organizations, custom workspace subdomains, SSO SAML hooks, and per-tenant configuration.",
        heroSubtitle:
          "Scale confidently from 10 to 10,000 customer organizations with strict data isolation enforced at the database layer.",
        techTerms: ["Postgres RLS Isolation", "Custom Subdomains", "Per-Org Settings", "Zero Data Cross-Bleed"],
        deliverables: [
          "Tenant context resolver supporting workspace slugs & custom domains",
          "PostgreSQL Row-Level Security (RLS) & integration isolation tests",
          "Org-wide feature flags, branding themes, and billing plan entitlements",
          "Zero-downtime Prisma/Drizzle migration pipeline across environments",
        ],
        turnaround: "5–8 Weeks",
        stackSpec: "Next.js · PostgreSQL RLS · Drizzle",
        slaOrOutputSpec: "Verified Tenant Isolation",
      },
      {
        slug: "b2b-saas-development",
        title: "B2B SaaS Development",
        shortSummary:
          "Enterprise-ready B2B software with team workspaces, procurement SSO, CSV bulk import, and compliance exports.",
        heroSubtitle:
          "Win larger annual B2B contracts by building the team permissions, auditability, and CRM/webhook hooks enterprise buyers ask for.",
        techTerms: ["Okta / Entra SSO", "CSV Mapping Import", "Workspace Quotas", "Webhook Outbox"],
        deliverables: [
          "Enterprise workspace lifecycle, seat transfers & pending domain joins",
          "Resilient CSV/Excel column-mapping importer with row-level validation",
          "Signed outbound customer webhooks with retry backoff & delivery logs",
          "WCAG 2.1 AA keyboard navigation & security questionnaire docs",
        ],
        turnaround: "6–10 Weeks",
        stackSpec: "Next.js · WorkOS/Auth0 · Postgres",
        slaOrOutputSpec: "Enterprise Deal Ready",
      },
      {
        slug: "saas-subscription-billing",
        title: "Subscription & Billing Systems",
        shortSummary:
          "Per-seat, usage-based, tiered pricing, prorations, VAT/GST tax handling, and self-serve dunning portals.",
        heroSubtitle:
          "Never lose MRR to out-of-sync webhook states—engineer bulletproof Stripe Billing + Billing Portal + metering pipelines.",
        techTerms: ["Per-Seat + Metered", "Idempotent Webhooks", "Stripe Tax EU/US", "Dunning Recovery UI"],
        deliverables: [
          "Pricing plan matrix + transactional Stripe Checkout & Customer Portal",
          "Usage metering aggregator sending idempotent billing events to Stripe",
          "Instant plan-upgrade entitlement sync with webhook reconciliation",
          "Failed-payment banner UX & automated grace-period recovery flows",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Stripe Billing · Webhooks · Postgres",
        slaOrOutputSpec: "Zero Entitlement Drift",
      },
      {
        slug: "white-label-saas",
        title: "White-Label SaaS Development",
        shortSummary:
          "Multi-brand SaaS architectures supporting custom client domains, dynamic SSL, logos, and themed UI tokens.",
        heroSubtitle:
          "Empower agencies and reseller partners to launch your software under their own domain and visual brand effortlessly.",
        techTerms: ["Custom CNAME + SSL", "Dynamic Theme Tokens", "Partner Admin Console", "Branded Emails"],
        deliverables: [
          "Automated custom hostname routing & edge TLS provisioning",
          "Per-partner CSS variable theme injection (navy/brand, typography, logos)",
          "White-labeled transactional email domain verification (SPF/DKIM)",
          "Reseller master dashboard to provision & monitor child workspaces",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Next.js Middleware · Vercel Domains · Redis",
        slaOrOutputSpec: "1-Click Partner Brand",
      },
      {
        slug: "saas-product-development",
        title: "Custom SaaS Product Development",
        shortSummary:
          "Dedicated end-to-end product partnership turning ambitious domain expertise into proprietary SaaS equity.",
        heroSubtitle:
          "Asif, Talib, and Azma handle UI/UX architecture, TypeScript frontend, scalable backend APIs, and launch QA as one unit.",
        techTerms: ["Design + Code Unified", "Weekly Live Staging", "AI-Accelerated 3×", "100% Ownership"],
        deliverables: [
          "Product strategy, UX architecture & complete Figma design system",
          "Full-stack production Next.js + PostgreSQL + cloud infrastructure",
          "Automated CI/CD, error telemetry & end-to-end browser verification",
          "Clean engineering playbook & full Git IP transfer at every milestone",
        ],
        turnaround: "6–12 Weeks",
        stackSpec: "Next.js · TypeScript · Postgres · Figma",
        slaOrOutputSpec: "3× Agency Velocity",
      },
    ],
  },
  {
    number: "03",
    slug: "analytics-bi-dashboards",
    menuTitle: "Analytics & BI Dashboards",
    fullTitle: "Analytics & BI Dashboards",
    menuDesc: "Data visualization and business intelligence",
    iconKey: "bar-chart-3",
    heroHeadline: "Decision-Grade Analytics &",
    heroAccent: "Interactive BI Systems.",
    heroSummary:
      "Transform fragmented warehouses and spreadsheets into crisp interactive visualizations, financial cohorts, marketing attribution suites, and customer-facing embedded BI reports.",
    techTerms: [
      "Interactive Drill-Downs",
      "Pre-Aggregated SQL",
      "Cohort & Funnel Charts",
      "PDF / CSV Board Export",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "raj-personal-expenses-tracking-app-v2",
    ],
    services: [
      {
        slug: "business-intelligence-dashboard",
        title: "Business Intelligence Dashboards",
        shortSummary:
          "Custom embedded BI interfaces querying Postgres, BigQuery, or Snowflake without clunky iframe portals.",
        heroSubtitle:
          "Deliver branded, sub-second BI reporting inside your product or internal portal with shared permissions and zero per-viewer seat taxes.",
        techTerms: ["Embedded Native UI", "Zero Viewer Tax", "Cross-Filter State", "Materialized Views"],
        deliverables: [
          "Interactive cross-filtered charts (area, stacked bar, cohort, treemap)",
          "Server-cached aggregate SQL queries for sub-second filter switching",
          "URL-synced filter state for shareable deep-linked team snapshots",
          "Scheduled report subscriptions (PDF / CSV) per executive role",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · Recharts/ECharts · DuckDB/SQL",
        slaOrOutputSpec: "< 300ms Query Cache",
      },
      {
        slug: "kpi-performance-dashboard",
        title: "KPI & Performance Dashboards",
        shortSummary:
          "Goal-tracking scorecards, OKR alignment boards, sparklines, and YoY/MoM variance tracking for leadership.",
        heroSubtitle:
          "Eliminate conflicting department spreadsheet versions—establish one single source of truth for weekly leadership cadence.",
        techTerms: ["OKR Scorecards", "MoM / YoY Deltas", "Target Pace Bands", "Owner Attribution"],
        deliverables: [
          "Executive scorecard tiles showing target trajectory & variance color coding",
          "Department filter (Growth, Product, Finance, CS) with target annotations",
          "Automated snapshot locking at weekly/monthly close checkpoints",
          "Clean print & board-slide export stylesheets",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · Recharts · PostgreSQL",
        slaOrOutputSpec: "1 Source of Truth",
      },
      {
        slug: "financial-analytics-dashboard",
        title: "Financial Analytics Dashboards",
        shortSummary:
          "Cashflow forecasting, P&L consolidation, multi-currency FX Ledgers, runway modeling, and variance reporting.",
        heroSubtitle:
          "Institutional-grade treasury visibility inspired by modern CFO tools—complete with clean audit links to source transactions.",
        techTerms: ["Cash Runway Models", "P&L Drill-Downs", "Multi-Currency FX", "Ledger Traceability"],
        deliverables: [
          "Multi-currency cash position, burn rate & interactive scenario sliders",
          "Reconciled bank, Stripe & accounting (Xero/QuickBooks) feed views",
          "Audit-ready transaction inspector linking chart peaks to line items",
          "Board-ready PDF financial summary generator",
        ],
        turnaround: "4–6 Weeks",
        stackSpec: "Next.js · TanStack · Xero/Stripe API",
        slaOrOutputSpec: "Bank-Reconciled Math",
      },
      {
        slug: "marketing-analytics-dashboard",
        title: "Marketing & Campaign Analytics",
        shortSummary:
          "Unified ROAS, CAC payback, multi-touch UTM attribution, and GA4/Meta/Google Ads performance views.",
        heroSubtitle:
          "Compare true revenue payback against ad spend side by side instead of trusting inflated native ad platform dashboards.",
        techTerms: ["True ROAS / CAC", "Multi-Touch UTM", "Ads + CRM Merge", "Creative Fatigue"],
        deliverables: [
          "Ad-spend ingestion (Google Ads, Meta, LinkedIn) joined to real CRM closed revenue",
          "Blended MER, channel CAC, and Payback Window cohort tables",
          "Campaign & creative leaderboard filtering by landing page conversion",
          "Weekly pacing alerts when CPL exceeds target thresholds",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · Ads APIs · Postgres / BigQuery",
        slaOrOutputSpec: "CRM-Verified Attribution",
      },
      {
        slug: "ecommerce-analytics-dashboard",
        title: "E-commerce Analytics Dashboards",
        shortSummary:
          "Net margin per SKU, cohort LTV, refund rate drivers, AOV lift, and multi-store Shopify analytics.",
        heroSubtitle:
          "Know true contribution profit after COGS, shipping, discounts, and ad spend across every store and region.",
        techTerms: ["Contribution Margin", "SKU Repeat Rate", "Refund Root-Cause", "Multi-Store Rollup"],
        deliverables: [
          "Real-time Shopify / WooCommerce order + refund + COGS normalization",
          "Contribution profit waterfall (Gross -> Discounts -> Shipping -> Ads -> Net)",
          "First-to-second order retention timing curves & VIP bundle tracking",
          "Inventory turn vs. ad spend safety integration alerts",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · Shopify API · PostgreSQL",
        slaOrOutputSpec: "True SKU Net Margin",
      },
      {
        slug: "reporting-data-visualization",
        title: "Custom Reporting & Data Visualization",
        shortSummary:
          "Bespoke D3/SVG data visualizations, custom interactive report builders, and WCAG-accessible chart kits.",
        heroSubtitle:
          "Turn complex industry-specific telemetry (healthcare, energy, logistics) into crystal-clear interactive visual stories.",
        techTerms: ["Bespoke D3 / SVG", "Drag Report Builder", "Colorblind Safe", "High-DPI Print PDF"],
        deliverables: [
          "Custom non-generic chart components built in D3 / Visx / SVG",
          "Self-serve report composer letting users pick dimensions & export",
          "Keyboard focus navigation + screen-reader data table fallbacks",
          "Print-clean high-DPI PDF export matching corporate brand guidelines",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "D3 / Visx · React · SVG · React-PDF",
        slaOrOutputSpec: "WCAG Chart Accessible",
      },
    ],
  },
  {
    number: "04",
    slug: "crm-erp-solutions",
    menuTitle: "CRM & ERP Solutions",
    fullTitle: "CRM & ERP Solutions",
    menuDesc: "Customer, sales and operational management",
    iconKey: "users",
    heroHeadline: "Tailored CRM & ERP Systems",
    heroAccent: "Built Around Your Workflow.",
    heroSummary:
      "Replace rigid, bloated SaaS subscriptions and fragile spreadsheets with custom pipeline CRMs, order/ERP engines, HR consoles, and resource planners molded precisely to how your company wins.",
    techTerms: [
      "Custom Pipeline Logic",
      "Unified Order & ERP",
      "Calendar & Email Sync",
      "Zero Per-Seat Lock-In",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "boston-lounge-decor-wordpress-website",
    ],
    services: [
      {
        slug: "custom-crm-development",
        title: "Custom CRM Development",
        shortSummary:
          "Domain-specific CRMs without Salesforce seat taxes—engineered around your exact deal objects and outreach speed.",
        heroSubtitle:
          "Capture every call, email thread, quote, and renewal cleanly in a lightning-fast interface your sales team actually loves updating.",
        techTerms: ["Zero Seat Markup", "Email Two-Way Sync", "Custom Deal Objects", "Fast Timeline UI"],
        deliverables: [
          "Account, contact & custom entity architecture tailored to your industry",
          "Gmail / Microsoft 365 two-way email logging & calendar scheduling",
          "Split-pane deal inspection with notes, files, tasks & quote generation",
          "Clean CSV import wizard migrating legacy HubSpot/Pipedrive history",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "Next.js · PostgreSQL · Google/MS Graph",
        slaOrOutputSpec: "100% Owned CRM IP",
      },
      {
        slug: "sales-pipeline-management",
        title: "Sales Pipeline & Lead Management",
        shortSummary:
          "Optimistic Kanban deal boards, weighted revenue forecasting, SLA aging alerts, and automatic lead routing.",
        heroSubtitle:
          "Keep every inbound lead moving forward with round-robin routing, instant follow-up timers, and stage win-probability telemetry.",
        techTerms: ["Optimistic Kanban", "Weighted Forecast", "Round-Robin Routing", "SLA Stale Alerts"],
        deliverables: [
          "60fps drag-and-drop multi-stage pipeline with instant total recalculation",
          "Territory, industry & deal-size rules routing inbound leads in seconds",
          "Stage conversion funnel & velocity bottleneck diagnostics",
          "Slack / email nudges for deals exceeding target stage duration",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · dnd-kit · PostgreSQL",
        slaOrOutputSpec: "< 5m Lead Assignment",
      },
      {
        slug: "erp-dashboard-development",
        title: "ERP Dashboard Development",
        shortSummary:
          "Modular internal ERP connecting procurement, BOM manufacturing, accounting journals, and executive margin reports.",
        heroSubtitle:
          "Unify disconnected department tools into one modern web ERP with rock-solid transactional integrity and role approvals.",
        techTerms: ["PO & BOM Tracking", "Multi-Dept Approvals", "Accounting Sync", "ACID Transactions"],
        deliverables: [
          "Procurement, vendor RFQs, receiving & invoice 3-way match workflows",
          "Inventory BOM valuation & cost-center allocation ledgers",
          "Xero / QuickBooks / NetSuite automated journal export connectors",
          "Role-scoped dashboards for finance, warehouse, and leadership",
        ],
        turnaround: "6–12 Weeks",
        stackSpec: "Next.js · PostgreSQL ACID · Xero/QB API",
        slaOrOutputSpec: "Single Operational Spine",
      },
      {
        slug: "inventory-order-management",
        title: "Inventory & Order Management",
        shortSummary:
          "Omnichannel OMS routing B2B & DTC orders cleanly across warehouses, drop-shippers, and carrier labels.",
        heroSubtitle:
          "Allocate stock accurately in real time across Shopify, wholesale portals, and retail channels with zero overselling.",
        techTerms: ["Atomic Stock Locks", "Split Fulfillment", "Label & RMA Flows", "B2B Wholesale Terms"],
        deliverables: [
          "Transactional inventory reservation preventing race-condition oversells",
          "Smart warehouse routing & split-shipment pick/pack queues",
          "B2B Net-30 invoicing alongside instant Stripe card capture",
          "Carrier tracking webhook listener & customer RMA returns portal",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "Next.js · Postgres Locks · Shippo/EasyPost",
        slaOrOutputSpec: "Atomic Stock Safety",
      },
      {
        slug: "hr-employee-management",
        title: "HR & Employee Management Systems",
        shortSummary:
          "Staff onboarding checklists, PTO calendars, equipment tracking, performance cycles, and compliance docs.",
        heroSubtitle:
          "Centralize people operations across remote US, UK, Canada, EU, and Australian teams cleanly with strict PII protection.",
        techTerms: ["Onboarding Flows", "Global PTO Holidays", "GDPR PII Scoping", "Asset & NDA Vault"],
        deliverables: [
          "Automated new-hire provisioning checklists (IT, NDA, handbook sign-off)",
          "Country-aware holiday calendars, leave accruals & manager approval queue",
          "Confidential 1:1 review cycles & compensation history access-scoped",
          "Encrypted document storage with regional GDPR retention controls",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Next.js · Postgres · S3 Encrypted",
        slaOrOutputSpec: "Privacy-Scoped HR",
      },
      {
        slug: "project-resource-management",
        title: "Project & Resource Management Systems",
        shortSummary:
          "Capacity heatmaps, sprint allocation grids, billable utilization tracking, and client retainer burndowns.",
        heroSubtitle:
          "See team bandwidth weeks ahead—balancing utilization targets, project profitability, and deadline confidence effortlessly.",
        techTerms: ["Capacity Heatmaps", "Retainer Burndown", "Billable Margin", "Gantt & Sprint View"],
        deliverables: [
          "Weekly team capacity allocation grid preventing overbooking",
          "Real-time retainer hours & budget burndown with scope-creep flags",
          "Time entry -> approved invoice line-item pipeline for Stripe/Xero",
          "Interactive client milestone schedule view shareable via read-only link",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Next.js · PostgreSQL · Calendar API",
        slaOrOutputSpec: "Clear Margin Forecast",
      },
    ],
  },
  {
    number: "05",
    slug: "client-customer-portals",
    menuTitle: "Client & Customer Portals",
    fullTitle: "Client & Customer Portals",
    menuDesc: "Secure self-service and collaboration portals",
    iconKey: "lock",
    heroHeadline: "Branded Client & Partner Portals",
    heroAccent: "Clients Actually Enjoy Using.",
    heroSummary:
      "Elevate client trust and slash email back-and-forth with secure self-service portals for approvals, encrypted document rooms, recurring billing, support tickets, and real-time project milestones.",
    techTerms: [
      "Magic-Link & SSO",
      "Encrypted File Vault",
      "White-Labeled Domain",
      "1-Click Stripe Pay",
    ],
    relatedCaseSlugs: [
      "raj-personal-expenses-tracking-app-v2",
      "ces-enterprise-event-operations-2026",
    ],
    services: [
      {
        slug: "client-portal-development",
        title: "Client Portal Development",
        shortSummary:
          "VIP agency, legal, healthcare, and B2B client hubs uniting project milestones, files, chat, and invoices.",
        heroSubtitle:
          "Replace scattered Google Drive links and messy email chains with one calm, branded portal on your own custom domain.",
        techTerms: ["portal.yourdomain", "Milestone Steppers", "Deliverable Sign-Off", "1-Click Invoices"],
        deliverables: [
          "Passwordless magic-link login + organization member invites",
          "Live milestone progress board, deliverable previews & sign-off audit log",
          "Contextual threaded feedback comments pinned to deliverables",
          "Integrated invoice history & Stripe payment capture",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · Auth · Postgres · Stripe",
        slaOrOutputSpec: "+35% Client CSAT",
      },
      {
        slug: "customer-self-service",
        title: "Customer Self-Service Portals",
        shortSummary:
          "Allow customers to track orders, download tax invoices, manage seats/plans, and open tickets 24/7.",
        heroSubtitle:
          "Cut repetitive Level-1 support tickets by half while giving global buyers instant control over billing, API keys, and requests.",
        techTerms: ["Ticket Deflection", "API Key Rotation", "Tax PDF Receipts", "Plan Upgrades 24/7"],
        deliverables: [
          "Self-serve profile, billing details, VAT ID & historical PDF receipts",
          "Interactive order / request tracker with searchable FAQ deflection",
          "Self-service API token generation, webhook tester & usage quota meter",
          "Helpdesk / Linear two-way support ticket submission view",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · Stripe Portal · Linear/Zendesk",
        slaOrOutputSpec: "-45% Support Tickets",
      },
      {
        slug: "vendor-partner-portals",
        title: "Vendor & Partner Portals",
        shortSummary:
          "Streamlined onboarding, KYC compliance documents, PO acceptance, and payout tracking for suppliers & affiliates.",
        heroSubtitle:
          "Keep external partners compliant and paid on time through automated W-9/W-8BEN collection, PO portals, and payout ledgers.",
        techTerms: ["KYC / Tax Onboarding", "PO Acceptance Flow", "Stripe Connect Pay", "SKU Price Sheets"],
        deliverables: [
          "Guided supplier onboarding collecting tax forms, banking & insurance docs",
          "Purchase order acknowledgment, shipment ASN upload & dispute notes",
          "Partner / affiliate referral link tracker + transparent commission payouts",
          "Expiry alerts prompting vendors automatically before certificates lapse",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Next.js · Stripe Connect · S3 Docs",
        slaOrOutputSpec: "2× Faster Onboarding",
      },
      {
        slug: "membership-subscription-portals",
        title: "Membership & Subscription Portals",
        shortSummary:
          "Gated content hubs, community directories, learning courses, and tiered recurring member perks.",
        heroSubtitle:
          "Deliver reliable gated value for paid communities, advisory networks, or SaaS academy customers with seamless billing entitlements.",
        techTerms: ["Tiered Access Gates", "Member Directory", "HLS Video / Docs", "Recurring Churn Guard"],
        deliverables: [
          "Subscription-gated resource library, course modules & downloads",
          "Searchable vetted member directory + event RSVP calendar",
          "Automated plan upgrade/pause flows & anniversary retention perks",
          "Creator/admin analytics on active members & content engagement",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · Stripe · Postgres · Mux/CDN",
        slaOrOutputSpec: "Automated Entitlements",
      },
      {
        slug: "employee-internal-portals",
        title: "Employee & Internal Portals",
        shortSummary:
          "Single-sign-on internal company intranets, SOP knowledge wikis, IT access requests, and team directories.",
        heroSubtitle:
          "Unify distributed engineering, design, and operations teams around one fast internal portal protected by Okta or Google SSO.",
        techTerms: ["Google / Okta SSO", "Company Intranet", "IT Access Flows", "Fast Search Index"],
        deliverables: [
          "SSO-protected internal portal zero public surface exposure",
          "Searchable company SOP handbook, org chart & tool links directory",
          "Structured software access, travel, or hardware request approval forms",
          "Department announcements with mandatory policy sign-off tracking",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · OIDC SSO · Postgres Search",
        slaOrOutputSpec: "Zero Shadow Spreadsheets",
      },
      {
        slug: "document-collaboration-portals",
        title: "Document & Collaboration Portals",
        shortSummary:
          "Secure virtual data rooms, watermarked PDF review workflows, version tracking, and e-signature approvals.",
        heroSubtitle:
          "Built for investor diligence rooms, legal reviews, and compliance audits needing view telemetry, expiry links, and version control.",
        techTerms: ["Virtual Data Room", "Watermarked Previews", "View Telemetry Log", "Role Folder Lock"],
        deliverables: [
          "Signed expiring S3/GCS document links (zero raw bucket URL exposure)",
          "Versioned file uploads, checklist folders & stakeholder sign-off stamps",
          "Download permissions, NDA click-wrap gates & viewer access audit trail",
          "Email alerts notifying owners on deal-room document opens",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Next.js · S3 Signed URLs · PDF.js",
        slaOrOutputSpec: "Full View Audit Trail",
      },
    ],
  },
  {
    number: "06",
    slug: "ai-saas-development",
    menuTitle: "AI-Powered SaaS & Dashboards",
    fullTitle: "AI-Powered SaaS & Dashboards",
    menuDesc: "AI insights, assistants and intelligent workflows",
    iconKey: "sparkles",
    heroHeadline: "Production AI SaaS Products",
    heroAccent: "Grounded in Real Data.",
    heroSummary:
      "Move beyond fragile AI wrappers: build citation-backed RAG workspaces, streaming conversational analytics, intelligent document extraction pipelines, and tool-calling agents with tenant isolation and cost controls.",
    techTerms: [
      "Tenant-Scoped RAG",
      "Streaming Tool UI",
      "Zod Verified JSON",
      "Token Quota Guards",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "ces-enterprise-event-operations-2026",
    ],
    services: [
      {
        slug: "ai-saas-applications",
        title: "AI SaaS Application Development",
        shortSummary:
          "Turn proprietary workflows into commercial AI SaaS products with credit wallets, eval suites, and multi-model routing.",
        heroSubtitle:
          "Launch a reliable, defensible AI SaaS platform with usage credit tracking, workspace data isolation, and model fallbacks.",
        techTerms: ["Usage Credit Ledger", "Model Fallback Route", "Workspace Isolated", "Golden Eval Suite"],
        deliverables: [
          "Streaming generative UI tailored to your domain workflow (not a generic chat box)",
          "Token/credit balance metering tied seamlessly to Stripe subscription tiers",
          "Multi-provider LLM router (Gemini / Claude / OpenAI) with fallback retries",
          "Automated prompt regression eval harness protecting output accuracy",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "Next.js · AI SDK · pgvector · Stripe",
        slaOrOutputSpec: "Margin-Protected Credits",
      },
      {
        slug: "ai-analytics-dashboard",
        title: "AI Analytics & Insights Dashboards",
        shortSummary:
          "Ask plain-English questions across live company metrics, auto-detect KPI anomalies, and surface executive narratives.",
        heroSubtitle:
          "Empower non-technical executives to query verified read-only SQL views safely in natural language with rendered charts.",
        techTerms: ["Safe Text-to-SQL", "Read-Only Views", "Anomaly Summaries", "Chart Auto-Render"],
        deliverables: [
          "Schema-constrained text-to-SQL engine running strictly against read-only tenant views",
          "Interactive generated charts paired with inspectable underlying SQL & rows",
          "Automated weekly variance explanation cards written directly beside KPIs",
          "Zero hallucinated numbers—every figure links back to deterministic SQL output",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Next.js · Semantic Layer · PostgreSQL",
        slaOrOutputSpec: "100% SQL-Grounded Math",
      },
      {
        slug: "ai-assistant-integration",
        title: "AI Chatbot & Assistant Integration",
        shortSummary:
          "Embed context-aware in-app copilots that guide users, fill multi-step forms, and trigger approved API actions.",
        heroSubtitle:
          "Cut SaaS onboarding friction sharply by embedding a copilot that understands the user's current screen, permissions, and workspace data.",
        techTerms: ["Permission Aware", "Form Autofill UI", "Human Confirmation", "Cite Docs Inline"],
        deliverables: [
          "Docked in-app copilot slide-over respecting the logged-in user's exact RBAC role",
          "Strict tool-calling registry with explicit user confirmation before mutations",
          "Clickable source citations linking straight to internal pages or docs",
          "Conversation logging, thumbs feedback loop & PII redaction middleware",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · Vercel AI SDK · Zod Tools",
        slaOrOutputSpec: "RBAC-Safe Copilot",
      },
      {
        slug: "ai-document-processing",
        title: "AI Document Processing Systems",
        shortSummary:
          "Extract validated structured records from PDFs, invoices, contracts, and intake scans with confidence review queues.",
        heroSubtitle:
          "Eliminate hours of manual back-office data entry using multimodal vision extraction paired with split-screen human verification.",
        techTerms: ["Multimodal OCR", "Confidence Highlight", "Human-in-the-Loop", "CSV / ERP Push"],
        deliverables: [
          "Async queue pipeline ingesting multi-page PDFs, scans & spreadsheets",
          "Strict Zod schema validation highlighting low-confidence fields for review",
          "Split-screen PDF viewer + editable structured form for 1-click sign-off",
          "Webhook / database export pushing verified records into your ERP",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Gemini Vision · BullMQ/Inngest · PDF.js",
        slaOrOutputSpec: "-85% Manual Keying",
      },
      {
        slug: "ai-knowledge-platforms",
        title: "AI Search & Knowledge Platforms",
        shortSummary:
          "Hybrid vector + keyword semantic search portals indexing wikis, contracts, tickets, and SOP libraries safely.",
        heroSubtitle:
          "Deliver instant, citation-verified answers across thousands of internal files without leaking restricted folder permissions.",
        techTerms: ["Hybrid BM25 + Vector", "ACL Permission Filter", "Chunk Citation Links", "Auto Re-Index Sync"],
        deliverables: [
          "Incremental document chunking, metadata tagging & pgvector indexing pipeline",
          "Hybrid semantic + lexical ranking with pre-retrieval permission filtering",
          "Instant highlighted passage previews jumping to the exact page/section",
          "Notion / Google Drive / S3 background connector syncing edits continuously",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "pgvector · OpenAI/Gemini Embed · Next.js",
        slaOrOutputSpec: "Permission-Safe Search",
      },
      {
        slug: "ai-workflow-agents",
        title: "AI Workflow & Agent Integration",
        shortSummary:
          "Reliable background event-driven AI pipelines automating triage, enrichment, drafting, and QA checks.",
        heroSubtitle:
          "Deploy observable asynchronous agents using durable queues, human escalation gates, and strict retry/timeout budgets.",
        techTerms: ["Durable Queue Jobs", "Approval Checkpoints", "Step Trace Logs", "Cost Budget Caps"],
        deliverables: [
          "Multi-step agent orchestration on durable background queues (Inngest/Trigger)",
          "Full step-by-step execution trace viewer for operators inside your admin UI",
          "Configurable auto-send vs. human-approval rules per confidence score",
          "Dead-letter recovery, rate throttling & per-org spend ceilings",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Inngest / Trigger.dev · TS · Postgres",
        slaOrOutputSpec: "Observable Durable Runs",
      },
    ],
  },
  {
    number: "07",
    slug: "business-automation",
    menuTitle: "Workflow & Business Automation",
    fullTitle: "Workflow & Business Automation",
    menuDesc: "Approval flows, tasks and automation",
    iconKey: "git-branch",
    heroHeadline: "Durable Business Automation",
    heroAccent: "& Approval Pipelines.",
    heroSummary:
      "Replace fragile Zapier chains and manual inbox chasing with deterministic, code-backed approval workflows, CRM routing, automated Stripe invoicing, and reliable webhook orchestration.",
    techTerms: [
      "Code-Backed Flows",
      "Idempotent Retries",
      "Audit Trail Ready",
      "CRM + Billing Sync",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "edunuts-academy-mobile-app",
    ],
    services: [
      {
        slug: "custom-workflow-automation",
        title: "Custom Workflow Automation",
        shortSummary:
          "Replace complex no-code spaghetti with fast, tested TypeScript background jobs and rule engines.",
        heroSubtitle:
          "Own deterministic business automation inside your stack—handling retries, branching logic, and full logging cleanly.",
        techTerms: ["Durable Background", "Visual Status Log", "Dead-Letter Replay", "Zero Task Overages"],
        deliverables: [
          "Typed workflow engine replacing brittle multi-step external glue scripts",
          "Admin run-inspector dashboard to view, filter & replay failed jobs",
          "Scheduled cron jobs + webhook listeners with HMAC signature verification",
          "Structured alerts straight to Slack on repeatable partner API downtime",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "TypeScript · Inngest / BullMQ · Postgres",
        slaOrOutputSpec: "100% Replayable Jobs",
      },
      {
        slug: "approval-task-management",
        title: "Approval & Task Management Systems",
        shortSummary:
          "Multi-tier spend approvals, legal contract reviews, publishing sign-offs, and SLA escalation routing.",
        heroSubtitle:
          "Keep multi-department approvals moving fast with clear queues, 1-click Slack/email actions, and complete audit compliance.",
        techTerms: ["Threshold Routing", "Delegated Approvers", "Slack 1-Click Sign", "Immutable History"],
        deliverables: [
          "Configurable amount/department rules routing requests to the right approver",
          "Delegate coverage mode + automated reminder escalations after SLA hours",
          "Unified Pending-My-Approval inbox across all active company requests",
          "Exportable approval evidence logs ready for finance & ISO/SOC audits",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Next.js · Slack API · PostgreSQL",
        slaOrOutputSpec: "3× Faster Approvals",
      },
      {
        slug: "sales-crm-automation",
        title: "Sales & CRM Automation",
        shortSummary:
          "Instant lead enrichment, territory assignment, quote-to-contract generation, and deal-won provisioning.",
        heroSubtitle:
          "Eliminate copy-pasting between website forms, HubSpot/Salesforce, DocuSign, and Stripe billing automatically.",
        techTerms: ["Lead Enrichment", "Quote to Workspace", "CRM + Stripe Link", "Zero Copy-Paste"],
        deliverables: [
          "Instant inbound enrichment & qualification scoring on lead capture",
          "Automated contract/quote PDF + e-signature trigger on deal stage move",
          "Deal-won automation provisioning customer tenant & welcome onboarding kit",
          "Bidirectional sync preventing stale notes across sales & delivery tools",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next API · HubSpot/SFDC · Stripe",
        slaOrOutputSpec: "Instant Deal Handoff",
      },
      {
        slug: "billing-invoice-automation",
        title: "Billing & Invoice Automation",
        shortSummary:
          "Automated milestone invoices, multi-currency tax calculations, milestone payment links, and dunning nudges.",
        heroSubtitle:
          "Accelerate cash collection by generating accurate branded invoices and syncing paid states back to accounting automatically.",
        techTerms: ["Milestone Invoicing", "Xero / QB Parity", "Auto Dunning Nudges", "FX Tax Compliance"],
        deliverables: [
          "Schedule/usage-triggered invoice generation via Stripe & branded PDF",
          "Automated Xero / QuickBooks ledger entry sync on payment settlement",
          "Polite tiered overdue follow-up workflows preserving client goodwill",
          "Finance exception console flagging mismatched wires or failed cards",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Stripe Invoicing · Xero/QB · React-PDF",
        slaOrOutputSpec: "Zero Unbilled Work",
      },
      {
        slug: "workflow-integrations",
        title: "Third-Party Workflow Integrations",
        shortSummary:
          "Connect ERPs, Slack, Jira, Linear, Notion, Shopify, and custom partner SOAP/REST webhooks reliably.",
        heroSubtitle:
          "Build resilient integration middleware handling OAuth token refreshes, rate limits, pagination, and schema changes safely.",
        techTerms: ["OAuth Token Refresh", "Rate-Limit Queue", "Field Mapping UI", "HMAC Verified Hooks"],
        deliverables: [
          "Clean adapter services isolating external vendor quirks from core logic",
          "Token vault managing expiring OAuth2 refresh tokens cleanly",
          "Configurable field-mapping UI + webhook signature verification middleware",
          "Comprehensive mock test coverage validating edge-case API responses",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "TypeScript · OAuth2 · Redis Rate Limit",
        slaOrOutputSpec: "Resilient API Sync",
      },
      {
        slug: "notification-scheduling",
        title: "Notification & Scheduling Systems",
        shortSummary:
          "Timezone-smart transactional emails, Slack/Teams alerts, in-app notification centers, and calendar booking.",
        heroSubtitle:
          "Deliver critical alerts at the right local hour via each user's chosen channel—complete with digest batching and preference rules.",
        techTerms: ["Timezone Smart Send", "Email + Slack + Push", "Digest Batching", "User Preference UI"],
        deliverables: [
          "Multi-channel dispatcher (Email, Slack, SMS, In-App Bell) via Resend/Novu",
          "Quiet-hours awareness & digest batching reducing notification fatigue",
          "Granular per-user / per-event notification matrix settings page",
          "Delivery/bounce webhook tracking keeping domain sender score pristine",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Next.js · Resend/React Email · Redis",
        slaOrOutputSpec: "99.9% Inbox Delivery",
      },
    ],
  },
  {
    number: "08",
    slug: "dashboard-ui-ux-design",
    menuTitle: "Dashboard UI/UX Design",
    fullTitle: "Dashboard UI/UX Design",
    menuDesc: "Intuitive interfaces and design systems",
    iconKey: "pen-tool",
    heroHeadline: "Swiss-Grid SaaS Interfaces &",
    heroAccent: "Tokenized Design Systems.",
    heroSummary:
      "Senior B2B product UI/UX and Figma Variable component systems engineered specifically for complex SaaS tools, institutional dashboards, and dense workflows—delivered with 1:1 Tailwind/TypeScript parity.",
    techTerms: [
      "12-Col SaaS Swiss Grid",
      "Figma -> Code Parity",
      "WCAG 2.1 AA Audited",
      "Dense Workflow Clarity",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "raj-personal-expenses-tracking-app-v2",
    ],
    services: [
      {
        slug: "saas-product-ui-ux",
        title: "SaaS Product UI/UX Design",
        shortSummary:
          "End-to-end SaaS onboarding, navigation architecture, settings, billing, and core workflow UX crafted in Figma.",
        heroSubtitle:
          "Give founders and buyers unmistakable product polish from Screen 1—turning complicated domain software into calm daily tools.",
        techTerms: ["IA & User Journeys", "Zero Clutter Density", "Onboarding Activation", "Interactive Specs"],
        deliverables: [
          "Information architecture, role flows & empty/loading/error screen states",
          "High-fidelity responsive desktop & tablet Figma layouts across core modules",
          "Interactive clickable prototype ready for buyer demos or fundraising",
          "Developer-ready Dev Mode specs with Tailwind token mapping",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Figma · Auto-Layout · Variables",
        slaOrOutputSpec: "Investor-Grade UI/UX",
      },
      {
        slug: "admin-dashboard-ui-design",
        title: "Admin Dashboard UI Design",
        shortSummary:
          "Clean visual hierarchy for complex tables, slide-over inspectors, filter bars, and dark/light admin themes.",
        heroSubtitle:
          "Stop drowning operators in harsh borders and tiny fonts—design readable, scannable console layouts tested for 8-hour workdays.",
        techTerms: ["Monospace Numerals", "Table & Drawer UX", "Light + Dark Themes", "Filter Bar Ergonomics"],
        deliverables: [
          "Complete admin shell, sidebar rail, breadcrumbs & contextual drawers",
          "Readable complex table patterns (sticky cols, inline edits, bulk bar)",
          "Paired Light & Dark theme color variable sets verified for contrast",
          "Status badge, toast, modal & keyboard-hint visual specifications",
        ],
        turnaround: "2–3 Weeks",
        stackSpec: "Figma · Tailwind Tokens · WCAG AA",
        slaOrOutputSpec: "Zero Visual Fatigue",
      },
      {
        slug: "dashboard-wireframing",
        title: "Dashboard Wireframing & Prototyping",
        shortSummary:
          "Rapid structural wireframes and interactive prototypes validating complex workflows with stakeholders in days.",
        heroSubtitle:
          "Test real customer tasks, table columns, and permission paths before locking visual design or engineering sprints.",
        techTerms: ["Low-Fi Flow Validation", "Table Column Audit", "Stakeholder Review", "Fast Sprint Lock"],
        deliverables: [
          "Structural screen flows aligning PM, founders, and users on core IA",
          "Clickable Figma wireframe prototype testing key operator journeys",
          "Data-field inventory ensuring real API payloads fit cleanly on screen",
          "Rapid daily iteration loops compressing weeks of meetings into days",
        ],
        turnaround: "5–10 Business Days",
        stackSpec: "Figma · FigJam · IA Matrix",
        slaOrOutputSpec: "Validated Scope Lock",
      },
      {
        slug: "data-visualization-ux",
        title: "Data Visualization UX Design",
        shortSummary:
          "Thoughtful chart selection, tooltip choreography, empty-data states, and accessible color palettes for BI products.",
        heroSubtitle:
          "Ensure executives read the insight in 2 seconds—designing disciplined axes, annotations, comparison bands, and clean tooltips.",
        techTerms: ["Chart Choreography", "Rich Hover Tooltips", "Colorblind Safe", "Zero Chart Junk"],
        deliverables: [
          "Chart pattern catalog (KPI tiles, cohorts, funnels, heatmaps, scatter)",
          "Zero-state, partial-data & extreme-outlier layout specifications",
          "Accessible palette contrast matrix tested for deuteranopia/tritanopia",
          "Implementation notes tailored to Recharts, ECharts, or D3",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Figma · Data Viz Kit · Color Safe",
        slaOrOutputSpec: "2-Second Insight Read",
      },
      {
        slug: "saas-design-systems",
        title: "SaaS Design Systems",
        shortSummary:
          "Tokenized multi-theme Figma component libraries mapped 1:1 to accessible React + Tailwind primitives.",
        heroSubtitle:
          "Accelerate every future frontend sprint cleanly—giving designers and engineers one shared component vocabulary.",
        techTerms: ["Figma <-> React Parity", "Design Token JSON", "Accessible Primitives", "Docs & Rules"],
        deliverables: [
          "Modular Auto-Layout component kit with strict variant properties",
          "JSON design token export mirroring CSS variables & Tailwind config",
          "Optional coded React/Radix UI Storybook library matching Figma 1:1",
          "Component governance guide (spacing scale, typography, states)",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Figma Variables · Tailwind · Radix",
        slaOrOutputSpec: "2× Faster UI Dev",
      },
      {
        slug: "dashboard-redesign-ux-audit",
        title: "Dashboard Redesign & UX Audit",
        shortSummary:
          "Modernize legacy SaaS software cleanly—removing click bloat, improving WCAG compliance, and boosting retention.",
        heroSubtitle:
          "Turn outdated B2B software into a modern category leader while keeping existing power users productive during rollout.",
        techTerms: ["Click-Count Cut", "Modern Visual Lift", "WCAG 2.1 AA Fix", "Staged Migration Plan"],
        deliverables: [
          "Full heuristic teardown logging click depth, contrast & mobile issues",
          "Redesigned UI screens reducing crowded navigation cleanly by 40%+",
          "Side-by-side before/after Figma prototype for beta customer feedback",
          "Prioritized Quick Wins vs. Foundation Engineering rollout sequence",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Figma · Heuristic Audit · WCAG",
        slaOrOutputSpec: "40% Fewer Clicks",
      },
    ],
  },
  {
    number: "09",
    slug: "saas-backend-integrations",
    menuTitle: "Backend, APIs & Integrations",
    fullTitle: "Backend, APIs & Integrations",
    menuDesc: "Databases, cloud architecture and connectivity",
    iconKey: "server",
    heroHeadline: "Resilient SaaS Infrastructure,",
    heroAccent: "APIs & Data Architecture.",
    heroSummary:
      "Production cloud backends, clean PostgreSQL schema optimization, versioned REST/GraphQL APIs, SAML SSO access layers, and battle-tested payment & CRM integrations engineered for high availability.",
    techTerms: [
      "99.95% Uptime Spec",
      "Indexed PostgreSQL",
      "SAML / OIDC + RBAC",
      "IaC Cloud Deploy",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "edunuts-academy-mobile-app",
    ],
    services: [
      {
        slug: "saas-backend-development",
        title: "SaaS Backend Development",
        shortSummary:
          "Modular Node.js, TypeScript, or Python backends with clean tenant isolation, job queues, and observability.",
        heroSubtitle:
          "Build maintainable server architecture capable of handling steady enterprise B2B growth without brittle spaghetti endpoints.",
        techTerms: ["Clean Domain Layers", "Structured Logging", "Rate Limit + WAF", "Integration Tests"],
        deliverables: [
          "Modular backend service architecture with Zod input/output validation",
          "Asynchronous queue processing for exports, emails & heavy AI tasks",
          "Structured OpenTelemetry tracing, health endpoints & uptime alerts",
          "Comprehensive Vitest/Supertest integration test coverage suite",
        ],
        turnaround: "3–7 Weeks",
        stackSpec: "TypeScript · Node/Next · PostgreSQL",
        slaOrOutputSpec: "99.95% API Target",
      },
      {
        slug: "api-development",
        title: "REST & GraphQL API Development",
        shortSummary:
          "Developer-friendly public & internal APIs complete with OpenAPI docs, scoped API keys, and rate limits.",
        heroSubtitle:
          "Enable enterprise customers and partner apps to integrate cleanly via versioned APIs, cursor pagination, and webhook signatures.",
        techTerms: ["OpenAPI 3.1 Spec", "Scoped Customer Keys", "Cursor Pagination", "Idempotent Writes"],
        deliverables: [
          "Typed REST (OpenAPI) or GraphQL/tRPC API with interactive docs portal",
          "Customer-managed hashed API keys with granular scope & expiry",
          "Redis token-bucket rate limiting + standard `429 Retry-After` headers",
          "Idempotency-key support safeguarding financial & order creations",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "TypeScript · OpenAPI / GraphQL · Redis",
        slaOrOutputSpec: "< 80ms P95 API Response",
      },
      {
        slug: "database-design-optimization",
        title: "Database Design & Optimization",
        shortSummary:
          "Normalized relational schemas, slow-query index tuning, connection pooling, and zero-downtime migrations.",
        heroSubtitle:
          "Turn 4-second timeouts into 15-millisecond dashboard queries by eliminating N+1 loops and indexing high-volume tables cleanly.",
        techTerms: ["EXPLAIN ANALYZE Tune", "N+1 Elimination", "Composite Indexing", "Zero-Downtime Diffs"],
        deliverables: [
          "PostgreSQL query profiling identifying top slow-query offenders cleanly",
          "Strategic B-Tree/GIN composite indexes & materialized reporting views",
          "PgBouncer / connection pooling configuration for serverless scaling",
          "Expand-contract zero-downtime migration workflow in CI/CD",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "PostgreSQL · Prisma / Drizzle · PgBouncer",
        slaOrOutputSpec: "5–20× Faster Queries",
      },
      {
        slug: "cloud-infrastructure",
        title: "Cloud Infrastructure & Deployment",
        shortSummary:
          "Reproducible Vercel, AWS, or GCP deployments with preview environments, secrets management, and backups.",
        heroSubtitle:
          "Eliminate brittle manual SSH clicks—automate preview deploys per PR, encrypted database backups, and TLS routing cleanly.",
        techTerms: ["Terraform / Pulumi IaC", "PR Preview Envs", "Point-in-Time PITR", "CDN & Edge Rules"],
        deliverables: [
          "Automated GitHub Actions CI/CD deploying Staging + Production safely",
          "Point-in-time DB recovery (PITR) + automated restore verification drill",
          "Clean separation of Dev / Staging / Prod cloud accounts & secrets",
          "Security headers, WAF bot protection & cost budget alert rules",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "AWS / GCP / Vercel · Terraform · CI",
        slaOrOutputSpec: "Zero-Downtime Deploys",
      },
      {
        slug: "authentication-access-control",
        title: "Authentication & Access Control",
        shortSummary:
          "Enterprise SAML/OIDC SSO, SCIM directory provisioning, passkeys, MFA enrollment, and tenant RBAC.",
        heroSubtitle:
          "Unlock Fortune 500 and public-sector deals cleanly with Okta, Azure Entra ID, and Google Workspace enterprise SSO + SCIM.",
        techTerms: ["SAML / OIDC SSO", "SCIM Auto-Provision", "Enforced Org MFA", "Session Revocation"],
        deliverables: [
          "Enterprise SAML 2.0 / OIDC login tested with Okta & Azure Entra ID",
          "SCIM automated user onboarding & instant offboarding deprovisioning",
          "Org-wide MFA enforcement toggles + hardware passkey authentication",
          "Active device session list allowing instant admin token revocation",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "WorkOS / Auth0 / Clerk · TypeScript",
        slaOrOutputSpec: "Enterprise SSO Ready",
      },
      {
        slug: "third-party-api-integrations",
        title: "Payment, CRM & Third-Party Integrations",
        shortSummary:
          "Reliable bidirectional connectors for Stripe, Xero, QuickBooks, HubSpot, Salesforce, Slack, and Plaid.",
        heroSubtitle:
          "Sync financial, banking, and CRM records continuously with idempotent event handlers and transparent reconciliation UI.",
        techTerms: ["Stripe / Plaid / Xero", "Webhook Reconciliation", "Retry Dead-Letter", "OAuth2 Token Vault"],
        deliverables: [
          "Resilient two-way sync adapters with exponential backoff & rate respect",
          "Admin integration health page showing last sync timestamp & errors",
          "Webhook deduplication preventing duplicate invoices or CRM records",
          "Automated contract tests checking downstream schema stability",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Stripe · HubSpot · Xero · Plaid API",
        slaOrOutputSpec: "Zero Silent Failures",
      },
    ],
  },
  {
    number: "10",
    slug: "saas-maintenance",
    menuTitle: "SaaS Maintenance & Scaling",
    fullTitle: "SaaS Maintenance & Scaling",
    menuDesc: "Security, modernization and ongoing support",
    iconKey: "shield-check",
    heroHeadline: "Always-On SaaS Stability,",
    heroAccent: "Modernization & Scaling.",
    heroSummary:
      "Keep growing SaaS platforms fast, secure, and modern year-round—handling dashboard performance tuning, legacy React/Node upgrades, security audits, cloud scaling, and continuous feature sprints.",
    techTerms: [
      "99.95% Platform Care",
      "OWASP & CVE Hardening",
      "Legacy Code Refresh",
      "Dedicated Senior Trio",
    ],
    relatedCaseSlugs: [
      "ces-enterprise-event-operations-2026",
      "raj-personal-expenses-tracking-app-v2",
    ],
    services: [
      {
        slug: "saas-maintenance-support",
        title: "SaaS Maintenance & Support",
        shortSummary:
          "Proactive monthly SRE care covering uptime monitoring, dependency updates, bug fixes, and urgent hotfixes.",
        heroSubtitle:
          "Operate with senior engineering peace of mind—protecting live customer SLAs without carrying full-time DevOps headcount.",
        techTerms: ["12h Senior Response", "Sentry / Log Triage", "Monthly Patch SLA", "100% Clean Git"],
        deliverables: [
          "Weekly error log, Sentry trace & database health inspection",
          "Safe dependency upgrades verified against Playwright smoke suites",
          "Reserved monthly feature/tweak hours for urgent customer requests",
          "Transparent monthly platform uptime, security & roadmap summary",
        ],
        turnaround: "Ongoing Retainer",
        stackSpec: "Next.js · Node · Postgres · Sentry",
        slaOrOutputSpec: "99.95% Uptime Focus",
      },
      {
        slug: "dashboard-performance",
        title: "Dashboard Performance Optimization",
        shortSummary:
          "Eliminate freezing tables, heavy bundle hydration, slow SSR waterfalls, and React re-render bottlenecks.",
        heroSubtitle:
          "Give daily power users sub-second page switches and instant filter response—even across 100k-row datasets.",
        techTerms: ["React Render Tune", "Table Virtualization", "Bundle Tree-Shake", "SQL Query Cache"],
        deliverables: [
          "Full React Profiler, bundle-analyzer & database bottleneck diagnostic",
          "TanStack Table / list virtualization + memoized filter state",
          "Elimination of sequential client fetch waterfalls via server streaming",
          "Verified before/after Lighthouse, INP & TTFB benchmark sheet",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "React Profiler · Next.js · TanStack",
        slaOrOutputSpec: "3× Snappier UI Load",
      },
      {
        slug: "saas-security-reviews",
        title: "SaaS Security & Access Reviews",
        shortSummary:
          "Practical OWASP ASVS hardening, multi-tenant IDOR checks, dependency CVE cleanups, and enterprise security readiness.",
        heroSubtitle:
          "Close enterprise procurement security reviews fast by auditing endpoints for IDOR leaks, CSRF, header gaps, and secrets.",
        techTerms: ["IDOR & Auth Audit", "OWASP ASVS Checks", "CVE Sweep & CSP", "Procurement Ready"],
        deliverables: [
          "Systematic endpoint authorization review (IDOR / tenant-bleed testing)",
          "Strict Content-Security-Policy, CORS, HSTS & secret rotation fixes",
          "npm / OS dependency CVE remediation verified without regressions",
          "Plain-English security summary sheet aiding SOC2 / buyer questionnaires",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "OWASP ASVS · SAST · Security Headers",
        slaOrOutputSpec: "Zero High/Crit Risks",
      },
      {
        slug: "legacy-saas-modernization",
        title: "Legacy SaaS Modernization",
        shortSummary:
          "Migrate aging Pages Router, jQuery, PHP, or JavaScript apps onto clean Next.js App Router + strict TypeScript.",
        heroSubtitle:
          "Modernize iteratively route-by-route beside your live app—zero risky big-bang rewrites and zero lost URLs or customers.",
        techTerms: ["Strangler Pattern", "JS -> Strict TS", "Modern UI Lift", "Zero Downtime"],
        deliverables: [
          "Technical debt & risk map prioritizing highest-ROI module upgrades",
          "Incremental strangler-pattern migration into TypeScript + Next.js",
          "Database ORM typing & modern Tailwind UI component harmonization",
          "End-to-end Playwright safety net validating feature parity at each cut",
        ],
        turnaround: "4–10 Weeks",
        stackSpec: "Next.js App Router · TypeScript · Playwright",
        slaOrOutputSpec: "Zero Big-Bang Risk",
      },
      {
        slug: "cloud-migration-scaling",
        title: "Cloud Migration & Scalability",
        shortSummary:
          "Scale databases cleanly, separate heavy workers, optimize cloud spend, and eliminate Heroku/VPS single points.",
        heroSubtitle:
          "Handle enterprise load spikes comfortably while cutting wasteful over-provisioned cloud compute & egress bills.",
        techTerms: ["Read Replicas & Cache", "Worker Separation", "Cloud Cost Cut", "Load Tested Scale"],
        deliverables: [
          "Architecture split offloading heavy queues, cron & PDF exports cleanly",
          "Redis hot-path caching & read-replica query routing",
          "Load-test verification (k6) validating 5–10× peak concurrent throughput",
          "Cloud bill audit eliminating idle containers & redundant logs",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "AWS / GCP · Postgres · Redis · k6 Load",
        slaOrOutputSpec: "25–40% Cloud Savings",
      },
      {
        slug: "feature-enhancements-devops",
        title: "Feature Enhancements & DevOps Support",
        shortSummary:
          "Continuous senior product engineering sprints adding roadmap modules, AI tools, and smooth CI/CD releases.",
        heroSubtitle:
          "Plug Asif, Talib, and Azma directly into your Linear/GitHub workflow to ship customer-requested SaaS modules weekly.",
        techTerms: ["Weekly Feature Ship", "Design + Full-Stack", "CI/CD Release Guard", "100% Client Git"],
        deliverables: [
          "Direct Slack + Linear collaboration with 3 senior studio principals",
          "End-to-end Figma UI design, TypeScript frontend & backend API code",
          "Automated PR preview links, unit tests & staging QA per feature",
          "Zero overhead—clean PRs merged straight into your organization repo",
        ],
        turnaround: "Weekly / Monthly / Yearly",
        stackSpec: "Next.js · TypeScript · Postgres · Figma",
        slaOrOutputSpec: "3× Sprint Throughput",
      },
    ],
  },
];

export const TOTAL_SAAS_CATEGORIES = DASHBOARDS_SAAS_CATEGORIES.length;
export const TOTAL_SAAS_SERVICES = DASHBOARDS_SAAS_CATEGORIES.reduce(
  (sum, c) => sum + c.services.length,
  0
);

export function getDashboardsSaasCategoryBySlug(
  slug: string
): DashboardsSaasCategory | undefined {
  return DASHBOARDS_SAAS_CATEGORIES.find((c) => c.slug === slug);
}

export function getDashboardsSaasServiceBySlugs(
  categorySlug: string,
  serviceSlug: string
): { category: DashboardsSaasCategory; service: DashboardsSaasService } | undefined {
  const category = getDashboardsSaasCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}

export function getAllDashboardsSaasServiceParams(): {
  category: string;
  service: string;
}[] {
  return DASHBOARDS_SAAS_CATEGORIES.flatMap((cat) =>
    cat.services.map((srv) => ({
      category: cat.slug,
      service: srv.slug,
    }))
  );
}

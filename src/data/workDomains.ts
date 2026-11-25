import { CASE_STUDIES, type PortfolioCategory } from "@/data/portfolio";

export type WorkDomainSlug = "dashboards-saas";

export interface WorkNavItem {
  label: string;
  href: string;
  slug?: WorkDomainSlug;
  category: PortfolioCategory;
  count: number;
  shortDesc: string;
  isGraphicDesignHub?: boolean;
  isWebsiteHub?: boolean;
  isMobileAppHub?: boolean;
  isDashboardsSaasHub?: boolean;
}

export interface WorkDomainConfig {
  slug: WorkDomainSlug;
  href: string;
  category: Exclude<PortfolioCategory, "All">;
  artworkId: "dashboards" | "apps";
  artworkNumber: string;
  serviceQuery: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  audienceTag: string;
  telemetrySpecs: { value: string; label: string }[];
  architectureTitle: string;
  architectureSubtitle: string;
  architecturePillars: { code: string; title: string; detail: string }[];
  deliverableChecklist: string[];
  featuredSlugs: string[];
  relatedSlugs: string[];
  recommendedPackage: "weekly" | "monthly" | "yearly";
  recommendedTitle: string;
  recommendedNote: string;
}

function countForCategory(cat: PortfolioCategory): number {
  if (cat === "All") return CASE_STUDIES.length;
  return CASE_STUDIES.filter((c) => c.category === cat).length;
}

export const WORK_NAV_ITEMS: WorkNavItem[] = [
  {
    label: "All",
    href: "/work",
    category: "All",
    count: countForCategory("All"),
    shortDesc: "Complete 6-case exhibition",
  },
  {
    label: "Dashboards & SaaS",
    href: "/services/dashboards-saas",
    slug: "dashboards-saas",
    category: "Dashboards & SaaS",
    count: countForCategory("Dashboards & SaaS"),
    shortDesc: "10 categories · 60 SaaS services",
    isDashboardsSaasHub: true,
  },
  {
    label: "Mobile App",
    href: "/mobile-app",
    category: "Web & Mobile Apps",
    count: countForCategory("Web & Mobile Apps"),
    shortDesc: "10 categories · 60 app services",
    isMobileAppHub: true,
  },
  {
    label: "Websites",
    href: "/website",
    category: "Websites",
    count: countForCategory("Websites"),
    shortDesc: "10 categories · 60 web services",
    isWebsiteHub: true,
  },
  {
    label: "Graphic Design",
    href: "/graphic-design",
    category: "Graphic Design",
    count: countForCategory("Graphic Design"),
    shortDesc: "10 categories · 59 design services",
    isGraphicDesignHub: true,
  },
];

export const WORK_DOMAINS: Record<WorkDomainSlug, WorkDomainConfig> = {
  "dashboards-saas": {
    slug: "dashboards-saas",
    href: "/work/dashboards-saas",
    category: "Dashboards & SaaS",
    artworkId: "dashboards",
    artworkNumber: "01",
    serviceQuery: "dashboards",
    metaTitle: "Dashboards & SaaS Case Studies — Fintech Ledgers & Analytics UI",
    metaDescription:
      "Explore how Bisen Studio designs and engineers high-density SaaS analytics dashboards, virtualized tables, RBAC portals, and real-time fintech telemetry at AI-accelerated velocity.",
    eyebrow: "DOMAIN EXHIBITION // SAAS & ANALYTICS",
    headline: "Dashboards & SaaS Interfaces Built for",
    headlineAccent: "Executive Clarity.",
    description:
      "Power users abandon software when telemetry feels sluggish or cluttered. Combining 16+ years of information architecture with AI-accelerated React/TypeScript engineering, we ship institutional-grade dashboards in weeks.",
    audienceTag: "Fintech CFOs · B2B SaaS Founders · CTOs",
    telemetrySpecs: [
      { value: "100K+", label: "Virtualized Rows" },
      { value: "<50ms", label: "Filter Interaction" },
      { value: "RBAC", label: "Multi-Tenant Security" },
      { value: "WCAG AA", label: "Contrast & Keyboard" },
    ],
    architectureTitle: "How We Architect High-Density SaaS Consoles",
    architectureSubtitle:
      "Every analytics interface balances visual calm for executives with keyboard-first speed for daily operators.",
    architecturePillars: [
      {
        code: "01",
        title: "Information Hierarchy & Swiss Grid",
        detail:
          "Critical KPIs surface above the fold while drill-down drawers, split panes, and progressive filters eliminate tab clutter.",
      },
      {
        code: "02",
        title: "Virtualized Tables & Real-Time Streams",
        detail:
          "TanStack Table virtualization and WebSocket delta updates keep 100,000-row ledgers scrolling at a silky 60fps.",
      },
      {
        code: "03",
        title: "Tokenized Dark & Light Component Systems",
        detail:
          "Figma design tokens map 1:1 to TypeScript + Tailwind CSS components for effortless maintenance by your internal team.",
      },
      {
        code: "04",
        title: "Role-Based Access & Audit Compliance",
        detail:
          "Granular multi-currency permissions, immutable audit trails, and OWASP-reviewed API integration built from Day 1.",
      },
    ],
    deliverableChecklist: [
      "Dark & Light Enterprise Design System (Figma + Code)",
      "Real-Time Financial / Telemetry Charts & Anomaly Alerts",
      "Virtualized Multi-Column Ledgers with Instant Export",
      "Multi-Tenant Organization Switcher & RBAC UI",
      "Keyboard Shortcuts & Accessible Data Table Semantics",
      "AI-Assisted End-to-End Playwright & Vitest Coverage",
    ],
    featuredSlugs: ["ces-enterprise-event-operations-2026"],
    relatedSlugs: ["raj-personal-expenses-tracking-app-v2", "lootbattles-ui-dashboard"],
    recommendedPackage: "monthly",
    recommendedTitle: "Monthly Studio Retainer",
    recommendedNote:
      "Ideal for SaaS teams shipping continuous dashboard modules, design-system parity, and weekly customer-requested analytics features.",
  },
};

export function getDomainHrefForCategory(category: PortfolioCategory): string {
  const match = WORK_NAV_ITEMS.find((item) => item.category === category);
  return match ? match.href : "/work";
}

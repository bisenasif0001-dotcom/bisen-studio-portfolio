import { GRAPHIC_DESIGN_CATEGORIES } from "@/data/graphicDesignCatalog";
import { WEBSITE_CATEGORIES } from "@/data/websiteCatalog";
import { MOBILE_APP_CATEGORIES } from "@/data/mobileAppCatalog";
import { DASHBOARDS_SAAS_CATEGORIES } from "@/data/dashboardsSaasCatalog";
import { AI_ENGINEERING_SERVICES } from "@/data/aiEngineeringCatalog";
import { CASE_STUDIES } from "@/data/portfolio";
import { PACKAGES } from "@/data/packages";

export type IntakeCategoryId =
  | "graphic-design"
  | "website"
  | "mobile-app"
  | "dashboards-saas"
  | "ai-engineering";

export type IntakeEngagementId =
  | "unsure"
  | "fixed"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly";

export interface CatalogServiceOption {
  serviceId: string;
  slug: string;
  title: string;
  categoryId: IntakeCategoryId;
  categoryName: string;
  subCategoryId: string;
  subCategoryName: string;
  href: string;
}

export interface IntakeCategoryMeta {
  id: IntakeCategoryId;
  label: string;
  shortLabel: string;
  summary: string;
}

export const INTAKE_CATEGORIES: IntakeCategoryMeta[] = [
  {
    id: "graphic-design",
    label: "Graphic Design",
    shortLabel: "Graphic & Print",
    summary: "Brand identity, packaging, brochures, decks, social & motion graphics.",
  },
  {
    id: "website",
    label: "Website Design & Development",
    shortLabel: "Websites",
    summary: "Custom Next.js sites, WordPress, Shopify, Webflow & redesigns.",
  },
  {
    id: "mobile-app",
    label: "Mobile App Development",
    shortLabel: "Mobile Apps",
    summary: "iOS, Android, Flutter/React Native & mobile UI/UX systems.",
  },
  {
    id: "dashboards-saas",
    label: "Dashboards & SaaS",
    shortLabel: "Dashboards & SaaS",
    summary: "SaaS MVPs, admin consoles, analytics BI & client portals.",
  },
  {
    id: "ai-engineering",
    label: "AI Engineering",
    shortLabel: "AI Engineering",
    summary: "AI web apps, RAG assistants, workflow automation & LLM APIs.",
  },
];

export const ENGAGEMENT_OPTIONS: {
  id: IntakeEngagementId;
  label: string;
  rateHint: string;
  helperText: string;
}[] = [
  {
    id: "unsure",
    label: "Help Me Choose",
    rateHint: "Guidance during discovery",
    helperText: "Share goals first and our principals will recommend the leanest engagement structure.",
  },
  {
    id: "fixed",
    label: "Fixed-Scope Project",
    rateHint: "Milestone proposal",
    helperText: "Well-defined deliverables with agreed scope, milestone schedule, and fixed fee.",
  },
  {
    id: "hourly",
    label: "Hourly Precision",
    rateHint: "$65 / hr (5-hr min)",
    helperText: "On-demand senior execution for audits, targeted fixes, and advisory.",
  },
  {
    id: "weekly",
    label: "Weekly Sprint",
    rateHint: "$2,200 / week",
    helperText: "Focused 5-day sprint (~35–40 hrs) built around one agreed deliverable.",
  },
  {
    id: "monthly",
    label: "Monthly Studio Retainer",
    rateHint: "$6,500 / month",
    helperText: "1 prioritized queue with up to 2 active workstreams across design & development.",
  },
  {
    id: "yearly",
    label: "Yearly Strategic Partner",
    rateHint: "$60,000 / year ($5,000/mo eq.)",
    helperText: "Priority queue, 24h response SLA & quarterly multi-product roadmap planning.",
  },
];

export const BUDGET_OPTIONS_BY_ENGAGEMENT: Record<
  IntakeEngagementId,
  { value: string; label: string }[]
> = {
  hourly: [
    { value: "hourly-5-15", label: "5–15 Hours ($325 – $975 USD base)" },
    { value: "hourly-15-40", label: "15–40 Hours ($975 – $2,600 USD base)" },
    { value: "hourly-40-plus", label: "40+ Hours ($2,600+ USD base)" },
    { value: "custom-guidance", label: "Custom Hourly Scope / Need Guidance" },
  ],
  weekly: [
    { value: "weekly-1", label: "1-Week Sprint ($2,200 USD base)" },
    { value: "weekly-2", label: "2-Week Sprint ($4,400 USD base)" },
    { value: "weekly-3-4", label: "3–4 Weeks ($6,600 – $8,800 USD base)" },
    { value: "custom-guidance", label: "Custom Sprint Scope / Need Guidance" },
  ],
  monthly: [
    { value: "monthly-1", label: "1 Month Retainer ($6,500 USD base)" },
    { value: "monthly-2-3", label: "2–3 Months ($13,000 – $19,500 USD base)" },
    { value: "monthly-4-6", label: "4–6 Months ($26,000 – $39,000 USD base)" },
    { value: "monthly-6-plus", label: "6+ Months ($39,000+ USD base)" },
    { value: "custom-guidance", label: "Custom Retainer / Need Guidance" },
  ],
  yearly: [
    { value: "yearly-annual", label: "Annual Commitment ($60,000 USD / year)" },
    { value: "yearly-quarterly", label: "Quarterly Installments ($15,000 USD / quarter)" },
    { value: "yearly-custom", label: "Custom Enterprise / Multi-Track Partnership" },
  ],
  fixed: [
    { value: "under-3k", label: "Under $3,000 USD (Focused Deliverable)" },
    { value: "3k-10k", label: "$3,000 – $10,000 USD (Standard Project)" },
    { value: "10k-25k", label: "$10,000 – $25,000 USD (Full Product / Platform)" },
    { value: "25k-60k+", label: "$25,000 – $60,000+ USD (Multi-Phase Build)" },
    { value: "custom-guidance", label: "I Need Budget Guidance After Discovery" },
  ],
  unsure: [
    { value: "under-3k", label: "Under $3,000 USD" },
    { value: "3k-10k", label: "$3,000 – $10,000 USD" },
    { value: "10k-25k", label: "$10,000 – $25,000 USD" },
    { value: "25k-60k+", label: "$25,000 – $60,000+ USD" },
    { value: "custom-guidance", label: "Flexible — Recommend Best Fit & Budget" },
  ],
};

function buildCatalogIndex(): CatalogServiceOption[] {
  const list: CatalogServiceOption[] = [];

  for (const cat of GRAPHIC_DESIGN_CATEGORIES) {
    for (const srv of cat.services) {
      list.push({
        serviceId: `graphic-design:${cat.slug}:${srv.slug}`,
        slug: srv.slug,
        title: srv.title,
        categoryId: "graphic-design",
        categoryName: "Graphic Design",
        subCategoryId: cat.slug,
        subCategoryName: cat.menuTitle,
        href: `/graphic-design/${cat.slug}/${srv.slug}`,
      });
    }
  }

  for (const cat of WEBSITE_CATEGORIES) {
    for (const srv of cat.services) {
      list.push({
        serviceId: `website:${cat.slug}:${srv.slug}`,
        slug: srv.slug,
        title: srv.title,
        categoryId: "website",
        categoryName: "Website Design & Development",
        subCategoryId: cat.slug,
        subCategoryName: cat.menuTitle,
        href: `/website/${cat.slug}/${srv.slug}`,
      });
    }
  }

  for (const cat of MOBILE_APP_CATEGORIES) {
    for (const srv of cat.services) {
      list.push({
        serviceId: `mobile-app:${cat.slug}:${srv.slug}`,
        slug: srv.slug,
        title: srv.title,
        categoryId: "mobile-app",
        categoryName: "Mobile App Development",
        subCategoryId: cat.slug,
        subCategoryName: cat.menuTitle,
        href: `/mobile-app/${cat.slug}/${srv.slug}`,
      });
    }
  }

  for (const cat of DASHBOARDS_SAAS_CATEGORIES) {
    for (const srv of cat.services) {
      list.push({
        serviceId: `dashboards-saas:${cat.slug}:${srv.slug}`,
        slug: srv.slug,
        title: srv.title,
        categoryId: "dashboards-saas",
        categoryName: "Dashboards & SaaS",
        subCategoryId: cat.slug,
        subCategoryName: cat.menuTitle,
        href: `/services/dashboards-saas/${cat.slug}/${srv.slug}`,
      });
    }
  }

  for (const svc of AI_ENGINEERING_SERVICES) {
    list.push({
      serviceId: `ai-engineering:core:${svc.slug}`,
      slug: svc.slug,
      title: svc.title,
      categoryId: "ai-engineering",
      categoryName: "AI Engineering",
      subCategoryId: "ai-engineering-core",
      subCategoryName: "AI Engineering Capabilities",
      href: `/ai-engineering/${svc.slug}`,
    });
  }

  return list;
}

export const ALL_INTAKE_SERVICES: CatalogServiceOption[] = buildCatalogIndex();

const CATEGORY_ALIAS_MAP: Record<string, IntakeCategoryId> = {
  "graphic-design": "graphic-design",
  "digital-design": "graphic-design",
  "print-design": "graphic-design",
  "brand-digital": "graphic-design",
  "print-packaging": "graphic-design",
  website: "website",
  websites: "website",
  "website-design": "website",
  "mobile-app": "mobile-app",
  "mobile-apps": "mobile-app",
  apps: "mobile-app",
  "web-mobile-apps": "mobile-app",
  "dashboards-saas": "dashboards-saas",
  saas: "dashboards-saas",
  dashboards: "dashboards-saas",
  "ai-engineering": "ai-engineering",
  "digital-products": "ai-engineering",
};

const SUBCATEGORY_SLUG_MAP: Record<string, { categoryId: IntakeCategoryId; subCategoryName: string }> = {
  ...Object.fromEntries(
    GRAPHIC_DESIGN_CATEGORIES.map((c) => [c.slug, { categoryId: "graphic-design" as const, subCategoryName: c.menuTitle }])
  ),
  ...Object.fromEntries(
    WEBSITE_CATEGORIES.map((c) => [c.slug, { categoryId: "website" as const, subCategoryName: c.menuTitle }])
  ),
  ...Object.fromEntries(
    MOBILE_APP_CATEGORIES.map((c) => [c.slug, { categoryId: "mobile-app" as const, subCategoryName: c.menuTitle }])
  ),
  ...Object.fromEntries(
    DASHBOARDS_SAAS_CATEGORIES.map((c) => [c.slug, { categoryId: "dashboards-saas" as const, subCategoryName: c.menuTitle }])
  ),
};

const PORTFOLIO_CATEGORY_TO_INTAKE: Record<string, IntakeCategoryId> = {
  "Dashboards & SaaS": "dashboards-saas",
  "Web & Mobile Apps": "mobile-app",
  Websites: "website",
  "Graphic Design": "graphic-design",
};

const DISCIPLINE_LABEL_TO_CATEGORY: Record<string, IntakeCategoryId> = {
  "Digital & Brand Design": "graphic-design",
  "Print Design & Packaging": "graphic-design",
  "Multi-Page Websites": "website",
  "Multi-Page Website": "website",
  "Web or Mobile App": "mobile-app",
  "SaaS Dashboard": "dashboards-saas",
  "AI-Accelerated Product MVP": "ai-engineering",
};

export interface ParsedIntakeContext {
  hasContext: boolean;
  sourceLabel: string;
  sourceKey: string;
  categories: IntakeCategoryId[];
  matchedService: CatalogServiceOption | null;
  matchedSubCategoryName: string | null;
  matchedPortfolioProject: {
    slug: string;
    title: string;
    category: string;
  } | null;
  engagement: IntakeEngagementId;
  budget: string;
  durationNote: string | null;
  mixNote: string | null;
  initialGoalSeed: string;
  contextBadges: string[];
}

export function resolveSmartIntakeContext(params: URLSearchParams): ParsedIntakeContext {
  const rawCategory = (params.get("category") ?? "").trim().toLowerCase();
  const rawService = (params.get("service") ?? "").trim().toLowerCase();
  const rawSolution = (params.get("solution") ?? "").trim().toLowerCase();
  const rawTopic = (params.get("topic") ?? "").trim().toLowerCase();
  const rawProject = (params.get("project") ?? "").trim().toLowerCase();
  const rawPackage = (params.get("package") ?? params.get("plan") ?? "").trim().toLowerCase();
  const rawSource = (params.get("source") ?? "").trim().toLowerCase();
  const rawDuration = (params.get("duration") ?? "").trim();
  const rawMix = (params.get("mix") ?? "").trim();
  const rawDisciplines = (params.get("disciplines") ?? "").trim();
  const rawEstimate = Number(params.get("estimate"));
  const rawCurrency = (params.get("currency") ?? "").trim().toUpperCase();

  const categoriesSet = new Set<IntakeCategoryId>();
  let matchedService: CatalogServiceOption | null = null;
  let matchedSubCategoryName: string | null = null;
  let matchedPortfolioProject: ParsedIntakeContext["matchedPortfolioProject"] = null;
  const contextBadges: string[] = [];

  // 1. Validate category alias if present
  if (rawCategory && CATEGORY_ALIAS_MAP[rawCategory]) {
    categoriesSet.add(CATEGORY_ALIAS_MAP[rawCategory]);
  }

  // 2. Match exact service from service, solution, or topic param
  const candidateServiceSlugs = [rawService, rawSolution, rawTopic].filter(Boolean);
  for (const candidate of candidateServiceSlugs) {
    const cleanCandidate = candidate.replace(/-bundle$/, "");
    const exactService = ALL_INTAKE_SERVICES.find(
      (item) =>
        item.slug === cleanCandidate &&
        (categoriesSet.size === 0 || categoriesSet.has(item.categoryId))
    ) ?? ALL_INTAKE_SERVICES.find((item) => item.slug === cleanCandidate);

    if (exactService) {
      matchedService = exactService;
      categoriesSet.add(exactService.categoryId);
      matchedSubCategoryName = exactService.subCategoryName;
      break;
    }

    if (SUBCATEGORY_SLUG_MAP[cleanCandidate]) {
      const subMatch = SUBCATEGORY_SLUG_MAP[cleanCandidate];
      categoriesSet.add(subMatch.categoryId);
      matchedSubCategoryName = subMatch.subCategoryName;
      break;
    }

    if (CATEGORY_ALIAS_MAP[cleanCandidate]) {
      categoriesSet.add(CATEGORY_ALIAS_MAP[cleanCandidate]);
    }
  }

  // 3. Portfolio project match (?project=slug)
  if (rawProject) {
    const cs = CASE_STUDIES.find((c) => c.slug.toLowerCase() === rawProject);
    if (cs) {
      matchedPortfolioProject = {
        slug: cs.slug,
        title: cs.title,
        category: cs.category,
      };
      const mappedCat = PORTFOLIO_CATEGORY_TO_INTAKE[cs.category];
      if (mappedCat) categoriesSet.add(mappedCat);
      contextBadges.push(`Similar to: ${cs.title.split(" — ")[0]}`);
    }
  }

  // 4. Budget estimator disciplines mapping
  if (rawDisciplines) {
    for (const part of rawDisciplines.split(",")) {
      const cat = DISCIPLINE_LABEL_TO_CATEGORY[part.trim()];
      if (cat) categoriesSet.add(cat);
    }
  }

  // 5. Engagement model validation
  let engagement: IntakeEngagementId = "unsure";
  if (
    rawPackage &&
    ["hourly", "weekly", "monthly", "yearly", "fixed", "unsure"].includes(rawPackage)
  ) {
    engagement = rawPackage as IntakeEngagementId;
  }

  // 6. Pick sensible matching budget option
  let budget = BUDGET_OPTIONS_BY_ENGAGEMENT[engagement][0]?.value ?? "custom-guidance";
  if (engagement === "hourly") {
    const hrs = Number(rawDuration);
    if (hrs >= 40) budget = "hourly-40-plus";
    else if (hrs >= 15) budget = "hourly-15-40";
    else budget = "hourly-5-15";
  } else if (engagement === "weekly") {
    const wks = Number(rawDuration);
    if (wks >= 3) budget = "weekly-3-4";
    else if (wks === 2) budget = "weekly-2";
    else budget = "weekly-1";
  } else if (engagement === "monthly") {
    const mos = Number(rawDuration);
    if (mos >= 7) budget = "monthly-6-plus";
    else if (mos >= 4) budget = "monthly-4-6";
    else if (mos >= 2) budget = "monthly-2-3";
    else budget = "monthly-1";
  } else if (engagement === "yearly") {
    budget = "yearly-annual";
  } else if (Number.isFinite(rawEstimate) && rawEstimate > 0) {
    if (rawEstimate < 3000) budget = "under-3k";
    else if (rawEstimate <= 10000) budget = "3k-10k";
    else if (rawEstimate <= 25000) budget = "10k-25k";
    else budget = "25k-60k+";
  } else {
    budget = "3k-10k";
  }

  // Build readable context badges
  const categories = Array.from(categoriesSet);
  if (matchedService) {
    contextBadges.push(
      `${matchedService.categoryName} → ${matchedService.subCategoryName} → ${matchedService.title}`
    );
  } else if (matchedSubCategoryName && categories[0]) {
    const catLabel =
      INTAKE_CATEGORIES.find((c) => c.id === categories[0])?.label ?? categories[0];
    contextBadges.push(`${catLabel} → ${matchedSubCategoryName}`);
  } else if (categories.length > 0) {
    contextBadges.push(
      categories
        .map((id) => INTAKE_CATEGORIES.find((c) => c.id === id)?.label ?? id)
        .join(" + ")
    );
  }

  if (engagement !== "unsure") {
    const pkgLabel =
      PACKAGES.find((p) => p.id === engagement)?.name ??
      ENGAGEMENT_OPTIONS.find((e) => e.id === engagement)?.label ??
      engagement;
    contextBadges.push(
      rawDuration ? `${pkgLabel} (${rawDuration})` : pkgLabel
    );
  }

  // Seed concise initial project brief text without storing PII in URLs
  let initialGoalSeed = "";
  if (matchedPortfolioProject) {
    initialGoalSeed = `Interested in building something similar to: ${matchedPortfolioProject.title}.\n\nKey goals & differences we need:`;
  } else if (rawDuration && engagement !== "unsure") {
    const unitWord =
      engagement === "hourly"
        ? "hours"
        : engagement === "weekly"
          ? Number(rawDuration) === 1
            ? "week"
            : "weeks"
          : engagement === "monthly"
            ? Number(rawDuration) === 1
              ? "month"
              : "months"
            : "year(s)";
    const estLine =
      Number.isFinite(rawEstimate) && rawEstimate > 0
        ? ` | Indicative USD Estimate: $${rawEstimate.toLocaleString("en-US")}${rawCurrency && rawCurrency !== "USD" ? ` (viewed in ${rawCurrency})` : ""}`
        : "";
    initialGoalSeed = `Estimator selection: ${engagement} (${rawDuration} ${unitWord})${rawMix ? ` · Focus: ${rawMix}` : ""}${estLine}.\n\nProject goals & target launch window:`;
  } else if (matchedService) {
    initialGoalSeed = `Selected service: ${matchedService.title} (${matchedService.subCategoryName}).\n\nProject goals, context & target timeline:`;
  } else if (matchedSubCategoryName) {
    initialGoalSeed = `Service category focus: ${matchedSubCategoryName}.\n\nProject goals & target timeline:`;
  } else if (rawTopic && rawTopic.startsWith("work-with-")) {
    initialGoalSeed = `Collaboration inquiry regarding ${rawTopic.replace("work-with-", "").replace(/-/g, " ")}.\n\nProject scope & goals:`;
  }

  const sourceLabel = matchedPortfolioProject
    ? "Portfolio Case Study"
    : matchedService
      ? "Service Catalog"
      : engagement !== "unsure"
        ? rawSource === "budget-estimator"
          ? "Packages Budget Estimator"
          : "Pricing Packages"
        : categories.length > 0
          ? "Capabilities Explorer"
          : "Direct Studio Inquiry";

  return {
    hasContext:
      Boolean(matchedService) ||
      Boolean(matchedPortfolioProject) ||
      Boolean(matchedSubCategoryName) ||
      categories.length > 0 ||
      engagement !== "unsure",
    sourceLabel,
    sourceKey: rawSource || (matchedPortfolioProject ? "portfolio" : matchedService ? "service-detail" : "direct"),
    categories,
    matchedService,
    matchedSubCategoryName,
    matchedPortfolioProject,
    engagement,
    budget,
    durationNote: rawDuration || null,
    mixNote: rawMix || null,
    initialGoalSeed,
    contextBadges,
  };
}

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { CASE_STUDIES } from "@/data/portfolio";
import {
  GRAPHIC_DESIGN_CATEGORIES,
  getAllGraphicServiceParams,
} from "@/data/graphicDesignCatalog";
import {
  WEBSITE_CATEGORIES,
  getAllWebsiteServiceParams,
} from "@/data/websiteCatalog";
import {
  MOBILE_APP_CATEGORIES,
  getAllMobileAppServiceParams,
} from "@/data/mobileAppCatalog";
import {
  DASHBOARDS_SAAS_CATEGORIES,
  getAllDashboardsSaasServiceParams,
} from "@/data/dashboardsSaasCatalog";
import { AI_ENGINEERING_SERVICES } from "@/data/aiEngineeringCatalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/services/dashboards-saas",
    "/work",
    "/work/dashboards-saas",
    "/mobile-app",
    "/website",
    "/graphic-design",
    "/packages",
    "/ai-engineering",
    "/about",
    "/contact",
    "/start-project",
    "/policies",
    "/policies/privacy",
    "/policies/terms",
    "/policies/retainer-refund",
    "/policies/ip-nda-ai",
    "/policies/cookies",
    "/policies/accessibility",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: now,
    changeFrequency:
      route === "" ||
      route === "/work" ||
      route === "/graphic-design" ||
      route === "/website" ||
      route === "/mobile-app" ||
      route === "/services/dashboards-saas"
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/packages" ||
            route === "/services" ||
            route === "/ai-engineering" ||
            route === "/services/dashboards-saas" ||
            route === "/graphic-design" ||
            route === "/website" ||
            route === "/mobile-app"
          ? 0.9
          : 0.75,
  }));

  const dashboardsSaasCategoryEntries: MetadataRoute.Sitemap = DASHBOARDS_SAAS_CATEGORIES.map(
    (cat) => ({
      url: `${SITE_CONFIG.url}/services/dashboards-saas/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const dashboardsSaasServiceEntries: MetadataRoute.Sitemap =
    getAllDashboardsSaasServiceParams().map(({ category, service }) => ({
      url: `${SITE_CONFIG.url}/services/dashboards-saas/${category}/${service}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const graphicCategoryEntries: MetadataRoute.Sitemap = GRAPHIC_DESIGN_CATEGORIES.map(
    (cat) => ({
      url: `${SITE_CONFIG.url}/graphic-design/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const graphicServiceEntries: MetadataRoute.Sitemap = getAllGraphicServiceParams().map(
    ({ category, service }) => ({
      url: `${SITE_CONFIG.url}/graphic-design/${category}/${service}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const websiteCategoryEntries: MetadataRoute.Sitemap = WEBSITE_CATEGORIES.map(
    (cat) => ({
      url: `${SITE_CONFIG.url}/website/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const websiteServiceEntries: MetadataRoute.Sitemap = getAllWebsiteServiceParams().map(
    ({ category, service }) => ({
      url: `${SITE_CONFIG.url}/website/${category}/${service}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const mobileAppCategoryEntries: MetadataRoute.Sitemap = MOBILE_APP_CATEGORIES.map(
    (cat) => ({
      url: `${SITE_CONFIG.url}/mobile-app/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const mobileAppServiceEntries: MetadataRoute.Sitemap = getAllMobileAppServiceParams().map(
    ({ category, service }) => ({
      url: `${SITE_CONFIG.url}/mobile-app/${category}/${service}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const caseEntries: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${SITE_CONFIG.url}/work/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const aiEngineeringServiceEntries: MetadataRoute.Sitemap = AI_ENGINEERING_SERVICES.map(
    (svc) => ({
      url: `${SITE_CONFIG.url}/ai-engineering/${svc.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  return [
    ...staticEntries,
    ...dashboardsSaasCategoryEntries,
    ...dashboardsSaasServiceEntries,
    ...graphicCategoryEntries,
    ...graphicServiceEntries,
    ...websiteCategoryEntries,
    ...websiteServiceEntries,
    ...mobileAppCategoryEntries,
    ...mobileAppServiceEntries,
    ...aiEngineeringServiceEntries,
    ...caseEntries,
  ];
}

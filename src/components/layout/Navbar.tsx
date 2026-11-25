"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe,
  Globe2,
  LayoutDashboard,
  LayoutGrid,
  Menu,
  Palette,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/site";
import { CASE_STUDIES, type PortfolioCategory } from "@/data/portfolio";
import {
  GRAPHIC_DESIGN_CATEGORIES,
  TOTAL_GRAPHIC_SERVICES,
  type GraphicCategoryIconKey,
} from "@/data/graphicDesignCatalog";
import {
  WEBSITE_CATEGORIES,
  TOTAL_WEBSITE_SERVICES,
  type WebsiteCategoryIconKey,
} from "@/data/websiteCatalog";
import {
  MOBILE_APP_CATEGORIES,
  TOTAL_MOBILE_APP_SERVICES,
  type MobileAppCategoryIconKey,
} from "@/data/mobileAppCatalog";
import {
  DASHBOARDS_SAAS_CATEGORIES,
  TOTAL_SAAS_SERVICES,
  type DashboardsSaasIconKey,
} from "@/data/dashboardsSaasCatalog";
import { GraphicCategoryIcon } from "@/components/ui/GraphicCategoryIcon";
import { WebsiteCategoryIcon } from "@/components/ui/WebsiteCategoryIcon";
import { MobileAppCategoryIcon } from "@/components/ui/MobileAppCategoryIcon";
import { DashboardsSaasCategoryIcon } from "@/components/ui/DashboardsSaasCategoryIcon";
import { BrandMark } from "@/components/layout/BrandMark";
import { useCurrency } from "@/components/context/CurrencyContext";
import { CURRENCIES, type CurrencyCode, cn } from "@/lib/utils";

type MegaMenuMode = "graphic-design" | "website" | "mobile-app" | "dashboards-saas";
type OpenMenuKey = "services" | "work" | null;

interface MegaCategoryItem {
  slug: string;
  menuTitle: string;
  fullTitle: string;
  menuDesc: string;
  iconKey: string;
  services: { slug: string; title: string }[];
}

interface MegaModeDescriptor {
  mode: MegaMenuMode;
  tabLabel: string;
  mobileTabLabel: string;
  shortExploreLabel: string;
  basePath: string;
  eyebrow: string;
  mobileHeading: string;
  tagline: string;
  totalServices: number;
  categories: MegaCategoryItem[];
  quoteHref: string;
  pillarIcon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  renderIcon: (iconKey: string, className: string) => React.ReactNode;
}

const MEGA_MODES: Record<MegaMenuMode, MegaModeDescriptor> = {
  "graphic-design": {
    mode: "graphic-design",
    tabLabel: "Graphic Design",
    mobileTabLabel: "Design",
    shortExploreLabel: "Explore Graphic Design",
    basePath: "/graphic-design",
    eyebrow: "GRAPHIC DESIGN",
    mobileHeading: "GRAPHIC DESIGN (10 CATEGORIES)",
    tagline: "Brand identity, packaging die-lines, print pre-press & motion creatives.",
    totalServices: TOTAL_GRAPHIC_SERVICES,
    categories: GRAPHIC_DESIGN_CATEGORIES,
    quoteHref: "/contact?service=graphic-design",
    pillarIcon: Palette,
    renderIcon: (key, className) => (
      <GraphicCategoryIcon iconKey={key as GraphicCategoryIconKey} className={className} />
    ),
  },
  website: {
    mode: "website",
    tabLabel: "Websites",
    mobileTabLabel: "Web",
    shortExploreLabel: "Explore Websites",
    basePath: "/website",
    eyebrow: "WEBSITE DESIGN & DEVELOPMENT",
    mobileHeading: "WEBSITE DESIGN & DEV (10 CATEGORIES)",
    tagline: "Modern business sites, Shopify/WooCommerce stores & custom Next.js builds.",
    totalServices: TOTAL_WEBSITE_SERVICES,
    categories: WEBSITE_CATEGORIES,
    quoteHref: "/contact?service=website",
    pillarIcon: Globe2,
    renderIcon: (key, className) => (
      <WebsiteCategoryIcon iconKey={key as WebsiteCategoryIconKey} className={className} />
    ),
  },
  "mobile-app": {
    mode: "mobile-app",
    tabLabel: "Mobile Apps",
    mobileTabLabel: "Apps",
    shortExploreLabel: "Explore Mobile Apps",
    basePath: "/mobile-app",
    eyebrow: "MOBILE APP DEVELOPMENT",
    mobileHeading: "MOBILE APP DEVELOPMENT (10 CATEGORIES)",
    tagline: "Native iOS & Android, Flutter/React Native & AI-powered mobile products.",
    totalServices: TOTAL_MOBILE_APP_SERVICES,
    categories: MOBILE_APP_CATEGORIES,
    quoteHref: "/contact?service=mobile-app",
    pillarIcon: Smartphone,
    renderIcon: (key, className) => (
      <MobileAppCategoryIcon iconKey={key as MobileAppCategoryIconKey} className={className} />
    ),
  },
  "dashboards-saas": {
    mode: "dashboards-saas",
    tabLabel: "Dashboards & SaaS",
    mobileTabLabel: "SaaS",
    shortExploreLabel: "Explore Dashboards & SaaS",
    basePath: "/services/dashboards-saas",
    eyebrow: "DASHBOARDS & SAAS",
    mobileHeading: "DASHBOARDS & SAAS (10 CATEGORIES)",
    tagline: "Multi-tenant SaaS platforms, admin consoles, BI analytics & automation.",
    totalServices: TOTAL_SAAS_SERVICES,
    categories: DASHBOARDS_SAAS_CATEGORIES,
    quoteHref: "/contact?service=dashboards-saas",
    pillarIcon: LayoutDashboard,
    renderIcon: (key, className) => (
      <DashboardsSaasCategoryIcon iconKey={key as DashboardsSaasIconKey} className={className} />
    ),
  },
};

const MEGA_MODE_ORDER: MegaMenuMode[] = [
  "graphic-design",
  "website",
  "mobile-app",
  "dashboards-saas",
];

const POPULAR_SERVICES = [
  { label: "Brand Identity", href: "/graphic-design/brand-identity" },
  { label: "Shopify Development", href: "/website/ecommerce-development/shopify-development" },
  { label: "React Websites", href: "/website/custom-web-development/react-development" },
  { label: "Mobile App UI/UX", href: "/mobile-app/mobile-app-design" },
  { label: "Admin Dashboards", href: "/services/dashboards-saas/admin-dashboard-development" },
  { label: "SaaS MVP", href: "/services/dashboards-saas/custom-saas-development/saas-mvp-development" },
];

const WORK_FILTER_TABS: {
  id: PortfolioCategory;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}[] = [
  { id: "All", label: "All Projects", href: "/work", icon: LayoutGrid },
  { id: "Graphic Design", label: "Graphic Design", href: "/work?category=Graphic+Design", icon: Palette },
  { id: "Websites", label: "Websites", href: "/work?category=Websites", icon: Globe2 },
  { id: "Web & Mobile Apps", label: "Mobile Apps", href: "/work?category=Web+%26+Mobile+Apps", icon: Smartphone },
  { id: "Dashboards & SaaS", label: "Dashboards & SaaS", href: "/work/dashboards-saas", icon: LayoutDashboard },
];

const TOTAL_ALL_CATEGORIES = MEGA_MODE_ORDER.reduce(
  (sum, key) => sum + MEGA_MODES[key].categories.length,
  0
);
const TOTAL_ALL_SERVICES = MEGA_MODE_ORDER.reduce(
  (sum, key) => sum + MEGA_MODES[key].totalServices,
  0
);

function getWorkCount(cat: PortfolioCategory): number {
  if (cat === "All") return CASE_STUDIES.length;
  return CASE_STUDIES.filter((c) => c.category === cat).length;
}

export function Navbar() {
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<OpenMenuKey>(null);
  const [pinnedMenu, setPinnedMenu] = useState<OpenMenuKey>(null);
  const [activeMegaMode, setActiveMegaMode] = useState<MegaMenuMode>("graphic-design");
  const [activeWorkFilter, setActiveWorkFilter] = useState<PortfolioCategory>("All");
  const [mobileServicesMode, setMobileServicesMode] =
    useState<MegaMenuMode>("graphic-design");
  const [hoveredCatByMode, setHoveredCatByMode] = useState<Record<MegaMenuMode, string>>({
    "graphic-design": GRAPHIC_DESIGN_CATEGORIES[0].slug,
    website: WEBSITE_CATEGORIES[0].slug,
    "mobile-app": MOBILE_APP_CATEGORIES[0].slug,
    "dashboards-saas": DASHBOARDS_SAAS_CATEGORIES[0].slug,
  });
  const [expandedMobileCat, setExpandedMobileCat] = useState<string | null>(null);

  const openMenu: OpenMenuKey = pinnedMenu ?? hoverMenu;
  const currencyRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLDivElement>(null);
  const workTriggerRef = useRef<HTMLDivElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);
  const hoverCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelHoverClose = () => {
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
  };

  const openMenuHover = (target: Exclude<OpenMenuKey, null>) => {
    cancelHoverClose();
    if (pinnedMenu && pinnedMenu !== target) {
      setPinnedMenu(null);
    }
    setHoverMenu(target);
    setCurrencyOpen(false);
  };

  const keepPanelHover = () => {
    cancelHoverClose();
  };

  const scheduleHoverClose = () => {
    cancelHoverClose();
    hoverCloseTimerRef.current = setTimeout(() => {
      setHoverMenu(null);
    }, 130);
  };

  const togglePinnedMenu = (target: Exclude<OpenMenuKey, null>) => {
    cancelHoverClose();
    setCurrencyOpen(false);
    if (pinnedMenu === target) {
      setPinnedMenu(null);
      setHoverMenu(null);
    } else {
      setPinnedMenu(target);
      setHoverMenu(null);
    }
  };

  const closeMegaMenu = () => {
    cancelHoverClose();
    setHoverMenu(null);
    setPinnedMenu(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCurrencyOpen(false);
    closeMegaMenu();

    if (pathname === "/work/dashboards-saas") {
      setActiveWorkFilter("Dashboards & SaaS");
    } else if (pathname === "/work" || pathname.startsWith("/work/")) {
      setActiveWorkFilter("All");
    }

    for (const modeKey of MEGA_MODE_ORDER) {
      const desc = MEGA_MODES[modeKey];
      if (pathname === desc.basePath || pathname.startsWith(`${desc.basePath}/`)) {
        setActiveMegaMode(modeKey);
        setMobileServicesMode(modeKey);
        const seg = pathname.slice(desc.basePath.length + 1).split("/")[0];
        if (seg && desc.categories.some((c) => c.slug === seg)) {
          setHoveredCatByMode((prev) => ({ ...prev, [modeKey]: seg }));
        }
        break;
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (currencyRef.current && !currencyRef.current.contains(target)) {
        setCurrencyOpen(false);
      }
      const inServicesTrigger = servicesTriggerRef.current?.contains(target) ?? false;
      const inWorkTrigger = workTriggerRef.current?.contains(target) ?? false;
      const inMegaPanel = megaPanelRef.current?.contains(target) ?? false;
      if (!inServicesTrigger && !inWorkTrigger && !inMegaPanel) {
        closeMegaMenu();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCurrencyOpen(false);
        closeMegaMenu();
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      cancelHoverClose();
    };
  }, []);

  const currentCurrency = CURRENCIES[currency];
  const activeModeSpec = MEGA_MODES[activeMegaMode];
  const previewCategory =
    activeModeSpec.categories.find((c) => c.slug === hoveredCatByMode[activeMegaMode]) ??
    activeModeSpec.categories[0];

  const isServicesRouteActive =
    pathname === "/services" ||
    pathname.startsWith("/services/") ||
    pathname === "/graphic-design" ||
    pathname.startsWith("/graphic-design/") ||
    pathname === "/website" ||
    pathname.startsWith("/website/") ||
    pathname === "/mobile-app" ||
    pathname.startsWith("/mobile-app/");

  const isWorkRouteActive =
    pathname === "/work" || pathname.startsWith("/work/");

  const filteredWorkCases =
    activeWorkFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeWorkFilter);

  const visibleMegaWorkCases = filteredWorkCases.slice(0, 6);
  const companionCases =
    visibleMegaWorkCases.length === 1
      ? CASE_STUDIES.filter((c) => c.slug !== visibleMegaWorkCases[0].slug).slice(0, 2)
      : [];

  const activeMobileDesc = MEGA_MODES[mobileServicesMode];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy/12 bg-white/92 backdrop-blur-2xl shadow-[0_12px_40px_rgba(10,25,47,0.08)]"
          : "border-b border-navy/[0.08] bg-white/92 backdrop-blur-2xl"
      )}
    >
      {/* Top 2px Signature Hairline */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-navy via-gold to-navy"
      />

      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-[70px]" : "h-20"
        )}
      >
        {/* Editorial Brand Wordmark Lockup */}
        <Link
          href="/"
          className="group flex items-center gap-3.5 focus-visible:outline-none"
          aria-label={`${SITE_CONFIG.name} — Home`}
        >
          <BrandMark className="h-10 w-10 rounded-[10px] shadow-[0_6px_18px_rgba(10,25,47,0.18)] transition-transform duration-300 group-hover:scale-[1.04]" />
          <div className="flex flex-col">
            <div className="flex items-baseline leading-none">
              <span className="text-[17px] font-bold tracking-[-0.025em] text-navy">
                Bisen
              </span>
              <span className="font-editorial ml-1 text-[21px] font-medium leading-none text-navy/90">
                Studio
              </span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-navy/55">
              <span>16+ Yrs</span>
              <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
              <span>Design · AI Code</span>
            </div>
          </div>
        </Link>

        {/* Floating Recessed Pill Navigation Dock (Desktop) */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-0.5 rounded-full border border-navy/[0.09] bg-surface/85 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_2px_rgba(10,25,47,0.03)] lg:flex"
        >
          {NAV_LINKS.map((item) => {
            const isServicesItem = item.href === "/services";
            const isWorkItem = item.href === "/work";
            const isMegaTrigger = isServicesItem || isWorkItem;

            if (isMegaTrigger) {
              const menuKey: Exclude<OpenMenuKey, null> = isServicesItem ? "services" : "work";
              const isOpen = openMenu === menuKey;
              const isRouteActive = isServicesItem ? isServicesRouteActive : isWorkRouteActive;
              const triggerRef = isServicesItem ? servicesTriggerRef : workTriggerRef;

              return (
                <div
                  key={item.href}
                  ref={triggerRef}
                  className="relative"
                  onMouseEnter={() => openMenuHover(menuKey)}
                  onMouseLeave={scheduleHoverClose}
                >
                  <button
                    type="button"
                    onClick={() => togglePinnedMenu(menuKey)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-label={
                      isServicesItem
                        ? "Services capability explorer mega menu spanning 239 services across 4 disciplines"
                        : "Work visual portfolio showcase mega menu featuring completed client case studies"
                    }
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-none",
                      isRouteActive || isOpen
                        ? "bg-navy text-white shadow-[0_2px_10px_rgba(10,25,47,0.22)]"
                        : "text-navy/70 hover:bg-white hover:text-navy hover:shadow-[0_1px_3px_rgba(10,25,47,0.06)]"
                    )}
                  >
                    {isRouteActive && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-gold"
                      />
                    )}
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-150",
                        isOpen && "rotate-180",
                        isRouteActive || isOpen ? "text-gold" : "text-navy/55"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              );
            }

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.01em] transition-none",
                  isActive
                    ? "bg-navy text-white shadow-[0_2px_10px_rgba(10,25,47,0.22)]"
                    : "text-navy/70 hover:bg-white hover:text-navy hover:shadow-[0_1px_3px_rgba(10,25,47,0.06)]"
                )}
              >
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-gold"
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Luxury Controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <div ref={currencyRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setCurrencyOpen((o) => !o);
                closeMegaMenu();
              }}
              aria-haspopup="listbox"
              aria-expanded={currencyOpen}
              aria-label={`Select display currency, currently ${currentCurrency.label}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white px-3.5 py-2 text-xs font-semibold text-navy shadow-[0_1px_3px_rgba(10,25,47,0.05)] transition-all hover:border-gold hover:bg-surface/60"
            >
              <Globe className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
              <span className="font-mono font-bold tracking-tight">{currentCurrency.code}</span>
              <span className="text-ink-muted">{currentCurrency.symbol}</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-navy/60 transition-transform duration-200",
                  currencyOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>

            {currencyOpen && (
              <div
                role="listbox"
                aria-label="Currency options"
                className="absolute right-0 mt-2.5 w-52 origin-top-right rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_20px_50px_rgba(10,25,47,0.16)]"
              >
                {Object.values(CURRENCIES).map((c) => {
                  const isSelected = c.code === currency;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setCurrency(c.code);
                        setCurrencyOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-none",
                        isSelected
                          ? "bg-navy text-white"
                          : "text-navy hover:bg-surface"
                      )}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold">
                          <span>{c.code}</span>
                          <span className={isSelected ? "text-gold" : "text-ink-muted"}>
                            ({c.symbol})
                          </span>
                        </div>
                        <span
                          className={cn(
                            "text-[11px]",
                            isSelected ? "text-white/75" : "text-ink-muted"
                          )}
                        >
                          {c.region}
                        </span>
                      </div>
                      {isSelected && <Check className="h-4 w-4 shrink-0 text-gold" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <span aria-hidden="true" className="h-5 w-px bg-navy/10" />

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-navy py-1.5 pl-5 pr-1.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(10,25,47,0.22),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-200 hover:bg-navy-mid hover:shadow-[0_12px_28px_rgba(10,25,47,0.3)] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover:scale-105">
              <ArrowUpRight
                className="h-3.5 w-3.5 stroke-[2.25] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="relative flex items-center rounded-full border border-navy/12 bg-surface px-3 py-1.5 shadow-[0_1px_2px_rgba(10,25,47,0.04)]">
            <Globe className="mr-1.5 h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
            <select
              aria-label="Select currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="cursor-pointer bg-transparent font-mono text-xs font-semibold text-navy outline-none"
            >
              {Object.values(CURRENCIES).map((c) => (
                <option key={c.code} value={c.code} className="bg-white text-navy">
                  {c.code}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/12 bg-white text-navy shadow-[0_1px_3px_rgba(10,25,47,0.06)] transition-colors hover:border-gold"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENU — COMPLETELY DIFFERENTIATED SERVICES VS WORK EXPERIENCES */}
      {openMenu && (
        <div className="pointer-events-none absolute inset-x-0 top-full z-50 -mt-1 hidden justify-center px-4 pt-2.5 lg:flex">
          <div
            ref={megaPanelRef}
            role="menu"
            aria-label={
              openMenu === "services"
                ? "Services capability explorer mega menu"
                : "Work visual portfolio explorer mega menu"
            }
            onMouseEnter={keepPanelHover}
            onMouseLeave={scheduleHoverClose}
            className="pointer-events-auto w-full max-w-[1040px] rounded-2xl border border-navy/12 bg-white p-4 shadow-[0_28px_72px_rgba(10,25,47,0.18)]"
          >
            {openMenu === "services" ? (
              <>
                {/* SERVICES MODE: "WHAT WE DO — 239 CAPABILITIES" */}
                <div className="flex items-center justify-between gap-2 border-b border-navy/10 pb-3">
                  <div className="flex items-center gap-1">
                    <Link
                      href="/services"
                      role="menuitem"
                      onClick={closeMegaMenu}
                      className={cn(
                        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-semibold transition-none",
                        pathname === "/services"
                          ? "bg-navy text-white shadow-xs ring-1 ring-gold/50"
                          : "bg-surface text-navy/80 hover:bg-navy/[0.06] hover:text-navy"
                      )}
                    >
                      <LayoutGrid
                        className={cn(
                          "h-3.5 w-3.5",
                          pathname === "/services" ? "text-gold" : "text-navy/65"
                        )}
                        aria-hidden={true}
                      />
                      <span>All Services · {TOTAL_ALL_SERVICES}</span>
                    </Link>

                    {MEGA_MODE_ORDER.map((modeKey) => {
                      const desc = MEGA_MODES[modeKey];
                      const Icon = desc.pillarIcon;
                      const isRouteHere =
                        pathname === desc.basePath ||
                        pathname.startsWith(`${desc.basePath}/`);
                      const isLit = activeMegaMode === modeKey || isRouteHere;

                      return (
                        <Link
                          key={modeKey}
                          href={desc.basePath}
                          role="menuitem"
                          onMouseEnter={() => setActiveMegaMode(modeKey)}
                          onClick={closeMegaMenu}
                          className={cn(
                            "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-semibold transition-none",
                            isLit
                              ? "bg-navy text-white shadow-xs ring-1 ring-gold/50"
                              : "bg-surface text-navy/80 hover:bg-navy/[0.06] hover:text-navy"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-3.5 w-3.5",
                              isLit ? "text-gold" : "text-navy/65"
                            )}
                            aria-hidden={true}
                          />
                          <span>
                            {desc.tabLabel} · {desc.totalServices}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <span className="shrink-0 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-gold-deep">
                    WHAT WE DO · {TOTAL_ALL_SERVICES} SERVICES
                  </span>
                </div>

                {/* Row 2: Active Service Discipline Header */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <Link
                      href={activeModeSpec.basePath}
                      onClick={closeMegaMenu}
                      className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-gold-deep hover:underline"
                    >
                      {activeModeSpec.eyebrow}
                    </Link>
                    <span className="text-xs text-ink-muted">{activeModeSpec.tagline}</span>
                  </div>
                  <Link
                    href={activeModeSpec.basePath}
                    onClick={closeMegaMenu}
                    className="rounded-full border border-navy/10 bg-surface px-2.5 py-0.5 font-mono text-[10px] font-semibold text-navy hover:border-gold"
                  >
                    {activeModeSpec.categories.length} Categories · {activeModeSpec.totalServices}{" "}
                    Services
                  </Link>
                </div>

                {/* Row 3: Clean Systematic 5x2 Service Category Cards */}
                <div className="mt-2 grid grid-cols-5 gap-2">
                  {activeModeSpec.categories.map((cat) => {
                    const catHref = `${activeModeSpec.basePath}/${cat.slug}`;
                    const isCatActive =
                      pathname === catHref || pathname.startsWith(`${catHref}/`);
                    const isPreviewing = previewCategory.slug === cat.slug;
                    return (
                      <Link
                        key={cat.slug}
                        href={catHref}
                        role="menuitem"
                        onMouseEnter={() =>
                          setHoveredCatByMode((prev) => ({
                            ...prev,
                            [activeMegaMode]: cat.slug,
                          }))
                        }
                        onClick={closeMegaMenu}
                        className={cn(
                          "group flex flex-col justify-between rounded-xl border p-2.5 transition-all duration-150",
                          isCatActive
                            ? "border-navy bg-navy text-white shadow-[0_6px_18px_rgba(10,25,47,0.18)]"
                            : isPreviewing
                              ? "border-gold bg-surface/90 text-navy shadow-xs"
                              : "border-navy/8 bg-white text-navy hover:border-gold/70 hover:bg-surface/70"
                        )}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className={cn(
                              "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-colors",
                              isCatActive
                                ? "border-gold/40 bg-gold text-navy"
                                : isPreviewing
                                  ? "border-gold/40 bg-navy text-gold"
                                  : "border-navy/10 bg-surface text-navy group-hover:bg-navy group-hover:text-gold"
                            )}
                          >
                            {activeModeSpec.renderIcon(cat.iconKey, "h-3.5 w-3.5")}
                          </span>
                          <span
                            className={cn(
                              "font-mono text-[10px] font-bold",
                              isCatActive ? "text-gold" : "text-ink-muted"
                            )}
                          >
                            {cat.services.length}
                          </span>
                        </div>

                        <div className="mt-1.5">
                          <div className="text-[12px] font-semibold leading-tight tracking-[-0.01em]">
                            {cat.menuTitle}
                          </div>
                          <p
                            className={cn(
                              "mt-0.5 line-clamp-2 text-[10.5px] leading-snug",
                              isCatActive ? "text-white/75" : "text-ink-muted"
                            )}
                          >
                            {cat.menuDesc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Row 4: Live Category Quick Service Rail + Popular Services Strip */}
                <div className="mt-2.5 rounded-xl border border-navy/10 bg-surface/80 px-3 py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="mr-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-gold-deep">
                        {previewCategory.menuTitle}:
                      </span>
                      {previewCategory.services.map((srv) => (
                        <Link
                          key={srv.slug}
                          href={`${activeModeSpec.basePath}/${previewCategory.slug}/${srv.slug}`}
                          onClick={closeMegaMenu}
                          className="rounded-full border border-navy/10 bg-white px-2.5 py-0.5 text-[11px] font-medium text-navy transition-colors hover:border-gold hover:bg-navy hover:text-white"
                        >
                          {srv.title}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`${activeModeSpec.basePath}/${previewCategory.slug}`}
                      onClick={closeMegaMenu}
                      className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] font-bold text-navy hover:text-gold-deep"
                    >
                      <span>Open Category</span>
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 border-t border-navy/8 pt-1.5">
                    <span className="inline-flex items-center gap-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                      <Sparkles className="h-2.5 w-2.5 text-gold-deep" aria-hidden="true" />
                      <span>Popular:</span>
                    </span>
                    {POPULAR_SERVICES.map((pop) => (
                      <Link
                        key={pop.href}
                        href={pop.href}
                        onClick={closeMegaMenu}
                        className="rounded-md bg-white/85 px-2 py-0.5 text-[10.5px] font-semibold text-navy/85 ring-1 ring-navy/8 transition-colors hover:bg-navy hover:text-gold"
                      >
                        {pop.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Row 5: Services Conversion Banner */}
                <div className="mt-2.5 flex flex-col gap-3 rounded-xl bg-navy px-4 py-2.5 text-white md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-semibold text-white">
                      Need Expert Help? Let’s Discuss Your Project.
                    </div>
                    <p className="text-[11px] leading-snug text-white/75">
                      Discover what we can design, build, and scale with flexible hourly, weekly, or
                      monthly support.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <Link
                      href={activeModeSpec.basePath}
                      onClick={closeMegaMenu}
                      className="rounded-full border border-white/20 bg-navy-mid px-3.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                    >
                      {activeModeSpec.shortExploreLabel}
                    </Link>
                    <Link
                      href="/packages"
                      onClick={closeMegaMenu}
                      className="rounded-full border border-white/20 bg-transparent px-3.5 py-1.5 text-[11px] font-semibold text-white/90 transition-colors hover:border-gold hover:text-gold"
                    >
                      View Packages
                    </Link>
                    <Link
                      href={activeModeSpec.quoteHref}
                      onClick={closeMegaMenu}
                      className="inline-flex items-center gap-1 rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold text-navy transition-colors hover:bg-gold-bright"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* WORK MODE: "WHAT WE'VE CREATED — VISUAL PORTFOLIO EXPLORER" */}
                <div className="flex items-center justify-between gap-2 border-b border-navy/10 pb-3">
                  <div className="flex items-center gap-1">
                    {WORK_FILTER_TABS.map((tab) => {
                      const Icon = tab.icon;
                      const count = getWorkCount(tab.id);
                      const isLit = activeWorkFilter === tab.id;
                      return (
                        <Link
                          key={tab.id}
                          href={tab.href}
                          role="menuitem"
                          onMouseEnter={() => setActiveWorkFilter(tab.id)}
                          onClick={closeMegaMenu}
                          className={cn(
                            "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-none",
                            isLit
                              ? "bg-navy text-white shadow-xs ring-1 ring-gold/50"
                              : "bg-surface text-navy/80 hover:bg-navy/[0.06] hover:text-navy"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-3.5 w-3.5",
                              isLit ? "text-gold" : "text-navy/65"
                            )}
                            aria-hidden={true}
                          />
                          <span>
                            {tab.label} · {count}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <span className="shrink-0 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-gold-deep">
                    {filteredWorkCases.length} Published{" "}
                    {filteredWorkCases.length === 1 ? "Project" : "Projects"}
                  </span>
                </div>

                {/* Row 2: Visual Portfolio Header */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1">
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">
                      SELECTED WORK &amp; CASE STUDIES
                    </span>
                    <span className="text-xs text-ink-muted">
                      Explore the ideas we’ve transformed into digital experiences.
                    </span>
                  </div>
                  <Link
                    href={
                      activeWorkFilter === "Dashboards & SaaS"
                        ? "/work/dashboards-saas"
                        : "/work"
                    }
                    onClick={closeMegaMenu}
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                  >
                    <span>
                      {activeWorkFilter === "Dashboards & SaaS"
                        ? "View SaaS Showcase"
                        : "Explore All Projects"}
                    </span>
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>

                {/* Row 3: Image-First Adaptive Portfolio Gallery */}
                {activeWorkFilter === "All" ? (
                  /* 3 x 2 Thumbnail Showcase of Featured Published Case Studies */
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {visibleMegaWorkCases.map((study) => (
                      <Link
                        key={study.slug}
                        href={`/work/${study.slug}`}
                        role="menuitem"
                        onClick={closeMegaMenu}
                        className="group flex flex-col overflow-hidden rounded-xl border border-navy/12 bg-white shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                      >
                        <div className="relative h-[112px] w-full overflow-hidden bg-navy">
                          <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            sizes="320px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
                          <div className="absolute left-2.5 top-2 flex items-center gap-1.5">
                            <span className="rounded-full bg-navy/90 px-2 py-0.5 font-mono text-[9px] font-semibold text-white backdrop-blur-xs">
                              {study.category}
                            </span>
                            <span className="rounded-full bg-gold px-1.5 py-0.5 font-mono text-[9px] font-bold text-navy">
                              {study.regionCode}
                            </span>
                          </div>
                          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[10px]">
                            <span className="font-mono font-bold text-gold">
                              {study.metrics[0]?.value}
                            </span>
                            <span className="font-mono text-white/80">
                              {study.metrics[0]?.label}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 px-3 py-2">
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-[12px] font-bold text-navy transition-colors group-hover:text-gold-deep">
                              {study.client}
                            </div>
                            <p className="truncate text-[10.5px] text-ink-muted">
                              {study.tags.slice(0, 2).join(" · ")}
                            </p>
                          </div>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-navy/65 transition-colors group-hover:bg-navy group-hover:text-gold">
                            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : visibleMegaWorkCases.length > 1 ? (
                  /* 2 or 3-Column Editorial Feature Row */
                  <div
                    className={cn(
                      "mt-3 grid gap-3.5",
                      visibleMegaWorkCases.length === 2 ? "grid-cols-2" : "grid-cols-3"
                    )}
                  >
                    {visibleMegaWorkCases.map((study) => (
                      <Link
                        key={study.slug}
                        href={`/work/${study.slug}`}
                        role="menuitem"
                        onClick={closeMegaMenu}
                        className="group flex flex-col justify-between overflow-hidden rounded-xl border border-navy/12 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                      >
                        <div>
                          <div className="relative h-[164px] w-full overflow-hidden bg-navy">
                            <Image
                              src={study.image}
                              alt={study.title}
                              fill
                              sizes="340px"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
                            <div className="absolute left-3 top-2.5 flex items-center gap-1.5">
                              <span className="rounded-full bg-gold px-2 py-0.5 font-mono text-[9.5px] font-bold text-navy">
                                {study.regionCode} · {study.year}
                              </span>
                            </div>
                            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px]">
                              <span className="font-mono font-bold text-gold">
                                {study.metrics[0]?.value}
                              </span>
                              <span className="font-mono text-white/85">
                                {study.metrics[0]?.label}
                              </span>
                            </div>
                          </div>

                          <div className="p-3.5">
                            <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-navy transition-colors group-hover:text-gold-deep">
                              {study.title}
                            </h3>
                            <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-ink-muted">
                              {study.summary}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-navy/8 px-3.5 py-2.5 text-[11px] font-semibold text-navy">
                          <span className="font-mono text-[10px] text-ink-muted">
                            {study.tags.slice(0, 2).join(" · ")}
                          </span>
                          <span className="inline-flex items-center gap-1 group-hover:text-gold-deep">
                            <span>Read Case</span>
                            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  /* 12-Col Flagship Split Showcase when Filtering Single Published Case */
                  <div className="mt-3 grid grid-cols-12 gap-3.5">
                    {filteredWorkCases[0] && (
                      <Link
                        href={`/work/${filteredWorkCases[0].slug}`}
                        role="menuitem"
                        onClick={closeMegaMenu}
                        className="group col-span-7 flex flex-col justify-between overflow-hidden rounded-xl border border-navy/12 bg-white shadow-xs transition-all duration-200 hover:border-gold hover:shadow-md"
                      >
                        <div className="relative h-[184px] w-full overflow-hidden bg-navy">
                          <Image
                            src={filteredWorkCases[0].image}
                            alt={filteredWorkCases[0].title}
                            fill
                            sizes="560px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                          <div className="absolute left-3 top-3 flex items-center gap-2">
                            <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[9.5px] font-bold uppercase text-navy">
                              Flagship Case Study
                            </span>
                            <span className="rounded-full bg-navy/90 px-2.5 py-0.5 font-mono text-[9.5px] text-white backdrop-blur-xs">
                              {filteredWorkCases[0].region}
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 rounded-lg bg-navy/85 p-2 backdrop-blur-md">
                            {filteredWorkCases[0].metrics.map((m) => (
                              <div key={m.label}>
                                <div className="font-mono text-xs font-bold text-gold">
                                  {m.value}
                                </div>
                                <div className="truncate text-[9.5px] text-white/75">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-3.5">
                          <div className="min-w-0 flex-1">
                            <h3 className="truncate text-sm font-bold text-navy transition-colors group-hover:text-gold-deep">
                              {filteredWorkCases[0].title}
                            </h3>
                            <p className="mt-0.5 line-clamp-1 text-[11px] text-ink-muted">
                              {filteredWorkCases[0].summary}
                            </p>
                          </div>
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-navy px-3 py-1.5 text-[11px] font-semibold text-white transition-colors group-hover:bg-navy-mid">
                            <span>Read Case</span>
                            <ArrowUpRight className="h-3 w-3 text-gold" aria-hidden="true" />
                          </span>
                        </div>
                      </Link>
                    )}

                    <div className="col-span-5 flex flex-col justify-between gap-2.5">
                      <div className="flex items-center justify-between px-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                        <span>More Selected Projects</span>
                        <Link
                          href="/work"
                          onClick={closeMegaMenu}
                          className="text-gold-deep hover:underline"
                        >
                          All {CASE_STUDIES.length} →
                        </Link>
                      </div>
                      {companionCases.map((other) => (
                        <Link
                          key={other.slug}
                          href={`/work/${other.slug}`}
                          role="menuitem"
                          onClick={closeMegaMenu}
                          className="group flex flex-1 items-center gap-3 overflow-hidden rounded-xl border border-navy/10 bg-surface/65 p-2.5 transition-all hover:border-gold hover:bg-white hover:shadow-xs"
                        >
                          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-navy">
                            <Image
                              src={other.image}
                              alt={other.title}
                              fill
                              sizes="120px"
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-gold-deep">
                              <span>{other.category}</span>
                              <span>·</span>
                              <span>{other.regionCode}</span>
                            </div>
                            <div className="mt-0.5 line-clamp-2 text-xs font-bold leading-snug text-navy group-hover:text-gold-deep">
                              {other.client} — {other.tags[0]}
                            </div>
                            <div className="mt-1 font-mono text-[10px] font-semibold text-ink-muted">
                              {other.metrics[0]?.value} {other.metrics[0]?.label}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Row 4: Distinct Work Conversion Banner */}
                <div className="mt-3 flex flex-col gap-3 rounded-xl bg-navy px-4 py-2.5 text-white md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-semibold text-white">
                      Inspired by Our Work? Let’s Build Yours.
                    </div>
                    <p className="text-[11px] leading-snug text-white/75">
                      See how ideas move from concept to execution across international case
                      studies.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <Link
                      href="/work"
                      onClick={closeMegaMenu}
                      className="rounded-full border border-white/20 bg-navy-mid px-3.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                    >
                      Explore All Projects ({CASE_STUDIES.length})
                    </Link>
                    <Link
                      href="/contact"
                      onClick={closeMegaMenu}
                      className="inline-flex items-center gap-1 rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold text-navy transition-colors hover:bg-gold-bright"
                    >
                      <span>Start Similar Project</span>
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Compact Mobile Drawer: Services (Capability Explorer) vs Work (Visual Case Studies) */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-navy/10 bg-white px-4 pb-6 pt-4 shadow-xl lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((item) => {
              const isServicesItem = item.href === "/services";
              const isWorkItem = item.href === "/work";

              if (isServicesItem) {
                return (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-full px-4 py-3 text-base font-medium transition-colors",
                        isServicesRouteActive
                          ? "bg-navy text-white"
                          : "text-navy/85 hover:bg-surface hover:text-navy"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {isServicesRouteActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                        )}
                        <span>Services</span>
                      </span>
                      <span
                        className={cn(
                          "font-mono text-[11px] font-semibold",
                          isServicesRouteActive ? "text-gold" : "text-ink-muted"
                        )}
                      >
                        {TOTAL_ALL_CATEGORIES} Cats · {TOTAL_ALL_SERVICES} Services
                      </span>
                    </Link>

                    {/* 4-Discipline Segmented Switcher */}
                    <div
                      role="tablist"
                      aria-label="Mobile service disciplines"
                      className="mt-2 ml-3 grid grid-cols-4 gap-1 rounded-xl border border-navy/10 bg-surface p-1"
                    >
                      {MEGA_MODE_ORDER.map((modeKey) => {
                        const desc = MEGA_MODES[modeKey];
                        const isTabActive = mobileServicesMode === modeKey;
                        return (
                          <button
                            key={modeKey}
                            type="button"
                            role="tab"
                            aria-selected={isTabActive}
                            onClick={() => {
                              setMobileServicesMode(modeKey);
                              setExpandedMobileCat(null);
                            }}
                            className={cn(
                              "cursor-pointer rounded-lg px-1.5 py-2 text-center font-mono text-[10.5px] font-semibold transition-none",
                              isTabActive
                                ? "bg-navy text-white shadow-xs"
                                : "text-navy/80 hover:bg-white hover:text-navy"
                            )}
                          >
                            {desc.mobileTabLabel} · {desc.totalServices}
                          </button>
                        );
                      })}
                    </div>

                    {/* Selected Discipline's 10 Expandable Categories */}
                    <div className="mt-2 space-y-1 pl-3 pr-0.5">
                      <div className="flex items-center justify-between gap-2 px-1 py-1">
                        <Link
                          href={activeMobileDesc.basePath}
                          onClick={() => setMobileOpen(false)}
                          className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gold-deep"
                        >
                          {activeMobileDesc.mobileHeading}
                        </Link>
                        <Link
                          href={activeMobileDesc.basePath}
                          onClick={() => setMobileOpen(false)}
                          className="shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold text-navy underline"
                        >
                          Explore All
                        </Link>
                      </div>

                      {activeMobileDesc.categories.map((cat) => {
                        const accKey = `${mobileServicesMode}:${cat.slug}`;
                        const isExpanded = expandedMobileCat === accKey;
                        return (
                          <div
                            key={accKey}
                            className="overflow-hidden rounded-xl border border-navy/10 bg-surface/65"
                          >
                            <button
                              type="button"
                              aria-expanded={isExpanded}
                              onClick={() =>
                                setExpandedMobileCat((prev) =>
                                  prev === accKey ? null : accKey
                                )
                              }
                              className="flex w-full cursor-pointer items-center justify-between px-3 py-2.5 text-left"
                            >
                              <span className="flex items-center gap-2 text-xs font-semibold text-navy">
                                {activeMobileDesc.renderIcon(
                                  cat.iconKey,
                                  "h-3.5 w-3.5 text-gold-deep"
                                )}
                                <span>{cat.menuTitle}</span>
                              </span>
                              <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-muted">
                                <span>{cat.services.length}</span>
                                <ChevronDown
                                  className={cn(
                                    "h-3.5 w-3.5 transition-transform",
                                    isExpanded && "rotate-180"
                                  )}
                                />
                              </span>
                            </button>

                            {isExpanded && (
                              <div className="border-t border-navy/10 bg-white px-3 py-2">
                                <Link
                                  href={`${activeMobileDesc.basePath}/${cat.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="mb-1.5 flex items-center justify-between rounded-lg bg-surface px-2.5 py-1.5 text-[11px] font-bold text-navy"
                                >
                                  <span>{cat.fullTitle} Overview</span>
                                  <ArrowUpRight className="h-3 w-3 text-gold-deep" />
                                </Link>
                                <div className="flex flex-col space-y-1">
                                  {cat.services.map((srv) => (
                                    <Link
                                      key={srv.slug}
                                      href={`${activeMobileDesc.basePath}/${cat.slug}/${srv.slug}`}
                                      onClick={() => setMobileOpen(false)}
                                      className="rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-navy/80 hover:bg-surface hover:text-navy"
                                    >
                                      {srv.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (isWorkItem) {
                return (
                  <div key={item.href} className="flex flex-col pt-1">
                    <Link
                      href="/work"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-full px-4 py-3 text-base font-medium transition-colors",
                        isWorkRouteActive
                          ? "bg-navy text-white"
                          : "text-navy/85 hover:bg-surface hover:text-navy"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {isWorkRouteActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                        )}
                        <span>Work</span>
                      </span>
                      <span
                        className={cn(
                          "font-mono text-[11px] font-semibold",
                          isWorkRouteActive ? "text-gold" : "text-ink-muted"
                        )}
                      >
                        {CASE_STUDIES.length} Projects
                      </span>
                    </Link>

                    {/* 2-Column Visual Case Study Thumbnails (Distinct from Services) */}
                    <div className="grid grid-cols-2 gap-2 py-2 pl-3 pr-0.5">
                      {CASE_STUDIES.map((study) => (
                        <Link
                          key={study.slug}
                          href={`/work/${study.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="group overflow-hidden rounded-xl border border-navy/10 bg-white shadow-2xs transition-colors hover:border-gold"
                        >
                          <div className="relative h-20 w-full bg-navy">
                            <Image
                              src={study.image}
                              alt={study.title}
                              fill
                              sizes="170px"
                              className="object-cover"
                            />
                            <span className="absolute left-1.5 top-1.5 rounded-full bg-gold px-1.5 py-0.5 font-mono text-[8.5px] font-bold text-navy">
                              {study.regionCode}
                            </span>
                          </div>
                          <div className="p-2">
                            <div className="truncate font-mono text-[9px] font-bold text-gold-deep">
                              {study.category}
                            </div>
                            <div className="truncate text-[11px] font-semibold text-navy">
                              {study.client}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-navy text-white"
                      : "text-navy/80 hover:bg-surface hover:text-navy"
                  )}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 border-t border-navy/10 pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-between rounded-full bg-navy py-2 pl-5 pr-2 text-sm font-semibold text-white hover:bg-navy-mid"
            >
              <span>Get a Free Quote</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy">
                <ArrowUpRight className="h-4 w-4 stroke-[2.25]" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

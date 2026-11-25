import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServicesInteractive } from "@/components/sections/ServicesInteractive";
import { GRAPHIC_DESIGN_CATEGORIES } from "@/data/graphicDesignCatalog";
import { WEBSITE_CATEGORIES } from "@/data/websiteCatalog";
import { MOBILE_APP_CATEGORIES } from "@/data/mobileAppCatalog";
import { DASHBOARDS_SAAS_CATEGORIES } from "@/data/dashboardsSaasCatalog";

const ALL_CATALOG_CATEGORIES =
  GRAPHIC_DESIGN_CATEGORIES.length +
  WEBSITE_CATEGORIES.length +
  MOBILE_APP_CATEGORIES.length +
  DASHBOARDS_SAAS_CATEGORIES.length;

const ALL_CATALOG_SERVICES =
  GRAPHIC_DESIGN_CATEGORIES.reduce((s, c) => s + c.services.length, 0) +
  WEBSITE_CATEGORIES.reduce((s, c) => s + c.services.length, 0) +
  MOBILE_APP_CATEGORIES.reduce((s, c) => s + c.services.length, 0) +
  DASHBOARDS_SAAS_CATEGORIES.reduce((s, c) => s + c.services.length, 0);

export const metadata: Metadata = {
  title: `Services — 4 Core Disciplines, ${ALL_CATALOG_CATEGORIES} Categories & ${ALL_CATALOG_SERVICES} Services | Bisen Studio`,
  description: `Explore ${ALL_CATALOG_SERVICES} specialized services across ${ALL_CATALOG_CATEGORIES} categories: Dashboards & SaaS, Mobile App Development, Website Design & Development, and Graphic & Print Design across US, UK, Canada, Europe & Australia.`,
};

const SERVICES_LEDGER = [
  { value: "16+ Yrs", label: "Creative & Studio Craft Heritage" },
  {
    value: `${ALL_CATALOG_SERVICES}`,
    label: `Services Across ${ALL_CATALOG_CATEGORIES} Categories`,
  },
  { value: "3 Principals", label: "Direct Senior Delivery Team" },
  { value: "Custom IP", label: "Ownership Defined in Agreement" },
];

export default function ServicesPage() {
  return (
    <div className="bg-canvas text-navy">
      {/* Royal Navy Architectural Header Matching Work & Mega Hubs */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <span>
                  4 Core Disciplines · {ALL_CATALOG_CATEGORIES} Categories · {ALL_CATALOG_SERVICES}{" "}
                  Services
                </span>
              </div>
              <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Design, Web, Mobile &amp; SaaS{" "}
                <span className="font-editorial text-gold">
                  Engineered Under One Roof.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Built on 16+ years of multidisciplinary creative and digital production craft—our
                three-person principal team partners directly with clients across brand &amp; print
                design, websites, mobile apps, and custom SaaS dashboards.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="#service-explorer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2.5 pl-6 pr-2.5 text-sm font-bold text-navy shadow-[0_12px_32px_rgba(245,197,24,0.22)] hover:bg-gold-bright"
                >
                  <span>Explore Our Services</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </a>
                <Link
                  href="/contact?source=services-hero"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                >
                  <span>Discuss Your Project</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5 lg:col-span-4">
              {SERVICES_LEDGER.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/18 bg-navy-mid p-4 shadow-md"
                >
                  <div className="font-mono text-2xl font-bold text-gold">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium leading-snug text-white/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface/65 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesInteractive />

          {/* Bottom Flexible Creative & Development Partnerships CTA */}
          <div className="mt-20 rounded-3xl border-2 border-gold bg-navy bg-navy-blueprint p-8 text-center text-white shadow-xl sm:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              FLEXIBLE CREATIVE &amp; DEVELOPMENT PARTNERSHIPS
            </p>
            <h2 className="mt-2.5 text-2xl font-bold text-white sm:text-3xl">
              One Team. Multiple Disciplines. Flexible Engagement.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/82 sm:text-base">
              Need ongoing design, development, or technical support? Explore our Hourly, Weekly,
              Monthly, or Yearly packages—or tell us about your project for a tailored scope
              recommendation.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3.5">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
              >
                <span>Explore Packages</span>
                <ArrowUpRight className="h-4 w-4 text-navy" />
              </Link>
              <Link
                href="/contact?source=services-bottom-cta"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-6 py-3.5 text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

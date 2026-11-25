import type { Metadata } from "next";
import React from "react";
import { CASE_STUDIES } from "@/data/portfolio";
import { WorkPortfolioGallery } from "@/components/sections/WorkPortfolioGallery";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Dashboards, Apps, Websites, Brand & Print",
  description:
    "Explore international case studies across the US, Europe, UK, Australia, and Canada—spanning SaaS analytics dashboards, fintech mobile apps, luxury print packaging, editorial publications, and startup web platforms.",
};

const WORK_LEDGER = [
  { value: String(CASE_STUDIES.length), label: "Published Case Studies" },
  { value: "5", label: "Markets: US · UK · EU · AU · CA" },
  { value: "16+", label: "Years Digital & Print Craft" },
  { value: "100%", label: "Client IP Ownership" },
];

export default function WorkPage() {
  return (
    <div className="bg-canvas text-navy">
      {/* Royal Navy Editorial Hub Header */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionHeader
                theme="dark"
                eyebrow="Selected Work & Case Studies"
                title={
                  <>
                    Selected Craft Across{" "}
                    <span className="font-editorial text-gold">Digital &amp; Print.</span>
                  </>
                }
                description="Real business outcomes delivered by Asif Bisen, Rajpoot Talib, and Azma Bisen for startups, founders, and enterprise brands across North America, Europe, and Australia."
              />
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-4">
              {WORK_LEDGER.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-navy-mid/90 p-3.5"
                >
                  <div className="font-mono text-xl font-bold text-gold">{stat.value}</div>
                  <div className="mt-0.5 text-[11px] leading-snug text-white/75">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Portfolio Exhibition Gallery */}
      <section className="bg-surface/65 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WorkPortfolioGallery />
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  LayoutDashboard,
} from "lucide-react";
import {
  getAllDashboardsSaasServiceParams,
  getDashboardsSaasServiceBySlugs,
} from "@/data/dashboardsSaasCatalog";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { DashboardsSaasCategoryArtwork } from "@/components/ui/DashboardsSaasCategoryArtwork";
import { DashboardsSaasPricingBand } from "@/components/sections/DashboardsSaasPricingBand";
import { DashboardsSaasFaqAccordion } from "@/components/sections/DashboardsSaasFaqAccordion";

export function generateStaticParams() {
  return getAllDashboardsSaasServiceParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}): Promise<Metadata> {
  const { category: catSlug, service: srvSlug } = await params;
  const resolved = getDashboardsSaasServiceBySlugs(catSlug, srvSlug);
  if (!resolved) {
    return { title: "Dashboards & SaaS Service Not Found" };
  }
  const { category, service } = resolved;
  return {
    title: `${service.title} — ${category.menuTitle} | Bisen Studio`,
    description: `${service.shortSummary} Built with ${service.stackSpec} targeting ${service.slaOrOutputSpec} and 100% Git IP ownership across US, UK, Canada, Europe & Australia.`,
  };
}

const SERVICE_PROCESS_STEPS = [
  {
    step: "01",
    title: "Schema, Roles & Flows",
    detail: "Lock tenant boundaries, RBAC permissions, KPI cards & API schema within 12h.",
  },
  {
    step: "02",
    title: "Senior Code & Staging QA",
    detail: "Clean Next.js / SQL implementation verified on staging with automated Playwright checks.",
  },
  {
    step: "03",
    title: "Production Deploy & Git IP",
    detail: "Zero-downtime release, monitoring probes & 100% Git repository transfer.",
  },
];

export default async function DashboardsSaasServiceDetailPage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: catSlug, service: srvSlug } = await params;
  const resolved = getDashboardsSaasServiceBySlugs(catSlug, srvSlug);
  if (!resolved) notFound();

  const { category, service } = resolved;
  const currentIndex = category.services.findIndex((s) => s.slug === service.slug);
  const prevService =
    currentIndex > 0 ? category.services[currentIndex - 1] : undefined;
  const nextService =
    currentIndex >= 0 && currentIndex < category.services.length - 1
      ? category.services[currentIndex + 1]
      : undefined;

  const siblingServices = category.services.filter((s) => s.slug !== service.slug);
  const relatedCases = category.relatedCaseSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  return (
    <div className="bg-canvas text-navy">
      {/* 1. SERVICE DETAIL HERO WITH SAAS ATELIER PLATE */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70"
              >
                <Link href="/services" className="transition-colors hover:text-gold">
                  Services
                </Link>
                <span aria-hidden="true">/</span>
                <Link
                  href="/services/dashboards-saas"
                  className="transition-colors hover:text-gold"
                >
                  Dashboards &amp; SaaS
                </Link>
                <span aria-hidden="true">/</span>
                <Link
                  href={`/services/dashboards-saas/${category.slug}`}
                  className="transition-colors hover:text-gold"
                >
                  {category.menuTitle}
                </Link>
                <span aria-hidden="true">/</span>
                <span className="font-semibold text-gold">{service.title}</span>
              </nav>

              <h1 className="mt-5 text-3xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl">
                {service.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {service.heroSubtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.techTerms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-white/15 bg-navy-mid px-3 py-1 font-mono text-[11px] text-gold"
                  >
                    {term}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=dashboards-saas&topic=${service.slug}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy transition-all hover:bg-gold-bright sm:text-sm"
                >
                  <span>Get a Free Quote</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </Link>
                <Link
                  href="/work/dashboards-saas"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy-mid/80 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:text-sm"
                >
                  <span>View SaaS Projects</span>
                </Link>
                <Link
                  href={`/services/dashboards-saas/${category.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/75 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to {category.menuTitle}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <DashboardsSaasCategoryArtwork
                categorySlug={category.slug}
                categoryNumber={category.number}
                categoryTitle={service.title}
                turnaroundLabel={service.turnaround}
                stackLabel={service.stackSpec}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY: DELIVERABLES, SAAS SPECS, PROCESS, PORTFOLIO, PRICING, FAQ & SIBLING SERVICES */}
      <section className="bg-surface/65 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8 lg:col-span-7">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                INCLUDED DELIVERABLES
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy">
                What You Receive in {service.title}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">{service.shortSummary}</p>

              <ul className="mt-6 space-y-3.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-navy">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-deep" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8 lg:col-span-5">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                <LayoutDashboard className="h-4 w-4" />
                <span>SAAS ENGINEERING SPECIFICATIONS</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold text-navy">Studio Launch Standard</h2>

              <dl className="mt-6 divide-y divide-navy/10 text-sm">
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-ink-muted">Typical Turnaround</dt>
                  <dd className="font-mono font-semibold text-navy">{service.turnaround}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-ink-muted">Core Stack</dt>
                  <dd className="font-mono font-semibold text-navy">{service.stackSpec}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-ink-muted">Target Benchmark</dt>
                  <dd className="font-mono font-semibold text-gold-deep">
                    {service.slaOrOutputSpec}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-ink-muted">Code &amp; IP Rights</dt>
                  <dd className="font-mono font-semibold text-navy">100% Client Git Repo</dd>
                </div>
              </dl>

              <Link
                href={`/contact?service=dashboards-saas&topic=${service.slug}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-navy-mid"
              >
                <span>Request Architecture &amp; Quote</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
              </Link>
            </aside>
          </div>

          <div className="mt-12 rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8">
            <div className="grid gap-6 md:grid-cols-3 md:divide-x md:divide-navy/10">
              {SERVICE_PROCESS_STEPS.map((st, i) => (
                <div key={st.step} className={i > 0 ? "md:pl-6" : undefined}>
                  <div className="font-mono text-xs font-bold text-gold-deep">
                    STEP {st.step}
                  </div>
                  <h3 className="mt-1.5 text-base font-semibold text-navy">{st.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">{st.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {relatedCases.length > 0 && (
            <div className="mt-16">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    STUDIO PORTFOLIO PROOF
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold text-navy">
                    Relevant Case Studies
                  </h2>
                </div>
                <Link
                  href="/work/dashboards-saas"
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View SaaS Projects →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {relatedCases.map((study) => (
                  <article
                    key={study.slug}
                    className="group overflow-hidden rounded-[24px] border border-navy/12 bg-white shadow-xs transition-all hover:border-gold hover:shadow-lg"
                  >
                    <div className="grid items-stretch sm:grid-cols-12">
                      <Link
                        href={`/work/${study.slug}`}
                        className="relative block aspect-[16/10] bg-navy sm:col-span-5 sm:aspect-auto"
                      >
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </Link>
                      <div className="flex flex-col justify-between p-5 sm:col-span-7">
                        <div>
                          <span className="inline-block rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                            {study.regionCode} · {study.year}
                          </span>
                          <h3 className="mt-2 text-base font-semibold text-navy transition-colors group-hover:text-gold-deep">
                            <Link href={`/work/${study.slug}`}>{study.title}</Link>
                          </h3>
                          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                            {study.summary}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3 text-xs">
                          <span className="font-mono font-bold text-navy">
                            {study.metrics[0]?.value}
                          </span>
                          <Link
                            href={`/work/${study.slug}`}
                            className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-deep"
                          >
                            <span>Read Case</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <DashboardsSaasPricingBand
              serviceSlug={service.slug}
              serviceTitle={service.title}
            />
          </div>

          <div className="mt-16">
            <DashboardsSaasFaqAccordion
              subjectTitle={service.title}
              turnaround={service.turnaround}
              stackSpec={service.stackSpec}
              slaOrOutputSpec={service.slaOrOutputSpec}
            />
          </div>

          {siblingServices.length > 0 && (
            <div className="mt-16 border-t border-navy/12 pt-12">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    MORE IN {category.menuTitle.toUpperCase()}
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold text-navy">
                    Related Services You Can Bundle
                  </h2>
                </div>
                <Link
                  href={`/services/dashboards-saas/${category.slug}`}
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View All {category.menuTitle} Services →
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {siblingServices.map((sib) => (
                  <Link
                    key={sib.slug}
                    href={`/services/dashboards-saas/${category.slug}/${sib.slug}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/12 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-navy via-gold to-navy opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-semibold text-navy transition-colors group-hover:text-gold-deep">
                          {sib.title}
                        </h3>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-navy/60 transition-colors group-hover:bg-navy group-hover:text-gold">
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                        {sib.shortSummary}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2 border-t border-navy/8 pt-3 font-mono text-[10px]">
                      <span className="truncate font-medium text-ink-muted">
                        {sib.stackSpec}
                      </span>
                      <span className="shrink-0 font-semibold text-gold-deep">
                        {sib.turnaround}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {(prevService || nextService) && (
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-navy/12 pt-8">
              <div>
                {prevService && (
                  <Link
                    href={`/services/dashboards-saas/${category.slug}/${prevService.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-gold hover:text-gold-deep"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Previous: {prevService.title}</span>
                  </Link>
                )}
              </div>
              <div>
                {nextService && (
                  <Link
                    href={`/services/dashboards-saas/${category.slug}/${nextService.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-gold hover:text-gold-deep"
                  >
                    <span>Next: {nextService.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

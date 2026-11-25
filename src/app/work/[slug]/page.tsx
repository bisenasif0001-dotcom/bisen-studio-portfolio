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
  Cpu,
  ExternalLink,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CASE_STUDIES } from "@/data/portfolio";
import { getDomainHrefForCategory } from "@/data/workDomains";
import { CaseStudyShowcaseFrame } from "@/components/sections/CaseStudyShowcaseFrame";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [{ url: study.image }],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const study = CASE_STUDIES[index];
  const prevStudy = CASE_STUDIES[(index - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
  const nextStudy = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];
  const relatedStudies = CASE_STUDIES.filter(
    (c) => c.category === study.category && c.slug !== study.slug
  ).slice(0, 3);
  const domainHref = getDomainHrefForCategory(study.category);
  const liveHost = study.liveUrl
    ? study.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  return (
    <article className="bg-canvas text-navy">
      {/* 1. HERO BANNER — ROYAL NAVY */}
      <header className="border-b-2 border-gold bg-navy bg-navy-blueprint py-12 text-white lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb + Index Counter */}
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.16em]">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-white/70">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-white/80 transition-colors hover:text-gold"
              >
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                <span>All Work</span>
              </Link>
              <span className="text-white/30" aria-hidden="true">
                /
              </span>
              <Link href={domainHref} className="transition-colors hover:text-gold">
                {study.category}
              </Link>
              <span className="text-white/30" aria-hidden="true">
                /
              </span>
              <span className="text-gold">{study.client}</span>
            </nav>

            <span className="rounded-full border border-white/15 bg-navy-mid px-3 py-1 text-[10px] font-semibold text-white/80">
              CASE STUDY // {String(index + 1).padStart(2, "0")} OF {CASE_STUDIES.length}
            </span>
          </div>

          {/* Classification Pills + Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={domainHref}
                className="rounded-full bg-gold px-3 py-1 font-mono text-xs font-bold text-navy transition-colors hover:bg-gold-bright"
              >
                {study.category}
              </Link>
              <span className="rounded-full border border-white/20 bg-navy-mid px-3 py-1 font-mono text-xs text-white/90">
                {study.region}
              </span>
              <span className="rounded-full border border-gold/45 bg-navy-mid px-3 py-1 font-mono text-xs text-gold">
                {study.engagementModel}
              </span>
              {study.liveUrl && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/50 bg-emerald-950/90 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{study.deploymentBadge || "Live Production"}</span>
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 font-mono text-xs font-bold text-navy shadow-sm transition-colors hover:bg-gold-bright"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
              {study.behanceUrl && (
                <a
                  href={study.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/55 bg-navy-mid px-4 py-1.5 font-mono text-xs font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
                >
                  <span>View Original on Behance</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
              <Link
                href={`/contact?source=portfolio&project=${study.slug}&intent=similar-project`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-navy-mid/80 px-4 py-1.5 font-mono text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                <span>Build Similar Project</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
            {study.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/82 sm:text-lg">
            {study.summary}
          </p>

          {/* Capability Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/15 bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] font-medium text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 4-Column Metadata Ledger */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-navy-mid/95 p-5 sm:grid-cols-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-gold">Client</div>
              <div className="mt-1 text-sm font-semibold text-white">{study.client}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-gold">
                Market &amp; Region
              </div>
              <div className="mt-1 text-sm font-semibold text-white">{study.region}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-gold">
                Delivery Timeline
              </div>
              <div className="mt-1 text-sm font-semibold text-white">{study.timeline}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-gold">
                {liveHost ? "Live Deployment" : "Release Year"}
              </div>
              {liveHost && study.liveUrl ? (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex max-w-full items-center gap-1 truncate font-mono text-xs font-semibold text-emerald-300 underline decoration-emerald-400/50 underline-offset-4 hover:text-gold"
                >
                  <span className="truncate">{liveHost}</span>
                  <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                </a>
              ) : (
                <div className="mt-1 font-mono text-sm font-semibold text-white">
                  {study.year}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 2. BROWSER-FRAMED 16:10 SHOWCASE + MEASURED OUTCOMES BAR */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <CaseStudyShowcaseFrame
          title={study.title}
          client={study.client}
          image={study.image}
          liveUrl={study.liveUrl}
          behanceUrl={study.behanceUrl}
          deploymentBadge={study.deploymentBadge}
          category={study.category}
          year={study.year}
          regionCode={study.regionCode}
        />

        {/* Measured Results Bar */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {study.metrics.map((m, idx) => (
            <div
              key={m.label}
              className="rounded-2xl border border-navy/12 bg-surface p-6 text-center transition-colors hover:border-gold"
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                OUTCOME 0{idx + 1}
              </div>
              <div className="mt-2 font-mono text-3xl font-bold text-navy sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-1.5 text-sm font-semibold text-gold-deep">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Additional Screens / Gallery Plates */}
        {study.galleryImages && study.galleryImages.length > 1 && (
          <div className="mt-12">
            <div className="mb-4 flex items-center justify-between gap-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Additional Project Visuals &amp; Plates
              </p>
              <span className="font-mono text-[11px] text-ink-muted">
                {study.galleryImages.length} Visuals Archived
              </span>
            </div>
            <div className="grid items-start gap-6 md:grid-cols-2">
              {study.galleryImages.slice(1).map((imgUrl, idx) => (
                <div
                  key={imgUrl}
                  className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-sm"
                >
                  <div className="flex items-center justify-between border-b border-navy/10 bg-surface px-4 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                    <span>Gallery Plate 0{idx + 2}</span>
                    <span>{study.client}</span>
                  </div>
                  <div className="max-h-[560px] overflow-y-auto bg-surface/40">
                    <Image
                      src={imgUrl}
                      alt={`${study.title} — Visual ${idx + 2}`}
                      width={1400}
                      height={900}
                      className="h-auto w-full object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 3. NARRATIVE DEEP-DIVE + STICKY SPECIFICATIONS SIDEBAR */}
      <section className="bg-surface py-16 text-navy lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Narrative Cards */}
            <div className="space-y-6 lg:col-span-7">
              <div className="rounded-3xl border border-navy/12 bg-white p-6 shadow-xs sm:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  01 · The Challenge
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-navy sm:text-3xl">
                  What Needed to Change
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">{study.challenge}</p>
              </div>

              <div className="rounded-3xl border border-navy/12 bg-white p-6 shadow-xs sm:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  02 · Strategic Craft &amp; Execution
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-navy sm:text-3xl">
                  How Our 3-Person Studio Solved It
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">{study.solution}</p>

                <div className="mt-6 border-t border-navy/10 pt-5">
                  <div className="mb-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-navy/65">
                    Key Implementation Highlights
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-navy/12 bg-surface px-3 py-1 font-mono text-xs font-medium text-navy"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border-2 border-gold/55 bg-navy bg-navy-blueprint p-6 text-white sm:p-8">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  <Cpu className="h-4 w-4" aria-hidden="true" />
                  <span>03 · AI-Accelerated Velocity &amp; Craft Note</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                  {study.aiAccelerationNote}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/15 pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/80">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                    <span>100% Client IP</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                    <span>Principal Reviewed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe2 className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                    <span>Production Tested</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Specifications & Conversion Sidebar */}
            <aside className="space-y-6 lg:col-span-5">
              {(study.liveUrl || study.behanceUrl) && (
                <div className="rounded-2xl border-2 border-emerald-500/35 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{study.liveUrl ? "Live Deployment Verified" : "Behance Archive"}</span>
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-ink-muted">
                      {study.year}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {study.liveUrl
                      ? "Inspect the deployed build directly in a new tab—including responsive layouts, interactive controls, and live UI flows."
                      : "Inspect the original published showcase presentation on Behance."}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-navy px-4 py-2.5 font-mono text-xs font-bold text-gold transition-colors hover:bg-navy-mid"
                      >
                        <span>Open Live Website</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                    {study.behanceUrl && (
                      <a
                        href={study.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-navy/20 bg-surface px-4 py-2.5 font-mono text-xs font-bold text-navy transition-colors hover:border-gold"
                      >
                        <span>Open on Behance</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-navy/12 bg-white p-6 shadow-sm">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Deliverables Shipped
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-navy/90">
                  {study.deliverables.map((d, dIdx) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 rounded-xl border border-navy/8 bg-surface/65 p-3"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                        aria-hidden="true"
                      />
                      <span className="flex-1 leading-snug">{d}</span>
                      <span className="font-mono text-[10px] font-bold text-ink-muted">
                        0{dIdx + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-navy/12 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Tools &amp; Stack
                  </h3>
                  <Link
                    href={domainHref}
                    className="font-mono text-[10px] font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold-deep"
                  >
                    {study.category} Hub →
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-navy/12 bg-surface px-3 py-1.5 font-mono text-xs font-medium text-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border-2 border-gold bg-navy p-6 text-white">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span>Building Something Similar?</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Engage Asif Bisen, Rajpoot Talib, and Azma Bisen directly on Hourly, Weekly,
                  Monthly, or Yearly terms with clean code and design ownership.
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  <Link
                    href={`/contact?source=portfolio&project=${study.slug}&intent=similar-project`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-bright"
                  >
                    <span>Start a Similar Project</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/packages"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-navy-mid px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                  >
                    <span>Compare Studio Packages</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. RELATED PROJECTS IN SAME DISCIPLINE */}
      {relatedStudies.length > 0 && (
        <section className="border-t border-navy/10 bg-white py-16 text-navy">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  MORE IN {study.category.toUpperCase()}
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  Explore Related {study.category} Case Studies
                </h2>
              </div>
              <Link
                href={domainHref}
                className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
              >
                Explore All {study.category} Work →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedStudies.map((rel) => (
                <article
                  key={rel.slug}
                  className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-navy/12 bg-surface/45 shadow-xs transition-all hover:border-gold hover:bg-white hover:shadow-lg"
                >
                  <Link
                    href={`/work/${rel.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden bg-navy"
                  >
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5">
                      <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                        {rel.regionCode} · {rel.year}
                      </span>
                      {rel.liveUrl && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/55 bg-emerald-950/90 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          LIVE
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-navy transition-colors group-hover:text-gold-deep">
                        <Link href={`/work/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                        {rel.summary}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3 text-xs">
                      {rel.liveUrl ? (
                        <a
                          href={rel.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono font-bold text-gold-deep hover:text-navy"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="font-mono font-bold text-navy">
                          {rel.metrics[0]?.value}
                        </span>
                      )}
                      <Link
                        href={`/work/${rel.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-deep"
                      >
                        <span>Inspect Case</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. PREVIOUS / NEXT CASE STUDY DUAL NAVIGATION FOOTER */}
      <section className="border-t-2 border-gold bg-navy py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href={`/work/${prevStudy.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-navy-mid/75 p-4 transition-all hover:border-gold hover:bg-navy-mid"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-navy-deep">
                <Image
                  src={prevStudy.image}
                  alt={prevStudy.title}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" />
                  <span>Previous Case Study</span>
                </div>
                <p className="mt-1 truncate text-sm font-semibold text-white transition-colors group-hover:text-gold sm:text-base">
                  {prevStudy.title}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-white/60">
                  {prevStudy.category} · {prevStudy.regionCode}
                </p>
              </div>
            </Link>

            <Link
              href={`/work/${nextStudy.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-navy-mid/75 p-4 text-right transition-all hover:border-gold hover:bg-navy-mid"
            >
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                  <span>Next Case Study</span>
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </div>
                <p className="mt-1 truncate text-sm font-semibold text-white transition-colors group-hover:text-gold sm:text-base">
                  {nextStudy.title}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-white/60">
                  {nextStudy.category} · {nextStudy.regionCode}
                </p>
              </div>
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-navy-deep">
                <Image
                  src={nextStudy.image}
                  alt={nextStudy.title}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

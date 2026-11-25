import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "@/data/portfolio";
import { type WorkDomainConfig, getDomainHrefForCategory } from "@/data/workDomains";
import { DisciplineArtwork } from "@/components/ui/DisciplineArtwork";
import { WorkDomainNav } from "@/components/sections/WorkDomainNav";

interface WorkDomainShowcaseProps {
  domain: WorkDomainConfig;
}

export function WorkDomainShowcase({ domain }: WorkDomainShowcaseProps) {
  const featuredCases = domain.featuredSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  const relatedCases = domain.relatedSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter((c): c is CaseStudy => Boolean(c));

  return (
    <div className="bg-canvas text-navy">
      {/* 1. DOMAIN-FINE-TUNED ROYAL NAVY HERO */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-14 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left Copy & Domain Telemetry */}
            <div className="lg:col-span-7">
              <div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-white/75 transition-colors hover:text-gold"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>All Portfolio Domains</span>
                </Link>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span>{domain.eyebrow}</span>
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl leading-[1.06]">
                {domain.headline}{" "}
                <span className="font-editorial text-gold">{domain.headlineAccent}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {domain.description}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-gold/90">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span>Built for: {domain.audienceTag}</span>
              </div>

              {/* 4 Domain Telemetry Tiles */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {domain.telemetrySpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-2xl border border-white/15 bg-navy-mid/90 p-3.5"
                  >
                    <div className="font-mono text-base font-bold text-gold sm:text-lg">
                      {spec.value}
                    </div>
                    <div className="mt-1 text-[11px] leading-snug text-white/75">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Framed Domain Exhibition Artwork */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] border-2 border-gold/45 bg-white/96 p-3 text-navy shadow-[0_24px_60px_rgba(6,16,33,0.45)]">
                <DisciplineArtwork
                  id={domain.artworkId}
                  variant="light"
                  number={domain.artworkNumber}
                  tag={domain.category}
                />
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1.5 pb-1 font-mono text-[10px]">
                  <span className="font-semibold text-navy/80">{domain.audienceTag}</span>
                  <Link
                    href={`/contact?service=${domain.serviceQuery}`}
                    className="inline-flex items-center gap-1 font-bold text-gold-deep hover:underline"
                  >
                    <span>Scope This Domain</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXHIBITION BODY */}
      <section className="bg-surface/65 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 6-Route Domain Pill Navigation Dock */}
          <WorkDomainNav />

          {/* Featured Case Study Spotlight(s) */}
          <div className="space-y-8">
            {featuredCases.map((study) => (
              <article
                key={study.slug}
                className="group overflow-hidden rounded-[26px] border border-navy/12 bg-white p-3 shadow-[0_18px_50px_rgba(10,25,47,0.07)] transition-all hover:border-gold"
              >
                <div className="grid items-stretch gap-6 lg:grid-cols-12">
                  {/* Showcase Image */}
                  <Link
                    href={`/work/${study.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-[18px] bg-navy lg:col-span-6 lg:aspect-auto lg:min-h-[340px]"
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-bold text-navy">
                        {study.regionCode} · {study.year}
                      </span>
                      <span className="rounded-full border border-white/20 bg-navy/90 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                        {study.engagementModel}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                      <span className="font-mono">{study.region}</span>
                      <span className="font-mono text-gold">{study.timeline}</span>
                    </div>
                  </Link>

                  {/* Case Summary & Metrics */}
                  <div className="flex flex-col justify-between p-4 sm:p-6 lg:col-span-6">
                    <div>
                      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                        FLAGSHIP {domain.category.toUpperCase()} CASE STUDY
                      </div>
                      <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                        <Link
                          href={`/work/${study.slug}`}
                          className="transition-colors hover:text-gold-deep"
                        >
                          {study.title}
                        </Link>
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
                        {study.summary}
                      </p>

                      {/* 3 Bold Metrics */}
                      <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-navy/10 bg-surface p-4">
                        {study.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="font-mono text-lg font-bold text-navy sm:text-xl">
                              {m.value}
                            </div>
                            <div className="mt-0.5 text-[11px] leading-snug text-ink-muted">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-navy/10 bg-surface px-3 py-1 font-mono text-[10px] font-medium text-navy/85"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-5">
                      <span className="font-mono text-xs text-ink-muted">
                        Client: <strong className="text-navy">{study.client}</strong>
                      </span>
                      <div className="flex flex-wrap items-center gap-2.5">
                        {study.liveUrl && (
                          <a
                            href={study.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy shadow-sm transition-colors hover:bg-gold-bright"
                          >
                            <span>Visit Live Platform</span>
                            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                          </a>
                        )}
                        <Link
                          href={`/work/${study.slug}`}
                          className="group/btn inline-flex items-center gap-2.5 rounded-full bg-navy py-2 pl-5 pr-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-navy-mid"
                        >
                          <span>Read Full Case Study</span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-200 group-hover/btn:scale-105">
                            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 3. DOMAIN-SPECIFIC ARCHITECTURE & DELIVERABLES BLUEPRINT */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            {/* Left: 4 Domain Architecture Pillars */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Domain Craft Standards
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  {domain.architectureTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {domain.architectureSubtitle}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {domain.architecturePillars.map((pillar) => (
                  <div
                    key={pillar.code}
                    className="rounded-2xl border border-navy/12 bg-white p-5 shadow-xs transition-colors hover:border-gold"
                  >
                    <span className="font-mono text-xs font-bold text-gold-deep">
                      PILLAR // {pillar.code}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-navy">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Deep Royal Navy Deliverables & Engagement Box */}
            <aside className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between rounded-[24px] border-2 border-gold/65 bg-navy bg-navy-blueprint p-6 text-white shadow-[0_24px_60px_rgba(10,25,47,0.22)] sm:p-7">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-navy">
                    <Sparkles className="h-3 w-3" />
                    <span>{domain.category} Deliverables</span>
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    What Ships in Every {domain.category} Engagement
                  </h3>

                  <ul className="mt-5 space-y-2.5 text-sm text-white/90">
                    {domain.deliverableChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border border-white/15 bg-navy-deep/85 p-4">
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Recommended Model: {domain.recommendedTitle}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/75">
                      {domain.recommendedNote}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <Link
                    href={`/contact?service=${domain.serviceQuery}&package=${domain.recommendedPackage}`}
                    className="group flex w-full items-center justify-between rounded-full bg-gold py-2 pl-5 pr-2 text-xs font-bold text-navy transition-all hover:bg-gold-bright"
                  >
                    <span>Start a {domain.category} Project</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-200 group-hover:scale-105">
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.25]" />
                    </span>
                  </Link>
                  <Link
                    href="/packages"
                    className="text-center font-mono text-[11px] font-medium text-white/75 underline decoration-gold/60 underline-offset-4 hover:text-gold"
                  >
                    Compare Hourly · Weekly · Monthly · Yearly Plans
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* 4. CROSS-DOMAIN RELATED CASE STUDIES */}
          {relatedCases.length > 0 && (
            <div className="mt-16 border-t border-navy/12 pt-12">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    Cross-Discipline Continuity
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold text-navy">
                    Explore Related Work Across Other Domains
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="font-mono text-xs font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
                >
                  View All 6 Case Studies →
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {relatedCases.map((rel) => (
                  <article
                    key={rel.slug}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/12 bg-white p-5 shadow-xs transition-all hover:border-gold hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href={getDomainHrefForCategory(rel.category)}
                          className="rounded-full bg-surface px-3 py-1 font-mono text-[10px] font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
                        >
                          {rel.category}
                        </Link>
                        <span className="rounded-full bg-gold px-2.5 py-0.5 font-mono text-[10px] font-bold text-navy">
                          {rel.regionCode}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-navy group-hover:text-gold-deep transition-colors">
                        <Link href={`/work/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                        {rel.summary}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3.5 text-xs">
                      <span className="font-mono text-ink-muted">{rel.region}</span>
                      <Link
                        href={`/work/${rel.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-navy hover:text-gold-deep"
                      >
                        <span>Read Case</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

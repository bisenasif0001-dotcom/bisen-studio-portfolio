import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Globe2,
  Lock,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  ABOUT_FEATURED_ROLES,
  COMBINED_CAPABILITIES,
  GLOBAL_COLLABORATION_REGIONS,
  STUDIO_PROCESS_V2,
  STUDIO_STORY,
  WHY_DIRECT_ITEMS,
} from "@/data/team";
import { CASE_STUDIES } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/site";
import { AboutTeamInteractive } from "@/components/sections/AboutTeamInteractive";

export const metadata: Metadata = {
  title: "About Team — Three Minds. One Vision. Senior Expertise.",
  description:
    "Meet Asif Bisen, Rajpoot Talib, and Azma Bisen—a three-person creative and engineering studio serving clients across the US, UK, Canada, Europe, and Australia with direct senior involvement.",
};

const FEATURED_WORK_SLUGS = [
  "ces-enterprise-event-operations-2026",
  "danielle-rtb-media-website-2026",
  "r80-rugby-print-catalogue",
];

const FEATURED_WORKS = FEATURED_WORK_SLUGS.map((slug) =>
  CASE_STUDIES.find((c) => c.slug === slug)
).filter((c): c is NonNullable<typeof c> => Boolean(c));

const HERO_STATS = [
  { value: "3", label: "Core Team Members" },
  { value: "16+", label: "Years of Lead Craft" },
  { value: "4", label: "Target Market Groups*" },
];

export default function AboutPage() {
  return (
    <div className="bg-canvas text-navy">
      {/* 1. Hero – Meet Bisen Studio */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-16 text-white lg:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <span>MEET THE MINDS BEHIND BISEN STUDIO</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.3rem]">
                Three Minds. One Vision.{" "}
                <span className="font-editorial text-gold">Senior Expertise</span> in Every Project.
              </h1>

              <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold/90">
                Small Team · Senior Expertise · Exceptional Digital Craft
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                We bring together visual craftsmanship, product thinking, and modern software
                engineering to help businesses build meaningful brands and digital products—with
                direct access to the people doing the work.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact?topic=work-with-team"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
                >
                  <span>Work With Our Team</span>
                  <ArrowUpRight className="h-4 w-4 text-navy" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-6 py-3.5 text-sm font-semibold text-white hover:border-gold/70"
                >
                  <span>Explore Our Work</span>
                </Link>
                <a
                  href="#meet-the-team"
                  className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:text-white"
                >
                  <span>Meet the Team ↓</span>
                </a>
              </div>

              {/* Hero Stats Row */}
              <div className="mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-2xl font-bold text-gold sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-white/80 sm:text-[13px]">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-white/60">
                *Target regional groupings: North America (US &amp; Canada), Europe (EU &amp; UK),
                and Australia.
              </p>
            </div>

            {/* Right Studio Visual Frame */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border-2 border-gold/55 bg-navy-deep shadow-2xl">
                <div className="relative aspect-[4/3] w-full bg-navy">
                  <Image
                    src="/images/studio-hero-craft.jpg"
                    alt="Bisen Studio tactile design systems, UI tokens, and software engineering desk"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 p-5 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                      <Users className="h-4 w-4" />
                      <span>Three Principals · One Studio</span>
                    </span>
                    <span className="font-mono text-xs text-white/70">India · Global Delivery</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/85">
                    Asif Bisen, Rajpoot Talib, and Azma Bisen combine print craftsmanship, digital
                    product design, and engineering under direct senior ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story & Philosophy */}
      <section id="our-story" className="scroll-mt-24 bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                {STUDIO_STORY.eyebrow}
              </p>
              <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
                {STUDIO_STORY.headline}
              </h2>
              <div className="mt-6 rounded-2xl border border-navy/12 bg-white p-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                  Experience Clarity
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy/90">
                  {STUDIO_STORY.experienceClarification}
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-7">
              {STUDIO_STORY.paragraphs.map((para) => (
                <p
                  key={para}
                  className="text-[15px] leading-relaxed text-ink-muted sm:text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet the Three Principals */}
      <section id="meet-the-team" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Leadership &amp; Makers
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Meet Your Senior Creative &amp; Engineering Team
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              See who leads creative direction, architecture, engineering, and visual craft—along
              with real case study examples and optional deep-dive skills.
            </p>
          </div>

          <div className="mt-10">
            <AboutTeamInteractive />
          </div>
        </div>
      </section>

      {/* 4. Why Work Directly With Us */}
      <section id="why-direct" className="scroll-mt-24 bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Our Studio Advantage
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Small by Design. Senior by Default.
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
              A focused three-person team means zero telephone game between account managers,
              designers, and engineers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_DIRECT_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy/12 bg-white p-6 shadow-xs"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy font-mono text-xs font-bold text-gold">
                  0{idx + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Combined Capabilities */}
      <section id="capabilities" className="scroll-mt-24 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                One Team · Six Core Disciplines
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
                Our Combined Capabilities
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep shrink-0"
            >
              Explore Full Service Directory →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMBINED_CAPABILITIES.map((cap) => (
              <Link
                key={cap.title}
                href={cap.href}
                className="group flex flex-col justify-between rounded-2xl border border-navy/15 bg-surface p-6 transition-shadow hover:border-gold hover:bg-white hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-gold-deep">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {cap.description}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-navy">
                  <span>Explore Service</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold-deep" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Team Projects */}
      <section id="featured-work" className="scroll-mt-24 bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Proof of Combined Expertise
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
                Work That Represents Us
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                Selected client projects showing exactly how our principals split branding, UI/UX,
                print pre-press, and full-stack engineering responsibilities.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep shrink-0"
            >
              <span>View Full Portfolio ({CASE_STUDIES.length} Case Studies)</span>
              <ArrowUpRight className="h-4 w-4 text-gold-deep" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {FEATURED_WORKS.map((cs) => (
              <article
                key={cs.slug}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-xs transition-shadow hover:border-navy/35 hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-navy">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-navy/90 px-3 py-1 font-mono text-[11px] font-semibold text-white">
                      {cs.regionCode} · {cs.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold leading-snug text-navy">{cs.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-muted line-clamp-3">
                      {cs.summary}
                    </p>
                    <div className="mt-4 rounded-xl border border-navy/10 bg-surface p-3.5">
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                        Team Contribution
                      </span>
                      <p className="mt-1 text-xs font-medium leading-relaxed text-navy">
                        {ABOUT_FEATURED_ROLES[cs.slug] ?? cs.deliverables[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-navy/10 px-6 py-4">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-deep"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 5-Phase Delivery Methodology */}
      <section id="process" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Predictable Execution
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Our 5-Phase{" "}
              <span className="font-editorial text-gold-deep">Delivery</span> Process
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
              A clear, readable progression from kickoff alignment to verified handover—showing
              what we deliver and where your team participates at each milestone.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {STUDIO_PROCESS_V2.map((p) => (
              <div
                key={p.step}
                className="flex flex-col justify-between rounded-2xl border border-navy/15 bg-surface p-5"
              >
                <div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy font-mono text-xs font-bold text-gold">
                    {p.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.description}</p>
                </div>

                <div className="mt-5 space-y-2 border-t border-navy/10 pt-4 text-xs">
                  <div>
                    <span className="font-mono font-semibold uppercase text-gold-deep">
                      Deliverable:{" "}
                    </span>
                    <span className="font-semibold text-navy">{p.deliverable}</span>
                  </div>
                  <div>
                    <span className="font-mono font-semibold uppercase text-ink-muted">
                      Client Role:{" "}
                    </span>
                    <span className="text-ink-muted">{p.clientRole}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Global Collaboration (Honest timezone expectations) */}
      <section
        id="global-collaboration"
        className="scroll-mt-24 border-y-2 border-gold bg-navy bg-navy-blueprint py-16 text-white lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <Globe2 className="h-4 w-4" />
                <span>GLOBAL COLLABORATION</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Based in India. Collaborating Across Borders.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                We support international projects with scheduled meetings, transparent progress
                updates (Loom walkthroughs, shared Figma canvases, and clean Git commits), and
                organized asynchronous collaboration.
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-white/75">
                Note: Live call availability, response windows, and priority support coverage depend
                on your selected engagement plan (Hourly, Weekly Sprint, Monthly Retainer, or Yearly
                Partner).
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?topic=discovery-call"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
                >
                  <span>Schedule a Discovery Call</span>
                  <ArrowUpRight className="h-4 w-4 text-navy" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-gold/45 bg-navy-mid p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                    <CalendarClock className="h-4 w-4 text-gold" />
                    <span>Regional Scheduling &amp; Availability</span>
                  </span>
                  <ShieldCheck className="h-4 w-4 text-gold" />
                </div>
                <div className="mt-4 divide-y divide-white/12">
                  {GLOBAL_COLLABORATION_REGIONS.map((item) => (
                    <div
                      key={item.region}
                      className="flex flex-wrap items-center justify-between gap-2 py-3.5 text-sm"
                    >
                      <div>
                        <span className="font-semibold text-white">{item.region}</span>
                        <span className="ml-2 font-mono text-xs text-white/65">({item.tag})</span>
                      </div>
                      <span className="rounded-md bg-navy px-3 py-1 font-mono text-xs font-semibold text-gold">
                        {item.expectation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Client Feedback & Trust */}
      <section id="client-trust" className="scroll-mt-24 bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Client Feedback &amp; Commercial Trust
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
                Trusted by International Founders &amp; Product Teams
              </h2>
            </div>
            <Link
              href="/policies"
              className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep shrink-0"
            >
              Read All Trust &amp; Legal Policies →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <blockquote
                key={t.author}
                className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-white p-6 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Quote className="h-5 w-5 text-gold-deep" />
                    <span className="rounded-full border border-navy/12 bg-surface px-3 py-1 font-mono text-[11px] font-semibold text-navy">
                      {t.regionTag} · {t.engagement}
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-navy/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <footer className="mt-5 border-t border-navy/10 pt-4">
                  <p className="text-sm font-semibold text-navy">{t.author}</p>
                  <p className="text-[13px] text-ink-muted">
                    {t.role}, {t.company} · {t.location}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Written Contracts, Confidentiality & IP Commitments */}
          <div className="grid gap-4 rounded-2xl border border-navy/15 bg-white p-6 sm:grid-cols-3">
            <Link
              href="/policies/ip-nda-ai"
              className="flex items-start gap-3 rounded-xl p-3 hover:bg-surface"
            >
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="text-sm font-semibold text-navy">Mutual NDA &amp; Confidentiality</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Signed Mutual NDA available prior to discovery before sharing specs or code.
                </p>
              </div>
            </Link>
            <Link
              href="/policies/ip-nda-ai"
              className="flex items-start gap-3 rounded-xl p-3 hover:bg-surface"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="text-sm font-semibold text-navy">Custom IP Ownership Transfer</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Paid custom deliverables transfer 100% upon invoice settlement under clear terms.
                </p>
              </div>
            </Link>
            <Link
              href="/policies/retainer-refund"
              className="flex items-start gap-3 rounded-xl p-3 hover:bg-surface"
            >
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
              <div>
                <p className="text-sm font-semibold text-navy">Transparent Retainer &amp; Notice Terms</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Written workload limits, pause rules, and multi-currency invoicing clarity.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA – Work With Our Team */}
      <section id="work-with-us" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-gold bg-navy bg-navy-blueprint p-8 text-white shadow-xl sm:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Direct Senior Partnership
                </p>
                <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ready to Work Directly With Our 3-Principal Team?
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/82">
                  Tell us about your brand, website, app, SaaS dashboard, or print goals. You will
                  hear directly from Asif Bisen, Rajpoot Talib, or Azma Bisen within 12 business
                  hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-3.5 shrink-0">
                <Link
                  href="/contact?topic=discovery-call"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowUpRight className="h-4 w-4 text-navy" />
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-5 py-3.5 text-sm font-semibold text-white hover:border-gold/70"
                >
                  <span>View Packages &amp; Pricing</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

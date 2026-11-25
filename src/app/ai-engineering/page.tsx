import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AlertCircle,
  ArrowUpRight,
  Bot,
  Check,
  CheckCircle2,
  Cpu,
  LayoutDashboard,
  Layers,
  Lock,
  PlugZap,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  AI_DELIVERABLE_SCOPE,
  AI_ENGAGEMENT_FLOW,
  AI_ENGINEERING_FAQS,
  AI_ENGINEERING_SERVICES,
  AI_ENGINEERING_STANDARDS,
  AI_PIPELINE_STAGES,
  AI_SCOPE_EXPECTATIONS,
  AI_TECH_CAPABILITIES,
  AI_THREE_PILLARS,
  TEAM_AI_RESPONSIBILITIES,
  type AIEngineeringService,
} from "@/data/aiEngineeringCatalog";
import { CASE_STUDIES } from "@/data/portfolio";
import { PACKAGES } from "@/data/packages";
import { TEAM_MEMBERS } from "@/data/team";
import {
  AIEngineeringFaqAccordion,
  AIHeroProductPreview,
} from "@/components/sections/AIEngineeringInteractive";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Engineering & AI-Powered Software Development",
  description:
    "Build AI-powered applications, intelligent dashboards, automation workflows and SaaS products with human-led, AI-accelerated engineering at Bisen Studio.",
};

const SERVICE_ICONS: Record<AIEngineeringService["slug"], React.ComponentType<{ className?: string }>> = {
  "ai-web-apps": Layers,
  "ai-assistants": Bot,
  "ai-automation": Workflow,
  "ai-dashboards": LayoutDashboard,
  "llm-integrations": PlugZap,
  "ai-mvp-development": Rocket,
};

const FEATURED_CASE_SLUGS = [
  "ces-enterprise-event-operations-2026",
  "danielle-rtb-media-website-2026",
  "raj-personal-expenses-tracking-app-v2",
];

const FEATURED_CASES = FEATURED_CASE_SLUGS.map((slug) =>
  CASE_STUDIES.find((c) => c.slug === slug)
).filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function AIEngineeringPage() {
  return (
    <div className="bg-canvas text-navy">
      {/* 1. Hero & Value Proposition */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <span>HUMAN-LED · AI-ACCELERATED ENGINEERING</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
                Build Smarter Software.{" "}
                <span className="font-editorial text-gold">Move Faster With AI.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                From intelligent SaaS platforms and AI assistants to workflow automation and custom
                applications, we combine experienced human judgment with AI-assisted development to
                turn ambitious ideas into reliable digital products.
              </p>

              <p className="mt-4 border-l-2 border-gold pl-4 text-sm font-medium text-gold/95">
                Human Expertise. AI-Accelerated Execution. Software Built for Real-World
                Reliability.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact?service=ai-engineering&topic=ai-engineering-project"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
                >
                  <span>Discuss Your AI Project</span>
                  <ArrowUpRight className="h-4 w-4 text-navy" />
                </Link>
                <a
                  href="#ai-services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-6 py-3.5 text-sm font-semibold text-white hover:border-gold/70"
                >
                  <span>Explore AI Solutions</span>
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5 border-t border-white/15 pt-6">
                {[
                  "Human-Reviewed Code",
                  "Security-Conscious Development",
                  "Scalable Architecture",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-mid/80 px-3.5 py-1.5 text-xs font-semibold text-white/90"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <AIHeroProductPreview />
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI Engineering Services (Placed prominently BEFORE pipeline) */}
      <section id="ai-services" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              OUR AI ENGINEERING CAPABILITIES
            </p>
            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Intelligent Solutions for Modern Businesses.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              From concept to integration, discover what we can build for your business—each scoped
              clearly around real workflows, human oversight, and maintainable software.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AI_ENGINEERING_SERVICES.map((svc) => {
              const Icon = SERVICE_ICONS[svc.slug] ?? Cpu;
              return (
                <article
                  key={svc.slug}
                  className="flex flex-col justify-between rounded-2xl border border-navy/15 bg-white p-6 shadow-xs transition-shadow duration-200 hover:border-navy/35 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-navy/12 bg-surface px-3 py-1 font-mono text-[11px] font-semibold text-navy">
                        AI Engineering
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-navy">{svc.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                      {svc.tagline}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-navy/10 pt-4 text-sm text-navy/85">
                      {svc.capabilities.slice(0, 2).map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-navy/10 pt-4">
                    <Link
                      href={`/ai-engineering/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-gold-deep"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                    </Link>
                    <Link
                      href={`/contact?service=${svc.slug}&topic=${svc.slug}`}
                      className="text-xs font-semibold text-ink-muted underline decoration-gold/70 underline-offset-4 hover:text-navy"
                    >
                      Scope This
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Why Human × AI Works + Engineering Leadership Team */}
      <section id="why-human-ai" className="scroll-mt-24 bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Positioning &amp; Ownership
            </p>
            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Why Human × AI Works Better Together
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted sm:text-base">
              16+ years of software design and delivery craft guides how we use AI—pairing modern
              implementation speed with clear senior human accountability.
            </p>
          </div>

          {/* 3 Strategic Pillars */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {AI_THREE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-navy/12 bg-white p-6 shadow-xs"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  {pillar.eyebrow}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Meet the 3-Principal Engineering & Design Team */}
          <div className="mt-10 rounded-3xl border border-navy/15 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex flex-col justify-between gap-2 border-b border-navy/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  Who Leads Your Project
                </p>
                <h3 className="mt-1.5 text-xl font-semibold text-navy sm:text-2xl">
                  Direct Senior Responsibility — No Anonymous Subcontracting
                </h3>
              </div>
              <Link
                href="/about"
                className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep"
              >
                Meet Full Team Profile →
              </Link>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {TEAM_MEMBERS.map((member) => {
                const resp = TEAM_AI_RESPONSIBILITIES[member.id];
                return (
                  <div
                    key={member.id}
                    className="flex flex-col justify-between rounded-2xl border border-navy/10 bg-surface p-5"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy font-mono text-sm font-bold text-gold">
                          {member.initials}
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-navy">{member.name}</h4>
                          <p className="text-xs font-medium text-gold-deep">{member.experience}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm font-semibold text-navy">
                        {resp?.focus ?? member.role}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {resp?.responsibility ?? member.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured AI Engineering Work */}
      <section id="featured-projects" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Published Studio Engagements
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
                Real Products. Practical AI. Measurable Impact.
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                Completed Bisen Studio engagements built using our human-led, AI-accelerated
                design and engineering pipeline.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep shrink-0"
            >
              <span>Browse Full Portfolio ({CASE_STUDIES.length} Cases)</span>
              <ArrowUpRight className="h-4 w-4 text-gold-deep" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {FEATURED_CASES.map((cs) => (
              <article
                key={cs.slug}
                className="flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-xs transition-shadow duration-200 hover:border-navy/35 hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-3.5">
                      <span className="rounded-full bg-navy/90 px-3 py-1 font-mono text-[11px] font-semibold text-white">
                        {cs.regionCode} · {cs.category}
                      </span>
                      <span className="rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-bold text-navy">
                        {cs.engagementModel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="font-mono text-xs font-medium text-gold-deep">{cs.timeline}</p>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug text-navy">
                      {cs.title}
                    </h3>

                    <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-muted">
                      <p>
                        <strong className="text-navy">Challenge:</strong> {cs.challenge}
                      </p>
                      <p>
                        <strong className="text-navy">Solution:</strong> {cs.solution}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cs.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-navy/10 bg-surface px-2.5 py-1 font-mono text-[11px] text-navy"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-navy/10 bg-surface p-3.5">
                      {cs.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <p className="font-mono text-base font-bold text-navy">{m.value}</p>
                          <p className="text-xs leading-tight text-ink-muted">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-navy/10 px-6 py-4">
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-deep"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-[13px] text-ink-muted">
            Additional confidential AI automation and internal assistant architectures can be walked
            through privately during discovery under Mutual NDA.
          </p>
        </div>
      </section>

      {/* 5. 4-Stage Human-Led, AI-Accelerated Development Process */}
      <section id="pipeline" className="scroll-mt-24 bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              HOW WE GUARANTEE QUALITY AT SPEED
            </p>
            <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-navy sm:text-4xl">
              Our Human-Led, AI-Accelerated{" "}
              <span className="font-editorial text-gold-deep">Development Process</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {AI_PIPELINE_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="flex flex-col justify-between rounded-2xl border border-navy/12 bg-white p-7 shadow-xs transition-colors hover:border-gold"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-gold-deep">{stage.step}</span>
                    <span className="rounded-full border border-navy/12 bg-surface px-3 py-1 font-mono text-[11px] font-medium text-navy">
                      {stage.owner}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-navy">{stage.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-navy/10 pt-4">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-navy px-3.5 py-1.5 font-mono text-xs font-semibold text-gold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Output: {stage.output}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Honest Scope Expectations + Deliverables + Technical Capabilities */}
      <section id="scope-and-stack" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Realistic Scheduling &amp; Scope Planning
              </p>
              <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Accelerated Development.{" "}
                <span className="font-editorial text-gold-deep">
                  Without Compromising Engineering Discipline.
                </span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                Every software build varies with integrations, data sensitivity, and review cycles.
                Instead of one-size-fits-all timelines, we confirm exact delivery estimates after a
                short discovery review.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-navy/15 bg-white shadow-xs">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-navy/15 bg-navy font-mono text-xs uppercase tracking-wider text-white">
                      <th className="p-4">Project Type</th>
                      <th className="p-4">Typical Scope</th>
                      <th className="bg-navy-mid p-4 text-gold">Estimated Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/10">
                    {AI_SCOPE_EXPECTATIONS.map((row) => (
                      <tr key={row.projectType} className="hover:bg-surface/65">
                        <td className="p-4 font-semibold text-navy">{row.projectType}</td>
                        <td className="p-4 text-ink-muted">{row.typicalScope}</td>
                        <td className="bg-gold-tint/70 p-4 font-mono text-xs font-bold text-navy">
                          {row.timeline}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-[13px] text-ink-muted">
                For actual delivery timelines achieved on scoped builds (such as 3–7 weeks across
                Northstar Ledger, Velox Cloud, and VerveHealth), review our{" "}
                <Link
                  href="/work"
                  className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold-deep"
                >
                  published case studies
                </Link>
                .
              </p>
            </div>

            {/* Project Scope, Deliverables & Exclusions */}
            <div className="flex flex-col justify-between rounded-2xl border border-navy/15 bg-surface p-6 lg:col-span-5">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  Scope &amp; Deliverables Clarity
                </p>
                <h3 className="mt-2 text-xl font-semibold text-navy">
                  What Every Engagement Delivers
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-navy/90">
                  {AI_DELIVERABLE_SCOPE.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-navy/12 pt-5">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-navy">
                    <AlertCircle className="h-4 w-4 text-gold-deep" />
                    <span>Excluded / Client-Owned Costs</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[13px] text-ink-muted">
                    {AI_DELIVERABLE_SCOPE.excluded.map((ex) => (
                      <li key={ex} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Capabilities Grid */}
          <div>
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Technical Capabilities
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-navy">
                Modern Full-Stack &amp; AI Engineering Stack
              </h3>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {AI_TECH_CAPABILITIES.map((cap) => (
                <div
                  key={cap.group}
                  className="rounded-2xl border border-navy/12 bg-surface p-5"
                >
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep">
                    {cap.group}
                  </h4>
                  <ul className="mt-3.5 space-y-2 text-sm leading-relaxed text-navy/85">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Engineering Standards & Responsible AI Panel (Replaces JSON manifest) */}
      <section
        id="engineering-standards"
        className="scroll-mt-24 border-y-2 border-gold bg-navy bg-navy-blueprint py-16 text-white lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Security &amp; Responsible AI Governance
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                Engineering Standards
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-white/82">
                How we approach quality, data confidentiality, and responsible AI development —
                backed by written project agreements rather than vague slogans.
              </p>
            </div>
            <Link
              href="/policies/ip-nda-ai"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/55 bg-navy-mid px-5 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-navy shrink-0"
            >
              <Lock className="h-4 w-4" />
              <span>Read Documented IP, NDA &amp; AI Policy</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AI_ENGINEERING_STANDARDS.map((std) => (
              <div
                key={std.title}
                className="rounded-2xl border border-white/15 bg-navy-deep/85 p-6"
              >
                <ShieldCheck className="h-6 w-6 text-gold" />
                <h3 className="mt-4 text-lg font-semibold text-white">{std.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{std.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. How Engagement Works + Packages & Engagement Models */}
      <section id="engagement-models" className="scroll-mt-24 bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                How Engagement Works
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                From Technical Consultation to Documented Handover
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AI_ENGAGEMENT_FLOW.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-navy/12 bg-white p-5 shadow-xs"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-navy font-mono text-xs font-bold text-gold">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Flexible Packages Strip */}
          <div>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Flexible Engagement Models
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-navy">
                  Start With the Engagement Cadence That Fits Your Roadmap
                </h3>
              </div>
              <Link
                href="/packages"
                className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-deep shrink-0"
              >
                Compare All Package Rules &amp; Budget Estimator →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={cn(
                    "flex flex-col justify-between rounded-2xl border p-5",
                    pkg.recommended
                      ? "border-2 border-gold bg-navy text-white"
                      : "border-navy/15 bg-white text-navy"
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        "font-mono text-[11px] font-bold uppercase tracking-wider",
                        pkg.recommended ? "text-gold" : "text-gold-deep"
                      )}
                    >
                      {pkg.tierTag}
                    </span>
                    <h4 className="mt-1.5 text-lg font-semibold">{pkg.name}</h4>
                    <p
                      className={cn(
                        "mt-2 font-mono text-2xl font-bold",
                        pkg.recommended ? "text-gold" : "text-navy"
                      )}
                    >
                      ${pkg.usdPrice.toLocaleString("en-US")}{" "}
                      <span
                        className={cn(
                          "text-xs font-normal",
                          pkg.recommended ? "text-white/75" : "text-ink-muted"
                        )}
                      >
                        {pkg.unitLabel} USD
                      </span>
                    </p>
                    <p
                      className={cn(
                        "mt-2 text-xs leading-relaxed",
                        pkg.recommended ? "text-white/80" : "text-ink-muted"
                      )}
                    >
                      {pkg.capacitySummary}
                    </p>
                  </div>

                  <Link
                    href={`/contact?package=${pkg.id}&service=ai-engineering&topic=${pkg.id}-ai-project`}
                    className={cn(
                      "mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold",
                      pkg.recommended
                        ? "bg-gold text-navy hover:bg-gold-bright"
                        : "bg-navy text-white hover:bg-navy-mid"
                    )}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. AI Engineering FAQs */}
      <section id="ai-faq" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Questions Answered
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              AI Engineering, IP Ownership &amp; Cost FAQ
            </h2>
          </div>

          <div className="mt-8">
            <AIEngineeringFaqAccordion faqs={AI_ENGINEERING_FAQS} />
          </div>
        </div>
      </section>

      {/* 10. Final Consultation CTA */}
      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-gold bg-navy bg-navy-blueprint p-8 text-white shadow-xl sm:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Senior Technical Consultation · 12h Response SLA
                </p>
                <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Discuss Your AI Engineering Project
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/82">
                  Tell us what you want to automate, integrate, or ship. You will hear directly
                  from Asif Bisen, Rajpoot Talib, or Azma Bisen with clear scope options and honest
                  timeline guidance.
                </p>
              </div>
              <div className="flex flex-wrap gap-3.5 shrink-0">
                <Link
                  href="/contact?service=ai-engineering&topic=technical-consultation"
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
                >
                  <span>Request a Technical Consultation</span>
                  <ArrowUpRight className="h-4 w-4 text-navy" />
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-5 py-3.5 text-sm font-semibold text-white hover:border-gold/70"
                >
                  <span>Explore Packages</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

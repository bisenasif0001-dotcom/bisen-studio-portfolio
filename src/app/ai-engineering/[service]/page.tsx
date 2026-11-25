import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import {
  AI_ENGINEERING_SERVICES,
  getAIEngineeringServiceBySlug,
  getAllAIEngineeringServiceSlugs,
} from "@/data/aiEngineeringCatalog";
import { CASE_STUDIES } from "@/data/portfolio";
import { AIEngineeringFaqAccordion } from "@/components/sections/AIEngineeringInteractive";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return getAllAIEngineeringServiceSlugs().map((service) => ({ service }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getAIEngineeringServiceBySlug(slug);
  if (!service) {
    return { title: "AI Engineering Service Not Found" };
  }
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function AIEngineeringServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getAIEngineeringServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedCase =
    CASE_STUDIES.find((c) => c.slug === service.relatedCaseSlug) ?? CASE_STUDIES[0];

  return (
    <div className="bg-canvas text-navy">
      {/* Hero */}
      <section className="border-b-2 border-gold bg-navy bg-navy-blueprint py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 font-mono text-xs text-white/70"
          >
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span>/</span>
            <Link href="/ai-engineering" className="hover:text-gold">
              AI Engineering
            </Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </nav>

          <div className="mt-6 max-w-4xl">
            <span className="inline-flex rounded-full border border-gold/45 bg-navy-mid px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {service.badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
              {service.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href={`/contact?service=${service.slug}&topic=${service.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright"
              >
                <span>Request a Technical Consultation</span>
                <ArrowUpRight className="h-4 w-4 text-navy" />
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-navy-mid px-6 py-3.5 text-sm font-semibold text-white hover:border-gold/70"
              >
                <span>View Packages &amp; Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling AI Service Switcher Strip */}
      <section className="border-b border-navy/10 bg-surface py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 sm:px-6 lg:px-8">
          <Link
            href="/ai-engineering"
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy/15 bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-navy/40"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All AI Engineering</span>
          </Link>
          {AI_ENGINEERING_SERVICES.map((item) => {
            const active = item.slug === service.slug;
            return (
              <Link
                key={item.slug}
                href={`/ai-engineering/${item.slug}`}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-xs font-semibold",
                  active
                    ? "border-navy bg-navy text-gold"
                    : "border-navy/12 bg-white text-ink-muted hover:text-navy"
                )}
              >
                {item.shortTitle}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Capabilities, Deliverables & Exclusions */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: What We Build & Deliverables */}
            <div className="space-y-8 lg:col-span-7">
              <div className="rounded-2xl border border-navy/12 bg-white p-6 shadow-xs sm:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  Core Engineering Capabilities
                </p>
                <h2 className="mt-2 text-2xl font-bold text-navy">What We Build</h2>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-navy/90">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-navy/10 pt-6">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-navy">
                    Ideal Clients &amp; Use Cases
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                    {service.idealFor.map((fit) => (
                      <li key={fit} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                        <span>{fit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-navy/12 bg-surface p-6 sm:p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  Concrete Deliverables &amp; Handover
                </p>
                <h2 className="mt-2 text-2xl font-bold text-navy">What You Receive</h2>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-navy/90">
                  {service.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-navy/12 bg-white p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-navy">
                    <AlertCircle className="h-4 w-4 text-gold-deep" />
                    <span>Excluded / Client-Owned Costs</span>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[13px] text-ink-muted">
                    {service.exclusions.map((ex) => (
                      <li key={ex}>• {ex}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Stack, Engagement Fit & Related Case Study */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-navy/15 bg-navy p-6 text-white">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  Technology &amp; Governance
                </p>
                <h3 className="mt-2 text-xl font-semibold">Stack &amp; Engagement Fit</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/15 bg-navy-mid px-3 py-1 font-mono text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-5 border-t border-white/15 pt-4 text-sm leading-relaxed text-white/85">
                  <strong className="text-gold">Recommended Cadence:</strong>{" "}
                  {service.engagementFit}
                </p>
                <div className="mt-5">
                  <Link
                    href={`/contact?service=${service.slug}&topic=${service.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-bold text-navy hover:bg-gold-bright"
                  >
                    <span>Discuss {service.shortTitle} Scope</span>
                    <ArrowUpRight className="h-4 w-4 text-navy" />
                  </Link>
                </div>
              </div>

              {/* Related Studio Case Study */}
              <div className="overflow-hidden rounded-2xl border border-navy/12 bg-white shadow-xs">
                <div className="relative aspect-[16/10] w-full bg-navy">
                  <Image
                    src={relatedCase.image}
                    alt={relatedCase.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                    Related Studio Case Study
                  </span>
                  <h3 className="mt-1.5 text-lg font-semibold text-navy">{relatedCase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">
                    {relatedCase.summary}
                  </p>
                  <Link
                    href={`/work/${relatedCase.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-deep"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="h-4 w-4 text-gold-deep" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service FAQs */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-center text-2xl font-bold text-navy">
              Common Questions About {service.shortTitle}
            </h2>
            <div className="mt-6">
              <AIEngineeringFaqAccordion faqs={service.faqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

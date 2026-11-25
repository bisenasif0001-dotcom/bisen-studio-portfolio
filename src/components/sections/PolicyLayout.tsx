import React from "react";
import Link from "next/link";
import { ArrowLeft, FileCheck2, ShieldAlert } from "lucide-react";

const POLICY_NAV = [
  { label: "Trust Center Overview", href: "/policies" },
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Terms of Service", href: "/policies/terms" },
  { label: "Retainer & Refund Policy", href: "/policies/retainer-refund" },
  { label: "IP Ownership, NDA & AI Ethics", href: "/policies/ip-nda-ai" },
  { label: "Cookie Policy", href: "/policies/cookies" },
  { label: "Accessibility Statement", href: "/policies/accessibility" },
];

interface PolicyLayoutProps {
  activePath: string;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  jurisdictions: string[];
  summary: string;
  children: React.ReactNode;
}

export function PolicyLayout({
  activePath,
  eyebrow,
  title,
  lastUpdated,
  jurisdictions,
  summary,
  children,
}: PolicyLayoutProps) {
  return (
    <div className="bg-surface text-navy">
      {/* Editorial Navy Header */}
      <div className="border-b-2 border-gold bg-navy bg-navy-blueprint text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/policies"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-white/75 hover:text-gold transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Trust Center</span>
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/78">{summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-mono text-xs font-bold text-navy">
              <FileCheck2 className="h-3.5 w-3.5" />
              <span>Effective: {lastUpdated}</span>
            </span>
            {jurisdictions.map((j) => (
              <span
                key={j}
                className="rounded-full border border-white/20 bg-navy-mid px-3 py-1 font-mono text-[11px] text-white/85"
              >
                {j}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body + Sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-26 rounded-2xl border border-navy/12 bg-white p-5 shadow-sm">
              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Legal &amp; Governance
              </h2>
              <nav aria-label="Policy documents" className="mt-4 flex flex-col space-y-1">
                {POLICY_NAV.map((item) => {
                  const isActive = item.href === activePath;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-navy text-white border-l-4 border-gold"
                          : "text-ink-muted hover:bg-surface hover:text-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Legal Prose */}
          <div className="lg:col-span-9">
            <div className="space-y-8 rounded-3xl border border-navy/12 bg-white p-6 text-[15px] leading-relaxed text-navy/85 shadow-sm sm:p-10">
              {children}

              {/* Standard Counsel Review Notice */}
              <div className="mt-10 rounded-2xl border border-gold/60 bg-gold-tint p-5 text-xs leading-relaxed text-navy">
                <div className="flex items-center gap-2 font-semibold text-navy">
                  <ShieldAlert className="h-4 w-4 shrink-0 text-gold-deep" />
                  <span>Commercial Notice &amp; Custom Enterprise Agreements</span>
                </div>
                <p className="mt-1.5 text-navy/85">
                  This policy reflects Bisen Studio&apos;s operational standards for international
                  clients across the United States, Europe, the United Kingdom, Australia, and
                  Canada. Enterprise clients requiring custom Master Service Agreements (MSA), Data
                  Processing Addendums (DPA), or region-specific legal clauses may request review
                  with our team prior to engagement commencement at{" "}
                  <a href="mailto:hello@bisenstudio.com" className="font-semibold underline">
                    hello@bisenstudio.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

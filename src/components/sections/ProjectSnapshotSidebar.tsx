"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Copy, Lock, Mail, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import {
  BUDGET_OPTIONS_BY_ENGAGEMENT,
  ENGAGEMENT_OPTIONS,
  INTAKE_CATEGORIES,
  type IntakeCategoryId,
  type IntakeEngagementId,
} from "@/data/projectIntakeCatalog";
import { cn } from "@/lib/utils";

export interface ProjectSnapshotProps {
  selectedCategories: IntakeCategoryId[];
  specificServiceTitle: string | null;
  subCategoryName: string | null;
  portfolioTitle: string | null;
  engagement: IntakeEngagementId;
  budget: string;
  timeline: string;
  filesCount: number;
  linksCount: number;
  summaryTextForCopy: string;
}

export function ProjectSnapshotSidebar({
  selectedCategories,
  specificServiceTitle,
  subCategoryName,
  portfolioTitle,
  engagement,
  budget,
  timeline,
  filesCount,
  linksCount,
  summaryTextForCopy,
}: ProjectSnapshotProps) {
  const [copied, setCopied] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const categoryNames =
    selectedCategories.length > 0
      ? selectedCategories
          .map((id) => INTAKE_CATEGORIES.find((c) => c.id === id)?.label ?? id)
          .join(" + ")
      : "Not yet selected";

  const engagementLabel =
    ENGAGEMENT_OPTIONS.find((e) => e.id === engagement)?.label ?? "Help Me Choose";

  const budgetLabel =
    BUDGET_OPTIONS_BY_ENGAGEMENT[engagement]?.find((b) => b.value === budget)?.label ??
    "To be discussed";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryTextForCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable in restricted context
    }
  };

  const snapshotRows = (
    <div className="space-y-3 text-sm">
      <div className="rounded-xl border border-navy/10 bg-surface p-3.5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-gold-deep">
          Selected Focus
        </p>
        <p className="mt-1 font-semibold text-navy">
          {specificServiceTitle || categoryNames}
        </p>
        {(subCategoryName || (specificServiceTitle && selectedCategories.length > 0)) && (
          <p className="mt-0.5 text-xs text-ink-muted">
            {categoryNames}
            {subCategoryName ? ` · ${subCategoryName}` : ""}
          </p>
        )}
        {portfolioTitle && (
          <p className="mt-1.5 rounded-md bg-white px-2.5 py-1 text-xs font-medium text-navy">
            Similar to: {portfolioTitle.split(" — ")[0]}
          </p>
        )}
      </div>

      <dl className="divide-y divide-navy/10 text-[13px]">
        <div className="flex items-center justify-between gap-3 py-2.5">
          <dt className="text-ink-muted">Engagement</dt>
          <dd className="text-right font-semibold text-navy">{engagementLabel}</dd>
        </div>
        <div className="flex items-center justify-between gap-3 py-2.5">
          <dt className="text-ink-muted">Budget Range</dt>
          <dd className="text-right font-semibold text-navy">{budgetLabel}</dd>
        </div>
        <div className="flex items-center justify-between gap-3 py-2.5">
          <dt className="text-ink-muted">Timeline</dt>
          <dd className="text-right font-semibold text-navy">{timeline}</dd>
        </div>
        <div className="flex items-center justify-between gap-3 py-2.5">
          <dt className="text-ink-muted">References</dt>
          <dd className="text-right font-semibold text-navy">
            {filesCount} file{filesCount === 1 ? "" : "s"} · {linksCount} link
            {linksCount === 1 ? "" : "s"}
          </dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-navy/15 bg-surface px-3.5 py-2.5 text-xs font-semibold text-navy hover:border-gold hover:bg-white"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-gold-deep" />
            <span>Brief Summary Copied</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5 text-gold-deep" />
            <span>Copy Brief Summary</span>
          </>
        )}
      </button>
    </div>
  );

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Mobile Collapsible Snapshot */}
      <div className="rounded-2xl border border-navy/15 bg-white shadow-xs lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between gap-3 p-4 text-left"
        >
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Your Project Snapshot
            </p>
            <p className="mt-0.5 text-sm font-semibold text-navy">
              {specificServiceTitle || categoryNames} · {engagementLabel}
            </p>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-navy transition-transform duration-150",
              mobileOpen && "rotate-180"
            )}
          />
        </button>
        {mobileOpen && <div className="border-t border-navy/10 p-4">{snapshotRows}</div>}
      </div>

      {/* Desktop Sticky Snapshot Card */}
      <div className="hidden rounded-2xl border border-navy/15 bg-white p-6 shadow-sm lg:block">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Your Project Snapshot
        </p>
        <div className="mt-4">{snapshotRows}</div>
      </div>

      {/* Direct Communication Card */}
      <div className="rounded-2xl border border-navy/12 bg-white p-6 shadow-xs">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Direct Studio Communication
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Your inquiry goes directly to Asif Bisen, Rajpoot Talib, and Azma Bisen.
        </p>
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-navy/10 bg-surface p-3.5 text-sm">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
          <div>
            <p className="text-xs text-ink-muted">Prefer email directly?</p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-semibold text-navy hover:text-gold-deep"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Trust & Confidentiality Panel (Qualified Claims) */}
      <div className="rounded-2xl border-2 border-gold bg-navy p-6 text-white shadow-lg">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
          <Lock className="h-4 w-4" />
          <span>Confidential, No-Obligation Discussion</span>
        </div>
        <ul className="mt-3.5 space-y-2.5 text-xs leading-relaxed text-white/85">
          <li className="flex items-start gap-2">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
            <span>We aim to respond within 1 business day (target ~12 business hours)</span>
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
            <span>Request an NDA before sharing confidential details</span>
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
            <span>Ownership terms defined clearly in your written agreement</span>
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
            <span>No unsolicited marketing without your consent</span>
          </li>
        </ul>
        <Link
          href="/policies"
          className="mt-4 inline-block font-mono text-[11px] text-gold underline underline-offset-4 hover:text-white"
        >
          Review Trust Center &amp; Policies →
        </Link>
      </div>
    </div>
  );
}

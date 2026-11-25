"use client";

import React, { useState } from "react";
import {
  Bot,
  CheckCircle2,
  ChevronDown,
  FileSearch,
  GitBranch,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import type { ServiceFAQ } from "@/data/aiEngineeringCatalog";
import { cn } from "@/lib/utils";

type PreviewTab = "assistant" | "automation" | "analytics";

const PREVIEW_TABS: { id: PreviewTab; label: string }[] = [
  { id: "assistant", label: "AI Assistant" },
  { id: "automation", label: "Workflow Automation" },
  { id: "analytics", label: "AI Analytics" },
];

export function AIHeroProductPreview() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("assistant");

  return (
    <div className="rounded-3xl border-2 border-gold/55 bg-navy-deep p-5 text-white shadow-2xl sm:p-6">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/12 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-white/85">
          <Bot className="h-4 w-4 text-gold" />
          <span>Solution Workspace Preview</span>
        </div>
        <span className="rounded-full border border-gold/45 bg-navy-mid px-3 py-1 font-mono text-[11px] font-semibold text-gold">
          Human-Supervised UI
        </span>
      </div>

      {/* Interactive Tabs */}
      <div
        className="mt-4 grid grid-cols-3 gap-1.5 rounded-xl border border-white/12 bg-navy p-1.5"
        role="tablist"
        aria-label="Preview AI solution types"
      >
        {PREVIEW_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "transition-none rounded-lg px-2.5 py-2 text-center text-xs font-semibold",
                isActive
                  ? "bg-gold text-navy shadow-xs"
                  : "text-white/80 hover:bg-navy-mid hover:text-white"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active Preview Surface */}
      <div className="mt-4 rounded-2xl border border-white/15 bg-white p-4 text-navy sm:p-5">
        {activeTab === "assistant" && (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                <FileSearch className="h-3.5 w-3.5" />
                <span>Grounded Knowledge Assistant</span>
              </span>
              <span className="rounded-full border border-navy/15 bg-surface px-2.5 py-0.5 font-mono text-[11px] font-semibold text-navy">
                Source Cited
              </span>
            </div>

            <div className="rounded-xl border border-navy/10 bg-surface p-3 text-[13px] text-navy">
              <span className="font-semibold text-navy">Team Query:</span>{" "}
              &ldquo;What notice period applies if we pause a Monthly Studio Retainer?&rdquo;
            </div>

            <div className="rounded-xl border border-navy/15 bg-white p-3.5 text-[13px] leading-relaxed text-ink-muted shadow-2xs">
              Monthly retainers pause or cancel with{" "}
              <strong className="text-navy">14 days&apos; written notice</strong> prior to the
              next billing cycle.
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-navy/10 pt-2 text-xs">
                <span className="font-mono font-semibold text-navy">
                  Ref: Retainer Policy §2.4
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-gold-deep">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Human Escalation Ready</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "automation" && (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                <GitBranch className="h-3.5 w-3.5" />
                <span>Document Triage Pipeline</span>
              </span>
              <span className="rounded-full border border-navy/15 bg-surface px-2.5 py-0.5 font-mono text-[11px] font-semibold text-navy">
                Approval Gate
              </span>
            </div>

            <div className="space-y-2 text-[13px]">
              {[
                { label: "1. Parse Inbound Vendor PDF", status: "Extracted" },
                { label: "2. Validate Line Items & Tax ID", status: "Schema Match" },
                { label: "3. Finance Lead Sign-Off Queue", status: "Ready for Review" },
              ].map((step) => (
                <div
                  key={step.label}
                  className="flex items-center justify-between gap-2 rounded-xl border border-navy/10 bg-surface px-3 py-2"
                >
                  <span className="font-medium text-navy">{step.label}</span>
                  <span className="font-mono text-[11px] font-semibold text-gold-deep">
                    {step.status}
                  </span>
                </div>
              ))}
            </div>

            <p className="border-t border-navy/10 pt-2 text-xs text-ink-muted">
              Structured validation runs before CRM or accounting ERP writebacks execute.
            </p>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-3.5">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-deep">
                <LineChart className="h-3.5 w-3.5" />
                <span>Executive Narrative Summary</span>
              </span>
              <span className="rounded-full border border-navy/15 bg-surface px-2.5 py-0.5 font-mono text-[11px] font-semibold text-navy">
                SQL Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-navy/10 bg-surface p-3">
                <p className="font-mono text-[11px] uppercase text-ink-muted">Computed MRR</p>
                <p className="mt-1 font-mono text-lg font-bold text-navy">Deterministic SQL</p>
              </div>
              <div className="rounded-xl border border-navy/10 bg-surface p-3">
                <p className="font-mono text-[11px] uppercase text-ink-muted">Summary Layer</p>
                <p className="mt-1 font-mono text-lg font-bold text-gold-deep">Plain English</p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-xl border border-navy/10 bg-surface p-3 text-xs leading-relaxed text-ink-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
              <span>
                Backend SQL queries compute verified metrics; AI translates changes into clear
                weekly executive notes.
              </span>
            </div>
          </div>
        )}
      </div>

      <p className="mt-3.5 text-center font-mono text-[11px] text-white/75">
        Conceptual capability preview · See completed studio work in Featured Projects below.
      </p>
    </div>
  );
}

export function AIEngineeringFaqAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={faq.question}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white transition-colors duration-150",
              isOpen ? "border-navy shadow-sm" : "border-navy/12"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-navy">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-gold-deep transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="border-t border-navy/10 bg-surface/55 px-6 pb-5 pt-4 text-[15px] leading-relaxed text-ink-muted">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

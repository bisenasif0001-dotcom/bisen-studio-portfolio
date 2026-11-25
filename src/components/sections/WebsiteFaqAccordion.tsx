"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface WebsiteFaqAccordionProps {
  subjectTitle: string;
  turnaround: string;
  stackSpec: string;
  slaOrOutputSpec?: string;
}

export function WebsiteFaqAccordion({
  subjectTitle,
  turnaround,
  stackSpec,
  slaOrOutputSpec,
}: WebsiteFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: `Do we receive full source code and Git IP ownership for ${subjectTitle}?`,
      answer: `Yes—every line of code, Figma file, infrastructure script, and CMS schema built (${stackSpec}${slaOrOutputSpec ? ` targeting ${slaOrOutputSpec}` : ""}) transfers 100% into your organization's Git repository with zero proprietary lock-in or licensing fees.`,
    },
    {
      question: `How do you protect SEO rankings and Core Web Vitals (${turnaround})?`,
      answer: `Before switching DNS, we audit all indexed Google URLs, map clean 301 redirects, preserve structured JSON-LD & canonical metadata, and run staging Lighthouse / CrUX field verification across desktop and mobile.`,
    },
    {
      question: "Who builds our website and how do communication & timezones work?",
      answer:
        "Your project is designed and coded directly by our 3-member senior unit (Asif Bisen, Rajpoot Talib, and Azma Bisen)—never outsourced to junior freelancers. We guarantee a 12-hour response SLA with dedicated call windows across US, UK, Europe, Australia, and Canada.",
    },
    {
      question: `Can you maintain, secure, or scale ${subjectTitle} after launch?`,
      answer:
        "Yes. You can add our Monthly Maintenance & Support plan, ongoing A/B conversion sprints, or transition smoothly into a full Monthly Web Partner retainer for continuous features, integrations, and technical SEO growth.",
    },
  ];

  return (
    <section
      aria-label="Website Engineering FAQ"
      className="rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          TECHNICAL CLARITY // FAQ
        </p>
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy">
          Common Questions Before Launch
        </h2>
      </div>

      <div className="mt-6 divide-y divide-navy/10 border-t border-navy/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="py-4">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-semibold text-navy sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-gold-deep transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <p className="mt-2.5 pr-6 text-xs leading-relaxed text-ink-muted sm:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

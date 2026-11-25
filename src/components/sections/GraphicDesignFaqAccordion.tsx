"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface GraphicDesignFaqAccordionProps {
  subjectTitle: string;
  turnaround: string;
  nativeFormats: string;
  colorOrOutputSpec?: string;
}

export function GraphicDesignFaqAccordion({
  subjectTitle,
  turnaround,
  nativeFormats,
  colorOrOutputSpec,
}: GraphicDesignFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: `What native source files and IP rights do we receive for ${subjectTitle}?`,
      answer: `Every engagement includes 100% client intellectual property ownership upon final invoice settlement along with all clean, editable source masters (${nativeFormats}${colorOrOutputSpec ? ` calibrated to ${colorOrOutputSpec}` : ""})—never locked proprietary files.`,
    },
    {
      question: `How fast is delivery (${turnaround}) and how do revisions work?`,
      answer: `First strategic concepts typically ship within 48–72 hours, with full production handoff averaging ${turnaround}. Every milestone includes structured iteration rounds so typography, layouts, and color tolerances sign off cleanly without endless back-and-forth.`,
    },
    {
      question: "Who actually designs our deliverables?",
      answer:
        "You work directly with Bisen Studio's senior 3-person atelier (Asif Bisen, Rajpoot Talib, and Azma Bisen)—bringing 16+ years of brand identity, CMYK offset pre-press, packaging engineering, and UI/motion experience with zero junior outsourcing.",
    },
    {
      question: `Can we bundle ${subjectTitle} with website development or ongoing monthly support?`,
      answer:
        "Yes. Many North American, UK, European, and Australian startups begin with a focused Weekly Sprint and transition seamlessly into a Monthly Studio Retainer pairing brand/print graphics directly with Next.js websites, dashboards, or campaigns.",
    },
  ];

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="rounded-[24px] border border-navy/12 bg-white p-6 shadow-xs sm:p-8"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          BUYER CLARITY // FAQ
        </p>
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-navy">
          Common Questions Before You Brief
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

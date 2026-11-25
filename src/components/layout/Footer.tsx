"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { BrandMark } from "@/components/layout/BrandMark";
import { SITE_CONFIG } from "@/data/site";
import { useCookieConsent } from "@/components/context/CookieConsentContext";

const POLICY_LINKS = [
  { label: "Trust Center Overview", href: "/policies" },
  { label: "Privacy Policy (GDPR / CCPA)", href: "/policies/privacy" },
  { label: "Terms of Service", href: "/policies/terms" },
  { label: "Retainer & Refund Policy", href: "/policies/retainer-refund" },
  { label: "IP Ownership, NDA & AI Ethics", href: "/policies/ip-nda-ai" },
  { label: "Cookie Policy", href: "/policies/cookies" },
  { label: "Accessibility (WCAG 2.1 AA)", href: "/policies/accessibility" },
];

export function Footer() {
  const { openSettings } = useCookieConsent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gold bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Studio Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">
                  {SITE_CONFIG.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                  Design · Print · AI Engineering
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/72">
              A principal-only 3-member creative &amp; engineering studio—
              <strong className="font-medium text-white">Asif Bisen</strong>,{" "}
              <strong className="font-medium text-white">Rajpoot Talib</strong>, and{" "}
              <strong className="font-medium text-white">Azma Bisen</strong>—bringing 16+ years of
              digital, print, web, app &amp; dashboard mastery accelerated by AI coding workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SITE_CONFIG.markets.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-white/15 bg-navy-mid px-3 py-1 font-mono text-[11px] text-white/85"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 text-gold" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <p className="mt-1 font-mono text-xs text-white/50">
                Response SLA: {SITE_CONFIG.responseSla}
              </p>
              <a
                href={SITE_CONFIG.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-navy-mid px-3.5 py-1.5 font-mono text-[11px] font-semibold text-gold transition-colors hover:bg-gold hover:text-navy"
              >
                <span>Behance Portfolio (85 Projects)</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="sm:col-span-6 lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-gold">Studio</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Case Studies", href: "/work" },
                { label: "Packages & Pricing", href: "/packages" },
                { label: "AI Engineering", href: "/ai-engineering" },
                { label: "About the Trio", href: "/about" },
                { label: "Start a Project", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="sm:col-span-6 lg:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
              Disciplines &amp; Packages
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <Link href="/graphic-design" className="hover:text-gold transition-colors">
                  Graphic Design (10 Categories · 59 Services)
                </Link>
              </li>
              <li>
                <Link href="/graphic-design/brand-identity" className="hover:text-gold transition-colors">
                  Brand Identity, Logos &amp; Guidelines
                </Link>
              </li>
              <li>
                <Link href="/graphic-design/packaging-design" className="hover:text-gold transition-colors">
                  Packaging, Labels &amp; Print Pre-Press
                </Link>
              </li>
              <li>
                <Link href="/website" className="hover:text-gold transition-colors">
                  Website Design &amp; Dev (10 Categories · 60 Services)
                </Link>
              </li>
              <li>
                <Link href="/mobile-app" className="hover:text-gold transition-colors">
                  Mobile App Development (10 Categories · 60 Services)
                </Link>
              </li>
              <li>
                <Link href="/services/dashboards-saas" className="hover:text-gold transition-colors">
                  Dashboards &amp; SaaS (10 Categories · 60 Services)
                </Link>
              </li>
              <li className="border-t border-white/10 pt-2">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-1 font-semibold text-gold hover:underline"
                >
                  <span>Hourly · Weekly · Monthly · Yearly</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Policies */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
                International Trust &amp; Policies
              </h3>
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={openSettings}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-navy-mid px-3.5 py-2 font-mono text-xs text-white transition-colors hover:border-gold hover:text-gold"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-gold" />
              <span>Manage Cookie Preferences</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Founded by Asif Bisen, with Rajpoot Talib &amp; Azma
            Bisen. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-white/50">
            GDPR · CCPA/CPRA · PIPEDA · AU Privacy Act · WCAG 2.1 AA Aligned
          </p>
        </div>
      </div>
    </footer>
  );
}

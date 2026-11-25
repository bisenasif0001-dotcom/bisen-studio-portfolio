import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-canvas bg-drafting-grid px-4 text-center text-navy">
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
        Error 404 · Page Not Found
      </span>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        This Route Doesn&apos;t Exist—Yet.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
        The page you requested may have moved. Explore our portfolio, packages, or return to the
        Bisen Studio home page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-mid"
        >
          <ArrowLeft className="h-4 w-4 text-gold" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-navy/15 bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-gold"
        >
          Contact Studio
        </Link>
      </div>
    </div>
  );
}

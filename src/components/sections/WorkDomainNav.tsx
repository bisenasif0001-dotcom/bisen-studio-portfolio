"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WORK_NAV_ITEMS } from "@/data/workDomains";
import { cn } from "@/lib/utils";

export function WorkDomainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Portfolio domains" className="mb-10">
      <div className="inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-navy/12 bg-white p-1.5 shadow-[0_4px_20px_rgba(10,25,47,0.06)]">
        {WORK_NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/services/dashboards-saas" &&
              (pathname === "/work/dashboards-saas" ||
                pathname.startsWith("/services/dashboards-saas/"))) ||
            (item.href === "/graphic-design" && pathname.startsWith("/graphic-design/")) ||
            (item.href === "/website" && pathname.startsWith("/website/")) ||
            (item.href === "/mobile-app" && pathname.startsWith("/mobile-app/"));
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all sm:text-sm",
                isActive
                  ? "bg-navy text-white shadow-sm ring-1 ring-gold/50"
                  : "text-navy/75 hover:bg-surface hover:text-navy"
              )}
            >
              <span>{item.label}</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-mono text-[10px] font-bold leading-none",
                  isActive ? "bg-gold text-navy" : "bg-surface text-ink-muted"
                )}
              >
                {item.count}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

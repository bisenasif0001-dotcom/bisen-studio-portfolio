"use client";

import React from "react";
import { useCurrency } from "@/components/context/CurrencyContext";
import { formatMoney } from "@/lib/utils";

interface DashboardsSaasCategoryArtworkProps {
  categorySlug: string;
  categoryNumber: string;
  categoryTitle: string;
  turnaroundLabel: string;
  stackLabel: string;
  startingUsd?: number;
}

export function DashboardsSaasCategoryArtwork({
  categorySlug,
  categoryNumber,
  categoryTitle,
  turnaroundLabel,
  stackLabel,
  startingUsd = 65,
}: DashboardsSaasCategoryArtworkProps) {
  const { currency } = useCurrency();
  const gridId = `dsa-grid-${categorySlug}`;
  const glowId = `dsa-glow-${categorySlug}`;

  return (
    <div className="rounded-[28px] border border-gold/45 bg-white p-4 text-navy shadow-[0_28px_70px_rgba(6,16,33,0.45)] sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1 font-mono text-[10px]">
        <span className="font-bold uppercase tracking-[0.14em] text-gold-deep">
          ATELIER PLATE // {categoryNumber}
        </span>
        <span className="truncate font-semibold uppercase tracking-[0.08em] text-navy/75">
          {categoryTitle}
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-navy/10 bg-surface/60">
        <svg
          viewBox="0 0 420 220"
          className="h-auto w-full"
          role="img"
          aria-label={`${categoryTitle} SaaS engineering visualization plate`}
        >
          <defs>
            <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#0A192F"
                strokeOpacity="0.045"
                strokeWidth="0.75"
              />
            </pattern>
            <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5C518" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="420" height="220" fill={`url(#${gridId})`} />

          {/* 01. Admin Dashboard Development */}
          {categorySlug === "admin-dashboard-development" && (
            <g>
              <rect x="34" y="20" width="352" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              <rect x="34" y="20" width="84" height="180" rx="14" fill="#0A192F" />
              <text x="48" y="46" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">ADMIN OS</text>
              <rect x="46" y="60" width="60" height="18" rx="5" fill="#F5C518" />
              <text x="54" y="72" fill="#0A192F" fontSize="7" fontFamily="monospace" fontWeight="700">Overview</text>
              <rect x="46" y="86" width="60" height="14" rx="4" fill="#122645" />
              <rect x="46" y="106" width="60" height="14" rx="4" fill="#122645" />
              <rect x="46" y="126" width="60" height="14" rx="4" fill="#122645" />
              <rect x="46" y="164" width="60" height="20" rx="6" fill="#122645" stroke="#F5C518" strokeOpacity="0.45" />
              <text x="54" y="177" fill="#F5C518" fontSize="7" fontFamily="monospace">RBAC AUDIT</text>

              <rect x="132" y="34" width="238" height="26" rx="7" fill="#F4F7FB" />
              <text x="142" y="50" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">TANSTACK GRID // 100K+ ROWS · &lt;50MS</text>
              {[72, 102, 132].map((y, idx) => (
                <g key={y}>
                  <rect x="132" y={y} width="238" height="24" rx="6" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.1" />
                  <circle cx="146" cy={y + 12} r="4" fill={idx === 1 ? "#F5C518" : "#0A192F"} />
                  <rect x="158" y={y + 8} width="84" height="8" rx="4" fill="#0A192F" fillOpacity="0.7" />
                  <rect x="298" y={y + 6} width="62" height="12" rx="6" fill={idx === 0 ? "#0A192F" : "#F4F7FB"} />
                  <text x="309" y={y + 14.5} fill={idx === 0 ? "#F5C518" : "#0A192F"} fontSize="6.5" fontFamily="monospace" fontWeight="700">
                    {idx === 0 ? "ACTIVE" : "VERIFIED"}
                  </text>
                </g>
              ))}
              <rect x="132" y="166" width="238" height="22" rx="11" fill="#0A192F" />
              <text x="166" y="180" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">CMD+K PALETTE + CSV STREAM EXPORT</text>
            </g>
          )}

          {/* 02. Custom SaaS Development */}
          {categorySlug === "custom-saas-development" && (
            <g>
              <rect x="38" y="20" width="344" height="180" rx="14" fill="#0A192F" />
              <circle cx="210" cy="110" r="88" fill={`url(#${glowId})`} />
              <text x="58" y="46" fill="#F5C518" fontSize="8.5" fontFamily="monospace" fontWeight="700">MULTI-TENANT SAAS // POSTGRES RLS + STRIPE</text>
              {[
                { x: 58, name: "ORG A", sub: "acme.app", badge: "ENTERPRISE" },
                { x: 162, name: "ORG B", sub: "verve.app", badge: "GROWTH" },
                { x: 266, name: "ORG C", sub: "velox.app", badge: "WHITE-LABEL" },
              ].map((t) => (
                <g key={t.name}>
                  <rect x={t.x} y="62" width="94" height="82" rx="10" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.18" />
                  <text x={t.x + 12} y="82" fill="#F5C518" fontSize="8.5" fontFamily="monospace" fontWeight="700">{t.name}</text>
                  <text x={t.x + 12} y="98" fill="#FFFFFF" fontSize="8" fontFamily="monospace">{t.sub}</text>
                  <rect x={t.x + 10} y="114" width="74" height="18" rx="9" fill="#F5C518" />
                  <text x={t.x + 16} y="126" fill="#0A192F" fontSize="6.5" fontFamily="monospace" fontWeight="700">{t.badge}</text>
                </g>
              ))}
              <rect x="58" y="158" width="302" height="28" rx="14" fill="#122645" stroke="#F5C518" strokeOpacity="0.55" />
              <text x="90" y="175" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">ROW-LEVEL TENANT ISOLATION · STRIPE SEATS · GIT IP</text>
            </g>
          )}

          {/* 03. Analytics & BI Dashboards */}
          {categorySlug === "analytics-bi-dashboards" && (
            <g>
              <rect x="38" y="20" width="344" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              <text x="56" y="44" fill="#9A6F00" fontSize="8.5" fontFamily="monospace" fontWeight="700">BI &amp; FINANCIAL COHORTS // SUB-300MS SQL</text>
              {[
                { x: 56, val: "$1.48M", lbl: "NET ARR" },
                { x: 162, val: "118%", lbl: "NET NRR" },
                { x: 268, val: "99/100", lbl: "LIGHTHOUSE" },
              ].map((m) => (
                <g key={m.lbl}>
                  <rect x={m.x} y="56" width="96" height="44" rx="8" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.08" />
                  <text x={m.x + 10} y="76" fill="#0A192F" fontSize="11.5" fontFamily="monospace" fontWeight="700">{m.val}</text>
                  <text x={m.x + 10} y="90" fill="#9A6F00" fontSize="7" fontFamily="monospace" fontWeight="700">{m.lbl}</text>
                </g>
              ))}
              <rect x="56" y="112" width="308" height="72" rx="10" fill="#0A192F" />
              <path d="M 74 166 L 116 152 L 160 156 L 204 134 L 250 140 L 296 122 L 344 126" stroke="#F5C518" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              {[116, 160, 204, 250, 296, 344].map((x, idx) => (
                <circle key={x} cx={x} cy={[152, 156, 134, 140, 122, 126][idx]} r="3.5" fill="#F5C518" stroke="#0A192F" strokeWidth="1.2" />
              ))}
              <text x="74" y="132" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">REAL-TIME REVENUE &amp; SKU MARGIN CURVE</text>
            </g>
          )}

          {/* 04. CRM & ERP Solutions */}
          {categorySlug === "crm-erp-solutions" && (
            <g>
              <rect x="38" y="20" width="344" height="180" rx="14" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.14" />
              <rect x="54" y="34" width="312" height="28" rx="8" fill="#0A192F" />
              <text x="68" y="51" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">CUSTOM CRM &amp; ERP PIPELINE // ZERO SEAT TAX</text>
              {[
                { x: 54, title: "QUALIFIED", count: "18 DEALS", accent: "#0A192F" },
                { x: 162, title: "PROPOSAL", count: "$240K", accent: "#F5C518" },
                { x: 270, title: "CLOSED ERP", count: "SYNCED", accent: "#0A192F" },
              ].map((col, idx) => (
                <g key={col.title}>
                  <rect x={col.x} y="74" width="96" height="112" rx="10" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.12" />
                  <text x={col.x + 10} y="92" fill="#9A6F00" fontSize="7.5" fontFamily="monospace" fontWeight="700">{col.title}</text>
                  <rect x={col.x + 10} y="102" width="76" height="32" rx="6" fill="#F4F7FB" />
                  <rect x={col.x + 10} y="142" width="76" height="30" rx="6" fill={idx === 1 ? "#F5C518" : "#0A192F"} />
                  <text x={col.x + 18} y="160" fill={idx === 1 ? "#0A192F" : "#FFFFFF"} fontSize="7.5" fontFamily="monospace" fontWeight="700">
                    {col.count}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* 05. Client & Customer Portals */}
          {categorySlug === "client-customer-portals" && (
            <g>
              <rect x="40" y="20" width="340" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              <rect x="60" y="38" width="136" height="144" rx="12" fill="#0A192F" />
              <circle cx="128" cy="76" r="18" fill="#F5C518" />
              <text x="121" y="80" fill="#0A192F" fontSize="11" fontFamily="monospace" fontWeight="700">VIP</text>
              <text x="80" y="114" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">CLIENT PORTAL</text>
              <rect x="76" y="130" width="104" height="22" rx="11" fill="#F5C518" />
              <text x="88" y="144" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">MAGIC-LINK SSO</text>

              <rect x="212" y="38" width="148" height="144" rx="12" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.1" />
              <text x="226" y="58" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">SELF-SERVICE HUB</text>
              <rect x="226" y="70" width="120" height="24" rx="6" fill="#FFFFFF" />
              <text x="234" y="85" fill="#0A192F" fontSize="7.5" fontFamily="monospace">Signed S3 Data Room</text>
              <rect x="226" y="102" width="120" height="24" rx="6" fill="#FFFFFF" />
              <text x="234" y="117" fill="#0A192F" fontSize="7.5" fontFamily="monospace">Milestones + Sign-Off</text>
              <rect x="226" y="138" width="120" height="26" rx="13" fill="#0A192F" />
              <text x="238" y="154" fill="#F5C518" fontSize="7.5" fontFamily="monospace" fontWeight="700">1-TAP STRIPE PAY</text>
            </g>
          )}

          {/* 06. AI-Powered SaaS & Dashboards */}
          {categorySlug === "ai-saas-development" && (
            <g>
              <rect x="38" y="20" width="344" height="180" rx="14" fill="#0A192F" />
              <rect x="58" y="38" width="148" height="144" rx="12" fill="#122645" stroke="#F5C518" strokeWidth="1.2" />
              <text x="72" y="58" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">SAAS COPILOT // SQL+RAG</text>
              <rect x="70" y="70" width="124" height="26" rx="7" fill="#0A192F" />
              <text x="78" y="86" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">&quot;Why did NRR rise?&quot;</text>
              <rect x="70" y="104" width="124" height="44" rx="7" fill="#F5C518" />
              <text x="78" y="121" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">+14% Expansion Tier</text>
              <text x="78" y="135" fill="#0A192F" fontSize="7" fontFamily="monospace">[Verified SQL View]</text>
              <rect x="70" y="156" width="124" height="16" rx="8" fill="#0A192F" />
              <text x="82" y="167" fill="#F5C518" fontSize="6.5" fontFamily="monospace">RBAC ROLE-SCOPED</text>

              <rect x="222" y="38" width="140" height="144" rx="12" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.16" />
              <text x="236" y="58" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">AGENT GUARDRAILS</text>
              <rect x="236" y="72" width="112" height="24" rx="6" fill="#0A192F" />
              <text x="244" y="87" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">Zod Tool Confirmation</text>
              <rect x="236" y="104" width="112" height="24" rx="6" fill="#0A192F" />
              <text x="244" y="119" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">pgvector ACL Filter</text>
              <rect x="236" y="140" width="112" height="26" rx="13" fill="#F5C518" />
              <text x="246" y="156" fill="#0A192F" fontSize="7.5" fontFamily="monospace" fontWeight="700">TOKEN CREDIT CAP</text>
            </g>
          )}

          {/* 07. Workflow & Business Automation */}
          {categorySlug === "business-automation" && (
            <g>
              <rect x="40" y="20" width="340" height="180" rx="14" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.14" />
              <text x="60" y="46" fill="#9A6F00" fontSize="8.5" fontFamily="monospace" fontWeight="700">DURABLE WORKFLOW ENGINE // ZERO SILENT FAILS</text>
              <line x1="120" y1="106" x2="300" y2="106" stroke="#9A6F00" strokeWidth="2" />
              {[
                { cx: 92, lbl: "TRIGGER", bg: "#0A192F", fg: "#FFFFFF" },
                { cx: 210, lbl: "APPROVAL", bg: "#F5C518", fg: "#0A192F" },
                { cx: 328, lbl: "LEDGER", bg: "#0A192F", fg: "#F5C518" },
              ].map((node) => (
                <g key={node.lbl}>
                  <rect x={node.cx - 38} y="82" width="76" height="48" rx="12" fill={node.bg} stroke="#0A192F" strokeOpacity="0.16" />
                  <text x={node.cx} y="110" textAnchor="middle" fill={node.fg} fontSize="8" fontFamily="monospace" fontWeight="700">
                    {node.lbl}
                  </text>
                </g>
              ))}
              <rect x="60" y="152" width="300" height="26" rx="13" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.1" />
              <text x="96" y="168" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">INNGEST / BULLMQ · IDEMPOTENT RETRIES + SLACK</text>
            </g>
          )}

          {/* 08. Dashboard UI/UX Design */}
          {categorySlug === "dashboard-ui-ux-design" && (
            <g>
              <rect x="40" y="20" width="340" height="180" rx="14" fill="#F4F7FB" stroke="#0A192F" strokeOpacity="0.14" />
              <rect x="58" y="38" width="144" height="144" rx="12" fill="#FFFFFF" stroke="#0A192F" strokeOpacity="0.12" />
              <text x="72" y="58" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">FIGMA SWISS GRID</text>
              <rect x="72" y="70" width="52" height="44" rx="6" fill="#0A192F" />
              <rect x="132" y="70" width="54" height="44" rx="6" fill="#F5C518" />
              <rect x="72" y="124" width="114" height="16" rx="4" fill="#F4F7FB" />
              <rect x="72" y="148" width="114" height="18" rx="9" fill="#0A192F" />
              <text x="92" y="160" fill="#F5C518" fontSize="7" fontFamily="monospace" fontWeight="700">WCAG AA TOKEN</text>

              <rect x="218" y="38" width="144" height="144" rx="12" fill="#0A192F" />
              <text x="232" y="58" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">1:1 CODE PARITY</text>
              <circle cx="250" cy="90" r="10" fill="#FFFFFF" />
              <circle cx="282" cy="90" r="10" fill="#F5C518" />
              <circle cx="314" cy="90" r="10" fill="#1E3A66" stroke="#FFFFFF" strokeOpacity="0.3" />
              <text x="232" y="124" fill="#FFFFFF" fontSize="8" fontFamily="monospace">8pt Spacing Scale</text>
              <text x="232" y="142" fill="#FFFFFF" fontSize="8" fontFamily="monospace">Light + Dark Tokens</text>
              <rect x="232" y="152" width="114" height="18" rx="9" fill="#F5C518" />
              <text x="247" y="164" fill="#0A192F" fontSize="7" fontFamily="monospace" fontWeight="700">RADIX + TAILWIND</text>
            </g>
          )}

          {/* 09. Backend, APIs & Integrations */}
          {categorySlug === "saas-backend-integrations" && (
            <g>
              <rect x="38" y="20" width="344" height="180" rx="14" fill="#0A192F" />
              <rect x="56" y="42" width="84" height="54" rx="10" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.18" />
              <text x="72" y="66" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">SAML/OIDC</text>
              <text x="70" y="81" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">SCIM + RBAC</text>

              <rect x="56" y="116" width="84" height="54" rx="10" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.18" />
              <text x="68" y="140" fill="#F5C518" fontSize="8" fontFamily="monospace" fontWeight="700">WEBHOOKS</text>
              <text x="68" y="155" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">Stripe + Xero</text>

              <rect x="166" y="64" width="92" height="86" rx="14" fill="#F5C518" />
              <text x="184" y="96" fill="#0A192F" fontSize="9.5" fontFamily="monospace" fontWeight="700">OPENAPI</text>
              <text x="180" y="110" fill="#0A192F" fontSize="9.5" fontFamily="monospace" fontWeight="700">GRAPHQL</text>
              <text x="181" y="128" fill="#0A192F" fontSize="7.5" fontFamily="monospace">&lt;80ms P95</text>

              <rect x="282" y="42" width="82" height="54" rx="10" fill="#122645" stroke="#F5C518" strokeOpacity="0.45" />
              <text x="294" y="66" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">POSTGRES</text>
              <text x="294" y="81" fill="#F5C518" fontSize="7.5" fontFamily="monospace">Indexed + RLS</text>

              <rect x="282" y="116" width="82" height="54" rx="10" fill="#122645" stroke="#F5C518" strokeOpacity="0.45" />
              <text x="296" y="140" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">CLOUD IAC</text>
              <text x="294" y="155" fill="#F5C518" fontSize="7.5" fontFamily="monospace">PITR Backups</text>

              <line x1="140" y1="74" x2="166" y2="96" stroke="#F5C518" strokeWidth="1.5" />
              <line x1="140" y1="140" x2="166" y2="118" stroke="#F5C518" strokeWidth="1.5" />
              <line x1="258" y1="96" x2="282" y2="74" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.5" />
              <line x1="258" y1="118" x2="282" y2="140" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.5" />
            </g>
          )}

          {/* 10. SaaS Maintenance & Scaling */}
          {categorySlug === "saas-maintenance" && (
            <g>
              <rect x="40" y="20" width="340" height="180" rx="14" fill="#0A192F" />
              <rect x="64" y="42" width="124" height="136" rx="14" fill="#122645" stroke="#F5C518" strokeOpacity="0.55" />
              <path d="M 126 62 L 154 74 V 104 C 154 126 126 138 126 138 C 126 138 98 126 98 104 V 74 Z" fill="#F5C518" />
              <text x="108" y="104" fill="#0A192F" fontSize="9.5" fontFamily="monospace" fontWeight="700">99.95%</text>
              <text x="86" y="158" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">SAAS SRE SLA</text>

              <rect x="206" y="44" width="150" height="36" rx="8" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.14" />
              <text x="218" y="66" fill="#FFFFFF" fontSize="8" fontFamily="monospace">OWASP + IDOR Reviewed</text>
              <rect x="206" y="90" width="150" height="36" rx="8" fill="#122645" stroke="#FFFFFF" strokeOpacity="0.14" />
              <text x="218" y="112" fill="#F5C518" fontSize="8" fontFamily="monospace">3× Snappier Dashboard</text>
              <rect x="206" y="136" width="150" height="36" rx="8" fill="#F5C518" />
              <text x="218" y="158" fill="#0A192F" fontSize="8" fontFamily="monospace" fontWeight="700">DIRECT PRINCIPALS 12H</text>
            </g>
          )}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-navy/10 pt-3.5 text-[11px]">
        <div>
          <div className="font-mono font-bold text-navy">
            From {formatMoney(startingUsd, currency)}/hr
          </div>
          <div className="text-ink-muted">Flexible Rates</div>
        </div>
        <div>
          <div className="font-mono font-bold text-navy">{turnaroundLabel}</div>
          <div className="text-ink-muted">Typical Delivery</div>
        </div>
        <div className="text-right">
          <div className="font-mono font-bold text-gold-deep">100% Git IP</div>
          <div className="truncate text-ink-muted">{stackLabel}</div>
        </div>
      </div>
    </div>
  );
}

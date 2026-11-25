import React from "react";
import { cn } from "@/lib/utils";

interface DisciplineArtworkProps {
  id: string;
  variant?: "light" | "navy";
  number?: string;
  tag?: string;
}

export function DisciplineArtwork({
  id,
  variant = "light",
  number,
  tag,
}: DisciplineArtworkProps) {
  const isNavy = variant === "navy";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[18px] border",
        isNavy
          ? "border-white/12 bg-navy-deep bg-navy-blueprint"
          : "border-navy/10 bg-surface bg-drafting-grid"
      )}
    >
      {/* Subtle architectural vignette sheen */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          isNavy
            ? "bg-gradient-to-br from-white/[0.03] via-transparent to-navy-deep/80"
            : "bg-gradient-to-br from-white/55 via-transparent to-navy/[0.03]"
        )}
      />

      {/* Optional Exhibition Plate Top Spec Bar */}
      {(number || tag) && (
        <div className="relative flex items-center justify-between gap-2 px-3.5 pt-3 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span
            className={cn(
              "font-bold",
              isNavy ? "text-gold" : "text-gold-deep"
            )}
          >
            {number ? `SPEC // ${number}` : ""}
          </span>
          {tag && (
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[9px] font-semibold tracking-wider",
                isNavy
                  ? "border-gold/45 bg-gold/15 text-gold"
                  : "border-navy/12 bg-white/95 text-navy/80"
              )}
            >
              {tag}
            </span>
          )}
        </div>
      )}

      {/* Conceptual Studio Illustration */}
      <div className="relative">
        {id === "digital-design" && (
          <svg viewBox="0 0 360 156" className="h-36 w-full" fill="none" aria-hidden="true">
            <defs>
              <radialGradient id="cap-digital-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F5C518" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Left Royal Navy Golden-Ratio Plate */}
            <rect x="16" y="14" width="124" height="128" rx="12" fill="#0A192F" />
            <circle cx="78" cy="76" r="46" fill="url(#cap-digital-glow)" />
            <circle
              cx="78"
              cy="76"
              r="34"
              stroke="#FFFFFF"
              strokeOpacity="0.24"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            <circle cx="78" cy="76" r="21" stroke="#F5C518" strokeWidth="1.5" />
            {/* Bezier Curve & Handles */}
            <path d="M32 108 C52 34, 104 34, 124 102" stroke="#FFFFFF" strokeWidth="1.8" />
            <line
              x1="52"
              y1="34"
              x2="104"
              y2="34"
              stroke="#F5C518"
              strokeWidth="1"
              strokeDasharray="2.5 2.5"
            />
            <rect x="29" y="105" width="6" height="6" fill="#F5C518" stroke="#0A192F" strokeWidth="1.2" />
            <circle cx="52" cy="34" r="3" fill="#F5C518" />
            <circle cx="104" cy="34" r="3" fill="#F5C518" />
            <rect x="121" y="99" width="6" height="6" fill="#F5C518" stroke="#0A192F" strokeWidth="1.2" />
            {/* Vector Pen Nib */}
            <g transform="translate(72, 26) rotate(-25)">
              <path
                d="M6 0L11 11L6 15L1 11L6 0Z"
                fill="#F5C518"
                stroke="#0A192F"
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <circle cx="6" cy="8" r="1.4" fill="#0A192F" />
            </g>

            {/* Center White Typography Specimen Card */}
            <rect
              x="152"
              y="20"
              width="108"
              height="116"
              rx="10"
              fill="#FFFFFF"
              stroke="#0A192F"
              strokeOpacity="0.14"
              strokeWidth="1.2"
            />
            <line x1="164" y1="42" x2="248" y2="42" stroke="#0A192F" strokeOpacity="0.1" />
            <line x1="164" y1="68" x2="248" y2="68" stroke="#0A192F" strokeOpacity="0.1" />
            <line x1="164" y1="90" x2="248" y2="90" stroke="#0A192F" strokeOpacity="0.1" />
            <text
              x="166"
              y="70"
              fill="#0A192F"
              fontSize="30"
              fontFamily="Georgia, serif"
              fontStyle="italic"
              fontWeight="600"
            >
              Aa Bb
            </text>
            <text x="166" y="106" fill="#9A6F00" fontSize="8" fontFamily="monospace" fontWeight="700">
              GRID · TOKENS
            </text>
            <rect x="166" y="114" width="64" height="4" rx="2" fill="#0A192F" fillOpacity="0.2" />
            <rect x="166" y="122" width="44" height="4" rx="2" fill="#F5C518" />

            {/* Right Staggered Pantone Swatches */}
            <rect x="272" y="18" width="22" height="120" rx="5" fill="#0A192F" />
            <rect x="299" y="28" width="22" height="110" rx="5" fill="#F5C518" />
            <rect
              x="326"
              y="38"
              width="22"
              height="100"
              rx="5"
              fill="#FFFFFF"
              stroke="#0A192F"
              strokeOpacity="0.22"
              strokeWidth="1.2"
            />
            <circle cx="283" cy="124" r="3" fill="#FFFFFF" fillOpacity="0.6" />
            <circle cx="310" cy="124" r="3" fill="#0A192F" />
            <circle cx="337" cy="124" r="3" fill="#0A192F" fillOpacity="0.35" />
          </svg>
        )}

        {id === "print-design" && (
          <svg viewBox="0 0 360 156" className="h-36 w-full" fill="none" aria-hidden="true">
            {/* Corner Print Crop Marks */}
            <path
              d="M14 28V14H28M346 28V14H332M14 126V140H28M346 126V140H332"
              stroke="#0A192F"
              strokeOpacity="0.45"
              strokeWidth="1.3"
            />
            {/* CMYK Registration Crosshairs */}
            <circle cx="28" cy="76" r="7" stroke="#0A192F" strokeWidth="1.1" />
            <path d="M28 65V87M17 76H39" stroke="#0A192F" strokeWidth="1.1" />
            <circle cx="332" cy="76" r="7" stroke="#9A6F00" strokeWidth="1.1" />
            <path d="M332 65V87M321 76H343" stroke="#9A6F00" strokeWidth="1.1" />

            {/* 3-Panel Packaging Structural Die-Line */}
            <rect
              x="76"
              y="36"
              width="76"
              height="86"
              fill="#FFFFFF"
              stroke="#0A192F"
              strokeWidth="1.6"
            />
            <rect
              x="152"
              y="36"
              width="56"
              height="86"
              fill="#0A192F"
              stroke="#0A192F"
              strokeWidth="1.6"
            />
            <rect
              x="208"
              y="36"
              width="76"
              height="86"
              fill="#FFFFFF"
              stroke="#0A192F"
              strokeWidth="1.6"
            />

            {/* Tuck Flaps & Bleed Guides */}
            <path
              d="M76 36L90 16H138L152 36M208 36L222 16H270L284 36"
              stroke="#9A6F00"
              strokeWidth="1.2"
              strokeDasharray="3.5 2.5"
            />
            <path
              d="M152 36V122M208 36V122"
              stroke="#F5C518"
              strokeWidth="1.6"
              strokeDasharray="4 3"
            />

            {/* Left Wing Structural Details */}
            <rect x="90" y="54" width="48" height="5" rx="2" fill="#0A192F" fillOpacity="0.18" />
            <rect x="90" y="65" width="34" height="4" rx="2" fill="#0A192F" fillOpacity="0.12" />
            <circle cx="114" cy="96" r="10" stroke="#0A192F" strokeOpacity="0.22" strokeDasharray="2 2" />

            {/* Gold Embossed Foil Medallion on Spine */}
            <circle cx="180" cy="76" r="16" stroke="#F5C518" strokeOpacity="0.38" strokeDasharray="2 2" />
            <circle cx="180" cy="76" r="12" fill="#F5C518" />
            <circle cx="180" cy="76" r="5" fill="#0A192F" />

            {/* Right Wing Typography Layout */}
            <rect x="224" y="56" width="44" height="5" rx="2" fill="#0A192F" />
            <rect x="224" y="68" width="32" height="3.5" rx="1.5" fill="#0A192F" fillOpacity="0.32" />
            <rect x="224" y="77" width="38" height="3.5" rx="1.5" fill="#0A192F" fillOpacity="0.2" />
            <rect x="224" y="92" width="24" height="10" rx="2" fill="#F5C518" />

            {/* Bottom Spec Strip */}
            <text
              x="180"
              y="142"
              textAnchor="middle"
              fill="#475569"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="600"
            >
              CMYK · PMS FOIL · PDF/X-4
            </text>
          </svg>
        )}

        {id === "websites" && (
          <svg viewBox="0 0 360 156" className="h-36 w-full" fill="none" aria-hidden="true">
            {/* Layered Browser Frame */}
            <rect
              x="22"
              y="16"
              width="242"
              height="122"
              rx="10"
              fill="#FFFFFF"
              stroke="#0A192F"
              strokeWidth="1.6"
            />
            <path d="M22 35H264" stroke="#0A192F" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="35" cy="25.5" r="2.5" fill="#0A192F" />
            <circle cx="44" cy="25.5" r="2.5" fill="#0A192F" fillOpacity="0.3" />
            <circle cx="53" cy="25.5" r="2.5" fill="#F5C518" />
            <rect x="92" y="21.5" width="96" height="8" rx="4" fill="#F4F7FB" />

            {/* 12-Col Faint Layout Hints */}
            <rect x="36" y="46" width="106" height="12" rx="3" fill="#0A192F" />
            <rect x="36" y="65" width="88" height="6" rx="2" fill="#0A192F" fillOpacity="0.25" />
            <rect x="36" y="76" width="70" height="6" rx="2" fill="#0A192F" fillOpacity="0.16" />
            <rect x="36" y="94" width="54" height="18" rx="6" fill="#F5C518" />
            <rect x="48" y="101" width="30" height="4" rx="2" fill="#0A192F" />

            {/* Hero Navy Visual Card Inside Browser */}
            <rect x="156" y="46" width="94" height="72" rx="7" fill="#0A192F" />
            <path
              d="M168 96 L186 74 L204 86 L234 58"
              stroke="#F5C518"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="234" cy="58" r="3.5" fill="#FFFFFF" stroke="#F5C518" strokeWidth="1.8" />
            <rect x="168" y="104" width="48" height="3.5" rx="1.5" fill="#FFFFFF" fillOpacity="0.4" />

            {/* Glowing Navy Core Web Vitals 99 Gauge */}
            <circle cx="308" cy="72" r="34" fill="#0A192F" stroke="#F5C518" strokeOpacity="0.35" />
            <circle
              cx="308"
              cy="72"
              r="26"
              stroke="#F5C518"
              strokeWidth="3.5"
              strokeDasharray="152 14"
              strokeLinecap="round"
            />
            <text
              x="308"
              y="78"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="17"
              fontFamily="monospace"
              fontWeight="700"
            >
              99
            </text>
            <text
              x="308"
              y="124"
              textAnchor="middle"
              fill="#0A192F"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              0.4s LCP
            </text>
          </svg>
        )}

        {id === "apps" && (
          <svg viewBox="0 0 360 156" className="h-36 w-full" fill="none" aria-hidden="true">
            {/* Left Midnight Navy Flagship Mobile Screen */}
            <rect x="52" y="14" width="84" height="128" rx="14" fill="#0A192F" />
            <rect x="81" y="21" width="26" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.32" />
            <rect
              x="62"
              y="33"
              width="64"
              height="34"
              rx="6"
              fill="#122645"
              stroke="#F5C518"
              strokeWidth="1.1"
            />
            <rect x="70" y="42" width="32" height="5" rx="2" fill="#F5C518" />
            <rect x="70" y="52" width="46" height="3.5" rx="1.5" fill="#FFFFFF" fillOpacity="0.5" />
            <rect x="62" y="75" width="64" height="18" rx="4" fill="#FFFFFF" fillOpacity="0.12" />
            <rect x="62" y="100" width="64" height="22" rx="6" fill="#F5C518" />
            <rect x="78" y="109" width="32" height="4" rx="2" fill="#0A192F" />

            {/* Sweeping Gold Bezier Flow Bridge */}
            <path
              d="M136 86 C168 30, 192 122, 224 64"
              stroke="#9A6F00"
              strokeWidth="2.2"
              strokeDasharray="4.5 3.5"
            />
            <circle cx="136" cy="86" r="7" fill="#F5C518" fillOpacity="0.28" />
            <circle cx="136" cy="86" r="4.2" fill="#F5C518" stroke="#0A192F" strokeWidth="1.5" />
            <circle cx="224" cy="64" r="7" fill="#F5C518" fillOpacity="0.28" />
            <circle cx="224" cy="64" r="4.2" fill="#F5C518" stroke="#0A192F" strokeWidth="1.5" />

            {/* Right Pure White Verification Mobile Screen */}
            <rect
              x="224"
              y="14"
              width="84"
              height="128"
              rx="14"
              fill="#FFFFFF"
              stroke="#0A192F"
              strokeWidth="1.8"
            />
            <rect x="253" y="21" width="26" height="3" rx="1.5" fill="#0A192F" fillOpacity="0.22" />
            <circle
              cx="266"
              cy="56"
              r="18"
              fill="#FEF9E3"
              stroke="#0A192F"
              strokeWidth="1.6"
            />
            <path
              d="M258 56L264 62L275 50"
              stroke="#0A192F"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="238" y="86" width="56" height="6" rx="3" fill="#0A192F" />
            <rect x="246" y="98" width="40" height="4" rx="2" fill="#0A192F" fillOpacity="0.24" />
            <rect x="238" y="112" width="56" height="14" rx="5" fill="#0A192F" />
          </svg>
        )}

        {id === "dashboards" && (
          <svg viewBox="0 0 360 156" className="h-36 w-full" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="cap-dash-area" x1="0" y1="68" x2="0" y2="122" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F5C518" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#F5C518" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Executive Midnight Navy Analytics Console */}
            <rect x="20" y="14" width="320" height="128" rx="10" fill="#0A192F" />
            {/* Left Sidebar Rail */}
            <rect x="20" y="14" width="54" height="128" rx="10" fill="#061021" />
            <circle cx="47" cy="34" r="7" fill="#F5C518" />
            <rect x="33" y="54" width="28" height="4.5" rx="2" fill="#FFFFFF" fillOpacity="0.72" />
            <rect x="33" y="66" width="22" height="4.5" rx="2" fill="#FFFFFF" fillOpacity="0.3" />
            <rect x="33" y="78" width="26" height="4.5" rx="2" fill="#FFFFFF" fillOpacity="0.3" />
            <rect x="33" y="90" width="20" height="4.5" rx="2" fill="#FFFFFF" fillOpacity="0.3" />

            {/* 3 KPI Metric Tiles */}
            <rect x="86" y="24" width="76" height="32" rx="5" fill="#122645" />
            <text x="94" y="44" fill="#F5C518" fontSize="11" fontFamily="monospace" fontWeight="700">
              $148K
            </text>
            <rect x="170" y="24" width="76" height="32" rx="5" fill="#122645" />
            <text x="178" y="44" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="700">
              +41%
            </text>
            <rect
              x="254"
              y="24"
              width="76"
              height="32"
              rx="5"
              fill="#122645"
              stroke="#F5C518"
              strokeOpacity="0.45"
            />
            <text x="262" y="44" fill="#F5C518" fontSize="11" fontFamily="monospace" fontWeight="700">
              24ms
            </text>

            {/* Pure White Chart Panel */}
            <rect x="86" y="64" width="244" height="66" rx="6" fill="#FFFFFF" />
            <path
              d="M106 104 L134 94 L162 98 L190 86 L218 78 L246 82 L308 72 L308 122 L106 122 Z"
              fill="url(#cap-dash-area)"
            />
            <rect x="100" y="104" width="12" height="18" rx="2" fill="#0A192F" fillOpacity="0.22" />
            <rect x="128" y="94" width="12" height="28" rx="2" fill="#0A192F" fillOpacity="0.38" />
            <rect x="156" y="98" width="12" height="24" rx="2" fill="#0A192F" fillOpacity="0.3" />
            <rect x="184" y="86" width="12" height="36" rx="2" fill="#0A192F" fillOpacity="0.6" />
            <rect x="212" y="78" width="12" height="44" rx="2" fill="#0A192F" fillOpacity="0.82" />
            <rect x="240" y="82" width="12" height="40" rx="2" fill="#0A192F" />
            <rect x="268" y="74" width="12" height="48" rx="2" fill="#F5C518" />

            <path
              d="M106 102 L134 92 L162 96 L190 84 L218 76 L246 80 L274 72 L308 70"
              stroke="#F5C518"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="308" cy="70" r="4" fill="#0A192F" stroke="#F5C518" strokeWidth="2" />
          </svg>
        )}

        {id === "digital-products" && (
          <svg viewBox="0 0 360 156" className="h-36 w-full" fill="none" aria-hidden="true">
            {/* Full-Spectrum Constellation Paths */}
            <path
              d="M58 76H302"
              stroke={isNavy ? "#FFFFFF" : "#0A192F"}
              strokeOpacity={isNavy ? "0.28" : "0.24"}
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M58 76 C100 32, 138 32, 178 76 C218 120, 258 120, 302 76"
              stroke={isNavy ? "#F5C518" : "#9A6F00"}
              strokeWidth="2"
            />

            {/* Node 1: BRAND */}
            <circle
              cx="58"
              cy="76"
              r="22"
              fill={isNavy ? "#122645" : "#FFFFFF"}
              stroke={isNavy ? "#FFFFFF" : "#0A192F"}
              strokeOpacity={isNavy ? "0.35" : "1"}
              strokeWidth="1.6"
            />
            <circle cx="58" cy="76" r="7" fill="#F5C518" />
            <text
              x="58"
              y="114"
              textAnchor="middle"
              fill={isNavy ? "#FFFFFF" : "#0A192F"}
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              BRAND
            </text>

            {/* Node 2: DESIGN */}
            <circle cx="138" cy="48" r="20" fill="#0A192F" stroke="#F5C518" strokeOpacity="0.6" strokeWidth="1.3" />
            <rect x="129" y="41" width="18" height="14" rx="2.5" stroke="#F5C518" strokeWidth="1.6" />
            <text
              x="138"
              y="84"
              textAnchor="middle"
              fill={isNavy ? "#FFFFFF" : "#0A192F"}
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              DESIGN
            </text>

            {/* Node 3: AI CODE */}
            <circle cx="222" cy="102" r="26" stroke="#F5C518" strokeOpacity="0.35" strokeDasharray="3 3" />
            <circle cx="222" cy="102" r="20" fill="#F5C518" stroke="#0A192F" strokeWidth="1.6" />
            <text
              x="222"
              y="106"
              textAnchor="middle"
              fill="#0A192F"
              fontSize="12"
              fontFamily="monospace"
              fontWeight="700"
            >
              {"</>"}
            </text>
            <text
              x="222"
              y="140"
              textAnchor="middle"
              fill={isNavy ? "#F5C518" : "#0A192F"}
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              AI CODE
            </text>

            {/* Node 4: LAUNCH */}
            <circle cx="302" cy="76" r="22" fill={isNavy ? "#F5C518" : "#0A192F"} />
            <path
              d="M294 76L300 82L311 70"
              stroke={isNavy ? "#0A192F" : "#F5C518"}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="302"
              y="114"
              textAnchor="middle"
              fill={isNavy ? "#FFFFFF" : "#0A192F"}
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              LAUNCH
            </text>
          </svg>
        )}
      </div>
    </div>
  );
}

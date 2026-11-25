import React from "react";

export function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bisen-crest-bg" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#13294B" />
          <stop offset="100%" stopColor="#071326" />
        </linearGradient>
      </defs>

      {/* Outer sculpted frame with subtle gold hairline */}
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="url(#bisen-crest-bg)"
        stroke="rgba(245,197,24,0.5)"
        strokeWidth="1.25"
      />

      {/* Recessed inner architectural frame */}
      <rect
        x="3.5"
        y="3.5"
        width="33"
        height="33"
        rx="7.5"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.75"
      />

      {/* Precision balanced architectural "B" monogram */}
      <path
        d="M12.5 11.5H21C23.85 11.5 26 13.45 26 16C26 17.9 24.78 19.48 22.95 20.18C25.25 20.82 26.85 22.68 26.85 24.95C26.85 27.72 24.42 29.85 21.35 29.85H12.5V11.5Z"
        stroke="#FFFFFF"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path d="M12.5 20.25H22.4" stroke="#FFFFFF" strokeWidth="2.1" />

      {/* Luminous gold registration dot with concentric hairline ring */}
      <circle cx="30.5" cy="10" r="4.2" stroke="rgba(245,197,24,0.35)" strokeWidth="0.75" />
      <circle cx="30.5" cy="10" r="2.6" fill="#F5C518" />
    </svg>
  );
}

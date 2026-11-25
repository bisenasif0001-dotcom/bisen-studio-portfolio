import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/work/brand-digital",
        destination: "/graphic-design/brand-identity",
        permanent: true,
      },
      {
        source: "/work/print-packaging",
        destination: "/graphic-design/packaging-design",
        permanent: true,
      },
      {
        source: "/work/graphic-design",
        destination: "/graphic-design",
        permanent: true,
      },
      {
        source: "/work/websites",
        destination: "/website",
        permanent: true,
      },
      {
        source: "/work/web-mobile-apps",
        destination: "/mobile-app",
        permanent: true,
      },
      {
        source: "/work/mobile-app",
        destination: "/mobile-app",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

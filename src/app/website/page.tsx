import type { Metadata } from "next";
import React from "react";
import { WebsiteHub } from "@/components/sections/WebsiteHub";

export const metadata: Metadata = {
  title: "Website Design & Development — 10 Categories & 60 Services",
  description:
    "Website Design, Custom Next.js & React Development, Shopify & WooCommerce, WordPress & Webflow CMS, Landing Pages, Redesign, SaaS Portals, Technical SEO, Maintenance & API Integrations for US, UK, Canada, Europe & Australia.",
};

export default function WebsiteDesignHubPage() {
  return <WebsiteHub />;
}

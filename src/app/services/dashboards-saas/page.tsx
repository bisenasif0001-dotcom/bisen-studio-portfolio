import type { Metadata } from "next";
import React from "react";
import { DashboardsSaasHub } from "@/components/sections/DashboardsSaasHub";

export const metadata: Metadata = {
  title:
    "Dashboards & SaaS Development (60 Services Across 10 Categories) — Bisen Studio",
  description:
    "Explore Bisen Studio's complete Dashboards & SaaS catalog: Admin Dashboards, Custom Multi-Tenant SaaS, BI & Financial Analytics, CRM/ERP Solutions, Client Portals, AI SaaS & Copilots, Workflow Automation, Dashboard UI/UX, Cloud Backend & APIs, and Scaling Care.",
};

export default function DashboardsSaasServicesPage() {
  return <DashboardsSaasHub />;
}

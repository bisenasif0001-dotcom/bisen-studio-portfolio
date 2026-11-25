import type { Metadata } from "next";
import React from "react";
import { WORK_DOMAINS } from "@/data/workDomains";
import { WorkDomainShowcase } from "@/components/sections/WorkDomainShowcase";

const domain = WORK_DOMAINS["dashboards-saas"];

export const metadata: Metadata = {
  title: domain.metaTitle,
  description: domain.metaDescription,
};

export default function DashboardsSaasWorkPage() {
  return <WorkDomainShowcase domain={domain} />;
}

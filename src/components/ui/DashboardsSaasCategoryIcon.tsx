import React from "react";
import {
  BarChart3,
  Cloud,
  GitBranch,
  LayoutDashboard,
  Lock,
  PenTool,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { DashboardsSaasIconKey } from "@/data/dashboardsSaasCatalog";

interface DashboardsSaasCategoryIconProps {
  iconKey: DashboardsSaasIconKey;
  className?: string;
}

const ICON_COMPONENTS: Record<
  DashboardsSaasIconKey,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  "layout-dashboard": LayoutDashboard,
  cloud: Cloud,
  "bar-chart-3": BarChart3,
  users: Users,
  lock: Lock,
  sparkles: Sparkles,
  "git-branch": GitBranch,
  "pen-tool": PenTool,
  server: Server,
  "shield-check": ShieldCheck,
};

export function DashboardsSaasCategoryIcon({
  iconKey,
  className = "h-4 w-4",
}: DashboardsSaasCategoryIconProps) {
  const Icon = ICON_COMPONENTS[iconKey] ?? LayoutDashboard;
  return <Icon className={className} aria-hidden={true} />;
}

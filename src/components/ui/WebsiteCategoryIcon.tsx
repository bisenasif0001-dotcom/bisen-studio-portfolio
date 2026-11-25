import React from "react";
import {
  AppWindow,
  Blocks,
  Code2,
  Gauge,
  Layout,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Target,
  Workflow,
} from "lucide-react";
import type { WebsiteCategoryIconKey } from "@/data/websiteCatalog";

const ICON_MAP: Record<
  WebsiteCategoryIconKey,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  layout: Layout,
  "code-2": Code2,
  "shopping-cart": ShoppingCart,
  blocks: Blocks,
  target: Target,
  "refresh-cw": RefreshCw,
  "app-window": AppWindow,
  gauge: Gauge,
  "shield-check": ShieldCheck,
  workflow: Workflow,
};

export function WebsiteCategoryIcon({
  iconKey,
  className = "h-4 w-4",
}: {
  iconKey: WebsiteCategoryIconKey;
  className?: string;
}) {
  const Icon = ICON_MAP[iconKey];
  return <Icon className={className} aria-hidden={true} />;
}

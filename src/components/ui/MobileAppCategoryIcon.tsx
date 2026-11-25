import React from "react";
import {
  Briefcase,
  Cpu,
  Layers,
  PenTool,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { MobileAppCategoryIconKey } from "@/data/mobileAppCatalog";

interface MobileAppCategoryIconProps {
  iconKey: MobileAppCategoryIconKey;
  className?: string;
}

const ICON_COMPONENTS: Record<
  MobileAppCategoryIconKey,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  smartphone: Smartphone,
  cpu: Cpu,
  layers: Layers,
  "pen-tool": PenTool,
  sparkles: Sparkles,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
  server: Server,
  rocket: Rocket,
  "shield-check": ShieldCheck,
};

export function MobileAppCategoryIcon({
  iconKey,
  className = "h-4 w-4",
}: MobileAppCategoryIconProps) {
  const Icon = ICON_COMPONENTS[iconKey] ?? Smartphone;
  return <Icon className={className} aria-hidden={true} />;
}

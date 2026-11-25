import React from "react";
import {
  BookOpen,
  Film,
  Flag,
  Megaphone,
  Package,
  PenTool,
  Presentation,
  Printer,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { GraphicCategoryIconKey } from "@/data/graphicDesignCatalog";

const ICON_MAP: Record<
  GraphicCategoryIconKey,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  "pen-tool": PenTool,
  megaphone: Megaphone,
  printer: Printer,
  package: Package,
  presentation: Presentation,
  "shopping-bag": ShoppingBag,
  flag: Flag,
  "book-open": BookOpen,
  film: Film,
  sparkles: Sparkles,
};

export function GraphicCategoryIcon({
  iconKey,
  className = "h-4 w-4",
}: {
  iconKey: GraphicCategoryIconKey;
  className?: string;
}) {
  const Icon = ICON_MAP[iconKey];
  return <Icon className={className} aria-hidden={true} />;
}

import type { Metadata } from "next";
import React from "react";
import { GraphicDesignHub } from "@/components/sections/GraphicDesignHub";

export const metadata: Metadata = {
  title: "Graphic Design Services — 10 Categories & 59 Creative Specialties",
  description:
    "Full-spectrum graphic design for US, UK, Canada, Europe & Australia: Brand Identity, Social Ads, Print Marketing, Packaging, Pitch Decks, Amazon Graphics, Signage, Editorial, Motion & Photo Retouching.",
};

export default function GraphicDesignPage() {
  return <GraphicDesignHub />;
}

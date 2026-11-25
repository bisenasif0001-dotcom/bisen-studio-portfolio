import type { Metadata } from "next";
import React from "react";
import { MobileAppHub } from "@/components/sections/MobileAppHub";

export const metadata: Metadata = {
  title:
    "Mobile App Design & Development (60 Services Across 10 Categories) — Bisen Studio",
  description:
    "Explore Bisen Studio's complete Mobile App Development catalog: iOS (SwiftUI), Android (Kotlin), Flutter & React Native, Mobile UI/UX, AI-Powered Apps, E-commerce & On-Demand, Enterprise Apps, Backend & APIs, App Store Optimization, and Ongoing Care across US, UK, Canada, Europe & Australia.",
};

export default function MobileAppPage() {
  return <MobileAppHub />;
}

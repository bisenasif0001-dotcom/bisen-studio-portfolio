export const SITE_CONFIG = {
  name: "Bisen Studio",
  legalName: "Bisen Studio — Design & AI-Accelerated Engineering",
  tagline: "16+ Years of Design & Engineering Craft. Accelerated by AI.",
  description:
    "A principal-only 3-person creative and engineering studio led by Asif Bisen, Rajpoot Talib, and Azma Bisen. Serving US, European, Australian, and Canadian startups, individuals, and companies across Digital Design, Print Design, Websites, Apps, Dashboards, and Digital Products.",
  url: "https://bisenstudio.com",
  email: "hello@bisenstudio.com",
  privacyEmail: "privacy@bisenstudio.com",
  responseSla: "Within 12 business hours",
  experienceYears: "16+",
  teamCount: 3,
  markets: ["United States", "Europe & UK", "Australia", "Canada"],
  social: {
    linkedin: "https://linkedin.com",
    behance: "https://www.behance.net/advarto/projects",
    dribbble: "https://dribbble.com",
    github: "https://github.com",
    x: "https://x.com",
  },
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Packages", href: "/packages" },
  { label: "AI Engineering", href: "/ai-engineering" },
  { label: "About Team", href: "/about" },
  { label: "Trust & Policies", href: "/policies" },
];

export const TRUST_METRICS = [
  { value: "16+", label: "Years of Combined Craft", detail: "Print, digital & product engineering" },
  { value: "3×", label: "Faster Delivery Velocity", detail: "Senior architecture + AI coding workflows" },
  { value: "100%", label: "Client IP Ownership", detail: "Full code, Figma & print source transfer" },
  { value: "4", label: "Core Global Regions", detail: "US · Europe · Australia · Canada" },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  regionTag: "US" | "EU" | "UK" | "AU" | "CA";
  engagement: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Most agencies hand your project to juniors after the sales call. With Bisen Studio, Asif, Talib, and Azma worked directly in our Slack and GitHub. Their AI-accelerated build got our Series A analytics dashboard live in five weeks instead of four months—with cleaner TypeScript than our previous San Francisco vendor.",
    author: "Marcus Vance",
    role: "Co-Founder & CTO",
    company: "Northstar Ledger",
    location: "Austin, Texas (US)",
    regionTag: "US",
    engagement: "Monthly Retainer",
  },
  {
    quote:
      "Finding a studio that masters both Pantone-accurate luxury print packaging and a headless e-commerce web platform is almost impossible. Azma and Asif unified our entire physical retail line and digital flagship under one cohesive Swiss design language.",
    author: "Clara Lindholm",
    role: "Head of Brand & Retail",
    company: "Klara Botanics",
    location: "Berlin, Germany (EU)",
    regionTag: "EU",
    engagement: "Yearly Partner",
  },
  {
    quote:
      "We started on a Weekly Sprint to rescue our investor pitch deck and mobile app prototype, and immediately upgraded to a Monthly package. Zero timezone friction with Sydney, rock-solid NDA compliance, and every Friday demo exceeded expectations.",
    author: "Liam O'Connor",
    role: "Founder",
    company: "HarbourPay Technologies",
    location: "Sydney, Australia (AU)",
    regionTag: "AU",
    engagement: "Weekly → Monthly",
  },
  {
    quote:
      "Their 16+ years of real-world engineering judgment shows immediately. They use AI coding tools intelligently for speed, yet every accessibility rule, database query, and visual detail is thoroughly vetted by senior humans. Best ROI partner we have worked with.",
    author: "Nadia Pelletier",
    role: "VP of Product",
    company: "VerveHealth Systems",
    location: "Toronto, Canada (CA)",
    regionTag: "CA",
    engagement: "Monthly Retainer",
  },
];

export const GLOBAL_CITIES = [
  { city: "New York", region: "US East", timeZone: "America/New_York", overlap: "08:00–13:30 EST" },
  { city: "London", region: "UK", timeZone: "Europe/London", overlap: "09:00–17:30 GMT" },
  { city: "Berlin", region: "EU Central", timeZone: "Europe/Berlin", overlap: "10:00–18:30 CET" },
  { city: "Toronto", region: "Canada", timeZone: "America/Toronto", overlap: "08:00–13:30 EST" },
  { city: "Sydney", region: "Australia", timeZone: "Australia/Sydney", overlap: "12:00–19:00 AEST" },
];

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: HomeFaqItem[] = [
  {
    question: "Who actually designs and builds my project at Bisen Studio?",
    answer:
      "Your project is handled directly by our three principals—Asif Bisen (Creative Direction & Product Engineering), Rajpoot Talib (Full-Stack & AI Systems), and Azma Bisen (Brand, UI & Print Design). We never pass retainers down to unvetted juniors or anonymous subcontractors.",
  },
  {
    question: "Can we start with a short Weekly Sprint before committing to a Monthly Retainer?",
    answer:
      "Yes. Many international clients start with a 1-week Sprint ($2,200 USD base) or a 5-hour Hourly block ($65/hr) to test our speed and craft on a landing page, investor deck, packaging kit, or dashboard module before upgrading to Monthly or Yearly continuity.",
  },
  {
    question: "How do you combine AI speed with production security and IP safety?",
    answer:
      "Architecture, Figma design tokens, database schemas, and pre-press specs are defined by senior humans first. AI accelerates repetitive scaffolding under enterprise zero-data-retention safeguards (0% client code or IP used for training), followed by line-by-line senior review, WCAG 2.1 AA checks, and automated testing.",
  },
  {
    question: "Can one engagement cover both physical print/packaging and software development?",
    answer:
      "Yes—that is our core differentiator. On Monthly and Yearly retainers (up to 2 active concurrent slots), Azma can lead CMYK/Pantone packaging die-lines or editorial brand guidelines in parallel while Asif and Rajpoot ship your Next.js website, mobile app, or SaaS dashboard.",
  },
  {
    question: "How do Mutual NDAs, IP ownership, and retainer pauses or cancellations work?",
    answer:
      "We sign a Mutual NDA prior to discovery on request. Upon full settlement of an invoice, 100% of custom-created code, Figma files, and print mechanicals transfer exclusively to you. Monthly retainers renew month-to-month and can be paused or canceled cleanly with 14 days' written notice.",
  },
];

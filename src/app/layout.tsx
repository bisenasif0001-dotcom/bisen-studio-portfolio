import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/site";
import { CurrencyProvider } from "@/components/context/CurrencyContext";
import { CookieConsentProvider } from "@/components/context/CookieConsentContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — 16+ Years of Digital, Print, Web, App & AI-Accelerated Engineering`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Graphic Design Studio US Europe Australia Canada",
    "Print Design and Packaging Studio",
    "SaaS Dashboard Development",
    "AI-Accelerated Web and App Development",
    "Startup Design and Engineering Retainer",
    "Hourly Weekly Monthly Yearly Design Agency",
    "Asif Bisen",
    "Rajpoot Talib",
    "Azma Bisen",
    "Bisen Studio",
  ],
  authors: [{ name: "Asif Bisen" }, { name: "Rajpoot Talib" }, { name: "Azma Bisen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Design, Print & AI-Accelerated Product Engineering`,
    description: SITE_CONFIG.description,
    images: [{ url: "/images/studio-hero-craft.jpg", width: 1200, height: 675, alt: "Bisen Studio Craft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — 16+ Years of Craft × AI Velocity`,
    description: SITE_CONFIG.description,
    images: ["/images/studio-hero-craft.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  description: SITE_CONFIG.description,
  areaServed: ["United States", "Europe", "United Kingdom", "Australia", "Canada"],
  founder: { "@type": "Person", name: "Asif Bisen" },
  employee: [
    { "@type": "Person", name: "Asif Bisen", jobTitle: "Founder, Creative Director & Lead Product Engineer" },
    { "@type": "Person", name: "Rajpoot Talib", jobTitle: "Principal Full-Stack & AI Systems Engineer" },
    { "@type": "Person", name: "Azma Bisen", jobTitle: "Lead Visual, Brand & Print Design Director" },
  ],
  serviceType: [
    "Graphic Design",
    "Digital Design",
    "Print Design",
    "Website Development",
    "Mobile and Web Application Development",
    "SaaS Dashboard Design and Engineering",
    "Digital Product Development",
    "AI-Assisted Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-navy antialiased selection:bg-gold/40 selection:text-navy">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <CookieConsentProvider>
          <CurrencyProvider>
            <Navbar />
            <main id="main-content" className="pt-20">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </CurrencyProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}

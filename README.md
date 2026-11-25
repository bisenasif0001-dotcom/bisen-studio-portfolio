# Bisen Studio — International Design & AI-Accelerated Engineering Portfolio

A multi-page, SEO-engineered, WCAG 2.1 AA accessible studio website for **Asif Bisen**, **Rajpoot Talib**, and **Azma Bisen**, crafted in an architectural **Royal Navy Blue, Luminous Gold-Yellow & Gallery White** atelier aesthetic tailored for clients across the **United States, Europe & UK, Australia, and Canada**.

## Highlights

- **Interactive Atelier Showcase & Conceptual SVG Diagrams:** Bespoke interactive `StudioAtelierCanvas` (Brand & Print Pre-Press, SaaS Dashboard, Web & App, AI Code Engine) and custom SVG discipline artwork across every service card.
- **19 Production Routes (Next.js App Router + TypeScript Strict Mode):**
  - `/` — Flagship Home (Hero, Live US/EU/UK/CA/AU Timezones, Services Bento, Featured Case Studies, 16+ Yrs × AI Comparison, Multi-Currency Packages Preview, Founding Trio, Global Testimonials)
  - `/services` — Digital Design, Print Design (CMYK/Pantone Pre-Press Specs), Websites, Web & Mobile Apps, SaaS Dashboards, Digital Products
  - `/work` & `/work/[slug]` — Filterable Portfolio Hub + 6 Static-Generated Case Study Detail Pages
  - `/packages` — Hourly, Weekly Sprint, Monthly Retainer & Yearly Partner packages with live **USD / EUR / GBP / AUD / CAD** currency switcher, **Interactive Cost & Savings Calculator**, Comparison Matrix & FAQ
  - `/ai-engineering` — 16+ Years Senior Craft × AI Coding Mastery showcase, 4-Stage Pipeline & Zero-Data-Retention Pledge
  - `/about` — Founding Trio Profiles (Asif Bisen, Rajpoot Talib, Azma Bisen), 5-Phase Process & Global Timezone Overlap Playbook
  - `/contact` + `/api/contact` — Smart Project Brief Form with Region, Client Type, Disciplines, Engagement Model, NDA Checkbox & Honeypot Spam Protection
  - `/policies` + 6 Dedicated Policy Pages — Privacy Policy (GDPR/UK GDPR/CCPA/PIPEDA/AU), Terms of Service, Retainer & Refund Policy, IP Ownership/NDA/AI Ethics, Cookie Policy + Live Consent Manager, Accessibility Statement (WCAG 2.1 AA)
- **Technical & Security Hardening:** Security HTTP headers in `next.config.ts`, structured JSON-LD Schema, dynamic `sitemap.xml` & `robots.txt`, Next.js Image Optimization (`AVIF`/`WebP`), and GDPR opt-in Cookie Banner.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Easy Customizations

- **Studio Email, Brand Name & Social Links:** Edit `src/data/site.ts`
- **Team Roles, Bios & Photos:** Edit `src/data/team.ts` (drop portraits into `public/images/team/` and set `photoPath`)
- **Packages, Hourly/Weekly/Monthly/Yearly Rates & Currency Multipliers:** Edit `src/data/packages.ts` and `src/lib/utils.ts`
- **Case Studies:** Edit `src/data/portfolio.ts` and replace visuals in `public/images/`
- **Email / CRM Delivery for Contact Inquiries:** Connect Resend, SendGrid, or a Slack webhook inside `src/app/api/contact/route.ts`

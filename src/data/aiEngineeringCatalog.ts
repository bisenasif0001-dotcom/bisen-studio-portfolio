export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface AIEngineeringService {
  slug:
    | "ai-web-apps"
    | "ai-assistants"
    | "ai-automation"
    | "ai-dashboards"
    | "llm-integrations"
    | "ai-mvp-development";
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  idealFor: string[];
  capabilities: string[];
  deliverables: string[];
  stack: string[];
  exclusions: string[];
  engagementFit: string;
  relatedCaseSlug: string;
  faqs: ServiceFAQ[];
}

export const AI_ENGINEERING_SERVICES: AIEngineeringService[] = [
  {
    slug: "ai-web-apps",
    title: "AI-Powered Web Applications",
    shortTitle: "AI Web Apps",
    badge: "SERVICE 01 · FULL-STACK AI APPS",
    tagline: "Custom web platforms enhanced with grounded AI workflows.",
    summary:
      "We design and engineer custom web applications that embed structured AI capabilities—smart document drafting, semantic search, guided client onboarding, and automated recommendations—inside clean, maintainable software.",
    seoTitle: "AI-Powered Web Application Development",
    seoDescription:
      "Build custom AI-powered web applications with human-reviewed TypeScript, React, Next.js architecture, and controlled API integrations at Bisen Studio.",
    idealFor: [
      "B2B SaaS products adding intelligent customer workflows",
      "Service portals automating client intake, summarization, or triage",
      "Growing companies modernizing manual web tools with practical AI",
    ],
    capabilities: [
      "Custom React / Next.js application UI built around real user workflows",
      "Streaming LLM responses, structured JSON extraction & human-in-the-loop approval states",
      "Role-based access control (RBAC), rate limiting & input validation boundaries",
      "Fallback handling, latency optimization & predictable API cost telemetry",
    ],
    deliverables: [
      "Architecture blueprint & user workflow specification",
      "Interactive Figma design system & responsive UI components",
      "Production Next.js / TypeScript application source code in Git",
      "Controlled AI provider integration with server-side key & prompt isolation",
      "Functional QA verification, deployment runbook & team handover",
    ],
    stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "OpenAI / Anthropic APIs", "Tailwind CSS"],
    exclusions: [
      "Third-party LLM API token & inference bills (paid directly on client account)",
      "Production cloud hosting, managed database & DNS infrastructure costs",
      "Proprietary third-party data feeds or paid enterprise SaaS seats",
    ],
    engagementFit:
      "Well suited to a Weekly Sprint (scoped prototype) or Monthly Studio Retainer (continuous product releases).",
    relatedCaseSlug: "photobooth-supplier-2026",
    faqs: [
      {
        question: "Do you build custom web apps from scratch or integrate AI into existing products?",
        answer:
          "Both. We either architect a new React/Next.js application tailored to your product requirements or add modular AI features cleanly into an existing TypeScript/Node codebase after reviewing your current architecture.",
      },
      {
        question: "How do you prevent unreliable or fabricated AI outputs in user-facing features?",
        answer:
          "We constrain model responses using schema validation, retrieval grounding over your verified records, confidence thresholds, and explicit human review or fallback states wherever accuracy matters.",
      },
      {
        question: "Who owns the source code once the AI web app is completed?",
        answer:
          "100% of custom application source code, UI systems, and prompt templates created for your engagement transfer exclusively to your organization upon settlement of the applicable invoice.",
      },
    ],
  },
  {
    slug: "ai-assistants",
    title: "AI Assistants & Chatbots",
    shortTitle: "AI Assistants",
    badge: "SERVICE 02 · KNOWLEDGE & SUPPORT TOOLS",
    tagline: "Knowledge assistants, support tools and intelligent conversational experiences.",
    summary:
      "Turn fragmented SOPs, product manuals, help docs, and policy libraries into grounded conversational assistants with cited sources, strict topic guardrails, and seamless escalation to human support.",
    seoTitle: "Custom AI Assistants & Knowledge Chatbot Development",
    seoDescription:
      "Engineer grounded AI knowledge assistants, support tools, and internal copilots with source citations and human escalation at Bisen Studio.",
    idealFor: [
      "SaaS & e-commerce support teams reducing repetitive Tier-1 tickets",
      "Internal operations teams querying SOPs, compliance docs & wikis",
      "Client onboarding portals needing guided Q&A backed by verified documentation",
    ],
    capabilities: [
      "Retrieval-augmented generation (RAG) over verified help docs & internal files",
      "Clickable source citations so users verify answers before acting",
      "Workspace isolation & permission filtering per tenant or team role",
      "Graceful handoff to Zendesk, Intercom, email, or human ticket queues",
    ],
    deliverables: [
      "Discovery audit of source documents, chunking rules & escalation logic",
      "Branded conversational UI widget or standalone assistant workspace",
      "Document ingestion pipeline & vector search indexing setup",
      "Citation display, off-topic refusal guardrails & transcript logging controls",
      "Evaluation test cases, deployment documentation & handover session",
    ],
    stack: ["TypeScript", "Next.js", "PostgreSQL / pgvector", "REST / Webhook APIs", "Tailwind CSS", "Figma"],
    exclusions: [
      "Third-party embedding, vector database, and LLM inference usage fees",
      "Ongoing manual rewriting of outdated client internal policies or SOPs",
      "External helpdesk software licenses (e.g., Intercom, Zendesk)",
    ],
    engagementFit:
      "Typically scoped via a focused 1–2 week Sprint or Monthly Retainer depending on connector count and access rules.",
    relatedCaseSlug: "edunuts-academy-mobile-app",
    faqs: [
      {
        question: "Can the assistant answer only from our approved company documents?",
        answer:
          "Yes. We structure retrieval pipelines so answers are grounded in your indexed documents with inline source references, and instruct the system to decline or escalate when evidence is missing.",
      },
      {
        question: "How is sensitive knowledge-base content kept separate between departments?",
        answer:
          "Access permissions are enforced server-side before retrieval queries run, ensuring restricted collections are only retrieved for authenticated users with matching roles.",
      },
      {
        question: "Can we embed the assistant inside our existing website or customer portal?",
        answer:
          "Yes. We build assistants both as embeddable web components and as dedicated logged-in panels matching your brand tokens and accessibility standards.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Workflow Automation",
    shortTitle: "AI Automation",
    badge: "SERVICE 03 · OPERATIONS & DOCUMENT FLOWS",
    tagline: "Automate repetitive tasks, document processing and business workflows.",
    summary:
      "Replace manual copy-paste bottlenecks across PDFs, email inboxes, CRMs, and back-office spreadsheets with structured AI extraction, validation rules, and human-approved automation pipelines.",
    seoTitle: "AI Workflow Automation & Document Processing Engineering",
    seoDescription:
      "Automate document triage, structured data extraction, CRM updates, and internal business workflows with human oversight at Bisen Studio.",
    idealFor: [
      "Operations & finance teams processing recurring invoices, forms, or briefs",
      "Agencies and SaaS teams routing inbound leads and support requests",
      "Teams connecting legacy tools where manual spreadsheet cleanup stalls growth",
    ],
    capabilities: [
      "Structured extraction from PDFs, emails, and web forms into clean typed schemas",
      "Multi-step routing across CRM, Slack, Notion, Linear, ERP & SQL stores",
      "Human-in-the-loop review queues for high-stakes approvals before writebacks",
      "Retry queues, idempotent webhook handling & clear failure audit trails",
    ],
    deliverables: [
      "Current-state workflow mapping & bottleneck identification document",
      "Automated extraction & business-rule orchestration codebase",
      "Exception/review dashboard for team sign-off on low-confidence items",
      "Webhook security verification, logging setup & runbook documentation",
      "End-to-end sample payload verification across agreed edge cases",
    ],
    stack: ["Node.js", "TypeScript", "Next.js Admin UI", "PostgreSQL", "Stripe / CRM Webhooks", "Structured LLM APIs"],
    exclusions: [
      "Third-party workflow/LLM API usage charges & webhook platform subscriptions",
      "Legacy ERP vendor support fees required for client credential provisioning",
      "Historical cleanup of un-digitized paper archives unless scoped separately",
    ],
    engagementFit:
      "Ideal for Weekly Sprints (single high-ROI pipeline) or Monthly Retainer (department-wide automation suite).",
    relatedCaseSlug: "ces-enterprise-event-operations-2026",
    faqs: [
      {
        question: "Does automation run blindly without human checks?",
        answer:
          "No—especially for financial, legal, or customer-facing actions. We build explicit confidence thresholds and human review queues so your team approves exceptions before final execution.",
      },
      {
        question: "What happens if an external third-party API goes down temporarily?",
        answer:
          "We engineer idempotent jobs with structured error logging and clean retry paths so failed steps do not silently drop records or create duplicate entries.",
      },
      {
        question: "Do we need to replace our CRM or accounting software to automate workflows?",
        answer:
          "In most cases, no. As long as your existing system offers APIs, webhooks, or structured exports, we connect around your current stack cleanly.",
      },
    ],
  },
  {
    slug: "ai-dashboards",
    title: "AI-Enhanced Dashboards",
    shortTitle: "AI Dashboards",
    badge: "SERVICE 04 · INTELLIGENT REPORTING UI",
    tagline: "Intelligent reporting, search, summarization and data exploration.",
    summary:
      "Upgrade dense analytics tables and SaaS portals with plain-English report summaries, anomaly highlights, guided metric search, and clear visual hierarchy—always backed by deterministic database calculations.",
    seoTitle: "AI-Enhanced SaaS & Executive Dashboard Development",
    seoDescription:
      "Combine crisp Swiss-grid SaaS UI, deterministic SQL telemetry, and helpful AI summarization in custom dashboards built by Bisen Studio.",
    idealFor: [
      "SaaS products whose customers struggle to interpret raw tables and charts",
      "Executive teams needing concise weekly operational & financial summaries",
      "Multi-tenant portals adding natural-language filtering over approved datasets",
    ],
    capabilities: [
      "Deterministic SQL / backend metric calculation paired with readable AI narrative summaries",
      "Natural-language filter & search helpers mapped strictly to safe query parameters",
      "Anomaly flagging, period comparisons & exportable executive stakeholder digests",
      "High-contrast, keyboard-accessible React / TypeScript component architecture",
    ],
    deliverables: [
      "Dashboard information architecture & Figma UI component system",
      "Responsive React / Next.js dashboard interface with role permissions",
      "Deterministic telemetry endpoints + scoped AI summarization layer",
      "Accessibility & responsive layout verification across desktop/tablet",
      "Git repository handover, schema notes & team walkthrough",
    ],
    stack: ["Next.js", "TypeScript", "TanStack Table", "Recharts", "PostgreSQL", "Tailwind CSS"],
    exclusions: [
      "LLM API summarization costs per generated report",
      "Cloud data warehouse hosting or external BI platform licenses",
      "Unscoped multi-source ETL warehouse migrations outside agreed brief",
    ],
    engagementFit:
      "Strong match for Monthly Studio Retainer (ongoing dashboard + AI feature shipping) or Weekly Sprint (UX + interactive prototype).",
    relatedCaseSlug: "ces-enterprise-event-operations-2026",
    faqs: [
      {
        question: "Does the AI calculate financial or operational numbers directly?",
        answer:
          "Never for system-of-record math. Database queries and typed backend services compute exact totals first; the LLM only summarizes, explains, or formats verified numbers passed in context.",
      },
      {
        question: "Can natural-language search respect user permissions and tenant boundaries?",
        answer:
          "Yes. Natural-language helpers translate user intent into whitelisted filter parameters executed by your authenticated API—never raw arbitrary SQL generation.",
      },
      {
        question: "How does this differ from your general Dashboards & SaaS service?",
        answer:
          "Our Dashboards & SaaS catalog covers broader core SaaS UI/portal engineering, while AI-Enhanced Dashboards focuses specifically on trustworthy summarization, anomaly UX, and scoped LLM query helpers.",
      },
    ],
  },
  {
    slug: "llm-integrations",
    title: "LLM & API Integrations",
    shortTitle: "LLM Integrations",
    badge: "SERVICE 05 · SECURE SYSTEM CONNECTIVITY",
    tagline: "Connect AI services securely with your existing business software.",
    summary:
      "Wire OpenAI, Anthropic, or approved enterprise model APIs safely into your existing backend, SaaS app, or CMS—with strict key management, prompt versioning, latency guards, and cost controls.",
    seoTitle: "Secure LLM & AI API Integration Services",
    seoDescription:
      "Integrate OpenAI, Anthropic, and custom AI APIs into existing web apps and business systems with strict validation, rate limits, and clean code.",
    idealFor: [
      "Engineering teams needing experienced senior bandwidth for reliable AI API plumbing",
      "Businesses replacing brittle no-code prototypes with auditable production TypeScript",
      "SaaS companies connecting internal databases, webhooks & billing to approved AI providers",
    ],
    capabilities: [
      "Provider-agnostic adapter layer so you avoid permanent vendor lock-in",
      "Strict Zod/TypeScript runtime output validation & fallback UI handling",
      "Token usage caps, per-workspace quotas & webhook signature verification",
      "Documented prompt versioning & regression test suites for core flows",
    ],
    deliverables: [
      "Technical integration plan covering API boundaries, rate limits & retention settings",
      "Clean typed server-side integration module inside your repository",
      "Usage monitoring hooks & error/timeout fallback handling",
      "Automated validation tests for structured JSON outputs",
      "Integration documentation & vendor configuration checklist",
    ],
    stack: ["TypeScript", "Node.js", "REST / GraphQL / Webhooks", "Zod Validation", "OpenAI / Anthropic SDKs", "PostgreSQL"],
    exclusions: [
      "Client's own AI vendor account setup & monthly API token consumption",
      "Enterprise legal negotiation with third-party AI model providers",
      "Major legacy monolith upgrades outside the agreed integration scope",
    ],
    engagementFit:
      "Works seamlessly via Hourly Precision (architecture review/patch), Weekly Sprint (focused integration), or Monthly Retainer.",
    relatedCaseSlug: "photobooth-supplier-2026",
    faqs: [
      {
        question: "Will our product be locked into a single AI model provider forever?",
        answer:
          "No. We structure model calls behind clean internal service adapters and typed schemas so you can swap or route across providers with minimal refactoring.",
      },
      {
        question: "How do you protect API keys and prevent runaway token bills?",
        answer:
          "All provider keys remain strictly server-side, requests are authenticated and rate-limited per user/tenant, and input length limits are enforced before calling upstream APIs.",
      },
      {
        question: "Can we configure vendor non-training and retention settings during integration?",
        answer:
          "Yes. During discovery we review your approved AI providers, document API retention/training flags supported by your chosen plan, and reflect those choices in the integration configuration.",
      },
    ],
  },
  {
    slug: "ai-mvp-development",
    title: "AI MVP & Product Development",
    shortTitle: "AI MVP Development",
    badge: "SERVICE 06 · 0→1 PRODUCT LAUNCH",
    tagline: "Validate AI product ideas through focused prototypes and MVPs.",
    summary:
      "Go from product concept to a real, demo-ready, customer-testable AI software product—pairing senior UX craft, clean code architecture, and AI-assisted development velocity so you launch leaner and raise or sell sooner.",
    seoTitle: "AI MVP & Custom Software Product Development",
    seoDescription:
      "Launch a focused, investor- and user-ready AI MVP with cohesive branding, UI/UX, and full-stack TypeScript engineering at Bisen Studio.",
    idealFor: [
      "Founders validating an AI-enabled SaaS or mobile concept with early customers",
      "Seed teams needing a credible product build & visual brand before fundraising",
      "Product leaders launching an internal AI pilot without diverting core roadmap staff",
    ],
    capabilities: [
      "Scope prioritization to ship high-signal core workflows first—without feature bloat",
      "Cohesive product branding, Figma UI system & intuitive AI interaction states",
      "Full-stack build (auth, billing hooks, database, core AI engine & deploy setup)",
      "Human-reviewed codebase structured cleanly for your future in-house engineers",
    ],
    deliverables: [
      "Scoped MVP specification, prioritized feature list & clickable UI prototype",
      "Brand starter kit + reusable Figma design system",
      "Working full-stack web or mobile MVP in your private Git repository",
      "Core AI integration with human review & safety guardrails",
      "Production staging deployment & post-launch iteration roadmap",
    ],
    stack: ["Next.js", "React Native / Expo", "TypeScript", "PostgreSQL", "Stripe", "Figma"],
    exclusions: [
      "Cloud infrastructure, domain, email & LLM API vendor accounts",
      "App Store / Google Play developer enrollment fees (paid on client account)",
      "Multi-month post-MVP enterprise features outside the agreed MVP brief",
    ],
    engagementFit:
      "Designed for Weekly Sprints (interactive validation) transitioning into a Monthly Studio Retainer for full MVP launch.",
    relatedCaseSlug: "alabak-courier-mobile-app",
    faqs: [
      {
        question: "How do you keep an AI MVP from turning into throwaway prototype code?",
        answer:
          "AI-assisted tools speed up repetitive scaffolding, while our senior principals control folder structure, database schemas, authentication boundaries, and code review—so future hires can extend it cleanly.",
      },
      {
        question: "Can you design both the product interface and our pitch/launch visuals?",
        answer:
          "Yes. Because our 3 principals span UI/UX design, brand identity, and full-stack software engineering, your MVP and launch presence share one consistent system.",
      },
      {
        question: "How are MVP timelines and pricing determined?",
        answer:
          "During a free technical consultation we isolate the core user journey first, then propose a clear Weekly Sprint or Monthly Retainer scope after discovery so budget stays transparent.",
      },
    ],
  },
];

export function getAIEngineeringServiceBySlug(slug: string): AIEngineeringService | undefined {
  return AI_ENGINEERING_SERVICES.find((s) => s.slug === slug);
}

export function getAllAIEngineeringServiceSlugs(): string[] {
  return AI_ENGINEERING_SERVICES.map((s) => s.slug);
}

export const AI_THREE_PILLARS = [
  {
    eyebrow: "AI Solutions",
    title: "What We Build",
    description:
      "Practical AI-powered web platforms, grounded knowledge assistants, intelligent dashboards, workflow automation, and focused MVPs shaped around real business outcomes.",
  },
  {
    eyebrow: "AI-Assisted Engineering",
    title: "How We Build",
    description:
      "Senior engineers use modern AI coding tools carefully to accelerate repetitive scaffolding, typed contracts, and test coverage—freeing human focus for UX craft and edge cases.",
  },
  {
    eyebrow: "Human Accountability",
    title: "How We Maintain Quality",
    description:
      "Every architectural choice, security boundary, pull request, and release candidate is designed, reviewed, and signed off by our 3 experienced principals.",
  },
];

export interface PipelineStage {
  step: string;
  title: string;
  owner: string;
  description: string;
  output: string;
}

export const AI_PIPELINE_STAGES: PipelineStage[] = [
  {
    step: "STAGE 01",
    title: "Discover & Architect",
    owner: "Asif Bisen & Azma Bisen",
    description:
      "Senior-led requirement discovery, technical planning, user journeys, architecture, data models and security considerations.",
    output: "Approved technical roadmap",
  },
  {
    step: "STAGE 02",
    title: "Design & AI-Assisted Development",
    owner: "Rajpoot Talib & Asif Bisen",
    description:
      "Design reusable interfaces and develop the application using AI-assisted workflows under engineering supervision.",
    output: "Working product increments",
  },
  {
    step: "STAGE 03",
    title: "Human Code Review & Security Checks",
    owner: "Rajpoot Talib & Asif Bisen",
    description:
      "Review generated code, test important functions, inspect dependencies, validate access control and correct implementation issues.",
    output: "Reviewed release candidate",
  },
  {
    step: "STAGE 04",
    title: "QA, Launch & Continuous Improvement",
    owner: "Full 3-Principal Team",
    description:
      "Test critical user journeys, assess accessibility and performance, deploy according to the agreed scope and plan future improvements.",
    output: "Tested, documented handover",
  },
];

export const TEAM_AI_RESPONSIBILITIES: Record<
  string,
  { focus: string; responsibility: string }
> = {
  "asif-bisen": {
    focus: "Product Architecture & Final Delivery Review",
    responsibility:
      "Leads technical discovery, system architecture, UI/product direction, and final engineering sign-off across client engagements.",
  },
  "rajpoot-talib": {
    focus: "Full-Stack Implementation, APIs & Security Checks",
    responsibility:
      "Leads backend APIs, LLM integrations, database modeling, automated checks, and hands-on code review of AI-assisted increments.",
  },
  "azma-bisen": {
    focus: "AI UX Systems, Information Design & Visual Polish",
    responsibility:
      "Shapes intuitive conversational UX, structured dashboard hierarchy, brand systems, and accessible responsive interfaces.",
  },
};

export interface ScopeExpectationRow {
  projectType: string;
  typicalScope: string;
  timeline: string;
}

export const AI_SCOPE_EXPECTATIONS: ScopeExpectationRow[] = [
  {
    projectType: "Business Website",
    typicalScope: "8–12 pages, CMS & standard integrations",
    timeline: "After discovery",
  },
  {
    projectType: "SaaS MVP",
    typicalScope: "Defined core workflows and user roles",
    timeline: "After scope approval",
  },
  {
    projectType: "AI Assistant / Workflow Automation",
    typicalScope: "Knowledge indexing, connectors & human guardrails",
    timeline: "After technical assessment",
  },
  {
    projectType: "Mobile App MVP",
    typicalScope: "Selected features and platform requirements",
    timeline: "After technical assessment",
  },
  {
    projectType: "Design System",
    typicalScope: "Agreed components, states and documentation",
    timeline: "After component audit",
  },
];

export const AI_ENGINEERING_STANDARDS = [
  {
    title: "Human-Led Architecture",
    detail:
      "System architecture, database schemas, and key technical trade-offs are designed and approved by senior engineers—never delegated blindly to code generators.",
  },
  {
    title: "AI-Assisted Implementation",
    detail:
      "AI accelerates boilerplate scaffolding and routine refactoring while humans remain strictly accountable for architecture, logic correctness, and maintainability.",
  },
  {
    title: "Code & Security Review",
    detail:
      "Structured automated checks and human line review appropriate to each project's risk cover authentication, access control, dependency hygiene, and input validation.",
  },
  {
    title: "Confidentiality & Vendor Controls",
    detail:
      "Client data handling rules, Mutual NDAs, and approved AI tool / API retention configurations are reviewed and agreed in writing before work begins.",
  },
];

export const AI_TECH_CAPABILITIES = [
  {
    group: "Frontend & Product UI",
    items: [
      "Next.js App Router, React & strict TypeScript",
      "Accessible Tailwind CSS & Figma design token systems",
      "Streaming AI chat, approval queues & inline citations UX",
      "Interactive SaaS charts, virtualized tables & responsive layouts",
    ],
  },
  {
    group: "Backend & Data Systems",
    items: [
      "Node.js REST / webhook services & typed API contracts",
      "PostgreSQL, relational modeling & pgvector search indexes",
      "Role-based access control (RBAC) & tenant isolation",
      "Idempotent background workers & audit-friendly logs",
    ],
  },
  {
    group: "AI & LLM Integrations",
    items: [
      "OpenAI & Anthropic API adapters with structured JSON schemas",
      "Retrieval-augmented generation (RAG) & document chunking",
      "Confidence thresholds & human-in-the-loop review gates",
      "Server-side API key protection & per-tenant usage caps",
    ],
  },
  {
    group: "Quality, Security & Ops",
    items: [
      "Manual PR code review & type-check verification",
      "WCAG-conscious keyboard navigation & semantic markup",
      "CI/CD build checks & staging preview environments",
      "Clean Git documentation & post-launch transition support",
    ],
  },
];

export const AI_DELIVERABLE_SCOPE = {
  included: [
    "Discovery alignment, technical roadmap & data-flow review",
    "Interactive UI prototypes & reusable Figma / React component states",
    "Human-reviewed custom source code delivered in your Git repository",
    "Configured AI model API integrations, validation schemas & fallbacks",
    "Functional QA testing of critical user paths & deployment assistance",
    "Handover walkthrough, environment variable guide & maintenance notes",
  ],
  excluded: [
    "Third-party LLM API token bills (OpenAI, Anthropic, etc.)",
    "Cloud hosting, managed database, CDN & domain infrastructure charges",
    "Paid third-party SaaS tools, stock assets, or commercial font licenses",
    "Out-of-scope modules, formal external audits, or 24/7 SRE unless contracted",
  ],
};

export const AI_ENGAGEMENT_FLOW = [
  {
    step: "01",
    title: "Technical Consultation",
    detail:
      "Share your business workflow, technical context, and security requirements—under Mutual NDA if requested.",
  },
  {
    step: "02",
    title: "Discovery & Proposal",
    detail:
      "Receive a written scope breakdown covering deliverables, exclusions, timeline estimate, and recommended engagement model.",
  },
  {
    step: "03",
    title: "Iterative Milestones",
    detail:
      "Review real staging builds, UI prototypes, and clean commits every few days with direct access to our 3 principals.",
  },
  {
    step: "04",
    title: "Handover & Support",
    detail:
      "Launch with full source ownership of paid deliverables, clear documentation, and optional maintenance retainer support.",
  },
];

export const AI_ENGINEERING_FAQS: ServiceFAQ[] = [
  {
    question: "Who owns software written with AI-assisted engineering workflows?",
    answer:
      "Custom deliverables—source code, Figma design files, application logic, and project documentation created for your engagement—transfer 100% to your company upon settlement of the applicable invoice. Open-source packages, licensed third-party frameworks, third-party AI APIs, and our pre-existing internal templates remain governed by their respective standard licenses.",
  },
  {
    question: "How is sensitive client data or proprietary code handled with AI tools?",
    answer:
      "Before starting work, we agree on confidentiality terms (including Mutual NDA on request) and document which AI vendor tiers and API retention controls are permitted for your project. Confidential client records are never fed into unmanaged public consumer training pools.",
  },
  {
    question: "What makes this different from hiring a developer to 'vibe-code' a fast prototype?",
    answer:
      "Unreviewed AI-generated prototypes frequently break at edge cases, leak credentials, or create tangled dependencies that cost more to fix later. At Bisen Studio, senior engineers define architecture first, supervise implementation, and manually review pull requests before release.",
  },
  {
    question: "Can you integrate AI features into our existing SaaS product without rebuilding from scratch?",
    answer:
      "Yes. Many clients engage us specifically to add an AI assistant, summarization layer, workflow automation, or semantic search API alongside their existing backend while keeping current systems intact.",
  },
  {
    question: "Are LLM API usage charges, cloud servers, and vector databases included in your pricing?",
    answer:
      "No—to keep your ongoing operating costs transparent and avoid agency markups, LLM inference APIs, cloud hosting, managed databases, and third-party SaaS subscriptions run directly on accounts your company owns.",
  },
  {
    question: "How do we start—Fixed Discovery, Weekly Sprint, or Monthly Retainer?",
    answer:
      "Start with a free Technical Consultation so we can assess complexity together. Small scoped prototypes or audits fit Hourly ($65/hr) or Weekly Sprints ($2,200/wk), while continuous AI product builds fit Monthly Retainers ($6,500/mo) or custom-scoped milestones.",
  },
];

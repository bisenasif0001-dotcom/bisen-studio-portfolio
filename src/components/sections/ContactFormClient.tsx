"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileUp,
  Link2,
  Lock,
  RotateCcw,
  Send,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useCurrency } from "@/components/context/CurrencyContext";
import {
  ALL_INTAKE_SERVICES,
  BUDGET_OPTIONS_BY_ENGAGEMENT,
  ENGAGEMENT_OPTIONS,
  INTAKE_CATEGORIES,
  resolveSmartIntakeContext,
  type CatalogServiceOption,
  type IntakeCategoryId,
  type IntakeEngagementId,
} from "@/data/projectIntakeCatalog";
import { ProjectSnapshotSidebar } from "@/components/sections/ProjectSnapshotSidebar";
import { ServiceAutocompleteInput } from "@/components/sections/ServiceAutocompleteInput";
import { cn } from "@/lib/utils";

interface AttachedFileItem {
  name: string;
  sizeBytes: number;
  mimeType: string;
}

interface ConfirmationPayload {
  referenceId: string;
  status: string;
  serviceSummary: string;
  message: string;
  requestNda: boolean;
}

const REGIONS = [
  "United States (EST / CST / PST)",
  "United Kingdom & Europe (GMT / CET)",
  "Australia & New Zealand (AEST / NZST)",
  "Canada (EST / MST / PST)",
  "Other International Region",
];

const CLIENT_TYPES = [
  "Startup (Pre-Seed to Series B)",
  "Individual / Solo Founder",
  "Established Company / Enterprise",
  "Agency Partner",
];

const TIMELINE_OPTIONS = [
  "ASAP / Within 2 Weeks",
  "Within 1 Month",
  "1–3 Months",
  "Flexible / Exploring Options",
];

const STEPS = [
  { id: 1, title: "1. Project" },
  { id: 2, title: "2. Scope & Budget" },
  { id: 3, title: "3. Contact & Submit" },
] as const;

const DRAFT_STORAGE_KEY = "bisen_project_brief_draft_v1";
const ALLOWED_EXT = new Set(["pdf", "jpg", "jpeg", "png", "docx", "zip"]);
const MAX_FILE_BYTES = 10 * 1024 * 1024;

export function ContactFormClient() {
  const searchParams = useSearchParams();
  const { currency } = useCurrency();

  const resolvedContext = useMemo(
    () => resolveSmartIntakeContext(new URLSearchParams(searchParams.toString())),
    [searchParams]
  );

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1: Project & Context-Aware Scope
  const [selectedCategories, setSelectedCategories] = useState<IntakeCategoryId[]>([
    "website",
  ]);
  const [specificServiceId, setSpecificServiceId] = useState<string>("");
  const [subCategoryLabel, setSubCategoryLabel] = useState<string | null>(null);
  const [portfolioSlug, setPortfolioSlug] = useState<string | null>(null);
  const [portfolioTitle, setPortfolioTitle] = useState<string | null>(null);
  const [contextBannerVisible, setContextBannerVisible] = useState<boolean>(false);

  // Dynamic context-aware questions per active category
  const [webUrl, setWebUrl] = useState("");
  const [webBuildType, setWebBuildType] = useState("New Website Build");
  const [webCms, setWebCms] = useState("Next.js / Custom");
  const [mobilePlatforms, setMobilePlatforms] = useState("iOS & Android (Cross-Platform)");
  const [mobileDesignStatus, setMobileDesignStatus] = useState("Need UI/UX Design + Build");
  const [graphicOutput, setGraphicOutput] = useState("Digital & Print Assets");
  const [saasStage, setSaasStage] = useState("New 0→1 Product MVP");
  const [saasModules, setSaasModules] = useState("Auth, Roles & Analytics Dashboard");
  const [aiUseCase, setAiUseCase] = useState("AI Assistant / Workflow Automation");
  const [aiSensitivity, setAiSensitivity] = useState("Standard Business Data (NDA Preferred)");

  // Step 2: Engagement, Linked Budget, References
  const [engagement, setEngagement] = useState<IntakeEngagementId>("unsure");
  const [budget, setBudget] = useState<string>("3k-10k");
  const [timeline, setTimeline] = useState<string>(TIMELINE_OPTIONS[1]);
  const [message, setMessage] = useState<string>("");
  const [referenceLinksRaw, setReferenceLinksRaw] = useState<string>("");
  const [attachedFiles, setAttachedFiles] = useState<AttachedFileItem[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);

  // Step 3: Contact Identity & Consents (Privacy NEVER pre-checked!)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [region, setRegion] = useState(REGIONS[0]);
  const [clientType, setClientType] = useState(CLIENT_TYPES[0]);
  const [requestNda, setRequestNda] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [websiteTrap, setWebsiteTrap] = useState("");

  const [draftRestoredNotice, setDraftRestoredNotice] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<ConfirmationPayload | null>(null);

  // Apply validated URL context cleanly (takes priority when landing from a CTA)
  useEffect(() => {
    if (resolvedContext.hasContext) {
      setSelectedCategories(
        resolvedContext.categories.length > 0 ? resolvedContext.categories : ["website"]
      );
      setSpecificServiceId(resolvedContext.matchedService?.serviceId ?? "");
      setSubCategoryLabel(resolvedContext.matchedSubCategoryName);
      setPortfolioSlug(resolvedContext.matchedPortfolioProject?.slug ?? null);
      setPortfolioTitle(resolvedContext.matchedPortfolioProject?.title ?? null);
      setEngagement(resolvedContext.engagement);
      setBudget(resolvedContext.budget);
      setContextBannerVisible(true);

      if (resolvedContext.initialGoalSeed) {
        setMessage((prev) => (prev.trim() ? prev : resolvedContext.initialGoalSeed));
      }
      return;
    }

    // Only restore non-sensitive browser-session draft if user arrives without URL query overrides
    try {
      const saved = window.sessionStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as {
          categories?: IntakeCategoryId[];
          engagement?: IntakeEngagementId;
          budget?: string;
          timeline?: string;
          message?: string;
          referenceLinksRaw?: string;
        };
        if (parsed.categories && parsed.categories.length > 0) {
          setSelectedCategories(parsed.categories);
          setDraftRestoredNotice(true);
        }
        if (parsed.engagement) setEngagement(parsed.engagement);
        if (parsed.budget) setBudget(parsed.budget);
        if (parsed.timeline) setTimeline(parsed.timeline);
        if (parsed.message) setMessage(parsed.message);
        if (parsed.referenceLinksRaw) setReferenceLinksRaw(parsed.referenceLinksRaw);
      }
    } catch {
      // Ignore storage access errors
    }
  }, [resolvedContext]);

  // Keep non-sensitive scope selections backed up in sessionStorage for accidental refresh / Back navigation
  useEffect(() => {
    if (confirmation) return;
    try {
      window.sessionStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({
          categories: selectedCategories,
          engagement,
          budget,
          timeline,
          message,
          referenceLinksRaw,
        })
      );
    } catch {
      // Ignore storage errors
    }
  }, [selectedCategories, engagement, budget, timeline, message, referenceLinksRaw, confirmation]);

  const toggleCategory = (catId: IntakeCategoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(catId)) {
        if (prev.length === 1) return prev;
        const next = prev.filter((id) => id !== catId);
        // Clear specific service if its category was removed
        const activeSvc = ALL_INTAKE_SERVICES.find((s) => s.serviceId === specificServiceId);
        if (activeSvc && activeSvc.categoryId === catId) {
          setSpecificServiceId("");
          setSubCategoryLabel(null);
        }
        return next;
      }
      return [...prev, catId];
    });
  };

  const handleEngagementChange = (next: IntakeEngagementId) => {
    setEngagement(next);
    const matchingOptions = BUDGET_OPTIONS_BY_ENGAGEMENT[next];
    if (!matchingOptions.some((o) => o.value === budget)) {
      setBudget(matchingOptions[0]?.value ?? "custom-guidance");
    }
  };

  const selectedServiceObject = useMemo(
    () => ALL_INTAKE_SERVICES.find((s) => s.serviceId === specificServiceId) ?? null,
    [specificServiceId]
  );

  const handleAutocompleteSelect = (service: CatalogServiceOption | null) => {
    if (!service) {
      setSpecificServiceId("");
      setSubCategoryLabel(null);
      return;
    }
    setSpecificServiceId(service.serviceId);
    setSubCategoryLabel(service.subCategoryName);
    setSelectedCategories((prev) =>
      prev.includes(service.categoryId) ? prev : [...prev, service.categoryId]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const incoming = Array.from(e.target.files ?? []);
    if (incoming.length === 0) return;

    const validated: AttachedFileItem[] = [];
    for (const file of incoming) {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
      if (!ALLOWED_EXT.has(ext)) {
        setFileError(`"${file.name}" skipped — supported types: PDF, JPG, PNG, DOCX, ZIP.`);
        continue;
      }
      if (file.size > MAX_FILE_BYTES) {
        setFileError(`"${file.name}" exceeds the 10 MB per-file limit.`);
        continue;
      }
      validated.push({
        name: file.name,
        sizeBytes: file.size,
        mimeType: file.type || "application/octet-stream",
      });
    }

    setAttachedFiles((prev) => [...prev, ...validated].slice(0, 3));
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const clearPrefillOrDraft = () => {
    setSelectedCategories(["website"]);
    setSpecificServiceId("");
    setSubCategoryLabel(null);
    setPortfolioSlug(null);
    setPortfolioTitle(null);
    setEngagement("unsure");
    setBudget("3k-10k");
    setMessage("");
    setReferenceLinksRaw("");
    setAttachedFiles([]);
    setContextBannerVisible(false);
    setDraftRestoredNotice(false);
    try {
      window.sessionStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const parsedLinks = useMemo(
    () =>
      referenceLinksRaw
        .split(/[\n,]+/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    [referenceLinksRaw]
  );

  const summaryTextForCopy = useMemo(() => {
    const cats = selectedCategories
      .map((id) => INTAKE_CATEGORIES.find((c) => c.id === id)?.label ?? id)
      .join(" + ");
    const engLabel =
      ENGAGEMENT_OPTIONS.find((e) => e.id === engagement)?.label ?? engagement;
    const budgetLabel =
      BUDGET_OPTIONS_BY_ENGAGEMENT[engagement]?.find((b) => b.value === budget)?.label ?? budget;

    return [
      `Bisen Studio — Project Brief Summary`,
      `Category Focus: ${cats}`,
      selectedServiceObject
        ? `Specific Service: ${selectedServiceObject.title} (${selectedServiceObject.subCategoryName})`
        : null,
      portfolioTitle ? `Reference Case: ${portfolioTitle}` : null,
      `Engagement Model: ${engLabel}`,
      `Budget Range: ${budgetLabel}`,
      `Timeline: ${timeline}`,
      message.trim() ? `Goals: ${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }, [
    selectedCategories,
    selectedServiceObject,
    portfolioTitle,
    engagement,
    budget,
    timeline,
    message,
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 3) {
      return;
    }
    setSubmitError(null);

    if (!name.trim() || name.trim().length < 2) {
      setSubmitError("Please enter your full name in Step 3.");
      setStep(3);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSubmitError("Please enter a valid work email address.");
      setStep(3);
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setSubmitError("Please share at least a short project overview (10+ characters) in Step 2.");
      setStep(2);
      return;
    }
    if (!privacyAccepted) {
      setSubmitError(
        "Please check the required Privacy Policy acknowledgement box before submitting."
      );
      setStep(3);
      return;
    }

    const contextDetails: Record<string, string> = {};
    if (selectedCategories.includes("website")) {
      contextDetails.websiteBuildType = webBuildType;
      contextDetails.websiteCms = webCms;
      if (webUrl.trim()) contextDetails.existingWebsiteUrl = webUrl.trim();
    }
    if (selectedCategories.includes("mobile-app")) {
      contextDetails.mobilePlatforms = mobilePlatforms;
      contextDetails.mobileDesignStatus = mobileDesignStatus;
    }
    if (selectedCategories.includes("graphic-design")) {
      contextDetails.graphicOutput = graphicOutput;
    }
    if (selectedCategories.includes("dashboards-saas")) {
      contextDetails.saasStage = saasStage;
      contextDetails.saasModules = saasModules;
    }
    if (selectedCategories.includes("ai-engineering")) {
      contextDetails.aiUseCase = aiUseCase;
      contextDetails.aiSensitivity = aiSensitivity;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          region,
          clientType,
          engagement,
          budget,
          currency,
          timeline,
          categories: selectedCategories,
          services: selectedCategories.map(
            (id) => INTAKE_CATEGORIES.find((c) => c.id === id)?.label ?? id
          ),
          specificServiceId: selectedServiceObject?.serviceId ?? null,
          specificServiceTitle: selectedServiceObject?.title ?? null,
          portfolioProjectSlug: portfolioSlug,
          entrySource: resolvedContext.sourceKey,
          contextDetails,
          referenceLinks: parsedLinks,
          attachedFiles,
          message: message.trim(),
          requestNda,
          privacyAccepted,
          marketingOptIn,
          websiteTrap,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setSubmitError(
          data.error ||
            "We couldn't submit right now—your inputs are preserved. Please retry or email hello@bisenstudio.com."
        );
      } else {
        try {
          window.sessionStorage.removeItem(DRAFT_STORAGE_KEY);
        } catch {
          // ignore
        }
        setConfirmation({
          referenceId: data.referenceId,
          status: data.status ?? "Received",
          serviceSummary: data.serviceSummary,
          message: data.message,
          requestNda,
        });
      }
    } catch {
      setSubmitError(
        "Network error while sending your brief. Your entered fields are preserved—please retry."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Submission Confirmation State
  if (confirmation) {
    return (
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="rounded-3xl border-2 border-gold bg-navy p-8 text-white shadow-xl sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    Project Brief Recorded
                  </p>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Thank you, {name.split(" ")[0]} — Brief Received
                  </h2>
                </div>
              </div>
              <span className="rounded-full bg-gold px-3.5 py-1 font-mono text-xs font-bold uppercase text-navy">
                Status: {confirmation.status}
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-navy-mid p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  Reference ID
                </p>
                <p className="mt-1 font-mono text-xl font-bold text-white">
                  {confirmation.referenceId}
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-navy-mid p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  Recorded Focus
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  {confirmation.serviceSummary}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-white/85">
              {confirmation.message}
            </p>

            {confirmation.requestNda && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-navy-mid px-4 py-2 font-mono text-xs text-gold">
                <Lock className="h-3.5 w-3.5" />
                <span>Mutual NDA requested prior to confidential review</span>
              </div>
            )}

            <div className="mt-8 rounded-2xl border border-white/15 bg-navy-deep p-6">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                What Happens Next?
              </h3>
              <ol className="mt-4 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                <li>1. Your project brief and context are securely recorded.</li>
                <li>2. Asif Bisen, Rajpoot Talib &amp; Azma Bisen review requirements.</li>
                <li>3. We check timeline fit and prepare clarifying questions if needed.</li>
                <li>4. We aim to reply within 1 business day with proposed next steps.</li>
              </ol>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setConfirmation(null);
                  setStep(1);
                }}
                className="rounded-xl border border-white/25 bg-navy-mid px-5 py-3 text-sm font-semibold text-white hover:border-gold"
              >
                Submit Another Inquiry
              </button>
              <Link
                href="/work"
                className="rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy hover:bg-gold-bright"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <ProjectSnapshotSidebar
            selectedCategories={selectedCategories}
            specificServiceTitle={selectedServiceObject?.title ?? null}
            subCategoryName={subCategoryLabel}
            portfolioTitle={portfolioTitle}
            engagement={engagement}
            budget={budget}
            timeline={timeline}
            filesCount={attachedFiles.length}
            linksCount={parsedLinks.length}
            summaryTextForCopy={summaryTextForCopy}
          />
        </aside>
      </div>
    );
  }

  const activeBudgetOptions = BUDGET_OPTIONS_BY_ENGAGEMENT[engagement];

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* Main 3-Step Smart Brief Builder */}
      <div className="lg:col-span-8">
        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.target as HTMLElement)?.tagName === "INPUT") {
              e.preventDefault();
            }
          }}
          noValidate
          className="space-y-6 rounded-3xl border border-navy/15 bg-white p-6 shadow-sm sm:p-9"
        >
          {/* Honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={websiteTrap}
            onChange={(e) => setWebsiteTrap(e.target.value)}
            className="hidden"
          />

          {/* Smart Context Banner or Restored Draft Notice */}
          {contextBannerVisible && resolvedContext.contextBadges.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gold/70 bg-gold-tint/75 p-4 text-navy">
              <div className="flex items-start gap-2.5">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-gold-deep">
                    Context Loaded · {resolvedContext.sourceLabel}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-navy">
                    {resolvedContext.contextBadges.join(" · ")}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-muted">
                    Preselected based on what you explored—customize, add services, or clear below.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearPrefillOrDraft}
                className="inline-flex items-center gap-1 text-xs font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold-deep"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>
          )}

          {!contextBannerVisible && draftRestoredNotice && (
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-navy/15 bg-surface px-4 py-2.5 text-xs text-navy">
              <span>Draft scope restored from your earlier session.</span>
              <button
                type="button"
                onClick={clearPrefillOrDraft}
                className="font-semibold text-gold-deep underline underline-offset-4"
              >
                Clear Draft
              </button>
            </div>
          )}

          {/* Header & Step Progress Indicator */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Smart Project Brief · Step {step} of 3
              </p>
              <span className="font-mono text-xs text-ink-muted">
                Asif Bisen · Rajpoot Talib · Azma Bisen
              </span>
            </div>

            <div
              className="mt-4 grid grid-cols-3 gap-2"
              role="tablist"
              aria-label="Project brief steps"
            >
              {STEPS.map((s) => {
                const isCurrent = step === s.id;
                const isPast = step > s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={isCurrent}
                    onClick={() => setStep(s.id)}
                    className={cn(
                      "transition-none rounded-xl border px-3 py-2.5 text-left text-xs font-semibold sm:text-sm",
                      isCurrent
                        ? "border-navy bg-navy text-gold ring-2 ring-gold"
                        : isPast
                          ? "border-navy/25 bg-surface text-navy"
                          : "border-navy/12 bg-white text-ink-muted hover:text-navy"
                    )}
                  >
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= STEP 1: PROJECT & CONTEXT-AWARE SCOPE ================= */}
          {step === 1 && (
            <div className="space-y-7 pt-2">
              <div>
                <h2 className="text-xl font-bold text-navy sm:text-2xl">
                  What would you like us to build?
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  Select one or multiple categories—we seamlessly combine design and engineering.
                </p>
              </div>

              {/* Multi-Category Selector */}
              <div>
                <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-navy">
                  Service Categories (Select all that apply)
                </span>
                <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                  {INTAKE_CATEGORIES.map((cat) => {
                    const active = selectedCategories.includes(cat.id);
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => toggleCategory(cat.id)}
                        aria-pressed={active}
                        className={cn(
                          "transition-none flex flex-col items-start rounded-xl border p-3.5 text-left",
                          active
                            ? "border-navy bg-navy text-white ring-2 ring-gold"
                            : "border-navy/15 bg-surface text-navy hover:border-navy/40"
                        )}
                      >
                        <span
                          className={cn(
                            "text-sm font-semibold",
                            active ? "text-gold" : "text-navy"
                          )}
                        >
                          {cat.label}
                        </span>
                        <span
                          className={cn(
                            "mt-1 text-xs leading-snug",
                            active ? "text-white/80" : "text-ink-muted"
                          )}
                        >
                          {cat.summary}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Specific Catalog Service Auto-Suggestion Combobox */}
              <ServiceAutocompleteInput
                allServices={ALL_INTAKE_SERVICES}
                selectedCategories={selectedCategories}
                selectedService={selectedServiceObject}
                onSelectService={handleAutocompleteSelect}
              />

              {/* Context-Aware Dynamic Questions Based on Selected Categories */}
              <div className="space-y-4 rounded-2xl border border-navy/12 bg-surface p-5">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  Tailored Scope Questions (For Your Selected Services)
                </p>

                {selectedCategories.includes("website") && (
                  <div className="grid gap-3 border-b border-navy/10 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-3">
                    <div>
                      <label htmlFor="q-web-type" className="block text-xs font-semibold text-navy">
                        Website Type
                      </label>
                      <select
                        id="q-web-type"
                        value={webBuildType}
                        onChange={(e) => setWebBuildType(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>New Website Build</option>
                        <option>Website Redesign / Migration</option>
                        <option>Landing Pages / Funnels</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="q-web-cms" className="block text-xs font-semibold text-navy">
                        Preferred Stack / CMS
                      </label>
                      <select
                        id="q-web-cms"
                        value={webCms}
                        onChange={(e) => setWebCms(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>Next.js / Custom</option>
                        <option>WordPress</option>
                        <option>Shopify / E-Commerce</option>
                        <option>Webflow</option>
                        <option>Open to Recommendation</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="q-web-url" className="block text-xs font-semibold text-navy">
                        Existing URL (Optional)
                      </label>
                      <input
                        id="q-web-url"
                        type="url"
                        value={webUrl}
                        onChange={(e) => setWebUrl(e.target.value)}
                        placeholder="https://yoursite.com"
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      />
                    </div>
                  </div>
                )}

                {selectedCategories.includes("mobile-app") && (
                  <div className="grid gap-3 border-b border-navy/10 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-2">
                    <div>
                      <label htmlFor="q-mob-plat" className="block text-xs font-semibold text-navy">
                        Mobile Platforms
                      </label>
                      <select
                        id="q-mob-plat"
                        value={mobilePlatforms}
                        onChange={(e) => setMobilePlatforms(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>iOS &amp; Android (Cross-Platform)</option>
                        <option>iOS Only</option>
                        <option>Android Only</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="q-mob-stage" className="block text-xs font-semibold text-navy">
                        Design &amp; Backend Status
                      </label>
                      <select
                        id="q-mob-stage"
                        value={mobileDesignStatus}
                        onChange={(e) => setMobileDesignStatus(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>Need UI/UX Design + Build</option>
                        <option>Have Figma Designs Already</option>
                        <option>Need App + Cloud Backend APIs</option>
                      </select>
                    </div>
                  </div>
                )}

                {selectedCategories.includes("graphic-design") && (
                  <div className="border-b border-navy/10 pb-4 last:border-b-0 last:pb-0">
                    <label htmlFor="q-gfx-out" className="block text-xs font-semibold text-navy">
                      Graphic Design Output Format
                    </label>
                    <select
                      id="q-gfx-out"
                      value={graphicOutput}
                      onChange={(e) => setGraphicOutput(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy sm:max-w-md"
                    >
                      <option>Digital &amp; Print Assets</option>
                      <option>Brand Identity + Editable Figma/AI Source Files</option>
                      <option>Print Pre-Press &amp; Packaging Die-Lines (CMYK/PMS)</option>
                      <option>Pitch Deck / Marketing Creatives</option>
                    </select>
                  </div>
                )}

                {selectedCategories.includes("dashboards-saas") && (
                  <div className="grid gap-3 border-b border-navy/10 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-2">
                    <div>
                      <label htmlFor="q-saas-stage" className="block text-xs font-semibold text-navy">
                        Product Stage
                      </label>
                      <select
                        id="q-saas-stage"
                        value={saasStage}
                        onChange={(e) => setSaasStage(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>New 0→1 Product MVP</option>
                        <option>Upgrade Existing Dashboard / SaaS</option>
                        <option>Internal Client / Operations Portal</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="q-saas-mod" className="block text-xs font-semibold text-navy">
                        Core Modules Needed
                      </label>
                      <select
                        id="q-saas-mod"
                        value={saasModules}
                        onChange={(e) => setSaasModules(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>Auth, Roles &amp; Analytics Dashboard</option>
                        <option>Billing / Subscriptions + Admin Portal</option>
                        <option>UI Design System + Figma Tokens</option>
                      </select>
                    </div>
                  </div>
                )}

                {selectedCategories.includes("ai-engineering") && (
                  <div className="grid gap-3">
                    <div>
                      <label htmlFor="q-ai-use" className="block text-xs font-semibold text-navy">
                        Primary AI Engineering Goal
                      </label>
                      <select
                        id="q-ai-use"
                        value={aiUseCase}
                        onChange={(e) => setAiUseCase(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>AI Assistant / Workflow Automation</option>
                        <option>AI-Powered Web App or MVP</option>
                        <option>LLM API Integration into Existing Software</option>
                        <option>AI-Enhanced Dashboard &amp; Search</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="q-ai-priv" className="block text-xs font-semibold text-navy">
                        Data Sensitivity &amp; Vendor Preference
                      </label>
                      <select
                        id="q-ai-priv"
                        value={aiSensitivity}
                        onChange={(e) => setAiSensitivity(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-xs text-navy"
                      >
                        <option>Standard Business Data (NDA Preferred)</option>
                        <option>Strict Customer / Regulated Data Controls</option>
                        <option>Open to Architect Recommendation</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end border-t border-navy/10 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-mid"
                >
                  <span>Continue to Scope &amp; Budget</span>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: ENGAGEMENT, BUDGET & REFERENCES ================= */}
          {step === 2 && (
            <div className="space-y-7 pt-2">
              <div>
                <h2 className="text-xl font-bold text-navy sm:text-2xl">
                  Engagement, Budget &amp; Project References
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  Budget options adjust dynamically to match your selected engagement cadence.
                </p>
              </div>

              {/* Preferred Engagement Model */}
              <div>
                <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-navy">
                  Preferred Engagement Model
                </span>
                <div className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
                  {ENGAGEMENT_OPTIONS.map((opt) => {
                    const active = engagement === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleEngagementChange(opt.id)}
                        aria-pressed={active}
                        className={cn(
                          "transition-none flex flex-col items-start rounded-xl border p-3.5 text-left",
                          active
                            ? "border-navy bg-navy text-white ring-2 ring-gold"
                            : "border-navy/15 bg-surface text-navy hover:border-navy/40"
                        )}
                      >
                        <span
                          className={cn(
                            "text-xs font-bold sm:text-sm",
                            active ? "text-gold" : "text-navy"
                          )}
                        >
                          {opt.label}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 font-mono text-[11px]",
                            active ? "text-white/80" : "text-ink-muted"
                          )}
                        >
                          {opt.rateHint}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-ink-muted">
                  {ENGAGEMENT_OPTIONS.find((e) => e.id === engagement)?.helperText}
                </p>
              </div>

              {/* Contextual Budget + Timeline */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-budget" className="block text-xs font-semibold text-navy">
                    Recommended Budget Range ({currency} reference / USD base)
                  </label>
                  <select
                    id="c-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-4 py-3 text-sm text-navy focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none"
                  >
                    {activeBudgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-timeline" className="block text-xs font-semibold text-navy">
                    Target Start / Timeline
                  </label>
                  <select
                    id="c-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-4 py-3 text-sm text-navy focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none"
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Brief / Goals */}
              <div>
                <label htmlFor="c-msg" className="block text-xs font-semibold text-navy">
                  Project Goals, Requirements &amp; Scope <span className="text-gold-deep">*</span>
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share what you are building, priority outcomes, key deliverables, and any important deadlines..."
                  className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-4 py-3 text-sm text-navy placeholder:text-ink-muted/60 focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none"
                />
              </div>

              {/* Separate Reference Links & Optional Reference File Upload */}
              <div className="grid gap-5 rounded-2xl border border-navy/12 bg-surface p-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="c-links"
                    className="flex items-center gap-1.5 text-xs font-semibold text-navy"
                  >
                    <Link2 className="h-3.5 w-3.5 text-gold-deep" />
                    <span>Reference Links (Figma, Website, Loom)</span>
                  </label>
                  <textarea
                    id="c-links"
                    rows={3}
                    value={referenceLinksRaw}
                    onChange={(e) => setReferenceLinksRaw(e.target.value)}
                    placeholder={"https://figma.com/file/...\nhttps://competitor-or-site.com"}
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-xs text-navy placeholder:text-ink-muted/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="c-files"
                    className="flex items-center gap-1.5 text-xs font-semibold text-navy"
                  >
                    <FileUp className="h-3.5 w-3.5 text-gold-deep" />
                    <span>Optional Reference Brief / File</span>
                  </label>
                  <input
                    id="c-files"
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.docx,.zip"
                    onChange={handleFileUpload}
                    className="mt-1.5 block w-full rounded-xl border border-dashed border-navy/25 bg-white px-3 py-2.5 text-xs text-navy file:mr-3 file:rounded-lg file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gold hover:file:bg-navy-mid"
                  />
                  <p className="mt-1.5 text-[11px] leading-snug text-ink-muted">
                    Optional · PDF, JPG, PNG, DOCX, ZIP (up to 10 MB, max 3 files). Requests an NDA
                    in Step 3 before sending confidential source archives.
                  </p>
                  {fileError && <p className="mt-1 text-xs font-medium text-red-700">{fileError}</p>}
                  {attachedFiles.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {attachedFiles.map((f, idx) => (
                        <li
                          key={`${f.name}-${idx}`}
                          className="flex items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1 text-xs text-navy"
                        >
                          <span className="truncate">
                            {f.name} ({Math.max(1, Math.round(f.sizeBytes / 1024))} KB)
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            aria-label={`Remove ${f.name}`}
                            className="text-ink-muted hover:text-red-700"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy/15 bg-surface px-5 py-3 text-sm font-semibold text-navy hover:border-navy"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-mid"
                >
                  <span>Continue to Contact &amp; Submit</span>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: CONTACT, NDA, CONSENT & SUBMIT ================= */}
          {step === 3 && (
            <div className="space-y-6 pt-2">
              <div>
                <h2 className="text-xl font-bold text-navy sm:text-2xl">
                  Your Details &amp; Submission
                </h2>
                <p className="mt-1 text-sm text-ink-muted">
                  Review your details below—we aim to reply within 1 business day.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-semibold text-navy">
                    Full Name <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-4 py-3 text-sm text-navy placeholder:text-ink-muted/60 focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs font-semibold text-navy">
                    Work Email <span className="text-gold-deep">*</span>
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-4 py-3 text-sm text-navy placeholder:text-ink-muted/60 focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label htmlFor="c-company" className="block text-xs font-semibold text-navy">
                    Company / Brand
                  </label>
                  <input
                    id="c-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Labs"
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-4 py-3 text-sm text-navy placeholder:text-ink-muted/60 focus:border-navy focus:ring-2 focus:ring-gold/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="c-region" className="block text-xs font-semibold text-navy">
                    Region / Timezone
                  </label>
                  <select
                    id="c-region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-3 py-3 text-sm text-navy"
                  >
                    {REGIONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="c-type" className="block text-xs font-semibold text-navy">
                    Client Profile
                  </label>
                  <select
                    id="c-type"
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-navy/15 bg-surface px-3 py-3 text-sm text-navy"
                  >
                    {CLIENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* NDA + Required Unchecked Privacy Acknowledgement + Separate Marketing Consent */}
              <div className="space-y-3 rounded-2xl border border-navy/12 bg-surface p-4 text-xs">
                <label className="flex cursor-pointer items-start gap-3 text-navy">
                  <input
                    type="checkbox"
                    checked={requestNda}
                    onChange={(e) => setRequestNda(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-navy"
                  />
                  <span>
                    <strong className="font-semibold">
                      Request an NDA before sharing confidential details
                    </strong>{" "}
                    — We will send our standard Mutual NDA before discussing proprietary architecture.
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-navy">
                  <input
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-navy"
                  />
                  <span>
                    <strong className="font-semibold">Privacy Acknowledgement *</strong> — I
                    acknowledge that Bisen Studio may process my brief strictly to respond to this
                    inquiry under the{" "}
                    <Link
                      href="/policies/privacy"
                      className="font-semibold text-navy underline decoration-gold"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-ink-muted">
                  <input
                    type="checkbox"
                    checked={marketingOptIn}
                    onChange={(e) => setMarketingOptIn(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-navy"
                  />
                  <span>
                    <strong className="font-medium text-navy">Optional Studio Updates</strong> —
                    Occasional quarterly availability notices (no unsolicited marketing without
                    consent).
                  </span>
                </label>
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-xs font-medium text-red-900"
                >
                  {submitError}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-navy/15 bg-surface px-5 py-3 text-sm font-semibold text-navy hover:border-navy"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-bold text-navy hover:bg-gold-bright disabled:opacity-60"
                >
                  <Send className="h-4 w-4 text-navy" />
                  <span>{submitting ? "Recording Brief..." : "Submit Project Brief"}</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Right Column: Dynamic Conversion Assistant */}
      <aside className="lg:col-span-4">
        <ProjectSnapshotSidebar
          selectedCategories={selectedCategories}
          specificServiceTitle={selectedServiceObject?.title ?? null}
          subCategoryName={subCategoryLabel}
          portfolioTitle={portfolioTitle}
          engagement={engagement}
          budget={budget}
          timeline={timeline}
          filesCount={attachedFiles.length}
          linksCount={parsedLinks.length}
          summaryTextForCopy={summaryTextForCopy}
        />
      </aside>
    </div>
  );
}

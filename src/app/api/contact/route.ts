import { NextResponse } from "next/server";

interface AttachedFileMeta {
  name: string;
  sizeBytes: number;
  mimeType: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  region?: string;
  clientType?: string;
  engagement?: string;
  budget?: string;
  currency?: string;
  timeline?: string;
  categories?: string[];
  services?: string[];
  specificServiceId?: string | null;
  specificServiceTitle?: string | null;
  portfolioProjectSlug?: string | null;
  entrySource?: string;
  contextDetails?: Record<string, string>;
  referenceLinks?: string[];
  attachedFiles?: AttachedFileMeta[];
  message?: string;
  requestNda?: boolean;
  privacyAccepted?: boolean;
  marketingOptIn?: boolean;
  websiteTrap?: string;
}

const ALLOWED_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png", "docx", "zip"]);
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 3;

// Lightweight in-memory duplicate guard (prevents rapid accidental double submits in warm workers)
const recentSubmissions = new Map<string, { referenceId: string; expiresAt: number }>();

function makeReferenceId(): string {
  const year = new Date().getFullYear();
  const suffix = Math.floor(10000 + Math.random() * 90000);
  return `BST-${year}-${suffix}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Silent honeypot rejection for automated bots
    if (body.websiteTrap && body.websiteTrap.trim().length > 0) {
      return NextResponse.json({
        ok: true,
        referenceId: "BST-FILTERED",
        status: "Received",
        message: "Thank you. Your inquiry has been received.",
      });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Please provide your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please share at least a brief overview of your project goals (10+ characters)." },
        { status: 400 }
      );
    }

    if (body.privacyAccepted !== true) {
      return NextResponse.json(
        { error: "Please acknowledge the Privacy Policy notice before submitting your brief." },
        { status: 400 }
      );
    }

    // Validate attached file metadata safely
    const files = Array.isArray(body.attachedFiles) ? body.attachedFiles.slice(0, MAX_FILES) : [];
    for (const f of files) {
      const ext = (f.name ?? "").split(".").pop()?.toLowerCase() ?? "";
      if (!ALLOWED_EXTENSIONS.has(ext)) {
        return NextResponse.json(
          { error: `Unsupported file type (${f.name}). Allowed: PDF, JPG, PNG, DOCX, ZIP.` },
          { status: 400 }
        );
      }
      if (!Number.isFinite(f.sizeBytes) || f.sizeBytes > MAX_FILE_BYTES) {
        return NextResponse.json(
          { error: `File "${f.name}" exceeds the 10 MB reference limit.` },
          { status: 400 }
        );
      }
    }

    // Duplicate-submission protection inside a 45-second window
    const now = Date.now();
    for (const [key, record] of recentSubmissions.entries()) {
      if (record.expiresAt < now) {
        recentSubmissions.delete(key);
      }
    }

    const dedupeKey = `${email.toLowerCase()}::${message.slice(0, 80).toLowerCase()}`;
    const existing = recentSubmissions.get(dedupeKey);
    if (existing && existing.expiresAt > now) {
      return NextResponse.json(
        {
          ok: true,
          duplicatePrevented: true,
          referenceId: existing.referenceId,
          status: "Received",
          serviceSummary:
            body.specificServiceTitle ||
            (Array.isArray(body.categories) && body.categories.length > 0
              ? body.categories.join(", ")
              : "General Project Inquiry"),
          message:
            "Your identical project brief was already recorded moments ago under this Reference ID. Our principals will respond within 1 business day.",
        },
        { status: 200 }
      );
    }

    const referenceId = makeReferenceId();
    recentSubmissions.set(dedupeKey, {
      referenceId,
      expiresAt: now + 45_000,
    });

    const serviceSummary =
      body.specificServiceTitle ||
      (Array.isArray(body.services) && body.services.length > 0
        ? body.services.join(", ")
        : "General Studio Inquiry");

    // Structured attribution & lead record ready for CRM / email relay in production
    console.info("[Bisen Studio Smart Brief]", {
      referenceId,
      inquiryStatus: "New",
      name,
      email,
      company: body.company || "N/A",
      region: body.region,
      clientType: body.clientType,
      engagement: body.engagement,
      budget: body.budget,
      currency: body.currency,
      timeline: body.timeline,
      attribution: {
        entrySource: body.entrySource ?? "direct",
        categories: body.categories ?? [],
        specificServiceId: body.specificServiceId ?? null,
        specificServiceTitle: body.specificServiceTitle ?? null,
        portfolioProjectSlug: body.portfolioProjectSlug ?? null,
      },
      contextDetails: body.contextDetails ?? {},
      referenceLinks: body.referenceLinks ?? [],
      attachedFiles: files.map((f) => ({ name: f.name, sizeBytes: f.sizeBytes })),
      requestNda: Boolean(body.requestNda),
      privacyAccepted: true,
      marketingOptIn: Boolean(body.marketingOptIn),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: true,
        referenceId,
        status: "Received",
        serviceSummary,
        message:
          "Your project brief has been recorded directly for Asif Bisen, Rajpoot Talib, and Azma Bisen. We aim to respond with next steps within 1 business day.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to process your brief right now. Your form inputs remain preserved—please retry or email hello@bisenstudio.com." },
      { status: 400 }
    );
  }
}

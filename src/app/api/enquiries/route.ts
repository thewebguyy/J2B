import { NextRequest, NextResponse } from "next/server";
import {
  categoryLabel,
  escapeHtml,
  isAllowedOrigin,
  isJsonContentType,
  MAX_BODY_BYTES,
  parseEnquiry,
  type EnquiryInput,
} from "@/lib/enquiry";
import { siteUrl } from "@/content/seo";

// In-memory, per-instance rate limiting. Adequate as a first defence; a durable
// store (e.g. Upstash) is recommended before launch. Values are not persisted.
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const attempts = new Map<string, number[]>();

function clientIp(request: NextRequest): string {
  // On Vercel, x-vercel-forwarded-for is set by the platform and is not client
  // controllable. Prefer it and only fall back to x-forwarded-for elsewhere.
  const vercelForwarded = request.headers.get("x-vercel-forwarded-for");
  const forwarded = request.headers.get("x-forwarded-for");
  return (vercelForwarded ?? forwarded ?? "unknown").split(",")[0]?.trim() ?? "unknown";
}

function allowedOrigins(): string[] {
  const configured = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  if (configured.length > 0) return configured;
  return [
    siteUrl,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://*.vercel.app",
  ];
}

async function readBody(
  request: NextRequest
): Promise<{ ok: true; text: string } | { ok: false; status: number }> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return { ok: false, status: 413 };
  }

  if (!request.body) return { ok: true, text: "" };

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      text += decoder.decode(value, { stream: true });
      if (text.length > MAX_BODY_BYTES) {
        return { ok: false, status: 413 };
      }
    }
  } catch {
    return { ok: false, status: 400 };
  }
  return { ok: true, text };
}

function renderEmail(data: {
  name: string;
  email: string;
  country: string;
  interest: string;
  message: string;
}): string {
  const messageHtml = data.message
    .split(/\r?\n/)
    .map((line) => escapeHtml(line))
    .join("<br>");

  return [
    "<div style=\"font-family: Georgia, serif; color: #12242B; max-width: 560px;\">",
    "<h2 style=\"color: #02404D; margin: 0 0 16px;\">New Journey2Better enquiry</h2>",
    "<p><strong>Name:</strong> " + escapeHtml(data.name) + "</p>",
    "<p><strong>Email:</strong> " + escapeHtml(data.email) + "</p>",
    data.country ? "<p><strong>Country:</strong> " + escapeHtml(data.country) + "</p>" : "",
    "<p><strong>Area of interest:</strong> " + escapeHtml(data.interest) + "</p>",
    data.message ? "<p><strong>Message:</strong></p><p>" + messageHtml + "</p>" : "",
    "</div>",
  ].join("");
}

export async function POST(request: NextRequest) {
  // Reject cross-origin browser submissions.
  if (!isAllowedOrigin(request.headers.get("origin"), allowedOrigins())) {
    return NextResponse.json(
      { error: "forbidden", message: "This request was blocked." },
      { status: 403 }
    );
  }

  if (!isJsonContentType(request.headers.get("content-type"))) {
    return NextResponse.json(
      { error: "unsupported_media_type", message: "Expected a JSON request body." },
      { status: 415 }
    );
  }

  const ip = clientIp(request);
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    attempts.set(ip, recent);
    return NextResponse.json(
      { error: "rate_limited", message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }
  recent.push(now);
  attempts.set(ip, recent);

  const bodyRead = await readBody(request);
  if (!bodyRead.ok) {
    const tooLarge = bodyRead.status === 413;
    return NextResponse.json(
      {
        error: tooLarge ? "payload_too_large" : "invalid_request",
        message: tooLarge ? "The request body is too large." : "Could not read your submission.",
      },
      { status: bodyRead.status }
    );
  }

  let body: unknown;
  try {
    body = JSON.parse(bodyRead.text);
  } catch {
    return NextResponse.json(
      { error: "invalid_request", message: "Could not read your submission." },
      { status: 400 }
    );
  }

  const result = parseEnquiry(body as EnquiryInput);
  if (!result.ok) {
    return NextResponse.json(
      { error: "validation", fieldErrors: result.errors },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;
  if (!apiKey || !toEmail) {
    // Delivery is not configured. Report truthfully rather than pretending success.
    return NextResponse.json(
      { error: "unavailable", message: "Enquiry submission is not available yet." },
      { status: 503 }
    );
  }

  const fromEmail = process.env.ENQUIRY_FROM_EMAIL ?? "Journey2Better <onboarding@resend.dev>";
  const payload = {
    from: fromEmail,
    to: [toEmail],
    reply_to: result.data.email,
    subject: "Website enquiry: " + categoryLabel(result.data.interest),
    html: renderEmail(result.data),
  };

  try {
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!delivery.ok) {
      console.error(`Enquiry delivery failed (${delivery.status}).`);
      return NextResponse.json(
        { error: "delivery_failed", message: "Your enquiry could not be sent. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    console.error("Enquiry delivery error.");
    return NextResponse.json(
      { error: "delivery_failed", message: "Your enquiry could not be sent. Please try again or email us directly." },
      { status: 502 }
    );
  }
}

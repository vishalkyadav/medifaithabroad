import { NextResponse } from "next/server";
import { contact } from "@/lib/contact";
import {
  sanitizeContactPayload,
  validateContactForm,
  type ContactFormFields,
} from "@/lib/validation/contact-form";

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 8;
const hits = new Map<string, { count: number; reset: number }>();

/**
 * Enquiry delivery configuration.
 *
 * Only `RESEND_API_KEY` must be supplied to go live: the receiving inbox
 * defaults to the office Gmail and the sender falls back to Resend's test
 * address. `CONTACT_EMAIL_TO` and `CONTACT_EMAIL_FROM` override the defaults.
 */
const DEFAULT_TO = contact.email; // medifaithabroad@gmail.com
const DEFAULT_FROM = "Medifaith Abroad <onboarding@resend.dev>";

function resolveEmailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY?.trim() ?? "",
    to: process.env.CONTACT_EMAIL_TO?.trim() || DEFAULT_TO,
    from: process.env.CONTACT_EMAIL_FROM?.trim() || DEFAULT_FROM,
  };
}

function rateLimitKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.reset) {
    hits.set(key, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(payload: ReturnType<typeof sanitizeContactPayload>) {
  const rows: Array<[string, string]> = [
    ["Name", payload.fullName],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Course / destination", payload.interest],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:18px">New website enquiry</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:6px 16px 6px 0;color:#64748b;vertical-align:top">${label}</td>
            <td style="padding:6px 0;font-weight:600">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin:20px 0 6px;color:#64748b;font-size:14px">Message</p>
      <p style="margin:0;white-space:pre-wrap;font-size:14px">${escapeHtml(
        payload.message,
      )}</p>
      <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0" />
      <p style="margin:0;color:#64748b;font-size:12px">
        Sent from the Medifaith Abroad website. Reply to this email to answer ${
          escapeHtml(payload.fullName)
        } directly.
      </p>
    </div>
  `;

  return { text, html };
}

async function sendViaResend(payload: ReturnType<typeof sanitizeContactPayload>) {
  const { apiKey, to, from } = resolveEmailConfig();

  if (!apiKey) {
    return { ok: false as const, reason: "NOT_CONFIGURED" as const };
  }

  const { text, html } = buildEmail(payload);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `MediFaith enquiry: ${payload.interest}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      // Log the provider's reason (missing key, unverified domain, etc.) so
      // it is visible in the server logs without leaking anything to the user.
      const detail = await res.text().catch(() => "");
      console.error(
        `[contact] Resend rejected the email (${res.status}): ${detail.slice(0, 500)}`,
      );
      return { ok: false as const, reason: "SEND_FAILED" as const };
    }
  } catch (error) {
    console.error("[contact] Resend request failed:", error);
    return { ok: false as const, reason: "SEND_FAILED" as const };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  if (isRateLimited(rateLimitKey(request))) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: ContactFormFields;
  try {
    body = (await request.json()) as ContactFormFields;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContactForm(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const payload = sanitizeContactPayload(body);
  const sendResult = await sendViaResend(payload);

  if (!sendResult.ok) {
    if (sendResult.reason === "NOT_CONFIGURED") {
      return NextResponse.json(
        {
          ok: false,
          error:
            `Enquiry delivery is not configured on the server yet. Please email ${
              resolveEmailConfig().to
            } or call ${contact.phoneDisplay}.`,
          code: "NOT_CONFIGURED",
        },
        { status: 503 },
      );
    }
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send your enquiry right now. Please try again or contact us on ${contact.phoneDisplay}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

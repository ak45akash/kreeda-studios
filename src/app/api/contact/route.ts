import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
  website?: string; // honeypot
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return false;

  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Kreeda Studios <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const company = payload.company?.trim() || "—";
  const budget = payload.budget?.trim() || "—";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `New project enquiry — ${payload.projectType}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${company}`,
      `Project type: ${payload.projectType}`,
      `Budget: ${budget}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
        <h2 style="margin:0 0 16px">New project enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Project type:</strong> ${escapeHtml(payload.projectType)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <p style="margin-top:20px;white-space:pre-wrap">${escapeHtml(payload.message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    throw new Error(error.message);
  }

  return true;
}

async function sendWithWebhook(payload: ContactPayload) {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) return false;

  const apiKey = process.env.CONTACT_FORM_API_KEY;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      company: payload.company || "",
      projectType: payload.projectType,
      budget: payload.budget || "",
      message: payload.message,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Webhook failed:", res.status, detail);
    throw new Error("Webhook submission failed");
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot: pretend success for bots.
    if (body.website?.trim()) {
      return NextResponse.json({ success: true });
    }

    if (
      !body.name?.trim() ||
      !body.email?.trim() ||
      !body.projectType ||
      !body.message?.trim()
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim(),
      projectType: body.projectType,
      budget: body.budget?.trim(),
      message: body.message.trim(),
    };

    const delivered =
      (await sendWithResend(payload)) || (await sendWithWebhook(payload));

    if (!delivered) {
      // No mail provider configured yet — keep local/dev usable,
      // but make it obvious in logs that nothing was delivered.
      console.warn(
        "[contact] No RESEND_API_KEY/CONTACT_TO_EMAIL or CONTACT_FORM_ENDPOINT configured. Enquiry accepted but not emailed:",
        {
          name: payload.name,
          email: payload.email,
          projectType: payload.projectType,
        },
      );
    }

    return NextResponse.json({ success: true, delivered });
  } catch (error) {
    console.error("[contact] Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

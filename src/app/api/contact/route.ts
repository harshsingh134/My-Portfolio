import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function sanitizeText(input: unknown, maxLength: number): string {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (record && now - record.timestamp < WINDOW_MS) {
      if (record.count >= MAX_REQUESTS) {
        return NextResponse.json(
          {
            ok: false,
            error: "Too many requests. Please wait a minute before trying again.",
          },
          { status: 429 }
        );
      }
      record.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const body = await req.json();

    // Honeypot field check against automated bots
    if (body.companyWebsite && String(body.companyWebsite).trim().length > 0) {
      return NextResponse.json({ ok: true, status: "filtered" }, { status: 200 });
    }

    const name = sanitizeText(body.name, 100);
    const email = sanitizeText(body.email, 160);
    const subject = sanitizeText(body.subject, 180) || "Portfolio Inquiry";
    const message = sanitizeText(body.message, 2500);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please write a brief message (at least 10 characters).",
        },
        { status: 400 }
      );
    }

    // Optional external webhook / email service integration (e.g. Formspree / Resend / Slack webhook)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          sentAt: new Date().toISOString(),
        }),
      });
    }

    const mailtoFallback = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject} — from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    return NextResponse.json(
      {
        ok: true,
        deliveryMode: webhookUrl ? "webhook-delivered" : "validated-ready",
        mailtoUrl: mailtoFallback,
        message: webhookUrl
          ? "Your message has been delivered successfully."
          : "Message validated! Click the button below to open it directly in your email client, or connect CONTACT_WEBHOOK_URL in .env.local for automated server delivery.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }
}

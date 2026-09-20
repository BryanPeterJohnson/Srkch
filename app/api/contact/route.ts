import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// ─── Field length caps (reject absurdly long inputs) ────────────────────────
const MAX_LEN: Record<string, number> = {
  name: 200,
  email: 254,
  phone: 40,
  service: 100,
  message: 4000,
};

// Escape user input before putting it in the HTML email body.
const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();
    const get = (k: string) => (fd.get(k) as string | null)?.trim() ?? "";

    // ─── Honeypot: bots fill hidden fields, humans don't. Silently accept. ──
    if (get("website") !== "") {
      return NextResponse.json({ success: true });
    }

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const service = get("service") || "General Inquiry";
    const message = get("message");

    // ─── Required-field validation ────────────────────────────────────────
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ─── Length caps ──────────────────────────────────────────────────────
    for (const [key, max] of Object.entries(MAX_LEN)) {
      if (get(key).length > max) {
        return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
      }
    }

    // ─── Send ─────────────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"SRK Care at Home" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_MAIL_TO,
      replyTo: email,
      subject: `Contact Inquiry — ${name} — ${service}`,
      text:
        `New contact inquiry\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Service of Interest: ${service}\n\n` +
        `Message:\n${message || "(none)"}\n`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><b>Name:</b> ${esc(name)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Phone:</b> ${esc(phone)}</p>
        <p><b>Service of Interest:</b> ${esc(service)}</p>
        <hr>
        <h3>Message</h3>
        <p>${esc(message) || "(none)"}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact route error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
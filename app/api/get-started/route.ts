import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── SMTP transport (same Gmail account as the apply-job route) ─────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── Where Get Started (care assessment) emails are delivered ──────────────────
// DIFFERENT recipient from the apply-job and contact inboxes.
// Set GET_STARTED_MAIL_TO in .env.local; falls back to care@srkcah.com.
const TO_EMAIL = process.env.GET_STARTED_MAIL_TO || "care@srkcah.com";

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
    const get = (k: string) => ((fd.get(k) as string | null)?.trim() ?? "");

    // ── Honeypot: bots fill hidden fields, humans don't. Silently accept. ──
    if (get("website") !== "") {
      return NextResponse.json({ success: true });
    }

    // ── Extract fields ──
    const whoNeedsCare = get("whoNeedsCare");
    const gender = get("gender");
    const livingSituation = get("livingSituation");
    const careNeeds = get("careNeeds");
    const firstName = get("firstName");
    const lastName = get("lastName");
    const email = get("email");
    const phone = get("phone");
    const zipcode = get("zipcode");

    const fullName = `${firstName} ${lastName}`.trim();

    // ── Server-side validation ──
    if (!firstName || !lastName || !email || !phone || !zipcode || !whoNeedsCare) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ── Compose email ──
    const html = `
      <div style="font-family: Arial, sans-serif; color: #1A2B3C; max-width: 600px;">
        <h2 style="color: #005B8E; margin-bottom: 4px;">New Care Assessment Request</h2>
        <p style="color: #5A6A7A; margin-top: 0;">Submitted via the SRK Care at Home "Get Started" form.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 190px;">Name</td><td style="padding: 8px 0;">${esc(fullName)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone</td><td style="padding: 8px 0;">${esc(phone)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${esc(email)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Zipcode</td><td style="padding: 8px 0;">${esc(zipcode)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Who Needs Care</td><td style="padding: 8px 0;">${esc(whoNeedsCare)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Gender</td><td style="padding: 8px 0;">${esc(gender) || "&mdash;"}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Living Situation</td><td style="padding: 8px 0;">${esc(livingSituation) || "&mdash;"}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Care Needs</td><td style="padding: 8px 0; white-space: pre-wrap;">${esc(careNeeds) || "&mdash;"}</td></tr>
        </table>
      </div>
    `;

    const text =
      `New Care Assessment Request\n\n` +
      `Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Zipcode: ${zipcode}\n` +
      `Who Needs Care: ${whoNeedsCare}\n` +
      `Gender: ${gender || "—"}\n` +
      `Living Situation: ${livingSituation || "—"}\n` +
      `Care Needs: ${careNeeds || "—"}\n`;

    // ── Send ──
    await transporter.sendMail({
      from: `"SRK Care at Home" <${process.env.SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Care Assessment — ${fullName}`,
      html,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Get Started route error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send request. Please try again." },
      { status: 500 }
    );
  }
}
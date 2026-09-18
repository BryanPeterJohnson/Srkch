import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// ─── File constraints (must mirror the client, since the client can be bypassed) ─
const MAX_CV_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];
const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];

// ─── Field length caps (reject absurdly long inputs) ────────────────────────
const MAX_LEN: Record<string, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  location: 200,
  disabilityStatus: 50,
  veteranStatus: 50,
  race: 50,
  gender: 50,
  appliedFor: 300,
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

    const firstName = get("firstName");
    const lastName = get("lastName");
    const email = get("email");
    const phone = get("phone");
    const location = get("location");
    const disabilityStatus = get("disabilityStatus");
    const veteranStatus = get("veteranStatus");
    const race = get("race");
    const gender = get("gender");
    const appliedFor = get("appliedFor") || "General Application";

    // ─── Required-field validation ────────────────────────────────────────
    if (!firstName || !lastName || !email || !phone || !location) {
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

    // ─── CV file: re-validate type, extension, and size on the server ─────
    const cv = fd.get("cv") as File | null;
    if (!cv || cv.size === 0) {
      return NextResponse.json({ error: "CV / resume is required." }, { status: 400 });
    }

    const ext = cv.name.slice(cv.name.lastIndexOf(".")).toLowerCase();
    const typeOk = ALLOWED_CV_TYPES.includes(cv.type);
    const extOk = ALLOWED_CV_EXTENSIONS.includes(ext);
    if (!typeOk || !extOk) {
      return NextResponse.json({ error: "CV must be a PDF or Word (.doc, .docx) file." }, { status: 400 });
    }
    if (cv.size > MAX_CV_SIZE) {
      return NextResponse.json({ error: "CV must be under 5MB." }, { status: 400 });
    }

    const buffer = Buffer.from(await cv.arrayBuffer());

    // ─── Send ─────────────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"SRK Careers" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Job Application — ${firstName} ${lastName} — ${appliedFor}`,
      text:
        `Applied for: ${appliedFor}\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Location: ${location}\n\n` +
        `--- Voluntary Self-Identification ---\n` +
        `Disability: ${disabilityStatus}\n` +
        `Veteran: ${veteranStatus}\n` +
        `Race: ${race}\n` +
        `Gender: ${gender}\n`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Applied for:</b> ${esc(appliedFor)}</p>
        <p><b>Name:</b> ${esc(firstName)} ${esc(lastName)}</p>
        <p><b>Email:</b> ${esc(email)}</p>
        <p><b>Phone:</b> ${esc(phone)}</p>
        <p><b>Location:</b> ${esc(location)}</p>
        <hr>
        <h3>Voluntary Self-Identification</h3>
        <p><b>Disability:</b> ${esc(disabilityStatus)}</p>
        <p><b>Veteran:</b> ${esc(veteranStatus)}</p>
        <p><b>Race:</b> ${esc(race)}</p>
        <p><b>Gender:</b> ${esc(gender)}</p>`,
      attachments: [{ filename: cv.name, content: buffer }],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("apply route error:", err);
    return NextResponse.json({ error: "Failed to send application." }, { status: 500 });
  }
}
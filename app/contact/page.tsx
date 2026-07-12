"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  "Personal Care",
  "Companion Care",
  "Senior Transportation",
  "Respite Care",
  "Meal Preparation",
  "Skilled Nursing Care",
  "24-Hour Home Care",
  "General Inquiry",
];

const faqs = [
  {
    q: "How do I get started with SRK Care at Home?",
    a: "Simply call us or fill out our contact form. A care coordinator will reach out within 24 hours to schedule a free in-home assessment and build your personalized care plan.",
  },
  {
    q: "Does SRK accept Medicaid?",
    a: "Yes! We are fully certified to accept Medicaid Long-Term Care, and private pay. Our team can help you understand your coverage and what services are eligible.",
  },
  {
    q: "What areas does SRK Care at Home serve?",
    a: "We serve the greater New York metropolitan area, including Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Contact us to confirm service availability in your specific neighborhood.",
  },
  {
    q: "How quickly can care begin?",
    a: "In many cases, we can begin care within 24–48 hours of your initial assessment. For urgent situations, please call us directly and we will prioritize your needs.",
  },
  {
    q: "Are your caregivers background-checked and certified?",
    a: "Absolutely. Every SRK caregiver undergoes a thorough background check, reference verification, skills assessment, and ongoing training before they are ever matched with a client.",
  },
  {
    q: "Can I choose my own caregiver?",
    a: "We match caregivers thoughtfully based on personality, skills, and schedule — but we encourage client input. If a match isn't right, we'll work with you to find the perfect fit.",
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Helpers ────────────────────────────────────────────────────────────────
  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!formState.name.trim()) e.name = "Full name is required.";
    if (!formState.phone.trim()) e.phone = "Phone number is required.";
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email))
      e.email = "Valid email is required.";
    if (!formState.service) e.service = "Please select a service.";
    if (!formState.consent) e.consent = "Please agree to be contacted.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // TODO: replace with your real API route
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formState) });
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  const inputClass = (field: keyof FormErrors) =>
    [
      "w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all",
      errors[field]
        ? "border-[#D94F3D] focus:ring-2 focus:ring-[#D94F3D]/30"
        : "border-gray-200 focus:border-[#005B8E] focus:ring-2 focus:ring-[#005B8E]/20",
    ].join(" ");

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <main style={{ fontFamily: "'Source Sans 3', sans-serif" }}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="flex items-center px-6"
        style={{ minHeight: 280, background: "#005B8E" }}
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <h1
            className="text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
            }}
          >
            Get in Touch
          </h1>
          <p className="text-white/70 mt-2" style={{ fontSize: 17 }}>
            We&apos;d love to hear from you. Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact Split ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="text-center py-20">
                <CheckCircle2 size={56} className="text-[#00A693] mx-auto mb-5" />
                <h2
                  className="text-[#1A1A2E] mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 30,
                    fontWeight: 700,
                  }}
                >
                  Message Received!
                </h2>
                <p className="text-[#6B7280]">
                  Thank you for reaching out. A care coordinator will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2
                  className="text-[#1A1A2E] mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  Send Us a Message
                </h2>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                    Full Name <span className="text-[#D94F3D]">*</span>
                  </label>
                  <input
                    type="text"
                    className={inputClass("name")}
                    placeholder="Jane Smith"
                    autoComplete="name"
                    value={formState.name}
                    onChange={(e) => setField("name", e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-xs text-[#D94F3D] mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                      Phone Number <span className="text-[#D94F3D]">*</span>
                    </label>
                    <input
                      type="tel"
                      className={inputClass("phone")}
                      placeholder="(212) 555-0100"
                      autoComplete="tel"
                      value={formState.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#D94F3D] mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                      Email Address <span className="text-[#D94F3D]">*</span>
                    </label>
                    <input
                      type="email"
                      className={inputClass("email")}
                      placeholder="jane@example.com"
                      autoComplete="email"
                      value={formState.email}
                      onChange={(e) => setField("email", e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#D94F3D] mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                    Service of Interest <span className="text-[#D94F3D]">*</span>
                  </label>
                  <select
                    className={inputClass("service")}
                    value={formState.service}
                    onChange={(e) => setField("service", e.target.value)}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-[#D94F3D] mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none transition-all focus:border-[#005B8E] focus:ring-2 focus:ring-[#005B8E]/20 resize-none"
                    placeholder="Tell us a bit about your care needs..."
                    value={formState.message}
                    onChange={(e) => setField("message", e.target.value)}
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-0.5 flex-shrink-0 accent-[#005B8E]"
                      checked={formState.consent}
                      onChange={(e) => setField("consent", e.target.checked)}
                    />
                    <span className="text-sm text-[#6B7280]">
                      I agree to be contacted by SRK Care at Home via phone or email regarding my
                      inquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-[#D94F3D] mt-1">{errors.consent}</p>
                  )}
                </div>

                {/* Submit */}
              <button
  type="submit"
  disabled={submitting}
  className="w-full py-3.5 rounded-md text-white font-bold text-base transition-all hover:bg-[#003A5C] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
  style={{ background: "#005B8E" }}
>
  {submitting ? "Sending…" : "Send Message →"}
</button>
              </form>
            )}
          </div>

          {/* Info card */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#F9F9F7",
                boxShadow: "0 4px 20px rgba(0,91,142,0.08)",
              }}
            >
              <h3
                className="text-[#1A1A2E] font-semibold mb-5"
                style={{ fontSize: 18 }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#005B8E] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#1A1A2E] font-semibold text-sm">
                      (800) SRK-CARE
                    </div>
                    <div className="text-[#6B7280] text-xs">Emergency line available 24/7</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#005B8E] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@srkcah.com"
                    className="text-[#6B7280] text-sm hover:text-[#005B8E] transition-colors"
                  >
                    info@srkcah.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#005B8E] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#1A1A2E] text-sm font-semibold">Office Address</div>
                    <a
                      href="https://maps.google.com/?q=8115+Maple+Lawn+Blvd+Suite+350,+Fulton,+MD+20759"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6B7280] text-sm hover:text-[#005B8E] transition-colors block"
                    >
                      8115 Maple Lawn Blvd, Suite 350
                      <br />
                      Fulton, MD 20759
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#005B8E] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#1A1A2E] text-sm font-semibold">Office Hours</div>
                    <div className="text-[#6B7280] text-xs">Mon–Fri: 8:00 AM – 6:00 PM</div>
                    <div className="text-[#6B7280] text-xs">Emergency care available 24/7</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-200">
                <a
                  href="https://wa.me/18005752273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                height: 220,
                background: "linear-gradient(135deg, #E8F4FD, #D4EEF7)",
                boxShadow: "0 4px 20px rgba(0,91,142,0.08)",
              }}
            >
              <div className="text-center">
                <MapPin size={32} className="text-[#005B8E] mx-auto mb-2" />
                <div className="text-sm text-[#6B7280]">
                  8115 Maple Lawn Blvd, Suite 350
                  <br />
                  Fulton, MD 20759
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ background: "#F9F9F7" }}>
        <div className="max-w-[800px] mx-auto">
          <h2
            className="text-[#1A1A2E] text-center mb-10"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 2.5vw, 34px)",
              fontWeight: 700,
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden"
                style={{ boxShadow: "0 2px 12px rgba(0,91,142,0.06)" }}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-[#1A1A2E] text-sm pr-4">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-[#005B8E] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#6B7280] flex-shrink-0" />
                  )}
                </button>

                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
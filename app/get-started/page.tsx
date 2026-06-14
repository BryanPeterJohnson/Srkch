"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Color tokens (SRK Care at Home brand) ────────────────────────────────────
// Primary navy:   #005B8E
// Dark navy:      #003A5C
// Accent gold:    #E8A020
// Background:     #F7F8FA
// Surface white:  #FFFFFF
// Text dark:      #1A2B3C
// Text muted:     #5A6A7A
// Border:         #D8DFE8
// Error:          #C0392B

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormState {
  whoNeedsCare: string;
  gender: string;
  livingSituation: string;
  careNeeds: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipcode: string;
  optInConsent: boolean;
  privacyConsent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

// ─── Data ─────────────────────────────────────────────────────────────────────
const WHO_OPTIONS = ["Myself", "Spouse / Partner", "Parent", "Sibling", "Child", "Friend", "Other"];
const GENDER_OPTIONS = ["Male", "Female", "Non-binary / Other", "Prefer not to say"];
const LIVING_OPTIONS = ["Lives Alone", "Lives with Family", "Assisted Living", "Nursing Home", "Currently in Hospital", "Other"];

const CARE_TYPES = [
  "Personal Care (bathing, dressing, grooming)",
  "Companion Care",
  "Dementia / Alzheimer's Care",
  "Post-Surgery / Hospital Recovery",
  "Chronic Disease Management",
  "Live-In Care",
  "Overnight Care",
  "Skilled Nursing",
  "Physical / Occupational Therapy",
  "Medication Management",
  "Meal Preparation",
  "Transportation Assistance",
];

const NJ_SERVICES = [
  { label: "Live-In Home Care", href: "/services/live-in-care" },
  { label: "Dementia Home Care", href: "/services/dementia-care" },
  { label: "Hospice Care at Home", href: "/services/hospice-care" },
  { label: "Companion Care", href: "/services/companion-care" },
  { label: "Personal Care", href: "/services/personal-care" },
  { label: "Opt-out Preferences", href: "/opt-out" },
  { label: "Truth in Advertising Statement", href: "/advertising" },
];

const NJ_LOCATIONS = [
  "View All of New Jersey",
  "Bridgewater, NJ",
  "Edison, NJ",
  "Flemington, NJ",
  "Hillsborough, NJ",
  "Lakewood, NJ",
  "Livingston, NJ",
  "Monroe Township, NJ",
  "Montclair, NJ",
  "Morristown, NJ",
  "Princeton, NJ",
  "Red Bank, NJ",
  "Stockton, NJ",
  "Summit, NJ",
];

const FOOTER_SERVICES = [
  "Live-In Home Care",
  "Dementia Home Care",
  "Hospice Care at Home",
  "Companion Care",
  "Personal Care",
  "Opt-out Preferences",
  "Truth in Advertising Statement",
];

const NAV_LINKS = ["Home", "About Us", "Services", "Get Started", "Resources", "Careers", "Contact Us", "Service Area"];

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(s: FormState): FormErrors {
  const e: FormErrors = {};
  if (!s.whoNeedsCare) e.whoNeedsCare = "Please select who needs care.";
  if (!s.gender) e.gender = "Please select a gender.";
  if (!s.livingSituation) e.livingSituation = "Please select a living situation.";
  if (!s.careNeeds.length) e.careNeeds = "Please select at least one type of care.";
  if (!s.firstName.trim()) e.firstName = "First name is required.";
  if (!s.lastName.trim()) e.lastName = "Last name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email)) e.email = "Enter a valid email address.";
  if (!/^\+?[\d\s\-().]{7,}$/.test(s.phone)) e.phone = "Enter a valid phone number.";
  if (!/^\d{5}(-\d{4})?$/.test(s.zipcode)) e.zipcode = "Enter a valid 5-digit zip code.";
  if (!s.optInConsent) e.optInConsent = "You must agree to receive communications.";
  if (!s.privacyConsent) e.privacyConsent = "You must agree to the privacy policy.";
  return e;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs" style={{ color: "#C0392B" }}>{msg}</p>;
}

function SelectField({
  label, value, onChange, options, error, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void;
  options: string[]; error?: string; placeholder?: string;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 6 }}>
        {label} <span style={{ color: "#C0392B" }}>*</span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%", padding: "10px 14px", fontSize: 13, color: value ? "#1A2B3C" : "#8A9BAC",
          border: `1px solid ${error ? "#C0392B" : "#D8DFE8"}`, borderRadius: 6,
          background: "#fff", appearance: "none", outline: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235A6A7A' strokeWidth='1.5' fill='none' strokeLinecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
        }}
      >
        <option value="">{placeholder || label}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <FieldError msg={error} />
    </div>
  );
}

function TextInput({
  label, value, onChange, error, type = "text", placeholder, autoComplete,
}: {
  label: string; value: string; onChange: (v: string) => void;
  error?: string; type?: string; placeholder?: string; autoComplete?: string;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 6 }}>
        {label} <span style={{ color: "#C0392B" }}>*</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || label}
        autoComplete={autoComplete}
        style={{
          width: "100%", padding: "10px 14px", fontSize: 13, color: "#1A2B3C",
          border: `1px solid ${error ? "#C0392B" : "#D8DFE8"}`, borderRadius: 6,
          background: "#fff", outline: "none", boxSizing: "border-box",
        }}
      />
      <FieldError msg={error} />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function GetStartedPage() {
  const [form, setForm] = useState<FormState>({
    whoNeedsCare: "", gender: "", livingSituation: "", careNeeds: [],
    firstName: "", lastName: "", email: "", phone: "", zipcode: "",
    optInConsent: false, privacyConsent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function setField<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function toggleCare(c: string) {
    setForm((p) => ({
      ...p,
      careNeeds: p.careNeeds.includes(c) ? p.careNeeds.filter((x) => x !== c) : [...p.careNeeds, c],
    }));
    setErrors((p) => ({ ...p, careNeeds: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    // TODO: replace with your real API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", color: "#1A2B3C", background: "#F7F8FA", minHeight: "100vh" }}>

 


      {/* ── Hero banner ─────────────────────────────────────────────────────── */}
      <div style={{ position: "relative", background: "#003A5C", overflow: "hidden" }}>
        {/* Decorative pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.07 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute", width: 120, height: 120, border: "2px solid #fff", borderRadius: "50%",
              left: `${(i % 4) * 28}%`, top: i < 4 ? "-20%" : "40%", opacity: 0.5,
            }} />
          ))}
        </div>
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "52px 24px", textAlign: "center" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            Get Started with Home Care in New Jersey
          </h1>
          <p style={{ color: "#A8C4D8", marginTop: 10, fontSize: 15 }}>
            Tell us about your needs — we&apos;ll match you with the right care plan.
          </p>
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)", gap: 40, alignItems: "start" }}>

          {/* ── LEFT: Form ──────────────────────────────────────────────────── */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#005B8E", marginTop: 0, marginBottom: 6 }}>
              Start Here:
            </h2>
            <p style={{ fontSize: 14, color: "#5A6A7A", marginBottom: 28, lineHeight: 1.6 }}>
              When you fill out this form you can expect information, pricing, and communication
              with a caring staff member from our office.
            </p>

            {submitted ? (
              <div style={{ background: "#fff", borderRadius: 10, padding: 40, textAlign: "center", border: "1px solid #D8DFE8" }}>
                <div style={{ width: 56, height: 56, background: "#E8F5E9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1A2B3C", margin: "0 0 8px" }}>Thank You!</h3>
                <p style={{ color: "#5A6A7A", fontSize: 14, margin: "0 0 16px" }}>
                  We&apos;ve received your request. A care coordinator will contact you shortly.
                </p>
                <a href="tel:7324525875" style={{ color: "#005B8E", fontWeight: 700, fontSize: 14 }}>
                  Need immediate help? Call 732-452-5875
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ background: "#fff", borderRadius: 10, padding: 28, border: "1px solid #D8DFE8", display: "flex", flexDirection: "column", gap: 18 }}>

                <SelectField label="Who Needs Care?" value={form.whoNeedsCare} onChange={(v) => setField("whoNeedsCare", v)} options={WHO_OPTIONS} error={errors.whoNeedsCare} />
                <SelectField label="Male or Female?" value={form.gender} onChange={(v) => setField("gender", v)} options={GENDER_OPTIONS} error={errors.gender} placeholder="Male or Female?" />
                <SelectField label="What is their current living situation?" value={form.livingSituation} onChange={(v) => setField("livingSituation", v)} options={LIVING_OPTIONS} error={errors.livingSituation} />

                {/* Care types checkboxes */}
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 6 }}>
                    What Type of Care is Needed? (Check all that apply) <span style={{ color: "#C0392B" }}>*</span>
                  </label>
                  <div style={{
                    border: `1px solid ${errors.careNeeds ? "#C0392B" : "#D8DFE8"}`, borderRadius: 6,
                    background: "#F7F8FA", maxHeight: 220, overflowY: "auto", padding: "6px 4px",
                  }}>
                    {CARE_TYPES.map((c) => (
                      <label key={c} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 10px", cursor: "pointer", borderRadius: 4, fontSize: 13, color: "#1A2B3C" }}>
                        <input
                          type="checkbox"
                          checked={form.careNeeds.includes(c)}
                          onChange={() => toggleCare(c)}
                          style={{ accentColor: "#005B8E", width: 15, height: 15, flexShrink: 0 }}
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                  <FieldError msg={errors.careNeeds} />
                </div>

                {/* Name */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <TextInput label="First Name" value={form.firstName} onChange={(v) => setField("firstName", v)} error={errors.firstName} autoComplete="given-name" />
                  <TextInput label="Last Name" value={form.lastName} onChange={(v) => setField("lastName", v)} error={errors.lastName} autoComplete="family-name" />
                </div>

                <TextInput label="Email" value={form.email} type="email" onChange={(v) => setField("email", v)} error={errors.email} autoComplete="email" placeholder="you@example.com" />

                {/* Phone with flag indicator */}
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 6 }}>
                    Phone <span style={{ color: "#C0392B" }}>*</span>
                  </label>
                  <div style={{ display: "flex", border: `1px solid ${errors.phone ? "#C0392B" : "#D8DFE8"}`, borderRadius: 6, overflow: "hidden", background: "#fff" }}>
                    <div style={{ padding: "10px 12px", background: "#F7F8FA", borderRight: "1px solid #D8DFE8", fontSize: 13, color: "#5A6A7A", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
                      🇺🇸 +1
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      placeholder="(555) 000-0000"
                      autoComplete="tel"
                      style={{ flex: 1, padding: "10px 14px", fontSize: 13, border: "none", outline: "none", color: "#1A2B3C" }}
                    />
                  </div>
                  <FieldError msg={errors.phone} />
                </div>

                <TextInput label="Zipcode" value={form.zipcode} onChange={(v) => setField("zipcode", v)} error={errors.zipcode} placeholder="07001" autoComplete="postal-code" />

                {/* Consent */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", fontSize: 13, color: "#5A6A7A", lineHeight: 1.5 }}>
                    <input
                      type="checkbox"
                      checked={form.optInConsent}
                      onChange={(e) => setField("optInConsent", e.target.checked)}
                      style={{ accentColor: "#005B8E", width: 15, height: 15, marginTop: 2, flexShrink: 0 }}
                    />
                    I understand that by entering my information, I will be receiving a call and emails from a staff member of SRK Care at Home.
                  </label>
                  <FieldError msg={errors.optInConsent} />

                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", fontSize: 13, color: "#5A6A7A", lineHeight: 1.5 }}>
                    <input
                      type="checkbox"
                      checked={form.privacyConsent}
                      onChange={(e) => setField("privacyConsent", e.target.checked)}
                      style={{ accentColor: "#005B8E", width: 15, height: 15, marginTop: 2, flexShrink: 0 }}
                    />
                    I agree to the{" "}
                    <Link href="/privacy-policy" style={{ color: "#005B8E", textDecoration: "underline" }}>
                      privacy policy
                    </Link>
                    . (Bottom of Page)
                  </label>
                  <FieldError msg={errors.privacyConsent} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%", padding: "14px", background: submitting ? "#8AAEC4" : "#E8A020",
                    color: "#fff", fontWeight: 800, fontSize: 14, border: "none", borderRadius: 6,
                    cursor: submitting ? "not-allowed" : "pointer", textTransform: "uppercase",
                    letterSpacing: 1.5, transition: "background 0.2s",
                  }}
                >
                  {submitting ? "Submitting…" : "Submit the Form"}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: Sidebar ───────────────────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Caregiver photo */}
            <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,91,142,0.12)" }}>
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&h=420&fit=crop&q=80"
                alt="SRK Care at Home caregiver with client"
                style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Contact info card */}
            <div style={{ background: "#fff", borderRadius: 10, padding: 24, border: "1px solid #D8DFE8" }}>
              <h3 style={{ color: "#005B8E", fontSize: 17, fontWeight: 700, marginTop: 0, marginBottom: 14 }}>
                Contact Us About Our In-Home Care Services
              </h3>
              <p style={{ fontSize: 13, color: "#5A6A7A", lineHeight: 1.7, marginBottom: 14 }}>
                We are available after hours (24/7) via our toll free number for urgent needs. Rest
                assured any personal information you provide will ONLY be used by SRK Care at Home
                to continue communication regarding your inquiry. We offer a{" "}
                <strong>48 Hour Caregiver Guarantee</strong> — if within the first 48 hours you are
                not satisfied with your caregiver for any reason, your care will be absolutely FREE.
              </p>
              <p style={{ fontSize: 13, color: "#5A6A7A", marginBottom: 8 }}>
                For immediate assistance, call us toll free at{" "}
                <a href="tel:7324525875" style={{ color: "#005B8E", fontWeight: 700, textDecoration: "none" }}>
                  732-452-5875
                </a>
                .
              </p>
              <p style={{ fontSize: 13, color: "#5A6A7A", marginBottom: 0 }}>
                Or, simply fill out the form.
              </p>
              <p style={{ fontSize: 13, color: "#1A2B3C", fontWeight: 700, marginTop: 12, marginBottom: 0 }}>
                Please note we don&apos;t accept Medicare / Medicaid.
              </p>
            </div>

            {/* Services links */}
            <div style={{ background: "#fff", borderRadius: 10, padding: 24, border: "1px solid #D8DFE8" }}>
              <h3 style={{ color: "#005B8E", fontSize: 17, fontWeight: 700, marginTop: 0, marginBottom: 14 }}>
                Learn More About Our New Jersey Home Care Services
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {NJ_SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} style={{ color: "#005B8E", fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 6, height: 6, background: "#E8A020", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations links */}
            <div style={{ background: "#fff", borderRadius: 10, padding: 24, border: "1px solid #D8DFE8" }}>
              <h3 style={{ color: "#005B8E", fontSize: 17, fontWeight: 700, marginTop: 0, marginBottom: 14 }}>
                Learn More About Our New Jersey Home Care Locations
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {NJ_LOCATIONS.map((loc) => (
                  <li key={loc}>
                    <Link href={`/locations/${loc.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                      style={{ color: "#005B8E", fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ width: 6, height: 6, background: "#E8A020", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
                      {loc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
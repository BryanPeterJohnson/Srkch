"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";

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

// ─── Field limits ───────────────────────────────────────────────────────────────
const LIMITS = {
  name: { min: 2, max: 50 },
  email: { max: 254 },
  phone: { min: 10, max: 20 },
  zip: { max: 10 },
};

// ─── Validation helpers ─────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Name: letters (incl. accented), spaces, hyphens, apostrophes only. No digits/symbols.
const NAME_RE = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '\-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const ZIP_RE = /^\d{5}(-\d{4})?$/;

// Strips any character not allowed in a name, as the user types.
function sanitizeName(v: string): string {
  return v.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ '\-]/g, "");
}

// Keeps only phone-legal characters while typing.
function sanitizePhone(v: string): string {
  return v.replace(/[^\d\s\-().+]/g, "");
}

// Digits count only, for length checks.
function phoneDigits(v: string): number {
  return v.replace(/\D/g, "").length;
}

function validate(s: FormState): FormErrors {
  const e: FormErrors = {};
  if (!s.whoNeedsCare) e.whoNeedsCare = "Please select who needs care.";
  if (!s.gender) e.gender = "Please select an option.";
  if (!s.livingSituation) e.livingSituation = "Please select a living situation.";
  if (!s.careNeeds.length) e.careNeeds = "Please select at least one type of care.";

  const fn = s.firstName.trim();
  if (!fn) {
    e.firstName = "First name is required.";
  } else if (fn.length < LIMITS.name.min) {
    e.firstName = "First name must be at least 2 characters.";
  } else if (fn.length > LIMITS.name.max) {
    e.firstName = "First name must be 50 characters or fewer.";
  } else if (!NAME_RE.test(fn)) {
    e.firstName = "Use letters only — no numbers or symbols.";
  }

  const ln = s.lastName.trim();
  if (!ln) {
    e.lastName = "Last name is required.";
  } else if (ln.length < LIMITS.name.min) {
    e.lastName = "Last name must be at least 2 characters.";
  } else if (ln.length > LIMITS.name.max) {
    e.lastName = "Last name must be 50 characters or fewer.";
  } else if (!NAME_RE.test(ln)) {
    e.lastName = "Use letters only — no numbers or symbols.";
  }

  const email = s.email.trim();
  if (!email) {
    e.email = "Email address is required.";
  } else if (email.length > LIMITS.email.max) {
    e.email = "Email address is too long.";
  } else if (!EMAIL_RE.test(email)) {
    e.email = "Enter a valid email, e.g. you@example.com.";
  }

  const digits = phoneDigits(s.phone);
  if (!s.phone.trim()) {
    e.phone = "Phone number is required.";
  } else if (digits < LIMITS.phone.min) {
    e.phone = "Enter a valid 10-digit phone number.";
  } else if (digits > 15) {
    e.phone = "Phone number is too long.";
  }

  if (!s.zipcode.trim()) {
    e.zipcode = "Zip code is required.";
  } else if (!ZIP_RE.test(s.zipcode.trim())) {
    e.zipcode = "Enter a valid 5-digit zip code.";
  }

  if (!s.optInConsent) e.optInConsent = "Please agree to be contacted.";
  if (!s.privacyConsent) e.privacyConsent = "Please agree to the privacy policy.";
  return e;
}

function isComplete(s: FormState): boolean {
  return Object.keys(validate(s)).length === 0;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs" style={{ color: "#C0392B", fontSize: 12, marginTop: 4 }}>{msg}</p>;
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
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%", padding: "10px 14px", fontSize: 16, color: value ? "#1A2B3C" : "#8A9BAC",
          border: `1px solid ${error ? "#C0392B" : "#D8DFE8"}`, borderRadius: 6,
          background: "#fff", appearance: "none", outline: "none", boxSizing: "border-box",
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
  label, value, onChange, error, type = "text", placeholder, autoComplete, maxLength, inputMode,
}: {
  label: string; value: string; onChange: (v: string) => void;
  error?: string; type?: string; placeholder?: string; autoComplete?: string;
  maxLength?: number; inputMode?: "text" | "email" | "numeric" | "tel";
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 6 }}>
        {label} <span style={{ color: "#C0392B" }}>*</span>
      </label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || label}
        autoComplete={autoComplete}
        maxLength={maxLength}
        inputMode={inputMode}
        style={{
          width: "100%", padding: "10px 14px", fontSize: 16, color: "#1A2B3C",
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

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (submitted) {
      // Scroll the whole page to the top so the success message (which renders
      // where the form was) is in view — on mobile the form sits below the fold.
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [submitted]);

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

  const formValid = isComplete(form);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const body = new FormData();
      body.append("whoNeedsCare", form.whoNeedsCare);
      body.append("gender", form.gender);
      body.append("livingSituation", form.livingSituation);
      body.append("careNeeds", form.careNeeds.join(", "));
      body.append("firstName", form.firstName.trim());
      body.append("lastName", form.lastName.trim());
      body.append("email", form.email.trim());
      body.append("phone", form.phone.trim());
      body.append("zipcode", form.zipcode.trim());
      body.append("website", "");

      const res = await fetch("/api/get-started", {
        method: "POST",
        body,
      });

      const data = await res.json().catch(() => ({ success: false }));

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", color: "#1A2B3C", background: "#F7F8FA", minHeight: "100vh" }}>

      <style>{`
        .gs-grid {
          display: grid;
          grid-template-columns: minmax(0,1.1fr) minmax(0,0.9fr);
          gap: 40px;
          align-items: start;
        }
        .gs-name-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .gs-main { max-width: 1100px; margin: 0 auto; padding: 48px 24px; width: 100%; box-sizing: border-box; }
        .gs-hero-inner { max-width: 1100px; margin: 0 auto; padding: 52px 24px; text-align: center; position: relative; box-sizing: border-box; }

        @media (max-width: 860px) {
          .gs-grid { grid-template-columns: 1fr; gap: 28px; }
          .gs-main { padding: 32px 16px; }
          .gs-hero-inner { padding: 40px 16px; }
        }
        @media (max-width: 560px) {
          .gs-name-grid { grid-template-columns: 1fr; }
          .gs-main { padding: 24px 14px; }
          .gs-form { padding: 20px !important; }
          .gs-card { padding: 22px !important; }
        }
        @media (max-width: 430px) {
          .gs-main { padding: 18px 10px; }
          .gs-hero-inner { padding: 32px 12px; }
          .gs-form { padding: 16px !important; gap: 15px !important; }
          .gs-card { padding: 18px !important; }
          .gs-sidebar-img { height: 200px !important; }
        }
        @media (max-width: 360px) {
          .gs-main { padding: 14px 8px; }
          .gs-form { padding: 14px !important; }
        }
      `}</style>

      {/* ── Hero banner ─────────────────────────────────────────────────────── */}
      <div style={{ position: "relative", background: "#003A5C", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.07 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{
              position: "absolute", width: 120, height: 120, border: "2px solid #fff", borderRadius: "50%",
              left: `${(i % 4) * 28}%`, top: i < 4 ? "-20%" : "40%", opacity: 0.5,
            }} />
          ))}
        </div>
        <div className="gs-hero-inner">
          <h1 style={{ color: "#fff", fontSize: "clamp(20px, 5vw, 38px)", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            Get Started with Home Care in New Jersey
          </h1>
          <p style={{ color: "#A8C4D8", marginTop: 10, fontSize: "clamp(13px, 3.5vw, 15px)" }}>
            Tell us about your needs — we&apos;ll match you with the right care plan.
          </p>
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <main className="gs-main">
        <div className="gs-grid">

          {/* ── LEFT: Form / Success Area ──────────────── */}
          <div>
            <h2 style={{ fontSize: "clamp(19px, 4.5vw, 22px)", fontWeight: 700, color: "#005B8E", marginTop: 0, marginBottom: 6 }}>
              Speak With Our 24/7 Care Team
            </h2>
            <p style={{ fontSize: 14, color: "#5A6A7A", marginBottom: 28, lineHeight: 1.6 }}>
              No matter what time of day, our Care Services Center is always available, 365 days a year. Give us a call and our team will aim to pick up within 30 seconds.
              Or fill out the form to book your Caring Consult.
            </p>

            {submitted ? (
              <div className="gs-card" style={{ background: "#fff", borderRadius: 10, padding: 40, textAlign: "center", border: "1px solid #D8DFE8" }}>
                <div style={{ width: 56, height: 56, background: "#E8F5E9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
              <form onSubmit={handleSubmit} noValidate className="gs-form" style={{ background: "#fff", borderRadius: 10, padding: 28, border: "1px solid #D8DFE8", display: "flex", flexDirection: "column", gap: 18 }}>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                />

                <SelectField label="Who Needs Care?" value={form.whoNeedsCare} onChange={(v) => setField("whoNeedsCare", v)} options={WHO_OPTIONS} error={errors.whoNeedsCare} />
                <SelectField label="Male or Female?" value={form.gender} onChange={(v) => setField("gender", v)} options={GENDER_OPTIONS} error={errors.gender} placeholder="Select an option" />
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

                <div className="gs-name-grid">
                  <TextInput
                    label="First Name"
                    value={form.firstName}
                    onChange={(v) => setField("firstName", sanitizeName(v))}
                    error={errors.firstName}
                    autoComplete="given-name"
                    maxLength={LIMITS.name.max}
                  />
                  <TextInput
                    label="Last Name"
                    value={form.lastName}
                    onChange={(v) => setField("lastName", sanitizeName(v))}
                    error={errors.lastName}
                    autoComplete="family-name"
                    maxLength={LIMITS.name.max}
                  />
                </div>

                <TextInput
                  label="Email"
                  value={form.email}
                  type="email"
                  inputMode="email"
                  onChange={(v) => setField("email", v)}
                  error={errors.email}
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={LIMITS.email.max}
                />

                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1A2B3C", marginBottom: 6 }}>
                    Phone <span style={{ color: "#C0392B" }}>*</span>
                  </label>
                  <div style={{ display: "flex", border: `1px solid ${errors.phone ? "#C0392B" : "#D8DFE8"}`, borderRadius: 6, overflow: "hidden", background: "#fff" }}>
                    <div style={{ padding: "10px 12px", background: "#F7F8FA", borderRight: "1px solid #D8DFE8", fontSize: 14, color: "#5A6A7A", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap", flexShrink: 0 }}>
                      🇺🇸 +1
                    </div>
                    <input
                      type="tel"
                      inputMode="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setField("phone", sanitizePhone(e.target.value))}
                      placeholder="(555) 000-0000"
                      autoComplete="tel"
                      maxLength={LIMITS.phone.max}
                      style={{ flex: 1, minWidth: 0, width: "100%", padding: "10px 14px", fontSize: 16, border: "none", outline: "none", color: "#1A2B3C", boxSizing: "border-box" }}
                    />
                  </div>
                  <FieldError msg={errors.phone} />
                </div>

                <TextInput
                  label="Zipcode"
                  value={form.zipcode}
                  onChange={(v) => setField("zipcode", v.replace(/[^\d-]/g, ""))}
                  error={errors.zipcode}
                  placeholder="07001"
                  autoComplete="postal-code"
                  inputMode="numeric"
                  maxLength={LIMITS.zip.max}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", fontSize: 13, color: "#5A6A7A", lineHeight: 1.5 }}>
                    <input
                      type="checkbox"
                      required
                      checked={form.optInConsent}
                      onChange={(e) => setField("optInConsent", e.target.checked)}
                      style={{ accentColor: "#005B8E", width: 15, height: 15, marginTop: 2, flexShrink: 0 }}
                    />
                    I understand that by entering my information, I will be receiving a call and emails from a staff member of SRK Care at Home.
                  </label>
                  <FieldError msg={errors.optInConsent} />

                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", fontSize: 13, color: "#5A6A7A", lineHeight: 1.5, flexWrap: "wrap" }}>
                    <input
                      type="checkbox"
                      required
                      checked={form.privacyConsent}
                      onChange={(e) => setField("privacyConsent", e.target.checked)}
                      style={{ accentColor: "#005B8E", width: 15, height: 15, marginTop: 2, flexShrink: 0 }}
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/privacy-policy" style={{ color: "#005B8E", textDecoration: "underline" }}>
                        privacy policy
                      </Link>
                      . (Bottom of Page)
                    </span>
                  </label>
                  <FieldError msg={errors.privacyConsent} />
                </div>

                {error && (
                  <div style={{ border: "1px solid rgba(192,57,43,0.3)", background: "rgba(192,57,43,0.05)", borderRadius: 6, padding: "10px 14px" }}>
                    <p style={{ margin: 0, fontSize: 13, color: "#C0392B" }}>{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || !formValid}
                  style={{
                    width: "100%", padding: "14px",
                    background: submitting || !formValid ? "#C9B47A" : "#E8A020",
                    color: "#fff", fontWeight: 800, fontSize: 14, border: "none", borderRadius: 6,
                    cursor: submitting || !formValid ? "not-allowed" : "pointer", textTransform: "uppercase",
                    letterSpacing: 1.5, transition: "background 0.2s",
                    opacity: !formValid && !submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? "Submitting…" : "Submit the Form"}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: Sidebar ───────────────────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ borderRadius: 10, overflow: "hidden" }}>
              <img className="gs-sidebar-img" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&h=420&fit=crop&q=80" alt="Caregiver" style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
            </div>

            <div className="gs-card" style={{
              background: "linear-gradient(135deg, #005B8E 0%, #003A5C 100%)",
              borderRadius: 16,
              padding: 32,
              textAlign: "center",
              boxShadow: "0 4px 24px rgba(0,91,142,0.18)"
            }}>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: "0 0 16px 0" }}>Get Free Care Assessment</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, margin: 0 }}>Request a free consultation by completing the form and our team can help answer all your questions.</p>
            </div>

            <div className="gs-card" style={{ background: "#fff", borderRadius: 10, padding: 32, border: "1px solid #D8DFE8" }}>
              <h3 style={{ color: "#005B8E", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>What you can Expect</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { num: "1", title: "Initial in-home assessment", text: "Your first step is to contact us to schedule a time to meet with you and your loved one in your home. One of our registered nurses and our certified nursing assistant (CNA) manager come to conduct a nursing assessment and an in-home safety check." },
                  { num: "2", title: "Personalized care plan", text: "After our visit, we work closely with you to decide which of our services best meet your needs and those of your loved one. We work within your budget to customize a care plan that includes the services and number of hours you need." },
                  { num: "3", title: "Thoughtful caregiver matching", text: "When we come to your home, we spend time learning about your loved one, their interests and their preferences. We then match your loved one with a trained, experienced CNA caregiver based on those personal factors." },
                  { num: "4", title: "Adjustments to the care plan", text: "One of our registered nurses reviews your loved one’s care plan with you every 90 days or more often, if needed. We help ensure that your family receives the care you need, when you need it, by adjusting the plan to meet your evolving needs." }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#005B8E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                      {item.num}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, color: "#1A2B3C", fontSize: 14 }}>{item.title}</p>
                      <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "#5A6A7A", lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}
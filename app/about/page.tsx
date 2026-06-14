"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";


// ─── TYPES ───────────────────────────────────────────────────────────────────
interface ServiceItem {
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
  bg: string;
  img: string;
}

interface NewsItem {
  tag: string;
  tagBg: string;
  title: string;
  desc: string;
  img: string;
}

interface AccordionRowProps {
  label: string;
}

interface PillBarProps {
  pills: string[];
}

interface ServiceSectionProps {
  title: string;
  pills: string[];
  img: string;
  imgAlt: string;
  services: ServiceItem[];
  ctaLabel: string;
  reverse?: boolean;
  bg?: string;
}

// ─── UNSPLASH IMAGES ─────────────────────────────────────────────────────────
const HERO_IMG       = "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1440&h=420&fit=crop&auto=format";
const MISSION_IMG    = "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&h=520&fit=crop&auto=format";
const HOMECARE_IMG   = "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&h=440&fit=crop&auto=format";
const PALLIATIVE_IMG = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&h=440&fit=crop&auto=format";
const HOSPICE_IMG    = "https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&h=440&fit=crop&auto=format";
const TRANSPORT_IMG  = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&h=440&fit=crop&auto=format";
const TEAM_IMG       = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=700&h=460&fit=crop&auto=format";

// ─── DATA ────────────────────────────────────────────────────────────────────
const homeCareServices: ServiceItem[] = [
  { label: "Skilled Nursing Care at Home" },
  { label: "Short-Term Rehab" },
  { label: "Disease-Specific Expertise" },
  { label: "Skilled Nursing Care" },
];
const palliativeServices: ServiceItem[] = [
  { label: "Provided Alongside Curative Treatment" },
  { label: "Symptom Management" },
  { label: "Care Coordination" },
];
const hospiceServices: ServiceItem[] = [
  { label: "Comfort at the End of Life" },
  { label: "Customized Plan of Care" },
  { label: "Bereavement Support" },
];
const transportServices: ServiceItem[] = [
  { label: "Safe, Reliable Transportation" },
  { label: "Medical Appointment Rides" },
  { label: "Companion-Assisted Travel" },
];

const pillsHomeCare: string[]   = ["Care at Home", "Short-Term Rehab", "Skilled Nursing", "Palliative Care"];
const pillsPalliative: string[] = ["Advance Care Planning", "Care Coordination", "Symptom Management"];
const pillsHospice: string[]    = ["Pain Management", "Bereavement Support", "Customized Plan of Care", "Spiritual Support"];
const pillsTransport: string[]  = ["Scheduling", "Long-Distance", "Medical Visits", "Same-Day"];

const teamMembers: TeamMember[] = [
  { name: "Dr. Sarah Kaminski", role: "Medical Director",        bg: "#005B8E", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&auto=format" },
  { name: "Robert Chen",        role: "Director of Care Services", bg: "#00A693", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&auto=format" },
  { name: "Amara Osei",         role: "Lead Care Coordinator",   bg: "#003A5C", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&auto=format" },
];

const newsItems: NewsItem[] = [
  { tag: "SRK IN THE NEWS", tagBg: "#003A5C", title: "SRK Care Launches Inpatient Hospice Care with Community Partners",      desc: "We continue to expand our services to meet the growing needs of families across the region.", img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=240&fit=crop&auto=format" },
  { tag: "SRK IN THE NEWS", tagBg: "#005B8E", title: "SRK Nursing Center Featured on Local Health Radio Station",             desc: "Our care model and patient outcomes were highlighted as a model for community health.",       img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=240&fit=crop&auto=format" },
  { tag: "SRK IN THE NEWS", tagBg: "#1A1A2E", title: "Staff Honored by United Hospital Fund for Excellence in Care",          desc: "Two senior nurses recognized for outstanding dedication to client-centered care.",            img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=240&fit=crop&auto=format" },
  { tag: "AWARD",           tagBg: "#00A693", title: "SRK Care Earns Joint Commission's Prestigious Gold Seal of Approval",   desc: "A testament to our commitment to the highest standards in home care quality.",                img: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400&h=240&fit=crop&auto=format" },
];

// ─── SUBCOMPONENTS ───────────────────────────────────────────────────────────
function AccordionRow({ label }: AccordionRowProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #E5E7EB", cursor: "pointer" }}
    >
      <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, color: "#1A1A2E", fontWeight: 500 }}>
        {label}
      </span>
      <span style={{ color: "#005B8E", flexShrink: 0, marginLeft: 8 }}>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </span>
    </div>
  );
}

function PillBar({ pills }: PillBarProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
      {pills.map((p: string) => (
        <span key={p} style={{ background: "#E8F4FD", color: "#005B8E", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20, fontFamily: "'Source Sans 3', sans-serif", letterSpacing: "0.03em" }}>
          {p}
        </span>
      ))}
    </div>
  );
}

function ServiceSection({ title, pills, img, imgAlt, services, ctaLabel, reverse = false, bg }: ServiceSectionProps) {
  return (
    <section style={{ background: bg ?? "#fff", padding: "64px 0", borderBottom: "1px solid #E5E7EB" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, fontWeight: 700, color: "#00A693", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>
          LEARN MORE ABOUT
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, color: "#003A5C", marginBottom: 32 }}>
          {title}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "start" }}>
          {/* Photo */}
          <div style={{ order: reverse ? 2 : 1, position: "relative", height: 280, borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 24px rgba(0,58,92,0.12)" }}>
            <Image src={img} alt={imgAlt} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          {/* Accordion card */}
          <div style={{ order: reverse ? 1 : 2 }}>
            <PillBar pills={pills} />
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "8px 20px 4px", marginBottom: 24, boxShadow: "0 2px 10px rgba(0,58,92,0.07)" }}>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 10, fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.12em", textTransform: "uppercase", margin: "14px 0 6px" }}>
                CARE AT A GLANCE
              </p>
              <div style={{ height: 2, background: "#003A5C", marginBottom: 4 }} />
              {services.map((s: ServiceItem) => (
                <AccordionRow key={s.label} label={s.label} />
              ))}
            </div>
            <a href="#" style={{ display: "inline-block", background: "#005B8E", color: "#fff", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 12, padding: "12px 22px", borderRadius: 6, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section style={{ background: "#F9F9F7", padding: "80px 24px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: "#003A5C", textAlign: "center", marginBottom: 40 }}>
          Contact Us
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {["Your Name", "Your Telephone Number", "Your Email Address"].map((ph) => (
            <input key={ph} placeholder={ph} style={{ padding: "13px 16px", border: "1px solid #D1D5DB", borderRadius: 6, fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, color: "#1A1A2E", outline: "none", width: "100%", boxSizing: "border-box" }} />
          ))}
          <select style={{ padding: "13px 16px", border: "1px solid #D1D5DB", borderRadius: 6, fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, color: "#6B7280", background: "#fff" }}>
            <option>What services are you interested in learning about?</option>
            <option>SRK Home Care</option>
            <option>SRK Palliative Care</option>
            <option>SRK Hospice</option>
            <option>SRK Senior Transportation</option>
          </select>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: "#6B7280", margin: "4px 0 0" }}>
            Is this for you or a loved one?
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["For me", "For a loved one"].map((opt) => (
              <label key={opt} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, color: "#1A1A2E", cursor: "pointer" }}>
                <input type="radio" name="for" value={opt} style={{ accentColor: "#005B8E", width: 16, height: 16 }} />
                {opt}
              </label>
            ))}
          </div>
          <textarea placeholder="Please include any details that may help in assisting you..." rows={5} style={{ padding: "13px 16px", border: "1px solid #D1D5DB", borderRadius: 6, fontFamily: "'Source Sans 3', sans-serif", fontSize: 15, color: "#1A1A2E", resize: "vertical", outline: "none", width: "100%", boxSizing: "border-box" }} />
          <button style={{ background: "#005B8E", color: "#fff", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 13, padding: "14px 32px", borderRadius: 6, border: "none", cursor: "pointer", letterSpacing: "0.07em", textTransform: "uppercase", alignSelf: "flex-start" }}>
            SEND US A MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'Source Sans 3', sans-serif" }}>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "center" }}>
        <Image src={HERO_IMG} alt="SRK caregiver with happy seniors" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,58,92,0.72)" }} />
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "64px 24px", width: "100%" }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 10 }}>Home</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "#fff", maxWidth: 680, lineHeight: 1.15, marginBottom: 16 }}>
            About SRK Care at Home
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 17, maxWidth: 540, lineHeight: 1.65, marginBottom: 28 }}>
            A not-for-profit home care agency that has been caring for, supporting, and guiding at-risk families for nearly 20 years.
          </p>
          <a href="#contact" style={{ display: "inline-block", background: "#00A693", color: "#fff", fontWeight: 700, fontSize: 13, padding: "13px 28px", borderRadius: 6, textDecoration: "none", letterSpacing: "0.07em", textTransform: "uppercase" }}>
            CONTACT US
          </a>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#003A5C", marginBottom: 20 }}>
              A Legacy of Compassion, Dignity &amp; Respect
            </h2>
            <p style={{ color: "#6B7280", lineHeight: 1.78, fontSize: 16, marginBottom: 14 }}>
              Founded in 2004, SRK Care at Home is based on the core values of compassion and respect. SRK Health System is a well-respected, mission-driven, not-for-profit provider of health care programs and services across the greater metropolitan area.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.78, fontSize: 16, marginBottom: 14 }}>
              SRK believes that staying healthy is not always as easy as visiting the doctor or taking medicines as prescribed. Gaps in access to quality health care based on race, ethnicity, culture, language, and socioeconomic status are well-documented. SRK is leading the way by being committed to health equity, closing these gaps in care.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.78, fontSize: 16, marginBottom: 20 }}>You can count on SRK for:</p>
            <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Home Care at Home", "Short-Term Rehabilitation", "Long-Term Care", "Care in our Skilled Nursing Centers", "Hospice and Palliative Care", "Health Plans for Medicare or Dual Medicare and Medicaid Beneficiaries"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={18} color="#00A693" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#005B8E", fontSize: 15, fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: "relative", height: 480, borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,58,92,0.15)" }}>
            <Image src={MISSION_IMG} alt="SRK nurse caring for elderly patient" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServiceSection title="SRK Home Care"           pills={pillsHomeCare}   img={HOMECARE_IMG}   imgAlt="Caregiver helping senior at home"   services={homeCareServices}   ctaLabel="Learn More About SRK Home Care"        bg="#F2F2F2" />
      <ServiceSection title="SRK Palliative Care"     pills={pillsPalliative} img={PALLIATIVE_IMG} imgAlt="Compassionate palliative care"       services={palliativeServices} ctaLabel="Learn More About SRK Palliative Care"  bg="#fff"    reverse />
      <ServiceSection title="SRK Hospice"             pills={pillsHospice}    img={HOSPICE_IMG}    imgAlt="Peaceful hospice care"               services={hospiceServices}    ctaLabel="Learn More About SRK Hospice"          bg="#F2F2F2" />
      <ServiceSection title="SRK Senior Transportation" pills={pillsTransport} img={TRANSPORT_IMG}  imgAlt="Senior transportation service"       services={transportServices}  ctaLabel="Learn More About SRK Transportation"   bg="#fff"    reverse />

      {/* TEAM */}
      <section style={{ background: "#F2F2F2", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "center", marginBottom: 64 }}>
            <div style={{ position: "relative", height: 400, borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,58,92,0.12)" }}>
              <Image src={TEAM_IMG} alt="SRK healthcare team" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, fontWeight: 700, color: "#00A693", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>MEET THE TEAM</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 700, color: "#003A5C", marginBottom: 18 }}>The People Behind the Care</h2>
              <p style={{ color: "#6B7280", lineHeight: 1.75, fontSize: 16 }}>Our leadership team brings decades of healthcare expertise and a genuine passion for improving lives in every community we serve.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
            {teamMembers.map((m: TeamMember) => (
              <div key={m.name} style={{ textAlign: "center", background: "#fff", borderRadius: 16, padding: "36px 24px", boxShadow: "0 2px 16px rgba(0,58,92,0.09)" }}>
                <div style={{ position: "relative", width: 88, height: 88, borderRadius: "50%", overflow: "hidden", margin: "0 auto 16px", border: `3px solid ${m.bg}` }}>
                  <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover" }} sizes="88px" />
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A2E", marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: "#6B7280" }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div id="contact"><ContactForm /></div>

      {/* NEWS */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#003A5C", textAlign: "center", marginBottom: 44 }}>
            SRK In the News
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {newsItems.map((n: NewsItem, i: number) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E5E7EB", background: "#fff", boxShadow: "0 2px 12px rgba(0,58,92,0.07)" }}>
                <div style={{ position: "relative", height: 170 }}>
                  <Image src={n.img} alt={n.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 25vw" />
                  <span style={{ position: "absolute", top: 12, left: 12, background: n.tagBg, color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {n.tag}
                  </span>
                </div>
                <div style={{ padding: "20px 18px" }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E", marginBottom: 8, lineHeight: 1.45 }}>{n.title}</h4>
                  <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6, marginBottom: 16 }}>{n.desc}</p>
                  <a href="#" style={{ color: "#005B8E", fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: "0.04em" }}>LEARN MORE →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
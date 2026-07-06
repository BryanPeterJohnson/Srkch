"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Brain,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock,
  FileCheck,
  Gamepad2,
  HeartHandshake,
  Home,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
  ChevronLeft
} from "lucide-react";
import { services } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface CategorizedFeature {
  title: string;
  icon?: React.ElementType;
  items: string[];
}

const defaultServiceIcons = [HeartHandshake, Gamepad2, Brain, MapPin, Users2, Sparkles];

const fallbackHowItWorks = [
  { step: 1, title: "Contact Us", desc: "Call or fill out the form to speak with our care coordinator." },
  { step: 2, title: "Free Assessment", desc: "We learn about your loved one's needs and create a personalized care plan." },
  { step: 3, title: "Match & Schedule", desc: "We match you with the perfect caregiver and schedule care." },
  { step: 4, title: "Care Begins", desc: "Care starts with ongoing support and regular check-ins." },
];

const stepIcons = [Phone, ClipboardList, Users2, CalendarCheck];

/* ─────────────────────── PROMISE SIDEBAR ─────────────────────── */
function PromiseCard() {
  const items = [
    {
      icon: ShieldCheck,
      title: "100% Satisfaction Guarantee",
      desc: (
        <>
          If you're not satisfied, we make <br />
          it right — no questions asked.
        </>
      ),
    },
    {
      icon: Clock,
      title: "Available Around the Clock 24/7",
      desc: (
        <>
          Care when you need it, day or night, <br />
          weekends and holidays.
        </>
      ),
    },
    {
      icon: FileCheck,
      title: "No Long-Term Contracts",
      desc: (
        <>
          Flexible care arrangements with no <br />
          binding commitments required.
        </>
      ),
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-xs flex-1 flex-col rounded-2xl border border-[#D8F0EE] bg-[#EEF9F7] px-5 py-5 shadow-sm">
      <h3 className="font-display font-black mb-4 text-base text-[#0B2D5B]">
        Our Promise
      </h3>

      <div className="flex-1 space-y-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#0C447C] text-[#0C447C]">
              <Icon className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="text-xs font-black text-[#102A43]">{title}</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-white px-4 py-4 shadow-sm">
        <div className="mb-2 flex items-center gap-2">
          <Star className="h-3.5 w-3.5 fill-[#0C447C] text-[#0C447C]" />
          <p className="text-xs font-black text-[#102A43]">High Caliber Caregivers</p>
        </div>
        <p className="mb-4 text-[11px] leading-5 text-slate-600">
          Every caregiver is background-checked, insured, and rigorously trained before entering a client's home.
        </p>
        <a href="/contact" className="flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#0C447C] px-4 text-[11px] font-black text-white transition hover:bg-[#08345F]">
          Request a Free Consultation <ArrowRight className="h-3 w-3 shrink-0" />
        </a>
        <a href="tel:+14439859368" className="mt-2 flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#0C447C] bg-white px-4 text-[11px] font-black text-[#0C447C] transition hover:bg-[#F3F8FC]">
          <Phone className="h-3 w-3" /> Call (443) 985-9368
        </a>
      </div>
    </div>
  );
}
/* ─────────────────────── SECTION DIVIDER ─────────────────────── */
function HeartDivider() {
  return (
    <div className="mx-auto mt-4 flex items-center justify-center gap-2 text-[#159BA1]">
      <span className="h-px w-10 bg-[#159BA1]" />
      <HeartHandshake className="h-5 w-5 fill-[#159BA1]" />
      <span className="h-px w-10 bg-[#159BA1]" />
    </div>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */
export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const serviceId = parseInt(resolvedParams.id, 10);
  const service   = services.find((s) => s.id === serviceId);

  if (!service) notFound();

  const categories: CategorizedFeature[] =
    "categorizedFeatures" in service && Array.isArray(service.categorizedFeatures)
      ? (service.categorizedFeatures as CategorizedFeature[])
      : "features" in service && Array.isArray((service as any).features)
        ? [{ title: "Personalized Companionship You Can Trust", items: (service as any).features as string[] }]
        : [];

  const howItWorks =
    "howItWorks" in service && Array.isArray((service as any).howItWorks)
      ? (service as any).howItWorks
      : fallbackHowItWorks;

  /* Related services — services that share at least one patientGroup
     (seniors / adults / children) with the current service, current one excluded.
     Falls back to any other services if there aren't enough matches. */
  const currentGroups: string[] = (service as any).patientGroups || [];
  const relatedByGroup = services.filter(
    (s) =>
      s.id !== service.id &&
      (s as any).patientGroups?.some((g: string) => currentGroups.includes(g))
  );
  const related =
    relatedByGroup.length >= 3
      ? relatedByGroup.slice(0, 5)
      : services.filter((s) => s.id !== service.id).slice(0, 5);

  return (
    <main className="min-h-screen bg-white font-sans text-[#102A43]">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white min-h-[480px]">
        <div className="absolute inset-0">
          <img
            src={(service as any).image}
            alt={service.title}
            className="h-full w-full object-cover object-[right_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent from-[35%] via-white/50 via-[50%] to-white" />
        </div>

<div className="relative ml-0 max-w-7xl pl-14 pr-4 py-14 sm:pl-16 sm:pr-6 lg:pl-20 lg:pr-8 lg:py-20">


          <div className="max-w-[540px] text-left">

            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#159BA1]">
              {(service as any).category || "Companion Care Services"}
            </p>

<h1 className="font-display font-black text-4xl leading-tight text-[#143e75] sm:text-5xl">
                {service.title}
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600">
              {(service as any).tagline || service.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              {([
                [Users2,      "Compassionate", "Caregivers"],
                [ShieldCheck, "Background",    "Checked"],
                [Clock,       "Available",     "24/7"],
              ] as [React.ElementType, string, string][]).map(([Icon, line1, line2]) => (
                <div key={line1} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0C447C] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-bold leading-[1.35] text-[#102A43]">
                    <p>{line1}</p>
                    <p>{line2}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#0C447C] px-7 py-4 text-sm font-black text-white shadow-md transition hover:bg-[#08345F]">
                Request a Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+14439859368" className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-[#0C447C] bg-white/80 px-7 py-4 text-sm font-black text-[#0C447C] transition hover:bg-white">
                <Phone className="h-4 w-4" /> Call (443) 985-9368
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES + STATS + HOW IT WORKS (left) | PROMISE + TESTIMONIALS (right sticky)
      ═══════════════════════════════════════════ */}
      <section className="bg-white pt-6 pb-6 lg:pt-8 lg:pb-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:items-start lg:px-8">

          {/* ── LEFT COLUMN ── */}
       <div className="flex flex-col">

            {/* Services grid */}
            <div>
<div className="mb-4 text-center">
  <h2 className="font-display font-black text-3xl text-[#0B2D5B]">Our {service.shortTitle} Services</h2>
    <p className="mt-5 text-sm leading-7 text-slate-600 max-w-3xl mx-auto ">
      {service.description}
    </p>
  <p className="mt-3 text-m font-bold text-[#0B2D5B]">Our Services Includes</p>
  <HeartDivider />

</div>
<div className="grid grid-cols-1 gap-x-3 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((cat, idx) => {
                  const Icon = cat.icon || defaultServiceIcons[idx % defaultServiceIcons.length];
                  return (
                    <article
                      key={cat.title}
                      className="group flex flex-col rounded-2xl border border-slate-100 bg-white px-8 pb-4 pt-1 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#159BA1] text-white shadow-md group-hover:bg-[#0C447C]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-1 text-base font-black text-sm leading-6 text-[#0B2D5B]">{cat.title}</h3>
                      <p className="text-xs leading-5 text-slate-600 hyphens-auto">{cat.items.join(", ")}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Stats row */}
<div className="mt-6 lg:mt-8 grid grid-cols-2 rounded-2xl border border-slate-100 bg-[#F5F9FC] sm:grid-cols-4">
  {([
    [Users2,      "500+",      "Families Served"],
    [Clock,       "24/7",      "Care Available"],
    [Star,        "98%",       "Client Satisfaction"],
    [ShieldCheck, "Certified", "& Insured Caregivers"],
  ] as [React.ElementType, string, string][]).map(([Icon, value, label]) => (
    <div key={value} className="flex items-center gap-3 p-5">
      <Icon className="h-8 w-8 shrink-0 text-[#0C447C]" />
      <div>
        <p className="text-xl font-black text-[#0B2D5B]">{value}</p>
        <p className="text-xs text-slate-600">{label}</p>
      </div>
    </div>
  ))}
</div>

            {/* How It Works */}
            <div className="mt-6 lg:mt-8">
      <div className="mb-4 text-center">
  <h2 className="font-display font-black text-3xl text-[#0B2D5B]">How It Works</h2>
  <HeartDivider />
</div>
              <div className="flex items-start justify-center">
                {howItWorks.map((step: any, idx: number) => {
                  const Icon = stepIcons[idx % stepIcons.length];
                  const isLast = idx === howItWorks.length - 1;
                  return (
                    <div key={step.step ?? idx} className="flex items-start">
                      <div className="flex w-36 flex-col items-center text-center sm:w-44">
                        <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0C447C] text-white shadow-md">
                          <Icon className="h-7 w-7" />
                        </div>
                        <p className="mb-1.5 text-sm font-black text-[#0B2D5B]">{idx + 1}. {step.title}</p>
                        <p className="text-xs leading-5 text-slate-600">{step.desc}</p>
                      </div>
                      {!isLast && (
                        <ArrowRight className="mt-7 h-5 w-5 shrink-0 text-[#0C447C]/50 hidden sm:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — sticky ── */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">

            {/* Promise card */}
            <PromiseCard />

            {/* Testimonials card */}
            <div className="mx-auto w-full max-w-xs rounded-2xl border border-slate-100 bg-[#FAFCFE] p-5 shadow-sm">
              <h2 className="font-display font-black mb-4 text-base text-[#0B2D5B]">What Families Are Saying</h2>
              {[
                ["Our caregiver has become part of the family. The companionship and care my mother receives has truly improved her quality of life.", "Sarah M., Columbia, MD"],
                ["Excellent companion care for my father. The caregiver is compassionate, reliable and engaging. Highly recommend!", "James R., Ellicott City, MD"],
                ["The team truly listens and adapts the care plan as needs change. It's given our whole family peace of mind.", "Linda K., Baltimore, MD"],
              ].map(([quote, name]) => (
                <div key={name as string} className="mb-3 rounded-xl bg-white  p-4">
                  <div className="mb-2 flex text-[#FFC107]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs leading-6 text-slate-600">{quote}</p>
                  <p className="mt-2 text-xs font-bold text-[#0B2D5B]">— {name}</p>
                </div>
              ))}
              <a href="/reviews" className="mt-1 flex items-center gap-1 text-xs font-black text-[#0C447C] hover:underline">
                View More Reviews <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ (left) + RELATED SERVICES (right)
      ═══════════════════════════════════════════ */}
<section className="bg-[#FAFCFE] pt-3 pb-3 lg:pt-2 lg:pb-3"> 
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
  <div>
    <h2 className="font-display font-black mb-0 text-2xl text-[#0B2D5B]">Frequently Asked Questions</h2>
    {[
      "How often can a caregiver visit?",
      "Do you provide transportation for outings?",
      "Is companion care covered by insurance?",
      "Can care start immediately?",
      "Can I change my caregiver if needed?",
    ].map((question) => (
      <details key={question} className="mb-3 mt-4 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between text-xs font-black text-[#102A43]">
          {question}
          <span className="ml-3 shrink-0 text-slate-400">+</span>
        </summary>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Please contact our care coordinator for details based on your family's needs and schedule.
        </p>
      </details>
    ))}
  </div>

        
<div>
  <h2 className="font-display font-black text-2xl text-[#0B2D5B]">You May Also Be Interested In</h2>
  <div className="grid grid-cols-2 mt-4 gap-3 sm:grid-cols-3 xl:grid-cols-5">
    {related.map((item) => (
      <a
        key={item.id}
        href={`/services/${item.id}`}
        className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="h-28 overflow-hidden">
          <img
            src={(item as any).image}
            alt={item.title}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 items-center justify-between gap-2 p-3">
          <span className="text-xs font-black leading-snug text-[#0B2D5B] line-clamp-2">
            {item.title}
          </span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#159BA1]" />
        </div>
      </a>
    ))}
  </div>

  <div className="mt-6 flex items-center justify-center gap-4">
    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-300">
      <ChevronLeft className="h-4 w-4" />
    </button>
    <span className="text-sm font-medium text-slate-500">1 of 5 Services</span>
    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2D5B] text-white">
      <ChevronRight className="h-4 w-4" />
    </button>
  </div>
</div>
    </div>
      </section>
      {/* ═══════════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0B2D5B] pt-6 pb-6 lg:pt-8 lg:pb-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div className="flex items-center gap-5">
            <HeartHandshake className="hidden h-14 w-14 text-white/80 sm:block" />
            <div>
              <h2 className="font-display font-black text-2xl">Ready to Improve Your Loved One's Quality of Life?</h2>
              <p className="mt-2 text-blue-100">Our compassionate team is here to help — call or schedule your free consultation today.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
<a href="tel:+14439859368" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-4 font-black text-white whitespace-nowrap">
              <Phone className="h-4 w-4" /> Call (443) 985-9368
            </a>
<a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-black text-[#0B2D5B] whitespace-nowrap">            
   Request a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
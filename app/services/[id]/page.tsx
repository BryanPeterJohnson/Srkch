"use client";

import { useState, use, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  FileCheck,
  Headset,
  Users,
  CalendarDays,
} from "lucide-react"; import { services } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface CategorizedFeature {
  title: string;
  icon?: React.ElementType;
  items: string[];
}

// ── Sticky CTA Card ──
function CTACard({ leftColRef }: { leftColRef: React.RefObject<HTMLDivElement | null> }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);
  const stopScrollYRef = useRef<number | null>(null);
  const stateRef = useRef<"relative" | "fixed" | "docked">("relative");
  const FIXED_TOP = 80;

  useEffect(() => {
    function captureInitial() {
      if (!wrapperRef.current || !cardRef.current || !leftColRef.current) return;
      if (initialTopRef.current !== null) return;

      const wrapperTop =
        wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      const cardHeight = cardRef.current.offsetHeight;
      const leftColBottomAbs =
        leftColRef.current.getBoundingClientRect().bottom + window.scrollY;

      initialTopRef.current = wrapperTop;
      stopScrollYRef.current = leftColBottomAbs - cardHeight - FIXED_TOP;
    }

    function setTransition(enable: boolean) {
      if (!cardRef.current) return;
      cardRef.current.style.transition = enable
        ? "top 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "none";
    }

    function updatePosition() {
      if (!wrapperRef.current || !cardRef.current || !leftColRef.current) return;
      captureInitial();
      if (initialTopRef.current === null || stopScrollYRef.current === null) return;

      const scrollY = window.scrollY;
      const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
      const wrapperLeft = wrapperRef.current.getBoundingClientRect().left;
      const stopScrollY = stopScrollYRef.current;

      if (scrollY + FIXED_TOP < initialTopRef.current) {
        if (stateRef.current !== "relative") {
          setTransition(false);
          cardRef.current.style.position = "relative";
          cardRef.current.style.top = "0";
          cardRef.current.style.left = "0";
          cardRef.current.style.width = "100%";
          cardRef.current.style.bottom = "auto";
          stateRef.current = "relative";
        }
      } else if (scrollY >= stopScrollY) {
        if (stateRef.current !== "docked") {
          setTransition(stateRef.current === "fixed");
          const dockedTop = stopScrollY - initialTopRef.current + FIXED_TOP;
          cardRef.current.style.position = "absolute";
          cardRef.current.style.top = `${dockedTop}px`;
          cardRef.current.style.bottom = "auto";
          cardRef.current.style.left = "0";
          cardRef.current.style.width = "100%";
          stateRef.current = "docked";
        }
      } else {
        if (stateRef.current !== "fixed") {
          setTransition(false);
          cardRef.current.style.position = "fixed";
          cardRef.current.style.bottom = "auto";
          cardRef.current.style.top = `${FIXED_TOP}px`;
          stateRef.current = "fixed";
        }
        cardRef.current.style.width = `${wrapperWidth}px`;
        cardRef.current.style.left = `${wrapperLeft}px`;
      }
    }

    const timer = setTimeout(() => {
      captureInitial();
      updatePosition();
    }, 100);

    const handleResize = () => {
      initialTopRef.current = null;
      stopScrollYRef.current = null;
      stateRef.current = "relative";
      captureInitial();
      updatePosition();
    };

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, [leftColRef]);

  return (
    <div ref={wrapperRef} className="relative w-full min-h-[200px]">
      <div
        ref={cardRef}
        className="z-40 w-full max-w-[340px] rounded-[16px] bg-[#153B73] p-4 shadow-xl"
        style={{ willChange: "top" }}
      >
        <div className="flex items-center gap-2 mt-2 mb-1">
          <div className="flex-1 h-[1px] bg-[#24A8F2]" />
          <span className="text-[#24A8F2] italic font-semibold text-[12px] whitespace-nowrap">
            Compassionate Care. Peace of Mind.
          </span>
          <div className="flex-1 h-[1px] bg-[#24A8F2]" />
        </div>

        {[
          {
            text: "100% Satisfaction Guarantee",
            icon: ShieldCheck,
          },
          {
            text: "Experts in Around-the-Clock 24-Hour Home Care",
            icon: HeartHandshake,
          },
          {
            text: "No Long Term Contracts",
            icon: FileCheck,
          },
          {
            text: "Care Managers Available 24/7",
            icon: Headset,
          },
          {
            text: "High Caliber Caregivers",
            icon: Users,
          },
        ].map(({ text, icon: Icon }, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 py-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#2196F3] flex items-center justify-center flex-shrink-0 shadow-md">
                <Icon className="w-5 h-5 text-white" strokeWidth={2.3} />
              </div>
              <p className="text-white text-[13px] leading-[18px] font-semibold">
                {text}
              </p>
            </div>
            {i !== 4 && <div className="border-b border-[#3E5C87]" />}
          </div>
        ))}

        <button className="mt-4 w-full h-[44px] rounded-[12px] bg-white flex items-center justify-center gap-2 font-bold text-[#173A72] text-[14px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#173A72"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Request a Free Consultation
        </button>
      </div>
    </div>
  );
}

// ── Main Page ──
export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const serviceId = parseInt(resolvedParams.id, 10);
  const service = services.find((s) => s.id === serviceId);

  const [activeStep, setActiveStep] = useState(0);
  const leftColRef = useRef<HTMLDivElement>(null);

  if (!service) notFound();

  // Resolve categorized features — supports both shapes
  const categories: CategorizedFeature[] =
    "categorizedFeatures" in service && Array.isArray(service.categorizedFeatures)
      ? (service.categorizedFeatures as CategorizedFeature[])
      : "features" in service && Array.isArray((service as any).features)
        ? [{ title: "What's Included", items: (service as any).features as string[] }]
        : [];

  return (
    <div className="min-h-screen bg-[#f8fafc]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* HERO */}
      <div className="relative overflow-hidden min-h-[480px] md:min-h-[560px] flex items-end">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-[#112240cc] to-[#112240]/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: service.accentLight, color: service.accent }}
            >
              {service.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight">
              {service.title}
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-8 max-w-2xl leading-relaxed">
              {service.tagline}
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 pt-5 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Availability: <strong className="text-white font-semibold">{service.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Coverage: <strong className="text-white font-semibold">{service.coverage}</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT COLUMN */}
        <div ref={leftColRef} className="lg:col-span-2 space-y-12">

          {/* Overview */}
          <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4">
              {service.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base mb-1">
              {service.description}
            </p>
            <p className="text-slate-600 leading-relaxed text-base mb-6 font-medium">
              Our services include around-the-clock care including:
            </p>

            {/* TIMELINE LIST */}
            <div className="flex flex-col">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    {/* icon + connector line */}
                    <div className="flex flex-col items-center flex-shrink-0 self-stretch">
                      <div
                        className="w-10 h-10 rounded-xl bg-[#005B8E] flex items-center justify-center flex-shrink-0"
                        style={{ marginTop: "2px" }}
                      >
                        {Icon ? (
                          <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-white/60" />
                        )}
                      </div>
                      {idx !== categories.length - 1 && (
                        <div className="w-[2px] bg-slate-200 flex-1 mt-1" />
                      )}
                    </div>
                    {/* text */}
                    <div className="pb-7">
                      <h3 className="text-[17px] font-bold text-[#112240] leading-8">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-[3px] leading-relaxed">
                        {cat.items.join(", ")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a365d] mb-8 flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-blue-600" /> How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {service.howItWorks.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all ${activeStep === idx
                    ? "bg-slate-900 border-slate-900 shadow-md text-white"
                    : "bg-slate-50 border-slate-100 text-slate-800 hover:bg-slate-100"
                    }`}
                >
                  <span
                    className={`block text-xs font-bold tracking-wider uppercase mb-1 ${activeStep === idx ? "text-blue-400" : "text-slate-400"
                      }`}
                  >
                    Step {step.step}
                  </span>
                  <span className="block font-bold text-sm leading-tight mb-2">
                    {step.title}
                  </span>
                  <p
                    className={`text-xs leading-relaxed ${activeStep === idx ? "text-slate-300" : "text-slate-500"
                      }`}
                  >
                    {step.desc}
                  </p>
                </button>
              ))}
            </div>
          </section>

        </div>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <CTACard leftColRef={leftColRef} />
        </aside>

      </div>
    </div>
  );
}
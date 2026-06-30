"use client";

import { use, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  ShieldCheck,
  Clock4,
  FileCheck,
  Star,
  ArrowRight,
  Users2,
  ClipboardList,
  Heart,
  RefreshCw,
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

// ── Sticky CTA Card ──
function CTACard({ leftColRef }: { leftColRef: React.RefObject<HTMLElement | null> }) {
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

  const promiseItems = [
    {
      icon: ShieldCheck,
      title: "100% Satisfaction Guarantee",
      desc: "If you're not satisfied, we make it right — no questions asked.",
    },
    {
      icon: Clock4,
      title: "Available Around the Clock 24/7",
      desc: "Care when you need it, day or night, weekends and holidays.",
    },
    {
      icon: FileCheck,
      title: "No Long-Term Contracts",
      desc: "Flexible care arrangements with no binding commitments required.",
    },
  ];

  return (
    <div ref={wrapperRef} className="relative w-full min-h-[200px]">
      <div
        ref={cardRef}
        className="z-40 w-full max-w-[360px] rounded-[16px] bg-[#FAFAF9] border border-[#EBEBE9] p-5 shadow-sm"
        style={{ willChange: "top" }}
      >
        <h3 className="text-[#2C2C2A] text-base font-bold mb-4">Our Promise</h3>

        <div className="space-y-5 mb-2">
          {promiseItems.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-[#EBEBE9]">
                <Icon className="w-[18px] h-[18px] text-[#5F5E5A]" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-[#2C2C2A] text-[13px] font-bold leading-[18px]">
                  {title}
                </p>
                <p className="text-[#5F5E5A] text-[12px] leading-[17px] mt-0.5">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 bg-white rounded-xl p-4 border border-[#EBEBE9]">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-[18px] h-[18px] text-[#2C2C2A] fill-[#2C2C2A]" strokeWidth={1.5} />
            <p className="text-[#2C2C2A] text-[14px] font-bold">High Caliber Caregivers</p>
          </div>
          <p className="text-[#5F5E5A] text-[13px] leading-[19px] mb-4">
            Every caregiver is background-checked, insured, and rigorously
            trained before entering a client&apos;s home.
          </p>
          <button className="w-full h-[44px] rounded-[12px] bg-[#0C447C] hover:bg-[#042C53] transition-colors flex items-center justify-center gap-2 font-bold text-white text-[14px]">
            Request a Free Consultation
            <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──
export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const serviceId = parseInt(resolvedParams.id, 10);
  const service = services.find((s) => s.id === serviceId);

  const leftColRef = useRef<HTMLElement>(null);

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
        <div className="lg:col-span-2 space-y-12">

          {/* Overview */}
          <section ref={leftColRef} className="py-2">
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

        </div>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <CTACard leftColRef={leftColRef} />
        </aside>

      </div>

      {/* How It Works — full width white section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0C447C]">
              The Process
            </span>
            <h2 className="text-2xl font-bold text-[#112240] mt-2 mb-3">
              How It Works
            </h2>
            <div className="w-10 h-[3px] bg-[#0C447C] mx-auto" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[27px] left-0 right-0 px-[12.5%]">
              <div className="h-[2px] w-full bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch relative">
              {service.howItWorks.map((step, idx) => {
                const stepIcons = [Users2, ClipboardList, Heart, RefreshCw];
                const Icon = stepIcons[idx % stepIcons.length];
                return (
                  <div
                    key={step.step}
                    className="relative h-full flex flex-col text-left p-5 rounded-xl border bg-slate-50 border-slate-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#112240]">
                        <Icon className="w-[18px] h-[18px] text-white" strokeWidth={2} />
                      </div>
                      <span className="text-xs font-medium tracking-wider text-slate-400">
                        Step {String(step.step).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="block font-bold text-[15px] text-[#112240] leading-tight mb-2">
                      {step.title}
                    </span>
                    <p className="text-[13px] leading-relaxed text-slate-500">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
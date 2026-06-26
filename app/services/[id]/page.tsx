"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Calendar, Plus, Minus } from "lucide-react";
import { services } from "../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const serviceId = parseInt(resolvedParams.id, 10);
  const service = services.find((s) => s.id === serviceId);

  const [activeStep, setActiveStep] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (!service) notFound();

  const categories: { title: string; items: string[] }[] =
    "categorizedFeatures" in service && service.categorizedFeatures
      ? (service.categorizedFeatures as { title: string; items: string[] }[])
      : (service as any).features
        ? [{ title: "What's Included", items: (service as any).features as string[] }]
        : [];

  return (
    <div className="min-h-screen bg-[#f8fafc]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── HERO with image ── */}
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

      {/* ── MAIN LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">

          {/* Overview */}
          <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            {/* Header Section */}
            <h2 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
              Personal Care & Daily Living Assistance
            </h2>

            {/* Paragraph with reduced bottom margin to pull the next section up */}
            <p className="text-slate-600 leading-relaxed text-base mb-1">
              {service.description}
            </p>
            {/* New Header */}
            {/* New Header - reduced margin to 4 or 6 */}
            <h2 className="text-slate-600 leading-relaxed text-base mb-4 font-medium">
              Our services include around-the-clock care including:
            </h2>

            {/* List Section: Removed px-8 and py-7 to remove whitespace/gaps */}
            <div className="mt-1">


              <div className="flex flex-col gap-2">
                {categories.map((cat, idx) => (
                  <div key={idx} className="relative flex gap-4">
                    {/* Vertical Connector Line */}
                    {idx !== categories.length - 1 && (
                      <div className="absolute left-[15px] top-10 bottom-[-40px] w-[2px] bg-slate-300" />
                    )}

                    {/* Bullet Point with inner circle */}
                    <div className="relative z-10 w-8 h-8 rounded-lg bg-[#005B8E] flex items-center justify-center flex-shrink-0">

                    </div>

                    {/* Content */}
                    <div className="pt-0.5 pb-2">
                      <h3 className="text-lg font-bold text-[#112240]">{cat.title}</h3>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                        {cat.items.join(", ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                  <span className={`block text-xs font-bold tracking-wider uppercase mb-1 ${activeStep === idx ? "text-blue-400" : "text-slate-400"}`}>
                    Step {step.step}
                  </span>
                  <span className="block font-bold text-sm leading-tight mb-2">{step.title}</span>
                  <p className={`text-xs leading-relaxed ${activeStep === idx ? "text-slate-300" : "text-slate-500"}`}>
                    {step.desc}
                  </p>
                </button>
              ))}
            </div>
          </section>

        </div>

        {/* ── SIDEBAR ── */}
        <div className="space-y-6">



          {/* CTA */}
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#1a2f5a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

            {/* Header */}
            <div className="bg-white px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#eef4fb' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005B8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-extrabold text-lg leading-tight" style={{ color: '#112240' }}>
                Request a Free Consultation
              </h3>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3 px-6 py-3" style={{ backgroundColor: '#1a2f5a' }}>
              <div className="flex-1 h-px" style={{ backgroundColor: '#4BA8D8' }} />
              <span className="text-sm font-semibold italic whitespace-nowrap" style={{ color: '#4BA8D8' }}>
                Compassionate Care. Peace of Mind.
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: '#4BA8D8' }} />
            </div>

            {/* Benefits */}
            <div className="px-6 pb-2">
              {[
                {
                  label: '100% Satisfaction Guarantee',
                  icon: (
                    // Award ribbon / medal with star
                    <svg viewBox="0 0 24 24" fill="white" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V17H9c-.55 0-1 .45-1 1v2h8v-2c0-.55-.45-1-1-1h-2v-1.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3zm7-6c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                    </svg>
                  )
                },
                {
                  label: 'Experts in Around-the-Clock 24-Hour Home Care',
                  icon: (
                    // Person with heart hands / care
                    <svg viewBox="0 0 24 24" fill="white" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
                      <path d="M16.5 13.5c-.28 0-.5.1-.7.24-.2-.14-.42-.24-.7-.24-.83 0-1.5.67-1.5 1.5 0 1.25 1.5 2.5 2.2 3.02.18.13.42.13.6 0 .7-.52 2.2-1.77 2.2-3.02 0-.83-.67-1.5-1.5-1.5z" />
                    </svg>
                  )
                },
                {
                  label: 'No Long Term Contracts',
                  icon: (
                    // Bicycle / cycling icon
                    <svg viewBox="0 0 24 24" fill="white" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
                    </svg>
                  )
                },
                {
                  label: 'Care Managers Available 24/7',
                  icon: (
                    // Three people / group icon
                    <svg viewBox="0 0 24 24" fill="white" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  )
                },
                {
                  label: 'High Caliber Caregivers',
                  icon: (
                    // Two people with connection / caregiver
                    <svg viewBox="0 0 24 24" fill="white" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm7.5 1.75c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19H22v-1.75c0-2.33-4.66-3.5-7.5-3.5zM16.5 12c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5z" />
                    </svg>
                  )
                }
              ].map((item, i, arr) => (
                <div key={i}>
                  <div className="flex items-center gap-4 py-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#1565C0' }}
                    >
                      {item.icon}
                    </div>
                    <span className="font-semibold text-sm leading-snug text-white">{item.label}</span>
                  </div>
                  {i < arr.length - 1 && <div className="h-px" style={{ backgroundColor: '#2d4a7a' }} />}
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="px-6 pb-6 pt-2">
              <button
                className="w-full py-3.5 px-4 bg-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-all duration-200 hover:scale-[1.02]"
                style={{ color: '#112240' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#005B8E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
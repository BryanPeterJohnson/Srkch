"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Heart, Phone, Menu, X, ChevronLeft, Clock, MapPin, Check, Calendar 
} from "lucide-react";
import { services } from "../data";

const NAV_LINKS = ["Services", "About", "Careers", "Contact"];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const serviceId = parseInt(resolvedParams.id, 10);
  const service = services.find((s) => s.id === serviceId);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Unique Detail Top Navbar */}
  

      {/* Service Detail Hero Section */}
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, #112240 0%, #1a365d 60%, ${service.accent}22 100%)` }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: service.accentLight, color: service.accent }}>
              {service.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-4xl leading-tight">{service.title}</h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-6 max-w-2xl">{service.tagline}</p>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-300 pt-4 border-t border-white/10">
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

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-blue-600" /> Service Overview
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">{service.description}</p>
          </section>

          {/* Features */}
      {/* Replace the existing Features section in page.tsx */}
<section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
  <h2 className="text-xl font-bold text-[#1a365d] mb-8 flex items-center gap-2">
    <div className="w-1.5 h-5 rounded-full bg-[#005B8E]" /> What This Service Includes
  </h2>
  
  <div className="space-y-8">
    {service.categorizedFeatures.map((category, idx) => (
      <div key={idx}>
        <h3 className="font-bold text-sm uppercase tracking-wider text-[#005B8E] mb-4">
          {category.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {category.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

          {/* Steps */}
          <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a365d] mb-8 flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-blue-600" /> How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {service.howItWorks.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    activeStep === idx 
                      ? "bg-slate-900 border-slate-900 shadow-md text-white" 
                      : "bg-slate-50 border-slate-100 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span className={`block text-xs font-bold tracking-wider uppercase mb-1 ${activeStep === idx ? "text-blue-400" : "text-slate-400"}`}>
                    Step {step.step}
                  </span>
                  <span className="block font-bold text-sm leading-tight mb-2">{step.title}</span>
                  <p className={`text-xs leading-relaxed ${activeStep === idx ? "text-slate-300" : "text-slate-500"}`}>{step.desc}</p>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden bg-[#1a365d]">
            <div>
              <h3 className="font-bold text-xl mb-2 relative z-10">Ready to get started?</h3>
              <p className="text-sm text-blue-200 mb-6 relative z-10 leading-relaxed">
                Speak with our care coordinators to customize this plan for your specific requirements.
              </p>
            </div>
            <div className="space-y-3 w-full relative z-10">
              <button className="w-full py-3 px-4 bg-white text-[#1a365d] font-bold text-sm rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />  Schedule a Consultation
              </button>
            </div>
          </div>




          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a365d] mb-4">Who This Is For</h2>
            <ul className="space-y-4">
              {service.whoFor.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Imported Next.js Image component
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Phone, Sparkles, Shield, Award, CheckCircle, Star, MapPin, ArrowRight,
  User, UserCheck, Activity 
} from "lucide-react";
import { services } from "./data";

const TRUST_BADGES = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Award, text: "Medicare Certified" },
  { icon: CheckCircle, text: "Background-Checked Caregivers" },
  { icon: Star, text: "4.9★ Average Rating" },
];

const FILTER_OPTIONS = [
  { id: "all", title: "All Services", desc: "Show all care options", icon: Heart },
  { id: "seniors", title: "Care for Seniors", desc: "Age 65 and up", icon: User },
  { id: "adults", title: "Care for Adults", desc: "Age 19 to 64", icon: UserCheck },
  { id: "children", title: "Care for Children", desc: "Age 2 to 18", icon: Activity },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter logic (Matches against your service data category/tags)
  const filteredServices = services.filter((service) => {
    if (activeFilter === "all") return true;
    
    // Fallback safely if exact data tags aren't set up yet in your data.js
    const categoryLower = service.category?.toLowerCase() || "";
    const titleLower = service.title?.toLowerCase() || "";
    const descLower = service.description?.toLowerCase() || "";

    if (activeFilter === "seniors") {
      return categoryLower.includes("senior") || categoryLower.includes("elder") || descLower.includes("senior") || descLower.includes("elder");
    }
    if (activeFilter === "adults") {
      return categoryLower.includes("adult") || descLower.includes("adult");
    }
    if (activeFilter === "children") {
      return categoryLower.includes("child") || categoryLower.includes("pediatric") || descLower.includes("child");
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#112240] via-[#1a365d] to-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" /> Comprehensive Home Care
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Compassionate Care<br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">Tailored to You</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Every service we offer is built around dignity, independence, and genuine human connection. Explore our full range of care and find exactly what your family needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[#1a365d] border-y border-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center md:justify-between gap-4">
          {TRUST_BADGES.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-blue-200 text-sm font-medium">
              <Icon className="w-4 h-4 text-blue-400" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a365d] tracking-tight mb-4">Our Care Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Ten specialized service areas — each designed to address a specific dimension of home health.</p>
        </div>

        {/* Filters Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 shadow-inner">
            {FILTER_OPTIONS.map((option) => {
              const Icon = option.icon;
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  className={`flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200 border ${
                    isActive
                      ? "bg-white border-blue-200 shadow-md ring-1 ring-blue-500/10"
                      : "border-transparent hover:bg-white/60 hover:border-slate-200"
                  }`}
                >
                  <div className={`mt-0.5 p-2 rounded-lg transition-colors ${isActive ? "bg-blue-50 text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-[15px] font-bold tracking-tight transition-colors ${isActive ? "text-blue-900" : "text-slate-800"}`}>
                      {option.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{option.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Display */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/services/${service.id}`}
                    className="group block text-left bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Service Image Header Container */}
                      <div className="relative w-full h-48 bg-slate-200 overflow-hidden">
                        <Image
                          src={service.image || "/images/placeholder-care.jpg"} 
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-w-7xl) 33vw, 100vw"
                        />
                        {/* Dynamic Floating Category Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm" style={{ backgroundColor: service.accentLight, color: service.accent }}>
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Card Content body */}
                      <div className="p-8 pb-0">
                        <div className="flex items-start justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center -mt-14 relative z-20 shadow-md border border-white" style={{ backgroundColor: service.accentLight, color: service.accent }}>
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        <h3 className="text-[17px] font-bold text-[#1a365d] leading-snug mb-3 group-hover:text-[#164e9a] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                      </div>
                    </div>

                    <div className="mx-8 mt-6 pb-6 pt-5 border-t border-slate-200/60 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <MapPin className="w-3.5 h-3.5" /> {service.coverage}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-bold transition-colors" style={{ color: service.accent }}>
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">No services found matching this filter group.</p>
          </div>
        )}
      </div>
    </div>
  );
}
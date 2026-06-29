"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, Sparkles, Shield, Award, CheckCircle, Star, MapPin, ArrowRight,
  User, UserCheck, Activity, Search, Plus, Minus
} from "lucide-react";
import { services, type PatientGroup } from "./data";

const TRUST_BADGES = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Award, text: "Medicare Certified" },
  { icon: CheckCircle, text: "Background-Checked Caregivers" },
  { icon: Star, text: "4.9★ Average Rating" },
];

const FILTER_OPTIONS: {
  id: PatientGroup | "all";
  title: string;
  subtitle?: string;
  icon: React.ElementType;
}[] = [
    { id: "all", title: "All Services", icon: Heart },
    { id: "seniors", title: "Care for Seniors", subtitle: "Age 65 and up", icon: User },
    { id: "adults", title: "Care for Adults", subtitle: "Age 19 to 64", icon: UserCheck },
    { id: "children", title: "Care for Children", subtitle: "Age 2 to 18", icon: Activity },
  ];

const GROUP_LABELS: Record<PatientGroup, string> = {
  seniors: "65+",
  adults: "19–64",
  children: "0–18",
};

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<PatientGroup | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (id: PatientGroup | "all") => {
    const next = activeFilter === id && id !== "all" ? "all" : id;
    setActiveFilter(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ── filter by patientGroups array + search query ──
  const filteredServices = services.filter((service) => {
    const matchesGroup =
      activeFilter === "all" ||
      service.patientGroups.includes(activeFilter as PatientGroup);

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      service.title.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q);

    return matchesGroup && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Hero Section */}
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

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a365d] tracking-tight mb-4">Our Care Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Ten specialized service areas — each designed to address a specific dimension of home health.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Sidebar Accordion */}
          <aside className="w-full md:w-80 flex-shrink-0">
            <h3 className="font-bold text-black mb-6 text-xl">Filter Categories</h3>
            <div className="flex flex-col">
              {FILTER_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isActive = activeFilter === option.id;
                const isAll = option.id === "all";

                // services listed inside the accordion dropdown
                const groupServices = isAll
                  ? services
                  : services.filter((s) =>
                    s.patientGroups.includes(option.id as PatientGroup)
                  );

                return (
                  <div key={option.id} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => handleFilterChange(option.id)}
                      className="w-full flex items-center justify-between py-5 px-4 transition-all duration-200 cursor-pointer group hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3 pr-3">
                        <Icon className={`w-[18px] h-[18px] flex-shrink-0 mt-1 transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-gray-500"
                          }`} />
                        <div>
                          <div className={`font-semibold text-[20px] transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-[#1A1A2E] group-hover:text-[#005B8E]"
                            }`}>
                            {option.title}
                          </div>
                          {option.subtitle && (
                            <div className="text-[14px] text-gray-500 mt-0.5">{option.subtitle}</div>
                          )}
                        </div>
                      </div>

                      {!isAll && (
                        <div className={`transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-gray-500"}`}>
                          {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      )}
                    </button>

                    {!isAll && (
                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 pt-1 pl-16 space-y-2">
                          {groupServices.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className="block text-[15px] text-gray-600 hover:text-[#005B8E] hover:underline transition-all"
                            >
                              • {service.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1" ref={gridRef}>
            <div className="relative mb-8 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 text-sm text-black bg-gray-50 border border-gray-200 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20 transition"
              />
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    >
                      <Link
                        href={`/services/${service.id}`}
                        className="group block h-full bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          <div className="relative w-full h-40 bg-slate-200 overflow-hidden">
                            <Image
                              src={service.image || "/images/placeholder-care.jpg"}
                              alt={service.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 1280px) 33vw, 100vw"
                            />
                            <div
                              className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/90 shadow-sm"
                              style={{ color: service.accent }}
                            >
                              {service.category}
                            </div>
                          </div>

                          <div className="p-6">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm"
                              style={{ backgroundColor: service.accentLight, color: service.accent }}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1a365d] mb-2">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                          </div>
                        </div>

                        {/* card footer */}
                        <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                            <MapPin className="w-3.5 h-3.5" /> {service.coverage}
                          </div>
                          {/* right side: age badges + Learn link */}
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {service.patientGroups.map((g) => (
                                <span
                                  key={g}
                                  className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full border"
                                  style={{
                                    color: service.accent,
                                    borderColor: service.accent + "55",
                                    backgroundColor: service.accentLight,
                                  }}
                                >
                                  {GROUP_LABELS[g]}
                                </span>
                              ))}
                            </div>
                            <div
                              className="flex items-center gap-1 text-sm font-bold"
                              style={{ color: service.accent }}
                            >
                              Learn <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="text-center py-24 text-slate-400">
                <p className="text-lg font-medium">No services match your search.</p>
                <button
                  onClick={() => { setActiveFilter("all"); setSearchQuery(""); }}
                  className="mt-4 text-sm text-[#005B8E] hover:underline font-semibold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
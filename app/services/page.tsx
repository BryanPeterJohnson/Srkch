"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Sparkles, Shield, Award, CheckCircle, Star, MapPin, ArrowRight,
  User, UserCheck, Activity, Search, Plus, Minus
} from "lucide-react";
import { services } from "./data";

const TRUST_BADGES = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Award, text: "Medicare Certified" },
  { icon: CheckCircle, text: "Background-Checked Caregivers" },
  { icon: Star, text: "4.9★ Average Rating" },
];

const FILTER_OPTIONS = [
  { id: "all", title: "All Services", icon: Heart },
  { id: "seniors", title: "Care for Seniors", icon: User },
  { id: "adults", title: "Care for Adults", icon: UserCheck },
  { id: "children", title: "Care for Children", icon: Activity },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const handleFilterChange = (id: string) => {
    setActiveFilter((prev) => (prev === id ? "" : id));
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filteredServices = services.filter((service) => {
    let matchesFilter = true;
    if (activeFilter !== "all" && activeFilter !== "") {
      const categoryLower = service.category?.toLowerCase() || "";
      const descLower = service.description?.toLowerCase() || "";
      if (activeFilter === "seniors") matchesFilter = categoryLower.includes("senior") || categoryLower.includes("elder") || descLower.includes("senior") || descLower.includes("elder");
      else if (activeFilter === "adults") matchesFilter = categoryLower.includes("adult") || descLower.includes("adult");
      else if (activeFilter === "children") matchesFilter = categoryLower.includes("child") || categoryLower.includes("pediatric") || descLower.includes("child");
    }

    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
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
          <aside className="w-full md:w-64 flex-shrink-0">
            <h3 className="font-bold text-[#1a365d] mb-4 text-lg">Filter Categories</h3>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              {FILTER_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isActive = activeFilter === option.id;
                
                const categoryServices = services.filter((s) => {
                  if (option.id === "all") return true;
                  const cat = s.category?.toLowerCase() || "";
                  const desc = s.description?.toLowerCase() || "";
                  if (option.id === "seniors") return cat.includes("senior") || cat.includes("elder") || desc.includes("senior") || desc.includes("elder");
                  if (option.id === "adults") return cat.includes("adult") || desc.includes("adult");
                  if (option.id === "children") return cat.includes("child") || cat.includes("pediatric") || desc.includes("child");
                  return false;
                });

                return (
                  <div key={option.id} className="border-b last:border-0">
                    <button
                      onClick={() => handleFilterChange(option.id)}
                      className={`w-full flex items-center justify-between px-4 py-4 text-sm font-semibold transition-colors cursor-pointer ${
                        isActive ? "bg-[#1a365d] text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                        {option.title}
                      </div>
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="p-2 space-y-1">
                        {categoryServices.map((service) => (
                          <Link 
                            key={service.id} 
                            href={`/services/${service.id}`}
                            className="block px-4 py-2 text-xs text-gray-600 hover:text-[#1a365d] hover:bg-white rounded-md transition-colors cursor-pointer"
                          >
                            • {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
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
                    <motion.div layout key={service.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                      <Link href={`/services/${service.id}`} className="group block h-full bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer">
                        <div>
                          <div className="relative w-full h-40 bg-slate-200 overflow-hidden">
                            <Image src={service.image || "/images/placeholder-care.jpg"} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-w-7xl) 33vw, 100vw" />
                            <div className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-white/90 shadow-sm" style={{ color: service.accent }}>{service.category}</div>
                          </div>
                          <div className="p-6">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-sm" style={{ backgroundColor: service.accentLight, color: service.accent }}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1a365d] mb-2">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                          </div>
                        </div>
                        <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                            <MapPin className="w-3.5 h-3.5" /> {service.coverage}
                          </div>
                          <div className="flex items-center gap-1 text-sm font-bold" style={{ color: service.accent }}>
                            Learn <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
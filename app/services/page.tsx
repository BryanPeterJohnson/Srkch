"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, Sparkles, Shield, ShieldCheck, Award, CheckCircle, Star, MapPin, ArrowRight,
  User, UserCheck, BadgeCheck, Activity, Search, Plus, Minus, Calendar, Phone,  HeartHandshake,
} from "lucide-react";
import { services, type PatientGroup } from "./data";
import CareManagerCTA from "../home/components/CareManagerCTA";


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

  const filteredServices = services.filter((service) => {
    const matchesGroup =
      activeFilter === "all" ||
      service.patientGroups.includes(activeFilter as PatientGroup);

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || service.title.toLowerCase().includes(q);

    return matchesGroup && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-display">
      
<section className="relative bg-white overflow-hidden font-display lg:h-[420px] xl:h-[520px] 2xl:h-[580px]">
  {/* Image Area - Positioned to the right with a rounded cutout effect */}
  <div className="relative lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-[100%] h-[260px] sm:h-[320px] lg:h-full">
    <div className="relative w-full h-full overflow-hidden rounded-none lg:rounded-l-[100px]">
      <Image
        src="/images/Services/0.png"
        alt="Caregiver supporting senior at home"
        fill
        priority
        className="object-cover object-[center_20%]"
      />
      {/* Gradient overlay to blend image into background */}
{/* Gradient overlay to blend image into background */}
{/* Desktop */}
<div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/50 via-[45%] to-transparent to-[65%]" />

{/* Mobile */}
<div className="absolute inset-0 lg:hidden bg-gradient-to-t from-white via-white/60 to-transparent" />
      {/* Bottom right floating icon */}
 
    </div>
  </div>
 {/* Content Container */}
  <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1440px] px-6 lg:px-20 py-10 lg:py-14 lg:h-full flex items-center">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-[500px] text-left"
    >
 
  <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#0B2D5B] leading-tight mb-3 font-display">
        Care That Fits Your Life.<br />
        Support That <span className="text-[#046e4c]">Feels</span> Like <span className="text-[#E57531]">Family</span>.
      </h1>
    <p className="text-sm sm:text-base text-slate-600 leading-7 mb-5 max-w-md font-display">
        Personalized care services designed to support your loved one's
        health, independence, and comfort—at home. Our compassionate
        caregivers are here, every step of the way.
      </p>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E57531] hover:bg-[#0C447C] text-white font-bold rounded-xl transition-all shadow-lg text-sm font-display">
          <Calendar className="w-3 h-3" />
          Request a Free Consultation
        </button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0C447C] border-2 border-[#0C447C] hover:bg-[#046e4c] hover:border-[#046e4c] text-white font-bold rounded-xl transition-all text-sm font-display">
  <Phone className="w-3 h-3" />
  Call (443) 6273806
</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5 border-t border-slate-200">
        {[
          { icon: Heart, label: "Compassionate\nCaregivers", color: "#E57531" },
          { icon: ShieldCheck, label: "Licensed &\nInsured", color: "#0C447C" },
          { icon: ShieldCheck, label: "Medicaid\nCertified", color: "#046e4c" },
          { icon: UserCheck, label: "Background Checked\n& Trusted", color: "#159BA1" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div style={{ color: item.color }}>
              <item.icon className="w-10 h-10" />
            </div>
            <span className="text-slate-700 text-[11px] font-medium leading-tight whitespace-pre-line font-display">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


      {/* Services Section */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pt-10 pb-20 font-display">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a365d] tracking-tight mb-4 font-display">Our Care Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-display">Ten specialized service areas — each designed to address a specific dimension of home health.</p>
        </div>

<div className="flex flex-col md:flex-row gap-4 2xl:gap-8">

          {/* Sidebar Accordion */}
    <aside className="w-full md:w-80 flex-shrink-0">
            <h3 className="font-bold text-black mb-6 text-xl font-display">Filter Categories</h3>
            <div className="flex flex-col">
              {FILTER_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isActive = activeFilter === option.id;
                const isAll = option.id === "all";

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
                          <div className={`font-semibold text-[18px] font-display transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-[#1A1A2E] group-hover:text-[#005B8E]"
                            }`}>
                            {option.title}
                          </div>
                          {option.subtitle && (
                            <div className="text-[14px] text-gray-500 mt-0.5 font-display">{option.subtitle}</div>
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
                        <div className="pb-4 pt-1 pl-8 space-y-2">
                          {groupServices.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="block whitespace-nowrap text-[12.5px] text-gray-600 hover:text-[#005B8E] hover:underline transition-all font-display"
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
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 text-base text-black bg-white border border-gray-200 rounded-xl shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20 focus:border-[#1a365d]/30 transition font-display"
              />
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-6">
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
                        href={`/services/${service.slug}`}
                        className="group block h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer font-display"
                      >
                        {/* Image + overlapping icon badge */}
                        <div className="relative">
                          <div className="relative w-full h-[140px] sm:h-[150px] bg-slate-200 overflow-hidden rounded-t-2xl">
                            <Image
                              src={service.image || "/images/placeholder-care.jpg"}
                              alt={service.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 1280px) 25vw, 100vw"
                            />
                            <div
                              className="absolute top-2 right-2 z-10 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/95 shadow-sm font-display"
                              style={{ color: service.accent }}
                            >
                              {service.category}
                            </div>
                          </div>

                          {/* Icon badge overlapping bottom-left of image */}
                          <div
                            className="absolute -bottom-4 left-3 z-20 w-9 h-9 rounded-xl flex items-center justify-center shadow-md border-2 border-white"
                            style={{ backgroundColor: service.accentLight, color: service.accent }}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="pt-7 px-3 pb-3">
                          <h3 className="text-sm font-bold text-[#1a365d] mb-1 leading-snug font-display">
                            {service.title}
                          </h3>
                          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-2 font-display">
                            {service.description}
                          </p>
                          <div
                            className="flex items-center gap-1 text-xs font-bold font-display"
                            style={{ color: service.accent }}
                          >
                            Learn More<ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="text-center py-24 text-slate-400 font-display">
                <p className="text-lg font-medium font-display">No services match your search.</p>
                <button
                  onClick={() => { setActiveFilter("all"); setSearchQuery(""); }}
                  className="mt-4 text-sm text-[#005B8E] hover:underline font-semibold font-display"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
   <CareManagerCTA/>
    </div>
  );
}
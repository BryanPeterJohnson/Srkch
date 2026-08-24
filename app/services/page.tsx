"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart, ShieldCheck, ArrowRight,
  User, UserCheck, Activity, Search, Plus, Minus, Clock, Phone, Users2,
} from "lucide-react";
import { services, GROUP_NAMES, type PatientGroup } from "./data";
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

/**
 * SEARCH INDEX
 *
 * Search spans TWO fields only: the service name and the categorizedFeatures
 * list. Description, tagline, whoFor, howItWorks and category metadata are
 * deliberately excluded — matching on those produced cards where the query
 * term was nowhere in the visible copy.
 *
 * Keyed by the same `${baseId}-${group}` identity used for card keys.
 */
type SearchField = "title" | "features";

const FIELD_LABELS: Record<SearchField, string> = {
  title: "Service name",
  features: "What's included",
};

/** Priority order — the first matching field is the one shown on the card. */
const FIELD_ORDER: SearchField[] = ["title", "features"];

const searchIndex = new Map<string, Record<SearchField, string>>(
  services.map((s) => [
    `${s.baseId}-${s.group}`,
    {
      title: [s.title, s.shortTitle].filter(Boolean).join(" ").toLowerCase(),
      features: (s.categorizedFeatures ?? [])
        .flatMap((f) => [f.title, ...f.items])
        .join(" ")
        .toLowerCase(),
    },
  ])
);

/** Returns the highest-priority field containing `q`, or null if none match. */
function matchField(key: string, q: string): SearchField | null {
  const entry = searchIndex.get(key);
  if (!entry) return null;
  return FIELD_ORDER.find((f) => entry[f].includes(q)) ?? null;
}

/**
 * FILTER / SEARCH PRIORITY
 *
 * 1. Search wins. A non-empty query spans EVERY service in EVERY age group,
 *    ignoring `activeFilter` entirely — matching the homepage section. This
 *    prevents "no results" when the match exists in a group that isn't open.
 * 2. Otherwise the age-group filter applies; "all" lists every variant.
 *
 * NO DE-DUPLICATION: every age variant is its own card with its own page,
 * so collapsing variants would make other age groups unreachable.
 */

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<PatientGroup | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  const q = searchQuery.toLowerCase().trim();
  const isSearching = q.length > 0;

  const handleFilterChange = (id: PatientGroup | "all") => {
    const next = activeFilter === id && id !== "all" ? "all" : id;
    setActiveFilter(next);
    setSearchQuery("");
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /**
   * Each result carries the service plus the field its match came from, so a
   * feature-only hit can label itself on the card.
   */
  const filteredServices = useMemo(() => {
    // PRIORITY 1 — Search overrides the filter and spans all groups.
    if (isSearching) {
      return services
        .map((s) => ({
          service: s,
          matchedIn: matchField(`${s.baseId}-${s.group}`, q),
        }))
        .filter((r) => r.matchedIn !== null);
    }

    // PRIORITY 2 — Age-group filter.
    const base =
      activeFilter === "all"
        ? services
        : services.filter((s) => s.group === activeFilter);

    return base.map((s) => ({ service: s, matchedIn: null as SearchField | null }));
  }, [activeFilter, q, isSearching]);

  return (
    <div className="min-h-screen bg-white font-display">

      {/* Hero
          - Mobile / tablet (< lg): text block on white (CENTERED), then the
            FULL image below it in its own block — image is never cropped.
          - Desktop (lg+): image becomes an absolutely-positioned background and
            the text is overlaid on top with a left-to-right white gradient. */}
      <section className="relative bg-white overflow-hidden font-display flex flex-col lg:block lg:h-[420px] xl:h-[520px] 2xl:h-[580px]">

        {/* Content Container
            - order-1 on mobile so it sits above the image
            - overlaid + centered on desktop */}
        <div className="relative z-10 order-1 lg:order-none w-full max-w-7xl 2xl:max-w-[1440px] px-6 lg:px-20 py-8 md:py-8 lg:py-14 lg:h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[560px] text-left"
          >
            {/* Eyebrow label */}
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#159BA1] font-display">
              Our Care Services
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-4xl 2xl:text-5xl font-bold text-[#0B2D5B] leading-tight mb-4 font-display">
              Care That Fits Your Life. Support That <span className="text-[#046e4c]">Feels</span> Like <span className="text-[#E57531]">Family</span>.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-7 mb-6 max-w-md font-display">
              Personalized care services designed to support your loved one&apos;s
              health, independence, and comfort—at home. Our compassionate
              caregivers are here, every step of the way.
            </p>

            {/* Trust badges — inline circular icons, above the buttons */}
            <div className="mb-7 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
              {([
                [Users2,      "Compassionate", "Caregivers"],
                [ShieldCheck, "Background",    "Checked"],
                [Clock,       "Available",     "24/7"],
              ] as [React.ElementType, string, string][]).map(([Icon, line1, line2]) => (
                <div key={line1} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0C447C] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-left text-sm font-bold leading-[1.35] text-[#102A43] font-display">
                    <p>{line1}</p>
                    <p>{line2}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons — last, right before the image */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#0C447C] px-7 py-4 text-sm font-black text-white shadow-md transition hover:bg-[#08345F] font-display">
                Request a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+14436273806" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#0C447C] bg-white/80 px-7 py-4 text-sm font-black text-[#0C447C] transition hover:bg-white font-display">
                <Phone className="h-4 w-4" /> Call (443) 627-3806
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Area
            - order-2 on mobile: full image block below the text, uncropped subject
            - lg+: absolutely-positioned right-side background */}
        <div className="relative order-2 lg:order-none lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-[100%] h-[300px] sm:h-[380px] lg:h-full mt-2 md:mt-3 lg:mt-0">
          <div className="relative w-full h-full overflow-hidden rounded-none lg:rounded-l-[100px]">
            <Image
              src="/images/Services/0.png"
              alt="Caregiver supporting senior at home"
              fill
              priority
              className="object-cover object-[right_20%] lg:object-[center_20%]"
            />
            {/* Desktop-only left-to-right white gradient to blend the overlaid text */}
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/50 via-[45%] to-transparent to-[65%]" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pt-10 pb-20 font-display">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a365d] tracking-tight mb-4 font-display">
            Our Care Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-display">
            Specialized care programs, each tailored to a specific age group and dimension of home health.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 2xl:gap-8">

          {/* Sidebar Accordion — dimmed while a search is active, since search
              spans all groups and the filter is not in effect. */}
          <aside
            className={`w-full md:w-80 flex-shrink-0 transition-opacity duration-200 ${isSearching ? "opacity-60" : "opacity-100"
              }`}
          >
            <h3 className="font-bold text-black mb-6 text-xl font-display">Filter Categories</h3>
            <div className="flex flex-col">
              {FILTER_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isActive = !isSearching && activeFilter === option.id;
                const isAll = option.id === "all";

                // This panel only renders for the age groups, so it always
                // lists that group's own variants.
                const groupServices = services.filter((s) => s.group === option.id);

                return (
                  <div key={option.id} className="border-b border-gray-200 last:border-0">
                    <button
                      onClick={() => handleFilterChange(option.id)}
                      className={`w-full flex items-center justify-between py-5 px-4 transition-all duration-200 cursor-pointer group hover:bg-gray-50 ${isActive ? "bg-gray-50" : ""
                        }`}
                    >
                      <div className="flex items-center gap-3 pr-3">
                        <Icon className={`w-[18px] h-[18px] flex-shrink-0 mt-1 transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-gray-500 group-hover:text-[#005B8E]"
                          }`} />
                        <div>
                          <div className={`font-semibold text-[18px] font-display transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-[#1A1A2E] group-hover:text-[#005B8E]"
                            }`}>
                            {option.title}
                          </div>
                          {option.subtitle && (
                            <div className="text-[14px] text-gray-500 mt-0.5 font-display">
                              {option.subtitle}
                            </div>
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
                              href={service.href}
                              className="block text-[12.5px] leading-snug pr-4 text-gray-600 hover:text-[#005B8E] hover:underline transition-all font-display"
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
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services by name or what's included..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-4 text-base text-black bg-white border border-gray-200 rounded-xl shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a365d]/20 focus:border-[#1a365d]/30 transition font-display"
              />
            </div>

            {/* Search-active banner — makes the override explicit */}
            {isSearching && (
              <div className="mb-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5 text-[13px] text-slate-600 font-display">
                <span>
                  Showing{" "}
                  <b className="text-[#0C447C]">{filteredServices.length}</b> result
                  {filteredServices.length === 1 ? "" : "s"} across all age groups
                </span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#005B8E] font-semibold hover:underline cursor-pointer"
                >
                  Clear
                </button>
              </div>
            )}

            {!isSearching && <div className="mb-8" />}

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-6">
              <AnimatePresence mode="popLayout">
                {filteredServices.map(({ service, matchedIn }) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      layout
                      key={`${service.baseId}-${service.group}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <Link
                        href={service.href}
                        className="group block h-full bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer font-display"
                      >
                        {/* Image + overlapping icon badge */}
                        <div className="relative">
                          <div className="relative w-full h-[140px] sm:h-[150px] bg-slate-200 overflow-hidden rounded-t-2xl">
                            <Image
                              src={service.image || "/images/placeholder-care.jpg"}
                              alt={service.title}
                              fill
                            className="object-cover object-[75%_20%] lg:object-[right_10%]"
                              sizes="(max-width: 1280px) 25vw, 100vw"
                            />
                            <div
                              className="absolute top-2 right-2 z-10 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/95 shadow-sm font-display"
                              style={{ color: service.accent }}
                            >
                              {service.category}
                            </div>

                            {/* Age-group chip — identifies which variant this card is */}
                            <div className="absolute bottom-2 right-2 z-10">
                              <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/95 text-slate-600 shadow-sm font-display">
                                {GROUP_NAMES[service.group]}
                              </span>
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

                          {/* Match attribution — only meaningful for feature hits,
                              where the query isn't visible in the card copy. */}
                          {matchedIn === "features" && (
                            <div className="mb-2 inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 font-display">
                              <Search className="w-2.5 h-2.5" />
                              Matched in {FIELD_LABELS.features}
                            </div>
                          )}

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
                  className="mt-4 text-sm text-[#005B8E] hover:underline font-semibold font-display cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CareManagerCTA />
    </div>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronLeft, ChevronRight, ArrowRight, Plus, Minus, Heart, Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categoryData } from "./data";

// ─── Pull canonical img + desc from the SERVICES folder data.ts ───────────────
// ADJUST field reads (`s.image`, `s.description`) if your services/data.ts
// uses different field names.
import { services as serviceDefs } from "../../services/data";

const SERVICE_BY_PATH: Record<string, { image?: string; description?: string }> =
    Object.fromEntries(
        (serviceDefs ?? []).map((s: any) => [
            s.path ?? `/services/${s.slug}`,
            { image: s.image ?? s.img, description: s.description ?? s.desc },
        ])
    );

// Canonical slugs from app/services/data.ts — converts any old numeric
// path (e.g. /services/2) into its slug route (e.g. /services/memory-care).
// Paths that already use a slug pass through unchanged.
const ID_TO_SLUG: Record<string, string> = {
    "0": "personal-care",
    "1": "companion-care",
    "2": "memory-care",
    "3": "home-nutrition",
    "4": "respite-care",
    "5": "disability-support",
    "6": "recovery-care",
    "7": "medication-wellness",
    "8": "transportation",
    "9": "pediatric-care",
};

const toSlugPath = (path: string) => {
    const m = path?.match(/^\/services\/(\d+)\/?$/);
    return m ? `/services/${ID_TO_SLUG[m[1]] ?? m[1]}` : path;
};

// Flattened list of every service across all categories, de-duplicated by
// slug path — used to power the search results grid.
type FlatService = {
    title: string;
    desc: string;
    img: string;
    icon: string;
    path: string;
    badgeIndex: number;
};

const ALL_SERVICES: FlatService[] = (() => {
    const seen = new Set<string>();
    const out: FlatService[] = [];
    categoryData.forEach((cat) => {
        cat.services.forEach((svc, i) => {
            const key = toSlugPath(svc.path);
            if (seen.has(key)) return;
            seen.add(key);
            out.push({
                title: svc.title,
                desc: svc.desc,
                img: svc.img,
                icon: svc.icon,
                path: svc.path,
                badgeIndex: i,
            });
        });
    });
    return out;
})();

export function ServicesByCategory() {
    // openCat drives BOTH the accordion expansion and the slider's active category.
    const [openCat, setOpenCat] = useState<number | null>(null);
    const [slideIndex, setSlideIndex] = useState(0);
    // The service the user explicitly picked (for ring + sidebar highlight),
    // which may differ from slideIndex once the scroll target is clamped.
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const sliderRef = useRef<HTMLDivElement>(null);

    const CARD_W = 195;
    const CARD_GAP = 16;
    const CARDS_VISIBLE = 4;
    const BADGE_COLORS = ["#0C447C", "#0D2D52", "#0C447C", "#0D2D52"];

    const currentCat = categoryData[openCat ?? 0];
    const total = currentCat?.services?.length ?? 0;

    // Search across ALL categories, matching the services page behavior.
    const q = searchQuery.toLowerCase().trim();
    const isSearching = q.length > 0;
    const searchResults = isSearching
        ? ALL_SERVICES.filter((s) => s.title.toLowerCase().includes(q))
        : [];

    const handleCatClick = (i: number) => {
        setOpenCat(openCat === i ? null : i);
        setSlideIndex(0);
        setSelectedIndex(0);
    };

    // Last index that still fills the viewport with cards (no scrolling into blank space).
    const maxIndex = Math.max(0, total - CARDS_VISIBLE);

    // Page-based counter: how many slider pages (of CARDS_VISIBLE cards) exist,
    // and which one is currently in view.
    const totalPages = Math.max(1, Math.ceil(total / CARDS_VISIBLE));
    const currentPage = Math.min(Math.floor(slideIndex / CARDS_VISIBLE) + 1, totalPages);

    const canPrev = slideIndex > 0;
    const canNext = slideIndex < maxIndex;

    // Jump a full page, clamped so the last page never scrolls into blank space.
    const goToPage = (page: number) => {
        const clamped = Math.min(Math.max(page, 1), totalPages);
        setSlideIndex(Math.min((clamped - 1) * CARDS_VISIBLE, maxIndex));
    };

    // Selecting a service from the sidebar: open its category and scroll it into
    // view. Clamp to maxIndex so the target isn't overridden by the clamp effect,
    // which is what previously prevented later services from ever showing.
    const handleServiceSelect = (catIndex: number, serviceIndex: number) => {
        if (openCat !== catIndex) setOpenCat(catIndex);
        setSelectedIndex(serviceIndex);
        setSlideIndex(Math.min(serviceIndex, Math.max(0, categoryData[catIndex].services.length - CARDS_VISIBLE)));
    };

    // Clamp when switching categories (a shorter list may have a smaller maxIndex).
    useEffect(() => {
        if (slideIndex > maxIndex) setSlideIndex(maxIndex);
    }, [maxIndex, slideIndex]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: slideIndex * (CARD_W + CARD_GAP),
                behavior: "smooth",
            });
        }
    }, [slideIndex]);

    // Visible viewport width = exactly 4 cards + 3 gaps between them, clipping the rest.
    const viewportWidth = CARDS_VISIBLE * CARD_W + (CARDS_VISIBLE - 1) * CARD_GAP;

    return (
        <section className="pt-6 pb-16 sm:pt-8 sm:pb-20 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white font-display" id="services">
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto">

                {/* Header */}
                <div className="text-center mb-2 sm:mb-3">
                    <motion.div
                        className="font-display flex items-center justify-center gap-3"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: 18,
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                            color: "#0C447C",
                            marginBottom: "0.6rem",
                        }}
                    >
                        <span className="h-[2px] w-[60px] sm:w-16" style={{ backgroundColor: "#E57531" }} />
                        OUR SERVICES
                        <span className="h-[2px] w-[60px] sm:w-16" style={{ backgroundColor: "#E57531" }} />
                    </motion.div>

                    <motion.h2
                        className="font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: "clamp(26px, 3vw, 40px)",
                            fontWeight: 700,
                            color: "#0D2D52",
                            marginBottom: "1rem",
                        }}
                    >
                        Personalized Care for Every Stage of Life
                    </motion.h2>

                    <motion.p
                        className="font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        style={{
                            color: "#6B7280",
                            fontSize: "clamp(14px, 1.1vw, 16px)",
                            maxWidth: 620,
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        We offer a wide range of home care services for every age and stage of life.
                        We tailor your care plan to your unique needs and what services we offer in your area.
                    </motion.p>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

                    {/* LEFT: Accordion filter — styled to match the services page */}
                    <aside className="w-full lg:w-80 flex-shrink-0 lg:ml-6">
                        <h3 className="font-bold text-black mb-6 text-xl font-display">Filter Categories</h3>
                        <div className="flex flex-col">

                            {/* All Services — non-expandable, links to /services */}
                            <div className="border-b border-gray-200">
                                <Link
                                    href="/services"
                                    className="w-full flex items-center justify-between py-5 px-4 transition-all duration-200 cursor-pointer group hover:bg-gray-50"
                                >
                                    <div className="flex items-center gap-3 pr-3">
                                        <Heart className="w-[18px] h-[18px] flex-shrink-0 mt-1 text-gray-500 group-hover:text-[#005B8E] transition-colors duration-200" />
                                        <div className="font-semibold text-[18px] font-display text-[#1A1A2E] group-hover:text-[#005B8E] transition-colors duration-200">
                                            All Services
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Age-group categories — expandable, drive the slider */}
                            {categoryData.map((cat, i) => {
                                const isActive = openCat === i;
                                const CatIcon = cat.Icon;
                                return (
                                    <div key={cat.id} className="border-b border-gray-200 last:border-0">
                                        <button
                                            onClick={() => handleCatClick(i)}
                                            className="w-full flex items-center justify-between py-5 px-4 transition-all duration-200 cursor-pointer group hover:bg-gray-50"
                                        >
                                            <div className="flex items-center gap-3 pr-3">
                                                <CatIcon
                                                    className={`w-[18px] h-[18px] flex-shrink-0 mt-1 transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-gray-500"
                                                        }`}
                                                />
                                                <div>
                                                    <div className={`font-semibold text-[18px] font-display transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-[#1A1A2E] group-hover:text-[#005B8E]"
                                                        }`}>
                                                        {cat.title}
                                                    </div>
                                                    {cat.ageLabel && (
                                                        <div className="text-[14px] text-gray-500 mt-0.5 font-display">
                                                            {cat.ageLabel}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className={`transition-colors duration-200 ${isActive ? "text-[#005B8E]" : "text-gray-500"}`}>
                                                {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                            </div>
                                        </button>

                                        <motion.div
                                            initial={false}
                                            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-4 pt-1 pl-8 space-y-2">
                                                {cat.services.map((svc, si) => (
                                                    <button
                                                        key={svc.title}
                                                        onClick={() => handleServiceSelect(i, si)}
                                                        className={`block text-left whitespace-nowrap text-[12.5px] transition-all hover:underline font-display ${isActive && selectedIndex === si
                                                                ? "text-[#005B8E] font-bold"
                                                                : "text-gray-600 hover:text-[#005B8E]"
                                                            }`}
                                                    >
                                                        • {svc.title}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </aside>

                    {/* RIGHT: Search + Slider (or search-results grid) */}
                    <div className="w-full flex-1 flex flex-col items-center overflow-hidden">

                        {/* Search bar */}
                        <div className="w-full relative mb-4" style={{ maxWidth: viewportWidth + 16 }}>
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search services by name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-14 pl-12 pr-4 text-base text-black bg-white border border-gray-200 rounded-xl shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C447C]/20 focus:border-[#0C447C]/30 transition font-display"
                            />
                        </div>

                        {isSearching ? (
                            /* ── Search results grid (all categories) ── */
                            <div className="w-full" style={{ maxWidth: viewportWidth + 16 }}>
                                {searchResults.length > 0 ? (
                                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                        <AnimatePresence mode="popLayout">
                                            {searchResults.map((svc, i) => {
                                                const canonical = SERVICE_BY_PATH[toSlugPath(svc.path)];
                                                const cardImg = canonical?.image ?? svc.img;
                                                const cardDesc = canonical?.description ?? svc.desc;
                                                return (
                                                    <motion.div
                                                        layout
                                                        key={toSlugPath(svc.path)}
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                    >
                                                        <Link
                                                            href={toSlugPath(svc.path)}
                                                            className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(11,45,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(11,45,91,0.12)]"
                                                        >
                                                            <div className="relative">
                                                                <div className="relative w-full h-[150px] bg-slate-200 overflow-hidden">
                                                                    <Image
                                                                        src={cardImg}
                                                                        alt={svc.title}
                                                                        fill
                                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                        sizes="195px"
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="absolute -bottom-5 left-4 z-10 w-11 h-11 rounded-full flex items-center justify-center shadow-md border-4 border-white text-lg"
                                                                    style={{ backgroundColor: BADGE_COLORS[i % BADGE_COLORS.length] }}
                                                                >
                                                                    <span>{svc.icon}</span>
                                                                </div>
                                                            </div>

                                                            <div className="pt-8 px-4 pb-4 flex flex-col flex-1">
                                                                <h3 className="font-bold text-[#0D2D52] mb-2 leading-snug text-[15px] font-display">
                                                                    {svc.title}
                                                                </h3>
                                                                <p className="text-[#6B7280] text-[13px] leading-relaxed line-clamp-3 mb-3 font-display flex-1">
                                                                    {cardDesc}
                                                                </p>
                                                                <span
                                                                    className="inline-flex items-center gap-1 text-[13px] font-bold font-display"
                                                                    style={{ color: "#E57531" }}
                                                                >
                                                                    Learn More <ArrowRight size={14} />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                );
                                            })}
                                        </AnimatePresence>
                                    </motion.div>
                                ) : (
                                    <div className="text-center py-20 text-slate-400 font-display">
                                        <p className="text-lg font-medium font-display">No services match your search.</p>
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="mt-4 text-sm text-[#005B8E] hover:underline font-semibold font-display cursor-pointer"
                                        >
                                            Clear search
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* ── Default slider ── */
                            <>
                                {/* Clipped viewport — fixed width for exactly 4 cards, never shrinks/reflows. */}
                                <div className="overflow-hidden max-w-full" style={{ width: viewportWidth + 16 }}>
                                    <div
                                        ref={sliderRef}
                                        className="flex gap-4 overflow-x-auto px-2 pt-2 pb-4 scroll-smooth no-scrollbar"
                                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                                    >
                                        {currentCat?.services.map((svc, i) => {
                                            const isActiveCard = openCat !== null && i === selectedIndex;
                                            const canonical = SERVICE_BY_PATH[toSlugPath(svc.path)];
                                            const cardImg = canonical?.image ?? svc.img;
                                            const cardDesc = canonical?.description ?? svc.desc;
                                            return (
                                                <Link
                                                    key={`${openCat}-${i}`}
                                                    href={toSlugPath(svc.path)}
                                                    className={`group flex flex-col flex-shrink-0 overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(11,45,91,0.12)] ${isActiveCard
                                                            ? "ring-2 ring-inset ring-[#0C447C] border border-transparent shadow-[0_8px_28px_rgba(11,45,91,0.18)]"
                                                            : "border border-gray-100 shadow-[0_4px_20px_rgba(11,45,91,0.06)]"
                                                        }`}
                                                    style={{ width: CARD_W, flexShrink: 0 }}
                                                >
                                                    <div className="relative">
                                                        <div className="relative w-full h-[150px] bg-slate-200 overflow-hidden">
                                                            <Image
                                                                src={cardImg}
                                                                alt={svc.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                sizes="195px"
                                                            />
                                                        </div>
                                                        <div
                                                            className="absolute -bottom-5 left-4 z-10 w-11 h-11 rounded-full flex items-center justify-center shadow-md border-4 border-white text-lg"
                                                            style={{ backgroundColor: isActiveCard ? "#E57531" : BADGE_COLORS[i % BADGE_COLORS.length] }}
                                                        >
                                                            <span>{svc.icon}</span>
                                                        </div>
                                                    </div>

                                                    <div className="pt-8 px-4 pb-4 flex flex-col flex-1">
                                                        <h3 className="font-bold text-[#0D2D52] mb-2 leading-snug text-[15px] font-display">
                                                            {svc.title}
                                                        </h3>
                                                        <p className="text-[#6B7280] text-[13px] leading-relaxed line-clamp-3 mb-3 font-display flex-1">
                                                            {cardDesc}
                                                        </p>
                                                        <span
                                                            className="inline-flex items-center gap-1 text-[13px] font-bold font-display"
                                                            style={{ color: "#E57531" }}
                                                        >
                                                            Learn More <ArrowRight size={14} />
                                                        </span>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="w-full flex justify-center mt-6">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => canPrev && goToPage(currentPage - 1)}
                                            disabled={!canPrev}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white transition-all ${canPrev ? "opacity-100 cursor-pointer hover:bg-gray-50" : "opacity-40 cursor-not-allowed"
                                                }`}
                                            aria-label="Previous page"
                                        >
                                            <ChevronLeft size={16} className="text-[#0D2D52]" />
                                        </button>

                                        <span className="text-[#0C447C] text-sm font-bold min-w-[110px] text-center font-display">
                                            {currentPage} of {totalPages} Services
                                        </span>

                                        <button
                                            onClick={() => canNext && goToPage(currentPage + 1)}
                                            disabled={!canNext}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white transition-all ${canNext ? "opacity-100 cursor-pointer hover:bg-gray-50" : "opacity-40 cursor-not-allowed"
                                                }`}
                                            aria-label="Next page"
                                        >
                                            <ChevronRight size={16} className="text-[#0D2D52]" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
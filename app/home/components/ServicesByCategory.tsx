"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { categoryData } from "./data";

export function ServicesByCategory() {
    const [openCat, setOpenCat] = useState<number | null>(null);
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const CARD_W = 195;
    const CARD_GAP = 16;
    const CARDS_VISIBLE = 4;
    const BADGE_COLORS = ["#0C447C", "#0D2D52", "#0C447C", "#0D2D52"];

    const currentCat = categoryData[openCat ?? 0];
    const total = currentCat?.services?.length ?? 0;

    const handleCatClick = (i: number) => {
        setOpenCat(openCat === i ? null : i);
        setSlideIndex(0);
    };

    const canPrev = slideIndex > 0;
    const canNext = slideIndex < total - 1;

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollTo({
                left: slideIndex * (CARD_W + CARD_GAP),
                behavior: "smooth",
            });
        }
    }, [slideIndex]);

    // Visible viewport width = exactly 4 cards + 3 gaps between them, clipping the rest.
    // This is a FIXED width (not 100%/maxWidth) so the row never shrinks the cards
    // or reflows mid-transition on narrower screens — it scrolls internally instead.
    const viewportWidth = CARDS_VISIBLE * CARD_W + (CARDS_VISIBLE - 1) * CARD_GAP;

    return (
        <section className="pt-6 pb-16 sm:pt-8 sm:pb-20 px-4 sm:px-6 lg:px-8 2xl:px-12 bg-white font-display" id="services">
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-14">
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
    <span
        className="h-[2px] w-[60px] sm:w-16"
        style={{ backgroundColor: "#E57531" }}
    />
    OUR SERVICES
    <span
        className="h-[2px] w-[60px] sm:w-16"
        style={{ backgroundColor: "#E57531" }}
    />
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

                    {/* LEFT: Category Cards */}
                    <div className="w-full lg:w-[350px] shrink-0 space-y-3.5 lg:ml-6">
                        {categoryData.map((cat, i) => {
                            const isOpen = openCat === i;
                            const CatIcon = cat.Icon;
                            return (
                                <div
                                    key={cat.id}
                                    className={`w-full rounded-xl overflow-hidden transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ${
                                        isOpen
                                            ? "bg-[#0D2D52] border-0"
                                            : "bg-white border border-[#ECECEC] hover:shadow-md"
                                    }`}
                                >
                                    <button
                                        onClick={() => handleCatClick(i)}
                                        className="w-full px-4 py-3.5 flex items-center gap-3 text-left cursor-pointer"
                                    >
                                        <div
                                            className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                isOpen
                                                    ? "bg-white/10 text-white"
                                                    : "bg-[#F5F7FA] text-gray-400"
                                            }`}
                                        >
                                            <CatIcon size={25} strokeWidth={2} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3
                                                className={`font-display font-bold text-[20px] leading-tight truncate ${
                                                    isOpen ? "text-white" : "text-[#0D2D52]"
                                                }`}
                                            >
                                                {cat.title}
                                            </h3>
                                            <p
                                                className={`font-display mt-0.5 text-[12px] leading-tight ${
                                                    isOpen ? "text-white/80" : "text-gray-500"
                                                }`}
                                            >
                                                {cat.ageLabel}
                                            </p>
                                        </div>
                                        <Plus
                                            size={16}
                                            className={`flex-shrink-0 transition-transform duration-200 ${
                                                isOpen ? "text-white rotate-45" : "text-gray-300"
                                            }`}
                                        />
                                    </button>

                                    {/* Expandable service list — light background, dark text, only header stays navy */}
                                    <div
                                        className="overflow-hidden transition-all duration-300 ease-in-out bg-white"
                                        style={{ maxHeight: isOpen ? "400px" : "0px" }}
                                    >
                                        <ul className="pb-3.5 px-4 pl-[52px] pt-3 space-y-1.5">
                                            {cat.services.map((svc, si) => (
                                                <li key={svc.title}>
                                                    <button
                                                        onClick={() => setSlideIndex(si)}
                                                        className={`text-left text-[12.5px] leading-tight transition-all hover:underline cursor-pointer font-display ${
                                                            slideIndex === si
                                                                ? "text-[#0D2D52] font-bold"
                                                                : "text-gray-500 font-normal"
                                                        }`}
                                                    >
                                                        • {svc.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Card Slider + Navigation */}
                    <div className="w-full flex-1 flex flex-col items-center overflow-hidden">

                        {/* Clipped viewport — fixed width for exactly 4 cards, never shrinks/reflows */}
                        <div
                            className="overflow-hidden max-w-full"
                            style={{ width: viewportWidth }}
                        >
                            <div
                                ref={sliderRef}
                                className="flex gap-4 overflow-x-auto pb-2 scroll-smooth no-scrollbar"
                                style={{
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                }}
                            >
                                {currentCat?.services.map((svc, i) => (
                                    <Link
                                        key={`${openCat}-${i}`}
                                        href={svc.path}
                                        className="group flex flex-col flex-shrink-0 overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(11,45,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(11,45,91,0.12)]"
                                        style={{ width: CARD_W, flexShrink: 0 }}
                                    >
                                        {/* Image + overlapping icon badge */}
                                        <div className="relative">
                                            <div className="relative w-full h-[150px] bg-slate-200 overflow-hidden">
                                                <Image
                                                    src={svc.img}
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

                                        {/* Text */}
                                        <div className="pt-8 px-4 pb-4 flex flex-col flex-1">
                                            <h3 className="font-bold text-[#0D2D52] mb-2 leading-snug text-[15px] font-display">
                                                {svc.title}
                                            </h3>
                                            <p className="text-[#6B7280] text-[13px] leading-relaxed line-clamp-3 mb-3 font-display flex-1">
                                                {svc.desc}
                                            </p>
                                            <span
                                                className="inline-flex items-center gap-1 text-[13px] font-bold font-display"
                                                style={{ color: "#E57531" }}
                                            >
                                                Learn More <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="w-full flex justify-center mt-6">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => canPrev && setSlideIndex(slideIndex - 1)}
                                    disabled={!canPrev}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white transition-all ${canPrev ? "opacity-100 cursor-pointer hover:bg-gray-50" : "opacity-40 cursor-not-allowed"
                                        }`}
                                    aria-label="Previous card"
                                >
                                    <ChevronLeft size={16} className="text-[#0D2D52]" />
                                </button>

                                <span className="text-[#0C447C] text-sm font-bold min-w-[110px] text-center font-display">
                                    {slideIndex + 1} of {total} Services
                                </span>

                                <button
                                    onClick={() => canNext && setSlideIndex(slideIndex + 1)}
                                    disabled={!canNext}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white transition-all ${canNext ? "opacity-100 cursor-pointer hover:bg-gray-50" : "opacity-40 cursor-not-allowed"
                                        }`}
                                    aria-label="Next card"
                                >
                                    <ChevronRight size={16} className="text-[#0D2D52]" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
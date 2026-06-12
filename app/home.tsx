"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Plus,
    Minus,
    User,
    UserCheck,
    Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import {
    PillLabel,
    SectionHeader,
    PrimaryButton,
    SecondaryButton,
    CTABanner,
    StatsBar,
    PaymentBanner,
} from "@/components/shared";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "../components/animations/ScrollReveal";



// ─── Hero Slides ──────────────────────────────────────────────────────────────
const heroSlides = [
    {
        img: "https://images.unsplash.com/photo-1758691462321-9b6c98c40f7e?w=1440&h=600&fit=crop&auto=format",
        pill: "Compassionate Home Care",
        headline: "Care Beyond Compare— So You Can Focus on What Matters Most",
        sub: "Driven by purpose and led by our hearts, we deliver the highest-quality home health care to keep you or your loved ones safe, comfortable, and independent.",
        cta1: { label: "Find a Service ♥", to: "/services" },
        cta2: { label: "Explore Careers ↗", to: "/careers" },
    },
    {
        img: "https://images.unsplash.com/photo-1758686253708-f0e21317d2aa?w=1440&h=600&fit=crop&auto=format",
        pill: "Trusted Since 2004",
        headline: "Two Decades of Caring for Your Loved Ones",
        sub: "Our certified caregivers bring warmth, skill, and genuine compassion to every home visit.",
        cta1: { label: "Meet Our Team ♥", to: "/about" },
        cta2: { label: "Our Services ↗", to: "/services" },
    },
    {
        img: "https://images.unsplash.com/photo-1755189118414-14c8dacdb082?w=1440&h=600&fit=crop&auto=format",
        pill: "Medicare & Medicaid Accepted",
        headline: "Quality Care That Works With Your Coverage",
        sub: "We accept Medicare, Medicaid Long-Term Care, and private pay — so cost never stands in the way.",
        cta1: { label: "Contact Us ♥", to: "/contact" },
        cta2: { label: "Learn More ↗", to: "/about" },
    },
];

// ─── Services-by-Category Data ────────────────────────────────────────────────
const categoryData = [
    {
        id: "seniors",
        title: "Care for Seniors",
        ageLabel: "Age 65 and up",
        Icon: User,
        services: [
            {
                title: "Companion Care",
                desc: "Meaningful social engagement, conversation, and emotional support to reduce isolation and keep seniors thriving at home.",
                img: "https://images.unsplash.com/photo-1758686254601-a47850cb2226?w=560&h=480&fit=crop&auto=format",
                path: "/services/companion-care",
                icon: "💙",
            },
            {
                title: "Skilled Nursing Care",
                desc: "Licensed nurses providing wound care, medication management, and post-surgical recovery support in the comfort of home.",
                img: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=560&h=480&fit=crop&auto=format",
                path: "/services/skilled-nursing",
                icon: "🏥",
            },
            {
                title: "Personal Care",
                desc: "Dignified assistance with bathing, grooming, dressing, and daily hygiene to support maximum independence at home.",
                img: "https://images.unsplash.com/photo-1742676971866-edc9a855d227?w=560&h=480&fit=crop&auto=format",
                path: "/services/personal-care",
                icon: "🤲",
            },
            {
                title: "Respite Care",
                desc: "Temporary relief for family caregivers — from a few hours to several days — so you can rest while your loved one is cared for.",
                img: "https://images.unsplash.com/photo-1758691031844-c8c880a9b764?w=560&h=480&fit=crop&auto=format",
                path: "/services/respite-care",
                icon: "🌿",
            },
            {
                title: "Meal Preparation",
                desc: "Nutritious, home-cooked meals tailored to dietary needs, cultural preferences, and individual health requirements.",
                img: "https://images.unsplash.com/photo-1653233797467-1a528819fd4f?w=560&h=480&fit=crop&auto=format",
                path: "/services/meal-preparation",
                icon: "🍽️",
            },
            {
                title: "24-Hour Home Care",
                desc: "Around-the-clock care for seniors who need continuous support and supervision throughout the day and night.",
                img: "https://images.unsplash.com/photo-1758691031958-29541f3207a5?w=560&h=480&fit=crop&auto=format",
                path: "/services/24-hour-care",
                icon: "🌙",
            },
        ],
    },
    {
        id: "adults",
        title: "Care for Adults",
        ageLabel: "Age 19 to 64",
        Icon: UserCheck,
        services: [
            {
                title: "Personal Care",
                desc: "Compassionate help with daily hygiene, dressing, mobility, and personal routines to maintain independence at home.",
                img: "https://images.unsplash.com/photo-1742676971866-edc9a855d227?w=560&h=480&fit=crop&auto=format",
                path: "/services/personal-care",
                icon: "🤲",
            },
            {
                title: "Companion Care",
                desc: "Social engagement, errand support, light housekeeping, and emotional connection for adults living at home.",
                img: "https://images.unsplash.com/photo-1758686254601-a47850cb2226?w=560&h=480&fit=crop&auto=format",
                path: "/services/companion-care",
                icon: "💙",
            },
            {
                title: "Senior Transportation",
                desc: "Safe, reliable door-to-door transportation for appointments, therapy sessions, errands, and social activities.",
                img: "https://images.unsplash.com/photo-1666887360726-f55472d96c34?w=560&h=480&fit=crop&auto=format",
                path: "/services/senior-transportation",
                icon: "🚗",
            },
        ],
    },
    {
        id: "Care",
        title: "Care For Children",
        ageLabel: "New Born to 18",
        Icon: Activity,
        services: [
            {
                title: "Skilled Nursing Care",
                desc: "Licensed nurses providing wound care, IV therapy, vital monitoring, and clinical support during recovery at home.",
                img: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=560&h=480&fit=crop&auto=format",
                path: "/services/skilled-nursing",
                icon: "🏥",
            },
            {
                title: "Meal Preparation",
                desc: "Balanced, recovery-focused meals prepared at home, tailored to post-surgical dietary restrictions and healing needs.",
                img: "https://images.unsplash.com/photo-1653233797467-1a528819fd4f?w=560&h=480&fit=crop&auto=format",
                path: "/services/meal-preparation",
                icon: "🍽️",
            },
            {
                title: "Personal Care",
                desc: "Gentle assistance with hygiene, mobility, and daily routines while you recover safely and comfortably at home.",
                img: "https://images.unsplash.com/photo-1742676971866-edc9a855d227?w=560&h=480&fit=crop&auto=format",
                path: "/services/personal-care",
                icon: "🤲",
            },
        ],
    },
];

// ─── Hero Slider ──────────────────────────────────────────────────────────────
// ─── Hero Slider ──────────────────────────────────────────────────────────────
function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, []);

    useEffect(() => {
        timerRef.current = setTimeout(next, 5500);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current, next]);

    const activeImage = heroSlides[current].img;

    return (
        <section className="relative h-[calc(100vh-80px)] min-h-[580px] max-h-[760px] overflow-hidden">

            {/* SINGLE BACKGROUND IMAGE (prevents flick) */}
            <Image
                src={activeImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover transition-opacity duration-1000"
                style={{
                    opacity: 1,
                    objectPosition: "60% center",
                }}
            />


            {/* Gradient overlay */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background:
                        "linear-gradient(125deg, #ffffff 0%, #ffffff 27%, rgba(255,255,255,0.95) 39%, rgba(255,255,255,0.80) 48%, rgba(255,255,255,0.50) 57%, rgba(255,255,255,0.18) 67%, rgba(255,255,255,0) 76%)",
                }}
            />
            {/* STATIC CONTENT (never changes) */}
            <div className="absolute inset-0 z-[10]">
                <div className="max-w-[1440px] mx-auto h-full px-6 lg:px-16">
                    <div
                        className="max-w-[630px] h-full flex flex-col justify-start items-start"
                        style={{ paddingTop: "clamp(60px, 10vh, 110px)" }}
                    >
                        <div className="space-y-10">

                            {/* STATIC TEXT */}
                            <div className="space-y-5">
                                <h1
                                    className="text-[#1A1A2E]"
                                    style={{
                                        fontFamily:
                                            "Inter",
                                        fontSize: "clamp(38px, 4.8vw, 48px)",
                                        fontWeight: 700,
                                        lineHeight: "1.06",
                                        letterSpacing: "-0.3px",
                                    }}
                                >
                                    Care Beyond Compare<br />
                                    — So You Can Focus on What Matters Most
                                </h1>

                                <p
                                    className="text-[#4B5563]"
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        color: "#4f5154",
                                        fontSize: "clamp(16px, 1.4vw, 20px)",
                                        lineHeight: "1.75",
                                        maxWidth: 500,
                                    }}
                                >
                                    Driven by purpose and led by our hearts, we deliver the highest-quality home health care to keep you or your loved ones safe, comfortable, and independent.
                                </p>
                            </div>

                            {/* STATIC BUTTONS */}
                            <div className="flex gap-3 sm:gap-6 flex-wrap items-center">
                                <PrimaryButton
                                    onClick={() => {
                                        document.getElementById("services")?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }}
                                >
                                    Find a Service ♥
                                </PrimaryButton>

                                <SecondaryButton to="/careers">
                                    Explore Careers ↗
                                </SecondaryButton>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* DOTS */}
            <div className="absolute bottom-8 left-6 lg:left-16 z-20 flex items-center gap-3">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="transition-all duration-300"
                        style={{
                            width: i === current ? 28 : 10,
                            height: 4,
                            borderRadius: 999,
                            background:
                                i === current ? "#005B8E" : "rgba(0,91,142,0.3)",
                        }}
                    />
                ))}
            </div>
        </section >
    );
}

// ─── Services by Category ─────────────────────────────────────────────────────
function ServicesByCategory() {
    const [openCat, setOpenCat] = useState<number | null>(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const CARD_W = 350;
    const CARD_GAP = 20;

    const currentCat = categoryData[openCat ?? 0];
    const total = currentCat.services.length;

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

    return (
        <section className="py-16 sm:py-10 lg:py-12 px-4 sm:px-6 bg-white"
            id="services">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#1A1A2E] mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(26px, 3vw, 40px)",
                            fontWeight: 700,
                        }}
                    >
                        SRK&apos;s Services by Category
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-[#6B7280] mx-auto text-base sm:text-lg"
                        style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            maxWidth: 700,
                        }}
                    >
                        SRK's offers a wide range of home care services for every age and stage
                        of life, tailored to your unique needs, preferences, and goals.
                        Explore our offerings by age group.
                    </motion.p>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
                    {/* LEFT: Accordion */}
                    <div className="w-full lg:w-[320px] shrink-0">
                        {categoryData.map((cat, i) => {
                            const isOpen = openCat === i;
                            const CatIcon = cat.Icon;
                            return (
                                <div key={cat.id} className="border-b border-[#E5E7EB] pb-2">
                                    <button
                                        className="w-full flex items-center justify-between py-4 text-left"
                                        onClick={() => handleCatClick(i)}
                                    >
                                        <div className="flex items-start gap-3 pr-3">
                                            <CatIcon
                                                size={18}
                                                className="flex-shrink-0 mt-0.5"
                                                style={{ color: isOpen ? "#005B8E" : "#6B7280" }}
                                            />
                                            <div>
                                                <div
                                                    className="font-semibold transition-colors"
                                                    style={{
                                                        fontFamily: "'Source Sans 3', sans-serif",
                                                        fontSize: 20,
                                                        color: isOpen ? "#005B8E" : "#1A1A2E",
                                                    }}
                                                >
                                                    {cat.title}
                                                </div>
                                                <div
                                                    className="text-[#6B7280] mt-0.5"
                                                    style={{
                                                        fontFamily: "'Source Sans 3', sans-serif",
                                                        fontSize: 14,
                                                    }}
                                                >
                                                    {cat.ageLabel}
                                                </div>
                                            </div>
                                        </div>
                                        {isOpen ? (
                                            <Minus size={20} className="text-[#6B7280] flex-shrink-0" />
                                        ) : (
                                            <Plus size={20} className="text-[#6B7280] flex-shrink-0" />
                                        )}
                                    </button>

                                    {/* Bullet list */}
                                    <div
                                        className="overflow-hidden transition-all duration-250"
                                        style={{ maxHeight: isOpen ? 300 : 0 }}
                                    >
                                        <ul className="pb-4 pl-9 space-y-1.5">
                                            {cat.services.map((svc, si) => (
                                                <li key={svc.title}>
                                                    <button
                                                        onClick={() => setSlideIndex(si)}
                                                        className="text-left text-sm transition-all hover:underline"
                                                        style={{
                                                            fontFamily: "'Source Sans 3', sans-serif",
                                                            fontSize: 15,
                                                            color:
                                                                slideIndex === si ? "#1A1A2E" : "#1A1A2E",
                                                            fontWeight: slideIndex === si ? 700 : 400,
                                                        }}
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
                    <div className="w-full max-w-[800px] flex flex-col items-center">

                        {/* Slider */}
                        <div
                            ref={sliderRef}
                            className="flex gap-5 overflow-x-auto pb-2 scroll-smooth w-full"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {currentCat.services.map((svc, i) => (
                                <Link
                                    key={`${openCat}-${i}`}
                                    href={svc.path}
                                    className="flex-shrink-0 flex flex-col overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        width: CARD_W,
                                        height: 380,
                                        borderRadius: 16,
                                        background: "white",
                                        border: "1px solid #E5E7EB",
                                        boxShadow: "0px 4px 20px rgba(0, 91, 142, 0.10)",
                                    }}
                                >
                                    {/* Top text */}
                                    <div className="p-5" style={{ height: 140, flexShrink: 0 }}>
                                        <div
                                            className="font-semibold text-[#1A1A2E] mb-2"
                                            style={{
                                                fontFamily: "'Source Sans 3', sans-serif",
                                                fontSize: 18,
                                            }}
                                        >
                                            {svc.title}
                                        </div>

                                        <p
                                            className="text-[#6B7280] leading-relaxed"
                                            style={{
                                                fontFamily: "'Source Sans 3', sans-serif",
                                                fontSize: 14,
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {svc.desc}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div
                                        className="relative flex-1 overflow-hidden"
                                        style={{ borderRadius: "0 0 16px 16px" }}
                                    >
                                        <Image
                                            src={svc.img}
                                            alt={svc.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                            sizes="280px"
                                        />

                                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-sm">
                                            <span>{svc.icon}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Navigation (CENTERED UNDER FULL WIDTH) */}
                        <div className="w-full flex justify-center mt-6">
                            <div className="flex items-center gap-4 mr-90">

                                <button
                                    onClick={() => canPrev && setSlideIndex(slideIndex - 1)}
                                    disabled={!canPrev}
                                    className="w-11 h-11 rounded-full flex items-center justify-center border border-[#D1D5DB] bg-white transition-all"
                                    style={{
                                        opacity: canPrev ? 1 : 0.4,
                                        cursor: canPrev ? "pointer" : "not-allowed",
                                    }}
                                    aria-label="Previous card"
                                >
                                    <ChevronLeft size={18} color="#1A1A2E" />
                                </button>

                                <span
                                    className="text-[#6B7280] text-sm"
                                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                                >
                                    {slideIndex + 1} of {total} Services
                                </span>

                                <button
                                    onClick={() => canNext && setSlideIndex(slideIndex + 1)}
                                    disabled={!canNext}
                                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all"
                                    style={{
                                        background: canNext ? "#005B8E" : "#D1D5DB",
                                        opacity: canNext ? 1 : 0.6,
                                        cursor: canNext ? "pointer" : "not-allowed",
                                    }}
                                    aria-label="Next card"
                                >
                                    <ChevronRight size={18} color="white" />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

// ─── Static data ──────────────────────────────────────────────────────────────
const steps = [
    {
        num: "01",
        title: "Tell Us Your Needs",
        desc: "Call us or fill out our quick form. We'll listen and understand exactly what kind of care is needed.",
    },
    {
        num: "02",
        title: "We Create Your Care Plan",
        desc: "A dedicated coordinator matches you with the ideal caregiver and builds a personalized care plan.",
    },
    {
        num: "03",
        title: "Care Begins at Home",
        desc: "Your caregiver arrives, and compassionate home care begins — seamlessly and on your schedule.",
    },
];

const newsItems = [
    {
        title: "SRK Recognized for Excellence in Home Healthcare",
        description:
            "Our commitment to quality care has earned us prestigious accreditation and recognition from leading healthcare organizations.",
        image:
            "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
    {
        title: "New Telehealth Services Now Available",
        description:
            "Expanding access to care with innovative virtual health consultations for our patients and their families.",
        image:
            "https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
    {
        title: "Staff Training Excellence Program Launched",
        description:
            "SRK invests in continuous education to ensure our caregivers provide the highest quality of care.",
        image:
            "https://images.unsplash.com/photo-1691139601099-932c01ec198b?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
    {
        title: "Community Outreach Initiative Success",
        description:
            "Our team partners with local communities to provide health education and wellness programs.",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
];

// Trust badge paths — place logo1.png–logo5.png in /public/images/
const trustBadges = [
    { src: "/images/1.png", alt: "Trust Badge 1" },
    { src: "/images/2.png", alt: "Trust Badge 2" },
    { src: "/images/3.png", alt: "Trust Badge 3" },
    { src: "/images/4.png", alt: "Trust Badge 4" },
    { src: "/images/5.png", alt: "Trust Badge 5" },
];

// ─── Care at Home section ─────────────────────────────────────────────────────
const carePoints = [
    "Personalized care tailored to your specific health care needs.",
    "Recovery and support in the comfort and safety of your home.",
    "Assistance with managing chronic conditions or illnesses.",
    "Care coordination to support your transition home from the hospital or inpatient rehab center.",
    "Greater independence and peace of mind for both patients and caregivers.",
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
    return (
        <main>
            {/* ── Hero Slider ───────────────────────────────────────────────────── */}
            <HeroSlider />



            {/* ── Services by Category ──────────────────────────────────────────── */}

            <ServicesByCategory />



            {/* ── Care at Home ──────────────────────────────────────────────────── */}
            <section className="py-14 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a365d] mb-5 sm:mb-6">
                                The care you need in a place you love. At Home.
                            </h2>

                            <p className="text-gray-700 mb-5 sm:mb-6 leading-relaxed text-base sm:text-[17px]">
                                Receiving care at home from us means having access to a
                                dedicated team of skilled clinicians who come to you to deliver
                                the services you need. Our care includes skilled nursing,
                                rehabilitation therapy, and emotional support to ensure a smooth
                                transition home from the hospital or an inpatient rehab center.
                            </p>

                            <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-4">
                                You can count on our experienced team for:
                            </h3>

                            <ul className="space-y-3">
                                {carePoints.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: i * 0.08,
                                        }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-2 h-2 bg-[#1a365d] rounded-full mt-2 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm sm:text-base">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="relative h-[320px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?w=1080&h=800&fit=crop&auto=format"
                                alt="Healthcare professional providing care at home"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* ── News Section (Compact) ─────────────────────────────────────── */}
            <section className="py-8 sm:py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-[#1a365d] mb-6 sm:mb-8"
                    >
                        SRK In the News
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                        {newsItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.12,
                                }}
                            >
                                <Card className="hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                                    {/* Image */}
                                    <div className="h-35 relative overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>

                                    {/* Content */}
                                    <CardHeader className="flex-grow py-2 pb-1 px-3">
                                        <CardTitle className="text-sm leading-tight text-black font-semibold">
                                            {item.title}
                                        </CardTitle>

                                        <CardDescription className="text-xs mt-1 text-black/70 leading-snug">
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardFooter className="pt-0 pb-2 px-3 -mt-1">
                                        <Button
                                            variant="link"
                                            className="p-0 text-blue-600 text-xs font-semibold leading-none"
                                        >
                                            LEARN MORE →
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Trust Badges Marquee ──────────────────────────────────────────── */}
                <div className="mt-12 border-t border-gray-100 pt-10 overflow-hidden">
                    <motion.div
                        className="flex items-center gap-10 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        {[...trustBadges, ...trustBadges].map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center flex-shrink-0"
                                style={{ width: 200, height: 120 }}
                            >
                                <Image
                                    src={badge.src}
                                    alt={badge.alt}
                                    width={180}
                                    height={100}
                                    className="object-contain max-h-[100px] w-auto"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── How It Works ──────────────────────────────────────────────────── */}
            <section
                className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
                style={{ background: "#F9F9F7" }}
            >
                <div className="max-w-[1200px] mx-auto">

                    {/* Header Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeader
                            pill="Getting Started"
                            title="Getting Started Is Simple"
                            subtitle="From your first call to your first day of care, we make the process as easy and stress-free as possible."
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative mt-10">

                        {/* Dashed connector line — desktop only */}
                        <div
                            className="hidden sm:block absolute top-12 left-[calc(33%+24px)] right-[calc(33%+24px)] h-px"
                            style={{ borderTop: "2px dashed #00A693" }}
                        />

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="relative text-center"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.15,
                                }}
                            >
                                {/* Circle */}
                                <div
                                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 z-10 relative"
                                    style={{
                                        background: "white",
                                        boxShadow: "0 4px 20px rgba(0,91,142,0.12)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "clamp(22px, 2vw, 28px)",
                                            fontWeight: 700,
                                            color: "#005B8E",
                                        }}
                                    >
                                        {step.num}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-[#1A1A2E] mb-3"
                                    style={{
                                        fontFamily: "'Source Sans 3', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 600,
                                    }}
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-[#6B7280] text-sm leading-relaxed"
                                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                                >
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Payment Banner ────────────────────────────────────────────────── */}
            <PaymentBanner />

            {/* ── CTA Banner ────────────────────────────────────────────────────── */}
            <CTABanner />
        </main >
    );
}
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ShieldCheck, BadgeCheck, Clock, Phone, ArrowRight } from "lucide-react";
import { heroSlides } from "./data";

export function HeroSlider() {
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
    const activePosition = heroSlides[current].objectPosition ?? "60% 25%";
    const activeShift = heroSlides[current].translateY ?? "0px";

    const badges = [
        { icon: Mail, label: "Medicaid\nAccepted", color: "#E57531" },
        { icon: ShieldCheck, label: "RN Care\nAssessments", color: "#0C447C" },
        { icon: BadgeCheck, label: "Background\nChecked Caregivers", color: "#166534" },
        { icon: Clock, label: "Available\n24/7", color: "#E57531" },
    ];

    return (
        <section className="relative h-[55vh] min-h-[500px] max-h-[550px] 2xl:min-h-[620px] 2xl:max-h-[680px] overflow-hidden bg-white font-display">

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
                    objectPosition: activePosition,
                    transform: `translateY(${activeShift})`,
                }}
            />

            {/* Gradient overlay */}
            {/* Desktop */}
            <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block bg-gradient-to-r from-white via-white/50 via-[45%] to-transparent to-[65%]" />

            {/* Mobile */}
            <div className="absolute inset-0 z-[1] pointer-events-none lg:hidden bg-gradient-to-t from-white via-white/60 to-transparent" />

            {/* STATIC CONTENT (never changes) */}
            <div className="absolute inset-0 z-[10]">
                <div className="w-full h-full px-6 lg:px-16 xl:px-24 2xl:px-40 mx-auto max-w-[1920px]">
                    <div className="max-w-[600px] 2xl:max-w-[820px] h-full flex flex-col justify-center items-start text-left">
                        <div className="space-y-6 2xl:space-y-9">

                            {/* HEADLINE */}
                            <h1
                                className="font-display font-black text-[#0C447C] text-[clamp(34px,4.5vw,46px)] 2xl:text-[64px]"
                                style={{
                                    lineHeight: 1.12,
                                    letterSpacing: "-0.5px",
                                }}
                            >
                                Care That <span className="text-[#046e4c]">Feels </span> <br />
                               Like   <span className="text-[#E57531]">Family</span>
                            </h1>

                            {/* SUBTEXT */}
                            <p
                                className="font-display text-[#3E4C63] text-[clamp(14px,1.1vw,16px)] 2xl:text-[21px] max-w-[460px] 2xl:max-w-[620px]"
                                style={{
                                    lineHeight: 1.6,
                                }}
                            >
                                Compassionate, professional home care services — so your
                                loved one can live safely, independently, and with dignity
                                in the comfort of their own home.
                            </p>

                            {/* ICON BADGE ROW */}
                            <div className="flex flex-wrap items-start gap-x-6 gap-y-4 2xl:gap-x-9 2xl:gap-y-5 pt-1">
                                {badges.map((b, i) => (
                                    <div key={i} className="flex items-center gap-2 2xl:gap-3">
                                        <b.icon
                                            strokeWidth={1.75}
                                            className="flex-shrink-0 w-[22px] h-[22px] 2xl:w-8 2xl:h-8"
                                            style={{ color: b.color }}
                                        />
                                        <span
                                            className="font-display font-semibold text-[#1A1A2E] whitespace-pre-line leading-tight text-[12px] 2xl:text-[16px]"
                                        >
                                            {b.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-3 2xl:gap-4 flex-wrap items-center pt-2">
                               <Link
    href="/services"
    className="font-display inline-flex items-center gap-2 px-6 py-3 2xl:px-9 2xl:py-4 bg-[#E57531] hover:bg-[#0A3968] text-white font-bold rounded-xl 2xl:rounded-2xl transition-all shadow-md text-sm 2xl:text-lg"
>
    Find a Service
</Link>

                                <Link
                                    href="/get-started"
                                    className="font-display inline-flex items-center gap-2 px-6 py-3 2xl:px-9 2xl:py-4 bg-[#0C447C] border-2 border-[#0C447C] hover:bg-[#046e4c] hover:border-[#046e4c] text-white font-bold rounded-xl 2xl:rounded-2xl transition-all text-sm 2xl:text-lg"
                                >
                                    <Phone className="w-[15px] h-[15px] 2xl:w-5 2xl:h-5" />
                                    Request a Free Consultation
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* DOTS */}
            <div className="absolute bottom-8 2xl:bottom-12 left-6 lg:left-16 2xl:left-40 z-20 flex items-center gap-3">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="transition-all duration-300"
                        style={{
                            width: i === current ? 28 : 10,
                            height: 4,
                            borderRadius: 999,
                            background: i === current ? "#0C447C" : "rgba(12,68,124,0.3)",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
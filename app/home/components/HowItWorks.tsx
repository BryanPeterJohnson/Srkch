"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared";
import { steps } from "./data";

export function HowItWorks() {
    return (
        <section
            className="-mt-0 sm:-mt-5 pt-0 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 font-display"
            style={{ background: "#F9F9F7" }}
        >
            <div className="max-w-7xl mx-auto">

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
                        style={{ borderTop: "2px dashed #159BA1" }}
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
                                    className="font-display"
                                    style={{
                                        fontSize: "clamp(22px, 2vw, 28px)",
                                        fontWeight: 700,
                                        color: "#0D2D52",
                                    }}
                                >
                                    {step.num}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className="text-[#0D2D52] mb-3 font-display"
                                style={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                }}
                            >
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-[#6B7280] text-sm leading-relaxed font-display"
                            >
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
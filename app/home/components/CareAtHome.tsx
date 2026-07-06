"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { carePoints } from "./data";

export function CareAtHome() {
    return (
        <section className="-mt-6 sm:-mt-8 pt-0 pb-14 sm:pb-16 bg-white font-display">
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2D52] mb-5 sm:mb-6 font-display">
                            The care you need in a place you love. <span className="text-[#E57531]"> At Home. </span>
                        </h2>

                        <p
                            className="text-gray-700 mb-5 sm:mb-6 leading-relaxed text-base sm:text-[17px] font-display"
                            style={{ textAlign: "justify" }}
                        >
                            We match your loved one with compassionate, certified caregivers
                            who provide personalized in-home care, helping seniors live safely,
                            independently, and comfortably while giving your family 24/7 peace of mind.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-[#0D2D52] mb-4 font-display">
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
                                    <div className="w-2 h-2 bg-[#0D2D52] rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm sm:text-base font-display">
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
                        className="relative h-[320px] sm:h-[400px] lg:h-[500px] 2xl:h-[560px] rounded-lg overflow-hidden shadow-xl"
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
    );
}
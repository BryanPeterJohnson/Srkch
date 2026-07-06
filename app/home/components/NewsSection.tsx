"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { newsItems } from "./data";
import { TrustBadgesMarquee } from "./TrustBadgesMarquee";

export function NewsSection() {
    return (
        <section className="-mt-4 sm:-mt-5 pt-0 pb-8 sm:pb-10 bg-white font-display">
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-[#0D2D52] mb-6 sm:mb-8 font-display"
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
                                <div className="h-[140px] sm:h-[150px] relative overflow-hidden">
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
                                    <CardTitle className="text-sm leading-tight text-black font-semibold font-display">
                                        {item.title}
                                    </CardTitle>

                                    <CardDescription className="text-xs mt-1 text-black/70 leading-snug font-display">
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardFooter className="pt-0 pb-2 px-3 -mt-1">
                                    <Button
                                        variant="link"
                                        className="p-0 text-[#159BA1] text-xs font-semibold leading-none font-display"
                                    >
                                        LEARN MORE →
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <TrustBadgesMarquee />
        </section>
    );
}
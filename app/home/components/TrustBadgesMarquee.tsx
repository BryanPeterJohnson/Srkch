"use client";

import Image from "next/image";
import { trustBadges } from "./data";

export function TrustBadgesMarquee() {
    return (
        <div className="mt-4 border-t border-gray-100 pt-6 overflow-hidden">
            <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-10">
                {trustBadges.map((badge, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center flex-shrink-0 w-[130px] h-[80px] sm:w-[200px] sm:h-[120px]"
                    >
                        <Image
                            src={badge.src}
                            alt={badge.alt}
                            width={180}
                            height={100}
                            className="object-contain max-h-[70px] sm:max-h-[100px] w-auto"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
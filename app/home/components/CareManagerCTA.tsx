"use client";

import { Phone } from "lucide-react";

/**
 * CareManagerCTA
 * "Not Sure Where to Start" eyebrow badge + navy Care Manager CTA banner
 * with phone number and Free Consultation button.
 * Extracted out of MedicaidHero so it can be placed/reused independently.
 * font-display applied to every text element in the section.
 *
 * Drop into: app/home/components/CareManagerCTA.tsx
 * Usage: <CareManagerCTA /> inside app/page.tsx, typically right after MedicaidHero
 */

export default function CareManagerCTA() {
  return (
    <section className="font-display bg-[#FFFDF7] px-4 sm:px-6 lg:px-8 2xl:px-12 pb-16">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px]">
        {/* "Not Sure Where to Start" badge */}
        <div
          className="mb-2 inline-flex items-center gap-2 rounded-r-full rounded-l-md bg-[#0D2D52] px-6 py-3 pl-5"
          style={{ clipPath: "polygon(0 0, 96% 0, 100% 50%, 96% 100%, 0 100%)" }}
        >
          <span className="font-display font-black text-[11px] sm:text-xs tracking-[1.5px] text-white uppercase">
            Not Sure Where to start
          </span>
        </div>

        {/* CTA banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl bg-[#0D2D52] px-5 sm:px-8 py-6 sm:py-7">
          <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E57531] via-[#166534] to-[#0C447C]">
  <Phone className="h-8 w-8 text-white" strokeWidth={2} />
</div>
            <div>
              <p
                className="font-display text-white mb-1 leading-relaxed"
                style={{ fontSize: 12.5 }}
              >
                A dedicated SRK Care Manager will help you understand your
                care options, answer your questions, and guide you toward
                the right support for your loved one. We provide phone
                guidance at no cost, along with registered nurse visits to
                help assess your loved one's needs and create the best care
                plan for your family.
              </p>
              <p className="font-display font-black text-xl sm:text-2xl text-white">
                (443) 985-9368
              </p>
            </div>
          </div>

          <a
            href="get-started"
            className="font-display w-full sm:w-auto whitespace-nowrap rounded-lg bg-[#E57531] px-6 py-3 text-center font-black text-white transition-colors hover:bg-[#EEF9F7]"
            style={{ fontSize: 13 }}
          >
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
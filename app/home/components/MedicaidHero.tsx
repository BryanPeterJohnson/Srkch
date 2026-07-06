"use client";

import { Check } from "lucide-react";

/**
 * MedicaidHero
 * "Bringing care home with Maryland Medicaid" section.
 * Eyebrow badge, headline, subcopy, and a 3-card care-options comparison
 * (CFC Program / Maryland-Community Options Waiver / Private Pay), each with
 * a compact left-aligned layout: icon, title, description, and highlights checklist.
 * font-display applied to every text element in the section.
 *
 * The "Not Sure Where to Start" badge + Care Manager CTA banner now lives in
 * its own component — see CareManagerCTA.tsx — so it can be reused/placed
 * independently of this section.
 *
 * Drop into: app/home/components/MedicaidHero.tsx
 * Usage: <MedicaidHero /> inside app/page.tsx (or wherever the homepage assembles sections)
 */

const programs = [
  {
    id: "cfc",
    emoji: "🗂️",
    iconBg: "bg-[#E57531]",
    borderGradient: "from-[#159BA1] to-[#2BB6BC]",
    checkColor: "text-[#159BA1]",
    buttonBg: "bg-[#0D2D52]",
    title: "CFC Program",
    description:
      "Maryland's fastest path to Medicaid-funded home care. No waitlist — qualify and start. Baseline income limit: $350/month (most families still qualify through spend-down). Self-direct your care and hire a family member as the paid caregiver.",
    highlightsLabel: "CFC Program Highlights",
    highlights: [
      "No waitlist — qualify and start",
      "Self-direct care & hire a family member",
      "No out-of-pocket cost",
    ],
    ctaLabel: "View CFC Program Details",
    ctaHref: "#cfc-program",
  },
  {
    id: "waiver",
    emoji: "⭐",
    iconBg: "bg-[#0C447C]",
    borderGradient: "from-[#0D2D52] to-[#3D6690]",
    checkColor: "text-[#0D2D52]",
    buttonBg: "bg-[#0D2D52]",
    title: "Maryland-Community Options Waiver",
    description:
      "Maryland's Community Options Waiver helps eligible adults receive long-term care services at home or in the community instead of in a nursing facility.",
    highlightsLabel: "Maryland-Community Options Waiver Highlights",
    highlights: [
      "Assisted living and adult day support options",
      "Home modification and safety support",
      "Emergency response services for added protection",
      "Guidance with registry enrollment and status updates",
    ],
    ctaLabel: "View Community Options Waiver",
    ctaHref: "#community-options-waiver",
  },
  {
    id: "private-pay",
    emoji: "💼",
    iconBg: "bg-[#046e4c]",
    borderGradient: "from-[#2BB6BC] to-[#159BA1]",
    checkColor: "text-[#159BA1]",
    buttonBg: "bg-[#0D2D52]",
    title: "Private Pay",
    description:
      "Start home care without Medicaid approval or long paperwork delays. Private pay allows your family to choose the schedule, services, and support that work best for your loved one.",
    highlightsLabel: "Private Pay Highlights",
    highlights: [
      "No Medicaid enrollment needed",
      "Flexible care options",
      "Services can start quickly",
      "A good choice while Medicaid is pending",
    ],
    ctaLabel: "View Private Pay Services",
    ctaHref: "#private-pay",
  },
] as const;

export default function MedicaidHero() {
  return (
    <section className="font-display bg-white py-20 px-4 sm:px-6 lg:px-8 2xl:px-12">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1440px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16 2xl:gap-20 items-start">

          {/* LEFT: Eyebrow + Headline + Subcopy */}
          <div className="w-full lg:w-[380px] shrink-0 lg:sticky lg:top-24 overflow-hidden">
            {/* Eyebrow badge */}
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-r-full rounded-l-md bg-[#E57531] px-5 py-3 pl-2 max-w-full"
              style={{ clipPath: "polygon(0 0, 96% 0, 100% 50%, 96% 100%, 0 100%)" }}
            >
              <span className="font-display font-black text-[9.5px] sm:text-[10.5px] tracking-[1px] text-white uppercase whitespace-nowrap">
                Community First Choice &middot; Maryland Medicaid
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black leading-[1.15] text-[#0D2D52] mb-6"
              style={{ fontSize: "clamp(19px, 2.4vw, 29px)" }}
            >
              Bringing care home with{" "}
              <span className="text-[#046e4c]">Maryland Medicaid</span>
            </h1>

            {/* Subcopy */}
            <p className="font-display text-[13px] sm:text-sm text-[#5B6472] leading-relaxed">
              SRK Care at Home helps Maryland families understand and compare
              three home care options: Community First Choice (Medicaid-funded
              care), Medicaid Long Term Services (LTSS), the Community Options
              Waiver, and private pay home care. Our goal is to make it easier
              for families to review eligibility requirements, waitlist options,
              covered services, and out-of-pocket costs in one clear place.
            </p>
          </div>

          {/* RIGHT: 3 program cards in a row */}
          <div className="w-full lg:w-auto lg:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="relative flex flex-col rounded-xl bg-white shadow-[0_8px_24px_rgba(14,22,43,0.12)] overflow-hidden"
              >
                <div className="flex flex-col flex-1 px-4 pb-4 pt-4">
                  {/* Icon */}
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg text-lg leading-none ${program.iconBg}`}
                  >
                    {program.emoji}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-black text-[#0D2D52] text-left mb-2 leading-snug"
                    style={{ fontSize: 14 }}
                  >
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-display text-[#6B7280] leading-relaxed text-left mb-3"
                    style={{ fontSize: 11 }}
                  >
                    {program.description}
                  </p>

                  {/* Highlights */}
                  <p
                    className="font-display font-black tracking-wide text-[#0D2D52] uppercase mb-2"
                    style={{ fontSize: 9 }}
                  >
                    {program.highlightsLabel}
                  </p>
                  <ul className="space-y-1.5">
                    {program.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check
                          className={`h-3 w-3 mt-0.5 shrink-0 ${program.checkColor}`}
                          strokeWidth={3}
                        />
                        <span
                          className="font-display text-[#3D4552] leading-snug"
                          style={{ fontSize: 11 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
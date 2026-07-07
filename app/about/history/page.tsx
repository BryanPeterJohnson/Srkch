import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  SRKCH Brand Tokens                                                 */
/*  Navy Dark:   #0D2D52   |  Blue Primary: #005B8E                    */
/*  Blue Mid:    #0C447C   |  Green:        #046e4c                    */
/*  Orange:      #E57531                                               */
/* ------------------------------------------------------------------ */

const milestones = [
  {
    year: "2018",
    title: "The Spark of Compassion",
    description:
      "SRK Care At Home was founded out of a deeply personal family experience. Recognizing a gap in specialized, premium home care that honors an individual's dignity, our founders set out to create an agency anchored in empathy and clinical excellence.",
    color: "#E57531",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    year: "2019",
    title: "Building Our First Care Team",
    description:
      "We hired and trained our first cohort of dedicated caregivers, establishing the rigorous screening, background-check, and onboarding standards that would become the backbone of every hire we make to this day.",
    color: "#046e4c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    year: "2020",
    title: "Expanding Our Horizons",
    description:
      "In response to growing community needs, we broadened our care framework to offer specialized Memory Care and Safety Monitoring, ensuring families had reliable partners during critical global health challenges.",
    color: "#005B8E",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
        <path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </svg>
    ),
  },
  {
    year: "2021",
    title: "Strengthening Safety & Trust",
    description:
      "We rolled out enhanced infection-control protocols, real-time family communication tools, and a 24/7 nurse-on-call line — giving families added peace of mind during one of the most uncertain periods for in-home care.",
    color: "#E57531",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    year: "2022",
    title: "Growing Our Community Reach",
    description:
      "Our caregiver roster tripled as word-of-mouth referrals from grateful families fueled organic growth. We opened a second regional office to shorten response times and bring care closer to the neighborhoods we serve.",
    color: "#046e4c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    year: "2023",
    title: "A Specialized Standard of Excellence",
    description:
      "We introduced intensive, continuous professional development tracks for our caregivers. By partnering with healthcare institutions, we elevated our post-hospital and disability support frameworks to industry-leading standards.",
    color: "#005B8E",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    year: "2024",
    title: "Investing in Technology & Continuity",
    description:
      "We launched a digital family portal for real-time care logs, medication tracking, and visit notes — bridging the gap between in-home caregivers, families, and physicians so nothing ever falls through the cracks.",
    color: "#E57531",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Recognized for Quality of Care",
    description:
      "Our commitment to clinical rigor and compassionate service earned us recognition as a Medicare-Certified, fully accredited provider, reflecting years of disciplined caregiver training and consistent quality audits.",
    color: "#046e4c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    year: "2026",
    title: "The Present & Beyond",
    description:
      "Today, SRK Care At Home supports hundreds of families across the region. We remain fiercely dedicated to innovating home healthcare while preserving the personal, deeply compassionate touch that defines our heritage.",
    color: "#005B8E",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="m13 17 5-5-5-5" /><path d="m6 17 5-5-5-5" />
      </svg>
    ),
  },
];

/* Small reusable icon badge used next to section headings */
function SectionBadge({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center w-14 h-14 rounded-full text-white shrink-0 shadow-md"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
}

export default function HistoryPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ------------------------------------------------------------ */}
      {/* Hero Section                                                  */}
      {/* ------------------------------------------------------------ */}
      <section className="relative bg-[#0D2D52] text-white overflow-hidden">
        {/* dotted texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#046e4c_1px,transparent_1px)] [background-size:18px_18px]" />
        {/* soft blue glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#005B8E]/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#046e4c]/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-8 py-24 2xl:py-28 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-[#E57531] uppercase tracking-widest text-xs font-bold bg-white/10 px-4 py-1.5 rounded-full">
              Our Journey
            </span>
            <h1 className="font-display font-black uppercase text-5xl md:text-6xl 2xl:text-7xl mt-5 mb-4 leading-none">
              Our History
            </h1>
            <div className="w-20 h-1.5 bg-[#E57531] rounded-full mb-6" />
            <p className="text-lg 2xl:text-xl text-slate-200 leading-relaxed">
              Every milestone in our history is built upon a simple, unwavering promise:{" "}
              <span className="text-[#046e4c] font-semibold">home healthcare gets better</span> when
              families receive truly <span className="text-[#E57531] font-semibold">personalized</span>,{" "}
              <span className="text-[#E57531] font-semibold">deeply respectful</span> care at home.
            </p>
          </div>

          <div className="relative h-[320px] 2xl:h-[380px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
              alt="Caregiver and senior client sharing a warm moment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* layered wave divider — orange over teal */}
        <div className="relative z-10 -mb-1">
          <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 55C240 90 480 15 720 30C960 45 1200 85 1440 45V90H0V55Z" fill="#046e4c" />
            <path d="M0 70C260 95 520 30 760 42C1000 54 1220 90 1440 60V90H0V70Z" fill="#E57531" />
            <path d="M0 82C280 98 560 55 800 62C1040 69 1240 92 1440 78V90H0V82Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* How We Began                                                  */}
      {/* ------------------------------------------------------------ */}
      <section className="max-w-7xl mx-auto px-8 py-16 2xl:py-20 grid md:grid-cols-2 gap-12 2xl:gap-16 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <SectionBadge color="#E57531">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </SectionBadge>
            <h2 className="font-display font-black uppercase text-3xl 2xl:text-4xl text-[#0D2D52]">
              How We Began
            </h2>
          </div>

          {/* dotted timeline rail beside paragraphs */}
          <div className="relative pl-8 border-l-2 border-dotted border-[#E57531]/50 space-y-4">
            <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#E57531]" />
            <p className="text-gray-700 leading-relaxed">
              SRK Care At Home did not start as a business plan; it began as a commitment to family.
              We understood early on that home is more than just a place—it&apos;s an anchor of comfort,
              memory, and personal independence.
            </p>
            <span className="absolute -left-[7px] top-1/2 w-3 h-3 rounded-full bg-[#E57531]/60" />
            <p className="text-gray-700 leading-relaxed">
              From our very first client, we pledged to elevate standard private duty care into a
              holistic environment where both our clients and our exceptional caregivers can genuinely
              thrive together.
            </p>
            <span className="absolute -left-[7px] bottom-1 w-3 h-3 rounded-full bg-[#E57531]/40" />
            <p className="text-gray-700 leading-relaxed">
              What began as a single caregiver visiting a single family has grown, year after year,
              into a trusted regional care provider — but the founding promise hasn&apos;t changed:
              every visit should feel like it comes from someone who genuinely cares.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* offset brand frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#E57531]" />
          <div className="relative h-[350px] 2xl:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80"
              alt="Compassionate elderly care home visit"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Growing With Purpose                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-[#046e4c]/5">
        <div className="max-w-7xl mx-auto px-8 py-16 2xl:py-20 grid md:grid-cols-2 gap-12 2xl:gap-16 items-center">
          <div className="relative md:order-1 order-2">
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-[#046e4c]" />
            <div className="relative h-[350px] 2xl:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                alt="Caregiver team training and professional development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:order-2 order-1">
            <div className="flex items-center gap-4 mb-6">
              <SectionBadge color="#046e4c">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </SectionBadge>
              <h2 className="font-display font-black uppercase text-3xl 2xl:text-4xl text-[#0D2D52]">
                Growing With Purpose
              </h2>
            </div>

            <div className="relative pl-8 border-l-2 border-dotted border-[#046e4c]/50 space-y-4">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#046e4c]" />
              <p className="text-gray-700 leading-relaxed">
                As more families trusted us with their loved ones, we never let growth outpace quality.
                Every new caregiver who joins our team passes through the same rigorous background
                checks, hands-on training, and mentorship process that defined our very first hires.
              </p>
              <span className="absolute -left-[7px] top-1/2 w-3 h-3 rounded-full bg-[#046e4c]/60" />
              <p className="text-gray-700 leading-relaxed">
                We invested early in continuous education — partnering with healthcare institutions to
                keep our clinical standards current, and building specialized tracks in memory care,
                post-hospital recovery, and disability support.
              </p>
              <span className="absolute -left-[7px] bottom-1 w-3 h-3 rounded-full bg-[#046e4c]/40" />
              <p className="text-gray-700 leading-relaxed">
                That discipline is what allowed us to scale from a single office to a multi-region care
                network without ever losing the personal touch our founders insisted on from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Milestones Timeline                                           */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-white border-t border-b border-gray-100 py-20 2xl:py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black uppercase text-3xl md:text-4xl 2xl:text-5xl text-[#0C447C] text-center mb-3">
            Milestones of Progress
          </h2>
          <div className="w-16 h-1.5 bg-[#E57531] rounded-full mx-auto mb-5" />
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
            From our founding to today, every year has added a new layer of capability, trust, and
            reach — without ever compromising the personal care our families count on.
          </p>

         
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Looking Ahead                                                 */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-[#005B8E]/5">
        <div className="max-w-7xl mx-auto px-8 py-16 2xl:py-20 grid md:grid-cols-2 gap-12 2xl:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <SectionBadge color="#0C447C">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="m13 17 5-5-5-5" /><path d="m6 17 5-5-5-5" />
                </svg>
              </SectionBadge>
              <h2 className="font-display font-black uppercase text-3xl 2xl:text-4xl text-[#0D2D52]">
                Looking Ahead
              </h2>
            </div>

            <div className="relative pl-8 border-l-2 border-dotted border-[#005B8E]/50 space-y-4">
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#005B8E]" />
              <p className="text-gray-700 leading-relaxed">
                Our story is far from finished. As the needs of families evolve — from longer life
                expectancies to more complex at-home medical care — we&apos;re committed to evolving
                alongside them, without ever losing sight of the relationship at the center of
                everything we do.
              </p>
              <span className="absolute -left-[7px] top-1/2 w-3 h-3 rounded-full bg-[#005B8E]/60" />
              <p className="text-gray-700 leading-relaxed">
                We&apos;re investing in better technology to connect families with their caregivers in
                real time, expanding our specialized care tracks, and deepening our partnerships with
                hospitals and physicians to make every care transition seamless.
              </p>
              <span className="absolute -left-[7px] bottom-1 w-3 h-3 rounded-full bg-[#005B8E]/40" />
              <p className="text-gray-700 leading-relaxed">
                One thing will never change: the same compassion that started this company in 2018 is
                still what guides every single visit we make today.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#0C447C]" />
            <div className="relative h-[350px] 2xl:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                alt="Caregiver and senior client sharing a moment together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* CTA Banner                                                    */}
      {/* ------------------------------------------------------------ */}
      <section className="bg-[#0D2D52] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#046e4c_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="max-w-7xl mx-auto px-8 py-14 2xl:py-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-display font-black uppercase text-2xl md:text-3xl 2xl:text-4xl text-white text-center md:text-left">
            Want to experience our care model?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E57531] text-white font-bold uppercase tracking-wide text-sm rounded-full hover:bg-[#d1651f] transition-colors shadow-lg shrink-0"
          >
            Connect With Our Care Team
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
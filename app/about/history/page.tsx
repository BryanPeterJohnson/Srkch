import Image from "next/image";
import Link from "next/link";

export default function HistoryPage() {
  const milestones = [
    {
      year: "2018",
      title: "The Spark of Compassion",
      description: "SRK Care At Home was founded out of a deeply personal family experience. Recognizing a gap in specialized, premium home care that honors an individual's dignity, our founders set out to create an agency anchored in empathy and clinical excellence."
    },
    {
      year: "2019",
      title: "Building Our First Care Team",
      description: "We hired and trained our first cohort of dedicated caregivers, establishing the rigorous screening, background-check, and onboarding standards that would become the backbone of every hire we make to this day."
    },
    {
      year: "2020",
      title: "Expanding Our Horizons",
      description: "In response to growing community needs, we broadened our care framework to offer specialized Memory Care and Safety Monitoring, ensuring families had reliable partners during critical global health challenges."
    },
    {
      year: "2021",
      title: "Strengthening Safety & Trust",
      description: "We rolled out enhanced infection-control protocols, real-time family communication tools, and a 24/7 nurse-on-call line — giving families added peace of mind during one of the most uncertain periods for in-home care."
    },
    {
      year: "2022",
      title: "Growing Our Community Reach",
      description: "Our caregiver roster tripled as word-of-mouth referrals from grateful families fueled organic growth. We opened a second regional office to shorten response times and bring care closer to the neighborhoods we serve."
    },
    {
      year: "2023",
      title: "A Specialized Standard of Excellence",
      description: "We introduced intensive, continuous professional development tracks for our caregivers. By partnering with healthcare institutions, we elevated our post-hospital and disability support frameworks to industry-leading standards."
    },
    {
      year: "2024",
      title: "Investing in Technology & Continuity",
      description: "We launched a digital family portal for real-time care logs, medication tracking, and visit notes — bridging the gap between in-home caregivers, families, and physicians so nothing ever falls through the cracks."
    },
    {
      year: "2025",
      title: "Recognized for Quality of Care",
      description: "Our commitment to clinical rigor and compassionate service earned us recognition as a Medicare-Certified, fully accredited provider, reflecting years of disciplined caregiver training and consistent quality audits."
    },
    {
      year: "2026",
      title: "The Present & Beyond",
      description: "Today, SRK Care At Home supports hundreds of families across the region. We remain fiercely dedicated to innovating home healthcare while preserving the personal, deeply compassionate touch that defines our heritage."
    }
  ];

  return (
    <main className="pt-[px] bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003A5C] text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00A693_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#00A693] uppercase tracking-widest text-xs font-bold bg-white/10 px-3 py-1 rounded-full">Our Journey</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our History</h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            Every milestone in our history is built upon a simple, unwavering promise: home healthcare gets better when families receive truly personalized, deeply respectful care at home.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-[1100px] mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#003A5C] mb-6">How We Began</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SRK Care At Home did not start as a business plan; it began as a commitment to family. We understood early on that home is more than just a place—it's an anchor of comfort, memory, and personal independence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            From our very first client, we pledged to elevate standard private duty care into a holistic environment where both our clients and our exceptional caregivers can genuinely thrive together.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What began as a single caregiver visiting a single family has grown, year after year, into a trusted regional care provider — but the founding promise hasn't changed: every visit should feel like it comes from someone who genuinely cares.
          </p>
        </div>
        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Image 
src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1200&q=80"
            alt="Compassionate elderly care home visit" 
            fill 
            className="object-cover"
          />
        </div>
      </section>

      {/* Growth Story Section */}
      <section className="max-w-[1100px] mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 md:order-1 order-2">
          <Image 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
            alt="Caregiver team training and professional development" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="md:order-2 order-1">
          <h2 className="text-3xl font-bold text-[#003A5C] mb-6">Growing With Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As more families trusted us with their loved ones, we never let growth outpace quality. Every new caregiver who joins our team passes through the same rigorous background checks, hands-on training, and mentorship process that defined our very first hires.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We invested early in continuous education — partnering with healthcare institutions to keep our clinical standards current, and building specialized tracks in memory care, post-hospital recovery, and disability support.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That discipline is what allowed us to scale from a single office to a multi-region care network without ever losing the personal touch our founders insisted on from day one.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white border-t border-b border-gray-100 py-20 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-bold text-[#003A5C] text-center mb-4">Milestones of Progress</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
            From our founding to today, every year has added a new layer of capability, trust, and reach — without ever compromising the personal care our families count on.
          </p>
          
          <div className="relative border-l-2 border-slate-200 pl-6 ml-4 md:ml-32 space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#00A693] border-4 border-white shadow-sm"></div>
                
                {/* Year Badge Side Label */}
                <div className="md:absolute md:-left-36 md:top-0 md:w-24 text-left md:text-right font-bold text-2xl text-[#005B8E] mb-2 md:mb-0">
                  {milestone.year}
                </div>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-[#003A5C] mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="max-w-[1100px] mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#003A5C] mb-6">Looking Ahead</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our story is far from finished. As the needs of families evolve — from longer life expectancies to more complex at-home medical care — we're committed to evolving alongside them, without ever losing sight of the relationship at the center of everything we do.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We're investing in better technology to connect families with their caregivers in real time, expanding our specialized care tracks, and deepening our partnerships with hospitals and physicians to make every care transition seamless.
          </p>
          <p className="text-gray-700 leading-relaxed">
            One thing will never change: the same compassion that started this company in 2018 is still what guides every single visit we make today.
          </p>
        </div>
        <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Image 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80" 
            alt="Caregiver and senior client sharing a moment together" 
            fill 
            className="object-cover"
          />
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 text-center max-w-4xl mx-auto px-8">
        <h3 className="text-2xl font-bold text-[#003A5C] mb-4">Want to experience our care model?</h3>
        <Link href="/contact" className="inline-block px-6 py-3 bg-[#003A5C] text-white font-semibold rounded-md hover:bg-[#005B8E] transition-colors shadow-sm">
          Connect With Our Care Team
        </Link>
      </section>
    </main>
  );
}
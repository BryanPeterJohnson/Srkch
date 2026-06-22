import Image from "next/image";
import { Globe, Users, ShieldAlert, Sparkles, HeartHandshake, Languages } from "lucide-react";
import Link from "next/link";

export default function DiversityPage() {
  const commitments = [
    {
      icon: <Globe className="text-[#00A693]" size={24} />,
      title: "Culturally Competent Care",
      description: "We understand that background, religious practices, and unique cultural rules deeply influence medical comfort. Our care plans actively adapt to respect individual traditions."
    },
    {
      icon: <Users className="text-[#005B8E]" size={24} />,
      title: "Diverse Language Alignment",
      description: "Clear communication builds basic human trust. We recruit and match bilingual or multilingual providers to alleviate safety gaps or language barriers within the household."
    },
    {
      icon: <Sparkles className="text-[#003A5C]" size={24} />,
      title: "Neurodiversity & Disability Advocacy",
      description: "Our teams complete specific interactive models to advocate safely and thoughtfully for clients dealing with developmental challenges, physical boundaries, and diverse illnesses."
    },
    {
      icon: <ShieldAlert className="text-red-600" size={24} />,
      title: "Safe Spaces Policy",
      description: "SRK Care At Home is an actively welcoming space for all communities. We stand firmly for fair treatment, zero discriminatory policies, and universal safety."
    }
  ];

  return (
    <main className=" bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003A5C] text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#00A693] uppercase tracking-widest text-xs font-bold bg-white/10 px-3 py-1 rounded-full">Inclusion & Belonging</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Diversity, Equity, & Belonging</h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            At SRK Care At Home, you belong. We embrace the wonderful differences that make each client and caregiver completely unique.
          </p>
        </div>
      </section>

      {/* Core Paragraph */}
      <section className="max-w-4xl mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#003A5C] mb-4">Our Commitment to Our Community</h2>
        <p className="text-gray-700 leading-relaxed text-base max-w-3xl mx-auto">
          We intentionally gather strength from a beautiful assortment of cultures, ages, abilities, and life experiences. True diversity means listening closely and constantly learning from one another so that our clients feel complete well-being, dignity, and absolute peace of mind.
        </p>
      </section>
      

      {/* Why It Matters Section */}
      <section className="max-w-[1100px] mx-auto px-8 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#003A5C] mb-4">Why Diversity Shapes Better Care</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            Home care is deeply personal. The food someone grew up eating, the language they dream in, the customs they observe at the end of a long day — all of it shapes how safe and understood a person feels when a caregiver walks through their door.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            That's why we don't treat cultural competence as a checkbox. It's woven into how we recruit, how we train, and how we match every caregiver to every family — because care that ignores who someone is can never truly be excellent care.
          </p>
        </div>
        <div className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
            alt="Diverse caregiver and client sharing a warm moment"
            fill
            className="object-cover"
          />
        </div>
      </section>
      

      {/* Grid Values Pillars */}
      <section className="max-w-[1100px] mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {commitments.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
              <div className="p-3 bg-slate-50 rounded-lg h-fit flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#003A5C] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Diversity Impact Section */}
<section className="bg-white py-16 px-8 border-y border-gray-200">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-[#003A5C] mb-4">
        Building Stronger Communities Through Inclusive Care
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Every family deserves care that respects their identity, values,
        traditions, and life experiences. Our commitment to diversity
        helps us create meaningful relationships built on trust,
        understanding, and dignity.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      <div className="bg-slate-50 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-[#00A693]">100%</h3>
        <p className="text-sm text-gray-600 mt-2">
          Equal Opportunity Employment
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-[#005B8E]">Inclusive</h3>
        <p className="text-sm text-gray-600 mt-2">
          Care Plans Tailored To Individual Needs
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-[#003A5C]">Ongoing</h3>
        <p className="text-sm text-gray-600 mt-2">
          Cultural Awareness Training
        </p>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl text-center">
        <h3 className="text-3xl font-bold text-red-600">Zero</h3>
        <p className="text-sm text-gray-600 mt-2">
          Tolerance For Discrimination
        </p>
      </div>
    </div>
  </div>
</section>

      {/* How We Practice It Section */}
      <section className="bg-white border-t border-gray-200 py-16 px-8">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 md:order-1 order-2">
            <Image
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80"
              alt="Multicultural healthcare team collaborating"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <h2 className="text-2xl font-bold text-[#003A5C] mb-4">How We Put It Into Practice</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Languages className="text-[#00A693] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700 text-sm leading-relaxed">
                  During intake, we ask about language preference, dietary customs, and spiritual practices — then build them directly into the written care plan, not as an afterthought.
                </p>
              </li>
              <li className="flex gap-3">
                <HeartHandshake className="text-[#005B8E] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our caregiver roster reflects the communities we serve, and every team member completes ongoing cultural-competence and disability-advocacy training, not just a one-time orientation.
                </p>
              </li>
              <li className="flex gap-3">
                <Users className="text-[#003A5C] flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700 text-sm leading-relaxed">
                  Families can request a caregiver re-match at any time, free of charge, if comfort, language, or cultural fit isn't where it needs to be.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inclusive Workplace Section */}
      <section className="bg-slate-50 border-t border-gray-200 py-16 px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#003A5C] mb-4">Looking for a place to thrive?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              If you want to be part of an agency that loves your unique background, rewards your empathy, and gives you equal paths to advance your career, you belong with us.
            </p>
            <Link href="/careers" className="inline-block px-5 py-2.5 bg-[#005B8E] text-white font-semibold text-sm rounded-md hover:bg-[#003A5C] transition-colors">
              Explore Open Care Roles
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-inner">
            <h4 className="font-bold text-[#003A5C] mb-2 text-sm">Universal Standard Guarantee</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              SRK Care At Home ensures fair opportunities and care planning regardless of ethnicity, race, age, religion, sexual orientation, physical capability, neurodiversity profile, or economic framework.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
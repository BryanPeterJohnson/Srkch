import Image from "next/image";
import { Heart, ShieldCheck, Award, Stethoscope, Clock3, Users2,   CheckCircle,
  MessageCircleHeart,
  Star,
  BadgeCheck,
  UserRoundCheck, } from "lucide-react";
import Link from "next/link";



export default function MissionPage() {
  const pillars = [
    {
      icon: <Heart className="text-[#00A693]" size={32} />,
      title: "Compassion First",
      description: "We lead every interaction with empathy, active listening, and sincere kindness. We treat our clients like family and honor their personal stories."
    },
    {
      icon: <Award className="text-[#005B8E]" size={32} />,
      title: "Excellence in Action",
      description: "We commit to the highest clinical training standards, continuous service updates, and proactive communication to deliver clinical-grade support at home."
    },
    {
      icon: <ShieldCheck className="text-[#003A5C]" size={32} />,
      title: "Unwavering Reliability",
      description: "Families rely on us during vulnerable moments. We ensure safe transitions, transparent logging, punctual schedules, and an ever-present baseline of trust."
    }
  ];

  const dailyPractices = [
    {
      icon: <Stethoscope className="text-[#00A693]" size={22} />,
      title: "Clinical Rigor, Every Visit",
      description: "Every caregiver follows a documented care plan reviewed regularly by our clinical team, so quality never depends on which day of the week it is."
    },
    {
      icon: <Clock3 className="text-[#005B8E]" size={22} />,
      title: "On Time, Every Time",
      description: "We track punctuality as a core performance metric — because for a family waiting on care, a late visit isn't a minor inconvenience, it's a broken promise."
    },
    {
      icon: <Users2 className="text-[#003A5C]" size={22} />,
      title: "The Right Caregiver Match",
      description: "We pair personality, language, and clinical skill set thoughtfully, because comfort and competence both matter for the relationship to actually work."
    }
  ];

  return (
    <main className=" bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#003A5C] text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#00A693] uppercase tracking-widest text-xs font-bold bg-white/10 px-3 py-1 rounded-full">Our Purpose</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Mission & Core Values</h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            To provide compassionate, client-centered home healthcare that promotes independence, protects health, and preserves the highest level of dignity.
          </p>
        </div>
      </section>

      {/* Mission Statement Narrative */}
      <section className="max-w-[1100px] mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003A5C] mb-4">What Drives Us Every Day</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
            Our mission isn't a plaque on a wall — it's the standard every caregiver is measured against, every single shift. We believe a person's home should remain the safest, most dignified place for them to heal, age, and live, no matter how complex their care needs become.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            That belief shapes how we recruit, how we train, and how we hold ourselves accountable. We don't just send a caregiver to a house — we build a relationship of trust between a family and the person who will be there for them.
          </p>
        </div>
        <div className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Image
           src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
            alt="Caregiver providing compassionate support to a senior client"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-8 border-y border-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-[#003A5C] mb-4">
        Our Impact in Action
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto">
        We measure success by the trust of the families we serve and the
        quality of life we help protect every day.
      </p>
    </div>

    <div className="grid md:grid-cols-5 gap-6">
      {[
        ["500+", "Families Served With Dignity"],
        ["98%", "Client Satisfaction Rate"],
        ["100%", "Background Verified Caregivers"],
        ["24/7", "Clinical Support Available"],
        ["Year After Year", "Families Continue To Trust Us"],
      ].map(([value, label], i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-[#00A693]">{value}</h3>
          <p className="text-sm text-gray-600 mt-3">{label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* The Core Values Pillars */}
      <section className="max-w-[1200px] mx-auto px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#003A5C]">The Framework of Our Care</h2>
          <p className="text-gray-600 mt-3">Our actions are guided by three unwavering foundational pillars that shape how we hire, how we serve, and how we care.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl p-8 bg-slate-50 shadow-sm hover:border-slate-200 hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003A5C] mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Live Our Values Daily */}
      <section className="bg-slate-50 border-y border-gray-100 py-20 px-8">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 md:order-1 order-2">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="Caregiver reviewing a clinical care plan"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#003A5C] mb-6">How We Live Our Values Daily</h2>
            <div className="space-y-6">
              {dailyPractices.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="p-2.5 bg-white rounded-lg shadow-sm h-fit flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#003A5C] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-[#003A5C]">
        Why Families Choose SRK Care At Home
      </h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
        Exceptional home care is built on trust, consistency, and genuine
        relationships. These are the principles that guide every visit.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            icon: <Users2 className="text-[#00A693]" />,
            title: "Person-Centred Care",
            text: "Every care plan is tailored to individual goals, preferences, and routines.",
          },
          {
            icon: <Award className="text-[#005B8E]" />,
            title: "Trained Caregivers",
            text: "Professionally trained staff with ongoing development and supervision.",
          },
          {
            icon: <ShieldCheck className="text-[#003A5C]" />,
            title: "Safety & Compliance",
            text: "Strong safeguarding procedures and quality assurance processes.",
          },
          {
            icon: <Heart className="text-[#00A693]" />,
            title: "Community Connection",
            text: "Supporting independence while helping clients stay connected.",
          },
          {
            icon: <MessageCircleHeart className="text-[#005B8E]" />,
            title: "Open Communication",
            text: "Regular updates and responsive support for families.",
          },
          {
            icon: <Star className="text-[#003A5C]" />,
            title: "Quality That Shows",
            text: "Continuous improvement focused on client outcomes.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-slate-50 border border-gray-100"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-bold text-[#003A5C] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80"
          alt="Happy caregiver and client"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* Philosophy Statement */}
      <section className="bg-slate-900 text-white py-16 px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Vision for Home Care</h2>
          <blockquote className="text-xl italic text-slate-300 border-l-4 border-[#00A693] pl-6 py-2 inline-block max-w-2xl text-left font-serif">
            "We believe that our exceptional caregivers are our single greatest asset. By investing deeply in their security and training, we empower them to bring light, comfort, and professional assurance into every home they step into."
          </blockquote>
        </div>
      </section>
      <section className="bg-slate-50 py-20 px-8 border-y border-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-[#003A5C]">
        Words From The Families We Serve
      </h2>

      <p className="text-gray-600 mt-3">
        The trust families place in us is our greatest achievement.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          name: "Linda M.",
          quote:
            "The caregivers treat my mother with kindness, dignity, and genuine respect. They truly feel like part of our family.",
        },
        {
          name: "James T.",
          quote:
            "Reliable, professional, and compassionate. SRK Care At Home has given us complete peace of mind.",
        },
        {
          name: "Priya K.",
          quote:
            "The perfect caregiver match. The team listens, communicates, and consistently exceeds expectations.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            "{item.quote}"
          </p>

          <div className="font-semibold text-[#003A5C]">
            — {item.name}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Link */}
      <section className="py-20 text-center max-w-xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-[#003A5C] mb-4">Ready to build a customized care plan?</h3>
        <p className="text-gray-600 text-sm mb-8">Let us help your loved ones maintain comfort and lifestyle independence right at home.</p>
        <Link href="/contact" className="px-6 py-3 bg-[#00A693] text-white font-semibold rounded-md hover:opacity-95 transition-opacity shadow-sm">
          Get Started Today
        </Link>
      </section>
    </main>
  );
}
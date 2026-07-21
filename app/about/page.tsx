"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ShieldCheck,
  BadgeCheck,
  Phone,
  Target,
  Eye,
  Gem,
  CheckCircle,
  Users,
  UserCheck,
  Stethoscope,
  Clock,
  Award,
  Star,
  User,
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  HeartHandshake,
  Heart,
  Handshake,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Static content                                                            */
/* -------------------------------------------------------------------------- */

const HERO_BADGES = [
  { icon: Mail, label: "Medicaid\nAccepted", color: "#E57531" },
  { icon: ShieldCheck, label: "RN Care\nAssessments", color: "#0C447C" },
  { icon: BadgeCheck, label: "Background\nChecked Caregivers", color: "#046e4c" },
  { icon: Clock, label: "Available\n24/7", color: "#E57531" },
];

type ValueItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const VALUES: ValueItem[] = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We treat every client and their family with genuine kindness, empathy, and consideration for their unique experiences and needs.",
  },
  {
    icon: Handshake,
    title: "Respect",
    description:
      "We honor each client's cultural, religious, and personal values, ensuring these are reflected in every aspect of our service.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards, prioritizing honesty, transparency, and accountability in all our interactions and decisions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for continuous improvement, investing in staff development and quality assurance to deliver care that exceeds industry standards.",
  },
];

type MvvTab = {
  id: "mission" | "vision" | "values";
  label: string;
  icon: React.ElementType;
  title: string;
  description?: string[];
  values?: ValueItem[];
  image: string;
  accent: string;
};

const MVV_TABS: MvvTab[] = [
  {
    id: "mission",
    label: "Mission",
    icon: Target,
    title: "Our Mission",
    description: [
      "To provide exceptional, client-centered non-medical care that promotes independence, safety, and quality of life for every individual we serve.",
      "We support seniors, individuals with disabilities, post-surgical patients, and children with developmental delays, physical disabilities, autism spectrum disorder, and other chronic but stable conditions—empowering them to live with dignity in the comfort of their own homes, while upholding the highest standards of professionalism and respect for the diverse needs of Maryland's communities.",
    ],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=80",
    accent: "#046e4c",
  },
  {
    id: "vision",
    label: "Vision",
    icon: Eye,
    title: "Our Vision",
    description: [
      "To be the region's most trusted leader in personalized home care services—recognized for delivering reliable, culturally attuned, and responsive support.",
      "We aspire to set the benchmark for excellence by consistently exceeding expectations, ensuring that every client and family experiences care marked by empathy, integrity, and mutual respect.",
    ],
image: "/images/About/vision.png",
    accent: "#0C447C",
  },
  {
    id: "values",
    label: "Values",
    icon: Gem,
    title: "Our Values",
    values: VALUES,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    accent: "#E57531",
  },
];

const WHY_CHOOSE = [
  {
    icon: Users,
    title: "Top-Tier Caregivers",
    description:
      "Highly trained professionals who treat your loved one like family.",
    accent: "#046e4c",
  },
  {
    icon: UserCheck,
    title: "Personalized Matching",
    description:
      "We match each client with a caregiver who aligns with their needs, preferences, and personality.",
    accent: "#E57531",
  },
  {
    icon: Stethoscope,
    title: "RN-Supervised Care",
    description:
      "Our registered nurses design and monitor care plans tailored to each client's unique needs.",
    accent: "#0C447C",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "We're here whenever you need us—day or night.",
    accent: "#159BA1",
  },
];

const STATS = [
  { icon: Users, value: "500+", label: "Families Served" },
  { icon: Award, value: "Certified", label: "Caregivers" },
  { icon: ShieldCheck, value: "Medicaid", label: "Accepted" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const LIFE_STAGES = [
  {
    icon: User,
    title: "Seniors",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    description:
      "Compassionate care that helps older adults maintain safety, active, and independent lives.",
    accent: "#046e4c",
  },
  {
    icon: UserCheck,
    title: "Adults",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=800&q=80",
    description:
      "Support for adults recovering from illness, managing chronic conditions, or needing extra help.",
    accent: "#E57531",
  },
  {
    icon: Activity,
    title: "Children",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0?auto=format&fit=crop&w=800&q=80",
    description:
      "Specialized care for children with medical needs, developmental differences, or disabilities.",
    accent: "#0C447C",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "SRK Care at Home has been a blessing for our family. Their caregivers treat my mom with such kindness and respect. We finally have peace of mind knowing she's in good hands.",
    name: "Lisa B.",
    relation: "Daughter of Client",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "The care coordinators listened to exactly what our family needed and matched us with a caregiver who fit perfectly. The communication has been outstanding from day one.",
    name: "Marcus T.",
    relation: "Son of Client",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [mvvTab, setMvvTab] = useState<"mission" | "vision" | "values">(
    "mission"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    helpType: "",
    message: "",
  });

  /* ------------------------------------------------------------------ */
  /*  Hash navigation: /about#mission, /about#vision, /about#values,     */
  /*  /about#our-story — activates the right tab and scrolls to it.      */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      if (hash === "mission" || hash === "vision" || hash === "values") {
        setMvvTab(hash as "mission" | "vision" | "values");
        requestAnimationFrame(() => {
          document
            .getElementById("mission")
            ?.scrollIntoView({ behavior: "smooth" });
        });
      } else {
        requestAnimationFrame(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "smooth" });
        });
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setTestimonialIndex(
      (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const activeMvv = MVV_TABS.find((tab) => tab.id === mvvTab)!;

  return (
    <div className="min-h-screen bg-white font-display">
      {/* ---------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative h-[55vh] min-h-[500px] max-h-[550px] 2xl:max-h-[640px] overflow-hidden bg-white font-display">
        <Image
          src="/images/Home/1.png"
          alt="Caregiver sharing a warm moment with a senior client"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% 10%" }}
        />
        <div className="absolute inset-0 z-[1] pointer-events-none hidden lg:block bg-gradient-to-r from-white via-white/50 via-[45%] to-transparent to-[65%]" />
        <div className="absolute inset-0 z-[1] pointer-events-none lg:hidden bg-gradient-to-t from-white via-white/60 to-transparent" />

        <div
          className="absolute bottom-0 right-0 z-[2] w-full h-2.5 sm:h-3 pointer-events-none bg-gradient-to-r from-[#E57531] via-[#159BA1] to-[#046e4c]"
          style={{ clipPath: "polygon(20% 100%, 100% 0%, 100% 100%)" }}
        />

        <div className="absolute inset-0 z-[10]">
          <div className="w-full h-full px-6 lg:px-16 xl:px-24 2xl:px-32">
            <div className="max-w-[600px] h-full flex flex-col justify-center items-start text-left">
              <div className="space-y-6">
                <h1
                  className="font-display font-black text-[#0C447C]"
                  style={{
                    fontSize: "clamp(34px, 4.5vw, 46px)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Care That <span className="text-[#046e4c]">Feels</span>
                  <br />
                  Like <span className="text-[#E57531]">Family</span>
                </h1>

                <p
                  className="font-display text-[#3E4C63]"
                  style={{
                    fontSize: "clamp(14px, 1.1vw, 16px)",
                    lineHeight: 1.6,
                    maxWidth: 460,
                  }}
                >
                  At SRK Care at Home, we believe everyone deserves to live
                  safely, comfortably, and independently at home—with a team
                  that truly cares for seniors, adults, and children across
                  Maryland.
                </p>

                <div className="flex flex-wrap items-start gap-x-6 gap-y-4 pt-1">
                  {HERO_BADGES.map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <b.icon
                        size={22}
                        strokeWidth={1.75}
                        className="flex-shrink-0"
                        style={{ color: b.color }}
                      />
                      <span
                        className="font-display font-semibold text-[#1A1A2E] whitespace-pre-line leading-tight"
                        style={{ fontSize: 12 }}
                      >
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap items-center pt-2">
                  <Link
                    href="/get-started"
                    className="font-display inline-flex items-center gap-2 px-6 py-3 bg-[#E57531] hover:bg-[#0C447C] text-white font-bold rounded-xl transition-all shadow-md text-sm cursor-pointer"
                  >
                    Request a Free Consultation
                  </Link>
                  <Link
                    href="tel:+14436273806"
                    className="font-display inline-flex items-center gap-2 px-6 py-3 bg-[#0C447C] border-2 border-[#0C447C] hover:bg-[#046e4c] hover:border-[#046e4c] text-white font-bold rounded-xl transition-all text-sm cursor-pointer"
                  >
                    <Phone size={15} />
                    Call (443) 6273806
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Our Story  —  /about#our-story                                    */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="our-story"
        className="scroll-mt-24 2xl:scroll-mt-28 max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-20 2xl:px-12 pt-6 md:pt-10 pb-8 md:pb-10 font-display"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <div className="text-[#046e4c] text-m font-bold uppercase tracking-widest mb-3 font-display">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] leading-tight mb-5 font-display">
              A Family&apos;s Vision.
              <br />A Community&apos;s Mission.
            </h2>
            <p className="text-slate-600 leading-7 mb-4 font-display">
              SRK Care at Home was co-founded by Omair Choudhry, a former
              physician and community leader, and Salman Khan, a healthcare
              entrepreneur—born from personal experience with the challenges
              families face when a loved one needs care.
            </p>
            <p className="text-slate-600 leading-7 mb-4 font-display">
              With over a decade of combined experience in healthcare,
              compliance, and caregiving, our team sets the standard for
              quality and trust in non-medical home care. Rooted in the
              Laurel/Howard County community, we deliver care grounded in
              respect for every family&apos;s cultural and religious
              preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] gap-4 items-stretch">
            <div className="relative w-full min-h-[220px] h-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80"
                alt="Caregiver holding hands with a client"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full bg-[#EAF3F8] rounded-2xl p-6 flex flex-col justify-between">
              <Quote className="w-7 h-7 text-[#0C447C] mb-3" />
              <p className="text-[#0B2D5B] font-semibold leading-relaxed font-display">
                We listen, we care, and we show up—every day. Your loved
                one&apos;s well-being is our highest priority.
              </p>
              <HeartHandshake className="w-8 h-8 text-[#0C447C]/30 self-end mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Mission, Vision & Values — interactive tabs                       */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="mission"
        className="scroll-mt-24 2xl:scroll-mt-28 bg-slate-50 pt-5 md:pt-2 pb-8 md:pb-10 font-display"
      >
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-20 2xl:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 2xl:gap-20 items-stretch">
            <div>
              <div className="flex flex-wrap gap-3 mb-8">
                {MVV_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setMvvTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all font-display cursor-pointer ${
                      mvvTab === tab.id
                        ? "bg-[#0C447C] text-white shadow-md"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-[#0C447C]/40 hover:text-[#0C447C]"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={mvvTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${activeMvv.accent}1A` }}
                    >
                      <activeMvv.icon
                        className="w-6 h-6"
                        style={{ color: activeMvv.accent }}
                      />
                    </div>
                    <div className="inline-block">
                      <h3 className="text-2xl font-bold text-[#1a365d] font-display">
                        {activeMvv.title}
                      </h3>
                      <div
                        className="w-full h-[3px] rounded-full mt-1"
                        style={{ backgroundColor: activeMvv.accent }}
                      />
                    </div>
                  </div>

                  {activeMvv.values ? (
                    <ul className="space-y-4">
                      {activeMvv.values.map((value) => (
                        <li key={value.title}>
                          <div className="flex items-center gap-3 mb-1">
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${activeMvv.accent}1A` }}
                            >
                              <value.icon
                                className="w-4 h-4"
                                style={{ color: activeMvv.accent }}
                              />
                            </div>
                            <div className="font-bold text-[#1a365d] text-sm font-display">
                              {value.title}
                            </div>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed font-display pl-12">
                            {value.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-4">
                      {activeMvv.description?.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-slate-600 leading-relaxed font-display"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative w-full min-h-[380px] 2xl:min-h-[440px] h-full rounded-2xl overflow-hidden shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mvvTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeMvv.image}
                    alt={activeMvv.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D5B]/85 via-[#0B2D5B]/10 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Why Families Choose SRK                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-20 2xl:px-12 pt-8 md:pt-10 pb-8 md:pb-10 font-display">
        <div className="text-center text-[#0C447C] text-m font-bold uppercase tracking-widest mb-6 font-display">
          Why Families Choose SRK
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${item.accent}1A` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.accent }} />
              </div>
              <h3 className="text-base font-bold text-[#1a365d] mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3 font-display">
                {item.description}
              </p>
              <div
                className="w-8 h-[3px] rounded-full"
                style={{ backgroundColor: item.accent }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Stats bar                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-gradient-to-r from-[#0D2D52] to-[#046e4c] mt-6 md:mt-3 py-8 md:py-10 font-display">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-20 2xl:px-12 flex flex-wrap justify-center sm:justify-between items-center gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="w-6 h-6 text-white" />
              <div className="leading-tight">
                <div className="font-bold text-white text-sm font-display">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs font-display">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-white fill-white" />
              ))}
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white text-sm font-display">
                4.9 Customer Rating
              </div>
              <div className="text-white/70 text-xs font-display">
                Based on Google Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Serving Every Stage of Life                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-20 2xl:px-12 pt-8 md:pt-10 pb-8 md:pb-10 font-display">
        <div className="text-center text-[#0C447C] text-m font-bold uppercase tracking-widest mb-10 font-display">
          Serving Every Stage of Life
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {LIFE_STAGES.map((stage) => (
            <div
              key={stage.title}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col sm:flex-row md:flex-col"
            >
              <div className="relative w-full sm:w-40 md:w-full h-40 flex-shrink-0">
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${stage.accent}1A` }}
                >
                  <stage.icon className="w-4 h-4" style={{ color: stage.accent }} />
                </div>
                <h3 className="text-base font-bold text-[#1a365d] mb-2 font-display">
                  {stage.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3 font-display">
                  {stage.description}
                </p>
                <div
                  className="inline-flex items-center gap-1 text-sm font-bold font-display"
                  style={{ color: stage.accent }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Testimonial                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-slate-50 pt-14 md:pt-20 pb-8 md:pb-10 font-display">
        <div className="max-w-4xl mx-auto px-6 relative">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0C447C] hover:bg-[#0C447C] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0C447C] hover:bg-[#0C447C] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center px-10"
            >
              <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#0C447C]">
                <Image
                  src={TESTIMONIALS[testimonialIndex].avatar}
                  alt={TESTIMONIALS[testimonialIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <Quote className="w-6 h-6 text-[#0C447C] mx-auto mb-3" />
              <p className="text-[#0B2D5B] font-semibold leading-relaxed mb-4 font-display">
                {TESTIMONIALS[testimonialIndex].quote}
              </p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: TESTIMONIALS[testimonialIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#046e4c] fill-[#046e4c]"
                    />
                  )
                )}
              </div>
              <div className="text-slate-500 text-sm font-display">
                – {TESTIMONIALS[testimonialIndex].name},{" "}
                {TESTIMONIALS[testimonialIndex].relation}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === testimonialIndex ? "bg-[#0C447C]" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Contact / Get Support  —  /about#contact                          */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="contact"
        className="scroll-mt-24 2xl:scroll-mt-28 max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-20 2xl:px-12 pt-14 md:pt-20 pb-16 md:pb-24 font-display"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.4fr_0.7fr] gap-8">
          <div>
            <div className="text-[#046e4c] text-xs font-bold uppercase tracking-widest mb-3 font-display">
              Get the Support You Deserve
            </div>
            <h2 className="text-3xl font-bold text-[#1a365d] leading-tight mb-4 font-display">
              Let&apos;s Talk About How We Can{" "}
              <span className="text-[#E57531]">Help</span>
            </h2>
            <p className="text-slate-600 leading-7 font-display">
              Fill out the form and a care coordinator will reach out to you
              within one business day.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 grid sm:grid-cols-2 gap-4 font-display"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full h-12 px-4 text-sm text-black bg-white border border-gray-200 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C447C]/20 focus:border-[#0C447C]/30 transition font-display"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full h-12 px-4 text-sm text-black bg-white border border-gray-200 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C447C]/20 focus:border-[#0C447C]/30 transition font-display"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full h-12 px-4 text-sm text-black bg-white border border-gray-200 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C447C]/20 focus:border-[#0C447C]/30 transition font-display"
            />
            <select
              value={formData.preferredContact}
              onChange={(e) =>
                setFormData({ ...formData, preferredContact: e.target.value })
              }
              className="w-full h-12 px-4 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0C447C]/20 focus:border-[#0C447C]/30 transition font-display"
            >
              <option value="">Preferred Contact</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="text">Text</option>
            </select>
            <select
              value={formData.helpType}
              onChange={(e) =>
                setFormData({ ...formData, helpType: e.target.value })
              }
              className="w-full h-12 px-4 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0C447C]/20 focus:border-[#0C447C]/30 transition font-display"
            >
              <option value="">How can we help?</option>
              <option value="senior-care">Senior Care</option>
              <option value="adult-care">Adult Care</option>
              <option value="pediatric-care">Pediatric Care</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Message (optional)"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 text-sm text-black bg-white border border-gray-200 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0C447C]/20 focus:border-[#0C447C]/30 transition font-display resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 h-12 bg-[#0C447C] hover:bg-[#046e4c] text-white font-bold rounded-xl transition-all text-sm font-display"
            >
              Submit Request
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="bg-[#E1F0E6] rounded-2xl p-6 flex flex-col items-start justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#046e4c] shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <p className="text-[#0B2D5B] text-sm font-semibold font-display">
              Not sure where to start? Call us anytime.
            </p>
            <a
              href="tel:4436273806"
              className="text-[#046e4c] font-bold text-sm font-display"
            >
              (443) 6273806
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
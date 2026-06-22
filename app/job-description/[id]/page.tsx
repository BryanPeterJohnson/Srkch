"use client";

import { useParams, useRouter } from "next/navigation";
import { ALL_JOBS } from "@/app/data/jobs";
import {
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Share2,
  Building2,
  ArrowLeft,
  CheckCircle2,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// ── Sticky Apply Card ──
function ApplyCard({
  liked,
  setLiked,
  onApply,
  leftColRef,
}: {
  liked: boolean;
  setLiked: (v: boolean) => void;
  onApply: () => void;
  leftColRef: React.RefObject<HTMLDivElement>;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const initialTopRef = useRef<number | null>(null);
  const FIXED_TOP = 80; // how far from top of viewport when fixed

  useEffect(() => {
    function captureInitial() {
      if (wrapperRef.current && initialTopRef.current === null) {
        initialTopRef.current =
          wrapperRef.current.getBoundingClientRect().top + window.scrollY;
      }
    }

    function updatePosition() {
      if (!wrapperRef.current || !cardRef.current || !leftColRef.current) return;
      captureInitial();
      if (initialTopRef.current === null) return;

      const scrollY = window.scrollY;
      const cardHeight = cardRef.current.offsetHeight;
      const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
      const wrapperLeft = wrapperRef.current.getBoundingClientRect().left;
      const leftColBottom = leftColRef.current.getBoundingClientRect().bottom;

      if (scrollY + FIXED_TOP < initialTopRef.current) {
        cardRef.current.style.position = "relative";
        cardRef.current.style.top = "0";
        cardRef.current.style.left = "0";
        cardRef.current.style.width = "100%";
        cardRef.current.style.bottom = "auto";
        return;
      }

      const maxTop = leftColBottom - cardHeight;

      if (maxTop < FIXED_TOP) {
        cardRef.current.style.position = "absolute";
        cardRef.current.style.bottom = "0";
        cardRef.current.style.top = "auto";
        cardRef.current.style.left = "0";
        cardRef.current.style.width = "100%";
      } else {
        cardRef.current.style.position = "fixed";
        cardRef.current.style.top = `${FIXED_TOP}px`;
        cardRef.current.style.bottom = "auto";
        cardRef.current.style.width = `${wrapperWidth}px`;
        cardRef.current.style.left = `${wrapperLeft}px`;
      }
    }

    const timer = setTimeout(() => {
      captureInitial();
      updatePosition();
    }, 50);

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", () => {
      initialTopRef.current = null;
      captureInitial();
      updatePosition();
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [leftColRef]);

  return (
    <div ref={wrapperRef} className="relative w-full min-h-[200px]">
      <div ref={cardRef} className="z-40 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 space-y-4">
        <div className="text-center pb-2 border-b border-gray-100">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Ready to apply?
          </p>
          <h3 className="text-sm font-black text-[#1a365d] mt-0.5">
            Join the Care Team Family Today
          </h3>
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={onApply}
            className="flex-1 h-12 bg-[#1a365d] hover:bg-[#254675] text-white font-extrabold text-base rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center"
          >
            Apply Job
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition flex-shrink-0"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                liked ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <button className="h-9 border border-gray-200 hover:bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 transition text-[11px] font-medium gap-1">
            <svg className="w-3 h-3 text-blue-600 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
            Share
          </button>
          <button className="h-9 border border-gray-200 hover:bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 transition text-[11px] font-medium gap-1">
            <svg className="w-3 h-3 text-black fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Tweet
          </button>
          <button className="h-9 border border-gray-200 hover:bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 transition text-[11px] font-medium gap-1">
            <svg className="w-3 h-3 text-blue-700 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──
export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();

  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const job = ALL_JOBS.find((j) => String(j.id) === String(idParam));

  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const leftColRef = useRef<HTMLDivElement>(null);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] text-red-500 font-medium">
        Job not found
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* ── Breadcrumb bar ── */}
   

      {/* ── Full Width Hero Section ── */}
      <div className="w-full bg-[#0f2443] bg-gradient-to-r from-[#0f2443] via-[#1a365d] to-[#254675] relative text-white overflow-hidden border-b border-gray-200">
        {/* Subtle Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 z-10">
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  Now Hiring
                </span>
                <span className="bg-white/15 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                  {job.jobType}
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span>{job.title}</span>
                  {job.license && (
                    <span className="text-blue-200 font-medium text-sm sm:text-base bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                      {job.license}
                    </span>
                  )}
                </h1>
                
                <p className="text-base font-semibold text-blue-100 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-300" />
                  {job.partner || "SRK Care at Home"}
                </p>
              </div>

              {/* Primary Meta Metrics Row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-blue-100 font-medium pt-1">
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-blue-300" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-300" /> {job.jobType}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
                  <Clock className="w-3.5 h-3.5 text-blue-300" /> Posted {job.datePosted}
                </span>
              </div>

              {/* Badges / Trust Metrics Container */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs pt-4 border-t border-white/10 w-full text-blue-100/90">
                <div className="flex items-center bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-md font-bold border border-amber-500/30 backdrop-blur-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-amber-400 mr-0.5" />
                  ))}
                  <span className="ml-1 text-xs text-white">4.2</span>
                </div>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-300" /> 10,000+ employees
                </span>
                <span className="text-white/20 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-md font-semibold border border-emerald-500/30 backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Employer
                </span>
              </div>
            </div>

            {/* Right Graphic/Image Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md h-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-slate-800/50">
                {/* Fallback pattern / image element container */}
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare professional providing modern clinical assistance support"
                  className="w-full h-full object-cover object-center brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2443]/80 via-transparent to-transparent" />
                
                {/* Floating Initial Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#1a365d] px-3 py-1.5 rounded-xl flex items-center gap-2 font-black text-sm shadow-md border border-white">
                  <span className="w-7 h-7 rounded-lg bg-[#1a365d] text-white flex items-center justify-center text-xs">
                    {job.partner ? job.partner.substring(0, 2).toUpperCase() : "SR"}
                  </span>
                  {job.partner || "SRK Care"}
                </div>

                {/* Inline Action Interventions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setSaved(!saved)}
                    className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white shadow-sm"
                    aria-label="Save job position"
                  >
                    <Heart className="w-4 h-4" fill={saved ? "#ef4444" : "none"} stroke={saved ? "#ef4444" : "currentColor"} />
                  </button>
                  <button 
                    className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white shadow-sm"
                    aria-label="Share position specification"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Layout Body Wrapper ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left Column */}
          <div ref={leftColRef} className="lg:col-span-2 space-y-8 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

            <section className="space-y-3">
              <div className="flex items-center gap-2 border-l-4 border-[#1a365d] pl-3">
                <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">Job Description</h2>
              </div>
              {job.tagline && (
                <p className="text-sm font-bold text-[#1a365d] leading-relaxed">{job.tagline}</p>
              )}
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{job.description}</p>
              {job.descriptionExtra && (
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{job.descriptionExtra}</p>
              )}
            </section>

            {job.whatWeOffer && job.whatWeOffer.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-[#1a365d] pl-3">
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">What We Offer Our Teams</h2>
                </div>
                <ul className="grid grid-cols-1 gap-2.5">
                  {job.whatWeOffer.map((offer, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {job.howWePrepare && job.howWePrepare.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-[#1a365d] pl-3">
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">How We Prepare You for Success</h2>
                </div>
                <ul className="grid grid-cols-1 gap-2.5">
                  {job.howWePrepare.map((prep, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {job.shifts && job.shifts.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-l-4 border-[#1a365d] pl-3">
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">Available Shifts</h2>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {job.shifts.map((shift, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full border border-blue-100 text-xs font-semibold">
                      {shift}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-[#1a365d] pl-3">
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">Requirements</h2>
                </div>
                <ul className="grid grid-cols-1 gap-2.5">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500 mt-4 leading-relaxed">
                  <strong className="text-gray-700 block mb-1">Equal Opportunity Employer</strong>
                  We comply with all applicable federal and state laws and guidelines. We value true workplace diversity and are fully dedicated to building an authentic inclusive ecosystem environment for all teammates.
                </div>
              </section>
            )}

            {job.benefits && job.benefits.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-[#1a365d] pl-3">
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">Employee Benefits</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {job.benefits.map((b, i) => (
                    <div key={i} className="border border-gray-100 bg-white shadow-sm rounded-xl p-3 text-center flex flex-col items-center justify-center min-h-[100px]">
                      <span className="text-2xl mb-1.5">{b.icon || "🎁"}</span>
                      <h4 className="text-xs font-bold text-gray-800 leading-tight">{b.title}</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5 font-medium truncate w-full px-1">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="space-y-5 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 border-l-4 border-[#1a365d] pl-3">
                <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">About Company Care</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our care infrastructure was built on a singular simple premise: health care outcomes drastically improve when clinicians truly understand the individuals they support. For years, our team has grown into one of the nation's most trusted home health care models, offering deep compassion and excellence across everything we do.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f0f6fb] border border-blue-50 rounded-xl p-4">
                {[
                  { value: "50+", label: "Years in business" },
                  { value: "28,000+", label: "Employees" },
                  { value: "300+", label: "Locations" },
                  { value: "4.2 ★", label: "Employee Rating" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-lg font-extrabold text-[#1a365d]">{s.value}</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ── Right Column ── */}
          <aside className="hidden lg:block">
            <ApplyCard
              liked={liked}
              setLiked={setLiked}
              onApply={() => router.push("/apply-job")}
              leftColRef={leftColRef}
            />
          </aside>
        </div>
      </div>

      {/* ── Mobile Fixed Bottom Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-4 py-3 flex gap-3">
        <button
          onClick={() => router.push("/apply-job")}
          className="flex-1 h-12 bg-[#1a365d] hover:bg-[#254675] text-white font-extrabold text-base rounded-xl transition-all active:scale-[0.98] flex items-center justify-center"
        >
          Apply Job
        </button>
        <button
          onClick={() => setLiked(!liked)}
          className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-50 transition flex-shrink-0"
        >
          <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>
      </div>
    </div>
  );
}
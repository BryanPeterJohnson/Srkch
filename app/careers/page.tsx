"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  X,
  ChevronRight,
  Search,
  MapPin,
  Clock,
  Briefcase,
  Building2,
  ChevronDown,
  Share2,
  ExternalLink,
  Award,
  TrendingUp,
  Users,
  Shield,
  Sparkles,
  GraduationCap,
  Activity,
  CheckCircle,
} from "lucide-react";

// ── Real Data Import ─────────────────────────────────────────────────────────
import { ALL_JOBS, type Job } from "@/app/data/jobs";

const JOB_CATEGORIES = ["All Categories", "Nursing", "Therapy", "Home Health Aide", "Direct Support", "Administrative"];
const REMOTE_TYPES = ["All Types", "In-Person", "Remote", "Hybrid"];
const EMPLOYMENT_TYPES_LIST = ["All Types", "Full-Time", "Part-Time", "Per Diem", "Contract"];

// Dynamically generate unique location options based on current jobs data pool
const LOCATION_OPTIONS = ["All Locations", ...Array.from(new Set(ALL_JOBS.map(job => job.location)))];

// ── Small Components ──────────────────────────────────────────────────────────

function HeroSection({ onScroll }: { onScroll: () => void }) {
  return (
    <div className="w-full bg-gradient-to-r from-[#112240] via-[#1a365d] to-[#0f172a] text-white py-14 md:py-20 relative overflow-hidden border-b border-gray-800 left-0 right-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -top-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-blue-400" />
              Direct Network Hiring
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Find Your Next Meaningful <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                Healthcare Role
              </span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Explore fully verified nursing, therapy, and community support positions. Connect directly with premier care facilities and independent home care networks built around your life.
            </p>

          
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                <Activity className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <span className="block text-2xl font-bold tracking-tight text-white">500+</span>
                <span className="text-xs text-gray-400 font-medium">Active Openings This Week</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="block text-2xl font-bold tracking-tight text-white">Direct</span>
                <span className="text-xs text-gray-400 font-medium">To Facility Management</span>
              </div>
            </div>

            <div className="col-span-2 p-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">100% Credential Security</h4>
                <p className="text-xs text-gray-300 mt-0.5 leading-normal">
                  Your licensure checks, credentials, and documentation match up safely through verified, direct networks.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function PartnerBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1 border border-gray-300 rounded px-1.5 py-0.5 bg-white">
      <div className="w-3.5 h-3.5 bg-blue-700 rounded-sm flex items-center justify-center">
        <span className="text-white font-bold text-[4px]">JH</span>
      </div>
      <span className="text-[10px] text-gray-700 font-semibold">{name}</span>
    </div>
  );
}

function MultiSelectFilter({
  label,
  values,
  options,
  onChange,
}: {
  label: string;
  values: string[];
  options: string[];
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
   const handler = (e: MouseEvent) => {
  if (ref.current && !ref.current.contains(e.target as Node)) {
    setOpen(false);
    setSearchQuery("");
  }
};

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);


  const toggleOption = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else {
      onChange([...values, option]);
    }
  };

  // Filter options based on user search query
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative" ref={ref}>
 <button
  onClick={() => {
    if (open) setSearchQuery("");
    setOpen(!open);
  }}
        className="flex items-center gap-2 px-4 h-10 border border-gray-300 rounded bg-white text-black text-sm font-medium transition hover:bg-gray-50 focus:outline-none"
      >
        <span className="max-w-[240px] truncate">
          {values.length ? values.join(", ") : label}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 min-w-[240px] max-h-72 flex flex-col overflow-hidden">
          {/* Search Box inside dropdown */}
          <div className="p-2 border-b border-gray-100 sticky top-0 bg-white z-10 flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 ml-1" />
            <input
              type="text"
              placeholder={`Search ${label.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs p-1 focus:outline-none border-b border-transparent focus:border-gray-200 text-gray-800 placeholder:text-gray-400"
              autoFocus
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="text-gray-400 hover:text-gray-600 p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Options List */}
          <div className="overflow-y-auto flex-1 max-h-48">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={values.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="rounded text-black focus:ring-black border-gray-300"
                  />
                  {option}
                </label>
              ))
            ) : (
              <div className="text-center py-4 text-xs text-gray-400">
                No matches found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Job Detail Panel ──────────────────────────────────────────────────────────

function JobDetail({ job, onClose }: { job: Job; onClose: () => void }) {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col overflow-hidden bg-white">
      <div className="px-6 pt-6 pb-5 border-b border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <span className="text-xs font-mono text-gray-500 block mb-1">Job ID: #{job.id}</span>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-bold text-[#1a365d] leading-tight">
                {job.title}
              </h2>
              <button
                onClick={() => router.push(`/job-description/${job.id}`)}
                title="Open full job details page"
                className="p-1 rounded text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                {job.jobType}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                Posted {job.datePosted}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-green-50 text-green-700 text-xs font-semibold border border-green-100">
                <Building2 className="w-3 h-3" />
                Private Home / Community
              </span>
              <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded">
                {job.license}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              {job.partner && <PartnerBadge name={job.partner} />}
            </div>
          </div>
          
          {/* Action Column Top-Right */}
          <div className="flex flex-col items-end flex-shrink-0">
            <div className="flex items-center gap-2">
              <button aria-label="Save job" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">
                <Heart className="w-4 h-4" />
              </button>
              <button aria-label="Share job" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                aria-label="Close details"
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Pushed slightly down with mt-6 */}
            <button
              onClick={() => router.push("/apply-job")}
              className="mt-8 px-6 h-13 bg-[#1a365d] hover:bg-[#2a4a7f] text-white font-bold text-sm rounded transition shadow-sm tracking-wide whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {job.tagline && (
          <div className="bg-[#f0f6fb] rounded-lg px-4 py-3.5 border border-blue-50">
            <p className="text-[11px] text-[#164e9a] font-bold uppercase tracking-wider mb-0.5">Opportunity</p>
            <p className="text-sm font-bold text-[#1a365d] leading-snug">{job.tagline}</p>
          </div>
        )}

        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-2.5">Why Join Us?</h3>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{job.description}</p>
          {job.descriptionExtra && (
            <p className="text-sm text-gray-600 leading-relaxed mt-3 whitespace-pre-line">{job.descriptionExtra}</p>
          )}
        </div>

        {job.whatWeOffer && job.whatWeOffer.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2.5">What Makes This Opportunity Exciting?</h3>
            <ul className="space-y-2">
              {job.whatWeOffer.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-3.5 h-3.5 text-[#1a365d] mt-0.5 flex-shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {job.requirements && job.requirements.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2.5">Qualifications &amp; Experience</h3>
            <ul className="space-y-2">
              {job.requirements.map((q, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-3.5 h-3.5 text-[#1a365d] mt-0.5 flex-shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {job.benefits && job.benefits.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {job.benefits.map((b, i) => (
                <div key={i} className="border border-gray-100 bg-gray-50/70 rounded-xl p-3 flex items-start gap-3">
                  <span className="text-xl leading-none mt-0.5">{b.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{b.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-normal">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Compact Benefits Card Component ───────────────────────────────────────────

function BenefitsCard() {
  const benefits = [
    { icon: <Award className="w-4 h-4 text-[#1a365d]" />, title: "Premium Benefits", description: "Full health, dental, and 401(k) matching" },
    { icon: <TrendingUp className="w-4 h-4 text-[#1a365d]" />, title: "Career Growth", description: "Tuition support and training tracks" },
    { icon: <Users className="w-4 h-4 text-[#1a365d]" />, title: "Great Culture", description: "Collaborative and friendly workspace" },
    { icon: <Shield className="w-4 h-4 text-[#1a365d]" />, title: "Job Security", description: "Partnered with national networks" },
    { icon: <Sparkles className="w-4 h-4 text-[#1a365d]" />, title: "Flexibility", description: "Scheduling choices built around your life" },
    { icon: <GraduationCap className="w-4 h-4 text-[#1a365d]" />, title: "Oncoming Training", description: "Access to continuous education resources" }
  ];

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="px-4 py-3.5 border-b border-gray-200 bg-gradient-to-br from-[#1a365d] to-[#2a4a7f]">
        <h2 className="text-sm font-bold text-white mb-0.5">Why Work With Us?</h2>
        <p className="text-white/80 text-[11px]">Discover the unique rewards of our healthcare network</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-3 bg-gray-50/50">
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-2.5 shadow-sm flex items-start gap-2.5">
              <div className="flex-shrink-0 w-6 h-6 bg-[#f0f6fb] rounded flex items-center justify-center">{benefit.icon}</div>
              <div className="min-w-0">
                <h3 className="font-semibold text-xs text-gray-900 mb-0.5 truncate">{benefit.title}</h3>
                <p className="text-[11px] text-gray-500 leading-tight line-clamp-2">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-[#f0f6fb] to-[#e6f2ff] rounded-lg p-3 border border-blue-100">
          <h3 className="font-bold text-xs text-[#1a365d] mb-1">Ready to Get Started?</h3>
          <p className="text-[11px] text-gray-700 mb-2 leading-normal">Explore active openings and step forward into your ideal professional environment.</p>
          <div className="flex items-center gap-1 text-[11px] text-[#1a365d]">
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="font-semibold">Select an available job to check specs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function CareersPage() {
  const jobsSectionRef = useRef<HTMLDivElement>(null);
  const scrollToJobs = () => {
    const yOffset = -80;
    const element = jobsSectionRef.current;
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const [savedJobs, setSavedJobs] = useState<Set<number>>(new Set());
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Filter state
  const [keyword, setKeyword] = useState("");
  const [appliedKeyword, setAppliedKeyword] = useState("");
  const [jobCategories, setJobCategories] = useState<string[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<string[]>([]);
  const [remoteTypes, setRemoteTypes] = useState<string[]>([]);
 const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

const [currentPage, setCurrentPage] = useState(1);

const handleRemoteTypesChange = (values: string[]) => {
  setRemoteTypes(values);
  setCurrentPage(1);
};

const handleJobCategoriesChange = (values: string[]) => {
  setJobCategories(values);
  setCurrentPage(1);
};

const handleEmploymentTypesChange = (values: string[]) => {
  setEmploymentTypes(values);
  setCurrentPage(1);
};

const handleLocationsChange = (values: string[]) => {
  setSelectedLocations(values);
  setCurrentPage(1);
};

  const filteredJobs = ALL_JOBS.filter((job) => {
    const kw = appliedKeyword.toLowerCase();
    const matchesKeyword = !kw || job.title.toLowerCase().includes(kw) || job.location.toLowerCase().includes(kw) || job.id.toString().includes(kw);
    
    const matchesRemote = remoteTypes.length === 0 || remoteTypes.includes("All Types") || remoteTypes.includes(job.setting);
    
    const matchesCategory = jobCategories.length === 0 || jobCategories.some(cat => 
      cat === "All Categories" || job.category.toLowerCase() === cat.toLowerCase() || job.title.toLowerCase().includes(cat.toLowerCase())
    );
    
    const matchesEmployment = employmentTypes.length === 0 || employmentTypes.includes("All Types") || employmentTypes.includes(job.jobType);
    
    const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes("All Locations") || selectedLocations.includes(job.location);
    
    return matchesKeyword && matchesRemote && matchesCategory && matchesEmployment && matchesLocation;
  });

  const JOBS_PER_PAGE = 10;
  const totalJobs = filteredJobs.length;
  const totalPages = Math.max(1, Math.ceil(totalJobs / JOBS_PER_PAGE));
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const endIndex = Math.min(startIndex + JOBS_PER_PAGE, totalJobs);
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const toggleSave = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSavedJobs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const activeFilters: { id: string; label: string; reset: () => void }[] = [];
  if (appliedKeyword) activeFilters.push({ id: "keyword", label: appliedKeyword, reset: () => { setKeyword(""); setAppliedKeyword(""); } });
  if (remoteTypes.length > 0) activeFilters.push({ id: "remoteTypes", label: remoteTypes.join(", "), reset: () => setRemoteTypes([]) });
  if (jobCategories.length > 0) activeFilters.push({ id: "jobCategories", label: jobCategories.join(", "), reset: () => setJobCategories([]) });
  if (employmentTypes.length > 0) activeFilters.push({ id: "employmentTypes", label: employmentTypes.join(", "), reset: () => setEmploymentTypes([]) });
  if (selectedLocations.length > 0) activeFilters.push({ id: "selectedLocations", label: selectedLocations.join(", "), reset: () => setSelectedLocations([]) });

  function clearFilters() {
    setRemoteTypes([]);
    setJobCategories([]);
    setEmploymentTypes([]);
    setSelectedLocations([]);
    setKeyword("");
    setAppliedKeyword("");
  }

  return (
    <div className="w-full bg-white min-h-screen">
      
      <HeroSection onScroll={scrollToJobs} />
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-6">
          Explore Career Opportunities
        </h1>

        {/* Filters Interface Container */}
        <div className="mb-6 space-y-4">
          <div className="flex max-w-[650px] gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search for jobs or keywords"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setAppliedKeyword(keyword)}
                className="w-full h-10 pl-9 pr-3 text-sm bg-[#f3f4f6] border border-transparent rounded text-gray-800 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 transition"
              />
            </div>
            <button
          onClick={() => {
  setAppliedKeyword(keyword);
  setCurrentPage(1);
}}
              className="h-10 px-6 bg-[#164e9a] hover:bg-[#1a365d] text-white font-semibold text-sm rounded transition tracking-wide"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
           <MultiSelectFilter
  label="Location"
  values={selectedLocations}
  options={LOCATION_OPTIONS.filter(x => x !== "All Locations")}
  onChange={handleLocationsChange}
/>

<MultiSelectFilter
  label="Remote Type"
  values={remoteTypes}
  options={REMOTE_TYPES}
  onChange={handleRemoteTypesChange}
/>

<MultiSelectFilter
  label="Job Category"
  values={jobCategories}
  options={JOB_CATEGORIES.filter(x => x !== "All Categories")}
  onChange={handleJobCategoriesChange}
/>

<MultiSelectFilter
  label="Employment Type"
  values={employmentTypes}
  options={EMPLOYMENT_TYPES_LIST.filter(x => x !== "All Types")}
  onChange={handleEmploymentTypesChange}
/>
          </div>

          {activeFilters.length > 0 && (
            <div className="pt-1 flex flex-col items-start gap-2.5">
              <div className="flex flex-wrap items-center gap-2">
                {activeFilters.map((filter) => (
                  <div key={filter.id} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm text-black bg-white border border-gray-300 rounded transition max-w-[340px]">
                    <span className="truncate">{filter.label}</span>
                    <button onClick={filter.reset} className="text-gray-400 hover:text-black transition flex-shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={clearFilters} className="text-sm font-semibold text-[#0066cc] hover:underline underline-offset-2 ml-1">
                Clear All ({activeFilters.length})
              </button>
            </div>
          )}
        </div>

        <p className="text-gray-500 text-sm mb-4">
          Displaying <strong className="text-[#1a365d]">{totalJobs > 0 ? startIndex + 1 : 0}</strong>–<strong className="text-[#1a365d]">{endIndex}</strong> of{" "}
          <strong className="text-[#1a365d]">{totalJobs.toLocaleString()}</strong> matching jobs
        </p>

        <div ref={jobsSectionRef} className="flex gap-5 items-start w-full">

          {/* Left Job Cards Column */}
          <div className={`min-w-0 transition-all duration-200 ${selectedJob ? "w-[320px] flex-shrink-0" : "flex-1"}`}>
            <div className="space-y-3">
              {paginatedJobs.map((job) => {
                const isSelected = selectedJob?.id === job.id;
                return (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(isSelected ? null : job)}
                    className={`flex items-start gap-3 p-3.5 rounded-lg border transition cursor-pointer relative ${
                      isSelected
                        ? "border-[#1a365d] bg-[#f0f6fb] ring-1 ring-[#1a365d]/20"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <button
                      onClick={(e) => toggleSave(e, job.id)}
                      aria-label={savedJobs.has(job.id) ? "Unsave job" : "Save job"}
                      className="text-gray-300 hover:text-red-500 flex-shrink-0 mt-0.5"
                    >
                      <Heart
                        className="w-3.5 h-3.5"
                        fill={savedJobs.has(job.id) ? "#ef4444" : "none"}
                        stroke={savedJobs.has(job.id) ? "#ef4444" : "currentColor"}
                      />
                    </button>

                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold leading-snug text-[#1a365d] break-words ${selectedJob ? "text-sm pr-2" : "text-base pr-24"}`}>
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1 truncate">
                          <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          {job.jobType}
                        </span>
                        {!selectedJob && (
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3 h-3 text-gray-400 flex-shrink-0" />
                            {job.setting}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span>Posted {job.datePosted}</span>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-mono">
                          <span className="text-black font-semibold">ID: #{job.id}</span>
                          <span>•</span>
                          <span className="truncate max-w-[120px]">{job.license}</span>
                        </div>
                      </div>
                    </div>

                    {!selectedJob && job.partner && (
                      <div className="absolute bottom-3 right-4 flex items-center gap-2">
                        <PartnerBadge name={job.partner} />
                      </div>
                    )}
                  </div>
                );
              })}
              
              {filteredJobs.length === 0 && (
                <div className="text-center py-12 text-gray-500 border border-dashed border-gray-200 rounded-lg">
                  No jobs found matching your criteria.
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-1.5">
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded text-sm transition ${
                        currentPage === page ? "bg-[#1a365d] text-white" : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Benefits / Detailed View Component */}
          <div
            className={`sticky top-[80px] border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden transition-all duration-200 ${
              selectedJob ? "flex-1 min-w-0" : "w-[360px] flex-shrink-0"
            }`}
            style={{ maxHeight: "calc(100vh - 120px)" }}
          >
            {selectedJob ? (
              <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
            ) : (
              <BenefitsCard />
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
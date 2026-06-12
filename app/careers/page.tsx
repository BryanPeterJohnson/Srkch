"use client";

import { useState } from "react";
import { Heart, ArrowRight, Target } from "lucide-react";
import { useEffect } from "react";



const ALL_JOBS = [
    { title: "Physical Therapy Assistant, Home Health", location: "Keene, New Hampshire", partner: null },
    { title: "Physical Therapy Assistant, Home Health", location: "Lebanon, New Hampshire", partner: null },
    { title: "Certified Nursing Assistant (CNA)", location: "Hadley, Massachusetts", partner: null },
    { title: "Certified Nursing Assistant (CNA)", location: "Adams, Massachusetts", partner: null },
    { title: "Registered Nurse, Hospice", location: "Abington, Pennsylvania", partner: "Jefferson Health" },
    { title: "Registered Nurse, Hospice", location: "Levittown, Pennsylvania", partner: "Jefferson Health" },
    { title: "Osceola County - Home Health Aide - Home Care", location: "Celebration, Florida", partner: null },
    { title: "Registered Nurse, Hospice", location: "Horsham, Pennsylvania", partner: "Jefferson Health" },
    { title: "HHA, Home Health Aide - Home Care", location: "Orlando, Florida", partner: null },
    { title: "Physical Therapist- Home Health", location: "Richmond, Virginia", partner: null },
    { title: "Certified Nurse Aide - CNA - Home Care - Private Duty", location: "Orlando, Florida", partner: null },
    { title: "Brevard County Home Health Aide - Home Care - Private Duty", location: "Melbourne, Florida", partner: null },
    { title: "RHB Template, Job Coach, Habilitation", location: "Pennsauken, New Jersey", partner: null },
    { title: "Special Needs Caregiver (DSP)", location: "Pottstown, Pennsylvania", partner: null },
    { title: "Direct Support Professional (DSP)", location: "Media, Pennsylvania", partner: null },
    { title: "Companion / Direct Support Professional", location: "West Chester, Pennsylvania", partner: null },
    { title: "Direct Support Professional", location: "Dover, Delaware", partner: null },
    { title: "Direct Support Professional- DSP", location: "Bethany Beach, Delaware", partner: null },
    { title: "Direct Support Professional - Adult 1:1 Home Care", location: "Allentown, Pennsylvania", partner: null },
    { title: "Special Needs Caregiver (DSP) - 1:1 Part-time", location: "Bangor, Pennsylvania", partner: null },

];



const JOB_CATEGORIES = [
    "Job Category",
    "Nursing",
    "Therapy",
    "Home Health Aide",
    "Direct Support",
    "Administrative",
];

const EMPLOYMENT_TYPES = [
    "Employment Type",
    "Full-Time",
    "Part-Time",
    "Per Diem",
    "Contract",
];

const WORKING_STYLES = [
    "Working Style",
    "In-Person",
    "Remote",
    "Hybrid",
];

const BRANDS = [
    "Brands",
    "SRKCH Home Health",
    "SRKCH Hospice",
    "SRKCH Pediatrics",
];

function SrkchBadge() {
    return (
        <div className="flex items-center gap-1 border border-gray-300 rounded px-2 py-0.5 bg-white">
            <div className="w-4 h-4 bg-[#1a365d] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-[5px]">SR</span>
            </div>
            <span className="text-[11px] text-gray-700 font-semibold">
                SRKCH
            </span>
        </div>
    );
}

function PartnerBadge({ name }: { name: string }) {
    return (
        <div className="flex items-center gap-1 border border-gray-300 rounded px-2 py-0.5 bg-white">
            <div className="w-4 h-4 bg-blue-700 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-[4px]">JH</span>
            </div>
            <span className="text-[11px] text-gray-700 font-semibold">
                {name}
            </span>
        </div>
    );
}

export default function CareersPage() {
    const [savedJobs, setSavedJobs] = useState<Set<number>>(new Set());
    const [currentPage, setCurrentPage] = useState(1);

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [radius, setRadius] = useState(25);
    const [jobCategory, setJobCategory] = useState("Job Category");
    const [employmentType, setEmploymentType] = useState("Employment Type");
    const [workingStyle, setWorkingStyle] = useState("Working Style");
    const [brand, setBrand] = useState("Brands");

    // ✅ RESET PAGE ON FILTER CHANGE
    useEffect(() => {
        setCurrentPage(1);
    }, [keyword, location, jobCategory, employmentType, workingStyle, brand]);

    // ✅ FILTER JOBS
    const filteredJobs = ALL_JOBS.filter((job) => {
        const matchesKeyword =
            !keyword ||
            job.title.toLowerCase().includes(keyword.toLowerCase());

        const matchesLocation =
            !location ||
            job.location.toLowerCase().includes(location.toLowerCase());

        const matchesCategory =
            jobCategory === "Job Category" ||
            job.title.toLowerCase().includes(jobCategory.toLowerCase());

        const matchesEmployment =
            employmentType === "Employment Type" ||
            job.title.toLowerCase().includes(employmentType.toLowerCase());

        const matchesBrand =
            brand === "Brands" ||
            (job.partner ?? "").toLowerCase().includes(brand.toLowerCase());

        return (
            matchesKeyword &&
            matchesLocation &&
            matchesCategory &&
            matchesEmployment &&
            matchesBrand
        );
    });

    // ✅ PAGINATION
    const JOBS_PER_PAGE = 10;

    const totalJobs = filteredJobs.length;
    const totalPages = Math.max(1, Math.ceil(totalJobs / JOBS_PER_PAGE));

    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    const endIndex = Math.min(startIndex + JOBS_PER_PAGE, totalJobs);

    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    // ✅ FIXED SAVE FUNCTION
    const toggleSave = (globalIndex: number) => {
        setSavedJobs((prev) => {
            const next = new Set(prev);

            if (next.has(globalIndex)) {
                next.delete(globalIndex);
            } else {
                next.add(globalIndex);
            }

            return next;
        });
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="w-full bg-white min-h-screen pt-[55px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">

                <h1 className="text-4xl md:text-5xl ml-5 font-bold text-[#1a365d] mb-1">
                    Your Calling is Calling
                </h1>

                <p className="text-gray-600 text-sm mb-6 ml-8">
                    Displaying{" "}
                    <strong className="text-[#1a365d]">{startIndex + 1}</strong> to{" "}
                    <strong className="text-[#1a365d]">{endIndex}</strong> of{" "}
                    <strong className="text-[#1a365d]">
                        {totalJobs.toLocaleString()}
                    </strong>
                    matching jobs
                </p>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Jobs */}
                    <div className="flex-1 flex mr-10 justify-end flex-col">

                        {/* Job Cards */}
                        <div className="ml-auto space-y-2">
                            {paginatedJobs.map((job, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 w-[700px] h-[95px] px-5 bg-white hover:bg-gray-50 rounded-lg transition border border-gray-200"
                                >
                                    <button
                                        onClick={() => toggleSave(startIndex + i)}
                                        className="text-gray-400 hover:text-red-500"
                                    >
                                        <Heart
                                            className="w-6 h-6"
                                            fill={savedJobs.has(startIndex + i) ? "#ef4444" : "none"}
                                        />
                                    </button>

                                    <div className="flex-1">
                                        <h3 className="font-semibold text-base text-black">
                                            {job.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {job.location}
                                        </p>
                                    </div>

                                    <div className="hidden sm:flex items-center gap-2">
                                        {job.partner && (
                                            <PartnerBadge name={job.partner} />
                                        )}
                                        <SrkchBadge />
                                    </div>

                                    <button className="text-blue-600 hover:text-red-600">
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Pagination (FIXED POSITION) */}
                        <div className="flex justify-center mt-8 w-full">
                            <div className="flex items-center gap-2">
                                {pageNumbers.map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)} className={`w-9 h-9 rounded text-sm transition ${currentPage === page
                                            ? "bg-[#1a365d] text-white"
                                            : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}


                                {/* Next button */}
                                <button
                                    onClick={() =>
                                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                                    }
                                    className="w-9 h-9 rounded hover:bg-gray-100 text-gray-700"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>

                    </div>


                    {/* ── Filter Sidebar ── */}
                    <div className="w-full lg:w-[360px] flex-shrink-0">
                        <div className="bg-[#dce8f0] rounded p-5">
                            <h2 className="font-bold text-gray-900 mb-4 text-lg">
                                Filter jobs
                            </h2>

                            <div className="space-y-4">

                                {/* Keywords */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">
                                        Keywords
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Search job title, skill, or keyword"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        className="w-full h-9 px-3 text-sm bg-white border border-gray-300 rounded text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a365d]"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">
                                        Location
                                    </label>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Type any location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="w-full h-9 pr-9 px-3 text-sm bg-white border border-gray-300 rounded text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1a365d]"
                                        />
                                        <Target className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Radius */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">
                                        Radius in Miles
                                    </label>

                                    <input
                                        type="number"
                                        value={radius}
                                        onChange={(e) => setRadius(Number(e.target.value))}
                                        className="w-full h-9 px-3 text-sm bg-white border border-gray-300 rounded text-gray-800 mb-2 focus:outline-none focus:ring-1 focus:ring-[#1a365d]"
                                    />

                                    <input
                                        type="range"
                                        min={5}
                                        max={100}
                                        step={5}
                                        value={radius}
                                        onChange={(e) => setRadius(Number(e.target.value))}
                                        className="w-full h-1.5 cursor-pointer accent-[#1a365d]"
                                    />
                                </div>

                                {/* Job Category */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">
                                        Job Category
                                    </label>
                                    <select
                                        value={jobCategory}
                                        onChange={(e) => setJobCategory(e.target.value)}
                                        className="w-full h-9 px-3 text-sm bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#1a365d]"
                                    >
                                        {JOB_CATEGORIES.map((c) => (
                                            <option key={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Employment Type */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">
                                        Employment Type
                                    </label>
                                    <select
                                        value={employmentType}
                                        onChange={(e) => setEmploymentType(e.target.value)}
                                        className="w-full h-9 px-3 text-sm bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#1a365d]"
                                    >
                                        {EMPLOYMENT_TYPES.map((c) => (
                                            <option key={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Working Style */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">
                                        Working Style
                                    </label>
                                    <select
                                        value={workingStyle}
                                        onChange={(e) => setWorkingStyle(e.target.value)}
                                        className="w-full h-9 px-3 text-sm bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#1a365d]"
                                    >
                                        {WORKING_STYLES.map((c) => (
                                            <option key={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Brands */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-1">
                                        Brands
                                    </label>
                                    <select
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        className="w-full h-9 px-3 text-sm bg-white border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#1a365d]"
                                    >
                                        {BRANDS.map((c) => (
                                            <option key={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Search Button */}
                                <button
                                    onClick={() => setCurrentPage(1)}
                                    className="w-full h-10 bg-[#1a365d] hover:bg-[rgb(0,91,142)] text-white font-semibold text-sm tracking-wide rounded"
                                >
                                    Search
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
"use client";

import Link from "next/link";
import { ChevronDown, Search, X, Menu } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const NAV_ITEMS = [
    {
        label: "Our Services",
        links: [
            "Personal Care & Daily Living Assistance",
            "Companion & Social Engagement Care",
            "Memory Care & Safety Monitoring",
            "Household & Nutrition Support",
            "Family Respite & Caregiver Support",
            "Disability Support Services",
            "Recovery & Post-Hospital Support",
            "Medication Reminders & Wellness Checks",
            "Transportation & Appointment Assistance",
            "Pediatric & Child Care Services",
        ],
    },
    {
        label: "Find Care",
        links: ["Search by Location", "Care Assessment", "Insurance & Billing", "Request a Consultation"],
    },
    {
        label: "Careers",
        links: ["Browse Jobs", "Why SRK", "Benefits & Culture", "Refer a Friend"],
    },
    {
        label: "Employees",
        links: ["Employee Portal", "Training & Education", "HR Resources", "Time & Attendance"],
    },
    {
        label: "Work with Us",
        links: ["Referral Partners", "Healthcare Facilities", "Payers & Insurers", "Become a Partner"],
    },
    {
        label: "About SRK",
        links: ["Our Story", "Leadership", "Locations", "News & Press", "Contact Us"],
    },
];

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Focus search input when overlay opens
    useEffect(() => {
        if (searchOpen) {
            setTimeout(() => searchInputRef.current?.focus(), 50);
        }
    }, [searchOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            {/* ── Search overlay ── */}
            <div
                className={`fixed top-0 left-0 right-0 z-[200] bg-white border-b shadow-sm transition-all duration-300 ${searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto h-[55px] px-8 flex items-center gap-6">
                    <Link href="/" onClick={() => setSearchOpen(false)}>
                        <Image src="/images/logo.png" alt="SRK Care At Home" width={160} height={46} priority />
                    </Link>

                    <div className="flex-1">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            className="w-[100px] h-[48px] px-4 border border-gray-300 rounded-md text-base outline-none focus:border-blue-600"
                        />
                    </div>

                    <button
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-700"
                        aria-label="Close search"
                    >
                        <X size={22} />
                        Close
                    </button>
                </div>
            </div>

            {/* ── Mobile menu overlay ── */}
            <div
                className={`fixed inset-0 z-[150] bg-white overflow-y-auto transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 h-[80px] border-b border-gray-200">
                    <Link href="/" onClick={() => setMobileOpen(false)}>
                        <Image src="/images/logo.png" alt="SRK Care At Home" width={160} height={46} priority />
                    </Link>
                    <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                        <X size={26} className="text-gray-700" />
                    </button>
                </div>

                <nav className="px-6 py-4 divide-y divide-gray-100">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label}>
                            <button
                                className="w-full flex items-center justify-between py-4 text-[15px] font-semibold text-gray-800"
                                onClick={() =>
                                    setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                                }
                            >
                                {item.label}
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {mobileExpanded === item.label && (
                                <ul className="pb-3 pl-3 space-y-2">
                                    {item.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="block py-1.5 text-[14px] text-gray-600 hover:text-blue-700"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* ── Main header ── */}
            <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-[100] shadow-sm">                   <div className="max-w-[1400px] mx-auto px-8 h-[46px] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="SRK Care At Home"
                        width={220}
                        height={70}
                        priority
                        className="h-14 w-auto"
                    />
                </Link>

                {/* Desktop nav */}
                {/* Desktop nav */}
                <nav ref={dropdownRef} className="hidden lg:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <div key={item.label} className="relative">

                            {/* Careers = Direct Link */}
                            {item.label === "Careers" ? (
                                <Link
                                    href="/careers"
                                    className="flex items-center gap-1 text-[13px] font-medium text-gray-800 hover:text-blue-700 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <>
                                    <button
                                        className={`flex items-center gap-1 text-[13px] font-medium hover:text-blue-700 transition-colors ${openDropdown === item.label
                                            ? "text-blue-700"
                                            : "text-gray-800"
                                            }`}
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === item.label ? null : item.label
                                            )
                                        }
                                        aria-expanded={openDropdown === item.label}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-200 ${openDropdown === item.label
                                                ? "rotate-180"
                                                : ""
                                                }`}
                                        />
                                    </button>

                                    {openDropdown === item.label && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-[110]">
                                            <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45" />

                                            {item.links.map((link) => (
                                                <Link
                                                    key={link}
                                                    href="#"
                                                    onClick={() => setOpenDropdown(null)}
                                                    className="block w-full px-4 py-3 text-[13px] text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 last:border-b-0"
                                                >
                                                    {link}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}

                    <button
                        onClick={() => setSearchOpen(true)}
                        aria-label="Open search"
                        className="p-1.5 text-gray-600 hover:text-blue-700 transition-colors"
                    >
                        <Search size={18} />
                    </button>
                </nav>

                {/* Mobile: search + hamburger */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={() => setSearchOpen(true)}
                        aria-label="Open search"
                        className="p-1.5 text-gray-600 hover:text-blue-700"
                    >
                        <Search size={20} />
                    </button>
                    <button
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                        className="p-1.5 text-gray-700 hover:text-blue-700"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
            </header>
        </>
    );
}
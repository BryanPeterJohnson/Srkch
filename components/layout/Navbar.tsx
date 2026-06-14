"use client";

import Link from "next/link";
import { ChevronDown, Search, X, Menu } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// ─── COLOR TOKENS ─────────────────────────────────────────────────────────────
// Primary Navy  #003A5C
// Mid Blue      #005B8E
// Accent Teal   #00A693
// ─────────────────────────────────────────────────────────────────────────────

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
   href: "/careers",
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
    href: "/about",
  },
];

export default function Header() {
  const [searchOpen, setSearchOpen]       = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef   = useRef<HTMLDivElement>(null);
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
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
  }, [searchOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Search overlay ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-[200] bg-white border-b shadow-sm transition-all duration-300 ${
          searchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-[64px] px-8 flex items-center gap-6">
          <Link href="/" onClick={() => setSearchOpen(false)}>
            <Image src="/images/logo1.png" alt="SRK Care At Home" width={160} height={58} priority />
          </Link>

          <div className="flex-1">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="w-full h-[44px] px-4 border border-gray-300 rounded-md text-base outline-none"
              style={{ borderColor: "#D1D5DB" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#005B8E")}
              onBlur={(e)  => (e.currentTarget.style.borderColor = "#D1D5DB")}
            />
          </div>

          <button
            onClick={() => setSearchOpen(false)}
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#003A5C" }}
            aria-label="Close search"
          >
            <X size={20} />
            Close
          </button>
        </div>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-[150] bg-white overflow-y-auto transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile header bar */}
        <div
          className="flex items-center justify-between px-6 h-[72px] border-b"
          style={{ borderColor: "#E5E7EB" }}
        >
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image src="/images/logo1.png" alt="SRK Care At Home" width={160} height={46} priority />
          </Link>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={26} style={{ color: "#003A5C" }} />
          </button>
        </div>

        <nav className="px-6 py-4 divide-y" style={{ borderColor: "#F3F4F6" }}>
          {/* Contact CTA */}
          <div className="pb-4">
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 rounded-md font-semibold text-white text-[15px] transition-opacity hover:opacity-90"
              style={{ background: "#003A5C" }}
            >
              Contact Us
            </Link>
          </div>

          {/* Nav items */}
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <button
                className="w-full flex items-center justify-between py-4 text-[15px] font-semibold"
                style={{ color: "black" }}
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                <ChevronDown
                  size={16}
                  style={{ color: "#005B8E", transition: "transform 0.2s", transform: mobileExpanded === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {mobileExpanded === item.label && (
                <ul className="pb-3 pl-3 space-y-1">
                  {item.links?.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="block py-2 text-[14px] transition-colors text-black"
                        style={{ color: "black" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#005B8E")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
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
      <header
        className="w-full bg-white fixed top-0 left-0 right-0 z-[100] shadow-sm"
        style={{ borderBottom: "1px solid #E5E7EB" }}
      >
        <div className="max-w-[1400px] mx-auto px-8 h-[64px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo1.png"
              alt="SRK Care At Home"
              width={220}
              height={90}
              priority
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
  <div key={item.label} className="relative">

{"href" in item && item.href ? (
  <Link href={item.href}
        className="text-[13px] font-medium transition-colors text-black"
        style={{ color: "black" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#005B8E")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
      >
        {item.label}
      </Link>
    ) : (
      <>
        <button
          className="flex items-center gap-1 text-[13px] font-medium"
          style={{ color: openDropdown === item.label ? "#005B8E" : "black" }}
          onClick={() =>
            setOpenDropdown(openDropdown === item.label ? null : item.label)
          }
        >
          {item.label}
          <ChevronDown size={13} />
        </button>

        {openDropdown === item.label && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-lg shadow-xl py-2 z-[110]">
            {item.links?.map((link) => (
              <Link
                key={link}
                href="#"
                className="block px-4 py-2 text-[13px] text-black"
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

            {/* Contact Us CTA */}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-md text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#003A5C" }}
            >
              Contact Us
            </Link>

            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="p-1.5 transition-colors"
              style={{ color: "black" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#005B8E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
            >
              <Search size={18} />
            </button>
          </nav>

          {/* Mobile: search + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="p-1.5"
              style={{ color: "black" }}
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-1.5"
              style={{ color: "#003A5C" }}
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>
    </>
  );
}
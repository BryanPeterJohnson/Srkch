"use client";

import { ChevronDown, Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const NAV_ITEMS = [
  {
    label: "Our Services",
    href: "/services",
    links: [
      { id: "1", label: "Personal Care & Daily Living Assistance", slug: "/services/1" },
      { id: "2", label: "Companion & Social Engagement Care", slug: "/services/2" },
      { id: "3", label: "Memory Care & Safety Monitoring", slug: "/services/3" },
      { id: "4", label: "Household & Nutrition Support", slug: "/services/4" },
      { id: "5", label: "Family Respite & Caregiver Support", slug: "/services/5" },
      { id: "6", label: "Disability Support Services", slug: "/services/6" },
      { id: "7", label: "Recovery & Post-Hospital Support", slug: "/services/7" },
      { id: "8", label: "Medication Reminders & Wellness Checks", slug: "/services/8" },
      { id: "9", label: "Transportation & Appointment Assistance", slug: "/services/9" },
      { id: "10", label: "Pediatric & Child Care Services", slug: "/services/10" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    links: [
      { id: "history", label: "History", slug: "/about/history" },
      { id: "mission", label: "Mission", slug: "/about#mission" },
      { id: "diversity", label: "Diversity", slug: "/about/diversity" },
    ]
  },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[150] bg-white overflow-y-auto transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100">
          <a href="/" onClick={() => setMobileOpen(false)}>
            <Image src="/images/logo2.png" alt="SRK Care At Home" width={160} height={46} priority className="w-auto h-11" />
          </a>
          <button onClick={() => setMobileOpen(false)} className="p-1 cursor-pointer">
            <X size={26} className="text-[#005B8E]" />
          </button>
        </div>

        <nav className="px-6 py-4 divide-y divide-gray-100">
          <a href="tel:+14439859368" className="flex items-center gap-2 py-4 text-[#005B8E] font-bold text-[16px]">
            <Phone size={18} /> +1 (443) 985-9368
          </a>

          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="py-2">
              {"links" in item ? (
                <>
                  <div className="w-full flex items-center justify-between py-1">
                    <a
                      href={item.href || "#"}
                      className="text-[15px] font-semibold text-[#005B8E] hover:text-[#005B8E] py-2 flex-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                    <button
                      className="p-2 text-[#005B8E] focus:outline-none cursor-pointer"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      <ChevronDown
                        size={18}
                        className="transition-transform duration-200"
                        style={{ transform: mobileExpanded === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                  </div>

                  {mobileExpanded === item.label && (
                    <ul className="pb-3 pl-3 mt-1 space-y-1">
                      {item.links?.map((link) => (
                        <li key={link.label} className="border-l-2 border-slate-100 pl-3">
                          <a
                            href={link.slug}
                            className="block py-2 text-[14px] font-medium text-slate-600 hover:text-[#005B8E] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href || "#"}
                  className="block py-3 text-[15px] font-semibold text-[#005B8E] hover:text-[#005B8E] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          <div className="pt-6">
            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3.5 rounded-xl font-bold text-white text-[15px] bg-[#005B8E] hover:bg-[#004770] transition-colors shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>

      <header className="w-full bg-white fixed top-0 left-0 right-0 z-[100] shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-8 2xl:px-12 h-[72px] 2xl:h-[84px] flex items-center justify-between">
          <a href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo2.png"
              alt="SRK Care At Home"
              width={220}
              height={170}
              priority
              className="h-20 2xl:h-24 w-auto"
            />
          </a>

          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-8 2xl:gap-10">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group/nav">
                {"links" in item ? (
                  <div className="flex items-center gap-0.5 py-4">
                    <a
                      href={item.href || "#"}
                      className="relative text-[14px] 2xl:text-[15px] font-semibold text-[#005B8E] transition-colors cursor-pointer focus:outline-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#005B8E] after:transition-all after:duration-300 group-hover/nav:after:w-full"
                      style={{ color: openDropdown === item.label ? "#005B8E" : "" }}
                    >
                      {item.label}
                    </a>

                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="p-1 text-[#005B8E] transition-colors focus:outline-none flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform duration-200 ${openDropdown === item.label ? "rotate(180deg)" : ""}`}
                      />
                    </button>

                    {openDropdown === item.label && (
                      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white rounded-xl shadow-xl py-3 border border-slate-100 z-[110] flex flex-col gap-0.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.links?.map((link) => (
                          <a
                            key={link.label}
                            href={link.slug}
                            className="px-4 py-2.5 text-[13.5px] font-medium text-slate-700 hover:bg-slate-50 hover:text-[#005B8E] transition-all block leading-snug"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="relative text-[14px] 2xl:text-[15px] font-semibold text-[#005B8E] transition-colors block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#005B8E] after:transition-all after:duration-300 group-hover/nav:after:w-full"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            <a
              href="/contact"
              className="relative text-[14px] 2xl:text-[15px] font-bold text-[#005B8E] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#005B8E] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact Us
            </a>

            <a
              href="tel:+14439859368"
              className="inline-flex items-center gap-2 px-5 py-2.5 2xl:px-6 2xl:py-3 rounded-xl text-[14px] 2xl:text-[15px] font-bold text-white bg-[#005B8E] hover:bg-[#004770] transition-colors shadow-sm"
            >
              <Phone size={18} />
              <span>+1 (443) 985-9368</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={() => setMobileOpen(true)} className="p-2 text-[#005B8E] hover:text-[#005B8E] transition-colors cursor-pointer">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
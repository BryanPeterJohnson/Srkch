"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

/**
 * "Back" bar shown under the header on inner pages only.
 *
 * Main pages (the top-level links in the navbar) never show it. Blog articles
 * are skipped because they already render their own "Back to Hub" bar.
 */
const MAIN_PAGES = new Set(["/", "/home", "/services", "/about", "/careers", "/blog", "/contact"]);

/** Where to go when there is no in-site history to go back to (e.g. opened from a shared link). */
function fallbackFor(pathname: string): string {
  if (pathname.startsWith("/services/")) return "/services";
  if (pathname.startsWith("/about/")) return "/about";
  if (pathname.startsWith("/job-description/") || pathname.startsWith("/apply-job")) return "/careers";
  const parent = pathname.replace(/\/[^/]+\/?$/, "");
  return parent || "/";
}

export default function BackButton({ inline = false }: { inline?: boolean }) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (MAIN_PAGES.has(clean) || clean.startsWith("/blog/")) return null;
  // Service detail pages render <BackButton inline /> inside their hero instead.
  if (!inline && clean.startsWith("/services/")) return null;

  const handleBack = () => {
    let cameFromSite = false;
    try {
      cameFromSite =
        window.history.length > 1 &&
        !!document.referrer &&
        new URL(document.referrer).origin === window.location.origin;
    } catch {
      cameFromSite = false;
    }
    if (cameFromSite) router.back();
    else router.push(fallbackFor(clean));
  };

  const button = (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back to the previous page"
      className={`group ${inline ? "" : "mt-4 2xl:mt-7 "}inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur px-4 py-1.5 text-[13px] font-bold text-[#005B8E] shadow-md transition hover:border-[#005B8E] hover:bg-white cursor-pointer`}
    >
      <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
      Back
    </button>
  );

  // Inline: placed by the page itself (e.g. inside a hero, aligned with its text).
  if (inline) return button;

  // Zero-height wrapper: the button floats over the top-left of the page's hero
  // section instead of pushing the page down. Aligned with the header logo.
  return (
    <div className="relative z-30 h-0">
      <div className="max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 2xl:px-12">
        {button}
      </div>
    </div>
  );
}
import { HeroSlider } from "./components/HeroSlider";
import { ServicesByCategory } from "./components/ServicesByCategory";
import { CareAtHome } from "./components/CareAtHome";
import { GettingStarted } from "./components/Gettingstarted";
import { NewsSection } from "./components/NewsSection";
import MedicaidHero from "./components/MedicaidHero";
import CareManagerCTA from "./components/CareManagerCTA";

export default function HomePage() {
    return (
        <main className="font-display">
            {/* ── Hero Slider ───────────────────────────────────────────────────── */}
            <HeroSlider />

            {/* ── Services by Category ──────────────────────────────────────────── */}
            <ServicesByCategory />

            {/* ── Care at Home ──────────────────────────────────────────────────── */}
            <CareAtHome />

               <MedicaidHero />

            {/* ── Getting Started (5-step process) ────────────────────────────────── */}
            <GettingStarted />

            {/* ── SRK In the News (includes Trust Badges Marquee) ─────────────────── */}
            <NewsSection />

            {/* ── Maryland Medicaid programs ───────────────────────────────────────── */}
         

            {/* ── Care Manager CTA banner ───────────────────────────────────────────── */}
            <CareManagerCTA />
        </main>
    );
}
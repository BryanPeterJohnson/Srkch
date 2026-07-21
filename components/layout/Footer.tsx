import Link from "next/link";

import { Heart, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
const services = [
    { name: "Personal Care", path: "/services/personal-care" },
    { name: "Companion Care", path: "/services/companion-care" },
    { name: "Senior Transportation", path: "/services/senior-transportation" },
    { name: "Respite Care", path: "/services/respite-care" },
    { name: "Meal Preparation", path: "/services/meal-preparation" },
    { name: "Skilled Nursing Care", path: "/services/skilled-nursing" },
    { name: "24-Hour Home Care", path: "/services/24-hour-care" },
];

const socials = [
    {
        icon: FaFacebookF,
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61591856372880",
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/srk-care-at-home/?viewAsMember=true",
    },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
];

export function Footer() {
    return (
        <footer style={{ background: "#003A5C" }}>
            <div className="max-w-[1200px] mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Col 1 */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10">
                                <Heart size={18} fill="white" color="white" />
                            </div>
                            <div className="leading-none">
                                <span className="block text-sm font-bold text-white" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>SRK</span>
                                <span className="block text-xs text-white/70" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Care at Home</span>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                            Compassionate, professional home care services tailored to help your loved ones remain independent in the comfort of their own home.
                        </p>
                        <div className="flex items-center gap-3">
                            {socials.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href === "#" ? undefined : "_blank"}
                                    rel={href === "#" ? undefined : "noopener noreferrer"}
                                    className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 text-white/70 hover:bg-[#00A693] hover:text-white transition-all"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wide" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Quick Links</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "Home", path: "/" },
                                { label: "About Us", path: "/about" },
                                { label: "Services", path: "/services" },
                                { label: "Careers", path: "/careers" },
                                { label: "Contact", path: "/contact" },
                                { label: "Privacy Policy", path: "#" },
                                { label: "Terms & Conditions", path: "#" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.path}
                                        className="text-sm text-white/70 hover:text-[#00A693] transition-colors"
                                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wide" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Our Services</h4>
                        <ul className="space-y-2.5">
                            {services.map((svc) => (
                                <li key={svc.path}>
                                    <Link
                                        href={svc.path}
                                        className="text-sm text-white/70 hover:text-[#00A693] transition-colors"
                                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                                    >
                                        {svc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wide" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-[#00A693] flex-shrink-0 mt-0.5" />
                                <div>
                                    <a href="tel:+14436273806" className="text-sm text-white font-semibold hover:text-[#00A693] transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>(443) 627-3806</a>
                                    <div className="text-xs text-white/60" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Available 24/7</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-[#00A693] flex-shrink-0 mt-0.5" />
                                <a href="mailto:info@srkcah.com" className="text-sm text-white/70 hover:text-[#00A693] transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                                    info@srkcah.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-[#00A693] flex-shrink-0 mt-0.5" />
                                <a
                                    href="https://maps.google.com/?q=8115+Maple+Lawn+Blvd+Suite+350,+Fulton,+MD+20759"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/70 hover:text-[#00A693] transition-colors"
                                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                                >
                                    8115 Maple Lawn Blvd, Suite 350
                                    <br />
                                    Fulton, MD 20759
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-[#00A693] flex-shrink-0 mt-0.5" />
                                <a
                                    href="https://maps.google.com/?q=10451+Mill+Run+Cir+%23400,+Owings+Mills,+MD+21117"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/70 hover:text-[#00A693] transition-colors"
                                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                                >
                                    10451 Mill Run Cir #400
                                    <br />
                                    Owings Mills, MD 21117
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/14436273806"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                                    style={{ background: "#25D366", fontFamily: "'Source Sans 3', sans-serif" }}
                                >
                                    <MessageCircle size={15} />
                                    Chat on WhatsApp
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5 p-3 rounded-lg bg-white/5">
                            <div className="text-xs text-white/70 font-semibold mb-1" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Hours of Operation</div>
                            <div className="text-xs text-white/60" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Mon–Fri: 8:00 AM – 6:00 PM</div>
                            <div className="text-xs text-white/60" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Emergency Care: 24/7</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <span className="text-xs text-white/50" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        © 2025 SRK Care at Home. All Rights Reserved.
                    </span>
                    <a href="#" className="text-xs text-white/50 hover:text-[#00A693] transition-colors" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}
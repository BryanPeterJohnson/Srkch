"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

// ─── Pill Label ──────────────────────────────────────────────────────────────
export function PillLabel({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <span
      className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
      style={{
        background: dark ? "rgba(255,255,255,0.15)" : "#00A693",
        color: "white",
        fontFamily: "'Source Sans 3', sans-serif",
      }}
    >
      {text}
    </span>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
export function SectionHeader({
  pill,
  title,
  subtitle,
  centered = true,
  dark = false,
}: {
  pill?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {pill && <PillLabel text={pill} dark={dark} />}

      <h2
        className={`mt-3 ${dark ? "text-white" : "text-[#1A1A2E]"}`}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 3vw, 40px)",
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 leading-relaxed ${dark ? "text-white/70" : "text-[#6B7280]"
            } ${centered ? "mx-auto" : ""}`}
          style={{
            maxWidth: 600,
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 17,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Primary Button ───────────────────────────────────────────────────────────
export function PrimaryButton({
  to,
  href,
  onClick,
  children,
  icon = true,
}: {
  to?: string;
  href?: string;
  onClick?: (e: any) => void;
  children: ReactNode;
  icon?: boolean;
}) {
 const cls =
  "inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#003A5C] hover:shadow-lg cursor-pointer";
 
  const style = {
    background: "#005B8E",
    fontFamily: "'Source Sans 3', sans-serif",
  };

  // ─── Scroll or custom click action ─────────────────────────────
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls} style={style}>
        {icon && <Heart size={15} fill="white" />}
        {children}
      </button>
    );
  }

  // ─── Internal navigation ───────────────────────────────────────
  if (to) {
    return (
      <Link href={to} className={cls} style={style}>
        {icon && <Heart size={15} fill="white" />}
        {children}
      </Link>
    );
  }

  // ─── External link ─────────────────────────────────────────────
  if (href) {
    return (
      <a href={href} className={cls} style={style}>
        {icon && <Heart size={15} fill="white" />}
        {children}
      </a>
    );
  }

  // ─── Default button ─────────────────────────────────────────────
  return (
    <button type="button" className={cls} style={style}>
      {icon && <Heart size={15} fill="white" />}
      {children}
    </button>
  );
}

// ─── Secondary Button ─────────────────────────────────────────────────────────
export function SecondaryButton({
  to,
  children,
  white = false,
}: {
  to?: string;
  children: React.ReactNode;
  white?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-10 py-3 rounded-md font-bold text-base transition-all duration-200";

  const cls = white
    ? `${base} border-2 border-white text-white hover:bg-white hover:text-[#005B8E]`
    : `${base} border-2 border-[#005B8E] text-[#005B8E] hover:bg-[#005B8E] hover:text-white`;

  if (to) {
    return <Link href={to} className={cls}>{children}</Link>;
  }

  return <button className={cls}>{children}</button>;
}

// ─── Service Card ─────────────────────────────────────────────────────────────
export function ServiceCard({
  icon,
  title,
  description,
  image,
  path,
}: {
  icon: string;
  title: string;
  description: string;
  image: string;
  path: string;
}) {
  return (
    <Link
      href={path}
      className="group bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0px 4px 20px rgba(0, 91, 142, 0.10)",
        borderRadius: 12,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0px 8px 32px rgba(0, 91, 142, 0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0px 4px 20px rgba(0, 91, 142, 0.10)";
      }}
    >
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{icon}</span>
          <h4
            className="text-[#1A1A2E] font-semibold"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 18,
            }}
          >
            {title}
          </h4>
        </div>

        <p
          className="text-[#6B7280] text-sm leading-relaxed flex-1"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          {description}
        </p>

        <div
          className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#005B8E] group-hover:gap-2 transition-all"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          Learn More <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
export function CTABanner() {
  return (
    <section
      className="py-20 px-6 text-center"
      style={{
        background: "#003A5C",
        backgroundImage:
          "radial-gradient(ellipse at 70% 50%, rgba(0,166,147,0.15) 0%, transparent 60%)",
      }}
    >
      <div className="max-w-[700px] mx-auto">
        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 700,
          }}
        >
          Ready to Get the Care You Deserve?
        </h2>

        <p
          className="text-white/70 mb-8 text-lg leading-relaxed"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          Our care coordinators are available to create your personalized plan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryButton href="tel:+18005752273">Call Us Today</PrimaryButton>
          <SecondaryButton to="/contact" white>
            Request a Consultation
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export function StatsBar() {
  const stats = [
    { number: "20+", label: "Years of Trusted Care" },
    { number: "Medicare", label: "& Medicaid Accepted" },
    { number: "100%", label: "Certified Caregivers" },
    { number: "24/7", label: "Care Available" },
  ];

  return (
    <div className="py-8 px-6" style={{ background: "#003A5C" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="text-center py-2">
            <div
              className="text-white mb-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 700,
              }}
            >
              {stat.number}
            </div>
            <div
              className="text-white/70 text-sm"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export function PaymentBanner() {
  return (
    <section className="py-16 px-6 text-center bg-[#00A693]">
      <p
        className="text-white mb-6"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 600,
        }}
      >
        We Accept Medicare, Medicaid Long-Term Care & Private Pay
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/about"
          className="px-7 py-3 rounded-md font-bold text-white border-2 border-white hover:bg-white hover:text-[#00A693] transition-all"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          Learn More
        </Link>

        <Link
          href="/contact"
          className="px-7 py-3 rounded-md font-bold transition-all hover:-translate-y-0.5 bg-white text-[#00A693]"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
export function Breadcrumb({
  items,
}: {
  items: { label: string; path?: string }[];
}) {
  return (
    <nav
      className="flex items-center gap-2 text-sm text-white/60 mb-4"
      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span>/</span>}
          {item.path ? (
            <Link href={item.path} className="hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
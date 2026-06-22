"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES_MAP } from "../articles";
import { Clock, Calendar, ArrowLeft, Bookmark, Sparkles, Shield, Share2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleLayoutPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const articleConfig = ARTICLES_MAP[resolvedParams.slug];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!articleConfig) return;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((window.scrollY / totalScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [articleConfig]);

  if (!articleConfig) {
    notFound();
  }

  const { meta, component: ContentComponent } = articleConfig;

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-800 antialiased selection:bg-[#00A693]/10">
      {/* Sleek Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#00A693] via-[#005B8E] to-[#003A5C] z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }} 
      />
      
      {/* Premium Glass Header */}
      <nav className="border-b border-slate-200/40 py-4 px-6 bg-white/70 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-[#003A5C] flex items-center gap-2 group transition-colors hover:text-[#00A693]">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" /> Back to Hub
          </Link>
          
          <div className="flex items-center gap-5">
            <button 
              onClick={() => setIsSaved(!isSaved)} 
              className="text-slate-400 hover:text-[#00A693] transition-colors p-1"
              aria-label="Save article"
            >
              <Bookmark size={18} fill={isSaved ? "#00A693" : "none"} className={isSaved ? "text-[#00A693]" : "transition-transform active:scale-95"} />
            </button>
            <button 
              className="text-slate-400 hover:text-[#003A5C] transition-colors p-1"
              aria-label="Share article"
            >
              <Share2 size={18} />
            </button>
            <Link href="/get-started" className="text-xs font-bold tracking-wide text-white bg-[#003A5C] hover:bg-[#002B44] px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-[#003A5C]/10">
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Magazine Layout */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-32">
        <header className="max-w-3xl mx-auto text-center md:text-left mb-14">
          <span className="inline-flex items-center gap-1.5 bg-[#00A693]/10 text-[#00A693] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
            <Sparkles size={10} /> {meta.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-serif font-black text-[#003A5C] tracking-tight leading-[1.12] mb-6">
            {meta.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-between items-center border-y border-slate-200/50 py-5 gap-4">
            <div className="flex items-center gap-3.5">
              <img src={meta.author.avatar} alt={meta.author.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-md shadow-slate-100" />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900 tracking-tight leading-none">{meta.author.name}</p>
                <p className="text-xs text-slate-400 mt-1.5 font-medium">{meta.author.role}</p>
              </div>
            </div>
            <div className="flex gap-6 text-xs text-slate-400 font-medium tracking-wide">
              <span className="flex items-center gap-2"><Calendar size={13} className="text-slate-300" /> {meta.date}</span>
              <span className="flex items-center gap-2"><Clock size={13} className="text-slate-300" /> {meta.readTime}</span>
            </div>
          </div>
        </header>

        {/* Cinematic Feature Image Box */}
        <div className="aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/40 border border-slate-200/30 mb-20 bg-slate-100">
          <img src={meta.image} alt={meta.title} className="w-full h-full object-cover scale-[1.005] hover:scale-[1.02] transition-transform duration-1000 ease-out" />
        </div>

        {/* Content Split Area */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">
          
          {/* Main Article Text injected dynamically */}
          <article className="prose prose-slate max-w-none 
            prose-p:text-slate-600/90 prose-p:leading-[1.85] prose-p:text-[17px] prose-p:mb-6
            prose-headings:font-serif prose-headings:text-[#003A5C] prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-strong:text-slate-900 prose-strong:font-bold
            [&_.drop-cap]:first-letter:text-5xl [&_.drop-cap]:first-letter:font-serif [&_.drop-cap]:first-letter:font-bold [&_.drop-cap]:first-letter:text-[#003A5C] [&_.drop-cap]:first-letter:float-left [&_.drop-cap]:first-letter:mr-3 [&_.drop-cap]:first-letter:leading-[0.85] [&_.drop-cap]:first-letter:mt-1">
            <ContentComponent />
          </article>

          {/* Premium Floating Healthcare Context Action Sidebar */}
          <aside className="bg-white border border-slate-200/50 rounded-[24px] p-6 shadow-md shadow-slate-100/60 sticky top-28 space-y-6">
            <div className="flex items-center gap-2 text-[#00A693]">
              <Shield size={16} />
              <span className="text-[11px] font-bold tracking-widest uppercase">Clinical Verification</span>
            </div>
            <div>
              <h3 className="font-serif font-bold text-[#003A5C] text-lg mb-2">SRK Healthcare Hub</h3>
              <p className="text-slate-500 text-xs leading-[1.6]">
                Do you or your loved one require professional home nursing or dedicated clinical assistance? Connect with our verified medical specialists today.
              </p>
            </div>
            <hr className="border-slate-100" />
            <div className="space-y-3">
              <Link href="/get-started" className="block text-center bg-[#00A693] hover:bg-[#009281] text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-sm shadow-[#00A693]/10">
                Schedule Care Assessment
              </Link>
              <Link href="/contact" className="block text-center border border-slate-200 hover:bg-slate-50 text-[#003A5C] font-bold text-xs py-3.5 rounded-xl transition-all">
                Contact Medical Team
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
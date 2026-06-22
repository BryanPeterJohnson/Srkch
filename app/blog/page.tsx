"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

// 1. Core Data Architecture matching active healthcare routes
const ALL_ARTICLES = [
  {
    id: "1",
    slug: "geriatric-fall-prevention-checklist",
    title: "Geriatric Fall Prevention: A Comprehensive Home Safety Checklist",
    description: "Learn how to audit living environments, improve lighting metrics, and eliminate mobility hazards for aging adults.",
    category: "Home Care",
    date: "June 22, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    slug: "post-stroke-nutritional-recovery",
    title: "Optimizing Post-Stroke Nutritional Plans for Neurological Recovery",
    description: "Explore clinical dietary strategies, dysphagia management, and neuroprotective meal models during rehabilitation.",
    category: "Clinical Guides",
    date: "June 21, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    slug: "managing-alzheimers-sundowning-behaviors",
    title: "De-escalating Alzheimers Sundowning: Behavioral Interventions",
    description: "Practical clinical strategies to manage late-afternoon confusion, anxiety, and restlessness in memory care patients.",
    category: "Wellness",
    date: "June 20, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    slug: "preventing-medical-bedsores-protocol",
    title: "Preventing Medical Bedsores: Advanced Pressure Injury Protocols",
    description: "A professional checklist on dynamic positioning models, microclimate management, and epidermal monitoring for bedbound seniors.",
    category: "Home Care",
    date: "June 19, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    slug: "preventing-family-caregiver-burnout",
    title: "Understanding and Preventing Family Caregiver Burnout",
    description: "Recognize the subtle psychological and physical signs of caregiver exhaustion and how respite care saves families.",
    category: "Wellness",
    date: "June 15, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    slug: "palliative-care-vs-hospice-misconceptions",
    title: "Palliative Care vs. Hospice: Demystifying Common Misconceptions",
    description: "Understand how concurrent palliative integration improves symptom relief parameters alongside active curative options.",
    category: "Clinical Guides",
    date: "June 14, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = ["All", "Home Care", "Wellness", "Clinical Guides"];

export default function BlogMainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered source array based on active inputs
  const filteredArticles = useMemo(() => {
    return ALL_ARTICLES.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-600/10">
      {/* Premium Medical Hero Header */}
      <header className="bg-gradient-to-b from-[#112240] to-[#0f172a] text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-xs block mb-3">
            SRK Healthcare Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
            Medical Insights, Care Wellness & Industry Guides
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Stay informed with clinical protocols and safety setups audited by certified medical specialists.
          </p>

          {/* Clean Functional Search Bar */}
          <div className="max-w-xl mx-auto relative shadow-xl rounded-2xl">
            <input
              type="text"
              placeholder="Search health resources, guides, tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-6 pr-12 py-3.5 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all duration-300 placeholder:text-slate-400"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Category Pills Slider */}
      <section className="max-w-6xl mx-auto px-4 my-8">
        <div className="flex items-center justify-start gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-slate-200/60">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-teal-600 text-white shadow-sm shadow-teal-600/10"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid Content Area */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div>
          <h2 className="text-sm font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">
            {searchQuery || selectedCategory !== "All" 
              ? `Search Filters (${filteredArticles.length})` 
              : "All Healthcare Articles"}
          </h2>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/50 shadow-sm">
              <p className="text-slate-500 text-sm">No articles match your medical keywords.</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-3 text-sm text-teal-600 font-bold hover:underline"
              >
                Clear reference filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link 
                  href={`/blog/${article.slug}`} 
                  key={article.id}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="h-44 relative overflow-hidden bg-slate-50">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold mb-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-200 mb-2 line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-3 mb-4 flex-1 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="text-teal-600 text-xs font-bold flex items-center gap-1 mt-auto">
                      View Post <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
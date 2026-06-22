import React from "react";

export const meta = {
  title: "Preparing Your Home for Professional In-Home Elder Care",
  description: "Essential structural modifications and environment adjustments to ensure safety for seniors and caregivers.",
  category: "Home Care",
  date: "June 22, 2026",
  readTime: "6 min read",
  image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  author: {
    name: "Ayesha Khan",
    role: "Senior Care Specialist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  }
};

export default function HomeCareTipsContent() {
  return (
    <>
      <p className="text-xl text-slate-600 leading-relaxed font-serif mb-8 drop-cap">
        Transitioning a loved one to dynamic in-home senior care requires more than just scheduling a certified professional. Modifying the physical environment guarantees safety and speeds up healing processes.
      </p>
      
      <h2 className="text-2xl font-bold text-[#003A5C] mt-8 mb-4 tracking-tight">1. Eliminating High-Risk Fall Vectors</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Falls are the leading cause of accidental injuries among seniors. Securing loose area rugs with non-slip grips, clearing hallway pathways, and replacing extension cords completely mitigates physical mobility hazards.
      </p>
      
      <h2 className="text-2xl font-bold text-[#003A5C] mt-8 mb-4 tracking-tight">2. Setting Up the Medical Records Hub</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Keep a centralized layout folder accessible in the home containing primary physician contact information, active prescription schedules, medical histories, and insurance documents. This ensures the visiting nurse can cross-check biological charts with zero delay factors.
      </p>

      <blockquote className="my-8 border-l-4 border-[#00A693] bg-gradient-to-r from-slate-50 to-white p-6 rounded-r-2xl italic text-slate-700 shadow-sm border-y border-r border-slate-100">
        <strong>Care Checklist:</strong> Always ensure high-visibility lighting is installed in bathroom pathways and stairs to prevent sudden night-time disorientation.
      </blockquote>
    </>
  );
}
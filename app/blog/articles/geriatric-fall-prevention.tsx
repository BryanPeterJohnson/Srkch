import React from "react";

export const meta = {
  title: "Geriatric Fall Prevention: A Comprehensive Home Safety Checklist",
  description: "Learn how to audit living environments, improve lighting metrics, and eliminate mobility hazards for aging adults.",
  category: "Home Care",
  date: "June 22, 2026",
  readTime: "10 min read", // Bumped to match the high-density layout
  image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
  author: {
    name: "Sarah Jenkins",
    role: "Lead Occupational Therapist",
    avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=150&q=80",
  }
};

export default function GeriatricFallPreventionContent() {
  return (
    <>
      <p className="text-xl text-slate-600 leading-relaxed font-serif mb-8 drop-cap">
        For seniors, a single accidental slip can alter mobility metrics permanently. Environmental modifications within residential layouts represent the single most effective intervention method to preserve independence.
      </p>
      
      <h2 className="text-2xl font-bold text-[#003A5C] mt-8 mb-4 tracking-tight">1. High-Contrast Illumination Paths</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Aging optical lenses require up to three times more ambient light to track structural boundaries accurately. Transition traditional bulbs to 1600-lumen LED arrays across hallways and construct explicit motion-activated baseboard illumination maps from the master bedroom to the restroom.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        Eliminating dark zones between rooms helps prevent delayed visual adaptation, a common culprit in late-night falls when senior users navigate subtle floor transitions in partial darkness.
      </p>

      <h2 className="text-2xl font-bold text-[#003A5C] mt-10 mb-4 tracking-tight">2. Anchoring and Eliminating Floor Obstacles</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Unsecured decorative rugs, loose extension cabling, and slight thresholds between hardwood and tile serve as severe disruption vectors. Remove low-profile furniture from primary walking channels and ensure all remaining carpets are anchored with industrial double-sided rubberized mesh layers.
      </p>

      <h2 className="text-2xl font-bold text-[#003A5C] mt-10 mb-4 tracking-tight">3. Stairwell Structural Uniformity and Handrails</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Staircases represent the highest consequence zones in residential safety management. Every step must feature non-slip tread strips with high-visibility color contrast markers applied directly to the step edges to aid depth perception.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        Install continuous, dual-sided handrails that extend at least 12 inches past the top and bottom steps. This configuration gives aging adults a secure anchor point before they begin moving up or down the stairs.
      </p>

      <h2 className="text-2xl font-bold text-[#003A5C] mt-10 mb-4 tracking-tight">4. Biomechanical Footwear Protocols</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Environmental changes must work hand-in-hand with proper footwear choices. Loose slippers, thick socks, and soft, flexible running shoe midsoles significantly reduce the foot's sensory awareness of the floor, which can throw off balance.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        Seniors should wear supportive, low-heeled shoes with firm outsoles and wide treading surfaces even while inside the home. This provides maximum stability and keeps step placement consistent across various flooring types.
      </p>

      <div className="my-8 p-5 rounded-2xl bg-slate-50 border border-slate-200/60 text-slate-600 text-sm">
        <h4 className="font-bold text-[#003A5C] mb-2 text-base">🚿 Critical Bathroom & Zone Reinforcements:</h4>
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm">
          <li><strong>Grab Bars:</strong> Anchor 1.5-inch steel structural bars directly into wall studs near toilets and shower basins.</li>
          <li><strong>Anti-Slip Treatments:</strong> Apply structural micro-texture coatings to porcelain shower floors.</li>
          <li><strong>Raised Command Seating:</strong> Install ADA-compliant elevated toilet attachments to ease vertical transitions.</li>
          <li><strong>Stair Stripping:</strong> Place high-contrast anti-skid tape along the edge of every single structural step.</li>
        </ul>
      </div>
    </>
  );
}
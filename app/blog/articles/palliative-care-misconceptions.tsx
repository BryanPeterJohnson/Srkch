import React from "react";

export const meta = {
  title: "Palliative Care vs. Hospice: Demystifying Common Misconceptions",
  description: "Understand how concurrent palliative integration improves symptom relief parameters alongside active curative options.",
  category: "Clinical Guides",
  date: "June 14, 2026",
  readTime: "15 min read", // Expanded density update
  image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  author: {
    name: "Dr. Clara Winters",
    role: "Director of Palliative Medicine",
    avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=150&q=80",
  }
};

export default function PalliativeCareMisconceptionsContent() {
  return (
    <>
      <p className="text-xl text-slate-600 leading-relaxed font-serif mb-8 drop-cap">
        Many families reject palliative assistance because they mistakenly equate it with end-of-life hospice care. In reality, these specialized medical setups provide a crucial layer of comfort right alongside active, curative treatments.
      </p>
      
      <h2 className="text-2xl font-bold text-[#003A5C] mt-8 mb-4 tracking-tight">1. Symptom Interception Alongside Active Treatment</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Unlike hospice programs—which require stopping all active curative treatments—palliative care works right alongside therapies like chemotherapy or advanced cardiac care. It focuses heavily on relieving complex pain, managing nausea, and reducing treatment side effects.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        Early integration of palliative teams can prevent unnecessary emergency room visits. By proactively adjusting specialized medications to manage chronic pain or shortness of breath, patients maintain higher energy levels, helping them tolerate active medical protocols better.
      </p>

      <h2 className="text-2xl font-bold text-[#003A5C] mt-10 mb-4 tracking-tight">2. Enhancing Family Quality of Life Metrics</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Palliative care teams provide comprehensive support systems that extend well beyond the patient. They bring together doctors, nurses, and counselors to help families navigate difficult medical choices, reduce psychological stress, and keep the care plan running smoothly.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        This multi-layered approach ensures that emotional strain and care coordination challenges are addressed before they lead to family caregiver burnout. Providing a structured framework for difficult conversations helps keep family expectations realistic and clear.
      </p>

      <h2 className="text-2xl font-bold text-[#003A5C] mt-10 mb-4 tracking-tight">3. Hospice Care Operational Guidelines</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Hospice care is specifically designed for situations where treatments focused on curing a condition are no longer effective or desired. It applies when the patient has a projected life expectancy of less than six months if the disease takes its natural course.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        The core goal shifts entirely to maximizing comfort, dignity, and quality of remaining life. Rather than attempting to slow down or reverse the underlying disease, medical efforts focus exclusively on managing pain and keeping symptoms fully under control.
      </p>

      <h2 className="text-2xl font-bold text-[#003A5C] mt-10 mb-4 tracking-tight">4. Shared Care Plan Frameworks</h2>
      <p className="text-slate-600 leading-relaxed mb-6">
        Both care approaches use a collaborative approach, combining the expertise of doctors, social workers, and spiritual counselors. This unified approach wraps support around the patient's entire lifestyle, rather than treating an illness in isolation.
      </p>
      <p className="text-slate-600 leading-relaxed mb-6">
        By conducting comprehensive care reviews, these teams ensure that everyone involved—from the primary care doctor to family members—remains perfectly aligned on treatment boundaries and personal comfort wishes.
      </p>

      <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/60 text-slate-600 text-sm">
        <h4 className="font-bold text-[#003A5C] mb-3 text-base">📋 Core Differences at a Glance:</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[#003A5C] font-bold">
                <th className="pb-2 pr-4">Metric</th>
                <th className="pb-2 px-4">Palliative Care</th>
                <th className="pb-2 pl-4">Hospice Care</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60">
              <tr>
                <td className="py-2.5 font-semibold pr-4">Timing</td>
                <td className="py-2.5 px-4 text-slate-500">Introduced at any stage of a serious illness.</td>
                <td className="py-2.5 pl-4 text-slate-500">Began when life expectancy is under 6 months.</td>
              </tr>
              <tr>
                <td className="py-2.5 font-semibold pr-4">Curative Therapy</td>
                <td className="py-2.5 px-4 text-slate-500">Delivered alongside active cures.</td>
                <td className="py-2.5 pl-4 text-slate-500">Stopped; focus shifts entirely to comfort.</td>
              </tr>
              <tr>
                <td className="py-2.5 font-semibold pr-4">Location</td>
                <td className="py-2.5 px-4 text-slate-500">Hospital clinics, home visits, or residential care.</td>
                <td className="py-2.5 pl-4 text-slate-500">Primarily home-based or inside dedicated hospice units.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
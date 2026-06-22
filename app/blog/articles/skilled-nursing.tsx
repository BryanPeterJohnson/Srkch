export default function SkilledNursingContent() {
  return (
    <div className="space-y-6 text-slate-600 leading-relaxed text-[16px]">
      <p className="text-lg font-medium text-slate-900">
        Our skilled home nursing program bridges the gap between hospital recovery and clinical home safety.
      </p>
      
      <h3 className="text-xl font-bold text-slate-900 pt-4">Clinical Services Provided:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Vitals check & advanced biometric trend tracking.</li>
        <li>Intravenous (IV) therapy & structured injection loops.</li>
        <li>Post-operative wound dressing changes & suture assessment.</li>
      </ul>

      <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-900 text-sm">
        <strong>Patient Criteria:</strong> Ideal for transitioning patients recovering from complex surgeries, cardiac conditions, or long-term dynamic medical therapy.
      </div>
    </div>
  );
}
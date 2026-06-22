// app/data/jobs.ts

export interface Job {
  id: number;
  title: string;
  location: string;
  jobType: string;           // e.g. "Full-Time"
  schedule: string;          // e.g. "All Shifts Available"
  experience: string;        // e.g. "1+ year preferred"
  license: string;           // e.g. "LPN or RN required"
  setting: string;           // e.g. "Private Home / Community"
  datePosted: string;        // e.g. "June 15, 2026"
  partner: string | null;    // partner company name or null
  badge: string;             // e.g. "Now Hiring"
  category: string;          // breadcrumb category, e.g. "Nursing"
  tagline: string;           // bold intro line in description
  description: string;       // main paragraph
  descriptionExtra?: string; // optional second paragraph
  whatWeOffer: string[];
  howWePrepare: string[];
  shifts: string[];
  requirements: string[];
  benefits: {
    icon: string;
    title: string;
    desc: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  similarJobs: {
    title: string;
    location: string;
    type: string;
  }[];
}

const RAW_JOBS: Omit<Job, 'id'>[] = [
  {
    title: "Physical Therapy Assistant, Home Health",
    location: "Keene, New Hampshire",
    jobType: "Full-Time",
    schedule: "Flexible / Day Shifts",
    experience: "1+ year preferred",
    license: "Valid PTA License",
    setting: "Private Home / Community",
    datePosted: "June 10, 2026",
    partner: null,
    badge: "Now Hiring",
    category: "Therapy",
    tagline: "Make a Difference — One Patient at a Time.",
    description:
      "SRK Care at Home is seeking a dedicated Physical Therapy Assistant to provide high-quality home health services to patients in the Keene, NH area. You'll work one-on-one with patients recovering from surgery, illness, or injury in the comfort of their own homes.",
    descriptionExtra:
      "In this role you will implement physical therapy treatment plans under the supervision of a licensed Physical Therapist, helping patients regain mobility, strength, and independence.",
    whatWeOffer: [
      "One-on-one patient visits — build meaningful relationships",
      "Flexible scheduling tailored to your availability",
      "Competitive weekly pay with direct deposit",
      "Short commute — assignments placed close to your home",
      "Comprehensive Employee Assistance Program (EAP)",
      "W-2 employment with full employer support",
      "Paid continuing education and career development",
      "Paid time off and comprehensive health benefits",
    ],
    howWePrepare: [
      "Thorough onboarding with in-home and in-office training",
      "24/7 on-call clinical support from experienced supervisors",
      "Electronic charting system with full training provided",
      "Mentorship from senior clinicians during first 90 days",
    ],
    shifts: ["Day Shift", "Evening Shift", "Weekends", "Part-Time", "Full-Time", "PRN"],
    requirements: [
      "Valid PTA license in the state of New Hampshire",
      "Graduation from an accredited PTA program",
      "Reliable transportation to patient homes",
      "Strong communication and interpersonal skills",
    ],
    benefits: [
      { icon: "💰", title: "Weekly Pay", desc: "Direct deposit" },
      { icon: "🗓️", title: "Flexible Hours", desc: "Your schedule" },
      { icon: "📚", title: "Paid Education", desc: "CEUs covered" },
      { icon: "🏥", title: "Health Insurance", desc: "Medical & dental" },
      { icon: "🛡️", title: "Life Insurance", desc: "Company-paid" },
      { icon: "🤝", title: "EAP Program", desc: "Support services" },
      { icon: "⏰", title: "Paid Time Off", desc: "Vacation & sick" },
      { icon: "📍", title: "Short Commute", desc: "Local assignments" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Occupational Therapist", location: "Manchester, NH", type: "Full-Time" },
      { title: "Home Health RN", location: "Nashua, NH", type: "Part-Time" },
      { title: "Speech Therapist", location: "Concord, NH", type: "Full-Time" },
    ],
  },
  {
    title: "Physical Therapy Assistant, Home Health",
    location: "Lebanon, New Hampshire",
    jobType: "Part-Time",
    schedule: "Flexible / Weekday Mornings",
    experience: "Home health experience preferred",
    license: "PTA Certification",
    setting: "Private Home / Community",
    datePosted: "June 12, 2026",
    partner: null,
    badge: "Now Hiring",
    category: "Therapy",
    tagline: "Empower Recovery. Restore Independence.",
    description:
      "Join SRK Care at Home as a Physical Therapy Assistant serving patients in Lebanon, NH and surrounding areas. You'll provide physical therapy services and support individualized patient recovery plans under the direction of a supervising Physical Therapist.",
    whatWeOffer: [
      "Flexible scheduling that fits your personal availability",
      "Competitive pay with direct deposit",
      "Local assignments close to home",
      "Paid time off",
      "Medical insurance coverage",
      "Ongoing clinical support and supervision",
    ],
    howWePrepare: [
      "Structured orientation program for new clinicians",
      "24/7 support line staffed by experienced clinical staff",
      "Electronic documentation training included",
    ],
    shifts: ["Day Shift", "Part-Time", "PRN", "Weekdays"],
    requirements: [
      "PTA certification recognized in New Hampshire",
      "Home health experience preferred but not required",
      "Reliable transportation to patient homes",
      "Commitment to compassionate, patient-centered care",
    ],
    benefits: [
      { icon: "💰", title: "Competitive Pay", desc: "Weekly direct deposit" },
      { icon: "🗓️", title: "Flexible Hours", desc: "Your schedule" },
      { icon: "🏥", title: "Medical Insurance", desc: "Health coverage" },
      { icon: "⏰", title: "Paid Time Off", desc: "Vacation & sick" },
      { icon: "📍", title: "Local Assignments", desc: "Close to home" },
      { icon: "🤝", title: "Clinical Support", desc: "Always available" },
      { icon: "📚", title: "Paid Education", desc: "CEUs covered" },
      { icon: "🛡️", title: "Life Insurance", desc: "Company-paid" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Physical Therapy Assistant", location: "Keene, NH", type: "Full-Time" },
      { title: "Home Health Aide", location: "Hanover, NH", type: "Part-Time" },
      { title: "Occupational Therapist", location: "Claremont, NH", type: "Full-Time" },
    ],
  },
  {
    title: "Registered Nurse, Hospice",
    location: "Abington, Pennsylvania",
    jobType: "Full-Time",
    schedule: "All Shifts Available",
    experience: "Hospice experience preferred",
    license: "RN License (PA)",
    setting: "Patient Home / Inpatient Facility",
    datePosted: "June 15, 2026",
    partner: "Jefferson Health",
    badge: "Now Hiring",
    category: "Nursing",
    tagline: "Compassionate Care. Meaningful Moments.",
    description:
      "SRK Care at Home, in partnership with Jefferson Health, is seeking a Registered Nurse to provide compassionate hospice nursing care for patients and families in the Abington, PA area.",
    descriptionExtra:
      "In this deeply rewarding role, you will assess, plan, and provide skilled nursing care to terminally ill patients, ensuring their comfort and dignity while supporting their loved ones through one of life's most challenging transitions.",
    whatWeOffer: [
      "Meaningful, relationship-centered patient care",
      "Competitive salary with weekly pay",
      "Comprehensive 401(k) retirement plan",
      "Health, dental, and vision insurance",
      "Paid clinical training and ongoing education",
      "Interdisciplinary team support — you are never alone",
      "Mileage reimbursement for home visits",
      "Employee Assistance Program (EAP)",
    ],
    howWePrepare: [
      "Dedicated hospice orientation and shadowing program",
      "Access to Jefferson Health clinical resources and specialists",
      "24/7 on-call physician and clinical support",
      "Electronic charting system with full training provided",
    ],
    shifts: ["Day Shift", "Evening Shift", "Night Shift", "Weekends", "Full-Time", "PRN"],
    requirements: [
      "Current, valid RN license in the Commonwealth of Pennsylvania",
      "Graduation from an accredited nursing program",
      "Hospice or palliative care experience preferred",
      "Strong empathy and family communication skills",
    ],
    benefits: [
      { icon: "💰", title: "Weekly Pay", desc: "Direct deposit" },
      { icon: "🏦", title: "401(k)", desc: "Retirement plan" },
      { icon: "🏥", title: "Health Insurance", desc: "Medical & dental" },
      { icon: "📚", title: "Paid Training", desc: "CEUs included" },
      { icon: "🛡️", title: "Life Insurance", desc: "Company-paid" },
      { icon: "🤝", title: "EAP Program", desc: "Support services" },
      { icon: "⏰", title: "Paid Time Off", desc: "Vacation & sick" },
      { icon: "🚗", title: "Mileage Reimb.", desc: "Per visit" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Hospice LPN", location: "Philadelphia, PA", type: "Full-Time" },
      { title: "Palliative Care RN", location: "Jenkintown, PA", type: "Part-Time" },
      { title: "Home Health RN", location: "Lansdale, PA", type: "Full-Time" },
    ],
  },
  {
    title: "Home Health Aide / CNA",
    location: "Philadelphia, Pennsylvania",
    jobType: "Full-Time",
    schedule: "Day and Evening Shifts Available",
    experience: "1+ year preferred",
    license: "Active HHA Certification or CNA License (PA)",
    setting: "Private Home / Community",
    datePosted: "June 16, 2026",
    partner: null,
    badge: "Hot Job",
    category: "Aide Services",
    tagline: "Bring Comfort, Dignity, and Joy to Seniors at Home.",
    description:
      "SRK Care at Home is looking for a caring and certified Home Health Aide (HHA) or Certified Nursing Assistant (CNA) to provide essential daily living support to elderly and disabled clients throughout North and West Philadelphia.",
    descriptionExtra:
      "In this vital role, you will assist clients with personal care, meal preparation, light housekeeping, and companion care, enabling them to safely remain independent in their own living spaces.",
    whatWeOffer: [
      "Reliable hours with consistent, long-term clients",
      "Competitive hourly rates with direct deposit options",
      "Paid travel time between client assignments",
      "Comprehensive medical benefits package",
      "Paid sick time and holiday premium pay",
      "24/7 coordinator support for any field emergencies",
    ],
    howWePrepare: [
      "Paid 3-day company orientation and setup onboarding package",
      "Hands-on skills check with a supervising Registered Nurse",
      "Access to continuous virtual learning modules for state CEU updates",
    ],
    shifts: ["Day Shift", "Evening Shift", "Full-Time", "Part-Time", "Weekends"],
    requirements: [
      "Valid Pennsylvania CNA license or completed HHA training certificate",
      "Completed physical exam and TB test within the past year",
      "Pass a mandatory criminal background screening",
      "Compassionate attitude with a high dedication to elderly care",
    ],
    benefits: [
      { icon: "💰", title: "Weekly Pay", desc: "Direct deposit options" },
      { icon: "🏥", title: "Medical Care", desc: "Health & vision options" },
      { icon: "⏰", title: "Paid Sick Time", desc: "Accrued monthly" },
      { icon: "🚗", title: "Travel Pay", desc: "Paid between clients" },
      { icon: "🤝", title: "Support Line", desc: "24/7 logistics assistance" },
      { icon: "🛡️", title: "Life Insurance", desc: "Company sponsored" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Personal Care Assistant", location: "Bala Cynwyd, PA", type: "Part-Time" },
      { title: "Home Health RN", location: "Abington, PA", type: "Full-Time" },
      { title: "Caregiver Companion", location: "Camden, NJ", type: "Full-Time" },
    ],
  },
  {
    title: "Licensed Practical Nurse (LPN), Home Health",
    location: "Manchester, New Hampshire",
    jobType: "Full-Time",
    schedule: "Day Shifts / Weekends Rotating",
    experience: "1 Year Nursing Experience Required",
    license: "LPN License (NH or Compact)",
    setting: "Private Home / Community",
    datePosted: "June 16, 2026",
    partner: null,
    badge: "Now Hiring",
    category: "Nursing",
    tagline: "Deliver Exceptional Clinical Care on Your Own Schedule.",
    description:
      "SRK Care at Home is expanding our clinical team in Southern New Hampshire. We are searching for an LPN dedicated to treating individuals with acute and chronic medical needs in the security of their personal homes.",
    descriptionExtra:
      "Working under the guidance of a case-managing RN, your duties include medication administration, wound dressings, vital sign documentation, and monitoring patient health dynamics.",
    whatWeOffer: [
      "Flexible schedule with highly predictable shift routines",
      "Competitive premium hourly pay scale with weekly payouts",
      "Detailed tracking and reimbursement for fuel and travel expenses",
      "Comprehensive medical, dental, and matching 401(k) benefits",
    ],
    howWePrepare: [
      "Intensive 1-on-1 field training with senior nursing supervisors",
      "Detailed learning modules for advanced wound care and modern documentation tablet sets",
      "Immediate clinical guidance available 24/7 via phone hotlines",
    ],
    shifts: ["Day Shift", "Weekends", "Full-Time"],
    requirements: [
      "Active state license as an LPN in New Hampshire",
      "Valid driver's license with clear driving history records",
      "Strong understanding of clinical protocols and professional charting standards",
    ],
    benefits: [
      { icon: "💰", title: "Premium Pay", desc: "Weekly check or direct deposit" },
      { icon: "🏥", title: "Full Health", desc: "Medical, vision, and dental plans" },
      { icon: "🏦", title: "401(k) Match", desc: "Retirement savings growth" },
      { icon: "🚗", title: "Travel Compensation", desc: "Tracked mileage reimbursement" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Home Health RN", location: "Nashua, NH", type: "Full-Time" },
      { title: "Hospice LPN", location: "Concord, NH", type: "Full-Time" },
    ],
  },
  {
    title: "Occupational Therapist (OT)",
    location: "Concord, New Hampshire",
    jobType: "Part-Time",
    schedule: "Flexible Days",
    experience: "New grads welcome with strong clinical rotations",
    license: "Valid NH Occupational Therapist License",
    setting: "Private Home / Independent Living Facilities",
    datePosted: "June 14, 2026",
    partner: null,
    badge: "New Listing",
    category: "Therapy",
    tagline: "Help Individuals Reclaim Daily Independence and Confidence.",
    description:
      "We are looking for a skilled Occupational Therapist to support our growing adult and geriatric population segments around Concord, NH. You will assess environments, recommend modifications, and create custom daily treatment actions.",
    whatWeOffer: [
      "Unmatched scheduling freedom — see clients when it works best for you",
      "Excellent pay rates based on per-visit metrics",
      "Proactive continuing education allowance to track advanced therapeutic techniques",
    ],
    howWePrepare: [
      "Complete home safety technology stack instruction modules",
      "Peer-shadowing tracks during your introductory assignments",
    ],
    shifts: ["Day Shift", "Part-Time", "PRN"],
    requirements: [
      "Master's or Doctorate degree in Occupational Therapy",
      "Active Occupational Therapy authorization documents for New Hampshire",
      "Strong dynamic thinking and functional physical evaluation skills",
    ],
    benefits: [
      { icon: "🗓️", title: "Total Flexibility", desc: "Design your custom work week" },
      { icon: "📚", title: "CEU Stipends", desc: "Paid out annually for development" },
      { icon: "💰", title: "Per-Visit Rates", desc: "High earnings potential" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Physical Therapy Assistant", location: "Keene, NH", type: "Full-Time" },
      { title: "Speech Pathologist", location: "Manchester, NH", type: "Part-Time" },
    ],
  },
  {
    title: "Registered Nurse (RN), Home Health Case Manager",
    location: "Nashua, New Hampshire",
    jobType: "Full-Time",
    schedule: "Monday - Friday / No Regular On-Call",
    experience: "2+ years home health or acute care preferred",
    license: "RN License (NH or Compact)",
    setting: "Private Home / Local Area Office",
    datePosted: "June 17, 2026",
    partner: null,
    badge: "Urgent Need",
    category: "Nursing",
    tagline: "Lead Patient Recovery and Coordinate Strategic Home Care Plans.",
    description:
      "SRK Care at Home is searching for an expert Registered Nurse to oversee clinical cases in the Nashua hub. You will serve as the core contact between home patients, doctors, and multi-disciplinary treatment therapists.",
    descriptionExtra:
      "In this position, you will execute primary patient admissions, create tailored clinical roadmaps, oversee LPN/HHA actions, and ensure all regulatory metrics remain perfectly aligned.",
    whatWeOffer: [
      "No mandatory weekend call requirements for optimal work-life rhythm",
      "Premium top-tier salary with performance bonus options",
      "Corporate cell phone, tablet, and equipment setup",
      "Generous paid time off package alongside medical choices",
    ],
    howWePrepare: [
      "Advanced 2-week structured corporate training framework",
      "OASIS charting standards deep-dive modules",
    ],
    shifts: ["Day Shift", "Full-Time"],
    requirements: [
      "Current state license as a Registered Nurse in New Hampshire",
      "Strong background tracking medical indicators, clinical treatments, and charts",
      "Excellent communication habits when addressing families and medical teams",
    ],
    benefits: [
      { icon: "💰", title: "Competitive Salary", desc: "Plus yearly milestone bonuses" },
      { icon: "⏰", title: "Generous PTO", desc: "Vacation, personal, and sick time" },
      { icon: "📱", title: "Tech Package", desc: "Company phone and connected tablet" },
      { icon: "🏥", title: "Top Insurance", desc: "Medical, vision, and full dental" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Hospice Registered Nurse", location: "Abington, PA", type: "Full-Time" },
      { title: "LPN Home Care", location: "Manchester, NH", type: "Full-Time" },
    ],
  },
  {
    title: "Certified Nursing Assistant (CNA), Geriatric Care",
    location: "Doylestown, Pennsylvania",
    jobType: "Full-Time",
    schedule: "Night Shifts Available",
    experience: "6 months preferred",
    license: "Active PA CNA Registry Verification",
    setting: "Private Home Setting",
    datePosted: "June 15, 2026",
    partner: null,
    badge: "Now Hiring",
    category: "Aide Services",
    tagline: "Provide Crucial Support and Safety Protocols Overnight.",
    description:
      "We are adding dedicated Certified Nursing Assistants to our overnight care networks in Doylestown, PA. Your presence guarantees peace of mind and high-quality medical and physical support for seniors during night hours.",
    descriptionExtra:
      "Key activities focus on transfer help, bathroom safety supervision, basic medication alerts, and immediate communication with supervisors if client health situations pivot.",
    whatWeOffer: [
      "Premium compensation incentives for continuous overnight assignments",
      "Consistent schedules with long-term household accounts",
      "Paid sick leave accrual and health savings options",
    ],
    howWePrepare: [
      "Specialized nighttime shift safety protocols training sessions",
      "Alzheimer's and memory support advanced communication modules",
    ],
    shifts: ["Night Shift", "Full-Time", "Part-Time"],
    requirements: [
      "Successful registry listing as a Certified Nursing Assistant in Pennsylvania",
      "Up-to-date CPR and First Aid training badges",
      "Strong reliability and punctuality records",
    ],
    benefits: [
      { icon: "🌙", title: "Night Differential", desc: "Increased hourly baseline pay" },
      { icon: "🗓️", title: "Stable Schedule", desc: "Set days with consistent clients" },
      { icon: "❤️", title: "Health Support", desc: "Medical package options available" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Home Health Aide / CNA", location: "Philadelphia, PA", type: "Full-Time" },
      { title: "Personal Care Specialist", location: "Jenkintown, PA", type: "Part-Time" },
    ],
  },
  {
    title: "Speech Language Pathologist (SLP)",
    location: "Manchester, New Hampshire",
    jobType: "Part-Time",
    schedule: "Flexible / PRN",
    experience: "1+ year post-CFY preferred",
    license: "Valid NH SLP License & ASHA CCCs",
    setting: "Private Home / Rehabilitation Communities",
    datePosted: "June 11, 2026",
    partner: null,
    badge: "New Listing",
    category: "Therapy",
    tagline: "Restore Communication, Speech clarity, and Safe Swallowing Functions.",
    description:
      "SRK Care at Home is searching for an SLP to treat adult individuals recovering from strokes, neurological conditions, or physical traumas within the Manchester area. You will evaluate conditions and execute speech and cognitive-linguistic therapies.",
    whatWeOffer: [
      "Top per-visit compensation structures across the region",
      "Full technology setup including virtual diagnostic evaluation tools",
      "Professional liability insurance inclusion paths",
    ],
    howWePrepare: [
      "Full digital onboarding focused on home environment therapy adaptations",
      "Direct technical access lines to leading rehabilitation experts",
    ],
    shifts: ["Day Shift", "Part-Time", "PRN"],
    requirements: [
      "Master's Degree in Speech-Language Pathology",
      "Active ASHA Certificate of Clinical Competence (CCC-SLP)",
      "New Hampshire speech therapy operating clearance papers",
    ],
    benefits: [
      { icon: "💰", title: "Premium PRN Pay", desc: "High competitive per-visit rates" },
      { icon: "🗓️", title: "Design Your Day", desc: "Complete clinical control of schedules" },
      { icon: "🛡️", title: "Liability Coverage", desc: "Company-backed insurance paths" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Occupational Therapist", location: "Concord, NH", type: "Part-Time" },
      { title: "Physical Therapy Assistant", location: "Keene, NH", type: "Full-Time" },
    ],
  },
  {
    title: "Personal Care Assistant (PCA)",
    location: "Jenkintown, Pennsylvania",
    jobType: "Part-Time",
    schedule: "Weekend Shifts Only",
    experience: "Experience preferred but will train the right candidate",
    license: "No State Nursing License Required",
    setting: "Private Home / Companion Living",
    datePosted: "June 13, 2026",
    partner: null,
    badge: "Weekend Shift",
    category: "Aide Services",
    tagline: "Support Independence and Enrich the Lives of Local Families.",
    description:
      "Are you trying to find a rewarding weekend position? Join our Jenkintown companion network as a Personal Care Assistant. You will help seniors manage everyday household needs and remain active in community spaces.",
    descriptionExtra:
      "Core duties focus on structural support like grocery assistance, reliable mobility supervision, companion interaction, and simple tidying tasks.",
    whatWeOffer: [
      "Excellent weekend shift pay rates",
      "Direct personal matching with clients in your immediate neighborhood",
      "W-2 protection and full payroll tax handlings",
    ],
    howWePrepare: [
      "Complete hands-on care training sessions at our central office spaces",
      "Clear, step-by-step instruction updates through continuous mentor support channels",
    ],
    shifts: ["Weekends", "Part-Time"],
    requirements: [
      "High school diploma or GED equivalent tracking",
      "Reliable transportation metrics to reach scheduled locations on time",
      "Genuine empathy and emotional stability traits",
    ],
    benefits: [
      { icon: "💰", "title": "Weekend Premium", desc: "Boosted base pay metrics" },
      { icon: "📍", "title": "Ultra-Local", desc: "Assignments centered by your zip code" },
      { icon: "🤝", "title": "Paid Onboarding", desc: "Earn while learning company dynamics" },
    ],
    stats: [
      { value: "15+", label: "Years in Business" },
      { value: "5,000+", label: "Patients Served" },
      { value: "50+", label: "Locations" },
      { value: "4.5★", label: "Employee Rating" },
    ],
    similarJobs: [
      { title: "Home Health Aide / CNA", location: "Philadelphia, PA", type: "Full-Time" },
      { title: "Geriatric CNA", location: "Doylestown, PA", type: "Full-Time" },
    ],
  },
];

// Helper code block to produce an array of all possible 5-digit values (10000 - 99999), 
// randomizing and choosing only what's needed for RAW_JOBS length to stay fully unique.
const generateUniqueRandomIds = (count: number): number[] => {
  const ids = Array.from({ length: 90000 }, (_, i) => i + 10000);
  
  // Durstenfeld shuffle algorithm
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  
  return ids.slice(0, count);
};

const RANDOM_ID_POOL = generateUniqueRandomIds(RAW_JOBS.length);

export const ALL_JOBS: Job[] = RAW_JOBS.map((job, index) => ({
  id: RANDOM_ID_POOL[index],
  ...job,
}));
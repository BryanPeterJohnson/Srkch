import { 
  Heart, Users, Brain, Home, Smile, ShieldAlert, Activity, Clock, Car, Baby 
} from "lucide-react";

export const services = [
{
  id: 0,
  slug: "personal-care",
  title: "Personal Care & Daily Living Assistance",
  shortTitle: "Personal Care",
  tagline: "Dignity and independence, every single day.",
  description: "Our personal care services provide compassionate, respectful support with the activities that make daily life possible. We meet each client where they are — physically, emotionally, and medically — to design an approach that preserves their self-worth while ensuring safety.",
  icon: Heart,
  image: "https://images.unsplash.com/photo-1576765608866-5b51f8d8c2ab?auto=format&fit=crop&w=1200&q=80",
  accent: "#e53e8c",
  accentLight: "#fdf0f7",
  category: "Core Care",
  duration: "Hourly / Daily / 24/7",
  coverage: "Home, Assisted Living & Community",
  // Replacing 'features' with 'categorizedFeatures'
  categorizedFeatures: [
    {
      title: "Personal Hygiene & Grooming",
      items: ["Bathing and showering assistance", "Sponge baths", "Oral hygiene and denture care", "Hair care and grooming", "Shaving assistance", "Skin care assistance", "Routine nail care assistance"]
    },
    {
      title: "Dressing & Appearance Support",
      items: ["Dressing and undressing", "Clothing selection assistance", "Assistance with shoes and outerwear", "Personal grooming support"]
    },
    {
      title: "Toileting & Continence Care",
      items: ["Toileting assistance", "Incontinence care", "Changing briefs and protective garments", "Perineal care", "Bathroom safety assistance"]
    },
    {
      title: "Mobility & Transfer Support",
      items: ["Ambulation assistance", "Walking support", "Bed-to-chair transfers", "Chair-to-wheelchair transfers", "Positioning and repositioning", "Stair navigation assistance"]
    },
    {
      title: "Eating & Hydration Assistance",
      items: ["Meal setup", "Feeding assistance", "Hydration encouragement", "Assistance with adaptive eating devices"]
    },
    {
      title: "Independence & Wellness Support",
      items: ["Daily routine assistance", "Encouragement of self-care activities", "Monitoring of functional abilities", "Assistance maintaining independence"]
    }
  ],
  whoFor: [
    "Seniors aging in place who need hands-on daily living support",
    "Individuals recovering from major illness, stroke, or orthopedic surgery",
    "Adults living with progressive physical disabilities or chronic conditions",
    "Individuals at high risk of falls who require continuous standby assistance",
    "Those who just need an extra pair of hands during peak morning or evening hours"
  ],
  howItWorks: [
    { step: "01", title: "Free Registered Nurse Consultation", desc: "Our care team assesses physical needs, home safety layout, and personal preferences during a comprehensive, no-obligation home visit." },
    { step: "02", title: "Customized Care Plan & Caregiver Match", desc: "We develop a tailored care plan and pair you with a certified caregiver suited to your personality, routine, and required care level." },
    { step: "03", title: "Care Begins with Supervised Introduction", desc: "Your dedicated caregiver arrives on your preferred schedule, often accompanied by a supervisor to ensure a smooth, comfortable transition." },
    { step: "04", title: "Ongoing Clinical Review & Adjustments", desc: "We conduct regular quality checks and formal care plan reviews to adjust service hours or techniques as your medical or physical needs evolve." },
  ],
},
  {
    id: 1,
    slug: "companion-care",
    title: "Companion & Social Engagement Care",
    shortTitle: "Companion Care",
    tagline: "Connection that transforms quality of life.",
    description: "Loneliness is a silent health crisis. Our companion care service pairs clients with warm, thoughtful caregivers who provide genuine conversation, activity participation, and emotional presence — reducing isolation while supporting mental wellness.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    accent: "#0d9488",
    accentLight: "#f0fdfb",
    category: "Wellness",
    duration: "Flexible hourly schedules",
    coverage: "Home, Senior Centers & Community",
 // Inside the service object (id: 1) in data.ts
categorizedFeatures: [
  {
    title: "Companionship & Emotional Support",
    items: ["Friendly conversation", "Emotional reassurance", "Meaningful companionship", "Social interaction and engagement"]
  },
  {
    title: "Recreational & Leisure Activities",
    items: ["Games and puzzles", "Reading and storytelling", "Arts and crafts", "Music and hobbies", "Indoor and outdoor activities"]
  },
  {
    title: "Cognitive Engagement",
    items: ["Memory stimulation activities", "Orientation reminders", "Brain fitness exercises", "Structured daily routines"]
  },
  {
    title: "Community & Social Participation",
    items: ["Accompaniment on walks", "Religious services attendance", "Family gatherings", "Community events and activities"]
  },
  {
    title: "Emotional Wellness & Mental Health Support",
    items: ["Reducing loneliness and isolation", "Encouraging social connections", "Promoting emotional well-being", "Providing supportive companionship during life transitions"]
  }
],
    whoFor: [
      "Seniors living alone who feel isolated or are at risk of depression",
      "Individuals whose families live out of town or have busy work schedules",
      "Those with early-stage memory concerns who benefit from mental stimulation",
      "Active seniors looking for an outgoing peer to share in hobbies and outings",
      "Anyone who would benefit from a consistent, joyful, and encouraging presence"
    ],
    howItWorks: [
      { step: "01", title: "Interest & Personality Profile", desc: "We map out the client's life history, favorite hobbies, literacy interests, and personality traits to define an ideal companion archetype." },
      { step: "02", title: "Companion Pairing & Meet-and-Greet", desc: "A compatible companion caregiver with shared interests is introduced gently to ensure mutual chemistry before regular shifts begin." },
      { step: "03", title: "Scheduled Engagement Visits", desc: "Regularly scheduled visits take place on your preferred days, focusing on purposeful activities that stimulate joy and mental agility." },
      { step: "04", title: "Family Portal Updates & Continuity", desc: "Families receive digital logs and brief updates after each visit, keeping you connected to your loved one’s emotional and mental state." },
    ],
  },
  {
    id: 2,
    slug: "memory-care",
    title: "Memory Care & Safety Monitoring",
    shortTitle: "Memory Care",
    tagline: "Specialized, compassionate support for cognitive change.",
    description: "Living with Alzheimer's, dementia, or other cognitive conditions requires a specialized, patient-centered approach. Our memory care specialists are trained in validation therapy, structured routines, and safety protocols that reduce distress and maximize quality of life.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    accent: "#7c3aed",
    accentLight: "#f5f0ff",
    category: "Specialized Care",
    duration: "Daily / Overnight / Live-In",
    coverage: "Home-Based Secure Environments",
   // Inside the service object (id: 2) in data.ts
categorizedFeatures: [
  {
    title: "Alzheimer's & Dementia Support",
    items: ["Memory cueing and reminders", "Routine reinforcement", "Orientation assistance", "Structured daily schedules", "Redirection and reassurance"]
  },
  {
    title: "Cognitive Wellness Support",
    items: ["Reminiscence activities", "Memory games and exercises", "Cognitive engagement activities", "Social interaction for cognitive stimulation"]
  },
  {
    title: "Fall Prevention Services",
    items: ["Transfer supervision", "Mobility monitoring", "Ambulation assistance", "Assistive device support", "Fall-risk observation"]
  },
  {
    title: "Home Safety Monitoring",
    items: ["Environmental safety observations", "Clutter and trip hazard monitoring", "Lighting and accessibility review", "Bathroom safety monitoring"]
  },
  {
    title: "Wellness Observation & Monitoring",
    items: ["Observation of physical condition", "Observation of behavioral changes", "Observation of mobility changes", "Observation of nutritional and hydration status", "Reporting significant concerns to supervisors and family"]
  },
  {
    title: "Emergency Preparedness & Response Support",
    items: ["Emergency contact verification", "Emergency planning assistance", "Emergency response coordination", "Wellness and safety checks"]
  }
],
    whoFor: [
      "Individuals diagnosed with Alzheimer's disease, Lewy Body, or Vascular Dementia",
      "Families experiencing caregiving exhaustion from handling progressive memory loss",
      "Those experiencing frequent confusion, wandering behaviors, or evening agitation",
      "Clients who need a consistent, calming presence to prevent home accidents or panic"
    ],
    howItWorks: [
      { step: "01", title: "Comprehensive Cognitive Assessment", desc: "We collaborate with the family and primary doctors to map out the current dementia stage, triggers, and baseline cognitive functions." },
      { step: "02", title: "Custom Behavioral Care Plan", desc: "We design a customized, structured daily plan built around existing life habits, sleep patterns, and preferred historical routines." },
      { step: "03", title: "Dementia-Certified Specialist Match", desc: "We assign a caregiver uniquely certified in advanced dementia care, validation techniques, and cognitive safety practices." },
      { step: "04", title: "Family Coaching & Care Coordination", desc: "We provide regular coaching notes to family members, ensuring consistent communication strategies and unified care practices across the board." },
    ],
  },
  {
    id: 3,
    slug: "home-nutrition",
    title: "Household & Nutrition Support",
    shortTitle: "Home & Nutrition",
    tagline: "A clean home and nourishing meals — the foundation of wellbeing.",
    description: "A safe, organized home environment and proper nutrition are the cornerstones of good health. Our household support services handle the practical tasks of daily life so clients can focus on living rather than managing chores.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
    accent: "#d97706",
    accentLight: "#fffbeb",
    category: "Home Support",
    duration: "Scheduled part-time / Daily visits",
    coverage: "Home Interior",
  // Inside the service object (id: 3) in data.ts
categorizedFeatures: [
  {
    title: "Meal Planning & Preparation",
    items: ["Meal planning", "Grocery list preparation", "Meal preparation", "Healthy snack preparation", "Special dietary accommodation support"]
  },
  {
    title: "Nutrition & Hydration Support",
    items: ["Feeding assistance", "Hydration reminders", "Nutrition encouragement", "Monitoring food intake"]
  },
  {
    title: "Kitchen Management",
    items: ["Kitchen cleanup", "Food storage organization", "Food safety monitoring", "Expiration date checks"]
  },
  {
    title: "Light Housekeeping Services",
    items: ["Dusting", "Vacuuming", "Sweeping and mopping", "Dishwashing", "General tidying of living spaces"]
  },
  {
    title: "Laundry & Linen Services",
    items: ["Laundry and folding clothes", "Changing bed linens", "Making beds", "Organizing clothing"]
  },
  {
    title: "Errands & Shopping Assistance",
    items: ["Grocery shopping", "Pharmacy pickup", "Household supply shopping", "Mailing and personal errands"]
  }
],
    whoFor: [
      "Seniors who find heavy household cleaning tasks painful or physically unsafe",
      "Individuals with limited mobility, severe arthritis, or low daily energy levels",
      "Those managing chronic conditions requiring complex, strict dietary guidelines",
      "Busy families who want to guarantee a clean, sanitary living space for an aging relative"
    ],
    howItWorks: [
      { step: "01", title: "Home Environment & Diet Assessment", desc: "We tour the home to catalog cleaning priorities, identify safety red flags, and review dietary rules or physician restrictions." },
      { step: "02", title: "Customized Menu & Chore Checklist", desc: "A personalized, rotating meal plan is created alongside a highly specific daily and weekly household task schedule." },
      { step: "03", title: "Seamless Regular Service Scheduling", desc: "Visits are cleanly booked around the client's favorite lifestyle hours, ensuring minimum disruption to their day." },
      { step: "04", title: "Meticulous Field Supervision", desc: "Field supervisors perform periodic, unannounced quality spot-checks to guarantee elite hospitality and food safety standards are met." },
    ],
  },
  {
    id: 4,
    slug: "respite-care",
    title: "Family Respite & Caregiver Support",
    shortTitle: "Respite Care",
    tagline: "Rest is not a luxury. It's a medical necessity.",
    description: "Family caregivers are the unsung backbone of home care — and they burn out. Our respite care service provides qualified relief caregivers so families can step away with confidence, knowing their loved one is in skilled, compassionate hands.",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80",
    accent: "#e11d48",
    accentLight: "#fff0f3",
    category: "Family Support",
    duration: "Hourly up to multi-week blocks",
    coverage: "Home & Short-term Travel",
   // Inside the service object (id: 4) in data.ts
categorizedFeatures: [
  {
    title: "In-Home Respite Care",
    items: ["Short-term caregiver relief", "Scheduled respite visits", "Temporary family caregiver coverage", "Flexible respite scheduling"]
  },
  {
    title: "Overnight Respite Support",
    items: ["Evening supervision", "Overnight monitoring", "Bedtime assistance", "Nighttime safety support"]
  },
  {
    title: "Caregiver Wellness Support",
    items: ["Reducing caregiver burden", "Providing peace of mind", "Supporting caregiver work-life balance", "Temporary relief during emergencies"]
  },
  {
    title: "Family Communication & Updates",
    items: ["Care updates for family members", "Reporting observations and concerns", "Coordination with authorized family representatives", "Care continuity support"]
  },
  {
    title: "Recovery & Transitional Support",
    items: ["Temporary assistance during caregiver absence", "Support following hospitalization of a family caregiver", "Assistance during family travel or emergencies"]
  }
],
    whoFor: [
      "Family members operating as the 24/7 primary caregiver for a relative",
      "Caregivers showing clinical signs of physical exhaustion, chronic stress, or illness",
      "Families preparing for an upcoming vacation, wedding, or major career change",
      "Anyone needing a trustworthy, fully vetted backup care safety net on short notice"
    ],
    howItWorks: [
      { step: "01", title: "Meticulous Primary Caregiver Interview", desc: "We extract all the nuanced details of your loved one's care — routines, specific quirks, favorite phrases, and hidden medical triggers." },
      { step: "02", title: "Introductory Trial Visit", desc: "We coordinate a brief, fully paid introductory visit so the client can bond with the relief caregiver while you are still present." },
      { step: "03", title: "Seamless Relief Management", desc: "Your matched relief caregiver steps in and executes the established daily medical and domestic care plan with precision." },
      { step: "04", title: "Return Transition Debriefing", desc: "We conduct a detailed clinical and functional debrief when you return, highlighting updates on behavioral patterns or physical shifts." },
    ],
  },
  {
    id: 5,
    slug: "disability-support",
    title: "Disability Support Services",
    shortTitle: "Disability Support",
    tagline: "Maximizing capability, comfort, and independence.",
    description: "Every person living with a disability deserves care that focuses on what they can do, not what they cannot. Our disability support plans are built around individual goals, adaptive strategies, and a genuine commitment to autonomy and quality of life.",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    accent: "#4f46e5",
    accentLight: "#eef2ff",
    category: "Specialized Care",
    duration: "Flexible scheduled shifts",
    coverage: "Home, Workplace & Community Integration",
    features: [
      "Individualized support plans focused strictly on personal independence milestones",
      "Seamless coordination with assigned physical, occupational, and speech therapies",
      "Expert adaptive equipment assistance, transfer training, and hoist/lift utilization",
      "Active community integration, vocational support, and social group participation",
      "Life-skill development, including budget tracking, meal prep, and public transport training",
      "System navigation, NDIS/insurance form tracking, and legal self-advocacy support",
      "Sensory processing support and customized environmental modification guidance",
      "Transport and physical assistance during continuing education courses or workplaces"
    ],
    whoFor: [
      "Adults and young adults managing severe physical or neurological disabilities",
      "Individuals navigating developmental, learning, or complex intellectual disabilities",
      "People actively transitioning from clinical facilities to autonomous community living",
      "Families seeking structured, highly goal-oriented physical or cognitive support workers"
    ],
    howItWorks: [
      { step: "01", title: "Collaborative Goal-Setting Session", desc: "The client, family, and case manager meet to establish specific independence milestones (e.g., vocational goals, motor skill training)." },
      { step: "02", title: "Adaptive Support Framework Design", desc: "We map out a structured strategy prioritizing client autonomy, communication preferences, and physical safety loops." },
      { step: "03", title: "Specialized Support Worker Match", desc: "We carefully pair the client with a support professional trained in specific physical transfers, neurodivergent care, or communication tech." },
      { step: "04", title: "Data-Driven Progress Milestone Tracking", desc: "We run monthly evaluations to review skill acquisition, physical adjustments, and modify target goals alongside therapy teams." },
    ],
  },
  {
    id: 6,
    slug: "recovery-care",
    title: "Recovery & Post-Hospital Support",
    shortTitle: "Recovery Care",
    tagline: "A safe bridge from hospital to home.",
    description: "The transition from hospital to home is one of the highest-risk periods for older adults. Our recovery care service ensures proper adherence to discharge instructions, monitors for complications, and provides the physical and emotional support needed to heal fully.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    accent: "#059669",
    accentLight: "#f0fdf4",
    category: "Clinical Support",
    duration: "Short-term targeted (weeks to months)",
    coverage: "Home-Based Transition",
    features: [
      "Rigorous discharge instruction review, timeline compliance, and tracking",
      "Wound care tracking, surgical incision observation, and early infection checks",
      "Home physical/occupational therapy exercise coaching and mobility supervision",
      "Complex medication reconciliation, setting up pill organizers, and timing tracking",
      "Targeted nutritional planning optimized for tissue repair and post-surgical healing",
      "Instant, clear communication loops with primary physicians and surgeons",
      "Transportation and physical chaperone service for follow-up clinical appointments",
      "Vigilant monitoring for signs of deep vein thrombosis (DVT) or fluid retention"
    ],
    whoFor: [
      "Individuals recovering from orthopedic surgery, cardiac events, or complex illnesses",
      "Seniors carrying a statistically high clinical risk of hospital readmission",
      "Those who live alone and lack an immediate family safety net for overnight post-op care",
      "Patients managing new, complex post-discharge medical devices or routines"
    ],
    howItWorks: [
      { step: "01", title: "Pre-Discharge Hospital Liaison", desc: "Our nursing lead coordinates directly with your hospital discharge team before you leave to capture surgical history and prescriptions." },
      { step: "02", title: "Post-Op Home Setup & Sanitization", desc: "We prepare the home layout, install temporary grab bars, configure recovery equipment, and clear fall hazards." },
      { step: "03", title: "Intensive Post-Acute Transition Support", desc: "Care starts with dedicated daily shifts during the critical 72-hour window when readmission metrics are highest." },
      { step: "04", title: "Gradual Step-Down Plan", desc: "We scale down service frequency over several weeks as physical independence, stamina, and wound recovery benchmarks are met." },
    ],
  },
  {
    id: 7,
    slug: "medication-wellness",
    title: "Medication Reminders & Wellness Checks",
    shortTitle: "Medication & Wellness",
    tagline: "Consistent wellness management, day after day.",
    description: "Medication non-adherence is one of the leading causes of preventable hospitalizations. Our wellness service keeps clients on track with timely medication reminders, health monitoring, and routine wellness checks that catch problems before they escalate.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80",
    accent: "#ea580c",
    accentLight: "#fff7ed",
    category: "Wellness",
    duration: "Daily check-ins / Drop-in shifts",
    coverage: "In-Home Vitals Tracking & Remote Safety Logs",
    features: [
      "Highly precise, scheduled medication prompts aligned with strict physician timelines",
      "Weekly/monthly pill organizer configuration, inventory audits, and refill coordination",
      "Daily blood pressure, pulse, blood glucose, and oxygen saturation logs",
      "Symptom tracking, pain metrics logging, and clear changes-in-condition documentation",
      "Direct medical coordination with pharmacies and prescribing specialist teams",
      "Instant automated family notifications for missed doses or vital sign warnings",
      "Cognitive orientation checks and hydration status monitoring",
      "Assistance setting up and maintaining digital medication dispensing systems"
    ],
    whoFor: [
      "Seniors managing polypharmacy regimens (taking 5+ distinct medications daily)",
      "Individuals dealing with chronic conditions like type-2 diabetes, hypertension, or heart failure",
      "Those experiencing early memory changes who occasionally lose track of dosage timings",
      "Anxious families who want a reliable, daily professional validation of their relative's vitals"
    ],
    howItWorks: [
      { step: "01", title: "Clinical Pharmacy & Medication Mapping", desc: "We catalog every single drug, supplement, dosage timeline, food restriction, and potential cross-interaction side effect." },
      { step: "02", title: "Customized Vitals Monitoring Schedule", desc: "We set up a tracking chart capturing exactly when and how blood pressure, glucose, or weight parameters must be recorded." },
      { step: "03", title: "Daily Wellness Checks Execution", desc: "A professional checks in at specified hours to confirm medication consumption and track essential biometric data points." },
      { step: "04", title: "Unified Weekly Health Reports", desc: "A consolidated digital trend chart is sent weekly to your family and chosen physicians to spot negative patterns early." },
    ],
  },
  {
    id: 8,
    slug: "transportation",
    title: "Transportation & Appointment Assistance",
    shortTitle: "Transportation",
    tagline: "Never miss an appointment that matters.",
    description: "Lack of transportation is a major barrier to healthcare access for older adults. Our transportation service provides safe, punctual, accompanied transport to appointments, therapies, pharmacies, and social events — ensuring clients stay connected to their healthcare and community.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    accent: "#0284c7",
    accentLight: "#f0f9ff",
    category: "Community Access",
    duration: "Per-trip booking / Recurring travel blocks",
    coverage: "Regional Door-to-Door Outings",
    features: [
      "Prompt medical appointment transport accompanied by a supportive caregiver",
      "Physical, occupational, and outpatient rehabilitation transport loops",
      "Prescription pickup runs, grocery errands, and department store trips",
      "Escorted travel to weddings, family reunions, and holiday social gatherings",
      "Full door-to-door physical assistance, walker management, and wheelchair loading",
      "Appointment timeline planning, departure reminders, and wait-list coordination",
      "Taking basic notes during non-confidential medical check-ups to share with family",
      "Weather-contingent routing to ensure client safety during winter or heavy rain conditions"
    ],
    whoFor: [
      "Seniors who have chosen to stop driving or live with vision impairments",
      "Individuals dealing with severe mobility limitations or neurological conditions",
      "Those who have frequent specialized clinical appointments throughout the week",
      "Anyone who values a physical, encouraging chaperone rather than riding alone in a taxi or rideshare"
    ],
    howItWorks: [
      { step: "01", title: "Calendar Sync & Scheduling", desc: "We map out your upcoming outpatient schedules, medical checkups, and errands onto a unified master logistics calendar." },
      { step: "02", title: "Mobility & Vehicle Matching", desc: "We select the appropriate vehicle and caregiver support based on your physical equipment needs (e.g., folding walkers, extra legroom)." },
      { step: "03", title: "Escorted Door-to-Door Transportation", desc: "Our caregiver assists you out of the house, drives safely, chaperones you right into the clinic, and stays by your side." },
      { step: "04", title: "Outing Completion & Family Notification", desc: "We return you safely to your home, set up your purchases or prescriptions, and send a completion message to your family." },
    ],
  },
  {
    id: 9,
    slug: "pediatric-care",
    title: "Pediatric & Child Care Services",
    shortTitle: "Pediatric Care",
    tagline: "Nurturing the next generation with expert, attentive care.",
    description: "Our pediatric care service delivers specialized, loving support for infants, toddlers, and children with unique developmental or medical needs. Every caregiver is trained in pediatric first aid and child development to provide truly expert care.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    accent: "#7c3aed",
    accentLight: "#faf5ff",
    category: "Pediatric",
    duration: "Flexible hourly / Overnight adjustments",
    coverage: "Home, School & Pediatric Facility Companion",
    features: [
      "Newborn care support, formula preparation, and sleep schedule tracking",
      "Age-appropriate developmental play, motor skill exercises, and sensory activities",
      "Pediatric chronic medical condition tracking and medication delivery tracking",
      "School preparation routines, cognitive exercises, and structured homework support",
      "Escort and companion assistance to physical therapy or speech pathology appointments",
      "Specialized night-nursing options for medically fragile or high-monitoring infants",
      "Allergy-conscious, specialized meal planning and dietary tracking for children",
      "Behavioral reinforcement strategies aligned with child psychology frameworks"
    ],
    whoFor: [
      "Families managing newborns or medically complex infants requiring close care",
      "Parents raising children diagnosed with neurodivergent conditions, autism, or delays",
      "Demanding professional households seeking elite, safety-certified in-home childcare professionals",
      "Families navigating a child's short-term post-surgical recovery or rehabilitation plan"
    ],
    howItWorks: [
      { step: "01", title: "Family Routine & Medical Consultation", desc: "We sit down with parents and clinical histories to review your child’s emotional triggers, therapeutic goals, and favorite home routines." },
      { step: "02", title: "Pediatric Specialist Vetting & Matching", desc: "We pair your family with a certified professional possessing background experience in early childhood education or pediatric nursing fields." },
      { step: "03", title: "Supervised Introductory Play Session", desc: "A carefully managed intro session builds safety, boundaries, and emotional comfort for your child before individual care kicks off." },
      { step: "04", title: "Granular Daily Progress Tracking", desc: "Parents receive detailed daily logs mapping out nutritional values, mood metrics, educational wins, and biometric readings." },
    ],
  },
];
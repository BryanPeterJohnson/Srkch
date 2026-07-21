import { User, UserCheck, Activity } from "lucide-react";

// ─── Hero Slides ──────────────────────────────────────────────────────────────
export const heroSlides = [
    {
        img: "/images/Home/1.png",
        pill: "Compassionate Home Care",
        headline: "Trusted Home Care— So You Can Focus on What Matters Most",
        sub: "Driven by purpose and led by our hearts, we deliver the highest-quality home health care to keep you or your loved ones safe, comfortable, and independent.",
        cta1: { label: "Find a Service ♥", to: "/services" },
        cta2: { label: "Request Care ↗", to: "/get-started" },
    },
    {
        img: "/images/Home/2.png",
        pill: "Trusted Since 2004",
        headline: "Two Decades of Caring for Your Loved Ones",
        sub: "Our certified caregivers bring warmth, skill, and genuine compassion to every home visit.",
        cta1: { label: "Meet Our Team ♥", to: "/about" },
        cta2: { label: "Our Services ↗", to: "/services" },
    },
    {
        img: "https://images.unsplash.com/photo-1755189118414-14c8dacdb082?w=1440&h=600&fit=crop&auto=format",
        pill: "Medicare & Medicaid Accepted",
        headline: "Quality Care That Works With Your Coverage",
        sub: "We accept Medicare, Medicaid Long-Term Care, and private pay — so cost never stands in the way.",
        cta1: { label: "Contact Us ♥", to: "/contact" },
        cta2: { label: "Learn More ↗", to: "/about" },
    },
];

// ─── Services-by-Category Data ────────────────────────────────────────────────
// NOTE: ServicesByCategory.tsx no longer reads this array — it derives its
// categories from app/services/data.ts so the two can't drift apart. Kept here
// only in case another component still imports it. Safe to delete once nothing
// references `categoryData`.
export const categoryData = [
    {
        id: "seniors",
        title: "Care for Seniors",
        ageLabel: "Age 65 and up",
        Icon: User,
        services: [
            {
                title: "Personal Care & Daily Living Assistance",
                desc: "Support with bathing, grooming, dressing, mobility, and everyday routines to maintain dignity and independence at home.",
                img: "/images/Home/services-1.png",
                path: "/services/personal-care",
                icon: "🤲",
            },
            {
                title: "Companion & Social Engagement Care",
                desc: "Friendly companionship, conversation, and emotional support to reduce loneliness and improve quality of life.",
                img: "https://images.unsplash.com/photo-1758686254601-a47850cb2226?w=560&h=480&fit=crop&auto=format",
                path: "/services/companion-care",
                icon: "💙",
            },
            {
                title: "Memory Care & Safety Monitoring",
                desc: "Specialized support for dementia and memory-related conditions with fall prevention and continuous safety monitoring.",
                img: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=560&h=480&fit=crop&auto=format",
                path: "/services/memory-care",
                icon: "🧠",
            },
            {
                title: "Household & Nutrition Support",
                desc: "Light housekeeping, meal preparation, and nutritional support tailored to individual health needs.",
                img: "https://images.unsplash.com/photo-1653233797467-1a528819fd4f?w=560&h=480&fit=crop&auto=format",
                path: "/services/meal-preparation",
                icon: "🍽️",
            },
            {
                title: "Family Respite & Caregiver Support",
                desc: "Short-term relief for family caregivers so they can rest while loved ones continue receiving quality care.",
                img: "https://images.unsplash.com/photo-1758691031844-c8c880a9b764?w=560&h=480&fit=crop&auto=format",
                path: "/services/respite-care",
                icon: "🌿",
            },
        ],
    },
    {
        id: "adults",
        title: "Care for Adults",
        ageLabel: "Age 19 to 64",
        Icon: UserCheck,
        services: [
            {
                title: "Personal Care Assistance",
                desc: "Help with daily hygiene, grooming, mobility, and personal routines to support independence at home.",
                img: "https://images.unsplash.com/photo-1742676971866-edc9a855d227?w=560&h=480&fit=crop&auto=format",
                path: "/services/personal-care",
                icon: "🤲",
            },
            {
                title: "Disability Support Services",
                desc: "Dedicated assistance for adults with disabilities to promote independence, comfort, and dignity.",
                img: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=560&h=480&fit=crop&auto=format",
                path: "/services/disability-support",
                icon: "♿",
            },
            {
                title: "Companion & Lifestyle Assistance",
                desc: "Social engagement, daily support, errands, and companionship for a balanced lifestyle.",
                img: "https://images.unsplash.com/photo-1758686254601-a47850cb2226?w=560&h=480&fit=crop&auto=format",
                path: "/services/companion-care",
                icon: "💙",
            },
            {
                title: "Recovery & Post-Hospital Support",
                desc: "Assistance during recovery after illness, surgery, or hospitalization for a smooth transition home.",
                img: "https://images.unsplash.com/photo-1666887360726-f55472d96c34?w=560&h=480&fit=crop&auto=format",
                path: "/services/post-hospital-care",
                icon: "🏥",
            },
            {
                title: "Medication Reminders & Wellness Checks",
                desc: "Regular health monitoring, medication reminders, and wellness support for ongoing care.",
                img: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=560&h=480&fit=crop&auto=format",
                path: "/services/medication-support",
                icon: "💊",
            },
            {
                title: "Respite & Family Support Services",
                desc: "Temporary caregiver relief and family support to ensure continuous quality care.",
                img: "https://images.unsplash.com/photo-1758691031844-c8c880a9b764?w=560&h=480&fit=crop&auto=format",
                path: "/services/respite-care",
                icon: "🌿",
            },
            {
                title: "Transportation & Appointment Assistance",
                desc: "Safe and reliable transport for medical visits, therapy sessions, and daily errands.",
                img: "https://images.unsplash.com/photo-1666887360726-f55472d96c34?w=560&h=480&fit=crop&auto=format",
                path: "/services/transportation",
                icon: "🚗",
            },
        ],
    },
    {
        id: "children",
        title: "Care for Children",
        ageLabel: "Age 2 to 18",
        Icon: Activity,
        services: [
            {
                title: "Pediatric Companion & Personal Care Assistance",
                desc: "Gentle personal care and companionship tailored for children's comfort and well-being.",
                img: "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?w=560&h=480&fit=crop&auto=format",
                path: "/services/pediatric-care",
                icon: "🧸",
            },
            {
                title: "Special Needs & Developmental Support",
                desc: "Personalized care and developmental assistance for children with special needs.",
                img: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=560&h=480&fit=crop&auto=format",
                path: "/services/special-needs-care",
                icon: "🌈",
            },
            {
                title: "Home Safety & Wellness Support",
                desc: "Ensuring a safe, healthy, and supportive home environment for children.",
                img: "https://images.unsplash.com/photo-1758686253708-f0e21317d2aa?w=560&h=480&fit=crop&auto=format",
                path: "/services/home-safety",
                icon: "🏠",
            },
            {
                title: "Meal Preparation & Feeding Assistance",
                desc: "Healthy meal preparation and feeding support tailored to children's nutritional needs.",
                img: "https://images.unsplash.com/photo-1653233797467-1a528819fd4f?w=560&h=480&fit=crop&auto=format",
                path: "/services/child-nutrition",
                icon: "🍎",
            },
            {
                title: "Respite Care for Parents & Caregivers",
                desc: "Short-term relief for parents so they can rest while their child receives quality care.",
                img: "https://images.unsplash.com/photo-1758691031844-c8c880a9b764?w=560&h=480&fit=crop&auto=format",
                path: "/services/child-respite-care",
                icon: "🌿",
            },
        ],
    },
];

// ─── Static data ──────────────────────────────────────────────────────────────
export const steps = [
    {
        num: "01",
        title: "Tell Us Your Needs",
        desc: "Call us or fill out our quick form. We'll listen and understand exactly what kind of care is needed.",
    },
    {
        num: "02",
        title: "We Create Your Care Plan",
        desc: "A dedicated coordinator matches you with the ideal caregiver and builds a personalized care plan.",
    },
    {
        num: "03",
        title: "Care Begins at Home",
        desc: "Your caregiver arrives, and compassionate home care begins — seamlessly and on your schedule.",
    },
];

export const newsItems = [
    {
        title: "SRK Recognized for Excellence in Home Healthcare",
        description:
            "Our commitment to quality care has earned us prestigious accreditation and recognition from leading healthcare organizations.",
        image:
            "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
    {
        title: "New Telehealth Services Now Available",
        description:
            "Expanding access to care with innovative virtual health consultations for our patients and their families.",
        image:
            "https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
    {
        title: "Staff Training Excellence Program Launched",
        description:
            "SRK invests in continuous education to ensure our caregivers provide the highest quality of care.",
        image:
            "https://images.unsplash.com/photo-1691139601099-932c01ec198b?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
    {
        title: "Community Outreach Initiative Success",
        description:
            "Our team partners with local communities to provide health education and wellness programs.",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format",
        link: "#",
    },
];

// Trust badge paths — place logo1.png–logo5.png in /public/images/
export const trustBadges = [
    { src: "/images/1.png", alt: "Trust Badge 1" },
    { src: "/images/2.png", alt: "Trust Badge 2" },
    { src: "/images/3.png", alt: "Trust Badge 3" },
    { src: "/images/4.png", alt: "Trust Badge 4" },
    { src: "/images/5.png", alt: "Trust Badge 5" },
];

// ─── Care at Home section ─────────────────────────────────────────────────────
export const carePoints = [
    "Personalized care tailored to your specific health care needs.",
    "Recovery and support in the comfort and safety of your home.",
    "Assistance with managing chronic conditions or illnesses.",
    "Care coordination to support your transition home from the hospital or inpatient rehab center.",
    "Greater independence and peace of mind for both patients and caregivers.",
];
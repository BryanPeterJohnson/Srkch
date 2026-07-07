"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, UserCheck2, FileText, HomeIcon } from "lucide-react";

const steps = [
    {
        num: "1",
        title: "Contact Us",
        desc: "Reach out to our care team by phone or online.",
        Icon: Phone,
        color: "#E57531",
        bg: "#FCEBDF",
    },
    {
        num: "2",
        title: "Verify Eligibility",
        desc: "We verify your insurance or Medicaid eligibility and benefits.",
        Icon: ClipboardCheck,
        color: "#0C447C",
        bg: "#E4ECF3",
    },
    {
        num: "3",
        title: "RN Care Assessment",
        desc: "A registered nurse visits your home to complete a care assessment.",
        Icon: UserCheck2,
        color: "#166534",
        bg: "#E1F0E6",
    },
    {
        num: "4",
        title: "Personalized Care Plan",
        desc: "We create a customized care plan tailored to your loved one's needs.",
        Icon: FileText,
        color: "#E57531",
        bg: "#FCEBDF",
    },
    {
        num: "5",
        title: "Care Begins",
        desc: "Caregiver services begin with compassion and excellence.",
        Icon: HomeIcon,
        color: "#0C447C",
        bg: "#E4ECF3",
    },
];

export function GettingStarted() {
    return (
        <section
            className="pt-16 sm:pt-12 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 2xl:px-12 font-display"
            style={{ background: "#FFFFFF" }}
        >
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto ">

                {/* Header */}
                <div className="text-center mb-3 ">
                  

                    <motion.h2
                        className="font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: "clamp(24px, 2.6vw, 34px)",
                            fontWeight: 800,
                            color: "#0D2D52",
                        }}
                    >
                        Getting Started Is Simple
                    </motion.h2>

                    <motion.p
                        className="font-display mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: 12.5,
                            color: "#5B6B85",
                            maxWidth: 900,
                            marginTop: 8,
                        }}
                    >
                        A dedicated SRK Care Manager will help you understand
                        your care options, answer your questions, and guide
                        you toward the right support for your loved one. We
                        provide phone guidance at no cost, along with
                        registered nurse visits to help assess your loved
                        one's needs and create the best care plan for your
                        family.
                    </motion.p>
                </div>

                {/* Steps row — stacks 2-up on phones, single even row from sm upward */}
                <div className="relative flex flex-wrap sm:flex-nowrap items-start justify-center sm:justify-between gap-x-6 gap-y-10 sm:gap-x-2">

                    {/* Dotted connector line — hidden on stacked mobile, shown from sm upward */}
                    <div
                        className="hidden sm:block absolute top-[38px] left-[9%] right-[9%] h-0 z-0"
                        style={{ borderTop: "2px dotted #159BA1" }}
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            className="relative z-10 flex flex-col items-center text-center px-2 basis-[42%] sm:basis-0 sm:flex-1"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                        >
                            {/* Icon circle */}
                            <div
                                className="w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                                style={{ background: step.bg }}
                            >
                                <step.Icon size={26} className="sm:hidden" strokeWidth={1.75} style={{ color: step.color }} />
                                <step.Icon size={30} className="hidden sm:block" strokeWidth={1.75} style={{ color: step.color }} />
                            </div>

                            {/* Title */}
                            <h3
                                className="font-bold text-[#0D2D52] mb-2 font-display"
                                style={{ fontSize: 14 }}
                            >
                                {step.num}. {step.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-[#5B6B85] font-display leading-relaxed max-w-[170px]"
                                style={{ fontSize: 12.5 }}
                            >
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
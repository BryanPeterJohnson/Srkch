"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, UserCheck2, FileText, HomeIcon } from "lucide-react";

const steps = [
    {
        num: "1",
        title: "Contact Us",
        desc: "Reach out to our care team by phone or online.",
        Icon: Phone,
    },
    {
        num: "2",
        title: "Verify Eligibility",
        desc: "We verify your insurance or Medicaid eligibility and benefits.",
        Icon: ClipboardCheck,
    },
    {
        num: "3",
        title: "RN Care Assessment",
        desc: "A registered nurse visits your home to complete a care assessment.",
        Icon: UserCheck2,
    },
    {
        num: "4",
        title: "Personalized Care Plan",
        desc: "We create a customized care plan tailored to your loved one's needs.",
        Icon: FileText,
    },
    {
        num: "5",
        title: "Care Begins",
        desc: "Caregiver services begin with compassion and excellence.",
        Icon: HomeIcon,
    },
];

export function GettingStarted() {
    return (
        <section
            className="-mt-10 sm:-mt-10 pt-0 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 font-display"
            style={{ background: "#FFFFFF" }}
        >
            <div className="max-w-7xl mx-auto ">

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

                {/* Steps row */}
                <div className="relative flex items-start justify-between">

                    {/* Dotted connector line — desktop only, sits behind the icon circles */}
                    <div
                        className="hidden md:block absolute top-[38px] left-[9%] right-[9%] h-0 z-0"
                        style={{ borderTop: "2px dotted #159BA1" }}
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            className="relative z-10 flex flex-col items-center text-center px-2"
                            style={{ flex: "1 1 0" }}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                        >
                            {/* Icon circle */}
                            <div
                                className="w-[76px] h-[76px] rounded-full flex items-center justify-center mb-4"
                                style={{ background: "#EEF9F7" }}
                            >
                                <step.Icon size={30} strokeWidth={1.75} className="text-[#159BA1]" />
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
                                className="text-[#5B6B85] font-display leading-relaxed"
                                style={{ fontSize: 12.5, maxWidth: 170 }}
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
"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            className="bg-white"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>

    );
}
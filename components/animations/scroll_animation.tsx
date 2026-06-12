import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
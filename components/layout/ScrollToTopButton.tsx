"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLenisInstance } from "../animations/LenisProvider";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenisInstance();

  useEffect(() => {
    if (!lenis) return;
    const onScroll = ({ scroll }: { scroll: number }) => {
      setVisible(scroll > 400);
    };
    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <button
      onClick={() => lenis?.scrollTo(0)}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-[120] w-11 h-11 rounded-full bg-[#005B8E] hover:bg-[#004770] text-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
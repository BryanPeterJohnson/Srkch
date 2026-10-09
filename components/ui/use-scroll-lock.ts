"use client";

import { useEffect } from "react";
import { useLenisInstance } from "../animations/LenisProvider";

/**
 * Freezes the page behind a full-screen overlay.
 *
 * `overflow: hidden` on <body> alone is not enough: iOS Safari ignores it for
 * touch scrolling, and Lenis keeps driving the window scroll. So we:
 *   1. stop Lenis,
 *   2. pin <body> with position:fixed at the current offset (works on iOS),
 *   3. restore the exact scroll position when the overlay closes.
 */
export function useScrollLock(locked: boolean) {
  const lenis = useLenisInstance();

  useEffect(() => {
    if (!locked || typeof window === "undefined") return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      htmlOverflow: html.style.overflow,
      overscroll: html.style.overscrollBehavior,
    };

    lenis?.stop();
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      html.style.overflow = prev.htmlOverflow;
      html.style.overscrollBehavior = prev.overscroll;

      window.scrollTo(0, scrollY);
      if (lenis) {
        lenis.scrollTo(scrollY, { immediate: true, force: true });
        lenis.start();
      }
    };
  }, [locked, lenis]);
}

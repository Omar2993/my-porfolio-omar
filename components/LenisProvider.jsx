"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    history.scrollRestoration = "manual";

    const lenis = new Lenis({
      duration: 0.8,
      smoothWheel: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 1.6,
    });

    function saveScroll() {
      sessionStorage.setItem(
        "scroll-position",
        String(window.scrollY)
      );
    }

    window.addEventListener("scroll", saveScroll, {
      passive: true,
    });

    let frame;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", saveScroll);
      lenis.destroy();
    };
  }, []);

  return children;
}
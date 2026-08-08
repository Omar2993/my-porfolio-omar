"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector("main");

    if (!main) return;

    gsap.killTweensOf(main);

    gsap.fromTo(
      main,
      {
        opacity: 0,
        x: 45,
        scale: 0.985,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        clearProps: "transform,filter",
      }
    );
  }, [pathname]);

  return null;
}
"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const lineRef = useRef(null);
  const fillRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    let target = 0;
    let current = 0;
    let animationId;

    const update = () => {
      const section = document.getElementById("projects");
      const line = lineRef.current;

      if (!section || !line) return;

      const rect = section.getBoundingClientRect();

      const totalScroll =
        section.offsetHeight - window.innerHeight;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        totalScroll
      );

      const progress =
        totalScroll <= 0 ? 0 : scrolled / totalScroll;

      target = progress * line.clientHeight;
    };

    const animate = () => {
      current += (target - current) * 0.1;

      if (fillRef.current) {
        fillRef.current.style.height = `${current}px`;
      }

if (ballRef.current) {
  ballRef.current.style.top = `${current}px`;
}

      animationId = requestAnimationFrame(animate);
    };

    update();
    animate();

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="sticky top-24 h-[80vh] flex justify-center ">
      <div
        ref={lineRef}
        className="relative h-full w-2 rounded-full bg-black"
      >
        <div
          ref={fillRef}
          className="absolute top-0 left-0 w-2 rounded-full bg-red-500"
        />

       <div
  ref={ballRef}
  className="absolute  -translate-x-2 -translate-y-1/2 h-6 w-6 rounded-full bg-red-500 shadow-lg"
/>
      </div>
    </div>
  );
}
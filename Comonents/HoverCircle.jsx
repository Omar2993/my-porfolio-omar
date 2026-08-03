"use client";

import { useEffect, useRef, useState } from "react";
import VisitCursor from "./VisitCursor";

export default function HoverCircle({ children }) {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  const [show, setShow] = useState(false);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });


  useEffect(() => {
    let animationFrame;

    const animate = () => {
      const speed = 0.80;

      current.current.x +=
        (target.current.x - current.current.x) * speed;

      current.current.y +=
        (target.current.y - current.current.y) * speed;

      if (circleRef.current) {
        circleRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);


    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      target.current = {
        x: mouse.current.x - rect.left,
        y: mouse.current.y - rect.top,
      };
    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    mouse.current = {
      x: e.clientX,
      y: e.clientY,
    };


    const radius = 55;

    const x = Math.min(
      Math.max(e.clientX - rect.left, radius),
      rect.width - radius
    );

    const y = Math.min(
      Math.max(e.clientY - rect.top, radius),
      rect.height - radius
    );


    target.current = { x, y };
  };


  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseMove={handleMove}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}


      <div
        ref={circleRef}
        className="pointer-events-none absolute left-0 top-0 will-change-transform"
        style={{
          opacity: show ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <VisitCursor />
      </div>

    </div>
  );
}
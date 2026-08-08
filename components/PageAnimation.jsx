"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PageAnimation = ({ children }) => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [".hero-name", ".hero-subtitle", ".hero-impact"],
        {
          opacity: 0,
          y: 40,
          force3D: true,
          willChange: "transform, opacity",
        }
      );

      const tl = gsap.timeline();

      tl.to(".hero-name", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
      })
        .to(
          ".hero-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.7"
        )
        .to(
          ".hero-impact",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.6"
        );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return <div ref={pageRef}>{children}</div>;
};

export default PageAnimation;
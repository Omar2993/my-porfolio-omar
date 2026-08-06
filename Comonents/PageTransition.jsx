"use client";

import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";

export default function PageTransition({ children }) {
  return (
    <TransitionRouter
      leave={(next) => {

        // click er sathe sathe page change
        next();


        // center theke reveal animation
        gsap.fromTo(
          "body",
          {
            clipPath: "circle(0% at 50% 50%)",
          },
          {
            clipPath: "circle(150% at 50% 50%)",
            duration: 1,
            ease: "power4.inOut",
          }
        );

      }}


      enter={(next) => {

        // kono shrink hobe na
        gsap.set("body", {
          clipPath: "circle(150% at 50% 50%)",
        });


        next();

      }}

    >
      {children}
    </TransitionRouter>
  );
}
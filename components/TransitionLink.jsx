"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";

export default function TransitionLink({
  href,
  children,
  className = "",
}) {
  const router = useRouter();
  const isAnimating = useRef(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (isAnimating.current) return;

    isAnimating.current = true;

    const main = document.querySelector("main");

    if (!main) {
      router.push(href);
      return;
    }

    gsap.killTweensOf(main);

    gsap.to(main, {
      opacity: 0,
      x: -30,
      scale: 0.99,
      filter: "blur(3px)",
      duration: 0.28,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href);
        isAnimating.current = false;
      },
    });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
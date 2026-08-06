"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-transition-router";

export default function TransitionLink({
  href,
  children,
  className = "",
}) {
  const router = useTransitionRouter();

  const handleClick = (e) => {
    e.preventDefault();

    router.push(href);
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
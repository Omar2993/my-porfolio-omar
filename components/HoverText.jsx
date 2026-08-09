
"use client";

export default function HoverText({ children, className = "" }) {
  return (
    <span
      className={`
        inline-block
        bg-transparent
        transition-all
        duration-300
        ease-out
        hover:text-white
        hover:text-black
        hover:scale-110
        ${className}
      `}
    >
      {children}
    </span>
  );
}


"use client";

import { motion } from "framer-motion";

export default function Bubble() {
  return (
    <div className="relative flex items-center justify-center w-[420px] h-[420px]">

      {/* OUTER GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[360px]
          h-[360px]
          rounded-full
          blur-[90px]
          bg-gradient-to-br
          from-blue-500/30
          via-violet-500/20
          to-cyan-400/30
        "
      />

      {/* MAIN BUBBLE */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.015, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative w-[280px] h-[280px]"
      >

        {/* Ring */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-white/10
            overflow-hidden
          "
        >

          {/* Gradient Border */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              p-[3px]
              bg-[conic-gradient(from_180deg,#8b5cf6,#ffffff,#60a5fa,#2563eb,#8b5cf6)]
            "
          >
            <div className="w-full h-full rounded-full bg-black"></div>
          </div>

        </div>

      </motion.div>

    </div>
  );
}{/* Glass Reflection */}
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-0 rounded-full"
>
  <div
    className="
      absolute
      -top-6
      left-1/2
      -translate-x-1/2
      w-36
      h-20
      rounded-full
      bg-white/50
      blur-2xl
      opacity-80
    "
  />
</motion.div>

{/* Moving Shine */}
<motion.div
  animate={{
    rotate: -360,
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-0 rounded-full"
>
  <div
    className="
      absolute
      right-8
      top-12
      w-16
      h-16
      rounded-full
      bg-cyan-300/60
      blur-xl
    "
  />
</motion.div>

{/* Purple Bloom */}
<motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.35, 0.7, 0.35],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    bottom-8
    left-8
    w-28
    h-28
    rounded-full
    bg-violet-500/30
    blur-3xl
  "
/>

{/* Blue Bloom */}
<motion.div
  animate={{
    scale: [1.1, 1, 1.1],
    opacity: [0.3, 0.6, 0.3],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-10
    right-10
    w-24
    h-24
    rounded-full
    bg-blue-400/30
    blur-3xl
  "
/>

{/* Inner Glass */}
<div
  className="
    absolute
    inset-5
    rounded-full
    border
    border-white/10
    bg-gradient-to-br
    from-white/5
    via-transparent
    to-blue-500/5
  "
/>

{/* Inner Shadow */}
<div
  className="
    absolute
    inset-8
    rounded-full
    shadow-[inset_0_0_80px_rgba(255,255,255,0.06)]
  "
/>

{/* Center */}
<div
  className="
    absolute
    inset-10
    rounded-full
    bg-black
  "
/>
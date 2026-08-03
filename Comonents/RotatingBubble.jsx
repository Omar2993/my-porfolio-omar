"use client";

import { motion } from "framer-motion";

export default function Bubble() {
  return (
    <motion.div
      animate={{
        rotate: 360,
        y: [-6, 6, -6],
        scale: [1, 1.02, 1],
      }}
      transition={{
        rotate: {
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative w-60 h-60"
    >
      {/* Bubble */}
      <div
        className="
          relative
          w-full
          h-full
          overflow-hidden
          bg-[#ececf2]
        "
        style={{
          borderRadius: "47% 53% 49% 51% / 48% 46% 54% 52%",
        }}
      >
        {/* Purple Light */}
        <div
          className="absolute -left-8 top-5 w-40 h-44 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(177,79,255,.65), transparent 200%)",
          }}
        />

        {/* Cyan Light */}
        <div
          className="absolute -right-6 bottom-0 w-40 h-40 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(80,240,255,.75), transparent 200%)",
          }}
        />

        {/* White Reflection */}
        <div
          className="absolute top-5 left-10 w-32 h-10 rounded-full blur-sm"
          style={{
            background:
              "linear-gradient(90deg,rgba(255,255,255,.95),rgba(255,255,255,0))",
            transform: "rotate(-15deg)",
          }}
        />

        {/* Inner Shine */}
        <div
          className="absolute inset-4 opacity-40"
          style={{
            borderRadius: "inherit",
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,255,255,.55), transparent 75%)",
          }}
        />
      </div>
    </motion.div>
  );
}
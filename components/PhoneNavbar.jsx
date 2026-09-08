"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "next-view-transitions";

export default function PhoneNavbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "More", href: "/more" },
  ];

  return (
    <div   style={{ viewTransitionName: "desktopnavbar" }} className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] lg:hidden">
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          closed: {
            width: 224,
            height: 44,
            borderRadius: 100,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
              y: -8,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
              },
            },
          },
          open: {
            width: 400,
            height: 340,
            borderRadius: 28,
            transition: {
              width: {
                delay: 0.3,
                duration: 0.14,
                ease: "easeOut",
              },
              height: {
                delay: 0.28,
                duration: 0.20,
                ease: "easeOut",
              },
              borderRadius: {
                delay: 0.18,
                duration: 0.01,
              },
            },
          },
        }}
        className="overflow-hidden bg-white  shadow-[0_5px_20px_rgba(0,0,0,0.35)]"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full h-11 px-4 flex items-center justify-between"
        >
          <div>|</div>

          <h1 className="font-semibold">Javed Omar</h1>

          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                delay: 0.25,
                duration: 0.2,
              }}
            >
              <div className="flex flex-col gap-2 p-4">
                {menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="h-11 flex items-center justify-center rounded-xl hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

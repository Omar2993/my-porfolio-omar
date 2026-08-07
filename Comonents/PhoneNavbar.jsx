"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

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
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className="w-56 rounded-3xl bg-white shadow-[0_5px_20px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        {/* Top Bar */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full h-11 px-4 flex items-center justify-between"
        >
          <div className="w-8 h-8 rounded-full bg-gray-300" />

          <div className="bar">|</div>
          <div>
            <h1>Javed Omar</h1>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </button>

        {/* Expand */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-3">
                {menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-center py-2 rounded-xl hover:bg-gray-100"
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

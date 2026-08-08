"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function FlowerSpinner() {
  const rotate = useMotionValue(0);

  const dragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);

  const autoAnimation = useRef(null);


  const startAutoRotate = () => {
    autoAnimation.current?.stop();

    autoAnimation.current = animate(
      rotate,
      rotate.get() + 360,
      {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }
    );
  };


  useEffect(() => {
    startAutoRotate();

    return () => {
      autoAnimation.current?.stop();
    };
  }, []);


  const handleDown = (e) => {
    dragging.current = true;

    // stop auto rotation
    autoAnimation.current?.stop();

    velocity.current = 0;

    lastX.current = e.clientX;

    e.currentTarget.setPointerCapture?.(
      e.pointerId
    );
  };


  const handleMove = (e) => {
    if (!dragging.current) return;


    const diff =
      e.clientX - lastX.current;


    rotate.set(
      rotate.get() + diff * 1.5
    );


    velocity.current =
      velocity.current * 0.8 +
      diff * 0.2;


    lastX.current = e.clientX;
  };


  const handleUp = () => {
    if (!dragging.current) return;


    dragging.current = false;


    animate(
      rotate,
      rotate.get() + velocity.current * 120,
      {
        type: "inertia",

        velocity:
          velocity.current * 900,

        power: 0.8,

        timeConstant: 800,


        onComplete() {
          velocity.current = 0;

          startAutoRotate();
        },
      }
    );
  };


  return (
    <div
      className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      z-[9999]
      touch-none
      "
    >

      <motion.div

        style={{
          rotate,
          touchAction: "none",
        }}

        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}

        className="
        cursor-grab
        active:cursor-grabbing
        touch-none
        select-none
        "
      >

        <Image
          src="/flower.png"
          alt="flower"

          width={1000}
          height={1000}

          draggable={false}

          className="
          pointer-events-none
          select-none
          h-64
          md:h-80
          lg:h-110
          w-auto
          "
        />

      </motion.div>

    </div>
  );
}
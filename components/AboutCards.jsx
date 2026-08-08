"use client";
import React from "react";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { saira } from "@/app/fonts";
import BlackRubiksCube from "@/components/BlackRubiksCube";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import BlackGlobe from "@/Comonents/BlackGlobe";
const AboutCards = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const leftRotate = useTransform(scrollYProgress, [0, 1], [-25, -4]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [25, 4]);

  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 18,
    mass: 1.6,
  });

  const smoothLeftRotate = useSpring(leftRotate, {
    stiffness: 50,
    damping: 18,
    mass: 1.6,
  });

  const smoothRightRotate = useSpring(rightRotate, {
    stiffness: 50,
    damping: 18,
    mass: 1.6,
  });
  return (
    <div ref={sectionRef} className="relative max-w-[1600px] mx-auto px-4">
      {/* Circle */}

      {/* White Circle */}
      <div
        className="
      absolute
      left-1/2
      top-74
      -translate-x-1/2
      w-75
      h-75
      rounded-full
      border
      border-gray-200
      bg-white
      z-10
      hidden
      lg:block
    "
      />

      {/* Circle Corrector */}
      <div
        className="
      absolute
      left-1/2
      -translate-x-1/2
      top-107
      w-[320px]
      h-8
      bg-white
      z-20
      hidden
      lg:block
    "
      />

      {/* Clock Image */}
      <div className="relative">
        <Image
          src="/clock.png"
          width={251}
          height={236}
          alt="clock"
          className="
      absolute
      left-1/2
      top-80
      -translate-x-1/2
      z-30
      hidden
      lg:block
    "
        />
        {/* Second Hand */}
        <div
          className="
    absolute
    left-1/2
    top-[335px]
    z-40
    w-0.5
    h-28
    bg-red-500
    -translate-x-1/2
    origin-bottom
    animate-second
    hidden
    lg:block
  "
        ></div>

        {/* Center Dot */}
        <div
          className="
      absolute
      top-111.5
      left-1/2
      z-30
      -translate-x-1/2
      -translate-y-1/2
      w-3
      h-3
      rounded-full
      bg-red-500
      hidden
      lg:block
    "
        ></div>
      </div>
      <div
        className="
           hidden
          lg:block
          absolute
          left-1/2
          -translate-x-1/2
          top-27.5
          sm:top-33.75
          md:top-40
          lg:top-120.25

          bg-white
          w-10
          sm:w-57.5
          md:w-67.5
          lg:w-8

          h-47.5 
          z-20
        "
      />

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-8
          mt-36
          lg:mt-44
          px-4
          
        "
      >
        <div
          className="
                md:col-span-1
                rounded-3xl
                border
                border-gray-200
                p-4
                sm:p-6
                min-h-55
                shadow-[inset_0_0_160px_rgba(0,0,0,0.07)]
                relative
                z-20
                overflow-hidden
                
  "
        >
          <div
            className={`
    flex
    justify-between
    items-start

    

    /* SM - MD */
    bg-[url('/cube.jpeg')]
    bg-cover
    bg-center
    absolute
    top-0
    -left-3
    h-60
    w-110
    z-10

    /* LG+ (আগের মতো) */
    lg:bg-none
    lg:static
    lg:top-auto
    lg:left-auto
    lg:h-auto
    lg:w-auto
    lg:z-auto
            `}
          >
            {/* Left */}
            <div className="flex flex-col space-y-1 p-7 lg:p-2">
              <h1
                className={`${archivoBlack.className} text-white  lg:text-black text-3xl  sm:text-4xl`}
              >
                Jabed
              </h1>

              <h2
                className={`${greatVibes.className} text-white lg:text-black text-4xl sm:text-5xl opacity-55`}
              >
                Omar
              </h2>

              <div className={`flex items-center gap-2 mt-2 `}>
                <Image
                  className="grayscale opacity-60"
                  alt="Location icon"
                  src="/location.svg"
                  width={12}
                  height={12}
                />

                <p
                  className={`${saira.className} text-xs sm:text-sm text-gray-500`}
                >
                  SYLHET, BD
                </p>
              </div>
            </div>

            {/* Right - Rubik's Cube */}
            <div className="hidden sm:block sm:w-32 sm:h-32 -translate-x-35 translate-y-43">
              <BlackRubiksCube />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 rounded-3xl border border-gray-200 p-6 sm:p-8 min-h-75 shadow-[inset_0_0_160px_rgba(0,0,0,0.07)]">
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            {/* Left Side */}
            <div className="flex-1">
              <p className="text-sm tracking-widest text-gray-500 font-semibold">
                DETAILS-DRIVEN UI
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-3">
                Interfaces
                <br />
                you can feel
              </h1>

              <p className="text-gray-600 mt-4 max-w-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex-1">
              <h2 className="text-sm tracking-widest text-gray-500 font-semibold">
                PHILOSOPHY
              </h2>

                 <Tabs defaultValue="account" className="w-full">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="profile">Profile</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>

  <TabsContent value="account">
    Make changes to your account here.
  </TabsContent>

  <TabsContent value="password">
    Change your password here.
  </TabsContent>

  <TabsContent value="profile">
    Update your profile information here.
  </TabsContent>

  <TabsContent value="settings">
    Manage your settings here.
  </TabsContent>
</Tabs>
             
            </div>
          </div>
        </div>
        {/* Box 3 */}
        <div className="md:col-span-1 rounded-3xl border border-gray-200 p-6 sm:p-8 min-h-100 shadow-[inset_0_0_160px_rgba(0,0,0,0.07)]">
          <div className="flex flex-col justify-between h-full gap-8">
            {/* Top Section */}
            <div className="flex flex-col gap-6">
              <div className="flex">
                <div className="logo w-12 h-12 rounded-full bg-black"></div>

                <div className="border rounded-2xl px-4 py-1 w-fit">
                  <h2 className="text-xs sm:text-base font-semibold">
                    Available for
                    <br />
                    work
                  </h2>
                </div>
              </div>

              {/* Main SEO Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-2xl font-bold leading-tight">
                Let's build
                <br />
                something
                <br />
                that actually works.
              </h1>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="logo w-10 h-10 rounded-full bg-black"></div>

                <div>
                  <h2 className="font-bold text-lg">OMAR.COM</h2>

                  <p className="text-xs text-gray-500">
                    TAP TO COPY
                    <br />
                    EMAIL
                  </p>
                </div>
              </div>

              <button
                className="
        w-full
        sm:w-fit
        px-6
        py-3
        rounded-full
        bg-black
        text-white
        hover:bg-gray-800
        transition
        "
              >
                CONNECT NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 my-8 px-4">
        <div className="flex-1 min-h-100 rounded-3xl border border-gray-200 shadow-[inset_0_0_160px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col">
          <h2 className="text-sm sm:text-base tracking-widest text-gray-500 font-semibold">
            AVAILABLE GLOBALLY
          </h2>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-4 leading-tight">
            Adaptable across
            <br />
            time zones
          </h1>

          <div className="flex flex-col gap-4 items-start sm:items-end mt-auto pt-8">
            <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-green-700 transition">
              UK
            </button>

            <button className="px-6 py-3 rounded-full bg-white text-black border hover:bg-blue-700 hover:text-white transition">
              BD
            </button>

            <button className="px-6 py-3 rounded-full bg-black text-white hover:bg-purple-700 transition">
              USA
            </button>
          </div>
        </div>
        <div className="relative flex-1 min-h-100 rounded-3xl border border-gray-200 shadow-[inset_0_0_160px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col overflow-hidden">
          <div className="flex flex-wrap justify-end gap-2">
            <h1 className="text-black text-3xl font-semibold">Founder of</h1>

            <h1 className="text-black text-3xl font-bold">Rune</h1>
          </div>

          <div className="flex justify-end mt-4">
            <h2 className="text-black text-sm font-medium text-right">
              Crafting Digital Experiences
            </h2>
          </div>

          <motion.div
            style={{ y: smoothY }}
            className="absolute top-50  left-1/2 lg:left-68 -translate-x-1/2 flex "
          >
            <motion.div
              style={{ rotate: smoothLeftRotate }}
              className="-translate-x-5 translate-y-8 z-10"
            >
              <Image
                src="/iphone.png"
                alt="Left Phone"
                width={150}
                height={200}
                className="
                  drop-shadow-2xl
                  w-20 sm:w-24 md:w-28 lg:w-36 xl:w-40
                  h-auto
      
    "
              />
            </motion.div>

            <Image
              src="/iphone.png"
              alt="Center Phone"
              width={150}
              height={200}
              className="-mx-10 z-20 drop-shadow-2xl
               w-20 sm:w-24 md:w-28 lg:w-32 xl:w-29
               h-auto"
            />

            <motion.div
              style={{ rotate: smoothRightRotate }}
              className="translate-x-5 translate-y-8 z-10"
            >
              <Image
                src="/iphone.png"
                alt="Right Phone"
                width={150}
                height={200}
                className="
      drop-shadow-2xl
      w-20 sm:w-24 md:w-28 lg:w-36 xl:w-40
      h-auto
    "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;

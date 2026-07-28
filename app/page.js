import React from "react";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";

const Page = () => {
  return (
    <main className="overflow-x-hidden">
      <section aria-labelledby="hero-heading">
        <header className="max-w-[1600px] mx-auto px-4">
          <p
            className={`${archivoBlack.className}
            flex justify-center items-center
            text-center leading-none
            pt-10
            mt-20 sm:mt-28 md:mt-36 lg:mt-45
            text-[#171717]
            text-[70px]
            sm:text-[100px]
            md:text-[140px]
            lg:text-[170px]
            xl:text-[200px]`}
          >
            OMAR
          </p>

          <h2
            id="hero-heading"
            className={`${inter.className}
            mt-4
            text-center
            tracking-[6px]
            md:tracking-[10px]
            lg:tracking-[13px]
            text-[#828282]
            text-[14px]
            sm:text-[16px]
            md:text-[18px]
            lg:text-[22px]`}
          >
            I BUILD PRODUCTS THAT
          </h2>

          <h2
            className={`${greatVibes.className}
            text-center
            text-[#171717]
            font-semibold
            text-[42px]
            sm:text-[55px]
            md:text-[65px]
            lg:text-[70px]`}
          >
            deliver Real Impact
          </h2>
        </header>

        <section
          aria-label="Hero details"
          className={`${saira.className}
          max-w-350
          mx-auto
          px-6
          mt-20
          lg:mt-52
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-10`}
        >
          <div className="flex flex-col items-center text-center md:text-right">
            <Image alt="Location" src="/location.svg" width={20} height={20} />
            <p className="font-bold">BASED IN SYLHET,</p>
            <h3>BANGLADESH</h3>
          </div>

          <div className="flex flex-col items-center text-center md:text-right">
            <Image alt="Developer" src="/location.svg" width={20} height={20} />
            <p className="font-bold">FULL STACK NEXT.JS</p>
            <h3>DEVELOPER</h3>
          </div>
        </section>
      </section>

      <div className="relative max-w-[1600px] mx-auto px-4">
        {/* Circle */}
        <div
          className="
          absolute
          left-1/2
          top-40
          -translate-x-1/2

          w-45
          h-45

          sm:w-55
          sm:h-55

          md:w-65
          md:h-65

          lg:w-75
          lg:h-75

          rounded-full
          border
          border-gray-200
          bg-white
          z-20
           flex
           justify-center
           items-center
        "
        >
          <div className="">
          <Image
            className="
        relative
          left-1/2
           -translate-x-1/2
         
          "
            src="/clock.png"
            width={251}
height={236}
            alt="clock"
          />
          </div>
        </div>

        {/* Circle Corrector */}
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          top-45
          sm:top-33.75
          md:top-46
          lg:top-75

          bg-white
          w-47.5
          sm:w-57.5
          md:w-67.5
          lg:w-[320px]

          h-8
          z-1
        "
        />
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          top-27.5
          sm:top-33.75
          md:top-40
          lg:top-75.25

          bg-white
          w-10
          sm:w-57.5
          md:w-67.5
          lg:w-8

          h-47.5 
          z-1
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
          <div className="md:col-span-1 rounded-3xl border border-gray-200 p-6 min-h-75 shadow-[inset_0_0_160px_rgba(0,0,0,0.07)]">
            Box 1
          </div>

          <div className="md:col-span-2 rounded-3xl border border-gray-200 p-6 min-h-75 shadow-[inset_0_0_160px_rgba(0,0,0,0.07)]">
            Box 2
          </div>

          <div className="md:col-span-1 rounded-3xl border border-gray-200 p-6 min-h-75 shadow-[inset_0_0_160px_rgba(0,0,0,0.07)]">
            Box 3
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 my-8 px-4">
          <div className="flex-1 min-h-100 rounded-3xl border border-gray-200 shadow-[inset_0_0_160px_rgba(0,0,0,0.15)]"></div>

          <div className="flex-1 min-h-100 rounded-3xl border border-gray-200 shadow-[inset_0_0_160px_rgba(0,0,0,0.15)]"></div>
        </div>
      </div>
    </main>
  );
};

export default Page;

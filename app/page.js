import React from "react";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
import BlackRubiksCube from "@/Comonents/BlackRubiksCube";
// import BlackGlobe from "@/Comonents/BlackGlobe";

const Page = () => {
  return (
    <main className="overflow-x-hidden ">
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
          top-74
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
  "
          >
            <div className="flex justify-between items-start">
              {/* Left */}
              <div className="flex flex-col space-y-1">
                <h1
                  className={`${archivoBlack.className} text-3xl sm:text-4xl`}
                >
                  Jabed
                </h1>

                <h2
                  className={`${greatVibes.className} text-4xl sm:text-5xl opacity-55`}
                >
                  Omar
                </h2>

                <div className="flex items-center gap-2 mt-2">
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
              <div className="hidden sm:block sm:w-32 sm:h-32 -translate-x-30 translate-y-43">
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

                <ul className="flex flex-wrap gap-3 mt-4">
                  <li className="px-4 py-2 rounded-full border">Motion</li>

                  <li className="px-4 py-2 rounded-full border">Type</li>

                  <li className="px-4 py-2 rounded-full border">Feedback</li>

                  <li className="px-4 py-2 rounded-full border">Craft</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6">
                  Attention to detail
                </h3>

                <p className="text-gray-600 mt-3 max-w-md">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias, atque?
                </p>
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

            <div className="absolute top-40 left-55 -translate-x-1/2 flex items-end">
              <Image
                src="/iphone.png"
                alt="Left Phone"
                width={150}
                height={200}
                className="-rotate-12 -translate-x-5 translate-y-8 z-10 drop-shadow-2xl"
              />

              <Image
                src="/iphone.png"
                alt="Center Phone"
                width={150}
                height={200}
                className="-mx-10 z-20 drop-shadow-2xl"
              />

              <Image
                src="/iphone.png"
                alt="Right Phone"
                width={150}
                height={200}
                className="rotate-12 translate-x-5 translate-y-8 z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center mt-40 mb-20">
        <p className="text-gray-500">Crafting modern experiences</p>

        <div className="flex">
          <h1 className="text-6xl font-bold">VENTURE</h1>
          <h1 className="text-6xl font-bold">SHOWCASE</h1>
        </div>
      </div>
      {/* project 1 */}
      <div className="con flex flex-col lg:flex-row w-full gap-10">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10">
          {/* Item */}
          <div className="relative flex pb-12">
            <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-300" />

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              1
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Planning</h3>
              <p className="text-gray-400">
                Discuss project goals and requirements.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="relative flex pb-12">
            <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-300" />

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              2
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Design</h3>
              <p className="text-gray-400">Create modern UI/UX design.</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative flex">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              3
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Launch</h3>
              <p className="text-gray-400">Deploy the final project.</p>
            </div>
          </div>
        </div>
            <div className="grid grid-cols-3 gap-6 p-10 w-full">
        {/* Left small card */}
        <div className="h-55 rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
          <Image
            src="/iphone.png"
            width={140}
            height={300}
            alt="iPhone"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 top-7"
          />
        </div>

        {/* Big right card */}
        <div
          className="col-span-2 row-span-2 h-112.5 rounded-3xl
           bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative"
        >
          <Image
            src="/ipad.webp"
            width={100}
            height={200}
            alt="iPhone"
            className="absolute bottom-10
          left-1/2
          -translate-x-1/2
          w-[80%] -top-1.5"
          />
        </div>

        {/* Another small card */}
        <div className="h-55 rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
          <Image
            src="/iphone.png"
            width={140}
            height={300}
            alt="iPhone"
            className="absolute bottom-0 left-1/2 
      -translate-x-1/2 w-35 top-7"
          />
        </div>
      </div>
     
      
      </div>
      {/* project 2 */}
      <div className="con flex flex-col lg:flex-row w-full gap-10">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10">
          {/* Item */}
          <div className="relative flex pb-12">
            <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-300" />

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              1
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Planning</h3>
              <p className="text-gray-400">
                Discuss project goals and requirements.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="relative flex pb-12">
            <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-300" />

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              2
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Design</h3>
              <p className="text-gray-400">Create modern UI/UX design.</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative flex">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              3
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Launch</h3>
              <p className="text-gray-400">Deploy the final project.</p>
            </div>
          </div>
        </div>
            <div className="grid grid-cols-3 gap-6 p-10 w-full">
        {/* Left small card */}
        <div className="h-55 rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
          <Image
            src="/iphone.png"
            width={140}
            height={300}
            alt="iPhone"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 top-7"
          />
        </div>

        {/* Big right card */}
        <div
          className="col-span-2 row-span-2 h-112.5 rounded-3xl
           bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative"
        >
          <Image
            src="/ipad.webp"
            width={100}
            height={200}
            alt="iPhone"
            className="absolute bottom-10
          left-1/2
          -translate-x-1/2
          w-[80%] -top-1.5"
          />
        </div>

        {/* Another small card */}
        <div className="h-55 rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
          <Image
            src="/iphone.png"
            width={140}
            height={300}
            alt="iPhone"
            className="absolute bottom-0 left-1/2 
      -translate-x-1/2 w-35 top-7"
          />
        </div>
      </div>
     
      
      </div>
      {/* project 3 */}
      <div className="con flex flex-col lg:flex-row w-full gap-10">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10">
          {/* Item */}
          <div className="relative flex pb-12">
            <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-300" />

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              1
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Planning</h3>
              <p className="text-gray-400">
                Discuss project goals and requirements.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="relative flex pb-12">
            <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-300" />

            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              2
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Design</h3>
              <p className="text-gray-400">Create modern UI/UX design.</p>
            </div>
          </div>

          {/* Item */}
          <div className="relative flex">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
              3
            </div>

            <div className="ml-4">
              <h3 className="font-semibold text-white">Launch</h3>
              <p className="text-gray-400">Deploy the final project.</p>
            </div>
          </div>
        </div>
            <div className="grid grid-cols-3 gap-6 p-10 w-full">
        {/* Left small card */}
        <div className="h-55 rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
          <Image
            src="/iphone.png"
            width={140}
            height={300}
            alt="iPhone"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 top-7"
          />
        </div>

        {/* Big right card */}
        <div
          className="col-span-2 row-span-2 h-112.5 rounded-3xl
           bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative"
        >
          <Image
            src="/ipad.webp"
            width={100}
            height={200}
            alt="iPhone"
            className="absolute bottom-10
          left-1/2
          -translate-x-1/2
          w-[80%] -top-1.5"
          />
        </div>

        {/* Another small card */}
        <div className="h-55 rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
          <Image
            src="/iphone.png"
            width={140}
            height={300}
            alt="iPhone"
            className="absolute bottom-0 left-1/2 
      -translate-x-1/2 w-35 top-7"
          />
        </div>
      </div>
     
      
      </div>
    </main>
  );
};

export default Page;

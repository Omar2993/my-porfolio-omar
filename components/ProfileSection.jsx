
"use client";

import React from "react";
import ThreeDImageCarousel from "./ThreeDImageCarousel";

const ProfileSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-20
        text-neutral-900
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-20
            xl:gap-28
          "
        >
          {/* Text */}
          <div className="max-w-3xl">

            {/* Small label */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="h-px w-8 bg-neutral-900 sm:w-10" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-neutral-500
                  sm:text-xs
                "
              >
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.04em]
                text-neutral-950
                sm:text-5xl
                md:text-6xl
                lg:text-[4.5rem]
                xl:text-[5rem]
              "
            >
              Building the bridge between{" "}
              <span className="text-neutral-300">
                ideas and experiences.
              </span>
            </h2>

            {/* Description */}
            <div
              className="
                mt-7
                max-w-2xl
                space-y-5
                text-sm
                leading-7
                text-neutral-500
                sm:mt-8
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              <p>
                I'm Parth Sharma, an engineering-driven developer who turns
                complex technical challenges into high-speed web products.
                I manage the entire stack with a focus on clean, reusable code
                and seamless performance.
              </p>

              <p>
                I excel in Next.js and full-stack architecture, always
                delivering modern solutions that actually solve problems for
                every user.
              </p>

              <p>
                As the founder of Rune, I manage platforms like Rune AI and
                Rune Hub. Building a startup ecosystem has taught me how to
                ship products that scale.
              </p>

              <p>
                My code is built to last, helping your startup reach the next
                level.
              </p>
            </div>

            {/* Social Links */}
            <nav
              aria-label="Social media links"
              className="
                mt-8
                flex
                flex-wrap
                gap-3
                sm:mt-9
              "
            >
              <a
                href="#"
                aria-label="Visit LinkedIn profile"
                className="
                  rounded-full
                  border
                  border-neutral-200
                  bg-neutral-50
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-500
                  transition-all
                  duration-300
                  hover:border-neutral-300
                  hover:bg-neutral-100
                  hover:text-neutral-950
                  focus:outline-none
                  focus:ring-2
                  focus:ring-neutral-900
                  focus:ring-offset-2
                "
              >
                LinkedIn ↗
              </a>

              <a
                href="#"
                aria-label="Visit GitHub profile"
                className="
                  rounded-full
                  border
                  border-neutral-200
                  bg-neutral-50
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-500
                  transition-all
                  duration-300
                  hover:border-neutral-300
                  hover:bg-neutral-100
                  hover:text-neutral-950
                  focus:outline-none
                  focus:ring-2
                  focus:ring-neutral-900
                  focus:ring-offset-2
                "
              >
                GitHub ↗
              </a>

              <a
                href="#"
                aria-label="Visit Twitter profile"
                className="
                  rounded-full
                  border
                  border-neutral-200
                  bg-neutral-50
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-500
                  transition-all
                  duration-300
                  hover:border-neutral-300
                  hover:bg-neutral-100
                  hover:text-neutral-950
                  focus:outline-none
                  focus:ring-2
                  focus:ring-neutral-900
                  focus:ring-offset-2
                "
              >
                Twitter ↗
              </a>
            </nav>

            {/* CTA */}
            <button
              type="button"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-neutral-950
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                shadow-lg
                shadow-neutral-950/10
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-neutral-800
                hover:shadow-xl
                sm:px-7
              "
            >
              <span>Dive in deeper</span>

              <span
                aria-hidden="true"
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-neutral-950
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                ↗
              </span>
            </button>
          </div>

          {/* 3D Image */}
          <div
            className="
              relative
              w-full
              
              p-3
              sm:p-4
            "
          >
         

            <div className="h-full min-h-[294px] w-full sm:min-h-[368px] lg:min-h-[468px]">
              <ThreeDImageCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

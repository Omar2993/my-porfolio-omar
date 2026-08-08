import React from "react";
import AnimatedGradientText from "./AnimatedGradientText";
import Image from "next/image";

const skills = [
  "ReactJS",
  "NextJS",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Sanity",
  "Contentful",
  "NodeJS",
  "ExpressJS",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Zustand",
  "Zod",
  "pnpm",
  "Bun",
  "Git",
  "GitHub",
  "Vercel",
  "AWS",
  "Docker",
  "Expo",
  "Clerk",
  "Linux",
];

const SkillSet = () => {
  return (
    <section className="w-full py-40 px-6">
<div className="relative flex justify-center">
  <Image
    src="/flower.png"
    alt=""
    width={1000}
    height={1000}
    className="
      absolute
      left-1/2
      top-1/2
      w-auto
      h-64
      md:h-80
      lg:h-170
      z-0
      animate-slow-rotate
    "
  />
</div>      <div
        className="
        max-w-7xl 
        mx-auto 
        flex 
        flex-col 
        items-center 
        justify-center
        text-center
      "
      >
        <p
          className="
          text-sm
          md:text-base
          uppercase
          tracking-[0.3em]
          text-gray-400
          mb-4
          z-10
        "
        >
          My Skillset
        </p>

        <h1
          className="
         z-10
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          leading-tight
          tracking-tight
        "
        >
          The Magic{" "}
          <span className="text-gray-400">
            <AnimatedGradientText>Behind</AnimatedGradientText>
          </span>
        </h1>

        <p
          className="
          mt-6
          max-w-2xl
          text-sm
          sm:text-base
          md:text-lg
          text-gray-400
          leading-7
        "
        >
          Exploring the technologies, tools, and creative process behind
          building modern digital experiences.
        </p>

        {/* Skills */}
        <div
          className="
          mt-14
          max-w-5xl
          flex
          flex-wrap
          justify-center
          gap-4
        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              px-5
              py-3
              rounded-full
              border
              border-gray-800
              bg-neutral-900
              text-sm
              md:text-base
              text-gray-300
              hover:text-white
              hover:border-gray-500
              transition
              duration-300
            "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSet;

import React from "react";

import { archivoBlack } from "@/app/fonts";
import Image from "next/image";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
import PageAnimation from "@/components/PageAnimation";

import ShinyText from "@/components/ui/ShinyText";
const about = () => {
  return (
    <PageAnimation>
      <header
        className="
    max-w-[1600px]
    mx-auto
    -mt-45
    h-225
    px-4
    bg-[radial-gradient(circle,rgba(0,0,0,0)_37%,rgba(0,0,0,0.7)_236%)]
    mask-[linear-gradient(to_bottom,black_85%,transparent_100%)]
  "
      >
        <p
          className={`${archivoBlack.className}
              hero-name
              flex justify-center items-center
              text-center leading-none
            relative
                 pt-60
              mt-20 sm:mt-28 md:mt-36 lg:mt-45
              text-[#171717]
              text-[70px]
              sm:text-[100px]
              md:text-[140px]
              lg:text-[170px]
              xl:text-[200px]
              tracking-[-15px]
              `}
        >
          {" "}
          <ShinyText
            text="ABOUT ME"
            speed={3.6}
            delay={0}
            color="#000000"
            shineColor="#3c3b3b"
            spread={40}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </p>

        <h2
          id="hero-heading"
          className={`${inter.className}
              hero-subtitle
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
          <ShinyText
            text="  Get to know more about"
            speed={3.6}
            delay={0}
            color="#000000"
            shineColor="#3c3b3b"
            spread={40}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </h2>

        <h2
          className={`${greatVibes.className}
              hero-impact
              text-center
              text-[#171717]
              font-semibold
              text-[42px]
              sm:text-[55px]
              md:text-[65px]
              lg:text-[70px]`}
        >
          who I am.
        </h2>
      </header>
    </PageAnimation>
  );
};

export default about;

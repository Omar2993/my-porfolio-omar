import React from 'react'

import { archivoBlack } from "@/app/fonts";
import Image from 'next/image';
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
const Hero = () => {
  return (
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
  )
}

export default Hero

import { Archivo_Black, Inter, Cormorant_Garamond } from "next/font/google";

import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";



export default function About() {
   return (
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
  );
}
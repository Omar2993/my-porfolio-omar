import React from 'react'
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
import AnimatedGradientText from './AnimatedGradientText';

const SectionTitle = () => {
  return (
  <>
  
    <div className="flex flex-col justify-center items-center mt-40 mb-20 px-4">

  <p className="text-gray-500 text-sm sm:text-base text-center">
    Crafting modern experiences
  </p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
    
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
      VENTURE
    </h1>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
      <AnimatedGradientText>
        SHOWCASE
      </AnimatedGradientText>
    </h1>

  </div>

</div>
  </>
  )
}

export default SectionTitle

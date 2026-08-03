import React from 'react'
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
import AnimatedGradientText from './AnimatedGradientText';

const SectionTitle = () => {
  return (
  <>
  
      <div className=" flex flex-col justify-center items-center mt-40 mb-20">
        <p className="text-gray-500">Crafting modern experiences</p>

        <div className="flex">
          <h1 className="text-6xl font-bold">VENTURE</h1>
          <h1 className="text-6xl font-bold">
            <AnimatedGradientText>SHOWCASE</AnimatedGradientText></h1>
        </div>
      </div>
  </>
  )
}

export default SectionTitle

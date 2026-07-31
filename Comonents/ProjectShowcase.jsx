import React from 'react'
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
// import BlackGlobe from "@/Comonents/BlackGlobe";

const ProjectShowcase = () => {
  return (
    <>
    

      {/* project 1 */}
      <div className="mx-auto px-6 py-20">
      <div className="con flex flex-col lg:flex-row  w-full justify-center ">
            <div className="projectdetails lg:w-2/5">
              <ol className='flex flex-col justify-center'>
                <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
              </ol>
            </div>
        <div className="grid grid-cols-3 gap-1 lg:gap-6 p-10 w-full  ">
          {/* Left small card */}
          <div className=" h-20 lg:h-55 rounded-lg lg:rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
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
            className="col-span-2 row-span-2 h-40 lg:h-112.5 rounded-lg lg:rounded-3xl
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
          <div className=" h-20 lg:h-55 rounded-lg lg:rounded-3xl bg-linear-to-br from-red-800 to-red-500 overflow-hidden relative">
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
      </div>
    </>
  )
}

export default ProjectShowcase

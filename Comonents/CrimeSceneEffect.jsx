import React from 'react'
const words = [
  "Future-Proof",
  "SEO-Ready",
  "Immersive",
  "Protected",
  "Dependable",
  "Captivating",
  "User-Friendly",
  "Adaptive",
  "Fluid",
];

const CrimeSceneEffect = () => {
  return (
    <div className="w-full overflow-hidden py-6 bg-yellow-400 rotate-[-2deg]">
     <div className="flex w-max whitespace-nowrap gap-8 animate-[marquee_15s_linear_infinite]">
        {[...words, ...words].map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-8
              text-black
              text-3xl
              md:text-5xl
              font-bold
              uppercase
            "
          >
            <span>{item}</span>
            <span>★</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CrimeSceneEffect

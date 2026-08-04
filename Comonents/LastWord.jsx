import React from "react";

import RotatingBubble from "@/Comonents/RotatingBubble";
const LastWord = () => {
  return (
    <section className="w-full py-20 px-6">

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-12
        "
      >

        {/* Text Content */}
        <div className="text-center lg:text-left">

          <div
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-4
            "
          >

            {/* Profile Avatar */}
            <div
              className="
                w-12
                h-12
                sm:w-14
                sm:h-14
                rounded-full
                bg-gray-700
                overflow-hidden
              "
            ></div>


            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-bold
                leading-tight
              "
            >
              Let's create
            </h2>

          </div>


          <h2
            className="
              mt-3
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
            "
          >
            something{" "}
            <span className="text-gray-400">
              real.
            </span>
          </h2>


        </div>


        {/* Animated Bubble */}
        <div
          className="
          flex 
          justify-center 
          items-center
            w-40
            h-40
            sm:w-52
            sm:h-52
            lg:w-64
            lg:h-64
            rounded-full
            bg-neutral-100

          "
        >
<RotatingBubble/>

        </div>


      </div>

    </section>
  );
};

export default LastWord;
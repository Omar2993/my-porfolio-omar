import React from "react";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="max-w-4xl">

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-tight
                tracking-tight
              "
            >
              Building the bridge between{" "}
              <span className="text-gray-400">
                ideas and experiences
              </span>
            </h2>


            <p
              className="
                mt-8
                max-w-3xl
                text-sm
                sm:text-base
                md:text-lg
                text-gray-400
                leading-7
              "
            >
              I'm Parth Sharma, an engineering-driven developer who turns
              complex technical challenges into high-speed web products.
              I manage the entire stack with a focus on clean, reusable code
              and seamless performance.

              <br /><br />

              I excel in Next.js and full-stack architecture, always delivering
              modern solutions that actually solve problems for every user.

              <br /><br />

              As the founder of Rune, I manage platforms like Rune AI and Rune
              Hub. Building a startup ecosystem has taught me how to ship
              products that scale.

              <br /><br />

              My code is built to last, helping your startup reach the next level!
            </p>


            <div className="flex flex-wrap gap-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                GitHub
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>


            <button
              className="
                mt-10
                px-7
                py-3
                rounded-full
                bg-white
                text-black
                font-medium
                hover:bg-gray-200
                transition
              "
            >
              Dive in deeper
            </button>

          </div>


          {/* Images */}
          <div
            className="
              grid
              grid-cols-2
              gap-4
            "
          >

            <Image
              src="/profile1.webp"
              width={400}
              height={500}
              alt="Developer workspace"
              className="
                rounded-3xl
                object-cover
                col-span-2
                h-[350px]
              "
            />


            <Image
              src="/profile2.webp"
              width={300}
              height={300}
              alt="Coding setup"
              className="
                rounded-3xl
                object-cover
                h-[220px]
              "
            />


            <Image
              src="/profile3.webp"
              width={300}
              height={300}
              alt="Creative development"
              className="
                rounded-3xl
                object-cover
                h-[220px]
              "
            />

          </div>


        </div>

      </div>
    </section>
  );
};

export default ProfileSection;
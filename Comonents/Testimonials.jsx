import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Parth Sharma",
    role: "Frontend Developer",
    image: "/profile.webp",
    message:
      "Working with Parth has been genuinely positive. He brings strong frontend knowledge and fresh perspective to every problem, making collaboration smooth.",
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Startup Founder",
    image: "/profile2.webp",
    message:
      "Amazing experience. The project was delivered with clean code and excellent performance.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "UI Designer",
    image: "/profile3.webp",
    message:
      "Great collaboration and attention to detail. Highly recommended developer.",
  },
];


const Testimonials = () => {
  return (
    <section className="w-full py-20 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <p
          className="
            text-sm
            md:text-base
            uppercase
            tracking-[0.3em]
            text-gray-400
            mb-5
          "
        >
          WHAT OTHERS SAY
        </p>


        <h2
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
          "
        >
          The Voices{" "}
          <span className="text-gray-400">
            Behind
          </span>
        </h2>


        <p
          className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-400
          "
        >
          Hear what clients and collaborators have to say about their
          experience working together.
        </p>


        {/* Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            text-left
          "
        >

          {testimonials.map((item) => (
            <article
              key={item.id}
              className="
                rounded-3xl
                border
                border-gray-800
                bg-neutral-900
                p-6
                sm:p-8
              "
            >

              <div className="flex items-center gap-4">

                <Image
                  src={item.image}
                  width={64}
                  height={64}
                  alt={`${item.name} profile`}
                  className="
                    w-14
                    h-14
                    sm:w-16
                    sm:h-16
                    rounded-full
                    object-cover
                  "
                />


                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>

              </div>


              <div
                className="
                  mt-6
                  rounded-2xl
                  bg-black
                  p-5
                  sm:p-6
                "
              >
                <p className="text-sm sm:text-base leading-7 text-gray-300">
                  “{item.message}”
                </p>
              </div>


            </article>
          ))}

        </div>


      </div>

    </section>
  );
};

export default Testimonials;
"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder",
    image: "/images/person-1.jpg",
    message:
      "Working with this developer was an excellent experience. The final product was fast, clean and beautifully designed.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "Product Designer",
    image: "/images/person-2.jpg",
    message:
      "The attention to detail and smooth interactions made the entire website feel extremely polished.",
  },
  {
    id: 3,
    name: "Daniel Lee",
    role: "Startup Founder",
    image: "/images/person-3.jpg",
    message:
      "Everything was handled professionally, from the design system to the final responsive implementation.",
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Creative Director",
    image: "/images/person-4.jpg",
    message:
      "A very thoughtful approach to both performance and visual design. The result exceeded my expectations.",
  },
  {
    id: 5,
    name: "James Cooper",
    role: "CEO",
    image: "/images/person-5.jpg",
    message:
      "The website feels modern, fast and intuitive. Communication throughout the project was also excellent.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">

      {/* ================= HEADER ================= */}

      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
          Testimonials
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
          What people say
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          A few words from people who have experienced the work,
          process and results.
        </p>

      </div>


      {/* ================= CARDS ================= */}

      <div className="relative space-y-6">


        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-20
            bg-gradient-to-r
            from-white
            to-transparent
            sm:w-40
            lg:w-56
          "
        />


        {/* RIGHT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-20
            bg-gradient-to-l
            from-white
            to-transparent
            sm:w-40
            lg:w-56
          "
        />


        {/* ================================================= */}
        {/* TOP ROW — RIGHT → LEFT */}
        {/* ================================================= */}

        <div className="testimonial-top flex w-max gap-6">

          {[...testimonials, ...testimonials].map((item, index) => (

            <article
              key={`top-${item.id}-${index}`}
              className="
                group
                w-[320px]
                shrink-0
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-gray-300
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                sm:w-[380px]
                sm:p-8
              "
            >

              {/* Profile */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    relative
                    h-14
                    w-14
                    shrink-0
                    overflow-hidden
                    rounded-full
                    ring-1
                    ring-gray-200
                    sm:h-16
                    sm:w-16
                  "
                >

                  <Image
                    src={item.image}
                    alt={`${item.name} profile`}
                    fill
                    sizes="64px"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                </div>


                <div className="min-w-0">

                  <h3 className="truncate text-lg font-semibold text-gray-900 sm:text-xl">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.role}
                  </p>

                </div>

              </div>


              {/* Message */}

              <div className="mt-6 rounded-2xl bg-gray-50 p-5 sm:p-6">

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  “{item.message}”
                </p>

              </div>


              {/* Bottom Detail */}

              <div className="mt-6 flex items-center justify-between">

                <span
                  className="
                    h-px
                    w-10
                    bg-gray-200
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                <span className="text-xs tracking-[0.2em] text-gray-300">
                  {String((index % testimonials.length) + 1).padStart(2, "0")}
                </span>

              </div>

            </article>

          ))}

        </div>


        {/* ================================================= */}
        {/* BOTTOM ROW — LEFT → RIGHT */}
        {/* ================================================= */}

        <div className="testimonial-bottom flex w-max gap-6">

          {[...testimonials, ...testimonials].map((item, index) => (

            <article
              key={`bottom-${item.id}-${index}`}
              className="
                group
                w-[320px]
                shrink-0
                rounded-3xl
                border
                border-gray-200
                bg-gray-50
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-gray-300
                hover:bg-white
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                sm:w-[380px]
                sm:p-8
              "
            >

              {/* Profile */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    relative
                    h-14
                    w-14
                    shrink-0
                    overflow-hidden
                    rounded-full
                    ring-1
                    ring-gray-200
                    sm:h-16
                    sm:w-16
                  "
                >

                  <Image
                    src={item.image}
                    alt={`${item.name} profile`}
                    fill
                    sizes="64px"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                </div>


                <div className="min-w-0">

                  <h3 className="truncate text-lg font-semibold text-gray-900 sm:text-xl">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.role}
                  </p>

                </div>

              </div>


              {/* Message */}

              <div className="mt-6 rounded-2xl bg-white p-5 sm:p-6">

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  “{item.message}”
                </p>

              </div>


              {/* Bottom Detail */}

              <div className="mt-6 flex items-center justify-between">

                <span
                  className="
                    h-px
                    w-10
                    bg-gray-200
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                <span className="text-xs tracking-[0.2em] text-gray-300">
                  {String((index % testimonials.length) + 1).padStart(2, "0")}
                </span>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "../data/Projects";
import HoverCircle from "./HoverCircle";
import ScrollProgress from "./ScrollProgress";

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const totalScroll = section.offsetHeight - window.innerHeight;

      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

      const percentage = totalScroll <= 0 ? 0 : (scrolled / totalScroll) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeProject = projects[activeIndex];

  useEffect(() => {
    const items = document.querySelectorAll(".project-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      className="
      mx-auto 
      px-4 
      sm:px-6 
      lg:px-8 
      py-16 
      sm:py-20
      "
    >
      <div
        className="
        flex 
        flex-col 
        lg:flex-row 
        lg:items-start 
        gap-12 
        lg:gap-16
        "
      >
        {/* LEFT STICKY */}

        <div
          className="
          w-full 
          lg:w-2/5 
          lg:sticky 
          lg:top-24 
          self-start 
          h-fit
          "
        >
          <h2
            className="
            text-3xl 
            sm:text-4xl 
            lg:text-5xl 
            font-bold 
            mb-4
            "
          >
            {activeProject.title}
          </h2>

          <p
            className="
            mb-6 
            text-sm 
            sm:text-base 
            text-gray-300 
            leading-7
            "
          >
            {activeProject.description}
          </p>

          <ul
            className="
            list-disc 
            pl-5 
            space-y-2
            text-sm
            sm:text-base
            "
          >
            {activeProject.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <div
            className="
            flex 
            flex-wrap 
            gap-2 
            sm:gap-3 
            mt-8
            "
          >
            {activeProject.tech.map((tech, i) => (
              <span
                key={i}
                className="
                px-3 
                py-1.5
                sm:px-4 
                sm:py-2
                text-xs
                sm:text-sm
                rounded-full 
                border 
                border-white/20
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <ScrollProgress
          progress={progress}
          total={projects.length}
          activeIndex={activeIndex}
         
        />

        {/* RIGHT SCROLL */}

        <div className="w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className="
              project-item
              min-h-[45vh]
              sm:min-h-[60vh]
              lg:min-h-[55vh]
              flex
              items-center
              "
            >
              <HoverCircle>
                <div
                  className="
                  grid 
                  grid-cols-3 
                  gap-2
                  sm:gap-3
                  lg:gap-5
                  px-2
                  sm:px-6
                  lg:px-10
                  w-full
                  "
                >
                  {/* SMALL CARD */}

                  <div
                    className={`
                    hidden
                    md:block
                    lg:block
                    sm:h-28
                    lg:h-45
                    rounded-lg
                    lg:rounded-3xl
                    bg-linear-to-br
                    ${project.color}
                    overflow-hidden
                    relative
                    `}
                  >
                    <Image
                      src="/iphone.png"
                      width={140}
                      height={300}
                      alt="iPhone"
                      className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-16
                      sm:w-24
                      lg:w-35
                      top-4
                      sm:top-7
                      "
                    />
                  </div>

                  {/* BIG CARD */}

                  <div
                    className={`
                    col-span-2
                    row-span-2
                    h-40
                    sm:w-10/12
                    sm:h-64
                    lg:h-94
                    rounded-lg
                    lg:rounded-3xl
                    bg-linear-to-br
                    ${project.color}
                    overflow-hidden
                    relative
                    `}
                  >
                    <Image
                      src="/ipad.webp"
                      width={100}
                      height={200}
                      alt="iPad"
                      className="
                      absolute
                      bottom-10
                      left-1/2
                      -translate-x-1/2
                      w-[85%]
                      sm:w-[80%]
                      -top-1
                      "
                    />
                  </div>

                  {/* SMALL CARD */}

                  <div
                    className={`
                    h-16
                      hidden
                    md:block
                    lg:block
                    sm:h-28
                    lg:h-45
                    rounded-lg
                    lg:rounded-3xl
                    bg-linear-to-br
                    ${project.color}
                    overflow-hidden
                    relative
                    `}
                  >
                    <Image
                      src="/iphone.png"
                      width={140}
                      height={300}
                      alt="iPhone"
                      className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-16
                      sm:w-24
                      lg:w-35
                      top-4
                      sm:top-7
                      "
                    />
                  </div>
                </div>
              </HoverCircle>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;

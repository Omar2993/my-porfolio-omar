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

    const totalScroll =
      section.offsetHeight - window.innerHeight;

    const scrolled = Math.min(
      Math.max(-rect.top, 0),
      totalScroll
    );

    const percentage =
      totalScroll <= 0 ? 0 : (scrolled / totalScroll) * 100;

    setProgress(percentage);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
console.log(projects);

  const activeProject = projects[activeIndex];

  useEffect(() => {
    const items = document.querySelectorAll(".project-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.10,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className="mx-auto px-6 py-20">

      <div className="flex flex-col lg:flex-row lg:items-start gap-10 ">


        {/* LEFT STICKY */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-24 self-start  h-fit">

          <h2 className="text-4xl font-bold mb-4">
            {activeProject.title}
          </h2>

          <p className="mb-6 text-gray-300 leading-7">
            {activeProject.description}
          </p>


          <ul className="list-disc pl-5 space-y-2">
            {activeProject.features.map((feature, i) => (
              <li key={i}>
                {feature}
              </li>
            ))}
          </ul>
     


          <div className="flex flex-wrap gap-3 mt-8">

            {activeProject.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-white/20"
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
        <div className="w-full ">


          {projects.map((project, index) => (

            <div
              key={index}
              data-index={index}
              className="
              project-item
              min-h-[70vh]
              lg:min-h-[55vh]
              flex
              items-center
              "
            >


              <HoverCircle>

                <div className="grid grid-cols-3 gap-1 lg:gap-5 px-10 t-0 w-full">


                  {/* Small card */}
                  <div className={`
                    h-15 lg:h-45
                    rounded-lg lg:rounded-3xl
                    bg-linear-to-br
                    ${project.color}
                    overflow-hidden
                    relative
                  `}>

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
                      w-35
                      top-7
                      "
                    />

                  </div>



                  {/* Big card */}
                  <div className={`
                    col-span-2
                    row-span-2
                    h-40 lg:h-94
                    
                    rounded-lg lg:rounded-3xl
                    bg-linear-to-br
                    ${project.color}
                    overflow-hidden
                    relative
                  `}>

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
                      w-[80%]
                      -top-1.5
                      "
                    />

                  </div>



                  {/* Small card */}
                  <div className={`
                    h-15 lg:h-45
                    rounded-lg lg:rounded-3xl
                    bg-linear-to-br
                    ${project.color}
                    overflow-hidden
                    relative
                  `}>

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
                      w-35
                      top-7
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
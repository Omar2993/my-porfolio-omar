import React from "react";
import Image from "next/image";

const footerLinks = [
  {
    title: "General",
    links: [
      "Home",
      "Blogs",
      "Guestbook",
      "Uses",
      "About",
      "About Me",
      "Projects",
      "Contact",
    ],
  },
  {
    title: "Startup",
    links: [
      "Rune",
      "RuneHub",
      "RuneLearn",
      "RuneCareer",
      "RuneAI",
    ],
  },
  {
    title: "Products",
    links: [
      "Wensity",
      "Wensity UI",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Social",
    links: [
      "LinkedIn",
      "GitHub",
      "Twitter",
      "Instagram",
    ],
  },
];


const Footer = () => {
  return (
    <footer className="w-full px-6 py-16">

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1fr_2fr]
          gap-12
        "
      >

        {/* Brand */}
        <div>

          <div className="mb-6">
            <Image
              src="/signature.png"
              width={180}
              height={60}
              alt="Omar signature logo"
              className="w-80
              h-auto"
            />
          </div>


          <p
            className="
              max-w-md
              text-sm
              sm:text-base
              leading-7
              text-gray-400
            "
          >
            Building digital experiences that matter, one line of code at a
            time. Crafting interfaces that feel alive, solving problems that
            make a difference, and turning ideas into reality. Every pixel has
            a purpose. Every interaction tells a story.
          </p>

        </div>



        {/* Links */}
        <nav
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-8
          "
          aria-label="Footer navigation"
        >

          {footerLinks.map((column, index) => (
            <div key={index}>

              <h3
                className="
                  text-base
                  sm:text-lg
                  font-semibold
                  mb-5
                "
              >
                {column.title}
              </h3>


              <ul className="space-y-3">

                {column.links.map((link, i) => (
                  <li key={i}>

                    <a
                      href="#"
                      className="
                        text-sm
                        sm:text-base
                        text-gray-400
                        hover:text-white
                        transition
                      "
                    >
                      {link}
                    </a>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </nav>


      </div>
     <div
      className="
        w-full
        border-t
        border-gray-800
        pt-6
        mt-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-6
        "
      >

        {/* Copyright */}
        <p
          className="
            text-xs
            sm:text-sm
            text-gray-400
            text-center
            sm:text-left
          "
        >
          © 2026 PARTH SHARMA. ALL RIGHTS RESERVED.
        </p>


        {/* Social Icons */}
        <div
          className="
            flex
            items-center
            gap-4
          "
          aria-label="Social media links"
        >

          <a href="#" aria-label="LinkedIn">
            <Image
              src="/icons/linkedin.svg"
              width={24}
              height={24}
              alt="LinkedIn"
              className="
                w-5
                h-5
                hover:opacity-70
                transition
              "
            />
          </a>


          <a href="#" aria-label="GitHub">
            <Image
              src="/icons/github.svg"
              width={24}
              height={24}
              alt="GitHub"
              className="
                w-5
                h-5
                hover:opacity-70
                transition
              "
            />
          </a>


          <a href="#" aria-label="Twitter">
            <Image
              src="/icons/twitter.svg"
              width={24}
              height={24}
              alt="Twitter"
              className="
                w-5
                h-5
                hover:opacity-70
                transition
              "
            />
          </a>

        </div>


      </div>

    </div>
    </footer>
  );
};

export default Footer;
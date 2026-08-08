"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PhoneNavbar from "./PhoneNavbar";


const Navbar = () => {

  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "More", path: "/more" },
  ];

  return (
    <>
    <PhoneNavbar/>
      <nav 
  // style={{ viewTransitionName: "desktopnavbar" }}
      className="
      hidden

       rounded-full
      
        fixed
         lg:flex
        justify-between
        items-center
        top-0
        left-0
        z-50
        w-[90%]
        mx-6
        mt-4.5
        ml-16.5
        max-lg:w-[calc(100%-32px)]
        max-lg:mx-4
        max-lg:ml-0
        
      "
      aria-label="Main Navigation"
    >

      {/* Logo */}
      <div className="flex items-center gap-2 ">

        <span className="
          flex
          items-center
          justify-center
          w-10
          h-10
          border-2
          rounded-full
          font-bold
          text-xl
        text-black
        ">
          Lg
        </span>


        <div className="
        hidden
        lg:block
          greendot
          w-1
          h-1
          bg-green-600
          rounded-full
          relative
          left-5
        "></div>


        <div className="
        hidden 
        lg:block
          row
          text-sm
          transform-[scale(1.11,0.8)]
          relative
          left-5
        ">
          <div className="text-gray-500">
            Creative Developer
          </div>

          <div className="text-green-600">
            Building The future
          </div>
        </div>

      </div>



      {/* Menu */}
      <ul
        className="
          flex
          items-center
          space-x-6
          relative
          lg:right-18
          bg-black
          text-gray-400
          px-1.5
          py-2
          rounded-full
          max-lg:hidden
          shadow-[0_1px_2px_rgba(0,0,0,0.35),0_6px_12px_rgba(0,0,0,0.35)]
        "
      >

        {menu.map((item)=>(

          <li key={item.path}>

            <Link
              href={item.path}
              className="
                relative
                block
                px-3
                py-2
              "
            >

              {pathname === item.path && (

                <motion.div
                  layoutId="active-pill"
                  className="
                    absolute
                    inset-0
                    bg-white
                    rounded-full
                  "
                  transition={{
                    type:"spring",
                    stiffness:500,
                    damping:35
                  }}
                />

              )}


              <span
                className={`
                  relative
                  z-10
                  ${
                    pathname === item.path
                    ? "text-black"
                    : "text-gray-400"
                  }
                `}
              >
                {item.name}
              </span>


            </Link>

          </li>

        ))}



        <li>

          <button
            className="
              w-10
              h-8
              border
              border-gray-700
              border-t-2
              bg-gray-900
              rounded-full
              flex
              justify-center
              items-center
              shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]
            "
          >

            <Image
              className="invert opacity-70"
              src="/Toggle.svg"
              alt="Toggle"
              width={20}
              height={20}
            />

          </button>

        </li>



        <li>

          <Link
            href="/bookacall"
            className="
              bg-white
              rounded-full
              p-2
              px-2
            "
          >
            Book a Call
          </Link>

        </li>


      </ul>




      {/* Mobile Menu Button */}
      <button
        type="button"
        className="
          w-10
          h-10
          bg-black
          rounded-full
          flex
          justify-center
          items-center
          shadow-[0_1px_2px_rgba(0,0,0,0.35),0_6px_12px_rgba(0,0,0,0.35)]
        "
      >

        <Image
          className="invert opacity-70"
          src="/Menu.svg"
          alt="Menu"
          width={20}
          height={20}
        />

      </button>


    </nav>
    </>
  );
};

export default Navbar;
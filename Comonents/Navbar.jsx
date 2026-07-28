import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        flex
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
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-10 h-10 border-2 rounded-full font-bold text-xl">
          Lg
        </span>

        <div className="greendot w-1 h-1 bg-green-600 rounded-full relative left-5"></div>

        <div className="row text-sm transform-[scale(1.11,0.8)] relative left-5">
          <div className="text-gray-500">Creative Developer</div>
          <div className="text-green-600">Building The future</div>
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
        <li>
          <Link className="bg-white rounded-full p-2 px-3" href="/">
            Home
          </Link>
        </li>

        <li>
          <Link href="/work">Work</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/more">More</Link>
        </li>

        <li className="text-gray-500 mx-4">|</li>

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
          <Link className="bg-white rounded-full p-2 px-2" href="/bookacall">
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
          src="/menu.svg"
          alt="Menu"
          width={20}
          height={20}
        />
      </button>

    </nav>
  );
};

export default Navbar;
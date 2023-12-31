"use client";

import React, { useEffect, useState } from "react";
import logo from "../../public/logojlight.png";
import Image from "next/image";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbg, setNavbg] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleBackground = () => {
      if (window.scrollY > 60) {
        setNavbg(true);
      } else setNavbg(false);
    };
    window.addEventListener("scroll", handleBackground);

    return () => {
      window.removeEventListener("scroll", handleBackground);
    };
  }, []);

  // Helper function to determine if the current link is active
  const isActive = (path: string) => path === pathname;

  return (
    <div
      className={`fixed flex justify-between md:justify-evenly  backdrop-filter text-[#2c3047] items-center h-20 md:h-28 w-full z-[100] border-b border-transparent duration-300 ease-in
      ${
        navbg && !isOpen
          ? " border-white/25  backdrop-blur-md "
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="shrink-0 md:hidden">
        <Image src={logo} alt="logo" height={90} quality={90} />
      </Link>

      {/* Now use the isActive function to apply styles accordingly */}
      <nav className="md:flex text-lg hidden uppercase tracking-[0.2em] items-center gap-6">
        {/* <Link
          href="/"
          className={`px-6 py-2 shadow-sm transition-colors duration-500 ${
            isActive("/")
              ? navbg
                ? "bg-blue-300 shadow-blue-300"
                : "shadow-white"
              : "border-transparent"
          }`}
        >
          Home
        </Link> */}
        <Link
          aria-label="About"
          href="/about"
          className={`px-6 py-2 transition-colors duration-500 h-10 rounded-lg ${
            isActive("/about")
              ? navbg
                ? "text-[#ca3f3f]"
                : "shadow-white"
              : "border-transparent"
          } ${navbg && !isOpen ? "bg-white/30" : "bg-transparent"}`}
        >
          about
        </Link>
        <Link
          aria-label="Store"
          href="/store"
          className={`px-6 py-2 transition-colors duration-500 h-10 rounded-lg ${
            isActive("/store")
              ? navbg
                ? "text-red-300"
                : "shadow-white"
              : "border-transparent"
          } ${navbg && !isOpen ? "bg-white/30" : "bg-transparent"}`}
        >
          store
        </Link>
        <Link href="/" className="shrink-0 ">
          <Image src={logo} alt="logo" height={150} quality={100} />
        </Link>

        <Link
          aria-label="myfaithbuddy"
          href="/myfaithbuddy"
          className={`px-6 py-2 transition-colors duration-500 h-10 rounded-lg ${
            isActive("/myfaithbuddy")
              ? navbg
                ? "text-red-300"
                : "shadow-white"
              : "border-transparent"
          } ${navbg && !isOpen ? "bg-white/30" : "bg-transparent"}`}
        >
          Buddy
        </Link>
        <a
          aria-label="Blog"
          href="https://jesus.beehiiv.com/"
          className={`px-6 py-2 transition-colors duration-500 h-10 rounded-lg ${
            isActive("/blog")
              ? navbg
                ? "text-red-300"
                : "shadow-white"
              : "border-transparent"
          } ${navbg && !isOpen ? "bg-white/30" : "bg-transparent"}`}
        >
          Blog
        </a>
      </nav>

      <div className="md:hidden z-[100]">
        <Hamburger
          size={25}
          label="Show menu"
          color="#2c3047"
          onToggle={() => setIsOpen(!isOpen)}
          toggled={isOpen}
        />
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-full h-full text-lg uppercase text-center pt-28 md:hidden z-[90]  duration-500 border-l border-white/20 backdrop-filter  backdrop-blur-lg`}
      >
        <nav className=" flex flex-col gap-6 w-full [&>*]:p-4 items-center tracking-[0.2em] text-[#2c3047]">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`w-40 border rounded-md ${
              isActive("/")
                ? "text-white bg-[#202e7f1e]"
                : "border-transparent bg-none"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`w-40 border   rounded-md  p-2 ${
              isActive("/about")
                ? "text-white bg-[#202e7f1e]"
                : "border-transparent bg-none"
            }`}
          >
            About
          </Link>
          <Link
            href="/myfaithbuddy"
            onClick={() => setIsOpen(false)}
            className={`w-40 border   rounded-md  p-2 ${
              isActive("/myfaithbuddy")
                ? "text-white bg-[#202e7f1e]"
                : "border-transparent bg-none"
            }`}
          >
            My Faith Buddy
          </Link>
          <a
            href="https://jesus.beehiiv.com/"
            onClick={() => setIsOpen(false)}
            className={`w-40 border   rounded-md  p-2 ${
              isActive("/blog")
                ? "text-white bg-[#202e7f1e]"
                : "border-transparent bg-none"
            }`}
          >
            Blog
          </a>
          <Link
            href="/newsletter"
            onClick={() => setIsOpen(false)}
            className={`w-40 border   rounded-md   ${
              isActive("/newsletter")
                ? "text-white bg-[#202e7f1e]"
                : "border-transparent bg-none"
            }`}
          >
            Newsletter
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`w-40 border   rounded-md  ${
              isActive("/store")
                ? "text-white bg-[#202e7f1e]"
                : "border-transparent bg-none"
            }`}
          >
            Store
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

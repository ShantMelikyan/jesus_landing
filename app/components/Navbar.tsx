"use client";

import React, { useEffect, useState } from "react";
import logo from "../../public/logojlight.png";
import Image from "next/image";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import { usePathname } from 'next/navigation';

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
      className={`fixed flex justify-between md:justify-evenly backdrop-filter text-white items-center p-6 h-28 w-full z-[100] border-b border-transparent duration-300 ease-in
      ${
        navbg && !isOpen
          ? " border-white/25  backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="shrink-0 md:hidden">
        <Image src={logo} alt="logo" height={100} quality={100} />
      </Link>

      {/* Now use the isActive function to apply styles accordingly */}
      <nav className="md:flex text-lg hidden uppercase tracking-[0.2em] items-center">
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
          className={`px-6 py-2 transition-colors duration-500 h-10  ${
            isActive("/about")
              ? navbg
                ? "text-red-300"
                : "shadow-white"
              : "border-transparent"
          }`}
        >
          about
        </Link>
        <Link
          aria-label="Store"
          href="/store"
          className={`px-6 py-2 transition-colors duration-500 h-10  ${
            isActive("/store")
              ? navbg
                ? "text-red-300"
                : "shadow-white"
              : "border-transparent"
          }`}
        >
          store
        </Link>
        <Link href="/" className="shrink-0 ">
          <Image src={logo} alt="logo" height={100} quality={100} />
        </Link>

        <Link
          aria-label="MyFaithBuddy"
          href="/MyFaithBuddy"
          className={`px-6 py-2 transition-colors duration-500 h-10  ${
            isActive("/myfaithbuddy")
              ? navbg
                ? "text-red-300"
                : "shadow-white"
              : "border-transparent"
          }`}
        >
          Buddy
        </Link>
        <Link
          aria-label="Blog"
          href="/blog"
          className={`px-6 py-2 transition-colors duration-500 h-10  ${
            isActive("/blog")
              ? navbg
                ? "text-red-300"
                : "shadow-white"
              : "border-transparent"
          }`}
        >
          Blog
        </Link>
      </nav>

      <div className="md:hidden z-[100]">
        <Hamburger
          size={25}
          label="Show menu"
          color="white"
          onToggle={() => setIsOpen(!isOpen)}
          toggled={isOpen}
        />
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-1/2 h-full text-lg uppercase text-center pt-28 md:hidden z-[90]  duration-500 border-l border-white/20 backdrop-filter  backdrop-blur-md`}
      >
        <nav className="px-4 pt-4 flex flex-col gap-6 w-full [&>*]:p-2 items-center tracking-[0.2em]">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`w-32 border bg-white/20 rounded-md p-2 ${
              isActive("/")
                ? navbg
                  ? "text-[#3a405c]"
                  : "shadow-white"
                : "border-transparent bg-white/0"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`w-32 border  bg-white/20 rounded-md  p-2 ${
              isActive("/about")
                ? navbg
                  ? "text-[#3a405c]"
                  : "shadow-white"
                : "border-transparent bg-white/0 "
            }`}
          >
            About
          </Link>
          <Link
            href="/myfaithbuddy"
            onClick={() => setIsOpen(false)}
            className={`w-32 border  bg-white/20 rounded-md  p-2 ${
              isActive("/myfaithbuddy")
                ? navbg
                  ? "text-[#3a405c]"
                  : "shadow-white"
                : "border-transparent bg-white/0"
            }`}
          >
            My Faith Buddy
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className={`w-32 border  bg-white/20 rounded-md  p-2 ${
              isActive("/blog")
                ? navbg
                  ? "text-[#3a405c]"
                  : "shadow-white"
                : "border-transparent bg-white/0"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`w-32 border  bg-white/20 rounded-md  p-2 ${
              isActive("/newsletter")
                ? navbg
                  ? "text-[#3a405c]"
                  : "shadow-white"
                : "border-transparent bg-white/0"
            }`}
          >
            Newsletter
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`w-32 border  bg-white/20 rounded-md  ${
              isActive("/store")
                ? navbg
                  ? "text-[#3a405c]"
                  : "shadow-white"
                : "border-transparent bg-white/0"
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
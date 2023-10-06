import React from "react";
import {
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
  FaKickstarterK,
  FaYoutube,
} from "react-icons/fa";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-[#53577a] to-[#e6b8ae] p-8 ">
      <div className=" border-white/25  backdrop-blur-md border rounded-2xl bg-white/20 pb-3 ">
        <div className="lg:flex sm:grid sm:grid-cols-2 lg:justify-center lg:gap-16 text-[#3a405c] md:p-14 p-8">
          <div className="p-5">
            <h2 className="tracking-wider pb-4 text-lg font-semibold">
              Jesus Group
            </h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <div className="p-5">
            <h2 className="tracking-wider pb-4 text-lg font-semibold">
              My Faith Buddy
            </h2>
            <ul>
              <li>Read Bible</li>
              <li>Ask a Question</li>
              <li>How it works</li>
            </ul>
          </div>
          <div className="p-5">
            <h2 className="tracking-wider pb-4 text-lg font-semibold">Blog</h2>
            <ul>
              <li>Join our Newsletter</li>
              <li>Articles</li>
              <li>News</li>
            </ul>
          </div>
          <div className="p-5">
            <h2 className="tracking-wider pb-4 text-lg font-semibold">Store</h2>
            <ul>
              <li>Products</li>
              <li>Shop to Donate</li>
            </ul>
          </div>
        </div>
        <div className="px-10 w-full max-w-2xl md:px-10 mx-auto">
          <Newsletter />
        </div>
        <ul className="list-none flex justify-center py-10 md:gap-8 gap-6 ">
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.instagram.com/jesus/"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram size={25} className="fill-[#404664]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://discord.gg/eHYSbYNp"
              aria-label="Discord"
              target="_blank"
            >
              <FaDiscord size={25} className="fill-[#404664]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.tiktok.com/@jesus"
              aria-label="TikTok"
              target="_blank"
              className="transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaTiktok size={25} className="fill-[#404664]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.facebook.com/jesus"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebookF size={25} className="fill-[#404664]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a href="https://kick.com/jesus" aria-label="Kick" target="_blank">
              <FaKickstarterK size={25} className="fill-[#404664]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.youtube.com/channel/UCrYCWoIqgrNaQfUWtopoLyg"
              aria-label="YouTube"
              target="_blank"
            >
              <FaYoutube size={25} className="fill-[#404664]" />
            </a>
          </li>
        </ul>
        <p className="text-center text-sm text-[#3a405c]">
          &copy; 2023, Jesus Group, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

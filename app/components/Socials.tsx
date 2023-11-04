import React from "react";
import {
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
  FaKickstarterK,
  FaYoutube,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="p-4 md:p-8 w-full">
        <h3 className="text-center text-3xl pb-6">Join Us in Our Mission</h3>
      <ul className="list-none flex justify-center py-10 sm:gap-14 gap-2 px-4">
        <li className="transform hover:-translate-y-1 transition-all duration-300">
          <a
            href="https://www.instagram.com/jesus/"
            aria-label="Instagram"
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <FaInstagram size={35} className="fill-[#404664]" />{" "}
            <p>Instagram</p>
          </a>
        </li>
        <li className="transform hover:-translate-y-1 transition-all duration-300">
          <a
            href="https://discord.gg/jesus"
            aria-label="Discord"
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <FaDiscord size={35} className="fill-[#404664]" /> <p>Discord</p>
          </a>
        </li>
        <li className="transform hover:-translate-y-1 transition-all duration-300">
          <a
            href="https://www.tiktok.com/@jesus"
            aria-label="TikTok"
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <FaTiktok size={35} className="fill-[#404664]" /> <p>TikTok</p>
          </a>
        </li>
        <li className="transform hover:-translate-y-1 transition-all duration-300">
          <a
            href="https://www.facebook.com/jesus"
            aria-label="Facebook"
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <FaFacebookF size={35} className="fill-[#404664]" /> <p>Facebook</p>
          </a>
        </li>
        <li className="transform hover:-translate-y-1 transition-all duration-300">
          <a
            href="https://kick.com/jesus"
            aria-label="Kick"
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <FaKickstarterK size={35} className="fill-[#404664]" /> <p>Kick</p>
          </a>
        </li>
        <li className="transform hover:-translate-y-1 transition-all duration-300">
          <a
            href="https://www.youtube.com/channel/UCrYCWoIqgrNaQfUWtopoLyg"
            aria-label="YouTube"
            target="_blank"
            className="flex flex-col justify-center items-center gap-3"
          >
            <FaYoutube size={35} className="fill-[#404664]" /> <p>YouTube</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

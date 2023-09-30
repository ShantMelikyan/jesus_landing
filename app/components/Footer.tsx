import React from "react";
import {
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
  FaKickstarterK,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#e6b8ae]">
      <li className="list-none flex justify-center py-20 gap-8">
        <a
          href="https://www.instagram.com/jesus/"
          aria-label="Instagram"
          target="_blank"
        >
          <FaInstagram size={25} className="fill-[#515775]" />
        </a>
        <a
          href="https://discord.gg/eHYSbYNp"
          aria-label="Discord"
          target="_blank"
        >
          <FaDiscord size={25} className="fill-[#515775]" />
        </a>
        <a
          href="https://www.tiktok.com/@jesus"
          aria-label="TikTok"
          target="_blank"
        >
          <FaTiktok size={25} className="fill-[#515775]" />
        </a>
        <a
          href="https://www.facebook.com/jesus"
          aria-label="Facebook"
          target="_blank"
        >
          <FaFacebookF size={25} className="fill-[#515775]" />
        </a>

        <a href="https://kick.com/jesus" aria-label="Kick" target="_blank">
          <FaKickstarterK size={25} className="fill-[#515775]" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCrYCWoIqgrNaQfUWtopoLyg"
          aria-label="YouTube"
          target="_blank"
        >
          <FaYoutube size={25} className="fill-[#515775]" />
        </a>
      </li>
      <p className="text-center p-4 text-sm text-[#1c1e31aa]">
        &copy; 2023, Jesus Group, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

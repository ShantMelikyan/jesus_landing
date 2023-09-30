import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#e6b8ae]">
      <li className="list-none flex justify-center py-20 gap-4">
        <a
          href="https://www.instagram.com/jesus/"
          aria-label="Instagram"
          target="_blank"
        >
          Instagram
        </a>
        <a
          href="https://discord.gg/eHYSbYNp"
          aria-label="Discord"
          target="_blank"
        >
          Discord
        </a>
        <a
          href="https://www.tiktok.com/@jesus"
          aria-label="TikTok"
          target="_blank"
        >
          TikTok
        </a>
        <a
          href="https://www.facebook.com/jesus"
          aria-label="Facebook"
          target="_blank"
        >
          Facebook
        </a>

        <a href="https://kick.com/jesus" aria-label="Kick" target="_blank">
          Kick
        </a>
        <a
          href="https://www.youtube.com/channel/UCrYCWoIqgrNaQfUWtopoLyg"
          aria-label="YouTube"
          target="_blank"
        >
          YouTube
        </a>
      </li>
      <p className="text-center p-4 text-sm">
        &copy; 2023, Jesus Group, All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

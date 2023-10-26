import React from "react";
import Newsletter from "../components/Newsletter";
import Image from "next/image";
import {
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
  FaKickstarterK,
  FaYoutube,
} from "react-icons/fa";
import angel from "../../public/angel.jpg";

export default function Home() {
  return (
    <main className="w-full h-screen grid place-items-center place-content-center bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae] p-6 text-[#2c3047] relative ">
      <Image
        src={angel}
        alt="angel"
        placeholder="blur"
        className=" h-screen lg:p-4 lg:max-h-[600px] lg:max-w-3xl lg:rounded-3xl w-full top-1/2 left-1/2 mx-auto z-0 object-top object-cover opacity-90 rounded-b-2xl  absolute transform -translate-x-1/2 -translate-y-1/2"
      ></Image>

      <div className="z-10 ">
        <h1 className="text-4xl pb-6">Join Our Community of Faith!</h1>
        <h2 className="text-xl pb-4">
          Subscribe to our Newsletter for Weekly Inspiration
        </h2>
        <div className="max-w-md pr-4">
          <Newsletter />
        </div>
        <p className="max-w-lg pt-2 text-lg text-center">
          Join over <strong>10,000 believers.</strong> It&#39;s completely{" "}
          <strong>FREE</strong>.
        </p>
        <ul className="list-none flex justify-center pt-4 md:gap-8 gap-6 ">
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.instagram.com/jesus/"
              aria-label="Instagram"
              target="_blank"
            >
              <FaInstagram size={30} className="fill-[#46668e]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://discord.gg/eHYSbYNp"
              aria-label="Discord"
              target="_blank"
            >
              <FaDiscord size={30} className="fill-[#46668e]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.tiktok.com/@jesus"
              aria-label="TikTok"
              target="_blank"
              className="transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaTiktok size={30} className="fill-[#46668e]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.facebook.com/jesus"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebookF size={30} className="fill-[#46668e]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a href="https://kick.com/jesus" aria-label="Kick" target="_blank">
              <FaKickstarterK size={30} className="fill-[#46668e]" />
            </a>
          </li>
          <li className="transform hover:-translate-y-1 transition-all duration-300">
            <a
              href="https://www.youtube.com/channel/UCrYCWoIqgrNaQfUWtopoLyg"
              aria-label="YouTube"
              target="_blank"
            >
              <FaYoutube size={30} className="fill-[#46668e]" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

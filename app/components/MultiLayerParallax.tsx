"use client";

import {
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaFacebookF,
  FaKickstarterK,
  FaYoutube,
} from "react-icons/fa";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import base_layer from "../../public/base.jpg";
import second_layer from "../../public/second-layer.png";
import third_layer from "../../public/third-layer.png";
import bottom_layer from "../../public/bottom-layer.png";
import logo from "@/public/logojesusdark.png";

import exclude from "../../public/exclude.png";
import { Reveal } from "./utils/Reveal";
import Newsletter from "./Newsletter";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const second = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const third = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const bottom = useTransform(scrollYProgress, [0, 1], ["-34%", "-90%"]);

  const subscribeBox = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="h-full w-full relative will-change-transform">
      <div
        ref={ref}
        className="w-full h-full overflow-hidden relative flex items-center flex-col justify-center px-6"
      >
        <motion.div
          style={{ y: subscribeBox }}
          className=" z-30 w-full max-w-xl text-[#37394b] flex flex-col justify-center"
        >
          <Reveal>
            <div className="shadow-lg w-full  max-w-xl mx-auto flex justify-center flex-col p-2 md:p-6 rounded-2xl  backdrop-blur-sm">
              <Image
                src={logo}
                alt="logo"
               
                width={350}
                className="h-28  mx-auto object-cover opacity-90 "
              ></Image>
              <Reveal delay={0.3}>
                <h1 className="lg:text-2xl text-2xl pb-4 md:py-4 text-center ">
                  Join Our Community of Faith
                </h1>
              </Reveal>
              <Reveal delay={0.4}>
                <ul className="  list-none flex justify-center items-center md:gap-8 gap-5 pb-6">
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
                      href="https://discord.gg/jesus"
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
                    <a
                      href="https://kick.com/jesus"
                      aria-label="Kick"
                      target="_blank"
                    >
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
              </Reveal>

              <Reveal delay={0.5}>
                <div className="max-w-[20rem] md:max-w-sm  mx-auto pb-2">
                <Newsletter />
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className=" w-full md:flex md:flex-row max-w-xl justify-between items-start text-lg z-30 pt-4 mx-auto gap-6 ">
              <div className="flex pb-3 items-center flex-1">
                <div className="text-center shadow-inner rounded-2xl  flex flex-col justify-center items-center  backdrop-blur divide-y divide-[#6484ab83]">
                  <p className="p-4">FaithBuddy</p>
                  <p className="p-4">
                    Explore faith with our AI chatbot. Integrated Bible for
                    questions and spiritual growth. A new way to interact.
                  </p>
                </div>
              </div>
              <div className="md:flex pb-3 items-center hidden flex-1">
                <div className="text-center shadow-inner rounded-2xl  flex flex-col justify-center items-center  backdrop-blur divide-y divide-[#6484ab83]">
                  <p className="p-4">Blog</p>
                  <p className="p-2">
                    Curated Christian goods for your life. Shop to express
                    faith, support charity. Feel good inside and out.
                  </p>
                </div>
              </div>
              <div className="flex pb-3 items-center flex-1 z-[100]">
                <div className="text-center shadow-inner rounded-2xl  flex flex-col justify-center items-center  backdrop-blur divide-y divide-[#6484ab83]">
                  <p className="p-4">Store</p>
                  <p className="p-4">
                    Nourish your spirit through articles. Subscribe to weekly
                    newsletters for Christian insights. Grow your faith.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </motion.div>

        <div className=" inset-0 z-0 pointer-events-none fixed">
          <Image
            src={base_layer}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover h-full w-full "
            placeholder="blur"
            sizes="100vw"
          ></Image>
        </div>
        <motion.div className="absolute inset-0 z-10" style={{ y: second }}>
          <Image
            src={second_layer}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover h-full w-full"
            placeholder="blur"
            sizes="100vw"
          ></Image>
        </motion.div>

        <motion.div className="absolute inset-0 z-20 " style={{ y: third }}>
          <Image
            src={third_layer}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover relative h-full w-full"
            placeholder="blur"
            sizes="100vw"
          />
        </motion.div>
      </div>
      <motion.div
        className="md:h-full w-full h-2/4 z-30 absolute overflow-visible"
        style={{
          y: bottom,
        }}
      >
        <Image
          src={bottom_layer}
          priority={true}
          alt="landing"
          quality={100}
          className="object-cover object-left lg:object-center  h-full w-full "
          placeholder="blur"
          sizes="100vw"
        ></Image>
      </motion.div>
    </div>
  );
}

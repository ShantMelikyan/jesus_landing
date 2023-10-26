"use client";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import base_layer from "../../public/base.jpg";
import second_layer from "../../public/second-layer.png";
import third_layer from "../../public/third-layer.png";
import bottom_layer from "../../public/bottom-layer.png";

import exclude from "../../public/exclude.png";
import { Reveal } from "./utils/Reveal";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const base = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const second = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const third = useTransform(scrollYProgress, [0, 1], ["-30%", "-90%"]);
  const subscribeBox = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-full w-full relative will-change-transform">
      <div
        ref={ref}
        className="w-full h-full overflow-hidden relative flex items-center flex-col justify-center px-10"
      >
        <motion.div
          style={{ y: subscribeBox }}
          className=" z-30 w-full max-w-xl text-[#37394b]"
        >
          <Reveal delay={0.3}>
            <h1 className="text-5xl pb-6 text-center">
              Join Our Community of Faith!
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="text-2xl pb-4 text-center">
              Subscribe to our Newsletter for Weekly Inspiration
            </h2>
          </Reveal>
          <Reveal delay={0.5}>
            <iframe
              src="https://embeds.beehiiv.com/32c167b5-f949-4fb7-9f73-363fb45d6438?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              width="100%"
              frameBorder="0"
              scrolling="no"
              style={{
                margin: 0,
                borderRadius: 0,
                backgroundColor: "transparent",
              }}
              className="w-full"
            ></iframe>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="w-full flex justify-center items-center  text-xl z-30 pt-10">
              <div className="w-40 h-14 rounded-md border-2 border-[#6484AB] flex justify-center items-center  backdrop-blur ">
                <p>MyFaithBuddy</p>
              </div>
              <p className="text-4xl px-10">✝</p>
              <div className="w-40 h-14 rounded-md border-2 border-[#6484AB] flex justify-center items-center  backdrop-blur ">
                <p>Blog</p>
              </div>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          className=" inset-0 z-0 pointer-events-none fixed"
          style={
            {
              // y: base,
            }
          }
        >
          <Image
            src={base_layer}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover h-full w-full "
            placeholder="blur"
            sizes="100vw"
          ></Image>
        </motion.div>
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

        <motion.div className="absolute inset-0 z-20" style={{ y: base }}>
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
        className="xl:h-full h-2/4 z-30 absolute"
        style={{
          y: third,
        }}
      >
        <Image
          src={bottom_layer}
          priority={true}
          alt="landing"
          quality={100}
          className="object-cover object-left md:object-center relative h-full w-full "
          placeholder="blur"
          sizes="100vw"
        ></Image>
      </motion.div>
    </div>
  );
}

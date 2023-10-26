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
import Newsletter from "./Newsletter";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const second = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const third = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const bottom = useTransform(scrollYProgress, [0, 1], ["-40%", "-90%"]);

  const subscribeBox = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-full w-full relative will-change-transform">
      <div
        ref={ref}
        className="w-full h-full overflow-hidden relative flex items-center flex-col justify-center px-10"
      >
        <motion.div
          style={{ y: subscribeBox }}
          className=" z-30 w-full max-w-xl text-[#37394b] flex flex-col justify-center"
        >
          <Reveal delay={0.3}>
            <h1 className="lg:text-[2.6rem] text-3xl pb-2 text-center">
              Join Our Community of Faith!
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="md:text-2xl  text-lg pb-4 text-center">
              Subscribe to our Newsletter for Weekly Inspiration
            </h2>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="max-w-lg mx-auto">
            <Newsletter/>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="w-full flex max-w-lg justify-between items-center  text-lg z-30 pt-10 mx-auto">
              <div className="w-44 h-14 rounded-md border-2 border-[#6484AB] flex justify-center items-center  backdrop-blur ">
                <p>MyFaithBuddy</p>
              </div>
              <p className="text-4xl px-10">✞</p>
              <div className="w-44 h-14 rounded-md border-2 border-[#6484AB] flex justify-center items-center  backdrop-blur ">
                <p>Blog</p>
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

        <motion.div className="absolute inset-0 z-20" style={{ y: third }}>
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
        className="xl:h-full lg:h-2/3 h-2/4 z-30 absolute"
        style={{
          y: bottom,
        }}
      >
        <Image
          src={bottom_layer}
          priority={true}
          alt="landing"
          quality={100}
          className="object-cover object-left lg:object-center relative h-full w-full "
          placeholder="blur"
          sizes="100vw"
        ></Image>
      </motion.div>
    </div>
  );
}

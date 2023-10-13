"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import landing from "../../public/base.jpg";
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
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["-30%", "-90%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div className="h-full w-full relative ">
      <div
        ref={ref}
        className="w-full h-full overflow-hidden relative grid place-items-center"
      >
        <motion.div
          style={{ y: textY }}
          className=" z-30 w-full grid place-items-center"
        >
          <h1 className="text-5xl pb-10">Welcome to Jesus Group!</h1>
          <Reveal>
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
              className="px-10 max-w-xl"
            ></iframe>
          </Reveal>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            y: backgroundY,
          }}
        >
          <Image
            src={landing}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover h-full w-full "
            placeholder="blur"
            sizes="100vw"
          ></Image>
        </motion.div>
        <div className="absolute inset-0 z-10">
          <Image
            src={second_layer}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover h-full w-full"
            placeholder="blur"
            sizes="100vw"
          ></Image>
        </div>

        <motion.div
          className="absolute inset-0 z-20"
          style={{
            y: backgroundY2,
          }}
        >
          <Image
            src={third_layer}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover  relative h-full w-full"
            placeholder="blur"
            sizes="100vw"
          ></Image>
        </motion.div>
      </div>
      <motion.div
        className="xl:h-full h-2/3 z-30 absolute"
        style={{
          y: backgroundY3,
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

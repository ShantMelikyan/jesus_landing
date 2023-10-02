"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import landing from "../../public/landing2.png"
import exclude from "../../public/exclude.png"

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);


  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div className="h-full w-full relative">
      <div
        ref={ref}
        className="w-full h-full overflow-hidden relative grid place-items-center"
      >
        <motion.div style={{ y: textY }} className="relative z-30">
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
            className=" mt-20 px-10 max-w-2xl"
          ></iframe>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            // backgroundImage: `url(/landing2.png)`,
            // backgroundPosition: "bottom",
            // backgroundSize: "cover",
            y: backgroundY,
          }}
        >
          <Image
            src={landing}
            priority={true}
            alt="landing"
            quality={100}
            className="object-cover relative h-full w-full "
          ></Image>
        </motion.div>
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/exclude.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: `url(/exclude2.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY2,
          }}
        />

        {/* <Image
        src={exclude}
        priority={true}
        alt="landing"
        quality={100}
        className="object-cover bg-bottom h-full w-full "
      ></Image> */}
      </div>
      <motion.div
        className="h-[340px] w-full z-50 absolute"
        style={{
          backgroundImage: `url(/exclude5.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY3,
        }}
      />
    </div>
  );
}

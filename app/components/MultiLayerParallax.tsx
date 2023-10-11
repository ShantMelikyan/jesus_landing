"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import landing from "../../public/base.jpg"
import exclude from "../../public/exclude.png"

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["-30%", "-85%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div className="h-full w-full relative ">
      <div
        ref={ref}
        className="w-full h-full overflow-hidden relative grid place-items-center"
      >
        <motion.div
          style={{ y: textY }}
          className="relative z-20 w-full grid place-items-center"
        >
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
            className="w-full mt-20 px-10 max-w-xl"
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
            placeholder="blur"
          ></Image>
        </motion.div>
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(/second-layer.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/third-layer.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY2,
          }}
        />

      </div>
      <motion.div
        className="object-cover  h-full w-full z-30 absolute mx-auto"
        style={{
          backgroundImage: `url(/bottom-layer.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY3,
        }}
      />
    </div>
  );
}

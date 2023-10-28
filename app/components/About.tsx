import React from "react";
import Image from "next/image";
import jesus from "../../public/logojesuslight.png";
import jesusLanding from "../../public/landing-about.png";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae] text-[#2c3047]">
      <div className="h-screen items-center w-full  flex flex-col md:flex-row justify-center gap-8 pt-[130px] lg:pt-0">
        <div className="flex-1  max-w-xl  px-5 flex flex-col justify-end">
          <h1 className="lg:text-6xl text-4xl  bg-gradient-to-r from-[#2c3047]  to-[#655672] text-transparent bg-clip-text">
            Just a few things to know <strong>about us</strong>
          </h1>
          <h2 className="text-xl md:py-4 py-6">
            Discover who we are, our mission, and how we&#39;re making a
            difference.
          </h2>
          <h2 className="md:max-w-lg max-w-sm">
            We are a dedicated group of individuals committed to fostering a
            vibrant and inclusive community centered on the teachings of
            Christianity and the life of Jesus Christ for the past 5 years.
          </h2>
        </div>
        <div className="w-11/12 md:max-w-lg md:min-w-0 flex flex-1 items-center justify-center  gap-6  p-4 ">
          <div className="flex flex-1 flex-col justify-center text-center items-center rounded-full border border-white bg-white/20  lg:h-[500px] h-96 bg-[url('/landing2.png')]">
            {/* <h3>+8500 users</h3> */}
            <h3>Discord</h3>
          </div>
          <div className="flex flex-1 flex-col justify-center text-center items-center rounded-full border border-white bg-white/20   lg:h-[500px] h-96 bg-[url('/landing-about.png')]">
            {/* <h3>+1 000 000 users</h3> */}
            <h3>Instagram</h3>
          </div>
          <div className="flex flex-1 flex-col justify-center text-center items-center rounded-full border border-white bg-white/20  lg:h-[500px] h-96 bg-[url('/about-img.png')]">
            <h1>Newsletter</h1>
          </div>
        </div>
      </div>
      <Image
        className="mx-auto w-[1200px] h-[500px] overflow-visible object-center object-cover opacity-70 pb-20"
        src={jesus}
        alt="jesus"
      ></Image>

      <div className="w-full mx-auto p-6 max-w-2xl z-30">
        <p className="py-2">
          On our Instagram account, we have been sharing inspiring stories,
          messages of hope, and promoting positivity in the world.
        </p>
        <p className="py-2">
          In our community, we aim to create a warm and welcoming environment
          where we can come together to explore Scripture, share personal
          experiences, and uplift one another in our faith journey.
        </p>
        <p className="py-2">
          Through open discussion, prayer, and mutual support, our overall goals
          are to deepen our faith, inspire spiritual growth, and cultivate
          meaningful connections with fellow believers.
        </p>
        <p className="py-2">
          Together, we strive to embody the love, compassion, and grace
          exemplified by Jesus, as we navigate our individual journeys of faith.
          Join us as we grow in faith, spread the Gospel, and support one
          another along the way.
        </p>
      </div>

      <div className="flex  items-center justify-center ">
        <div className="group md:h-[600px] h-96 w-60 [perspective:1000px] ">
          <div className="relative h-full w-full rounded-full shadow-sm border border-white transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="flex justify-center absolute inset-0 items-center">
              <Image
                className="h-full w-full rounded-full object-cover shadow-sm shadow-black/40"
                src={jesusLanding}
                alt="clouds"
                quality={100}
                placeholder="blur"
              />
              <FaDiscord size={60} className="fill-[#53577a] absolute " />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-full bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold tracking-wider">
                  Join Our Discord
                </h1>
                <p className="text-lg font-semibold">+8500 users</p>
                <p className="text-base pb-2">Ask, Discuss and Learn</p>
                <a
                  className=" rounded-md bg-[#53577a] py-4 px-8 text-sm hover:bg-neutral-900"
                  href="https://discord.gg/eHYSbYNp"
                  aria-label="Discord"
                  target="_blank"
                >
                  Join
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

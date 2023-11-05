import React from "react";
import Image from "next/image";
import jesus from "../../public/logojesuslight.png";
import jesusLanding from "../../public/landing-about.png";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Socials from "./Socials";
import discord from "@/public/discord2.png";
import Newsletter from "./Newsletter";
import background from "@/public/bg-about-3.jpg";

const About = () => {
  return (
    <div className="h-full w-full  text-white ">
      <div className="min-h-screen relative flex flex-col items-center justify-center">
        <Image
          src={background}
          priority={true}
          alt="landing"
          quality={100}
          className="object-cover h-full w-full absolute "
          placeholder="blur"
          sizes="100vw"
        ></Image>
        <div className="w-full flex flex-col lg:flex-row mx-auto xl:justify-around sm:justify-between items-center z-20 py-32 px-6">
          <div className="max-w-xl pb-10 pr-6">
            <h1 className="lg:text-6xl text-4xl  text-white ">
              Discover Our Journey of <strong>Faith and Purpose</strong>
            </h1>
            <h2 className="text-xl md:py-4 py-6">
              Get to know our community, our vision, and the impact we&lsquo;ve
              been making in the world of Christianity.
            </h2>
            <h2 className="md:max-w-lg max-w-sm text-lg ">
              <strong>Celebrating 5 Years of Spiritual Journey:</strong> For
              half a decade, we have been a beacon of hope, love, and faith,
              anchoring our values deeply in the teachings of Jesus Christ.
            </h2>
            <div className="py-6">
              <Newsletter />
            </div>
            <div className="text-[#757575] bg-white flex justify-between items-center h-14 rounded-md pl-[20px] border-2 border-[#4E5172] backdrop-blur">
              <h3>Join our Discord</h3>
              <h3 className="bg-[#4E5172] h-full w-[100px] rounded-r flex items-center justify-center text-white">
                Join
              </h3>
            </div>
          </div>
          <div className="text-white max-w-md p-6  z-30 text-lg rounded-md px-5 border border-[#4E5172] bg-black/30 backdrop-blur">
            <h2 className="text-4xl font-medium">Our Mission</h2>
            <p className="py-2">
              In our community, we aim to create a warm and welcoming
              environment where we can come together to explore Scripture, share
              personal experiences, and uplift one another in our faith journey.
            </p>
            <p className="py-2">
              Through open discussion, prayer, and mutual support, our overall
              goals are to deepen our faith, inspire spiritual growth, and
              cultivate meaningful connections with fellow believers.
            </p>
            <p className="py-2">
              Together, we strive to embody the love, compassion, and grace
              exemplified by Jesus, as we navigate our individual journeys of
              faith. Join us as we grow in faith, spread the Gospel, and support
              one another along the way.
            </p>
          </div>
        </div>
        <div className="px-4 w-full">
          <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4 max-w-7xl w-full mx-auto backdrop-blur rounded-lg text-white z-20 md:p-10 p-4 border-t border-r border-l border-b border-[#4E5172]">
            <div className="flex items-center gap-4">
              <p className="text-xl md:text-3xl font-medium">1M+</p>
              <p className="text-lg md:text-xl">Instagram</p>
            </div>
            <div className="flex items-center gap-4 sm:justify-self-center">
              <p className="text-xl md:text-3xl font-medium">100K+</p>
              <p className="text-lg md:text-xl">Threads </p>
            </div>
            <div className="flex items-center gap-4 ">
              <p className="text-xl md:text-3xl font-medium">4M+ </p>
              <p className="text-lg md:text-xl max-w-[76px] sm:max-w-[100px]">Accounts Engaged Per Month</p>
            </div>
            <div className="flex items-center gap-4 sm:justify-self-center">
              <p className="text-xl md:text-3xl font-medium"> 15M+</p>
              <p className="text-lg md:text-xl max-w-[76px] sm:max-w-[100px]">Impressions Per Month</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#02161D] via-[#533E57] to-[#e6b8ae]">
        <Socials />
        <div className="w-full mx-auto lg:flex items-center justify-center ">
          <Image
            src={discord}
            width={700}
            height={500}
            alt="My SVG"
            className="mx-auto flex-1 xl:ml-40 "
            quality={100}
          />
          <div className="px-6 flex-1">
            <h3 className="font-semibold text-4xl pb-4 lg:text-start text-cente tracking-wide">
              Join our Discord Community
            </h3>
            <p className="max-w-sm pb-4 mx-auto lg:mx-0 lg:text-start text-center text-lg">
              Connect with Our Vibrant Community: Engage with over 10,000
              members who are passionate about their faith, and eager to learn,
              discuss, and grow together. Engage in deep discussions, prayer
              sessions, and fellowship today.
            </p>
            <div className="flex lg:justify-start justify-center">
              <a
                className="text-white rounded-md bg-[#4e5173] py-4 px-8 text-md hover:bg-[#907d93]"
                href="https://discord.gg/jesus"
                aria-label="Discord"
                target="_blank"
              >
                Join
              </a>
              <div className="pl-4 flex items-start flex-col">
                <p className="text-lg font-semibold tracking-wide">
                  10,000+ believers
                </p>
                <p className="text-base pb-2">Ask, Discuss and Learn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto lg:flex items-center justify-center ">
          <Image
            src={discord}
            width={700}
            height={500}
            alt="My SVG"
            className="mx-auto flex-1 xl:ml-40 "
            quality={100}
          />
          <div className="px-6 flex-1">
            <h3 className="font-semibold text-4xl pb-4 lg:text-start text-cente tracking-wide">
              Join our Discord Community
            </h3>
            <p className="max-w-sm pb-4 mx-auto lg:mx-0 lg:text-start text-center text-lg">
              Connect with Our Vibrant Community: Engage with over 10,000
              members who are passionate about their faith, and eager to learn,
              discuss, and grow together. Engage in deep discussions, prayer
              sessions, and fellowship today.
            </p>
            <div className="flex lg:justify-start justify-center">
              <a
                className="text-white rounded-md bg-[#4e5173] py-4 px-8 text-md hover:bg-[#907d93]"
                href="https://discord.gg/jesus"
                aria-label="Discord"
                target="_blank"
              >
                Join
              </a>
              <div className="pl-4 flex items-start flex-col">
                <p className="text-lg font-semibold tracking-wide">
                  10,000+ believers
                </p>
                <p className="text-base pb-2">Ask, Discuss and Learn</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex  items-center justify-center ">
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
      </div> */}
    </div>
  );
};

export default About;

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
import cross from "@/public/about-icons/cross-about.png";
import logo from "@/public/logojlight.png";

import community from "@/public/about-icons/community.png";
import faith from "@/public/about-icons/faith.png";
import forgiveness from "@/public/about-icons/forgiveness.png";
import god from "@/public/about-icons/god.png";
import love from "@/public/about-icons/love.png";
import truth from "@/public/about-icons/truth.png";

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
        <div className="w-full max-w-7xl flex flex-col lg:flex-row mx-auto xl:justify-between sm:justify-between items-center z-20 py-32 px-6">
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
        <div className="max-w-7xl px-6 w-full pb-20">
          <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center gap-4  w-full mx-auto backdrop-blur rounded-lg text-white z-20 md:p-10 px-4 py-6 border-t border-r border-l border-b border-[#4E5172]">
            <div className="flex items-center gap-4">
              <p className="text-xl md:text-3xl font-medium">1M+</p>
              <p className="text-lg md:text-xl">Followers</p>
            </div>
            <div className="flex items-center gap-4 sm:justify-self-center">
              <p className="text-xl md:text-3xl font-medium">10K+</p>
              <p className="text-lg md:text-xl">Discord Members</p>
            </div>
            <div className="flex items-center gap-4 ">
              <p className="text-xl md:text-3xl font-medium">4M+ </p>
              <p className="text-lg/tight md:text-xl/tight max-w-[76px] sm:max-w-[100px]">
                Accounts Engaged Per Month
              </p>
            </div>
            <div className="flex items-center gap-4 sm:justify-self-center">
              <p className="text-xl md:text-3xl font-medium"> 15M+</p>
              <p className="text-lg/tight md:text-xl/tight max-w-[76px] sm:max-w-[100px]">
                Impressions Per Month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b  from-[#02161D] via-[#533E57] to-[#e6b8ae] ">
        <Socials />
        <h3 className="text-center text-3xl py-10">Our Values</h3>

        <div className="w-full grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:px-20">
          {/* faith  */}
          <div className="flex flex-col  relative gap-4 order-1 pr-14 md:pr-0 py-10">
            <Image
              src={cross}
              alt="cross"
              className="absolute trabsform translate-x-44 -translate-y-4"
            />

            <h3 className="text-2xl uppercase font-semibold text-right pr-6">Faith</h3>
            <Image
              src={faith}
              alt="faith icon"
              className="absolute translate-x-64 -translate-y-8 w-16"
            />
            <p className="w-60">
              Faith in Jesus Christ is our guiding light, offering hope,
              purpose, and the promise of eternal life. With unwavering faith,
              we find the courage to navigate life&apos;s challenges
            </p>
          </div>
          {/* community */}
          <div className="flex flex-col  relative gap-4 order-6 xl:order-2 pr-14 md:pr-0 py-10 ">
            <Image
              src={cross}
              alt="cross"
              className="absolute trabsform translate-x-44 -translate-y-4"
            />

            <h3 className="text-2xl uppercase font-semibold text-right pr-6">Community</h3>
            <Image
              src={community}
              alt="community icon"
              className="absolute translate-x-64 -translate-y-8 w-16"
            />

            <p className="w-60">
              Community is our strength. In unity, we find love, support, and
              purpose. Join us in our shared journey of faith and love in Jesus
              Christ.
            </p>
          </div>

          {/* truth */}
          <div className="flex flex-col  relative gap-4 order-3 pr-14 md:pr-0 py-10">
            <Image
              src={cross}
              alt="cross"
              className="absolute trabsform translate-x-44 -translate-y-4"
            />

            <h3 className="text-2xl uppercase font-semibold text-right pr-6">Truth</h3>
            <Image
              src={truth}
              alt="truth icon"
              className="absolute translate-x-64 -translate-y-8 w-16"
            />

            <p className="w-60">
              Community is our strength. In unity, we find love, support, and
              purpose. Join us in our shared journey of faith and love in Christ
              .
            </p>
          </div>

          {/* forgiveness */}
          <div className="flex flex-col relative gap-4 order-2 xl:order-4 pl-14 md:pl-0 py-10 ">
            <Image
              src={cross}
              alt="cross"
              className="absolute trabsform -translate-x-24 -translate-y-4"
            />
            <Image
              src={forgiveness}
              alt="forgiveness icon"
              className="absolute -translate-x-24 -translate-y-8 w-16"
            />

            <h3 className="text-2xl uppercase font-semibold">Forgiveness</h3>

            <p className="w-60">
              Forgiveness is at the heart of our faith. Through Christ&apos;s
              example, we extend grace, mend relationships, find healing, and
              experience the profound peace of God&apos;s love.
            </p>
          </div>

          {/* love */}
          <div className="flex flex-col relative gap-4 order-4  py-10 pl-14 md:pl-0  lg:p-0  lg:pt-6 xl:p-10">
            <Image
              src={cross}
              alt="cross"
              className="absolute trabsform -translate-x-24 -translate-y-4 "
            />
            <Image
              src={love}
              alt="love icon"
              className="absolute -translate-x-24 -translate-y-8 w-16"
            />

            <h3 className="text-2xl uppercase font-semibold">Love</h3>

            <p className="w-60">
              Love is our foundation. We embrace God&apos;s love and share it
              with one another, finding unity, purpose, and fulfillment in
              Christ&apos;s commandments.
            </p>
          </div>

          {/* god  */}
          <div className="flex flex-col relative gap-4 order-6 lg:order-6 py-10 pl-14 md:pl-0 lg:p-0 lg:px-10 lg:pt-[70px]  xl:pt-10">
            <Image
              src={cross}
              alt="cross"
              className="absolute trabsform -translate-x-24 -translate-y-4"
            />
            <Image
              src={god}
              alt="god icon"
              className="absolute -translate-x-24 -translate-y-8 w-16"
            />

            <h3 className="text-2xl uppercase font-semibold">Glorify God</h3>

            <p className="w-60">
              Glorifying God is our ultimate purpose. In everything we do, we
              strive to reflect God&apos;s love, goodness, and grace. Through
              our actions and worship, we honor the Creator and find fulfillment
              in living out His divine plan.
            </p>
          </div>
        </div>
        <section
          id="about"
          className="w-full mx-auto lg:flex items-center justify-center py-20 "
        >
          <Image
            src={discord}
            width={700}
            height={500}
            alt="My SVG"
            className="mx-auto flex-1 xl:ml-40 "
          />
          <div className="px-6 flex-1 ">
            <h3 className="font-semibold text-4xl pb-4 lg:text-start text-center tracking-wide">
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
        </section>
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

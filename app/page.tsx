import Image from "next/image";
import Newsletter from "./components/Newsletter";
import landing from "../public/landing2.png";
import MultiLayerParallax from "./components/MultiLayerParallax";
import discord from "@/public/discord2.png";

export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae] text-[#2c3047]">
      <div className="h-screen flex flex-col items-center justify-center overflow-visible z-20">
        <MultiLayerParallax />
      </div>
      <section className="h-full text-center w-full  pt-32">
        <div className="text-center items-center justify-center py-20 px-4 mx-auto max-w-5xl border-b border-[#907d93]">
          <h2 className="tracking-widest mx-auto md:text-6xl text-3xl text-center uppercase font-semibold pb-10 bg-gradient-to-r from-[#2c3047]  to-[#51455c] text-transparent bg-clip-text">
            Discover a Community Driven by Faith and Purpose
          </h2>
          <p className="mx-auto  md:text-2xl  text-lg text-[#212336]">
            Welcome to Jesus Group, where faith meets action and purpose.
            We&apos;re a community committed to enriching lives through the
            power of spirituality and meaningful engagement.
          </p>
        </div>
        {/* <div className="py-20 px-12 mx-auto max-w-2xl">
          <h2 className="tracking-widest text-3xl py-4 font-semibold">
            Our Mission
          </h2>
          <p className="text-lg text-[#212336] w-60 mx-auto">
            Our mission is to create a positive impact by blending faith,
            technology, and community. Through our diverse projects — from
            AI-powered Biblical exploration to a marketplace of Christian-themed
            products — we strive to be your go-to platform for all things
            faith-based.
          </p>
        </div> */}
        <section className="py-20 px-8 border-b border-[#907d93]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold pb-16 text-center">
              Empowering Faith through Technology
            </h2>
            <div className="md:flex items-center gap-10 justify-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Spiritual Enrichment
                </h3>
                <p className="max-w-md text-lg mb-6 mx-auto">
                  We aim to deepen faith journeys by seamlessly blending
                  spirituality with the latest in technology. Our diverse
                  projects, ranging from AI-driven biblical explorations to
                  curated Christian articles, serve as guiding lights for those
                  seeking spiritual growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Community Building
                </h3>
                <p className="max-w-md text-lg mb-6 mx-auto">
                  Beyond personal faith exploration, we&apos;re fostering a vibrant
                  community of believers. Our online marketplace not only offers
                  uniquely Christian-themed products but also contributes to
                  charitable causes, embodying the spirit of giving back.
                </p>
              </div>
            </div>
            <p className="text-center mt-12">
              Join us in creating a world where faith meets innovation, and
              where every exploration leads to spiritual upliftment.
            </p>
          </div>
        </section>
        <section className="w-full mx-auto lg:flex items-center justify-center py-20">
          <Image
            src={discord}
            width={700}
            height={500}
            alt="My SVG"
            className="mx-auto flex-1 xl:ml-40 "
          />
          <div className="px-6 flex-1">
            <h3 className="font-semibold text-4xl pb-4 lg:text-start text-cente tracking-wide">
              Join our Discord Comminity
            </h3>
            <p className="max-w-sm pb-4 mx-auto lg:mx-0 lg:text-start text-center text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              commodi incidunt vitae voluptate id, illum ex eaque pariatur
              veritatis doloribus, eos magnam modi! Aut dolor exercitationem
              fugit molestiae adipisci nostrum?
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
                  +8500 users
                </p>
                <p className="text-base pb-2">Ask, Discuss and Learn</p>
              </div>
            </div>
          </div>
        </section>

        <div className="lg:flex items-center justify-center gap-12 p-8 max-w-6xl mx-auto">
          <div className="flex-1 max-w-2xl mx-auto shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] py-14 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-4 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold mx-auto max-w-[180px]">
              MyFaithBuddy
            </h3>
            <p className="py-10 text-lg  w-52 mx-auto">
              Browse, read, and explore the Bible like never before.
            </p>
            <a
              href="/myfaithbuddy"
              className="p-4 bg-[#6484ab] text-[#dad9e1]  rounded-md"
            >
              Learn More
            </a>
          </div>
          <div className="flex-1 max-w-2xl mx-auto shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] py-20 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-4 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold mx-auto max-w-[180px]">
              Store
            </h3>
            <p className="py-10 text-lg w-52 mx-auto">
              Christian-themed items that inspire and uplift.
            </p>
            <a
              href="/shopify-store"
              className="p-4 bg-[#6484ab] text-[#dad9e1] rounded-md "
            >
              Visit Store
            </a>
          </div>
          <div className="flex-1 max-w-2xl mx-auto  shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] py-14 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-4 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold mx-auto max-w-[180px]">
              Blog
            </h3>
            <p className="py-10 text-lg w-52 mx-auto">
              Stay updated with the latest articles and insights.
            </p>
            <a
              href="/blog-newsletter"
              className="p-4 bg-[#6484ab] text-[#dad9e1] rounded-md"
            >
              Read Blog
            </a>
          </div>
        </div>
        <section className="py-20 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold">
                What Our Community Says
              </h2>
              <p className=" mt-2">
                Hear from our beloved members and their experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-b from-[#907d93] to-[#e6b8ae] shadow rounded-md">
                <p className=" italic">
                &quot;I&apos;ve found a supportive community here that has helped me
                  grow in faith.&quot;
                </p>
                <div className="mt-4 flex items-center">
                  <Image
                    src={landing}
                    alt="User Image"
                    className="w-12 h-12 rounded-full mr-4"
                  ></Image>
                  <div>
                    <h3 className="text-gray-800 font-medium">Jane Doe</h3>
                    <p className="text-gray-500 text-sm">Member since 2020</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-[#907d93] to-[#e6b8ae] shadow rounded-md">
                <p className=" italic">
                &quot;I&apos;ve found a supportive community here that has helped me
                  grow in faith.&quot;
                </p>
                <div className="mt-4 flex items-center">
                  <Image
                    src={landing}
                    alt="User Image"
                    className="w-12 h-12 rounded-full mr-4"
                  ></Image>
                  <div>
                    <h3 className="text-gray-800 font-medium">Jane Doe</h3>
                    <p className="text-gray-500 text-sm">Member since 2020</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-[#907d93] to-[#e6b8ae] shadow rounded-md">
                <p className=" italic">
                &quot;I&apos;ve found a supportive community here that has helped me
                  grow in faith.&quot;
                </p>
                <div className="mt-4 flex items-center">
                  <Image
                    src={landing}
                    alt="User Image"
                    className="w-12 h-12 rounded-full mr-4"
                  ></Image>
                  <div>
                    <h3 className="text-gray-800 font-medium">Jane Doe</h3>
                    <p className="text-gray-500 text-sm">Member since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

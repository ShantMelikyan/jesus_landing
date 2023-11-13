import Image from "next/image";
import Newsletter from "./components/Newsletter";
import landing from "../public/landing2.png";
import MultiLayerParallax from "./components/MultiLayerParallax";
import discord from "@/public/discord2.png";
import member1 from "@/public/member-avatars/member1.png";
import member2 from "@/public/member-avatars/member2.png";

export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae] text-[#2c3047]">
      <div className="md:h-screen flex flex-col items-center justify-center overflow-visible z-20">
        <MultiLayerParallax />
      </div>
      <section className="h-full text-center w-full  pt-32">
        <div className="text-center items-center justify-center py-20 px-4 mx-auto max-w-5xl border-b border-[#907d93]">
          <h2 className="tracking-widest mx-auto md:text-6xl text-3xl text-center uppercase font-semibold pb-10 bg-gradient-to-r from-[#2c3047]  to-[#51455c] text-transparent bg-clip-text">
            Discover a Community Driven by Faith and Purpose
          </h2>
          <p className="mx-auto  md:text-2xl  text-lg text-[#212336]">
            Welcome to Jesus Group, where Christian faith ignites purposeful
            action. We are a devoted community committed to enriching lives
            through the transformative power of Jesus.
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
                  We offer a range of valuable resources to enrich your
                  spiritual journey! FaithBuddy, a dedicated AI chatbot to
                  assist you on your Christian path, our blog, and daily
                  inspiring posts on our social media platforms to keep you
                  motivated and uplifted.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Community Building
                </h3>
                <p className="max-w-md text-lg mb-6 mx-auto">
                  Beyond personal faith exploration, we&apos;re fostering a
                  vibrant community of believers. Our Christian Discord
                  community offers virtual events, bible studies, and games to
                  strengthen your fellowship with Christians worldwide.
                </p>
              </div>
            </div>
            <p className=" text-lg text-center mt-12">
              Join us in making a world where faith and innovation come
              together, and every experience brings spiritual growth
            </p>
          </div>
        </section>
        <section
          id="about"
          className="w-full mx-auto lg:flex items-center justify-center py-20"
        >
          <Image
            src={discord}
            width={700}
            height={500}
            alt="My SVG"
            className="mx-auto flex-1 xl:ml-40 "
          />
          <div className="px-6 flex-1">
            <h3 className="font-semibold text-4xl pb-4 lg:text-start tracking-wide">
              Join our Discord Community
            </h3>
            <p className="max-w-sm pb-4 mx-auto lg:mx-0 lg:text-start text-center text-lg">
              In this space, we aim to create a warm and welcoming environment
              where we can come together to explore Scripture, Share personal
              experiences, and uplift one another in our faith journey. Through
              open discussion, prayer, and mutual support, our overall goals are
              to deepen our faith, inspire spiritual growth, and cultivate
              meaningful connections with fellow believers. Together, we strive
              to embody the love, compassion, and grace exemplified through
              Jesus , as we navigate our individual journeys of faith.
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

        <div className="lg:flex items-center justify-center gap-12 p-8 max-w-6xl mx-auto">
          <div className="flex-1 max-w-2xl mx-auto shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] py-14 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] h-96 p-4 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold mx-auto max-w-[180px]">
              MyFaithBuddy
            </h3>
            <p className="py-10 text-lg  w-52 mx-auto">
              Discover, read, and explore the Bible in a whole new way.
            </p>
            <a
              href="/myfaithbuddy"
              className="p-4 bg-[#4e5173] text-white  rounded-md"
            >
              Learn More
            </a>
          </div>
          <div className="flex-1 max-w-2xl mx-auto shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] py-20 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] h-96 p-4 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold mx-auto max-w-[180px]">
              Store
            </h3>
            <p className="py-10 text-lg w-52 mx-auto">
              Celebrate your Christian journey with our inspiring merchandise.
            </p>
            <a
              href="/shopify-store"
              className="p-4 bg-[#4e5173] text-white rounded-md "
            >
              Visit Store
            </a>
          </div>
          <div className="flex-1 max-w-2xl mx-auto  shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] py-14 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] h-96 p-4 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold mx-auto max-w-[180px]">
              Blog
            </h3>
            <p className="py-10 text-lg w-52 mx-auto">
              Stay updated with our latest articles and insights.
            </p>
            <a
              href="https://jesus.beehiiv.com/"
              className="p-4 bg-[#4e5173] text-white rounded-md"
            >
              Read Blog
            </a>
          </div>
        </div>
        <section className="py-20 ">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-semibold">
                Testimonials From Our Community
              </h2>
              <p className="text-lg mt-2">
                Hear from our beloved members and their experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-b from-[#9d8aa0] to-[#e6b8ae] shadow rounded-2xl flex flex-col justify-between max-w-md mx-auto">
                <p className=" italic">
                  &quot;I am grateful that I ended up somehow here. This
                  community makes my world more Godly, loving, safe, supportive.
                  God bless you all&quot;
                </p>
                <div className="mt-4 flex items-center text-start">
                  <Image
                    src={landing}
                    alt="User Image"
                    className="w-12 h-12 rounded-full mr-4"
                  ></Image>

                  <h3 className="text-gray-800 font-medium">
                    HereToFollowJesus
                  </h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-[#9d8aa0] to-[#e6b8ae] shadow rounded-2xl flex flex-col justify-between max-w-md mx-auto">
                <p className=" italic">
                  &quot;I would say this is the best Community that I have seen.
                  The moderators interact with the chat peacefully, if there is
                  a discussion it&apos;s mostly civil. And we have Bible study.
                  And if any debates were to break out in the chats it is
                  diverted, there&apos;s just so much respect it&apos;s so
                  amazing&quot;
                </p>
                <div className="mt-4 flex items-center text-start">
                  <Image
                    src={member1}
                    alt="User Image"
                    className="w-12 h-12 rounded-full mr-4"
                  ></Image>

                  <h3 className="text-gray-800 font-medium">djsavage</h3>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-[#9d8aa0] to-[#e6b8ae] shadow rounded-2xl flex flex-col justify-between max-w-md mx-auto">
                <p className=" italic">
                  &quot;This Community has been a refuge for so many struggling
                  christians bro 😭 God been leading a lot of brothers & sisters
                  to this place recently.&quot;
                </p>
                <div className="mt-4 flex items-center text-start">
                  <Image
                    src={member2}
                    alt="User Image"
                    className="w-12 h-12 rounded-full mr-4 "
                  ></Image>

                  <h3 className="text-gray-800 font-medium">Priesthood</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

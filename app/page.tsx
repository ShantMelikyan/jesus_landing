import Image from "next/image";
import Newsletter from "./components/Newsletter";
import landing from "../public/landing2.png"

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="h-screen flex flex-col items-center justify-center relative">
        <Image
          src={landing}
          priority={true}
          alt="landing"
          quality={100}
          className="object-cover h-full w-full "
        ></Image>
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
          className="absolute mt-20 px-10 max-w-2xl"
        ></iframe>
        {/* <h1 className="text-3xl py-5 absolute  text-white">
          Welcome to Jesus Group
        </h1>
        <h2 className="text-xl pt-20 absolute text-white">
          Your Journey to Faith and Inspiration
        </h2> */}
      </div>
      <section className="text-center w-full bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae]">
        <div className="md:flex  items-center justify-center p-32 mx-auto max-w-6xl border-b border-[#907d93]">
          <h2 className="leading-relaxed tracking-widest mx-auto text-3xl md:text-left text-center font-semibold w-48 pb-10 md:pb-0">
            Discover a Community Driven by Faith and Purpose
          </h2>
          <p className="mx-auto w-60 text-lg leading-loose">
            Welcome to Jesus Group, where faith meets action and purpose.
            We&apos;re a community committed to enriching lives through the
            power of spirituality and meaningful engagement.
          </p>
        </div>
        <div className="p-32 mx-auto max-w-2xl">
          <h2 className="tracking-widest text-3xl py-4 font-medium">
            Our Mission
          </h2>
          <p className=" text-lg">
            Our mission is to create a positive impact by blending faith,
            technology, and community. Through our diverse projects—from
            AI-powered Biblical exploration to a marketplace of Christian-themed
            products—we strive to be your go-to platform for all things
            faith-based.
          </p>
        </div>
        <div className="md:flex items-center justify-center gap-12 p-8">
          <div className="shadow-lg rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-20">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-medium text-[#1c1e31aa]">
              MyFaithBuddy
            </h3>
            <p className="py-10 text-lg w-52 p-6 mx-auto text-[#1c1e31aa]">
              Browse, read, and explore the Bible like never before.
            </p>
            <a
              href="/myfaithbuddy"
              className="p-4 bg-[#6484ab] text-[#cac9d4] rounded-md"
            >
              Learn More
            </a>
          </div>
          <div className="shadow-lg py-20 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-20">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-medium text-[#1c1e31aa]">
              Store
            </h3>
            <p className="py-10 text-lg w-52 p-6 mx-auto text-[#1c1e31aa]">
              Christian-themed items that inspire and uplift.
            </p>
            <a
              href="/shopify-store"
              className="p-4 bg-[#6484ab] text-[#cac9d4] rounded-md "
            >
              Visit Store
            </a>
          </div>
          <div className="shadow-lg rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-20">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-medium text-[#1c1e31aa]">
              Blog
            </h3>
            <p className="py-10 text-lg w-52 p-6 mx-auto text-[#1c1e31aa]">
              Stay updated with the latest articles and insights.
            </p>
            <a
              href="/blog-newsletter"
              className="p-4 bg-[#6484ab] text-[#cac9d4] rounded-md"
            >
              Read Blog
            </a>
          </div>
        </div>
      </section>
      <Newsletter />
    </main>
  );
}

import Image from "next/image";
import Newsletter from "./components/Newsletter";
import landing from "../public/landing2.png";
import MultiLayerParallax from "./components/MultiLayerParallax";

export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae]">
      <div className="h-screen flex flex-col items-center justify-center ">
        <MultiLayerParallax />
      </div>
      <section className="h-full text-center w-full  pt-32">
        <div className="md:flex  items-center justify-center py-20 mx-auto max-w-6xl border-b border-[#907d93]">
          <h2 className="leading-10 tracking-widest mx-auto text-3xl md:text-left text-center font-semibold w-48 pb-10 md:pb-0 text-[#2c3047]">
            Discover a Community Driven by Faith and Purpose
          </h2>
          <p className="mx-auto w-60 text-lg leading-8 text-[#212336]">
            Welcome to Jesus Group, where faith meets action and purpose.
            We&apos;re a community committed to enriching lives through the
            power of spirituality and meaningful engagement.
          </p>
        </div>
        <div className="p-20 mx-auto max-w-2xl">
          <h2 className="tracking-widest text-3xl py-4 font-semibold text-[#2c3047]">
            Our Mission
          </h2>
          <p className="text-lg text-[#212336]">
            Our mission is to create a positive impact by blending faith,
            technology, and community. Through our diverse projects — from
            AI-powered Biblical exploration to a marketplace of Christian-themed
            products — we strive to be your go-to platform for all things
            faith-based.
          </p>
        </div>
        <div className="lg:flex items-center justify-center gap-12 p-8">
          <div className="shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-16 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold text-[#37394b] mx-auto max-w-sm">
              MyFaithBuddy
            </h3>
            <p className="py-10 text-lg w-52 p-6 mx-auto text-[#37394b]">
              Browse, read, and explore the Bible like never before.
            </p>
            <a
              href="/myfaithbuddy"
              className="p-4 bg-[#6484ab] text-[#dad9e1]  rounded-md"
            >
              Learn More
            </a>
          </div>
          <div className="shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] py-20 rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-16 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold text-[#37394b] mx-auto max-w-sm">
              Store
            </h3>
            <p className="py-10 text-lg w-52 p-6 mx-auto text-[#37394b]">
              Christian-themed items that inspire and uplift.
            </p>
            <a
              href="/shopify-store"
              className="p-4 bg-[#6484ab] text-[#dad9e1] rounded-md "
            >
              Visit Store
            </a>
          </div>
          <div className="shadow-lg hover:shadow-2xl hover:shadow-[#907d9378] shadow-[#907d9378] rounded-2xl bg-gradient-to-b from-[#907d93] to-[#e6b8ae] p-16 mb-10 lg:mb-0 transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="bg-[#BC9CA1] shadow-inner shadow-[#A18998] rounded-lg py-4 tracking-wider text-xl font-semibold text-[#37394b] mx-auto max-w-sm">
              Blog
            </h3>
            <p className="py-10 text-lg w-52 p-6 mx-auto text-[#37394b]">
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
      </section>
    </main>
  );
}

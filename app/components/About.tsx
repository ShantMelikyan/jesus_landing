import React from "react";
import Image from "next/image";
import jesus from "../../public/logojesuslight.png";
import jesusLanding from "../../public/landing-about.png";

const About = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae] text-[#2c3047] pt-[110px]">
      <div className="h-96 relative w-full flex justify-center">
        <Image
          className="w-full object-cover h-96 absolute"
          quality={100}
          src={jesusLanding}
          alt="jesus"
        ></Image>
        <div className="absolute max-w-2xl mx-auto py-16 px-5">
          <h1 className="md:text-6xl text-3xl">
            Just a few things to know <strong>about us</strong>
          </h1>
          <h2 className="text-lg md:py-0 py-6">
            Discover who we are, our mission, and how we&apos;re making a difference.
          </h2>
          <h2 className="md:max-w-lg max-w-sm">
            We are a dedicated group of individuals committed to fostering a
            vibrant and inclusive community centered on the teachings of
            Christianity and the life of Jesus Christ for the past 5 years.
          </h2>
        </div>
      </div>
      <div className="w-full mx-auto p-6 max-w-2xl">
        <div className="w-full h-80 ">
          <Image
            className="w-full h-80 object-center object-cover"
            src={jesus}
            alt="jesus"
          ></Image>
        </div>

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
    </div>
  );
};

export default About;

import React from "react";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <main className="w-full h-screen grid place-items-center place-content-center bg-gradient-to-b from-[#53577a] via-[#907d93] to-[#e6b8ae] p-4">
      <div className="">
        <h1 className="text-4xl pb-6">Join Our Community of Faith!</h1>
        <h2 className="text-xl pb-4">
          Subscribe to our Newsletter for Weekly Inspiration
        </h2>
        <div className="max-w-md">
            <Newsletter />
        </div>
        <p className="max-w-lg pt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsam
          voluptas quaerat mollitia labore eos, explicabo vel fuga ducimus sint,
          nemo, vitae eveniet optio laboriosam! Voluptate repellat rem tenetur
          odio?
        </p>
      </div>
    </main>
  );
}

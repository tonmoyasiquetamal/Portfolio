import React from "react";

interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="px-4 max-w-6xl mx-auto py-4 my-14">
      <h1 className="mb-14 md:m-0 text-2xl md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">
        About Me
      </h1>
      <div className="bg-white rounded-3xl transform md:hover:scale-105 duration-500">
        <p className="p-8 md:text-xl text-gray-500 text-justify">{about}</p>
      </div>
    </section>
  );
}

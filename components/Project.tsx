import React from "react";
import Image from "next/image";

interface Props {
  projects: Array<{ Name: string; Image: string }>;
}

export default function Project({ projects }: Props) {
  return (
    <section id="projects" className="px-4 max-w-6xl mx-auto py-4 my-14">
      <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-right md:p-5 text-center font-bold text-gray-800">
        Projects
      </h1>
      <div className="flex flex-col p-8 bg-white rounded-3xl gap-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-full md:w-2/3 h-64 overflow-hidden rounded-lg border-2 border-green-500 hover:scale-105 duration-500">
            <img
              src="https://tonmoyasiquetamal-portfolio.netlify.app/milestone-shop.png"
              alt=""
            />
          </div>
          <div className="md:w-1/3 flex flex-col items-center justify-center md:items-end">
            <h2 className="font-bold text-2xl text-gray-700 mb-4">
              Milestone-Shop
            </h2>
            <button className="w-24 h-10 rounded-full border-2 border-green-300 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500">
              Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

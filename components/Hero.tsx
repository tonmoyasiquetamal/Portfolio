import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  data: {
    Name: string;
    Profession: string;
    Bio: string;
    Image: string;
    Resume: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="px-4 max-w-6xl mx-auto py-4 flex flex-col sm:flex-row gap-16 my-14">
      <div>
        <Image
          className="ring-8 rounded-full ring-green-300 hover:scale-105 transition-all duration-500 mx-auto"
          src={data.Image}
          height={260}
          width={260}
          alt="Tonmoy Asique Tamal"
        />
      </div>
      <div className="flex flex-col gap-5 justify-end">
        <p className="font-bold text-gray-500 text-xl md:text-3xl">
          {data.Profession}
        </p>
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800">
          {data.Name}
        </h1>
        <p className="text-gray-500 md:text-md lg:text-lg">{data.Bio}</p>
        <Link
          className="w-24 h-10 rounded-full border-2 border-green-300 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500"
          href={data.Resume}
        >
          Resume
        </Link>
      </div>
    </section>
  );
}

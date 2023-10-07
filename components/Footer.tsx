import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="px-4 max-w-6xl mx-auto py-4 mt-14">
      <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:p-5 text-center font-bold text-gray-800">
        Find Me
      </h1>
      <div className="flex flex-wrap p-8 bg-white rounded-3xl items-center justify-center">
        <Link href="/">
          <Image src={"/"} height={64} width={64} alt="" />
        </Link>
      </div>
      <p className="text-gray-500 font-bold text-center py-4">
        © 2024 All rights reserved. Tonmoy Asique Tamal
      </p>
    </section>
  );
}

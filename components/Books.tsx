import React from "react";
import Image from "next/image";

interface Props {
  books: Array<{ Name: string; Image: string }>;
}

export default function Books({ books }: Props) {
  return (
    <section id="books" className="px-4 max-w-6xl mx-auto py-4 my-14">
      <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-right md:p-5 text-center font-bold text-gray-800">
        Books
      </h1>
      <div className="flex flex-wrap p-8 bg-white rounded-3xl gap-y-8">
        {books.map((book, index) => {
          return (
            <div
              key={index}
              className="w-80 mx-auto flex flex-col items-center justify-center gap-4"
            >
              <div className="w-48 h-72 overflow-hidden flex justify-center items-center">
                {/* <Image
                  className="hover:scale-110 duration-500"
                  height={200}
                  width={200}
                  src="/download.png"
                  alt=""
                /> */}
                <img src={book.Image} height={288} width={192} alt="" />
              </div>
              <p className="text-lg font-semibold">{book.Name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

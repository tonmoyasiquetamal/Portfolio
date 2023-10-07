import React, { useState } from "react";
import Image from "next/image";

interface Props {
  value: {
    Name: string;
    Profession: string;
    Bio: string;
    Image: string;
    Resume: string;
    Books: Array<{ Name: string; Image: string }>;
    Skills: Array<{ Name: string; Image: string }>;
    Projects: Array<{ Name: string; Image: string }>;
    Research: Array<{ Name: string; Image: string }>;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      Name: string;
      Image: string;
      Profession: string;
      Bio: string;
      About: string;
      Resume: string;
      Books: {
        Name: string;
        Image: string;
      }[];
      Skills: {
        Name: string;
        Image: string;
      }[];
      Projects: {
        Name: string;
        Image: string;
      }[];
      Research: {
        Name: string;
        Image: string;
      }[];
    }>
  >;
}

export default function Books({ value, setValue }: Props) {
  const [show, setShow] = useState(false);
  function addBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const image = formData.get("image") as string;
    setValue((prev) => {
      return {
        ...prev,
        Books: [{ Name: name, Image: image }, ...prev.Books],
      };
    });
    setShow(false);
  }

  return (
    <>
      <section id="books" className="px-4 max-w-6xl mx-auto py-4 my-14">
        <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-right md:p-5 text-center font-bold text-gray-800">
          Books
        </h1>
        <div className="flex flex-wrap p-8 bg-white rounded-3xl gap-y-8">
          {value.Books.map((book, index) => {
            return (
              <div
                key={index}
                className="w-80 mx-auto flex flex-col items-center justify-center gap-4"
              >
                <div className="w-48 h-72 overflow-hidden flex justify-center items-center">
                  <Image
                  className="hover:scale-110 duration-500"
                  height={200}
                  width={200}
                  src="/download.png"
                  alt=""
                />
                </div>
                <p className="text-lg font-semibold">{book.Name}</p>
              </div>
            );
          })}
          <div className="w-80 mx-auto flex flex-col items-center justify-center gap-4">
            <div
              onClick={() => setShow(true)}
              className="w-48 h-64 overflow-hidden flex justify-center items-center border-dashed border-4 border-green-500 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3em"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
            <p className="text-lg font-semibold">Add Book</p>
          </div>
        </div>
      </section>
      {show && (
        <div className="fixed bg-gray-400 w-screen h-screen top-0 flex items-center justify-center z-10">
          <form
            className="bg-white p-4 lg:p-8 rounded-lg flex flex-col gap-4 justify-center items-center relative"
            onSubmit={addBook}
          >
            <svg
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 cursor-pointer hover:scale-110 duration-500"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            <p className="text-2xl font-bold">Add Book</p>
            <input type="file" className="w-full" name="image" />
            <input
              type="text"
              placeholder="Book Name"
              className="w-full border border-black focus:outline-none"
              name="name"
            />
            <button type="submit" className="px-5 py-1 border border-black">
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
}

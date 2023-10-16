import React from "react";
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

export default function Research({ value, setValue }: Props) {
  return (
    <section id="books" className="px-4 max-w-6xl mx-auto py-4 my-14">
      <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">
        Research
      </h1>
      <div className="flex flex-wrap p-8 bg-white rounded-3xl">
        {value.Research.map((research, index) => (
          <div
            key={index}
            className="w-80 mx-auto flex flex-col items-center justify-center gap-4"
          >
            <Image
              className="hover:scale-110 duration-500"
              height={200}
              width={200}
              src="/Tonmoy Asique Tamal.png"
              alt=""
            />
            <p className="text-lg font-semibold">{research.Name}</p>
          </div>
        ))}
        <div className="w-80 mx-auto flex flex-col items-center justify-center gap-4">
          <div
            // onClick={() => setShow(true)}
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
          <p className="text-lg font-semibold">Add Research</p>
        </div>
      </div>
    </section>
  );
}

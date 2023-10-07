import React from "react";

interface Props {
  value: {
    Name: string;
    About: string;
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

export default function About({ value, setValue }: Props) {
  return (
    <section id="about" className="px-4 max-w-6xl mx-auto py-4 my-14">
      <h1 className="mb-14 md:m-0 text-2xl md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">
        About Me
      </h1>
      <div className="bg-white rounded-3xl transform md:hover:scale-105 duration-500">
        <textarea
          className="p-8 md:text-xl text-gray-500 text-justify w-full"
          rows={7}
          value={value.About}
          onChange={(e) => {
            setValue((prev) => {
              return { ...prev, About: e.target.value };
            });
          }}
        ></textarea>
      </div>
    </section>
  );
}

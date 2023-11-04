import React from "react";
import Image from "next/image";

interface Props {
  skills: Array<{ Name: string; Image: string }>;
}
export default function Skills({ skills }: Props) {
  return (
    <section id="skills" className="px-4 max-w-6xl mx-auto py-4 my-14">
      <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">
        Skills
      </h1>
      <div className="flex flex-wrap p-8 bg-white rounded-3xl transform md:hover:scale-105 duration-500 gap-y-8">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="w-52 flex flex-col items-center justify-center mx-auto">
              <Image height={64} width={64} src={skill.Image} alt={skill.Name} />
              {/* <img src={skill.Image} alt="" height={64} width={64} /> */}
              <p className="font-bold text-lg">{skill.Name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

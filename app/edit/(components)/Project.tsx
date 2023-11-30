"use client";
import { useState } from "react";
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

export default function Project({ value, setValue }: Props) {
  const [show, setShow] = useState(false);

  function addProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const name=e.target.name.value
    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.imageUrl) {
          fetch("/api/update", {
            method: "POST",
            body: JSON.stringify({
              ...value,
              Projects: [
                { Name: name, Image: res.imageUrl },
                ...value.Projects,
              ],
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              setValue(data);
            })
            .then(() => {
              alert("Successfully Updated");
            })
            .catch((err) => {
              alert("Something went wrong");
              console.log(err);
            });
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });

    e.target.reset();
    setShow(false);
  }

  return (
    <>
      <section id="projects" className="px-4 max-w-6xl mx-auto py-4 my-14">
        <div className="flex items-center justify-between">
          <svg
            onClick={() => setShow(true)}
            className="cursor-pointer ml-5"
            xmlns="http://www.w3.org/2000/svg"
            height="3em"
            viewBox="0 0 448 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-right md:p-5 text-center font-bold text-gray-800">
            Projects
          </h1>
        </div>
        <div className="flex flex-col p-8 bg-white rounded-3xl gap-10">
          {value.Projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <div className="w-full md:w-2/3 h-64 overflow-hidden rounded-lg border-2 border-green-500 hover:scale-105 duration-500">
                <Image
                  className="mx-auto my-auto"
                  height={256}
                  width={780}
                  src={project.Image}
                  alt={project.Name}
                />
              </div>
              <div className="md:w-1/3 flex flex-col items-center justify-center md:items-end">
                <h2 className="font-bold text-2xl text-gray-700 mb-4">
                  {project.Name}
                </h2>
                <button className="w-24 h-10 rounded-full border-2 border-green-300 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {show && (
        <div className="fixed bg-gray-400 w-screen h-screen top-0 flex items-center justify-center z-10">
          <form
            className="bg-white p-4 lg:p-8 rounded-lg flex flex-col gap-4 justify-center items-center relative"
            onSubmit={addProject}
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
            <p className="text-2xl font-bold">Add project</p>
            <input type="file" className="w-full" name="image" />
            <input
              type="text"
              placeholder="Project Name"
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

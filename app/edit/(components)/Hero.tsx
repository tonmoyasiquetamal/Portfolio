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

export default function Hero({ value, setValue }: Props) {
  const [image, setImage] = useState(null);

  async function edit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.imageUrl) {
            fetch("/api/update", {
              method: "POST",
              body: JSON.stringify({ ...value, Image: res.imageUrl }),
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
    }
  }
  return (
    <section className="px-4 max-w-6xl mx-auto py-4 flex flex-col sm:flex-row gap-16 my-14">
      <div>
        <Image
          className="ring-8 w-[260px] h-[260px] rounded-full ring-green-300 hover:scale-105 transition-all duration-500 mx-auto"
          src={value.Image}
          height={260}
          width={260}
          alt="Tonmoy Asique Tamal"
        />
        <input
          type="file"
          className="mt-4"
          onChange={(e) => {
            setImage(e.target.files[0]);

            setValue((prev) => {
              return { ...prev, Image: URL.createObjectURL(e.target.files[0]) };
            });
          }}
        />
      </div>

      <form onSubmit={edit} className="flex flex-col gap-5 justify-end">
        <input
          className="font-bold text-gray-500 text-xl md:text-3xl"
          onChange={(e) => {
            setValue((prev) => {
              return { ...prev, Profession: e.target.value };
            });
          }}
          value={value.Profession}
          type="text"
        />
        <input
          className="text-2xl md:text-5xl font-bold text-gray-800"
          onChange={(e) => {
            setValue((prev) => {
              return { ...prev, Name: e.target.value };
            });
          }}
          value={value.Name}
          type="text"
        />
        <textarea
          className="text-gray-500 md:text-md lg:text-lg"
          onChange={(e) => {
            setValue((prev) => {
              return { ...prev, Bio: e.target.value };
            });
          }}
          value={value.Bio}
          cols={30}
          rows={4}
        ></textarea>
        <input
          className="text-gray-800"
          onChange={(e) => {
            setValue((prev) => {
              return { ...prev, Resume: e.target.value };
            });
          }}
          value={value.Resume}
          type="text"
        />
        <button
          type="submit"
          className="w-24 h-10 rounded-full border-2 border-green-300 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500"
        >
          Save
        </button>
      </form>
    </section>
  );
}

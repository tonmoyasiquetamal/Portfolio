import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 max-w-6xl mx-auto py-4 my-14">
      <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-right md:p-5 text-center font-bold text-gray-800">
        Contact
      </h1>
      <form className="p-8 sm:p-14 bg-white rounded-3xl flex flex-col items-center justify-center gap-4 text-lg">
        <input
          className="w-full focus:outline-none border-gray-300 border rounded-xl px-4 py-2 focus:border-green-500 focus:border-2"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <input
          className="w-full focus:outline-none border-gray-300 border rounded-xl px-4 py-2 focus:border-green-500 focus:border-2"
          type="text"
          name="email"
          placeholder="Enter your email"
          required
        />
        <textarea
          className="w-full focus:outline-none border-gray-300 border rounded-xl px-4 py-2 focus:border-green-500 focus:border-2"
          name="massage"
          cols={30}
          rows={10}
          placeholder="Your massage"
          required
        ></textarea>
        <button
          className="w-32 h-12 rounded-full border-2 border-green-300 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}

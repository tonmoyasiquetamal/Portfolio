"use client";
import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  function clickHandler(m) {
    const id: string =
      m.target.innerText.toLowerCase() === "home"
        ? "nav"
        : m.target.innerText.toLowerCase();
    document.getElementById(id)?.scrollIntoView();
  }

  return (
    <nav
      id="nav"
      className="flex justify-between items-center px-4 max-w-6xl mx-auto py-4 mb-14"
    >
      <h1 className="text-3xl font-bold cursor-pointer">Tonmoy Asique Tamal</h1>

      {isOpen ? (
        <svg
          className="text-4xl cursor-pointer lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      ) : (
        <svg
          className="text-4xl cursor-pointer lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      )}

      <ul className="justify-center items-center gap-5 font-bold hidden lg:flex">
        <li onClick={clickHandler} className="cursor-pointer">
          Home
        </li>
        <li onClick={clickHandler} className="cursor-pointer">
          About
        </li>
        <li onClick={clickHandler} className="cursor-pointer">
          Books
        </li>
        <li onClick={clickHandler} className="cursor-pointer">
          Skills
        </li>
        <li onClick={clickHandler} className="cursor-pointer">
          Projects
        </li>
        <li onClick={clickHandler} className="cursor-pointer">
          Research
        </li>
        <li onClick={clickHandler} className="cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}

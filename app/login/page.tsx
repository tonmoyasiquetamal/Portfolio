"use client";
import React from "react";

export default function page() {
  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ password: e.target.password.value }),
    });
  }
  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <form
        className="w-96 bg-slate-200 flex flex-col p-8 rounded-2xl gap-5 justify-center items-center"
        onSubmit={login}
      >
        <input
          className="h-10 focus:outline-green-600 text-xl p-2 w-full"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="w-24 h-10 rounded-full border-2 border-green-300 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-500"
        >
          Login
        </button>
      </form>
    </section>
  );
}

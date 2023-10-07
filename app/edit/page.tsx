'use client'
import React, { useState } from "react";
import data from "@/data.json";
import Nav from './(components)/Nav'
import Hero from './(components)/Hero'
import About from './(components)/About'
import Books from './(components)/Books'
import Skills from './(components)/Skills'
import Project from './(components)/Project'
import Contact from './(components)/Contact'
import Footer from './(components)/Footer'
import Research from './(components)/Research'

export default function Page() {
    const [value,setValue]=useState(data);
  return (
    <>
      <Nav />
      <Hero value={value} setValue={setValue}/>
      <About value={value} setValue={setValue}/>
      <Books value={value} setValue={setValue}/>
      <Skills value={value} setValue={setValue}/>
      <Project value={value} setValue={setValue}/>
      <Research value={value} setValue={setValue}/>
      <Contact/>
      <Footer/>
    </>
  );
}

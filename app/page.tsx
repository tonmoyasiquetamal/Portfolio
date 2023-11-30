import React from 'react'
import data from '@/data.json'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Books from '@/components/Books'
import Skills from '@/components/Skills'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Research from '@/components/Research'

export default function page() {
  return (
    <>
      <Nav/>
      <Hero data={data}/>
      <About about={data.About}/>
      <Books books={data.Books}/>
      <Skills skills={data.Skills}/>
      <Project projects={data.Projects}/>
      <Research research={data.Research}/>
      <Contact/>
      <Footer/>
    </>
  )
}

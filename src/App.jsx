import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import OpenSource from './components/OpenSource'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f1f] text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <OpenSource />
      <CaseStudies />
      {/* Testimonials placeholder */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App

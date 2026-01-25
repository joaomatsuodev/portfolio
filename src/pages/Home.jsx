import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div> 
      {/* Alocando os componentes */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact /> 
    </div>
  )
}

export default Home
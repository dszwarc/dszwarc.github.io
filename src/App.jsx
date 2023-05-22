import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioCard from './components/BioCard/BioCard'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BioCard />
    <AboutMe />
    <Skills />
    <Projects />
    </>
  )
}

export default App

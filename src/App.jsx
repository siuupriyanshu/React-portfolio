
import Hero from './sections/hero/Hero'
import { ThemeProvider } from './common/ThemeContext'
import './App.css';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

function App() {
 

  return (
    <>
   <ThemeProvider>
    <Hero />
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
  </ThemeProvider>
    </>
  )
}

export default App

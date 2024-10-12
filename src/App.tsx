import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  return (
    <div className='min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] '>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div >
  )
}

export default App

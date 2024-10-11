import './App.css'
// import AboutMe from './components/AboutMe'
// import Description from './components/Description'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import Resume from './components/resume/Resume'

function App() {
  return (
    <div className='min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] '>
      <Navbar />
      <Hero />
      {/* <Description /> */}
      {/* <AboutMe /> */}
      <Footer />
      {/* <Resume /> */}
    </div >
  )
}

export default App

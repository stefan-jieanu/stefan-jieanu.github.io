import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PreviousWork from './components/PreviousWork'
import Skills from './components/Skills'

function App() {
  const work = [
    {
      published_at: '5 months ago',
      title: 'Site',
      cover_image: 'https://www.metroparks.net/wp-content/uploads/2017/06/1080p_HBK_autumn-morning_GI.jpg',
      description: 'Site for muzeu.',
      collab: 'In collaboration with Mindhive Software'
    }
  ]
  return (
    <div className='min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] '>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <PreviousWork blogs={work} />
      <Footer />
    </div >
  )
}

export default App

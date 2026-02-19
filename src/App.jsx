import { Parallax } from 'react-scroll-parallax'
import { Navbar } from './components/Navbar'
import { Home } from './sections/Home'
import { Intro } from './sections/Intro'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


function App() {

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,   // higher = smoother
      // effects: true
    })
  }, [])
  
  return (
    <main id='smooth-wrapper' className='w-full min-h-screen mx-auto'>
      <div id='smooth-content'>
        <div className='w-full flex justify-center fixed z-10'>
          <Navbar />
        </div>
          <Home />
        <Intro />
      </div>
    </main>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,#e8f0ff_0%,transparent_35%),radial-gradient(circle_at_80%_0%,#e6fffb_0%,transparent_30%)]">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <Process />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

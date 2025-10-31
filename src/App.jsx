import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'

function App() {
  return (
    <div className="dark bg-black text-gray-100 min-h-screen textured-background">
      <Navbar />
      
      {/* --- This is the Global Container --- */}
      <main className="container mx-auto px-6 max-w-6xl">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true if scrolled past 10px
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set up listeners
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dark bg-black text-gray-100 min-h-screen textured-background">
      {/* Pass state down to Navbar */}
      <Navbar isScrolled={isScrolled} /> 
      
      <main className="container mx-auto px-6 max-w-6xl">
        {/* Pass state down to Hero */}
        <Hero isScrolled={isScrolled} /> 
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
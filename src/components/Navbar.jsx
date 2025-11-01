import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

// Helper function to get the current section based on scroll position (iterates backward)
const getActiveSection = () => {
  let activeId = 'home';
  const offset = 100; 

  for (let i = navLinks.length - 1; i >= 0; i--) {
    const link = navLinks[i];
    const section = document.querySelector(link.href);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset) {
        activeId = link.href.substring(1);
        break;
      }
    }
  }
  return activeId;
};

// RECEIVES isScrolled AS PROP FROM APP.JSX
const Navbar = ({ isScrolled }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleActiveSection = () => {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(() => {
                setActiveSection(getActiveSection());
            });
        } else {
            setActiveSection(getActiveSection());
        }
    };
    
    handleActiveSection();
    window.addEventListener('scroll', handleActiveSection);
    window.addEventListener('resize', handleActiveSection);
    return () => {
      window.removeEventListener('scroll', handleActiveSection);
      window.removeEventListener('resize', handleActiveSection);
    };
  }, []); 

  return (
    <motion.nav 
      className={`
        fixed w-full top-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'dark:bg-gray-900 shadow-md border-b border-slate-700' 
          : 'bg-transparent shadow-none border-b border-transparent' 
        } 
      `}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-center h-20">
          
          <a href="#home" className="text-3xl font-bold">
            <span className="text-slate-100">Meherab</span>
            <span className="text-react-cyan-400">.Dev</span>
          </a>

          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => {
              const isActive = link.href.substring(1) === activeSection;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    relative 
                    text-lg font-medium transition duration-300 px-4 py-2 rounded-lg 
                    ${isActive
                      ? 'bg-react-cyan-400 text-gray-900 font-bold'
                      : 'text-slate-100 hover:text-react-cyan-400'
                    }
                  `}
                >
                  {link.label}
                  
                </a>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-slate-100 focus:outline-none"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden absolute w-full dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'top-20 opacity-100' : '-top-96 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-4">
          {navLinks.map((link) => {
            const isActive = link.href.substring(1) === activeSection;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  block w-full text-center text-lg py-4 transition duration-300 
                  ${isActive
                    ? 'bg-react-cyan-600 text-white font-bold'
                    : 'text-slate-100 hover:dark:bg-gray-800'
                  }
                `}
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
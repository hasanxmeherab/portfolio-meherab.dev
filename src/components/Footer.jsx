// src/components/Footer.jsx

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'; 

// Define the social links data structure right inside the component
const socialLinks = [
    { 
        name: 'GitHub', 
        url: 'https://github.com/hasanxmeherab', 
        icon: FaGithub 
    },
    { 
        name: 'LinkedIn', 
        url: 'https://linkedin.com/in/hasanxmeherab', 
        icon: FaLinkedin 
    },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // State and function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer 
      className="border-t border-slate-700 mt-20 py-10"
    >
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Meherab Hasan Fahim | All rights reserved.
          </p>
          
        </div>

        {/* Combined Social Icons and Back-to-Top Button */}
        <div className="flex gap-6 items-center">
          
          {/* Social Icons */}
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-react-cyan-400 transition duration-300 transform hover:scale-110"
            >
              <link.icon size={24} />
            </a>
          ))}

          {/* Back-to-Top Arrow Button */}
          <button
            onClick={scrollToTop}
            className="text-slate-400 hover:text-react-cyan-400 transition duration-300 transform hover:scale-110 p-2 ml-4 rounded-full border border-slate-700 hover:border-react-cyan-400 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <FaArrowUp size={18} />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
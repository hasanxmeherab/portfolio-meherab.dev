import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="border-t border-slate-700 mt-20 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Updated container to match App.jsx */}
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Meherab Hasan Fahim | All rights reserved.
          </p>
          
        </div>

        <div className="flex gap-6">
          <a 
            href="https://github.com/hasanxmeherab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-emerald-400 transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/hasanxmeherab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-emerald-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
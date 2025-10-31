// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaLaptopCode, FaDownload } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import profilePic from "../assets/profile-pic.jpg";
import myResume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      // Retained the reduced padding from the previous fix
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-16 md:pt-20"
    >
      {/* ===== Column 1: Text Content ===== */}
      <motion.div
        className="md:w-3/5 text-center md:text-left mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100">
          Hi, I'm <span className="text-emerald-400">Meherab Hasan Fahim</span>
        </h1>

        <TypeAnimation
          sequence={[
            "I build things for the web.", 2000,
            "I am a MERN Stack Developer.", 2000,
            "I love to solve problems.", 2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-xl md:text-3xl font-bold text-slate-300 mb-6"
          repeat={Infinity}
        />

        <div className="my-6 flex justify-center md:justify-start">
          <span className="inline-block bg-emerald-800/50 text-emerald-300 text-sm font-medium px-4 py-2 rounded-full border border-emerald-700">
            MERN Stack Developer
          </span>
        </div>

        <p className="text-base mb-8 max-w-lg mx-auto md:mx-0 text-slate-400">
          I build fast, responsive, and beautiful web applications. Currently
          focused on the MERN stack.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mb-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-5 rounded-lg text-base transition duration-300"
          >
            <FaLaptopCode size={18} /> Browse Projects
          </a>

          <a
            href={myResume}
            download="Meherab-Hasan-Resume.pdf"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-slate-100 font-bold py-2 px-5 rounded-lg text-base transition duration-300"
          >
            <FaDownload size={18} /> Download Resume
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-6">
          <a
            href="https://github.com/hasanxmeherab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/hasanxmeherab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 transition duration-300 transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </motion.div>

      {/* ===== Column 2: Image ===== */}
      <motion.div
        className="md:w-2/5 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative p-1 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500">
          <div className="p-1 bg-gray-900 rounded-full">
            <img
              src={profilePic}
              alt="Meherab Hasan Fahim"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* ===== Scroll Down Indicator ===== */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400 hover:text-emerald-400 transition duration-300"
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiOutlineChevronDown size={24} />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;
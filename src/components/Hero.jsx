import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiTailwindcss, SiJavascript, SiGit,
} from "react-icons/si";
import profilePic from "../assets/profile-pic.jpg";
import myResume from "../assets/resume_of_Meherab_Hasan_Fahim.pdf";

const techIcons = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#6DA55F' },
  { icon: SiExpress, label: 'Express', color: '#999' },
  { icon: SiMongodb, label: 'MongoDB', color: '#4DB33D' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#38B2AC' },
  { icon: SiGit, label: 'Git', color: '#F1502F' },
];

/* Duplicate for seamless loop */
const marqueeItems = [...techIcons, ...techIcons];

const Hero = ({ isScrolled }) => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen pt-20 md:pt-24"
    >
      {/* ═══════════════ LEFT TEXT COLUMN ═══════════════ */}
      <motion.div
        className="md:w-3/5 text-center md:text-left mb-2 md:mb-0 order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Availability badge */}
        <motion.div
          className="flex justify-center md:justify-start mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-3">
          <span className="text-slate-100">Hi, I'm </span>
          <span className="gradient-text">Meherab Hasan</span>
        </h1>

        {/* Type animation */}
        <TypeAnimation
          sequence={[
            "I build things for the web.", 2000,
            "I'm a MERN Stack Developer.", 2000,
            "I love solving hard problems.", 2000,
          ]}
          wrapper="h2"
          speed={52}
          className="font-display text-xl md:text-2xl font-semibold text-slate-400 mb-6"
          repeat={Infinity}
        />

        {/* Description */}
        <p className="text-base text-slate-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          I craft fast, responsive, and beautiful web applications. Currently focused on the&nbsp;
          <span className="text-react-cyan-400 font-medium">MERN stack</span> — from pixel-perfect UIs to robust REST APIs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4 md:mb-8">
          <a
            href="#projects"
            className="btn-shimmer inline-flex items-center gap-2 bg-react-cyan-500 hover:bg-react-cyan-400 text-black font-bold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(97,218,251,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-300"
          >
            <HiArrowTopRightOnSquare size={17} />
            View Projects
          </a>

          <a
            href={myResume}
            download="Meherab-Hasan-Resume.pdf"
            className="btn-shimmer inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-react-cyan-400/40 text-slate-200 font-semibold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-300"
          >
            <FaDownload size={14} />
            Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 md:mb-0">
          {[
            { href: 'https://github.com/hasanxmeherab', icon: FaGithub, label: 'GitHub' },
            { href: 'https://linkedin.com/in/hasanxmeherab', icon: FaLinkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile`}
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/[0.1] bg-white/[0.03] text-slate-400 hover:text-react-cyan-400 hover:border-react-cyan-400/40 hover:bg-react-cyan-400/5 transition-all duration-300 hover:scale-110"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════ RIGHT IMAGE COLUMN ═══════════════ */}
      <motion.div
        className="md:w-2/5 flex justify-center mt-10 md:mt-0 order-1 md:order-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Outer glow ring */}
        <div className="profile-glow p-[3px] rounded-full bg-gradient-to-br from-react-cyan-400 via-blue-500 to-purple-600">
          <div className="p-[3px] rounded-full bg-[#050810]">
            <img
              src={profilePic}
              alt="Meherab Hasan Fahim"
              loading="eager"
              className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* ═══════════════ TECH MARQUEE STRIP ═══════════════ */}
      <motion.div
        className="order-3 w-full mt-0 pb-3 overflow-hidden marquee-wrapper md:absolute md:bottom-20 md:left-0 md:right-0 md:mt-0 md:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {marqueeItems.map(({ icon: Icon, label, color }, i) => (
            <span
              key={`${label}-${i}`}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors duration-200 text-sm font-medium cursor-default"
            >
              <Icon style={{ color }} size={18} />
              {label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════ SCROLL INDICATOR ═══════════════ */}
      <a
        href="#about"
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 transition-all duration-500 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-slate-600 hover:text-react-cyan-400 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <HiOutlineChevronDown size={20} />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;
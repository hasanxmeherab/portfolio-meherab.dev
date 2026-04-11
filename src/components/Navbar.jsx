import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home',      label: 'Home'      },
  { href: '#about',     label: 'About'     },
  { href: '#projects',  label: 'Projects'  },
  { href: '#education', label: 'Education' },
  { href: '#skills',    label: 'Skills'    },
  { href: '#contact',   label: 'Contact'   },
];

const getActiveSection = () => {
  let activeId = 'home';
  const offset = 100;
  for (let i = navLinks.length - 1; i >= 0; i--) {
    const section = document.querySelector(navLinks[i].href);
    if (section && section.getBoundingClientRect().top <= offset) {
      activeId = navLinks[i].href.substring(1);
      break;
    }
  }
  return activeId;
};

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen]           = useState(false);
  const [activeSection, setActive]    = useState('home');
  const [indicatorStyle, setIndicator] = useState({ left: 0, width: 0 });
  const navRef   = useRef(null);
  const linksRef = useRef({});

  const toggleMenu = () => setIsOpen(p => !p);

  /* ── Active-section tracker ── */
  useEffect(() => {
    const update = () => window.requestAnimationFrame
      ? window.requestAnimationFrame(() => setActive(getActiveSection()))
      : setActive(getActiveSection());
    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  /* ── Sliding indicator geometry ── */
  useEffect(() => {
    const el = linksRef.current[activeSection];
    if (el && navRef.current) {
      const navRect  = navRef.current.getBoundingClientRect();
      const elRect   = el.getBoundingClientRect();
      setIndicator({ left: elRect.left - navRect.left, width: elRect.width });
    }
  }, [activeSection]);

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-400 ease-in-out ${
        isScrolled
          ? 'bg-[#050810]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold tracking-tight group">
            <span className="text-slate-100 group-hover:text-white transition-colors">Meherab</span>
            <span className="gradient-text">.Dev</span>
          </a>

          {/* Desktop Nav */}
          <div ref={navRef} className="hidden md:flex items-center space-x-1 relative">
            {/* Sliding pill indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-9 rounded-lg bg-react-cyan-400/10 border border-react-cyan-400/20 pointer-events-none"
              animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />

            {navLinks.map((link) => {
              const isActive = link.href.substring(1) === activeSection;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  ref={el => { linksRef.current[link.href.substring(1)] = el; }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative z-10 text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-400 ${
                    isActive ? 'text-react-cyan-300' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden text-slate-300 hover:text-react-cyan-400 transition-colors p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-400"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'x' : 'bars'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#050810]/95 backdrop-blur-xl border-b border-white/[0.06]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="flex flex-col py-3">
              {navLinks.map((link, i) => {
                const isActive = link.href.substring(1) === activeSection;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-8 py-3.5 text-sm font-medium transition-colors duration-200 border-l-2 ${
                      isActive
                        ? 'border-react-cyan-400 text-react-cyan-300 bg-react-cyan-400/5'
                        : 'border-transparent text-slate-400 hover:text-slate-100 hover:bg-white/[0.03]'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

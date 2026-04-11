import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub',   url: 'https://github.com/hasanxmeherab',        icon: FaGithub   },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/hasanxmeherab',   icon: FaLinkedin },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] mt-16">
      {/* Top divider glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-react-cyan-500/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left: copyright + built-with */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold text-slate-300 font-display">
            <span className="gradient-text">Meherab</span>.Dev
          </p>
          <p className="text-xs text-slate-600">
            &copy; {year} · Built with{' '}
            <FaHeart className="inline text-red-500/80 mx-0.5" size={10} />
            {' '}using React &amp; Tailwind CSS
          </p>
        </div>

        {/* Right: socials + back to top */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${name} profile`}
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-500 hover:text-react-cyan-400 hover:border-react-cyan-400/30 hover:bg-react-cyan-400/[0.04] transition-all duration-250 hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top"
            className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-500 hover:text-react-cyan-400 hover:border-react-cyan-400/30 hover:bg-react-cyan-400/[0.04] transition-all duration-250 hover:scale-110 ml-2"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
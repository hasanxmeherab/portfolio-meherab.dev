import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useLayoutEffect } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMongoose,
  SiFirebase, SiGit, SiC, SiCplusplus, SiMysql,
} from 'react-icons/si';

const skills = [
  { name: 'HTML',       icon: <SiHtml5       className="text-orange-500"  size={18} />, category: 'Frontend' },
  { name: 'CSS',        icon: <SiCss3        className="text-blue-500"    size={18} />, category: 'Frontend' },
  { name: 'Tailwind',   icon: <SiTailwindcss className="text-cyan-400"    size={18} />, category: 'Frontend' },
  { name: 'Bootstrap',  icon: <SiBootstrap   className="text-purple-500"  size={18} />, category: 'Frontend' },
  { name: 'JavaScript', icon: <SiJavascript  className="text-yellow-400"  size={18} />, category: 'Frontend' },
  { name: 'React.js',   icon: <SiReact       className="text-cyan-400"    size={18} />, category: 'Frontend' },
  { name: 'Next.js',    icon: <SiNextdotjs   className="text-white"       size={18} />, category: 'Frontend' },
  { name: 'Express',    icon: <SiExpress     className="text-slate-300"   size={18} />, category: 'Backend'  },
  { name: 'MongoDB',    icon: <SiMongodb     className="text-green-500"   size={18} />, category: 'Backend'  },
  { name: 'Mongoose',   icon: <SiMongoose    className="text-red-500"     size={18} />, category: 'Backend'  },
  { name: 'Firebase',   icon: <SiFirebase    className="text-yellow-400"  size={18} />, category: 'Backend'  },
  { name: 'MySQL',      icon: <SiMysql       className="text-sky-400"     size={18} />, category: 'Backend'  },
  { name: 'Git',        icon: <SiGit         className="text-orange-500"  size={18} />, category: 'Tools'    },
  { name: 'C',          icon: <SiC           className="text-blue-500"    size={18} />, category: 'Tools'    },
  { name: 'C++',        icon: <SiCplusplus   className="text-blue-400"    size={18} />, category: 'Tools'    },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.88, y: 10 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.3 } },
  exit:    { opacity: 0, scale: 0.88, y: -8, transition: { duration: 0.2 } },
};

const Skills = () => {
  const [activeCategory, setActive] = useState('All');
  const filteredSkills = skills.filter(s => activeCategory === 'All' || s.category === activeCategory);

  /* ── Animated slider geometry ── */
  const tabRefs  = useRef({});
  const trackRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const el = tabRefs.current[activeCategory];
    const track = trackRef.current;
    if (el && track) {
      const tRect = track.getBoundingClientRect();
      const eRect = el.getBoundingClientRect();
      setPill({ left: eRect.left - tRect.left, width: eRect.width });
    }
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="w-full max-w-6xl px-6 mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3">— tech toolbelt —</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Filter tabs with sliding pill */}
        <div className="flex justify-center mb-10">
          <div ref={trackRef} className="filter-track">
            {/* Sliding pill */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-react-cyan-500 pointer-events-none"
              animate={{ left: pill.left, width: pill.width }}
              transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              style={{ zIndex: 0 }}
            />

            {categories.map(cat => (
              <button
                key={cat}
                ref={el => { tabRefs.current[cat] = el; }}
                onClick={() => setActive(cat)}
                aria-label={`Filter by ${cat}`}
                className={`relative z-10 px-5 py-1.5 text-sm rounded-full font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-400 ${
                  activeCategory === cat ? 'text-black' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] hover:border-react-cyan-400/30 hover:bg-react-cyan-400/[0.04] rounded-xl px-4 py-3 cursor-default transition-all duration-250"
              >
                <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </span>
                <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
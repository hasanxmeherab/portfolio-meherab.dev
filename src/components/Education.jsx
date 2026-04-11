import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const educationData = [
  {
    year: '2023 — Present',
    title: 'B.Sc. in Software Engineering',
    institution: 'Daffodil International University',
    location: 'Dhaka, Bangladesh',
    field: 'Software Engineering',
    icon: FaGraduationCap,
  },
  {
    year: '2018 — 2023',
    title: 'Diploma in Engineering',
    institution: 'Daffodil Polytechnic Institute',
    location: 'Dhaka, Bangladesh',
    field: 'Computer Technology',
    icon: FaGraduationCap,
  },
];

const Education = () => (
  <section id="education" className="py-24 md:py-32">

    {/* Heading */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow mb-3">— academic background —</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
        My <span className="gradient-text">Education</span>
      </h2>
    </motion.div>

    {/* ── Timeline ── */}
    <div className="relative max-w-3xl mx-auto">

      {/* Vertical line — hidden on mobile, visible md+ */}
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(97,218,251,0.4) 20%, rgba(97,218,251,0.4) 80%, transparent)' }}
      />

      {/* Mobile left line */}
      <div
        className="md:hidden absolute left-5 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(97,218,251,0.35) 10%, rgba(97,218,251,0.35) 90%, transparent)' }}
      />

      {educationData.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className={`relative flex mb-10 ${
              /* Mobile: always left-aligned with indent; Desktop: alternate */
              'pl-14 md:pl-0 md:w-full md:flex ' + (isEven ? 'md:justify-start' : 'md:justify-end')
            }`}
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
          >
            {/* Timeline dot — mobile */}
            <div className="md:hidden absolute left-[14px] top-6 flex items-center justify-center w-3 h-3 rounded-full bg-react-cyan-400 ring-4 ring-react-cyan-400/20" />

            {/* Timeline dot — desktop */}
            <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-[#050810] border-2 border-react-cyan-400/60 text-react-cyan-400 shadow-[0_0_16px_rgba(97,218,251,0.25)]">
              <item.icon size={16} />
            </div>

            {/* Card */}
            <div
              className={`group relative bg-white/[0.03] border border-white/[0.07] hover:border-react-cyan-500/30 rounded-2xl p-6 card-glow md:w-[calc(50%-2.5rem)] ${
                isEven ? 'md:mr-10' : 'md:ml-10'
              }`}
            >
              {/* Top-accent bar */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-react-cyan-500/50 to-transparent" />

              {/* Degree badge */}
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-react-cyan-500/10 border border-react-cyan-500/25 text-react-cyan-400 mb-4">
                {item.title}
              </span>

              <h3 className="font-display text-lg font-bold text-slate-100 mb-1 leading-snug">
                {item.institution}
              </h3>

              <p className="text-sm font-medium text-slate-400 mb-3">{item.field}</p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-react-cyan-500/60" size={11} />
                  {item.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-react-cyan-500/60" size={11} />
                  {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Education;

// src/components/Projects.jsx
import React from 'react';
import { SpotlightCard } from './SpotlightCard';
import MoreProjectsCard from './MoreProjectsCard'; // <-- Import the new card
import projectImage from '../assets/project-image-1.png'; 
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Fahim Poultry Feed',
    description: 'A full-stack business management system using the MERN stack.',
    image: projectImage,
    liveUrl: 'https://fahimpoultryfeed.me',
    githubUrl: 'https://github.com/hasanxmeherab/Fahim-Poultry-Feed',
    gridSpan: 'md:col-span-1',
  },
  {
    title: 'Second Project',
    description: 'A cool app I built with React and Tailwind.',
    image: null, 
    liveUrl: '#',
    githubUrl: '#',
    gridSpan: 'md:col-span-1',
  },
]; 

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20">
        
      <motion.h2 
        className="text-4xl font-bold text-center mb-16 text-slate-100"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-emerald-400">Projects</span>
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* --- Project 1 --- */}
        <SpotlightCard 
          className={projects[0].gridSpan}
          variants={itemVariants}
        >
          {projects[0].image && (
            <img 
              src={projects[0].image} 
              alt={projects[0].title} 
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6"> 
            <h3 className="text-2xl font-bold mb-2 text-slate-100">{projects[0].title}</h3>
            <p className="text-slate-400 mb-4">{projects[0].description}</p>
            <div className="flex gap-4">
              <a href={projects[0].liveUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold">Live Demo</a>
              <a href={projects[0].githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300 font-semibold">GitHub</a>
            </div>
          </div>
        </SpotlightCard>

        {/* --- Project 2 --- */}
        <SpotlightCard 
          className={projects[1].gridSpan}
          variants={itemVariants}
        >
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-slate-100">{projects[1].title}</h3>
            <p className="text-slate-400 mb-4">{projects[1].description}</p>
            <div className="flex gap-4">
              <a href={projects[1].liveUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold">Live Demo</a>
              <a href={projects[1].githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300 font-semibold">GitHub</a>
            </div>
          </div>
        </SpotlightCard>

        {/* --- More Projects Card (Wrapped for Animation) --- */}
        <motion.div variants={itemVariants}>
            <MoreProjectsCard />
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Projects;
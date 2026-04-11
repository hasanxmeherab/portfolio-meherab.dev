import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { cn } from '../utils/cn'; // Utility function for Tailwind merging

const ProjectDetails = ({ isOpen, project, onClose }) => {
  // 1. Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null; // Prevent rendering if no project is selected

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop (Click outside to close)
        <motion.div
          className="fixed inset-0 z-[60] bg-black bg-opacity-80 flex items-center justify-center p-4 md:p-8"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            className="w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto relative border border-white/[0.09] bg-[#050810]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop
          >
            {/* Close Button (High Z-index to always be on top) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-react-cyan-400 transition-colors duration-300 z-50 p-2"
              aria-label="Close project details"
            >
              <FaTimes size={24} />
            </button>

            {/* Project Image */}
            {project.image && (
                <div className="h-64 md:h-80 overflow-hidden relative z-10">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                    />
                    {/* Dark gradient overlay for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
            )}
            
            {/* Content Wrapper (Z-index 10 to be above the background pattern) */}
            <div className="p-6 md:p-10 relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-slate-100">
                    {project.title}
                </h2>
                <p className="text-sm text-react-cyan-400 font-medium mb-8 leading-relaxed">
                    {project.description}
                </p>

                {/* Overview */}
                <h3 className="font-display text-xl font-bold text-slate-100 mb-3 border-b border-white/[0.07] pb-2">Overview</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    {project.overview}
                </p>

                {/* Key Features */}
                <h3 className="font-display text-xl font-bold text-slate-100 mb-4 border-b border-white/[0.07] pb-2">Key Features</h3>
                <ul className="space-y-3 mb-8">
                    {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-slate-300">
                            <FaCheckCircle className="text-react-cyan-400 mt-1 mr-3 flex-shrink-0" size={16} />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Technologies Used */}
                <h3 className="font-display text-xl font-bold text-slate-100 mb-4 border-b border-white/[0.07] pb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8 justify-center">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "btn-shimmer flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300",
                          "bg-react-cyan-500 text-black hover:bg-react-cyan-400 hover:shadow-[0_0_24px_rgba(97,218,251,0.3)]"
                        )}
                    >
                        <FaExternalLinkAlt size={14} /> View Live
                    </a>
                    
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "btn-shimmer flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300",
                          "bg-white/[0.04] border border-white/[0.1] text-slate-100 hover:bg-white/[0.08] hover:border-white/[0.2]"
                        )}
                    >
                        <FaGithub size={14} /> View Code
                    </a>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
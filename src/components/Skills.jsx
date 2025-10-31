// src/components/Skills.jsx
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMongoose,
    SiFirebase, SiGit, SiC, SiCplusplus, SiPostgresql, SiRedux, SiMysql
} from 'react-icons/si';
import { Pencil } from 'lucide-react';

// Main Skills Component
const Skills = () => {
    // Data for skills, including name, icon, and category
    const skills = [
        { name: 'HTML', icon: <SiHtml5 className="text-orange-500" size={20} />, category: 'Frontend' },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" size={20} />, category: 'Frontend' },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" size={20} />, category: 'Frontend' },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" size={20} />, category: 'Frontend' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={20} />, category: 'Frontend' },
        { name: 'React.js', icon: <SiReact className="text-cyan-400" size={20} />, category: 'Frontend' },
        { name: 'Next.js', icon: <SiNextdotjs size={20} />, category: 'Frontend' },
        { name: 'Express', icon: <SiExpress size={20} />, category: 'Backend' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={20} />, category: 'Backend' },
        { name: 'Mongoose', icon: <SiMongoose className="text-red-700" size={20} />, category: 'Backend' },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" size={20} />, category: 'Backend' },
        { name: 'MySQL', icon: <SiMysql className="text-sky-500" size={20} />, category: 'Backend' },
        { name: 'Git', icon: <SiGit className="text-orange-600" size={20} />, category: 'Tools' },
        { name: 'C', icon: <SiC className="text-blue-600" size={20} />, category: 'Tools' },
        { name: 'C++', icon: <SiCplusplus className="text-blue-700" size={20} />, category: 'Tools' },
    ];

    const categories = ['All', 'Frontend', 'Backend', 'Tools'];
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredSkills = skills.filter(skill => activeCategory === 'All' || skill.category === activeCategory);

    // Animation variants for the container of the skills grid
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger the animation of children

            },
        },
    };

    // Animation variants for each individual skill item
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 } // Define exit animation
    };

    return (
        <section 
            id="skills" 
            // FIXED: Removed bg-[#0c0c0c] and relative/overflow-hidden. Now inherits page background.
            className="w-full flex items-center justify-center font-sans py-24"
        >
            {/* REMOVED: The inner div with the duplicate texture overlay. */}
            
            <div className="w-full max-w-6xl px-6 mx-auto z-10">

                {/* Animate the heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                        My <span className="text-emerald-400">Skills</span>
                    </h1>
                </motion.div>

                <div className="flex flex-wrap gap-3 mb-10 justify-center">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ease-in-out font-medium
                                ${activeCategory === category
                                    ? 'bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.6)]'
                                    : 'bg-gray-800/60 border border-gray-700 text-gray-300 hover:bg-gray-700/80'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Animate the grid container */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* AnimatePresence handles the enter/exit animations of items */}
                    <AnimatePresence>
                        {filteredSkills.map(skill => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout // Animate layout changes
                                // RESTORED: Original dark background and Tailwind hover effects
                                className="flex items-center justify-center sm:justify-start gap-3 bg-gray-800/60 border border-gray-700 rounded-full px-4 py-2.5 cursor-pointer hover:bg-gray-700/80 hover:border-emerald-400 transition-colors duration-300"
                            >
                                {skill.icon}
                                <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
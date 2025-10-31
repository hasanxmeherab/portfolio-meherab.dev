import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

// Define your education data
const educationData = [
    {
        year: '2023 - Running',
        title: 'B.Sc. in SWE',
        institution: 'Daffodil International University',
        field: 'Software Engineering',
        description: '',
        icon: FaGraduationCap,
    },
    {
        year: '2018-2023',
        title: 'Diploma in Engineering',
        institution: 'Daffodil Polytechnic Institute',
        field: 'Computer Technology ',
        description: '',
        icon: FaGraduationCap,
    },
];

const Education = () => {
    // Animation variants for section title
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="education" className="py-20 md:py-32">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100 flex items-center justify-center gap-3" // Added flex, items-center, justify-center, gap-3
                initial="hidden"
                whileInView="visible"
                variants={titleVariants}
                viewport={{ once: true, amount: 0.5 }}
            >
                {/* ADDED: Icon next to the title */}
                <FaGraduationCap className="text-emerald-400" />
                <span className="text-emerald-400">Education</span>
            </motion.h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Timeline Line (Thin, Dark, with Subtle Glow) */}
                <div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-slate-700 h-full"
                    style={{
                        boxShadow: '0 0 4px rgba(52, 211, 153, 0.5), 0 0 8px rgba(52, 211, 153, 0.2)'
                    }} 
                />

                {educationData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const shouldGlow = true;
                    const direction = isEven ? -50 : 50;

                    return (
                        <motion.div
                            key={index}
                            className={`mb-8 flex w-full ${isEven ? 'justify-start' : 'justify-end'}`}
                            initial={{ opacity: 0, x: direction }} 
                            whileInView={{ 
                                opacity: 1, 
                                x: 0, 
                                transition: { 
                                    delay: index * 0.2,
                                    duration: 0.7, 
                                    ease: "easeOut" 
                                } 
                            }} 
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className={`w-full md:w-5/12 p-4 rounded-lg bg-slate-800/50 relative ${isEven ? 'md:mr-8' : 'md:ml-8'} 
                                ${shouldGlow ? 'border border-emerald-500 shadow-lg shadow-emerald-500/20' : 'border border-slate-700'}
                            `}>
                                
                                {/* 1. Degree Title Pill/Tag */}
                                <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-md mb-3">
                                    {item.title}
                                </span>
                                
                                {/* 2. Institution Name (Fixed: text-xl + whitespace-nowrap) */}
                                <h3 className="text-xl font-bold text-slate-100 mb-1 leading-snug whitespace-nowrap">
                                    {item.institution}
                                </h3>
                                
                                {/* 3. Specific Field/Program */}
                                {item.field && (
                                    <p className="text-lg font-medium text-slate-300 mb-3">
                                        {item.field}
                                    </p>
                                )}

                                {/* 4. Original Description */}
                                {item.description && (
                                    <p className="text-slate-400 mb-3">
                                        {item.description}
                                    </p>
                                )}
                                
                                {/* 5. Year/Running (Emerald Accent Color) */}
                                <span className="text-sm font-semibold text-emerald-400 block">
                                    {item.year}
                                </span>

                                {/* Timeline Dot (Unchanged) */}
                                <div className={`absolute rounded-full bg-emerald-500 border-slate-900 top-1/2 transform -translate-y-1/2 ${isEven ? 'right-0 md:translate-x-1/2' : 'left-0 md:-translate-x-1/2'} 
                                    ${shouldGlow ? 'w-5 h-5 border-4 shadow-md shadow-emerald-500/50' : 'w-4 h-4 border-2'}
                                `}>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 rounded-full p-2">
                                        <item.icon size={16} className="text-emerald-400" />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;
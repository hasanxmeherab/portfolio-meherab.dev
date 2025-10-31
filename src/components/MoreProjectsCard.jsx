// src/components/MoreProjectsCard.jsx
import React from 'react';
import { FaCode } from 'react-icons/fa';
import { SpotlightCard } from './SpotlightCard'; // Import the wrapper component

// We assume this component is now wrapped in <motion.div variants={itemVariants}> in Projects.jsx

const MoreProjectsCard = () => {
    
    return (
        // The SpotlightCard provides the border, glow, and mouse movement effect.
        // The className ensures it takes up one grid column and centers the content.
        <SpotlightCard 
          className="col-span-1 md:col-span-1 h-full flex flex-col items-center justify-center text-center p-8"
        >
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500">
                <FaCode size={32} className="text-emerald-400" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-slate-100">
                More Projects Coming Soon
            </h3>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
                I'm constantly exploring new technologies and building exciting things. Stay tuned for my latest work!
            </p>
        </SpotlightCard>
    );
};

export default MoreProjectsCard;
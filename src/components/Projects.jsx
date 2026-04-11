import React, { useState } from 'react'; 
import { SpotlightCard } from './SpotlightCard';
import { motion } from 'framer-motion';
import { FaCode, FaArrowRight, FaLaptopCode } from 'react-icons/fa'; 
import projectImage1 from '../assets/project-image-1.png'; 
import projectImage2 from '../assets/oneelixir.png';
import projectImage3 from '../assets/diulenslink.png';
import ProjectDetails from './ProjectDetails';

// --- PROJECT DATA ---
const projects = [
  {
    id: 1,
    title: 'Fahim Poultry Feed',
    description: '🐔A Robust, Role-Based MERN Stack Solution for Managing Poultry Feed Business Inventory, Sales, and Credit Cycles.',
    image: projectImage1,
    liveUrl: 'https://fahimpoultryfeed.me',
    githubUrl: 'https://github.com/hasanxmeherab/Fahim-Poultry-Feed',
    gridSpan: 'md:col-span-1', 
    overview: 'This custom full-stack business application digitized the entire operational workflow of a poultry feed business. It provides real-time tracking of retail inventory and wholesale products, manages customer credit cycles (batches), tracks all sales and financial adjustments, and generates detailed reports, significantly improving accuracy and operational efficiency.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS','MUI'],
    features: [
      'It offers real-time dynamic tracking for inventory, sales, and low-stock alerts.',
      'Role-Based Access Control (Admin, Manager, Production Staff)',
      'Dynamic Raw Material and Finished Goods Inventory Tracking',
      'The system manages Customer Credit Cycles using a full Batch Management feature.',
      'Comprehensive Sales, Ledger, and Financial Reporting',
      'User-friendly, fully responsive interface built with React'
    ]
  },
  {
    id: 2,
    title: 'OneElixir',
    description: '🛍️ A Premium E-commerce Platform for Fragrances and Perfumes built with the MERN stack.',
    image: projectImage2, 
    liveUrl: 'https://oneelixir.vercel.app',
    githubUrl: 'https://github.com/hasanxmeherab/One-Elixir', 
    gridSpan: 'md:col-span-1', 
    overview: 'OneElixir is a full-stack MERN application designed for a luxury perfume brand, featuring a seamless shopping experience and secure checkout.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Cloudinary'],
    features: [
      'Elegant product showcase with high-quality imagery',
      'Secure User Authentication and Profile management',
      'Dynamic shopping cart and streamlined checkout process',
      'Integrated backend API hosted on Render'
    ]
  },
  {
    id: 3,
    title: 'LensLink',
    description: '📸 A Professional Photography & Videography Service Management System built with the MERN stack.',
    image: projectImage3,
    liveUrl: 'https://diulenslink.vercel.app',
    githubUrl: 'https://github.com/hasanxmeherab/LensLink-Photography-Videography-Service-Management-System',
    gridSpan: 'md:col-span-1',
    overview: 'LensLink is a comprehensive MERN application designed for professional photography and videography services, featuring an intuitive booking system, portfolio showcase, and dedicated admin dashboard for service management.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'JWT Authentication', 'Cloudinary', 'Multer'],
    features: [
      'Service listing and detailed browsing',
      'Secure online booking system with portfolio showcase',
      'Admin dashboard for managing services and bookings',
      'JWT-based authentication and authorization',
      'Cloud-based image upload via Cloudinary',
      'Responsive design with Tailwind CSS'
    ]
  }
]; 

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProject, setSelectedProject] = useState(null); 

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; 
  };

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
        My <span className="text-react-cyan-400">Projects</span>
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* FIX: Map through the projects array dynamically */}
        {projects.map((project) => (
          <SpotlightCard 
            key={project.id}
            className={project.gridSpan + " cursor-pointer"}
            variants={itemVariants}
            onClick={() => openModal(project)}
          >
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2 text-slate-100">{project.title}</h3>
              <p className="text-slate-400 mb-6">{project.description}</p>
              
              <button 
                onClick={(e) => { e.stopPropagation(); openModal(project); }}
                className="inline-flex items-center text-react-cyan-400 hover:text-react-cyan-300 font-semibold transition duration-300"
              >
                Details 
                <motion.span
                  variants={{ rest: { x: 0 }, hover: { x: 5 } }}
                  className="ml-2"
                >
                  <FaArrowRight className="text-sm" />
                </motion.span>
              </button>
            </div>
          </SpotlightCard>
        ))}

        {/* --- More Projects Card --- */}
        <motion.div 
          variants={itemVariants} 
          className="md:col-span-1" 
        >
          <SpotlightCard className="h-full flex flex-col items-center justify-center text-center p-8">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-react-cyan-500/10 border border-react-cyan-500 mx-auto">
              <FaCode size={32} className="text-react-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-100">More Coming Soon</h3>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Exploring new technologies. Stay tuned for my latest work!
            </p>
          </SpotlightCard>
        </motion.div>
      </motion.div>

      <ProjectDetails 
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
import React, { useState } from 'react';
import { SpotlightCard } from './SpotlightCard';
import { motion } from 'framer-motion';
import { FaCode, FaGithub } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import projectImage1 from '../assets/project-image-1.png';
import projectImage2 from '../assets/oneelixir.png';
import projectImage3 from '../assets/diulenslink.png';
import ProjectDetails from './ProjectDetails';

const projects = [
  {
    id: 1,
    title: 'Fahim Poultry Feed',
    description: 'A robust, role-based MERN solution for managing poultry feed business inventory, sales, and credit cycles.',
    image: projectImage1,
    liveUrl: 'https://fahimpoultryfeed.me',
    githubUrl: 'https://github.com/hasanxmeherab/Fahim-Poultry-Feed',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    gridSpan: 'md:col-span-1',
    overview: 'This custom full-stack business application digitized the entire operational workflow of a poultry feed business. It provides real-time tracking of retail inventory and wholesale products, manages customer credit cycles (batches), tracks all sales and financial adjustments, and generates detailed reports, significantly improving accuracy and operational efficiency.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'MUI'],
    features: [
      'Real-time dynamic tracking for inventory, sales, and low-stock alerts.',
      'Role-Based Access Control (Admin, Manager, Production Staff)',
      'Dynamic Raw Material and Finished Goods Inventory Tracking',
      'Customer Credit Cycles with full Batch Management',
      'Comprehensive Sales, Ledger, and Financial Reporting',
      'User-friendly, fully responsive React interface',
    ],
  },
  {
    id: 2,
    title: 'OneElixir',
    description: 'A premium e-commerce platform for luxury fragrances and perfumes, built end-to-end with the MERN stack.',
    image: projectImage2,
    liveUrl: 'https://oneelixir.vercel.app',
    githubUrl: 'https://github.com/hasanxmeherab/One-Elixir',
    tags: ['React', 'Express', 'Cloudinary', 'Tailwind'],
    gridSpan: 'md:col-span-1',
    overview: 'OneElixir is a full-stack MERN application designed for a luxury perfume brand, featuring a seamless shopping experience and secure checkout.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'Cloudinary'],
    features: [
      'Elegant product showcase with high-quality imagery',
      'Secure User Authentication and Profile management',
      'Dynamic shopping cart and streamlined checkout process',
      'Integrated backend API hosted on Render',
    ],
  },
  {
    id: 3,
    title: 'LensLink',
    description: 'A professional photography & videography service management system with bookings and portfolio showcase.',
    image: projectImage3,
    liveUrl: 'https://diulenslink.vercel.app',
    githubUrl: 'https://github.com/hasanxmeherab/LensLink-Photography-Videography-Service-Management-System',
    tags: ['MERN', 'Cloudinary', 'JWT', 'Multer'],
    gridSpan: 'md:col-span-1',
    overview: 'LensLink is a comprehensive MERN application for professional photography and videography services, featuring an intuitive booking system, portfolio showcase, and dedicated admin dashboard.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Cloudinary', 'Multer'],
    features: [
      'Service listing and detailed browsing',
      'Secure online booking system with portfolio showcase',
      'Admin dashboard for managing services and bookings',
      'JWT-based authentication and authorization',
      'Cloud-based image upload via Cloudinary',
      'Responsive design with Tailwind CSS',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen]     = useState(false);
  const [selectedProject, setSelected]   = useState(null);

  const openModal = (project) => {
    setSelected(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelected(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-24 md:py-32">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-3">— selected work —</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
          My <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <SpotlightCard
            key={project.id}
            className={`${project.gridSpan} cursor-pointer h-full group`}
            variants={itemVariants}
            onClick={() => openModal(project)}
          >
            {/* Image */}
            {project.image && (
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                {/* Live + GitHub icon overlays */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:text-react-cyan-400 hover:border-react-cyan-400/40 transition-all duration-200"
                    aria-label={`Visit ${project.title} live`}
                  >
                    <HiArrowTopRightOnSquare size={15} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:text-react-cyan-400 hover:border-react-cyan-400/40 transition-all duration-200"
                    aria-label={`${project.title} source code`}
                  >
                    <FaGithub size={15} />
                  </a>
                </div>
              </div>
            )}

            {/* Card body */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="font-display text-lg font-bold text-slate-100">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={e => { e.stopPropagation(); openModal(project); }}
                className="mt-2 text-xs font-semibold text-react-cyan-400 hover:text-react-cyan-300 transition-colors self-start flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-300 rounded"
              >
                View Details →
              </button>
            </div>
          </SpotlightCard>
        ))}

        {/* More Coming Soon card */}
        <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
          <SpotlightCard className="h-full flex flex-col items-center justify-center text-center p-10">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-react-cyan-500/10 border border-react-cyan-500/30">
              <FaCode size={28} className="text-react-cyan-400" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3 text-slate-100">More Coming Soon</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Always building. Follow along on GitHub to catch my latest work!
            </p>
            <a
              href="https://github.com/hasanxmeherab"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-react-cyan-400 hover:text-react-cyan-300 transition-colors"
            >
              <FaGithub size={16} /> github.com/hasanxmeherab
            </a>
          </SpotlightCard>
        </motion.div>
      </motion.div>

      <ProjectDetails isOpen={isModalOpen} project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;
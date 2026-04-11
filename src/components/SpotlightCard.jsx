import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const SpotlightCard = ({ children, className, variants, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const frameRef = React.useRef(null);
  const pendingPositionRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pendingPositionRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    if (frameRef.current) {
      return;
    }

    frameRef.current = requestAnimationFrame(() => {
      setMousePosition(pendingPositionRef.current);
      frameRef.current = null;
    });
  };

  return (
    <motion.div
      variants={variants}
      onClick={onClick}
      className={cn(
        "relative bg-white/[0.03] rounded-2xl border border-white/[0.07] overflow-hidden shadow-lg shadow-black/40 transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight element */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(97, 218, 251, 0.07), transparent 80%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Glowing border element */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(97, 218, 251, 0.08), transparent 80%)`,
          border: '1px solid rgba(97, 218, 251, 0.2)',
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

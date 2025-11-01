// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-4 text-slate-100">
        Let's <span className="text-react-cyan-400">Build Together</span> {/* REACT COLOR */}
      </h2>
      
      <p className="text-lg text-slate-400 mb-12 text-center max-w-xl mx-auto">
        Have a question or want to discuss a project? Reach out below—I'll get back to you soon.
      </p>
      
      {/* --- Form Section: Clean, Frosted Card --- */}
      <div className="max-w-xl mx-auto bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-8 md:p-10">
        
        <form 
          action="https://formspree.io/f/your-form-id" // <-- IMPORTANT: Get your Formspree ID
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 transition focus:outline-none focus:ring-2 focus:ring-react-cyan-500 focus:border-react-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 transition focus:outline-none focus:ring-2 focus:ring-react-cyan-500 focus:border-react-cyan-500" 
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message (briefly describe your request)"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 transition focus:outline-none focus:ring-2 focus:ring-react-cyan-500 focus:border-react-cyan-500 resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-react-cyan-500 hover:bg-react-cyan-600 text-black font-bold py-3 px-8 rounded-xl text-lg transition duration-300 transform hover:scale-[1.01] active:scale-[0.99]" 
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Subtle direct email link below form */}
        <p className="text-sm text-slate-500 mt-6 text-center">
          Prefer email? Reach me directly at: <a href="mailto:meherabhasan.dev@gmail.com" className="text-react-cyan-400 hover:text-react-cyan-300 transition duration-300">meherabhasan.dev@gmail.com</a> {/* REACT COLOR LINK */}
        </p>

      </div>
    </motion.section>
  );
};

export default Contact;
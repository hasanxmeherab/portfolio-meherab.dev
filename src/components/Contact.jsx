import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('submitting');
    setStatusMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Unable to send message right now. Please try again.');
      }

      form.reset();
      setFormStatus('success');
      setStatusMessage('Message sent successfully. I will get back to you soon.');
    } catch (error) {
      setFormStatus('error');
      setStatusMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-100">
        Let's <span className="text-react-cyan-400">Build Together</span> {/* REACT COLOR */}
      </h2>
      
      <p className="text-lg text-slate-400 mb-12 text-center max-w-xl mx-auto">
        Have a question or want to discuss a project? Reach out below—I'll get back to you soon.
      </p>
      
      {/* --- Form Section: Clean, Frosted Card --- */}
      <div className="max-w-xl mx-auto bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-8 md:p-10">
        
        <form 
          action="https://formspree.io/f/manlvdng" // <-- IMPORTANT: Get your Formspree ID
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-slate-300 mb-2">Your Name</label>
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
            <label htmlFor="email" className="block text-sm text-slate-300 mb-2">Your Email</label>
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
            <label htmlFor="message" className="block text-sm text-slate-300 mb-2">Message</label>
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
              disabled={formStatus === 'submitting'}
              className="w-full bg-react-cyan-500 hover:bg-react-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-3 px-8 rounded-xl text-lg transition duration-300 transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" 
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {statusMessage && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm text-center ${formStatus === 'success' ? 'text-emerald-400' : 'text-red-400'}`}
            >
              {statusMessage}
            </p>
          )}
        </form>

        {/* Subtle direct email link below form */}
        <p className="text-sm text-slate-500 mt-6 text-center">
          Prefer email? Reach me directly at: <a href="mailto:meherabhasan.dev@gmail.com" className="text-react-cyan-400 hover:text-react-cyan-300 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-300 rounded-sm">meherabhasan.dev@gmail.com</a> {/* REACT COLOR LINK */}
        </p>

      </div>
    </motion.section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'meherabhasan.dev@gmail.com',
    href: 'mailto:meherabhasan.dev@gmail.com',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/hasanxmeherab',
    href: 'https://github.com/hasanxmeherab',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hasanxmeherab',
    href: 'https://linkedin.com/in/hasanxmeherab',
  },
];

const Contact = () => {
  const [formStatus, setFormStatus]   = useState('idle');
  const [statusMessage, setStatusMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('submitting');
    setStatusMsg('');
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Unable to send message right now. Please try again.');
      form.reset();
      setFormStatus('success');
      setStatusMsg("Message sent! I'll get back to you soon. 🎉");
    } catch (error) {
      setFormStatus('error');
      setStatusMsg(error.message || 'Something went wrong. Please try again.');
    }
  };

  const inputClass = "input-glow w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] text-slate-100 placeholder-slate-600 text-sm transition-all duration-200";

  return (
    <motion.section
      id="contact"
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="eyebrow mb-3">— let's connect —</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
          Let's <span className="gradient-text">Build Together</span>
        </h2>
        <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      {/* Split layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">

        {/* ── Left: Contact Info ── */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-display text-lg font-semibold text-slate-200 mb-6">Contact Info</h3>

          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-react-cyan-400/30 hover:bg-react-cyan-400/[0.04] transition-all duration-250 card-glow"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-react-cyan-400/10 border border-react-cyan-400/20 text-react-cyan-400 flex-shrink-0 mt-0.5">
                <Icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 font-medium mb-0.5">{label}</p>
                <p className="text-sm text-slate-300 truncate group-hover:text-react-cyan-300 transition-colors">{value}</p>
              </div>
              <HiArrowTopRightOnSquare className="text-slate-600 group-hover:text-react-cyan-400 transition-colors flex-shrink-0 mt-1 ml-auto" size={14} />
            </a>
          ))}

          {/* Availability notice */}
          <div className="mt-6 p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for freelance &amp; full-time
            </div>
            <p className="text-xs text-slate-500 mt-1.5">Usually responds within 24 hours.</p>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="md:col-span-3 bg-white/[0.02] border border-white/[0.07] rounded-2xl p-7 md:p-9">
          <form
            action="https://formspree.io/f/manlvdng"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-2 tracking-wide">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-2 tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-2 tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Tell me about your project or idea..."
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="btn-shimmer w-full bg-react-cyan-500 hover:bg-react-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 px-8 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_28px_rgba(97,218,251,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-react-cyan-300"
            >
              {formStatus === 'submitting' ? 'Sending…' : 'Send Message →'}
            </button>

            {statusMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm text-center pt-1 ${formStatus === 'success' ? 'text-emerald-400' : 'text-red-400'}`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
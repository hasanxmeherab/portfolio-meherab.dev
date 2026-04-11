import { motion } from "framer-motion";

const cards = [
  {
    emoji: '⚡',
    title: 'My Journey',
    body: 'From first-click curiosity to MERN stack fluency — my path has been driven by a single goal: building beautiful, functional solutions to real problems.',
  },
  {
    emoji: '🎯',
    title: 'What I Build',
    body: 'Seamless, dynamic user interfaces that transform complex logic into experiences people genuinely enjoy — fast APIs to pixel-perfect UIs.',
  },
  {
    emoji: '🎮',
    title: 'Beyond Code',
    body: 'Football tactics, story-driven video games, and the occasional deep dive into design inspiration — how I recharge and stay creative.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const About = () => (
  <section id="about" className="py-24 md:py-32">

    {/* Section header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow mb-3">— get to know me —</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
        A Little More About <span className="gradient-text">Me</span>
      </h2>
    </motion.div>

    {/* Cards */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {cards.map(({ emoji, title, body }) => (
        <motion.div
          key={title}
          variants={itemVariants}
          whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
          className="group relative bg-white/[0.03] border-t-2 border-t-react-cyan-500/60 border-x border-b border-white/[0.07] rounded-2xl p-8 flex flex-col items-center text-center cursor-default overflow-hidden card-glow"
        >
          {/* Background glow on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-react-cyan-500/[0.05] to-transparent rounded-2xl" />

          <div className="text-4xl mb-5 select-none">{emoji}</div>
          <h3 className="font-display text-xl font-bold text-slate-100 mb-3">{title}</h3>
          <p className="text-slate-400 leading-relaxed text-sm">{body}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default About;
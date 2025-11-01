import { motion } from "framer-motion";

// Custom Icon components
const IconWrapper = ({ children }) => (
    <div className="flex items-center justify-center w-12 h-12 bg-slate-800/70 border border-slate-700 rounded-xl mb-4">
        {children}
    </div>
);

const CodeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const TargetIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const PaletteIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path></svg>;

const About = () => {
    // Animation variants
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
        <section id="about" className="py-20 md:py-32">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                A Little More About <span className="text-react-cyan-400">Me</span>
            </motion.h2>

            {/* Main container for the scannable points */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Point 1: Programming Journey */}
                <motion.div
                    className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center"
                    variants={itemVariants}
                >
                    <IconWrapper><CodeIcon /></IconWrapper>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">My Programming Journey</h3>
                    <p className="text-slate-400 leading-relaxed">
                        From a curiosity about websites to a passion for the MERN stack, I love turning complex problems into beautiful, functional code.
                    </p>
                </motion.div>

                {/* Point 2: Work I Enjoy */}
                <motion.div
                    className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center"
                    variants={itemVariants}
                >
                    <IconWrapper><TargetIcon /></IconWrapper>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">What I Love to Build</h3>
                    <p className="text-slate-400 leading-relaxed">
                        I thrive on creating intuitive, dynamic user interfaces. My goal is to build applications that are not just powerful, but also a joy to use.
                    </p>
                </motion.div>

                {/* Point 3: Hobbies */}
                <motion.div
                    className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col items-center"
                    variants={itemVariants}
                >
                    <IconWrapper><PaletteIcon /></IconWrapper>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">Beyond the Code</h3>
                    <p className="text-slate-400 leading-relaxed">
                        When I'm not programming, you'll find me playing cricket or painting. Both hobbies allow me to be creative and strategic in different ways.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
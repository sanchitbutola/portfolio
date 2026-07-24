'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="min-h-screen flex items-center py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-2xl mx-auto w-full"
      >
        {/* Main Content */}
        <div className="glass border border-gray-700/50 rounded-2xl p-12 text-center space-y-8">
          {/* Icon */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="p-4 rounded-full bg-gradient-to-r from-electric-blue/20 to-purple-accent/20">
              <div className="text-5xl">📄</div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Interested in my <span className="gradient-text">work?</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto">
            Download my resume to explore my experience, skills, projects, and technical background. I'm always excited to discuss new opportunities and collaborations.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 rounded-lg border-2 border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center font-semibold"
            >
              <Eye size={20} />
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="group px-8 py-3 bg-gradient-to-r from-electric-blue to-cyan-glow rounded-lg font-semibold text-dark-bg hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.p variants={itemVariants} className="text-sm text-gray-500 pt-4">
            PDF file • Last updated: July 2026
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="glass px-4 py-2 rounded-full w-fit">
              <p className="text-sm font-medium text-electric-blue">Welcome to my portfolio</p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Sanchit Butola</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Data Analyst & Machine Learning Enthusiast
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-md">
            I build data-driven solutions, machine learning models, and intelligent applications that turn complex data into meaningful insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3 bg-gradient-to-r from-electric-blue to-cyan-glow rounded-lg font-semibold text-dark-bg hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View My Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-electric-blue/50 rounded-lg font-semibold text-electric-blue hover:bg-electric-blue/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              Download Resume
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6 pt-4">
            <a
              href="https://github.com/sanchitbutola"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg text-electric-blue hover:bg-electric-blue/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sanchitbutola"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg text-electric-blue hover:bg-electric-blue/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sanchitbutola@example.com"
              className="p-3 glass rounded-lg text-electric-blue hover:bg-electric-blue/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex items-center justify-center relative h-full min-h-96"
        >
          <div className="relative w-80 h-80">
            {/* Outer glow circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-purple-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Inner animated elements */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
            >
              {/* Central glowing node */}
              <circle cx="200" cy="200" r="40" fill="#00d4ff" opacity="0.8" className="animate-pulse" />
              <circle cx="200" cy="200" r="50" fill="#00d4ff" opacity="0.3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />

              {/* Outer nodes */}
              {[0, 120, 240].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 200 + 120 * Math.cos(rad);
                const y = 200 + 120 * Math.sin(rad);
                return (
                  <g key={angle}>
                    {/* Connecting lines */}
                    <line x1="200" y1="200" x2={x} y2={y} stroke="#00d4ff" strokeWidth="2" opacity="0.4" />
                    {/* Nodes */}
                    <circle cx={x} cy={y} r="20" fill="#a855f7" opacity="0.6" />
                    <circle cx={x} cy={y} r="26" fill="#a855f7" opacity="0.2" className="animate-pulse" />
                  </g>
                );
              })}

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const x = 200 + 150 * Math.cos(angle);
                const y = 200 + 150 * Math.sin(angle);
                return (
                  <circle key={i} cx={x} cy={y} r="4" fill="#06b6d4" opacity="0.5" className="animate-float" style={{ animationDelay: `${i * 0.3}s` }} />
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
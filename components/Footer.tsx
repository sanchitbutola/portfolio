'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-700/50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Sanchit Butola</h3>
            <p className="text-gray-400 text-sm">Data Analyst | Machine Learning Enthusiast</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-electric-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-electric-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-electric-blue transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-electric-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/sanchitbutola"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-electric-blue/20 text-gray-400 hover:text-electric-blue transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/sanchitbutola"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-electric-blue/20 text-gray-400 hover:text-electric-blue transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:sanchitbutola@example.com"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-electric-blue/20 text-gray-400 hover:text-electric-blue transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {currentYear} Sanchit Butola. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-electric-blue" /> using Next.js
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sanchitbutola@example.com',
      href: 'mailto:sanchitbutola@example.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/sanchitbutola',
      href: 'https://github.com/sanchitbutola',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanchitbutola',
      href: 'https://linkedin.com/in/sanchitbutola',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto w-full"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something <span className="gradient-text">Intelligent</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project, opportunity, or idea? I'd love to connect and discuss how we can collaborate.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group glass p-6 rounded-xl border border-gray-700/50 hover:border-electric-blue/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} opacity-20 group-hover:opacity-30 transition-all mb-4 w-fit`}>
                  <Icon className="w-6 h-6 text-electric-blue" />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-white mb-2">{link.label}</h3>

                {/* Value */}
                <p className="text-gray-400 text-sm break-all group-hover:text-electric-blue transition-colors">
                  {link.value}
                </p>

                {/* Arrow */}
                <div className="mt-4 text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-gray-400 mb-6">
            You can reach me directly at <a href="mailto:sanchitbutola@example.com" className="text-electric-blue hover:underline font-semibold">sanchitbutola@example.com</a>
          </p>
          <a
            href="mailto:sanchitbutola@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-electric-blue to-cyan-glow rounded-lg font-semibold text-dark-bg hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300 transform hover:scale-105"
          >
            Send me an Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
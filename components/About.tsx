'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
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

  const skills = [
    'Python',
    'SQL',
    'Machine Learning',
    'Data Analysis',
    'Power BI',
    'Tableau',
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-purple-accent rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 items-center">
          {/* Text */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-white">Sanchit Butola</span>, a Computer Science graduate passionate about <span className="text-electric-blue font-semibold">Data Analytics, Machine Learning, and AI</span>. I enjoy transforming raw data into meaningful insights and building practical intelligent solutions to real-world problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              With a strong foundation in computer science and hands-on experience in data science projects, I'm dedicated to continuous learning and applying cutting-edge techniques to solve complex challenges.
            </p>
            <div className="pt-4">
              <p className="text-gray-300 font-semibold mb-4">I work with:</p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 glass rounded-lg text-sm font-medium text-electric-blue hover:bg-electric-blue/20 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl border border-purple-accent/30 hover:border-electric-blue/50 transition-all duration-300"
          >
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold gradient-text">Data → Insights → Intelligence</div>
              <p className="text-sm text-gray-400">My philosophy for transforming information into actionable value</p>
              <div className="h-0.5 w-12 mx-auto bg-gradient-to-r from-electric-blue to-purple-accent"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
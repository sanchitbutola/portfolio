'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projectsData = [
    {
      id: 1,
      title: 'Email Spam Classifier',
      description: 'An intelligent machine learning application that classifies emails as spam or legitimate using NLP and ensemble machine learning techniques.',
      technologies: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF', 'Voting Classifier', 'Streamlit'],
      features: ['NLP preprocessing', 'TF-IDF vectorization', 'ML classification', 'Ensemble learning', 'Streamlit deployment'],
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Zomato Bangalore Restaurant Analysis',
      description: 'An exploratory data analysis project analyzing Bangalore restaurant data to uncover insights into ratings, pricing, restaurant types, and customer preferences.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
      features: ['Data cleaning', 'Statistical analysis', 'Visualization', 'Pattern discovery', 'Insights generation'],
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Superstore Sales Analytics Dashboard',
      description: 'An interactive business intelligence dashboard analyzing sales, profit, discount, customer segments, and regional performance.',
      technologies: ['Power BI', 'SQL', 'Data Analysis', 'Data Visualization'],
      features: ['Sales analysis', 'Profit tracking', 'Customer segmentation', 'Regional insights', 'Interactive dashboards'],
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'RegEx to NFA/DFA Visualizer',
      description: 'A visualization tool that converts regular expressions into finite automata and visually represents the resulting NFA/DFA structure.',
      technologies: ['Python', 'Flask', 'Graphviz', 'Automata Theory'],
      features: ['RegEx parsing', 'Automata conversion', 'Visual representation', 'Interactive UI', 'Graph visualization'],
      github: '#',
      live: '#',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">A selection of my recent work in data analytics, machine learning, and AI.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-purple-accent rounded-full mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group glass border border-gray-700/50 rounded-xl overflow-hidden hover:border-electric-blue/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">Project {project.id}</div>
                    <p className="text-gray-400 text-sm">Data Science Solution</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-electric-blue/10 border border-electric-blue/30 text-electric-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-700/50 mt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg bg-electric-blue/10 border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/20 transition-all duration-300 text-sm font-medium group/btn"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-electric-blue/20 to-purple-accent/20 border border-electric-blue/30 text-electric-blue hover:from-electric-blue/30 hover:to-purple-accent/30 transition-all duration-300 text-sm font-medium group/btn"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillsData = [
    {
      category: 'Programming',
      icon: Code2,
      skills: ['Python', 'C++', 'C'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Data Science & ML',
      icon: Database,
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'ML', 'EDA', 'Regression', 'Classification'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Databases',
      icon: Database,
      skills: ['SQL', 'MySQL', 'Oracle', 'SQLite'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      category: 'Data Visualization',
      icon: BarChart3,
      skills: ['Power BI', 'Tableau', 'Excel'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Streamlit', 'Git', 'GitHub', 'Jupyter', 'OpenCV', 'LangChain'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="min-h-screen flex items-center py-20 px-4 relative">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto w-full"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-purple-accent rounded-full mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glass p-6 rounded-xl border border-gray-700/50 hover:border-electric-blue/50 transition-all duration-300 cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} opacity-20 group-hover:opacity-30 transition-all`}>
                    <Icon className={`w-6 h-6 text-electric-blue`} />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{skillGroup.category}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue group-hover:bg-electric-blue/20 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
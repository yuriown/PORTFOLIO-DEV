import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = ({ t }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent size={32} /> : <LucideIcons.Code size={32} />;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal-title">
              <span className="gradient-text">{t.skills.title}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.skills.description}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {portfolioData.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative"
              >
                <div className="glass rounded-xl p-6 text-center hover:bg-sky-500/10 transition-all card-hover">
                  {/* Icon */}
                  <motion.div
                    animate={hoveredSkill === skill.name ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
                    className={`flex justify-center mb-4 text-sky-400 group-hover:text-sky-300 transition-colors`}
                  >
                    {getIcon(skill.icon)}
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-sky-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Level Bar */}
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>

                  {/* Level Text */}
                  <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Categories Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {t.skills.categories.map((category) => (
              <div key={category.title} className="glass rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">{category.title}</div>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

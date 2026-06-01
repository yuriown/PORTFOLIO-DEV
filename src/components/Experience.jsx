import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = ({ t }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal-title">
              <span className="gradient-text">{t.experience.title}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-blue-500 to-transparent md:w-1 md:transform md:-translate-x-1/2" />

            {/* Experience Items */}
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`mb-12 md:mb-8 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}
              >
                {/* Timeline Dot */}
                <div className="flex items-start md:relative">
                  <motion.div
                    className="absolute left-0 w-16 h-16 bg-gradient-to-br from-sky-500/30 to-blue-600/30 rounded-full blur-lg md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:top-0"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.9, 0.55, 0.9] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-dark-950 border-2 border-sky-500 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:top-0 md:absolute">
                    <Briefcase size={24} className="text-sky-400" />
                  </div>

                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-1/2 glass rounded-lg p-6 hover:bg-sky-500/5 transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-sky-400">{exp.position}</h3>
                        <p className="text-gray-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-dark-800/50 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">
                      {t.experience.items?.[exp.id]?.description ?? exp.description}
                    </p>

                    {/* Skills used */}
                    <div className="flex flex-wrap gap-2">
                      {(t.experience.items?.[exp.id]?.skills ?? exp.skills).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-sky-500/20 text-sky-300 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = ({ t }) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

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
              <span className="gradient-text">{t.education.title}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.education.description}
            </p>
          </motion.div>

          {/* Education Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioData.education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass rounded-xl p-6 hover:bg-sky-500/5 transition-all card-hover group"
              >
                {/* Icon */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-sky-500/30 to-blue-600/30 text-sky-400 group-hover:scale-110 transition-transform">
                    {edu.institution.includes('Faculdade') || edu.institution.includes('Universidade') ? (
                      <BookOpen size={24} />
                    ) : (
                      <Award size={24} />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-sky-400 bg-sky-500/20 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-sky-400 transition-colors">
                  {edu.course}
                </h3>
                <p className="text-gray-400 font-semibold text-sm mb-3">
                  {edu.institution}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.education.items?.[edu.id]?.description ?? edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

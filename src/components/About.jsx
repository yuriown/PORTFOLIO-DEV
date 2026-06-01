import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = ({ t }) => {
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal-title">
              <span className="gradient-text">{t.about.title}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-blue-600/30 rounded-2xl blur-2xl" />
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="relative w-full h-full object-cover rounded-2xl border border-sky-500/20"
                />
              </div>
            </motion.div>

            {/* Description and Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.about.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {portfolioData.about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="glass rounded-lg p-4 text-center hover:bg-sky-500/10 transition-all"
                  >
                    <div className="text-3xl font-bold text-sky-400 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{t.about.stats?.[index] ?? stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="space-y-3 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full mt-1" />
                  <div>
                    <h4 className="text-sky-400 font-semibold mb-1">{t.about.specialtyTitle}</h4>
                    <p className="text-gray-400">
                      {t.about.specialtyText}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full mt-1" />
                  <div>
                    <h4 className="text-sky-400 font-semibold mb-1">{t.about.approachTitle}</h4>
                    <p className="text-gray-400">
                      {t.about.approachText}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

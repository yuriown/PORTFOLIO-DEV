import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, MessageSquare, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ t }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = t.hero.subtitle;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Fundo com gradientes */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-dark-950 to-blue-600/5" />
      
      {/* Elementos de decoração */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-sky-500/10"
        animate={{ x: [0, 16, 0], y: [0, -16, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl bg-blue-600/10"
        animate={{ x: [0, -18, 0], y: [0, 18, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-44 h-44 rounded-full border border-sky-500/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <p className="text-sky-400 font-semibold mb-4">{t.hero.greeting}</p>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          whileHover={{ scale: 1.02, textShadow: '0 0 30px rgba(14, 165, 233, 0.8)' }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">{portfolioData.personal.name}</span>
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-4 h-10">
          <span>{displayedText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary ripple"
          >
            {t.hero.btnProjects}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary ripple"
          >
            {t.hero.btnContact}
          </button>
          {portfolioData.personal.cv && (
            <a
              href={portfolioData.personal.cv}
              download
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {t.hero.downloadCv}
            </a>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mb-12"
        >
          {portfolioData.social.github && (
            <motion.a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="p-3 rounded-full glass hover:bg-sky-500/20 transition-all"
            >
              <Github size={24} />
            </motion.a>
          )}
          {portfolioData.social.linkedin && (
            <motion.a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="p-3 rounded-full glass hover:bg-sky-500/20 transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
          )}
          {portfolioData.social.whatsapp && (
            <motion.a
              href={portfolioData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="p-3 rounded-full glass hover:bg-sky-500/20 transition-all"
            >
              <MessageSquare size={24} />
            </motion.a>
          )}
          {portfolioData.social.instagram && (
            <motion.a
              href={portfolioData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="p-3 rounded-full glass hover:bg-sky-500/20 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </motion.a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full glass hover:bg-sky-500/20 transition-all"
          >
            <ArrowDown size={24} className="text-sky-400" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

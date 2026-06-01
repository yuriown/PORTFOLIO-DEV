import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { translations } from './data/languageData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Particles from './components/Particles';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('pt');
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const setVar = () => {
      document.documentElement.style.setProperty('--scrollY', `${window.scrollY}`);
    };
    setVar();
    window.addEventListener('scroll', setVar, { passive: true });
    return () => window.removeEventListener('scroll', setVar);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
        when: 'beforeChildren',
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -120, rotate: -3 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        type: 'spring',
        stiffness: 80,
        damping: 16,
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 120, rotate: 3 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
        type: 'spring',
        stiffness: 80,
        damping: 16,
      },
    },
  };

  const topVariants = {
    hidden: { opacity: 0, y: -110, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="bg-dark-950 text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} language={language} onLanguageChange={setLanguage} t={t} />
      <Particles count={14} />
      <main>
        <motion.section
          id="home"
          variants={topVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden"
        >
          <Hero t={t} />
        </motion.section>

        <motion.section
          id="about"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden"
        >
          <About t={t} />
        </motion.section>

        <motion.section
          id="skills"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden"
        >
          <Skills t={t} />
        </motion.section>

        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden"
        >
          <Projects t={t} />
        </motion.section>

        <motion.section
          id="experience"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden"
        >
          <Experience t={t} />
        </motion.section>

        <motion.section
          id="education"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden"
        >
          <Education t={t} />
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden"
        >
          <Contact t={t} />
        </motion.section>
      </main>
      <Footer t={t} />
      <ScrollToTop />
    </div>
  );
}

export default App;

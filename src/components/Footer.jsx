import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-dark-900/50 border-t border-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                </div>
                <span className="font-bold text-xl gradient-text">Portfolio</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções web modernas e inovadoras.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Início', id: 'home' },
                  { label: 'Sobre', id: 'about' },
                  { label: 'Projetos', id: 'projects' },
                  { label: 'Contato', id: 'contact' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-sky-400 transition-colors text-sm link-hover"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-white mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                {portfolioData.social.github && (
                  <motion.a
                    href={portfolioData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-2 rounded-full glass hover:bg-sky-500/20 transition-all text-gray-400 hover:text-sky-400"
                  >
                    <Github size={20} />
                  </motion.a>
                )}
                {portfolioData.social.linkedin && (
                  <motion.a
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-2 rounded-full glass hover:bg-sky-500/20 transition-all text-gray-400 hover:text-sky-400"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                )}
                {portfolioData.social.email && (
                  <motion.a
                    href={`mailto:${portfolioData.social.email}`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-2 rounded-full glass hover:bg-sky-500/20 transition-all text-gray-400 hover:text-sky-400"
                  >
                    <Mail size={20} />
                  </motion.a>
                )}
                {portfolioData.social.instagram && (
                  <motion.a
                    href={portfolioData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-2 rounded-full glass hover:bg-sky-500/20 transition-all text-gray-400 hover:text-sky-400"
                  >
                    <Instagram size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"
          />

          {/* Bottom Footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          >
            <p>&copy; {currentYear} {portfolioData.personal.name}. Todos os direitos reservados.</p>
            <p className="text-xs text-gray-500 mt-4 md:mt-0">
              Desenvolvido com React, Tailwind CSS e Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageSquare, Instagram } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ t }) => {
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal-title">
              <span className="gradient-text">{t.contact.title}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* WhatsApp */}
              <motion.a
                href={portfolioData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-6 flex items-start gap-4 group hover:bg-sky-500/10 transition-all"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-sky-500/30 to-blue-600/30 text-sky-400 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t.contact.whatsappTitle}</h4>
                  <p className="text-gray-400 group-hover:text-sky-400 transition-colors">
                    +55 47 99180-7029
                  </p>
                </div>
              </motion.a>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-400">{t.contact.socialTitle}</p>
                <div className="grid grid-cols-2 gap-4">
                  {portfolioData.social.github && (
                    <motion.a
                      href={portfolioData.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="glass rounded-lg p-4 flex items-center justify-center gap-2 group hover:bg-sky-500/10 transition-all"
                    >
                      <Github size={20} className="text-sky-400" />
                      <span className="text-sm font-semibold group-hover:text-sky-400">{t.contact.githubLabel}</span>
                    </motion.a>
                  )}
                  {portfolioData.social.linkedin && (
                    <motion.a
                      href={portfolioData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="glass rounded-lg p-4 flex items-center justify-center gap-2 group hover:bg-sky-500/10 transition-all"
                    >
                      <Linkedin size={20} className="text-sky-400" />
                      <span className="text-sm font-semibold group-hover:text-sky-400">{t.contact.linkedinLabel}</span>
                    </motion.a>
                  )}
                  {portfolioData.social.instagram && (
                    <motion.a
                      href={portfolioData.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="glass rounded-lg p-4 flex items-center justify-center gap-2 group hover:bg-sky-500/10 transition-all"
                    >
                      <Instagram size={20} className="text-sky-400" />
                      <span className="text-sm font-semibold group-hover:text-sky-400">{t.contact.instagramLabel}</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Quick Info */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-lg p-6 space-y-3 border-l-4 border-sky-500"
              >
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-sky-400">{t.contact.responseTimeLabel}</span> {t.contact.responseTimeValue}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-sky-400">{t.contact.interestedLabel}</span> {t.contact.interestedValue}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

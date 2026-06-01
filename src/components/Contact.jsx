import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    // In a real application, you would send this data to a backend service
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

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

          {/* Contact Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-sky-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-sky-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.messagePlaceholder}
                    rows="5"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-sky-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-300"
                  >
                    {t.contact.successMessage}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-300"
                  >
                    {t.contact.errorMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSubmitting ? t.contact.sendingButton : t.contact.sendButton}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Email */}
              <motion.a
                href={`mailto:${portfolioData.social.email}`}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-6 flex items-start gap-4 group hover:bg-sky-500/10 transition-all"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-sky-500/30 to-blue-600/30 text-sky-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t.contact.emailTitle}</h4>
                  <p className="text-gray-400 group-hover:text-sky-400 transition-colors">
                    {portfolioData.social.email}
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

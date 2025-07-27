'use client';

import { motion } from 'framer-motion';
import PageTransition, { staggerContainer, fadeInUp, fadeIn } from '@/components/PageTransition';
import { bio } from '@/data/bio';
import { socialLinks } from '@/data/socials';

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            {/* Page Header */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                Let's Connect
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
                variants={fadeInUp}
              >
                I'm always down to talk startups, quant, or poker. Reach out!
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mb-12"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div 
                className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-8 mb-8"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center justify-center space-x-3"
                    variants={fadeInUp}
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href={`mailto:${bio.email}`}
                      className="text-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      {bio.email}
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex justify-center space-x-6 mb-8"
                variants={fadeInUp}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110"
                    aria-label={social.ariaLabel}
                  >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-8"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project, idea, or just say hello!"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 
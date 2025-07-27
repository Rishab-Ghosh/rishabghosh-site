'use client';

import { motion } from 'framer-motion';
import PageTransition, { staggerContainer, fadeInUp, fadeIn } from '@/components/PageTransition';
import { bio, features } from '@/data/bio';
import { socialLinks } from '@/data/socials';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="container mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={fadeInUp}
            >
              {bio.title.split('Rishab Ghosh')[0]} <span className="text-blue-600 dark:text-blue-400">{bio.name}</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium"
              variants={fadeInUp}
            >
              {bio.subtitle}
            </motion.h2>
            
            {/* Bio Paragraph */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {bio.description}
            </motion.p>
            
            {/* CTA Button */}
            <motion.div 
              className="mb-12"
              variants={fadeInUp}
            >
              <a
                href={bio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div 
              className="flex justify-center space-x-6"
              variants={fadeInUp}
            >
              {socialLinks.slice(0, 2).map((social) => (
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
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What I Do
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I specialize in quantitative analysis, venture capital, and building data-driven solutions
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                  variants={fadeInUp}
                >
                  <div className={`w-12 h-12 bg-${feature.color}-100 dark:bg-${feature.color}-900 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
} 
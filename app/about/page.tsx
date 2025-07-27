'use client';

import { motion } from 'framer-motion';
import PageTransition, { staggerContainer, fadeInUp, fadeIn } from '@/components/PageTransition';
import { bio, milestones, skills } from '@/data/bio';

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <motion.div 
              className="text-center mb-16"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
                variants={fadeInUp}
              >
                About Me
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                {bio.aboutDescription}
              </motion.p>
            </motion.div>

            {/* Timeline Section */}
            <motion.div 
              className="mb-16"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
                variants={fadeInUp}
              >
                Key Milestones
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    variants={fadeInUp}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                              {milestone.year.split('–')[0]}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
                variants={fadeInUp}
              >
                Skills & Expertise
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 bg-${skill.color}-100 dark:bg-${skill.color}-900 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <svg className={`w-6 h-6 text-${skill.color}-600 dark:text-${skill.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={skill.icon} />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {skill.category}
                      </h3>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {skill.items.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 
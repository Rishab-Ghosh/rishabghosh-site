'use client';

import { motion } from 'framer-motion';
import PageTransition, { staggerContainer, fadeInUp, fadeIn } from '@/components/PageTransition';
import ProjectCard from '@/components/ProjectCard';
import { projects, comingSoonProjects } from '@/data/projects';

export default function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
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
              Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Here are some of the projects I&apos;ve built, combining my passion for quantitative finance, 
              technology, and creating useful tools for others.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div 
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
              variants={fadeInUp}
            >
              Coming Soon
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              variants={fadeInUp}
            >
              I&apos;m currently working on several exciting projects. Stay tuned for updates!
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {comingSoonProjects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-2 border-dashed border-gray-300 dark:border-gray-600"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.emoji} {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 
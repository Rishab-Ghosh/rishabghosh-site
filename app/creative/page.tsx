'use client';

import { motion } from 'framer-motion';
import PageTransition, { staggerContainer, fadeInUp, fadeIn } from '@/components/PageTransition';
import { creativeLogs, videos, spotifyPlaylist } from '@/data/socials';

export default function Creative() {
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
                className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                variants={fadeInUp}
              >
                Creative Corner
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Videos, music, and creative projects I'm working on
              </motion.p>
            </motion.div>

            {/* YouTube Section */}
            <motion.section 
              className="mb-16"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
                variants={fadeInUp}
              >
                🎥 Recent Videos
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={staggerContainer}
              >
                {videos.map((video, index) => (
                  <motion.div 
                    key={index}
                    className="space-y-4"
                    variants={fadeInUp}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {video.title}
                    </h3>
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={video.embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {video.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Spotify Section */}
            <motion.section 
              className="mb-16"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
                variants={fadeInUp}
              >
                🎧 Currently Listening
              </motion.h2>
              <motion.div 
                className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6"
                variants={fadeInUp}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {spotifyPlaylist.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {spotifyPlaylist.description}
                  </p>
                </div>
                <div className="flex justify-center">
                  <iframe
                    className="rounded-lg"
                    style={{ width: '100%', maxWidth: '400px', height: '380px' }}
                    src={spotifyPlaylist.embedUrl}
                    title="Spotify Playlist"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
                  ></iframe>
                </div>
              </motion.div>
            </motion.section>

            {/* Creative Logs Section */}
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
                variants={fadeInUp}
              >
                📝 Creative Logs
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                {creativeLogs.map((log) => (
                  <motion.div 
                    key={log.id} 
                    className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
                    variants={fadeInUp}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {log.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
                        {new Date(log.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {log.note}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Call to Action */}
            <motion.div 
              className="mt-16 text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Want to collaborate?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  I'm always open to creative collaborations, podcast appearances, or just chatting about 
                  quant finance, startups, or poker strategy.
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 
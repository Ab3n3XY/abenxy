// components/Projects.js

"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-6">Projects</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* EthioTalentX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              EthioTalentX
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A Django-based web application, featuring user management, responsive interfaces,
              profile creation, skill showcasing, and real-time chat functionality using Django Channels.
              Authentication is handled through Django Allauth.
            </p>
          </motion.div>
          {/* Blango */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Blango</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A blog writing app with REST API and IBM Watson for sentiment analysis, offering post creation,
              editing, deletion, commenting, and social media integration.
            </p>
          </motion.div>
          {/* Back-End Development with Node.js and Express */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Back-End Development with Node.js and Express
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Built a RESTful API for data retrieval and manipulation.
            </p>
          </motion.div>
          {/* Full Stack Cloud Development Capstone Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Full Stack Cloud Development Capstone Project
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Designed and developed a full-stack cloud application using various technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

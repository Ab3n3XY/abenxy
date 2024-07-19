// components/Certificates.js

"use client";

import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <section id="certificates" className="py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-6">Certificates</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {/* Django for Everybody Specialization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Django for Everybody Specialization
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li>Web Application Technologies and Django</li>
              <li>Building Web Applications in Django</li>
              <li>Django Features and Libraries</li>
              <li>Using JavaScript, jQuery, and JSON in Django</li>
            </ul>
          </motion.div>
          {/* IBM Full Stack Software Developer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              IBM Full Stack Software Developer
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li>Introduction to Cloud Computing</li>
              <li>Introduction to Web Development with HTML, CSS, JavaScript</li>
              <li>Getting Started with Git and GitHub</li>
              <li>Developing Front-End Apps with React</li>
              <li>Developing Back-End Apps with Node.js and Express</li>
              <li>Python for Data Science, AI & Development</li>
              <li>Application Development with Python, Django, and Flask</li>
              <li>Databases and SQL for Developers</li>
            </ul>
          </motion.div>
          {/* Advanced Django: Mastering Django and Django Rest Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Advanced Django: Mastering Django and Django Rest Framework
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li>Mastering Django: Models, Forms, and Views</li>
              <li>Building and Deploying REST APIs with Django Rest Framework</li>
              <li>Authentication and Permissions</li>
              <li>Advanced Querying and Serialization</li>
              <li>Optimizing and Deploying REST APIs</li>
            </ul>
          </motion.div>
          {/* Machine Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Machine Learning
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li>Supervised Machine Learning: Regression and Classification</li>
              <li>Advanced Learning Algorithms: TensorFlow, decision tree (random forests and XGBoost)</li>
              <li>Unsupervised Learning: Recommenders, Reinforcement Learning</li>
            </ul>
          </motion.div>
          {/* AI Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              AI Development
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li>AI model development with Python and Flask</li>
              <li>External APIs</li>
              <li>Containerization (Docker), Kubernetes, OpenShift</li>
              <li>Cloud deployment and management</li>
              <li>Microservices architecture</li>
              <li>Serverless computing</li>
              <li>IBM Code Engine</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

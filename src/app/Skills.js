// components/Skills.js

"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPython } from "react-icons/fa";
import { SiDjango, SiTensorflow, SiFlask, SiDocker, SiKubernetes, SiOpenshift, SiIbmwatson } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-6">Skills</h2>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <FaHtml5 className="mr-2 text-orange-500" /> Front-End Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, Next.js
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <SiDjango className="mr-2 text-green-500" /> Back-End Development
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">Django</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <SiTensorflow className="mr-2 text-yellow-500" /> Machine Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Supervised Machine Learning: Regression and Classification
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Advanced Learning Algorithms: TensorFlow, decision tree (random forests and XGBoost)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Unsupervised Learning: Recommenders, Reinforcement Learning
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <SiDocker className="mr-2 text-blue-600" /> Other Skills
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">External APIs, Task queuing</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Containerization (Docker), Kubernetes, OpenShift
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Cloud deployment and management, Microservices architecture, Serverless computing
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">IBM Code Engine</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

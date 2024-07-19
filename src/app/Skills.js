"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPython,FaTree, FaRandom,FaRocket, FaStar, FaRobot } from "react-icons/fa";
import { SiDjango, SiTensorflow, SiDocker, SiKubernetes, SiIbmwatson, SiExpress, SiTailwindcss,SiNodedotjs, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-6">Skills</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Expertise in Front-End Development, Back-End Development, Machine Learning, and more.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          
          {/* Front-End Development */}
          <div className="mb-12">
            <h3 className="text-3xl text-center font-semibold text-teal-500  mb-6">
              Front-End Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <FaHtml5 className="text-orange-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">HTML5</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <FaCss3Alt className="text-blue-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">CSS3</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <FaJsSquare className="text-yellow-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">JavaScript</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <FaReact className="text-cyan-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">React</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <FaBootstrap className="text-indigo-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Bootstrap</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <FaPython className="text-blue-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Python</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
              <SiNextdotjs className="text-white bg-gray-800 rounded-full text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Next</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiTailwindcss className="text-teal-600 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Tailwind CSS</span>
              </button>
            </div>
          </div>

          {/* Back-End Development */}
          <div className="mb-12">
            <h3 className="text-3xl text-center font-semibold text-teal-500  mb-6">
              Back-End Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiDjango className="text-green-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Django</span>
              </button>
              {/* Add Node.js and Express if needed */}
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiExpress className="text-gray-800 dark:text-gray-900 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Express</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiNodedotjs className="text-gray-800 dark:text-green-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Node</span>
              </button>
            </div>
          </div>

          {/* Machine Learning Skills Section (outside Header.js) */}
          <div className="container mx-auto mt-12">
            <h3 className="text-3xl text-center font-semibold text-teal-500 mb-6">
              Machine Learning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiTensorflow className="fab fa-tensorflow text-yellow-500 text-4xl mr-4"/>
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">TensorFlow</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
              <FaTree className="text-green-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Decision Trees</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
              <FaRandom className="text-orange-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Random Forests</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
              <FaRocket className="text-red-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">XGBoost</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
              <FaStar className="text-purple-500 text-4xl mr-2" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Recommendation Systems</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
              <FaRobot className="text-blue-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Reinforcement Learning</span>
              </button>
            </div>
          </div>
          {/* Other Skills */}
          <div className="container mx-auto mt-12">
            <h3 className="text-3xl text-center font-semibold text-teal-500 mb-6">
              Other Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiDocker className="text-blue-600 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Docker</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiKubernetes className="text-blue-500 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">Kubernetes</span>
              </button>
              <button className="flex items-center justify-start p-6 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition duration-300 transform hover:scale-105">
                <SiIbmwatson className="text-blue-400 text-4xl mr-4" />
                <span className="text-gray-800 dark:text-gray-200 text-lg font-medium">IBM Watson</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

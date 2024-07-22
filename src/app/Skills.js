"use client";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPython, FaTree, FaRandom, FaRocket, FaStar, FaRobot } from "react-icons/fa";
import { SiDjango, SiTensorflow, SiDocker, SiKubernetes, SiIbmwatson, SiExpress, SiTailwindcss, SiNodedotjs, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 light:text-teal-600 mb-4 sm:mb-6">Skills</h2>
        <p className="text-base sm:text-lg text-gray-300 light:text-gray-700">
          Expertise in Front-End Development, Back-End Development, Machine Learning, and more.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 light:bg-gray-300 p-4 sm:p-8 rounded-lg shadow-lg">
          
          {/* Front-End Development */}
          <div className="mb-6 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl text-center font-semibold text-teal-500 mb-4 sm:mb-6">
              Front-End Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaHtml5 className="text-orange-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">HTML5</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaCss3Alt className="text-blue-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">CSS3</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaJsSquare className="text-yellow-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">JavaScript</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaReact className="text-cyan-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">React</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaBootstrap className="text-indigo-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Bootstrap</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaPython className="text-blue-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Python</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiNextdotjs className="text-white bg-gray-800 rounded-full text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Next</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiTailwindcss className="text-teal-600 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Tailwind CSS</span>
              </button>
            </div>
          </div>

          {/* Back-End Development */}
          <div className="mb-6 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl text-center font-semibold text-teal-500 mb-4 sm:mb-6">
              Back-End Development
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiDjango className="text-green-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Django</span>
              </button>
              {/* Add Node.js and Express if needed */}
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiExpress className="text-gray-900 light:text-gray-800 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Express</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiNodedotjs className="text-green-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Node</span>
              </button>
            </div>
          </div>

          {/* Machine Learning Skills Section (outside Header.js) */}
          <div className="container mx-auto mt-6 sm:mt-12">
            <h3 className="text-2xl sm:text-3xl text-center font-semibold text-teal-500 mb-4 sm:mb-6">
              Machine Learning
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiTensorflow className="fab fa-tensorflow text-yellow-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">TensorFlow</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaTree className="fas fa-tree text-green-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Random Forest</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaRandom className="fas fa-random text-teal-400 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">XGBoost</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaRocket className="fas fa-rocket text-red-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Regression</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaStar className="fas fa-star text-yellow-300 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Classification</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <FaRobot className="fas fa-robot text-teal-300 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Reinforcement Learning</span>
              </button>
            </div>
          </div>

          <div className="container mx-auto mt-6 sm:mt-12">
            <h3 className="text-2xl sm:text-3xl text-center font-semibold text-teal-500 mb-4 sm:mb-6">
              Other Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiDocker className="fab fa-docker text-blue-500 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Docker</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiKubernetes className="fab fa-kubernetes text-blue-600 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">Kubernetes</span>
              </button>
              <button className="flex items-center justify-start p-4 sm:p-6 bg-gray-700 light:bg-gray-200 hover:bg-gray-600 light:hover:bg-gray-100 rounded-lg transition duration-300 transform hover:scale-105">
                <SiIbmwatson className="fab fa-ibm text-blue-400 text-2xl sm:text-3xl mr-3 sm:mr-4" />
                <span className="text-gray-200 light:text-gray-800 text-base sm:text-lg font-medium">IBM Watson</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

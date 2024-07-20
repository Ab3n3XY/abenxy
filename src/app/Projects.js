"use client";

import { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: "EthioTalentX",
      description: "A Django-based web application, featuring user management, responsive interfaces, profile creation, skill showcasing, and real-time chat functionality using Django Channels. Authentication is handled through Django Allauth.",
      images: [
        "/Projects/ethiotalentx-1.png",
        "/Projects/ethiotalentx-2.png",
        "/Projects/ethiotalentx-3.png"
      ],
      skills: ["Django", "Django Channels", "Django Allauth", "HTML", "CSS", "JavaScript", "Bootstrap"],
      video: "https://youtu.be/Tdy5MwA0PQY"
    },
    {
      id: 2,
      title: "Blango",
      description: "A blog writing app with REST API and IBM Watson for sentiment analysis, offering post creation, editing, deletion, commenting, and social media integration.",
      images: [
        "/Projects/blango-1.png",
        "/Projects/blango-2.png",
        "/Projects/blango-3.png"
      ],
      skills: ["Django", "REST API", "IBM Watson", "HTML", "CSS", "JavaScript", "DRF", "Bootstrap"],
      video: "https://youtu.be/92fWLih0-Ws"
    },
    {
      id: 3,
      title: "Delight Adult Family Home",
      description: "A website built using Next.js and deployed on Netlify.",
      images: [
        "/Projects/delight-1.png",
        "/Projects/delight-2.png",
        "/Projects/delight-3.png",
        "/Projects/delight-4.png"
      ],
      skills: ["Next.js", "Netlify", "Tailwind CSS", "React", "CSS"],
      video: "https://youtu.be/UkUC1GH1Dpo"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(projectData.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev.map((imgIndex, idx) =>
          (imgIndex + 1) % projectData[idx].images.length
        )
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [projectData]);

  const handlePrevImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, idx) =>
        idx === index ? (imgIndex - 1 + projectData[index].images.length) % projectData[index].images.length : imgIndex
      )
    );
  };

  const handleNextImage = (index) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, idx) =>
        idx === index ? (imgIndex + 1) % projectData[index].images.length : imgIndex
      )
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-6">
          Projects
        </h2>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        {projectData.map((project, index) => (
          <div key={project.id} className="bg-white dark:bg-gray-800  p-4 md:p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl md:text-2xl text-center md:hover:text-teal-400 font-semibold text-teal-800 dark:text-teal-600 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700 text-center dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="relative mb-4">
              <button
                onClick={() => handlePrevImage(index)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full"
              >
                &lt;
              </button>
              <img
                src={project.images[currentImageIndex[index]]}
                alt={`${project.title} screenshot`}
                className="w-full h-auto rounded-lg transition-opacity duration-500"
              />
              <button
                onClick={() => handleNextImage(index)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
            <div className="flex flex-wrap justify-center mb-4">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-teal-700 text-white text-sm px-2 py-1 m-1 rounded-full hover:bg-teal-600"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-center">
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 text-red-600 text-base md:text-lg rounded-md hover:text-red-500"
              >
                <FaYoutube className="mr-2 text-xl text-red-600" /> Watch the Full Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

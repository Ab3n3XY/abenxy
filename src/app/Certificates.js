"use client";

export default function Certificates() {
  const certificateData = [
    {
      id: 1,
      title: "Django for Everybody Specialization",
      image: "/images/django-specialization.png",
      details: [
        "Web Application Technologies and Django",
        "Building Web Applications in Django",
        "Django Features and Libraries",
        "Using JavaScript, jQuery, and JSON in Django",
      ],
      link: "https://coursera.org/share/d17d04d38ef0df257bcb65ea3b29a541"
    },
    {
      id: 2,
      title: "IBM Full Stack Software Developer",
      image: "/images/ibm-fullstack.png",
      details: [
        "Introduction to Cloud Computing",
        "Introduction to HTML, CSS, JavaScript",
        "Getting Started with Git and GitHub",
        "Developing Front-End Apps with React",
        "Back-End Apps with Node.js and Express",
        "Python for Data Science, AI & Development",
        "Developing AI App with Python and Flask",
        "Django with SQL and Databases",
        "Containers w/Docker, Kubernetes & OpenShift",
        "Development using Microservices and Serverless",
        "Full Stack Capstone Project",
        "Full Stack Software Developer Assessment",
      ],
      link: "https://coursera.org/share/40c65b4af8526bc25cadc22b2b55baa6"
    },
    {
      id: 3,
      title: "Advanced Django: Mastering Django and Django Rest Framework",
      image: "/images/advanced-django.png",
      details: [
        "Building a Blog",
        "Introduction to Django Rest Framework",
        "Advanced Django Rest Framework",
        "External APIs and Task Queuing",
      ],
      link: "https://coursera.org/share/e7d727eb842087ca2296810fd3c416bc"
    },
    {
      id: 4,
      title: "Machine Learning",
      image: "/images/machine-learning.png",
      details: [
        "Supervised Machine Learning: Regression and Classification",
        "Advanced Learning Algorithms: TensorFlow, decision tree (random forests and XGBoost)",
        "Unsupervised Learning: Recommenders, Reinforcement Learning",
      ],
      link: "https://coursera.org/share/e606e09ac9cb2b46562515efb734e59c"
    },
  ];

  return (
    <section id="certificates" className="py-20 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-6">
          Certificates
        </h2>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        {certificateData.map((cert) => (
          <div key={cert.id} className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl md:text-2xl text-center font-semibold text-teal-500 mb-4">
              {cert.title}
            </h3>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full md:w-2/5 mb-4 md:mb-0 md:pr-6">
                {cert.details.map((detail, index) => (
                  <button
                    key={index}
                    className="block w-full h-auto text-left mb-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  >
                    {detail}
                  </button>
                ))}
              </div>
              <div className="w-full md:w-3/5 flex justify-center md:justify-end mt-4">
                <img src={cert.image} alt={cert.title} className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 p-2 text-white text-base md:text-lg rounded-md hover:bg-teal-600 transition duration-300 transform hover:scale-105"
              >
                View Certificate Online
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

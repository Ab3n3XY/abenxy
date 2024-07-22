"use client";
import Image from "next/image";
import Header from "./Header";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Footer from "./Footer";
import { Helmet } from 'react-helmet';

const pageData = {
  title: 'AbenXY',
  description: 'Portfolio of Aben, Full Stack Developer and Machine Learning Enthusiast',
};

export default function HomePage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
      </Helmet>
      <Header />
      <main className="flex-grow bg-gray-900 light:bg-gray-400 pt-12 px-4 md:px-12 lg:px-20 font-sans">
        <div className="text-center p-4 md:p-8" id="home">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-teal-400 light:text-teal-600 font-medium mt-8 md:mt-12">
            Abenezer Shiferaw
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-3xl py-2 text-white light:text-gray-700">
            Full Stack Developer
          </h3>
          <div className="mx-auto rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative overflow-hidden mt-6 md:mt-10">
            <Image
              src="/profile.png"
              fill
              sizes="(max-width: 640px) 100vw, 50vw" // Adjust sizes as needed
              style={{ objectFit: 'cover' }}
              alt="Profile image"
              priority={true}
            />
          </div>
          <p className="font-normal text-md md:text-xl lg:text-xl text-gray-300 light:text-gray-700 mt-4 md:mt-6 md:mx-8 lg:mx-10">
            Experienced in building web applications with modern technologies.
            I can help you bring your web app ideas to life!
          </p>
        </div>
        <Skills />
        <Certificates />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

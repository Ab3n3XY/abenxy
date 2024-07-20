"use client";
import Image from "next/image";
import Head from "next/head";
import Header from "./Header";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Head>
        <title>AbenXY</title>
        <meta name="description" content="Portfolio of Aben, Full Stack Developer and Machine Learning Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="flex-grow bg-white pt-12 px-4 dark:bg-gray-900 md:px-12 lg:px-20 font-sans">
        <div className="text-center p-4 md:p-8" id="home">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-teal-600 font-medium dark:text-teal-400 mt-8 md:mt-12">
            Abenezer Shiferaw
          </h2>
          <h3 className="text-lg md:text-2xl lg:text-3xl py-2 dark:text-white">
            Full Stack Developer
          </h3>
          <div className="mx-auto rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative overflow-hidden mt-6 md:mt-10">
            <Image
              src="/profile.png"
              layout="fill"
              objectFit="cover"
              alt="Developer"
            />
          </div>
          <p className="text-md md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mt-4 md:mt-6 md:mx-8 lg:mx-16">
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

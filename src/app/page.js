// pages/HomePage.js

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
    <div className="font-sans">
      <Head>
        <title>AbenXY</title>
        <meta name="description" content="Portfolio of Aben, Full Stack Developer and Machine Learning Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="bg-white pt-2 px-10 dark:bg-gray-900 md:px-20 lg:px-40 font-sans">
        <div className="text-center p-8 py-2" id="home" >
            <h2 className="text-5xl mt-20 py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Abenezer Shiferaw
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer
            </h3>
            <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image
                src="/profile.png"
                layout="fill"
                objectFit="contain"
                alt="Developer"
              />
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 md:mx-20">
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

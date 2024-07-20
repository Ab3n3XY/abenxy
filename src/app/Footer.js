// components/Footer.js

"use client";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4 text-center">

      <div className="flex justify-center space-x-8">
        <Link
          href="https://www.linkedin.com/in/ab3nxy/"
          aria-label="linkedin"
          target="_blank"
          className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
        >
          <AiFillLinkedin size={36} />
        </Link>
        <Link
          href="https://github.com/ab3nxy"
          aria-label="github"
          target="_blank"
          className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
        >
          <AiFillGithub size={36} />
        </Link>
        <a
          href="mailto:dev.abenezer.work@gmail.com"
          className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
          aria-label="mailto"
        >
          <FaEnvelope size={36} />
        </a>

      </div>        
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            © 2024 AbenXY. All rights reserved.
        </p>
    </footer>
  );
}

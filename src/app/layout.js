// app/layout.js
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from '../components/ParticlesBackground';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}

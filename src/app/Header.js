// components/Header.js

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Contact from './Contact';

const Header = () => {
  const logoSrc = '/logo.png';

  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (showContact) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showContact]);

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '#skills', label: 'Skills' },
    { path: '#certificates', label: 'Certificates' },
    { path: '#projects', label: 'Projects' }
  ];

  return (
    <header className="fixed bg-primary text-white p-4 w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex pl-10 items-center cursor-pointer hover:opacity-80">
            <img src={logoSrc} alt="Logo" className="h-16 w-16 rounded-full" />
            <div className="text-start ml-4">
              <span className="font-bold text-2xl">AbenXY</span>
            </div>
          </div>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row md:space-x-3 text-md font-semibold">
            {navLinks.map(({ path, label }) => (
              <Link key={path} href={path}>
                <span
                  className={`nav-link hover:-translate-y-2 block md:inline-block px-4 py-2 md:px-4 md:py-2 hover:text-teal-600 ${activeLink === path ? 'active-nav-link' : ''} text-sm md:text-lg`}
                  onClick={() => handleSetActiveLink(path)}
                >
                  {label}
                </span>
              </Link>
            ))}
            <button
              onClick={() => { setShowContact(true); setMenuOpen(false); }}
              className="nav-link hover:-translate-y-2 text-white block md:inline-block px-4 py-2 text-sm md:text-lg hover:text-teal-600"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
      {showContact && <Contact closePopup={() => setShowContact(false)} />}
    </header>
  );
};

export default Header;

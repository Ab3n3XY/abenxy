"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Contact from './Contact';

const Header = () => {
  const logoSrc = '/logo.png';
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('#mobile-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '#skills', label: 'Skills' },
    { path: '#certificates', label: 'Certificates' },
    { path: '#projects', label: 'Projects' }
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-800 bg-opacity-70 text-white p-4 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer hover:opacity-80">
            <img src={logoSrc} alt="Logo" className="h-12 w-12 md:h-16 md:w-16 rounded-full" />
            <div className="text-start ml-2 md:ml-4">
              <span className="font-bold text-xl md:text-2xl">AbenXY</span>
            </div>
          </div>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map(({ path, label }) => (
            <Link key={path} href={path}>
              <span
                className={`nav-link block px-4 py-2 hover:text-teal-600 ${activeLink === path ? 'active-nav-link' : ''} text-sm md:text-base`}
                onClick={() => handleSetActiveLink(path)}
              >
                {label}
              </span>
            </Link>
          ))}
          <button
            onClick={() => { setShowContact(true); setMenuOpen(false); }}
            className="nav-link block px-4 py-2 text-sm md:text-base hover:text-teal-600"
          >
            Contact Us
          </button>
          <button onClick={toggleTheme} className="ml-4 text-white focus:outline-none">
            {darkMode ? <FaSun className="w-5 h-5 md:w-6 md:h-6" /> : <FaMoon className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 w-full bg-gray-800 bg-opacity-90 text-white">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map(({ path, label }) => (
              <Link key={path} href={path}>
                <span
                  className={`nav-link block px-4 py-2 hover:text-teal-600 ${activeLink === path ? 'active-nav-link' : ''} text-lg`}
                  onClick={() => handleSetActiveLink(path)}
                >
                  {label}
                </span>
              </Link>
            ))}
            <button
              onClick={() => { setShowContact(true); setMenuOpen(false); }}
              className="nav-link block px-4 py-2 text-lg hover:text-teal-600"
            >
              Contact Us
            </button>
            <button onClick={toggleTheme} className="text-white focus:outline-none">
              {darkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      )}
      {showContact && <Contact closePopup={() => setShowContact(false)} />}
    </header>
  );
};

export default Header;

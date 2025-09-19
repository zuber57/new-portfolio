import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="container w-full mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Zuber Ahmad</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-800 hover:text-blue-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-800 hover:text-blue-500">
              Working Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-800 hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </li>

          {/* Download CV button */}
          <li>
            <a
              href="https://drive.google.com/file/d/1klsuEDI0WBevhsu22BxrhZAYOJAS1I4I/view?usp=drive_link" // Replace with the correct path to your CV
              className="text-gray-800 hover:text-blue-500"
              target='_blank'
              download
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-blue-500"
          >
            <i className="fas fa-bars"></i> {/* Hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-white shadow-md`}
      >
        <ul className="space-y-4 p-4">
          <li>
            <a
              href="#about"
              className="text-gray-800 hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-800 hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-800 hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Working Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-800 hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </li>

          {/* Download CV button (mobile) */}
          <li>
            <a
              href="https://drive.google.com/file/d/1klsuEDI0WBevhsu22BxrhZAYOJAS1I4I/view?usp=drive_link" // Replace with the correct path to your CV
              className="bg-red text-gray-800 hover:text-blue-500"
              download
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

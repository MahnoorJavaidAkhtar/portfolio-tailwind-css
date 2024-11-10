"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0f0715] py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center max-w-6xl px-4">
        <div className="text-xl font-bold text-white">WELCOME TO THE MJ PORTFOLIO</div>
        
        {/* Toggle Button for Mobile and Medium View */}
        <div className="md:hidden">
          <button 
            className="text-white focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close Icon (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-gray-400">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/education" className="hover:text-gray-400">
              Education
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu for md and smaller screens */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link href="/education" className="hover:text-gray-400">
            Education
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
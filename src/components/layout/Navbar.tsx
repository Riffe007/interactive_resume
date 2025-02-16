// src/components/layout/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo + Site Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/A_high-tech_futuristic_logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Timothy Riffe
              </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <Link href="/about" className="ml-4 text-gray-700 dark:text-gray-300 hover:text-gray-900">
              About
            </Link>
            <Link href="/experience" className="ml-4 text-gray-700 dark:text-gray-300 hover:text-gray-900">
              Experience
            </Link>
            <Link href="/projects" className="ml-4 text-gray-700 dark:text-gray-300 hover:text-gray-900">
              Projects
            </Link>
            <Link href="/resume" className="ml-4 text-gray-700 dark:text-gray-300 hover:text-gray-900">
              Resume
            </Link>
            <Link href="/contact" className="ml-4 text-gray-700 dark:text-gray-300 hover:text-gray-900">
              Contact
            </Link>
          </div>
          {/* Mobile Hamburger Icon */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Side Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleMenu} />
          <div className="relative bg-white dark:bg-gray-800 w-64 h-full p-4 transform transition-transform duration-300">
            <button onClick={toggleMenu} className="mb-4 text-gray-700 dark:text-gray-300 focus:outline-none" aria-label="Close menu">
              <HiX size={24} />
            </button>
            <nav className="flex flex-col space-y-4">
              <Link href="/about" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
                About
              </Link>
              <Link href="/experience" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
                Experience
              </Link>
              <Link href="/projects" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
                Projects
              </Link>
              <Link href="/resume" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
                Resume
              </Link>
              <Link href="/contact" onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

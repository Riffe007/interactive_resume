// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="bg-lightBg dark:bg-darkBg shadow-md fixed w-full top-0 z-50 transition-colors">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <Image src="/images/logos/A_high-tech_futuristic_logo.png" alt="TR Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Timothy Riffe</span>
        </Link>

        {/* Desktop Navigation - Now aligned RIGHT */}
        <div className="hidden md:flex space-x-6 ml-auto">
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link href="/experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Experience</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</Link>
          <Link href="/resume" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Resume</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
        </div>

        {/* Dark Mode Toggle (Fixed) */}
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition ml-4"
        >
          {mounted && (resolvedTheme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />)}
        </button>
      </div>
    </nav>
  );
}
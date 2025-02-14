// src/components/layout/Sidebar.tsx
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icons for open/close

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-full z-50">
      {/* Sidebar Toggle Button */}
      <button 
        className="p-3 m-4 bg-gray-800 text-white rounded-md" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/experience" className="hover:text-primary">Experience</Link>
          <Link href="/projects" className="hover:text-primary">Projects</Link>
          <Link href="/resume" className="hover:text-primary">Resume</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
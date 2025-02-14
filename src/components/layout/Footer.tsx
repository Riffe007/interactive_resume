// src/components/layout/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 text-center w-full mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} Timothy Riffe. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com/Riffe007" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/timothy-riffe-570b2631" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="/contact" className="hover:text-white">
            Contact Me
          </a>
        </div>
      </footer>
    );
  }
  
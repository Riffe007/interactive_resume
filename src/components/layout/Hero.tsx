// src/components/layout/Hero.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6">
      {/* Profile Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Timothy Riffe"
          width={200}
          height={200}
          className="rounded-full shadow-lg mx-auto md:mr-8"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Timothy Riffe
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">
          AI/ML Strategist | Advisory Consultant | Legal & Data Analytics
        </p>

        {/* Call to Action */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Link href="/resume">
            <span className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
              Download Resume
            </span>
          </Link>
          <Link href="/projects">
            <span className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
              View Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

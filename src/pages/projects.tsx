// src/pages/projects.tsx
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Projects() {
  return (
    <div className="bg-lightBg dark:bg-darkBg min-h-screen flex flex-col justify-between transition-colors">
      <Head>
        <title>Projects | Coming Soon</title>
        <meta name="description" content="Timothy Riffe's projects will be showcased here soon." />
      </Head>

      <Navbar />
      <div className="flex flex-col justify-center items-center text-center flex-grow">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">🚀 Coming Soon!</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">This page is under construction. Stay tuned for updates!</p>
      </div>
      <Footer />
    </div>
  );
}

// src/pages/experience.tsx
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExperienceCard from '@/components/common/ExperienceCard';
import experienceData from '@/data/experienceData';

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience | Timothy Riffe</title>
        <meta name="description" content="Professional experience of Timothy Riffe" />
      </Head>
      <div className="min-h-screen bg-lightBg dark:bg-darkBg transition-colors">
        <Navbar />
        <main className="container mx-auto px-6 pt-32 pb-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Experience
          </h1>
          <div className="grid gap-6">
            {experienceData.map((job, index) => (
              <ExperienceCard key={index} job={job} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

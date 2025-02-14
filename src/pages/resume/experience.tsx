// src/pages/experience.tsx
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExperienceCard from '@/components/common/ExperienceCard';
import experienceData from '@/data/experienceData';

export default function Experience() {
  return (
    <div className="bg-lightBg dark:bg-darkBg min-h-screen flex flex-col justify-between transition-colors">
      <Head>
        <title>Experience | Timothy Riffe</title>
        <meta name="description" content="Professional experience of Timothy Riffe" />
      </Head>

      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-10">
          Experience
        </h1>
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

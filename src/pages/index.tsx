// src/pages/index.tsx
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import ProjectsSection from '@/components/home/ProjectSection';
import TimelineSection from '@/components/home/TimelineSection';
import SocialProof from '@/components/home/SocialProof';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Timothy Riffe | Interactive Resume</title>
        <meta name="description" content="AI, Finance, and Business Development Professional" />
      </Head>

      <div className="flex flex-col min-h-screen bg-lightBg dark:bg-darkBg transition-colors">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <div className="container mx-auto px-6 py-12 space-y-16">
            <ProjectsSection />
            <TimelineSection />
            <SocialProof />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

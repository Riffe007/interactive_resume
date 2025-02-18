// src/pages/index.tsx
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import ProjectsSection from '@/components/home/ProjectSection';
import TimelineSection from '@/components/home/TimelineSection';
import SocialProof from '@/components/home/SocialProof';
import Footer from '@/components/layout/Footer';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <>
        <Head>
          <title>Timothy Riffe | Interactive Resume</title>
          <meta
            name="description"
            content="AI, Finance, and Business Development Professional"
          />
        </Head>

        <div className="flex flex-col min-h-screen bg-lightBg dark:bg-darkBg transition-colors">
          <Navbar />
          <main className="flex-grow">
            <Hero />

            {/* Featured Projects Section with Full-Width Background Video */}
            <section className="relative w-full min-h-screen">
              <Parallax translateY={[-20, 20]}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src="/videos/stockmarket.mp4" type="video/mp4" />
                </video>
              </Parallax>
              <div className="relative z-10">
                <ProjectsSection />
              </div>
            </section>

            {/* Career Journey Section with Full-Width Background Video */}
            <section className="relative w-full min-h-screen">
              <Parallax translateY={[-20, 20]}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src="/videos/dubai.mp4" type="video/mp4" />
                </video>
              </Parallax>
              <div className="relative z-10">
                <TimelineSection />
              </div>
            </section>

            {/* Social Proof Section (Trusted by Industry Leaders) */}
            {/* Using the same format as about.tsx */}
            <section
              className="py-16 text-center bg-fixed bg-cover bg-center relative w-full industry-bg"
            >
              <div className="relative z-10">
                <SocialProof />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </>
    </ParallaxProvider>
  );
}

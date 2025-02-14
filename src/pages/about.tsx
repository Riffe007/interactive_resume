// src/pages/about.tsx
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function About() {
  return (
    <div className="bg-lightBg dark:bg-darkBg min-h-screen transition-colors">
      <Head>
        <title>About | Timothy Riffe</title>
        <meta name="description" content="Learn more about Timothy Riffe - AI, Finance, Law, and Strategy Consulting." />
      </Head>

      <Navbar />

      {/* Hero Section with Background & Carousel */}
      <section 
        className="relative flex flex-col items-center justify-center text-center h-screen bg-fixed bg-cover bg-center about-hero"
        style={{ backgroundImage: "url('/images/misc/city.jpg')" }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="bg-black bg-opacity-50 p-8 rounded-lg text-white"
        >
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-lg mt-4 max-w-3xl">
            AI, Finance, and Strategy professional with a passion for responsible tech, law, and innovation.
          </p>
        </motion.div>
      </section>

      {/* Image & Video Carousel */}
      <section className="py-12 text-center">
        <Swiper spaceBetween={20} slidesPerView={1} loop>
          {["/videos/ai_tiny.mp4", "/videos/financial_analyst.mp4", "/videos/rome.mp4"].map((video, index) => (
            <SwiperSlide key={index}>
              <video autoPlay loop muted className="w-full h-96 object-cover rounded-lg shadow-lg">
                <source src={video} type="video/mp4" />
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Objective Statement */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Objective</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
          My goal is to bridge AI, finance, and law to drive ethical, high-impact technological advancements.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Mission, Vision & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              To leverage AI and finance to empower businesses and individuals with responsible, scalable solutions.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              To create cutting-edge AI applications that are transparent, ethical, and beneficial to society.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Values</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Integrity, Innovation, Collaboration, and Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Hobbies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6">
          {["Golf", "Martial Arts", "Boxing", "Beach", "Family Time", "Traveling"].map((hobby, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <Image src={`/images/hobbies/${hobby.toLowerCase().replace(/ /g, '')}.jpg`} alt={hobby} width={120} height={120} className="rounded-full mx-auto" />
              <h3 className="text-lg font-semibold mt-4">{hobby}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Travel Map */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Places I've Traveled</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
          Some of my favorite places: Rome, Paris, Las Vegas, Central Coast of California, Houston, Chicago, Thailand.
        </p>
        <div className="mt-6 flex justify-center">
          <iframe
            title="Interactive Travel Map"
            src="https://www.google.com/maps/d/embed?mid=1czV5f2oBf9b9eXdrOe3HzdOGf-JTVeyv"
            width="800"
            height="500"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

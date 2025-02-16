import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import dynamic from 'next/dynamic';

// Dynamically import Parallax (client only)
const Parallax = dynamic(
  () => import('react-scroll-parallax').then((mod) => mod.Parallax),
  { ssr: false }
);

// Dynamically import NoSSRMap (client only) from visualizations folder
const NoSSRMap = dynamic(() => import('@/components/visualizations/NoSSRMap'), { ssr: false });

export default function About() {
  const hobbies = [
    { name: "Golf", type: "image", src: "/images/misc/Riverlakes.jpeg" },
    { name: "Martial Arts", type: "image", src: "/images/misc/mcmap.jpg" },
    { name: "Boxing", type: "image", src: "/images/misc/Ali1.jpg" },
    { name: "Beach", type: "image", src: "/images/misc/beach_day.jpeg" },
    { name: "Family Time", type: "carousel" },
    { name: "Traveling", type: "video", src: "/videos/rome.mp4" },
  ];

  // Placeholder array for Family Time photos.
  const familyPhotos = [
    '/images/hobbies/family1.jpg',
    '/images/hobbies/family2.jpg',
    '/images/hobbies/family3.jpg',
  ];

  const travelLocations: { name: string; coords: [number, number]; description: string }[] = [
    { name: "Rome", coords: [41.9028, 12.4964], description: "Ancient charm and vibrant culture." },
    { name: "Paris", coords: [48.8566, 2.3522], description: "Romantic vibes and art everywhere." },
    { name: "Las Vegas", coords: [36.1699, -115.1398], description: "Bright lights, big city energy." },
    { name: "Central Coast of California", coords: [35.2828, -120.6596], description: "Scenic views and a relaxed lifestyle." },
    { name: "Houston", coords: [29.7604, -95.3698], description: "Diverse culture with a side of southern charm." },
    { name: "Chicago", coords: [41.8781, -87.6298], description: "Architectural marvels and deep-dish pizza." },
    { name: "Thailand", coords: [13.7563, 100.5018], description: "Exotic landscapes with vibrant street food." },
  ];

  // TileLayer props for the map
  const tileLayerProps: any = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
  };

  return (
    <ParallaxProvider>
      <div className="bg-lightBg dark:bg-darkBg min-h-screen transition-colors">
        <Head>
          <title>About | Timothy Riffe</title>
          <meta
            name="description"
            content="Learn more about Timothy Riffe - AI, Finance, Law, and Strategy Consulting."
          />
        </Head>

        <Navbar />

        {/* Hero Section with Parallax & Background Image */}
        <Parallax translateY={[-30, 30]}>
          <section
            className="relative flex flex-col items-center justify-center text-center h-screen bg-fixed bg-cover bg-center"
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
        </Parallax>

        {/* Image & Video Carousel with Parallax */}
        <Parallax translateY={[-20, 20]}>
          <section
            className="py-12 text-center relative bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/images/misc/overlay.jpg')" }}
          >
            <Swiper spaceBetween={20} slidesPerView={1} loop>
              {["/videos/ai_tiny.mp4", "/videos/financial_analyst.mp4", "/videos/rome.mp4"].map((video, index) => (
                <SwiperSlide key={index}>
                  <video autoPlay loop muted className="w-full h-96 object-cover">
                    <source src={video} type="video/mp4" />
                  </video>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </Parallax>

        {/* Objective Statement with Parallax */}
        <Parallax translateY={[-10, 10]}>
          <section
            className="py-16 text-center bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/images/misc/objective_bg.jpg')" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Objective
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              My goal is to bridge AI, finance, and law to drive ethical, high-impact technological advancements.
            </p>
          </section>
        </Parallax>

        {/* Mission, Vision & Values with River Background */}
        <section
          className="py-16 text-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/misc/river.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 py-8">
            <h2 className="text-4xl font-bold text-white">Mission, Vision & Values</h2>
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
          </div>
        </section>

        {/* Hobbies Section with Full Window Media */}
        <section className="py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 w-full overflow-hidden"
              >
                {hobby.name === "Family Time" ? (
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    className="h-full w-full"
                  >
                    {familyPhotos.map((photo, idx) => (
                      <SwiperSlide key={idx}>
                        <Image
                          src={photo}
                          alt="Family Photo"
                          layout="fill"
                          objectFit="cover"
                          className="absolute inset-0"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : hobby.type === "video" ? (
                  <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                    <source src={hobby.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={hobby.src || ''}
                    alt={hobby.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                  <h3 className="text-white text-center text-xl font-semibold">
                    {hobby.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Travel Map using NoSSRMap */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Places I've Traveled
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            Some of my favorite places: Rome, Paris, Las Vegas, Central Coast of California, Houston, Chicago, Thailand.
          </p>
          <div className="mt-6 mx-auto" style={{ width: "90%", height: "500px" }}>
            <NoSSRMap travelLocations={travelLocations} tileLayerProps={tileLayerProps} />
          </div>
        </section>

        <Footer />
      </div>
    </ParallaxProvider>
  );
}

// src/components/home/TimelineSection.tsx
import { motion } from 'framer-motion';

const timeline = [
  { year: '2023', event: 'Joined WorldQuant as Quantitative Researcher' },
  { year: '2021', event: 'Founded Unified Software Solutions' },
  { year: '2017', event: 'Consulting with Riffe Enterprises' },
  { year: '2013', event: 'Worked at Morgan Stanley / Merrill Lynch / JP Morgan' },
  { year: '2003', event: 'Began service in the United States Marine Corps' }
];

export default function TimelineSection() {
  return (
    <section className="py-16 bg-gray-200 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Career Journey</h2>
      <div className="max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md mb-4"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.year}</h3>
            <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
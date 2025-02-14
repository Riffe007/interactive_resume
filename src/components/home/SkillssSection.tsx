// src/components/home/SkillsSection.tsx
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaCloud, FaChartLine, FaBrain, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTensorflow, SiDocker } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Cloud Computing', icon: <FaCloud className="text-gray-400" /> },
  { name: 'AI & ML', icon: <FaBrain className="text-purple-400" /> },
  { name: 'Data Analytics', icon: <FaChartLine className="text-green-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-blue-300" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
  // { name: 'AWS', icon: <SiAws className="text-yellow-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-500" /> }
];

export default function SkillsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

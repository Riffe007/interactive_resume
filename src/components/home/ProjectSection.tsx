// src/components/home/ProjectsSection.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  { title: 'AI Resume Generator', description: 'Generate custom resumes using AI & NLP.', link: '/projects/ai-resume' },
  { title: 'AI Chatbot', description: 'Interactive chatbot powered by fine-tuned LLM.', link: '/projects/chatbot' },
  { title: 'Stock Prediction Model', description: 'ML model for financial market predictions.', link: '/projects/stock-model' }
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
            <Link href={project.link} className="text-blue-500 dark:text-blue-400 mt-4 inline-block">View Project</Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
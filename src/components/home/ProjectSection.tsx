import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  { title: "Chat Bot", description: "A custom chatbot.", link: "/chat" },
  { title: "AI Assistant", description: "Interactive chatbot powered by fine-tuned LLM.", link: "/paula-assistant" },
  { 
    title: "SAC Learning Model", 
    description: "Watch AI learn to walk in MuJoCo.", 
    link: "https://github.com/Riffe007/SACFormer", 
    isVideo: true 
  }
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
            
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-4">
              {project.isVideo ? (
                <video className="w-full rounded-lg shadow-lg" autoPlay loop muted playsInline>
                  <source src="https://github.com/Riffe007/SACFormer/raw/main/videos/episode_27_-episode-0.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="text-blue-500 dark:text-blue-400 hover:underline">View Project</div>
              )}
            </Link>
          </motion.div>
        ))}
        
      </div>
    </section>
  );
}

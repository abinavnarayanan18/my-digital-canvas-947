import { motion } from "framer-motion";

const projects = [
  {
    title: "Satellite Image Enhancement using Deep Reinforcement Learning",
    description: "Developed a reinforcement learning framework to improve satellite image clarity, enhancing object detection accuracy by 25%.",
  },
  {
    title: "Visual Assistant for the Visually Impaired",
    description: "Built a wearable device with Raspberry Pi + Computer Vision for obstacle detection, improving navigation safety for visually impaired users.",
  },
  {
    title: "Drowsiness Detection System for Drivers",
    description: "Designed a computer vision pipeline to identify driver fatigue, reducing accident risk in simulated tests by 30%.",
  },
  {
    title: "Facial Emotion Recognition",
    description: "Created an AI-based system to detect facial emotions with 85% accuracy using CNNs and real-world datasets.",
  },
  {
    title: "Spoken Language Identification",
    description: "Developed a machine learning classifier to identify spoken language from audio samples, achieving 90% precision across 5 languages.",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

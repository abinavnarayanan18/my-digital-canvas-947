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

export const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background-muted">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
            Technical Projects
          </h2>
          <p className="text-lg font-sans text-primary-light max-w-2xl mx-auto leading-relaxed">
            Research and development initiatives showcasing AI, machine learning, and computer vision expertise
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="pb-8 border-b border-primary/10">
                <h3 className="text-2xl font-serif text-primary mb-4 hover:text-accent transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-lg font-sans text-primary-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Card } from "@/components/ui/card";

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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Research and development initiatives showcasing AI, machine learning, and computer vision expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="p-6 card-hover">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

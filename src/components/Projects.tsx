import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Satellite, ExternalLink, Award } from "lucide-react";

const projects = [
  {
    title: "Smart Visual Assistant for the Visually Impaired",
    description: "Built a computer vision-based navigation system to support accessibility using advanced machine learning algorithms and real-time image processing.",
    icon: Eye,
    technologies: ["Computer Vision", "Machine Learning", "Python", "OpenCV", "AI"],
    achievements: ["Presented at IETE CHENCON (2022)", "Accessibility-focused innovation"],
    year: "2022"
  },
  {
    title: "AI-Based Satellite Image Restoration",
    description: "Researched and implemented reinforcement learning approaches for satellite image restoration, improving image quality and data extraction capabilities.",
    icon: Satellite,
    technologies: ["Reinforcement Learning", "Deep Learning", "Image Processing", "Python", "AI"],
    achievements: ["Published in Fluctuations and Noise Letters (2023)", "Peer-reviewed research"],
    year: "2023"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding hero-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI and computer vision projects solving real-world problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 card-gradient shadow-medium transition-smooth hover:shadow-strong group">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.year}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      Key Achievements:
                    </h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
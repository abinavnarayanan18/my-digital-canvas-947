import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Code, Award } from "lucide-react";

const skillCategories = [
  {
    title: "Product Management & Strategy",
    icon: Target,
    skills: [
      "Road mapping",
      "Feature prioritization", 
      "User stories",
      "Competitive Analysis",
      "Go-to-Market",
      "Customer Segmentation",
      "Tech Market Economics"
    ],
    color: "text-primary"
  },
  {
    title: "Technical Skills",
    icon: Code,
    skills: [
      "AWS (Solutions Architect, DevOps Pro, Developer)",
      "Python",
      "SQL", 
      "Excel",
      "Power BI",
      "Computer Networking",
      "Deep Learning",
      "AI",
      "Financial Engineering"
    ],
    color: "text-accent"
  }
];

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified DevOps – Professional", 
  "AWS Certified Developer – Associate"
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Bridging technical expertise with strategic business acumen through continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 card-hover">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="justify-center py-2 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 card-hover">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">AWS Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
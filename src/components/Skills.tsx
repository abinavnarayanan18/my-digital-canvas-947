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
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging technical expertise with strategic business acumen
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 card-gradient shadow-medium transition-smooth hover:shadow-strong">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
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
        
        <Card className="p-8 card-gradient shadow-medium">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">AWS Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <div className="w-2 h-2 rounded-full bg-accent" />
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
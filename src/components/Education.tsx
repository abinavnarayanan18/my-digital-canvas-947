import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const education = [
  {
    institution: "Duke University – Pratt School of Engineering",
    degree: "Master of Engineering Management (MEM)",
    duration: "Aug 2025 – Dec 2026 (Expected)",
    location: "Durham, NC",
    status: "In Progress",
    coursework: [
      "Competitive Strategies",
      "Engineering Management Consulting Practicum", 
      "Finance in High Tech Industries",
      "Engineering Marketing"
    ]
  },
  {
    institution: "Anna University – SSN College of Engineering",
    degree: "Bachelor of Engineering in Electronics & Communication",
    duration: "Aug 2018 – May 2022",
    location: "Chennai, Tamil Nadu, India",
    status: "Completed",
    coursework: []
  }
];

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise at the intersection of engineering and management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 card-gradient shadow-medium transition-smooth hover:shadow-strong">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant={edu.status === "In Progress" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                {edu.coursework.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
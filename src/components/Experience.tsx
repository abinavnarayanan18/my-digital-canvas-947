import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const experiences = [
  {
    company: "EmeraldAI (Through Duke Coursework)",
    role: "Student Consultant",
    duration: "August 2025 – Present",
    location: "Durham, NC",
    type: "Consulting",
    highlights: [
      "Defining product requirements and conducting market analysis for data center segmentation",
      "Developing data-driven financial modeling framework for AI-powered demand reduction",
      "Informing partner and customer strategy through quantitative analysis"
    ]
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Lead DevOps Engineer",
    duration: "July 2022 – July 2025",
    location: "Chennai, India",
    type: "Full-time",
    highlights: [
      "Spearheaded large-scale cloud transformation program, accelerating delivery timelines by 40%",
      "Led cross-functional teams to migrate legacy mainframe applications to AWS",
      "Collaborated directly with Qantas Airlines' stakeholders to align technical deliverables",
      "Developed automation tools that reduced turnaround times by 25%",
      "Executed 50+ production releases in high-stakes, penalty-driven environments",
      "Led a team of 3-4 engineers across multiple release cycles"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding hero-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building bridges between technology and business outcomes
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 card-gradient shadow-medium transition-smooth hover:shadow-strong">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <h4 className="text-lg font-medium text-primary">{exp.role}</h4>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
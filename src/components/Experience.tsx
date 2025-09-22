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
    role: "DevOps Engineer",
    duration: "July 2022 – Present",
    location: "Chennai, India",
    type: "Full-time",
    highlights: [
      "Led a DevOps/Cloud Platform team providing infrastructure support for migrated applications in AWS",
      "Migrated legacy mainframe applications from on-premises to AWS Cloud, overseeing code refactoring and infrastructure customization",
      "Developed PowerShell scripts for automating administrative tasks on Windows servers",
      "Implemented CI/CD pipelines with GitHub Actions, automating infrastructure provisioning using AWS CloudFormation",
      "Configured monitoring systems using Splunk and Datadog for proactive issue resolution",
      "Designed AWS Lambda functions for cost-effective solutions",
      "Managed production releases as a Release Manager, collaborating with stakeholders",
      "Conducted security assessments and ensured compliance across deployments",
      "Developed C# code to enhance .NET applications integrated with on-premises systems",
      "Worked on IBM MQ applications, handling message sending, receiving, and consumption"
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

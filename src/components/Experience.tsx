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
    <section id="experience" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Building bridges between technology and business outcomes through hands-on leadership
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 card-hover">
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        <h4 className="text-lg font-medium text-primary">{exp.role}</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary">{exp.type}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed text-sm">{highlight}</p>
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

import { CalendarDays, MapPin } from "lucide-react";

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
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
            Work Experience
          </h2>
          <p className="text-lg font-sans text-primary-light max-w-2xl mx-auto leading-relaxed">
            Building bridges between technology and business outcomes through hands-on leadership
          </p>
        </div>
        
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="pb-8 border-b border-primary/10">
                <div className="mb-6">
                  <h3 className="text-3xl font-serif text-primary mb-2 hover:text-accent transition-colors cursor-pointer">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl font-sans text-primary-light mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-6 text-sm font-sans text-primary-light">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary/5 text-primary text-xs uppercase tracking-wide">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                      <p className="text-lg font-sans text-primary-light leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

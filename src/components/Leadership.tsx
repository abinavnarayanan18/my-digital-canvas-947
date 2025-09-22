import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Code2, Users, Lightbulb } from "lucide-react";

const leadership = [
  {
    organization: "Born To Win (Not-for-Profit Alumni Association)",
    role: "Co-Founder & Mentor",
    icon: Heart,
    description: "Created endowments and scholarships for underprivileged students. Mentored students to help them build career pathways.",
    impact: ["Scholarship Creation", "Student Mentorship", "Career Guidance"],
    type: "Non-Profit"
  },
  {
    organization: "Duke MEM Vibe Coding Club",
    role: "Core Member",
    icon: Code2,
    description: "Organized Vibe Coding hackathons in partnership with Lovable. Hosted educational sessions on coding best practices.",
    impact: ["Hackathon Organization", "Technical Education", "Community Building"],
    type: "Academic"
  }
];

export const Leadership = () => {
  return (
    <section id="leadership" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Community <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-subtitle">
            Giving back through mentorship and community building initiatives
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <Card key={index} className="p-8 card-hover group">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                      <h3 className="text-lg font-semibold leading-tight">
                        {item.organization}
                      </h3>
                      <p className="text-primary font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <h4 className="font-medium text-sm">Key Contributions</h4>
                  </div>
                  <div className="grid gap-3">
                    {item.impact.map((impact, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 rounded bg-muted/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="p-8 card-hover inline-block">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-1">Always Open to Collaborate</h3>
                <p className="text-sm text-muted-foreground">
                  Passionate about mentoring and building communities that drive positive change
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
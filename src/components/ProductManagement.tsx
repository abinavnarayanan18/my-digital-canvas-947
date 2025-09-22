import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, TrendingUp, Target, ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "AI-Powered Data Center Optimization",
    description: "Product strategy and market analysis for EmeraldAI's demand reduction platform",
    category: "Product Strategy",
    status: "In Progress",
    icon: TrendingUp,
    deliverables: ["Market Analysis", "Product Requirements", "Go-to-Market Strategy"],
    skills: ["Product Strategy", "Market Research", "Financial Modeling"],
    timeline: "Aug 2025 - Present"
  },
  {
    title: "Cloud Migration Product Framework",
    description: "Developed product frameworks for enterprise cloud transformation initiatives",
    category: "Product Framework",
    status: "Completed",
    icon: Target,
    deliverables: ["Migration Framework", "Success Metrics", "Customer Journey Maps"],
    skills: ["Product Management", "Enterprise Solutions", "Customer Experience"],
    timeline: "2023 - 2024"
  },
  {
    title: "DevOps Platform User Experience",
    description: "Enhanced developer experience and reduced deployment friction by 40%",
    category: "User Experience",
    status: "Completed",
    icon: Users,
    deliverables: ["User Research", "Feature Prioritization", "Performance Metrics"],
    skills: ["User Research", "Agile Development", "Performance Optimization"],
    timeline: "2022 - 2024"
  }
];

export const ProductManagement = () => {
  return (
    <section id="product-management" className="section-padding section-alt hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Product Management <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Strategic product initiatives and case studies showcasing end-to-end product thinking
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Badge 
                        variant={item.status === 'Completed' ? 'default' : 'secondary'}
                        className="mb-2"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    Key Deliverables
                  </h4>
                  <div className="grid gap-2">
                    {item.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{item.timeline}</span>
                    <Button size="sm" variant="ghost" className="h-8 px-2">
                      View Details
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 inline-block">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-1">Building Product Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Continuously developing case studies and product artifacts to showcase strategic thinking
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
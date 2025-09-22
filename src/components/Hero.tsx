import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="hero-gradient section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Duke MEM '27 | Product Management Focus
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Abinav</span>
              <span className="gradient-text">Narayanan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              3x AWS Certified DevOps Engineer transitioning to Product Management. 
              Bridging technical expertise with strategic business impact through data-driven innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group" asChild>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="group" asChild>
              <a
                href="https://www.linkedin.com/in/abinavnarayanan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years DevOps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Releases Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">AWS Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Faster Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
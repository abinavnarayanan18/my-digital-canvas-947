import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="hero-gradient section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              Available for Product Management Opportunities
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Abinav Narayanan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              DevOps Engineer transitioning to Product Management through Duke MEM. 
              Bridging the gap between technical excellence and strategic product vision.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Durham, NC</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>as1670@duke.edu</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/abinavnarayanan</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg transition-spring hover:scale-105">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg transition-spring hover:scale-105">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
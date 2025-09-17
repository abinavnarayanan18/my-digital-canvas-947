import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming technical expertise into strategic product leadership
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my Master of Engineering Management at Duke University, 
              I bring 3+ years of hands-on experience as a Lead DevOps Engineer at Tata Consultancy Services, 
              where I spearheaded cloud transformations and streamlined operations for major clients like Qantas Airlines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My unique blend of technical depth and emerging product management skills positions me 
              to bridge the gap between engineering teams and business objectives, ensuring products 
              are both technically sound and market-driven.
            </p>
          </div>
          
          <Card className="p-8 card-gradient shadow-medium">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years in DevOps Engineering</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-xs text-muted-foreground">Production Releases</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">40%</div>
                  <div className="text-xs text-muted-foreground">Faster Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">25%</div>
                  <div className="text-xs text-muted-foreground">Reduced Turnaround</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Dec 2026</div>
                  <div className="text-xs text-muted-foreground">Duke MEM Graduate</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
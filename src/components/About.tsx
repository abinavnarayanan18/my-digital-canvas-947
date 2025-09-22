import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Transforming technical expertise into strategic product leadership through continuous learning and innovation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-6">Professional Journey</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my <strong>Master of Engineering Management</strong> at Duke University, 
                  I bring 3+ years of hands-on experience as a Lead DevOps Engineer at Tata Consultancy Services, 
                  where I spearheaded cloud transformations and streamlined operations for major clients like Qantas Airlines.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My unique blend of technical depth and emerging product management skills positions me 
                  to bridge the gap between engineering teams and business objectives, ensuring products 
                  are both technically sound and market-driven.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through my consulting work with EmeraldAI and involvement in Duke's vibrant ecosystem, 
                  I'm developing expertise in product strategy, market analysis, and customer-centric thinking 
                  while maintaining my technical foundation.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 card-hover">
              <h4 className="font-semibold mb-4 text-center">Key Achievements</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Production Releases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25%</div>
                  <div className="text-sm text-muted-foreground">Reduced Turnaround</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover">
              <h4 className="font-semibold mb-4 text-center">Education Timeline</h4>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="font-semibold text-primary">Dec 2026</div>
                  <div className="text-sm text-muted-foreground">Duke MEM Graduate</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary">2022</div>
                  <div className="text-sm text-muted-foreground">B.Tech Graduate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
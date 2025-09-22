import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="text-sm font-medium text-primary-light tracking-wide uppercase font-sans">
              Duke MEM '27 | Product Management Focus
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-primary leading-none">
              Abinav
              <br />
              Narayanan
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl font-sans text-primary-light leading-relaxed">
                3x AWS Certified DevOps Engineer transitioning to Product Management. 
                Bridging technical expertise with strategic business impact through data-driven innovation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white font-sans font-medium text-sm tracking-wide uppercase transition-colors hover:bg-accent inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            
            <a
              href="https://www.linkedin.com/in/abinavnarayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary text-primary font-sans font-medium text-sm tracking-wide uppercase transition-colors hover:bg-primary hover:text-white inline-flex items-center gap-2 group"
            >
              Connect on LinkedIn
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-primary/10">
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-primary">3+</div>
              <div className="text-sm font-sans text-primary-light mt-2">Years DevOps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-primary">50+</div>
              <div className="text-sm font-sans text-primary-light mt-2">Releases Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-primary">3</div>
              <div className="text-sm font-sans text-primary-light mt-2">AWS Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-semibold text-primary">40%</div>
              <div className="text-sm font-sans text-primary-light mt-2">Faster Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
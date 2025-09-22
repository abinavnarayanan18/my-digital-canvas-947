const portfolioItems = [
  {
    title: "AI-Powered Data Center Optimization",
    description: "Product strategy and market analysis for EmeraldAI's demand reduction platform targeting enterprise data centers. Defined comprehensive product requirements through stakeholder interviews and competitive analysis.",
    status: "In Progress",
    timeline: "Aug 2025 - Present"
  },
  {
    title: "Cloud Migration Product Framework",
    description: "Developed end-to-end product framework for enterprise cloud transformation initiatives. Created customer journey maps and success metrics that reduced migration time by 30%.",
    status: "Completed",
    timeline: "2023 - 2024"
  },
  {
    title: "DevOps Platform User Experience Study",
    description: "Led comprehensive user research initiative to enhance developer experience across CI/CD platforms. Implemented feature prioritization framework that reduced deployment friction by 40%.",
    status: "Completed",
    timeline: "2022 - 2024"
  }
];

export const ProductManagementPortfolio = () => {
  return (
    <section id="product-management" className="py-24 lg:py-32 bg-background-muted hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
            Product Management Portfolio
          </h2>
          <p className="text-lg font-sans text-primary-light max-w-2xl mx-auto leading-relaxed">
            Strategic product initiatives and case studies showcasing end-to-end product thinking
          </p>
        </div>

        <div className="space-y-16">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group">
              <div className="pb-8 border-b border-primary/10">
                <div className="mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-serif text-primary hover:text-accent transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary/5 text-primary text-xs uppercase tracking-wide font-sans">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-sm font-sans text-primary-light mb-4">
                    {item.timeline}
                  </div>
                </div>
                
                <p className="text-lg font-sans text-primary-light leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-accent font-sans font-medium hover:underline transition-colors"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-16 border-t border-primary/10">
          <div className="inline-block">
            <h3 className="text-xl font-serif text-primary mb-3">Building Product Excellence</h3>
            <p className="text-lg font-sans text-primary-light">
              Continuously developing case studies and product artifacts to showcase strategic thinking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
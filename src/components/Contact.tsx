import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "as1670@duke.edu",
    link: "mailto:as1670@duke.edu"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (919) 886-0034",
    link: "tel:+19198860034"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abinavnarayanan",
    link: "https://linkedin.com/in/abinavnarayanan"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Durham, NC",
    link: null
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Ready to discuss product management opportunities or collaborate on innovative projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 card-hover">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="font-medium hover:text-primary transition-smooth"
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8 card-hover">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full justify-start gap-3 py-6 transition-smooth hover:scale-105"
                    asChild
                  >
                    <a href="mailto:as1670@duke.edu">
                      <Mail className="h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start gap-3 py-6 transition-smooth hover:scale-105"
                    asChild
                  >
                    <a 
                      href="https://linkedin.com/in/abinavnarayanan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full justify-start gap-3 py-6 transition-smooth hover:scale-105"
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <Card className="p-8 card-hover inline-block">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Open to Opportunities</h3>
                <p className="text-muted-foreground max-w-md">
                  Actively seeking Product Management roles where I can leverage my technical background 
                  to drive product success and innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Product Management</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Technical Product Management</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Strategy Consulting</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
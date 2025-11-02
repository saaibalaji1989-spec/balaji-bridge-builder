import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, ClipboardCheck, Users } from "lucide-react";

const ServicesConsulting = () => {
  const services = [
    {
      icon: Building2,
      title: "Banking & Fintech Transformation",
      description: "From legacy processes to digital-first systems. We help financial institutions modernize operations, enhance customer experience, and stay competitive."
    },
    {
      icon: TrendingUp,
      title: "Trade Finance Process Optimization",
      description: "Efficiency through clarity and automation. Streamline your trade finance operations with data-driven insights and optimized workflows."
    },
    {
      icon: ClipboardCheck,
      title: "UAT & QA Advisory",
      description: "End-to-end test frameworks for banking platforms. Ensure quality, compliance, and reliability with comprehensive testing strategies."
    },
    {
      icon: Users,
      title: "Agile Product Coaching (CSPO)",
      description: "Empowering teams to deliver faster, smarter. Transform your product development with certified Scrum Product Owner expertise."
    }
  ];

  return (
    <section id="consulting" className="py-24 bg-muted/30">
      <div className="container px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Strategic Consulting for the Digital Era
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Bridging business strategy with technology excellence
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesConsulting;

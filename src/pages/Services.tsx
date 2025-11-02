import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Bot, ShoppingCart, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Digital Consulting",
      description: "Strategic guidance for digital transformation initiatives",
      details: [
        "Business analysis and requirement gathering",
        "UAT and QA advisory for banking platforms",
        "Agile Product Coaching (CSPO certified)",
        "Process optimization and workflow design",
        "Stakeholder management and communication"
      ]
    },
    {
      icon: Bot,
      title: "AI Integration",
      description: "Intelligent automation tailored to your industry",
      details: [
        "AI agent design and implementation",
        "Workflow automation solutions",
        "Natural language processing applications",
        "Predictive analytics and forecasting",
        "Custom AI model development"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Enablement",
      description: "End-to-end solutions for online retail success",
      details: [
        "E-commerce platform setup and configuration",
        "Performance optimization and scaling",
        "Payment gateway integration",
        "Inventory and order management systems",
        "Customer experience design"
      ]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Transform data into actionable business intelligence",
      details: [
        "Business dashboard development",
        "KPI tracking and visualization",
        "Data pipeline design",
        "Reporting automation",
        "Insights generation and recommendations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-primary">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Consulting. Commerce. Clarity.
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in">
              Our services help businesses and customers connect seamlessly in a digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              From strategy to execution, we deliver comprehensive solutions that drive measurable business outcomes
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="p-8 bg-card hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-card-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {service.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-card-foreground text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              Proven Results Across Industries
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Over 12+ years of delivering transformation projects for leading financial institutions
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center bg-card">
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center bg-card">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </Card>
              <Card className="p-6 text-center bg-card">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Major Banks</div>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                From Barclays to Emirates NBD, ADCB to ICICI Bank — trusted by industry leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how AmberBridge can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/ai-agents'}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Explore AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

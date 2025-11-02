import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingBag, Cog, Heart, Plane, Bot } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AIAgents = () => {
  const industries = [
    {
      icon: Building2,
      title: "Banking & Finance",
      description: "Automate client onboarding, KYC checks, and trade-finance documentation. Predict transaction anomalies using AI risk models.",
      features: [
        "Automated KYC & compliance checks",
        "Trade finance document processing",
        "Risk prediction models",
        "Customer service automation"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-Commerce",
      description: "Smart product recommendations and inventory optimization. AI-driven customer support chat agents integrated with WhatsApp and Shopify.",
      features: [
        "Personalized product recommendations",
        "Inventory demand forecasting",
        "24/7 customer support chatbots",
        "Visual search and discovery"
      ]
    },
    {
      icon: Cog,
      title: "Manufacturing & Logistics",
      description: "Predictive maintenance through AI sensors. Autonomous report generation for operational insights.",
      features: [
        "Predictive maintenance alerts",
        "Supply chain optimization",
        "Quality control automation",
        "Operational reporting"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare & Insurance",
      description: "Secure patient-data agents for claim analysis and document review. AI triage tools with human validation.",
      features: [
        "Claims processing automation",
        "Medical document analysis",
        "Patient triage assistance",
        "Compliance monitoring"
      ]
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      description: "Personalized booking and itinerary recommendation systems. AI-driven guest feedback summarizers.",
      features: [
        "Smart booking recommendations",
        "Dynamic pricing optimization",
        "Guest feedback analysis",
        "Concierge chatbots"
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
            <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-fade-in">
              <Bot className="text-primary-foreground" size={40} />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Empowering Every Industry with Intelligent Agents
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in">
              From banking to retail, AmberBridge AI Agents automate insight, reduce manual work, 
              and amplify customer experience — built with safety, ethics, and human oversight.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              AmberBridge develops and integrates AI agents tailored to industry workflows — 
              blending automation, analytics, and business context for smarter operations.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 md:p-12 bg-card hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary" size={40} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-3xl font-bold text-card-foreground mb-4">
                        {industry.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {industry.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-card-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Want to build an AI agent for your business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's design it together — combining your domain expertise with our AI capabilities 
              to create intelligent solutions that drive real business value.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              onClick={() => window.location.href = '/contact'}
            >
              Book an AI Discovery Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgents;

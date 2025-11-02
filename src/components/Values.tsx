import { Card } from "@/components/ui/card";
import { Shield, Lightbulb, Link2 } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in transparent processes and ethical partnerships. Trust is the foundation of everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We transform complex ideas into simple solutions. Progress comes from asking better questions."
    },
    {
      icon: Link2,
      title: "Connection",
      description: "We bridge people, platforms, and progress. Success is measured by the relationships we build."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Our Values
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 bg-accent/10 rounded-full mb-6">
                    <Icon className="text-accent" size={40} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-card-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;

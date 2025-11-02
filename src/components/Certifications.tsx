import { Card } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2020",
    icon: Award,
    color: "text-accent"
  },
  {
    title: "B.E in Computer Science & Engineering",
    issuer: "Anna University",
    year: "2011",
    icon: GraduationCap,
    color: "text-primary"
  }
];

const Certifications = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Education & Certifications
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Continuous learning and professional development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-xl transition-all duration-300 animate-fade-in group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors ${cert.color}`}>
                    <Icon size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-card-foreground mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

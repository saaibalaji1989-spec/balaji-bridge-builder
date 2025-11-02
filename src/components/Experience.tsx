import { Card } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Barclays",
    role: "Senior Business Analyst",
    period: "2018 - Present",
    description: "Leading digital banking transformation initiatives, coordinating UAT activities, and driving process improvements across trade finance operations.",
    highlights: ["Digital Transformation", "UAT Leadership", "Stakeholder Management"]
  },
  {
    company: "Emirates NBD",
    role: "Business Analyst",
    period: "2015 - 2018",
    description: "Managed requirement gathering and test planning for core banking systems, collaborated with cross-functional teams on process optimization.",
    highlights: ["Requirement Analysis", "Test Planning", "Process Design"]
  },
  {
    company: "ADCB",
    role: "Business Analyst",
    period: "2013 - 2015",
    description: "Focused on trade finance systems integration, stakeholder communication, and business process documentation.",
    highlights: ["Systems Integration", "Documentation", "Trade Finance"]
  },
  {
    company: "ICICI Bank",
    role: "Junior Business Analyst",
    period: "2011 - 2013",
    description: "Started my journey in banking technology, supporting requirement gathering and user acceptance testing for retail banking projects.",
    highlights: ["Banking Systems", "UAT Support", "Business Requirements"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary">
      <div className="container px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Professional Journey
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          12+ years of driving digital transformation in banking
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-[1.875rem] top-8 w-2 h-2 bg-accent rounded-full ring-4 ring-background -translate-x-1/2" />
                  
                  <Card className="md:ml-20 p-6 md:p-8 bg-card hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="text-primary" size={20} />
                          <h3 className="font-heading text-2xl font-bold text-card-foreground">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-primary">
                          {exp.role}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-card-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full border border-accent/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

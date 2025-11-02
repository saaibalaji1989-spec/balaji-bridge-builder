import { Card } from "@/components/ui/card";
import { Database, Users, FileText, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Database,
    skills: ["SQL", "PLSQL", "JIRA", "Tosca", "IBM CLM", "WebLogic"]
  },
  {
    title: "Analytical & Collaboration",
    icon: Users,
    skills: ["Requirement Gathering", "Test Planning", "Stakeholder Communication", "Process Flows"]
  },
  {
    title: "Domain Expertise",
    icon: FileText,
    skills: ["Banking Systems", "Trade Finance", "Digital Transformation", "UAT Management"]
  },
  {
    title: "Project Management",
    icon: Settings,
    skills: ["Agile/Scrum", "Cross-functional Leadership", "Process Optimization", "Risk Management"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for driving business value
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card hover:shadow-lg transition-all duration-300 animate-fade-in border-t-4 border-t-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

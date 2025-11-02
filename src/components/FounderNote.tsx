import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const FounderNote = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            A Message from Balaji Asaithambi
          </h2>
          
          <Card className="p-8 md:p-12 bg-card border-border shadow-lg">
            <div className="space-y-6 text-card-foreground">
              <p className="text-lg leading-relaxed">
                AmberBridge is more than a company — it's a reflection of my journey across banking, 
                technology, and digital commerce.
              </p>
              
              <p className="text-lg leading-relaxed">
                Over the past 12+ years, I've had the privilege of working with some of the world's leading 
                financial institutions, helping them navigate complex transformations and deliver meaningful 
                results. I've seen firsthand how the right blend of strategy, technology, and empathy can 
                unlock incredible value.
              </p>
              
              <p className="text-lg leading-relaxed">
                I built AmberBridge to connect insights with action, and businesses with customers. Whether 
                we're helping a bank optimize its trade finance operations or curating products for modern life, 
                our commitment remains the same: clarity, trust, and results.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold text-primary">
                Let's build something meaningful together.
              </p>
              
              <div className="pt-6 mt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-heading text-2xl font-bold text-foreground">Balaji Asaithambi</p>
                  <p className="text-muted-foreground">Founder, AmberBridge Consulting & Commerce</p>
                  <p className="text-sm text-muted-foreground mt-1">CSPO · Business Analyst · 12+ Years in Banking</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://linkedin.com/in/balaji-asaithambi-215a0492', '_blank')}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Linkedin className="mr-2" size={20} />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;

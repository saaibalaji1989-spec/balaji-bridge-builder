import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            From Strategy to Storefront
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            AmberBridge blends analytical precision with human-centered thinking
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-8 md:p-10 bg-card border-border shadow-lg">
              <div className="space-y-6 text-card-foreground">
                <p className="text-lg leading-relaxed">
                  Founded by <span className="font-semibold text-primary">Balaji Asaithambi</span>, a certified Product Owner (CSPO) 
                  and Business Analyst with 12+ years of experience at <span className="font-semibold text-primary">Barclays</span>, 
                  <span className="font-semibold text-primary"> Emirates NBD</span>, and 
                  <span className="font-semibold text-primary"> ICICI Bank</span>, AmberBridge blends analytical precision with 
                  human-centered thinking.
                </p>
                
                <p className="text-lg leading-relaxed font-semibold text-primary">
                  We consult. We build. We deliver.
                </p>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex gap-4 items-start">
                    <Quote className="text-accent flex-shrink-0 mt-1" size={28} />
                    <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                      I believe every data point tells a story — our role is to help businesses listen.
                    </blockquote>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold">AmberBridge Consulting & Commerce</h3>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  More than a company — AmberBridge is a bridge between business insight and digital innovation, 
                  connecting strategy with execution, and insights with action.
                </p>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  From consulting Fortune 500 banks to curating quality products for modern life, we bring the same 
                  commitment to clarity, trust, and results.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

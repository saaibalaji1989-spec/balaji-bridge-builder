import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>
          
          <Card className="p-8 md:p-12 bg-card border-border shadow-lg">
            <div className="space-y-6 text-card-foreground">
              <p className="text-lg leading-relaxed">
                With over 12 years of experience in the banking and trade finance sector, I've had the privilege 
                of working with prestigious institutions including <span className="font-semibold text-primary">Barclays</span>, 
                <span className="font-semibold text-primary"> Emirates NBD</span>, 
                <span className="font-semibold text-primary"> ADCB</span>, and 
                <span className="font-semibold text-primary"> ICICI Bank</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey began at ICICI Bank, where I discovered my passion for bridging the gap between business 
                needs and technology solutions. Since then, I've specialized in digital transformation initiatives, 
                leading cross-functional teams through complex banking system implementations.
              </p>
              
              <p className="text-lg leading-relaxed">
                I thrive on <span className="font-semibold text-primary">optimizing processes</span>, 
                <span className="font-semibold text-primary"> empowering teams</span>, and ensuring that every 
                technology solution delivers measurable business value. My approach combines analytical rigor with 
                empathy, always keeping the end-user experience at the forefront.
              </p>
              
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex gap-4 items-start">
                  <Quote className="text-accent flex-shrink-0 mt-1" size={32} />
                  <blockquote className="text-xl italic text-muted-foreground leading-relaxed">
                    I believe every data point tells a story — my role is to help businesses listen.
                  </blockquote>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

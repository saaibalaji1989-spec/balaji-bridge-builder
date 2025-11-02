import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";

const ECommerce = () => {
  return (
    <section id="ecommerce" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Curated Products for Modern Life
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AmberBridge Commerce brings hand-picked, quality-driven goods to the UAE market — 
              combining trust, usability, and thoughtful design.
            </p>
          </div>

          <Card className="p-12 bg-gradient-primary text-primary-foreground">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-primary-foreground/10 rounded-full">
                <ShoppingBag className="text-primary-foreground" size={48} />
              </div>
              
              <h3 className="font-heading text-3xl font-bold">
                Coming Soon: AmberBridge Store
              </h3>
              
              <p className="text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                We're curating a collection of premium products that reflect our values: 
                quality, transparency, and exceptional customer experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Notified
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ECommerce;

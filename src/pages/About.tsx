import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Users, Heart, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import balajiPhoto from "@/assets/balaji-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-primary">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Where Business Insight Meets Digital Innovation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in">
              AmberBridge exists to help organizations think smarter, work faster, and grow stronger 
              through data-driven transformation and human-centered strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To connect businesses, technologies, and people through clarity and collaboration — 
              turning complex challenges into measurable success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Our Story
            </h2>
            
            <div className="space-y-8 mb-12">
              <p className="text-lg text-card-foreground leading-relaxed">
                AmberBridge was born from over 12 years of experience navigating the complex world 
                of banking, trade finance, and digital transformation. Founded by Balaji Asaithambi, 
                the company represents a culmination of insights gained from working with some of the 
                world's leading financial institutions.
              </p>
              
              <p className="text-lg text-card-foreground leading-relaxed">
                From trade-desk operations at ICICI Bank to leading transformational projects at 
                Barclays and Emirates NBD, every experience shaped the vision for AmberBridge: 
                a consulting and commerce firm that bridges the gap between business logic and 
                digital agility.
              </p>
              
              <p className="text-lg text-card-foreground leading-relaxed">
                Today, AmberBridge serves both enterprises seeking strategic transformation and 
                customers looking for quality products delivered with trust and transparency.
              </p>
            </div>

            <Card className="p-8 bg-card border-accent">
              <div className="flex gap-4 items-start">
                <div className="text-accent flex-shrink-0">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <blockquote className="text-xl italic text-card-foreground leading-relaxed">
                  I founded AmberBridge to blend what I've learned in banking with what I love about 
                  innovation — making technology simple, useful, and human.
                </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Our Approach
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              A proven methodology built on clarity, collaboration, and results
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-card-foreground mb-4">
                  Discover
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understand business goals and user needs through collaborative workshops 
                  and data analysis.
                </p>
              </Card>

              <Card className="p-8 text-center bg-card hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-card-foreground mb-4">
                  Design
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build strategies and solutions that scale with your business and adapt 
                  to market changes.
                </p>
              </Card>

              <Card className="p-8 text-center bg-card hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-card-foreground mb-4">
                  Deliver
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Execute with transparency and measurable outcomes, ensuring sustainable 
                  business impact.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-muted/30">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">
                      Integrity
                    </h3>
                    <p className="text-muted-foreground">
                      Do what's right, always. We believe in transparent processes and ethical partnerships.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Lightbulb className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">
                      Innovation
                    </h3>
                    <p className="text-muted-foreground">
                      Never stop improving. We embrace new technologies and methodologies to deliver better results.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">
                      Empathy
                    </h3>
                    <p className="text-muted-foreground">
                      People before process. We design solutions that consider the human experience.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Users className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">
                      Collaboration
                    </h3>
                    <p className="text-muted-foreground">
                      Success is shared. We work alongside our clients as partners in transformation.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Meet the Founder
            </h2>
            
            <Card className="p-8 md:p-12 bg-card border-border shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src={balajiPhoto} 
                  alt="Balaji Asaithambi - Founder of AmberBridge" 
                  className="w-48 h-48 rounded-lg object-cover shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                    Balaji Asaithambi
                  </h3>
                  <p className="text-accent text-lg font-semibold mb-4">
                    Founder & Chief Consultant
                  </p>
                  <p className="text-card-foreground leading-relaxed mb-6">
                    With 12+ years of experience at institutions like Barclays, Emirates NBD, ADCB, 
                    and ICICI Bank, Balaji brings deep expertise in banking transformation, trade 
                    finance, and agile product development. As a Certified Scrum Product Owner (CSPO), 
                    he specializes in bridging technical solutions with business outcomes.
                  </p>
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

      <Footer />
    </div>
  );
};

export default About;

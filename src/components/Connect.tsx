import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Let's collaborate or talk ideas — I'd love to connect!
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Linkedin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Connect with me professionally
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://linkedin.com/in/balaji-asaithambi-215a0492', '_blank')}
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-card hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">
                    Email
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Drop me a direct message
                  </p>
                  <a 
                    href="mailto:saai.balaji1989@gmail.com"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    saai.balaji1989@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <h3 className="font-heading text-xl font-bold mb-3">
                Open to Opportunities
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                I'm always interested in discussing new projects, consulting opportunities, 
                or just connecting with fellow professionals in the banking and technology space.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-primary">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed animate-fade-in">
              Whether you're a bank reimagining trade finance, a startup scaling your online store, 
              or a business exploring AI automation — we'd love to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Ready to start a conversation? Reach out through any of these channels, 
                    or fill out the form and we'll respond within 24 hours.
                  </p>
                </div>

                <Card className="p-6 bg-card">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <Mail className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                        <a 
                          href="mailto:saai.balaji1989@gmail.com"
                          className="text-accent hover:underline"
                        >
                          saai.balaji1989@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <Linkedin className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">LinkedIn</h3>
                        <a 
                          href="https://linkedin.com/in/balaji-asaithambi-215a0492"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          Connect with Balaji
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <MapPin className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-primary">
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-primary-foreground/90">
                    <p>Sunday - Thursday: 9:00 AM - 6:00 PM GST</p>
                    <p>Friday - Saturday: By appointment</p>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="p-8 bg-card">
                <h3 className="font-heading text-2xl font-bold text-card-foreground mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full min-h-[150px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

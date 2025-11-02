import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3">AmberBridge</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Connecting insight with innovation. Strategic consulting and curated commerce 
                for the digital era.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('consulting')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    Consulting
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('ecommerce')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    Store
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:saai.balaji1989@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail size={16} />
                  saai.balaji1989@gmail.com
                </a>
                <a 
                  href="https://linkedin.com/in/balaji-asaithambi-215a0492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/70 text-sm">
                © {currentYear} AmberBridge Consulting & Commerce. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-xs italic">
                Built with clarity & care by Balaji Asaithambi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

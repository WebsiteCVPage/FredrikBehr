import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Fredrik<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Webbutvecklare med passion för att skapa användarvänliga och effektiva digitala lösningar.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a
                href="tel:070-5544518"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                070-55 44 518
              </a>
              <a
                href="mailto:Fredrik92@hotmail.com"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                Fredrik92@hotmail.com
              </a>
              <span className="flex items-center gap-3">
                <MapPin size={16} />
                718 95, Frövi
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Snabblänkar</h4>
            <nav className="space-y-3 text-sm text-primary-foreground/70">
              <a href="/" className="block hover:text-accent transition-colors">
                Hem
              </a>
              <a href="/projects" className="block hover:text-accent transition-colors">
                Projekt
              </a>
              <a href="/about" className="block hover:text-accent transition-colors">
                Om mig
              </a>
              <a href="/contact" className="block hover:text-accent transition-colors">
                Kontakt
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Fredrik Nilsson. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

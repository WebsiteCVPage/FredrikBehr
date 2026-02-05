import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-pulse-glow">
              <img
                src={profilePhoto}
                alt="Fredrik Nilsson"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left text-primary-foreground max-w-2xl">
            <p
              className="text-accent font-medium mb-3 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Hej, jag heter
            </p>
            <h1
              className="font-display text-5xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Fredrik Nilsson
            </h1>
            <p
              className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 font-light animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Studerande inom <span className="text-accent font-medium">Webbutveckling</span>
            </p>

            {/* Contact Info */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-primary-foreground/70 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="tel:070-5544518"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                070-55 44 518
              </a>
              <a
                href="mailto:Fredrik92@hotmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                Fredrik92@hotmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                718 95, Frövi
              </span>
            </div>

            {/* CTA */}
            <div
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="/projects"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Se mina projekt
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
              >
                Kontakta mig
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ArrowDown className="text-primary-foreground/50" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

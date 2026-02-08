import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AvailabilityNotice } from "@/components/AvailabilityNotice";
const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 hero-section">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Kontakta mig
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Har du ett projekt eller vill bara säga hej? Tveka inte att höra av dig!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">
              Låt oss prata
            </h2>
            <p className="text-muted-foreground mb-12 text-center max-w-xl mx-auto">
              Jag är alltid öppen för nya möjligheter och spännande projekt. 
              Välj det sätt som passar dig bäst för att nå mig.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Phone Card */}
              <a
                href="tel:070-5544518"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_40px_-10px_hsl(var(--accent)/0.4)] hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-150" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <Phone className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Ring mig
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Snabbaste sättet att nå mig
                  </p>
                  
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span>070-55 44 518</span>
                    <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:Fredrik92@hotmail.com"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)] hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-150" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Skicka e-post
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    För längre frågor eller förfrågningar
                  </p>
                  
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="truncate">Fredrik92@hotmail.com</span>
                    <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0" />
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-secondary/50 to-transparent border border-border p-8 transition-all duration-500 hover:border-border/80 hover:shadow-lg hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-muted/50 rounded-full blur-3xl transition-all duration-500 group-hover:bg-muted group-hover:scale-150" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-foreground/10 group-hover:scale-110">
                    <MapPin className="w-7 h-7 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Baserad i
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Öppen för distansarbete
                  </p>
                  
                  <div className="text-foreground font-medium">
                    718 95, Frövi
                  </div>
                </div>
              </div>
            </div>

              <AvailabilityNotice />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

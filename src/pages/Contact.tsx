import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Meddelande skickat!",
      description: "Tack för ditt meddelande. Jag återkommer så snart som möjligt.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Låt oss prata
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Jag är alltid öppen för nya möjligheter och spännande projekt. 
                Oavsett om du har en fråga eller bara vill säga hej, så svarar jag gärna!
              </p>

              <div className="space-y-6">
                <a
                  href="tel:070-5544518"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-hover group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent transition-colors">
                    <Phone className="text-accent group-hover:text-accent-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <p className="font-medium text-foreground">070-55 44 518</p>
                  </div>
                </a>

                <a
                  href="mailto:Fredrik92@hotmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-hover group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent transition-colors">
                    <Mail className="text-accent group-hover:text-accent-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-post</p>
                    <p className="font-medium text-foreground">Fredrik92@hotmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Adress</p>
                    <p className="font-medium text-foreground">718 95, Frövi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Skicka ett meddelande
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Namn
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ditt namn"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-post
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="din@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Ämne
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Vad gäller det?"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Meddelande
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ditt meddelande..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                >
                  <Send size={18} className="mr-2" />
                  Skicka meddelande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

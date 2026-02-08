import { Download, Award, Users, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 hero-section">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Fredrik Nilsson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left text-primary-foreground max-w-2xl">
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Om mig
              </h1>
              <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
                <p>
                  Jag har alltid haft ett stort intresse för datorer och valde därför att studera IT-programmet med inriktning på programmering vid John Bauer-gymnasiet mellan 2008 och 2011.
                </p>
                <p>
                  Utöver mina tekniska kunskaper har jag över ett decennium av erfarenhet från PostNord, där jag haft flera ansvarsfulla roller. Denna bakgrund har gett mig värdefulla färdigheter i att ta eget ansvar, hantera kundbemötande samt arbeta strukturerat med planering, problemlösning och effektivisering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Letter Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Personligt brev
            </h2>
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong className="text-foreground">Hej!</strong>
                </p>
                <p>
                  Mitt namn är Fredrik Nilsson och jag studerar webbutveckling inom .NET. Jag söker en tjänst där jag kan använda mina kunskaper och fortsätta utvecklas som utvecklare.
                </p>
                
                <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Utbildning och teknisk erfarenhet
                </h3>
                <p>
                  Under utbildningen har jag utvecklat en bred teknisk kompetens inom både <strong className="text-foreground">frontend</strong> och <strong className="text-foreground">backend</strong>. Jag har byggt grunden för webbplatser i <strong className="text-foreground">Visual Studio Code</strong> med <strong className="text-foreground">HTML</strong> och <strong className="text-foreground">CSS</strong>, samt designat responsiva och stilrena gränssnitt. För att skapa interaktiva webblösningar har jag arbetat med <strong className="text-foreground">JavaScript</strong> och <strong className="text-foreground">React</strong>.
                </p>
                <p>
                  På backend-sidan har jag fördjupat mig i <strong className="text-foreground">C#</strong> och SOLID-principerna genom att utveckla en backend-lösning för en kontaktapplikation, med fokus på hållbar och strukturerad kod. Jag har även byggt en grafisk applikation med <strong className="text-foreground">WPF</strong> och skrivit <strong className="text-foreground">XAML</strong>-kod för gränssnitt.
                </p>
                <p>
                  För att hantera datalagring har jag lärt mig grunderna i <strong className="text-foreground">SQL</strong>, inklusive hur man skapar Entity-Relation-diagram för att visualisera databasens struktur. Vidare har jag utvecklat en projektstyrningsapplikation där jag använt <strong className="text-foreground">MS SQL</strong> för databashantering och <strong className="text-foreground">Entity Framework Core</strong> för att koppla samman presentationslagret med affärslogiken och databasen.
                </p>

                <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Bakgrund och personliga egenskaper
                </h3>
                <p>
                  Jag har alltid haft ett stort intresse för datorer och valde därför att studera IT-programmet med inriktning på programmering vid John Bauer-gymnasiet mellan 2008 och 2011. Utöver mina tekniska kunskaper har jag över ett decennium av erfarenhet från PostNord, där jag haft flera ansvarsfulla roller. Denna bakgrund har gett mig värdefulla färdigheter i att ta eget ansvar, hantera kundbemötande samt arbeta strukturerat med planering, problemlösning och effektivisering.
                </p>

                <p className="mt-8 text-foreground">
                  Tack för att ni tog er tid att läsa min ansökan. Jag ser fram emot möjligheten att diskutera hur jag kan bidra till ert team. Tveka inte att höra av er om ni har några frågor.
                </p>
                <p className="text-foreground">
                  Väl mött,<br />
                  <strong>Fredrik Nilsson</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience />

            {/* Trust positions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-12">
            Förtroendeuppdrag
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-hover bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                Förtroendevald Seko
              </h3>
            </div>
            <div className="card-hover bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                Skyddsombud
              </h3>
            </div>
            <div className="card-hover bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                Revisor Seko Örebro
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default About;

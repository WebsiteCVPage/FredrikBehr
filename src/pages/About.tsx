import { Download, Award, Users, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const About = () => {
  const documentBaseUrl = import.meta.env.BASE_URL;
  const cvUrl = `${documentBaseUrl}Behr_Fredrik.pdf`;
  const personalLetterUrl = `${documentBaseUrl}Behr_Fredrik_PB.pdf`;
  const profilePhotoUrl = `${documentBaseUrl}profile-photo.png?v=behr`;

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
                  src={profilePhotoUrl}
                  alt="Fredrik Behr"
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
                  Jag är färdigutbildad .NET-utvecklare med fokus på C#, ASP.NET
                  Core, Entity Framework Core, SQL, React och TypeScript. Just
                  nu söker jag en utvecklarroll där jag får bidra i ett team,
                  fortsätta växa tekniskt och bygga lösningar som används på
                  riktigt.
                </p>
                <p>
                  Utöver mina tekniska kunskaper har jag över ett decennium av
                  erfarenhet från PostNord, där jag haft flera ansvarsfulla
                  roller. Denna bakgrund har gett mig värdefulla färdigheter i
                  att ta eget ansvar, hantera kundbemötande samt arbeta
                  strukturerat med planering, problemlösning och
                  effektivisering.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href={cvUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Download size={18} />
                  Ladda ner CV
                </a>
                <a
                  href={personalLetterUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
                >
                  <Download size={18} />
                  Ladda ner personligt brev
                </a>
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
              Min resa till utveckling
            </h2>
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  <strong className="text-foreground">Hej!</strong>
                </p>
                <p>
                  Mitt namn är Fredrik Behr och jag är färdigutbildad
                  .NET-utvecklare. Jag söker en utvecklarroll där jag kan
                  använda mina kunskaper, bidra till verkliga lösningar och
                  fortsätta utvecklas tillsammans med mer erfarna kollegor.
                </p>
                <p>
                  Min väg in i utveckling bygger på både tekniskt intresse och
                  många års arbetslivserfarenhet. Jag trivs när jag får arbeta
                  strukturerat, förstå helheten och omsätta idéer till lösningar
                  som fungerar i praktiken.
                </p>

                <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Utveckling i praktiken
                </h3>
                <p>
                  Under utbildningen arbetade jag med fullstackutveckling, men
                  det som framför allt format mig är de praktiska projekten och
                  möjligheten att arbeta med verkliga verksamhetsbehov. Under
                  min LIA på Örebrobostäder (ÖBO) utvecklade jag tillsammans med
                  mitt team en onboardingapplikation med React i frontend och
                  ASP.NET Web API i backend. Projektet genomfördes i nära
                  samarbete med verksamheten och gav värdefull erfarenhet av
                  både tekniska beslut, samarbete och leveranser i en
                  professionell utvecklingsmiljö. Efter avslutad praktik har jag
                  fortsatt arbeta med lösningen genom en behovsanställning hos
                  ÖBO. Där arbetar jag med förvaltning, vidareutveckling och
                  förbättringar av onboardingapplikationen utifrån verksamhetens
                  behov. Utöver detta fortsätter jag att utveckla egna projekt
                  för att bredda mina kunskaper, utforska nya tekniker och
                  omsätta idéer till fungerande lösningar.
                </p>
                <p>
                  Genom min LIA fick jag erfarenhet av att arbeta i en mer
                  verklighetsnära utvecklingsmiljö, med samarbete, tekniska
                  beslut och lösningar som behövde passa in i ett större
                  sammanhang. I mitt examensarbete utvecklade jag en kontaktsida
                  med MVC-arkitektur och fokus på en praktisk lösning för en
                  verklig verksamhet.
                </p>
                <p>
                  Efter utbildningen fortsätter jag att utveckla egna projekt
                  för att fördjupa mina kunskaper, testa tekniska beslut och
                  visa hur jag arbetar i praktiken. Det hjälper mig att hålla
                  igång utvecklingen och bygga vidare på det jag lärt mig.
                </p>

                <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Tekniskt fokus idag
                </h3>
                <p>
                  Idag fokuserar jag främst på{" "}
                  <strong className="text-foreground">C#</strong>,{" "}
                  <strong className="text-foreground">.NET</strong>,{" "}
                  <strong className="text-foreground">ASP.NET Core</strong>,{" "}
                  <strong className="text-foreground">Web API</strong>,{" "}
                  <strong className="text-foreground">
                    Entity Framework Core
                  </strong>{" "}
                  och <strong className="text-foreground">SQL</strong> på
                  backend, tillsammans med{" "}
                  <strong className="text-foreground">
                    React/React-Native
                  </strong>{" "}
                  och <strong className="text-foreground">TypeScript</strong> på
                  frontend.
                </p>
                <p>
                  Jag använder <strong className="text-foreground">Git</strong>{" "}
                  och <strong className="text-foreground">GitHub</strong> för
                  versionshantering och har arbetat med{" "}
                  <strong className="text-foreground">Azure DevOps</strong> och{" "}
                  <strong className="text-foreground">Azure</strong> i samband
                  med projekt, leveranser och publicering.
                </p>

                <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Bakgrund från PostNord
                </h3>
                <p>
                  Min bakgrund från PostNord har gett mig en stabil arbetsgrund.
                  Jag är van vid ansvar, planering, samordning och att lösa
                  problem i vardagen. Roller som dirigent, fordonsansvarig,
                  gruppledare och skyddsombud har tränat mig i att kommunicera
                  tydligt, prioritera och skapa struktur även när
                  förutsättningarna förändras.
                </p>

                <p className="mt-8 text-foreground">
                  Jag ser fram emot möjligheten att ta nästa steg som utvecklare
                  och bidra med både teknisk nyfikenhet, ansvarstagande och
                  arbetslivserfarenhet. Tveka inte att höra av er om ni har
                  några frågor eller vill prata vidare.
                </p>
                <p className="text-foreground">
                  Väl mött,
                  <br />
                  <strong>Fredrik Behr</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experience showLink={false} />

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

import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: "work" | "education";
}

const experiences: TimelineItem[] = [
  {
    period: "2024 – Pågående",
    title: "Webbutvecklare inom .NET",
    organization: "EC Utbildning",
    location: "Örebro",
    description:
      "Utbildning i fullstackutveckling med fokus på C# och .NET. Arbetar med praktiska projekt för att tillämpa och repetera kunskaper inom frontend och backend-utveckling.",
    type: "education",
  },
  {
    period: "2021 – Pågående",
    title: "Dirigent, Brevbärare, Fordonsansvarig",
    organization: "Postnord",
    location: "Örebro",
    description:
      "Som Dirigent sköter jag kommunikationen och samordningen mellan kontor. Som Fordonsansvarig förvaltar jag fordonsflottan i Örebro, inklusive planering och fördelning av fordon för daglig drift.",
    type: "work",
  },
  {
    period: "2014 – 2021",
    title: "Brevbärare, Chaufför, Gruppledare",
    organization: "Postnord",
    location: "Lindesberg",
    description:
      "Arbetade som chaufför och brevbärare med stort eget ansvar för rutter. Som Gruppledare planerade jag arbetsuppgifter och anställda för att hantera dagen på bästa sätt.",
    type: "work",
  },
  {
    period: "2013 – 2014",
    title: "Chaufför",
    organization: "Postnord",
    location: "Kiruna",
    description:
      "Hanterade logistiken av leveranser till och från kund samt utlämning av gods från logistiklager.",
    type: "work",
  },
];

const Experience = () => {
  const [page, setPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Erfarenhet & Utbildning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Min resa från chaufför till webbutvecklare
          </p>
        </div>

        {/* Link to full CV */}
        <div className="text-center mb-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:-translate-y-0.5 group"
          >
            Läs mitt fullständiga CV & personliga brev
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {(showAll
              ? experiences
              : experiences.slice(page, page + 2)
            ).map((item, index) => {
              const isPreview = !showAll && index === 1;

              return (
                <div
                  key={`${item.period}-${index}`}
                  className={`relative pl-0 md:pl-20 group transition-opacity duration-500 ${
                    isPreview ? "opacity-40 scale-[0.97]" : "opacity-100"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full border-4 border-background items-center justify-center bg-accent">
                    {item.type === "education" ? (
                      <GraduationCap
                        size={12}
                        className="text-accent-foreground"
                      />
                    ) : (
                      <Briefcase
                        size={12}
                        className="text-accent-foreground"
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div className="card-hover bg-card rounded-xl p-6 border border-border">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-2">
                          {item.type === "education" ? (
                            <>
                              <GraduationCap size={14} />
                              Utbildning
                            </>
                          ) : (
                            <>
                              <Briefcase size={14} />
                              Arbete
                            </>
                          )}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {item.organization}, {item.location}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Toggle view */}
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setShowAll((v) => !v);
                  setPage(0);
                }}
                className="text-sm font-medium text-accent hover:underline"
              >
                {showAll
                  ? "Visa fokuserad vy"
                  : "Visa hela arbetslivserfarenheten"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

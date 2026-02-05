import { useEffect, useRef, useState } from "react";
import { Code, Database, Monitor, Wrench } from "lucide-react";

const frontendSkills = ["HTML & CSS", "JavaScript", "React"];
const backendSkills = ["C#", ".NET", "SQL", "Entity Framework", "MS SQL"];
const toolsSkills = ["Visual Studio Code", "CMS", "Git"];

const softSkills = [
  "Ansvarstagande",
  "Effektivisering",
  "Problemlösning",
  "Planering",
  "Teamleading",
];

const SkillBadge = ({ 
  skill, 
  index, 
  isVisible, 
  variant = "default" 
}: { 
  skill: string; 
  index: number; 
  isVisible: boolean;
  variant?: "default" | "accent" | "primary";
}) => {
  const variantStyles = {
    default: "bg-secondary text-secondary-foreground border-border",
    accent: "bg-accent/10 text-accent border-accent/30",
    primary: "bg-primary/10 text-primary border-primary/30",
  };

  return (
    <span
      style={{ animationDelay: `${index * 0.05}s` }}
      className={`inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium border transition-all hover:scale-105 hover:shadow-md ${
        variantStyles[variant]
      } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {skill}
    </span>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Färdigheter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tekniska kompetenser jag utvecklat genom utbildning och arbetslivserfarenhet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend Skills */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <Monitor className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Frontend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  skill={skill}
                  index={index}
                  isVisible={isVisible}
                  variant="accent"
                />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Backend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  skill={skill}
                  index={index + frontendSkills.length}
                  isVisible={isVisible}
                  variant="primary"
                />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-secondary">
                <Wrench className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Verktyg
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolsSkills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  skill={skill}
                  index={index + frontendSkills.length + backendSkills.length}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-secondary">
                <Code className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Egenskaper
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  skill={skill}
                  index={index + frontendSkills.length + backendSkills.length + toolsSkills.length}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Languages */}
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Språk</h4>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                  Svenska
                </span>
                <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium">
                  Engelska
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

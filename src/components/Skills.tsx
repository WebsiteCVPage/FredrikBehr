import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "other";
}

const skills: Skill[] = [
  { name: "HTML & CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "C#", level: 85, category: "backend" },
  { name: ".NET", level: 80, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  { name: "Entity Framework", level: 70, category: "backend" },
  { name: "MS SQL", level: 70, category: "backend" },
  { name: "Visual Studio Code", level: 90, category: "other" },
  { name: "CMS", level: 75, category: "other" },
];

const softSkills = [
  "Ansvarstagande",
  "Effektivisering",
  "Problemlösning",
  "Planering",
  "Teamleading",
];

const SkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-bar-fill"
        style={{
          width: isVisible ? `${skill.level}%` : "0%",
        }}
      />
    </div>
  </div>
);

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

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              Frontend
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={isVisible ? "animate-fade-in-up" : "opacity-0"}
                >
                  <SkillBar skill={skill} isVisible={isVisible} />
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Backend
            </h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  className={isVisible ? "animate-fade-in-up" : "opacity-0"}
                >
                  <SkillBar skill={skill} isVisible={isVisible} />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6 md:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent/50" />
              Personliga egenskaper
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                  className={`px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Språk</h4>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Svenska
                </span>
                <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
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

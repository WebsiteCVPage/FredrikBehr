import { ExternalLink, Github, Code2, Layers } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "On/Off-boarding System",
    description:
      "Ett komplett HR-system för att hantera on-boarding och off-boarding av anställda. Systemet inkluderar en dashboard med realtidsstatistik, anpassningsbara arbetsflöden med stegvisa processer, rollbaserade ansvar och sökfunktion för anställda.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Kontaktapplikation",
    description:
      "En fullstack kontakthanteringsapplikation byggd med C# och .NET. Applikationen följer SOLID-principerna och har en hållbar, strukturerad kodbas med Entity Framework för databashantering.",
    technologies: ["C#", ".NET", "Entity Framework", "SQL Server", "WPF"],
    featured: true,
  },
  {
    title: "Projektstyrningsapplikation",
    description:
      "En projektstyrningsapplikation med MS SQL för databashantering och Entity Framework Core för att koppla samman presentationslagret med affärslogiken och databasen.",
    technologies: ["C#", ".NET", "MS SQL", "Entity Framework Core"],
  },
  {
    title: "Responsiv Webbplats",
    description:
      "Modern och responsiv webbplats byggd med HTML, CSS och JavaScript. Fokus på användarvänlighet och stilrena gränssnitt som fungerar på alla enheter.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Interaktiv Webblösning",
    description:
      "Interaktiv webbapplikation med JavaScript och React för att skapa dynamiska och användarvänliga gränssnitt.",
    technologies: ["JavaScript", "React", "CSS", "API Integration"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className={`card-hover bg-card rounded-2xl overflow-hidden border border-border ${
      project.featured ? "md:col-span-2" : ""
    }`}
  >
    {/* Project Header */}
    <div className="p-6 lg:p-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="p-3 rounded-xl bg-accent/10">
          {project.featured ? (
            <Layers className="text-accent" size={24} />
          ) : (
            <Code2 className="text-accent" size={24} />
          )}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
        {project.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 hero-section">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Mina Projekt
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            En samling av projekt jag har arbetat med under min utbildning och på egen hand
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Intresserad av att samarbeta?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Jag är alltid öppen för nya möjligheter och spännande projekt
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Kontakta mig
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;

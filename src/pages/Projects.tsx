import { ExternalLink, Github, Code2, Layers, ChevronLeft, ChevronRight, Circle, FolderOpen } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import project images
import onboardingDashboard from "@/assets/onboarding-dashboard.png";
import onboardingFlows from "@/assets/onboarding-flows.png";
import onboardingEditor from "@/assets/onboarding-editor.png";

interface Project {
  period: string;
  title: string;
  course?: string;
  description: string;
  technologies: string[];
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    period: "2024",
    title: "On/Off-boarding System",
    course: "Examensarbete",
    description:
      "Ett komplett HR-system för att hantera on-boarding och off-boarding av anställda. Systemet inkluderar en dashboard med realtidsstatistik, anpassningsbara arbetsflöden med stegvisa processer, rollbaserade ansvar och sökfunktion för anställda.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
    images: [onboardingDashboard, onboardingFlows, onboardingEditor],
    featured: true,
  },
  {
    period: "2024",
    title: "Kontaktapplikation",
    course: "C# & .NET",
    description:
      "En fullstack kontakthanteringsapplikation byggd med C# och .NET. Applikationen följer SOLID-principerna och har en hållbar, strukturerad kodbas med Entity Framework för databashantering.",
    technologies: ["C#", ".NET", "Entity Framework", "SQL Server", "WPF"],
    featured: true,
  },
  {
    period: "2024",
    title: "Projektstyrningsapplikation",
    course: "Databaser & SQL",
    description:
      "En projektstyrningsapplikation med MS SQL för databashantering och Entity Framework Core för att koppla samman presentationslagret med affärslogiken och databasen.",
    technologies: ["C#", ".NET", "MS SQL", "Entity Framework Core"],
  },
  {
    period: "2024",
    title: "Responsiv Webbplats",
    course: "HTML & CSS",
    description:
      "Modern och responsiv webbplats byggd med HTML, CSS och JavaScript. Fokus på användarvänlighet och stilrena gränssnitt som fungerar på alla enheter.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    period: "2024",
    title: "Interaktiv Webblösning",
    course: "JavaScript & React",
    description:
      "Interaktiv webbapplikation med JavaScript och React för att skapa dynamiska och användarvänliga gränssnitt.",
    technologies: ["JavaScript", "React", "CSS", "API Integration"],
  },
];

const BrowserFrame = ({ children, isModal = false }: { children: React.ReactNode; isModal?: boolean }) => (
  <div className={`bg-card rounded-xl overflow-hidden border border-border shadow-2xl ${isModal ? 'w-full max-w-5xl' : ''}`}>
    {/* Browser top bar */}
    <div className="bg-secondary/80 px-4 py-2.5 flex items-center gap-3 border-b border-border">
      <div className="flex gap-2">
        <Circle className="w-3 h-3 fill-destructive text-destructive" />
        <Circle className="w-3 h-3 fill-accent text-accent" />
        <Circle className="w-3 h-3 fill-primary text-primary" />
      </div>
      <div className="flex-1 mx-4">
        <div className="bg-background/60 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono truncate">
          app.obo.se/hr-dashboard
        </div>
      </div>
    </div>
    {children}
  </div>
);

const ProjectTimelineItem = ({ project, index }: { project: Project; index: number }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasImages = project.images && project.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImage((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImage((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <div className="relative pl-0 md:pl-20 group">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full border-4 border-background items-center justify-center bg-accent group-hover:scale-110 transition-transform">
        {project.featured ? (
          <Layers size={12} className="text-accent-foreground" />
        ) : (
          <Code2 size={12} className="text-accent-foreground" />
        )}
      </div>

      {/* Card */}
      <div className="card-hover bg-card rounded-xl p-6 border border-border">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-2">
              <FolderOpen size={14} />
              {project.course || "Projekt"}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {project.period}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Image Gallery with Browser Frame */}
        {hasImages && (
          <>
            <div className="mt-4">
              <BrowserFrame>
                <div 
                  className="relative group/image cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                >
                  <div className="aspect-[16/9] max-h-48 overflow-hidden bg-secondary">
                    <img
                      src={project.images![currentImage]}
                      alt={`${project.title} screenshot ${currentImage + 1}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/image:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover/image:bg-foreground/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover/image:opacity-100 transition-opacity text-sm font-medium bg-background/90 px-3 py-1.5 rounded-full">
                      Klicka för att expandera
                    </span>
                  </div>
                  {project.images!.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-background"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-background"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.images!.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImage ? "bg-accent w-4" : "bg-background/60"
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </BrowserFrame>
            </div>

            {/* Lightbox Modal */}
            <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
              <DialogContent className="max-w-6xl w-[95vw] p-6 bg-background/95 backdrop-blur-xl border-border">
                <BrowserFrame isModal>
                  <div className="relative group">
                    <div className="max-h-[75vh] overflow-auto">
                      <img
                        src={project.images![currentImage]}
                        alt={`${project.title} screenshot ${currentImage + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                    {project.images!.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                          aria-label="Next image"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>
                </BrowserFrame>
                <div className="flex justify-center gap-2 mt-4">
                  {project.images!.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === currentImage ? "bg-accent w-6" : "bg-muted-foreground/40"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
    </div>
  );
};

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
            En samling av projekt jag har arbetat med under min utbildning
          </p>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectTimelineItem key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
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
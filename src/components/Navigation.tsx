import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Hem" },
    { to: "/projects", label: "Projekt" },
    { to: "/about", label: "Om mig" },
    { to: "/contact", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-3 shadow-md border-b border-border"
          : "bg-background/40 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-display text-xl font-bold text-primary transition-colors hover:text-accent"
        >
          Fredrik<span className="text-accent">.</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground active"
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              activeClassName="text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

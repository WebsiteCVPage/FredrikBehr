import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Eye, Type, Settings, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const AccessibilitySettings = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved preferences
    const savedFontSize = localStorage.getItem("fontSize") as "normal" | "large" | "xlarge";
    const savedHighContrast = localStorage.getItem("highContrast") === "true";
    if (savedFontSize) setFontSize(savedFontSize);
    if (savedHighContrast) setHighContrast(savedHighContrast);
  }, []);

  useEffect(() => {
    // Apply font size to document
    const root = document.documentElement;
    root.classList.remove("text-normal", "text-large", "text-xlarge");
    root.classList.add(`text-${fontSize}`);
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }
    localStorage.setItem("highContrast", String(highContrast));
  }, [highContrast]);

  if (!mounted) return null;

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-card border-border hover:bg-accent hover:text-accent-foreground transition-all"
        aria-label="Tillgänglighetsinställningar"
      >
        <Settings className="h-6 w-6" />
      </Button>

      {/* Settings Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed bottom-24 right-6 z-50 w-80 bg-card rounded-2xl border border-border shadow-2xl p-6 animate-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Inställningar
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-accent" />
                  ) : (
                    <Sun className="h-5 w-5 text-accent" />
                  )}
                  <div>
                    <p className="font-medium text-foreground">Mörkt läge</p>
                    <p className="text-sm text-muted-foreground">Lättare för ögonen</p>
                  </div>
                </div>
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Hög kontrast</p>
                    <p className="text-sm text-muted-foreground">Tydligare färger</p>
                  </div>
                </div>
                <Switch
                  checked={highContrast}
                  onCheckedChange={setHighContrast}
                />
              </div>

              {/* Font Size */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Type className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Textstorlek</p>
                    <p className="text-sm text-muted-foreground">Anpassa läsbarheten</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {(["normal", "large", "xlarge"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                        fontSize === size
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-background border-border text-foreground hover:bg-secondary"
                      }`}
                    >
                      {size === "normal" ? "A" : size === "large" ? "A+" : "A++"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccessibilitySettings;

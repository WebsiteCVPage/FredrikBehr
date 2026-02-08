
type AvailabilityNoticeProps = {
  text?: string;
  variant?: "dark" | "light";
  href?: string;
};


export function AvailabilityNotice({
  text = "Tillgänglig för nya projekt",
  variant = "dark",
  href = "/contact"
  
}: AvailabilityNoticeProps) {
  const styles =
    variant === "light"
      ? "bg-accent/60 text-white border-black/50"
      : "bg-accent/10 text-foreground border-accent/20";

  return (
    <div className="mt-16 text-center">
      <div
        className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${styles}`}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
        <span className="font-medium">
          {text}
        </span>
      </div>
    </div>
  );
}

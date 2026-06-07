type AvailabilityNoticeProps = {
  text?: string;
  href?: string;
  variant?: "dark" | "light";
};

export function AvailabilityNotice({
  text = "Tillgänglig för utvecklarroller och projekt",
  href,
  variant = "dark",
}: AvailabilityNoticeProps) {
  const styles =
    variant === "light"
      ? "bg-accent/60 text-white border-black/50"
      : "bg-accent/10 text-foreground border-accent/20";
  const content = (
    <>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
      </span>
      <span className="font-medium">{text}</span>
    </>
  );

  return (
    <div className="mt-16 text-center">
      {href ? (
        <a
          href={href}
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${styles}`}
        >
          {content}
        </a>
      ) : (
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${styles}`}
        >
          {content}
        </div>
      )}
    </div>
  );
}

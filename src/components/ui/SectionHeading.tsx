import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  sectionNumber?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  sectionNumber,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      {(eyebrow || sectionNumber) && (
        <div
          className={cn(
            "mb-4 flex items-center gap-4",
            align === "center" && "justify-center",
          )}
        >
          {sectionNumber && (
            <span className="font-mono text-[10px] tracking-[0.3em] text-kreeda-blue">
              {sectionNumber}
            </span>
          )}
          {eyebrow && (
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-gray">
              {eyebrow}
            </span>
          )}
          <span
            className={cn(
              "hidden h-px max-w-16 bg-kreeda-blue/40 sm:block",
              align === "center" ? "w-16 shrink-0" : "flex-1",
            )}
          />
        </div>
      )}
      <h2
        className={cn(
          "max-w-3xl text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl whitespace-pre-line",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-xl text-sm uppercase tracking-[0.25em] text-muted-gray md:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
  decorative?: boolean;
};

export function BrandLogo({
  className,
  height = 40,
  priority = false,
  decorative = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-white",
        className,
      )}
    >
      {/* Native img: Next/Image + w-auto was collapsing the mark, and the file was a JPEG named .png. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt={decorative ? "" : "Kreeda Studios"}
        width={1208}
        height={1302}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="block max-w-none object-contain"
        style={{ height, width: "auto" }}
      />
    </span>
  );
}

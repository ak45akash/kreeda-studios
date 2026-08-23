import { cn } from "@/lib/utils";

/** Intrinsic logo pixel size (portrait mark on white plate). */
const LOGO_W = 1208;
const LOGO_H = 1302;

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
  const width = Math.round((height * LOGO_W) / LOGO_H);

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-white",
        className,
      )}
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      {/* Native img with locked box — Next/Image + width:auto was collapsing to 0. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt={decorative ? "" : "Kreeda Studios"}
        width={LOGO_W}
        height={LOGO_H}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="pointer-events-none block h-full w-full object-contain"
        draggable={false}
      />
    </span>
  );
}

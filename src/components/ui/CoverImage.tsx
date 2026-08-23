import { cn } from "@/lib/utils";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Full-bleed cover image.
 * Uses a native <img> — Next's image optimizer was returning corrupt
 * octet-stream payloads on this project volume, which blanked every section.
 */
export function CoverImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: CoverImageProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imageClassName,
        )}
        draggable={false}
      />
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2 min-h-[360px] md:min-h-[520px]",
  medium: "min-h-[280px] md:min-h-[320px]",
  wide: "md:col-span-2 min-h-[280px] md:min-h-[360px]",
};

export function Portfolio() {
  return (
    <section id="work" className="relative bg-near-black py-24 md:py-32">
      <div className="noise-texture absolute inset-0 opacity-[0.03]" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="04 / SELECTED WORK"
          eyebrow="Portfolio"
          title="SELECTED WORK"
          subtitle="A GLIMPSE INTO WHAT WE CAN BUILD."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className={cn(sizeClasses[item.size])}
            >
              <article
                className={cn(
                  "group relative h-full overflow-hidden border border-white/5",
                  sizeClasses[item.size],
                )}
                data-cursor
                data-cursor-label="VIEW"
              >
                <CoverImage
                  src={item.image}
                  alt={`${item.title} — ${item.label} study`}
                  imageClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/35 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                  <span className="mb-3 inline-flex w-fit border border-kreeda-blue/40 bg-near-black/50 px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-kreeda-blue">
                    {item.label}
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-gray">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-xl font-medium text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-gray opacity-90">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.software.map((tool) => (
                      <span
                        key={tool}
                        className="text-[9px] uppercase tracking-wider text-metallic-gray/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="secondary">
            <Link href="#work">
              VIEW ALL WORK
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

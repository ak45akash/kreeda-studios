"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative bg-near-black py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kreeda-blue/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="02 / SERVICES"
          eyebrow="Our Services"
          title="WHAT WE CREATE"
          subtitle="FROM FIRST FRAME TO FINAL RENDER."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.number} delay={i * 0.05}>
                <article
                  className={cn(
                    "group relative flex h-full min-h-[340px] flex-col overflow-hidden border border-white/5 bg-dark-surface/30 transition-all duration-500",
                    "hover:-translate-y-1 hover:border-kreeda-blue/50",
                  )}
                  data-cursor
                  data-cursor-label="VIEW"
                >
                  <div className="relative h-36 overflow-hidden">
                    <CoverImage
                      src={service.image}
                      alt=""
                      imageClassName="transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/20 to-transparent" />
                  </div>
                  <div className="relative z-10 flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <span className="font-mono text-[10px] tracking-widest text-kreeda-blue">
                        {service.number}
                      </span>
                      <Icon className="h-5 w-5 text-muted-gray transition-all duration-300 group-hover:scale-110 group-hover:text-kreeda-blue" />
                    </div>
                    <h3 className="mb-3 text-lg font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-gray">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-kreeda-blue">
                      <span>Explore</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

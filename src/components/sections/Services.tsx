"use client";

import { serviceGroups, services } from "@/data/services";
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
          subtitle="FROM CINEMATIC WORLDS TO SHIPPED WEB PRODUCTS."
        />

        <div className="space-y-16">
          {serviceGroups.map((group) => {
            const groupServices = services.filter(
              (service) => service.category === group.id,
            );

            return (
              <div key={group.id}>
                <Reveal>
                  <div className="mb-6 flex flex-col gap-2 border-l border-kreeda-blue/50 pl-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-kreeda-blue">
                        {group.id === "creative" ? "01" : "02"} / {group.label}
                      </p>
                      <h3 className="mt-2 text-xl font-medium text-white md:text-2xl">
                        {group.label}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm text-muted-gray">
                      {group.subtitle}
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {groupServices.map((service, i) => {
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
                          </div>
                        </article>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

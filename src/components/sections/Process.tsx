"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "@/data/process";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced || !lineRef.current || !sectionRef.current) return;

      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: true,
            },
          },
        );
      }, sectionRef);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-deep-charcoal py-24 md:py-32"
    >
      <CoverImage
        src="/images/process.jpg"
        alt=""
        imageClassName="opacity-30 saturate-75"
      />
      <div className="absolute inset-0 bg-deep-charcoal/80" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="03 / PROCESS"
          eyebrow="Creative Pipeline"
          title={"FROM BRIEF TO\nFINAL FRAME."}
        />

        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-8 h-px origin-left bg-white/10">
            <div
              ref={lineRef}
              className="h-full w-full origin-left bg-gradient-to-r from-kreeda-blue to-electric-blue"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <div className="grid grid-cols-5 gap-6 pt-16">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="mb-6 flex h-4 w-4 items-center justify-center rounded-full border border-kreeda-blue bg-near-black">
                    <div className="h-1.5 w-1.5 rounded-full bg-kreeda-blue" />
                  </div>
                  <span className="font-mono text-[10px] text-kreeda-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-sm font-medium tracking-wide text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-gray">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative space-y-8 border-l border-white/10 pl-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-kreeda-blue bg-kreeda-blue" />
                  <span className="font-mono text-[10px] text-kreeda-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-1 text-base font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-gray">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

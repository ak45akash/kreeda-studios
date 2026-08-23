"use client";

import { Play } from "lucide-react";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Showreel() {
  return (
    <section className="relative bg-deep-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="05 / SHOWREEL"
          eyebrow="Showreel"
          title="THE SHOWREEL"
          align="center"
        />

        <Reveal>
          <div className="relative mx-auto aspect-video max-w-5xl overflow-hidden border border-white/10 bg-near-black">
            <CoverImage
              src="/images/showreel-still.png"
              alt="Kreeda Studios showreel placeholder"
            />
            <div className="absolute inset-0 bg-near-black/45" aria-hidden />
            <div className="scan-lines absolute inset-0 opacity-20" aria-hidden />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                type="button"
                className="group flex h-20 w-20 items-center justify-center rounded-full border border-kreeda-blue/50 bg-kreeda-blue/10 transition-all hover:scale-105 hover:bg-kreeda-blue/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kreeda-blue"
                aria-label="Showreel coming soon"
                disabled
              >
                <Play className="ml-1 h-8 w-8 text-kreeda-blue transition-transform group-hover:scale-110" />
              </button>
              <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-muted-gray">
                SHOWREEL / COMING SOON
              </p>
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-muted-gray/50">
              REEL_001 / PLACEHOLDER
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

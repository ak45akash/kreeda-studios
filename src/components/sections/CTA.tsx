"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-near-black py-32 md:py-40">
      <CoverImage
        src="/images/hero-worlds.png"
        alt=""
        className="opacity-35"
      />
      <div className="absolute inset-0 bg-near-black/70" aria-hidden />
      <div className="cta-glow absolute inset-0" aria-hidden />
      <div className="cta-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="noise-texture absolute inset-0 opacity-[0.04]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-8 flex justify-center">
            <BrandLogo height={64} decorative className="px-2 py-1.5 opacity-90" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            HAVE AN IDEA?
            <br />
            <span className="text-kreeda-blue">LET&apos;S BUILD IT.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-muted-gray">
            Whether it&apos;s a cinematic world, a product site, or an immersive
            web experience — tell us what you&apos;re building.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <Link href="#contact">
                START A PROJECT
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">
                CONTACT US
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent" />
    </section>
  );
}

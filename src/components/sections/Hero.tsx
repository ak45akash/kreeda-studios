"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-near-black"
    >
      <CoverImage
        src="/images/hero-worlds.png"
        alt=""
        priority
        imageClassName="scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-near-black via-near-black/80 to-near-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-near-black/40" />
      <div className="hero-grid absolute inset-0 opacity-25" aria-hidden />
      <div className="noise-texture absolute inset-0 opacity-[0.05]" aria-hidden />

      {!reducedMotion && (
        <div className="hero-particles absolute inset-0 opacity-40" aria-hidden />
      )}

      <div className="absolute inset-x-0 top-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-[10px] tracking-[0.4em] text-muted-gray/60">
          SYS.001 / HERO
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-kreeda-blue sm:text-xs">
            3D • VFX • WEB • REAL-TIME
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-white">
            WE BUILD WORLDS
            <br />
            <span className="text-metallic-gray">THAT MOVE.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-gray sm:text-lg">
            Cinematic production and modern web engineering — 3D, VFX, real-time
            experiences and product-grade sites with Next.js, WordPress, Laravel,
            MERN and Three.js.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild variant="primary" size="lg">
              <Link href="#contact" data-cursor data-cursor-label="GO">
                START A PROJECT
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#work" data-cursor>
                EXPLORE OUR WORK
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-16 text-[10px] uppercase tracking-[0.3em] text-muted-gray/70">
            CREATIVE PRODUCTION / WEB DEVELOPMENT / IMMERSIVE EXPERIENCES
          </p>
        </Reveal>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-gray transition-colors hover:text-kreeda-blue"
          aria-label="Scroll to about section"
        >
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </Link>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kreeda-blue/50 to-transparent" />
    </section>
  );
}

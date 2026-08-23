"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

type PreloaderProps = {
  onComplete: () => void;
};

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);

      if (elapsed >= duration) {
        onComplete();
        return;
      }

      requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-near-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative mb-8">
        <div className="absolute -inset-8 border border-kreeda-blue/20" />
        <div className="scan-line absolute inset-x-0 top-0 h-px bg-electric-blue/80" />
        <BrandLogo height={128} priority className="relative px-2 py-2" />
      </div>
      <div className="w-48">
        <div className="mb-2 flex justify-between font-mono text-[10px] tracking-widest text-muted-gray">
          <span>INITIALIZING</span>
          <span>{progress}%</span>
        </div>
        <div className="h-px w-full bg-dark-surface">
          <motion.div
            className="h-full bg-kreeda-blue"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [complete, setComplete] = useState(false);
  const reducedMotion = useReducedMotion();
  const loading = Boolean(!reducedMotion && !complete);

  return (
    <>
      {loading && <Preloader onComplete={() => setComplete(true)} />}
      <div className={cn(loading && "overflow-hidden")}>{children}</div>
    </>
  );
}

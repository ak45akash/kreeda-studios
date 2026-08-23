import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const capabilities = [
  { label: "3D", subtitle: "Animation & Modelling" },
  { label: "VFX", subtitle: "Cinematic Visual Effects" },
  { label: "REALTIME", subtitle: "Unity & Unreal" },
  { label: "POST", subtitle: "Editing & Motion" },
];

export function About() {
  return (
    <section id="about" className="relative bg-deep-charcoal py-24 md:py-32">
      <div className="noise-texture absolute inset-0 opacity-[0.03]" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="01 / THE STUDIO"
          eyebrow="About"
          title={"FROM IMAGINATION\nTO THE SCREEN."}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <CoverImage
                src="/images/about-studio.png"
                alt="Kreeda Studios production environment"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 to-transparent" />
              <p className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.3em] text-kreeda-blue">
                STUDIO / PRODUCTION FLOOR
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="space-y-6 text-base leading-relaxed text-muted-gray md:text-lg">
                <p>
                  Kreeda Studios is a multidisciplinary creative studio combining
                  art, animation, visual effects, design and real-time technology
                  to create compelling digital experiences.
                </p>
                <p>
                  We work across 3D animation, modelling, VFX, video editing,
                  architectural visualization, 2D animation and interactive
                  production using industry-standard creative and game-development
                  tools.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <Reveal key={cap.label} delay={i * 0.08}>
                  <div className="group relative border border-white/5 bg-dark-surface/50 p-5 transition-colors hover:border-kreeda-blue/40 md:p-6">
                    <span className="absolute right-3 top-3 font-mono text-[9px] text-kreeda-blue/50">
                      0{i + 1}
                    </span>
                    <p className="text-xl font-medium tracking-tight text-white md:text-2xl">
                      {cap.label}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-gray">
                      {cap.subtitle}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

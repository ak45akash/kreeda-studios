import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Creative + Technical",
    description:
      "Art direction, production pipelines and full-stack engineering under one roof.",
  },
  {
    title: "Built for Motion",
    description:
      "We think in frames, interaction, light, composition and product flow.",
  },
  {
    title: "Web & Real-Time Ready",
    description:
      "From Unity and Unreal to Next.js, Laravel, MERN and Three.js experiences.",
  },
  {
    title: "Production Mindset",
    description:
      "Clean assets, scalable code, efficient workflows and dependable delivery.",
  },
];

export function WhyKreeda() {
  return (
    <section className="relative bg-deep-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="07 / WHY KREEDA"
          eyebrow="Value"
          title="WHY KREEDA"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="relative min-h-[280px] overflow-hidden border border-white/10 lg:min-h-full">
              <CoverImage
                src="/images/about-studio.png"
                alt="Creative and technical production at Kreeda Studios"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/20 to-transparent" />
              <p className="absolute bottom-5 left-5 max-w-xs text-sm text-metallic-gray">
                One studio for cinematic worlds, immersive web and shipped
                products.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="group h-full border border-white/5 p-6 transition-colors hover:border-kreeda-blue/30 md:p-8">
                  <span className="font-mono text-[10px] text-kreeda-blue">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-gray">
                    {value.description}
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

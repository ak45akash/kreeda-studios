import {
  creativeTechnologies,
  marqueeTags,
  webTechnologies,
} from "@/data/technologies";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TechCloud({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <p className="mb-4 text-center text-[10px] uppercase tracking-[0.3em] text-kreeda-blue">
        {title}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((tech) => (
          <span
            key={tech}
            className="border border-white/10 bg-near-black/40 px-4 py-2 text-xs uppercase tracking-[0.15em] text-metallic-gray backdrop-blur-sm transition-colors hover:border-kreeda-blue/40 hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-near-black py-24 md:py-32">
      <CoverImage
        src="/images/technology.jpg"
        alt=""
        imageClassName="opacity-25"
      />
      <div className="absolute inset-0 bg-near-black/75" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kreeda-blue/30 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="06 / TECHNOLOGY"
          eyebrow="Capabilities"
          title="TOOLS OF THE TRADE"
        />

        <Reveal>
          <div className="mb-12 space-y-10">
            <TechCloud title="Creative Production" items={creativeTechnologies} />
            <TechCloud title="Web Development" items={webTechnologies} />
          </div>
        </Reveal>

        <div className="relative overflow-hidden border-y border-white/5 py-4">
          <div className="marquee-track flex w-max gap-12">
            {[...marqueeTags, ...marqueeTags, ...marqueeTags].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="flex items-center gap-12 text-sm uppercase tracking-[0.4em] text-muted-gray/60"
              >
                {tag}
                <span className="text-kreeda-blue">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

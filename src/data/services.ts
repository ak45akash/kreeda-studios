import {
  Box,
  Clapperboard,
  Cpu,
  Film,
  Layers,
  MonitorPlay,
  PenTool,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "3D Animation",
    description:
      "Character animation, product animation, cinematic sequences, explainer animation and environment animation.",
    icon: Film,
    accent: "from-kreeda-blue/20 to-transparent",
    image: "/images/portfolio/product-animation.png",
  },
  {
    number: "02",
    title: "3D Modelling",
    description:
      "Characters, props, products, environments, assets and production-ready models.",
    icon: Box,
    accent: "from-electric-blue/20 to-transparent",
    image: "/images/portfolio/sci-fi-character.png",
  },
  {
    number: "03",
    title: "VFX",
    description:
      "Compositing, simulations, effects, cleanup, tracking, environment enhancement and cinematic effects.",
    icon: Sparkles,
    accent: "from-kreeda-blue/25 to-transparent",
    image: "/images/hero-worlds.png",
  },
  {
    number: "04",
    title: "Video Editing",
    description:
      "Professional editing, pacing, transitions, sound synchronization, motion graphics and final delivery.",
    icon: Clapperboard,
    accent: "from-electric-blue/15 to-transparent",
    image: "/images/showreel-still.png",
  },
  {
    number: "05",
    title: "2D Animation",
    description:
      "Motion graphics, explainer videos, illustrations, typography animation and stylized sequences.",
    icon: PenTool,
    accent: "from-kreeda-blue/20 to-transparent",
    image: "/images/services/motion.jpg",
  },
  {
    number: "06",
    title: "Architectural Visualization",
    description:
      "Interior visualization, exterior visualization, 3D environments, walkthroughs and presentation renders.",
    icon: Layers,
    accent: "from-electric-blue/20 to-transparent",
    image: "/images/archviz-interior.png",
  },
  {
    number: "07",
    title: "Unity Development",
    description:
      "Real-time 3D experiences, interactive environments, simulations and game-ready experiences.",
    icon: Cpu,
    accent: "from-kreeda-blue/15 to-transparent",
    image: "/images/portfolio/realtime-experience.png",
  },
  {
    number: "08",
    title: "Unreal Engine",
    description:
      "Cinematic environments, real-time visualization, virtual production and interactive experiences.",
    icon: MonitorPlay,
    accent: "from-electric-blue/25 to-transparent",
    image: "/images/portfolio/fantasy-world.png",
  },
];

import {
  Box,
  Clapperboard,
  Code2,
  Cpu,
  Film,
  Globe,
  Layers,
  LayoutTemplate,
  MonitorPlay,
  PenTool,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "creative" | "web";

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  image: string;
  category: ServiceCategory;
};

export const serviceGroups = [
  {
    id: "creative" as const,
    label: "Creative Production",
    subtitle: "Cinematic worlds, motion and real-time experiences.",
  },
  {
    id: "web" as const,
    label: "Web Development",
    subtitle: "Modern products, platforms and immersive interfaces.",
  },
] as const;

export const services: Service[] = [
  {
    number: "01",
    title: "3D Animation",
    description:
      "Character animation, product animation, cinematic sequences, explainer animation and environment animation.",
    icon: Film,
    accent: "from-kreeda-blue/20 to-transparent",
    image: "/images/portfolio/product-animation.png",
    category: "creative",
  },
  {
    number: "02",
    title: "3D Modelling",
    description:
      "Characters, props, products, environments, assets and production-ready models.",
    icon: Box,
    accent: "from-electric-blue/20 to-transparent",
    image: "/images/portfolio/sci-fi-character.png",
    category: "creative",
  },
  {
    number: "03",
    title: "VFX",
    description:
      "Compositing, simulations, effects, cleanup, tracking, environment enhancement and cinematic effects.",
    icon: Sparkles,
    accent: "from-kreeda-blue/25 to-transparent",
    image: "/images/hero-worlds.png",
    category: "creative",
  },
  {
    number: "04",
    title: "Video Editing",
    description:
      "Professional editing, pacing, transitions, sound synchronization, motion graphics and final delivery.",
    icon: Clapperboard,
    accent: "from-electric-blue/15 to-transparent",
    image: "/images/services/editing.jpg",
    category: "creative",
  },
  {
    number: "05",
    title: "2D Animation",
    description:
      "Motion graphics, explainer videos, illustrations, typography animation and stylized sequences.",
    icon: PenTool,
    accent: "from-kreeda-blue/20 to-transparent",
    image: "/images/services/motion.jpg",
    category: "creative",
  },
  {
    number: "06",
    title: "Architectural Visualization",
    description:
      "Interior visualization, exterior visualization, 3D environments, walkthroughs and presentation renders.",
    icon: Layers,
    accent: "from-electric-blue/20 to-transparent",
    image: "/images/archviz-interior.png",
    category: "creative",
  },
  {
    number: "07",
    title: "Unity Development",
    description:
      "Real-time 3D experiences, interactive environments, simulations and game-ready experiences.",
    icon: Cpu,
    accent: "from-kreeda-blue/15 to-transparent",
    image: "/images/portfolio/realtime-experience.png",
    category: "creative",
  },
  {
    number: "08",
    title: "Unreal Engine",
    description:
      "Cinematic environments, real-time visualization, virtual production and interactive experiences.",
    icon: MonitorPlay,
    accent: "from-electric-blue/25 to-transparent",
    image: "/images/portfolio/fantasy-world.png",
    category: "creative",
  },
  {
    number: "09",
    title: "Next.js & React",
    description:
      "High-performance marketing sites, product apps and design systems with Next.js, React and ShadCN UI.",
    icon: Code2,
    accent: "from-kreeda-blue/20 to-transparent",
    image: "/images/services/nextjs.jpg",
    category: "web",
  },
  {
    number: "10",
    title: "WordPress & PHP",
    description:
      "Custom WordPress themes, plugins, CMS builds and maintainable PHP websites for growing brands.",
    icon: Globe,
    accent: "from-electric-blue/20 to-transparent",
    image: "/images/services/wordpress.jpg",
    category: "web",
  },
  {
    number: "11",
    title: "Laravel Applications",
    description:
      "Secure backend systems, APIs, dashboards and business platforms built with Laravel and modern PHP.",
    icon: Server,
    accent: "from-kreeda-blue/25 to-transparent",
    image: "/images/services/laravel.jpg",
    category: "web",
  },
  {
    number: "12",
    title: "MERN Stack",
    description:
      "Full-stack MongoDB, Express, React and Node applications for products, portals and SaaS workflows.",
    icon: Layers,
    accent: "from-electric-blue/15 to-transparent",
    image: "/images/services/mern.jpg",
    category: "web",
  },
  {
    number: "13",
    title: "Immersive Web 3D",
    description:
      "Browser experiences with Three.js and React Three Fiber — product viewers, interactive scenes and webGL storytelling.",
    icon: Box,
    accent: "from-kreeda-blue/20 to-transparent",
    image: "/images/services/threejs.jpg",
    category: "web",
  },
  {
    number: "14",
    title: "UI Systems & ShadCN",
    description:
      "Accessible component libraries, design tokens and polished product interfaces powered by ShadCN and Tailwind.",
    icon: LayoutTemplate,
    accent: "from-electric-blue/20 to-transparent",
    image: "/images/services/ui-systems.jpg",
    category: "web",
  },
];

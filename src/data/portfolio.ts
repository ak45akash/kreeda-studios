export type PortfolioLabel = "CONCEPT" | "INTERNAL STUDY" | "DEMO";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  software: string[];
  label: PortfolioLabel;
  size: "large" | "medium" | "wide";
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "cinematic-environment",
    title: "Cinematic Environment",
    category: "Environment Design",
    description: "Atmospheric sci-fi landscape with volumetric lighting study.",
    software: ["Blender", "Unreal Engine"],
    label: "CONCEPT",
    size: "large",
    image: "/images/portfolio/cinematic-environment.jpg",
  },
  {
    id: "sci-fi-character",
    title: "Sci-Fi Character",
    category: "3D Character",
    description: "Hard-surface character design with rigging exploration.",
    software: ["Blender", "Substance Painter"],
    label: "INTERNAL STUDY",
    size: "medium",
    image: "/images/portfolio/sci-fi-character.png",
  },
  {
    id: "architectural-interior",
    title: "Architectural Interior",
    category: "Archviz",
    description: "Luxury interior visualization with natural light simulation.",
    software: ["Blender", "Unreal Engine"],
    label: "INTERNAL STUDY",
    size: "medium",
    image: "/images/portfolio/architectural-interior.png",
  },
  {
    id: "product-animation",
    title: "Product Animation",
    category: "Motion Study",
    description: "Premium product reveal with cinematic camera movement.",
    software: ["Cinema 4D", "After Effects"],
    label: "DEMO",
    size: "wide",
    image: "/images/portfolio/product-animation.png",
  },
  {
    id: "fantasy-world",
    title: "Fantasy World",
    category: "Environment",
    description: "Expansive fantasy biome with procedural terrain elements.",
    software: ["Blender", "Houdini"],
    label: "CONCEPT",
    size: "medium",
    image: "/images/portfolio/fantasy-world.png",
  },
  {
    id: "realtime-experience",
    title: "Real-Time Experience",
    category: "Unreal Engine",
    description: "Interactive environment prototype with dynamic lighting.",
    software: ["Unreal Engine", "Blender"],
    label: "DEMO",
    size: "medium",
    image: "/images/portfolio/realtime-experience.png",
  },
];

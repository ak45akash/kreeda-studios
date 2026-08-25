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
    id: "nextjs-product-site",
    title: "Next.js Product Site",
    category: "Web Development",
    description:
      "High-performance marketing surface with ShadCN UI and motion-led storytelling.",
    software: ["Next.js", "ShadCN", "Tailwind CSS"],
    label: "DEMO",
    size: "medium",
    image: "/images/portfolio/web-nextjs.jpg",
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
    id: "immersive-webgl",
    title: "Immersive WebGL Scene",
    category: "Three.js",
    description:
      "Interactive browser experience exploring lighting, camera and material systems.",
    software: ["Three.js", "React Three Fiber"],
    label: "CONCEPT",
    size: "medium",
    image: "/images/portfolio/web-threejs.jpg",
  },
  {
    id: "laravel-dashboard",
    title: "Laravel Dashboard",
    category: "Full-Stack",
    description:
      "Secure admin workflows and API-backed product surfaces for operations teams.",
    software: ["Laravel", "PHP", "MySQL"],
    label: "INTERNAL STUDY",
    size: "medium",
    image: "/images/portfolio/web-laravel.jpg",
  },
  {
    id: "architectural-interior",
    title: "Architectural Interior",
    category: "Archviz",
    description:
      "Luxury interior visualization with natural light and material studies.",
    software: ["Blender", "Unreal Engine"],
    label: "INTERNAL STUDY",
    size: "medium",
    image: "/images/portfolio/architectural-interior.png",
  },
  {
    id: "wordpress-brand-site",
    title: "WordPress Brand Site",
    category: "CMS / PHP",
    description:
      "Custom theme build with editorial layouts, CMS workflows and SEO-ready structure.",
    software: ["WordPress", "PHP", "JavaScript"],
    label: "DEMO",
    size: "medium",
    image: "/images/services/wordpress.jpg",
  },
];

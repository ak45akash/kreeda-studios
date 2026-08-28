export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kreedastudios.com";

export const SITE = {
  name: "Kreeda Studios",
  title:
    "Kreeda Studios | Creative Production, Web Development & Real-Time Experiences",
  description:
    "Kreeda Studios builds cinematic 3D worlds and modern web products — from animation, VFX and Unreal/Unity to Next.js, WordPress, Laravel, MERN and immersive Three.js experiences.",
  tagline: "Creative production, web development and real-time experiences.",
  url: SITE_URL,
  keywords: [
    "3D animation studio",
    "VFX studio",
    "web development agency",
    "Next.js development",
    "Unity development",
    "Unreal Engine",
    "Three.js experiences",
    "WordPress development",
    "Laravel development",
    "MERN stack",
    "architectural visualization",
    "real-time 3D",
    "creative production studio",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_SERVICES = [
  "3D Animation & VFX",
  "Unity & Unreal",
  "Web Development",
  "Next.js & MERN",
  "WordPress & Laravel",
  "Three.js Experiences",
] as const;

export const PROJECT_TYPES = [
  "3D Animation",
  "3D Modelling",
  "VFX",
  "Video Editing",
  "2D Animation",
  "Architectural Visualization",
  "Unity",
  "Unreal Engine",
  "Web Development",
  "WordPress / PHP",
  "Next.js / React",
  "MERN / Laravel",
  "Three.js / Immersive Web",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
] as const;

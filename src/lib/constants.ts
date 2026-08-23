export const SITE = {
  name: "Kreeda Studios",
  title:
    "Kreeda Studios | 3D Animation, VFX, 3D Modelling & Creative Production",
  description:
    "Kreeda Studios creates 3D animation, 3D modelling, VFX, video editing, architectural visualization, 2D animation and real-time experiences using Unity and Unreal Engine.",
  url: "https://kreedastudios.com",
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
  "3D Animation",
  "3D Modelling",
  "VFX",
  "Video Editing",
  "Architectural Visualization",
  "Unity & Unreal",
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
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
] as const;

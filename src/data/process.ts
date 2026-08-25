export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Clarify goals, audience, scope and whether the work is cinematic, interactive or product-led.",
  },
  {
    number: "02",
    title: "CONCEPT",
    description:
      "Define visual direction, architecture, references and the creative or technical approach.",
  },
  {
    number: "03",
    title: "BUILD",
    description:
      "Model, animate, design interfaces and develop the product — from frames to full-stack systems.",
  },
  {
    number: "04",
    title: "REFINE",
    description:
      "Polish lighting, VFX, UX, performance, accessibility and production quality across every layer.",
  },
  {
    number: "05",
    title: "DELIVER",
    description:
      "Ship final renders, optimized web builds, CMS handoff and dependable launch support.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the brief, audience and objective.",
  },
  {
    number: "02",
    title: "CONCEPT",
    description: "Develop visual direction, references and creative approach.",
  },
  {
    number: "03",
    title: "BUILD",
    description: "Model, design, animate and construct the world.",
  },
  {
    number: "04",
    title: "REFINE",
    description: "Lighting, materials, VFX, compositing, editing and polish.",
  },
  {
    number: "05",
    title: "DELIVER",
    description: "Final renders, edits and optimized deliverables.",
  },
];

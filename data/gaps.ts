export type Gap = {
    title: string;
    href?: string;
    cx: number;
    cy: number;
    scale: number;
    hue: number;
  };
  
  export const gaps: Gap[] = [
    { title: "Tokenization Inequality", href: "/gaps/tokenization", cx: -0.7453, cy: 0.1127, scale: 0.02, hue: 180 },
    { title: "Screen Readers", href: "/gaps/screen-readers", cx: -0.16, cy: 1.0405, scale: 0.06, hue: 270 },
    { title: "Motor Accessibility", href: "/gaps/motor-accessibility", cx: -1.25066, cy: 0.02012, scale: 0.005, hue: 40 },
    { title: "Code-Switching", href: "/gaps/code-switching", cx: -0.7269, cy: 0.1889, scale: 0.01, hue: 300 },
    { title: "Alternative input modalities", cx: -0.10109636, cy: 0.95628651, scale: 0.005, hue: 0 },
    { title: "Cognitive load and plain language", cx: -0.5251993, cy: 0.5251993, scale: 0.03, hue: 100 },
    { title: "Deaf, HoH, captions and ASL", cx: -0.74364389, cy: 0.13182590, scale: 0.008, hue: 60 },
    { title: "Neurodiverse minds and output preferences", cx: 0.00164372, cy: 0.82246763, scale: 0.006, hue: 130 },
    { title: "ASR bias and non-standard speech", cx: -1.7687788, cy: 0.0017388, scale: 0.004, hue: 350 },
    { title: "Low-resource languages", cx: 0.2925, cy: 0.0149, scale: 0.01, hue: 330 },
    { title: "Script diversity and RTL languages", cx: -0.235125, cy: 0.827215, scale: 0.004, hue: 200 },
    { title: "AAC devices and LLM integration", cx: -0.7746806, cy: 0.1374168, scale: 0.008, hue: 210 },
    { title: "Assistive tech, banned by proxy", cx: -1.2568855, cy: 0.3803210, scale: 0.005, hue: 240 },
  ];
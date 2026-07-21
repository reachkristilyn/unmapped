import MandelbrotTile from "@/components/MandelbrotTile";

export const metadata = { title: "Accessibility Gaps" };

const topics = [
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

export default function FullMap() {
  return (
    <main id="main" className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold [font-family:var(--font-atkinson)]">Accessibility Gaps</h1>
        <p className="mt-4 text-lg text-emerald-100">
          Every gap in the series. The linked ones are live; the rest are charted and on the way.
        </p>

        <ul className="mt-8 space-y-4 list-none">
          {topics.map(t => (
            <li key={t.title} className="relative aspect-[5/2] overflow-hidden rounded-xl">
              <MandelbrotTile cx={t.cx} cy={t.cy} scale={t.scale} hue={t.hue} />
              {t.href ? (
                
                  href={t.href}
                  className="absolute inset-0 flex items-center justify-center focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white"
                >
                  <span className="rounded-lg bg-emerald-950/90 px-4 py-2 text-white text-center font-semibold [font-family:var(--font-atkinson)]">
                    {t.title}
                  </span>
                </a>
              ) : (
                <p className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-lg bg-emerald-950/75 px-4 py-2 text-emerald-200 text-sm text-center">
                    {t.title} · uncharted
                  </span>
                </p>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-lg text-emerald-100">
          Have a story or topic to add?{" "}
          <a href="mailto:kristi.eaton@columbia.edu" className="underline underline-offset-4 hover:text-white">
            Send it my way!
          </a>
        </p>
      </article>
    </main>
  );
}
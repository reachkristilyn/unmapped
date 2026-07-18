import Mandelbrot from "@/components/Mandelbrot";
import MandelbrotTile from "@/components/MandelbrotTile";

const tiles = [
  { title: "Tokenization Inequality", href: "/gaps/tokenization", cx: -0.7453, cy: 0.1127, scale: 0.02, hue: 180 },
  { title: "Screen Readers", href: "/gaps/screen-readers", cx: -0.16, cy: 1.0405, scale: 0.06, hue: 270 },
  { title: "Motor Accessibility", href: "/gaps/motor-accessibility", cx: -1.25066, cy: 0.02012, scale: 0.005, hue: 40 },
  { title: "Low-resource languages", cx: 0.2925, cy: 0.0149, scale: 0.01, hue: 330 },
  { title: "Cognitive load & plain language", cx: -0.5251993, cy: 0.5251993, scale: 0.03, hue: 100 },
  { title: "AAC devices & LLMs", cx: -0.7746806, cy: 0.1374168, scale: 0.008, hue: 210 },
];

export default function Home() {
  return (
<main id="main" className="relative h-[85vh] bg-black text-white">
        <div className="absolute inset-0">
        <Mandelbrot />
      </div>
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-6 py-4">
        <h1 className="text-5xl font-bold text-emerald-950 [font-family:var(--font-atkinson)]">The Unmapped</h1>          <p className="mt-4 text-lg text-emerald-900 max-w-xl">
            Exploring the accessibility gaps in AI &amp; the technology around it.
          </p>
        </div>
        {/*<p className="pointer-events-none absolute bottom-8 left-0 right-0 text-center text-emerald-100 text-sm px-6">
          Essays, interviews &amp; interactive demos that explain the problems and explore better solutions.
  </p>*/}
      </div>
      <section className="relative z-10 bg-emerald-950 px-6 py-16">
        <ul className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3 list-none">
          {tiles.map(t => (
            <li key={t.title} className="relative aspect-square rounded-2xl overflow-hidden">
              <MandelbrotTile cx={t.cx} cy={t.cy} scale={t.scale} hue={t.hue} />
              {t.href ? (
                <a href={t.href}
                  className="absolute bottom-3 left-3 rounded-lg bg-emerald-950/90 px-3 py-1.5 text-white font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [font-family:var(--font-atkinson)]">
                  {t.title}
                </a>
              ) : (
                <p className="absolute bottom-3 left-3 rounded-lg bg-emerald-950/75 px-3 py-1.5 text-emerald-200 text-sm">
                  {t.title} · uncharted
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
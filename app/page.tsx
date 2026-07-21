import MandelbrotTile from "@/components/MandelbrotTile";
import { gaps } from "@/data/gaps";

export default function Home() {
  return (
<main id="main" className="bg-black text-white">
      <div className="relative h-[48vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
          <MandelbrotTile cx={-0.75} cy={0} scale={1.75} hue={160} />
        </div>
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-4 py-3">
        <h1 className="text-5xl font-bold text-emerald-950 [font-family:var(--font-atkinson)]">The Unmapped</h1>          <p className="mt-4 text-lg text-emerald-900 max-w-xl">
            Exploring the accessibility gaps in AI &amp; the technology around it.
          </p>
        </div>
        {/*<p className="pointer-events-none absolute bottom-8 left-0 right-0 text-center text-emerald-100 text-sm px-6">
          Essays, interviews &amp; interactive demos that explain the problems and explore better solutions.
  </p>*/}
      </div>
      </div>
      <section aria-label="The gaps" className="relative z-10 bg-emerald-950 pt-2 pb-10">
        <ul className="flex gap-0 overflow-x-auto snap-x snap-mandatory list-none scrollbar-thin">
          {gaps.map(t => (
            <li key={t.title} className="relative snap-start shrink-0 w-[45vw] sm:w-[30vw] lg:w-[22vw] aspect-square overflow-hidden">
              <MandelbrotTile cx={t.cx} cy={t.cy} scale={t.scale} hue={t.hue} />
              {t.href ? (
                <a href={t.href}
                  className="absolute inset-0 flex items-center justify-center focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white">
                  <span className="rounded-lg bg-emerald-950/90 px-3 py-1.5 text-white text-center font-semibold [font-family:var(--font-atkinson)]">
                    {t.title}
                  </span>
                </a>
              ) : (
                <p className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-lg bg-emerald-950/75 px-3 py-1.5 text-emerald-200 text-sm text-center">{t.title} · uncharted</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
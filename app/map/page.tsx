import MandelbrotTile from "@/components/MandelbrotTile";
import { gaps } from "@/data/gaps";

export const metadata = { title: "Accessibility Gaps" };



export default function FullMap() {
  return (
    <main id="main" className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold [font-family:var(--font-atkinson)]">Accessibility Gaps</h1>
        <p className="mt-4 text-lg text-emerald-100">
          Every gap in the series. Uncharted gaps are still in the works and will be live soon.
        </p>

        <ul className="mt-8 space-y-4 list-none">
          {gaps.map(t => (
            <li key={t.title} className="relative aspect-[5/2] overflow-hidden rounded-xl">
              <MandelbrotTile cx={t.cx} cy={t.cy} scale={t.scale} hue={t.hue} />
              {t.href ? (
                <a
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
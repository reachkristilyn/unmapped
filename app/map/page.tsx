const upcoming = [
    "Alternative input modalities",
    "Cognitive load and plain language",
    "Deaf, HoH, captions and ASL",
    "Neurodiverse minds and output preferences",
    "ASR bias and non-standard speech",
    "Low-resource languages",
    "Code-switching",
    "Script diversity and RTL languages",
    "AAC devices and LLM integration",
    "A Map for the Unmapped",
  ];
  
  export default function FullMap() {
    return (
      <main className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold [font-family:var(--font-atkinson)]">The Full Map</h1>
          <p className="mt-4 text-lg text-emerald-100">
            Three territories charted. Ten ahead.
          </p>
          <ul className="mt-8 space-y-3">
            {upcoming.map(t => (
              <li key={t} className="flex gap-3 text-emerald-50">
                <span aria-hidden="true" className="text-emerald-500">◌</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </article>
      </main>
    );
  }
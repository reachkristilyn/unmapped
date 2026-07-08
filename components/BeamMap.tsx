export default function BeamMap({ items }: { items: string[] }) {
    return (
      <section className="mt-10 rounded-2xl border border-emerald-700 p-6">
        <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
          The map
        </h2>
        <p className="mt-2 text-emerald-100 text-sm">
          What better looks like. Naming the gap is half the work; here is the
          other half.
        </p>
        <ul className="mt-4 space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-emerald-50">
              <span aria-hidden="true" className="text-emerald-300">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
export default function BeamMap({ items }: { items: string[] }) {
    return (
      <section className="mt-10 rounded-2xl border border-emerald-700 p-6">
        <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
          The map
        </h2>
        <p className="mt-2 text-emerald-100 text-sm">
          What better looks like, one waypoint at a time.
        </p>
        <ol className="mt-6 relative border-l-2 border-dashed border-emerald-500 ml-4 space-y-8">
          {items.map((item, i) => (
            <li key={i} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300 font-bold text-emerald-950"
              >
                {i + 1}
              </span>
              <p className="text-emerald-50 pt-1">{item}</p>
            </li>
          ))}
          <li className="relative pl-8">
            <span
              aria-hidden="true"
              className="absolute -left-[13px] top-1 h-6 w-6 rounded-full border-2 border-emerald-300"
            />
            <p className="text-emerald-300 font-semibold pt-1">Mapped.</p>
          </li>
        </ol>
      </section>
    );
  }
"use client";
import { useState } from "react";

const sizes = [
  { label: "Generous", px: 48 },
  { label: "WCAG minimum", px: 24 },
  { label: "Common real-world", px: 16 },
  { label: "Tiny", px: 8 },
  { label: "Nearly impossible", px: 4 },
];

export default function TargetSizeDemo() {
  const [hits, setHits] = useState<Record<string, number>>({});

  return (
    <div className="mt-10 rounded-2xl bg-emerald-900 p-6">
      <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
        How small is too small?
      </h2>
      <p className="mt-2 text-emerald-50 text-sm">
        Try clicking each target. Now imagine doing it with a tremor, a head
        pointer, or a tongue-driven cursor. The smaller targets deliberately fall
        below accessible size minimums: that failure is the demonstration.
      </p>
      <div className="mt-6 flex flex-wrap items-end gap-8">
        {sizes.map(s => (
          <div key={s.label} className="text-center">
            <button
              onClick={() => setHits(h => ({ ...h, [s.label]: (h[s.label] || 0) + 1 }))}
              aria-label={`${s.label} target, ${s.px} pixels. Hit ${hits[s.label] || 0} times.`}
              className="rounded-full bg-emerald-300 hover:bg-emerald-200"
              style={{ width: s.px, height: s.px }}
            />
            <p aria-hidden="true" className="mt-2 text-sm text-emerald-100">{s.label}<br />{s.px}px · {hits[s.label] || 0} hits</p>
          </div>
        ))}
      </div>
    </div>
  );
}
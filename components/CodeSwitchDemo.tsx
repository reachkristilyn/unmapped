"use client";

import { useState, useMemo } from "react";
import { franc, francAll } from "franc-min";

const NAMES: Record<string, string> = { eng: "English", spa: "Spanish", fra: "French" };
const ONLY = ["eng", "spa", "fra"];
const DEFAULT = "Honestly je suis so tired hoy, pero let's still go de todos modos.";

export default function CodeSwitchDemo() {
  const [text, setText] = useState(DEFAULT);

  const { top, ranked } = useMemo(() => {
    if (text.trim().length < 3) return { top: null, ranked: [] };
    const top = franc(text, { only: ONLY, minLength: 3 });
    const ranked = francAll(text, { only: ONLY, minLength: 3 });
    return { top: top === "und" ? null : top, ranked };
  }, [text]);

  return (
    <section className="mt-10 rounded-xl border border-emerald-800 bg-emerald-900/40 p-6">
      <label htmlFor="cs-input" className="block text-sm text-emerald-200">
        Type a sentence that moves between English, Spanish, and French.
      </label>
      <textarea
        id="cs-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="mt-2 w-full rounded-md border border-emerald-700 bg-emerald-950 p-3 text-lg text-emerald-50 [font-family:var(--font-atkinson)]"
      />

      <div className="mt-5" aria-live="polite">
        {top ? (
          <>
            <p className="text-emerald-100">
              The detector labels this as{" "}
              <span className="font-bold text-white">{NAMES[top]}</span>.
            </p>
            <ul className="mt-3 space-y-2">
              {ranked.map(([code, score]) => (
                <li key={code} className="flex items-center gap-3 text-sm">
                  <span className="w-16 shrink-0 text-emerald-100">{NAMES[code]}</span>
                  <span className="h-3 flex-1 rounded bg-emerald-950 overflow-hidden">
                    <span
                      className={`block h-full rounded ${code === top ? "bg-emerald-300" : "bg-emerald-700"}`}
                      style={{ width: `${Math.round(score * 100)}%` }}
                    />
                  </span>
                  <span className="w-10 shrink-0 text-right text-emerald-200">
                    {score.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-emerald-300">
              The other languages are right there in the runner-up scores. The
              system just has no way to say your sentence is all of them at once.
            </p>
          </>
        ) : (
          <p className="text-sm text-emerald-300">Keep typing to see what it decides.</p>
        )}
      </div>
    </section>
  );
}
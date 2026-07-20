"use client";

import { useState } from "react";

const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
];

const SENTENCE = "Oui, je suis fatiguée, pero I slept bien. ¿Quieres una cerveza, ou should we get du vin?";

export default function CodeSwitchDemo() {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState(SENTENCE);
  const current = LANGS.find((l) => l.code === lang)?.label;

  return (
    <section className="mt-10 rounded-xl border border-emerald-800 bg-emerald-900/40 p-6">
      <p className="text-sm text-emerald-200">
        Tell the spellchecker one language, then click into the box. Everything
        outside that language gets flagged as a mistake.
      </p>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Spellcheck language">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`rounded-md border px-3 py-1 text-sm ${
              lang === l.code
                ? "border-emerald-400 bg-emerald-800 text-white"
                : "border-emerald-700 text-emerald-100 hover:bg-emerald-800"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <label htmlFor="cs-input" className="sr-only">Sentence to spell-check</label>
      <textarea
        key={lang}
        id="cs-input"
        lang={lang}
        spellCheck={true}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="mt-4 w-full rounded-md border border-emerald-700 bg-emerald-950 p-3 text-lg text-emerald-50 [font-family:var(--font-atkinson)]"
      />

      <p className="mt-3 text-sm text-emerald-300" aria-live="polite">
        Spellcheck set to <span className="font-semibold">{current}</span>. What
        gets flagged depends on your browser and operating system, so this is an
        illustration, not a measurement.
      </p>
    </section>
  );
}
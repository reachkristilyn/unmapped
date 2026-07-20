"use client";

import { useState, useMemo } from "react";
import { encode, decode } from "gpt-tokenizer";

const PRESETS = {
  english: "I am going to the store to buy some bread and milk for dinner.",
  switched: "Voy a la store para comprar un peu de bread y leche for la cena.",
};

export default function CodeSwitchDemo() {
  const [text, setText] = useState(PRESETS.switched);

  const { chips, tokenCount, wordCount, ratio } = useMemo(() => {
    const ids = text ? encode(text) : [];
    const chips = ids.map((id) => decode([id]));
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    return {
      chips,
      tokenCount: ids.length,
      wordCount: words,
      ratio: words ? (ids.length / words).toFixed(2) : "0",
    };
  }, [text]);

  return (
    <section className="mt-10 rounded-xl border border-emerald-800 bg-emerald-900/40 p-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setText(PRESETS.english)}
          className="rounded-md border border-emerald-700 px-3 py-1 text-sm text-emerald-100 hover:bg-emerald-800"
        >
          English only
        </button>
        <button
          onClick={() => setText(PRESETS.switched)}
          className="rounded-md border border-emerald-700 px-3 py-1 text-sm text-emerald-100 hover:bg-emerald-800"
        >
          Code-switched
        </button>
      </div>

      <label htmlFor="cs-input" className="sr-only">Sentence to tokenize</label>
      <textarea
        id="cs-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="mt-4 w-full rounded-md border border-emerald-700 bg-emerald-950 p-3 text-emerald-50 [font-family:var(--font-atkinson)]"
      />

      <div className="mt-4 flex flex-wrap gap-1" aria-hidden="true">
        {chips.map((piece, i) => (
          <span
            key={i}
            className="rounded border border-emerald-700 bg-emerald-800/50 px-1.5 py-0.5 font-mono text-sm text-emerald-50"
          >
            {piece.replace(/ /g, "\u00b7")}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-emerald-200" aria-live="polite">
        {wordCount} words became {tokenCount} tokens ({ratio} tokens per word).
      </p>
    </section>
  );
}
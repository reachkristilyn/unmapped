"use client";
import { useState } from "react";
import { encode } from "gpt-tokenizer";

const samples = [
  { lang: "English", text: "Hello, how are you today?" },
  { lang: "Japanese", text: "こんにちは、今日はお元気ですか？" },
  { lang: "Spanish", text: "Hola, ¿cómo estás hoy?" },
];

export default function TokenDemo() {
  const [input, setInput] = useState("");
  const count = input ? encode(input).length : 0;

  return (
    <div className="mt-10 rounded-2xl bg-emerald-900 p-6">
      <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
        Same sentence, Different Price
      </h2>
      <p className="mt-2 text-emerald-100 text-sm">
        Token counts below use the GPT tokenizer. Other models differ, but the
        pattern holds.
      </p>
      <ul className="mt-4 space-y-2">
        {samples.map(s => (
          <li key={s.lang} className="flex justify-between gap-4 text-emerald-50">
            <span>{s.lang}: {s.text}</span>
            <span className="font-bold whitespace-nowrap">{encode(s.text).length} tokens</span>
          </li>
        ))}
      </ul>
      <label htmlFor="token-input" className="mt-6 block font-semibold">
        Try your own:
      </label>
      <input
        id="token-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="mt-2 w-full rounded-lg bg-emerald-950 border border-emerald-700 px-4 py-2 text-white"
        placeholder="Type in any language"
      />
      {input && <p className="mt-3 font-bold">{count} tokens</p>}
    </div>
  );
}
"use client";
import { useState } from "react";

export default function KeyboardDemo() {
  const [goodDone, setGoodDone] = useState(false);
  const [badDone, setBadDone] = useState(false);

  return (
    <div className="mt-10 rounded-2xl bg-emerald-900 p-6">
      <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
        The keyboard test
      </h2>
      <p className="mt-2 text-emerald-100 text-sm">
        Put your mouse away. Using only Tab, Shift+Tab, and Enter, try to
        submit both forms below. One is built with semantic HTML. One is not.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Semantic version */}
        <div className="rounded-xl bg-emerald-950 p-5">
          <h3 className="font-bold">Form A</h3>
          <label htmlFor="name-a" className="mt-3 block text-sm">Name</label>
          <input id="name-a" className="mt-1 w-full rounded bg-emerald-900 border border-emerald-700 px-3 py-2" />
          <button
            onClick={() => setGoodDone(true)}
            className="mt-4 rounded-lg bg-emerald-300 px-4 py-2 font-semibold text-emerald-950"
          >
            Submit
          </button>
          {goodDone && <p className="mt-3 text-emerald-300">Submitted. Easy, right?</p>}
        </div>

        {/* Broken version: divs styled as controls */}
        <div className="rounded-xl bg-emerald-950 p-5">
          <h3 className="font-bold">Form B</h3>
          <div className="mt-3 block text-sm">Name</div>
          <div className="mt-1 w-full rounded bg-emerald-900 border border-emerald-700 px-3 py-2 min-h-[2.5rem]" />
          <div
            onClick={() => setBadDone(true)}
            className="mt-4 inline-block cursor-pointer rounded-lg bg-emerald-300 px-4 py-2 font-semibold text-emerald-950"
          >
            Submit
          </div>
          {badDone && <p className="mt-3 text-amber-300">You used your mouse, didn&apos;t you?</p>}
        </div>
      </div>

      <p className="mt-6 text-emerald-100 text-sm">
        Form B looks identical but is built from styled divs. The keyboard
        cannot reach it, and neither can a switch device, a sip-and-puff
        controller, or a tongue-driven cursor. Same pixels, closed door.
      </p>
    </div>
  );
}
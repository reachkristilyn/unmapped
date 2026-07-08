"use client";
import { useState } from "react";

const options = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function FatigueDemo() {
  const [badStep, setBadStep] = useState(0);
  const [badActions, setBadActions] = useState(0);
  const [badDone, setBadDone] = useState(false);
  const [goodActions, setGoodActions] = useState(0);
  const [goodDone, setGoodDone] = useState(false);

  return (
    <div className="mt-10 rounded-2xl bg-emerald-900 p-6">
      <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
        The action tax
      </h2>
      <p className="mt-2 text-emerald-100 text-sm">
        Same task: pick a delivery day. Count what each design costs. Every
        click is effort, and effort adds up when movement is expensive.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {/* Costly version: stepper through options one at a time */}
        <div className="rounded-xl bg-emerald-950 p-5">
          <h3 className="font-bold">Design A</h3>
          <p className="mt-3 text-sm text-emerald-100">Day: <span className="font-bold">{options[badStep]}</span></p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => { setBadStep(s => (s + options.length - 1) % options.length); setBadActions(a => a + 1); }}
              className="rounded-lg bg-emerald-800 px-4 py-2"
              aria-label="Previous day"
            >
              ◀
            </button>
            <button
              onClick={() => { setBadStep(s => (s + 1) % options.length); setBadActions(a => a + 1); }}
              className="rounded-lg bg-emerald-800 px-4 py-2"
              aria-label="Next day"
            >
              ▶
            </button>
            <button
              onClick={() => { setBadDone(true); setBadActions(a => a + 1); }}
              className="rounded-lg bg-emerald-300 px-4 py-2 font-semibold text-emerald-950"
            >
              Confirm
            </button>
          </div>
          <p className="mt-3 text-sm">Actions used: <span className="font-bold">{badActions}</span></p>
          {badDone && <p className="mt-1 text-amber-300 text-sm">Done in {badActions} actions.</p>}
        </div>

        {/* Efficient version: direct buttons */}
        <div className="rounded-xl bg-emerald-950 p-5">
          <h3 className="font-bold">Design B</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.map(o => (
              <button
                key={o}
                onClick={() => { setGoodDone(true); setGoodActions(a => a + 1); }}
                className="rounded-lg bg-emerald-800 px-4 py-2 hover:bg-emerald-700"
              >
                {o}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm">Actions used: <span className="font-bold">{goodActions}</span></p>
          {goodDone && <p className="mt-1 text-emerald-300 text-sm">Done in {goodActions} action{goodActions === 1 ? "" : "s"}.</p>}
        </div>
      </div>

      <p className="mt-6 text-emerald-100 text-sm">
        Design A demands up to five actions for what Design B does in one.
        Multiply that across a whole day of computing.
      </p>
    </div>
  );
}
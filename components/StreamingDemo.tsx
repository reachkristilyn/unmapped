"use client";
import { useState, useRef } from "react";

const answer = "The three main causes are habitat loss, climate change, and pollution.";
const words = answer.split(" ");

export default function StreamingDemo() {
  const [streamed, setStreamed] = useState("");
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [mode, setMode] = useState<"chaotic" | "stable" | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function run(selected: "chaotic" | "stable") {
    if (timer.current) clearInterval(timer.current);
    setMode(selected);
    setStreamed("");
    setAnnouncements([]);
    let i = 0;
    timer.current = setInterval(() => {
      i++;
      const text = words.slice(0, i).join(" ");
      setStreamed(text);
      if (selected === "chaotic") {
        // Reader re-announces on every change, interrupting itself
        setAnnouncements(a => [...a, `(interrupts) ${text}`]);
      }
      if (i >= words.length) {
        if (timer.current) clearInterval(timer.current);
        if (selected === "stable") {
          setAnnouncements([answer]);
        }
      }
    }, 350);
  }

  return (
    <div className="mt-10 rounded-2xl bg-emerald-900 p-6">
      <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
        What the screen reader hears
      </h2>
      <p className="mt-2 text-emerald-100 text-sm">
        A simulation, not a real screen reader. Left button: announcing every
        update. Right button: waiting for the complete answer.
      </p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => run("chaotic")}
          className="rounded-lg bg-emerald-300 px-4 py-2 font-semibold text-emerald-950">
          Stream + announce everything
        </button>
        <button onClick={() => run("stable")}
          className="rounded-lg bg-emerald-800 px-4 py-2 font-semibold text-white">
          Stream + announce when done
        </button>
      </div>

      {mode && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-950 p-4">
            <h3 className="font-bold text-sm">On screen</h3>
            <p className="mt-2 text-emerald-50">{streamed}</p>
          </div>
          <div className="rounded-xl bg-emerald-950 p-4">
            <h3 className="font-bold text-sm">Announced aloud</h3>
            <div className="mt-2 max-h-40 overflow-y-auto text-sm text-amber-200 space-y-1">
              {announcements.length === 0 && <p className="text-emerald-100">…silence…</p>}
              {announcements.map((a, i) => <p key={i}>{a}</p>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
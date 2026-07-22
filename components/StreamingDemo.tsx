"use client";
import { useState, useRef, useEffect } from "react";

const answer = "The three main causes are habitat loss, climate change, and pollution.";
const words = answer.split(" ");

export default function StreamingDemo() {
  const [streamed, setStreamed] = useState("");
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [mode, setMode] = useState<"chaotic" | "stable" | null>(null);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clear any running interval when the component unmounts
  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  function run(selected: "chaotic" | "stable") {
    if (timer.current) clearInterval(timer.current);
    setMode(selected);
    setStreamed("");
    setAnnouncements([]);
    setDone(false);

    // Respect a reduced-motion preference: show the end state immediately
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setStreamed(answer);
      setAnnouncements(
        selected === "chaotic"
          ? words.map((_, i) => `(interrupts) ${words.slice(0, i + 1).join(" ")}`)
          : [answer]
      );
      setDone(true);
      return;
    }

    let i = 0;
    timer.current = setInterval(() => {
      i++;
      const text = words.slice(0, i).join(" ");
      setStreamed(text);
      if (selected === "chaotic") {
        setAnnouncements(a => [...a, `(interrupts) ${text}`]);
      }
      if (i >= words.length) {
        if (timer.current) clearInterval(timer.current);
        if (selected === "stable") setAnnouncements([answer]);
        setDone(true);
      }
    }, 350);
  }

  return (
    <div className="mt-10 rounded-2xl bg-emerald-900 p-6">
      <h2 className="text-2xl font-bold [font-family:var(--font-atkinson)]">
        What the screen reader hears
      </h2>
      <p className="mt-2 text-emerald-50 text-sm">
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
            <h3 className="font-bold text-sm" id="announced-heading">Announced aloud</h3>
            <div
              tabIndex={0}
              role="group"
              aria-labelledby="announced-heading"
              className="mt-2 max-h-40 overflow-y-auto text-sm text-amber-200 space-y-1"
            >
              {announcements.length === 0 && <p className="text-emerald-50">…silence…</p>}
              {announcements.map((a, i) => <p key={i}>{a}</p>)}
            </div>
          </div>
        </div>
      )}

      {/* Text alternative: announced once, after the run finishes */}
      <p className="sr-only" aria-live="polite">
        {done && mode === "chaotic" &&
          `Result: the answer was re-announced ${words.length} times, once for every word, each announcement interrupting the last. The listener never hears a complete sentence until the end.`}
        {done && mode === "stable" &&
          `Result: the answer was announced once, as a single complete sentence: ${answer}`}
      </p>
    </div>
  );
}
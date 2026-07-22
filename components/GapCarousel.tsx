"use client";

import { useRef } from "react";
import MandelbrotTile from "@/components/MandelbrotTile";
import { gaps } from "@/data/gaps";

export default function GapCarousel() {
  const scroller = useRef<HTMLUListElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <section aria-label="The gaps" className="relative z-10 bg-emerald-950 pt-2 pb-10">
      <div className="flex justify-end gap-2 px-6 pb-3">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Scroll gaps left"
          className="rounded-lg border border-emerald-700 px-4 py-2 text-emerald-100 hover:bg-emerald-800 hover:text-white"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Scroll gaps right"
          className="rounded-lg border border-emerald-700 px-4 py-2 text-emerald-100 hover:bg-emerald-800 hover:text-white"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <ul
        ref={scroller}
        tabIndex={0}
        aria-label="Accessibility gaps"
        className="flex gap-0 overflow-x-auto snap-x snap-mandatory list-none scrollbar-thin focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      >
        {gaps.map(t => (
          <li key={t.title} className="relative snap-start shrink-0 w-[45vw] sm:w-[30vw] lg:w-[22vw] aspect-square overflow-hidden">
            <MandelbrotTile cx={t.cx} cy={t.cy} scale={t.scale} hue={t.hue} />
            {t.href ? (
              <a href={t.href}
                className="absolute inset-0 flex items-center justify-center focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white">
                <span className="rounded-lg bg-emerald-950/90 px-3 py-1.5 text-white text-center font-semibold [font-family:var(--font-atkinson)]">
                  {t.title}
                </span>
              </a>
            ) : (
              <p className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-lg bg-emerald-950/90 px-3 py-1.5 text-emerald-50 text-sm text-center">
                  {t.title} <span aria-hidden="true">·</span> uncharted
                </span>
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
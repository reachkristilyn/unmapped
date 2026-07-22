"use client";
import { useEffect, useRef, useState } from "react";

const DEFAULT_VIEW = { cx: -0.75, cy: 0, scale: 1.75 };

export default function Mandelbrot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [view, setView] = useState(DEFAULT_VIEW);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = canvas.offsetWidth);
    const h = (canvas.height = canvas.offsetHeight);
    const img = ctx.createImageData(w, h);
    const maxIter = 120;
    const aspect = w / h;

    for (let px = 0; px < w; px++) {
      for (let py = 0; py < h; py++) {
        const x0 = view.cx + ((px / w) * 2 - 1) * view.scale * aspect;
        const y0 = view.cy + ((py / h) * 2 - 1) * view.scale;
        let x = 0, y = 0, i = 0;
        while (x * x + y * y <= 4 && i < maxIter) {
          const xt = x * x - y * y + x0;
          y = 2 * x * y + y0;
          x = xt;
          i++;
        }
        const idx = (py * w + px) * 4;
        const t = i / maxIter;
        img.data[idx] = 20 + t * 140;
        img.data[idx + 1] = 60 + t * 195;
        img.data[idx + 2] = 40 + t * 170;
        img.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [view]);

  // Wheel zoom only while active, via a non-passive listener so it
  // never fights page scroll when the fractal is inert.
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY > 0 ? 1.2 : 0.8;
      setView(v => ({ ...v, scale: v.scale * factor }));
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, [active]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!active) { setActive(true); return; }
    const rect = e.currentTarget.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    const aspect = w / h;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    setView(v => {
      const tx = v.cx + ((px / w) * 2 - 1) * v.scale * aspect;
      const ty = v.cy + ((py / h) * 2 - 1) * v.scale;
      return {
        cx: v.cx + (tx - v.cx) * 0.5,
        cy: v.cy + (ty - v.cy) * 0.5,
        scale: v.scale * 0.7,
      };
    });
  }

  function handleRightClick(e: React.MouseEvent<HTMLCanvasElement>) {
    if (!active) return; // let the normal context menu appear when inert
    e.preventDefault();
    setView(v => ({ ...v, scale: v.scale * 1.4 }));
  }

  function handleKey(e: React.KeyboardEvent<HTMLCanvasElement>) {
    if (e.key === "Escape") { setActive(false); setView(DEFAULT_VIEW); return; }
    if (!active) {
      if (e.key === "Enter" || e.key === " ") { setActive(true); e.preventDefault(); }
      return;
    }
    const pan = view.scale * 0.2;
    if (e.key === "+" || e.key === "=") setView(v => ({ ...v, scale: v.scale * 0.7 }));
    else if (e.key === "-") setView(v => ({ ...v, scale: v.scale * 1.4 }));
    else if (e.key === "ArrowLeft") setView(v => ({ ...v, cx: v.cx - pan }));
    else if (e.key === "ArrowRight") setView(v => ({ ...v, cx: v.cx + pan }));
    else if (e.key === "ArrowUp") setView(v => ({ ...v, cy: v.cy - pan }));
    else if (e.key === "ArrowDown") setView(v => ({ ...v, cy: v.cy + pan }));
    else return;
    e.preventDefault();
  }

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        onContextMenu={handleRightClick}
        onKeyDown={handleKey}
        tabIndex={0}
        className={`w-full h-full ${active ? "cursor-zoom-in" : "cursor-pointer"}`}
        aria-label={
          active
          ? "Interactive Mandelbrot fractal: a dark green shape with a rounded body and endlessly branching, feathery edges, drawn in greens against a deep green background. Click or press plus to zoom in, right-click or minus to zoom out, arrow keys to pan, Escape to exit."
          : "Mandelbrot fractal backdrop: a dark green shape with a rounded body and endlessly branching, feathery edges, drawn in greens against a deep green background. Click or press Enter to explore it."
        }
      />

      <p className="sr-only" aria-live="polite">
        {active ? "Fractal exploration active. Arrow keys pan, plus and minus zoom, Escape exits." : ""}
      </p>

      {!active ? (
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-emerald-950/80 backdrop-blur-sm px-5 py-3">
          <p className="text-sm font-semibold text-emerald-100 [font-family:var(--font-atkinson)]">
            Click to explore the fractal
          </p>
        </div>
      ) : (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-xl bg-emerald-950/80 backdrop-blur-sm px-5 py-3">
          <p className="pointer-events-none hidden sm:block text-sm text-emerald-200">
          Click or + to zoom <span aria-hidden="true">·</span> right-click or − to zoom out <span aria-hidden="true">·</span> arrows to pan
          </p>
          <button
            onClick={() => setView(DEFAULT_VIEW)}
            className="rounded-lg bg-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Reset view
          </button>
          <button
            onClick={() => { setActive(false); setView(DEFAULT_VIEW); }}
            className="rounded-lg border border-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-100 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Exit
          </button>
        </div>
      )}
    </div>
  );
}
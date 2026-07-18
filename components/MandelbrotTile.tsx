"use client";
import { useEffect, useRef } from "react";

export default function MandelbrotTile({
  cx, cy, scale, hue,
}: { cx: number; cy: number; scale: number; hue: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        const x0 = cx + ((px / w) * 2 - 1) * scale * aspect;
        const y0 = cy + ((py / h) * 2 - 1) * scale;
        let x = 0, y = 0, i = 0;
        while (x * x + y * y <= 4 && i < maxIter) {
          const xt = x * x - y * y + x0;
          y = 2 * x * y + y0;
          x = xt;
          i++;
        }
        const idx = (py * w + px) * 4;
        const t = i / maxIter;
        // subdued HSL: fixed sat/light curve, hue per tile
        const l = 12 + t * 48; // lightness 12–60%
        const [r, g, b] = hslToRgb(hue, 38, l);
        img.data[idx] = r;
        img.data[idx + 1] = g;
        img.data[idx + 2] = b;
        img.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, [cx, cy, scale, hue]);

  return <canvas ref={canvasRef} aria-hidden="true" className="w-full h-full" />;
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100; l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}
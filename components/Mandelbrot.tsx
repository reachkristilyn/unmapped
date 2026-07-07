"use client";
import { useEffect, useRef, useState } from "react";

export default function Mandelbrot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [view, setView] = useState({ cx: -0.75, cy: 0, scale: 1.75 });

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

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const w = rect.width, h = rect.height;
    const aspect = w / h;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    setView(v => ({
      cx: v.cx + ((px / w) * 2 - 1) * v.scale * aspect,
      cy: v.cy + ((py / h) * 2 - 1) * v.scale,
      scale: v.scale * 0.5,
    }));
  }

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className="w-full h-full cursor-zoom-in"
      aria-label="Interactive Mandelbrot fractal. Click to zoom."
    />
  );
}
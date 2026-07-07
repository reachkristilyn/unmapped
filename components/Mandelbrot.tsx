"use client";
import { useEffect, useRef } from "react";

export default function Mandelbrot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = canvas.offsetWidth);
    const h = (canvas.height = canvas.offsetHeight);
    const img = ctx.createImageData(w, h);
    const maxIter = 80;

    for (let px = 0; px < w; px++) {
      for (let py = 0; py < h; py++) {
        const x0 = (px / w) * 3.5 - 2.5;
        const y0 = (py / h) * 2 - 1;
        let x = 0, y = 0, i = 0;
        while (x * x + y * y <= 4 && i < maxIter) {
          const xt = x * x - y * y + x0;
          y = 2 * x * y + y0;
          x = xt;
          i++;
        }
        const idx = (py * w + px) * 4;
        const t = i / maxIter;
        img.data[idx] = 20 + t * 140;        // R
        img.data[idx + 1] = 60 + t * 195;   // G
        img.data[idx + 2] = 40 + t * 170; // B
        img.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
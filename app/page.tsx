import Mandelbrot from "@/components/Mandelbrot";

export default function Home() {
  return (
    <main className="relative h-screen bg-black text-white">
      <div className="absolute inset-0">
        <Mandelbrot />
      </div>
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-10 py-8">
        <h1 className="text-5xl font-bold text-emerald-950 [font-family:var(--font-atkinson)]">The Unmapped</h1>          <p className="mt-4 text-lg text-emerald-900 max-w-xl">
            Exploring the accessibility gaps in AI &amp; the technology around it.
          </p>
        </div>
        <p className="pointer-events-none absolute bottom-8 left-0 right-0 text-center text-emerald-100 text-sm px-6">
          Essays, interviews &amp; interactive demos that explain the problems and explore better solutions.
        </p>
      </div>
    </main>
  );
}
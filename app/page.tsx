import Mandelbrot from "@/components/Mandelbrot";

export default function Home() {
  return (
    <main className="relative h-screen bg-black text-white">
      <div className="absolute inset-0">
        <Mandelbrot />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-10 py-8">
          <h1 className="text-5xl font-bold text-emerald-950">The Unmapped</h1>
          <p className="mt-4 text-lg text-emerald-900 max-w-xl">
            Exploring the accessibility gaps in AI design.
          </p>
        </div>
      </div>
    </main>
  );
}
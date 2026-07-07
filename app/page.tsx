import Mandelbrot from "@/components/Mandelbrot";

export default function Home() {
  return (
    <main className="relative h-screen bg-black text-white">
      <div className="absolute inset-0">
        <Mandelbrot />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold">The Unmapped</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Exploring the accessibility gaps in AI design.
        </p>
      </div>
    </main>
  );
}
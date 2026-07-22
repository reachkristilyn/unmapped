import MandelbrotTile from "@/components/MandelbrotTile";
import GapCarousel from "@/components/GapCarousel";

export default function Home() {
  return (
<main id="main" className="bg-black text-white">
      <div className="relative h-[48vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
          <MandelbrotTile cx={-0.75} cy={0} scale={1.75} hue={160} />
        </div>
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm px-4 py-3">
        <h1 className="text-5xl font-bold text-emerald-950 [font-family:var(--font-atkinson)]">The Unmapped</h1>          
        <p className="mt-4 text-lg text-emerald-950 max-w-xl">
            Exploring the accessibility gaps in AI &amp; the technology around it.
          </p>
        </div>
        {/*<p className="pointer-events-none absolute bottom-8 left-0 right-0 text-center text-emerald-100 text-sm px-6">
          Essays, interviews &amp; interactive demos that explain the problems and explore better solutions.
  </p>*/}
      </div>
      </div>
      <GapCarousel />
    </main>
  );
}
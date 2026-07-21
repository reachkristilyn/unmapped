import Mandelbrot from "@/components/Mandelbrot";

export const metadata = { title: "Origins" };

export default function Origins() {
  return (
    <main id="main" className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold [font-family:var(--font-atkinson)]">Origins</h1>
        <p className="mt-8 text-lg leading-relaxed text-emerald-50">
        The Unmapped is a research and essay series exploring accessibility gaps in AI and 
        the technology built around it. It exists because brilliant friends, through their 
        lived experience, questions, and refusal to accept these gaps as permanent, charted 
        them for me in the first place. I mostly just write them down.
        </p>

        <div className="mt-12 h-[60vh]">
          <Mandelbrot />
        </div>
      </article>
    </main>
  );
}
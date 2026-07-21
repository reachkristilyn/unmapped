import Mandelbrot from "@/components/Mandelbrot";

export const metadata = { title: "Origins" };

export default function Origins() {
  return (
    <main id="main" className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold [font-family:var(--font-atkinson)]">Origins</h1>
        <p className="mt-8 space-y-4 text-lg leading-relaxed text-emerald-50">
        The Unmapped is a research and essay series exploring accessibility gaps in AI and 
        the technology built around it. It exists because brilliant friends, through their 
        lived experience, questions, and refusal to accept these gaps as permanent, charted 
        them for me in the first place. I mostly just write them down.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-emerald-50">
        We strive to meet WCAG AAA accessibility standards across this site. If anything falls 
        short, or is simply bugging you, please let us know.
        </p>

        <div className="mt-12 h-[60vh]">
          <Mandelbrot />
        </div>
        <section className="mt-12 border-t border-emerald-800 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            About the author
          </h2>
          <p className="mt-3 text-base leading-relaxed text-emerald-100">
            Kristi Lyn Eaton is a writer, technologist, and experience designer with continued
            computer science studies at Columbia University, where she supports research at the 
            Robotics and Rehabilitation (ROAR) Lab. Her work brings together emerging technology, 
            accessibility, and advocacy, drawing on a background in nonprofit leadership and 
            experiential design. The Unmapped is where she connects those threads.
          </p>
        </section>
      </article>
    </main>
  );
}
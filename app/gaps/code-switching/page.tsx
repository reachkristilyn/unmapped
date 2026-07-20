import CodeSwitchDemo from "@/components/CodeSwitchDemo";
import Waypoints from "@/components/Waypoints";

export const metadata = { title: "Code-Switching" };

export default function CodeSwitching() {
  return (
    <main id="main" className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        {/*<p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">Beam</p>*/}
        <h1 className="mt-2 text-4xl font-bold [font-family:var(--font-atkinson)]">
          Code-Switching
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-emerald-50">
          <p>
          Many people don't speak one language at a time. They move between languages mid-sentence, a word here, a phrase there, 
          because that blend is how they actually think and connect. Linguists call it code-switching.
          </p>
          <p>
          Most AI systems assume one language per input. A language detector picks the dominant one and routes everything through it, 
          so the switched-in words get treated as noise, misspellings, or the wrong language entirely. Speech recognition stumbles 
          hardest at the switch points. And because tokenizers are built around a single dominant language, the other languages 
          fragment into far more tokens, the same inequality explored in the Tokenization beam.
          </p>
          <p>
          The demo below shows what happens to one code-switched sentence when a tokenizer built for a single language takes it apart.
          </p>
        </div>
        <CodeSwitchDemo />
        <Waypoints items={[
          "Train language detection to recognize multiple active languages in one input instead of forcing a single choice.",
          "Build tokenizers on genuinely multilingual, code-mixed text so switched-in words aren't penalized as leftovers.",
          "Test speech recognition on real code-switched speech, not just clean monolingual audio, and report where it breaks.",
          "Stop treating one language or dialect as the default correct form that everything else gets normalized toward.",
        ]} />
      </article>
    </main>
  );
}
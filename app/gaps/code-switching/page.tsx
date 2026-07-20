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
          Most AI systems assume one language per input. A detector picks the dominant one and routes everything through it, 
          so the words from your other languages get treated as noise or errors. Speech recognition stumbles hardest right at 
          the switch points, where one language hands off to the next. Fluency in more than one language ends up reading to the 
          machine as a mistake.
          </p>
          <p>
          The demo below shows one small, everyday version of this. Your browser has a spellchecker set to a single language. 
          Type a sentence that moves between languages, and watch it flag every word that doesn't belong to the one it was 
          told to expect.
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
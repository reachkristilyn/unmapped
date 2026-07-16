import TokenDemo from "@/components/TokenDemo";
import BeamMap from "@/components/BeamMap";

export const metadata = { title: "Tokenization Inequality" };

export default function Tokenization() {
  return (
    <main id="main" className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        {/*<p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">Beam 8</p>*/}
        <h1 className="mt-2 text-4xl font-bold [font-family:var(--font-atkinson)]">
          Tokenization Inequality
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-emerald-50">
          <p>
          Before an AI model reads your words, it breaks them into pieces called tokens. 
          Because today's tokenizers are optimized around English, the same sentence often requires many more tokens in other languages.
          </p>
          <p>
          That difference affects cost, context length, and often the quality of the response. Two people asking the same question in different 
          languages may not receive the same value from the same AI model.
          </p>
          <p>
          The demo below compares how the same sentence is tokenized across languages.
          </p>
        </div>
        <TokenDemo />
        <BeamMap items={[
          "Build tokenizers on genuinely multilingual data so no language inherits the leftovers.",
          "Price by meaning delivered, not tokens consumed, so two people asking the same question pay the same.",
          "Report token efficiency across languages as a published benchmark, the way models report accuracy.",
          "Explore byte-level and character-level approaches that remove the vocabulary bottleneck entirely.",
        ]} />
      </article>
    </main>
  );
}
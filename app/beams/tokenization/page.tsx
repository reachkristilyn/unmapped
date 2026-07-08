import TokenDemo from "@/components/TokenDemo";

export default function Tokenization() {
  return (
    <main className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        {/*<p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">Beam 8</p>*/}
        <h1 className="mt-2 text-4xl font-bold [font-family:var(--font-atkinson)]">
          Tokenization Inequality
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-emerald-50">
          <p>
            Before an AI model reads a single word you write, it chops your
            text into pieces called tokens. For English, the pieces are
            generous. A common word is often one token. For many other
            languages, the same sentence shatters into far more fragments.
          </p>
          <p>
            This is not a cosmetic difference. More tokens means higher cost
            per message, less room in the context window, and often worse
            output quality. Two people asking the same question in different
            languages are not paying the same price or getting the same
            machine.
          </p>
          <p>
            The unfairness is baked in before training even begins. Tokenizers
            are built from data that overrepresents English, so every other
            language inherits the leftovers.
          </p>
        </div>
        <TokenDemo />
      </article>
    </main>
  );
}
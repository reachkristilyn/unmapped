import StreamingDemo from "@/components/StreamingDemo";

export default function ScreenReaders() {
  return (
    <main className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
      <article className="mx-auto max-w-2xl">
        {/*<p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">Beam 1</p>*/}
        <h1 className="mt-2 text-4xl font-bold [font-family:var(--font-atkinson)]">
          Screen Readers and Streaming AI
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-emerald-50">
          <p>
            AI chat interfaces stream their answers word by word. Sighted users
            experience this as speed. Screen reader users experience it as
            chaos.
          </p>
          <p>
            A screen reader needs stable text to announce. Streaming text
            changes hundreds of times before it settles, so the reader either
            interrupts itself constantly, reads half-formed sentences, or stays
            silent until someone guesses the answer has finished. Add markdown
            symbols read aloud as punctuation, and a simple answer becomes a
            puzzle.
          </p>
          <p>
            A friend of mine is blind. Watching him navigate tools that were
            supposedly built for everyone taught me more about interface
            design than any course. This Beam is about what his screen reader
            hears when AI speaks.
          </p>
        </div>
        <StreamingDemo /> 
      </article>
    </main>
  );
}
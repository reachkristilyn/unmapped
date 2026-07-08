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
          AI chat interfaces stream responses one word at a time. For many screen reader users, that can mean 
          interrupted speech, incomplete sentences, or silence until the response is finished.
          </p>
          <p>
          The demo below lets you compare two ways a screen reader might experience the same AI response.
          </p>
        </div>
        <StreamingDemo /> 
      </article>
    </main>
  );
}
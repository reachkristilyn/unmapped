import StreamingDemo from "@/components/StreamingDemo";
import Waypoints from "@/components/Waypoints";

export const metadata = { title: "Screen Readers" };

export default function ScreenReaders() {
  return (
    <main id="main" className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
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
        <p className="mt-8 rounded-lg border border-emerald-700 bg-emerald-900/40 px-4 py-3 text-base text-emerald-50">
          Note: the demo below is a visual simulation of screen reader output. It is not
          live screen reader audio, and it will not interfere with a screen reader you may
          already be using.
        </p>
        <StreamingDemo /> 
        <Waypoints heading="Mapping screen readers" items={[
          "Announce complete thoughts, not every token. Batch streaming updates into stable, readable chunks.",
          "Strip markdown symbols from what gets read aloud. Asterisks are formatting, not content.",
          "Give users control over when and how much is announced, instead of deciding for them.",
          "Test with real screen readers, not simulations. The gap between the two is the whole lesson.",
        ]} />
      </article>
    </main>
  );
}
import TargetSizeDemo from "@/components/TargetSizeDemo";
import KeyboardDemo from "@/components/KeyboardDemo";
import FatigueDemo from "@/components/FatigueDemo";
import BeamMap from "@/components/BeamMap";
export default function MotorAccessibility() {
    return (
      <main className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
        <article className="mx-auto max-w-2xl">
          {/*<p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">Beam 5</p>*/}
          <h1 className="mt-2 text-4xl font-bold [font-family:var(--font-atkinson)]">
            Motor Disabilities and Predictive Input
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-emerald-50">
          <p>
            Most interfaces assume a steady hand and a mouse. For millions of
            people using tremor-affected hands, head pointers, switch devices,
            or tongue-driven cursors, that assumption is the first locked door.
          </p>
          <p>
            The demos below let you feel the problem instead of reading about
            it.
          </p>
          </div>
          <TargetSizeDemo />
          <KeyboardDemo />
          <FatigueDemo />
          <BeamMap items={[
          "Meet target size minimums as a floor, not a ceiling. Fingers, tremors, and pointers all need room.",
          "Build with semantic HTML so every assistive device can reach every control.",
          "Count the actions your design demands, then cut them. Every click is a cost someone pays in effort.",
          "Test with a keyboard alone before shipping. If you cannot finish the task, neither can millions of users.",
        ]} />
        </article>
      </main>
    );
  }
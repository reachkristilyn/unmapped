import TargetSizeDemo from "@/components/TargetSizeDemo";

export default function MotorAccessibility() {
    return (
      <main className="min-h-screen bg-emerald-950 text-white px-6 pt-28 pb-20">
        <article className="mx-auto max-w-2xl">
          <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wide">Beam 5</p>
          <h1 className="mt-2 text-4xl font-bold [font-family:var(--font-atkinson)]">
            Motor Disabilities and Predictive Input
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-emerald-50">
            <p>Content coming soon.</p>
          </div>
          <TargetSizeDemo />
        </article>
      </main>
    );
  }
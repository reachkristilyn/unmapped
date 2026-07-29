import TokenDemo from "@/components/TokenDemo";
import Waypoints from "@/components/Waypoints";

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
        <Waypoints heading="Mapping tokenization" items={[
          "Build tokenizers on genuinely multilingual data so no language inherits the leftovers.",
          "Price by meaning delivered, not tokens consumed, so two people asking the same question pay the same.",
          "Report token efficiency across languages as a published benchmark, the way models report accuracy.",
          "Explore byte-level and character-level approaches that remove the vocabulary bottleneck entirely.",
        ]} />
      </article>
      <section
  aria-labelledby="sources-and-contributors"
  className="mt-20 border-t border-emerald-700/60 pt-10"
>
  <h2
    id="sources-and-contributors"
    className="text-2xl font-semibold text-emerald-50"
  >
    Sources & Contributors
  </h2>

  <div className="mt-6 space-y-8 text-emerald-100">
    <div>
      <h3 className="text-lg font-semibold text-emerald-50">
        Contributor
      </h3>

      <p className="mt-2 leading-relaxed">
        <a
          href="https://www.lindseydewittprat.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-emerald-200 underline decoration-emerald-500 underline-offset-4 hover:text-white"
        >
          Lindsey DeWitt
        </a>{" "}
        first introduced me to the issue of unequal tokenization across
        languages and inspired me to investigate it further.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-emerald-50">
        Research & Technology
      </h3>

      <ul className="mt-4 space-y-5">
        <li>
          <a
            href="https://papers.neurips.cc/paper_files/paper/2023/hash/74bb24dca8334adce292883b4b651eda-Abstract-Conference.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-200 underline decoration-emerald-500 underline-offset-4 hover:text-white"
          >
            Language Model Tokenizers Introduce Unfairness Between
            Languages
          </a>
          <p className="mt-1 text-sm leading-relaxed text-emerald-200/80">
            Aleksandar Petrov, Emanuele La Malfa, Philip H. S. Torr,
            and Adel Bibi. NeurIPS 2023.
          </p>
        </li>

        <li>
          <a
            href="https://aclanthology.org/2023.emnlp-main.614/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-200 underline decoration-emerald-500 underline-offset-4 hover:text-white"
          >
            Do All Languages Cost the Same? Tokenization in the Era of
            Commercial Language Models
          </a>
          <p className="mt-1 text-sm leading-relaxed text-emerald-200/80">
            Orevaoghene Ahia, Sachin Kumar, Hila Gonen, Jungo Kasai,
            David R. Mortensen, Noah A. Smith, and Yulia Tsvetkov.
            EMNLP 2023.
          </p>
        </li>

        <li>
          <a
            href="https://github.com/openai/tiktoken"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-200 underline decoration-emerald-500 underline-offset-4 hover:text-white"
          >
            OpenAI tiktoken
          </a>
          <p className="mt-1 text-sm leading-relaxed text-emerald-200/80">
            The tokenizer used in this page’s interactive demonstration.
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>
    </main>
  );
}
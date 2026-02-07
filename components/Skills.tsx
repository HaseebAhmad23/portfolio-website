import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-2xl font-bold text-white">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="min-w-0 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="mb-4 text-base font-semibold text-violet-400">{category}</h3>
              <div className="flex min-w-0 flex-wrap gap-2 content-start">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block shrink-0 rounded-md bg-zinc-800 px-3 py-1.5 text-base text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { EDUCATION } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-2xl font-bold text-white">Education</h2>
        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="font-semibold text-white">{edu.degree}</h3>
              <p className="text-violet-400">{edu.institution}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {edu.period} • {edu.location}
              </p>
              {"details" in edu && edu.details && (
                <p className="mt-2 text-sm text-zinc-400">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-2xl font-bold text-white">Experience</h2>
        <div className="space-y-10">
          {EXPERIENCE.map((job, i) => (
            <div
              key={i}
              className="relative border-l-2 border-violet-500/30 pl-8 pb-10 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-violet-500 bg-background" />
              <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-white">{job.role}</span>
                <span className="text-zinc-500">|</span>
                <span className="font-medium text-violet-400">{job.company}</span>
              </div>
              <p className="mb-3 text-sm text-zinc-500">
                {job.period} • {job.location}
              </p>
              <ul className="list-none space-y-2 pl-0">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-zinc-400 leading-relaxed">
                    <span className="flex h-6 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" aria-hidden />
                    </span>
                    <span className="flex-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

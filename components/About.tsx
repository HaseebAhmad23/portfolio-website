import { LANGUAGES } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-white">About Me</h2>
        <p className="text-lg leading-relaxed text-zinc-400">
          I'm a Full Stack Developer with experience building and maintaining
          production web applications. I specialize in Python (Django),
          JavaScript (React/Vue), and cloud-native solutions on AWS. I enjoy
          turning complex requirements into clean, efficient code and
          delivering solutions that improve operational efficiency.
        </p>
        <div className="mt-8">
          <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((lang) => (
              <span
                key={lang.name}
                className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300"
              >
                {lang.name}: <span className="text-violet-400">{lang.level}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

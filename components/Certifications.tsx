import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-2xl font-bold text-white">Certifications</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <a
              key={cert.name}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 transition-colors hover:border-violet-500/50 hover:bg-zinc-800/50"
            >
              <svg
                className="h-5 w-5 shrink-0 text-violet-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-zinc-300">{cert.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

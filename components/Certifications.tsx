import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-2xl font-bold text-white">Certificates</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
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
              <span className="flex-1 text-zinc-300">{cert.name}</span>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.name} certificate`}
                title="View certificate"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors hover:border-violet-500/50 hover:bg-zinc-800 hover:text-violet-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

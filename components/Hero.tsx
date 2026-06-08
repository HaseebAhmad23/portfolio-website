import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-violet-500/50 shadow-lg shadow-violet-500/20 sm:h-48 sm:w-48">
            <Image
              src="/profile.png"
              alt="Haseeb Ahmad"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
        </div>
        <p className="mb-4 font-mono text-sm text-violet-400">
          Full Stack Developer / DevOps Engineer / Cloud Architect
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Haseeb Ahmad
        </h1>
        <p className="mb-2 text-lg text-zinc-400">
          Building scalable web applications with Python, JavaScript, TypeScript & Cloud
          technologies
        </p>
        <p className="mb-8 flex items-center justify-center gap-2 text-lg text-zinc-400">
          Leipzig, Germany
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-zinc-900 transition-colors hover:bg-violet-400"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/haseeb-ahmad-25a02aa7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-violet-500/50 hover:text-violet-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/HaseebAhmad23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-violet-500/50 hover:text-violet-400"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download="Haseeb_Ahmad_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-violet-500/50 hover:text-violet-400"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
          <a
            href="mailto:haseeb26@live.com"
            className="flex items-center gap-2 hover:text-violet-400"
          >
            <span className="font-mono">haseeb26@live.com</span>
          </a>
          <a
            href="tel:+4917657944232"
            className="flex items-center gap-2 hover:text-violet-400"
          >
            <span className="font-mono">+49 176 57944232</span>
          </a>
          <span className="flex items-center gap-2">Leipzig, Germany</span>
        </div>
      </div>
    </section>
  );
}

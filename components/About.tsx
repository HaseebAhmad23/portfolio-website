import { LANGUAGES } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-white">About Me</h2>
        <p className="text-lg leading-relaxed text-zinc-400">
          I’m a Full Stack Developer with 7+ years of hands-on experience building and maintaining production-grade web 
          applications. My core expertise lies in Python (Django, FastAPI, Flask) and modern JavaScript frameworks such 
          as React, Vue, and Next.js, enabling me to deliver robust, scalable, and user-focused solutions. I have a 
          strong foundation in designing API-driven systems, integrating complex business logic, and translating evolving 
          requirements into clean, maintainable code. My work often focuses on improving performance, reliability, and 
          operational efficiency across applications.

          In addition to application development, I bring experience in DevOps practices, including containerization with 
          Docker, working with cloud-native environments on AWS and Azure, and building deployment workflows that ensure 
          consistency across development and production environments.

          I also have experience integrating AI-driven features, such as personalized chatbots, into real-world applications, 
          with a focus on usability, scalability, and practical impact.

          I enjoy working on challenging problems, taking ownership of features end-to-end, and contributing to systems that
          deliver measurable value to users and businesses.
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

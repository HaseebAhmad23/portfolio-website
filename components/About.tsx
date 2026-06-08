import { LANGUAGES } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-3xl md:max-w-5xl lg:max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold text-white">About Me</h2>
        <p className="text-lg leading-relaxed text-zinc-400">
          I’m a Full Stack & DevOps Engineer with 7+ years of hands-on experience building, deploying, and maintaining production-grade web applications and cloud-native platforms. 
          My core expertise lies in Python (Django, FastAPI, Flask) and modern JavaScript frameworks such as React, Vue, and Next.js, enabling me to deliver scalable, reliable, and user-focused solutions. 
          I have a strong foundation in designing API-driven systems, integrating complex business logic, and translating evolving requirements into clean, maintainable code while continuously improving 
          application performance, reliability, and operational efficiency.
        <br /><br />

          In addition to application development, I have extensive experience with DevOps and infrastructure management, including containerization with Docker, CI/CD automation, GitOps workflows, and 
          cloud platforms such as AWS and Azure. I have designed and managed private cloud infrastructure using Docker Swarm clusters, leveraging Portainer for centralized application deployment and 
          management. My experience also includes configuring Traefik for reverse proxying, load balancing, and sticky sessions, as well as implementing centralized logging and observability solutions 
          using Grafana Loki and Grafana dashboards for log analysis, monitoring, and visualization. 
        <br /><br />

          I also have experience integrating AI-driven features, such as personalized chatbots, into real-world applications, with a focus on usability, scalability, and practical business impact. 
          I enjoy solving complex technical challenges, taking ownership of features and infrastructure end-to-end, and building systems that deliver measurable value to users and organizations.
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

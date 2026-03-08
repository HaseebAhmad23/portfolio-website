"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/config";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-zinc-800/50 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Contact Me
        </h2>
        <p className="mb-10 text-zinc-400">
          Interested in hiring me or starting a freelance project? Send me a
          message and I'll get back to you as soon as possible.
        </p>
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="Portfolio Contact - New Message"
          />
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            >
              <option value="job">Job Opportunity</option>
              <option value="freelance">Freelance Project</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          {formStatus === "success" && (
            <p className="rounded-lg bg-emerald-500/20 p-3 text-emerald-400">
              Thank you! Your message has been sent. I'll get back to you soon.
            </p>
          )}
          {formStatus === "error" && (
            <p className="rounded-lg bg-red-500/20 p-3 text-red-400">
              Something went wrong. Please try again or email me directly at{" "}
              <a
                href="mailto:haseeb26@live.com"
                className="underline hover:text-red-300"
              >
                haseeb26@live.com
              </a>
            </p>
          )}
          <button
            type="submit"
            disabled={formStatus === "sending"}
            className="w-full rounded-lg bg-violet-500 px-6 py-3 font-medium text-zinc-900 transition-colors hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {formStatus === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="mt-10 flex flex-wrap gap-6 text-zinc-400">
          <a
            href="mailto:haseeb26@live.com"
            className="flex items-center gap-2 hover:text-violet-400"
          >
            haseeb26@live.com
          </a>
          <a
            href="tel:+4917657944232"
            className="flex items-center gap-2 hover:text-violet-400"
          >
            +49 176 57944232
          </a>
          <a
            href="https://linkedin.com/in/haseeb-ahmad-25a02aa7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-violet-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/HaseebAhmad23"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-violet-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

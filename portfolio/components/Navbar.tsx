"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-violet-400">
          Haseeb Ahmad
        </a>
        <button
          className="md:hidden rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`absolute left-0 right-0 top-full mt-1 flex flex-col gap-1 border-b border-zinc-800/50 bg-background/95 p-4 backdrop-blur-lg md:static md:mt-0 md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white md:px-0 md:py-0 md:hover:bg-transparent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

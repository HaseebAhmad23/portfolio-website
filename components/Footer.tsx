export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Haseeb Studios. All rights reserved.
      </div>
    </footer>
  );
}

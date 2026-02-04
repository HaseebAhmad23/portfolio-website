import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Education,
  Certifications,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const projects = [
  {
    title: "Cheater Detection ML (Demo)",
    desc: "Supervised ML model that classifies players as cheaters vs legit using time-series gameplay data.",
    tech: ["Python", "Pandas", "Flask", "Scikit"],
    repo: "https://github.com/mckaykn/capstone",
    demo: "#",
  },
  {
    title: "Paint Store Minigame",
    desc: "A Pygame-based minigame about mixing paint colors; polished UI and replay features.",
    tech: ["Python", "Pygame"],
    repo: "https://github.com/mckaykn",
    demo: "#",
  },
  {
    title: "Personal Website (This)",
    desc: "React + Tailwind single-file component tailored to job apps. Responsive, resume-ready.",
    tech: ["React", "Tailwind", "Vite"],
    repo: "https://github.com/mckaykn/HireMcKayWebsite",
    demo: "#",
  },
  {
    title: "grip-n-pull.com",
    desc: "I recently built this website in Shopify for a small company!",
    tech: ["HTML", "CSS", "Liquid"],
    link: "https://grip-n-pull.com/",
    demo: "https://grip-n-pull.com/",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-custom1 text-custom3 antialised">
      <header className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-custom3">McKay Nielson</h1>
          <p className="mt-1 text-sm text-custom3">Aspiring Software Developer: Full-stack & ML</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="/MCKAY NIELSON Software Engineer Resume.pdf" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-custom3 bg-custom1 shadow-sm text-sm hover:bg-custom2">
            <Download size={16} /> Resume
          </a>
          <a href="https://github.com/mckaykn" aria-label="GitHub" className="p-2 rounded-md hover:bg-custom2">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mckay-nielson-871518325/" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-custom2">
            <Linkedin size={18} />
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-custom1 border border-custom3 rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold text-custom3">Hello, I'm McKay</h2>
            <p className="mt-4 text-custom3 leading-relaxed">
              I build practical software with clean interfaces and robust backends. I enjoy solving problems with code, learning new tools, and delivering
              products that people can actually use. My background blends customer-facing experience with self-driven technical projects in Python and
              JavaScript.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-custom1 p-4 text-custom1 bg-custom3">
                <h3 className="text-sm font-semibold ">Work</h3>
                <p className="mt-2 text-sm text-custom1">Sherwin-Williams: sales lead for 6 years; team leadership & client delivery.</p>
              </div>
              <div className="rounded-lg border border-custom1 text-custom1 p-4 bg-custom3">
                <h3 className="text-sm font-semibold">Education</h3>
                <p className="mt-2 text-sm">B.S. Computer Science<br></br>Western Governors University</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold">Selected Projects</h3>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <article key={p.title} className="p-4 border border-custom1 text-custom1 rounded-lg bg-custom3">
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-custom1">{p.desc}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-xs text-custom3">{p.tech.join(" • ")}</div>
                      <div className="flex items-center gap-2">
                        <a href={p.repo} className="text-xs underline">Repo</a>
                        <a href={p.demo} className="text-xs underline">Demo</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "Java", "React", "Tailwind", "C++", "Machine Learning", "SQL", "REST APIs"].map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-md text-custom1 border bg-custom3">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-custom1 border border-custom3 shadow">
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-custom3">I'm open to junior dev roles — feel free to reach out!</p>

              <div className="mt-4 flex gap-2">
                <a href="mailto:mckayknielson@gmail.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-custom3 bg-custom1 text-sm hover:bg-custom3 hover:text-custom1">
                  <Mail size={14} /> mckayknielson@gmail.com
                </a>
              </div>

              <dl className="mt-4 text-sm text-custom3">
                <div>
                  <dt className="font-medium">Location</dt>
                  <dd>Logan, UT</dd>
                </div>
                <div className="mt-2">
                  <dt className="font-medium">Open to</dt>
                  <dd>Remote / Relocate</dd>
                </div>
              </dl>
            </div>

            <div className="p-6 rounded-2xl bg-custom1 border border-custom3 shadow">
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="https://github.com/mckaykn" className="underline">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mckay-nielson-871518325/" className="underline">LinkedIn</a>
                </li>
                <li>
                  <a href="/MCKAY NIELSON Software Engineer Resume.pdf" className="underline">Resume (PDF)</a>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-custom1 shadow text-sm border border-custom3">
              <h3 className="font-semibold">Availability</h3>
              <p className="mt-2 text-custom3">Actively applying — available for interviews. Typical response within 48 hours.</p>
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <div className="rounded-xl bg-custom1 p-6 border border-custom3">
            <h3 className="text-lg font-semibold">Notes for Recruiters</h3>
            <p className="mt-2 text-sm text-custom3">
              If you'd like a technical walkthrough, I can demo my JavaFX project, ML classifier, or talk through architecture decisions. Resume and
              project links above.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-custom3">
          <div>© {new Date().getFullYear()} McKay Nielson</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/mckaykn" className="flex items-center gap-2">
              <Github size={14} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mckay-nielson-871518325/" className="flex items-center gap-2">
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

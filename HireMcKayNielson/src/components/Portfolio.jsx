import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const projects = [
  {
    title: "Cheater Detection ML (Demo)",
    desc: "Supervised ML model that classifies players as cheaters vs legit using time-series gameplay data.",
    tech: ["Python", "PyTorch", "Pandas", "Flask"],
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
    desc: "React + Tailwind single-file component tailored to job apps — responsive, resume-ready.",
    tech: ["React", "Tailwind", "Vite"],
    repo: "https://github.com/mckaykn",
    demo: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">McKay Nielson</h1>
          <p className="mt-1 text-sm text-slate-600">Aspiring Software Developer — Full-stack & ML</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="/MCKAY NIELSON Software Engineer Resume.pdf" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white shadow-sm text-sm">
            <Download size={16} /> Resume
          </a>
          <a href="https://github.com/mckaykn" aria-label="GitHub" className="p-2 rounded-md hover:bg-slate-100">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mckay-nielson-871518325/" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-slate-100">
            <Linkedin size={18} />
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold">Hello — I'm McKay</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I build practical software with clean interfaces and robust backends. I enjoy solving problems with code, learning new tools, and delivering
              products that people can actually use. My background blends customer-facing experience with self-driven technical projects in Python and
              JavaScript.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-100 p-4">
                <h3 className="text-sm font-semibold">Work</h3>
                <p className="mt-2 text-sm text-slate-600">Sherwin-Williams: sales lead for 6 years; team leadership & client delivery.</p>
              </div>
              <div className="rounded-lg border border-slate-100 p-4">
                <h3 className="text-sm font-semibold">Education</h3>
                <p className="mt-2 text-sm text-slate-600">B.S. Computer Science — Western Governors University.</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold">Selected Projects</h3>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <article key={p.title} className="p-4 border rounded-lg bg-white">
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-xs text-slate-500">{p.tech.join(" • ")}</div>
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
                  <span key={s} className="text-xs px-2 py-1 rounded-md border bg-slate-50">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-2xl bg-white shadow">
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-slate-600">I'm open to junior dev roles — feel free to reach out!</p>

              <div className="mt-4 flex gap-2">
                <a href="mailto:mckayknielson@gmail.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-sm">
                  <Mail size={14} /> mckayknielson@gmail.com
                </a>
              </div>

              <dl className="mt-4 text-sm text-slate-600">
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

            <div className="p-6 rounded-2xl bg-white shadow">
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

            <div className="p-6 rounded-2xl bg-white shadow text-sm">
              <h3 className="font-semibold">Availability</h3>
              <p className="mt-2 text-slate-600">Actively applying — available for interviews. Typical response within 48 hours.</p>
            </div>
          </aside>
        </section>

        <section className="mt-12">
          <div className="rounded-xl bg-gradient-to-r from-white to-slate-50 p-6">
            <h3 className="text-lg font-semibold">Notes for Recruiters</h3>
            <p className="mt-2 text-sm text-slate-600">
              If you'd like a technical walkthrough, I can demo my JavaFX project, ML classifier, or talk through architecture decisions. Resume and
              project links above.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-slate-600">
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

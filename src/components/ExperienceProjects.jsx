import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, ExternalLink, Github, Link as LinkIcon, Server } from 'lucide-react';

const internships = [
  {
    role: 'Intern — CEITCS Technology',
    period: 'Mar 2025 – Oct 2025',
    details:
      'Built CEITCS official site, AI chatbot, and full‑stack e‑commerce apps; deployed projects on GCP.'
  },
  {
    role: 'Intern — Shiash Info Solutions',
    period: 'Dec 2024 – Mar 2025',
    details: 'Worked on Python full‑stack apps and backend development.'
  }
];

const projects = [
  {
    title: 'Location Blood Bank Alert System',
    stack: ['MERN', 'NodeMailer', 'Render'],
    live: '#',
    github: '#'
  },
  {
    title: 'E‑Commerce Clothing Website',
    stack: ['MERN', 'Redux', 'JWT', 'REST API'],
    live: '#',
    github: '#'
  },
  {
    title: 'Bulk Mail Delivery System',
    stack: ['MERN', 'Nodemailer', 'MongoDB'],
    live: '#',
    github: '#'
  }
];

export default function ExperienceProjects() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Internships */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
            <BriefcaseBusiness />
          </span>
          <h2 className="text-2xl font-bold text-white">Internships</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {internships.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <span className="text-sm text-cyan-300">{item.period}</span>
              </div>
              <p className="mt-2 text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        id="projects"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
            <Server />
          </span>
          <h2 className="text-2xl font-bold text-white">Projects</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/70 shadow-lg backdrop-blur"
            >
              <div className="h-40 w-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                <div className="flex h-full items-center justify-center text-slate-300">Image Placeholder</div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {proj.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-600/60 px-2 py-0.5 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href={proj.live}
                    className="inline-flex items-center gap-1 text-cyan-300 transition hover:text-cyan-200"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                  <a
                    href={proj.github}
                    className="inline-flex items-center gap-1 text-slate-300 transition hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={proj.live}
                    className="ml-auto inline-flex items-center gap-1 rounded-md border border-slate-700/60 px-2 py-1 text-xs text-slate-300 transition hover:border-slate-600 hover:text-white"
                  >
                    <LinkIcon size={14} /> Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

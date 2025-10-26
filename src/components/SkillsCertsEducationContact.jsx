import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Code, Database, Github, GraduationCap, Linkedin, Mail, Server } from 'lucide-react';

const skills = [
  { group: 'Frontend', items: [
    { name: 'React', level: 90 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 92 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'Redux', level: 85 }
  ]},
  { group: 'Backend', items: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'REST APIs', level: 88 },
    { name: 'JWT', level: 80 },
    { name: 'Nodemailer', level: 82 }
  ]},
  { group: 'Database & Cloud', items: [
    { name: 'MongoDB Atlas', level: 88 },
    { name: 'Render', level: 80 },
    { name: 'Vercel', level: 82 },
    { name: 'GCP', level: 75 }
  ]},
  { group: 'Other', items: [
    { name: 'Git', level: 85 },
    { name: 'Postman', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'AI Chatbot Integration', level: 70 }
  ]}
];

const certifications = [
  'MERN Stack Web Dev (EMC)',
  'AWS Cloud Internship',
  'Python (Orange Institute)',
  'Master Vector Databases (Udemy)'
];

const education = [
  {
    degree: 'M.Sc. Computer Science',
    place: 'SRMIST',
    period: '2023–2025',
    score: 'CGPA 9.62'
  },
  {
    degree: 'B.Sc. Computer Science',
    place: 'Shasun Jain College',
    period: '2020–2023',
    score: 'CGPA 8.52'
  }
];

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-slate-200">{name}</span>
        <span className="text-slate-400">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default function SkillsCertsEducationContact() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
            <Code />
          </span>
          <h2 className="text-2xl font-bold text-white">Skills</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((grp) => (
            <div key={grp.group} className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg backdrop-blur">
              <div className="mb-4 flex items-center gap-2 text-slate-200">
                {grp.group === 'Frontend' && <Cloud className="text-cyan-300" />}
                {grp.group === 'Backend' && <Server className="text-cyan-300" />}
                {grp.group === 'Database & Cloud' && <Database className="text-cyan-300" />}
                {grp.group === 'Other' && <Code className="text-cyan-300" />}
                <h3 className="font-semibold">{grp.group}</h3>
              </div>
              <div className="space-y-3">
                {grp.items.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications & Education */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
              <Award />
            </span>
            <h2 className="text-2xl font-bold text-white">Certifications</h2>
          </div>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4 text-slate-300">
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
              <GraduationCap />
            </span>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{e.degree}</h3>
                  <span className="text-sm text-cyan-300">{e.period}</span>
                </div>
                <div className="text-slate-300">{e.place} • {e.score}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
            <Mail />
          </span>
          <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg backdrop-blur">
            <p className="text-slate-300">
              I’m open to full‑time roles, internships, and freelance opportunities. Let’s build something
              impactful together.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white" href="mailto:sathyabama@example.com">
                <Mail size={18} /> sathyabama@example.com
              </a>
            </div>
            <div className="mt-3 flex items-center gap-4">
              <a className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Simple mailto form */}
          <form
            action="mailto:sathyabama@example.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-700/60 bg-slate-950/60 px-3 py-2 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-slate-700/60 bg-slate-950/60 px-3 py-2 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-slate-300">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full rounded-lg border border-slate-700/60 bg-slate-950/60 px-3 py-2 text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-cyan-500"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center justify-center rounded-lg bg-cyan-500/90 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
              Send Message
            </button>
          </form>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-20 border-t border-slate-800/80 pt-6 text-center text-sm text-slate-400">
        Developed and Deployed with ❤️ by Sathyabama
      </div>
    </section>
  );
}

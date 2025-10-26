import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 shadow-xl backdrop-blur"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
            <User />
          </span>
          <h2 className="text-2xl font-bold text-white">About Me</h2>
        </div>
        <p className="text-slate-300">
          Enthusiastic Full Stack Developer specializing in the MERN Stack with internship
          experience at CEITCS Technology and Shiash Info Solutions. Passionate about building
          real-world web applications, AI integrations, and scalable cloud deployments.
        </p>
      </motion.div>
    </section>
  );
}

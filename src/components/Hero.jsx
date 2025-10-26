import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const glowText = {
  textShadow:
    '0 0 8px rgba(56,189,248,0.8), 0 0 20px rgba(56,189,248,0.6), 0 0 40px rgba(56,189,248,0.4)'
};

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-slate-950">
      {/* Spline full-width cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Non-blocking gradient tints for neon feel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.18),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />

      {/* Floating glow orbs */}
      <motion.div
        className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/40 px-4 py-1 text-cyan-300 backdrop-blur"
          >
            <Rocket size={16} className="text-cyan-300" />
            Full Stack • MERN • Cloud
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            style={glowText}
          >
            Hi, I’m Sathyabama — MERN Stack Developer & Cloud Enthusiast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-4 max-w-2xl text-lg text-slate-200"
          >
            I design and build modern, performant web apps with delightful user experiences and scalable cloud deployments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              View Projects
              <Rocket size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/70 px-5 py-3 font-medium text-white backdrop-blur transition hover:border-slate-600 hover:bg-slate-800"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex items-center gap-5"
          >
            <a href="mailto:sathyabama@example.com" className="text-slate-200 transition hover:text-white" aria-label="Email">
              <Mail />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-200 transition hover:text-white" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-200 transition hover:text-white" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </motion.div>
        </div>

        {/* Photo placeholder card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="ml-auto hidden rounded-2xl border border-slate-700/60 bg-slate-900/70 p-2 shadow-2xl backdrop-blur md:block"
        >
          <div className="h-72 w-56 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
            <div className="flex h-full items-center justify-center text-slate-300">
              Professional Photo
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

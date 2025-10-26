import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceProjects from './components/ExperienceProjects';
import SkillsCertsEducationContact from './components/SkillsCertsEducationContact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-lg font-semibold text-white">Sathyabama D</a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <ExperienceProjects />
        <SkillsCertsEducationContact />
      </main>
    </div>
  );
}

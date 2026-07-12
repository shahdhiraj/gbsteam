import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight as ArrowUpRightIcon,
  BookOpenCheck as BookOpenCheckIcon,
  Download as DownloadIcon,
  FileText as FileTextIcon,
  GraduationCap as GraduationCapIcon,
  Microscope as MicroscopeIcon,
  Trophy as TrophyIcon } from
'lucide-react';
const programs = [
{
  title: 'Robotics Training',
  meta: '12 weeks · Foundation',
  icon: GraduationCapIcon
},
{
  title: 'AI Bootcamp',
  meta: '8 weeks · Intermediate',
  icon: MicroscopeIcon
},
{
  title: 'STEM Education',
  meta: 'Year-round · Schools',
  icon: BookOpenCheckIcon
}];

const publications = [
{
  code: 'GBS-RP / 024',
  title: 'Low-cost autonomous navigation for complex terrain',
  type: 'Research paper',
  date: '2024'
},
{
  code: 'GBS-IR / 018',
  title: 'Applied AI: a practical framework for Nepal',
  type: 'Innovation report',
  date: '2024'
}];

export function ProgramsResearch() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-20 lg:grid-cols-[.9fr_1.1fr]">
        <div id="programs">
          <p className="eyebrow">05 / Learning programs</p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-white sm:text-5xl">
            Start where curiosity leads.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
            Practical programs for students, educators and emerging
            researchers—always led by making, testing and sharing.
          </p>
          <div className="mt-10 space-y-3">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.a
                  href="#connect"
                  key={program.title}
                  initial={
                  reduceMotion ?
                  false :
                  {
                    opacity: 0,
                    x: -14
                  }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.05
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.1] bg-white/[0.025] p-4 transition hover:border-brand-400/45 hover:bg-brand-400/[0.04] focus:outline-none focus:ring-2 focus:ring-brand-400">
                  
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-400/[0.08] text-brand-300">
                    <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold text-white">
                      {program.title}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[.12em] text-slate-500">
                      {program.meta}
                    </span>
                  </span>
                  <ArrowUpRightIcon
                    size={18}
                    className="text-slate-500 transition group-hover:text-brand-300"
                    aria-hidden="true" />
                  
                </motion.a>);

            })}
          </div>
          <a
            href="#connect"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400">
            
            View all programs <ArrowUpRightIcon size={16} aria-hidden="true" />
          </a>
        </div>

        <div
          id="research"
          className="relative overflow-hidden rounded-[26px] border border-white/[0.11] bg-[#0d1b2e] p-6 sm:p-8">
          
          <div className="absolute right-0 top-0 h-52 w-52 bg-[#086638]/10 blur-3xl" />
          <div className="relative">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow">06 / Research & publications</p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-[-.04em] text-white sm:text-4xl">
                  Ideas worth testing.
                </h2>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand-400/20 bg-brand-400/[0.06] text-brand-300">
                <FileTextIcon size={20} aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8 divide-y divide-white/[0.1] border-y border-white/[0.1]">
              {publications.map((publication) =>
              <article
                key={publication.code}
                className="group py-5 first:pt-5">
                
                  <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[.14em] text-brand-300">
                    <span>{publication.code}</span>
                    <span className="text-slate-500">{publication.date}</span>
                  </div>
                  <h3 className="mt-3 max-w-lg font-display text-xl font-bold leading-snug text-white">
                    {publication.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {publication.type}
                    </span>
                    <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-200 transition hover:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400">
                    
                      Download <DownloadIcon size={14} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              )}
            </div>
            <div className="mt-7 flex items-center gap-3 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm text-slate-300">
              <TrophyIcon
                size={18}
                className="shrink-0 text-amber-300"
                aria-hidden="true" />
              
              <span>
                <strong className="font-semibold text-white">
                  150+ awards
                </strong>{' '}
                earned through national and international competitions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
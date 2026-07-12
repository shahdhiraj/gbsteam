import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';
const milestones = [
{
  year: '2005',
  title: 'A shared beginning',
  detail:
  "GBS Team was founded by engineers determined to build a practical home for Nepal's young technology community."
},
{
  year: '2008',
  title: 'First robotics laboratory',
  detail:
  'A dedicated laboratory turns curiosity into prototypes, competitions and interdisciplinary learning.'
},
{
  year: '2012',
  title: 'National robotics champion',
  detail:
  "Our student innovators put Nepal's engineering talent on the national stage."
},
{
  year: '2016',
  title: 'International collaboration',
  detail:
  'New academic and industry relationships opened our work to global exchange.'
},
{
  year: '2020',
  title: 'Innovation center',
  detail:
  'We expanded from learning spaces to a center built for applied invention and community programs.'
},
{
  year: '2024',
  title: 'AI research expansion',
  detail:
  'GBS advances responsible AI research alongside its long-standing hardware practice.'
}];

export function MilestoneTimeline() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = milestones[selected];
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">03 / Our trajectory</p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-white sm:text-5xl">
              Built in motion.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-slate-400">
            A living record of ambitious people, brave experiments and the
            decisions that brought us here.
          </p>
        </div>
        <div className="mt-14 border-y border-white/[0.1] py-7">
          <div
            className="no-scrollbar flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="GBS history">
            
            {milestones.map((milestone, index) =>
            <button
              key={milestone.year}
              type="button"
              role="tab"
              aria-selected={selected === index}
              onClick={() => setSelected(index)}
              className={`min-w-[126px] border-l px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-brand-400 ${selected === index ? 'border-brand-400 bg-brand-400/[0.08]' : 'border-white/10 hover:bg-white/[0.04]'}`}>
              
                <span
                className={`font-mono text-xs ${selected === index ? 'text-brand-300' : 'text-slate-500'}`}>
                
                  {milestone.year}
                </span>
                <span className="mt-2 block text-xs font-medium text-slate-200">
                  {milestone.title}
                </span>
              </button>
            )}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.year}
            initial={
            reduceMotion ?
            false :
            {
              opacity: 0,
              y: 10
            }
            }
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={
            reduceMotion ?
            {
              opacity: 0
            } :
            {
              opacity: 0,
              y: -8
            }
            }
            transition={{
              duration: 0.22
            }}
            className="grid gap-5 pt-8 sm:grid-cols-[150px_1fr_auto] sm:items-center"
            role="tabpanel">
            
            <span className="font-mono text-4xl font-medium text-brand-300">
              {active.year}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                {active.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                {active.detail}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelected((selected + 1) % milestones.length)}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-brand-400/60 hover:text-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-400">
              
              Next chapter <ArrowRightIcon size={16} aria-hidden="true" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}
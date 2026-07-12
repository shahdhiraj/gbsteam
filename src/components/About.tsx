import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight as ArrowUpRightIcon, Check as CheckIcon, Lightbulb as LightbulbIcon, Settings as SettingsIcon } from 'lucide-react';

const coreAreas = [
  'Robotics Research',
  'Drone Engineering',
  'Artificial Intelligence',
  'Product Development',
  'Automation',
  'STEM Education',
  'Military Technologies',
  'Innovation & Prototyping'
];

export function About() {
  const reduceMotion = useReducedMotion();

  const animationProps = reduceMotion ? {} : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="relative bg-white dark:bg-transparent px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-16 lg:gap-24">
          {/* Top Row: Image and About Text */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div {...animationProps} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-[500px] shadow-2xl">
              <img src="/about_team.jpg" alt="GBS Team in the field" className="h-full w-full object-cover" />
              <div className="absolute left-6 top-6 rounded-xl bg-white/90 p-2 shadow-lg backdrop-blur">
                <img src="/logo.png" alt="GBS Team" className="h-8 w-auto" />
              </div>
            </motion.div>

            <motion.div {...animationProps} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500 dark:text-brand-400">ABOUT GBS TEAM</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-[#161616] dark:text-white sm:text-5xl">
                We Build <span className="text-brand-600 dark:text-brand-400">Technologies</span> That Matter.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                GBS Team is a community of engineers, researchers, innovators, and technology enthusiasts dedicated to transforming Nepal through robotics and automation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Founded by Er. Ganesh Bikram Singh Ale and Er. Yagya Prasad Devkota, our mission is to develop indigenous robotics technologies while empowering students, industries, and researchers.
              </p>
              
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {coreAreas.map(area => (
                  <li key={area} className="flex items-center gap-2 text-sm font-bold text-[#161616] dark:text-white">
                    <CheckIcon size={18} className="text-brand-600 dark:text-brand-400 shrink-0" strokeWidth={3} />
                    {area}
                  </li>
                ))}
              </ul>
              
              <a href="#projects" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#086638] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a7d45] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 dark:focus:ring-offset-[#161616]">
                Learn More <ArrowUpRightIcon size={16} />
              </a>
            </motion.div>
          </div>

          {/* Bottom Row: Vision & Mission */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Vision Card */}
            <motion.div {...animationProps} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row items-start gap-6 rounded-[2rem] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-8 lg:p-10">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-100 dark:bg-brand-400/10 text-brand-600 dark:text-brand-400">
                <LightbulbIcon size={32} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#161616] dark:text-white">Vision</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  To make Nepal self-sufficient in robotics technology for defense and drive industrial automation for national prosperity.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div {...animationProps} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-start gap-6 rounded-[2rem] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-8 lg:p-10">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-100 dark:bg-brand-400/10 text-brand-600 dark:text-brand-400">
                <SettingsIcon size={32} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-[#161616] dark:text-white">Mission</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  To research, innovate and develop advanced robotics solutions while nurturing the next generation of engineers and innovators.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
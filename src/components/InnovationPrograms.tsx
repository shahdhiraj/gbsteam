import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Bot, Building2, GraduationCap, Microscope, Shield, Plane, Sun, Factory } from 'lucide-react';

const programs = [
  { title: 'Robotics Training', icon: Bot },
  { title: 'School Robotics Lab Setup', icon: Building2 },
  { title: 'College Innovation Program', icon: GraduationCap },
  { title: 'Research Internship', icon: Microscope },
  { title: 'Defense Robotics Workshop', icon: Shield },
  { title: 'Drone Certification', icon: Plane },
  { title: 'Summer Robotics Camp', icon: Sun },
  { title: 'Industrial Automation Training', icon: Factory }
];

export function InnovationPrograms() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="innovation-programs" className="relative px-5 py-8 sm:px-8 lg:px-12 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-[1600px]">
        
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
          <h2 className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-[#161616] dark:text-white">
            Innovation Programs
          </h2>
          <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
        </div>

        <motion.div 
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] bg-white dark:bg-[#08101a] py-8 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl border border-black/5 dark:border-white/5"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-4 text-center px-2 group cursor-pointer">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 dark:bg-[#086638]/20 transition-colors group-hover:bg-brand-100 dark:group-hover:bg-[#086638]/40 shadow-sm dark:shadow-none">
                    <Icon size={32} className="text-brand-600 dark:text-[#4ade80] transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[11px] leading-relaxed font-bold uppercase tracking-wider text-[#161616] dark:text-white px-1 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                    {program.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check as CheckIcon, Users, Cog, Lightbulb, GraduationCap } from 'lucide-react';

const achievements = [
  'Robotics Entrepreneur',
  'Robotics Researcher',
  'Product Developer',
  'STEM Educator',
  'Innovation Leader'
];

const timeline = [
  { icon: Users, text: '20+ Years Experience' },
  { icon: Cog, text: '100+ Robotics Projects' },
  { icon: Lightbulb, text: 'Research & Innovation' },
  { icon: Cog, text: 'Industry Collaboration' },
  { icon: GraduationCap, text: 'National Impact' }
];

export function FounderProfile() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="founder" className="relative px-5 py-12 sm:px-8 lg:px-12 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-12">
          
          {/* Top Row: Profile and Achievements */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
            {/* Profile and Quote */}
            <motion.div 
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-[#0c1a2d] p-6 sm:p-8 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
            >
              <div className="shrink-0">
                <img 
                  src="/founder.png" 
                  alt="Er. Ganesh Bikram Singh Ale Magar" 
                  className="h-48 w-40 sm:h-56 sm:w-48 rounded-2xl object-cover shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-700 dark:text-white">
                  Er. Ganesh Bikram Singh Ale Magar
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#161616] dark:text-brand-400 mb-4">
                  Founder | Robotics Entrepreneur | Researcher
                </p>
                <blockquote className="text-sm sm:text-base italic text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-brand-500 pl-4 py-1 bg-brand-50 dark:bg-transparent rounded-r-lg">
                  "My dream is to make Nepal self-sufficient in robotics technology and contribute to national prosperity through innovation, defense technology, and industrial automation."
                </blockquote>
                <a href="#" className="mt-6 self-start inline-flex rounded-lg bg-[#086638] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#0a7d45] shadow-sm">
                  Read Full Profile
                </a>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#081510] rounded-[2rem] p-8 shadow-xl border border-white/5 flex flex-col justify-center"
            >
              <h3 className="font-display text-lg font-bold text-[#4ade80] mb-8 uppercase tracking-wider">
                ACHIEVEMENTS
              </h3>
              <ul className="flex flex-col gap-5">
                {achievements.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[15px] font-semibold text-[#ffffff]">
                    <CheckIcon size={20} className="text-[#4ade80] shrink-0" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

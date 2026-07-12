import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, Cog, Lightbulb, GraduationCap } from 'lucide-react';

const timeline = [
  { icon: Users, text: '20+ Years Experience' },
  { icon: Cog, text: '100+ Robotics Projects' },
  { icon: Lightbulb, text: 'Research & Innovation' },
  { icon: Cog, text: 'Industry Collaboration' },
  { icon: GraduationCap, text: 'National Impact' }
];

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative px-5 py-4 sm:px-8 lg:px-12 bg-white dark:bg-transparent -mt-8 relative z-20">
      <div className="mx-auto max-w-[1600px]">
        <motion.div 
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#0c1a2d] rounded-[2rem] py-6 px-6 sm:py-8 sm:px-10 border border-black/5 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-xl"
        >
          <h3 className="font-display text-[15px] font-bold text-center text-[#161616] dark:text-white mb-6 uppercase tracking-wider">
            WHY CHOOSE GBS TEAM
          </h3>
          
          <div className="relative flex justify-between items-start px-2 sm:px-6">
            {/* Connecting Line */}
            <div className="absolute top-8 left-16 right-16 h-0.5 bg-brand-100 dark:bg-brand-900/50 -z-10 hidden sm:block" />
            
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-3 text-center max-w-[100px]">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white dark:bg-[#161616] border-[2px] border-brand-500 shadow-sm transition-transform hover:scale-110">
                    <Icon size={26} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

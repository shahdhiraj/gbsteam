import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BrainCircuit as BrainCircuitIcon, GraduationCap as GraduationCapIcon } from 'lucide-react';

const expertise = [
  {
    title: 'UGV',
    image: '/military_robot_1783827943102.png',
    text: 'Intelligent unmanned ground vehicles for defense, inspection and industry.'
  },
  {
    title: 'UAV',
    image: '/surveillance_drone_1783827953891.png',
    text: 'Drone research, autonomous navigation, surveillance and mapping solutions.'
  },
  {
    title: 'ROV',
    image: '/auto_vehicle_1783828024359.png',
    text: 'Underwater robotic systems for inspection, exploration and research.'
  },
  {
    title: 'AI & VISION',
    icon: BrainCircuitIcon,
    text: 'Computer Vision, Machine Learning and Intelligent Automation.'
  },
  {
    title: 'AUTOMATION',
    image: '/robotic_arm_1783827973112.png',
    text: 'Industrial automation, PLC, IoT, Embedded systems and smart manufacturing.'
  },
  {
    title: 'STEM EDUCATION',
    icon: GraduationCapIcon,
    text: 'Hands-on robotics education, innovation labs and engineering workshops.'
  }
];

export function Expertise() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="expertise" className="relative bg-white dark:bg-transparent px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
          <h2 className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-[#161616] dark:text-white">
            Our Expertise
          </h2>
          <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
        </div>

        <div className="relative flex w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex gap-6 shrink-0 pr-6"
            animate={reduceMotion ? {} : { x: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {[...expertise, ...expertise].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${index}`}
                  className="group flex flex-col sm:flex-row items-center gap-4 overflow-hidden rounded-[1.25rem] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-[#0c1a2d] p-5 transition-all hover:border-brand-500/30 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(74,222,128,0.05)] w-[280px] sm:w-[320px]"
                >
                  <div className="flex shrink-0 items-center justify-center h-20 w-20 rounded-xl bg-white/50 dark:bg-white/5">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-full w-full object-contain drop-shadow-md" />
                    ) : Icon ? (
                      <Icon size={36} className="text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
                    ) : null}
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <h3 className="font-display text-sm font-bold text-brand-700 dark:text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
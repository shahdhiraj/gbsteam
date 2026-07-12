import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const projects = [
  {
    title: 'MILITARY ROBOT',
    technologies: 'AI, UGV, IoT',
    image: '/project_tracked_robot.jpg'
  },
  {
    title: 'SURVEILLANCE DRONE',
    technologies: 'UAV, AI, GPS',
    image: '/project_hexacopter.jpg'
  },
  {
    title: 'FIRE FIGHTING ROBOT',
    technologies: 'UGV, Pump, IoT',
    image: '/fire_robot_1783827963752.png'
  },
  {
    title: 'ROBOTIC ARM',
    technologies: 'Servo, AI, Vision',
    image: '/project_arm_robot.jpg'
  },
  {
    title: 'INSPECTION ROBOT',
    technologies: 'UGV, Camera',
    image: '/inspection_robot_1783827992312.png'
  },
  {
    title: 'AGRICULTURAL ROBOT',
    technologies: 'AI, IoT, GPS',
    image: '/agricultural_robot_1783828005575.png'
  },
  {
    title: 'HUMANOID ROBOT',
    technologies: 'AI, Motion',
    image: '/humanoid_robot_1783828014839.png'
  },
  {
    title: 'AUTONOMOUS VEHICLE',
    technologies: 'AI, Sensors',
    image: '/auto_vehicle_1783828024359.png'
  }
];

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative bg-white dark:bg-transparent px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        
        <div className="mb-8 flex items-center justify-between">
          <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          <h2 className="px-6 font-mono text-sm font-bold uppercase tracking-[0.15em] text-[#161616] dark:text-white">
            Featured Projects
          </h2>
          <div className="flex-1 flex justify-end items-center">
            <div className="h-px w-full bg-black/10 dark:bg-white/10 mr-6" />
            <a href="#all-projects" className="group flex shrink-0 items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300">
              View All Projects
              <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-[1.25rem] bg-white dark:bg-[#111827] border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:hover:border-brand-500/30"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-3 left-3 rounded-lg bg-white/90 dark:bg-brand-500/90 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-brand-700 dark:text-white shadow-sm backdrop-blur">
                  GBS PROJECTS
                </div>
              </div>
              
              <div className="flex flex-col p-5 border-t border-black/5 dark:border-white/10 bg-white dark:bg-transparent">
                <h3 className="font-display text-[15px] font-bold tracking-wider uppercase text-[#161616] dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono tracking-wide">
                  Technologies: {project.technologies}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Award as AwardIcon,
  Building2 as Building2Icon,
  FolderKanban as FolderKanbanIcon,
  GraduationCap as GraduationCapIcon,
  type LucideIcon } from
'lucide-react';
type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};
const stats: Stat[] = [
{
  value: 20,
  suffix: '+',
  label: 'Years of excellence',
  icon: AwardIcon
},
{
  value: 500,
  suffix: '+',
  label: 'Projects completed',
  icon: FolderKanbanIcon
},
{
  value: 150,
  suffix: '+',
  label: 'Awards & recognitions',
  icon: AwardIcon
},
{
  value: 12000,
  suffix: '+',
  label: 'Students empowered',
  icon: GraduationCapIcon
},
{
  value: 75,
  suffix: '+',
  label: 'Partners nationwide',
  icon: Building2Icon
}];

function CountUp({ stat }: {stat: Stat;}) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-40px'
  });
  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setCount(stat.value);
      return;
    }
    const duration = 1200;
    const started = performance.now();
    let animationFrame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      setCount(Math.round(stat.value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, reduceMotion, stat.value]);
  const Icon = stat.icon;
  return (
    <motion.div
      ref={ref}
      whileHover={
      reduceMotion ?
      {} :
      {
        y: -4
      }
      }
      className="group border-l border-white/10 px-5 py-4 first:border-l-0 sm:px-7">
      
      <Icon
        size={17}
        strokeWidth={1.7}
        className="mb-5 text-brand-400 transition group-hover:text-white"
        aria-hidden="true" />
      
      <div className="font-mono text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
    </motion.div>);

}
export function ImpactStats() {
  return (
    <section id="impact" className="relative px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px] rounded-[22px] border border-white/[0.11] bg-white/[0.035] shadow-[0_20px_65px_rgba(0,0,0,0.14)] backdrop-blur-sm">
        <div className="grid grid-cols-2 divide-y divide-white/10 md:grid-cols-5 md:divide-y-0">
          {stats.map((stat) =>
          <CountUp key={stat.label} stat={stat} />
          )}
        </div>
      </div>
    </section>);

}
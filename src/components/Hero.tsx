import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown as ArrowDownIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Play as PlayIcon } from
'lucide-react';
export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="top"
      className="relative isolate min-h-[860px] overflow-hidden px-5 pb-16 pt-36 sm:px-8 lg:min-h-screen lg:px-12 lg:pt-44">
      
      <div className="blueprint-grid absolute inset-0 -z-20 opacity-40" />
      <div className="hero-illumination absolute -right-32 top-0 -z-10 h-[680px] w-[680px] rounded-full opacity-70" />
      <div className="absolute left-[9%] top-36 -z-10 h-1 w-24 bg-brand-400/70 shadow-[0_0_22px_2px_rgba(74, 222, 128,0.6)]" />
      <div className="absolute left-[9%] top-36 -z-10 h-24 w-px bg-brand-400/30" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        <motion.div
          initial={
          reduceMotion ?
          false :
          {
            opacity: 0,
            y: 22
          }
          }
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut'
          }}
          className="relative z-10 max-w-3xl">
          
          <div className="mb-7 flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-brand-300">
            <span className="h-px w-8 bg-brand-400" />
            RESEARCH. • INNOVATION. • AUTOMATION.
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
            Building Nepal&apos;s Future with{' '}
            <span className="text-brand-300">Robotics &amp; Engineering.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            GBS Team is Nepal&apos;s leading Robotics Research &amp; Development organization founded by Er. Ganesh Bikram Singh Ale and Er. Yagya Prasad Devkota. We specialize in Robotics (UGV, UAV, ROV &amp; Military Technologies), AI, Automation, and STEM Education while nurturing the next generation of innovators.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#programs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#086638] px-5 text-sm font-semibold text-white transition hover:bg-[#0a7d45] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-[#161616]">
              
              Explore programs <ArrowUpRightIcon size={17} aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 text-sm font-semibold text-slate-100 transition hover:border-brand-400/50 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-400">
              
              <PlayIcon size={15} fill="currentColor" aria-hidden="true" />{' '}
              Watch our story
            </a>
          </div>
          <div className="mt-14 flex items-center gap-4 text-xs text-slate-400">
            <div className="flex -space-x-2" aria-hidden="true">
              {['#4ade80', '#7C3AED', '#086638', '#22C55E'].map((color) =>
              <span
                key={color}
                className="h-7 w-7 rounded-full border-2 border-[#161616]"
                style={{
                  backgroundColor: color
                }} />

              )}
            </div>
            <span>
              <strong className="font-semibold text-white">12,000+</strong>{' '}
              innovators in our community
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={
          reduceMotion ?
          false :
          {
            opacity: 0,
            scale: 0.96
          }
          }
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: 'easeOut'
          }}
          className="relative mx-auto w-full max-w-[590px] lg:justify-self-end"
          aria-label="Abstract robotic arm visualization"
          role="img">
          
          <div className="absolute inset-[13%] rounded-full border border-brand-400/15" />
          <div className="absolute inset-[23%] rounded-full border border-dashed border-brand-400/20" />
          <motion.div
            animate={
            reduceMotion ?
            {} :
            {
              rotate: 360
            }
            }
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-[8%] rounded-full border border-dashed border-indigo-300/20" />
          
          <motion.img
            src="/drone.png"
            alt="GBS Team Hexacopter"
            className="relative z-10 mx-auto h-auto w-[90%] cursor-pointer drop-shadow-[0_20px_45px_rgba(74,222,128,0.25)]"
            animate={
              reduceMotion
                ? {}
                : {
                    y: [-15, 15, -15],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="absolute right-1 top-[16%] z-20 cursor-default rounded-xl border border-brand-400/30 bg-[#0b1728]/85 px-3 py-2 font-mono text-[10px] tracking-wider text-brand-200 backdrop-blur transition-colors hover:border-brand-400/60 hover:bg-[#0b1728]"
          >
            UAV STATUS / 04 <span className="ml-3 text-brand-400">ONLINE</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            className="absolute bottom-[12%] left-1 z-20 cursor-default rounded-xl border border-white/10 bg-[#0b1728]/85 p-3 backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-[#0b1728]"
          >
            <p className="font-mono text-[9px] uppercase tracking-[.16em] text-slate-400">
              Flight Control System
            </p>
            <p className="mt-1 font-mono text-lg text-white">
              99.8<span className="text-xs text-brand-400">%</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#impact"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-lg px-3 py-2 font-mono text-[10px] uppercase tracking-[.2em] text-slate-400 hover:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400 lg:flex">
        
        Scroll to explore <ArrowDownIcon size={13} aria-hidden="true" />
      </a>
    </section>);

}
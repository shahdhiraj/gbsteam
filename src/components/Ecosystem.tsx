import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight as ArrowUpRightIcon,
  Building2 as Building2Icon,
  Handshake as HandshakeIcon,
  Newspaper as NewspaperIcon } from
'lucide-react';
const partners = [
'NEPAL ACADEMY',
'KATHMANDU UNIVERSITY',
'NATIONAL INNOVATION',
'STEM NEPAL',
'FUTURE LABS',
'TECH COMMUNITY'];

const news = [
{
  tag: 'Community',
  date: '06.12.2024',
  title: 'GBS opens its annual innovation challenge to schools across Nepal.'
},
{
  tag: 'Research',
  date: '25.11.2024',
  title: 'A new field robotics initiative for safer emergency response.'
},
{
  tag: 'Education',
  date: '07.10.2024',
  title: 'Bringing hands-on AI education into the classroom.'
}];

export function Ecosystem() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="border-y border-white/[0.07] bg-[#0a1627] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow">07 / Ecosystem</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-white sm:text-5xl">
                Progress is a team sport.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-400">
              We work alongside government, universities, schools and industry
              to create lasting technical capability.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 border-l border-t border-white/[0.1] sm:grid-cols-3">
            {partners.map((partner, index) =>
            <motion.div
              key={partner}
              initial={
              reduceMotion ?
              false :
              {
                opacity: 0
              }
              }
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.04
              }}
              className="group flex min-h-[115px] items-center justify-center border-b border-r border-white/[0.1] p-5 text-center">
              
                <span className="font-display text-sm font-bold tracking-[.08em] text-slate-400 transition group-hover:text-brand-300">
                  {partner}
                </span>
              </motion.div>
            )}
          </div>
          <div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-white/[0.1] bg-white/[0.025] p-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#086638]/20 text-brand-300">
                <HandshakeIcon size={20} aria-hidden="true" />
              </span>
              <p className="text-sm text-slate-300">
                Bring your institution into Nepal&apos;s innovation ecosystem.
              </p>
            </div>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400">
              
              Partner with GBS <ArrowUpRightIcon size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">08 / From the lab</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-white sm:text-5xl">
                What&apos;s in motion.
              </h2>
            </div>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400">
              
              View all stories <ArrowUpRightIcon size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {news.map((article, index) =>
            <motion.article
              key={article.title}
              initial={
              reduceMotion ?
              false :
              {
                opacity: 0,
                y: 12
              }
              }
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.06
              }}
              className="group flex min-h-[270px] flex-col justify-between rounded-[22px] border border-white/[0.1] bg-white/[0.025] p-6">
              
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-brand-400/20 bg-brand-400/[0.05] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.13em] text-brand-300">
                    {article.tag}
                  </span>
                  <NewspaperIcon
                  size={18}
                  className="text-slate-500"
                  aria-hidden="true" />
                
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-500">
                    {article.date}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug text-white">
                    {article.title}
                  </h3>
                  <a
                  href="#connect"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition group-hover:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400">
                  
                    Read article{' '}
                    <ArrowUpRightIcon size={15} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <section id="connect" className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="relative mx-auto overflow-hidden rounded-[28px] border border-brand-400/25 bg-[#0d2345] px-7 py-12 sm:px-12 sm:py-16 lg:max-w-[1280px]">
          <div className="blueprint-grid absolute inset-0 opacity-35" />
          <div className="absolute right-[-7rem] top-[-10rem] h-80 w-80 rounded-full bg-[#086638]/30 blur-3xl" />
          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow text-brand-200">09 / Join the build</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.05em] text-white sm:text-5xl lg:text-6xl">
                Ready to build the future?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
                Whether you&apos;re a student, sponsor, researcher or
                institution, there&apos;s a meaningful place for you at GBS
                Team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@gbsteam.org"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#161616] transition hover:bg-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-300">
                
                Start a conversation{' '}
                <ArrowUpRightIcon size={16} aria-hidden="true" />
              </a>
              <a
                href="#top"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-300">
                
                Explore GBS <Building2Icon size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>);

}
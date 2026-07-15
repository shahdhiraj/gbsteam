import React, { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import {
  ArrowUpRight as ArrowUpRightIcon,
  Cpu as CpuIcon,
  GraduationCap as GraduationCapIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  FlaskConical as FlaskIcon,
  ChevronRight as ChevronRightIcon,
  Building2 as Building2Icon,
} from 'lucide-react';

const companies = [
  {
    id: 'gbs-robotics',
    name: 'GBS Robotics',
    tagline: 'Unmanned Systems & Field Robotics',
    description:
      'The flagship engineering arm of GBS Group, specializing in the design and deployment of Unmanned Ground Vehicles (UGV), Unmanned Aerial Vehicles (UAV), and Remotely Operated Vehicles (ROV). GBS Robotics delivers rugged, mission-ready autonomous systems for defence, agriculture, and disaster response.',
    focus: ['UGV Systems', 'Hexacopter UAV', 'ROV Engineering', 'Field Autonomy'],
    color: '#4ade80',
    accent: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.25)',
    Icon: CpuIcon,
    year: '2019',
    sector: 'Engineering & Defence',
  },
  {
    id: 'gbs-defense',
    name: 'GBS Defense',
    tagline: 'Military-Grade Technology Solutions',
    description:
      "Dedicated to Nepal's national security ecosystem, GBS Defense researches and develops indigenous military robotics, surveillance platforms, and counter-drone technologies. The unit works in close coordination with national security agencies to build sovereign defence capabilities.",
    focus: ['Counter-Drone Systems', 'Surveillance Platforms', 'Tactical Robotics', 'Military AI'],
    color: '#f59e0b',
    accent: 'rgba(245,158,11,0.10)',
    border: 'rgba(245,158,11,0.25)',
    Icon: ShieldIcon,
    year: '2021',
    sector: 'Defence & Security',
  },
  {
    id: 'gbs-automation',
    name: 'GBS Automation',
    tagline: 'Industrial Automation & Smart Systems',
    description:
      "Powering Nepal's industrial revolution through cutting-edge automation, PLC integration, SCADA systems, and smart manufacturing solutions. GBS Automation partners with factories and enterprises to modernize production lines and eliminate inefficiencies through intelligent control systems.",
    focus: ['PLC & SCADA', 'Smart Manufacturing', 'IoT Integration', 'Process Automation'],
    color: '#60a5fa',
    accent: 'rgba(96,165,250,0.10)',
    border: 'rgba(96,165,250,0.25)',
    Icon: ZapIcon,
    year: '2020',
    sector: 'Industry & Manufacturing',
  },
  {
    id: 'gbs-education',
    name: 'GBS Education',
    tagline: 'STEM & Robotics Learning Ecosystem',
    description:
      'Nurturing the next generation of Nepali innovators through structured STEM programs, robotics workshops, and competitive training. GBS Education runs bootcamps, school outreach initiatives, and university-level research mentorship, creating a pipeline of skilled engineers and scientists.',
    focus: ['STEM Bootcamps', 'Robotics Workshops', 'University Mentorship', 'Innovation Challenges'],
    color: '#a78bfa',
    accent: 'rgba(167,139,250,0.10)',
    border: 'rgba(167,139,250,0.25)',
    Icon: GraduationCapIcon,
    year: '2020',
    sector: 'Education & Research',
  },
  {
    id: 'gbs-ai',
    name: 'GBS AI Labs',
    tagline: 'Artificial Intelligence & Machine Learning',
    description:
      'The research division advancing applied AI, computer vision, natural language processing, and embedded ML for real-world Nepali contexts. GBS AI Labs collaborates with academic institutions and government bodies to develop localized AI solutions that address agriculture, healthcare, and infrastructure challenges.',
    focus: ['Computer Vision', 'Embedded ML', 'NLP & Data', 'Applied AI Research'],
    color: '#f472b6',
    accent: 'rgba(244,114,182,0.10)',
    border: 'rgba(244,114,182,0.25)',
    Icon: FlaskIcon,
    year: '2022',
    sector: 'Research & AI',
  },
  {
    id: 'gbs-global',
    name: 'GBS Global',
    tagline: 'International Partnerships & Export',
    description:
      "The international-facing arm of the GBS Group, fostering global partnerships, technology transfer, and cross-border innovation collaborations. GBS Global connects Nepal's engineering talent with the world, supporting technology exports, joint ventures, and international research programs.",
    focus: ['Global Partnerships', 'Tech Export', 'Joint Ventures', 'International R&D'],
    color: '#34d399',
    accent: 'rgba(52,211,153,0.10)',
    border: 'rgba(52,211,153,0.25)',
    Icon: GlobeIcon,
    year: '2023',
    sector: 'International Affairs',
  },
];

const stats = [
  { value: '6', label: 'Group Companies' },
  { value: '5+', label: 'Years of Innovation' },
  { value: '200+', label: 'Team Members' },
  { value: '12K+', label: 'Community Reach' },
];

const timeline = [
  {
    year: '2019',
    title: 'GBS Robotics Founded',
    body: 'Er. Ganesh Bikram Singh Ale and Er. Yagya Prasad Devkota establish GBS Team with a focus on field robotics and autonomous systems for Nepal.',
  },
  {
    year: '2020',
    title: 'GBS Automation & GBS Education Launch',
    body: "Responding to industry demand, GBS Automation opens its doors to modernize Nepal's factories. GBS Education simultaneously launches its first STEM bootcamps for school students.",
  },
  {
    year: '2021',
    title: 'GBS Defense Established',
    body: 'A dedicated defense technology division is founded to develop indigenous military robotics and surveillance platforms in partnership with national security institutions.',
  },
  {
    year: '2022',
    title: 'GBS AI Labs Opens',
    body: 'With AI becoming central to every domain, GBS AI Labs is established as a dedicated research unit for applied machine learning, computer vision, and embedded AI.',
  },
  {
    year: '2023',
    title: 'GBS Global — Going International',
    body: "The group formalizes its international partnerships and technology export activities under GBS Global, connecting Nepal's talent with the world stage.",
  },
  {
    year: '2024+',
    title: 'Expanding the Ecosystem',
    body: 'The GBS Group continues to grow — new collaborations, new product lines, and a growing community of 12,000+ innovators across Nepal.',
  },
];

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GroupPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* ── Hero ── */}
      <section
        id="group-top"
        className="relative isolate overflow-hidden px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pt-48"
      >
        <div className="blueprint-grid absolute inset-0 -z-20 opacity-30" />
        <div className="absolute -right-32 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#086638]/20 blur-[80px]" />
        <div className="absolute -left-32 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[80px]" />

        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-400" />
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-brand-300">
                GBS GROUP OF COMPANIES
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-[0.97] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-[80px]">
              One Vision,{' '}
              <span className="text-brand-300">Six Pillars</span>{' '}
              <br className="hidden lg:block" />
              of Innovation.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              The GBS Group is a constellation of specialized companies united under a single mission — to make Nepal
              self-reliant in advanced technology through robotics, AI, defense systems, education, and global
              collaboration.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#companies"
                id="explore-companies-btn"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#086638] px-6 text-sm font-semibold text-white transition hover:bg-[#0a7d45] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-[#0a0f1a]"
              >
                Explore Companies <ArrowUpRightIcon size={16} aria-hidden="true" />
              </a>
              <a
                href="#connect"
                id="group-partner-btn"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 text-sm font-semibold text-slate-100 transition hover:border-brand-400/50 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-brand-400"
              >
                Partner With Us <ChevronRightIcon size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="mt-20 grid grid-cols-2 divide-x divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur sm:grid-cols-4 sm:divide-y-0"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center gap-1 px-6 py-7">
                <span className="font-display text-4xl font-bold text-white">{stat.value}</span>
                <span className="text-center font-mono text-[10px] uppercase tracking-[.15em] text-slate-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Company Cards ── */}
      <section id="companies" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <FadeIn className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Our Companies</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
                The GBS Ecosystem
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Each company is an autonomous centre of excellence, connected by shared values and a unified group strategy.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companies.map((company, index) => {
              const Icon = company.Icon;
              return (
                <FadeIn key={company.id} delay={index * 0.07}>
                  <motion.article
                    id={`company-card-${company.id}`}
                    whileHover={reduceMotion ? {} : { y: -6, transition: { duration: 0.25 } }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border p-7 transition-shadow hover:shadow-[0_0_40px_rgba(74,222,128,0.06)]"
                    style={{
                      borderColor: company.border,
                      background: `linear-gradient(145deg, ${company.accent}, #0c1221)`,
                    }}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div
                        className="grid h-12 w-12 place-items-center rounded-xl"
                        style={{ background: company.accent, border: `1px solid ${company.border}` }}
                      >
                        <Icon size={22} style={{ color: company.color }} aria-hidden="true" />
                      </div>
                      <div className="text-right">
                        <span
                          className="font-mono text-[9px] uppercase tracking-[.16em]"
                          style={{ color: company.color }}
                        >
                          Est. {company.year}
                        </span>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[.12em] text-slate-500">
                          {company.sector}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">{company.name}</h3>
                    <p
                      className="mt-1 font-mono text-[11px] uppercase tracking-[.14em]"
                      style={{ color: company.color }}
                    >
                      {company.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{company.description}</p>

                    {/* Focus tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {company.focus.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.12em]"
                          style={{ borderColor: company.border, color: company.color, background: company.accent }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA link */}
                    <a
                      href="#connect"
                      id={`learn-more-${company.id}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                      style={{ color: company.color }}
                    >
                      Learn more <ArrowUpRightIcon size={14} aria-hidden="true" />
                    </a>

                    {/* Corner glow on hover */}
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                      style={{ background: company.color }}
                      aria-hidden="true"
                    />
                  </motion.article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Founding Timeline ── */}
      <section className="border-y border-white/[0.07] bg-[#060d1a] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <FadeIn className="mb-16 max-w-2xl">
            <p className="eyebrow">Our Journey</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
              From one idea to{' '}
              <span className="text-brand-300">a full ecosystem.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              The GBS Group grew organically — each subsidiary born out of a real national need identified by our
              founders.
            </p>
          </FadeIn>

          <div className="relative ml-4 border-l border-brand-400/20 pl-10">
            {timeline.map((event, i) => (
              <FadeIn key={event.year} delay={i * 0.06} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[2.85rem] top-1 h-4 w-4 rounded-full border-2 border-brand-400 bg-[#060d1a]" />
                <span className="font-mono text-[10px] uppercase tracking-[.18em] text-brand-400">{event.year}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-white">{event.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{event.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section id="connect" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[28px] border border-brand-400/20 bg-[#0d2345] px-8 py-14 sm:px-14 sm:py-16">
              <div className="blueprint-grid absolute inset-0 opacity-30" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#086638]/25 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-600/15 blur-3xl" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <div className="mb-4 flex items-center gap-2">
                    <Building2Icon size={20} className="text-brand-300" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[.18em] text-brand-300">
                      Join the GBS Group
                    </span>
                  </div>
                  <h2 className="font-display text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
                    Build the future with us.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    Whether you are a student, investor, institution, or industry partner — there is a home for you
                    within the GBS Group ecosystem.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:shrink-0">
                  <a
                    href="mailto:hello@gbsteam.org"
                    id="group-cta-email"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#161616] transition hover:bg-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  >
                    Start a conversation <ArrowUpRightIcon size={16} aria-hidden="true" />
                  </a>
                  <a
                    href="/"
                    id="group-cta-home"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  >
                    Back to GBS Team <ChevronRightIcon size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

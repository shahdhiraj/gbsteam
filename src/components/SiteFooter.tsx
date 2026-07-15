import React from 'react';
import {
  ArrowUpRight as ArrowUpRightIcon,
  Instagram as InstagramIcon,
  Linkedin as LinkedinIcon,
  Send as SendIcon } from
'lucide-react';
const footerLinks = {
  Explore: ['About GBS', 'Our projects', 'Programs', 'Research', 'Our Group'],
  Connect: ['Partner with us', 'Become a member', 'News & events', 'Contact']
};
export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.09] bg-[#050d18] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1fr]">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400">
              
              <img src="/logo.png" alt="GBS Team Logo" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              A national community for robotics, AI, STEM education and
              meaningful engineering research.
            </p>
            <div className="mt-6 flex gap-2">
              {[InstagramIcon, LinkedinIcon, SendIcon].map((Icon, index) =>
              <a
                key={index}
                href="#connect"
                aria-label="GBS social channel"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.11] text-slate-300 transition hover:border-brand-400/40 hover:text-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400">
                
                  <Icon size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) =>
          <div key={heading}>
              <h2 className="font-mono text-[10px] uppercase tracking-[.18em] text-brand-300">
                {heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {links.map((link) =>
              <li key={link}>
                    <a
                  href="#connect"
                  className="text-sm text-slate-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-400">
                  
                      {link}
                    </a>
                  </li>
              )}
              </ul>
            </div>
          )}
          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[.18em] text-brand-300">
              Dispatches from GBS
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Occasional notes from our labs, classrooms and field teams.
            </p>
            <form
              className="mt-5 flex gap-2"
              onSubmit={(event) => event.preventDefault()}>
              
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                className="min-w-0 flex-1 rounded-xl border border-white/[0.13] bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400" />
              
              <button
                type="submit"
                className="grid h-10 w-10 place-items-center rounded-xl bg-[#086638] text-white hover:bg-[#0a7d45] focus:outline-none focus:ring-2 focus:ring-brand-400"
                aria-label="Subscribe to newsletter">
                
                <ArrowUpRightIcon size={17} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>);

}
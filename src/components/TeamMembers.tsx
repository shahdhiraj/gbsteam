import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { teamMembers } from '../data/team';

export function TeamMembers({ preview = false }: { preview?: boolean }) {
  const reduceMotion = useReducedMotion();
  const visibleMembers = preview ? teamMembers.slice(0, 5) : teamMembers;

  return (
    <section id="team-member" className="relative px-5 py-16 sm:px-8 lg:px-12 bg-slate-50 dark:bg-[#0b1728]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-700 dark:text-white">
            Meet the Team
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 md:text-lg">
            A dedicated group of over 20+ engineers, researchers, and specialists working together to drive robotics innovation in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {visibleMembers.map((member, index) => (
            <Link to={`/team/${member.id}`} key={member.id} className="block group">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : (index % 6) * 0.1 }}
                className="group flex flex-col h-full rounded-2xl bg-white dark:bg-[#162235] overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-slate-100 dark:border-slate-800"
              >
                <div className="w-full aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-5 flex flex-col flex-grow bg-white dark:bg-[#162235]">
                  <h3 className="font-display text-[17px] font-bold text-[#0a2540] dark:text-white leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
                    {member.role}
                  </p>
                  
                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-50 dark:border-slate-800/50">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">View Profile</span>
                    <div className="text-slate-300 dark:text-slate-500 group-hover:text-[#0077b5] transition-colors">
                      <Linkedin size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        {preview && (
          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="btn-secondary"
            >
              View More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

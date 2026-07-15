import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/team';

export function MemberDetailPage() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find((m) => m.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return (
      <div className="pt-32 pb-16 text-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Member not found</h2>
        <Link to="/team" className="text-brand-600 hover:underline">Return to Team</Link>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-16 px-5 sm:px-8 lg:px-12 bg-white dark:bg-[#0b1728] min-h-screen">
      <div className="mx-auto max-w-[800px]">
        <Link to="/team" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Team
        </Link>
        
        <div className="bg-slate-50 dark:bg-[#162235] rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0">
            <div className="h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-4 border-brand-100 dark:border-brand-900">
              <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {member.name}
            </h1>
            <p className="text-lg font-medium text-brand-600 dark:text-brand-400 mb-6">
              {member.role}
            </p>
            
            <div className="prose prose-slate dark:prose-invert">
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {member.bio}
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Contact</h3>
              <a href={`mailto:${member.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">
                {member.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

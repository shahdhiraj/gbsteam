import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, PlayCircle, Layers, Wrench, Activity } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-5 sm:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-brand-400 hover:text-brand-300">Return Home</Link>
        </div>
      </div>
    );
  }

  const getStatusIcon = () => {
    switch(project.status) {
      case 'Completed': return <CheckCircle2 size={18} className="text-emerald-500" />;
      case 'In Progress': return <PlayCircle size={18} className="text-amber-500" />;
      case 'Research phase': return <AlertCircle size={18} className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-5 sm:px-8 bg-white dark:bg-transparent text-[#161616] dark:text-white">
      <div className="mx-auto max-w-5xl">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
        
        <div className="rounded-[1.25rem] overflow-hidden bg-slate-100 dark:bg-slate-900 mb-12 aspect-[21/9] shadow-2xl relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          {project.status && (
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/95 dark:bg-[#111827]/95 px-4 py-2 rounded-full shadow-lg backdrop-blur border border-black/5 dark:border-white/10">
              {getStatusIcon()}
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {project.status}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-12">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase mb-6">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.features && (
              <div>
                <h3 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-6">
                  <Layers size={18} />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                      <CheckCircle2 size={20} className="text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(project.challenges || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenges && (
                  <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                    <h4 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4">
                      <AlertCircle size={18} />
                      Challenges
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                    <h4 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
                      <Wrench size={18} />
                      Solution
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-80 shrink-0">
            <div className="sticky top-32 p-6 rounded-2xl bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                <Activity size={18} />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.split(',').map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold shadow-sm"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

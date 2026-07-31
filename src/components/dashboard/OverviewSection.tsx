import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle,
  Clock,
  Users,
  LayoutGrid,
  Activity,
} from 'lucide-react';
import { Project } from '../../data/projects';

interface OverviewSectionProps {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  totalMembers: number;
  roleCounts: Record<string, number>;
  localProjects: Project[];
}

export function OverviewSection({
  totalProjects,
  completedProjects,
  inProgressProjects,
  totalMembers,
  roleCounts,
  localProjects,
}: OverviewSectionProps) {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Overview</h2>
        <p className="text-slate-500">
          High-level metrics and recent activity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-brand-400/20 p-3 text-brand-300">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Projects
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {totalProjects}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-green-500/20 p-3 text-green-400">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">
                Completed Projects
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {completedProjects}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-yellow-500/20 p-3 text-yellow-400">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">In Progress</p>
              <p className="text-3xl font-bold text-slate-900">
                {inProgressProjects}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-500/20 p-3 text-blue-400">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Team Members</p>
              <p className="text-3xl font-bold text-slate-900">
                {totalMembers}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <LayoutGrid size={20} className="text-brand-400" />
              Recent Projects
            </h2>
          </div>
          <div className="space-y-4">
            {localProjects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-4 transition-colors hover:bg-slate-100"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {project.technologies}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-500/10 text-green-400'
                      : project.status === 'In Progress'
                        ? 'bg-yellow-500/10 text-yellow-400'
                        : 'bg-slate-500/10 text-slate-500'
                  }`}
                >
                  {project.status || 'Unknown'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Activity size={20} className="text-brand-400" />
              Team Composition
            </h2>
          </div>
          <div className="space-y-4">
            {Object.entries(roleCounts).map(([role, count]) => (
              <div key={role} className="flex items-center justify-between">
                <span className="text-slate-700">{role}</span>
                <div className="flex items-center gap-4 w-1/2">
                  <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-brand-400 rounded-full"
                      style={{
                        width: `${((count as number) / totalMembers) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="w-8 text-right text-sm font-medium text-slate-900">
                    {count as number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { projects, Project } from '../data/projects';
import { teamMembers, TeamMember } from '../data/team';

import { OverviewSection } from '../components/dashboard/OverviewSection';
import { ProjectsSection } from '../components/dashboard/ProjectsSection';
import { TeamSection } from '../components/dashboard/TeamSection';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Header } from '../components/dashboard/Header';

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [localProjects, setLocalProjects] = useState<Project[]>(projects);
  const [localTeamMembers, setLocalTeamMembers] =
    useState<TeamMember[]>(teamMembers);

  const completedProjects = localProjects.filter(
    (p) => p.status === 'Completed',
  ).length;
  const inProgressProjects = localProjects.filter(
    (p) => p.status === 'In Progress',
  ).length;
  const totalProjects = localProjects.length;
  const totalMembers = localTeamMembers.length;

  const roleCounts = localTeamMembers.reduce(
    (acc, member) => {
      acc[member.role] = (acc[member.role] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      <Sidebar setSearchQuery={setSearchQuery} />

      <main className="flex-1 overflow-y-auto bg-slate-50 relative flex flex-col">
        <Header />

        <div className="p-8 lg:p-12 w-full">
          <Routes>
            <Route path="/" element={<Navigate to="overview" replace />} />
            <Route
              path="overview"
              element={
                <OverviewSection
                  totalProjects={totalProjects}
                  completedProjects={completedProjects}
                  inProgressProjects={inProgressProjects}
                  totalMembers={totalMembers}
                  roleCounts={roleCounts}
                  localProjects={localProjects}
                />
              }
            />
            <Route
              path="projects"
              element={
                <ProjectsSection
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  localProjects={localProjects}
                  setLocalProjects={setLocalProjects}
                />
              }
            />
            <Route
              path="team"
              element={
                <TeamSection
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  localTeamMembers={localTeamMembers}
                  setLocalTeamMembers={setLocalTeamMembers}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

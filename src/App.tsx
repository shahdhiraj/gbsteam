import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TeamPage } from './pages/TeamPage';
import { MemberDetailPage } from './pages/MemberDetailPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SiteFooter } from './components/SiteFooter';
import { useScreenInit } from './useScreenInit';

// Hidden for mockup parity
// import { ImpactStats } from './components/ImpactStats';
// import { MilestoneTimeline } from './components/MilestoneTimeline';
// import { Ecosystem } from './components/Ecosystem';
// import { ProgramsResearch } from './components/ProgramsResearch';

type Theme = 'light' | 'dark';
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const savedTheme = window.localStorage.getItem('gbs-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: light)').matches ?
  'light' :
  'dark';
}
export function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  useScreenInit();
  useEffect(() => {
    window.localStorage.setItem('gbs-theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () =>
  setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  return (
    <div
      className="theme-app min-h-screen w-full overflow-x-hidden bg-[#161616] text-slate-50 selection:bg-brand-400 selection:text-[#161616]"
      data-theme={theme}>
      
      <Navigation theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:id" element={<MemberDetailPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>);

}
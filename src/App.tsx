import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { InnovationPrograms } from './components/InnovationPrograms';
import { FounderProfile } from './components/FounderProfile';
import { Connect } from './components/Connect';
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
        <Hero />
        <WhyChooseUs />
        <About />
        <Expertise />
        <Projects />
        <InnovationPrograms />
        <FounderProfile />
        <Connect />
      </main>
      <SiteFooter />
    </div>);

}
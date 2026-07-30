import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, UsersRound, LogOut } from 'lucide-react';

interface SidebarProps {
  setSearchQuery: (query: string) => void;
}

export function Sidebar({ setSearchQuery }: SidebarProps) {
  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 bg-white flex flex-col h-full z-20">
      <div className="p-6 border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <span className="bg-brand-500 text-slate-900 rounded p-1.5 shadow-lg shadow-brand-500/20">
            <LayoutDashboard size={18} />
          </span>
          GBS Admin
        </h1>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto">
        <NavLink 
          to="/dashboard/overview"
          onClick={() => setSearchQuery('')}
          className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
            isActive 
              ? 'bg-brand-500/20 text-brand-300' 
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <LayoutDashboard size={18} />
          Overview
        </NavLink>
        <NavLink 
          to="/dashboard/projects"
          onClick={() => setSearchQuery('')}
          className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
            isActive 
              ? 'bg-brand-500/20 text-brand-300' 
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <FolderKanban size={18} />
          Projects
        </NavLink>
        <NavLink 
          to="/dashboard/team"
          onClick={() => setSearchQuery('')}
          className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
            isActive 
              ? 'bg-brand-500/20 text-brand-300' 
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <UsersRound size={18} />
          Team
        </NavLink>
      </nav>
      <div className="p-4 border-t border-slate-200">
        <NavLink to="/" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors">
          <LogOut size={18} />
          Logout / Home
        </NavLink>
      </div>
    </aside>
  );
}

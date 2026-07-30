import React from 'react';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-4 shrink-0">
      <h2 className="text-xl font-bold text-slate-900">Admin Dashboard</h2>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-bold text-slate-900">GBS Admin</p>
          <p className="text-xs text-slate-500">Super Administrator</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold shadow-md shadow-brand-500/20">
          GA
        </div>
      </div>
    </header>
  );
}

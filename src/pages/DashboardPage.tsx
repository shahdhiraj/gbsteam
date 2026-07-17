import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { 
  LayoutGrid, Users, Briefcase, Activity, 
  CheckCircle, Clock, LayoutDashboard, 
  FolderKanban, UsersRound, Search,
  Eye, Edit2, Trash2, X, Save, Plus, Upload, LogOut
} from 'lucide-react';
import { projects, Project } from '../data/projects';
import { teamMembers, TeamMember } from '../data/team';

type Tab = 'overview' | 'projects' | 'team';

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [localProjects, setLocalProjects] = useState<Project[]>(projects);
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const [localTeamMembers, setLocalTeamMembers] = useState<TeamMember[]>(teamMembers);
  const [viewingMember, setViewingMember] = useState<TeamMember | null>(null);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isAddingMember, setIsAddingMember] = useState(false);

  const completedProjects = localProjects.filter(p => p.status === 'Completed').length;
  const inProgressProjects = localProjects.filter(p => p.status === 'In Progress').length;
  const totalProjects = localProjects.length;
  const totalMembers = localTeamMembers.length;

  const roleCounts = localTeamMembers.reduce((acc, member) => {
    acc[member.role] = (acc[member.role] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const handleDeleteProject = (id: string) => {
    setLocalProjects(prev => prev.filter(p => p.id !== id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    setLocalProjects(prev => prev.map(p => p.id === editingProject.id ? editingProject : p));
    setEditingProject(null);
  };

  const handleAddProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: formData.get('title') as string,
      status: formData.get('status') as any,
      technologies: formData.get('technologies') as string,
      description: formData.get('description') as string,
      image: (formData.get('image') as string) || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    };
    setLocalProjects(prev => [newProject, ...prev]);
    setIsAddingProject(false);
  };

  const handleDeleteMember = (id: number) => {
    setLocalTeamMembers(prev => prev.filter(m => m.id !== id));
  };

  const handleAddMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newMember: TeamMember = {
      id: Date.now(),
      name: formData.get('name') as string,
      role: formData.get('role') as string,
      email: formData.get('email') as string,
      linkedin: formData.get('linkedin') as string,
      bio: formData.get('bio') as string,
      image: (formData.get('image') as string) || `https://i.pravatar.cc/150?u=new-member-${Date.now()}`
    };
    setLocalTeamMembers(prev => [newMember, ...prev]);
    setIsAddingMember(false);
  };

  const handleSaveEditMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember) return;
    setLocalTeamMembers(prev => prev.map(m => m.id === editingMember.id ? editingMember : m));
    setEditingMember(null);
  };

  const renderOverview = () => (
    <motion.div
      key="overview"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Overview</h2>
        <p className="text-slate-500">High-level metrics and recent activity.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-brand-400/20 p-3 text-brand-300">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Total Projects</p>
              <p className="text-3xl font-bold text-slate-900">{totalProjects}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-green-500/20 p-3 text-green-400">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Completed Projects</p>
              <p className="text-3xl font-bold text-slate-900">{completedProjects}</p>
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
              <p className="text-3xl font-bold text-slate-900">{inProgressProjects}</p>
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
              <p className="text-3xl font-bold text-slate-900">{totalMembers}</p>
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
            {localProjects.slice(0, 4).map(project => (
              <div key={project.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-4 transition-colors hover:bg-slate-100">
                <div className="flex items-center gap-4">
                  <img src={project.image} alt={project.title} className="h-12 w-12 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{project.title}</h3>
                    <p className="text-sm text-slate-500">{project.technologies}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' ? 'bg-green-500/10 text-green-400' :
                  project.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-slate-500/10 text-slate-500'
                }`}>
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
                      style={{ width: `${(count as number / totalMembers) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-sm font-medium text-slate-900">{count as number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderProjects = () => {
    const filteredProjects = localProjects.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return (
      <motion.div
        key="projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects Control</h2>
            <p className="text-slate-500">Manage and view all projects.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-slate-900 placeholder-slate-500 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
            <button 
              onClick={() => setIsAddingProject(true)}
              className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-brand-600 shadow-lg shadow-brand-500/20"
            >
              <Plus size={18} /> Add Project
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map(project => (
            <div key={project.id} className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-white/[0.2]">
              <div className="h-40 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-900 line-clamp-1" title={project.title}>{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-[10px] whitespace-nowrap font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/10 text-green-400' :
                    project.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-400' :
                    'bg-slate-500/10 text-slate-500'
                  }`}>
                    {project.status || 'Unknown'}
                  </span>
                </div>
                <p className="text-xs text-brand-300 font-medium mb-3">{project.technologies}</p>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{project.description}</p>
                
                <div className="flex items-center gap-2 border-t border-slate-100 pt-3">
                  <button 
                    onClick={() => setViewingProject(project)}
                    className="flex flex-1 justify-center rounded-lg bg-brand-500/10 py-1.5 text-brand-400 transition-colors hover:bg-brand-500/20"
                    title="View details"
                  >
                    <Eye size={16} />
                  </button>
                  <button 
                    onClick={() => setEditingProject(project)}
                    className="flex flex-1 justify-center rounded-lg bg-blue-500/10 py-1.5 text-blue-400 transition-colors hover:bg-blue-500/20"
                    title="Edit project"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDeleteProject(project.id)}
                    className="flex flex-1 justify-center rounded-lg bg-red-500/10 py-1.5 text-red-400 transition-colors hover:bg-red-500/20"
                    title="Delete project"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderTeam = () => {
    const filteredTeam = localTeamMembers.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
      <motion.div
        key="team"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Team Control</h2>
            <p className="text-slate-500">Directory of all GBS Team members.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-slate-900 placeholder-slate-500 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
              />
            </div>
            <button 
              onClick={() => setIsAddingMember(true)}
              className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-brand-600 shadow-lg shadow-brand-500/20"
            >
              <Plus size={18} /> Add Member
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredTeam.map(member => (
            <div key={member.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl backdrop-blur-sm flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:border-white/[0.2]">
              <div className="flex items-center gap-4">
                <img src={member.image} alt={member.name} className="h-16 w-16 rounded-full object-cover border-2 border-brand-400/50" />
                <div className="overflow-hidden">
                  <h3 className="font-bold text-slate-900 truncate" title={member.name}>{member.name}</h3>
                  <p className="text-xs font-medium text-brand-300 truncate mb-1">{member.role}</p>
                  <p className="text-xs text-slate-500 truncate">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-slate-100 pt-3 mt-auto">
                <button 
                  onClick={() => setViewingMember(member)}
                  className="flex flex-1 justify-center rounded-lg bg-brand-500/10 py-1.5 text-brand-400 transition-colors hover:bg-brand-500/20"
                  title="View details"
                >
                  <Eye size={16} />
                </button>
                <button 
                  onClick={() => setEditingMember(member)}
                  className="flex flex-1 justify-center rounded-lg bg-blue-500/10 py-1.5 text-blue-400 transition-colors hover:bg-blue-500/20"
                  title="Edit member"
                >
                  <Edit2 size={16} />
                </button>
                <button 
                  onClick={() => handleDeleteMember(member.id)}
                  className="flex flex-1 justify-center rounded-lg bg-red-500/10 py-1.5 text-red-400 transition-colors hover:bg-red-500/20"
                  title="Delete member"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50 relative flex flex-col">
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
        <div className="p-8 lg:p-12 w-full">
            <Routes>
              <Route path="/" element={<Navigate to="overview" replace />} />
              <Route path="overview" element={renderOverview()} />
              <Route path="projects" element={renderProjects()} />
              <Route path="team" element={renderTeam()} />
            </Routes>
        </div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {viewingProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setViewingProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-slate-900 backdrop-blur-md transition-colors hover:bg-slate-100"
              >
                <X size={20} />
              </button>
              <div className="h-64 w-full overflow-hidden">
                <img src={viewingProject.image} alt={viewingProject.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-slate-900">{viewingProject.title}</h2>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    viewingProject.status === 'Completed' ? 'bg-green-500/10 text-green-400' :
                    viewingProject.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-400' :
                    'bg-slate-500/10 text-slate-500'
                  }`}>
                    {viewingProject.status || 'Unknown'}
                  </span>
                </div>
                <div className="mb-6 rounded-lg bg-slate-50 p-4 border border-slate-100">
                  <p className="text-sm font-semibold text-brand-300 mb-1">Technologies</p>
                  <p className="text-sm text-slate-900">{viewingProject.technologies}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-300 mb-2">Description</p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {viewingProject.longDescription || viewingProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {editingProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl p-6"
            >
              <button 
                onClick={() => setEditingProject(null)}
                className="absolute right-4 top-4 rounded-full text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Edit Project</h2>
              
              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Title</label>
                  <input 
                    type="text" 
                    value={editingProject.title}
                    onChange={e => setEditingProject({...editingProject, title: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Image URL or Local Upload</label>
                  <div className="flex gap-2">
                    <input 
                      type="url" 
                      value={editingProject.image}
                      onChange={e => setEditingProject({...editingProject, image: e.target.value})}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    />
                    <label className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-100 px-4 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200" title="Upload local image">
                      <Upload size={18} />
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleImageUpload(e, (base64) => setEditingProject({...editingProject, image: base64}))} 
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
                  <select 
                    value={editingProject.status || 'Research phase'}
                    onChange={e => setEditingProject({...editingProject, status: e.target.value as any})}
                    className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Research phase">Research phase</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Technologies</label>
                  <input 
                    type="text" 
                    value={editingProject.technologies}
                    onChange={e => setEditingProject({...editingProject, technologies: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
                  <textarea 
                    value={editingProject.description}
                    onChange={e => setEditingProject({...editingProject, description: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none min-h-[100px]"
                    required
                  />
                </div>
                
                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setEditingProject(null)}
                    className="rounded-xl px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2 font-semibold text-slate-900 hover:bg-brand-600"
                  >
                    <Save size={18} /> Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {viewingMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl p-6"
            >
              <button 
                onClick={() => setViewingMember(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-1.5 text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col items-center mb-6 text-center">
                <img src={viewingMember.image} alt={viewingMember.name} className="h-24 w-24 rounded-full object-cover border-4 border-brand-400/20 mb-4" />
                <h2 className="text-2xl font-bold text-slate-900">{viewingMember.name}</h2>
                <p className="text-sm font-semibold text-brand-300">{viewingMember.role}</p>
                <p className="text-xs text-slate-500 mt-1">{viewingMember.email}</p>
              </div>
              
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">Biography</p>
                <p className="text-sm leading-relaxed text-slate-500">
                  {viewingMember.bio || "No biography provided."}
                </p>
              </div>
              {viewingMember.linkedin && (
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-700 mb-2">LinkedIn</p>
                  <a href={viewingMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-500 hover:underline break-all">
                    {viewingMember.linkedin}
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}

        {editingMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl p-6"
            >
              <button 
                onClick={() => setEditingMember(null)}
                className="absolute right-4 top-4 rounded-full text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Edit Team Member</h2>
              
              <form onSubmit={handleSaveEditMember} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                  <input 
                    type="text" 
                    value={editingMember.name}
                    onChange={e => setEditingMember({...editingMember, name: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Image URL or Local Upload</label>
                  <div className="flex gap-2">
                    <input 
                      type="url" 
                      value={editingMember.image}
                      onChange={e => setEditingMember({...editingMember, image: e.target.value})}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    />
                    <label className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-100 px-4 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200" title="Upload local image">
                      <Upload size={18} />
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleImageUpload(e, (base64) => setEditingMember({...editingMember, image: base64}))} 
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
                  <input 
                    type="text" 
                    value={editingMember.role}
                    onChange={e => setEditingMember({...editingMember, role: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input 
                    type="email" 
                    value={editingMember.email}
                    onChange={e => setEditingMember({...editingMember, email: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">LinkedIn URL</label>
                  <input 
                    type="url" 
                    value={editingMember.linkedin || ''}
                    onChange={e => setEditingMember({...editingMember, linkedin: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Biography</label>
                  <textarea 
                    value={editingMember.bio}
                    onChange={e => setEditingMember({...editingMember, bio: e.target.value})}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none min-h-[100px]"
                  />
                </div>
                
                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setEditingMember(null)}
                    className="rounded-xl px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2 font-semibold text-slate-900 hover:bg-brand-600"
                  >
                    <Save size={18} /> Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
        {isAddingProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl p-6"
            >
              <button 
                onClick={() => setIsAddingProject(false)}
                className="absolute right-4 top-4 rounded-full text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Add New Project</h2>
              
              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Title</label>
                  <input 
                    name="title"
                    type="text" 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Image URL or Local Upload (optional)</label>
                  <div className="flex gap-2">
                    <input 
                      id="add-project-image-input"
                      name="image"
                      type="url" 
                      placeholder="https://..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    />
                    <label className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-100 px-4 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200" title="Upload local image">
                      <Upload size={18} />
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleImageUpload(e, (base64) => {
                          const input = document.getElementById('add-project-image-input') as HTMLInputElement;
                          if (input) input.value = base64;
                        })} 
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
                  <select 
                    name="status"
                    className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Research phase">Research phase</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Technologies</label>
                  <input 
                    name="technologies"
                    type="text" 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
                  <textarea 
                    name="description"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none min-h-[100px]"
                    required
                  />
                </div>
                
                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsAddingProject(false)}
                    className="rounded-xl px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2 font-semibold text-slate-900 hover:bg-brand-600"
                  >
                    <Save size={18} /> Create Project
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {isAddingMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl p-6"
            >
              <button 
                onClick={() => setIsAddingMember(false)}
                className="absolute right-4 top-4 rounded-full text-slate-500 hover:text-slate-900"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Add New Team Member</h2>
              
              <form onSubmit={handleAddMember} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Image URL or Local Upload (optional)</label>
                  <div className="flex gap-2">
                    <input 
                      id="add-member-image-input"
                      name="image"
                      type="url" 
                      placeholder="https://..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    />
                    <label className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-100 px-4 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200" title="Upload local image">
                      <Upload size={18} />
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleImageUpload(e, (base64) => {
                          const input = document.getElementById('add-member-image-input') as HTMLInputElement;
                          if (input) input.value = base64;
                        })} 
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
                  <input 
                    name="role"
                    type="text" 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">LinkedIn URL</label>
                  <input 
                    name="linkedin"
                    type="url" 
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Biography</label>
                  <textarea 
                    name="bio"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none min-h-[100px]"
                  />
                </div>
                
                <div className="pt-4 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsAddingMember(false)}
                    className="rounded-xl px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2 font-semibold text-slate-900 hover:bg-brand-600"
                  >
                    <Save size={18} /> Add Member
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

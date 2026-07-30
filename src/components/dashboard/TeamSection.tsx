import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Eye, Edit2, Trash2, X, Save, Upload } from 'lucide-react';
import { TeamMember } from '../../data/team';

interface TeamSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  localTeamMembers: TeamMember[];
  setLocalTeamMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>;
}

export function TeamSection({
  searchQuery,
  setSearchQuery,
  localTeamMembers,
  setLocalTeamMembers
}: TeamSectionProps) {
  const [viewingMember, setViewingMember] = useState<TeamMember | null>(null);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isAddingMember, setIsAddingMember] = useState(false);

  const filteredTeam = localTeamMembers.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleDeleteMember = (id: number) => {
    setLocalTeamMembers(prev => prev.filter(m => m.id !== id));
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

  const handleSaveEditMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember) return;
    setLocalTeamMembers(prev => prev.map(m => m.id === editingMember.id ? editingMember : m));
    setEditingMember(null);
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

  return (
    <>
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

      <AnimatePresence>
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
    </>
  );
}

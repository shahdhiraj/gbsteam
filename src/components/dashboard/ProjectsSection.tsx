import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Plus,
  Eye,
  Edit2,
  Trash2,
  X,
  Save,
  Upload,
} from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectsSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  localProjects: Project[];
  setLocalProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export function ProjectsSection({
  searchQuery,
  setSearchQuery,
  localProjects,
  setLocalProjects,
}: ProjectsSectionProps) {
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const filteredProjects = localProjects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDeleteProject = (id: string) => {
    setLocalProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (base64: string) => void,
  ) => {
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
    setLocalProjects((prev) =>
      prev.map((p) => (p.id === editingProject.id ? editingProject : p)),
    );
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
      image:
        (formData.get('image') as string) ||
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    };
    setLocalProjects((prev) => [newProject, ...prev]);
    setIsAddingProject(false);
  };

  return (
    <>
      <motion.div
        key="projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Projects Control
            </h2>
            <p className="text-slate-500">Manage and view all projects.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-white/[0.2]"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="font-bold text-lg text-slate-900 line-clamp-1"
                    title={project.title}
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] whitespace-nowrap font-medium ${
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
                <p className="text-xs text-brand-300 font-medium mb-3">
                  {project.technologies}
                </p>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                  {project.description}
                </p>

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
                <img
                  src={viewingProject.image}
                  alt={viewingProject.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {viewingProject.title}
                  </h2>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      viewingProject.status === 'Completed'
                        ? 'bg-green-500/10 text-green-400'
                        : viewingProject.status === 'In Progress'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-slate-500/10 text-slate-500'
                    }`}
                  >
                    {viewingProject.status || 'Unknown'}
                  </span>
                </div>
                <div className="mb-6 rounded-lg bg-slate-50 p-4 border border-slate-100">
                  <p className="text-sm font-semibold text-brand-300 mb-1">
                    Technologies
                  </p>
                  <p className="text-sm text-slate-900">
                    {viewingProject.technologies}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-300 mb-2">
                    Description
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {viewingProject.longDescription ||
                      viewingProject.description}
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Edit Project
              </h2>

              <form onSubmit={handleSaveEdit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={editingProject.title}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        title: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Image URL or Local Upload
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={editingProject.image}
                      onChange={(e) =>
                        setEditingProject({
                          ...editingProject,
                          image: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    />
                    <label
                      className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-100 px-4 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200"
                      title="Upload local image"
                    >
                      <Upload size={18} />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleImageUpload(e, (base64) =>
                            setEditingProject({
                              ...editingProject,
                              image: base64,
                            }),
                          )
                        }
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Status
                  </label>
                  <select
                    value={editingProject.status || 'Research phase'}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        status: e.target.value as any,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Research phase">Research phase</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Technologies
                  </label>
                  <input
                    type="text"
                    value={editingProject.technologies}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        technologies: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Description
                  </label>
                  <textarea
                    value={editingProject.description}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        description: e.target.value,
                      })
                    }
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Add New Project
              </h2>

              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Image URL or Local Upload (optional)
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="add-project-image-input"
                      name="image"
                      type="url"
                      placeholder="https://..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                    />
                    <label
                      className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-100 px-4 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200"
                      title="Upload local image"
                    >
                      <Upload size={18} />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleImageUpload(e, (base64) => {
                            const input = document.getElementById(
                              'add-project-image-input',
                            ) as HTMLInputElement;
                            if (input) input.value = base64;
                          })
                        }
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Status
                  </label>
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
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Technologies
                  </label>
                  <input
                    name="technologies"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 focus:border-brand-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Description
                  </label>
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
      </AnimatePresence>
    </>
  );
}

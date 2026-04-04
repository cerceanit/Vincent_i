export interface Project {
  id: string
  name: string
  templateId: string
  content: string
  format: 'docx' | 'pdf'
  language: 'en' | 'ru' | 'kz'
  createdAt: string
  updatedAt: string
}

const STORAGE_KEY = 'vincent_projects'

export function getProjects(): Project[] {
  if (typeof window === 'undefined') return []
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export function saveProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const projects = getProjects()
  const newProject: Project = {
    ...project,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  projects.push(newProject)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  return newProject
}

export function updateProject(id: string, updates: Partial<Omit<Project, 'id' | 'createdAt'>>): Project | null {
  const projects = getProjects()
  const index = projects.findIndex(p => p.id === id)
  if (index === -1) return null
  
  projects[index] = {
    ...projects[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  return projects[index]
}

export function deleteProject(id: string): boolean {
  const projects = getProjects()
  const filtered = projects.filter(p => p.id !== id)
  if (filtered.length === projects.length) return false
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  return true
}

export function getProjectById(id: string): Project | undefined {
  const projects = getProjects()
  return projects.find(p => p.id === id)
}

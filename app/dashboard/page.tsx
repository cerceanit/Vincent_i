'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { getProjects, deleteProject, type Project } from '@/lib/storage'
import { Header } from '@/components/landing/header'
import { ProjectCard } from '@/components/dashboard/project-card'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { Empty, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from '@/components/ui/empty'
import { Search, Plus, FileText } from 'lucide-react'

export default function DashboardPage() {
  const { t } = useLanguage()
  const [projects, setProjects] = useState<Project[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setProjects(getProjects())
    setIsLoading(false)
  }, [])

  const handleDelete = (id: string) => {
    if (deleteProject(id)) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{t('myProjects')}</h1>
              <p className="mt-1 text-muted-foreground">
                {projects.length} {projects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
            <Link href="/start">
              <AnimatedButton variant="primary">
                <Plus className="size-4" />
                {t('createNew')}
              </AnimatedButton>
            </Link>
          </div>

          {/* Search */}
          {projects.length > 0 && (
            <div className="relative mb-8 max-w-md">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search')}
                className="pl-10"
              />
            </div>
          )}

          {/* Projects grid or empty state */}
          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-48 animate-pulse rounded-xl border border-border/50 bg-card"
                />
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : projects.length > 0 ? (
            <Empty>
              <EmptyMedia variant="icon">
                <Search className="size-6" />
              </EmptyMedia>
              <EmptyTitle>No results found</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search query
              </EmptyDescription>
            </Empty>
          ) : (
            <Empty>
              <EmptyMedia variant="icon">
                <FileText className="size-6" />
              </EmptyMedia>
              <EmptyTitle>{t('noProjects')}</EmptyTitle>
              <EmptyDescription>{t('noProjectsDesc')}</EmptyDescription>
              <EmptyContent>
                <Link href="/start">
                  <AnimatedButton variant="primary">
                    <Plus className="size-4" />
                    {t('createNew')}
                  </AnimatedButton>
                </Link>
              </EmptyContent>
            </Empty>
          )}
        </div>
      </main>
    </div>
  )
}

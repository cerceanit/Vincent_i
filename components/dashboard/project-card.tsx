'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { getTemplateById } from '@/lib/templates'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FileText, MoreVertical, Edit, Trash2, Download, Clock } from 'lucide-react'
import type { Project } from '@/lib/storage'
import { toast } from 'sonner'

interface ProjectCardProps {
  project: Project
  onDelete: (id: string) => void
}

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const { t, language } = useLanguage()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  
  const template = getTemplateById(project.templateId)
  const formattedDate = new Date(project.updatedAt).toLocaleDateString(
    language === 'ru' ? 'ru-RU' : language === 'kz' ? 'kk-KZ' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  )

  const handleExport = async () => {
    try {
      const response = await fetch('/api/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: project.content,
          filename: project.name,
          format: project.format,
        }),
      })

      if (!response.ok) throw new Error('Export failed')

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${project.name}.${project.format}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      toast.success(language === 'ru' ? 'Документ скачан!' : language === 'kz' ? 'Құжат жүктелді!' : 'Document downloaded!')
    } catch (error) {
      console.error('Export error:', error)
      toast.error(t('error'))
    }
  }

  return (
    <>
      <div className="glow-card group flex flex-col rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-border hover:bg-card/80">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
            <FileText className="size-5 text-muted-foreground" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <AnimatedButton variant="ghost" size="icon" className="size-8 opacity-0 group-hover:opacity-100">
                <MoreVertical className="size-4" />
              </AnimatedButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/editor/${project.templateId}?format=${project.format}&projectId=${project.id}`}>
                  <Edit className="mr-2 size-4" />
                  {t('edit')}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExport}>
                <Download className="mr-2 size-4" />
                {t('download')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setShowDeleteDialog(true)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2 className="mr-2 size-4" />
                {t('delete')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Link href={`/editor/${project.templateId}?format=${project.format}&projectId=${project.id}`} className="flex-1">
          <h3 className="mb-1 font-semibold leading-tight hover:underline">
            {project.name}
          </h3>
          {template && (
            <p className="mb-3 line-clamp-1 text-sm text-muted-foreground">
              {t(template.titleKey as any)}
            </p>
          )}
        </Link>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3" />
            {formattedDate}
          </div>
          <Badge variant="outline" className="text-xs">
            {project.format.toUpperCase()}
          </Badge>
        </div>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('confirmDelete')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('confirmDeleteDesc')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => onDelete(project.id)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {t('delete')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

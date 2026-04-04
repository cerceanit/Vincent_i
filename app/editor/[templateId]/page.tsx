'use client'

import { use, useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { getTemplateById } from '@/lib/templates'
import { saveProject, updateProject, getProjectById } from '@/lib/storage'
import { Header } from '@/components/landing/header'
import { DocumentEditor } from '@/components/editor/document-editor'
import { ExportDialog } from '@/components/editor/export-dialog'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Save, Download, Sparkles, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export const dynamic = 'force-dynamic'

interface EditorPageProps {
  params: Promise<{ templateId: string }>
}

export default function EditorPage({ params }: EditorPageProps) {
  const { templateId } = use(params)
  const searchParams = useSearchParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  
  const format = (searchParams.get('format') as 'docx' | 'pdf') || 'docx'
  const projectId = searchParams.get('projectId')
  
  const template = getTemplateById(templateId)
  
  const [content, setContent] = useState('')
  const [projectName, setProjectName] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showExport, setShowExport] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(projectId)

  // Load template content or existing project
  useEffect(() => {
    if (projectId) {
      const project = getProjectById(projectId)
      if (project) {
        setContent(project.content)
        setProjectName(project.name)
        setIsSaved(true)
        return
      }
    }
    
    if (template) {
      setContent(template.content[language])
      setProjectName(t(template.titleKey as any))
    }
  }, [template, language, projectId, t])

  if (!template) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex flex-1 items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold">{t('error')}</h1>
            <Link href="/start">
              <AnimatedButton variant="primary">
                {t('back')}
              </AnimatedButton>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const handleGenerateWithAI = async () => {
    console.log('Generate AI clicked, content length:', content.length)
    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content,
          language,
          templateType: template.titleKey,
        }),
      })

      console.log('Response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('API error:', errorData)
        throw new Error(errorData.error || 'Generation failed')
      }

      const data = await response.json()
      console.log('Response data keys:', Object.keys(data))
      console.log('Response data.content type:', typeof data.content, 'length:', data.content?.length)
      console.log('Response data.message:', data.message)
      
      if (data.content) {
        console.log('Setting content, before length:', content.length, 'after length:', data.content.length)
        setContent(data.content)
        console.log('Content state updated')
      } else {
        console.warn('No content in response')
      }
      
      if (data.message) {
        toast.warning(data.message)
      } else {
        toast.success(language === 'ru' ? 'Документ улучшен!' : language === 'kz' ? 'Құжат жақсартылды!' : 'Document enhanced!')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error('Generation error:', errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSave = () => {
    if (!projectName.trim()) {
      toast.error(language === 'ru' ? 'Введите название проекта' : language === 'kz' ? 'Жоба атауын енгізіңіз' : 'Enter project name')
      return
    }

    if (currentProjectId) {
      updateProject(currentProjectId, {
        name: projectName,
        content,
      })
      toast.success(language === 'ru' ? 'Сохранено!' : language === 'kz' ? 'Сақталды!' : 'Saved!')
    } else {
      const newProject = saveProject({
        name: projectName,
        templateId,
        content,
        format,
        language,
      })
      setCurrentProjectId(newProject.id)
      toast.success(language === 'ru' ? 'Проект сохранён!' : language === 'kz' ? 'Жоба сақталды!' : 'Project saved!')
    }
    setIsSaved(true)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link href="/start">
                <AnimatedButton variant="ghost" size="sm">
                  <ArrowLeft className="size-4" />
                  {t('back')}
                </AnimatedButton>
              </Link>
              <div>
                <h1 className="text-xl font-semibold">{t('documentEditor')}</h1>
                <p className="text-sm text-muted-foreground">{t('editContent')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <AnimatedButton
                variant="outline"
                size="sm"
                onClick={handleGenerateWithAI}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Sparkles className="size-4" />
                )}
                {isGenerating ? t('generating') : t('generateWithAI')}
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                size="sm"
                onClick={handleSave}
              >
                <Save className="size-4" />
                {t('saveProject')}
              </AnimatedButton>
              <AnimatedButton
                variant="primary"
                size="sm"
                onClick={() => setShowExport(true)}
              >
                <Download className="size-4" />
                {t('exportDocument')}
              </AnimatedButton>
            </div>
          </div>

          {/* Project name input */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">
              {t('projectName')}
            </label>
            <Input
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value)
                setIsSaved(false)
              }}
              placeholder={t('projectNamePlaceholder')}
              className="max-w-md"
            />
          </div>

          {isGenerating && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg z-50">
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <p className="text-sm font-medium text-muted-foreground">{language === 'ru' ? 'Думаю...' : language === 'kz' ? 'Ойлап барамын...' : 'Thinking...'}</p>
              </div>
            </div>
          )}
          <div className="relative">
            <DocumentEditor
              content={content}
              onChange={(newContent) => {
                setContent(newContent)
                setIsSaved(false)
              }}
            />
          </div>
        </div>
      </main>

      {showExport && (
        <ExportDialog
          content={content}
          projectName={projectName}
          format={format}
          onClose={() => setShowExport(false)}
        />
      )}
    </div>
  )
}

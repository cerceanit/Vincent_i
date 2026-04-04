'use client'

import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { templates, type TemplateCategory } from '@/lib/templates'
import { TemplateCard } from './template-card'
import { TemplatePreview } from './template-preview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, Briefcase, Building2 } from 'lucide-react'

interface TemplateListProps {
  format: 'docx' | 'pdf'
  recommended?: string[]
}

const categoryIcons = {
  personal: User,
  business: Briefcase,
  government: Building2,
}

export function TemplateList({ format, recommended }: TemplateListProps) {
  const { t, language } = useLanguage()
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null)

  const categories: { id: TemplateCategory; labelKey: string }[] = [
    { id: 'personal', labelKey: 'personalDocs' },
    { id: 'business', labelKey: 'businessDocs' },
    { id: 'government', labelKey: 'governmentDocs' },
  ]

  // If we have recommended templates, show those first
  const recommendedTemplates = recommended 
    ? templates.filter(t => recommended.includes(t.id))
    : []

  return (
    <div>
      <h1 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        {recommended ? t('recommendedTemplates') : t('selectTemplate')}
      </h1>
      {recommended && (
        <p className="mb-8 text-center text-muted-foreground">
          {t('basedOnAnswers')}
        </p>
      )}

      {recommendedTemplates.length > 0 && (
        <div className="mb-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                format={format}
                language={language}
                onPreview={() => setPreviewTemplate(template.id)}
                isRecommended
              />
            ))}
          </div>
        </div>
      )}

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3 bg-secondary/50">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id]
            return (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{t(category.labelKey as any)}</span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {templates
                .filter((t) => t.category === category.id)
                .map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    format={format}
                    language={language}
                    onPreview={() => setPreviewTemplate(template.id)}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {previewTemplate && (
        <TemplatePreview
          templateId={previewTemplate}
          format={format}
          language={language}
          onClose={() => setPreviewTemplate(null)}
        />
      )}
    </div>
  )
}

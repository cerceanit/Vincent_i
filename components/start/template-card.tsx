'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import { Eye, ArrowRight, Star } from 'lucide-react'
import type { DocumentTemplate } from '@/lib/templates'
import type { Language } from '@/lib/i18n'

interface TemplateCardProps {
  template: DocumentTemplate
  format: 'docx' | 'pdf'
  language: Language
  onPreview: () => void
  isRecommended?: boolean
}

export function TemplateCard({ 
  template, 
  format, 
  language, 
  onPreview,
  isRecommended 
}: TemplateCardProps) {
  const { t } = useLanguage()

  // Get first few lines as preview
  const contentPreview = template.content[language]
    .split('\n')
    .slice(0, 4)
    .join('\n')
    .substring(0, 150) + '...'

  return (
    <div className="glow-card group relative flex flex-col rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-border hover:bg-card/80">
      {isRecommended && (
        <Badge className="absolute -top-2 right-3 gap-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
          <Star className="size-3" />
          Recommended
        </Badge>
      )}
      
      <div className="mb-3 flex items-start justify-between">
        <h3 className="font-semibold leading-tight">
          {t(template.titleKey as any)}
        </h3>
        <Badge variant="outline" className="ml-2 shrink-0 text-xs">
          {format.toUpperCase()}
        </Badge>
      </div>
      
      <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
        {t(template.descKey as any)}
      </p>

      {/* Content preview */}
      <div className="mb-4 flex-1 rounded-lg bg-secondary/50 p-3">
        <pre className="font-mono text-xs leading-relaxed text-muted-foreground line-clamp-4 whitespace-pre-wrap">
          {contentPreview}
        </pre>
      </div>

      <div className="flex gap-2">
        <AnimatedButton
          variant="ghost"
          size="sm"
          onClick={onPreview}
          className="flex-1"
        >
          <Eye className="size-4" />
          {t('templatePreview')}
        </AnimatedButton>
        <Link href={`/editor/${template.id}?format=${format}`} className="flex-1">
          <AnimatedButton variant="default" size="sm" className="w-full">
            {t('useTemplate')}
            <ArrowRight className="size-4" />
          </AnimatedButton>
        </Link>
      </div>
    </div>
  )
}

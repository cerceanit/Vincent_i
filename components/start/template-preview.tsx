'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { getTemplateById } from '@/lib/templates'
import { AnimatedButton } from '@/components/ui/animated-button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowRight, X } from 'lucide-react'
import type { Language } from '@/lib/i18n'

interface TemplatePreviewProps {
  templateId: string
  format: 'docx' | 'pdf'
  language: Language
  onClose: () => void
}

export function TemplatePreview({ templateId, format, language, onClose }: TemplatePreviewProps) {
  const { t } = useLanguage()
  const template = getTemplateById(templateId)

  if (!template) return null

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{t(template.titleKey as any)}</span>
            <AnimatedButton variant="ghost" size="icon" onClick={onClose}>
              <X className="size-4" />
            </AnimatedButton>
          </DialogTitle>
          <DialogDescription className="sr-only">
            {language === 'ru' ? 'Предварительный просмотр шаблона документа' : language === 'kz' ? 'Құжат үлгісін алдын ала қарау' : 'Preview of the document template'}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="rounded-lg bg-secondary/30 p-6">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground">
              {template.content[language]}
            </pre>
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-3 pt-4">
          <AnimatedButton variant="outline" onClick={onClose}>
            {t('cancel')}
          </AnimatedButton>
          <Link href={`/editor/${templateId}?format=${format}`}>
            <AnimatedButton variant="primary">
              {t('useTemplate')}
              <ArrowRight className="size-4" />
            </AnimatedButton>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

'use client'

import { useLanguage } from '@/hooks/use-language'
import { FileText, FileImage } from 'lucide-react'

interface FormatSelectorProps {
  onSelect: (format: 'docx' | 'pdf') => void
}

export function FormatSelector({ onSelect }: FormatSelectorProps) {
  const { t } = useLanguage()

  const formats = [
    {
      id: 'docx' as const,
      icon: FileText,
      title: t('formatDocx'),
      description: t('formatDocxDesc'),
    },
    {
      id: 'pdf' as const,
      icon: FileImage,
      title: t('formatPdf'),
      description: t('formatPdfDesc'),
    },
  ]

  return (
    <div className="text-center">
      <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {t('selectFormat')}
      </h1>
      <p className="mb-12 text-muted-foreground">
        {t('startWritingDesc')}
      </p>

      <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
        {formats.map((format) => {
          const Icon = format.icon
          return (
            <button
              key={format.id}
              onClick={() => onSelect(format.id)}
              className="group glow-card flex flex-col items-center rounded-xl border border-border/50 bg-card p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:border-border hover:bg-card/80 hover:shadow-lg"
            >
              <div className="mb-4 flex size-16 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-foreground/10">
                <Icon className="size-8 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{format.title}</h3>
              <p className="text-sm text-muted-foreground">{format.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

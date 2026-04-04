'use client'

import { useLanguage } from '@/hooks/use-language'
import { FileText } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-foreground">
              <FileText className="size-3 text-background" />
            </div>
            <span className="font-medium">{t('brand')}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('footerText')}
          </p>
        </div>
      </div>
    </footer>
  )
}

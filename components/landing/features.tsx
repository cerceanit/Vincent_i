'use client'

import { useLanguage } from '@/hooks/use-language'
import { Shield, Sparkles, FileOutput, FolderOpen } from 'lucide-react'

const featureIcons = [Shield, Sparkles, FileOutput, FolderOpen]

export function Features() {
  const { t } = useLanguage()

  const features = [
    { titleKey: 'feature1Title', descKey: 'feature1Desc' },
    { titleKey: 'feature2Title', descKey: 'feature2Desc' },
    { titleKey: 'feature3Title', descKey: 'feature3Desc' },
    { titleKey: 'feature4Title', descKey: 'feature4Desc' },
  ] as const

  return (
    <section className="relative border-t border-border/50 bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {t('featuresTitle')}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <div
                key={feature.titleKey}
                className="glow-card group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:bg-card/80"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-foreground/10">
                  <Icon className="size-6 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <h3 className="mb-2 font-semibold">{t(feature.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(feature.descKey)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { AnimatedButton } from '@/components/ui/animated-button'
import { PenLine, HelpCircle, ArrowRight } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Background grid */}
      <div className="bg-grid pointer-events-none absolute inset-0" />
      
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[128px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 size-96 translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/10 blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
          <span className="size-2 rounded-full bg-green-500" />
          <span className="text-muted-foreground">egov.kz</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t('heroTitle')}{' '}
          <span className="text-gradient">{t('heroTitleGradient')}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          {t('heroSubtitle')}
        </p>

        {/* Two pathway buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/start">
            <AnimatedButton variant="primary" size="xl" className="group w-full sm:w-auto">
              <PenLine className="size-5" />
              {t('startWriting')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
          </Link>
          
          <Link href="/help">
            <AnimatedButton variant="outline" size="xl" className="group w-full sm:w-auto">
              <HelpCircle className="size-5" />
              {t('needHelp')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
          </Link>
        </div>

        {/* Pathway descriptions */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:justify-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{t('startWriting')}:</span>{' '}
            {t('startWritingDesc')}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{t('needHelp')}:</span>{' '}
            {t('needHelpDesc')}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-border/50 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

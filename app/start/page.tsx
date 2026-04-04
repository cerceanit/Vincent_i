'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { Header } from '@/components/landing/header'
import { FormatSelector } from '@/components/start/format-selector'
import { TemplateList } from '@/components/start/template-list'
import { AnimatedButton } from '@/components/ui/animated-button'
import { ArrowLeft } from 'lucide-react'

type Step = 'format' | 'template'

export default function StartPage() {
  const { t } = useLanguage()
  const [step, setStep] = useState<Step>('format')
  const [selectedFormat, setSelectedFormat] = useState<'docx' | 'pdf'>('docx')

  const handleFormatSelect = (format: 'docx' | 'pdf') => {
    setSelectedFormat(format)
    setStep('template')
  }

  const handleBack = () => {
    if (step === 'template') {
      setStep('format')
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Back button */}
          {step === 'template' && (
            <AnimatedButton
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="mb-6"
            >
              <ArrowLeft className="size-4" />
              {t('back')}
            </AnimatedButton>
          )}

          {step === 'format' ? (
            <>
              <Link href="/" className="mb-6 inline-block">
                <AnimatedButton variant="ghost" size="sm">
                  <ArrowLeft className="size-4" />
                  {t('back')}
                </AnimatedButton>
              </Link>
              <FormatSelector onSelect={handleFormatSelect} />
            </>
          ) : (
            <TemplateList format={selectedFormat} />
          )}
        </div>
      </main>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { Header } from '@/components/landing/header'
import { SurveyWizard } from '@/components/help/survey-wizard'
import { TemplateList } from '@/components/start/template-list'
import { AnimatedButton } from '@/components/ui/animated-button'
import { ArrowLeft } from 'lucide-react'

export default function HelpPage() {
  const { t } = useLanguage()
  const [surveyComplete, setSurveyComplete] = useState(false)
  const [recommendedTemplates, setRecommendedTemplates] = useState<string[]>([])
  const [selectedFormat, setSelectedFormat] = useState<'docx' | 'pdf'>('docx')

  const handleSurveyComplete = (templates: string[], format: 'docx' | 'pdf') => {
    setRecommendedTemplates(templates)
    setSelectedFormat(format)
    setSurveyComplete(true)
  }

  const handleBack = () => {
    setSurveyComplete(false)
    setRecommendedTemplates([])
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {surveyComplete ? (
            <>
              <AnimatedButton
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="mb-6"
              >
                <ArrowLeft className="size-4" />
                {t('back')}
              </AnimatedButton>
              <TemplateList 
                format={selectedFormat} 
                recommended={recommendedTemplates}
              />
            </>
          ) : (
            <>
              <Link href="/" className="mb-6 inline-block">
                <AnimatedButton variant="ghost" size="sm">
                  <ArrowLeft className="size-4" />
                  {t('back')}
                </AnimatedButton>
              </Link>
              <SurveyWizard onComplete={handleSurveyComplete} />
            </>
          )}
        </div>
      </main>
    </div>
  )
}

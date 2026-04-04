'use client'

import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'

interface SurveyWizardProps {
  onComplete: (recommendedTemplates: string[], format: 'docx' | 'pdf') => void
}

interface SurveyAnswers {
  situation: string | null
  action: string | null
  recipient: string | null
  urgent: boolean | null
  details: string
}

export function SurveyWizard({ onComplete }: SurveyWizardProps) {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<SurveyAnswers>({
    situation: null,
    action: null,
    recipient: null,
    urgent: null,
    details: '',
  })

  const questions = [
    {
      id: 'situation',
      question: t('q1'),
      options: [
        { value: 'personal', label: t('q1a1') },
        { value: 'business', label: t('q1a2') },
        { value: 'legal', label: t('q1a3') },
      ],
    },
    {
      id: 'action',
      question: t('q2'),
      options: [
        { value: 'apply', label: t('q2a1') },
        { value: 'complain', label: t('q2a2') },
        { value: 'authorize', label: t('q2a3') },
        { value: 'confirm', label: t('q2a4') },
      ],
    },
    {
      id: 'recipient',
      question: t('q3'),
      options: [
        { value: 'government', label: t('q3a1') },
        { value: 'company', label: t('q3a2') },
        { value: 'individual', label: t('q3a3') },
      ],
    },
    {
      id: 'urgent',
      question: t('q4'),
      options: [
        { value: 'yes', label: t('q4a1') },
        { value: 'no', label: t('q4a2') },
      ],
    },
    {
      id: 'details',
      question: t('q5'),
      isTextarea: true,
    },
  ]

  const totalSteps = questions.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleOptionSelect = (value: string) => {
    const questionId = questions[currentStep].id
    if (questionId === 'urgent') {
      setAnswers({ ...answers, urgent: value === 'yes' })
    } else {
      setAnswers({ ...answers, [questionId]: value })
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate recommendations based on answers
      const recommendations = getRecommendations(answers)
      onComplete(recommendations, 'docx')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    const questionId = questions[currentStep].id
    if (questionId === 'details') return true // Optional
    if (questionId === 'urgent') return answers.urgent !== null
    return answers[questionId as keyof SurveyAnswers] !== null
  }

  const currentQuestion = questions[currentStep]
  const currentAnswer = currentQuestion.id === 'urgent' 
    ? (answers.urgent !== null ? (answers.urgent ? 'yes' : 'no') : null)
    : answers[currentQuestion.id as keyof SurveyAnswers]

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {t('surveyTitle')}
        </h1>
        <p className="text-muted-foreground">
          {t('surveySubtitle')}
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm text-muted-foreground">
          <span>{currentStep + 1} / {totalSteps}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="glow-card rounded-xl border border-border/50 bg-card p-8">
        <h2 className="mb-6 text-xl font-semibold">
          {currentQuestion.question}
        </h2>

        {currentQuestion.isTextarea ? (
          <Textarea
            value={answers.details}
            onChange={(e) => setAnswers({ ...answers, details: e.target.value })}
            placeholder={t('q5Placeholder')}
            className="min-h-[120px] resize-none"
          />
        ) : (
          <div className="grid gap-3">
            {currentQuestion.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className={`flex items-center justify-between rounded-lg border p-4 text-left transition-all duration-200 hover:scale-[1.01] ${
                  currentAnswer === option.value
                    ? 'border-foreground bg-foreground/5'
                    : 'border-border/50 hover:border-border hover:bg-card/80'
                }`}
              >
                <span>{option.label}</span>
                {currentAnswer === option.value && (
                  <CheckCircle2 className="size-5 text-foreground" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <AnimatedButton
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="size-4" />
          {t('back')}
        </AnimatedButton>

        <div className="flex gap-3">
          {currentQuestion.isTextarea && (
            <AnimatedButton
              variant="outline"
              onClick={handleNext}
            >
              {t('skip')}
            </AnimatedButton>
          )}
          <AnimatedButton
            variant="primary"
            onClick={handleNext}
            disabled={!canProceed() && !currentQuestion.isTextarea}
          >
            {currentStep === totalSteps - 1 ? t('getRecommendations') : t('next')}
            <ArrowRight className="size-4" />
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}

// Helper function to get recommended templates based on survey answers
function getRecommendations(answers: SurveyAnswers): string[] {
  const recommendations: string[] = []

  // Logic based on answers
  if (answers.action === 'complain') {
    recommendations.push('complaint')
    if (answers.recipient === 'government') {
      recommendations.push('citizen-appeal')
    }
  }

  if (answers.action === 'authorize') {
    recommendations.push('power-of-attorney')
  }

  if (answers.action === 'apply') {
    if (answers.recipient === 'government') {
      recommendations.push('gov-application', 'info-request')
    } else if (answers.recipient === 'company') {
      recommendations.push('leave-request', 'business-letter')
    }
  }

  if (answers.action === 'confirm') {
    recommendations.push('receipt', 'acceptance-cert')
  }

  if (answers.situation === 'business') {
    if (!recommendations.includes('business-letter')) {
      recommendations.push('business-letter')
    }
    recommendations.push('commercial-offer', 'internal-memo')
  }

  if (answers.recipient === 'government' && !recommendations.includes('gov-application')) {
    recommendations.push('gov-application')
  }

  // Ensure we have at least 3 recommendations
  const fallbacks = ['leave-request', 'business-letter', 'gov-application', 'complaint', 'receipt']
  for (const fallback of fallbacks) {
    if (recommendations.length >= 3) break
    if (!recommendations.includes(fallback)) {
      recommendations.push(fallback)
    }
  }

  return recommendations.slice(0, 5)
}

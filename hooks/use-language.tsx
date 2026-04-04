'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Language, translations, type TranslationKey } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru')

  useEffect(() => {
    const saved = localStorage.getItem('vincent_language') as Language | null
    if (saved && ['en', 'ru', 'kz'].includes(saved)) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('vincent_language', lang)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

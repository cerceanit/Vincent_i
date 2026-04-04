'use client'

import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { AnimatedButton } from '@/components/ui/animated-button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, FileText, Globe } from 'lucide-react'
import type { Language } from '@/lib/i18n'

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'ru', label: 'Русский', flag: 'RU' },
  { code: 'kz', label: 'Қазақша', flag: 'KZ' },
  { code: 'en', label: 'English', flag: 'EN' },
]

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const currentLang = languages.find(l => l.code === language) || languages[0]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex size-8 items-center justify-center rounded-lg bg-foreground">
            <FileText className="size-4 text-background" />
          </div>
          <span className="text-lg font-semibold">{t('brand')}</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/dashboard">
            <AnimatedButton variant="ghost" size="sm">
              {t('dashboard')}
            </AnimatedButton>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <AnimatedButton variant="outline" size="sm" className="gap-2">
                <Globe className="size-4" />
                <span>{currentLang.flag}</span>
                <ChevronDown className="size-3 opacity-50" />
              </AnimatedButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[140px]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? 'bg-accent' : ''}
                >
                  <span className="mr-2 font-mono text-xs">{lang.flag}</span>
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

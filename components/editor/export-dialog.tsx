'use client'

import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { AnimatedButton } from '@/components/ui/animated-button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { FileText, FileImage, Download, Loader2, X } from 'lucide-react'
import { toast } from 'sonner'
import { exportToPdf } from '@/lib/exportPdf'

interface ExportDialogProps {
  content: string
  projectName: string
  format: 'docx' | 'pdf'
  onClose: () => void
}

export function ExportDialog({ content, projectName, format, onClose }: ExportDialogProps) {
  const { t, language } = useLanguage()
  const [isExporting, setIsExporting] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState<'docx' | 'pdf'>(format)

  const handleExport = async () => {
    setIsExporting(true)
    try {
      if (selectedFormat === 'pdf') {
        // PDF генерируется на фронте
        await exportToPdf(content, projectName || 'document')
        toast.success(language === 'ru' ? 'Документ скачан!' : language === 'kz' ? 'Құжат жүктелді!' : 'Document downloaded!')
        onClose()
      } else if (selectedFormat === 'docx') {
        // DOCX генерируется на сервере (для правильного форматирования)
        const response = await fetch('/api/export', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content,
            filename: projectName || 'document',
            format: selectedFormat,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Export failed')
        }

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${projectName || 'document'}.${selectedFormat}`
        a.style.display = 'none'
        document.body.appendChild(a)
        setTimeout(() => {
          a.click()
          setTimeout(() => {
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
          }, 100)
        }, 0)

        toast.success(language === 'ru' ? 'Документ скачан!' : language === 'kz' ? 'Құжат жүктелді!' : 'Document downloaded!')
        onClose()
      }
    } catch (error) {
      console.error('Export error:', error)
      toast.error(error instanceof Error ? error.message : t('error'))
    } finally {
      setIsExporting(false)
    }
  }

  const formats = [
    { id: 'docx' as const, icon: FileText, label: t('formatDocx') },
    { id: 'pdf' as const, icon: FileImage, label: t('formatPdf') },
  ]

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{t('exportDocument')}</span>
            <AnimatedButton variant="ghost" size="icon" onClick={onClose}>
              <X className="size-4" />
            </AnimatedButton>
          </DialogTitle>
          <DialogDescription className="sr-only">
            {language === 'ru' ? 'Выберите формат для экспорта документа' : language === 'kz' ? 'Құжатты экспорттау форматын таңдаңыз' : 'Choose a format to export your document'}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          {formats.map((fmt) => {
            const Icon = fmt.icon
            return (
              <button
                key={fmt.id}
                onClick={() => setSelectedFormat(fmt.id)}
                className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-all duration-200 hover:scale-[1.01] ${
                  selectedFormat === fmt.id
                    ? 'border-foreground bg-foreground/5'
                    : 'border-border/50 hover:border-border hover:bg-card/80'
                }`}
              >
                <Icon className="size-5 text-muted-foreground" />
                <span>{fmt.label}</span>
              </button>
            )
          })}
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <AnimatedButton variant="outline" onClick={onClose}>
            {t('cancel')}
          </AnimatedButton>
          <AnimatedButton
            variant="primary"
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Download className="size-4" />
            )}
            {isExporting ? t('loading') : t('download')}
          </AnimatedButton>
        </div>
      </DialogContent>
    </Dialog>
  )
}

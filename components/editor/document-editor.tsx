'use client'

import { Textarea } from '@/components/ui/textarea'

interface DocumentEditorProps {
  content: string
  onChange: (content: string) => void
}

export function DocumentEditor({ content, onChange }: DocumentEditorProps) {
  return (
    <div className="glow-card rounded-xl border border-border/50 bg-card">
      <div className="border-b border-border/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/70" />
          <div className="size-3 rounded-full bg-yellow-500/70" />
          <div className="size-3 rounded-full bg-green-500/70" />
          <span className="ml-4 font-mono text-xs text-muted-foreground">document.txt</span>
        </div>
      </div>
      <Textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[500px] resize-none rounded-none border-0 bg-transparent p-6 font-mono text-sm leading-relaxed focus-visible:ring-0"
        placeholder="Start typing your document..."
      />
    </div>
  )
}

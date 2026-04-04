'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transform hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          'bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/20',
        primary:
          'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30',
        outline:
          'border border-border bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/30 hover:shadow-md',
        ghost:
          'text-foreground hover:bg-foreground/10',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md',
        glass:
          'bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20 hover:shadow-lg',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-14 px-8 text-base',
        xl: 'h-16 px-10 text-lg',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(animatedButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
AnimatedButton.displayName = 'AnimatedButton'

export { AnimatedButton, animatedButtonVariants }
